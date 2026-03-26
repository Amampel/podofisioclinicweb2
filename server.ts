import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isProd = process.env.NODE_ENV === 'production';
const root = process.cwd();

async function createServer() {
  const app = express();
  const port = process.env.PORT || 3000;

  let vite: any;
  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(root, 'dist/client'), { index: false }));
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template: string;
      let render: any;

      if (!isProd) {
        template = fs.readFileSync(path.resolve(root, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        template = fs.readFileSync(path.resolve(root, 'dist/client/index.html'), 'utf-8');
        const renderPath = path.resolve(root, 'dist/server/entry-server.js');
        render = (await import(renderPath)).render;
      }

      const { html: appHtml, head: headHtml } = await render(url);

      const html = template
        .replace(/<!--head-outlet-->/, headHtml)
        .replace(/<!--ssr-outlet-->/, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (!isProd) vite.ssrFixStacktrace(e as Error);
      console.error(e);
      res.status(500).end(isProd ? 'Internal Server Error' : (e as Error).stack);
    }
  });

  if (!isProd) {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  }
  
  return app;
}

export default createServer();
