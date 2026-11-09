registrarTema({
  id: 'p1-farmacodinamia-z',
  ficha: {
    fuente: 'Farmacodinamia I, II, III y IV - Dr. Zabala.pdf (4 archivos)',
    diapositivas: 'I: 26 diap. (absorción y vías) · II: 25 diap. (distribución, depuración, excreción) · III: 20 diap. (biotransformación) · IV: 22 diap. (variables farmacocinéticas y dosificación)',
    examenes: '1.er parcial 2018-2025: biodisponibilidad, vida media, primer paso, citocromo P450, vías de administración (sublingual), dosis de carga salen casi todos los años (🔥🔥)',
    avisos: [
      '⚠ **Corrección de título**: los archivos llamados «Farmacodinamia I-IV» del Dr. Zabala en realidad tratan de **FARMACOCINÉTICA** (absorción, vías, distribución, eliminación, biotransformación, dosificación). Las curvas dosis-respuesta, potencia y eficacia **no** están aquí: mira el tema de Calvimonte (Farmacodinámica I-II).',
      '⚠ Todas las diapositivas tienen texto extraíble; no hay imágenes con contenido que se haya perdido, pero no vienen fórmulas de Henderson-Hasselbalch ni ejemplos numéricos. Lo que está marcado ⚠ no está en las diapositivas.'
    ]
  },

  diapositiva: [
    { titulo: 'Farmacocinética I: conceptos (diap. 2-11)', puntos: [
      '**Farmacocinética** = lo que el organismo le hace al fármaco: absorción, distribución, biotransformación y excreción.',
      '**Penetración**: capacidad de los fármacos de atravesar barreras biológicas por diversos mecanismos.',
      '**Absorción**: paso del exterior hasta la circulación; las membranas son lipoproteicas: dejan pasar **liposolubles** y son impermeables a **hidrosolubles**, que solo pasan por **poros** (tamaño pequeño) o **espacios intercelulares**. La eficiencia depende de la vía.',
      '**pKa / pH**: el pKa expresa el grado de ionización y depende del pH del medio; el grado de ionización indica liposolubilidad/hidrosolubilidad → capacidad de absorberse, distribuirse y excretarse. Se calcula con la **ecuación de Henderson-Hasselbalch**.',
      '**Ácido débil / base débil**: la mayoría de fármacos lo son; son **más liposolubles en forma poco ionizada** (absorción y excreción más fáciles); los muy ionizados son hidrosolubles. La excreción renal depende del pH de la orina.',
      '**Difusión acuosa**: por poros de membrana (PM < 100-150) o espacios intercelulares de capilares (PM < 20 000).',
      '**Difusión lipídica**: el fármaco se disuelve en los lípidos de la membrana; las moléculas más liposolubles (no ionizadas) la atraviesan a favor del gradiente; el pH del medio determina la ionización.',
      '**Difusión facilitada**: por **acarreadores/transportadores**; **saturable e inhibible**.',
      '**Transporte activo**: de menor a mayor concentración, **gasta energía**; generalmente no sucede con fármacos.',
      '**Pinocitosis** (endo/exocitosis): fármacos de PM muy alto (> 1000). Endocitosis = englobar la molécula; exocitosis = el proceso contrario.'
    ]},
    { titulo: 'Vías enterales (diap. 12-15)', puntos: [
      '**Oral**: preferida, segura, fácil, económica; «caprichos» de absorción, ácidos gástricos, **efecto de primer paso**, irrita mucosas, absorción relativamente lenta.',
      '**Sublingual**: absorción **rápida** (vascularizada), **no pasa por estómago ni hígado → evita primer paso**; puede ulcerar la mucosa; pocas drogas (solo muy liposolubles).',
      '**Rectal**: absorción rápida; llega a la circulación general por el **plexo hemorroidal inferior**; generalmente **sin primer paso**; sirve en pacientes inconscientes y niños; poco aceptada por adultos.',
      '**Colónica**: por vía anal pero actúa en mucosa colónica; **sufre primer paso**; enemas evacuantes y contrastes.'
    ]},
    { titulo: 'Vías parenterales (diap. 16-22)', puntos: [
      '**Intradérmica**: absorción lenta, efecto prolongado; **vacunas**; lesiones cicatriciales.',
      '**Subcutánea**: absorción lenta y prolongada por escasa irrigación; dolorosa, puede dar necrosis, abscesos, escaras; no admite grandes volúmenes.',
      '**Intramuscular** (deltoides, glúteos): absorción **rápida**, menos dolorosa, admite sustancias algo irritantes; necrosis, abscesos, escaras, lesión de nervios.',
      '**Intravenosa**: **no necesita absorberse**, acción inmediata, sales irritantes, venoclisis, fácil control de dosis; técnica especializada, **no se puede recuperar**, infección, reacción alérgica o hística grave.',
      '**Intraarterial**: opacificar trayectos vasculares o altas concentraciones locales (antimicrobianos, citostáticos), bombas; riesgo de septicemia.',
      '**Intratecal**: contacto con LCR, SNC y meninges **evitando la barrera hematoencefálica**; riesgo de meningitis.',
      '**Intraarticular**: antimicrobianos, antiinflamatorios, analgésicos directo al tejido articular; artritis séptica, hematomas.'
    ]},
    { titulo: 'Inhalatoria, transdérmica, tópica y resumen (diap. 23-26)', puntos: [
      '**Inhalatoria**: absorción rápida (gran superficie, vascularización), no pasa por estómago ni hígado; necesita nebulizadores/aerosoles; dosificación difícil.',
      '**Transdérmica**: efecto sistémico, cómoda, absorción lenta, efecto prolongado; irritación de piel.',
      '**Tópica**: efecto local en piel o mucosas; se absorben poco y lento; sensibilización; para mejor absorción eliminar la queratina. Con sustancias muy liposolubles la acción puede ser sistémica.',
      '**Enteral** = digestiva (bucal, sublingual, rectal, colónica). **Parenteral** = hay que colocar el fármaco en la circulación general o en contacto directo con el sitio de acción (acción sistémica o local). **Tópica** = en la superficie corporal o mucosas.'
    ]},
    { titulo: 'Farmacocinética II: distribución, depuración, excreción (diap. 2-8)', puntos: [
      '**Distribución**: el fármaco llega a las regiones del cuerpo por la circulación y su fijación a proteínas, atravesando membranas y capilares, hasta el líquido intersticial y los órganos blanco.',
      '**Volumen de distribución (Vd)**: relaciona la cantidad de fármaco en el organismo (agua corporal) con su concentración en sangre o plasma **no fijado**. Distribución no proporcional: poco en espacio vascular, mucho en extravascular.',
      '**Aclaramiento / depuración**: predice la **tasa de eliminación** respecto a la concentración plasmática; es la suma de la eliminación por riñón, hígado, pulmón y otros.',
      '**Eliminación** = biotransformación y/o excreción; desaparece la acción farmacológica **pero no siempre sus efectos**.',
      '**Eliminación de capacidad limitada**: los órganos eliminan hasta un máximo; según la dosis puede haber **saturación** y acumulación; determina cantidad y velocidad de dosificación.',
      '**Eliminación dependiente del flujo**: el flujo sanguíneo al órgano es el principal determinante; a mayor flujo, mayor eliminación; el fármaco debe estar **libre** (no unido a proteínas).',
      '**Excreción**: salida de xenobióticos; **su velocidad determina en general la vida media**.'
    ]},
    { titulo: 'Condiciones de la distribución (diap. 9-15)', puntos: [
      'Para llegar al órgano blanco el fármaco debe estar **disuelto** (no fijado a superficies celulares ni macromoléculas), de **bajo peso molecular y no ionizado**, y la zona con **flujo sanguíneo adecuado**.',
      '**1. Unión a proteínas plasmáticas** (sitios inertes, **albúmina** y otras proteínas no receptoras): determina qué fracción queda **libre** para actuar y/o metabolizarse.',
      '**2. Tamaño molecular**: bajo → filtración; mediano/alto y poco liposoluble → transporte activo; muy alto → no atraviesa, queda en la sangre (como el fármaco unido a albúmina).',
      '**3. Liposolubilidad**: depende de la ionización; no ionizadas → difunden; ionizadas → polares, no difunden; pH del medio.',
      '**4. Flujo sanguíneo**: determina la velocidad de distribución; equilibrio rápido en tejidos de flujo alto (hígado, riñones) o bajo (celular subcutáneo) ⚠ (la diapositiva los pone juntos).',
      '**5. Solubilidad tisular**: el fármaco se disuelve en el tejido (gases, anestésicos, tejido celular subcutáneo); en tejidos muy extensos se diluye.',
      '**6. Capacidad de atravesar membranas**: **inversamente proporcional al tamaño molecular y directamente proporcional a la liposolubilidad**.'
    ]},
    { titulo: 'Terminación del efecto y excreción por vías (diap. 16-25)', puntos: [
      'El efecto desaparece por biotransformación, excreción y eliminación (depuración); ocurre cuando la concentración baja **más del 50 %** → relacionado con la **vida media**.',
      'Un fármaco puede ingresar activo o inactivo; al biotransformarse puede **aumentar, disminuir, terminar o cambiar** sus efectos (benéficos o tóxicos).',
      '**Renal**: vía más importante de excreción: **filtración glomerular** (depende de la presión sanguínea) y **secreción tubular** (transporte activo). La **reabsorción tubular** no es excreción; evita eliminar sustancias muy liposolubles y depende del pH urinario. **Ácidos débiles se excretan más rápido en orina alcalina; bases débiles en orina ácida.**',
      '**Hepática**: vía más importante de **biotransformación**; fármacos o metabolitos se secretan a la bilis → intestino; la parte no ionizada se reabsorbe: **circulación enterohepática**; detectables en heces.',
      '**Digestiva**: la luz gástrica e intestinal secretan algunos fármacos activos; se reabsorben o excretan según el pH. **Pulmonar**: gases y líquidos volátiles (espiración). **Vías menores** (sudor, saliva, leche): leche → problemas en lactantes; saliva → sabor.',
      '**Sitios inertes de fijación**: la unión no produce acción; si un fármaco **desplaza** a otro, ↑ biodisponibilidad del desplazado → **mayor toxicidad**.',
      '**Curva de Gauss**: tras la administración la curva sube hasta el máximo efecto y luego decae por biotransformación y excreción.'
    ]},
    { titulo: 'Biotransformación (diap. 2-20)', puntos: [
      '**Metabolismo** modifica características físico-químicas y actividad: **desactivar, eliminar o activar**. Ocurre en retículo endoplásmico, mitocondrias, citosol, lisosomas, envoltura nuclear o membrana plasmática. Es necesario porque limita la acción del fármaco (activa o desactiva; ↑ o ↓ efectos; efectos benéficos o tóxicos).',
      '**Fase I**: convierte el fármaco en uno **más polar**, introduciendo un grupo funcional por **oxidación, reducción o hidrólisis**. **Fase II**: **conjugación o síntesis** (glucuronidación, acetilación, sulfatación; ácido glucurónico, sulfato, glicina) → más fácil de depurar. En general, I y II convierten un fármaco **lipófilo en hidrófilo**.',
      '**Dónde**: el **hígado** es el principal; también mucosa GI, pulmones, riñones, piel. **Efecto de primer paso**: fármacos orales absorbidos íntegros pasan por el sistema porta y el hígado los biotransforma → ↓ biodisponibilidad. La flora del intestino grueso también biotransforma.',
      '**Función microsómica**: enzimas en el **retículo endoplásmico liso**, producen detoxicación. Las oxidaciones requieren: **NADPH (reductor), citocromo P-450, P-450 reductasa y oxígeno molecular**. Dos enzimas: **flavoproteína** (NADPH-citocromo P450 oxidorreductasa) y **hemoproteína** (citocromo P450, oxidasa terminal).',
      '**Isoformas CYP** hepáticas: 1A2, 2A6, 2B6, 2C8, 2C9, 2C18, 2C19, 2D6, 2E1, 3A4, 3A5, 4A11… Las más importantes: **CYP1A2 (~15 %), 2A6 (4 %), 2B6 (1 %), 2C9 (20 %), 2D6 (5 %), 2E1 (10 %), 3A4 (30 %)** del P450 hepático.',
      '**Inducción**: acelera el metabolismo → **↓ acción** del inductor y de los fármacos que se dan con él; puede **exacerbar la toxicidad tisular**. **Inhibición**: compite con enzimas (citocromooxidasa) → no hay biotransformación → ↑ actividad de algunos fármacos.',
      '**Fase II y dieta**: la dieta regula las conjugaciones; algunas conjugaciones son responsables de **hepatotoxicidad**.',
      '**Cambios clínicos**: activo→inactivo, inactivo→activo (profármaco), poco tóxico→más tóxico, o metabolito más activo.',
      '**Factores que retrasan el metabolismo**: vía de ingreso del fármaco y fijación a proteínas plasmáticas. **Genéticos** (autosómicos recesivos); **ambientales** (xenobióticos: tabaco, exposición a inductores). **Interacciones** fármaco-fármaco y compuestos endógenos (competencia por el mismo sustrato). **Enfermedades** hepáticas (sobre todo), cardíacas, pulmonares, tiroideas, renales, pancreáticas, envenenamientos alteran el metabolismo → efectos adversos imprevisibles.',
      'El metabolismo **no siempre es inocuo**: puede producir metabolitos tóxicos, que se hacen visibles al saturarse o agotarse las vías alternativas de detoxicación.'
    ]},
    { titulo: 'Farmacocinética IV: variables y dosificación (diap. 2-22)', puntos: [
      '**Biodisponibilidad**: cantidad de fármaco **inalterado**, libre o disponible, que ocupa un receptor y produce acción. Se relaciona con el grado de absorción, la concentración libre, la concentración en el sitio de acción y la intensidad de la respuesta.',
      '**Vd**: relación entre la cantidad en el organismo y la concentración en sangre/plasma. **Vd muy alto** → se concentra en tejido extravascular. Agua corporal de un adulto de 70 kg: **sangre 5,5 L; plasma 3 L; líquido extracelular 12 L; agua corporal total 42 L**. El Vd no es un volumen real; cambia con **edad, sexo, enfermedad, pKa, afinidad a proteínas, coeficiente de separación en grasa**.',
      '**Depuración**: la velocidad de eliminación depende del **flujo sanguíneo** y es directamente proporcional a la concentración en sangre arterial. **Velocidad de dosificación** = velocidad de depuración en equilibrio; si es **mayor** → **acumulación/saturación** y toxicidad. La mayoría de vías de eliminación se saturan.',
      '**Vías**: mayores — renal, hepática, pulmonar, intestinal; menores — mamaria, salival, sudoración.',
      '**Semivida (t½)**: tiempo en que el fármaco pierde el **50 %** de su concentración estable en sangre. **t½ = 0,7 × Vd / D** (D = depuración).',
      '**Porcentaje de extracción**: % del fármaco removido de la sangre en cada paso por un órgano.',
      '**Acumulación**: al repetir dosis siempre hay acumulación; si el intervalo es **menor a 4 vidas medias**, la acumulación es detectable; es inversamente proporcional a la fracción perdida en cada intervalo.',
      'Las enfermedades pueden modificar cualquier variable farmacocinética.'
    ]},
    { titulo: 'Tipos de dosis (diap. 14-22)', puntos: [
      '**Dosis**: cantidad introducida para producir efecto. **Estándar**: determinada en voluntarios sanos. **Mantenimiento/sostén**: mantiene el efecto terapéutico. **Carga/ataque**: llega rápido a concentraciones terapéuticas.',
      '**Terapéutica**: efecto deseado en un individuo. **Sin efecto**: dosis máxima sin efecto tóxico (dosis no tóxica más alta). **Tóxica**: produce efecto tóxico. **Letal mínima**: mata al primer animal. **Usual**: efecto en el **80 %** de la población, la aconsejada por el laboratorio.',
      '**Por peso**: dosis = peso / 70 kg × dosis usual. **Por edad**: jóvenes: edad / 20 años × usual; niños: edad en meses / 120 meses × usual. **Por superficie corporal**: SC / 1,3 m² × usual. **Por sexo**: mujer ≈ **75 %** de la dosis del varón.',
      '**Mínima**: mínima para el efecto. **Máxima**: máxima sin efectos tóxicos. **Simple** (única), **continua** (infusión), **intermitente** (fracciones), **sobredosis** (accidental o intencional, envenenamiento).'
    ]}
  ],

  explicacion: [
    { titulo: '1. El viaje del fármaco: ADME', p: [
      'Imagínate un paquete de encomienda: **A**bsorción = lo entregan en la puerta de la ciudad; **D**istribución = lo reparten por las calles; **M**etabolismo (biotransformación) = lo desarman en el taller (el hígado); **E**xcreción = lo botan fuera de la ciudad (riñón, bilis). Farmacocinética es «**lo que el organismo le hace al fármaco**» (farmacodinamia es lo que el fármaco le hace al organismo: es otro tema).',
      'Todo depende de una pregunta: **¿puede atravesar membranas?** La membrana es una capa de grasa con proteínas: pasa lo **liposoluble y no ionizado**; lo hidrosoluble/ionizado solo cuela por **poros** (PM < 100-150) o por los **espacios entre las células de los capilares** (PM < 20 000).'
    ]},
    { titulo: '2. pKa, pH y «atrapar» el fármaco', p: [
      'Casi todos los fármacos son **ácidos o bases débiles**. Según el pH del medio, están más **ionizados** (cargados, hidrosolubles, no cruzan) o más **no ionizados** (liposolubles, sí cruzan). La ecuación de Henderson-Hasselbalch calcula cuánto.',
      'En la orina esto se aprovecha: **ácidos débiles se excretan más rápido en orina alcalina; bases débiles en orina ácida** (cargas el fármaco para que no se reabsorba y se elimine). Es la lógica de alcalinizar la orina en una intoxicación por un ácido débil ⚠ (ejemplo clásico: salicilatos; no está en la diapositiva).'
    ], pausa: {
      q: '¿Un ácido débil se absorbe mejor en el estómago (ácido) o en el intestino (más alcalino)?',
      a: 'En un medio ácido el ácido débil está **menos ionizado** → más liposoluble → pasa mejor. ⚠ En la práctica el intestino absorbe casi todo por su enorme superficie: la diapositiva solo da la regla general (poco ionizado = más fácil de absorber y excretar).'
    }},
    { titulo: '3. Mecanismos de paso por la membrana', p: [
      '**Difusión acuosa** (poros), **difusión lipídica** (la más común: el fármaco se disuelve en la membrana), **difusión facilitada** (con transportador: **saturable e inhibible**), **transporte activo** (contra gradiente, gasta energía; poco frecuente con fármacos) y **pinocitosis** (moléculas gigantes, PM > 1000; endocitosis al entrar y exocitosis al salir).',
      'Regla de oro: **PM bajo → filtra; PM medio/alto y poco liposoluble → transporte activo; PM muy alto → no atraviesa**.'
    ]},
    { titulo: '4. Las vías: lo que sale en examen', p: [
      '**Sublingual**: se absorbe rápido y **evita el primer paso** (no pasa por estómago ni hígado). Solo funciona con fármacos **muy liposolubles**. **Rectal**: rápida, drena al plexo hemorroidal inferior, **generalmente sin primer paso**; útil en niños e inconscientes. **Colónica**: sí tiene primer paso (enemas y contrastes).',
      '**Oral**: la preferida, pero con «caprichos de absorción», ácidos, **primer paso** y absorción lenta.',
      '**Parenterales**: **IV** = sin absorción, inmediata, no recuperable; **IM** = rápida (vascularizada); **SC** = lenta y prolongada (poca irrigación; no admite volúmenes grandes); **intradérmica** = lenta, vacunas; **intratecal** = evita la barrera hematoencefálica; **intraarterial** = altas concentraciones locales; **intraarticular** = directo a la articulación.',
      '**Inhalatoria** = rápida por la gran superficie (no estómago ni hígado). **Transdérmica** = lenta y prolongada, efecto sistémico. **Tópica** = efecto local (se absorbe poco).'
    ], pausa: {
      q: 'Un paciente con angina necesita nitroglicerina ya. ¿Oral o sublingual, y por qué?',
      a: '**Sublingual**: absorción rápida y **sin primer paso hepático** (la diapositiva da esas ventajas; el ejemplo de nitroglicerina es mío ⚠).'
    }},
    { titulo: '5. Distribución, Vd y proteínas', p: [
      'Una vez en sangre, el fármaco va **libre** o **pegado a albúmina**. Solo el **libre** actúa, se metaboliza y se elimina. La albúmina es un «**taxi**»: la parte unida viaja, pero no puede bajarse al tejido.',
      'La unión se hace a **sitios inertes** (no producen efecto). Si dos fármacos compiten por esos sitios, el que **desplaza** al otro sube la fracción libre del desplazado → **más biodisponibilidad → más toxicidad**.',
      '**Volumen de distribución**: relaciona la **cantidad total en el cuerpo** con la **concentración en plasma**. **Vd grande** = el fármaco se «esconde» en los tejidos (poco queda en el plasma); **Vd pequeño** = se queda en la sangre. En un adulto de 70 kg: sangre 5,5 L, plasma 3 L, LEC 12 L, agua total 42 L. El Vd es «virtual»: cambia con edad, sexo, enfermedad, pKa, unión a proteínas y grasa.',
      'Los seis condicionantes de la distribución: **unión a proteínas, tamaño molecular, liposolubilidad, flujo sanguíneo, solubilidad tisular y capacidad de atravesar membranas** (↑ con liposolubilidad, ↓ con tamaño).'
    ]},
    { titulo: '6. Biotransformación: de lipófilo a hidrófilo', p: [
      'El objetivo del hígado es que el fármaco **se pueda orinar**: lo vuelve hidrosoluble. **Fase I** (oxidación, reducción, hidrólisis) le mete un grupo funcional y lo hace más polar; **Fase II** (conjugación: glucuronidación, acetilación, sulfatación) lo pega a algo hidrófilo (ácido glucurónico, sulfato, glicina) para que se elimine fácil.',
      'La fase I necesita un «kit»: **NADPH + citocromo P450 + P450 reductasa + O₂**. El P450 es la **hemoproteína oxidasa terminal**; la reductasa es la flavoproteína. Las isoformas dominantes: **CYP3A4 (30 %), CYP2C9 (20 %), CYP1A2 (15 %), CYP2E1 (10 %), CYP2D6 (5 %)**.',
      '**Efecto de primer paso**: lo que se traga pasa del intestino a la **vena porta** y el hígado lo «cobra» antes de que llegue a la circulación → **baja la biodisponibilidad**. Por eso existen vías que lo evitan: sublingual, rectal, IV, inhalatoria, transdérmica.',
      '**Inducción** = más enzima → el fármaco (y los demás sustratos) se **eliminan más rápido → menos efecto**; puede ↑ toxicidad si el metabolito es tóxico. **Inhibición** = menos enzima → el fármaco se **acumula → más efecto/toxicidad**.',
      'Cambios posibles: activo → inactivo, **inactivo → activo (profármaco)**, poco tóxico → más tóxico. La enfermedad **hepática** cambia el metabolismo de forma impredecible. Genética (autosómica recesiva), ambiente (tabaco) e interacciones también influyen.'
    ], pausa: {
      q: 'Un paciente toma un inductor enzimático (p. ej., rifampicina ⚠) y su anticonceptivo falla. ¿Por qué?',
      a: 'La inducción de CYP acelera la eliminación del anticonceptivo → menos concentración → menos efecto. La diapositiva dice: «inducción: acelera el metabolismo o disminuye la acción de los fármacos que se administran con él». ⚠ El ejemplo es mío.'
    }},
    { titulo: '7. Eliminación: renal, hepática y el resto', p: [
      '**Riñón** = vía más importante de excreción: **filtración** (depende de la presión arterial) + **secreción tubular** (transporte activo) − **reabsorción tubular** (no es excreción; depende del pH urinario y afecta a lo liposoluble).',
      '**Hígado/bilis** = vía más importante de **biotransformación**; lo secretado a bilis puede **reabsorberse** (circulación enterohepática). **Pulmón** = gases y volátiles. **Leche** = cuidado en lactantes. **Saliva** = sabor.',
      '**Dos tipos de eliminación**: **de capacidad limitada** (saturable: al saturarse, se acumula) y **dependiente del flujo** (a más flujo sanguíneo al órgano, más eliminación; solo el fármaco libre).',
      'Desaparecer el efecto = ↓ de la concentración en > 50 % (vida media). Ojo: **terminar la acción no siempre termina los efectos**.'
    ]},
    { titulo: '8. Biodisponibilidad, vida media y acumulación', p: [
      '**Biodisponibilidad**: la fracción que llega **inalterada** a ocupar un receptor. Depende de absorción, primer paso, unión a proteínas, etc.',
      '**Vida media** (t½): tiempo en perder el 50 % de la concentración. **t½ = 0,7 × Vd / D**: **más Vd → t½ más larga; más depuración → t½ más corta**. ⚠ Ojo: la diapositiva escribe «0.7 Vd /D», con D = depuración (en Katzung se escribe 0,693·Vd/CL).',
      '**Acumulación**: dosis repetidas siempre acumulan. Si el intervalo entre dosis es **menor a 4 vidas medias**, la acumulación es detectable. Si la velocidad de dosificación supera la de depuración → **saturación → toxicidad**.',
      '**Porcentaje de extracción**: % que un órgano quita de la sangre en un paso.',
      '**Dosis de carga** (llegar rápido a concentración terapéutica) vs **mantenimiento** (sostener). En el examen: «la dosis de impregnación/carga es aplicable en fármacos **con vida media prolongada**» ⚠ (la opción que se ve en el OCR).'
    ]},
    { titulo: '9. Tipos de dosis y fórmulas', p: [
      '**Por peso**: peso/70 × usual. **Por edad**: jóvenes edad/20 × usual; niños: edad en meses/120 × usual. **Por superficie**: SC/1,3 × usual. **Mujer**: 75 % de la dosis del varón. **Dosis usual** = efecto en el 80 % de la población. **Dosis sin efecto** = la máxima sin toxicidad. **Mínima/máxima**: mínima eficaz y máxima sin toxicidad.',
      '⚠ Las fórmulas son literales de la diapositiva; no son las usuales en la práctica pediátrica actual: verifica con tu profe si las piden.'
    ]}
  ],

  memoria: {
    columnas: ['Tema', 'Dato clave', 'Número / regla', 'Ojo con…'],
    filas: [
      ['Membrana', 'Pasa lo liposoluble y no ionizado', 'Poros: PM < 100-150; espacios intercelulares: PM < 20 000; pinocitosis: PM > 1000', 'La difusión facilitada es saturable e inhibible'],
      ['Ácido débil / base débil', 'Poco ionizado = liposoluble = se absorbe y excreta mejor', 'Ácidos débiles → orina alcalina; bases débiles → orina ácida', 'Reabsorción tubular no es excreción'],
      ['Sublingual', 'Rápida; evita primer paso', 'Solo muy liposolubles', 'Puede ulcerar la mucosa'],
      ['Rectal', 'Rápida; generalmente sin primer paso', 'Plexo hemorroidal inferior', 'Colónica sí tiene primer paso'],
      ['IV', 'Sin absorción; inmediata', 'No recuperable', 'Más infección y reacción alérgica'],
      ['Intratecal', 'Evita barrera hematoencefálica', '—', 'Meningitis'],
      ['Vd', 'Cantidad en el cuerpo / concentración plasmática', 'Sangre 5,5 L; plasma 3 L; LEC 12 L; agua total 42 L (70 kg)', 'No es volumen real'],
      ['Vida media', 'Pierde 50 % de la concentración', 't½ = 0,7 × Vd / D', 'Acumula si intervalo < 4 vidas medias'],
      ['Biotransformación', 'Fase I (oxidación, reducción, hidrólisis) → Fase II (conjugación)', 'Lipófilo → hidrófilo', 'Glucuronidación = fase II, no usa P450 (examen)'],
      ['P450', 'NADPH + citocromo P450 + P450 reductasa + O₂', 'CYP3A4 30 %, 2C9 20 %, 1A2 15 %, 2E1 10 %, 2D6 5 %', 'Inducción ↓ efecto; inhibición ↑ efecto'],
      ['Primer paso', 'El hígado biotransforma antes de la circulación sistémica', '↓ biodisponibilidad', 'Se evita por sublingual, rectal, IV, inhalatoria'],
      ['Dosis', 'Usual = 80 % de la población; mujer 75 %', 'Peso/70; SC/1,3; edad/20 (jóvenes) o meses/120 (niños)', 'Carga = rápido; mantenimiento = sostener']
    ],
    notas: ['Todo lo de esta tabla es de las diapositivas; las explicaciones («por qué») son del texto de arriba.']
  },

  preguntan: [
    { tipo: 'Biodisponibilidad y vida media (conceptos)',
      texto: 'Preguntas tipo «¿es concepto de: vida media, eficacia, **biodisponibilidad**, rango terapéutico, volumen de distribución?» (ejemplo: «grado de biodisponibilidad para un fármaco por una vía en particular»). También «refleja el tiempo para que un fármaco se distribuya del plasma al sitio de acción» (⚠ distractor: vida media). «Condiciones: posología, disponibilidad, aceptabilidad…» (no es biodisponibilidad: es conveniencia).',
      trampa: 'La biodisponibilidad es **la fracción que llega inalterada a la circulación/receptor**; no es potencia ni vida media.' },
    { tipo: 'Citocromo P450 y microsomas (clave 1-4)',
      texto: '«Para las oxidaciones en los microsomas se requiere: **1 citocromo P450, 2 NADPH, 3 oxígeno molecular**, 4 ciclooxigenasas / transferasas» → solo 1+2+3 (A). «La inducción enzimática puede dar como resultado: 1 ↑ metabolismo, 2 metabolitos activos, 3 reducción del efecto farmacológico, 4 ↑ efecto…» (⚠ el OCR no deja ver todos).',
      trampa: 'Cuarta opción casi siempre falsa: **transferasas** (fase II) o **ciclooxigenasas** no son parte del sistema P450.' },
    { tipo: 'Fase I vs fase II',
      texto: '«La conjugación con ácido glucurónico: disminuye su solubilidad en agua, inactiva la droga, **es una reacción de fase I**, ocurre al mismo ritmo en adultos y recién nacidos, involucra al citocromo P450». Respuesta: ninguna de esas, la correcta es que **aumenta** la solubilidad/inactiva (es fase II, y los recién nacidos la hacen más lento ⚠).',
      trampa: 'Glucuronidación = **fase II**, **más hidrosoluble**; no usa P450. «El metabolismo de fase I no es adecuado si hay falla hepática» (verdadero).' },
    { tipo: 'Vías de administración (clave 1-4)',
      texto: '«Características de la vía sublingual: 1 evita el efecto de primer paso, 2 se absorben fármacos **liposolubles**, 3 es de rápida absorción, 4 es segura y económica» → 1+2+3 (la 4 describe la vía oral). «Todo lo siguiente retrasa la acción de un fármaco EXCEPTO: solubilidad lipídica alta, unión a proteínas tisulares, administración como sal insoluble, **inducción por citocromo P450**» (⚠ puede estar mal leído).',
      trampa: '«Segura y económica» = oral. «Evita primer paso» = sublingual, rectal, IV.' },
    { tipo: 'Eliminación / depuración',
      texto: '«Factores que influyen sobre el proceso de depuración: 1 flujo sanguíneo, 2 vía de ingreso, 3 fijación a proteínas…». «Factores que **retrasan** el metabolismo: vía de ingreso, fijación a proteínas plasmáticas». «Todo expresa excreción renal EXCEPTO: filtración glomerular, secreción tubular, **reabsorción tubular**, fenómeno de primer paso (⚠ la opción de «excepto» es el primer paso, que no es renal)».',
      trampa: 'Reabsorción tubular **no** es excreción; primer paso **no** es renal.' },
    { tipo: 'Dosis de carga e impregnación',
      texto: '«La dosis de impregnación es aplicable en fármacos: liposolubles, altamente tóxicos, hidrosolubles, hepatotóxicos, **con vida media prolongada**».',
      trampa: 'Si el fármaco tarda muchas vidas medias en llegar a estado estable, se «carga» al inicio.' }
  ],

  consejo: [
    '🧠 **Lipo + no ionizado = pasa.** Hidro + ionizado = se queda y se orina.',
    '🧠 **Vías que evitan el primer paso: sublingual, rectal, IV, inhalatoria, transdérmica. La oral NO.**',
    '🧠 **Fase I = «abre» (oxida, reduce, hidroliza) con P450 (NADPH + O₂). Fase II = «pega» (conjuga con glucurónico, sulfato, glicina).**',
    '🧠 **t½ = 0,7 × Vd / D:** Vd grande → dura más; depuración alta → dura menos. Acumula si das la dosis en < 4 vidas medias.',
    '🧠 Inducción = menos efecto; inhibición = más efecto/toxicidad.'
  ]
});
