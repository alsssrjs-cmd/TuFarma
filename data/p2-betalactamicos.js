registrarTema({
  id: 'p2-betalactamicos',
  ficha: {
    fuente: 'Katzung, Farmacología básica y clínica, 15.ª ed. (fuente: libro). Cap. 43 «Betalactámicos y otros antibióticos activos en la pared celular y en la membrana» y arranque del cap. 51 «Uso clínico de agentes antimicrobianos». Copia en fuentes\\libros\\katzung15.pdf.',
    diapositivas: 'NO hay diapositivas de este tema (Dra. Crespo no dejó PDF). Páginas citadas = página del PDF katzung15.pdf: cap. 43 = págs. PDF 1290-1322; penicilinas 1293-1300, cefalosporinas 1301-1307, monobactámicos / inhibidores / carbapenémicos 1308-1309, vancomicina y glucopéptidos 1309-1314, daptomicina, fosfomicina, bacitracina, cicloserina 1314-1316; introducción al uso de antibacterianos: cap. 51, pág. 1470.',
    examenes: '2.º parcial: cae casi todos los años (🔥🔥). Las preguntas OCR que aparecen: bactericidas, tiempo/concentración-dependiente, cruzan barrera hematoencefálica, eliminación biliar, colitis pseudomembranosa.',
    avisos: [
      '⚠ **Fuente: libro (Katzung), no la clase de la Dra. Crespo.** Lo que ella enfatizó puede diferir (qué cefalosporinas por generación, dosis). Contrasta con sus apuntes.',
      '⚠ Katzung es de EE. UU.: algunos fármacos que cita no existen en Bolivia (p. ej. cefazolina sí; cefradina, cefalotina, cefoxitina pueden no estar). Verifica el vademécum local.',
      '⚠ = dato que NO viene del libro (conocimiento general). Verifícalo antes de memorizarlo.',
      '⚠ Las clasificaciones por «generación» del libro son tradicionales; las preguntas de examen pueden usar otra lista (la del profe).'
    ]
  },

  diapositiva: [
    { titulo: 'Cap. 51 (PDF 1470): antes de dar un antibiótico', puntos: [
      'Los antimicrobianos están **sobreprescritos**; el uso sin receta/inadecuado favorece la **resistencia**. Patógenos **ESKAPE** multirresistentes: *Enterococcus faecium, Staphylococcus aureus, Klebsiella pneumoniae, Acinetobacter baumannii, Pseudomonas aeruginosa, Enterobacteriaceae*.',
      'Primero pregúntate: ¿está indicado por clínica?, ¿tomé cultivos antes?, ¿cuáles son los agentes probables?, ¿hay evidencia de beneficio? Con germen identificado: ¿puedo **estrechar el espectro**?, ¿necesito combinar?, ¿dosis, vía y duración?, ¿hay que drenar/quitar tejido?',
      '**Terapia empírica** = antes de saber germen/sensibilidad; se basa en la experiencia con la entidad clínica.',
      '**Antibacterianos nunca para infecciones virales.**'
    ]},
    { titulo: 'Betalactámicos: química y clasificación (PDF 1290-1293)', puntos: [
      'Todos tienen el **anillo de betalactama** (4 miembros): **penicilinas, cefalosporinas, monobactámicos, carbapenémicos e inhibidores de betalactamasas** comparten química, mecanismo, farmacología e inmunología.',
      'Penicilinas: anillo de **tiazolidina (A) + betalactama (B)** = núcleo **ácido 6-aminopenicilánico**. Si la **betalactamasa** lo hidroliza → **ácido peniciloico (inactivo)**.',
      '**Carbapenémicos** tienen otra estereoquímica en el anillo → resistencia a las betalactamasas comunes.',
      '**3 grupos de penicilinas:** (1) **penicilinas** (penicilina G, V): grampositivos, cocos gramnegativos, anaerobios sin betalactamasa; poco bacilos gramnegativos; las inactiva la betalactamasa. (2) **Antiestafilocócicas** (nafcilina, oxacilina, cloxacilina, dicloxacilina; meticilina ya no se usa): resistentes a la betalactamasa estafilocócica; **no** enterococos, anaerobios ni gramnegativos. (3) **Amplio espectro**: **aminopenicilinas** (ampicilina, amoxicilina), carboxipenicilinas (carbenicilina, ticarcilina), ureidopenicilina (**piperacilina**, antipseudomonas); mejor contra gramnegativos pero **sensibles a betalactamasas**.',
      'Unidades: 1 unidad de penicilina G = 0,6 mcg; 1 millón de unidades = 0,6 g. Sales: **benzatínica y procaínica = depósito IM**. Penicilina G potasio: 1,7 mEq de K⁺ por millón de unidades. Las soluciones se inactivan rápido (≤ 24 h a 20 °C).'
    ]},
    { titulo: 'Mecanismo y resistencia (PDF 1293-1296)', puntos: [
      '**Mecanismo:** inhiben la **transpeptidación** de la síntesis de **peptidoglucano** (pared). El péptido termina en **D-Ala-D-Ala**; la **PBP** (proteína de unión a penicilina) le quita la alanina terminal y entrecruza. El betalactámico es **análogo del sustrato D-Ala-D-Ala** y se une **covalentemente** a la PBP → se frena la pared → la célula muere (participan **autolisinas**). **Solo matan bacterias que están creciendo y sintetizando pared.**',
      'La pared se arma con **N-acetilglucosamina y ácido N-acetilmurámico**. Los gramnegativos tienen **membrana externa** con **porinas**; la capa de peptidoglucano es mucho más gruesa en grampositivos.',
      '**4 mecanismos de resistencia:** (1) **inactivación por betalactamasa** (el más común; cientos descritas); (2) **PBP alteradas** (baja afinidad): resistencia a meticilina en estafilococos (**MRSA**, PBP2a), a penicilina en neumococos y enterococos; (3) **penetración alterada** (menos/ausencia de porinas; solo gramnegativos); (4) **bombas de eflujo** (gramnegativos).',
      'Betalactamasas: *S. aureus, H. influenzae, E. coli* → prefieren penicilinas. **AmpC** (*Pseudomonas, Enterobacter*) y **BLEE/ESBL** (Enterobacteriaceae) hidrolizan cefalosporinas y penicilinas. **Carbapenémicos** resisten penicilinasas y cefalosporinasas, pero los hidrolizan **carbapenemasas y metalobetalactamasas** (→ **CRE**).'
    ]},
    { titulo: 'Penicilinas: farmacocinética y usos (PDF 1297-1300)', puntos: [
      '**Vía oral:** estables al ácido y bien absorbidas: **dicloxacilina, ampicilina, amoxicilina** (500 mg → 4-8 mcg/mL). **Nafcilina: absorción errática, no oral.** Los alimentos reducen la absorción de casi todas → **1-2 h antes o después de comer; amoxicilina es la excepción** (con o sin comida).',
      '**Penicilina G**: IV mejor que IM (dolor). t½ ≈ **30 min** (hasta 10 h en insuficiencia renal); **secreción tubular ≈ 90 %**. El **probenecid** bloquea la secreción tubular → ↑ niveles (todas las penicilinas). Ajuste de dosis en insuf. renal (nafcilina: biliar; oxacilina/dicloxacilina/cloxacilina: renal y biliar, sin ajuste).',
      'Distribución amplia pero **polares** (poca entrada intracelular); mala penetración en **ojo, próstata y SNC**, salvo con **meninges inflamadas** (1-5 mcg/mL con 18-24 millones U/día).',
      '**Penicilina G (elección):** estreptococos, meningococos, algunos enterococos, neumococos sensibles, estafilococos sin betalactamasa, ***Treponema pallidum***, *Clostridium, Actinomyces*. **Penicilina V**: solo infecciones menores (baja biodisponibilidad, 4 veces/día) → se usa amoxicilina.',
      '**Penicilina benzatínica IM:** 1,2 millones U una vez → faringitis estreptocócica β-hemolítica; cada 3-4 semanas → **prevención de reinfección** (fiebre reumática ⚠ no nombrada en el libro); **2,4 millones U IM semanal × 1-3 semanas → sífilis.** Procaína: casi sin uso hoy (gonococo resistente).',
      '**Antiestafilocócicas:** dicloxacilina VO para infecciones leves-moderadas; **oxacilina/nafcilina IV (8-12 g/día)** de elección en infecciones estafilocócicas graves (endocarditis) por cepas **meticilino-sensibles**. **No** sirven contra *Listeria*, enterococos ni **MRSA**.',
      '**Amplio espectro:** **amoxicilina** (3 veces/día) para sinusitis, otitis, respiratorias bajas; ampicilina/amoxicilina = betalactámicos orales más activos contra **neumococos con MIC elevada**. **Ampicilina IV**: anaerobios, enterococos, ***Listeria***, algunos *E. coli, Salmonella*; **ya no empírica en ITU ni fiebre tifoidea**; efectiva contra *Shigella* (ampicilina, no amoxicilina). **No activa** contra *Klebsiella, Enterobacter, Pseudomonas, Citrobacter, Serratia*, *Proteus* indol +. **Piperacilina** (solo con tazobactam): *Klebsiella*, ***Pseudomonas***.',
      '**Con inhibidor de betalactamasa:** ampicilina-sulbactam, amoxicilina-**clavulanato**, piperacilina-**tazobactam**: añaden *S. aureus* productor de betalactamasa y algunos gramnegativos.'
    ]},
    { titulo: 'Penicilinas: efectos adversos (PDF 1300)', puntos: [
      'Bien toleradas → ojo con el **mal uso** (causa de resistencia). La mayoría de efectos graves = **hipersensibilidad** (determinantes: **ácido peniciloico** y productos de hidrólisis unidos a proteínas).',
      '**5-8 %** refiere alergia, pero pocos reaccionan de verdad; < 1 % de quienes toleraron antes reaccionan al re-exponerse. **Prueba cutánea** para hipersensibilidad **tipo I**. Si es necesario (endocarditis enterocócica, neurosífilis en alérgico grave): **desensibilización**.',
      '**Reacciones:** **anafilaxia** (0,05 %), **enfermedad del suero** (7-12 días), erupciones, lesiones orales, fiebre, **nefritis intersticial**, eosinofilia, **anemia hemolítica**, vasculitis.',
      '**Dosis altas en insuficiencia renal → convulsiones.** **Nafcilina:** neutropenia y nefritis intersticial. **Oxacilina:** hepatitis. **Meticilina:** nefritis intersticial (por eso ya no se usa). Orales en dosis altas: náusea, vómito, diarrea; **colitis por *C. difficile***; candidiasis (aftas, vaginal).',
      '**Ampicilina/amoxicilina + mononucleosis (virus de Epstein-Barr) = erupción cutánea.** **Piperacilina-tazobactam + vancomicina → ↑ lesión renal aguda.**'
    ]},
    { titulo: 'Cefalosporinas: química y 1.ª-2.ª generación (PDF 1301-1305)', puntos: [
      'Núcleo **ácido 7-aminocefalosporánico**; más estables que las penicilinas a muchas betalactamasas. **No cubren *Listeria***; de las disponibles, solo **ceftarolina** tiene algo de actividad contra **enterococos**. **BLEE** hidrolizan casi todas.',
      '**1.ª generación:** **cefazolina** (IV), **cefalexina** (VO), cefadroxilo, cefalotina, cefapirina, cefradina. Muy activas contra **cocos grampositivos** (estreptococos, estafilococos *no* MRSA); *E. coli, K. pneumoniae, P. mirabilis* sensibles; pobre contra *Pseudomonas, Enterobacter, Serratia, Acinetobacter*; *B. fragilis* no. **Cefazolina:** elección en **profilaxis quirúrgica**, penetra la mayoría de tejidos pero **NO el SNC (no en meningitis)**; sirve en alergia leve a penicilina (no inmediata). Cefalexina: 0,25-0,5 g c/6 h, ITU y piel.',
      '**2.ª generación:** cefaclor, cefuroxima, cefprozil, cefamandol, cefonicida, loracarbef + **cefamicinas (cefoxitina, cefotetán) = activas contra anaerobios (*B. fragilis*)**. Más cobertura gramnegativa (*Klebsiella* sí). **Cefuroxima/cefaclor** → *H. influenzae* (sinusitis, otitis, respiratorias); cefuroxima a veces en neumonía comunitaria, **pero no en meningitis** (peor que ceftriaxona/cefotaxima). **Cefoxitina/cefotetán** → peritonitis, diverticulitis, **EPI**. Ninguna cubre enterococos ni *Pseudomonas*; **no usar para *Enterobacter*** (se selecciona betalactamasa cromosómica).'
    ]},
    { titulo: 'Cefalosporinas 3.ª-4.ª gen. y nuevas (PDF 1305-1307)', puntos: [
      '**3.ª gen.:** cefotaxima, **ceftriaxona**, **ceftazidima**, ceftizoxima, cefoperazona, moxalactama (parenterales); cefixima, cefpodoxima, cefdinir, cefditoren, ceftibuteno (orales). Más cobertura gramnegativa, **cruzan la barrera hematoencefálica** (las IV). Activas contra *Citrobacter, Serratia, Providencia*, y cepas productoras de betalactamasa de *Haemophilus* y *Neisseria*. **Ceftazidima = la única con actividad útil contra *P. aeruginosa*.** Hidrolizadas por **AmpC** (no fiables contra *Enterobacter, Serratia, Citrobacter, Acinetobacter*) y por **BLEE**.',
      '**Ceftriaxona:** t½ **7-8 h**, 1 vez al día; **excreción biliar → sin ajuste renal** (las demás se eliminan por riñón). Dosis: 1 g/día la mayoría; **2 g c/12 h meningitis**; 2 g/día endocarditis/osteomielitis. **Ceftriaxona IM + azitromicina = elección en gonorrea.** Cefixima ya no se recomienda en uretritis gonocócica por resistencia.',
      '**Ceftriaxona y cefotaxima:** aprobadas para **meningitis** (neumococo, meningococo, *H. influenzae*, bacilos entéricos gramnegativos; **no *Listeria***). Las más activas contra **neumococo no sensible a penicilina**; si MIC de penicilina > 1 mcg/mL → **añadir vancomicina**. También sepsis empírica.',
      '**4.ª gen.: cefepima** — resiste mejor las betalactamasas cromosómicas (**sí sirve en *Enterobacter***), buena contra *Pseudomonas*, *S. aureus* sensible a meticilina, neumococo, *Haemophilus, Neisseria*; entra al LCR; t½ 2 h. **Neutropenia febril empírica.** Hidrolizada por BLEE.',
      '**Ceftarolina fosamil:** primera con actividad contra **MRSA** (alta afinidad por **PBP2a**), algo contra enterococos; piel/partes blandas y neumonía comunitaria; 600 mg c/12 h; no cubre AmpC/BLEE.',
      '**Con inhibidores:** **ceftolozano-tazobactam** y **ceftazidima-avibactam** (intraabdominal complicada, ITU; *Pseudomonas*, AmpC, BLEE; **no** metalobetalactamasas; ceftazidima-avibactam sirve en algunas carbapenemasas); con metronidazol si es intraabdominal (poco anaerobio).',
      '**Cefiderocol** (cefalosporina «sideróforo»): entra a la bacteria por los **transportadores de hierro** (caballo de Troya) y resiste todas las betalactamasas, incluso metalo; gramnegativos resistentes (*Acinetobacter, Pseudomonas*); no grampositivos ni anaerobios.'
    ]},
    { titulo: 'Cefalosporinas: efectos adversos (PDF 1307)', puntos: [
      '**Alergia:** como penicilinas (anafilaxia, fiebre, rash, nefritis, granulocitopenia, anemia hemolítica). **Reactividad cruzada con penicilina ≈ 1 %**, más probable con penicilinas/aminopenicilinas y cefalosporinas tempranas (**cadenas laterales R1 similares**). Con **anafilaxia a penicilina: NO dar 1.ª ni 2.ª generación**; 3.ª-4.ª con precaución en entorno controlado.',
      '**Toxicidad local:** dolor IM, **tromboflebitis** IV; nefritis intersticial y necrosis tubular raras.',
      '**Grupo metiltiotetrazol** (cefamandol, cefmetazol, cefoperazona; hoy **cefotetán**): **hipoprotrombinemia/sangrado** (se previene con **vitamina K** 10 mg 2 veces/semana) y **reacción tipo disulfiram con alcohol** → evitar alcohol.'
    ]},
    { titulo: 'Monobactámicos, inhibidores de betalactamasas y carbapenémicos (PDF 1308-1309)', puntos: [
      '**Aztreonam** (único monobactámico): anillo betalactama **monocíclico**; solo **aerobios gramnegativos (incluye *Pseudomonas*)**; **nada contra grampositivos ni anaerobios**. Estable a muchas betalactamasas (**no** a AmpC ni BLEE); entra a LCR; 1-2 g IV c/8 h. **Los alérgicos a penicilina lo toleran** (útil en anafilaxia a penicilina); ojo con alergia grave a **ceftazidima** (estructura similar). Efectos: rash, ↑ transaminasas.',
      '**Inhibidores de betalactamasa:** **ácido clavulánico, sulbactam, tazobactam** (parecidos a la betalactama, antibacteriana muy débil); más activos contra **clase A de Ambler** (TEM: *S. aureus, H. influenzae, N. gonorrhoeae, Salmonella, Shigella, E. coli, K. pneumoniae*); inhiben también la de *B. fragilis* y *M. catarrhalis*; **no inhiben clase C (AmpC; *Enterobacter, Citrobacter, Serratia, Pseudomonas*)**. **Avibactam y vaborbactam** (no betalactámicos): clase A y C; avibactam también algunas clase D (OXA-48). **Relebactam** (con imipenem-cilastatina).',
      'Un inhibidor solo «arregla» si la resistencia es por **una betalactamasa que ese inhibidor sí bloquee**. Ej.: ampicilina-sulbactam no cubre *Serratia*; si la *Pseudomonas* es resistente a piperacilina también lo es a piperacilina-tazobactam.',
      '**Carbapenémicos:** **imipenem** (amplio: gramnegativos incl. *Pseudomonas*, grampositivos, anaerobios), **meropenem, doripenem, ertapenem**. Resistentes a casi todas las betalactamasas, **no** a carbapenemasas/metalobetalactamasas. **Resistentes (naturalmente):** *E. faecium*, **MRSA**, *C. difficile*, *Burkholderia cepacia*, *Stenotrophomonas maltophilia*.',
      '**Imipenem** lo destruye la **deshidropeptidasa renal** → se da con **cilastatina** (inhibidor). Meropenem y doripenem no la necesitan (más actividad gramnegativa, menos grampositiva). **Ertapenem:** t½ 4 h → 1 g/día IV/IM (IM con lidocaína 1 %), **sin actividad contra *Pseudomonas* ni *Acinetobacter*** y **no entra bien al LCR** (los demás sí).',
      '**Usos:** infecciones por gérmenes resistentes (*Pseudomonas*), mixtas aerobias/anaerobias, **elección en infecciones graves por gramnegativos BLEE** y en ***Enterobacter*** (resisten su betalactamasa); neutropenia febril. **Nuevas combinaciones** (meropenem-vaborbactam; imipenem-relebactam) para **CRE**.',
      '**Efectos:** náusea, vómito, diarrea, rash, reacciones en sitio de infusión; **convulsiones con imipenem** (sobre todo en insuficiencia renal; mucho menos con meropenem/doripenem/ertapenem). Reactividad cruzada con penicilina **< 1 %**.'
    ]},
    { titulo: 'Vancomicina y glucopéptidos (PDF 1309-1314)', puntos: [
      '**Vancomicina** (*Amycolatopsis orientalis*): **solo grampositivos** (peso molecular grande, no cruza membrana externa gramnegativa). **Mecanismo:** se une al extremo **D-Ala-D-Ala** del pentapéptido (**no** a la PBP) → inhibe la **transglucosilasa** → no hay elongación ni entrecruzamiento; además daña la membrana. **Bactericida lento**, solo si la célula se divide; más lenta que las penicilinas. **Sinergia con gentamicina/estreptomicina** en enterococos.',
      '**Resistencia:** enterococos (VRE) cambian **D-Ala-D-Ala por D-lactato** → se pierde un puente de hidrógeno → la vancomicina ya no se une; algunas cepas raras de *S. aureus* (VRSA, MIC ≥ 16) lo adquirieron. Cepas «intermedias» (MIC 4-8): pared engrosada con muchas dianas falsas D-Ala-D-Ala que la secuestran.',
      '**Farmacocinética:** mala absorción oral → **VO solo para colitis por *C. difficile***; parenteral siempre **IV**. 1 g en 1 h → 15-30 mcg/mL. LCR 7-30 % si hay inflamación. **90 % por filtración glomerular**; t½ 6-10 días en anuria. Blanco clínico: **AUC/MIC ≥ 400** (antes: valles 15-20 mcg/mL en infecciones graves).',
      '**Usos:** **bacteriemia y endocarditis por MRSA**; endocarditis enterocócica en alérgico grave (con gentamicina); **meningitis por neumococo resistente a penicilina** (con cefotaxima/ceftriaxona o rifampicina); **colitis por *C. difficile*** (VO; hoy de primera línea sobre metronidazol). **Peor que oxacilina/nafcilina** en infecciones graves por estafilococo **meticilino-sensible**.',
      '**Efectos adversos:** flebitis (irritante), escalofríos/fiebre; **nefrotoxicidad** (sobre todo con valles altos y con aminoglucósidos; más con piperacilina-tazobactam); **ototoxicidad rara** (picos < 60 mcg/mL); **síndrome del «hombre rojo»** = enrojecimiento por **liberación de histamina** → **infundir en 1-2 h** o antihistamínico (difenhidramina).',
      '**Teicoplanina:** como vancomicina, IM o IV, t½ 45-70 h (en Europa, no EE. UU.). **Telavancina** (lipoglucopéptido): inhibe pared **y despolariza la membrana**; nefrotóxica, **teratogénica**. **Dalbavancina y oritavancina** (derivados de teicoplanina): t½ > 10 días, **1 sola dosis** en piel y partes blandas; dalbavancina 30 min, oritavancina 3 h.'
    ]},
    { titulo: 'Otros activos en pared/membrana (PDF 1314-1316)', puntos: [
      '**Daptomicina** (lipopéptido cíclico): se inserta en la **membrana dependiendo de calcio** → despolarización, salida de K⁺, muerte rápida **sin lisis**. Activa contra grampositivos, **incluye VRE y MRSA**; bactericida más rápida que vancomicina. 4 mg/kg piel y partes blandas, 6 mg/kg bacteriemia/endocarditis. **Miopatía → CPK semanal**; **la inactiva el surfactante pulmonar → NO en neumonía**; neumonitis eosinofílica con uso prolongado.',
      '**Fosfomicina** (trometamol): análogo del **fosfoenolpiruvato**; inhibe la **enolpiruvato transferasa** (primer paso de formación de UDP-N-acetilmurámico). **Dosis única 3 g VO** para ITU baja no complicada en mujeres; segura en embarazo.',
      '**Bacitracina:** bloquea la desfosforilación del transportador lipídico; **muy nefrotóxica → solo tópica** (con neomicina/polimixina), no para prevenir infección de heridas.',
      '**Cicloserina:** análogo de **D-alanina**, inhibe **alanina racemasa** y **D-Ala-D-Ala ligasa**; casi solo en **tuberculosis resistente**; toxicidad en **SNC** (cefalea, temblor, psicosis, convulsiones; evitar con < 0,75 g/día).'
    ]}
  ],

  explicacion: [
    { titulo: '1. Antes de la tabla: ¿qué es un betalactámico?', p: [
      'Imagínate que la bacteria es una casa y la **pared de peptidoglucano** son los ladrillos con cemento. El cemento lo pone la **PBP** (transpeptidasa) uniendo cadenas que terminan en **D-Ala-D-Ala**. El betalactámico es un **ladrillo falso con forma de D-Ala-D-Ala**: la PBP lo agarra, se queda pegada para siempre (unión covalente) y ya no puede poner cemento → la pared queda débil → la bacteria revienta por la presión osmótica.',
      '**Ojo con esto:** solo funciona si la bacteria **está creciendo**. Si no construye pared, no le hacen nada. Por eso se llaman **bactericidas dependientes del tiempo** (⚠ el libro lo dice por el mecanismo; el término «tiempo-dependiente» es de la clase de farmacología general).',
      'Todos los betalactámicos (penicilinas, cefalosporinas, carbapenémicos, monobactámicos) comparten el **anillo de 4 lados**. Si lo rompe una **betalactamasa**, el antibiótico muere. De ahí salen todos los trucos: o cambias el antibiótico (cefalosporinas, carbapenémicos), o le pones un **guardaespaldas** (inhibidor de betalactamasa).'
    ], pausa: {
      q: '¿Por qué a la bacteria resistente a la meticilina (MRSA) no le hacen nada ni la oxacilina ni las cefalosporinas «normales»?',
      a: 'Porque cambió la **diana**: fabrica una **PBP2a** a la que los betalactámicos casi no se unen (baja afinidad). No es que los destruya: no los «ve». Por eso se usa **vancomicina** (que va al D-Ala-D-Ala, no a la PBP) o **ceftarolina** (diseñada para unirse a PBP2a).'
    }},
    { titulo: '2. Las 4 formas de resistir (y el truco para cada una)', p: [
      '**1) Betalactamasa** (la más común): destruye el antibiótico. → Se contraataca con **inhibidores** (clavulanato, sulbactam, tazobactam, avibactam…) o con otro betalactámico más estable (carbapenémico).',
      '**2) PBP cambiada**: la diana ya no sirve (MRSA, neumococo resistente, enterococo). → Dosis altas o otro grupo (vancomicina, ceftarolina).',
      '**3) Menos porinas** (solo gramnegativos): la puerta de entrada se cierra. Sola casi nunca basta, pero con una betalactamasa floja sí. **4) Bomba de eflujo**: la bacteria lo saca de vuelta.',
      'Dato de examen: **gramnegativos = tienen membrana externa**; por eso las penicilinas «normales» no entran bien. Las **aminopenicilinas** mejoran la entrada, pero siguen siendo destruidas por betalactamasas.'
    ]},
    { titulo: '3. Penicilinas: tres «personalidades»', p: [
      '**Penicilina G / V:** la clásica. Elección para **sífilis, estreptococo, meningococo**, neumococo sensible. La V es la oral (poco usada). Se elimina rapidísimo por el riñón (t½ 30 min): por eso hay **formas depósito IM** (benzatínica, procaínica). **Benzatínica 1,2 millones U = faringitis; 2,4 millones U semanal = sífilis.**',
      '**Antiestafilocócicas** (oxacilina, nafcilina, dicloxacilina): tienen una cadena lateral voluminosa que **tapa el anillo** y la betalactamasa del *Staphylococcus* no lo alcanza. Sirven contra *S. aureus* **sensible a meticilina** y estreptococos. **No** sirven contra MRSA, enterococos, *Listeria* ni gramnegativos.',
      '**Amplio espectro:** ampicilina/amoxicilina (*Listeria*, enterococos, otitis, sinusitis; amoxicilina se absorbe mejor y se toma con o sin comida); piperacilina (*Pseudomonas*, siempre con tazobactam). **Todas** las destruyen las betalactamasas → por eso aparecen **con inhibidor**.',
      '**Ojo con esto:** **ampicilina + mononucleosis infecciosa → rash**. **Probenecid** alarga la vida de las penicilinas (bloquea su secreción tubular).',
      '**Alergia:** la historia de «me dio rash de niño» es poco confiable (5-8 % dicen ser alérgicos, pocos lo son). Se puede hacer **prueba cutánea**. En el caso de estudio del libro (hombre alérgico a amoxicilina con neumonía + meningitis), se plantea **ceftriaxona** (reactividad cruzada ≈ 1 %) ⚠ más vancomicina; el libro no da la respuesta en esas páginas.'
    ], pausa: {
      q: 'Un paciente tiene anafilaxia documentada a penicilina y una infección grave por *Pseudomonas*. ¿Qué betalactámico no le daría reacción cruzada?',
      a: '**Aztreonam** (monobactámico): los alérgicos a penicilina lo toleran. Ojo si la alergia fue a **ceftazidima** (estructura parecida).'
    }},
    { titulo: '4. Cefalosporinas: por generaciones, lo que cambia es el gramnegativo', p: [
      'Regla práctica: **mientras sube la generación, baja un poco la cobertura de grampositivos y sube la de gramnegativos** (cuarta generación recupera los grampositivos).',
      '**1.ª (cefazolina, cefalexina):** estafilococo (no MRSA), estreptococo, *E. coli/Klebsiella/Proteus*. **Profilaxis quirúrgica = cefazolina.** No cruza al SNC.',
      '**2.ª:** cefuroxima/cefaclor → *H. influenzae* (vía respiratoria). **Cefoxitina/cefotetán** = «cefamicinas» → **anaerobios** (*B. fragilis*): abdomen y pelvis. Cefotetán tiene el grupo **metiltiotetrazol**: puede dar sangrado y **efecto disulfiram**.',
      '**3.ª:** **ceftriaxona y cefotaxima → meningitis** (y neumococo resistente); **ceftazidima → *Pseudomonas***. **Ceftriaxona** se elimina por **bilis** (no ajusta en insuficiencia renal) y se da 1 vez al día. **Ninguna cubre enterococos ni *Listeria*.** No fiarse de ellas en *Enterobacter* (AmpC).',
      '**4.ª (cefepima):** *Pseudomonas* + grampositivos + *Enterobacter*; neutropenia febril.',
      '**Nuevas:** ceftarolina (MRSA); ceftolozano-tazobactam y ceftazidima-avibactam (gramnegativos multirresistentes); **cefiderocol** (entra por los canales de hierro: «caballo de Troya»).',
      '**Ojo:** BLEE destruyen las cefalosporinas (casi todas) y penicilinas → ahí van los **carbapenémicos**.'
    ]},
    { titulo: '5. Carbapenémicos y aztreonam: la «artillería pesada»', p: [
      '**Carbapenémicos:** amplísimo espectro (gramnegativos + *Pseudomonas* + grampositivos + anaerobios); resisten betalactamasas comunes y BLEE → **elección en infecciones graves por BLEE**. Los gana el **MRSA, *E. faecium*, *C. difficile*, *Stenotrophomonas*** y las **carbapenemasas** (CRE).',
      '**Imipenem + cilastatina**: la cilastatina impide que el riñón lo destruya. **Meropenem / doripenem** sin cilastatina. **Ertapenem:** 1 vez al día, **no cubre *Pseudomonas* ni *Acinetobacter*** y no entra bien al LCR.',
      '**Efecto estrella:** **convulsiones** (imipenem, sobre todo con insuficiencia renal). Meropenem es más seguro para el SNC (el libro da dosis de 2 g c/8 h en meningitis).',
      '**Aztreonam:** solo **gramnegativos aerobios** (como una 3.ª gen. «solo gramnegativa»); útil en alérgicos a penicilina.'
    ]},
    { titulo: '6. Vancomicina: otro lugar, otra diana', p: [
      'No va a la PBP, va al **D-Ala-D-Ala** (el «ladrillo» antes de ser colocado). Por eso sirve contra **MRSA** y es solo para **grampositivos** (no cruza la membrana externa gramnegativa).',
      '**IV siempre**, salvo **VO para *C. difficile*** (no se absorbe, queda en el intestino). Usos: **MRSA (bacteriemia, endocarditis), meningitis por neumococo resistente (+ ceftriaxona), endocarditis enterocócica en alérgico (+ gentamicina), *C. difficile***.',
      '**Efectos:** **síndrome del hombre rojo** (histamina por infusión rápida → pasar en 1-2 h), **nefrotoxicidad** (peor con aminoglucósidos o piperacilina-tazobactam), ototoxicidad rara.',
      '**Resistencia VRE:** D-Ala-D-Ala → **D-Ala-D-lactato**: pierde un puente de hidrógeno y la vancomicina ya no se pega bien.',
      'Primos: **teicoplanina** (IM/IV, vida larga), **telavancina** (nefrotóxica y **teratogénica**), **dalbavancina/oritavancina** (una sola dosis; semivida > 10 días).',
      '**Daptomicina** = alternativa para VRE y MRSA pero **no en neumonía** (la inactiva el surfactante) y ojo con **CPK/miopatía**.'
    ], pausa: {
      q: 'Paciente con neumonía por MRSA. ¿Daptomicina o vancomicina?',
      a: '**Vancomicina** (o linezolid ⚠ otro capítulo): la daptomicina la inactiva el surfactante pulmonar → está contraindicada en neumonía.'
    }}
  ],

  memoria: {
    columnas: ['Grupo / fármaco', 'Mecanismo / punto clave', 'Usos / elección', 'Efectos adversos', 'Ojo con…'],
    filas: [
      ['Penicilina G / V', 'Betalactámico: inhibe PBP (transpeptidación)', 'Sífilis, estreptococo, meningococo, neumococo sensible', 'Alergia (anafilaxia, suero), convulsiones en dosis altas en IR', 'G IV (t½ 30 min); V oral. Benzatínica: faringitis 1,2 M; sífilis 2,4 M IM'],
      ['Oxacilina / nafcilina / dicloxacilina', 'Resistentes a la betalactamasa estafilocócica', 'S. aureus **meticilino-sensible** (endocarditis: IV)', 'Nafcilina: neutropenia, nefritis; oxacilina: hepatitis', 'No MRSA, ni enterococo, ni *Listeria*; dicloxacilina VO lejos de comida'],
      ['Ampicilina / amoxicilina', 'Aminopenicilinas', 'Otitis, sinusitis, respiratorias; *Listeria*, enterococo; neumococo MIC alta', 'Rash (sobre todo con mononucleosis), diarrea', 'Amoxicilina se toma con o sin comida; ampicilina ya no en ITU/tifoidea'],
      ['Piperacilina-tazobactam', 'Ureidopenicilina + inhibidor', 'Pseudomonas, gramnegativos, empírica', 'Alergia; con vancomicina ↑ lesión renal', 'Tazobactam no inhibe AmpC de Pseudomonas'],
      ['Amoxicilina-clavulanato / ampicilina-sulbactam', 'Inhibidor de betalactamasa clase A', 'S. aureus productor de BL, H. influenzae', 'GI, alergia', 'Sulbactam no cubre Serratia (clase C)'],
      ['Cefazolina (1.ª)', 'Cefalosporina: PBP', '**Profilaxis quirúrgica**; estrepto/estafilo no-MRSA', 'Alergia; flebitis', '**No entra al SNC**'],
      ['Cefuroxima, cefaclor (2.ª)', 'Idem', 'H. influenzae, sinusitis, otitis', 'Alergia', 'Cefuroxima no en meningitis'],
      ['Cefoxitina, cefotetán (cefamicinas)', 'Idem', 'Anaerobios (B. fragilis): peritonitis, diverticulitis, EPI', 'Cefotetán: sangrado (metiltiotetrazol) + efecto disulfiram', 'Vitamina K; evitar alcohol'],
      ['Ceftriaxona / cefotaxima (3.ª)', 'Idem', '**Meningitis**; neumococo resistente; gonorrea (ceftriaxona IM + azitro)', 'Alergia; ceftriaxona biliar', 'Ceftriaxona: 1 vez/día, sin ajuste renal; no cubre *Listeria* ni enterococo'],
      ['Ceftazidima (3.ª)', 'Idem', '**Pseudomonas**', 'Alergia', 'Hidrolizada por AmpC/BLEE'],
      ['Cefepima (4.ª)', 'Resiste betalactamasas cromosómicas', 'Pseudomonas, Enterobacter, neutropenia febril', 'Alergia', 'BLEE la hidrolizan'],
      ['Ceftarolina', 'Alta afinidad por PBP2a', '**MRSA** (piel, neumonía)', 'Alergia', 'No AmpC/BLEE'],
      ['Ceftolozano-taz. / ceftazidima-avibactam', 'Cefalosporina + inhibidor', 'Gramnegativos MDR, intraabdominal, ITU', 'Alergia', 'No metalo-BL; con metronidazol en abdomen'],
      ['Aztreonam', 'Monobactámico', 'Gramnegativos aerobios (incl. Pseudomonas)', 'Rash, ↑ transaminasas', 'Seguro en alérgicos a penicilina; cuidado si alergia a ceftazidima'],
      ['Imipenem-cilastatina', 'Carbapenémico', 'Amplio: Pseudomonas, anaerobios, BLEE; neutropenia febril', '**Convulsiones**, GI, rash', 'Cilastatina evita degradación renal; no MRSA ni *C. difficile*'],
      ['Meropenem / doripenem', 'Carbapenémico', 'Idem (meningitis: meropenem)', 'Menos convulsiones', 'No necesitan cilastatina'],
      ['Ertapenem', 'Carbapenémico', 'Mixtas, BLEE; 1/día IV-IM', 'GI, rash', 'No Pseudomonas ni Acinetobacter; poco LCR'],
      ['Vancomicina', 'Une D-Ala-D-Ala (inhibe transglucosilasa)', '**MRSA**, *C. difficile* (VO), meningitis por neumococo resistente', '**Hombre rojo** (histamina), nefrotoxicidad, ototoxicidad rara', 'IV, infundir 1-2 h; solo grampositivos; VRE = D-lactato'],
      ['Teicoplanina / telavancina / dalbavancina / oritavancina', 'Glucopéptidos (± membrana)', 'Grampositivos; piel y partes blandas', 'Telavancina: nefrotóxica y teratogénica', 'Dalba/orita: 1 dosis, t½ > 10 días'],
      ['Daptomicina', 'Despolariza la membrana (calcio-dependiente)', 'MRSA, VRE, bacteriemia, endocarditis', 'Miopatía (CPK)', '**No en neumonía** (surfactante)'],
      ['Fosfomicina / bacitracina / cicloserina', 'Pared: enolpiruvato transferasa / transportador lipídico / alanina racemasa', 'ITU baja (3 g VO); tópica; TB resistente', 'Bacitracina: nefrotóxica; cicloserina: SNC', 'Dosis única de fosfomicina']
    ],
    notas: ['Betalactamasas: clase A (TEM; inhibidores clásicos sí), clase C (AmpC; no), carbapenemasas/metalo (solo cefiderocol; ceftaz-avibactam algunas).', '⚠ Clasificación por generación y fármacos disponibles según Katzung (EE. UU.); contrasta con la lista del profe.']
  },

  preguntan: [
    { tipo: 'Bactericidas vs bacteriostáticos (OCR examenes-p2)',
      texto: '«Son antimicrobianos bactericidas: 1. ceftriaxona 2. vancomicina 3. amoxicilina…» (⚠ OCR ruidoso).',
      trampa: 'Betalactámicos y vancomicina son bactericidas (vancomicina lenta). Bacteriostáticos clásicos: tetraciclinas, macrólidos ⚠ (otro tema).' },
    { tipo: 'Atraviesan la barrera hematoencefálica',
      texto: '«Pueden atravesar la barrera hematoencefálica: ceftriaxona, cefazolina, cefotaxima…» (⚠ OCR).',
      trampa: '**Cefazolina NO** entra al SNC; ceftriaxona/cefotaxima sí (meningitis). Ertapenem no es bueno en LCR; meropenem sí.' },
    { tipo: 'Cefalosporinas 3.ª generación y eliminación biliar',
      texto: '«Cefalosporinas de tercera generación eliminadas por bilis: ceftriaxona…» (⚠ OCR).',
      trampa: 'Solo **ceftriaxona** es biliar (sin ajuste renal); las demás se ajustan al riñón.' },
    { tipo: 'Acinetobacter / carbapenémicos',
      texto: '«Indicado en neumonía por Acinetobacter baumannii: imipenem, amikacina, meropenem…» (⚠ OCR).',
      trampa: 'Imipenem/meropenem sí; **ertapenem no** cubre Acinetobacter ni Pseudomonas.' },
    { tipo: 'Colitis pseudomembranosa',
      texto: '«Su uso condiciona riesgo de colitis pseudomembranosa: eritromicina, imipenem, vancomicina…» (⚠ OCR).',
      trampa: 'La vancomicina **oral** es el **tratamiento** de *C. difficile*; el riesgo lo da cualquier antibiótico (penicilinas, cefalosporinas, clindamicina ⚠).' },
    { tipo: 'Tiempo-dependiente vs concentración-dependiente',
      texto: '«Señale los antimicrobianos concentración dependiente: ceftazidima, imipenem, ciprofloxacino…» (⚠ OCR).',
      trampa: 'Concentración-dependientes ⚠: aminoglucósidos y quinolonas. Betalactámicos y vancomicina: **tiempo-dependientes** (⚠ la clase lo vio en farmacología general; no está en las páginas de Katzung leídas).' },
    { tipo: 'Interacción CYP3A4 / dalbavancina (OCR)',
      texto: '«Interfiere la CYP 3A4: meropenem, dalbavancina…» (⚠ OCR muy ruidoso).',
      trampa: 'No hay dato de CYP3A4 para estos fármacos en las páginas leídas del libro: probablemente la respuesta correcta era otro fármaco. ⚠ No memorizar.' }
  ],

  consejo: [
    '🧠 **Betalactámicos = ladrillo falso D-Ala-D-Ala → PBP. Vancomicina = se pega al ladrillo (D-Ala-D-Ala).**',
    '🧠 **Meningitis: ceftriaxona/cefotaxima (+ vancomicina si neumococo resistente; ampicilina para *Listeria* ⚠).** Cefazolina y cefuroxima **no**.',
    '🧠 **Cefazolina = cirugía. Cefoxitina/cefotetán = abdomen/pelvis (anaerobios). Ceftazidima/cefepima = Pseudomonas. Ceftarolina = MRSA.**',
    '🧠 **Carbapenémicos para BLEE; imipenem = convulsiones; ertapenem no cubre Pseudomonas.**',
    '🧠 **Aztreonam = el betalactámico que sí puede darse en alergia a penicilina.**',
    '🧠 **Vancomicina: IV lento (hombre rojo), VO solo para *C. difficile*, nefrotoxicidad con aminoglucósidos.**',
    '🧠 **Daptomicina: no en neumonía.**'
  ]
});
