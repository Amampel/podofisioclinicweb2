export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats: ServiceStat[];
  overview: string;
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  conditions: string[];
  faq: ServiceFaq[];
  keywords: string[];
  metaDescription: string;
  relatedServices: string[];
}

export const services: ServiceData[] = [
  {
    slug: 'ecografia-clinica',
    number: '01',
    category: 'Diagnóstico de Precisión',
    title: 'Ecografía Clínica',
    subtitle: 'Visualización en tiempo real para un diagnóstico certero y sin radiación.',
    description:
      'La ecografía musculoesquelética de alta resolución nos permite visualizar tendones, ligamentos, músculos y estructuras del pie y tobillo en tiempo real, ofreciendo un diagnóstico preciso en la misma consulta.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: 'Alta resolución', label: 'Imagen diagnóstica' },
      { value: 'Sin radiación', label: 'Seguro al 100%' },
      { value: 'Mismo día', label: 'Diagnóstico inmediato' },
      { value: '+2.000/año', label: 'Ecografías realizadas' },
    ],
    overview:
      'La ecografía clínica musculoesquelética es una de las herramientas diagnósticas más potentes con las que cuenta nuestro equipo en Podofisio Clinic Terrassa. A diferencia de la radiografía convencional, la ecografía permite visualizar tejidos blandos —tendones, ligamentos, músculos, bursas y nervios— con una resolución milimétrica y en tiempo real, sin exponer al paciente a ningún tipo de radiación ionizante. Esta tecnología nos permite confirmar o descartar patologías de forma inmediata durante la primera visita, evitando esperas innecesarias y orientando el tratamiento desde el primer momento. Además, la exploración dinámica —es decir, observar la estructura mientras el paciente la mueve— añade una dimensión diagnóstica imposible de obtener con la resonancia magnética estática. En Terrassa, ofrecemos este servicio integrado en la consulta podológica y fisioterapéutica, lo que nos convierte en un referente regional en diagnóstico clínico avanzado del pie y tobillo.',
    benefits: [
      {
        title: 'Diagnóstico en tiempo real',
        description:
          'La imagen se genera de forma instantánea mientras el profesional explora la zona, permitiendo observar el comportamiento dinámico de tendones y ligamentos durante el movimiento.',
      },
      {
        title: 'Guía de tratamientos invasivos',
        description:
          'La ecografía permite guiar con precisión milimétrica procedimientos como la EPI/EPTE, infiltraciones o punciones, minimizando el riesgo y maximizando la eficacia.',
      },
      {
        title: 'Sin radiación ionizante',
        description:
          'Es una técnica completamente segura, sin contraindicaciones por exposición a radiación. Puede repetirse tantas veces como sea necesario sin riesgo para el paciente.',
      },
      {
        title: 'Resultado inmediato en consulta',
        description:
          'No hay que esperar días o semanas por un informe externo. El diagnóstico se obtiene y se comparte con el paciente en la misma sesión, acelerando el inicio del tratamiento.',
      },
      {
        title: 'Comparación bilateral',
        description:
          'Permite comparar la estructura sana con la afectada en el mismo momento, lo que aporta un contexto diagnóstico muy valioso para detectar asimetrías y degeneraciones.',
      },
      {
        title: 'Detecta lo que el ojo clínico no ve',
        description:
          'Pequeñas roturas parciales, neuromas incipientes o bursas inflamadas son invisibles en la exploración manual pero claramente visibles con ecografía de alta resolución.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Anamnesis clínica',
        description:
          'Recogemos tu historial médico, antecedentes, tipo de actividad física y descripción detallada del dolor o molestia para orientar la exploración.',
      },
      {
        step: '02',
        title: 'Exploración física',
        description:
          'Realizamos una valoración manual y funcional de la zona afectada para identificar los tejidos que requieren evaluación ecográfica.',
      },
      {
        step: '03',
        title: 'Ecografía diagnóstica',
        description:
          'Aplicamos el transductor de alta frecuencia sobre la zona y exploramos todas las estructuras relevantes, tanto en reposo como en movimiento.',
      },
      {
        step: '04',
        title: 'Informe clínico',
        description:
          'Elaboramos un informe con las imágenes más representativas y los hallazgos diagnósticos, que el paciente recibe en formato digital.',
      },
      {
        step: '05',
        title: 'Plan terapéutico',
        description:
          'Con el diagnóstico confirmado, diseñamos un plan de tratamiento personalizado y explicamos al paciente cada paso del proceso de recuperación.',
      },
    ],
    conditions: [
      'Fascitis Plantar',
      'Tendinopatía de Aquiles',
      'Neuroma de Morton',
      'Bursitis',
      'Roturas musculares',
      'Lesiones ligamentosas',
      'Espolón Calcáneo',
      'Síndrome del túnel tarsiano',
    ],
    faq: [
      {
        question: '¿Qué es la ecografía musculoesquelética?',
        answer:
          'Es una técnica de imagen que utiliza ultrasonidos de alta frecuencia para visualizar en tiempo real los tejidos blandos del aparato locomotor: tendones, ligamentos, músculos, nervios y bursas. En podología y fisioterapia es especialmente útil para diagnosticar lesiones del pie y tobillo con una precisión que no ofrece ninguna otra prueba de imagen de bajo coste.',
      },
      {
        question: '¿Duele la exploración ecográfica?',
        answer:
          'No. La ecografía es completamente indolora. El profesional aplica un gel conductor frío sobre la piel y desliza el transductor por la zona a explorar. En ocasiones puede realizar una leve presión sobre la zona dolorosa para correlacionar la imagen con los síntomas, pero el procedimiento no genera ningún dolor adicional.',
      },
      {
        question: '¿Cuánto tiempo dura la exploración?',
        answer:
          'Una exploración ecográfica estándar en nuestro centro dura entre 20 y 40 minutos, incluyendo la anamnesis previa, la exploración propiamente dicha y la elaboración del informe diagnóstico. En casos complejos que requieran comparación bilateral o exploración de múltiples zonas, puede extenderse algo más.',
      },
      {
        question: '¿Qué diferencia hay con la radiografía?',
        answer:
          'La radiografía muestra únicamente estructuras óseas y no visualiza tejidos blandos como tendones o ligamentos. La ecografía, en cambio, es ideal precisamente para esos tejidos. Además, la radiografía utiliza radiación ionizante y la ecografía es totalmente segura. Ambas pruebas son complementarias y en algunos casos las usamos conjuntamente para obtener el diagnóstico más completo.',
      },
    ],
    keywords: [
      'ecografía podológica Terrassa',
      'ecografía musculoesquelética Terrassa',
      'diagnóstico pie Terrassa',
      'ecografía tendón Aquiles',
      'fascitis plantar diagnóstico',
      'podólogo Terrassa',
    ],
    metaDescription:
      'Ecografía clínica musculoesquelética en Terrassa. Diagnóstico preciso de lesiones de pie y tobillo en la misma visita, sin radiación y con informe inmediato. Podofisio Clinic.',
    relatedServices: ['epi-epte-guiada', 'biomecanica-digital', 'radiofrecuencia-indiba'],
  },

  {
    slug: 'epi-epte-guiada',
    number: '02',
    category: 'Tratamiento Regenerativo',
    title: 'EPI / EPTE Guiada',
    subtitle: 'Electrólisis percutánea ecoguiada para eliminar el tejido degenerado sin cirugía.',
    description:
      'La EPI (Electrólisis Percutánea Intratisular) y la EPTE son técnicas mínimamente invasivas que, guiadas por ecografía, aplican una microco­rriente galvánica directamente sobre el tejido tendinoso degenerado para estimular su regeneración.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: '3–6 sesiones', label: 'Protocolo habitual' },
      { value: '>90% eficacia', label: 'En tendinopatías crónicas' },
      { value: 'Ecoguiada', label: 'Precisión milimétrica' },
      { value: 'Sin cirugía', label: 'Mínimamente invasiva' },
    ],
    overview:
      'La EPI (Electrólisis Percutánea Intratisular) es una técnica revolucionaria desarrollada en España que combina la precisión de la ecografía diagnóstica con la aplicación de una microcorriente galvánica directamente sobre el tejido tendinoso o fascial degenerado. A diferencia de los tratamientos convencionales que tratan el dolor pero no la causa, la EPI actúa sobre el tejido patológico generando una respuesta inflamatoria controlada que destruye el tejido degenerado y activa los procesos naturales de regeneración. En Podofisio Clinic Terrassa aplicamos tanto EPI como EPTE (Electrólisis Percutánea Terapéutica de Ecografía), siempre guiadas por imagen ecográfica en tiempo real para garantizar que la aguja alcanza exactamente el tejido a tratar. Esta combinación de diagnóstico y tratamiento en la misma sesión nos permite ofrecer resultados que ningún tratamiento conservador puede igualar en tendinopatías crónicas resistentes.',
    benefits: [
      {
        title: 'Actúa sobre el tejido degenerado',
        description:
          'La microcorriente galvánica destruye selectivamente el tejido tendinoso o fascial degenerado que el organismo es incapaz de reparar por sí solo, eliminando la causa raíz del dolor crónico.',
      },
      {
        title: 'Guiada por ecografía',
        description:
          'La inserción de la aguja y la aplicación de la corriente se realizan bajo control ecográfico en tiempo real, garantizando que el tratamiento llega exactamente donde debe y minimizando cualquier riesgo.',
      },
      {
        title: 'Mínimamente invasiva',
        description:
          'Solo se requiere una aguja fina de acupuntura, sin incisiones, sin puntos de sutura y con un tiempo de recuperación mínimo. El paciente puede retomar su actividad habitual en 24-48 horas.',
      },
      {
        title: 'Estimula la síntesis de colágeno',
        description:
          'La respuesta biológica generada por la electrólisis activa fibroblastos y células madre tendinosas, produciendo colágeno tipo I de alta calidad que restaura la integridad estructural del tendón.',
      },
      {
        title: 'Alta eficacia en tendinopatías crónicas',
        description:
          'Estudios clínicos avalan tasas de éxito superiores al 90% en tendinopatías de Aquiles, fascitis plantar crónica y epicondilitis que no han respondido a otros tratamientos conservadores.',
      },
      {
        title: 'Pocos tratamientos necesarios',
        description:
          'El protocolo habitual oscila entre 3 y 6 sesiones, espaciadas semanalmente. Esto contrasta con otras terapias que requieren meses de aplicación continuada para obtener resultados similares.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Diagnóstico ecográfico',
        description:
          'Realizamos una ecografía de alta resolución para cuantificar el grado de degeneración del tejido y planificar la intervención con máxima precisión.',
      },
      {
        step: '02',
        title: 'Localización del tejido patológico',
        description:
          'Identificamos en tiempo real la zona exacta de degeneración tendinosa, midiendo su extensión y definiendo los puntos de entrada óptimos para la aguja.',
      },
      {
        step: '03',
        title: 'Inserción guiada por ecografía',
        description:
          'Introducimos la aguja bajo visión ecográfica directa hasta colocarla con precisión milimétrica en el interior del tejido degenerado.',
      },
      {
        step: '04',
        title: 'Aplicación de la EPI / EPTE',
        description:
          'Aplicamos la microcorriente galvánica en el protocolo y la intensidad adecuados para cada tejido y grado de degeneración, generando la respuesta inflamatoria terapéutica.',
      },
      {
        step: '05',
        title: 'Protocolo de carga progresiva',
        description:
          'Diseñamos un programa de ejercicio excéntrico y progresión de carga adaptado al tendón tratado para consolidar los beneficios de la regeneración tisular.',
      },
    ],
    conditions: [
      'Tendinopatía de Aquiles',
      'Fascitis Plantar crónica',
      'Epicondilitis',
      'Tendinopatía Rotuliana',
      'Síndrome del Manguito Rotador',
      'Tendinopatía del Tibial Posterior',
      'Bursitis crónica',
    ],
    faq: [
      {
        question: '¿Qué es exactamente la EPI?',
        answer:
          'La EPI (Electrólisis Percutánea Intratisular) es una técnica de fisioterapia invasiva desarrollada por el Dr. José Manuel Sánchez Ibáñez que consiste en introducir una aguja de acupuntura en el tejido degenerado y aplicar una microcorriente galvánica a través de ella. Esta corriente genera una respuesta química local que destruye el tejido patológico y desencadena los mecanismos naturales de reparación tisular. La EPTE es una variante de esta técnica con un dispositivo específicamente diseñado para ello.',
      },
      {
        question: '¿Duele el tratamiento?',
        answer:
          'La sensación durante la aplicación varía según el paciente y la zona tratada. La inserción de la aguja provoca una molestia mínima similar a una punción de acupuntura. Durante la aplicación de la corriente pueden sentirse contracciones musculares involuntarias y una sensación de presión interna que desaparece al finalizar. Tras el tratamiento, es normal una molestia similar a una agujeta que dura 24-48 horas: es la señal de que el proceso de regeneración se ha activado.',
      },
      {
        question: '¿Cuántas sesiones son necesarias?',
        answer:
          'El protocolo estándar es de 3 a 6 sesiones, realizadas una vez por semana. La mayoría de los pacientes perciben una mejora significativa tras la segunda o tercera sesión. En tendinopatías muy crónicas o con alta degeneración puede ser necesario extender el tratamiento a 8 sesiones. El número definitivo se determina tras la valoración ecográfica inicial y se revisa con cada sesión.',
      },
      {
        question: '¿Qué diferencia hay con los corticoides?',
        answer:
          'Los corticoides son potentes antiinflamatorios que reducen el dolor rápidamente, pero no reparan el tejido dañado y a largo plazo pueden debilitar la estructura del tendón aumentando el riesgo de rotura. La EPI/EPTE, en cambio, actúa directamente sobre la causa del problema: destruye el tejido degenerado y estimula su regeneración. Sus efectos son duraderos y mejoran la estructura del tejido en lugar de enmascarar el dolor.',
      },
    ],
    keywords: [
      'EPI Terrassa',
      'EPTE Terrassa',
      'electrólisis percutánea Terrassa',
      'tendinopatía Aquiles Terrassa',
      'fascitis plantar tratamiento Terrassa',
      'fisioterapia invasiva Terrassa',
    ],
    metaDescription:
      'EPI y EPTE guiada por ecografía en Terrassa. Electrólisis percutánea para tendinopatías crónicas con más del 90% de eficacia. Sin cirugía. Podofisio Clinic.',
    relatedServices: ['ecografia-clinica', 'radiofrecuencia-indiba', 'biomecanica-digital'],
  },

  {
    slug: 'radiofrecuencia-indiba',
    number: '03',
    category: 'Fisioterapia Avanzada',
    title: 'Radiofrecuencia Indiba',
    subtitle: 'Calor terapéutico profundo a 448 kHz para acelerar la recuperación y eliminar el dolor.',
    description:
      'La radiofrecuencia capacitiva-resistiva Indiba activa el metabolismo celular en tejidos profundos mediante calor endógeno, acelerando la recuperación de lesiones músculo-esqueléticas y reduciendo el dolor de forma duradera.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: '448 kHz', label: 'Frecuencia terapéutica' },
      { value: 'Profundo', label: 'Acción en tejido profundo' },
      { value: 'Sin dolor', label: 'Sesión confortable' },
      { value: 'Acelerada', label: 'Recuperación más rápida' },
    ],
    overview:
      'Indiba es la tecnología de radiofrecuencia capacitiva-resistiva (TECAR) más avanzada del mercado, operando a la frecuencia exclusiva de 448 kHz, que ha demostrado ser la óptima para la regeneración celular y tisular. A diferencia de otras terapias físicas que actúan superficialmente, Indiba penetra hasta los tejidos más profundos —articulaciones, tendones, fascias y musculatura profunda— generando un calor endógeno que activa el metabolismo celular, aumenta la circulación local y estimula los procesos naturales de reparación. En Podofisio Clinic Terrassa utilizamos Indiba tanto en modo CAP (capacitivo, para tejidos más superficiales como músculos y fascias) como en modo RES (resistivo, para estructuras profundas como articulaciones y tendones). Esta versatilidad nos permite tratar eficazmente desde contracturas musculares agudas hasta artrosis crónica, siempre con sesiones confortables e indoloras que los pacientes describen como un agradable masaje en calor.',
    benefits: [
      {
        title: 'Calor profundo en tejidos diana',
        description:
          'La frecuencia de 448 kHz permite alcanzar estructuras profundas que ninguna otra terapia física convencional puede tratar, generando un calor endógeno uniforme en toda la masa tisular.',
      },
      {
        title: 'Activa fibroblastos y regeneración',
        description:
          'El calor endógeno activa fibroblastos y aumenta la síntesis de colágeno, acelerando la reparación de tendones, ligamentos y fascias dañadas a un ritmo muy superior al natural.',
      },
      {
        title: 'Potente efecto antiinflamatorio',
        description:
          'Indiba reduce la concentración de mediadores inflamatorios locales y modula la respuesta inmunitaria en la zona tratada, aliviando el dolor y la inflamación crónica desde las primeras sesiones.',
      },
      {
        title: 'Reduce el edema y el hematoma',
        description:
          'El efecto vasodilatador y el estímulo del drenaje linfático que provoca Indiba aceleran la reabsorción de edemas y hematomas posttraumáticos, reduciendo el tiempo de recuperación.',
      },
      {
        title: 'Relajación muscular profunda',
        description:
          'El calor profundo provoca una relajación de la musculatura intrínseca y extrínseca del pie que ningún masaje superficial puede igualar, siendo especialmente útil en contracturas crónicas.',
      },
      {
        title: 'Seguro para todas las edades',
        description:
          'Al no utilizar radiación ionizante ni corrientes de alta intensidad, Indiba es completamente segura para pacientes de cualquier edad, incluyendo deportistas de élite, personas mayores y pacientes con patología crónica.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Evaluación inicial',
        description:
          'Valoramos la patología, el grado de inflamación o degeneración y el objetivo terapéutico para definir el modo de aplicación, la intensidad y el número de sesiones más adecuados.',
      },
      {
        step: '02',
        title: 'Aplicación CAP (capacitivo)',
        description:
          'Iniciamos con el modo capacitivo, especialmente eficaz sobre tejidos blandos superficiales como músculos, fascias y tejido cicatricial, generando calor suave y uniforme.',
      },
      {
        step: '03',
        title: 'Aplicación RES (resistivo)',
        description:
          'Complementamos con el modo resistivo para penetrar hasta estructuras profundas como articulaciones y tendones, donde el calor endógeno es más intenso y la acción regenerativa mayor.',
      },
      {
        step: '04',
        title: 'Combinación con ejercicio',
        description:
          'En muchos protocolos, aprovechamos el estado de activación tisular que genera Indiba para realizar ejercicio terapéutico simultáneo, multiplicando el efecto regenerativo.',
      },
      {
        step: '05',
        title: 'Seguimiento y ajuste',
        description:
          'Evaluamos la respuesta al tratamiento en cada sesión y ajustamos los parámetros para optimizar los resultados, adaptando el protocolo a la evolución de cada paciente.',
      },
    ],
    conditions: [
      'Fascitis Plantar',
      'Tendinopatía de Aquiles',
      'Esguince de Tobillo',
      'Contracturas musculares',
      'Artrosis',
      'Dolor lumbar',
      'Fibromialgia',
      'Roturas fibrilares',
    ],
    faq: [
      {
        question: '¿Qué es exactamente Indiba?',
        answer:
          'Indiba es una marca española que desarrolla tecnología de radiofrecuencia capacitiva-resistiva a la frecuencia de 448 kHz. Esta frecuencia específica ha sido patentada y validada científicamente como la más eficaz para la regeneración celular. El dispositivo genera un campo electromagnético que produce calor endógeno —es decir, el propio tejido genera el calor desde dentro— a diferencia de los ultrasonidos o el láser, que actúan desde el exterior.',
      },
      {
        question: '¿Cuántas sesiones necesito?',
        answer:
          'El número de sesiones depende de la patología y su cronicidad. Las lesiones agudas pueden resolverse en 3-5 sesiones, mientras que las patologías crónicas o degenerativas suelen requerir entre 8 y 12 sesiones. En deportistas en activo, a menudo utilizamos Indiba como complemento de otros tratamientos para acelerar la recuperación entre competiciones. Tras la valoración inicial te indicaremos el protocolo más apropiado para tu caso.',
      },
      {
        question: '¿Es compatible con otros tratamientos?',
        answer:
          'Sí, de hecho Indiba obtiene sus mejores resultados cuando se combina con otras terapias. En nuestro centro la combinamos habitualmente con EPI/EPTE, ejercicio terapéutico, vendaje neuromuscular y, en casos seleccionados, con ecografía guiada. La sinergia entre Indiba y el ejercicio es especialmente potente, ya que el estado de activación celular que genera la radiofrecuencia potencia los efectos del entrenamiento sobre el tejido.',
      },
      {
        question: '¿Quién puede recibir Indiba?',
        answer:
          'Indiba está contraindicada en embarazadas, pacientes con marcapasos o implantes metálicos activos en la zona de tratamiento, y en procesos oncológicos activos. Fuera de estas contraindicaciones, es una terapia segura para la inmensa mayoría de los pacientes, incluyendo niños, personas mayores, deportistas y pacientes con patología sistémica. En caso de duda, nuestro equipo valorará individualmente si es la terapia más adecuada para ti.',
      },
    ],
    keywords: [
      'radiofrecuencia Terrassa',
      'Indiba Terrassa',
      'TECAR Terrassa',
      'fisioterapia Terrassa',
      'dolor pie Terrassa',
      'tendinopatía tratamiento Terrassa',
    ],
    metaDescription:
      'Radiofrecuencia Indiba en Terrassa. Terapia TECAR a 448 kHz para lesiones musculoesqueléticas, tendinopatías y dolor crónico. Recuperación acelerada. Podofisio Clinic.',
    relatedServices: ['epi-epte-guiada', 'ecografia-clinica', 'plantillas-3d-elite'],
  },

  {
    slug: 'biomecanica-digital',
    number: '04',
    category: 'Análisis Biomecánico',
    title: 'Biomecánica Digital',
    subtitle: 'Análisis computerizado de la marcha y la pisada para encontrar la causa de tu dolor.',
    description:
      'Nuestro estudio biomecánico digital combina baropodometría dinámica, análisis 3D de la marcha y exploración podológica completa para identificar las alteraciones que generan dolor y lesiones recurrentes.',
    image:
      'https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: 'Análisis 3D', label: 'Marcha y pisada' },
      { value: 'Baropodometría', label: 'Plataforma de presiones' },
      { value: 'Informe', label: 'Detallado y personalizado' },
      { value: 'Plantillas', label: 'Incluidas en el estudio' },
    ],
    overview:
      'El estudio biomecánico digital es la base de cualquier tratamiento podológico eficaz. Sin conocer cómo pisa una persona, cómo se distribuyen las presiones en su pie y cómo se desarrolla su marcha, cualquier tratamiento es una apuesta a ciegas. En Podofisio Clinic Terrassa disponemos de la tecnología más avanzada en análisis biomecánico: plataformas de presiones baropodométricas de alta resolución, análisis computerizado de la marcha en 3D y sistemas de escáner del pie que permiten diseñar plantillas de precisión milimétrica. El resultado es un informe completo y comprensible que identifica con datos objetivos cuáles son las alteraciones biomecánicas responsables del dolor o las lesiones del paciente, y qué correcciones son necesarias. Este estudio es la base imprescindible para la prescripción de plantillas personalizadas, pero también aporta información crucial para el diseño de programas de ejercicio y para orientar otros tratamientos como la EPI o la ecografía.',
    benefits: [
      {
        title: 'Análisis computerizado de presiones',
        description:
          'La plataforma baropodométrica registra con precisión milisegundo a milisegundo cómo se distribuyen las presiones en toda la superficie plantar durante la marcha, detectando sobrecargas y desequilibrios invisibles a simple vista.',
      },
      {
        title: 'Detecta desequilibrios ocultos',
        description:
          'Muchas lesiones recurrentes tienen su origen en alteraciones biomecánicas sutiles que ninguna exploración manual puede detectar. El análisis digital objetiva y cuantifica esos desequilibrios con datos precisos.',
      },
      {
        title: 'Análisis específico para el deporte',
        description:
          'Para deportistas, realizamos el análisis con el calzado deportivo habitual y a la velocidad específica de su disciplina, identificando las alteraciones que aparecen solo bajo carga o a alta velocidad.',
      },
      {
        title: 'Prevención de lesiones',
        description:
          'El estudio biomecánico no solo diagnostica patologías existentes: permite detectar factores de riesgo antes de que generen una lesión, siendo especialmente valioso en deportistas o personas con alta demanda física.',
      },
      {
        title: 'Plantillas basadas en datos reales',
        description:
          'A diferencia de las plantillas de farmacia o las genéricas, las que prescribimos tras el estudio están diseñadas a partir de los datos objetivos de tu pisada, corrigiendo exactamente las desviaciones detectadas.',
      },
      {
        title: 'Informe biomecánico completo',
        description:
          'El paciente recibe un informe detallado con imágenes, gráficos de presiones, ángulos articulares y recomendaciones terapéuticas, que también puede compartir con otros especialistas de su equipo médico.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Anamnesis biomecánica',
        description:
          'Recogemos información sobre actividad física, calzado habitual, tipo de suelo en el que se trabaja o entrena, y descripción detallada de los síntomas para orientar el análisis.',
      },
      {
        step: '02',
        title: 'Análisis estático del pie',
        description:
          'Examinamos la morfología del pie en carga y descarga, la alineación de tobillos, rodillas y caderas, y la flexibilidad de las estructuras articulares y musculares.',
      },
      {
        step: '03',
        title: 'Baropodometría dinámica',
        description:
          'El paciente camina sobre la plataforma de presiones varias veces mientras el sistema registra la distribución de presiones, los tiempos de apoyo y los centros de presión en cada fase de la marcha.',
      },
      {
        step: '04',
        title: 'Análisis de la marcha',
        description:
          'Complementamos el análisis baropodométrico con la observación y el registro computerizado de la marcha para evaluar el patrón de movimiento global y las compensaciones del aparato locomotor.',
      },
      {
        step: '05',
        title: 'Prescripción e informe',
        description:
          'Elaboramos el informe biomecánico completo y, si procede, iniciamos el proceso de diseño y fabricación de las plantillas personalizadas basadas en los datos del análisis.',
      },
    ],
    conditions: [
      'Fascitis Plantar',
      'Metatarsalgia',
      'Hallux Valgus',
      'Rodilla de corredor',
      'Dolor lumbar postural',
      'Lesiones por sobrecarga deportiva',
      'Tendinopatía de Aquiles',
    ],
    faq: [
      {
        question: '¿Qué es un estudio biomecánico?',
        answer:
          'Es un análisis completo de cómo funciona tu aparato locomotor durante la marcha y la carrera: cómo pisas, cómo se distribuyen las presiones en tu pie, cómo se alinean tus articulaciones y qué compensaciones realiza tu cuerpo. Combina exploración clínica con tecnología de medición objetiva para identificar con datos precisos las causas mecánicas del dolor o las lesiones recurrentes.',
      },
      {
        question: '¿Cuándo necesito un estudio biomecánico?',
        answer:
          'Es recomendable si sufres dolor de pie, rodilla, cadera o lumbar de origen mecánico; si tienes lesiones deportivas recurrentes; si has sido diagnosticado de fascitis plantar, metatarsalgia, hallux valgus u otras patologías podológicas; si eres deportista y quieres mejorar tu rendimiento o prevenir lesiones; o si tu médico te ha recomendado plantillas sin hacerte previamente un análisis de la pisada.',
      },
      {
        question: '¿Cómo se diseñan las plantillas a partir del estudio?',
        answer:
          'Los datos del análisis baropodométrico se utilizan como base para diseñar una plantilla que redistribuya las presiones de manera óptima, corrigiendo las zonas de sobrecarga y apoyando las zonas deficitarias. En nuestro centro, diseñamos la plantilla digitalmente a partir del escáner 3D del pie y los mapas de presiones, y la fabricamos mediante impresión 3D con materiales de alta calidad.',
      },
      {
        question: '¿Cuánto tiempo dura el análisis?',
        answer:
          'El estudio biomecánico completo —incluyendo anamnesis, exploración estática, baropodometría dinámica, análisis de la marcha y elaboración del informe— dura aproximadamente 60-90 minutos. Te recomendamos venir con el calzado habitual y, si eres deportista, traer también tu calzado de entrenamiento para realizar el análisis con ambos.',
      },
    ],
    keywords: [
      'estudio biomecánico Terrassa',
      'baropodometría Terrassa',
      'análisis marcha Terrassa',
      'podólogo biomecánica Terrassa',
      'plantillas personalizadas Terrassa',
      'dolor pie análisis Terrassa',
    ],
    metaDescription:
      'Estudio biomecánico digital en Terrassa. Baropodometría, análisis 3D de la marcha e informe personalizado para tratar el dolor de pie, rodilla y espalda. Podofisio Clinic.',
    relatedServices: ['plantillas-3d-elite', 'ecografia-clinica', 'epi-epte-guiada'],
  },

  {
    slug: 'plantillas-3d-elite',
    number: '05',
    category: 'Ortopodología Avanzada',
    title: 'Plantillas 3D Élite',
    subtitle: 'Plantillas personalizadas fabricadas por impresión 3D a partir del escáner de tu pie.',
    description:
      'Nuestras plantillas Élite se diseñan digitalmente a partir del escáner 3D del pie y los datos de la baropodometría, y se fabrican mediante impresión aditiva con materiales de alta prestación para el deporte y el uso diario.',
    image:
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: 'Impresión 3D', label: 'Fabricación aditiva' },
      { value: 'Escáner 3D', label: 'Precisión submilimétrica' },
      { value: 'Deporte y calle', label: 'Versiones múltiples' },
      { value: 'Materiales élite', label: 'Alta prestación' },
    ],
    overview:
      'Las plantillas de farmacia o las fabricadas sobre moldes de escayola tradicionales pertenecen a otra era. En Podofisio Clinic Terrassa fabricamos plantillas mediante tecnología de impresión 3D a partir de un escáner digital tridimensional del pie del paciente y los mapas de presiones obtenidos en el estudio biomecánico. Este proceso, completamente digitalizado, elimina los errores de la fabricación manual y permite crear una plantilla que reproduce con exactitud submilimétrica la geometría del pie, colocando cada elemento corrector exactamente donde los datos indican que es necesario. Los materiales que utilizamos —termoplásticos flexibles, espumas de celda abierta y materiales compuestos de fibra de carbono para modelos deportivos— son los mismos que utilizan los equipos de atletismo y ciclismo de élite. El resultado es una plantilla ultradelgada, extremadamente precisa, duradera y cómoda, que cabe en cualquier calzado y puede fabricarse en varias versiones para distintas actividades.',
    benefits: [
      {
        title: 'Personalización tridimensional',
        description:
          'El escáner 3D captura la geometría exacta de tu pie en todas sus dimensiones, incluyendo el arco longitudinal, el arco transverso y la curvatura del talón, imposibles de replicar con técnicas tradicionales.',
      },
      {
        title: 'Precisión de fabricación aditiva',
        description:
          'La impresión 3D capa a capa permite colocar cada elemento corrector en exactamente la posición que dictan los datos de la baropodometría, sin las imprecisiones inherentes a la fabricación manual.',
      },
      {
        title: 'Ultradelgadas para cualquier calzado',
        description:
          'Gracias a los materiales de alta tecnología, podemos fabricar plantillas de muy bajo perfil que encajan en calzado de vestir, zapatillas deportivas, botas de montaña e incluso calzado de moda.',
      },
      {
        title: 'Versiones para cada actividad',
        description:
          'Diseñamos versiones específicas para running, ciclismo, fútbol, uso diario y calzado de trabajo, con materiales y geometrías optimizadas para las demandas de cada disciplina.',
      },
      {
        title: 'Autocorrección progresiva',
        description:
          'La plantilla está diseñada para estimular la musculatura intrínseca del pie y favorecer una corrección activa de la postura, no solo compensar pasivamente el defecto como hacen las plantillas convencionales.',
      },
      {
        title: 'Respaldadas por datos baropodométricos',
        description:
          'Cada plantilla se fabrica a partir de los datos reales de tu pisada, no de una valoración subjetiva. Esto garantiza que la corrección aplicada es exactamente la necesaria, ni más ni menos.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Estudio biomecánico',
        description:
          'Realizamos el análisis completo de la marcha y la baropodometría para obtener los datos objetivos que guiarán el diseño de la plantilla.',
      },
      {
        step: '02',
        title: 'Escáner 3D del pie',
        description:
          'Capturamos la geometría tridimensional del pie mediante escáner de luz estructurada, obteniendo un modelo digital con precisión submilimétrica en segundos.',
      },
      {
        step: '03',
        title: 'Diseño digital',
        description:
          'El podólogo diseña la plantilla en el software de CAD especializado, integrando el modelo 3D del pie con los mapas de presiones y las correcciones biomecánicas prescritas.',
      },
      {
        step: '04',
        title: 'Fabricación aditiva',
        description:
          'Enviamos el archivo a nuestra impresora 3D, que fabrica la plantilla capa a capa con los materiales seleccionados según el uso previsto y las necesidades del paciente.',
      },
      {
        step: '05',
        title: 'Prueba y ajuste',
        description:
          'El paciente prueba las plantillas y realizamos un control baropodométrico con ellas para verificar que las correcciones son las correctas y el confort es el esperado.',
      },
    ],
    conditions: [
      'Fascitis Plantar',
      'Metatarsalgia',
      'Hallux Valgus',
      'Espolón Calcáneo',
      'Tendinopatía de Aquiles',
      'Dolor de rodilla',
      'Dolor lumbar',
      'Pie plano / pie cavo',
    ],
    faq: [
      {
        question: '¿En qué se diferencian de las plantillas de farmacia?',
        answer:
          'Las plantillas de farmacia son genéricas: están fabricadas en tallas estándar para un pie "promedio" que no existe en la realidad. Las nuestras se fabrican a partir del escáner exacto de tu pie y los datos objetivos de tu pisada, por lo que la corrección que aplican es exactamente la que necesitas. La diferencia en términos de eficacia, confort y durabilidad es comparable a la que existe entre unas gafas genéricas de quiosco y unas gafas graduadas a medida.',
      },
      {
        question: '¿Cuánto duran las plantillas?',
        answer:
          'Las plantillas 3D Élite están diseñadas para durar entre 3 y 5 años en condiciones de uso normal (uso diario en calzado de calle). Las versiones deportivas, que soportan mayor impacto y desgaste, suelen renovarse cada 1-2 años dependiendo del volumen de entrenamiento. Recomendamos una revisión anual para comprobar que el estado de la plantilla y las necesidades biomecánicas del paciente se mantienen alineados.',
      },
      {
        question: '¿En qué calzado puedo usarlas?',
        answer:
          'Las plantillas 3D Élite están diseñadas para adaptarse al calzado habitual del paciente. Al fabricarlas, tenemos en cuenta el tipo de calzado principal en el que se usarán. Fabricamos versiones específicas para zapatillas deportivas, calzado de vestir de bajo perfil, botas de montaña, botas de fútbol o ciclismo. Si necesitas usarlas en distintos tipos de calzado, podemos fabricar varias versiones a un coste reducido.',
      },
      {
        question: '¿Cuánto cuestan?',
        answer:
          'El precio de las plantillas 3D Élite incluye el estudio biomecánico completo, el escáner 3D, el diseño digital y la fabricación. Consulta nuestras tarifas actualizadas en la sección de precios de la web o contacta con nosotros para obtener un presupuesto personalizado según tus necesidades. Ofrecemos condiciones especiales para deportistas con licencia federativa y para seguros médicos concertados.',
      },
    ],
    keywords: [
      'plantillas personalizadas Terrassa',
      'plantillas 3D Terrassa',
      'ortopodología Terrassa',
      'plantillas deportivas Terrassa',
      'podólogo plantillas Terrassa',
      'pie plano Terrassa',
    ],
    metaDescription:
      'Plantillas personalizadas 3D en Terrassa. Diseño digital a partir de escáner del pie y baropodometría. Fabricación aditiva con materiales élite para deporte y uso diario. Podofisio Clinic.',
    relatedServices: ['biomecanica-digital', 'ecografia-clinica', 'epi-epte-guiada'],
  },

  {
    slug: 'cirugia-ungueal',
    number: '06',
    category: 'Cirugía Podológica',
    title: 'Cirugía Ungueal',
    subtitle: 'Solución definitiva para la uña encarnada y las patologías ungueales sin recidivas.',
    description:
      'La cirugía ungueal ambulatoria bajo anestesia local ofrece una solución permanente a la uña encarnada y otras patologías ungueales, con una intervención de 15-20 minutos, alta el mismo día y más del 95% de éxito.',
    image:
      'https://images.unsplash.com/photo-1579154235602-3c20fa4f597e?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: 'Ambulatoria', label: 'Sin hospitalización' },
      { value: 'Local', label: 'Anestesia local' },
      { value: 'Mismo día', label: 'Alta inmediata' },
      { value: '>95%', label: 'Tasa de éxito' },
    ],
    overview:
      'La uña encarnada o onicocriptosis es una de las patologías podológicas más frecuentes y dolorosas. Cuando los tratamientos conservadores —recorte, reeducación de la uña, ortonicias— no son suficientes o la patología es recidivante, la cirugía ungueal mínimamente invasiva es la solución definitiva. En Podofisio Clinic Terrassa realizamos la matricectomía química parcial, la técnica más contrastada y con mayor tasa de éxito para el tratamiento permanente de la uña encarnada. La intervención se realiza en nuestra clínica de Terrassa en condiciones de máxima asepsia, bajo anestesia local, y el paciente recibe el alta el mismo día pudiendo desplazarse a su domicilio caminando. No es necesaria la anestesia general ni el ingreso hospitalario. En los 15-20 minutos que dura la intervención, eliminamos permanentemente la porción de uña que genera el problema y tratamos la matriz para evitar que vuelva a crecer, obteniendo una solución definitiva en más del 95% de los casos.',
    benefits: [
      {
        title: 'Solución definitiva sin recidivas',
        description:
          'La matricectomía química parcial elimina definitivamente la porción de uña problemática. Con una tasa de éxito superior al 95%, es la solución más eficaz para uñas encarnadas recidivantes que no responden al tratamiento conservador.',
      },
      {
        title: 'Cirugía ambulatoria: alta el mismo día',
        description:
          'No es necesario el ingreso hospitalario. La intervención se realiza en nuestra clínica y el paciente puede marcharse caminando al terminar, retomando su vida cotidiana con normalidad en muy poco tiempo.',
      },
      {
        title: 'Solo anestesia local',
        description:
          'No se utiliza anestesia general ni sedación. Aplicamos un anestésico local de acción rápida que bloquea completamente el dedo durante la intervención. El paciente está completamente despierto y puede hablar con el profesional durante todo el proceso.',
      },
      {
        title: 'Recuperación mínima (aprox. 2 semanas)',
        description:
          'En aproximadamente dos semanas el paciente puede retomar actividades deportivas. Durante ese tiempo, las curas son sencillas y pueden realizarse en casa siguiendo las instrucciones del profesional.',
      },
      {
        title: 'Sin puntos de sutura',
        description:
          'La técnica de matricectomía química que utilizamos no requiere puntos de sutura. La pequeña herida cicatriza por segunda intención de forma limpia y rápida, minimizando el riesgo de complicaciones.',
      },
      {
        title: 'Altísima tasa de éxito',
        description:
          'Más del 95% de los pacientes intervenidos no vuelven a experimentar episodios de uña encarnada en la zona tratada. Esta tasa de éxito contrasta con los tratamientos conservadores, que en casos recidivantes tienen una alta tasa de recurrencia.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Evaluación preoperatoria',
        description:
          'Valoramos el estado de la uña, el grado de infección periungeal y el historial de episodios anteriores para confirmar que la cirugía es la indicación más adecuada y planificar la técnica.',
      },
      {
        step: '02',
        title: 'Anestesia local',
        description:
          'Administramos anestesia local en la base del dedo mediante bloqueo digital. En pocos minutos el dedo queda completamente insensibilizado y la intervención es totalmente indolora.',
      },
      {
        step: '03',
        title: 'Intervención (15-20 minutos)',
        description:
          'Realizamos la avulsión de la porción ungueal comprometida y aplicamos el agente químico (fenol) sobre la zona de la matriz correspondiente para destruir las células que producen la porción de uña problemática.',
      },
      {
        step: '04',
        title: 'Cura postoperatoria',
        description:
          'Realizamos la primera cura en clínica y entregamos al paciente el protocolo de curas domiciliarias: sencillas, indoloras y que no requieren acudir a urgencias ni a enfermería externa.',
      },
      {
        step: '05',
        title: 'Seguimiento',
        description:
          'Realizamos revisiones periódicas hasta la cicatrización completa para verificar la evolución y resolver cualquier duda. La cicatrización total suele completarse en 4-6 semanas.',
      },
    ],
    conditions: [
      'Uñas Encarnadas (Onicocriptosis)',
      'Uñas Encarnadas recidivantes',
      'Infección periungueal',
      'Deformidades ungueales',
      'Granuloma periungueal',
    ],
    faq: [
      {
        question: '¿Duele la cirugía?',
        answer:
          'La anestesia local bloquea completamente la sensibilidad del dedo, por lo que la intervención en sí es totalmente indolora. El único momento de discomfort es la inyección del anestésico, que produce una sensación de presión y ligero escozor durante unos segundos. Una vez que el anestésico hace efecto —en 3-5 minutos— el paciente no siente absolutamente nada durante la intervención. Tras la cirugía, cuando el anestésico desaparece (al cabo de 2-4 horas), puede aparecer una molestia moderada que se controla fácilmente con analgésicos de venta libre.',
      },
      {
        question: '¿Cuánto tiempo tarda la recuperación?',
        answer:
          'El paciente puede caminar y hacer vida normal desde el primer día, aunque se recomienda usar calzado amplio y evitar el deporte de impacto durante las primeras 2 semanas. Las curas en casa son sencillas: lavar el dedo con agua y jabón y aplicar el apósito indicado, una vez al día. La zona suele estar completamente cicatrizada entre las 4 y 6 semanas postoperatorias.',
      },
      {
        question: '¿Puede volver a encarnar?',
        answer:
          'Con la técnica de matricectomía química parcial, la probabilidad de que la uña vuelva a encarnar en la zona tratada es inferior al 5%. Esta técnica destruye de forma permanente las células de la matriz que producen esa porción de uña, por lo que la uña no vuelve a crecer en ese lateral. El resultado estético es muy bueno, ya que la uña queda algo más estrecha pero con una forma natural.',
      },
      {
        question: '¿Cuándo debo acudir al podólogo por una uña encarnada?',
        answer:
          'Debes consultar lo antes posible si la uña encarnada produce dolor intenso, si hay signos de infección (enrojecimiento, calor, supuración), si ya has tenido episodios anteriores de uña encarnada en el mismo dedo, o si tienes diabetes u otra condición que comprometa la circulación o la cicatrización. No esperes a que la infección se agrave: cuanto antes se trate, más sencilla será la solución y menor el riesgo de complicaciones.',
      },
    ],
    keywords: [
      'uña encarnada Terrassa',
      'onicocriptosis Terrassa',
      'cirugía ungueal Terrassa',
      'podólogo Terrassa',
      'matricectomía Terrassa',
      'uña encarnada cirugía Terrassa',
    ],
    metaDescription:
      'Cirugía de uña encarnada en Terrassa. Matricectomía ambulatoria bajo anestesia local con más del 95% de éxito y alta el mismo día. Sin recidivas. Podofisio Clinic.',
    relatedServices: ['ecografia-clinica', 'epi-epte-guiada', 'radiofrecuencia-indiba'],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
