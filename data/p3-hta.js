registrarTema({
  id: 'p3-hta',
  ficha: {
    fuente: 'Farmatoterapia de la HTA - Dr. Jacobs.pdf (Dr. Fernando Jacobs, 2025)',
    diapositivas: 'págs. PDF 1-51 (cada pág. trae 2 diapositivas, total ~103; la pág. 0 es la portada y la 52 sale vacía). «pág.» = marcador PAGINA N del texto extraído.',
    examenes: '3.er parcial 2018-2025 y Final: cae casi todos los años (🔥🔥). Hipertensión ~21 menciones, IECA ~25, ARA II ~10, amlodipino/calcioantagonistas ~26.',
    avisos: [
      '⚠ Varias diapositivas son solo imagen o dejaron el texto a medias (págs. PDF 10, 16, 22, 29, 35 = esquema «sitios de acción»; 11 «…pril»; 30 «…dipino»; 36 «…olol»; 45-46 esquemas A/B/C/D y línea de tiempo; 47 tabla «Criterio de enfermedades concurrentes»; 52 vacía): no se pudo leer todo. Si en clase viste algo que no está aquí, avísame.',
      '⚠ Las flechas ↑ ↓ de algunas diapositivas se perdieron en la extracción (ej. «Cada ↑ de 20 mmHg…»); se completaron por lógica y se marcan.',
      '⚠ = dato que NO está en las diapositivas, o que la diapositiva trae dudoso/contradictorio (sale de Katzung, de lógica farmacológica o de un examen). Verifícalo antes de memorizarlo.'
    ]
  },

  diapositiva: [
    { titulo: 'Panorama y clínica (págs. 1-3)', puntos: [
      '**1.280 millones** de personas afectadas (OMS 2023). **< 50 %** diagnosticados, solo **21 %** controlados. En **Bolivia: 60 % no controlados**. Causas: bajo acceso, pobre adherencia, falta de educación sanitaria.',
      '**Silente por años**, sin síntomas específicos. Signos avanzados: cefalea, tinnitus, epistaxis. 60 % ignora estar enfermo. Síntomas no clave: cefalea, mareos. Las lecturas de PA son la clave para diagnóstico y seguimiento.',
      '¿Quiénes se enferman?: adultos > 40 años, antecedentes familiares, obesos, sedentarios, alto consumo de sal o alcohol, **raza negra**.',
      'Evolución: asintomática durante años; si no se trata, progresa con daño de órganos blanco: **riñón, corazón, retina, vasos**.',
      'Manifestaciones clave: **PA elevada en dos oportunidades diferentes**. Cuando aparecen síntomas: cefalea matutina, tinnitus, epistaxis, visión borrosa. Complicaciones: ECV, IAM, IRC, insuficiencia cardíaca.',
      'Etiopatogenia **multifactorial**: ↑ tono simpático, activación del RAAS, retención de sodio, disfunción endotelial, rigidez arterial, resistencia a la insulina.'
    ]},
    { titulo: 'Definición y clasificación hemodinámica (págs. 3-4)', puntos: [
      'Enfermedad **silente, crónica, progresiva e incurable**. Elevación sostenida de la PA: **sistólica > 140 mmHg, diastólica > 90 mmHg**, sin causa identificable (estenosis renal, feocromocitoma, etc.). ⚠ La diapositiva escribe «>140 / >90»; las guías suelen decir ≥ 140 / ≥ 90.',
      'PA **óptima**: < 120 / < 80.  **Normal**: 120-129 / 80-84.  **Normal-alta**: 130-139 / 85-89.',
      '**HTA grado 1**: 140-159 / 90-99.  **HTA grado 2**: 160-179 / 100-109. ⚠ La diapositiva se corta aquí (grado 3 ≥ 180/110 no sale en el texto; puede estar en la imagen).'
    ]},
    { titulo: 'Lesión de órganos diana (pág. 4)', puntos: [
      '**Corazón**: hipertrofia ventricular izquierda · angina o infarto de miocardio · dilatación y fibrilación auricular · insuficiencia cardíaca con FE preservada.',
      '**Cerebro**: ictus (ACV) o TIA (AIT).',
      '**Enfermedad renal crónica** · **enfermedad arterial periférica** · **retinopatía**.'
    ]},
    { titulo: 'Objetivos terapéuticos y justificación (pág. 5)', puntos: [
      '**Terminales**: ↓ morbilidad y mortalidad cardiovascular/renal.',
      '**Técnicos**: < 140/90 (< 60 años) · < 150/90 (> 60 años) · < 140/80 en diabéticos, IRC, IC · < 125/75 si proteinuria > 1 g · < 140 en HTA sistólica.',
      'Justificación: cada ↑ de 20 mmHg de sistólica o 10 de diastólica → ↑ al doble el riesgo de complicaciones de órgano blanco (vasos, riñón, corazón, cerebro, retina). ⚠ Flechas inferidas (se perdieron en la extracción).',
      'Un tratamiento adecuado reduce: **ACV 35-40 %**, **infarto 20-25 %**, **insuficiencia cardíaca > 50 %**. Objetivo: < 140/90.'
    ]},
    { titulo: 'Estrategia general y estilo de vida (págs. 6-7)', puntos: [
      '1) **Cambios de estilo de vida (siempre)**. 2) Farmacoterapia según nivel de riesgo y cifras. 3) Metas: **PAS < 140 (< 130 en jóvenes), PAD < 90**. Basado en guías ESC/ESH, ACC/AHA, ISH y NICE.',
      'Efecto en la PA sistólica: **reducción de peso 5-20 mmHg por cada 10 kg** · **dieta DASH 8-14** · **↓ sodio (< 6 g/día) 2-8** · **actividad física 4-9** · **moderar alcohol 2-4**.'
    ]},
    { titulo: 'Estrategia farmacológica (pág. 8)', puntos: [
      'Se busca ↓ resistencia periférica total (RPT) · ↓ gasto cardíaco (GC) · ↓ volumen de líquido corporal.',
      '**Regulación compensatoria**: taquicardia refleja y retención de líquidos.'
    ]},
    { titulo: 'Clasificación de los antihipertensivos (pág. 9)', puntos: [
      '**Primera línea**: IECA · ARA II (BRA) · **diuréticos tiazídicos** · bloqueadores de canales de calcio (BCC) · betabloqueadores (según comorbilidades).',
      '**Segunda línea**: betabloqueadores · bloqueadores alfa · agonistas alfa2 (centrales) · inhibidores directos de renina (IDR) · **espironolactona** · bloqueadores ganglionares · inhibidores neuronales periféricos (metirosina, reserpina, guanetidina, guanadrel). Criterio de la diapositiva: relación **eficacia-seguridad**.',
      'Esquema «sitios de acción» (págs. 10, 16, 22, 29, 35): betabloqueadores (propranolol) · antagonistas del receptor AT en vasos (losartán) ⚠ la diapositiva dice «AT2», debe ser AT1 · antagonistas alfa1 (prazosina) · túbulos renales: tiazidas · betabloqueadores en células yuxtaglomerulares: ↓ renina · ganglios: mecamilamina · músculo liso vascular: hidralazina, fenoldopam, minoxidil, verapamilo y otros BCC, nitroprusiato, diazóxido · centro vasomotor: metildopa, clonidina, guanabenz, guanfacina · IECA: enalapril.'
    ]},
    { titulo: 'IECA: mecanismo y farmacodinamia (págs. 10-13)', puntos: [
      'Inhiben la conversión de **angiotensina I → II**: ↓ vasoconstricción, ↓ aldosterona, ↓ resistencia vascular periférica, ↓ retención de Na y agua. **↑ bradicinina** (vasodilatación).',
      'Mecanismo antihipertensivo: inhiben la ECA · **inhiben la degradación de bradicininas** · ↑ síntesis de **prostaglandinas** · ↓ liberación de aldosterona · ↓ remodelación cardíaca.',
      'Usos: HTA + **nefropatía, IC, DM**. Pacientes con diabetes o enfermedad renal crónica.',
      'Receptores: **AT1** (clonado, metabotrópico; la mayoría de efectos de Ang II): vasoconstricción, hipertrofia de miocitos, antinatriuresis. **AT2** (clonado; tejidos fetales, desarrollo fetal): antiproliferativo, apoptosis, vasodilatador, cardioprotector; puede regular la ECA. **AT4**: «¿?» (la diapositiva lo deja con interrogante).'
    ]},
    { titulo: 'IECA: farmacocinética y clases (págs. 10, 13-14)', puntos: [
      'Absorción oral, biodisponibilidad variada. Excreción renal. **Todos son profármacos excepto captopril y lisinopril**.',
      '**Clase I (captopril)**: activo, con metabolitos también activos. **Clase II (enalapril)**: inactivos, profármacos, activación por metabolismo hepático. **Clase III (lisinopril)**: activos, **no liposolubles**, no sufren metabolismo.',
      '**Enalaprilato**: vía **IV** por su pobre absorción oral.',
      'Eliminación unifásica / bifásica / trifásica (esquema): la mayoría de los IECA · **ramipril** «de acción más prolongada» (alta afinidad por ECA + ↑ volumen de distribución) · **captopril** «de más corta acción y el menos potente». ⚠ La asignación exacta de cada fármaco al esquema es difícil de leer.',
      'Efecto antihipertensivo: **1 semana; máximo 3-6 semanas**.'
    ]},
    { titulo: 'IECA: efectos adversos', puntos: [
      '**Relacionados con la estructura química (grupo sulfhidrilo del captopril)**: (1) **erupción cutánea** (ocasionalmente con otros); (2) **neutropenia** asociada con enfermedad renal o enfermedad vascular del colágeno; (3) **disgeusia**.',
      '**Específicos de clase**: **anomalías fetales** (2.º y 3.er trimestre) · hipotensión · **hiperpotasemia** · **tos** (~1/10; mujeres > hombres; asiáticos) · insuficiencia renal · **angioedema** (negros > blancos).',
      'Otros (pág. 21): GI, hepatotoxicidad (algunos pero no todos). Fetopático «??»: no se puede probar, no se debe usar.',
      '**Mecanismo de la insuficiencia renal por IECA**: ocurre cuando la perfusión renal está ↓ (estenosis bilateral de arteria renal, ICC grave, cirrosis, deshidratación severa). Al bajar la presión de las arteriolas aferentes, la filtración se mantiene por **vasoconstricción de la arteriola eferente (Ang II)**. Si bloqueas Ang II (y quizá ↑ bradicinina) ↓ la resistencia eferente → **↓ filtración glomerular**.',
      '**Bradicinina: ¿buena o mala?** Buena: (1) los IECA ↓ la PA incluso con renina baja; (2) puede contribuir a efectos antiisquémicos (↑ t-PA); (3) puede contribuir a efectos favorables en HTA, IC y nefropatía diabética (aún no determinado). «¿Tendrán todos los beneficios de los IECA?» (pregunta sobre los ARA II).'
    ]},
    { titulo: 'IECA: contraindicaciones y recomendaciones', puntos: [
      '**Contraindicaciones**: estenosis bilateral de la arteria renal · **embarazo** · hiperkalemia · hipersensibilidad · creatinina sérica > 3 mg · estenosis aórtica severa o cardiomiopatía obstructiva.',
      '**Recomendaciones**: reducir dosis en hipovolemia · cuidado con hiperpotasemia · cuidado con complicaciones renales · no en gestación · no en estenosis bilateral de arteria renal · cuidado en insuficiencia renal o hepática.'
    ]},
    { titulo: 'ARA II (BRA, «…sartán»)', puntos: [
      '**Farmacodinamia**: bloquean el receptor **AT1**, inhibiendo vasoconstricción y liberación de aldosterona. Aumenta la actividad en **AT2** (bradicinina, vasodilatación, cardioprotección). Segundo grupo de inhibidores del SRAA.',
      '**Farmacocinética**: oral, buena biodisponibilidad (⚠ la pág. 20 dice «biodisponibilidad oral muy pobre»: contradicción de la diapositiva). Metabolismo hepático (**CYP2C9 y CYP3A4**). Excreción renal y fecal. Unión a proteínas: máxima **telmisartán**, mínima **eprosartán**.',
      '**Clínica**: alternativa a los IECA, sobre todo si hay **tos** (preferidos si IECA = intolerancia o inefectividad). ↓ PA **sin ↑ bradicinina**; menor riesgo de tos y angioedema (rara vez). Excelente tolerancia, efectos adversos similares al placebo. Efecto sobre la **HVI**. Ejemplos: losartán, valsartán, irbesartán (+ eprosartán, candesartán, olmesartán, telmisartán).',
      '**Losartán**: BRA «no específico». Su metabolito activo (**EXP3174 / «CAD 3174»**) explica que el efecto máximo ocurra a las **3-4 h** (2-3 h después del pico plasmático) y de vida media de efecto más larga. El fármaco original tiene **efecto uricosúrico** independiente del AT1 (uso secundario en gota crónica); además bloquea tromboxano A2 (efecto antiagregante). ⚠ La diapositiva escribe «CAD 3174».',
      '**Telmisartán**: agonista máximo de **PPAR-gamma** (receptores activados por proliferadores peroxisomales = factores de transcripción que regulan expresión de genes) → ⚠ mejora la resistencia a la insulina (relación escrita de forma suelta en la diapositiva).',
      'Usos sueltos de la diapositiva: **irbesartán** «↑ control del ritmo en fibrilación auricular»; **losartán** «hipertensión portal» ⚠ (flechas perdidas; verifícalo con el profe).',
      '**Efectos adversos**: hiperpotasemia (puede ser menor con losartán), mareos, rara vez angioedema; pérdida de peso, dolor abdominal; alopecia, agranulocitosis, vasculitis (⚠ la diapositiva los pone en una lista sin decir de cuál fármaco). **Olmesartán**: síndrome similar al **sprue** (enteropatía).',
      'Fármacos listados: losartán, eprosartán, irbesartán, telmisartán, candesartán, olmesartán, valsartán. ⚠ La diapositiva rotula «Profármacos» sin aclarar cuáles.'
    ]},
    { titulo: 'Tiazidas: mecanismo y farmacocinética (págs. 22-26)', puntos: [
      '**Mecanismo**: inhiben la reabsorción de **Na⁺/Cl⁻ en el túbulo contorneado distal** → ↑ excreción de Na y agua. ↓ volumen plasmático/extracelular, ↓ gasto cardíaco al inicio; ↓ **RVP a largo plazo** (**apertura de canales de K⁺** sensibles a ATP en el músculo liso vascular = vasodilatación adicional).',
      'Se **secretan** al lumen por el transporte de ácidos orgánicos del túbulo proximal. Leve inhibición de la anhidrasa carbónica. ↑ excreción de **K y Mg**; **↓ excreción de Ca y uratos**.',
      'No son efectivas con **filtración glomerular baja**. Alteran la dilución máxima, **no** la concentración máxima. Efecto neto: pérdida sostenida de sal y agua, ↓ VEC, ↓ GC.',
      'El efecto antihipertensivo se puede **invertir con ingesta de sal** y por ↑ de renina plasmática y aldosterona por la ↓ del VEC.',
      '**Farmacocinética**: absorción GI rápida; distribución en espacio extracelular; **eliminación sin cambios por el riñón** (⚠ la pág. 22 dice «Metabolismo hepático»: contradicción); vidas medias de horas a días. Ejemplos: **hidroclorotiazida, clortalidona**.',
      '**Uso**: primera línea en HTA (efectivas, seguras y baratas); ↓ PA y el riesgo de EAC e IM.'
    ]},
    { titulo: 'Tiazidas: efectos adversos, ventajas y desventajas (págs. 26-28)', puntos: [
      '**Principales**: debilidad, impotencia, ocasionalmente erupción cutánea (⚠ en la pág. 30 también «disfunción eréctil»; es el mismo dato).',
      '**Metabólicos**: hipopotasemia, hiponatremia, hiperuricemia, ↑ glucosa (alteración de tolerancia), ↑ colesterol los primeros 6 meses, ↑ calcio, ↑ litio y triglicéridos.',
      '**Suplemento de K** si: K inicial < 3 mEq/L · síntomas de hipocalemia · se trata ICC · se usa **digital** a la vez. Se pueden añadir **ahorradores de K** (ojo: hipercalemia en viejos, diabéticos, insuficiencia renal; ↑ riesgo con IECA).',
      'Dosis altas no suelen ↑ la efectividad (**hidroclorotiazida 12,5-25 mg/día**) y sí los efectos colaterales (hipocalemia).',
      '**Ventajas**: sinergia con casi todos los otros antihipertensivos; pueden ↓ la carga de NaCl y reforzar el efecto. **Desventajas**: acciones metabólicas (↑ glicemia, calcio, ácido úrico, colesterol; ↓ K); el sodio de la dieta se opone al efecto.'
    ]},
    { titulo: 'Bloqueadores de canales de calcio (BCC) (págs. 29-34)', puntos: [
      '**Mecanismo**: inhiben la entrada de Ca²⁺ en músculo liso vascular y cardíaco → vasodilatación, ↓ RVP, ↓ contractilidad. Oral, buena biodisponibilidad; metabolismo hepático (**CYP3A4**); excreción renal y fecal.',
      '**Clasificación química**: benzotiacepinas, difenilalquilaminas, **dihidropiridinas (DHP: nifedipino, amlodipino, isradipino, «…dipinos»; nimodipino, lercanidipino)**. ⚠ La diapositiva asigna verapamilo = benzotiacepina y diltiazem = difenilalquilamina; en Katzung es al revés (verapamilo = fenilalquilamina, diltiazem = benzotiazepina).',
      '**Selectividad**: verapamilo poco selectivo (cardíaco y vascular); diltiazem menos afinidad cardíaca; nifedipino muy afín a nivel periférico. **DHP actúan sobre todo en el músculo liso vascular** (más vasodilatadoras); **no DHP: mayor efecto en el corazón**, menos vasodilatadoras.',
      '**Farmacodinamia**: dilatación arteriolar, **inotropismo negativo**, depresión del automatismo sinusal y de la conducción AV, dilatación arterial. Los vasos de resistencia son más sensibles que los de capacitancia.',
      '**Nifedipino**: bloquean los canales según estén en estado activo, inactivo o reposo. Más potente como vasodilatador arteriolar y menos efecto sobre nodos SA y AV que el verapamilo; produce un **leve ↑ de la FC** que compensa el inotropismo negativo.',
      '**Usos**: HTA en mayores, **raza negra**, **HTA sistólica aislada**.',
      '**Efectos adversos**: enrojecimiento cutáneo, cefalea y mareos, hipotensión, **edema periférico**, insuficiencia cardíaca, bradicardia, bloqueo AV, **hiperplasia gingival**, efectos GI (**constipación, sobre todo con verapamilo**), taquicardia refleja (DHP).',
      '**Interacciones**: **verapamilo y diltiazem ↑ la concentración plasmática de digoxina**. Con **betabloqueadores**: bloqueo AV, depresión ventricular, inhibición sinusal.',
      '**Contraindicaciones**: bloqueo AV · hipotensión · **síndrome de Wolff-Parkinson-White** · con nifedipino: estenosis aórtica y cardiomiopatía hipertrófica.'
    ]},
    { titulo: 'Betabloqueadores (págs. 35-38)', puntos: [
      '**Mecanismo**: bloquean receptores beta → ↓ FC, ↓ contractilidad, ↓ GC, ↓ **liberación de renina** (antagonismo β1 en células yuxtaglomerulares) → ↓ AT-II, menor RVP. Oral, efecto de **primer paso**, latencia de **varios días**. Metabolismo hepático; excreción renal (varía por fármaco).',
      '**Usos**: HTA con comorbilidades: **angina, IC, post-IAM**; también ansiedad, migraña, profilaxis de la hemorragia varicosa aguda, hipertiroidismo, angina estable. **No son de primera línea en HTA esencial sin comorbilidad** (segunda línea: leve a moderada en hiperreninémicos; fármaco de elección: propranolol, con HTA).',
      '**Elección**: < 60 años con HTA no complicada; cualquier edad con IC, enfermedad coronaria o infarto (< 2 años); agente adicional en HTA descontrolada.',
      '**Ejemplos**: atenolol, metoprolol, carvedilol (⚠ la diapositiva rotula «antiadrenérgicos β1: atenolol, carvedilol»; el carvedilol no es β1-selectivo, también bloquea α1).',
      '**Efectos adversos**: bradicardia, fatiga, disfunción sexual, **broncoconstricción (asmáticos)**.',
      '**Labetalol**: bloqueador β/α1; vida media 6-8 h; metabolismo hepático; ↓ PA dosis-dependiente; **infusión 2 mg/min hasta 300 mg; VO 200-400 mg bid**.',
      '**Carvedilol**: bloqueador β y α1; biodisponibilidad 30 %, no afectada por alimentos; vida media 7-10 h (no afectada por ICC, ↑ en ancianos y hepatopatías); metabolismo hepático 98 %; indicaciones: **ICC**, HTA (estudios 12,5-50 mg bid, ↓ 9/6 mmHg, FC 7,5/min); respuesta en negros < no negros; sin diferencia por edad/sexo; pico en 1-2 h.'
    ]},
    { titulo: 'Cuadro comparativo de primera línea (pág. 39)', puntos: [
      '**IECA**: inhiben A-I → A-II · beneficio: ↓ RVS, ↓ remodelado, nefroprotección · indicados en jóvenes, diabéticos, nefropatías · riesgos: tos seca, angioedema, ↑ K.',
      '**ARA II**: bloquean AT1 · sin tos · alternativa a IECA · riesgos: ↑ K, mareos (igual que IECA).',
      '**Tiazidas**: inhiben cotransporte Na/Cl del TCD · ↓ volemia, ↑ eficacia combinada · mayores, raza negra · riesgos: hipokalemia, hiperglucemia (respuesta lenta).',
      '**Calcioantagonistas**: inhiben canales Ca²⁺ tipo L · vasodilatadores potentes · mayores, afrodescendientes · riesgos: edema, cefalea.',
      '**Betabloqueadores**: bloquean β1 (± β2) · ↓ FC, ↓ GC, ↓ actividad RAAS · comorbilidades: FA, IC, post-IAM · riesgos: bradicardia, fatiga.'
    ]},
    { titulo: 'Segunda línea: espironolactona, alfa, IDR, vasodilatadores (págs. 39-42)', puntos: [
      'Segunda línea: betabloqueadores (en comorbilidades), espironolactona, alfabloqueadores, agonistas centrales (clonidina, metildopa), inhibidores directos de renina (aliskiren).',
      '**Espironolactona**: antagonista de aldosterona; útil en **HTA resistente, IC, hiperaldosteronismo**; EA: **ginecomastia, hipercalemia**; alternativa: **eplerenona**.',
      '**Alfabloqueadores (prazosina, doxazosina)**: bloquean α1 → vasodilatación, ↓ RVP. Útiles en HTA + **HBP**; HTA resistente. EA: **hipotensión ortostática**, taquicardia refleja, mareos, fatiga. Uso limitado a casos selectivos. Oral, buena biodisponibilidad, metabolismo hepático, excreción renal y fecal.',
      '**Inhibidores directos de renina (aliskiren)**: inhiben la conversión de angiotensinógeno → A-I. Oral, baja biodisponibilidad, hepático, renal. Uso en **HTA leve-moderada**, en combinación. EA: **diarrea, hiperpotasemia**, angioedema. CI: embarazo, estenosis renal bilateral. «Tercer grupo de inhibidores del SRAA».',
      '**Vasodilatadores directos**: **hidralazina** (dilata arteriolas → HTA en embarazo, IC con nitratos); **minoxidil** (HTA severa y refractaria; requiere betabloqueador + diurético); EA: taquicardia refleja, retención hídrica, **hipertricosis (minoxidil)**. **Nitroprusiato**: vasodilatador arterial y venoso, libera óxido nítrico (⚠ la diapositiva escribe «óxido nitroso»), acción rápida, **IV** en crisis hipertensiva o ICC grave con monitorización estricta.'
    ]},
    { titulo: 'Tratamiento según estadio, edad y pasos (págs. 43-51)', puntos: [
      '**Según estadio**: prehipertensión: solo estilo de vida · **estadio 1**: diurético (tiazida), IECA o BCC · **estadio 2**: combinación de 2 fármacos según comorbilidades · **HTA resistente**: triple o cuádruple terapia.',
      '**Inicio farmacológico si**: HTA grado ≥ 1 y riesgo cardiovascular ≥ moderado. Metas: PAS < 140 (< 130 si joven), PAD < 90.',
      '**Criterio de edad**: **jóvenes (< 55)**: HTA **hiperreninémica** (activación espontánea del SRAA) → responden mejor a **IECA/ARA II**. **Mayores (≥ 55)**: HTA **hiporreninémica** (arterioesclerosis de los vasos) → mejor respuesta a **tiazidas o BCC**.',
      'Esquema A-B-C-D: **A** = IECA/ARA II · **B** = betabloqueadores · **C** = BCC · **D** = tiazídico. Si no responde a dosis máxima tras un mes → siguiente paso. Esquema de tiempos (0-4 meses): enalapril o losartán (dosificación incremental, dp) → + hidroclorotiazida (dosis fija, df) → + amlodipino (dp). Medidas higiénico-dietéticas siempre.',
      '**Escalonado**: Paso 1 monoterapia: **< 55 años: IECA/ARA II**; **≥ 55 o afrodescendiente: calcioantagonista o tiazida**. Paso 2: **IECA/ARA II + BCC o tiazida**. Paso 3: **IECA/ARA II + BCC + tiazida** (mejor en combinación fija). Paso 4: cuádruple terapia/HTA resistente: añadir **espironolactona** o betabloqueador (si hay IC o FA).',
      '**Combinaciones racionales**: IECA/ARA II + tiazida (↓ PA + protección renal) · IECA/ARA II + BCC (jóvenes, riesgo CV) · BCC + tiazida (ancianos o raza negra). **Evitar**: IECA + ARA II · combinaciones con aliskiren en DM o IRC.',
      '**HTA resistente**: PA no controlada con **≥ 3 fármacos (incluyendo diurético)**. Causas: mala adherencia, obesidad, apnea del sueño, interacciones medicamentosas, hiperaldosteronismo. Algoritmo: 1) confirmar adherencia y técnica de medición; 2) triple terapia IECA/ARA II + BCC + tiazida; 3) añadir espironolactona; 4) betabloqueador o alfabloqueador; 5) referir si persiste.',
      '**Según comorbilidad**: **IC**: BB + IECA/BRA + espironolactona · **DM o proteinuria**: IECA o ARA II · **post-IAM**: BB + IECA · **angina**: BB o BCC · **embarazo**: **metildopa, labetalol, nifedipino**. (⚠ La tabla «Criterio de enfermedades concurrentes», pág. 47, es imagen y no se leyó.)',
      '**Consideraciones finales**: fármacos de 2.ª y 3.ª línea para casos específicos · personalizar por edad, comorbilidad y respuesta · cuidado con interacciones y EA · **no usar IECA + ARA II + aliskiren**.'
    ]}
  ],

  explicacion: [
    { titulo: '1. Antes de los fármacos: ¿qué es la HTA y por qué se trata?', p: [
      'Imagínate una manguera con la presión del agua siempre un poco alta. Por fuera todo parece normal, pero por dentro la pared se va engrosando, se hace rígida y tarde o temprano revienta o se tapa. Eso es la HTA: **silenciosa, crónica, progresiva e incurable**. No se cura, se **controla de por vida**.',
      'Ojo con esto: casi nunca da síntomas. El 60 % ni sabe que la tiene. Por eso lo que cuenta es **medir la PA en dos ocasiones distintas**. En Bolivia el 60 % está sin controlar. Los síntomas (cefalea matutina, tinnitus, epistaxis, visión borrosa) aparecen cuando ya hay daño.',
      'El daño cae en los **órganos diana**: corazón (hipertrofia ventricular izquierda, angina, infarto, FA, IC con FE preservada), cerebro (ictus), riñón (ERC), arterias periféricas y retina. Y la ganancia de tratar es enorme: **ACV -35 a 40 %, infarto -20 a 25 %, IC más de 50 %**.',
      'Clasificación: óptima < 120/80, normal 120-129/80-84, normal-alta 130-139/85-89, **grado 1: 140-159/90-99**, **grado 2: 160-179/100-109**. ⚠ La diapositiva dice «> 140 / > 90» para definir HTA; las guías dicen ≥.'
    ], pausa: {
      q: 'Si cada 20 mmHg de sistólica duplica el riesgo, ¿por qué insisten tanto en la meta de < 140/90?',
      a: 'Porque bajar la PA es **reducir directamente el riesgo de ACV, IAM e IC**. Las metas de la diapositiva: < 140/90 (< 60 años), < 150/90 (> 60), < 140/80 en diabéticos/IRC/IC y < 125/75 con proteinuria > 1 g.'
    }},
    { titulo: '2. Lo primero siempre: estilo de vida', p: [
      'Antes (y junto a) cualquier pastilla: **bajar de peso** (5-20 mmHg por cada 10 kg perdidos), **dieta DASH** (8-14), **menos sal** (< 6 g/día: 2-8), **ejercicio** (4-9) y **moderar el alcohol** (2-4). Mira los números: la dieta DASH y bajar de peso rinden como un fármaco.',
      'Truco: ordénalos de mayor a menor efecto: **peso > DASH > ejercicio > sal > alcohol**. ⚠ Orden armado por mí con las cifras de la diapositiva (los rangos se traslapan).'
    ]},
    { titulo: '3. La lógica de todos los antihipertensivos', p: [
      'PA = gasto cardíaco × resistencia periférica. Entonces solo hay tres palancas: **↓ resistencia** (vasodilatar), **↓ gasto cardíaco** (frenar el corazón) y **↓ volumen** (diuréticos). Cada clase de fármacos jala una de esas palancas.',
      'Pero el cuerpo se defiende: **taquicardia refleja** y **retención de líquidos** (la «regulación compensatoria»). Por eso al vasodilatador puro (hidralazina, minoxidil) se le añade un betabloqueador y un diurético.',
      'Primera línea (las que se aprenden primero): **IECA, ARA II, tiazidas y calcioantagonistas** (y betabloqueadores solo con comorbilidad). Segunda línea: betabloqueadores, alfabloqueadores, agonistas centrales, aliskiren, espironolactona.'
    ]},
    { titulo: '4. IECA: cortarle el paso a la angiotensina II', p: [
      'El eje renina-angiotensina-aldosterona es el «acelerador» de la PA. La ECA convierte angiotensina I en II, y la II **contrae las arterias, retiene sal y agua (aldosterona) y remodela el corazón**. Si bloqueas la ECA, todo eso baja. Además la ECA también **degrada la bradicinina**: al inhibirla, la bradicinina **sube**, vasodilata y ↑ prostaglandinas. Esa bradicinina es la «chispa buena» y también la culpable de la **tos y el angioedema** (es lo que los ARA II no tienen).',
      'Se llaman «…**pril**». Casi todos son **profármacos** (enalapril se activa en hígado) **excepto captopril y lisinopril**. El **enalaprilato** se da **IV** porque por boca no se absorbe. El **captopril** es el de acción más corta y menos potente; el **ramipril**, de los más prolongados.',
      'Usos clave: **HTA con diabetes, nefropatía o IC** (nefroprotección: bajan la presión dentro del glomérulo). Efecto en 1 semana, máximo a las 3-6 semanas.',
      'Efectos adversos, pensando con lógica: **tos seca** (bradicinina; ~1 de cada 10, más en mujeres y asiáticos), **angioedema** (bradicinina; más en negros), **hiperpotasemia** (↓ aldosterona = el K se queda), **hipotensión**, **fetopatía** (por eso: embarazo = prohibido) e **insuficiencia renal** en ciertos casos. El **captopril**, por su grupo **sulfhidrilo**, da además **erupción, neutropenia y disgeusia** (cambios del sabor).'
    ], pausa: {
      q: 'Un paciente con estenosis bilateral de arteria renal empieza un IECA y la creatinina se dispara. ¿Por qué?',
      a: 'Con poca perfusión, el riñón mantiene la filtración **cerrando la arteriola eferente con angiotensina II**. Si bloqueas la Ang II, la eferente se abre, la presión dentro del glomérulo cae y **se desploma la filtración**. Lo mismo pasa en ICC grave, cirrosis o deshidratación severa. Por eso es **contraindicación**.'
    }},
    { titulo: '5. Contraindicaciones y cuidados de los IECA', p: [
      'Lista de la diapositiva: **estenosis bilateral de arteria renal, embarazo, hiperkalemia, hipersensibilidad, creatinina > 3 mg, estenosis aórtica severa o cardiomiopatía obstructiva**. Cuidados: bajar dosis si hay hipovolemia, vigilar potasio, riñón y el hígado.',
      'Combinación peligrosa: IECA + ahorradores de potasio = hiperK. Y **nunca IECA + ARA II (+ aliskiren)**: más efectos adversos sin más beneficio.'
    ]},
    { titulo: '6. ARA II («sartanes»): el mismo bloqueo, sin la tos', p: [
      'En vez de impedir que se **fabrique** angiotensina II, bloquean su **receptor AT1**. Resultado: misma ↓ de PA, pero **sin ↑ bradicinina** → casi **sin tos y casi sin angioedema**. Por eso son la **alternativa si el IECA da tos** (intolerancia) o no funciona. La Ang II sobrante puede estimular el AT2 (vasodilatador, antiproliferativo, cardioprotector).',
      'Receptores: **AT1 = vasoconstricción, hipertrofia, antinatriuresis** (el «malo»); **AT2 = antiproliferativo, apoptosis, vasodilatador, cardioprotector** (el «bueno»).',
      '**Losartán** es el «diferente»: tiene metabolito activo (EXP3174), por eso su efecto máximo llega a las 3-4 h, y **el fármaco original es uricosúrico** (baja el ácido úrico: útil si el paciente es gotoso). **Telmisartán** = agonista PPAR-gamma máximo. **Olmesartán** = puede dar un cuadro tipo **sprue** (diarrea y pérdida de peso).',
      'Efectos adversos: hiperK (menor con losartán), mareos, rara vez angioedema. Misma lista de contraindicaciones que IECA (embarazo, estenosis renal bilateral). ⚠ Que sean «fetotóxicos» no está explícito en la diapositiva de ARA II, pero la regla de los exámenes es: **IECA y ARA II prohibidos en embarazo**.'
    ], pausa: {
      q: 'Paciente tratado con enalapril desarrolla tos seca persistente. ¿Cambias a qué?',
      a: 'A un **ARA II** (losartán, valsartán…): bloquea AT1 sin aumentar bradicinina, y mantiene el beneficio cardiorrenal.'
    }},
    { titulo: '7. Tiazidas: perder sal, perder volumen, y vasodilatar', p: [
      'Actúan en el **túbulo contorneado distal** bloqueando el cotransportador **Na⁺/Cl⁻**. Pierdes sal y agua → ↓ volumen → ↓ gasto cardíaco al inicio. Pero **a largo plazo** el volumen se recupera un poco y lo que sostiene el efecto es una ↓ de la resistencia periférica por **apertura de canales de K⁺** en el músculo liso vascular.',
      'Dos detalles de examen: (1) **no sirven con filtración glomerular baja** (no llegan al sitio de acción o el riñón no filtra) y (2) **se oponen a la sal**: si el paciente come mucho sodio, el efecto se anula. También **reabsorben calcio** (↓ excreción de Ca) y **retienen uratos**.',
      'Ejemplos: **hidroclorotiazida** (12,5-25 mg/día: más dosis no mejora y sí da hipoK) y **clortalidona** (más duración). Son de **primera línea**: efectivas, seguras y baratas. Ideales en **mayores y raza negra** (HTA hiporreninémica).',
      'Efectos adversos: **hipopotasemia, hiponatremia, hiperuricemia (gota), hiperglucemia, ↑ colesterol/triglicéridos, ↑ calcio**, debilidad, impotencia, erupción, ↑ litio. Dar suplemento de K si K < 3, síntomas, ICC o **digoxina**. Se pueden combinar con un ahorrador de K, pero cuidado con IECA (hiperK).',
      'Ventaja: **sinergismo con casi todos los antihipertensivos** (por eso están en las combinaciones fijas).'
    ], pausa: {
      q: 'Un hipertenso gotoso y diabético: ¿qué tiazida te preocupa y por qué?',
      a: 'La tiazida **sube ácido úrico y glucosa**, así que empeora gota y control glucémico. En el paciente con DM la primera opción suele ser un **IECA/ARA II**. (La pregunta de examen con DM + gota: elegir IECA/ARA II, no diurético.)'
    }},
    { titulo: '8. Calcioantagonistas: el calcio es el que contrae', p: [
      'El Ca²⁺ entra al músculo liso (y al corazón) y lo contrae. Si bloqueas el canal L: **vasodilatación**, ↓ RVP y ↓ contractilidad. Dos grandes grupos: **DHP (dipinos: amlodipino, nifedipino, nimodipino, lercanidipino…) = actúan sobre los vasos**, y **no DHP (verapamilo, diltiazem) = actúan sobre el corazón** (nodo SA, AV, contractilidad).',
      'Regla fácil: **DHP = vasos; verapamilo y diltiazem = corazón + vasos**. Por eso: el **verapamilo da bradicardia, bloqueo AV y estreñimiento**, y el **nifedipino da edema y taquicardia refleja**. Todos los vasos de resistencia (arterias) son más sensibles que las venas.',
      'Usos: HTA en **mayores, raza negra, HTA sistólica aislada**. Efectos adversos: rubor, cefalea, mareo, **edema periférico** (por vasodilatación arteriolar, no es de líquido sobrante), **hiperplasia gingival**, hipotensión, constipación.',
      'Interacciones: **verapamilo y diltiazem ↑ digoxina**; con **betabloqueadores**: bloqueo AV y depresión ventricular (se suman al «freno» del corazón). Contraindicados: **bloqueo AV, hipotensión, Wolff-Parkinson-White** (y nifedipino con estenosis aórtica o cardiomiopatía hipertrófica).',
      '⚠ La diapositiva clasifica verapamilo como «benzotiacepina» y diltiazem como «difenilalquilamina»; en Katzung están al revés (verapamilo = fenilalquilamina; diltiazem = benzotiazepina). Si te lo preguntan por nombre, verifica con el profe.'
    ]},
    { titulo: '9. Betabloqueadores: no son de primera línea… salvo con motivo', p: [
      'Frenan al corazón (↓ FC, contractilidad, GC) y bloquean la liberación de **renina** en el riñón (β1 yuxtaglomerular). Latencia de días. Son útiles cuando el paciente **además** tiene algo que los necesita: **angina, post-IAM, IC, FA**, y también migraña, ansiedad, hipertiroidismo, varices esofágicas.',
      'Sin comorbilidad, **no son primera línea** en HTA esencial. Efectos adversos: **bradicardia, fatiga, disfunción sexual, broncoconstricción** (asmático = no).',
      '**Labetalol** y **carvedilol** bloquean β y α1 (vasodilatan también). Labetalol: infusión 2 mg/min hasta 300 mg; VO 200-400 mg c/12 h; sirve en embarazo y crisis. Carvedilol: elección en **ICC**.'
    ]},
    { titulo: '10. Segunda línea y vasodilatadores', p: [
      '**Espironolactona**: bloquea la aldosterona; es la reina de la **HTA resistente**, del **hiperaldosteronismo** y de la IC. Alternativa **eplerenona** (no da ginecomastia ⚠ no está en la diapositiva). EA: ginecomastia, hiperK.',
      '**Alfabloqueadores (prazosina, doxazosina)**: vasodilatan y a la vez ayudan con la **próstata (HBP)**. EA: **hipotensión ortostática** (efecto de la primera dosis ⚠), taquicardia refleja.',
      '**Aliskiren**: inhibe la renina (primer paso de la cascada). Tercer grupo del SRAA. EA: diarrea, hiperK, angioedema. CI: embarazo y estenosis renal bilateral. **No combinar con IECA/ARA II**, sobre todo en DM e IRC.',
      '**Hidralazina**: dilata arteriolas; sirve en **HTA del embarazo** y en IC (con nitratos). **Minoxidil**: HTA severa refractaria; da **hipertricosis**. Ambos necesitan **betabloqueador + diurético** (por la taquicardia y la retención). **Nitroprusiato**: IV, libera NO, vasodilata arterias y venas, para **crisis hipertensiva** o ICC grave con monitorización estricta.',
      '**Embarazo**: **metildopa, labetalol, nifedipino** (nunca IECA/ARA II).'
    ]},
    { titulo: '11. Cómo se elige: edad, renina y escalones', p: [
      'Idea central: **jóvenes → renina alta (hiperreninémica) → IECA/ARA II**; **mayores y afrodescendientes → renina baja (hiporreninémica, vasos rígidos) → calcioantagonistas o tiazidas**. Corte: **55 años**.',
      'Escalera: **Paso 1** monoterapia según perfil. **Paso 2** IECA/ARA II + (BCC o tiazida). **Paso 3** los tres juntos (mejor en pastilla única). **Paso 4**: añadir **espironolactona** (o betabloqueador si IC/FA). Siempre medidas de estilo de vida.',
      'Combinaciones buenas: **IECA/ARA II + tiazida** (protección renal), **IECA/ARA II + BCC** (jóvenes, riesgo CV), **BCC + tiazida** (ancianos, raza negra). **Mala: IECA + ARA II**.',
      '**HTA resistente** = PA no controlada con **≥ 3 fármacos incluyendo un diurético**. Primero descarta: mala adherencia, mala técnica de medición, obesidad, apnea del sueño, interacciones (AINEs ⚠), hiperaldosteronismo. Luego espironolactona.',
      'Por comorbilidad: **IC** → BB + IECA/ARA II + espironolactona · **DM/proteinuria** → IECA o ARA II · **post-IAM** → BB + IECA · **angina** → BB o BCC · **embarazo** → metildopa, labetalol, nifedipino.'
    ], pausa: {
      q: 'Mujer de 40 años con HTA grado 1, sin comorbilidades, ¿con qué empiezas?',
      a: '**IECA o ARA II** (< 55 años). Si fuera afrodescendiente o ≥ 55, tiazida o calcioantagonista. Si estuviera embarazada: metildopa, labetalol o nifedipino.'
    }}
  ],

  memoria: {
    columnas: ['Fármaco / clase', 'Mecanismo', 'Usos', 'Efectos adversos', 'Contraindicaciones / ojo con…'],
    filas: [
      ['IECA (captopril, enalapril, lisinopril, ramipril)', 'Inhiben ECA (AI→AII); ↓ aldosterona; ↑ bradicinina y prostaglandinas', 'HTA, DM, nefropatía, IC, post-IAM', 'Tos seca, angioedema, hiperK, hipotensión, ↓ función renal, fetopatía. Captopril: erupción, neutropenia, disgeusia', 'Embarazo, estenosis bilateral de arteria renal, hiperK, Cr > 3 mg, estenosis aórtica severa. Todos profármacos excepto captopril y lisinopril'],
      ['ARA II (losartán, valsartán, irbesartán, candesartán, telmisartán, olmesartán, eprosartán)', 'Bloquean receptor AT1', 'Alternativa a IECA (tos); HTA, DM, IC', 'hiperK, mareos, rara vez angioedema; olmesartán: sprue-like; ⚠ alopecia, agranulocitosis, vasculitis (sin fármaco claro)', 'Embarazo ⚠ (regla de examen). Losartán: uricosúrico, metabolito EXP3174; telmisartán: PPAR-gamma'],
      ['Tiazidas (hidroclorotiazida, clortalidona, indapamida)', 'Inhiben Na⁺/Cl⁻ en TCD; abren canales K⁺ vasculares', 'HTA 1.ª línea, mayores, raza negra; ICC leve; hipercalciuria', 'HipoK, hipoNa, hiperuricemia, hiperglucemia, ↑ colesterol/TG, ↑ Ca, ↑ litio, debilidad, impotencia', 'No sirven con FG bajo; sal anula el efecto; K < 3 o digital: suplementar K. HCTZ 12,5-25 mg/día'],
      ['BCC dihidropiridinas (amlodipino, nifedipino, nimodipino, lercanidipino)', 'Bloquean canal Ca²⁺ L en músculo liso vascular', 'HTA en mayores, raza negra, sistólica aislada; embarazo (nifedipino)', 'Edema periférico, cefalea, rubor, taquicardia refleja, hiperplasia gingival', 'Nifedipino: estenosis aórtica, cardiomiopatía hipertrófica, hipotensión'],
      ['BCC no DHP (verapamilo, diltiazem)', 'Bloquean Ca²⁺ en corazón y vasos; ↓ automatismo y conducción AV', 'HTA, angina', 'Bradicardia, bloqueo AV, IC, estreñimiento (verapamilo)', 'Bloqueo AV, hipotensión, WPW; ↑ digoxina; con betabloqueador: bloqueo AV'],
      ['Betabloqueadores (atenolol, metoprolol, carvedilol, propranolol)', 'Bloquean β; ↓ FC, GC y renina', 'HTA + angina, IC, post-IAM, FA, migraña', 'Bradicardia, fatiga, disfunción sexual, broncoconstricción', 'Asma. No 1.ª línea sin comorbilidad. Labetalol/carvedilol: β + α1'],
      ['Espironolactona / eplerenona', 'Antagonistas de aldosterona', 'HTA resistente, IC, hiperaldosteronismo', 'Ginecomastia, hiperK', 'Alternativa eplerenona'],
      ['Alfabloqueadores (prazosina, doxazosina)', 'Bloquean α1 → vasodilatación', 'HTA + HBP; HTA resistente', 'Hipotensión ortostática, taquicardia refleja, mareos, fatiga', 'Uso limitado'],
      ['Aliskiren', 'Inhibe renina (angiotensinógeno → AI)', 'HTA leve-moderada, combinado', 'hiperK, diarrea, angioedema', 'Embarazo, estenosis renal bilateral; no con IECA/ARA II en DM o IRC'],
      ['Hidralazina / minoxidil / nitroprusiato', 'Vasodilatadores directos', 'Hidralazina: embarazo, IC (+ nitratos). Minoxidil: HTA refractaria. Nitroprusiato: crisis hipertensiva, ICC grave (IV)', 'Taquicardia refleja, retención hídrica; minoxidil: hipertricosis', 'Dar BB + diurético con hidralazina/minoxidil; nitroprusiato con monitorización estricta'],
      ['Agonistas centrales (metildopa, clonidina, guanabenz, guanfacina)', '⚠ Actúan en el centro vasomotor (solo se nombran en la diapositiva)', 'Metildopa: embarazo', '⚠ no vienen en la diapositiva', '⚠ Datos de mecanismo/EA no están en la diapositiva']
    ],
    notas: [
      'Embarazo: **metildopa, labetalol, nifedipino**. Prohibidos: IECA, ARA II, aliskiren.',
      'Efecto «estrella»: IECA = tos/angioedema/hiperK; tiazida = hipoK/hiperuricemia/hiperglucemia; DHP = edema; verapamilo = estreñimiento/bloqueo AV; BB = bradicardia/asma; espironolactona = ginecomastia/hiperK.'
    ]
  },

  preguntan: [
    { tipo: 'IECA: efecto adverso casi exclusivo (se repite)',
      texto: '«Los IECA y los ARA tratan la HTA de forma similar y tienen efectos secundarios similares. ¿Cuál es un efecto secundario casi exclusivo de los IECA?» → **tos seca** (opciones: mareos, acúfenos, disfunción eréctil, hipotensión). Variante: «IECA causan los siguientes EA, EXCEPTO: tos persistente, cambios en el sabor, hipotensión en la primera dosis, **edema de tobillo**, angioedema» → el edema de tobillo es del calcioantagonista. ⚠ Letra de la respuesta no leída (OCR).',
      trampa: 'Tos = bradicinina (IECA, no ARA II). Edema de tobillo = BCC dihidropiridina, no IECA.' },
    { tipo: 'Clave 1-4: IECA y captopril',
      texto: '«Son efectos de los IECA: 1) inhiben la degradación de bradicininas, 2) ↑ síntesis de prostaglandinas, 3) ↓ remodelación cardíaca, 4) **aumentan** la liberación de aldosterona» (4 es falsa). «El grupo sulfhidrilo del captopril es responsable de: erupción cutánea, neutropenia asociada a enfermedad renal o vascular del colágeno…» (disgeusia; **fetopatía no**). Otra: «Son fármacos relacionados con tos: captopril, losartán, diclofenaco, propranolol». ⚠ OCR ruidoso.',
      trampa: 'IECA **disminuyen** la aldosterona. La fetopatía es de clase, no del sulfhidrilo. Losartán no da tos de forma típica.' },
    { tipo: 'Caso: HTA + diabetes (+ proteinuria / enfermedad renal)',
      texto: '«El tratamiento de elección en la hipertensión con diabetes mellitus es con: **inhibidores de la ECA**.» «Paciente con DM2 e hipertensión con proteinuria reciente: ¿qué fármaco retrasa más la enfermedad renal?» → **enalapril** (no metoprolol, nifedipino, indapamida ni diltiazem). «HTA + enfermedad renal tratado con IECA: disminuye la progresión de la enfermedad renal, puede causar hipercalemia, contraindicado en estenosis bilateral de arteria renal, reduce la mortalidad CV».',
      trampa: 'Diabético/proteinuria = IECA o ARA II. No betabloqueador, no tiazida como elección.' },
    { tipo: 'Caso: varón diabético con gota (elegir antihipertensivo)',
      texto: '«Varón de 50 años con DM2, función renal normal, sin microalbuminuria, hiperuricemia asintomática pero con ataques de gota… ¿cuál sería la primera opción más racional?» (opciones: IECA o ARA II, betabloqueador, nifedipina, diurético, verapamilo o diltiazem). ⚠ La respuesta esperada por lógica de la diapositiva es **IECA/ARA II** (el losartán además es uricosúrico); la clave no se alcanza a leer.',
      trampa: 'No diurético (↑ ácido úrico, ↑ glucosa) ni betabloqueador.' },
    { tipo: 'Tiazidas: usos, EA, mecanismo a largo plazo',
      texto: '«Los diuréticos tiazídicos se pueden utilizar para: hipertensión, hipercalciuria idiopática con nefrocalcinosis, ICC, hiperlipidemia (falsa)». «HCTZ puede producir: hiperuricemia, hiperglucemia, hipercolesterolemia, **hipopotasemia**» (fenofibrato/fluvastatina eran distractores). «Tras varias semanas de HCTZ, la acción antihipertensiva se asocia con: ↓ **resistencia vascular periférica**» (no gasto cardíaco, no volumen intersticial). «¿Qué diurético causa hipercalcemia?» → **hidroclorotiazida**. «HTA + antecedente de nefrolitiasis: diurético que reduce cálculos de calcio» → **hidroclorotiazida**.',
      trampa: 'Efecto agudo = ↓ volumen y GC; efecto crónico = ↓ RVP. Tiazida **retiene calcio** (no lo pierde como el asa).' },
    { tipo: 'Calcioantagonistas: cuál actúa en el músculo liso vascular / constipación',
      texto: '«¿Cuál de los siguientes es un bloqueador de canales de calcio que actúa principalmente en el músculo liso vascular?» → **amlodipino** (distractores: diltiazem, verapamilo, nitroprusiato, losartán). «Fármaco antihipertensivo que actúa por vasodilatación directa: labetalol, clonidina, enalapril, **nifedipino**, losartán.» «Paciente hipertensa y anginosa usando verapamilo con constipación… ¿qué laxante osmótico?» (sulfato de magnesio entre las opciones ⚠). «Hombre de 54 años con taquicardia, palpitaciones, rubor y vértigo tras iniciar tratamiento de angina: ¿qué fármaco lo causó?» (propranolol, verapamilo, diltiazem, nitroglicerina, nifedipino; ⚠ lo más lógico es la **nitroglicerina o el nifedipino**: rubor + taquicardia refleja).',
      trampa: 'DHP = vasos; verapamilo/diltiazem = corazón. Verapamilo = constipación. «Qué efecto causan tanto atenolol como diltiazem» → ↓ frecuencia cardíaca.' },
    { tipo: 'Antihipertensivos y asma / crisis hipertensiva',
      texto: '«Un paciente asmático acude con crisis hipertensiva. ¿Cuál de los grupos NO se debe administrar?» → **antagonistas betaadrenérgicos no selectivos**. «Cuál de los siguientes es un inhibidor de la síntesis de renina» (opciones: propranolol, enalapril, diazóxido, losartán, espironolactona) ⚠ propranolol reduce la liberación de renina; el inhibidor directo de renina es aliskiren (no está en las opciones leídas).',
      trampa: 'No selectivo (propranolol) = broncoespasmo. Ojo con confundir «↓ liberación de renina» con «inhibidor directo».' },
    { tipo: 'Vasodilatadores y urgencia hipertensiva',
      texto: '«Vasodilatador mixto indicado en urgencias hipertensivas»: **nitroprusiato de sodio** (otras opciones: amlodipino, hidralazina). «Vasodilatador arteriolar selectivo, indicado también en insulinoma»: **diazóxido** (minoxidil e hidralazina como distractores). «Antihipertensivo de elección en HTA con insuficiencia sistólica compensada y angina»: atenolol, losartán, metoprolol, enalapril ⚠ la clave no se lee.',
      trampa: 'Nitroprusiato = arterial **y venoso** (mixto). Diazóxido = arteriolar y también ↑ glucosa.' },
    { tipo: 'Antihipertensivos y glucosa',
      texto: '«Los siguientes antihipertensivos pueden afectar el control de la glucosa en diabéticos: hidroclorotiazida, clortalidona, propranolol…» (clave 1-4). Otra: «grupos que pueden aumentar la glucemia: tiazidas, estatinas, corticosteroides…».',
      trampa: 'Tiazidas y betabloqueadores (no selectivos) empeoran la glucemia; IECA/ARA no.' }
  ],

  consejo: [
    '🧠 **Primera línea = A C D (+ B con comorbilidad)**: **A**ngiotensina (IECA/ARA II), **C**alcio (BCC), **D**iurético (tiazida), **B**etabloqueador solo con motivo.',
    '🧠 **< 55 años = A (IECA/ARA II); ≥ 55 o raza negra = C o D.** Jóvenes renina alta, mayores renina baja.',
    '🧠 **Tos y angioedema = bradicinina = IECA.** Si tose → ARA II.',
    '🧠 **Embarazo:** NO IECA/ARA II/aliskiren. SÍ **metildopa, labetalol, nifedipino** (y hidralazina para urgencias ⚠).',
    '🧠 **Tiazida:** pierde Na, K, Mg; retiene Ca, ácido úrico y glucosa. Por eso «hipo K, hiper Ca, hiper úrico, hiper glucosa».',
    '🧠 **DHP = vasos (edema); verapamilo = corazón (estreñimiento, bloqueo AV).**',
    '🧠 **Evitar: IECA + ARA II + aliskiren.**'
  ]
});
