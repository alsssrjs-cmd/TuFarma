registrarTema({
  id: 'p2-antidepresivos',
  ficha: {
    fuente: 'Katzung, Farmacología básica y clínica, 15.ª ed., cap. 30 «Fármacos antidepresivos» (fuente: libro). Copia en fuentes\\libros\\katzung15.pdf.',
    diapositivas: 'Dr. Zabala: «Antidepresivos I, II y III» = **1 página cada uno, mapas conceptuales vectoriales** (texto convertido a trazos; 0 caracteres extraíbles; Antidepresivos II solo pesa 0,6 MB). No se leyeron. Páginas citadas = PDF katzung15.pdf págs. 861-898: clínica 880-883, efectos adversos 886-887, sobredosis 887-888, interacciones 888-890, **resumen 890-892**.',
    examenes: '2.º parcial: 🔥 (ISRS, tricíclicos, IMAO). No se buscó en el OCR de exámenes por falta de tiempo.',
    avisos: [
      '⚠ **Fuente: libro, NO los mapas de Zabala.** Contrasta con el mapa (clasificación del profe).',
      '⚠ **Litio:** en Katzung va en el cap. 29 (PDF págs. 827-860, sección desde la pág. ~847). Se añadió un resumen (mecanismo, niveles, toxicidad, interacciones) de lo leído; no se leyó el capítulo entero.',
      '⚠ No se leyeron los apartados de fisiopatología ni la farmacocinética detallada: se usó el cuadro resumen + clínica + toxicidad + interacciones.',
      '⚠ = dato que NO viene del libro (conocimiento general). Verifícalo antes de memorizarlo.'
    ]
  },

  diapositiva: [
    { titulo: 'Clasificación (PDF 867-871, 890-892)', puntos: [
      '**SSRI/ISRS** (inhibidores selectivos de la recaptación de serotonina): **fluoxetina, citalopram, escitalopram, paroxetina, sertralina, fluvoxamina**.',
      '**SNRI** (serotonina-noradrenalina): **duloxetina, venlafaxina, desvenlafaxina** (metabolito desmetilo de venlafaxina; fase II), **levomilnacipran**, milnacipran (solo fibromialgia en EE. UU.).',
      '**Tricíclicos (TCA):** **imipramina**, clomipramina (OCD), amitriptilina ⚠ (nombrada en la sobredosis) y otros.',
      '**Moduladores del receptor 5-HT2:** **trazodona, nefazodona**; **vortioxetina** (multimodal).',
      '**Tetracíclicos/monocíclicos:** **bupropión**, **mirtazapina**, amoxapina, maprotilina (estas dos casi no se usan).',
      '**IMAO:** **fenelzina, tranilcipromina, selegilina** (transdérmica inhibe MAO-A; dosis bajas oral = MAO-B → Parkinson).',
      '**Otros mencionados:** **brexanolona** (esteroide neuroactivo IV, depresión posparto; sedación excesiva en 4 %).'
    ]},
    { titulo: 'Mecanismos (PDF 890-892)', puntos: [
      '**SSRI:** bloqueo **muy selectivo de SERT**; poco efecto en NET → ↑ aguda de la actividad serotoninérgica; luego **cambios lentos** en vías de señalización y actividad neurotrófica (por eso tardan semanas).',
      '**SNRI:** bloqueo moderadamente selectivo de **NET y SERT**. **Milnacipran:** más selectivo para NET.',
      '**TCA:** bloqueo mixto y variable de NET y SERT **+ bloqueo autonómico (muscarínico, α) e histamínico H1**.',
      '**Trazodona:** bloquea **5-HT2A** (metabolito mcpp bloquea 5-HT2A/2C); **nefazodona:** 5-HT2A + SERT débil; **vortioxetina:** antagonista 5-HT3, 5-HT7, 5-HT1D; agonista parcial 5-HT1B; agonista 5-HT1A; inhibe SERT.',
      '**Bupropión:** ↑ liberación presináptica de **noradrenalina y dopamina** (sin efecto sobre 5-HT). **Mirtazapina:** ↑ liberación de NA y 5-HT (⚠ por antagonismo α2, no leído). **Amoxapina/maprotilina:** parecidas a TCA (NET > SERT).',
      '**IMAO:** bloqueo de **MAO-A y MAO-B** (fenelzina no selectiva; selegilina a dosis bajas MAO-B, irreversible) → ↑ aminas.'
    ]},
    { titulo: 'Usos (PDF 880-883, 890-892)', puntos: [
      '**Depresión mayor (MDD):** episodios agudos duran 6-14 meses sin tratamiento (≥ 20 % > 2 años); **un ensayo terapéutico dura 8-12 semanas**; remisión en ~30-40 % con el primer tratamiento. ~85 % de quienes tienen un episodio tendrán otra recurrencia.',
      '**SSRI/SNRI:** depresión, **ansiedad (GAD, pánico), TOC**, estrés postraumático, **bulimia** (fluoxetina; no sirven en anorexia), trastorno disfórico premenstrual (fluoxetina, sertralina; también solo en fase lútea), síntomas vasomotores. **SNRI:** dolor crónico, **fibromialgia** (duloxetina, milnacipran).',
      '**TCA:** depresión que no responde a otros; **dolor crónico, incontinencia (enuresis ⚠), TOC (clomipramina)**.',
      '**Bupropión:** depresión y **cese del tabaquismo**. **Mirtazapina:** depresión con sedación (insomnio). **Trazodona:** sedación/hipnosis. **Selegilina:** Parkinson.',
      '**IMAO:** depresión resistente a otros fármacos.',
      '**Elección:** SSRI de primera línea por **facilidad, tolerabilidad y seguridad en sobredosis**; TCA = letales en sobredosis, requieren control de niveles e interacciones. Evitar TCA en glaucoma de ángulo cerrado y retención urinaria ⚠ (el texto menciona glaucoma).',
      '**Bipolar:** los antidepresivos pueden inducir manía o ciclado rápido (⚠ el libro lo plantea con cautela). **Dosis:** SSRI suele iniciar con la dosis terapéutica; TCA se titulan en semanas.'
    ]},
    { titulo: 'Efectos adversos y sobredosis (PDF 886-888)', puntos: [
      '**Advertencia FDA:** ideas e **intentos suicidas** (no suicidios consumados) en **hasta 4 % de menores de 25 años**; la depresión no tratada también es factor de riesgo.',
      '**SSRI:** **disfunción sexual**, GI, insomnio o hipersomnia, aumento de peso (**paroxetina**); **síndrome de discontinuación** con vida media corta (**paroxetina, sertralina**) = mareos, etc. **Fluoxetina:** vida media larga (15-75 h con metabolito) → menor discontinuación.',
      '**SNRI:** anticolinérgicos, sedación, **hipertensión (venlafaxina)**; **cardiotoxicidad en sobredosis de venlafaxina**; duloxetina: hepatotoxicidad rara; síndrome de discontinuación como los SSRI.',
      '**TCA:** **anticolinérgicos** (los más comunes), **bloqueo α (hipotensión ortostática)**, sedación, **aumento de peso**, **arritmias y convulsiones en sobredosis**; síndrome de discontinuación (**rebote colinérgico**).',
      '**Sobredosis de TCA:** arritmias letales (**taquicardia ventricular, fibrilación**), alteraciones de PA, anticolinérgicos, convulsiones. **1500 mg de imipramina o amitriptilina** (< 7 días de dosis) es tóxico. Tratamiento: monitor cardiaco, vía aérea, lavado gástrico y **bicarbonato de sodio** (desplaza al TCA de los canales de Na⁺ cardiacos).',
      '**IMAO:** **hipotensión ortostática**, aumento de peso, insomnio, disfunción sexual (⚠); **sobredosis**: inestabilidad autonómica, hiperadrenérgico, psicosis, fiebre, convulsiones.',
      '**Bupropión y amoxapina:** ↓ umbral convulsivo (**convulsiones en sobredosis**). **Mirtazapina:** sedación y peso. **Trazodona:** bloqueo α/H1; ⚠ priapismo (clásico, no en el texto leído). **Vortioxetina:** náusea y disfunción sexual.',
      '**Otros antidepresivos** (SSRI, SNRI): muy seguros en sobredosis; las muertes casi siempre incluyen **alcohol u otros fármacos**.'
    ]},
    { titulo: 'Interacciones (PDF 888-890)', puntos: [
      '**CYP:** **fluoxetina y paroxetina = inhibidores potentes de CYP2D6**; fluvoxamina: CYP1A2, 2C19, 3A4; **duloxetina:** 2D6; nefazodona: **3A4**; bupropión: **2D6**. Efecto: ↑ niveles de TCA, citalopram (parte), warfarina, tolbutamida, fenitoína, diazepam.',
      '**Síndrome serotoninérgico:** SSRI/SNRI/TCA/**meperidina** + **IMAO** (sobreestimulación 5-HT en núcleos grises centrales y médula): **mioclonía, hiperreflexia, temblor**, fiebre ⚠. **Suspender SSRI ≥ 2 semanas antes de un IMAO; fluoxetina 4-5 semanas** (vida media larga); **IMAO ≥ 2 semanas antes de un serotoninérgico**. SNRI contraindicados con IMAO.',
      '**IMAO + tiramina** (queso curado, **cerveza de barril**, productos de soya, embutidos secos) o **simpatomiméticos indirectos** → **crisis hipertensiva** (ACV, infarto).',
      '**TCA:** efectos anticolinérgicos/antihistamínicos aditivos con otros (benzotropina, antihistamínicos).',
      '**Vortioxetina:** reducir dosis a la mitad con fluoxetina o bupropión (sustrato 2D6/2B6).'
    ]},
    { titulo: 'Litio (Katzung cap. 29, PDF ~847-858; fuente: libro)', puntos: [
      '**Primer fármaco útil en la fase maníaca del trastorno bipolar sin ser antipsicótico.** Hoy se usan más los anticonvulsivos estabilizadores (valproato, carbamazepina, lamotrigina). Profilaxis: previene **manía y depresión**. Inicio lento (se complementa al inicio con antipsicótico/benzodiacepina). Ayuda también en depresión recurrente cíclica y como **potenciador** de antidepresivos; en esquizofrenia casi no sirve sola.',
      '**Farmacocinética:** catión monovalente; absorción casi completa en 6-8 h (pico 0,5-2 h); se distribuye en el agua corporal total con **entrada lenta** al compartimiento intracelular; **eliminación casi solo renal** (depuración ≈ 20 % de la de creatinina). Dosis ≈ 0,5 mEq/kg/día divididas. **Rango terapéutico 0,6-1,4 mEq/L** (mejores resultados ~0,9; > **2 mEq/L = toxicidad probable**). Primer nivel ~5 días tras empezar.',
      '**Mecanismo (incierto):** inhibe la **monofosfatasa de inositol (IMPasa)** → agota **PIP2** → ↓ IP3/DAG; inhibe **GSK-3** (vías neurotróficas, Wnt); ↓ adenilil ciclasa; desacopla receptores de proteínas G (→ **poliuria** y **hipotiroidismo** subclínico). Puede sustituir al **Na⁺**.',
      '**Efectos adversos:** **temblor** (más común; mejora con **propranolol/atenolol**), **polidipsia y poliuria** (**diabetes insípida nefrógena**: resistente a vasopresina, responde a **amilorida**), **hipotiroidismo**, edema (retención de sodio), erupción acneiforme, leucocitosis, nefritis intersticial con uso prolongado; **contraindicado en síndrome de seno enfermo** (taquicardia-bradicardia); onda T aplanada en ECG.',
      '**Interacciones:** **tiazidas ↓ eliminación ~25 %** (reducir dosis); **AINE** ↓ eliminación; evitar **deshidratación**.',
      '**Embarazo/lactancia:** eliminación ↑ durante el embarazo y **cae tras el parto** (riesgo de niveles tóxicos); leche ⅓-½ de la sérica (letargo, cianosis en el neonato). Anomalía de **Ebstein**: dato antiguo; datos recientes sugieren riesgo bajo (el texto lo deja como no resuelto).',
      '**Intoxicación:** nivel > 2 mEq/L; el litio **se dializa con facilidad** (**hemodiálisis** preferida sobre diálisis peritoneal).'
    ]}
  ],

  explicacion: [
    { titulo: '1. Idea central: aminas y... paciencia', p: [
      'La depresión mayor se asocia a poca **serotonina/noradrenalina** en la sinapsis. Los antidepresivos suben esas aminas bloqueando su **recaptación** (SERT, NET) o frenando su **destrucción** (MAO). Pero el **efecto clínico tarda semanas**: la subida aguda de serotonina es solo el primer paso; después vienen **cambios lentos en señalización y neurotrofia**. Por eso un tratamiento de prueba dura **8-12 semanas**.',
      'Imagínate un **bar con mucha gente (neurotransmisor)**: el SSRI cierra solo la puerta de la «serotonina» (SERT); el SNRI cierra dos puertas; el TCA cierra esas puertas **y además bloquea otras** (acetilcolina, histamina, α) → de ahí sus efectos molestos.',
      '**Dato:** no son «adictivos» pero si los suspendes de golpe (sobre todo paroxetina, sertralina, venlafaxina, TCA) hay **síndrome de discontinuación**.'
    ], pausa: {
      q: 'Un paciente toma fluoxetina y tiene que pasar a un IMAO. ¿Cuánto esperas?',
      a: '**4-5 semanas** (vida media larga de fluoxetina y su metabolito). Con otros serotoninérgicos: ≥ 2 semanas. Antes de eso: **síndrome serotoninérgico**.'
    }},
    { titulo: '2. SSRI: los «cómodos»', p: [
      '**Fluoxetina, sertralina, paroxetina, citalopram, escitalopram, fluvoxamina.** Primera línea por **tolerabilidad y seguridad en sobredosis**. Sirven en depresión, ansiedad, pánico, TOC, estrés postraumático, bulimia, disfórico premenstrual.',
      '**Efectos:** **disfunción sexual** (la queja más típica), GI, insomnio, aumento de peso (**paroxetina**). **Interacciones:** fluoxetina y paroxetina inhiben **CYP2D6**; fluvoxamina **1A2**.',
      '**Ojo:** hasta 4 % de < 25 años con ideas/intentos suicidas en ensayos (advertencia FDA); la depresión sin tratar es peor.'
    ]},
    { titulo: '3. SNRI y «otros»', p: [
      '**Venlafaxina/desvenlafaxina/duloxetina/levomilnacipran:** como SSRI + **dolor crónico y fibromialgia** (duloxetina). **Venlafaxina → hipertensión y cardiotoxicidad en sobredosis.**',
      '**Bupropión:** NA + dopamina; **no da disfunción sexual** ⚠ (general); sirve para **dejar de fumar**; **↓ umbral convulsivo**. **Mirtazapina:** sedación y peso (útil si hay insomnio/inapetencia ⚠). **Trazodona:** sedante (bloquea 5-HT2A, α, H1). **Vortioxetina:** multimodal; náusea.'
    ]},
    { titulo: '4. Tricíclicos: potentes pero «sucios»', p: [
      'Bloquean NET y SERT **pero también** muscarínicos (boca seca, estreñimiento, retención urinaria, visión borrosa, confusión), **α1** (hipotensión ortostática), **H1** (sedación, peso) y canales de **Na⁺ cardiacos** (arritmias).',
      '**Sobredosis = urgencia:** arritmias ventriculares, convulsiones, coma. Se da **bicarbonato de sodio**. Una dosis de ~1500 mg es grave.',
      '**Usos hoy:** depresión resistente, **dolor crónico**, **TOC (clomipramina)**, incontinencia.'
    ], pausa: {
      q: 'Mujer con depresión, glaucoma de ángulo cerrado y retención urinaria. ¿TCA o SSRI?',
      a: '**SSRI** (o similar): el TCA empeora glaucoma y retención por su efecto **anticolinérgico**. ⚠ El libro menciona la precaución en glaucoma.'
    }},
    { titulo: '5. IMAO: pocos, pero con cuidado', p: [
      '**Fenelzina, tranilcipromina** (no selectivos); **selegilina** (MAO-B a dosis bajas → Parkinson; parche transdérmico → MAO-A también → depresión).',
      '**Dos peligros:** (1) **tiramina** (queso añejo, cerveza de barril, embutidos secos, soya) → **crisis hipertensiva**; (2) **combinar con serotoninérgicos** (SSRI, SNRI, TCA, **meperidina**) → **síndrome serotoninérgico**.',
      '**Efectos:** hipotensión ortostática, aumento de peso, insomnio.'
    ]},
    { titulo: '6. Litio: el estrecho', p: [
      'El litio es un **ion pequeño parecido al sodio**: el riñón lo trata como sodio. Si pierdes sodio (**deshidratación, tiazidas, AINE**), el riñón **retiene litio** y sube a nivel tóxico. Imagínate una cuerda floja: el rango útil es **0,6-1,4 mEq/L** y > **2** es peligro. Por eso se **mide el nivel** (primero a los ~5 días).',
      '**Efectos clásicos:** **temblor** (propranolol), **poliuria-polidipsia** (diabetes insípida nefrógena: amilorida), **hipotiroidismo**, edema. **Contraindicado en seno enfermo.** **Embarazo:** el nivel baja y sube tras el parto.',
      'Es el estabilizador para **prevenir manía y depresión** del bipolar; los anticonvulsivos (valproato, carbamazepina, lamotrigina) se usan más hoy.'
    ], pausa: {
      q: 'Paciente con litio estable empieza hidroclorotiazida por HTA. ¿Qué esperas?',
      a: '**Sube el litio** (~25 % menos eliminación) → riesgo de toxicidad: reducir dosis y medir niveles (igual con AINE).'
    }}
  ],

  memoria: {
    columnas: ['Clase / fármaco', 'Mecanismo', 'Usos', 'Efectos adversos', 'Ojo con…'],
    filas: [
      ['SSRI (fluoxetina, sertralina, paroxetina, citalopram, escitalopram)', 'Bloqueo selectivo de SERT', 'Depresión, ansiedad, pánico, TOC, PTSD, bulimia, disfórico premenstrual', 'Disfunción sexual, GI, insomnio, peso (paroxetina), discontinuación', 'Síndrome serotoninérgico con IMAO; fluoxetina/paroxetina inhiben CYP2D6'],
      ['Fluvoxamina', 'SSRI', 'Solo TOC (aprobada)', 'Como SSRI', 'Inhibe CYP1A2, 2C19, 3A4'],
      ['SNRI (venlafaxina, duloxetina, desvenlafaxina, levomilnacipran)', 'Bloqueo de SERT y NET', 'Depresión, dolor crónico, fibromialgia', 'Anticolinérgicos, sedación, **hipertensión (venlafaxina)**', 'Venlafaxina: cardiotoxicidad en sobredosis; duloxetina: 2D6'],
      ['Tricíclicos (imipramina, clomipramina)', 'Bloqueo de NET + SERT; bloquea M, α, H1', 'Depresión resistente, dolor crónico, incontinencia, TOC (clomipramina)', 'Anticolinérgicos, hipotensión ortostática, sedación, peso; **arritmias/convulsiones en sobredosis**', 'Bicarbonato en sobredosis; discontinuación = rebote colinérgico'],
      ['Trazodona / nefazodona', 'Bloqueo 5-HT2A (± SERT débil)', 'Depresión; trazodona: sedación/hipnosis', 'Bloqueo α y H1 (trazodona)', 'Nefazodona inhibe CYP3A4; ⚠ priapismo (trazodona)'],
      ['Vortioxetina', 'Multimodal: SERT, 5-HT1A/1B/1D/3/7', 'Depresión mayor', 'Náusea, disfunción sexual', '↓ dosis 50 % con fluoxetina/bupropión'],
      ['Bupropión', '↑ liberación de NA y dopamina', 'Depresión, **cese del tabaquismo**', '↓ umbral convulsivo', 'Inhibe CYP2D6'],
      ['Mirtazapina', '↑ liberación NA y 5-HT', 'Depresión con sedación', 'Sedación, aumento de peso', 'Taquicardia/desorientación en sobredosis'],
      ['Amoxapina / maprotilina', 'Tipo TCA (NET > SERT)', 'Rara vez se usan', 'Anticolinérgicos; convulsiones (amoxapina)', ''],
      ['IMAO (fenelzina, tranilcipromina, selegilina)', 'Bloqueo de MAO-A y -B (irreversible)', 'Depresión resistente; selegilina: Parkinson', 'Hipotensión ortostática, peso, insomnio', '**Tiramina → crisis hipertensiva**; serotoninérgicos → síndrome serotoninérgico'],
      ['Brexanolona', 'Esteroide neuroactivo (⚠ sobre GABA-A)', 'Depresión posparto', 'Sedación excesiva (4 %)', 'Infusión IV'],
      ['Litio (fuente: libro)', 'Inhibe IMPasa (↓ PIP2/IP3), GSK-3; sustituye Na⁺', 'Bipolar: manía y profilaxis; potenciador', 'Temblor, poliuria/DI nefrógena, hipotiroidismo, edema', 'Rango 0,6-1,4 mEq/L (> 2 tóxico); tiazidas y AINE ↑ niveles; seno enfermo; hemodiálisis']
    ],
    notas: ['Seguridad en sobredosis: SSRI/SNRI (casi seguros) > TCA/IMAO (letales); bupropión → convulsiones; venlafaxina → cardiotoxicidad.', '⚠ Litio no incluido (cap. 29 de Katzung).']
  },

  preguntan: [
    { tipo: 'Mecanismo del ISRS', texto: '⚠ No se buscó en OCR. Esperable: «fluoxetina: inhibidor selectivo de la recaptación de serotonina».', trampa: 'Duloxetina/venlafaxina = SERT + NET; imipramina = TCA.' },
    { tipo: 'IMAO y tiramina', texto: '⚠ Esperable: «IMAO + queso curado → crisis hipertensiva».', trampa: 'Con serotoninérgicos el problema es el **síndrome serotoninérgico**, no la crisis hipertensiva.' },
    { tipo: 'Sobredosis de tricíclicos', texto: '⚠ Esperable: «arritmias ventriculares y convulsiones; se trata con bicarbonato».', trampa: 'SSRI son mucho más seguros en sobredosis.' }
  ],

  consejo: [
    '🧠 **SSRI = cómodos (sexual), seguros en sobredosis. TCA = «sucios» (anticolinérgico, α, H1) y letales en sobredosis (bicarbonato).**',
    '🧠 **IMAO: tiramina (queso/cerveza) y serotoninérgicos.** Fluoxetina → 4-5 semanas antes de IMAO.',
    '🧠 **Venlafaxina: ↑ PA. Bupropión: convulsiones y tabaquismo. Mirtazapina: sueño y peso. Duloxetina: dolor.**',
    '🧠 **Efecto tarda semanas; probar 8-12 semanas.**'
  ]
});
