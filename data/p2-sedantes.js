registrarTema({
  id: 'p2-sedantes',
  ficha: {
    fuente: 'Katzung, Farmacología básica y clínica, 15.ª ed., cap. 22 «Fármacos sedantes-hipnóticos» (fuente: libro). Copia en fuentes\\libros\\katzung15.pdf.',
    diapositivas: 'Dr. Zabala: «Farmacología Sedantes e Hipnóticos - Dr. Zabala.pdf» = **1 sola página, un mapa conceptual vectorial** (el texto está convertido a trazos): no se puede extraer texto ni hacer OCR sin renderizarlo a gran tamaño. No se leyó. Páginas citadas = PDF katzung15.pdf págs. 614-638: mecanismo 623-625, efectos 626-628, clínica 628-632, toxicidad 632-633, resumen 634-635.',
    examenes: '2.º parcial: 🔥 (ver tema anterior de P2; benzodiacepinas/flumazenil suelen salir).',
    avisos: [
      '⚠ **Fuente: libro, NO la diapositiva (mapa) de Zabala.** Si el Dr. Zabala enfatizó otra clasificación (p. ej. por vida media), contrasta con el mapa: ábrelo en el visor y amplía.',
      '⚠ Katzung (EE. UU.) lista fármacos que quizá no haya en Bolivia (estazolam, quazepam, halazepam…).',
      '⚠ = dato que NO viene del libro (conocimiento general). Verifícalo antes de memorizarlo.'
    ]
  },

  diapositiva: [
    { titulo: 'Clasificación y fármacos (PDF 614-616, 634-635)', puntos: [
      '**Benzodiacepinas** (1,4-benzodiacepinas; necesitan un halógeno o nitro en posición 7): alprazolam, clonazepam, clorazepato (profármaco → **desmetildiazepam**), clordiazepóxido, **diazepam**, estazolam, flurazepam, **lorazepam**, **midazolam**, oxazepam, quazepam, temazepam, **triazolam** (triazolam y alprazolam llevan un anillo de triazol).',
      '**Barbitúricos:** amobarbital, butabarbital, **fenobarbital**, mefobarbital, pentobarbital, secobarbital; **tiopental y metohexital** (anestesia IV).',
      '**Hipnóticos nuevos («Z»):** **zolpidem, zaleplón, eszopiclona** (no benzodiacepinas, actúan en el sitio BZ).',
      '**Agonistas de melatonina:** ramelteón, tasimelteón. **Antagonista de orexina:** suvorexant. **Agonista 5-HT:** **buspirona**. Antiguos: hidrato de cloral, meprobamato (carbamato).',
      '**Antagonista de benzodiacepina:** **flumazenil**.'
    ]},
    { titulo: 'Mecanismo: receptor GABA-A (PDF 623-625)', puntos: [
      'GABA-A = **canal de cloruro pentamérico** (subunidades α, β, γ…). Isoforma principal: **2 α1 + 2 β2 + 1 γ2**; GABA se une entre **α y β**; el sitio **BZ** está entre **α y γ**. Barbitúricos: **sitio distinto**.',
      '**Benzodiacepinas:** modulador alostérico **positivo**: ↑ la **frecuencia** de apertura del canal de Cl⁻ cuando hay GABA (no lo abren por sí solas) → hiperpolarización.',
      '**Barbitúricos:** ↑ la **duración** de la apertura; a dosis altas **abren el canal directamente** (GABA-miméticos) y además **bloquean AMPA (glutamato)** → menos selectivos, **más depresión, margen de seguridad bajo, pueden dar anestesia**.',
      '**Zolpidem, zaleplón, eszopiclona:** se unen **selectivamente a isoformas con α1** → hipnosis sin mucho efecto ansiolítico/anticonvulsivo/relajante. Casi no actúan en GABA-B (baclofeno).',
      '**Flumazenil:** antagonista **competitivo** del sitio BZ; bloquea benzodiacepinas y Z-fármacos, **no** etanol, opioides ni anestésicos generales.'
    ]},
    { titulo: 'Efectos (PDF 626-628)', puntos: [
      '**Sedación y ansiolisis** (con desinhibición: euforia, pérdida de autocontrol) y **amnesia anterógrada** dependiente de dosis.',
      '**Sueño:** ↓ latencia, ↑ etapa 2 NREM, **↓ REM y ↓ sueño de ondas lentas**; **rebote REM** al suspender (sobre todo de acción corta, dosis altas: triazolam). Zolpidem ↓ REM pero casi no toca ondas lentas; zaleplón: poco efecto sobre REM; eszopiclona ↑ tiempo total de sueño.',
      '**Anestesia:** barbitúricos muy liposolubles (**tiopental, metohexital**) → inducción; el despertar corto se debe a **redistribución**, no a eliminación. Midazolam, diazepam, lorazepam IV como coadyuvantes.',
      '**Anticonvulsivo:** clonazepam, nitrazepam, lorazepam, diazepam; fenobarbital (no 1.ª línea). **Z-fármacos: sin acción anticonvulsiva.**',
      '**Relajación muscular:** carbamatos y benzodiacepinas (diazepam en espasticidad central); **no** con Z-fármacos.',
      '**Respiración/CV:** en sanos, similar al sueño natural; **depresión respiratoria significativa en EPOC** y sobre todo IV; la depresión del centro respiratorio es la causa habitual de muerte por sobredosis.',
      '**Tolerancia** (cruzada con etanol), **dependencia física** y psicológica; abstinencia = ansiedad, insomnio, **convulsiones**. Peor con vida media corta y dosis altas; las de acción larga hacen su propia «retirada gradual».'
    ]},
    { titulo: 'Usos clínicos y dosis (PDF 628-632)', puntos: [
      '**Usos (cuadro 22-2):** ansiedad, insomnio, **sedación/amnesia en procedimientos**, epilepsia y estados convulsivos, **anestesia balanceada (IV)**, **abstinencia de etanol u otros sedantes**, relajación muscular, psiquiatría (manía inicial, intoxicación por fenciclidina).',
      '**Ansiedad:** benzodiacepinas = rápidas y de **índice terapéutico alto** (+ flumazenil), pocas interacciones por inducción enzimática, poco efecto CV. **Alprazolam**: pánico y agorafobia. **Primera elección en trastorno de ansiedad generalizada: SSRI/SNRI** (inicio lento, sin utilidad en ansiedad aguda). Limitar a **< 2 meses**.',
      '**Insomnio:** medidas no farmacológicas primero; fármaco por **7-10 días**; si no mejora, buscar enfermedad primaria. **Zolpidem, zaleplón y eszopiclona** pocos cambios en el sueño y poca amnesia/resaca; **zaleplón** (vida media corta) para el despertar precoz. Sedación diurna mayor con benzodiacepinas de eliminación lenta o metabolitos activos (**lorazepam, quazepam**).',
      '**Suvorexant:** bloquea orexina A/B (péptidos que mantienen la vigilia); efecto: **somnolencia al día siguiente**; metabolismo CYP inhibido por fluconazol, verapamilo, toronja. **Ramelteón:** MT1/MT2 en el núcleo supraquiasmático, sin abstinencia ni rebote, **no es sustancia controlada**; metabolito activo por **CYP1A2** (fluvoxamina inhibe).',
      '**Buspirona:** agonista parcial 5-HT1A (⚠ el libro dice «5-HT»), inicio lento (**1-2 semanas**), **sin depresión aditiva con sedantes ni dependencia**; para ansiedad generalizada.',
      '**Abstinencia/delirium tremens:** fármacos de acción larga (**clordiazepóxido, diazepam, fenobarbital**) en dosis decrecientes; **lorazepam parenteral** para delirium tremens.',
      '**Procedimientos (endoscopia, broncoscopia):** formulaciones orales de acción corta.'
    ]},
    { titulo: 'Toxicidad (PDF 632-633)', puntos: [
      'Depresión del SNC dosis-dependiente: somnolencia, alteración del juicio, **conducción dormido/sonambulismo** (advertencia FDA 2007); **amnesia anterógrada** («cita de violación»); resaca con vida media larga. **Ancianos: la mitad de dosis**; el uso excesivo de sedantes es **la causa reversible más frecuente de confusión en ancianos**.',
      '**Más sensibles:** enfermedad cardiovascular, respiratoria, hepática y ancianos; apnea del sueño.',
      '**Sobredosis:** benzodiacepinas = curvas dosis-respuesta **planas** (0,3 muertes por millón de tabletas de diazepam vs 11,6 por millón de cápsulas de secobarbital). Alprazolam supuestamente más tóxico. Letal casi siempre por **polifarmacia/etanol**. Tratamiento: vía aérea, ventilación, volumen, soporte CV (dopamina), ± hemodiálisis/hemoperfusión.',
      '**Flumazenil:** t½ 0,7-1,3 h → **la sedación reaparece** (se repite); antagoniza poco la depresión respiratoria; puede **precipitar abstinencia grave** en dependientes y **convulsiones/arritmias** si hubo **antidepresivos tricíclicos** juntos; efectos: agitación, confusión, mareo, náusea.',
      '**Embarazo:** benzodiacepinas categoría D/X (aborto, parto prematuro, bajo peso); barbitúricos D; Z-fármacos, ramelteón, suvorexant: C; **buspirona: B**.',
      '**Barbitúricos:** inducen síntesis de porfirina → **contraindicados en porfirias** (aguda intermitente, variegata, coproporfiria); **inducen enzimas hepáticas** (interacciones).',
      '**Interacciones:** depresión aditiva con alcohol, opioides, anticonvulsivos, antihistamínicos, antihipertensivos, tricíclicos y fenotiazinas.'
    ]},
    { titulo: 'Resumen farmacocinético (PDF 634-635)', puntos: [
      '**Benzodiacepinas:** vida media **2-40 h** (clorazepato más larga), activas por VO, **metabolismo hepático con metabolitos activos** en algunas. **Barbitúricos:** t½ 4-60 h (**fenobarbital la más larga**; 20 % de eliminación renal). **Z-fármacos:** vida media corta, sustratos de CYP.',
      '**Triazolam:** t½ ≈ **4 h** → ansiedad diurna/rebote. **Clorazepato:** profármaco, se convierte en **desmetildiazepam** por hidrólisis ácida gástrica.',
      '⚠ (general, no del texto leído) Lorazepam, oxazepam y temazepam: solo glucuronidación (útiles en hepatopatía/ancianos); diazepam y flurazepam: metabolitos activos de larga vida.'
    ]}
  ],

  explicacion: [
    { titulo: '1. El interruptor: GABA-A y el cloruro', p: [
      'El GABA es el freno principal del cerebro. Su receptor (GABA-A) es un **túnel de cloruro**: cuando se abre, entra Cl⁻ y la neurona se «apaga» (hiperpolarización).',
      'La **benzodiacepina** no abre el túnel: se pega entre las subunidades α y γ y hace que el GABA **abra más veces** el túnel (↑ frecuencia). Imagínate un portero al que el GABA le toca el timbre: la benzodiacepina hace que el portero **abra más rápido y más seguido**, pero solo si alguien toca.',
      'El **barbitúrico** hace distinto: **deja el túnel abierto más tiempo** (↑ duración) y, a dosis altas, **lo abre sin que nadie toque** (acción directa) y además bloquea el glutamato (AMPA). Por eso con barbitúricos puedes **anestesiar y matar** (margen estrecho); con benzodiacepinas el techo es más bajo.',
      'El **zolpidem / zaleplón / eszopiclona** usan el mismo sitio de las benzodiacepinas pero solo en receptores **α1** → dan **sueño**, casi sin relajación muscular ni efecto anticonvulsivo.'
    ], pausa: {
      q: 'Un paciente llega con sobredosis de benzodiacepinas y depresión respiratoria. ¿Flumazenil y ya?',
      a: 'No tan simple. El flumazenil dura poco (**t½ ≈ 1 h**) y la benzodiacepina dura más → **vuelve a dormirse**; además **no antagoniza bien la depresión respiratoria** y puede **precipitar abstinencia/convulsiones** (dependientes, o si tomó tricíclicos). Primero **vía aérea y ventilación**; el flumazenil es controvertido (según Katzung).'
    }},
    { titulo: '2. Efectos que debes saber', p: [
      '**Ansiolisis + sedación + amnesia anterógrada** (por eso se usan en endoscopia: coopera pero no recuerda). **Hipnosis:** ↓ latencia, ↑ etapa 2, ↓ REM y ondas lentas; al suspender, **rebote REM**.',
      '**Anticonvulsivo y relajante muscular:** sí para benzodiacepinas (diazepam, lorazepam, clonazepam); **no** para los «Z».',
      '**Tolerancia, dependencia y abstinencia** (ansiedad, insomnio, **convulsiones**). Las de **vida media corta** dan abstinencia más dura; las largas (diazepam, clordiazepóxido) se usan **justo para tratar la abstinencia de alcohol**.',
      '**Depresión respiratoria** sobre todo en EPOC, IV o mezclada con alcohol u opioides.'
    ]},
    { titulo: '3. Usos: qué fármaco para qué', p: [
      '**Ansiedad aguda / pánico:** benzodiacepinas (**alprazolam** en pánico). **Ansiedad crónica (GAD):** SSRI/SNRI primero; **buspirona** (sin dependencia, tarda 1-2 semanas).',
      '**Insomnio:** zolpidem / zaleplón / eszopiclona o benzodiacepinas de corta duración; **≤ 7-10 días**. **Zaleplón** para el que se despierta temprano. **Suvorexant** (anti-orexina); **ramelteón** (melatonina, sin dependencia).',
      '**Anestesia:** tiopental (barbitúrico ultracorto: se redistribuye), midazolam. **Epilepsia:** fenobarbital, diazepam/lorazepam IV en estatus.',
      '**Abstinencia alcohólica:** clordiazepóxido/diazepam; delirium tremens: lorazepam parenteral.'
    ], pausa: {
      q: '¿Por qué un anciano con confusión nueva debe hacerte pensar en sedantes?',
      a: 'Porque el exceso de sedantes-hipnóticos es la **causa reversible más frecuente de confusión en ancianos**; además son más sensibles (usa **la mitad de la dosis**).'
    }},
    { titulo: '4. Barbitúricos: lo que los hace peligrosos', p: [
      '**Inducen enzimas hepáticas** (interacciones), **contraindicados en porfiria**, **dependencia mayor que benzodiacepinas**, **curva dosis-respuesta empinada** (una dosis 10 veces la hipnótica puede matar).',
      'Fenobarbital: el más largo (t½ de ~días ⚠ no en el texto leído); 20 % de eliminación renal.'
    ]}
  ],

  memoria: {
    columnas: ['Grupo / fármaco', 'Mecanismo', 'Usos', 'Efectos adversos', 'Ojo con…'],
    filas: [
      ['Benzodiacepinas (diazepam, lorazepam, alprazolam, midazolam…)', '↑ **frecuencia** de apertura del canal de Cl⁻ (GABA-A, sitio BZ α/γ)', 'Ansiedad aguda, pánico, insomnio, convulsiones, premedicación, abstinencia alcohólica, espasticidad', 'Sedación, amnesia anterógrada, depresión respiratoria, dependencia', 'Flumazenil revierte; sobredosis rara sin alcohol/opioides'],
      ['Alprazolam / triazolam', 'Idem', 'Pánico y agorafobia / insomnio', 'Alprazolam: más tóxico en sobredosis; triazolam: t½ 4 h, rebote y desinhibición', 'Anillo de triazol'],
      ['Clonazepam, nitrazepam, lorazepam, diazepam', 'Idem', 'Anticonvulsivantes', 'Idem', 'Lorazepam IV: delirium tremens'],
      ['Flumazenil', 'Antagonista competitivo BZ', 'Sobredosis de benzodiacepinas / reversión', 'Agitación, abstinencia, convulsiones con tricíclicos', 'Dura poco: se repite; no revierte etanol ni opioides'],
      ['Barbitúricos (fenobarbital, tiopental, secobarbital…)', '↑ **duración** de apertura; a dosis altas abren Cl⁻ directo y bloquean AMPA', 'Anestesia (tiopental), epilepsia (fenobarbital), insomnio', 'Depresión grave, dependencia, **inducción enzimática**', '**Porfiria = contraindicación**; margen bajo'],
      ['Zolpidem, zaleplón, eszopiclona', 'Agonistas selectivos de GABA-A con **α1**', 'Insomnio (inicio rápido)', 'Sonambulismo, amnesia, tolerancia leve', 'Sin acción anticonvulsiva ni relajante'],
      ['Ramelteón / tasimelteón', 'Agonistas MT1/MT2 (núcleo supraquiasmático)', 'Insomnio de inicio; no 24 h (tasimelteón)', 'Mareo, fatiga', 'No controlado; fluvoxamina ↑ niveles'],
      ['Suvorexant', 'Antagonista de orexina', 'Insomnio (inicio y mantenimiento)', 'Somnolencia al día siguiente', 'Sustrato CYP3A4 (fluconazol, verapamilo, toronja ↑)'],
      ['Buspirona', 'Agonista parcial 5-HT1A (⚠)', 'Ansiedad generalizada', 'Taquicardia, parestesias, GI', 'Tarda 1-2 semanas; sin dependencia; categoría B']
    ],
    notas: ['Benzo = frecuencia ↑; barbitúrico = duración ↑ (y directo en dosis altas). «Z» = α1: solo sueño.', '⚠ Fuente: libro; no se pudo leer el mapa de Zabala.']
  },

  preguntan: [
    { tipo: 'Mecanismo de benzodiacepinas vs barbitúricos',
      texto: '⚠ No se buscó en OCR de exámenes para este tema (tiempo): tipo de pregunta esperable «¿cuál aumenta la frecuencia/duración de apertura del canal de Cl⁻?».',
      trampa: 'Benzodiacepinas = frecuencia; barbitúricos = duración.' },
    { tipo: 'Antagonista y reversión',
      texto: '⚠ Esperable: «antagonista de las benzodiacepinas: flumazenil».',
      trampa: 'No revierte etanol ni opioides; naloxona es para opioides.' }
  ],

  consejo: [
    '🧠 **Benzo = más veces; barbitúrico = más tiempo.** Z = solo α1 (solo sueño).',
    '🧠 **Alcohol/abstinencia → diazepam o clordiazepóxido; delirium → lorazepam.**',
    '🧠 **Ancianos y sedantes = confusión.** Mitad de dosis.',
    '🧠 **Flumazenil dura poco y puede dar convulsiones.** Buspirona = sin dependencia pero tarda.'
  ]
});
