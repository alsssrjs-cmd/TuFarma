registrarTema({
  id: 'p2-antimicobacterianos',
  ficha: {
    fuente: 'Antimicobacterianos - Dr. Zabala.pdf (fuente: diapositivas, 2025)',
    diapositivas: 'págs. PDF 1-67: micobacterias, diagnóstico de TB (págs. 4-15), fármacos de 1.ª y 2.ª línea (19-38), principios del tratamiento (40-44), TB-MDR (52-54), micobacterias no tuberculosas (55) y lepra (56-66).',
    examenes: '2.º parcial 2018-2025: cae todos los años (🔥🔥: «antituberculosos» y «isoniazida» están en el grupo alto de frecuencia-examenes.md).',
    avisos: [
      '⚠ Diapositivas que son solo imagen y NO se pudieron leer: págs. 16-18 (TB drogorresistente), 42 (dosificación de 1.ª línea), 45-51 (situaciones especiales, TB en niños, quimioprofilaxis, clasificación y dosis de 2.ª línea, manejo de reacciones adversas) y 62 (parte de la clasificación de lepra: «Difusa»). Si en clase viste algo de esas láminas, no está aquí.',
      '⚠ La diapositiva se contradice en algunas dosis (se marcan en el texto): pirazinamida 25 mg/kg/día (pág. 19) vs 30-50 mg/kg 2-3 veces/sem (pág. 26); etionamida 500-750 mg/día (pág. 19) vs 250 mg inicial → 1 g (pág. 29). Contrasta con la Guía del Ministerio de Salud.',
      '⚠ = dato que NO está en las diapositivas (sale de un examen o de lógica farmacológica). Verifícalo antes de memorizarlo.'
    ]
  },

  diapositiva: [
    { titulo: 'Micobacterias: por qué son tan difíciles (diap. 2-3)', puntos: [
      '**Intrínsecamente resistentes** a muchos antibióticos: proliferan lento, así que los antibióticos más activos contra bacterias de crecimiento rápido son relativamente ineficaces.',
      'Pueden permanecer **latentes** (resistentes a muchos fármacos) o eliminarse solo muy lentamente.',
      'Pared celular **rica en lípidos**: impermeable a muchos fármacos.',
      '**Patógenos intracelulares**: los que viven dentro de macrófagos son inaccesibles a fármacos que penetran poco en esas células.',
      'Famosas por **desarrollar resistencia**. Se necesitan **2 o más fármacos** para superar estos obstáculos y prevenir la resistencia; el tratamiento dura **meses y hasta años**.'
    ]},
    { titulo: 'Aspectos generales de la TB (diap. 5)', puntos: [
      '> 1 millón de menores de 15 años desarrollan TB al año (OMS). La TB por cepas resistentes a 1.ª línea llega al **25 %** de los casos nuevos en algunas regiones.',
      'La TB pediátrica se minimizó por la dificultad de confirmarla microbiológicamente y su escasa contagiosidad. Hoy hay nuevos tests inmunodiagnósticos y biología molecular para detectar mutaciones de resistencia.'
    ]},
    { titulo: 'Diagnóstico de infección: PT e IGRA (diap. 6-7)', puntos: [
      '**Prueba de tuberculina (PT)**: hipersensibilidad retardada; **0,1 ml de PPD** intradérmico en la cara anterior del antebrazo; **leer a las 48-72 h** el diámetro transversal máximo de la induración. Positiva = **solo indica infección** (ITB); hay que descartar enfermedad.',
      '**IGRA** (interferón-gamma release assay): detecta en sangre el interferón-γ de células T sensibilizadas a antígenos de MTB (**ESAT-6 y CFP-10**). Sensibilidad similar a la PT pero **mayor especificidad** (esos antígenos no están en la vacuna **BCG**, salvo M. kansasii, M. marinum, M. szulgai y M. flavescens).',
      'IGRA lleva control positivo (evalúa inmunidad celular), no requiere segunda visita; pero necesita extracción de sangre, laboratorio y es caro. La más extendida: **QuantiFERON-TB Gold Plus**.',
      'Sensibilidad de PT e IGRA por separado: **70-80 %**; combinadas **> 90 %**.'
    ]},
    { titulo: 'Imagen y diagnóstico microbiológico (diap. 8-13)', puntos: [
      '**Rx de tórax** (PA y lateral) ante cualquier sospecha de TB (pulmonar o extrapulmonar). **TC**: más sensible, pero no sistemática (equívocos, Rx normal con síntomas, TB endobronquial, casos complejos). **RM**: más sensible en TB osteoarticular y del SNC. **Ecografía**: consolidaciones, cavitaciones, nódulos miliares pegados a la pleura; derrame pleural; adenopatías abdominales o mediastínicas; lesiones esplénicas.',
      '**Niños que no expectoran**: aspirado de **jugo gástrico** (mín. 3-4 ml, en ayunas, 3 días seguidos) o **esputo inducido** (salbutamol + suero salino hipertónico 3 % nebulizado 15 min). Máximo rendimiento: ambos el mismo día. En enfermedad diseminada/extrapulmonar: LCR, líquido sinovial, biopsias.',
      '**Baciloscopía**: sensibilidad muy baja; **una negativa nunca descarta la enfermedad**. Informe: negativa (0 BAAR en 300 campos) · 1-9 BAAR (contables; positiva) · + (10-99 BAAR en 100 campos) · ++ (1-10 BAAR por campo en 50 campos) · +++ (> 10 BAAR por campo en 20 campos).',
      '**Cultivo**: prueba de **referencia**, identifica especie y resistencia fenotípica; sensibilidad 30-50 % (la lámina dice también «mayor sensibilidad» que la baciloscopía); tarda **2-4 semanas**. Medios sólidos con huevo (**Ogawa, Löwenstein-Jensen**) y líquidos (**Middlebrook 7H9, 7H10**). Negativo = sin desarrollo a los **60 días**. Colonias: 1-19 contables · + (20-100) · ++ (> 100 separadas) · +++ (incontables, confluentes).',
      '**Indicaciones de cultivo**: baciloscopía de 1-9 BAAR en una sola lámina; sintomático respiratorio con baciloscopía seriada negativa tratado con antibióticos (**no quinolonas**) sin mejoría; TB extrapulmonar presuntiva; niños (aspirado gástrico); control bacteriológico positivo a partir del **3.er mes** de tratamiento supervisado.'
    ]},
    { titulo: 'Pruebas moleculares y TB extrapulmonar (diap. 14-15)', puntos: [
      '**GeneXpert MTB/RIF**: PCR en tiempo real automatizada en cartucho; detecta MTB y **resistencia a rifampicina** en **< 2 h**.',
      '**Line Probe Assay (Genotype MTBDRplus)**: detecta ADN del complejo M. tuberculosis, > 45 subtipos y mutaciones.',
      '**Canetti-Rist** (método de las proporciones): a partir del cultivo, determina **sensibilidad/resistencia** a fármacos de 1.ª y 2.ª línea.',
      '**Anatomía patológica**: granulomas caseificantes con células de **Langhans**. **ADA** (adenosina desaminasa): útil en LCR, líquido pleural, ascítico y pericárdico.',
      'Por localización: ganglionar (biopsia + cultivo) · meníngea (ADA en LCR, TAC, cultivo) · pleural (Rx, ADA, biopsia) · peritoneal (eco, ADA, biopsia) · osteoarticular (Rx columna, biopsia) · pericárdica (Rx, ADA, biopsia) · renal (examen de orina, eco renal, cultivo de orina).'
    ]},
    { titulo: 'Fármacos de 1.ª y 2.ª línea y dosis del adulto (diap. 19)', puntos: [
      '**1.ª línea**: **isoniazida** (300 mg/día) · **rifampicina** (600 mg/día) · **pirazinamida** (25 mg/kg/día) · **etambutol** (15-25 mg/kg/día).',
      '**2.ª línea** (dosis adulto): amikacina 15 mg/kg/día · ác. aminosalicílico (PAS) 8-12 g/día · capreomicina 15 mg/kg/día · ciprofloxacina 1500 mg/día en 2 dosis · clofazimina 200 mg/día · cicloserina 500-1000 mg/día · etionamida 500-750 mg/día · levofloxacina 500-750 mg/día · rifabutina 300 mg/día · rifapentina 600 mg 1 vez/semana · estreptomicina 15 mg/kg/día · bedaquilina 400 mg/día · linezolida 600 mg/día · moxifloxacina 400 mg/día · pretomanida 200 mg/día.',
      '⚠ La tabla viene desordenada en el PDF: la asignación exacta de cada dosis a cada fármaco de la 2.ª parte (estreptomicina, bedaquilina, linezolida, moxifloxacina, pretomanida) la deduje por orden y por las láminas individuales.'
    ]},
    { titulo: 'Esquema de 1.ª línea (diap. 20)', puntos: [
      'Los de 1.ª línea son **bactericidas**: isoniazida + rifampicina = tratamiento de **9 meses** que cura la enfermedad por cepas susceptibles; **la pirazinamida acorta el tratamiento a 6 meses**.',
      '**Tratamiento inicial** (hasta establecer susceptibilidad): isoniazida + rifampicina + pirazinamida + etambutol. Después, se dejan **los 2 más activos**.'
    ]},
    { titulo: 'Isoniazida (INH) (diap. 21-22)', puntos: [
      '**Inhibe casi todos los bacilos**; **bactericida**; penetra macrófagos: activa contra microorganismos **intra y extracelulares**. Estructura **similar a la piridoxina** (vit. B6).',
      '**Mecanismo**: inhibe la síntesis de **ácidos micólicos** de la pared. Es un **profármaco** activado por **KatG** (catalasa-peroxidasa micobacteriana). **Resistencia**: mutación en **katG, inhA, kasA**.',
      '**Farmacocinética**: absorción óptima con **estómago vacío**; 300 mg VO; se difunde a todos los líquidos corporales (**también LCR**); vida media **1-3 h**; metabolismo hepático por **N-acetiltransferasa**; excreción urinaria. **Inhibe varias enzimas P450**: ↑ concentración de **benzodiacepinas, fenitoína y carbamazepina**.',
      '**Riesgo mayor en**: acetiladores lentos, desnutridos, alcohólicos, diabetes, sida, uremia.',
      '**Reacciones adversas**: **inmunitarias** (erupciones, fiebre, LES); **toxicidad directa**: **hepatitis** (principal, ~1 %), ↑ transaminasas 20 %; **neuropatía periférica** 10-20 % con dosis > 5 mg/kg/día (la INH **promueve la excreción de piridoxina**).',
      '**Uso**: TB (siempre asociada a rifampicina); **TB latente** como agente único: 300 mg/día (o 900 mg 2-3 veces/sem) por **9 meses**. VO o parenteral. **Piridoxina 25-50 mg/día** para prevenir la neuropatía.'
    ]},
    { titulo: 'Rifampicina (RIF) (diap. 23-24)', puntos: [
      'Derivado semisintético de la **rifamicina**. Activa contra cocos Gram (+/−), **Neisseria, Haemophilus**, micobacterias y clamidias. **Bactericida** (< 1 µg/ml). **Resistencia cruzada** con rifabutina y rifapentina.',
      '**Mecanismo**: se une a la **subunidad β de la ARN polimerasa** → inhibe la síntesis de ARN bacteriano. **Resistencia**: mutación del gen **rpoB**. Bactericida aun en microorganismos poco sensibles a otros fármacos.',
      '**Farmacocinética**: penetra casi todos los fluidos y tejidos (abscesos, cavidades pulmonares), entra a fagocitos y a LCR si hay meninges inflamadas. Dosis **10 mg/kg/día VO** (600 mg), concentración sérica 5-7 µg/ml. **Eliminación biliar (heces)**; **no requiere ajuste** en insuficiencia renal ni hepática.',
      '**Uso**: TB activa (con isoniazida, 600 mg/día); infección atípica y **lepra**: 600 mg/día (o 2 veces/sem) por 6 meses; **TB latente**: 600 mg/día por **4 meses** como único fármaco; **portadores de meningococo y H. influenzae**; osteomielitis, estafilococos graves, endocarditis de prótesis valvular.',
      '**Reacciones adversas**: **color naranja de orina, sudor y lágrimas**; trombocitopenia; ictericia colestática, hepatitis; necrosis tubular aguda, nefritis.',
      '**Interacciones**: **induce isoformas del citocromo P450** → ↓ concentración de **anticoagulantes, ciclosporina, anticonvulsivantes, metadona**.'
    ]},
    { titulo: 'Etambutol (EMB) (diap. 25)', puntos: [
      'Sintético, hidrosoluble, termoestable. Inhibe M. tuberculosis in vitro a 1-5 µg/ml.',
      '**Mecanismo**: inhibe la **arabinosil transferasa** → inhibe la formación de la pared celular. **Resistencia**: mutación del gen **embB**.',
      '**Farmacocinética**: absorción intestinal; eliminación **20 % por heces, 50 % por orina; se acumula en insuficiencia renal**. Cmáx 2-4 h; cruza la BHE solo si hay inflamación (4-64 %).',
      '**Uso**: TB activa, **siempre combinado** (con isoniazida o rifampicina; asociado a 1.ª línea en la fase inicial). Infecciones por **M. avium o M. kansasii**.',
      '**Reacción adversa**: **neuritis retrobulbar** (2 %): ↓ agudeza visual, **ceguera al verde y al rojo** tras ~1 mes de tratamiento.'
    ]},
    { titulo: 'Pirazinamida (PZA) (diap. 26)', puntos: [
      'Pariente de la **nicotinamida**; se convierte en **ácido pirazinoico** (forma activa). **Solo sirve para tuberculosis.** Estable, algo soluble en agua, inhibe micobacterias a **pH 5,5**.',
      'Captada por **macrófagos**: actúa en el ambiente ácido de los lisosomas. **Mecanismo**: altera el metabolismo de la membrana y el transporte. **Resistencia**: alteran la absorción de PZA (evitan su activación) y mutaciones en **pncA**.',
      '**Uso**: 1.ª línea en regímenes cortos, **con isoniazida y rifampicina en esquema de 6 meses**. Buena absorción GI y distribución (incluye meninges inflamadas). Vida media **8-11 h**; dosis **30-50 mg/kg/día, 2-3 veces/sem**.',
      '**Reacciones adversas**: **hepatotoxicidad**, náuseas, vómitos, fiebre, **fotosensibilidad e hiperuricemia** (esta última **no justifica interrumpir** el tratamiento).'
    ]},
    { titulo: '2.ª línea — cuándo se usan (diap. 27)', puntos: [
      '**Resistencia** a fármacos de 1.ª línea · **fracaso** del tratamiento convencional · **reacciones adversas graves** que limitan el tratamiento.'
    ]},
    { titulo: '2.ª línea — estreptomicina, etionamida, capreomicina (diap. 28-30)', puntos: [
      '**Estreptomicina**: inhibe la síntesis proteica uniéndose a la **subunidad 30S**. 1 g/día o 15 mg/kg/día **IV/IM** (generalmente IM, en terapia combinada). Activa contra bacilos **extracelulares**; atraviesa meninges inflamadas. Resistencia: genes **rpsL o rrs**; **M. avium y M. kansasii son resistentes**. Hemodiálisis: 15 mg/kg 2-3 veces/sem. **RAM**: **vértigo y pérdida de audición generalmente permanentes**, nefrotoxicidad; se reduce limitando el uso a **≤ 6 meses**.',
      '**Etionamida**: químicamente relacionada con la INH; **inhibe ácidos micólicos**; concentraciones en LCR similares al suero; metabolismo hepático; **solo VO**; síntomas neurológicos mejoran con **piridoxina**. Dosis inicial 250 mg/día → mantenimiento 1 g/día (⚠ la pág. 19 dice 500-750 mg/día). Resistencia rápida, cruzada con INH. **RAM**: **hepatotoxicidad**, irritación gástrica y síntomas neurológicos; limitan la dosis tolerable a 500-750 mg/día.',
      '**Capreomicina**: antimicrobiano **peptídico** (Streptomyces capreolus) que **inhibe la síntesis proteica**. 15 mg/kg/día **IM**, luego 2-3 veces/sem. Uso: TB resistente a **estreptomicina o amikacina**. Inyección dolorosa con abscesos; **nefrotóxica y ototóxica** (sordera y trastornos vestibulares). Resistencia: genes **rrs, eis, tlyA**.'
    ]},
    { titulo: '2.ª línea — cicloserina, PAS, kanamicina/amikacina (diap. 31-33)', puntos: [
      '**Cicloserina**: **análogo estructural de la D-alanina**; **inhibe la síntesis de la pared celular**. 0,5-1 g/día en 2 dosis VO; amplia distribución incluyendo **SNC**; eliminación renal. **RAM**: neuropatía periférica y **disfunción del SNC con depresión y psicosis** → piridoxina 100 mg/día.',
      '**Ácido aminosalicílico (PAS)**: **antagonista de la síntesis de folato** (similar al **PABA**; mecanismo similar a sulfonamidas); actividad **exclusiva contra M. tuberculosis**. Absorción buena; distribución amplia **excepto LCR**. Gránulos de 4 g VO; **8-12 g/día** adultos, 300 mg/kg/día niños, en 2-3 dosis; eliminación renal. **RAM**: úlcera péptica y hemorragia digestiva, fiebre, artralgias, erupciones, **cristaluria**, hepatoesplenomegalia, hepatitis, adenopatías, **granulocitopenia** a las 3-8 semanas.',
      '**Kanamicina**: TB por cepas resistentes a estreptomicina; **su resistencia implica resistencia a amikacina**.',
      '**Amikacina**: TB por cepas resistentes a estreptomicina o **multirresistentes**; asociar a 2-3 fármacos; **sin resistencia cruzada entre estreptomicina y amikacina**; también micobacterias atípicas. 15 mg/kg/día IV o IM.'
    ]},
    { titulo: '2.ª línea — fluoroquinolonas y linezolida (diap. 34-35)', puntos: [
      '**Fluoroquinolonas**: amplio espectro Gram (+) y Gram (−), **bactericidas**. Importantes en TB por cepas resistentes a 1.ª línea. **OMS**: **levofloxacina 750-1000 mg/día** y **moxifloxacina 400 mg/día**. **Resistencia**: mutación puntual en la **subunidad A de la girasa**. Se usan **en combinación con ≥ 2 agentes activos** para evitar resistencia.',
      'Ciprofloxacina, levofloxacina, gatifloxacina, moxifloxacina: **todas activas contra micobacterias atípicas**. **Levofloxacina y moxifloxacina: máxima actividad contra M. tuberculosis, de elección para cepas resistentes a 1.ª línea**. (⚠ La lámina agrupa «más activa contra atípicas» y «máxima actividad contra M. tuberculosis» en dos columnas; la asignación de cada una sale del orden del texto.)',
      '**Linezolida**: **oxazolidinona**, inhibe la síntesis proteica; buena concentración intracelular; útil en **TB multirresistente** a **600 mg una vez al día**; se combina con otros de 2.ª o 3.ª línea. **RAM**: **supresión de médula ósea** y **neuropatía óptica periférica irreversible**; la dosis de 600 mg/día limita los efectos adversos; **piridoxina 100 mg/día** suplementaria.'
    ]},
    { titulo: '2.ª línea — rifabutina, rifapentina (diap. 36)', puntos: [
      '**Rifabutina**: inhibe la ARN polimerasa; derivado de la rifamicina. Activa contra M. tuberculosis, **fortuitum, avium-intracellulare**. **Indicada en TB + VIH que reciben antirretrovirales** (⚠ por menor inducción enzimática que la rifampicina: dato clínico, no está en la lámina). 300 mg/día VO. Uso en infección diseminada y **tratamiento preventivo de 4 meses en sida**.',
      '**Rifapentina**: análogo de la rifampicina; contra M. tuberculosis y avium; inhibe la ARN polimerasa, **resistencia cruzada completa con rifampicina**; **induce P450**. **NO se usa en VIH/sida** (alta tasa de recaídas). Vida media 13 h; 600 mg 1-2 veces por semana.'
    ]},
    { titulo: 'TB-MDR: bedaquilina, pretomanida, delamanid (diap. 37-38, 52-54)', puntos: [
      '**Bedaquilina**: **diarilquinolina**; inhibe la **ATP sintasa** de la micobacteria; bactericida; **resistencia cruzada con clofazimina**. Con otros **3 fármacos activos por 24 semanas** en adultos con TB pulmonar multirresistente. Dosis: 400 mg/día VO 2 semanas, luego 200 mg 3 veces/sem por 22 semanas. **RAM**: **hepatotoxicidad y prolongación del QTc** (vigilar).',
      '**Pretomanida**: aprobada por la FDA en **2019**; **nitroimidazol** relacionado con delamanid; TB multirresistente; bactericida; requiere **reducción química** para actuar (selectiva, sin toxicidad para el huésped). **200 mg/día VO**, vida media **16 h**; en combinación con **linezolid + bedaquilina** por **6 meses** en TB extensamente resistente o MDR (en Sudáfrica 4-6 meses). Metabolismo **CYP3A4**; excreción por heces y orina.',
      '**Delamanid**: **profármaco** que inhibe la **síntesis de ácidos micólicos** (bactericida en bacilos en multiplicación; también actúa sobre latentes intracelulares, esterilizante como la rifampicina); solo actúa sobre micobacterias. Para TB pulmonar **MDR** en adultos, adolescentes y niños **≥ 30 kg** cuando no se puede armar un régimen eficaz. Reduce mortalidad y logra **conversión precoz del cultivo en 2 meses**; aumenta el QT sin más eventos cardiovasculares.',
      '**Contexto**: con los esquemas actuales **< 50 %** de los tratados con TB-MDR se curan; bedaquilina, delamanid y pretomanid son los nuevos fármacos.'
    ]},
    { titulo: 'Principios del tratamiento de la TB (diap. 40-44)', puntos: [
      '**Asociado**: mínimo **4 medicamentos** (evita seleccionar cepas resistentes). **Prolongado**: mínimo **6 meses**. **En una sola toma**, separada de los alimentos. **Supervisado** hasta el alta. **Controlado**: baciloscopías **mensuales desde el 2.º mes** y cultivo al **4.º o 5.º mes** (si se prolonga la fase intensiva).',
      'Dosis por kg de peso/día, ajustada con el peso en los controles mensuales. Tratamiento ambulatorio en el establecimiento de salud; hospitalización solo en casos excepcionales. Prueba rápida de **VIH y glucemia** a todo paciente. Supervisión **de lunes a sábado**.',
      'Seguimiento en TB pulmonar: baciloscopía mensual desde el 2.º mes; las del **2.º mes y del último (6.º o 7.º)** se piden con 3 días de anticipación (cambio de fase y alta). **TB extrapulmonar**: seguimiento clínico, **sin baciloscopía**. Población de mayor riesgo (privados de libertad, VIH, diagnosticados con GeneXpert): baciloscopía **y cultivo**.'
    ]},
    { titulo: 'Micobacterias no tuberculosas (NTM) (diap. 55)', puntos: [
      'Antes «micobacterias atípicas». Están en el ambiente; **por lo general no se transmiten de persona a persona**. **Menos susceptibles** a los antituberculosos.',
      '**Macrólidos, sulfonamidas y tetraciclinas** no son activos contra M. tuberculosis pero **pueden servir contra NTM**. Hay resistencia durante la terapia → **combinaciones de varios fármacos**.',
      '**M. kansasii**: sensible a **rifampicina y etambutol**, parcialmente a isoniazida, **resistente a pirazinamida**. Tratamiento convencional: **isoniazida + rifampicina + etambutol**.'
    ]},
    { titulo: 'Lepra: generalidades (diap. 56-63)', puntos: [
      '**Enfermedad crónica, infectocontagiosa, granulomatosa** por **Mycobacterium leprae** (bacilo de Hansen); afecta **piel y nervios periféricos**. Bacilo **ácido-alcohol resistente**, intracelular, **no cultivable**, se reproduce por bipartición. Descubierto por Hansen (1873). Las sulfonas (**dapsona**) se vieron efectivas en **1940**; terapia multimedicamentosa desde **1981**.',
      '**Fisiopatología**: anestesia-hipostesia, alopecia, anhidrosis; daño a estructuras derivadas del ectodermo; la mayoría de las manifestaciones son **reacciones inmunes** contra el bacilo.',
      '**Inmunopatología**: daño nervioso por agresión desmielinizante de las **células de Schwann** (donde se multiplica); **eritema nodoso** por depósito de complejos inmunes; **lepromatosa**: ausencia de LT CD4 y presencia de CD8; **tuberculoide**: presencia de **Th1** (hipersensibilidad).',
      '**Criterios OMS**: (1) máculas hipopigmentadas o eritematosas con **↓ sensibilidad**; (2) **engrosamiento de nervios periféricos**; (3) **BAAR** en baciloscopía o biopsia de piel.',
      '**Tuberculoide**: mácula o pápula de bordes continuos y simétricos, ↓ sensibilidad, nervios engrosados, **sin bacilos** en lesiones. **Lepromatosa** (más grave): máculas mal definidas, nódulos, manchas eritematosas, lesiones foliculares, manifestaciones tardías, **pérdida de cejas y pestañas**, piel seca y escamosa en los pies; existe una forma difusa (⚠ lámina 62 cortada).',
      '**Diagnóstico**: examinar toda la piel con buena luz, preservando privacidad; **si la lesión pica, no es lepra**; probar la sensibilidad en 1-2 lesiones; baciloscopía.'
    ]},
    { titulo: 'Fármacos de la lepra (diap. 64-66)', puntos: [
      '**Dapsona** (diaminodifenilsulfona): como las sulfonamidas, **inhibe la síntesis de folato**. **Dapsona + rifampicina + clofazimina** = tratamiento inicial de la **lepra lepromatosa**; **dapsona + rifampicina** para lepra con carga baja. También previene y trata **neumonía por Pneumocystis jirovecii** en sida. Bien tolerada; **hemólisis** si hay **déficit de G6PD**; **metahemoglobinemia** frecuente (por lo general sin importancia clínica). Hay resistencia creciente → se usan combinaciones.',
      '**Rifampicina**: **600 mg/día** muy efectiva en lepra, siempre con al menos otro fármaco; incluso **600 mg por mes** sirve en combinación.',
      '**Clofazimina**: colorante de **fenazina** para la lepra **multibacilar** (frotis positivo en cualquier sitio). Mecanismo no establecido. Absorción intestinal variable, gran parte sale por heces. Se **almacena en tejidos reticuloendoteliales y piel** (cristales visibles en fagocitos); liberación lenta: **semivida sérica hasta 2 meses**. **100-200 mg/día VO**. La lámina dice «**ya no está disponible**».'
    ]}
  ],

  explicacion: [
    { titulo: '1. Por qué la TB necesita «un cóctel» y meses', p: [
      'Imagínate un enemigo **lento, con armadura de grasa y que se esconde dentro de tus propias células**. Eso es la micobacteria: pared rica en lípidos (los fármacos no pasan), vive en macrófagos (los fármacos no llegan), se divide lento (los antibióticos «de crecimiento rápido» no hacen nada) y puede quedarse dormida.',
      'Consecuencia: **nunca un solo fármaco** (se seleccionan mutantes resistentes) y **meses de tratamiento**. Por eso el esquema pide **mínimo 4 fármacos, mínimo 6 meses, en una sola toma, supervisado y controlado**.',
      'Esa es la respuesta a la pregunta del examen «¿qué otro problema grave trae el abandono?» → **aparición de resistencia**.'
    ], pausa: {
      q: 'Si INH + RIF ya curan la TB sensible… ¿para qué agregar pirazinamida?',
      a: 'Porque **la PZA acorta el tratamiento de 9 a 6 meses**: actúa dentro del macrófago, en el medio ácido del lisosoma, donde otros fármacos no llegan bien. Y el etambutol del inicio es un «seguro» hasta saber si la cepa es sensible.'
    }},
    { titulo: '2. Cómo se diagnostica (lo mínimo que sí cae)', p: [
      '**PT**: hipersensibilidad retardada, se lee a las **48-72 h**. Positiva = **infección, no enfermedad**. **IGRA** detecta el interferón-γ; es **más específica** porque no cruza con la BCG.',
      '**Baciloscopía**: barata pero poco sensible; **negativa no descarta**. **Cultivo**: referencia (Löwenstein-Jensen), pero tarda **2-4 semanas** (hasta 60 días para llamarlo negativo). **GeneXpert**: en **< 2 h** dice si hay MTB **y resistencia a rifampicina**.',
      'Extrapulmonar: **ADA** (adenosina desaminasa) en líquidos (pleural, LCR, ascítico, pericárdico).'
    ]},
    { titulo: '3. Isoniazida: la reina barata, con dos trampas', p: [
      '**Profármaco**: la activa la catalasa-peroxidasa **KatG** y bloquea los **ácidos micólicos** (la «cera» de la pared). Si la bacteria muta katG, inhA o kasA → resistencia.',
      '**Trampa 1 – nervios**: la INH se parece a la **vitamina B6 (piridoxina)** y **hace que la elimines** → **neuropatía periférica**. Por eso se da **piridoxina 25-50 mg/día**. Más riesgo en acetiladores lentos, desnutridos, alcohólicos, diabéticos, sida, uremia.',
      '**Trampa 2 – hígado y otros fármacos**: hepatitis (~1 %), y **inhibe el P450** → sube la concentración de **benzodiacepinas, fenitoína y carbamazepina** (pregunta de examen: «inhibe el metabolismo de la fenitoína» → isoniazida).',
      'También sirve **sola** para **TB latente** (9 meses).'
    ]},
    { titulo: '4. Rifampicina: el «inductor naranja»', p: [
      'Bloquea la **ARN polimerasa** (subunidad β; resistencia = mutación **rpoB**, la que detecta el GeneXpert). Es la **contraria** de la INH con el citocromo: **INDUCE el P450**, o sea, **baja** los niveles de anticoagulantes, ciclosporina, anticonvulsivantes y metadona.',
      '**La marca inconfundible**: orina, sudor y lágrimas **naranjas**. En el examen: «antituberculoso VO, atraviesa BHE, inhibe síntesis de ARN, bactericida, tiñe la orina de naranja» → **rifampicina**.',
      'Además sirve para **lepra**, **portadores de meningococo/H. influenzae**, y como **monoterapia de la TB latente (4 meses)**. No necesita ajuste en insuficiencia renal ni hepática (se elimina por bilis).'
    ], pausa: {
      q: 'Una paciente toma anticonceptivos orales (⚠ ejemplo mío, no de la diapositiva) y empieza rifampicina. ¿Qué pasa?',
      a: 'La rifampicina induce el P450 y **baja los niveles** de muchos fármacos (la diapositiva lista anticoagulantes, ciclosporina, anticonvulsivantes y metadona). La lógica se extiende a los anticonceptivos: puede fallar la protección. ⚠ Verifícalo en Katzung.'
    }},
    { titulo: '5. Pirazinamida y etambutol', p: [
      '**Pirazinamida**: «solo sirve para TB». Es un profármaco (→ **ácido pirazinoico**) y funciona **a pH ácido**, dentro del lisosoma del macrófago. Efectos: **hepatotoxicidad** y **↑ ácido úrico** (por eso, en la parte de gota, la hiperuricemia por PZA no justifica suspender).',
      '**Etambutol**: inhibe la **arabinosil transferasa** (pared) → resistencia **embB**. Lo temido: **neuritis retrobulbar**, ceguera para **verde y rojo**. Se **acumula en insuficiencia renal** (50 % sale por orina). **Siempre asociado.** (En el examen: «tiene elevada hepatotoxicidad» es **falso**.)'
    ]},
    { titulo: '6. Segunda línea: agrúpalos por mecanismo', p: [
      '**Aminoglucósidos/péptido** (inhiben la síntesis proteica, **ototóxicos y nefrotóxicos**): **estreptomicina** (30S), **amikacina** (sin resistencia cruzada con estreptomicina), **kanamicina** (su resistencia implica amikacina), **capreomicina** (péptido, inyectable). Todos inyectables.',
      '**Pared celular**: **etionamida** (ácidos micólicos, «prima» de la INH, neurotóxica → piridoxina), **cicloserina** (análogo de la **D-alanina**; psicosis y depresión; piridoxina 100 mg).',
      '**Folato**: **PAS** (parecido al PABA, como las sulfas), solo contra M. tuberculosis.',
      '**Girasa**: **fluoroquinolonas** (levofloxacina y moxifloxacina, las más activas; resistencia = subunidad A de la girasa).',
      '**Ribosoma (oxazolidinona)**: **linezolida** (médula ósea y neuropatía óptica).',
      '**Rifamicinas**: rifabutina (para TB + VIH), rifapentina (no en VIH, recaídas).',
      '**Nuevos para MDR**: **bedaquilina** (ATP sintasa, QTc), **pretomanida** y **delamanid** (nitroimidazoles; delamanid también inhibe ácidos micólicos).'
    ], pausa: {
      q: 'El examen dice: «aminoglucósido útil en TB multirresistente que no tiene resistencia cruzada con estreptomicina». ¿Cuál?',
      a: '**Amikacina** (la lámina lo dice textual). Y la cicloserina «inhibe la síntesis de proteínas» es **falso**: inhibe la síntesis de pared (es la capreomicina la que inhibe proteínas).'
    }},
    { titulo: '7. Lepra en corto', p: [
      '**Mycobacterium leprae**: BAAR, intracelular, **no cultivable**. Ataca **piel y nervios** (Schwann): máculas con **pérdida de sensibilidad**, nervios engrosados, anhidrosis, alopecia. **Si pica, no es lepra.**',
      '**Tuberculoide** = buena respuesta Th1, pocos bacilos. **Lepromatosa** = falla la respuesta celular, muchos bacilos, nódulos, pérdida de cejas y pestañas.',
      '**Tratamiento**: **dapsona + rifampicina** (carga baja) o **dapsona + rifampicina + clofazimina** (lepromatosa/multibacilar). Dapsona: inhibe **folato** como las sulfas → **hemólisis en déficit de G6PD** y metahemoglobinemia; también sirve en neumonía por Pneumocystis en sida.'
    ]},
    { titulo: '8. Micobacterias no tuberculosas', p: [
      'Las NTM (antes «atípicas») son del ambiente, **no se contagian entre personas** y **no responden bien a los antituberculosos** clásicos. Aquí sí sirven **macrólidos, sulfonamidas, tetraciclinas** y las **fluoroquinolonas**.',
      '**M. kansasii**: **INH + RIF + EMB** (resistente a PZA). Etambutol también sirve para **M. avium** y kansasii.'
    ]}
  ],

  memoria: {
    columnas: ['Fármaco', 'Mecanismo / resistencia', 'Dosis adulto (diap.)', 'Efectos adversos', 'Ojo con…'],
    filas: [
      ['Isoniazida (INH) · 1.ª', 'Profármaco (KatG); ↓ ácidos micólicos. Resist.: katG, inhA, kasA', '300 mg/día; latente 9 meses', 'Hepatitis, ↑ transaminasas, **neuropatía** (piridoxina 25-50 mg), LES', 'Inhibe P450 (benzodiacepinas, fenitoína, carbamazepina); acetiladores lentos'],
      ['Rifampicina (RIF) · 1.ª', 'Inhibe ARN polimerasa (subunidad β). Resist.: rpoB', '600 mg/día (10 mg/kg); latente 4 meses', '**Orina/sudor/lágrimas naranjas**, hepatitis colestásica, trombocitopenia, NTA', '**Induce P450**; no ajustar en IR/IH; también lepra y portadores de meningococo'],
      ['Pirazinamida (PZA) · 1.ª', 'Profármaco → ác. pirazinoico; activo a pH ácido en lisosoma. Resist.: pncA', '25 mg/kg/día (pág. 19) o 30-50 mg/kg 2-3×/sem (pág. 26)', 'Hepatotoxicidad, náuseas, fiebre, fotosensibilidad, **hiperuricemia**', 'Solo TB; **acorta el tratamiento a 6 meses**; hiperuricemia no obliga a suspender'],
      ['Etambutol (EMB) · 1.ª', 'Inhibe arabinosil transferasa. Resist.: embB', '15-25 mg/kg/día', '**Neuritis retrobulbar** (2 %): ceguera verde-rojo', 'Siempre asociado; se acumula en IR; también M. avium y kansasii'],
      ['Estreptomicina · 2.ª', 'Inhibe síntesis proteica (30S). Resist.: rpsL, rrs', '1 g/día o 15 mg/kg IM/IV', '**Vértigo y sordera permanentes**, nefrotoxicidad', 'Extracelular; ≤ 6 meses; M. avium y kansasii resistentes'],
      ['Amikacina / kanamicina · 2.ª', 'Aminoglucósidos (síntesis proteica)', 'Amikacina 15 mg/kg/día IV/IM', 'Ototoxicidad, nefrotoxicidad', '**Sin resistencia cruzada amikacina–estreptomicina**; kanamicina-R → amikacina-R'],
      ['Capreomicina · 2.ª', 'Péptido; inhibe síntesis proteica. Resist.: rrs, eis, tlyA', '15 mg/kg/día IM', 'Dolor/abscesos, nefro- y ototoxicidad', 'TB resistente a estreptomicina/amikacina; intermitente reduce toxicidad'],
      ['Etionamida · 2.ª', 'Inhibe ácidos micólicos (relacionada con INH)', '500-750 mg/día (pág. 19); 250 mg → 1 g (pág. 29)', 'Hepatotoxicidad, irritación gástrica, neurológicos', 'Resistencia cruzada con INH; piridoxina; solo VO'],
      ['Cicloserina · 2.ª', 'Análogo de **D-alanina**; inhibe pared celular', '500-1000 mg/día en 2 dosis', 'Neuropatía, **depresión/psicosis**', 'Piridoxina 100 mg/día; llega al SNC'],
      ['Ác. aminosalicílico (PAS) · 2.ª', 'Antagonista del folato (como PABA/sulfas)', '8-12 g/día', 'Úlcera péptica, cristaluria, hepatitis, granulocitopenia', 'Solo M. tuberculosis; no llega a LCR'],
      ['Levofloxacina / moxifloxacina · 2.ª', 'Inhiben girasa. Resist.: subunidad A', 'Levo 750-1000 mg/día (OMS); Moxi 400 mg/día', '(ver quinolonas)', 'Activas también contra atípicas; de elección en cepas resistentes; combinar ≥ 2 activos'],
      ['Linezolida · 2.ª', 'Oxazolidinona; síntesis proteica', '600 mg/día', '**Mielosupresión, neuropatía óptica irreversible**', 'Piridoxina 100 mg/día; TB-MDR'],
      ['Rifabutina / rifapentina · 2.ª', 'Inhiben ARN polimerasa; resistencia cruzada con RIF', 'Rifabutina 300 mg/día; rifapentina 600 mg 1-2×/sem', 'Rifapentina induce P450', 'Rifabutina: TB + VIH; **rifapentina NO en VIH** (recaídas)'],
      ['Bedaquilina · MDR', 'Diarilquinolina; inhibe ATP sintasa', '400 mg/día × 2 sem → 200 mg 3×/sem × 22 sem', '**Hepatotoxicidad, ↑ QTc**', 'Resistencia cruzada con clofazimina; 24 semanas con 3 fármacos activos'],
      ['Pretomanida · MDR/XDR', 'Nitroimidazol (reducción química)', '200 mg/día; vida media 16 h', '—', 'FDA 2019; con linezolida + bedaquilina 6 meses; CYP3A4'],
      ['Delamanid · MDR', 'Profármaco; inhibe ácidos micólicos', '—', '↑ QT (sin más eventos CV)', '≥ 30 kg; conversión de cultivo en 2 meses'],
      ['Dapsona · lepra', 'Sulfona; inhibe síntesis de folato', '—', '**Hemólisis (G6PD)**, metahemoglobinemia', 'Con rifampicina ± clofazimina; también Pneumocystis'],
      ['Clofazimina · lepra', 'Colorante de fenazina; mecanismo no claro', '100-200 mg/día', 'Se acumula en piel y RE (semivida hasta 2 meses)', 'Lepra multibacilar; «ya no está disponible»']
    ],
    notas: ['Esquema inicial = RHZE (isoniazida, rifampicina, pirazinamida, etambutol); luego se dejan los 2 más activos. TB latente: INH 9 meses o RIF 4 meses. Ototoxicidad = aminoglucósidos/capreomicina; neuritis óptica = etambutol y linezolida; QTc = bedaquilina/delamanid; naranja = rifampicina.']
  },

  preguntan: [
    { tipo: '«Son fármacos de 2.ª línea…» (clave 1-4) y cuándo usarlos',
      texto: '«Son de 2.ª línea: 1) etambutol 2) cicloserina 3) isoniazida 4) etionamida» (y variante con pirazinamida en vez de etambutol). «La farmacoterapia de 2.ª línea se considera en: resistencia a 1.ª línea · fracaso del tratamiento convencional · reacciones adversas limitantes · **NO** cuando el paciente lo solicita». «Según la Guía del Ministerio de Salud, 1.ª línea: **isoniazida, rifampicina, etambutol, pirazinamida**».',
      trampa: 'Etambutol, isoniazida y pirazinamida son de **1.ª** línea; cicloserina y etionamida de 2.ª. «Moxifloxacino», «fluconazol» y «etionamida» como 4.º fármaco de 1.ª línea = distractores.' },
    { tipo: 'Identificar el fármaco por su descripción',
      texto: '«Antituberculoso VO, atraviesa BHE, inhibe la síntesis de ARN, bactericida, **tiñe la orina de naranja**» → **rifampicina**. «1.ª línea, captado por macrófagos, VO, solo se usa para TB, dosis máx. 2 g» → **pirazinamida**. «1.ª línea útil como agente único en TB latente por 9 meses, bactericida» → **isoniazida**. «Inhibe el metabolismo de la fenitoína» → **isoniazida**.',
      trampa: 'Rifampicina también es de «1 solo fármaco» pero para latente dura **4 meses**; la de 9 meses es la INH. La dosis máx. 2 g de PZA ⚠ no está en la diapositiva (la lámina dice 25 o 30-50 mg/kg).' },
    { tipo: 'Isoniazida y etambutol (verdadero/falso con clave)',
      texto: '«INH: 1. estructura similar a piridoxina · 2. bactericida · 3. puede causar neuropatía periférica · 4. aumenta benzodiacepinas» (todas verdaderas). «EMB: 1. inhibe arabinosil transferasa · 2. se elimina por heces · 3. siempre asociar a INH o rifampicina · 4. tiene elevada hepatotoxicidad» (la 4 es **falsa**).',
      trampa: 'El efecto adverso clave del etambutol es **ocular** (neuritis retrobulbar), no hepático. La hepatotoxicidad es de INH, RIF y PZA.' },
    { tipo: 'Fluoroquinolonas en TB',
      texto: '«Fluoroquinolonas que inhiben M. tuberculosis y también las atípicas: ciprofloxacina, moxifloxacina, levofloxacina, norfloxacina». «Levofloxacina/moxifloxacina en TB: fármacos de la OMS · activas contra atípicas · sirven para cepas resistentes · inhiben la ADN girasa».',
      trampa: '⚠ Norfloxacina no figura en la diapositiva como antituberculosa (ver tema de quinolonas): suele ser el distractor. «Respiratorias» = levofloxacina y moxifloxacina.' },
    { tipo: 'Capreomicina, cicloserina, amikacina (2.ª línea)',
      texto: '«Capreomicina: 1. inhibidor de la síntesis de proteínas · 2. inyectable · 3. TB resistente · 4. nefrotóxica» (todas verdaderas). «Cicloserina: 1. inhibidor de síntesis de proteínas · 2. análogo de D-alanina · 3. TB resistente · 4. se administra por vía oral» (la 1 es **falsa**). «Aminoglucósido útil en TB multirresistente sin resistencia cruzada con estreptomicina» → **amikacina**.',
      trampa: 'Cicloserina = **pared celular**; capreomicina = **síntesis proteica**.' },
    { tipo: 'Fase intensiva, abandono y esquema',
      texto: '«La fase intensiva incluye RHZE y dura… ⚠ (opción c = 2 meses en el OCR)». «El abandono genera… **aparición de resistencia**». «Rifampicina en el esquema de 1.ª línea en situaciones especiales: embarazo, ancianos, VIH, diabetes» (⚠ OCR ilegible: contrasta la clave).',
      trampa: '⚠ La duración de la fase intensiva (2 meses) no está en las diapositivas legibles; viene de la Guía del Ministerio de Salud. Contrasta.' }
  ],

  consejo: [
    '🧠 **RHZE** = Rifampicina, isoniazida (H), Zinamida (pirazinamida), Etambutol. Los 4 de 1.ª línea.',
    '🧠 **Rifampicina = naranja + induce el P450 (baja otros fármacos). Isoniazida = neuropatía (piridoxina) + inhibe el P450 (sube fenitoína).**',
    '🧠 **Etambutol = ojo (verde-rojo). Pirazinamida = ácido úrico. Etionamida/cicloserina = piridoxina. Aminoglucósidos = oído. Bedaquilina = QT. Linezolida = médula y nervio óptico.**',
    '🧠 **Latente: INH 9 meses o RIF 4 meses. Lepra: dapsona + rifampicina (± clofazimina).**',
    '🧠 **Resistencia: INH = katG/inhA; RIF = rpoB; EMB = embB; PZA = pncA; FQ = girasa A; estreptomicina = rpsL/rrs.**'
  ]
});
