registrarTema({
  id: 'p1-individualizacion',
  ficha: {
    fuente: 'Individualizacion de la Farmacología - Dr Jacobs.pdf',
    diapositivas: 'págs. PDF 1-23 (diapositivas 1-137; cada pág. PDF = 6 diapositivas)',
    examenes: '1.er parcial 2018-2025: 🔥 medio (farmacogenética CYP2C19-clopidogrel, CYP2C9/VKORC1-warfarina, G6PD, NAT2; factores que modifican la respuesta; farmacoterapia individualizada)',
    avisos: [
      '⚠ El PDF tiene 6 diapositivas por página y mucho texto repetido: el contenido está completo, pero algunos gráficos (albúmina en el embarazo, cambios por edad) son imagen y no se leyeron.',
      '⚠ = dato que NO está en las diapositivas (lógica farmacológica, Katzung o un examen). Verifícalo antes de memorizarlo.',
      '⚠ La diapositiva dice «NAT1 = acetiladores rápidos, NAT2 = lentos». En la literatura el polimorfismo clásico (isoniazida) es de **NAT2**, y rápido/lento son fenotipos de NAT2. Para el examen usa lo de la diapositiva, pero conoce esta diferencia.'
    ]
  },

  diapositiva: [
    { titulo: 'Individualización de la farmacoterapia (definición y objetivo)', puntos: [
      'Principio fundamental de la práctica médica y farmacológica: **optimizar el tratamiento según las características específicas de cada paciente**.',
      'Hay que comprender cómo factores **fisiológicos, etarios, patológicos y genéticos** influyen en la respuesta a los fármacos.',
      'Objetivo: alcanzar una **concentración plasmática estable** de un medicamento **dentro de su margen terapéutico** por el tiempo necesario para producir el efecto deseado.'
    ]},
    { titulo: 'Factores generales a considerar', puntos: [
      'Cada paciente varía en absorción, distribución, metabolismo y eliminación → cambia la eficacia y la seguridad.',
      'Factores clave: peso y composición corporal · función hepática y renal · interacciones farmacológicas · estados fisiológicos especiales (embarazo, lactancia) · polimorfismo enzimático (genético) · adhesión del paciente · efecto placebo.',
      'Lista de factores: peso corporal · estados fisiológicos · edad · sexo · vía de administración · tiempo de administración · velocidad de eliminación · tolerancia · factores patológicos · factores genéticos.'
    ]},
    { titulo: 'Interacciones farmacológicas: factores que modifican los efectos de los fármacos', puntos: [
      'Físico-químicas · unión a proteínas plasmáticas · flujo sanguíneo alterado · competición con sistemas de transporte · liberación de neurotransmisor · competición por receptor · metabolismo alterado · electrolitos alterados · incompatibilidad farmacológica · efecto farmacológico similar.'
    ]},
    { titulo: 'Esquema general de variabilidad (diapositivas 7-12)', puntos: [
      '**Función orgánica y enfermedad**: hígado, renal, GI, endocrino, cardiovascular.',
      '**Paciente**: edad, sexo, embarazo, ritmo circadiano.',
      '**Ambiente / estilo de vida**: ocupación, ejercicio, dieta, cigarros, alcohol.',
      '**Enfermedad y fármacos**: infecciones, tumores, inductores e inhibidores metabólicos.',
      '**Constitución genética**.',
      '**Administración**: dosis, ruta, frecuencia, adhesión → **Concentración** (relación temporal) → **Eficacia / Efecto / Toxicidad**.',
      'Se divide en **Farmacocinética (disposición)** y **Farmacodinamia (respuesta)**; las fuentes de variación son genética, fisiopatología, constitución y ambiente (fármacos, dieta, químicos).'
    ]},
    { titulo: 'Embarazo: fisiología que afecta la farmacocinética', puntos: [
      'Seis grupos de cambios: 1) sistema cardiovascular, 2) cambios respiratorios, 3) ↓ concentración de albúmina, 4) cambios en la actividad enzimática, 5) ↑ GFR (depuración renal), 6) cambios gastrointestinales.',
      '**Cardiovascular**: expansión del volumen plasmático (empieza a las 6-8 semanas; 4700-5200 ml a las 32 semanas; **1200-1600 ml** por encima de una no embarazada) · **↑ gasto cardíaco 30-50 %** (50 % a las 8 semanas) por ↑ volumen latido (temprano) y ↑ FC (tardío) · cambios del flujo regional.',
      '**Flujo regional**: ↑ útero (**20 % del gasto cardíaco a término**), ↑ renal, ↑ piel, ↑ mama; **↓ músculo esquelético**.',
      '**Respiratorio**: alcalosis respiratoria compensada, ↓ PaCO₂, pH 7,44.',
      '**Enzimas**: relacionados con los cambios hormonales; la **N-demetilación** está **inhibida por la progesterona**, no por el estrógeno. **CYP3A4** (hidroxilación): **↑ actividad** durante el embarazo.',
      '**GI**: ↓ acidez gástrica, ↓ vaciamiento gástrico, ↑ tiempo de tránsito por efecto de la progesterona.'
    ]},
    { titulo: 'Periparto y postparto', puntos: [
      '**Periparto**: ↑ gasto cardíaco, cambios en el flujo sanguíneo, contracciones uterinas, cambios farmacodinámicos «??» (la diapositiva lo deja con signos de interrogación).',
      '**Postparto**: se mantiene ↑ gasto cardíaco, ↑ GFR, diuresis, lactancia, mayor variabilidad.'
    ]},
    { titulo: 'Teratogénesis', puntos: [
      'Principios: los teratógenos actúan con **especificidad**; muestran relación **dosis-respuesta**; deben **ingresar al feto**; los efectos dependen de la **fase de desarrollo** al exponerse (periodo de **todo o nada**); el **genotipo de la madre y del feto** afecta la susceptibilidad.',
      '**Polimorfismo genético**: ↑ riesgo fetal si la madre fuma y hay alelos atípicos para transformar factores de crecimiento; ↓ riesgo de síndrome alcohólico fetal en mujeres africanas con la isoforma 2 de la alcohol deshidrogenasa.',
      '**Mecanismos**: casi todos teóricos, mal entendidos, con componentes genéticos.',
      '**Talidomida**: causa oxidación del ADN en animales susceptibles; el pre-tratamiento con PBN (atrapa radicales libres) reduce la embriopatía → mecanismo sugerido: **daño oxidativo del ADN mediado por radicales libres**.'
    ]},
    { titulo: 'Fármacos en la leche materna', puntos: [
      'Pasan los fármacos **libres**; las concentraciones suelen ser **menores que las séricas**; el intercambio es **bidireccional**.',
      'Factores de la relación leche/plasma: unión a proteínas maternas · unión a proteínas en la leche · liposolubilidad · factores fisicoquímicos que afectan la difusión.',
      '**Contraindicados en lactancia**: antineoplásicos, supresores inmunológicos, **alcaloides de la ergotamina**, oro, yodo, **carbonato de litio**, radiofármacos, fármacos sociales y de abuso, ciertos antibióticos.',
      'Recomendaciones: los fármacos seguros en el embarazo suelen serlo en lactancia; los niveles sanguíneos del infante pueden monitorearse y deben ser **subterapéuticos**.'
    ]},
    { titulo: 'Pediatría: visión general', puntos: [
      'Los cambios en composición corporal y órganos excretores por el desarrollo alteran la concentración plasmática y en la biofase: hay que tenerlos en cuenta al calcular dosis.',
      'Resumen: **Absorción** ↑ pH gástrico en neonatos · **Distribución** mayor % de agua corporal · **Metabolismo** enzimas hepáticas inmaduras · **Eliminación** función renal inmadura.',
      'El uso en recién nacidos, infantes y niños se basa en seguridad, eficacia y datos generados en adultos; no incluye dosis específicas. Usar dosis de adulto causó tragedias, como el **síndrome del bebé azul con cloranfenicol**.'
    ]},
    { titulo: 'Pediatría: absorción', puntos: [
      'Por vía oral (la más frecuente en niños) influyen: secreción de ácido gástrico, motilidad GI, superficie de absorción, colonización bacteriana intestinal, enzimas de metabolización en intestino e hígado.',
      '**pH gástrico**: neutro al nacer, baja a 1-3 horas después, declina entre los 10 y 30 días, sin alcanzar los niveles del adulto hasta los **3 meses** → **mejor biodisponibilidad de penicilinas**.',
      '**Vaciamiento gástrico**: retrasado e irregular en el recién nacido; alcanza valores de adulto entre el mes **6 y 8**.',
      '**Motilidad intestinal**: irregular, depende del patrón alimenticio; ↓ motilidad puede retrasar la absorción y dar concentraciones plasmáticas bajas, pero no afecta la biodisponibilidad de la mayoría de fármacos.',
      'El tránsito GI puede estar ↑ en niños. La superficie de absorción en relación con la superficie corporal es **mayor** en infantes y niños. Las enzimas pancreáticas están ↓ en el RN pero no hay mala absorción ni efecto en la absorción de fármacos. El intestino del RN se coloniza días después del nacimiento y la flora cambia en el primer año.'
    ]},
    { titulo: 'Pediatría: distribución', puntos: [
      'Factores: propiedades fisicoquímicas, gasto cardíaco, flujo regional, grado de asociación a proteínas y tejidos, composición corporal (agua extracelular y grasa).',
      'Albúmina sérica y proteínas totales **↓ después del nacimiento y en la infancia**; llegan a niveles de adulto al **año de edad**. ↓ unión a proteínas → ↑ fármaco libre (mejor entrega a tejidos); también influye en interpretar concentraciones plasmáticas y rangos terapéuticos definidos en adultos.',
      'Tabla (RN vs niño, comparado con adulto): proteína total menos / igual · albúmina menos / igual · α1-glucoproteína ácida menos / igual · **albúmina fetal presente / ausente** · globulina menos / igual.',
      'El agua total es mayor en niños; predomina agua extracelular → **mayor Vd de fármacos hidrosolubles** en RN e infantes. Los **liposolubles** también tienen mayor Vd en infantes por la mayor proporción de grasa corporal.'
    ]},
    { titulo: 'Pediatría: metabolismo y excreción renal', puntos: [
      'Capacidad hepática **baja al nacer**; el desarrollo de las vías metabólicas es variable y puede influirlo la exposición a fármacos en el útero y en el posnatal.',
      'Conjugación con **glucurónido baja al nacer**, con **sulfato normal**. **Oxidación reducida** en el neonato; en la infancia **sobrepasa** la del adulto. **Glucuronidación** reducida, alcanza niveles de adulto a los **3 años**.',
      '**Renal**: en RN la función es limitada (riñones inmaduros). Flujo renal **40 ml/min/kg** en RN (**16 % del gasto cardíaco**), normal al año (20-25 %). **FG en RN a término 5-10 ml/min/m²**, se duplica a la semana de vida al ↓ la resistencia vascular renal. Secreción tubular alterada al nacer, normal al año.',
      'Depuración renal retrasada en RN e infantes → hay que **↓ la dosis**; tras 8-12 meses es comparable a la del niño y mayor que en el adulto (tamaño renal / superficie corporal).',
      'Ejemplo: en niños la dosis de **aminoglucósidos** puede ser **1,5 a 2 veces** la del adulto por la mayor depuración, con intervalo **q 6 h y no q 8 h**.'
    ]},
    { titulo: 'Geriatría: generalidades', puntos: [
      'Resumen: **Absorción** levemente afectada · **Distribución** ↑ grasa corporal, ↓ agua corporal · **Metabolismo** fase I ↓, fase II intacta · **Eliminación** función renal ↓.',
      '**Adulto mayor**: persona de **65 años o más**. Esperanza de vida en Bolivia: **69 años**. **12 %** de la población boliviana tiene ≥ 65 años; **90 %** usa más de 1-2 medicamentos.',
      'Problemática desde tres perspectivas que interactúan: **el paciente, el personal sanitario, el medicamento**. La múltiple morbilidad lleva a mayor cantidad, duración y variedad de fármacos; falta de cumplimiento y errores de administración.',
      '**Personal sanitario**: formación insuficiente sobre diferencias ancianos-jóvenes; ausencia de información científica sobre muchos aspectos del uso de medicamentos en esta edad.',
      '**El medicamento**: el envejecimiento condiciona la acción y, según el fármaco, hay marcadas diferencias entre jóvenes y ancianos.'
    ]},
    { titulo: 'Geriatría: cambios fisiológicos y puntos de atención (sistema por sistema)', puntos: [
      '**Ojos**: pérdida de elasticidad del cristalino (presbicia), amarillamiento, ↓ respuesta pupilar a la luz; diabetes, cataratas, glaucoma, degeneración retiniana. Atención: uso limitado de agentes que comprometen la visión (antidepresivos, antipsicóticos, antimaláricos); medicamentos de apariencia diferente; prescribir legible, en mayúsculas.',
      '**Oídos**: dificultad para discriminar cambios de frecuencia; retraso en el procesamiento central de mensajes. Atención: evaluar la audición antes de **ototóxicos (aminoglucósidos, AINE, diuréticos de asa)**; dar instrucciones verbales y escritas.',
      '**Respiratorio**: pérdida de elasticidad, ↓ capacidad vital, rigidez de la pared torácica, ↓ salida nerviosa a músculos respiratorios, ↓ respuesta ventilatoria a hipoxia e hipercapnia. Atención: precaución con **depresores del SNC y β-adrenérgicos** en compromiso respiratorio; vacunas contra neumococo e influenza.',
      '**Gastrointestinal**: disfunción de la motilidad esofágica (miastenia gravis, ACV, Parkinson, CA hipofaríngeo, divertículo faríngeo, diabetes, CA esofágico, candidiasis); constipación. Atención: evitar agentes que causen constipación; precaución con agentes que lesionan el esófago (**AINE, alendronato, KCl**: tomar 30-60 min antes de acostarse y con líquido).',
      '**Genitourinario**: incontinencia 5-10 % (inestabilidad del detrusor, debilidad del esfínter, incontinencia funcional); retención urinaria (malignidad, cálculos, infecciones, vejiga neurógena); disfunción sexual (80 % orgasmo, 75 % eréctil). Atención: incontinencia por diuréticos, psicoactivos, relajantes musculares y β-bloqueantes; retención/incontinencia por anticolinérgicos.',
      '**Músculo-esquelético**: pérdida del **30 %** de masa muscular; osteoartritis; osteopenia/osteoporosis (**80 % mujeres**: ↓ actividad, ↓ calcio en la dieta, ↓ estrógenos; endocrinopatías, enfermedad reumática, neoplasias). Atención: fármacos con alteraciones esqueléticas (**corticoides**) y síntomas reumáticos (**procainamida**); **1/3 a 1/2** son susceptibles a caídas → precaución con depresores del SNC, antihipertensivos y psicoterapéuticos.',
      '**Psiquiátricas**: depresión; trastornos del sueño (↑ latencia y fragmentación, alteración del ritmo biológico); **demencia 10 %** (Alzheimer, infarto múltiple, Parkinson y pseudodemencia). Atención: fármacos que causan **insomnio** (psicoterapéuticos, simpaticomiméticos); fármacos que precipitan **delirio y depresión** (alcohol, psicoterapéuticos, antiparkinsonianos).'
    ]},
    { titulo: 'Farmacocinética geriátrica', puntos: [
      '**Absorción**: ↓ células GI, ↓ motilidad GI, ↓ actividad esfinteriana, ↓ flujo sanguíneo GI, ↓ secreción de ácido gástrico, ↓ transporte activo; absorción pasiva «normal» (flechas en la imagen, ⚠ no se leen).',
      '**Distribución**: ↓ albúmina, ↓ unión a GR, ↑ tejido adiposo (**15-20 % → 18-36 %**), ↓ gasto cardíaco.',
      '**Biotransformación**: ↓ masa hepática (**1 % por año**), ↓ flujo sanguíneo hepático (**40 %**), ↓ función hepática, **metabolismo fase I ↓**, **fase II normal**.',
      '**Eliminación**: ↓ GFR (**30-46 %**), ↓ función tubular (**50 %**), ↓ flujo plasmático renal. Importa en: compuestos originales (**antimicrobianos, digoxina, antagonistas H₂**), metabolitos (**meperidina, procainamida**), disfunción renal por fármacos (AINE); ClCr medido vs estimado (< 0,63 ⚠ no se explica).',
      '**Enfermedad que altera** — Absorción: estenosis pilórica, úlcera péptica, vagotomía, gastroparesia diabética, malabsorción, resecciones GI, aclorhidria, insuficiencia cardíaca. Distribución: insuficiencia cardíaca, hipoalbuminemia (insuf. hepática o renal), amputaciones. Metabolismo: hepatitis, insuf. hepática, insuf. cardíaca. Excreción renal: neuropatías (insuf. renal), insuf. cardíaca.'
    ]},
    { titulo: 'Farmacodinamia geriátrica', puntos: [
      'Sensibilidad de sistemas orgánicos alterada; las mediciones de respuesta tienen valor limitado. Causas: depleción de neurotransmisores, enfermedades, cambios fisiológicos, estado nutricional.',
      'Respuesta alterada de **barorreceptores** y ↓ tono venoso periférico; ↓ DA y ACh; **receptores β-adrenérgicos menos reactivos** (segundos mensajeros: la respuesta celular, no el número); ↓ densidad de receptores opioides y PTH.',
      '**Respuesta farmacodinámica ↑**: anticolinérgicos, antihipertensivos, barbitúricos, benzodiacepinas, bloqueadores de calcio, digoxina, heparina, levodopa, neurolépticos, opioides, warfarina.',
      'Tabla: **benzodiacepinas** sensibilidad ↑ · **warfarina** sensibilidad ↑ · **sulfonilureas** ↑ reacciones de hipoglucemia · **analgésicos narcóticos** sensibilidad ↑ · **β-bloqueantes (propranolol)** sensibilidad **↓**.'
    ]},
    { titulo: 'Eventos adversos, interacciones y adhesión en el anciano', puntos: [
      '**Evento adverso (OMS)**: «cualquier respuesta a un fármaco desfavorable y no intencionada, que ocurre a dosis usadas en el hombre para profilaxis, diagnóstico o terapia, o para modificar funciones fisiológicas».',
      'Eventos adversos: **2-7 %** más en adultos mayores; **10-25 %** de las hospitalizaciones geriátricas; enmascaran o empeoran otras condiciones; uso inapropiado o polifarmacia; insuficiencia hepática o renal.',
      '**Factores de ↑ reacciones adversas**: alteraciones PK/PD · múltiples enfermedades · polimedicación · presentación atípica de enfermedades · errores de diagnóstico y prescripción · recibir prescripciones de varios médicos · automedicación · acumular medicamentos de tratamientos anteriores.',
      '**Interacciones**: **2-23 %** de ancianos; riesgo: polifarmacia (incluye OTC), alcohol, dos o más prescriptores/farmacéuticos. Fármacos frecuentes: analgésicos y antiinflamatorios, antiepilépticos, antidepresivos, antihistamínicos, cardiovasculares (antiarrítmicos, antianginosos), ansiolíticos e hipnóticos (benzodiacepinas), diuréticos, antagonistas del calcio, IECA, antidiabéticos orales.',
      '**Adhesión**: **43 %** de ancianos no se adhiere; **90 %** de ellos por subutilización. Impacto: visión, audición, cognición, disfagia, osteoartritis. Predisponen: polifarmacia, esquemas complicados, RAFs, costos, envases difíciles de abrir, no comprender instrucciones.',
      '**Bajo cumplimiento**: edad muy avanzada, vivir solos, bajo nivel cultural, demencia, polimedicación, confusión de nombres, regímenes complejos, reacciones adversas, tamaño/color/sabor, envasado, déficit visual/auditivo, letra pequeña del prospecto.'
    ]},
    { titulo: 'Consideraciones y normas de prescripción geriátrica', puntos: [
      '**Consideraciones**: tratar la causa, no el síntoma · los síntomas pueden ser iatrogénicos · re-evaluar todos los medicamentos · abordajes no farmacológicos · **iniciar con dosis pequeñas e incrementar lentamente** en dosis e intervalos.',
      '**Normas**: diagnóstico preciso antes de tratar · historia farmacológica detallada · conocer la farmacología de lo que se prescribe · **dosis bajas** · simplificar el régimen · explicar el plan al anciano · formas de dosificación adecuadas · diarios o calendarios de tomas · aconsejar destruir o donar medicamentos que ya no usa · considerar indicación y necesidad de cada medicamento · investigar efectos adversos aditivos · cuestionar mantener fármacos que agraven sus enfermedades.',
      'Cita de cierre (Abraham Lincoln): «no son los años los que cuentan en tu vida, sino la vida en tus años».'
    ]},
    { titulo: 'Respuesta alterada por enfermedad', puntos: [
      '**Insuficiencia hepática**: ↓ metabolismo. **Insuficiencia renal**: afecta eliminación y ↑ toxicidad. **Obesidad**: modifica el Vd. **Sepsis / inflamación crónica**: alteran metabolismo y transporte.',
      '**Objetivo terapéutico**: modificar el esquema para lograr en el paciente enfermo el mismo efecto que en el sano.',
      '**Abordaje**: 1) ↑ el intervalo sin cambiar la dosis (equivalente a Cp máx); 2) ↓ la dosis sin alterar el intervalo (equivalente a Cp mín); 3) combinaciones de ambos (equivalente a un promedio **Cpss**). ⚠ La diapositiva solo escribe «equivalente a Cp max / Cp min / Cpss» en ese orden; la correspondencia exacta de cada una no se ve clara en el texto.'
    ]},
    { titulo: 'Enfermedad renal: ajuste de dosis', puntos: [
      'Los cambios en depuración y vida media **solo ocurren con fármacos excretados en más del 75 % sin cambios por el riñón y cuando la función renal es < 50 % de lo normal**. Hay riesgo de **acumulación tóxica**.',
      '**1) Estimar la función renal**: clearance de creatinina (**ClCr**) o **eGFR**. En adultos, fórmula de **Cockcroft-Gault** (evalúa la creatinina eliminada hacia la orina). ⚠ La fórmula en sí no aparece en las diapositivas: se incluye abajo en la explicación (verifícala).',
      '**2) ¿Se elimina por vía renal?** Revisar vademécum: eliminado en **> 30 % sin metabolizar** por orina, o con metabolitos activos de eliminación renal, o con ventana terapéutica estrecha.',
      '**3) Ajustar**: **A. Reducir la dosis** (mismo intervalo) · **B. Aumentar el intervalo** (misma dosis).',
      '**4) Usar tablas oficiales de ajuste por ClCr o la fórmula**: **G = 1 − f (1 − Cr/C)**. **G** = fracción de la dosis usual de mantenimiento a dar en el intervalo usual; **f** = fracción excretada sin cambios en orina con función renal normal; **C** = depuración de creatinina de un individuo normal; **Cr** = depuración de creatinina del paciente con disfunción renal.',
      '**Ejemplo (ciprofloxacina)**: f = 0,7; Cr = 30 ml/min; C = 100 ml/min; dosis estándar 500 mg c/12 h. G = 1 − 0,7 (1 − 0,3) = 1 − 0,49 = **0,51** → ≈ 51 % de la dosis habitual. Opciones: **250 mg c/12 h** (reducir dosis) o **500 mg c/24 h** (aumentar intervalo). La elección depende de la gravedad de la infección, la CIM del germen, etc.'
    ]},
    { titulo: 'Enfermedad hepática', puntos: [
      'Abordaje **conservador**: **no existen bases cuantitativas** para ajustar el esquema; la evaluación se basa en la **observación clínica**.',
      'Atención especial a fármacos con **metabolismo de primer paso** cuando se dan por vía oral.'
    ]},
    { titulo: 'Farmacogenética y farmacogenómica (definiciones)', puntos: [
      '**Medicina personalizada** / farmacogenómica: rama de la farmacología que usa el ADN y datos de secuencia de aminoácidos para aplicarlos al desarrollo de nuevos fármacos.',
      '**Farmacogenética**: efecto de los genes en los fármacos. Los genes codifican enzimas y receptores (blanco de los fármacos). Genes **más poderosos** → fallo del fármaco con dosis normal. Genes **menos poderosos** → toxicidad con dosis normal.',
      '**Farmacogenómica**: individualización de la terapia en un paciente basada en la farmacogenética. Para evitar el fallo: **↑ dosis**; para evitar toxicidad: **↓ dosis**.',
      'Combina farmacología y genómica; explica por qué los pacientes responden diferente; personaliza tratamientos según el perfil genético; busca mejorar eficacia y reducir efectos adversos.',
      'Importancia: evita tratamientos ineficaces y efectos adversos graves; optimiza selección y dosis; reduce el «prueba y error». Identifica variantes genéticas que afectan el metabolismo, ajusta dosis y elección, reduce sobredosis y toxicidad.',
      'Polimorfismos «en los albores» de la farmacogenómica: **CYP2D6, CYP2C9, CYP2C19, butirilcolinesterasa, G6PD, N-acetiltransferasa**.'
    ]},
    { titulo: 'Polimorfismos: CYP2D6, CYP2C9 y VKORC1', puntos: [
      '**CYP2D6**: metaboliza **antipsicóticos y antidepresivos** (las guías de la Clínica Mayo sugieren genotipado antes de prescribir ciertos fármacos). **Tamoxifeno** (SERM, modulador selectivo del receptor de estrógeno): ↓ CYP2D6 → ↓ activación → ↓ **endoxifeno** (metabolito activo) → ↓ inhibición del receptor de estrógeno → **fallo terapéutico**. Variantes de baja actividad: ↑ toxicidad con antipsicóticos/antidepresivos y falta de respuesta al tamoxifeno en cáncer de mama.',
      '**CYP2C9**: metaboliza la **warfarina**. Si la enzima es más o menos eficiente, el efecto es variable. CYP2C9 **+ VKORC1** explican efectos variables en **al menos 25 %** de la población tratada con warfarina.',
      '**VKORC1** (complejo epóxido reductasa de vitamina K) = **blanco de la warfarina**: vitamina K → VKORC1 → vitamina K reducida → γ-carboxilasa → activa factores **II, VII, IX, X** y proteínas **C y S**. Si VKORC1 es más o menos poderoso → mayor o menor activación de los factores → efecto variable sobre **TP e INR**.'
    ]},
    { titulo: 'Polimorfismos: CYP2C19, butirilcolinesterasa, G6PD, NAT', puntos: [
      '**CYP2C19** activa el **clopidogrel** (antiagregante). Gen menos funcional → ↓ enzima → ↓ activación → menos efecto antiplaquetario → **mayor riesgo de infarto de miocardio**.',
      '**Butirilcolinesterasa** (plasma) metaboliza la **succinilcolina** (relajante muscular en anestesia). Polimorfismo → ↓ metabolismo → ↑ efecto → **apnea prolongada**.',
      '**G6PD** (glucosa-6-fosfato deshidrogenasa): su deficiencia ↓ la capacidad del eritrocito de neutralizar radicales libres → daño oxidativo → **hemólisis**. Desencadenan: **menadiona** (vitamina K sintética), antimaláricos (**primaquina, tafenoquina** > cloroquina), **ácido nalidíxico, nitrofurantoína**, **isoniazida**, **sulfonamidas, dapsona**.',
      '**N-acetiltransferasa (NAT)**: **NAT1** = acetiladores **rápidos** (eliminan rápido → puede ↓ eficacia). **NAT2** = acetiladores **lentos** (↑ riesgo de toxicidad por acumulación). Importante para **isoniazida, hidralazina, procainamida, sulfonamidas**.',
      '**Ejemplo isoniazida (según la diapositiva)**: el compuesto original causa **neuropatía periférica**; sus metabolitos causan **hepatotoxicidad**. **Acetiladores rápidos → hepatotoxicidad**; **acetiladores lentos → neuropatía periférica**.'
    ]},
    { titulo: 'Aplicaciones clínicas de la farmacogenómica', puntos: [
      '**Oncología**: **trastuzumab (Herceptin)** solo funciona en pacientes **HER2 +**. **6-mercaptopurina** (leucemia linfoblástica; supresor inmunológico) depende de **TPMT** (tiopurina metiltransferasa); las pruebas genéticas previenen toxicidad hematológica severa.',
      '**Psiquiatría**: **ISRS** dependen de **CYP2D6 y CYP2C19**; los test ayudan a elegir fármaco y dosis y evitan efectos secundarios y falta de respuesta.',
      '**Cardiovascular**: **warfarina** → CYP2C9 y VKORC1 determinan la dosis óptima; **clopidogrel** requiere activación por CYP2C19; identificar **metabolizadores pobres** previene eventos trombóticos.',
      '**Prescripción**: se pueden pedir pruebas genéticas; hay **paneles multigénicos**; cada vez más fármacos incluyen guías farmacogenómicas.',
      '**Beneficios**: ↑ seguridad y eficacia; ↓ costos al evitar hospitalizaciones por efectos adversos; impulsa medicamentos personalizados.',
      '**Desafíos**: la genética no es el único factor; pruebas aún costosas; necesidad de capacitación médica.',
      '**Conclusión**: la farmacogenómica es el futuro de la medicina personalizada / de precisión.'
    ]}
  ],

  explicacion: [
    { titulo: '1. La idea central: la misma dosis no sirve para todos', p: [
      'El objetivo de individualizar es uno solo: que **cada paciente tenga una concentración plasmática estable dentro de su margen terapéutico** durante el tiempo que haga falta. Por debajo del margen = no funciona; por encima = toxicidad.',
      'Lo que cambia entre pacientes es **cuánto fármaco llega** (farmacocinética: absorción, distribución, metabolismo, eliminación) y **cómo responde el tejido** (farmacodinamia). Todo el tema es: en cada situación (embarazo, niño, anciano, riñón, hígado, genes), ¿cuál de estos cuatro pasos cambia y hacia dónde?'
    ], pausa: {
      q: 'Si un paciente tiene el hígado enfermo, ¿qué esperas que pase con un fármaco que se metaboliza mucho en el primer paso?',
      a: '⚠ (lógica): se metaboliza menos → llega más fármaco activo → **más efecto y más toxicidad**. La diapositiva lo resume así: en insuficiencia hepática hay ↓ metabolismo y el abordaje es **conservador**, por observación clínica, con atención a los fármacos de primer paso por vía oral.'
    }},
    { titulo: '2. Embarazo: casi todo «sube»', p: [
      'Piensa que el cuerpo se llena de líquido y de sangre: **↑ volumen plasmático** (+1200-1600 ml), **↑ gasto cardíaco 30-50 %**, ↑ flujo a útero (20 % del gasto), riñón, piel y mama; **↓ flujo al músculo esquelético**.',
      '**Riñón**: ↑ GFR → se eliminan más rápido los fármacos que salen por orina. **Albúmina ↓** → más fármaco libre. **GI**: menos ácido, vaciamiento lento, tránsito más largo por la progesterona.',
      '**Enzimas**: la progesterona **inhibe la N-demetilación**; **CYP3A4 (hidroxilación) aumenta**. No es «todo sube»: depende de la vía.',
      '**Teratogénesis (5 reglas)**: específicos · dosis-respuesta · deben llegar al feto · dependen de la fase de desarrollo («todo o nada» en el periodo temprano) · el genotipo de madre y feto cambia la susceptibilidad. Ejemplo de mecanismo: **talidomida → daño oxidativo del ADN**.'
    ]},
    { titulo: '3. Lactancia: lo libre pasa a la leche', p: [
      'Solo el fármaco **libre** pasa a la leche, y suele estar en menor concentración que en el suero. Pasa más si es muy **liposoluble**, poco unido a proteínas maternas.',
      '**Lista de prohibidos** (para memorizar): antineoplásicos, inmunosupresores, **ergotamina**, oro, yodo, **litio**, radiofármacos, drogas de abuso, ciertos antibióticos. Regla práctica de la diapositiva: lo seguro en embarazo suele ser seguro en lactancia, y los niveles del bebé deben ser subterapéuticos.'
    ]},
    { titulo: '4. Pediatría: el recién nacido es «inmaduro en todo»', p: [
      '**Absorción**: pH gástrico neutro al nacer (adulto a los 3 meses) → **penicilinas se absorben mejor**; vaciamiento lento hasta el mes 6-8.',
      '**Distribución**: más agua corporal → **mayor Vd para hidrosolubles**; más grasa relativa → mayor Vd para liposolubles; **menos albúmina** (adulto al año) → más fármaco libre; albúmina fetal presente.',
      '**Metabolismo**: hígado inmaduro; **glucuronidación baja** (adulto a los 3 años) pero sulfatación normal. **Eso explica el síndrome del bebé azul con cloranfenicol** (⚠ el mecanismo —cloranfenicol se inactiva por glucuronidación— no está en la diapositiva; ella solo cita el síndrome).',
      '**Riñón**: FG 5-10 ml/min/m², se duplica a la semana; secreción tubular madura al año → **↓ dosis en RN**. Pero a los 8-12 meses el niño depura más que el adulto: por eso los **aminoglucósidos** pueden ir a 1,5-2 veces la dosis del adulto, **cada 6 h en vez de cada 8 h**.'
    ], pausa: {
      q: 'Un neonato recibe un fármaco que se elimina por glucuronidación y se le da dosis de adulto. ¿Qué pasa?',
      a: 'Se acumula → toxicidad (como el **síndrome del bebé azul** con cloranfenicol). Nunca dar dosis de adulto en niños; la glucuronidación llega a niveles de adulto a los 3 años.'
    }},
    { titulo: '5. Geriatría: menos masa magra, menos agua, menos riñón', p: [
      '**Distribución**: más grasa (15-20 % → 18-36 %), menos agua y albúmina → fármacos liposolubles se acumulan, hidrosolubles se concentran.',
      '**Hígado**: masa ↓ 1 % por año, flujo ↓ 40 %; **fase I ↓, fase II intacta** (por eso, a igualdad, conviene fármacos que se eliminen por conjugación: ⚠ regla de Katzung, no de la diapositiva).',
      '**Riñón**: GFR ↓ 30-46 %, función tubular ↓ 50 %. Atención a fármacos que se eliminan por riñón: **digoxina, antimicrobianos, antagonistas H₂** y metabolitos como los de la **meperidina** y **procainamida**.',
      '**Farmacodinamia**: ↑ sensibilidad a benzodiacepinas, warfarina, opioides, sulfonilureas (hipoglucemia). **↓ sensibilidad a β-bloqueantes (propranolol)** porque los β-receptores responden menos.',
      '**Regla de oro**: dosis pequeñas, aumentar despacio, simplificar el esquema, tratar la causa y no el síntoma, y revisar la lista completa de fármacos (los síntomas pueden ser iatrogénicos).'
    ]},
    { titulo: '6. Insuficiencia renal: la fórmula G', p: [
      'Solo importa si el fármaco se excreta **> 75 % sin cambios** (la diapositiva también da > 30 % para decidir si revisar el ajuste) y la función renal es **< 50 %**.',
      '**G = 1 − f (1 − Cr/C)** → G es la fracción de la dosis de mantenimiento. Ejemplo ciprofloxacina: f = 0,7, Cr = 30, C = 100 → G = 0,51 → **250 mg c/12 h o 500 mg c/24 h**. Siempre hay dos caminos: **↓ dosis o ↑ intervalo**.',
      '**Cockcroft-Gault** (⚠ no escrita en la diapositiva; verifícala): ClCr (ml/min) = [(140 − edad) × peso (kg)] / [72 × creatinina sérica (mg/dl)]; en mujeres × 0,85.'
    ], pausa: {
      q: 'Un paciente tiene ClCr de 50 ml/min y el fármaco tiene f = 0,8, C = 100. ¿Qué fracción de la dosis le toca?',
      a: 'G = 1 − 0,8 (1 − 0,5) = 1 − 0,4 = **0,6** (60 %). ⚠ Cuenta propia aplicando la fórmula de la diapositiva.'
    }},
    { titulo: '7. Farmacogenética: ¿gen «poderoso» o «débil»?', p: [
      'Regla simple de la diapositiva: **gen más poderoso → fallo con dosis normal → ↑ dosis**; **gen menos poderoso → toxicidad con dosis normal → ↓ dosis**. Pero cuidado con los **profármacos**: si la enzima convierte un profármaco en su forma activa (clopidogrel, tamoxifeno), una enzima débil da **fallo** y no toxicidad.',
      '**CYP2C19 → clopidogrel**: enzima débil → no se activa → más infartos. **CYP2D6 → tamoxifeno**: enzima débil → poco endoxifeno → fallo en cáncer de mama; y CYP2D6 débil con antipsicóticos/antidepresivos → toxicidad.',
      '**CYP2C9 + VKORC1 → warfarina**: efecto variable en ≥ 25 %; se ve en **TP/INR**. VKORC1 es el **blanco** de la warfarina (reduce vitamina K → activa II, VII, IX, X, proteínas C y S).',
      '**Butirilcolinesterasa → succinilcolina**: enzima lenta → **apnea prolongada** (conecta con colinomiméticos: la seudocolinesterasa es la que desarma la succinilcolina).',
      '**G6PD → hemólisis**: lista corta para recordar: **primaquina/tafenoquina, dapsona/sulfonamidas, nitrofurantoína, ácido nalidíxico, isoniazida, menadiona**.',
      '**NAT**: acetiladores **lentos (NAT2)** → ↑ toxicidad por acumulación; **rápidos (NAT1)** → pierden eficacia. Con **isoniazida** (según la diapositiva): **rápidos → hepatotoxicidad**, **lentos → neuropatía periférica**.',
      '**Oncología**: trastuzumab solo en **HER2 +**; **6-mercaptopurina** depende de **TPMT** (evita toxicidad hematológica).'
    ], pausa: {
      q: 'Paciente con CYP2C19 de baja función recibe clopidogrel. ¿Qué riesgo corre y por qué?',
      a: '**Infarto de miocardio / eventos trombóticos**: el clopidogrel es un profármaco que CYP2C19 debe activar; sin activación, la inhibición plaquetaria es insuficiente.'
    }}
  ],

  memoria: {
    columnas: ['Gen / situación', 'Fármaco afectado', 'Qué pasa', 'Consecuencia clínica', 'Ojo con…'],
    filas: [
      ['CYP2D6 (menos funcional)', 'Antipsicóticos, antidepresivos, ISRS; tamoxifeno', '↓ metabolismo; ↓ activación a endoxifeno', 'Toxicidad con antipsicóticos/antidepresivos; fallo del tamoxifeno en cáncer de mama', 'Tamoxifeno = SERM, necesita CYP2D6 para activarse'],
      ['CYP2C9 + VKORC1', 'Warfarina', 'Metabolismo y blanco variables (≥ 25 % de la población)', 'Efecto variable sobre TP/INR', 'VKORC1 = blanco; activa II, VII, IX, X, proteína C y S'],
      ['CYP2C19 (menos funcional)', 'Clopidogrel; ISRS', '↓ activación del clopidogrel', '↑ riesgo de infarto de miocardio', 'Clopidogrel es profármaco'],
      ['Butirilcolinesterasa (polimorfismo)', 'Succinilcolina', '↓ metabolismo', 'Apnea prolongada', 'La butirilcolinesterasa está en el plasma'],
      ['Deficiencia de G6PD', 'Primaquina, tafenoquina, dapsona, sulfonamidas, nitrofurantoína, ác. nalidíxico, isoniazida, menadiona', 'Daño oxidativo del eritrocito', 'Hemólisis', 'Antimaláricos: primaquina/tafenoquina > cloroquina'],
      ['NAT1 / NAT2 (según la diapositiva)', 'Isoniazida, hidralazina, procainamida, sulfonamidas', 'Rápidos (NAT1): eliminan rápido. Lentos (NAT2): acumulan', 'Isoniazida: rápidos → hepatotoxicidad; lentos → neuropatía periférica', '⚠ En la literatura el polimorfismo es de NAT2'],
      ['TPMT', '6-mercaptopurina (leucemia linfoblástica)', 'Depende de TPMT', 'Toxicidad hematológica severa', 'Hacer prueba genética previa'],
      ['HER2 +', 'Trastuzumab (Herceptin)', 'Solo funciona si HER2 +', 'Sin HER2 + no hay respuesta', 'Oncología'],
      ['Embarazo', 'Varios', '↑ volumen plasmático, ↑ GC 30-50 %, ↑ GFR, ↓ albúmina, ↑ CYP3A4, N-demetilación inhibida por progesterona', 'Cambia la concentración de fármacos', 'Teratógenos: dosis-respuesta, específicos, fase de desarrollo'],
      ['Recién nacido', 'Cloranfenicol, penicilinas, aminoglucósidos', 'pH gástrico neutro, ↓ albúmina, glucuronidación ↓, FG 5-10 ml/min/m²', 'Síndrome del bebé azul (cloranfenicol); penicilinas más biodisponibles; aminoglucósidos q 6 h en niños', 'Adulto glucuronidación a los 3 años; renal normal al año'],
      ['Anciano (≥ 65 años)', 'Benzodiacepinas, warfarina, opioides, sulfonilureas; propranolol', 'Fase I ↓, fase II normal; GFR ↓ 30-46 %; ↑ grasa; ↓ albúmina', 'Sensibilidad ↑ (excepto β-bloqueantes ↓)', 'Dosis bajas, subir lento; 43 % no se adhiere'],
      ['Insuficiencia renal', 'Fármacos excretados > 75 % sin cambios', 'ClCr < 50 %', 'Acumulación tóxica; G = 1 − f (1 − Cr/C)', 'Ciprofloxacina ejemplo: G = 0,51 → 250 mg c/12 h o 500 mg c/24 h'],
      ['Insuficiencia hepática', 'Fármacos con primer paso', '↓ metabolismo', 'Sin ajuste cuantitativo', 'Abordaje conservador, observación clínica']
    ],
    notas: ['Regla de las diapositivas: **genes más poderosos → fallo → ↑ dosis; genes menos poderosos → toxicidad → ↓ dosis** (con la excepción lógica de los profármacos ⚠).']
  },

  preguntan: [
    { tipo: 'Farmacogenética (se repite)',
      texto: 'Preguntas tipo «El polimorfismo de CYP2C19 se asocia con…» (clopidogrel, riesgo de infarto), CYP2C9/VKORC1 con **warfarina**, «G6PD» con hemólisis y NAT2 con acetiladores lentos. En frecuencia-examenes.md: farmacogenética (CYP2C19–clopidogrel, CYP2C9/VKORC1–warfarina, G6PD, NAT2). ⚠ El OCR de esas preguntas es muy malo (líneas 1570-1582 de examenes-p1.txt: «CynC19», «NAT2»); mira la foto.',
      trampa: 'Clopidogrel = **profármaco**: enzima menos funcional → **menos** efecto (no más). Warfarina: CYP2C9 la metaboliza y VKORC1 es su blanco.' },
    { tipo: 'Farmacoterapia individualizada / orientada al paciente',
      texto: '«En la farmacoterapia individualizada se debe considerar: definición del problema, factores genéticos, madurez de los sistemas enzimáticos, prescripción». También «el tercer paso de la farmacoterapia orientada al paciente: determinar alternativas terapéuticas / definir objetivos / diseñar un plan farmacológico individualizado / supervisar» (examenes-p1.txt, líneas 295-298 y 470-478). ⚠ El orden exacto de los pasos NO está en esta diapositiva.',
      trampa: 'Pasos típicos (⚠ Katzung/curso): definir el problema → definir objetivos → alternativas → plan → supervisar. Verifica con el docente.' },
    { tipo: 'Factores que modifican la respuesta',
      texto: '«Son factores que modifican la respuesta a los fármacos cuando se administran con fines terapéuticos: inmunización, geografía, lactancia, ejercicio» y «en la variabilidad: edad, factores, enfermedad, interacciones farmacológicas / raza, embarazo…» (líneas 1328-1340, 470-478).',
      trampa: 'La lista de la diapositiva incluye edad, sexo, embarazo, lactancia, dieta, ejercicio, cigarros, alcohol, enfermedad, genética. Lee qué opciones están realmente en la lista.' },
    { tipo: 'Recién nacido / metabolismo (afirmaciones)',
      texto: '«La conjugación con ácido glucurónico: disminuye su solubilidad / inactiva la droga / es reacción de fase I / ocurre al mismo ritmo en adultos que en recién nacidos / involucra al citocromo P450» (línea 340).',
      trampa: 'La conjugación con glucurónido es **fase II**, **aumenta** la solubilidad en agua, es **baja en el recién nacido** (adulto a los 3 años). No usa citocromo P450.' },
    { tipo: 'Ajuste renal',
      texto: '«Para ajustar la dosis se incluyen edad, peso y valor de creatinina» (línea 335). ⚠ Cockcroft-Gault usa edad, peso y creatinina, no escrita en la diapositiva.',
      trampa: 'Ajustar = ↓ dosis o ↑ intervalo, solo si el fármaco es de eliminación renal > 75 % y la función < 50 %.' }
  ],

  consejo: [
    '🧠 **Gen poderoso → fallo → ↑ dosis. Gen débil → toxicidad → ↓ dosis.** Excepción: profármacos (clopidogrel, tamoxifeno) → enzima débil = fallo.',
    '🧠 **«2C19 = clopidogrel; 2C9 + VKORC1 = warfarina; 2D6 = tamoxifeno y psiquiátricos; BChE = succinilcolina; G6PD = hemólisis; NAT = isoniazida.»** Seis pares y listo.',
    '🧠 **Recién nacido: todo inmaduro** (pH neutro, albúmina baja, glucuronidación baja, riñón 5-10 ml/min/m²). **Anciano: fase I ↓, fase II normal, riñón ↓ 30-46 %.**',
    '🧠 **Renal: G = 1 − f (1 − Cr/C)** → 0,51 = 250 mg c/12 h o 500 mg c/24 h.'
  ]
});
