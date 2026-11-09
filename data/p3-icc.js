registrarTema({
  id: 'p3-icc',
  ficha: {
    fuente: 'Fármacos para Insuficiencia Cardíaca - Dra. Crespo.pdf (Farmacología clínica de la IC, UMSS 2022)',
    diapositivas: 'diap. 1-104 (números impresos en cada diapositiva). Cubre IC crónica con FE reducida (ICFER) y IC aguda.',
    examenes: '3.er parcial 2018-2025: insuficiencia cardíaca ~50 menciones (🔥🔥); Final ~22. Casi todos los años cae digoxina, IECA/ARA II/ARNI, β-bloqueadores, espironolactona/eplerenona, ivabradina, inotrópicos de IC aguda.',
    avisos: [
      '⚠ Muchas diapositivas son solo imagen o esquema y no se pudo leer su texto: diap. 5-6 y 8 (fisiopatología/criterios de Framingham), 9-12 (NYHA, diagnóstico inicial), 19 (esquema SRAA), 23-24 (mecanismo digitálico), 39-40, 51-53, 69, 75-76 (ivabradina), 78 (mecanismo de nitratos), 81-84 (esquema de tratamiento), 87-90 (IC sistólica vs diastólica), 95-98 (clasificación de Forrester y shock cardiogénico). Si en clase viste algo que no está aquí, avísame.',
      '⚠ En la tabla de efectos hemodinámicos y neurohormonales de la digoxina (diap. 27-28) se perdieron las flechas ↑/↓: lo que pongo en la explicación sobre la dirección del efecto es deducido y está marcado ⚠.',
      '⚠ El caso clínico de la diap. 20 (varón de 65 años, miocardiopatía dilatada viral, FEVI 20 %, clase III etapa C) NO trae respuesta en la diapositiva; la respuesta que doy está marcada ⚠.',
      '⚠ Las diapositivas tienen erratas visibles (dosis de nitroglicerina «mg/min», «3,125 c/12 mg», «nevibolol», estudio DIG «ng/dl»): copio lo que dice y marco ⚠.',
      '⚠ = dato que NO está en las diapositivas (sale de lógica farmacológica, de Katzung o de un examen). Verifícalo antes de memorizarlo.'
    ]
  },

  diapositiva: [
    { titulo: 'Objetivos de la clase (diap. 1-4)', puntos: [
      'Reconocer los fármacos de la **IC con fracción de eyección reducida (ICFER)** y de la **IC aguda**.',
      'Definir concepto, diagnóstico y fisiopatología de ICFER; objetivos del tratamiento; clasificar los fármacos.',
      'Explicar el mecanismo, efectos, aplicación y EA de: **inotrópicos positivos, digitálicos** (intoxicación: factores, signos, tratamiento), **diuréticos, IECA y ARA, β-bloqueadores** (cómo titularlos), **vasodilatadores**, IC aguda e **inotrópicos/vasopresores**.'
    ]},
    { titulo: 'Fisiopatología, clasificación y diagnóstico (diap. 5-12)', puntos: [
      'Esquema de la IC (diap. 7): patología cardíaca → deficiencia de bomba → barorreceptor activado, hipoperfusión renal, hipoperfusión de tejidos, depleción de catecolaminas cardíacas → **mecanismos compensadores**: contractilidad aumentada, **renina-angiotensina-aldosterona**, vasoconstricción, retención de sal y agua → aumento exagerado de **precarga**, dilatación cardíaca, hipertrofia cardíaca, **congestión y edemas**.',
      'Se muestran los **criterios de Framingham**, la **clasificación funcional NYHA** y el diagnóstico inicial de la IC (diap. 9-11: imágenes ⚠ sin texto).',
      '**Etiología**: **isquémica** (cardiopatía isquémica con enfermedad coronaria significativa) o **no isquémica** (cardiopatía hipertensiva, miocardiopatías de distinto origen, valvular o congénita).',
      '**Diagnóstico integrado**: 1) **ICFER**, etiología isquémica, estadio C, CF III: síntomas y signos con **FEVI <40 %**, por cardiopatía coronaria, disnea a esfuerzos menores. 2) **ICFEP**, etiología hipertensiva, CF II: **FEVI ≥50 %**, disnea a esfuerzos moderados.'
    ]},
    { titulo: 'Objetivos y opciones de tratamiento (diap. 13-18)', puntos: [
      '**Objetivos**: prevenir la aparición y la progresión de la enfermedad; reducir mortalidad y hospitalizaciones; aliviar síntomas y mejorar calidad de vida.',
      'Opciones: **no farmacológico**, **farmacológico** (objetivo de la clase), **eléctrico** (DAI-TRC), **quirúrgico** (revascularización, reconstrucción ventricular, cirugía valvular mitral, asistencia circulatoria mecánica, trasplante).',
      'El **defecto principal de la IC temprana está en el acoplamiento excitación-contracción**. También afecta reflejo barorreceptor, sistema nervioso simpático, riñones, angiotensina II y otros péptidos, muerte de células cardíacas.',
      'Fármacos dirigidos a: **precarga, poscarga, frecuencia cardíaca, contractilidad**. Grupos: IECA, vasodilatadores, bloqueadores del receptor de angiotensina, diuréticos, β-bloqueantes, inotrópicos +, glucósidos cardíacos, bipiridinas.',
      'Metas del tratamiento: supervivencia, capacidad de esfuerzo, calidad de vida, morbilidad, alteraciones neurohormonales, progresión de la ICC, síntomas.',
      'Caso clínico (diap. 20): varón de 65 años, disnea de esfuerzo semanas después de una enfermedad viral; edema de pies y tobillos, fatiga; ortopnea ligera; pulso 105/min, PA 90/60; estertores en bases, ingurgitación yugular, hepatomegalia, edema 3+; eco con corazón dilatado, FEVI ≈20 % (normal 60 %). Diagnóstico: **miocardiopatía dilatada viral, IC clase III, estadio C**. «¿Cuál es el tratamiento indicado?» ⚠ sin respuesta escrita en la diapositiva.'
    ]},
    { titulo: 'I. Digitálicos: química y farmacocinética (diap. 21-22)', puntos: [
      'Provienen de plantas: **Digitalis lanata → digoxina**; Digitalis purpurea.',
      'Tabla **ouabaína / digoxina / digitoxina**: liposolubilidad baja / media / alta; disponibilidad oral **0 / 75 / 90 %**; vida media **21 h / 40 h / 168 h**; unión a proteínas **0 / 20-40 / 90 %**; metabolismo **0 / -40 / +80 %**; volumen de distribución (L/kg) **18 / 6,3 / 0,6**.'
    ]},
    { titulo: 'Digoxina: mecanismo y efectos (diap. 23-28)', puntos: [
      '**Farmacodinamia**: inhiben la **Na⁺/K⁺ ATPasa**.',
      '**Efectos mecánicos**: ↑ intensidad de la contracción cardíaca. Al inhibir la ATPasa de Na/K ↑ Na⁺ intracelular → disminución relativa de la expulsión de Ca²⁺ → el **SERCA secuestra más Ca²⁺ citoplásmico en el retículo sarcoplásmico**.',
      '**Efectos eléctricos**: ↓ frecuencia sinusal; ↑ automatismo ectópico; **prolonga el período refractario del nodo AV**; acorta la duración del potencial de acción y de los períodos refractarios auricular y ventricular; deprime excitabilidad y velocidad de conducción intracardíaca. **Posdespolarizaciones tardías** → latido ectópico, bigeminismo, taquicardia, fibrilación.',
      '**Efectos hemodinámicos** (diap. 27, flechas perdidas ⚠): volumen minuto, fracción de eyección del VI, tolerancia al ejercicio, natriuresis, activación neurohormonal. ⚠ Deducido: ↑ volumen minuto, ↑ FE, ↑ tolerancia, ↑ natriuresis, ↓ activación neurohormonal.',
      '**Efectos neurohormonales** (diap. 28, flechas perdidas ⚠): noradrenalina plasmática, actividad nerviosa simpática periférica, actividad del SRAA, tono vagal; **normaliza los barorreceptores arteriales**. ⚠ Deducido: ↓ NA, ↓ simpático, ↓ SRAA, ↑ tono vagal.'
    ]},
    { titulo: 'Intoxicación digitálica (diap. 29-34)', puntos: [
      '**Estrecho margen de seguridad**. Evitar la digitalización; administrar **dosis bajas**; adecuar a la depuración de creatinina; monitorizar niveles plasmáticos. **Estudio DIG: 0,5 a 0,8 ng/dl** ⚠ (en la literatura suele escribirse ng/mL).',
      '**Manifestaciones cardíacas**: arritmias **ventriculares** (extrasístoles, TV, FV) y **supraventriculares**; bloqueos sinoauricular y AV; **ECG**: prolongación del PR, **acortamiento del QT**, aplanamiento o inversión de la onda T, depresión del ST; agravamiento de la IC.',
      '**Extracardíacas**: **gastrointestinales** (anorexia, náuseas, vómitos, diarrea, dolor abdominal); neurológicas (cefalea, fatiga, neuralgias) y psiquiátricas (delirio, desorientación, confusión); **visuales** (visión borrosa, alteración de la percepción de colores); **endócrinas** (hiperestrogenismo, ginecomastia, galactorrea).',
      '**Electrolitos**: **hipopotasemia** → mayor toxicidad; **hipercalcemia** agrava las arritmias inducidas por digoxina; **hipomagnesemia** → extrasístoles.',
      '**Tratamiento**: 1) suprimir la digoxina; 2) administrar **potasio**; 3) buscar factores que aumentan la intoxicación; 4) **taquiarritmias: lidocaína**; 5) cardioversión; 6) **bradicardia o bloqueo SA/AV: atropina**, marcapaso temporal; 7) **anticuerpos específicos antidigoxina**.'
    ]},
    { titulo: 'Digoxina: interacciones e indicaciones (diap. 35-37)', puntos: [
      '**Aumentan la digoxinemia**: ↑ biodisponibilidad oral (**omeprazol**, antibióticos, anticolinérgicos); ↓ eliminación renal (**captopril, quinidina, amiodarona, bloqueantes de canales de Ca²⁺**); alteraciones electrolíticas (hipopotasemia, hipomagnesemia, hipercalcemia); fármacos que **desplazan a la digoxina de las proteínas** (fenitoína, antidiabéticos orales, anticoagulantes orales, clofibrato).',
      '**Disminuyen la digoxinemia**: ↓ absorción oral (neomicina, fenobarbital, fenitoína, sulfasalazina); ↑ aclaramiento renal (vasodilatadores como nitroprusiato, hidralazina); ↑ volumen de distribución.',
      'Lista de la diap. 37: **AUMENTA**: alprazolam, diltiazem, nifedipino, verapamilo, prazosina, telmisartán, amiodarona, quinidina, propafenona, macrólidos, itraconazol, ciclosporina, cloroquina, hidroxicloroquina; **riesgo de bloqueo AV**: β-bloqueantes. **REDUCE**: antiácidos, neomicina, rifampicina, carbamazepina, primidona, fenitoína, gentamicina, telitromicina, TMP, acarbosa.',
      '**Indicaciones**: 1) IC con **fibrilación auricular**; 2) IC con **3.er ruido**; 3) IC dilatada sin mejoría con diuréticos + IECA, o que no toleran IECA, ARA II ni la asociación isosorbida-hidralazina.'
    ]},
    { titulo: 'II. Otros inotrópicos positivos (diap. 38-44)', puntos: [
      '**Bipiridinas: milrinona**. EV, vida media 3-6 h, eliminación renal 10-40 %. **Inhiben la fosfodiesterasa 3** → ↑ entrada de Ca²⁺ al corazón durante el potencial de acción. Origina arritmias. Uso: **IC aguda o exacerbación grave de la ICC**. Toxicidad (de la inamrinona): náuseas/vómitos, arritmias, **trombocitopenia**, alteración de enzimas hepáticas.',
      '**Estimulantes β-adrenérgicos – dobutamina**: ↑ GC con ↓ de la presión de llenado ventricular; **↑ consumo de oxígeno**; **↑ arritmias y mortalidad**.',
      '**En investigación**: **istaroxima** (esteroide: inhibe Na⁺/K⁺ ATPasa + facilita el secuestro de Ca²⁺ por el retículo; quizá menos arritmogénico que digoxina); **levosimendán** (sensibiliza la troponina al Ca²⁺, también inhibe fosfodiesterasa, cierta vasodilatación); **omecamtiv mecarbilo** (parenteral: activa la miosina cardíaca, prolonga la sístole sin ↑ consumo de O₂).'
    ]},
    { titulo: 'III. Diuréticos y antagonistas de aldosterona (diap. 45-48)', puntos: [
      '**Efectos de los diuréticos**: ↓ volemia y precarga (mejora síntomas de congestión); **no modifican el volumen minuto** (disminuye si reducen excesivamente la precarga); mejora distensibilidad arterial; **activación neurohormonal** (↑ niveles de Na⁺, Ang II y ARP) **excepto aldosterona que ↓**. ⚠ La diapositiva dice «activación neurohormonal ↑/↓» sin flechas legibles.',
      '**Diuréticos de asa**: excretan **15-25 % del Na⁺ filtrado**; eliminan K⁺, Ca²⁺ y Mg²⁺; ↓ resistencia de arteriolas aferentes → ↑ flujo cortical y VFG; liberan PG renales (**los AINES pueden antagonizar la diuresis**). **Furosemida** dosis inicial 20-40 mg cada 12-24 h, máx. 240 mg/24 h.',
      '**Ahorradores de potasio**: eliminan ~5 % del Na⁺ filtrado; inhiben el intercambio Na⁺ por K⁺ o H⁺. **Espironolactona**: antagonista competitivo del receptor de aldosterona; 25 mg c/24 h, dosis máxima 50 mg. Otros: finerenona, apararenona, esaxerenona ⚠ (nombres como aparecen).',
      '**Acciones de la aldosterona en la IC**: ↑ retención de Na⁺ y agua (→ edema, ↑ presiones de llenado); pérdida de K⁺ y Mg²⁺ (→ arritmogénesis, muerte súbita); ↓ captación de NE por el miocardio (potencia efectos de NE, remodelamiento); ↓ sensibilidad de **barorreceptores**; **fibrosis miocárdica**, proliferación de fibroblastos (remodelación y disfunción ventriculares); alteración en la expresión de canales de Na⁺; ↓ actividad parasimpática; mayor excitabilidad y contractilidad de miocardiocitos.'
    ]},
    { titulo: 'IV. Inhibidores de la ECA (diap. 49-64)', puntos: [
      '**Química**: grupo **sulfhidrilo** (captopril, zofenopril); **fosfonilo** (fosinopril); **carboxilo** (enalapril, quinapril, ramipril, benazepril, lisinopril, espirapril, cilazapril).',
      'Existe un sistema renina-angiotensina **cardíaco autócrino** (C-RA) independiente del endocrino: la Ang II estimula a los fibroblastos cardíacos (más matriz extracelular, más α-actina de músculo liso, ↑ integrinas); efectos **bloqueados por ARA II (AT1) e IECA**. La cardiopatía hipertensiva (remodelamiento, hipertrofia, fibrosis) es antesala de la IC.',
      '**Captopril**: biodisponibilidad 65 % (↓ por alimentos); inicio 15-30 min; VM 2 h, persiste 8-12 h; metabolismo hepático; eliminación renal (40 % activo); tabletas 25, 50, 100 mg. **Enalapril**: profármaco → **enalaprilat**; oral y EV; biodisponibilidad no afectada por alimentos; inicio 60 min, máx. 2-4 h; 15 min EV; tabletas 10 y 20 mg; enalaprilat EV 1,25 mg. **Lisinopril**: derivado de lisina del enalapril, absorción lenta, VM 12 h, dosis 10-80 mg 1 vez al día.',
      '**Efecto cardioprotector**: ↓ pre y poscarga; ↓ masa del VI; ↓ estimulación simpática; restaura balance consumo/demanda de O₂. **Vasculoprotector**: mejora la disfunción endotelial, antihipertensivo, ↑ fibrinólisis endógena, mejora el tono arterial. **En ICC**: inhibe la remodelación postinfarto, modifica la progresión (↑ **sobrevida**, ↓ hospitalizaciones), mejora calidad de vida.',
      '**Piedra angular del tratamiento de la IC; indicados en todas las fases**: pacientes asintomáticos con FE <40 %, disfunción sistólica post-IAM, disfunción sistólica sintomática clase funcional II-IV.',
      '**Indicaciones**: IC (**todos los px**), disfunción ventricular asintomática con FEVI <40 %, HTA, post-infarto (tardío), **proteinuria del diabético**; «controla la sed».',
      '**EA** — inherentes al mecanismo: hipotensión, hiperpotasemia, insuficiencia renal, **tos seca**, **edema angioneurótico**; atribuibles a la estructura química (sulfhidrilo): erupciones cutáneas, neutropenia y trombocitopenia, molestias digestivas, disgeusia, proteinuria. Precauciones: estenosis de la arteria renal, hiperpotasemia, hipotensión, insuficiencia renal, intolerancia.',
      '**Cómo prescribir**: enalapril 2,5 mg BID → mantenimiento 10 mg BID; lisinopril 5 mg 1/día → mantenimiento 20 mg 1/día.',
      '**Contraindicaciones**: **embarazo**; alergia a las drogas; creatinina >2,0 mg/dL (mujeres) o >2,5 mg/dL (hombres) y/o VFG <30 mL/min/1,73 m²; hiperkalemia; hipotensión sintomática. **Precauciones**: patología con hiperreninemia (estenosis renal bilateral), asma bronquial.',
      '**Interacciones**: diuréticos ahorradores de K⁺, suplementos de K⁺, β-bloqueantes, **AINES**.'
    ]},
    { titulo: 'V. ARA II y sacubitrilo/valsartán (diap. 65-66, 83-84)', puntos: [
      '**Losartán** (N-benzilimidazol, derivado del ácido talámico ⚠ «talamic» en la diapositiva). **Indicaciones**: IC en pacientes que **no toleran IECA**; HTA. En la diapositiva: «Insuficiencia cardíaca: sacubitrilo/valsartán».',
      '**Precauciones**: depleción de Na⁺ o volumen. **Contraindicaciones**: hipersensibilidad, **embarazo**, lactancia.',
      '**ARNI = inhibidor dual de neprilisina y del receptor de angiotensina**: **sacubitrilo** (combinado con valsartán) inhibe la neprilisina → ↓ degradación de **ANP y BNP** → vasodilatación. En ICC: **↓ mortalidad y rehospitalizaciones**. EA: **hipotensión y angioedema**.'
    ]},
    { titulo: 'VI. β-bloqueantes (diap. 67-73)', puntos: [
      '**Efectos**: ↑ función del VI, ↓ tono simpático, recupera el equilibrio autonómico, **up-regulation** de receptores, ↓ arritmias, isquemia, infarto, ↓ fibrosis miocárdica, ↓ apoptosis.',
      'Mejoran calidad de vida y sobrevida en IC **CF II-IV**, sea o no isquémica la etiología. **COPERNICUS, CIBIS II y MERIT-HF** (~9000 px; carvedilol, bisoprolol, succinato de metoprolol CR/XL; ~90 % ya con IECA/ARA II): **↓ mortalidad ~30 %** y riesgo de hospitalización similar; mejora de calidad de vida (MERIT-HF, COPERNICUS). **SENIORS** (nebivolol, >70 años): ↓ hospitalización 14 %, sin efecto en mortalidad.',
      'Los 4 con mejor respuesta en ICC: **carvedilol, metoprolol (succinato), bisoprolol, nebivolol** (la diapositiva escribe «nevibolol»).',
      '**Uso**: no comenzar hasta que el paciente tenga **buen balance hidrosalino al menos 1 mes**; no usar en broncoespasmo, bradicardia sintomática o bloqueo cardíaco; **comenzar con dosis bajas y subir cada 2 semanas**; disminuir dosis si bradicardia o bloqueo; avisar que los efectos pueden verse **varios meses** después.',
      '**Dosis (inicial / máxima)**: carvedilol 3,125 mg c/12 h / 25 mg c/12 h ⚠ («3,125 c/12 mg c/12h» en la diapositiva); bisoprolol 1,25 mg c/12 h ⚠ (c/24 h en la práctica) / 10 mg c/24 h; metoprolol succinato XL 12,5-25 mg c/24 h / 200 mg c/24 h; nebivolol 1,25 mg c/12 h ⚠ / 10 mg c/24 h.',
      '**Estudios**: MDC (metoprolol, II-III, mejora sobrevida y reduce necesidad de trasplante en miocardiopatía dilatada); CIBIS I (bisoprolol, II-III, ↑ sobrevida); ANZ (carvedilol, I-II, ↓ morbimortalidad); Carvedilol (II-III, ↓ morbimortalidad); CIBIS II (bisoprolol, III-IV, ↓ morbimortalidad); MERIT-HF (metoprolol, II-III, ↓ morbimortalidad).',
      '**Contraindicaciones**: **PA <100 mmHg**, **bradicardia (FC <60)**, disfunción sinusal, **bloqueos AV II y III grado**, arteriopatía periférica sintomática, **asma/EPOC**, diabetes mellitus de difícil control.'
    ]},
    { titulo: 'VII. Ivabradina (diap. 74-76)', puntos: [
      '**Bloqueador selectivo de los canales If** del nodo sinusal → ↓ FC en pacientes en **ritmo sinusal** **sin efectos sobre el inotropismo ventricular**.',
      '**Considerar en pacientes en ritmo sinusal que no toleran β-bloqueantes**, o que con **dosis máxima de BB mantienen FC >70 lpm y persisten sintomáticos**.',
      '**Estudio SHIFT**: 6588 pacientes con IC y FEVI ≤35 %, CF II-IV, hospitalización en el último año, FC >70 pese a BB máximo tolerado (solo 26 % con dosis máximas). Ivabradina (hasta 7,5 mg c/12 h): ↓ riesgo relativo de mortalidad CV y hospitalización por IC **18 %**; ↓ muerte y rehospitalización por IC **26 % cada una**.'
    ]},
    { titulo: 'VIII. Vasodilatadores y nitratos (diap. 77-80)', puntos: [
      '**Clasificación**: **venosos** (nitratos, molsidomina); **arteriales** (minoxidil, hidralazina); **mixtos** (antagonistas de Ca²⁺, IECA, bloqueantes AII, bloqueantes alfa, **nitroprusiato**).',
      '**Nitratos – tolerancia**: disminución del efecto al administrarlos de forma prolongada; aparece con cualquier nitrato; **dosis-dependiente**; desaparece en 24 h al suspender; se evita usando la **menor dosis eficaz** y provocando **niveles plasmáticos discontinuos**.',
      '**Indicaciones de nitratos en IC**: en **contraindicación o intolerancia a IECA o ARA II**, alivian síntomas congestivos; inhiben el remodelamiento cardíaco; **dinitrato de isosorbide + hidralazina**.'
    ]},
    { titulo: 'Péptido natriurético: nesiritide y otros (diap. 85-86)', puntos: [
      '**Nesiritide**: péptido natriurético tipo B recombinante; activa receptores de BNP → ↑ GMPc → vasodilatación arterial (coronarias), venosa y diuresis → ↓ pre y poscarga. Tratamiento de **IC aguda**; **bolo IV 2 mcg/kg**, infusión 0,01 mcg/kg/min. **ASCEND-HF**: mayor tasa de hipotensión; **sin diferencia en mortalidad ni rehospitalización a los 30 d**.',
      '**Otros fármacos** citados: cimaglermina (proteína GGF2 neuregulina), **liraglutida** (GLP-1), **empagliflozina, dapagliflozina** (SGLT2).'
    ]},
    { titulo: 'IC aguda: definición y abordaje (diap. 91-98)', puntos: [
      '**IC aguda**: aparición o deterioro de **disnea** en un curso corto de tiempo, por ↑ de presión en cavidades izquierdas, que requiere atención médica no programada.',
      'Diagnóstico **sindromático**, grupo heterogéneo (guías europeas): **descompensación de falla cardíaca crónica, edema pulmonar agudo, falla cardíaca hipertensiva, falla ventricular derecha aislada y shock cardiogénico**. Síntoma más común: disnea; también fatiga, edema periférico y malestar torácico.',
      '**Clasificación de Forrester**: **húmedo vs seco** y **caliente vs frío**. Los de predominio **congestión con buena perfusión** → **diuréticos y vasodilatadores**. Los «**fríos**» con hipotensión e hipoperfusión → **inotrópicos**.',
      'Sobrecarga hídrica – **furosemida**: dosis según congestión (≤100 mg en las primeras 6 h y ≤240 mg en 24 h); ICA **leve**: 20-40 mg bolo EV, mantenimiento 20-60 mg/día; **moderada-grave**: 40 mg EV, 40-100 mg/día o 5-40 mg/hora en perfusión. Monitorizar PA, función renal y electrolitos.',
      '**Vasodilatadores** (venosos, arteriales o mixtos) se combinan con diuréticos. **Nitratos**: nitroglicerina SL, transdérmica o IV; **a dosis bajas = venodilatador** (↓ presión venosa pulmonar y de llenado del VI → mejora congestión, disnea y consumo de O₂); a dosis mayores también arterial sistémica y coronaria (vasos epicárdicos).',
      '**Nitroglicerina**: ICA con **PA adecuada (>110 en SCA)**; mantenimiento 5-200 «mg/min» ⚠ (probablemente mcg/min; 30-60 ml/h); diluir 50 mg (10 ml) en 250 ml SG 5 %; goteo continuo 10-20 mcg/min hasta 200 mcg/min. **Precauciones**: **IAM del ventrículo derecho, estenosis aórtica severa, hipotensión**. **Dinitrato de isosorbide** 1-10 mg/h. **Nitroprusiato de Na** 0,3-5 mcg/kg/min (**ICA con PA alta**).'
    ]},
    { titulo: 'Inotrópicos y vasopresores en IC aguda (diap. 103-104)', puntos: [
      '**Dopamina**: ICA con **hipoperfusión periférica, resistente a diuréticos y vasodilatadores, con hipotensión**; inotrópico de **2.ª elección** si PAS <90 mmHg sin respuesta a cristaloides. **Dosis**: <3 mcg/kg/min → **receptores D1**: vasodilatación y natriuresis (efecto renal); **3-5** → **β1** miocárdicos (inotrópico +; ↑ PAS y FC; poco cambio en PA diastólica y resistencia periférica); **5-15** → **α1**: vasoconstricción.',
      '**Vasopresores**: pacientes graves con hipotensión marcada: ↑ PA y redistribuyen el gasto cardíaco hacia órganos vitales **a costa de ↑ poscarga del VI**.',
      '**Tabla de infusiones** (bolo / infusión): **dobutamina** no / 2-20 mcg/kg/min · **dopamina** no / <3 efecto renal, 3-5 inotrópico β, >5 β1 + vasopresor α1 · **milrinona** 25-75 mcg/kg en 10-20 min (opcional) / 0,375-0,75 mcg/kg/min · **levosimendán** 12 mcg/kg en 10 min (opcional) / 0,1-0,2 mcg/kg/min · **norepinefrina** no / 0,2-1 mcg/kg/min · **epinefrina** no / 0,05-0,5 mcg/kg/min.'
    ]}
  ],

  explicacion: [
    { titulo: '1. ¿Qué le pasa al corazón en la IC? (la historia que ordena todo)', p: [
      'Imagínate una **bomba de agua que ya no empuja bien**. Lo primero que hace el cuerpo es «ayudarla»: activa el **simpático** (más FC, más contractilidad), la **renina-angiotensina-aldosterona** (retiene sal y agua, vasoconstricción) y la hipertrofia cardíaca. Al inicio parece buena idea; a la larga es un desastre: más precarga, más poscarga, el corazón se dilata, se fibrosa, se remodela y **congestión + edema**.',
      'Por eso los fármacos que **salvan vidas** en IC (IECA/ARA II/ARNI, β-bloqueantes, espironolactona/eplerenona, SGLT2) **no son los que dan más fuerza al corazón**: son los que **frenan esa respuesta neurohormonal**. Los inotrópicos que sí dan fuerza (dobutamina, milrinona) ayudan a corto plazo pero **suben arritmias y mortalidad**. Esa es la gran paradoja que cae en exámenes.',
      'Tres etiquetas clave: **ICFER** (FEVI <40 %, la que tratamos), **ICFEP** (FEVI ≥50 %), y etiología isquémica vs no isquémica. Ejemplo de la profe: «ICFER, isquémica, estadio C, CF III».',
      'Objetivos del tratamiento: **prevenir progresión, bajar mortalidad y hospitalizaciones, aliviar síntomas**. Se actúa sobre **precarga, poscarga, FC y contractilidad**.'
    ], pausa: {
      q: 'El paciente del caso: miocardiopatía dilatada viral, FEVI 20 %, clase III, etapa C. ¿Qué combinación le armas?',
      a: '⚠ (La diapositiva no da la respuesta; se arma con el resto de la clase.) **IECA** (o ARA II / ARNI) + **β-bloqueante** (carvedilol, metoprolol XL, bisoprolol) + **antagonista de aldosterona** (espironolactona) + **diurético de asa** si hay congestión; ± **ivabradina** si FC >70 con BB máximo; **digoxina** si persisten síntomas o hay FA; SGLT2 según la profe («otros fármacos»).'
    }},
    { titulo: '2. Digoxina: la «bomba bloqueada»', p: [
      'La digoxina inhibe la **Na⁺/K⁺ ATPasa**. Resultado en cadena: **sube el Na⁺ dentro** → la célula **expulsa menos calcio** → el calcio se acumula y el retículo sarcoplásmico lo guarda → **más calcio en cada latido = contracción más fuerte**. Esa es su acción inotrópica positiva.',
      'Pero ojo: lo mismo que le da fuerza **la hace peligrosa**. Aumenta el automatismo ectópico (posdespolarizaciones tardías → extrasístoles, bigeminismo, taquicardia, fibrilación) y a la vez **frena el nodo AV** (prolonga su refractariedad) y baja la frecuencia sinusal (tono vagal). Por eso se usa en **IC + fibrilación auricular**, y puede dar **bloqueo AV**.',
      '**Margen de seguridad muy estrecho.** Se usa a **dosis bajas, ajustadas a la depuración de creatinina**, y se miden niveles (DIG: 0,5-0,8). Si el riñón falla, se acumula (se elimina por riñón; vida media 40 h).',
      '**Indicaciones** (según la diapositiva): IC con **fibrilación auricular**, IC con **tercer ruido**, o IC dilatada que no mejora con diuréticos + IECA (o no toleran IECA, ARA II ni isosorbide-hidralazina). No baja mortalidad (⚠ la diapositiva no lo dice; se menciona en exámenes que «mejora síntomas»).'
    ], pausa: {
      q: 'Un paciente con ICC en digoxina empieza a ver amarillo-verdoso, tiene náuseas, y el ECG muestra bigeminismo. Su K⁺ es 3,0. ¿Qué haces?',
      a: '**Intoxicación digitálica.** Suspender digoxina, **reponer potasio**, buscar el factor desencadenante; **lidocaína** si taquiarritmia, **atropina/marcapaso** si bradicardia o bloqueo; **anticuerpos antidigoxina** en casos graves. (La visión alterada de los colores está en la diapositiva: «alteración de la percepción de colores».)'
    }},
    { titulo: '3. Intoxicación digitálica: qué la favorece', p: [
      'Regla fácil: **todo lo que sube la digoxina en sangre o hace al corazón más sensible**. Hipopotasemia (el K⁺ compite con la digoxina por la ATPasa: poco K⁺ = más efecto), **hipomagnesemia**, **hipercalcemia** (más calcio + digoxina = arritmias), **insuficiencia renal** (se elimina por riñón).',
      'Interacciones que **suben** digoxinemia: **amiodarona, quinidina, verapamilo/diltiazem/nifedipino, captopril, macrólidos, omeprazol**, antibióticos, anticolinérgicos (↑ absorción), y los que la desplazan de proteínas (fenitoína, anticoagulantes orales, antidiabéticos orales, clofibrato). Las que **bajan**: neomicina, fenobarbital, fenitoína, sulfasalazina, antiácidos, rifampicina, y vasodilatadores como nitroprusiato/hidralazina (↑ aclaramiento).',
      'Atención con **diuréticos que pierden K⁺** (asa, tiazidas): son el clásico del examen («puede aumentar el riesgo de toxicidad digitálica al causar hipopotasemia»). ⚠ La diapositiva lo da indirectamente (hipopotasemia = ↑ toxicidad); la pregunta de examen suele poner furosemida.',
      'Clínica: **GI** (anorexia, náuseas, vómitos), **neuro/psiquiátrica** (confusión, delirio), **visual** (visión borrosa, colores alterados), **endocrina** (ginecomastia, galactorrea) y **cardíaca**: casi cualquier arritmia, bloqueos, **PR largo, QT corto, T aplanada/invertida, ST deprimido**.'
    ]},
    { titulo: '4. IECA: la piedra angular', p: [
      'Los IECA bloquean la conversión de Ang I a Ang II → **menos vasoconstricción, menos aldosterona, menos remodelación**. Resultado: bajan **pre y poscarga**, protegen al corazón (↓ masa del VI), mejoran el endotelio, y en IC **suben la sobrevida y bajan hospitalizaciones**. Están indicados **en todas las fases** de la IC, incluso asintomático con FE <40 % y post-IAM.',
      '**Cómo se dan**: empezar **bajo** y subir: enalapril 2,5 mg BID → 10 mg BID; lisinopril 5 mg → 20 mg diario. Captopril: con alimentos baja absorción; enalapril es **profármaco** (enalaprilat); lisinopril 1 vez al día.',
      'EA lógicos (por mecanismo): **hipotensión, hiperpotasemia** (menos aldosterona), **insuficiencia renal**, **tos seca** (bradicinina) y **angioedema**. Otros por estructura (sulfhidrilo/captopril): rash, neutropenia, disgeusia.',
      '**Contraindicado en embarazo**, hiperkalemia, hipotensión sintomática y creatinina muy alta. Cuidado con estenosis renal bilateral y asma. Interacciones: **ahorradores de K⁺, suplementos de K⁺, AINES**.'
    ], pausa: {
      q: 'Paciente con ICC tratado con enalapril desarrolla tos seca persistente. ¿Qué haces?',
      a: 'Cambiarlo a un **ARA II** (losartán, valsartán), que no aumenta bradicinina. Si hay **angioedema**, se prefiere ARA II con precaución (⚠ en la práctica, se evita IECA y también se usa ARNI con cuidado; el angioedema por IECA contraindica al sacubitrilo/valsartán ⚠ no está en la diapositiva).'
    }},
    { titulo: '5. ARA II y ARNI', p: [
      '**ARA II** (losartán, valsartán): bloquean el receptor AT1. Se usan en IC **cuando no se toleran IECA** (típico: tos). Mismas precauciones: depleción de volumen; contraindicados en **embarazo y lactancia**.',
      '**ARNI = sacubitrilo + valsartán**: dos movimientos. Valsartán bloquea AT1; sacubitrilo bloquea la **neprilisina**, la enzima que destruye los péptidos natriuréticos (ANP, BNP) → **más vasodilatación y natriuresis**. En ICC **baja mortalidad y rehospitalizaciones**. EA: **hipotensión y angioedema**. ⚠ No se combina con IECA (riesgo de angioedema; no está en la diapositiva).'
    ]},
    { titulo: '6. Espironolactona y diuréticos', p: [
      '**Diuréticos de asa (furosemida)**: sacan la congestión (baja volemia y precarga, mejora síntomas). **No bajan la mortalidad** ⚠ (no está en la diapositiva; se pregunta) y **no suben el gasto cardíaco**: si exageras, baja. Pierden K⁺, Ca²⁺ y Mg²⁺ (¡digoxina!). Los **AINES** les quitan efecto (bloquean las PG renales). Dosis oral inicial 20-40 mg c/12-24 h; EV en agudo.',
      '**Espironolactona** (y eplerenona): antagonista del receptor de **aldosterona**. En la IC la aldosterona es **muy mala**: retiene Na⁺ y agua, pierde K⁺ y Mg²⁺ (arritmias, muerte súbita), **fibrosis miocárdica**, remodelación, baja la sensibilidad de barorreceptores y el tono parasimpático. Bloquearla **baja mortalidad y morbilidad, fibrosis y mejora la sensibilidad de barorreceptores**. Dosis: 25 mg/día, máx. 50 mg.',
      '⚠ EA de espironolactona (no están en la diapositiva pero salen en exámenes): hiperpotasemia, **ginecomastia e impotencia** (por receptores de andrógenos y progesterona); **eplerenona** es selectivo y no da esos efectos. Una pregunta de examen dice «el uso prolongado de espironolactona puede causar… hiperpotasemia».'
    ], pausa: {
      q: 'Paciente con ICFER ya en IECA, β-bloqueante y furosemida, sigue sintomático. Que sea un ahorrador de K⁺, que baje la mortalidad. ¿Cuál?',
      a: '**Espironolactona** (o eplerenona si tiene ginecomastia). Vigilar **K⁺ y creatinina**, sobre todo si ya toma IECA/ARA II.'
    }},
    { titulo: '7. β-bloqueantes: «empieza bajito, sube de a poco»', p: [
      'Suena contradictorio frenar el corazón en IC, pero el simpático crónico lo **mata**: arritmias, isquemia, apoptosis, remodelación. Los β-bloqueantes **recuperan el equilibrio autonómico**, hacen **up-regulation** de receptores y **bajan mortalidad ~30 %** (COPERNICUS, CIBIS II, MERIT-HF). Funcionan en IC **CF II-IV**, isquémica o no.',
      'Solo **4** tienen evidencia: **carvedilol, bisoprolol, metoprolol succinato (XL), nebivolol** (este último con menos efecto: SENIORS, solo ↓ hospitalizaciones). **No sirven los otros** (⚠ no dicho, pero cae: atenolol/propranolol no).',
      '**Regla de oro**: **no arrancar hasta tener «buen balance hidrosalino» por lo menos 1 mes** (si el paciente está congestionado y lo frenas, se cae). **Dosis bajas**, subir **cada 2 semanas**, bajar si bradicardia o bloqueo, y avisar que el beneficio tarda **meses**.',
      '**Contraindicaciones** (se deducen): **PA <100, FC <60, disfunción sinusal, bloqueo AV II-III, asma/EPOC, arteriopatía periférica sintomática, diabetes difícil de controlar**. Ojo: **«Bradicardia, asma bronquial, hipotensión arterial»** es la clave de examen de contraindicaciones de BB en IC.',
      '⚠ **Carvedilol** (no selectivo + α1 → **vasodilatador**; también antioxidante) es el que se pide en «BB mixto con efecto vasodilatador» (labetalol no está en IC).'
    ]},
    { titulo: '8. Ivabradina: «baja la FC sin bajar la fuerza»', p: [
      'Bloquea el **canal If del nodo sinusal** (la corriente «funny» del marcapasos). Solo ↓ FC, **sin tocar la contractilidad** (a diferencia de los BB). Requiere **ritmo sinusal**.',
      '¿Cuándo? (1) No toleras BB, o (2) estás con **dosis máxima de BB** y la **FC sigue >70 lpm** con síntomas. SHIFT: ↓ mortalidad CV + hospitalizaciones por IC en 18 %; ↓ muerte y rehospitalización por IC en 26 % cada una. Dosis hasta 7,5 mg c/12 h.'
    ], pausa: {
      q: 'Paciente con ICFER, ritmo sinusal, carvedilol a dosis máxima tolerada, FC 82, sigue disneico. ¿Qué agregas?',
      a: '**Ivabradina** (bloqueador If).'
    }},
    { titulo: '9. Vasodilatadores y nitratos', p: [
      'Se clasifican por dónde dilatan: **venosos** (nitratos, molsidomina) → bajan **precarga**; **arteriales** (hidralazina, minoxidil) → bajan **poscarga**; **mixtos** (IECA, ARA II, bloqueantes alfa, antagonistas de Ca²⁺, nitroprusiato) → ambas.',
      '**Nitratos**: dilatan venas (dosis bajas) → baja presión de llenado → **alivian congestión y disnea**; ↓ consumo de O₂. A dosis mayores dilatan arterias. En ICC crónica: cuando **no se toleran IECA/ARA II**, la combinación **dinitrato de isosorbide + hidralazina** alivia síntomas e **inhibe el remodelamiento**.',
      '**Tolerancia**: desaparece el efecto con uso continuo; es **dosis-dependiente** y se corrige en 24 h sin el fármaco: se evita con la **menor dosis eficaz** y **niveles discontinuos** (dejar un intervalo libre de nitrato).',
      '⚠ **Estos vasodilatadores y los inotrópicos no demostraron bajar mortalidad** (excepto isosorbide + hidralazina en una población específica, no dicho en la diapositiva).'
    ]},
    { titulo: '10. IC aguda: ¿qué le doy a cada paciente?', p: [
      'La profe lo resume con **Forrester**: ¿**húmedo o seco**? ¿**caliente o frío**?',
      '**Húmedo y caliente** (congestión con buena perfusión) → **diuréticos + vasodilatadores**. Furosemida: leve 20-40 mg EV; moderada-grave 40 mg EV y luego 40-100 mg/día o 5-40 mg/hora en perfusión (máx. ~240 mg/24 h). **Nitroglicerina** si PA >110 (dosis bajas = venodilata; evitar en IAM de VD, estenosis aórtica severa, hipotensión). **Nitroprusiato** si PA alta.',
      '**Frío con hipotensión** (hipoperfusión) → **inotrópicos**: **dobutamina** (β1: ↑ GC, ↓ presión de llenado; pero ↑ consumo de O₂ y arritmias), **milrinona** (inhibe fosfodiesterasa 3, ↑ Ca²⁺; vasodilata; arritmias), **levosimendán** (sensibiliza troponina, vasodilata). Con **hipotensión marcada**: **vasopresores** (norepinefrina, epinefrina; **dopamina** a dosis alta α1).',
      '**Dopamina por dosis**: <3 mcg/kg/min = **D1** (renal, vasodilata, natriuresis); 3-5 = **β1** (inotrópico); >5 = **α1** (vasoconstricción). Es el **2.º inotrópico de elección** si PAS <90 sin respuesta a cristaloides.',
      '**Nesiritide** (BNP recombinante): vasodilata y da diuresis, pero **ASCEND-HF**: más hipotensión y **sin diferencia en mortalidad ni rehospitalización**. ⚠ Los exámenes lo ponen como opción «↓ precarga».'
    ], pausa: {
      q: 'IC aguda con hipotensión marcada (PA 70/40) y signos de shock. ¿Dobutamina o noradrenalina?',
      a: '**Noradrenalina**: es el **vasopresor** con potente efecto α. La dobutamina es inotrópico con vasodilatación periférica y podría bajar más la PA. (⚠ la diapositiva dice «vasopresores: pacientes graves con hipotensión marcada»; la elección entre los dos sale de la pregunta de examen: «indicado en IC aguda con hipotensión por su potente efecto vasopresor: noradrenalina».)'
    }},
    { titulo: '11. Fármacos de investigación y «otros»', p: [
      '**Istaroxima**: como una digoxina «más amable» (bloquea Na⁺/K⁺ ATPasa pero además facilita que el retículo guarde calcio → menos arritmias). **Levosimendán**: sensibiliza la troponina al calcio (no sube el calcio, hace al sarcómero más sensible) + vasodilata. **Omecamtiv mecarbilo**: activa la miosina cardíaca y alarga la sístole **sin subir el consumo de O₂**.',
      'Otros mencionados: **cimaglermina** (neuregulina), **liraglutida**, **empagliflozina y dapagliflozina** (SGLT2, que en exámenes reducen hospitalizaciones y mortalidad en ICFER y también en FE preservada: «empaglifozina» en pregunta de FE preservada).'
    ]}
  ],

  memoria: {
    columnas: ['Fármaco / grupo', 'Mecanismo', 'Uso en IC', 'Efectos adversos', 'Contraindicaciones / ojo con…'],
    filas: [
      ['Digoxina', 'Inhibe Na⁺/K⁺ ATPasa → ↑ Ca²⁺ → inotrópico +; ↓ FC, frena nodo AV', 'IC + fibrilación auricular, 3.er ruido, IC dilatada sin mejoría con diurético + IECA', 'Arritmias (PR largo, QT corto), GI, visuales, ginecomastia, bloqueos', 'Margen estrecho. Hipopotasemia/hipercalcemia/hipomagnesemia, IR, amiodarona/quinidina/verapamilo ↑ niveles. Tx: suspender, K⁺, lidocaína, atropina, Ac antidigoxina'],
      ['Milrinona (bipiridina)', 'Inhibe fosfodiesterasa 3 → ↑ Ca²⁺', 'IC aguda o exacerbación grave de ICC (EV)', 'Arritmias, trombocitopenia (inamrinona), hepáticas', 'Elimin. renal; 3-6 h'],
      ['Dobutamina', 'Agonista β1', 'IC aguda con hipoperfusión: ↑ GC, ↓ presión de llenado', '↑ consumo de O₂, arritmias, ↑ mortalidad', 'Infusión 2-20 mcg/kg/min'],
      ['Dopamina', 'D1 (<3) / β1 (3-5) / α1 (>5)', 'ICA con hipoperfusión e hipotensión, 2.ª elección PAS <90', 'Taquicardia, vasoconstricción a dosis altas', '—'],
      ['Norepinefrina / epinefrina', 'α1 (+ β1) vasopresores', 'IC aguda con hipotensión marcada / shock', '↑ poscarga del VI', '—'],
      ['Levosimendán', 'Sensibiliza troponina al Ca²⁺; vasodilata', 'IC aguda (en investigación en la clase; sale en exámenes como inotrópico)', '—', '⚠ no tiene efecto vasopresor'],
      ['Furosemida (asa)', 'Inhibe Na-K-2Cl en rama ascendente; 15-25 % Na⁺', 'Congestión: ICA y ICC; 20-40 mg c/12-24 h; máx. 240 mg/24 h', 'Pierde K⁺, Ca²⁺, Mg²⁺ (↑ riesgo digitálico)', 'AINES antagonizan. No ↑ volumen minuto'],
      ['Espironolactona / eplerenona', 'Antagonistas de aldosterona (~5 % Na⁺)', 'ICFER: ↓ mortalidad, fibrosis, remodelación; 25-50 mg/día', 'Hiperpotasemia; ⚠ ginecomastia, impotencia (espironolactona)', 'Vigilar K⁺ y creatinina con IECA/ARA II'],
      ['IECA: enalapril, lisinopril, captopril…', 'Inhiben ECA → ↓ Ang II, ↓ remodelación; ↓ pre y poscarga', 'Piedra angular: todas las fases de ICFER, post-IAM', 'Tos seca, hipotensión, hiperpotasemia, angioedema, IR', 'Embarazo, hiperkalemia, estenosis renal bilateral; ↑ con AINES/ahorradores K⁺'],
      ['ARA II: losartán, valsartán', 'Bloquean AT1', 'IC si no toleran IECA', 'Hipotensión, hiperpotasemia', 'Embarazo, lactancia, depleción de volumen'],
      ['ARNI: sacubitrilo + valsartán', 'Inhibe neprilisina (↑ ANP/BNP) + bloquea AT1', 'ICFER: ↓ mortalidad y rehospitalizaciones', 'Hipotensión, angioedema', '⚠ no con IECA'],
      ['β-bloqueantes: carvedilol, bisoprolol, metoprolol succinato, nebivolol', 'Ver tabla: ↓ simpático, ↓ remodelación y arritmias', 'ICFER CF II-IV; ↓ mortalidad ~30 %', 'Bradicardia, hipotensión, bloqueo AV, broncoespasmo', 'No si PA <100, FC <60, bloqueo AV II-III, asma/EPOC. Iniciar tras 1 mes de balance hidrosalino; subir c/2 semanas'],
      ['Ivabradina', 'Bloquea canal If del nodo sinusal', 'Ritmo sinusal, FC >70 con BB máximo o sin tolerar BB; SHIFT', '⚠ bradicardia, fosfenos', 'No ↓ inotropismo'],
      ['Nitratos (isosorbide) + hidralazina', 'Venodilatador + arteriolar', 'Si no toleran IECA/ARA II; alivian congestión', 'Hipotensión, tolerancia a nitratos', 'Evitar tolerancia: dosis mínima, niveles discontinuos'],
      ['Nitroglicerina IV / nitroprusiato', 'Vasodilatadores (NO)', 'ICA con PA adecuada (NTG) o PA alta (nitroprusiato)', 'Hipotensión', 'NTG: IAM de VD, estenosis aórtica severa, hipotensión'],
      ['Nesiritide', 'BNP recombinante → ↑ GMPc', 'IC aguda (bolo 2 mcg/kg; 0,01 mcg/kg/min)', 'Hipotensión', 'ASCEND-HF: sin ↓ mortalidad'],
      ['Istaroxima / levosimendán / omecamtiv', 'Inhibe Na⁺/K⁺ATPasa y ↑ SERCA / sensibiliza troponina / activa miosina', 'En investigación', '—', 'Omecamtiv: ↑ sístole sin ↑ O₂']
    ],
    notas: [
      '**Salvan vidas en ICFER** (⚠ lo dicen exámenes y estudios citados): IECA/ARA II/ARNI, β-bloqueantes (carvedilol, bisoprolol, metoprolol XL), antagonistas de aldosterona, SGLT2. **Dan síntomas pero no mortalidad**: digoxina, diuréticos de asa, nitratos solos.',
      '**Inotrópicos + vasopresores en IC aguda**: dobutamina (β1), dopamina (dosis-dependiente), milrinona (PDE3), levosimendán, norepinefrina, epinefrina.',
      '**Regla de dosis de dopamina**: 3 pasos: 3 / 3-5 / 5-15 mcg/kg/min = D1 / β1 / α1.'
    ]
  },

  preguntan: [
    { tipo: 'Qué disminuye la mortalidad en la IC sistólica / ICFER (se repite casi todos los años)',
      texto: '«Disminuyen la mortalidad y el número de hospitalizaciones en ICFER: 1. IECA, 2. ARNI (sacubitrilo-valsartán), 3. MRA (antagonistas de mineralocorticoides), 4. SGLT2» (clave E, ⚠ todas V según los estudios; OCR 2024). «Disminuyen la mortalidad en ICFER: 1. metoprolol 2. enalapril 3. espironolactona 4. [digoxina/levosimendán]…» (⚠ opciones 4 no se leen bien). «Fármacos que además de mejorar síntomas disminuyen su progresión: inhibidores de MR, β-bloqueantes de 3.ª generación…». «En FE preservada, disminuye hospitalizaciones: **empagliflozina**».',
      trampa: 'Digoxina, furosemida y levosimendán **mejoran síntomas pero no bajan mortalidad**. Los 4 pilares son IECA/ARNI, BB, MRA, SGLT2.' },
    { tipo: 'IECA en ICC: afirmaciones',
      texto: '«Con relación al uso de IECA en ICC es verdad: 1. son el **tratamiento estándar inicial**, 3. disminuyen el colágeno de la matriz extracelular, 4. mejoran la hemodinámica en FE deprimida (V); 2. **NO reducen morbimortalidad total (F)**». «IECA en ICFER: 1. reducen pre y poscarga, 2. inhiben la remodelación cardíaca…» «Indicado en todas las fases de IC sistólica, 1.ª elección, ↓ pre y poscarga, inhibe remodelación: **IECA**» (opciones: ARA II, IECA, BB, digoxina, diuréticos). «**Dosis inicial de enalapril en IC: 2,5 mg** VO BID» ⚠ (la pregunta de 2024 tiene las opciones cortadas: 10, 5, ?, 15, 20 mg; la diapositiva dice 2,5 mg BID).',
      trampa: '«Los IECA NO reducen mortalidad» = FALSO. Efecto adverso «edema de tobillo» = **EXCEPTO** (no es de IECA; sí tos, disgeusia, hipotensión 1.ª dosis, angioedema). IECA en el embarazo: contraindicados.' },
    { tipo: 'IECA, ARA II y ARNI: efecto y quién es quién',
      texto: '«Disminuye pre y poscarga, inhibe el remodelamiento cardíaco, puede producir shock/hipotensión mediado por **incremento de bradicinina**: **lisinopril**». «ARA II: 1. se los usa de preferencia cuando hay intolerancia a IECA o angioedema, 2. reducen mortalidad CV y hospitalizaciones por IC, 3. controlar función renal y kalemia». «**Sacubitrilo-valsartán combina un antagonista de receptores de Ang II con un inhibidor de: neprilisina**» (otras opciones: ECA, Na/K ATPasa, adenilato ciclasa).',
      trampa: 'Neprilisina, no ECA. IECA → bradicinina (tos, angioedema). ARA II → no tos.' },
    { tipo: 'Diuréticos en IC',
      texto: '«Diurético de techo alto de elección en ICC clase funcional III-IV y edema agudo de pulmón: **furosemida**.» «Ahorrador de K⁺ usado en IC por inhibir el remodelamiento y disfunción ventricular, antagonista competitivo de aldosterona, por falta de selectividad puede producir ginecomastia, impotencia: **espironolactona** (la selectiva es eplerenona)». «Antagonista selectivo del receptor de aldosterona útil en aldosteronismo primario, HTA, IC, sin efecto sobre receptores androgénicos: **eplerenona**». «Disminuyen mortalidad/morbilidad, fibrosis miocárdica y sensibilidad de barorreceptores en IC sistólica: 1. furosemida, 2. **eplerenona**, 3. torasemida, 4. **espironolactona**» (⚠ B = 2 y 4 → clave C). «Uso prolongado de espironolactona en IC puede causar: **hiperpotasemia**» (el OCR pone «hipernatremia» entre opciones: ⚠ revisa). «Diuréticos que disminuyen la mortalidad…»; «Paciente ancianoc con cardiopatía, disnea: ¿qué diurético? **furosemida**».',
      trampa: 'Furosemida y tiazida **no** reducen mortalidad. Espironolactona/eplerenona sí. «Hipercalcemia» es EA de tiazidas, no de furosemida.' },
    { tipo: 'Digoxina e intoxicación digitálica (cae todos los años)',
      texto: '«Factores predisponentes de intoxicación digitálica: 1. insuficiencia renal, 2. **hipercalcemia**, 3. **hipopotasemia**, 4. **hipermagnesemia (F)**». «**No** es factor predisponente: hipomagnesemia, **hipercalcemia**…» (⚠ hay versiones con distractores distintos: hipermagnesemia y **hipertiroidismo** también aparecen como «no predisponente»). «Digoxina contraindicada en WPW y fibrilación con respuesta rápida con vía accesoria ⚠: 1 digoxina, 2 verapamilo, 3 diltiazem». «Incrementa la contractilidad, EXCEPTO: dobutamina, milrinona, digoxina, levosimendán, **ivabradina**.» «Hay mayor riesgo de toxicidad digitálica por hipopotasemia con: **furosemida / hidroclorotiazida**» (⚠ opciones OCR confusas). «Digoxina contraindicada en la fibrilación auricular con respuesta ventricular rápida (**F**)»: es una de las afirmaciones de IC.',
      trampa: 'Hipopotasemia e **hipercalcemia** predisponen; **hipermagnesemia** NO (la que predispone es la hipo-). Digoxina está **indicada** en FA con IC.' },
    { tipo: 'Ivabradina',
      texto: '«Bloqueador selectivo de los canales If del nodo sinusal, indicado en IC en pacientes que no toleran BB o que con dosis máxima de BB mantienen FC >70 lpm y persisten sintomáticos: **ivabradina**» (opciones: digoxina, istaroxima, sacubitrilo, milrinona). «La ivabradina [reduce la FC] en IC al **inhibir la corriente If en el nodo sinusal**».',
      trampa: 'Ivabradina **no** es inotrópico positivo; en «incrementa la contractilidad EXCEPTO» es la que no corresponde.' },
    { tipo: 'β-bloqueantes en IC',
      texto: '«BB no selectivo, mixto, con efecto vasodilatador; indicado en IC sistólica: **carvedilol**» (opciones: metoprolol, labetalol, bisoprolol, nebivolol). «BB indicado en IC sistólica con efecto vasodilatador mediado por óxido nítrico: **nebivolol**» (⚠ dos preguntas parecidas: «mediado por óxido nítrico» = nebivolol; «mixto no selectivo» = carvedilol; la diapositiva solo trae la lista). «Contraindicaciones de BB en IC: 1. bradicardia (FC <60), 2. asma bronquial, 3. [¿bloqueo AV?], 4. hipotensión arterial» (todas, ⚠ clave E probable). «Estadio B de ICFER: 1. enalapril, 2. espironolactona, 3. carvedilol, 4. digoxina» (⚠ deducción: 1 y 3 → clave B; la diapositiva no trae los estadios).',
      trampa: 'Distinguir **carvedilol** (mixto α+β, vasodilatador) de **nebivolol** (β1 selectivo + NO). BB: iniciar solo con paciente compensado y subir cada 2 semanas.' },
    { tipo: 'IC aguda: inotrópicos y vasopresores',
      texto: '«**Inotrópico β1, indicado en la IC aguda: dobutamina**» (opciones: adrenalina, ivabradina, dopamina, noradrenalina, dobutamina). «Indicado en IC aguda con hipotensión por su potente efecto vasopresor: **noradrenalina**». «**Están indicados en IC aguda, EXCEPTO: dobutamina, noradrenalina, espironolactona, furosemida, milrinona**» (la espironolactona es la «EXCEPTO»). «Inotrópicos con efecto vasopresor en IC aguda: 1. dobutamina, 2. noradrenalina, 3. dopamina, 4. milrinona» (⚠ OCR 2019; se espera respuesta noradrenalina y dopamina). «Son inotrópicos: dobutamina, milrinona/levosimendán…». «¿Qué NO tiene efecto vasodilatador venoso en IC sistólica?: dinitrato, lisinopril, nitroglicerina, **hidralazina**, losartán» (⚠ hidralazina es arterial). «**Tienen capacidad de disminuir la precarga: 1. IECA 2. ARA 3. diuréticos 4. nesiritide**» (clave E ⚠).',
      trampa: 'Espironolactona no es de IC aguda. **Hidralazina = arterial**; nitratos = venosos. Dobutamina da β1 (inotrópico), no vasopresor puro.' },
    { tipo: 'Fármacos NO indicados en IC sistólica',
      texto: '«Fármaco que **no** está indicado en insuficiencia cardíaca sistólica: furosemida, espironolactona, IECA, ARA, **verapamilo**» (los calcioantagonistas no dihidropiridínicos están contraindicados en ICFER ⚠ no dicho en la diapositiva).',
      trampa: 'Verapamilo/diltiazem: **contraindicados** en IC sistólica (inotropismo negativo).' },
    { tipo: 'Mecanismo y receptores de nitratos / dopamina',
      texto: 'Preguntas de «nitratos» (⚠ de angina, no de IC: «utilizados en ICC, intoxicación por cianuro, espasmo esofágico, IAM, cólico renal»). «Tolerancia a nitratos: desaparece en 24 h al suspender; se evita con dosis mínima». Dopamina: dosis dependiente.',
      trampa: 'La tolerancia a los nitratos aparece con **cualquier** nitrato y es **dosis-dependiente**.' }
  ],

  consejo: [
    '🧠 **Paradoja de la IC**: lo que da fuerza (dobutamina, milrinona, digoxina) **NO** salva vidas; lo que **frena** al simpático y al SRAA (IECA/ARNI, BB, espironolactona, SGLT2) **SÍ**.',
    '🧠 **Cuatro pilares de ICFER**: «**I**ECA/ARNI, **B**B, **M**RA, **S**GLT2» (⚠ regla propia de memoria). Furosemida: síntomas. Digoxina: FA o síntomas persistentes.',
    '🧠 **Digoxina**: bloquea la ATPasa → ↑Ca²⁺. Toxicidad si **K⁺ bajo, Ca²⁺ alto, Mg²⁺ bajo, riñón malo, amiodarona/quinidina/verapamilo**. Tx: suspender + K⁺ + lidocaína (taqui) / atropina (bradi) / Ac antidigoxina.',
    '🧠 **BB**: «**C**arvedilol, **B**isoprolol, **M**etoprolol XL, **N**ebivolol» (⚠ regla propia). Empezar bajo, subir cada 2 semanas, esperar meses. No si PA <100, FC <60, bloqueo AV, asma.',
    '🧠 **Dopamina 3-3-5-15**: <3 renal (D1) · 3-5 inotrópica (β1) · 5-15 vasopresora (α1).',
    '🧠 **IC aguda: Forrester**: húmedo-caliente → diurético + vasodilatador; frío-hipotenso → inotrópico/vasopresor.'
  ]
});
