registrarTema({
  id: 'p3-asma',
  ficha: {
    fuente: 'Asma Bronquial - Dr. Calvimonte.pdf (incluye EPOC y Tratamiento de la tos)',
    diapositivas: 'págs. PDF 2-87 (asma 2-61; EPOC 57-60; tos y antitusivos 63-87). Las págs. 1 (portada) y 87 son cierre/portada.',
    examenes: '3.er parcial y Final 2019-2025: asma/EPOC cae todos los años (🔥🔥); antitusivos y mucolíticos salen casi siempre como 1-2 preguntas.',
    avisos: [
      '⚠ Págs. PDF 10 (Rx tórax, análisis de sangre, prick test) y 13 (figura) son casi solo imagen: no se pudo leer su contenido. Pág. 12 es continuación de la 11 (respuesta tardía), sí tiene texto.',
      '⚠ Los **mucolíticos y expectorantes** (acetilcisteína, ambroxol, bromhexina, guaifenesina, yoduros, carbocisteína) NO están en esta diapositiva; los incluyo porque salen en exámenes. Todo lo que ponga de ellos es ⚠ (sale de las preguntas de examen por OCR y de farmacología general; verifícalo en Katzung).',
      '⚠ = dato que NO está en las diapositivas (lógica farmacológica, Katzung o examen). Verifícalo antes de memorizarlo. Citas: «pág.» = número de página del PDF.'
    ]
  },

  diapositiva: [
    { titulo: 'Concepto y epidemiología (págs. 2-4)', puntos: [
      'Tres aspectos característicos: **broncoconstricción/obstrucción bronquial reversible**, **hiperreactividad**, **inflamación linfocítica y eosinofílica**.',
      'Enfermedad inflamatoria crónica de las vías aéreas con intensa hiperreactividad frente a estímulos diversos; la obstrucción varía en intensidad y desaparece espontáneamente o con tratamiento.',
      'Común en menores de 18 años. Estimado global: 300 millones. EE. UU.: 17,7 millones de adultos (7,4 %) y 6,3 millones de niños (8,6 %); 10,5 millones de consultas ambulatorias, 1,8 millones a emergencias y 439 000 hospitalizaciones al año.',
      '**Clínica**: episodios recurrentes de disnea, opresión torácica y sibilancias, a menudo con tos. **Fisiopatología**: estrechamiento generalizado y reversible de las vías respiratorias + aumento marcado de la respuesta bronquial a estímulos inhalados. **Patología**: inflamación linfocítica y eosinofílica de la mucosa.',
      '**Remodelación**: engrosamiento de la lámina reticular bajo el epitelio e hiperplasia de músculo liso, glándulas secretoras y células caliciformes.'
    ]},
    { titulo: 'Clasificación de la gravedad (pág. 5)', puntos: [
      'Dos dominios: **insuficiencia** (frecuencia de síntomas, gravedad de la obstrucción en pruebas de función pulmonar, terapia requerida para el control) y **riesgo** (susceptibilidad a exacerbaciones).',
      'Según insuficiencia: asma **intermitente leve, persistente leve, persistente moderada, persistente grave**; pasa a «muy grave» si es propensa a exacerbaciones frecuentes e intensas.'
    ]},
    { titulo: 'Espirometría y diagnóstico (págs. 6-10)', puntos: [
      'Prueba básica de función pulmonar: mide volúmenes y flujos. **FVC** = volumen total espirado; **FEV1** = volumen en el 1.er segundo; **FEV1/FVC** normal > 70-75 %; por debajo = **obstrucción**.',
      'Patrón del asmático: limitación ventilatoria **obstructiva** (VEF1 bajo, CVF baja o normal) que mejora tras broncodilatador. ⚠ La diapositiva (pág. 8) dice «relación VEF1/CVF alta», lo que contradice la pág. 7 (obstrucción = relación baja). Probable error de la diapositiva; pregúntalo.',
      'Requisitos previos: explicar la técnica; no es necesario ayuno; evitar estimulantes/depresores; sin broncodilatadores las horas previas; sin ropa ajustada ni fajas; no fumar; no ejercicio 30 min antes.',
      'Diagnóstico (pág. 10, solo títulos): radiografía de tórax, análisis de sangre, pruebas cutáneas de alergia (prick test). ⚠ imagen, sin detalle.'
    ]},
    { titulo: 'Patogenia (págs. 11-14)', puntos: [
      '**Respuesta temprana**: IgE contra proteínas extrañas (polvo, cucarachas, caspa, mohos, polen) → se une a receptores de alta afinidad (FcεRI) de los **mastocitos**; la reexposición libera histamina, triptasa, **LTC4 y LTD4**, **PGD2** y **PAF** → broncoconstricción, ↑ permeabilidad vascular y caída del FEV1.',
      '**Respuesta tardía** (3-6 h después): segunda fase más sostenida por influjo de células inflamatorias; citocinas de los **linfocitos Th2** (IL-4, IL-5, GM-CSF, TNF) atraen eosinófilos y neutrófilos, estimulan moco, edema, contracción del músculo liso y ↑ reactividad → segunda caída del FEV1.',
      'Asma «extrínseca» vs «intrínseca», «sensible a la aspirina», «inicio en la edad adulta», «posviral», «relacionada con la obesidad».',
      '**Hiperreactividad**: la mayoría de los ataques NO los desencadena un alérgeno (IgE) sino las **infecciones virales respiratorias**. También broncoespasmo por aerosol de agua destilada, ejercicio, aire frío, humo de cigarrillo, SO2; relacionada con la inflamación de la mucosa.'
    ]},
    { titulo: 'Clasificación de los fármacos (pág. 15)', puntos: [
      '**Broncodilatadores**: simpaticomiméticos, metilxantinas, antimuscarínicos.',
      '**Corticoesteroides**: orales/parenterales e inhalatorios (ICS).',
      '**Estabilizadores de membrana**: cromoglicato, nedocromilo.',
      '**Inhibidores de la vía de leucotrienos**: inhibidor de 5-lipooxigenasa; antagonistas del receptor LTD4.',
      '**Anticuerpos monoclonales**: anti-IgE, anti-IL-5.',
      'Los más usados: broncodilatadores «**aliviadores**» (simpaticomiméticos) y corticoides inhalados «**controladores**» (antiinflamatorios) (pág. 16).'
    ]},
    { titulo: 'Agonistas beta (págs. 17-21)', puntos: [
      'Mecanismo: ↑ AMPc intracelular → relajan el músculo liso de la vía aérea; inhiben liberación de mediadores broncoconstrictores de mastocitos; pueden inhibir permeabilidad microvascular y ↑ transporte mucociliar.',
      'EA (sobre todo los que activan β1 y β2): **taquicardia, temblor del músculo esquelético, ↓ potasio sérico**.',
      '**No selectivos (pág. 18)**: **epinefrina** (15 min, 0,4 mL de solución 1:1000 SC, o microaerosol); **efedrina** (usada en China >2000 años, introducida en occidente en 1924; mayor duración que epinefrina); **isoproterenol** (β1 y β2 potente; 80-120 mcg inhalado: broncodilatación máxima en 5 min, dura 60-90 min; ↑ mortalidad por asma en Reino Unido con dosis altas inhaladas frenó su uso).',
      '**β2 selectivos de acción corta (ABAC) (pág. 19)**: albuterol (salbutamol), terbutalina, metaproterenol, pirbuterol, fenoterol, reproterol, remiterol, tolobuterol. Inhalador de dosis medida; broncodilatación máxima a los 15 min, dura 3-4 h; pueden nebulizarse y darse VO; **levalbuterol** = isómero R purificado de albuterol. Albuterol y terbutalina también VO (1 tableta 2-3 veces/día). EA: temblor, nerviosismo, debilidad ocasional. **Solo terbutalina** existe en inyección SC (0,25 mg): asma grave de emergencia si el aerosol no está disponible o fue ineficaz.',
      '**β2 de acción prolongada (ABAL)** (pág. 20): **salmeterol y formoterol**, 12 h por alta solubilidad en lípidos; **no usar como monoterapia**.',
      '**β2 de acción ultra prolongada (ABAML)**: indacaterol, olodaterol, vilanterol, bambuterol; 1 vez/día; su broncodilatación prolongada enmascara los síntomas de inflamación → **solo con ICS en asma**. Pueden usarse como monoterapia en **EPOC**.',
      '**Toxicidad (pág. 21)**: ↓ transitoria de PaO2 (mejora con O2); arritmias cardíacas «parece no estar confirmada»; **taquifilaxia** tras varios días de uso regular (la broncodilatación máxima aún se logra).'
    ]},
    { titulo: 'Metilxantinas (págs. 22-26)', puntos: [
      'Teofilina, teobromina, cafeína (té, cacao, café). Uso disminuido por menor eficacia, toxicidad (náuseas, vómitos, temblores, arritmias) y **margen terapéutico estrecho**; por su bajo costo se usa aún en algunos países. Preparados: **aminofilina** (teofilina-etilendiamina) y **doxofilina**. Metabolitos por orina.',
      '**Mecanismos**: inhibición de varias fosfodiesterasas (PDE); antagonismo de receptores de **adenosina**; ↑ **desacetilación de histonas** (acción antiinflamatoria). **Roflumilast** = inhibidor selectivo PDE4, indicado en **EPOC y no en asma**.',
      '**SNC**: ↑ alerta, retrasa la fatiga; dosis mayores: nerviosismo, temblor, estimulación medular, convulsiones, muerte. **Cardiovascular**: efectos cronotrópico e inotrópico positivos; dosis altas relajan músculo liso vascular **excepto cerebral** (vasoconstricción). **GI**: ↑ secreción de ácido gástrico y enzimas digestivas. **Riñón**: diuréticos débiles.',
      '**Músculo liso**: la broncodilatación es la principal acción terapéutica; **no hay tolerancia**; inhiben liberación de histamina del pulmón. **Músculo esquelético**: mejoran la contractilidad y revierten la fatiga del diafragma en EPOC; mejoran la respuesta ventilatoria a la hipoxia y reducen la disnea.',
      '**Uso**: la teofilina es el broncodilatador más eficaz (alivia obstrucción en asma aguda y síntomas en asma crónica), pero por la eficacia y seguridad de β2 inhalados y ICS, sus toxicidades y la necesidad de medir niveles en sangre está **casi obsoleta**.'
    ]},
    { titulo: 'Antimuscarínicos (págs. 27-28, 47)', puntos: [
      'Inhiben competitivamente la ACh en receptores muscarínicos: bloquean contracción del músculo liso de la vía aérea y producción de moco por actividad vagal.',
      '**Bromuro de ipratropio**: derivado de amonio cuaternario selectivo de atropina; se absorbe poco tras el aerosol → sin efectos sistémicos de la atropina. Útil sobre todo en pacientes que **no toleran agonistas β inhalados**.',
      'Acción más prolongada: **tiotropio, aclidinio, umeclidinio, glucopirrolato** (inhalados). Tiotropio aprobado como mantenimiento del asma; los demás, mantenimiento de la **EPOC**. Se unen a M1, M2 y M3 con igual afinidad.',
      'Pág. 47: el efecto de los de acción corta (ipratropio) sobre la resistencia basal es mayor que el de los simpaticomiméticos → alternativa en intolerancia a β; tiotropio + ICS resultó tan eficaz como añadir un LABA. En EPOC mejoran capacidad funcional y reducen exacerbaciones.'
    ]},
    { titulo: 'Corticoesteroides en asma (págs. 29-33, 48)', puntos: [
      'Mecanismo: amplia eficacia **antiinflamatoria** por inhibición de la producción de citocinas inflamatorias. Reducen hiperreactividad bronquial y frecuencia de exacerbaciones si se toman con regularidad; contraen vasos congestionados de la mucosa; **potencian los agonistas β**. Acción más importante: inhibir la infiltración de la vía aérea por **linfocitos, eosinófilos y mastocitos**.',
      'Beclometasona (1970): primera preparación tópica activa inhalable → altas dosis en la mucosa con poca absorción sistémica.',
      '**Exacerbación grave (pág. 30)**: prednisona **30-60 mg/día VO** o metilprednisolona **0,5-1 mg/kg IV cada 6-12 h**. Orales/parenterales reservados para quien requiere tratamiento urgente (no mejora con broncodilatadores o empeora pese a mantenimiento a dosis altas). La terapia sistémica suele suspenderse en **5-10 días**, aunque en algunos empeoran al bajar la dosis.',
      '**ICS** (pág. 31): beclometasona, budesonida, ciclesonida, flunisolida, fluticasona, mometasona, triamcinolona. Pasar de oral a inhalatorio **lentamente** para evitar insuficiencia suprarrenal. Son «**controladores**»: efectivos solo mientras se toman; el asma reaparece a las pocas semanas de suspender.',
      'Dosis media eficaz: **800 mcg/día de beclometasona** inhalada. EA: **candidiasis orofaríngea** (clotrimazol y gárgaras), **ronquera** (efecto local en cuerdas vocales); uso crónico: ↑ riesgo de **osteoporosis y cataratas**; en niños ↓ el crecimiento ~1 cm el primer año. **Ciclesonida** = profármaco activado por esterasas bronquiales; menos candidiasis.',
      'Indicación (pág. 32): asma **persistente** que necesita más que β agonista ocasional; se continúa 10-12 semanas y se evalúa. 1 inhalación de ICS con cada inhalación de β2 de acción corta (beclometasona + albuterol): eficaz en asma leve a moderada.',
      'Pág. 48: síntomas frecuentes u obstrucción persistente pese a broncodilatador → iniciar ICS. Síntomas severos u obstrucción grave (**FEV1 < 50 %**): ICS a **dosis alta + LABA**; a las **4-6 semanas** bajar escalonadamente. Combinaciones fijas: fluticasona/salmeterol (Advair), budesonida/formoterol (Symbicort), mometasona/formoterol (Dulera), fluticasona/vilanterol (Breo).'
    ]},
    { titulo: 'Cromoglicato y nedocromilo (págs. 34-35)', puntos: [
      'Inhiben la **degranulación de mastocitos**; sin acción broncodilatadora directa; inhiben el broncoespasmo inducido por **antígeno y por ejercicio**.',
      'Extremadamente insolubles, casi sin efectos sistémicos. Cromoglicato: mal absorbido en tubo digestivo, se inhala en aerosol. Nedocromilo: biodisponibilidad baja, mal sabor, aerosol.',
      '2-4 inhalaciones, 2-4 veces/día: reducen modestamente la gravedad sintomática y la necesidad de broncodilatadores, sobre todo en jóvenes con **asma alérgica**. Poca toxicidad pero menos potentes y predecibles que los ICS.',
      'Indicación principal del cromoglicato: **rinoconjuntivitis alérgica** (gotas oculares 2 veces/día, efectivo en ~75 %). Otra: **mastocitosis sistémica** (rara).'
    ]},
    { titulo: 'Inhibidores de la vía de leucotrienos (págs. 36-37, 49)', puntos: [
      '**Zileutón**: inhibe la 5-lipooxigenasa. **Zafirlukast y montelukast**: antagonistas del receptor LTD4.',
      'Leucotrienos (LTB4, LTC4, LTD4) = 5-lipooxigenasa sobre ácido araquidónico; los sintetizan eosinófilos, mastocitos, macrófagos, basófilos. Efectos en asma: broncoconstricción, ↑ reactividad, edema de mucosa, hipersecreción de moco.',
      'Mejoran el control y reducen exacerbaciones. **¡NO indicados en el asma aguda!**',
      'Vía oral (más fácil que aerosoles en niños). Montelukast aprobado desde los **12 meses de edad**. Dosis (EE. UU.): zileutón 1200 mg liberación sostenida 2 veces/día; zafirlukast 20 mg 2 veces/día; montelukast 10 mg adultos / 4 mg niños 1 vez/día.',
      'Eficaces en **enfermedad respiratoria exacerbada por aspirina (AERD)** (asma + rinitis crónica + poliposis; 5-10 % de los asmáticos). **Montelukast** es el más prescrito (1 vez/día, sin relación con comidas). A veces sustituyen a los ICS en asma leve si el paciente se resiste al ICS.',
      'Pág. 49: alternativa a los ICS si los síntomas son > 2 veces/semana o hay despertares > 2 veces/mes; montelukast, sobre todo en niños con rinitis alérgica concurrente; rara vez da EA problemáticos.'
    ]},
    { titulo: 'Anticuerpos monoclonales (págs. 38-41, 50-52)', puntos: [
      'Tabla (pág. 38): **omalizumab** (IgG1 humanizado, anti-IgE); **mepolizumab** (IgG1, anti-IL-5); **benralizumab** (IgG1, receptor de IL-5); **reslizumab** (IgG4, anti-IL-5); lebrikizumab (IgG4, IL-13); GSK679586 (IgG1, receptores IL-13 α1,2); tralokinumab (IgG4, receptores IL-13 α1,2); **dupilumab** (IgG4, receptor de IL-4).',
      '**Omalizumab** (pág. 39): se une a la porción de IgE que se fija a los receptores de mastocitos/basófilos, impide su activación. Para asma **moderada a grave** con **sensibilización alérgica demostrada**; SC cada 2-4 semanas; ↓ IgE libre a niveles indetectables; reduce respuestas broncoespásticas temprana y tardía. Efecto más importante: ↓ frecuencia y gravedad de exacerbaciones. También eficaz en **urticaria crónica recurrente** (aprobado) y alergia al maní.',
      '**Anti-IL-5** (pág. 40): Th2 secretan IL-5 (citocina proeosinófila) → inflamación eosinofílica; mepolizumab, reslizumab (anti-IL-5) y benralizumab (receptor IL-5) para **asma eosinofílica grave**. Como omalizumab, **reslizumab** tiene pequeño riesgo (0,3 %) de **anafilaxia** → observar tras la infusión. **Dupilumab**: asma moderada a grave, fenotipo eosinofílico o dependiente de corticoide.',
      'Pág. 50-51: reservados para asma crónica grave mal controlada con **ICS/LABA**. Limitaciones: alto costo; vía **parenteral** cada 2-4 semanas; reacciones anafilácticas; mepolizumab: infección por **herpes zóster**.',
      '**Tezepelumab** (pág. 52): anticuerpo humano (IgG2λ) contra **TSLP** (linfopoyetina estromal tímica, citocina epitelial); ↓ eosinófilos en sangre, IgE total y FeNO; en el ensayo PATHWAY (fase 2b) la tasa de exacerbaciones fue 71 % menor que placebo, independiente de biomarcadores basales.',
      'Pág. 41 (futuro): daclizumab (anti-CD25 del receptor de IL-2), tezepelumab; anticuerpos contra IL-4, IL-5, IL-13.'
    ]},
    { titulo: 'Dispositivos y técnica de inhalación (págs. 42-43, 55)', puntos: [
      '**pMDI** (dosificador presurizado): propulsor antes clorofluorocarbono, ahora **HFA** (no daña la capa de ozono); 100-400 dosis. **Cámaras de inhalación** (espaciadores): ↓ velocidad y tamaño de partículas, menos fármaco en orofaringe y más en vía baja.',
      '**Inhaladores de polvo (DPI)**: polvo fino por turbulencia del aire al inhalar; también para péptidos/proteínas (insulina). **Nebulizadores**: de **chorro** (gas: aire u O2) o **ultrasonido** (cristal vibrante); útiles en exacerbaciones agudas de asma y EPOC, niños pequeños, y para fármacos en dosis grandes (antibióticos).',
      'Técnica: **pMDI** → exhalar antes de activar, luego inhalar lenta y profundamente (evita impactar la laringe). **Polvo seco** → inhalar rápida y profundamente. Tras ICS/polvo: **enjuagarse la boca** (evita candidiasis). **Espaciador**: lavarlo/enjuagarlo (riesgo de crecimiento bacteriano). Evaluar la técnica con regularidad.'
    ]},
    { titulo: 'Tratamiento escalonado y asma aguda (págs. 45-46, 53-54)', puntos: [
      'Asma leve: broncodilatador inhalado ocasional. Más grave: controlador (ICS). Riesgo: reducciones del FEV1, función inestable, hiperreactividad, eosinofilia en sangre o esputo.',
      '**β2 agonistas** (albuterol): rápidos, seguros, baratos. Se necesita tratamiento adicional si el rescate es **> 2 veces/semana**, síntomas nocturnos **> 2 veces/mes** o FEV1 **< 80 %**; primer paso: ICS a dosis baja (alternativa: antagonista de leucotrienos).',
      '**Intermitente**: β2 inhalado de corta duración con síntomas. **Persistente leve**: β2 corto a demanda + ICS o antagonista LT. **Persistente moderado**: β2 corto + ICS a dosis mayores, o dosis baja + LABA. **Persistente grave**: ICS dosis altas + LABA; en algunos, teofilina retardada.',
      '**Asma aguda (pág. 54)**: ataque leve → β agonista inhalado tan efectivo como epinefrina SC. Ataque severo → **oxígeno**, albuterol en aerosol frecuente o continuo, y **prednisona o metilprednisolona 0,5 mg/kg cada 6-12 h**; vigilar deterioro; intubación y ventilación mecánica pueden salvar vidas.',
      'Prevención (pág. 56): exposiciones microbianas en la infancia → respuesta inmune equilibrada; probióticos y prebióticos como línea de investigación.'
    ]},
    { titulo: 'EPOC (págs. 57-61)', puntos: [
      'Como el asma: limitación al flujo aéreo, pero **no totalmente reversible**; inflamación de la vía aérea, ↓ flujo espiratorio máximo, exacerbaciones episódicas (con frecuencia por infección viral).',
      'Diferencias: ocurre en **mayores**, inflamación **neutrofílica** (no eosinofílica), responde **escasamente a ICS** incluso a dosis altas, pérdida progresiva e inexorable de función, sobre todo con tabaquismo continuo. Los beneficios esperados del tratamiento son menores.',
      'Síntomas agudos: **β2 de acción corta** (albuterol), **ipratropio**, o ambos. Síntomas persistentes (disnea de esfuerzo): broncodilatador de acción prolongada regular: **LABA**, **anticolinérgico de acción prolongada**, o ambos.',
      '**Teofilina**: mejora la función contráctil del diafragma. **Roflumilast**: no metilxantina, inhibidor selectivo de PDE4; mejora función pulmonar y reduce exacerbaciones; aprobado para EPOC. **ICS**: solo en obstrucción grave (menos eficaces); si ≥ 2 exacerbaciones, ICS diario apropiado. **Azitromicina** diaria: reduce la frecuencia de exacerbaciones.',
      'Estudios epidemiológicos: menor mortalidad y exacerbaciones en EPOC con **bloqueadores beta**; se desconoce si es por efecto cardiovascular coincidente o en la vía aérea.'
    ]},
    { titulo: 'La tos: definición, clases y fármacos que la producen (págs. 63-67)', puntos: [
      '**Tos**: acto reflejo, contracción sinérgica y convulsiva de músculos espiratorios torácicos y abdominales. Función: eliminar material extraño y secreciones, mantener permeables las vías, favorecer el intercambio gaseoso, proteger la mucosa.',
      '**Húmeda/productiva/útil**: protege la vía aérea, con expectoración; generalmente **no debe suprimirse**. **Seca/improductiva/irritativa/inútil**: sin expectoración; **es la que requiere tratamiento**.',
      'Duración: **aguda** < 3 semanas; **subaguda** 3-8 semanas; **crónica** > 8 semanas.',
      '**Producen tos**: **IECA** (captopril, lisinopril; ↑ bradicinina y sustancia P); antagonistas del receptor de angiotensina (losartán, valsartán). ⚠ La diapositiva escribe «AT2»; los ARA-II bloquean el receptor **AT1**. **Producen broncoespasmo y tos**: **AINE** (aspirina, diclofenaco, ibuprofeno); **bloqueadores beta** (propranolol, timolol).'
    ]},
    { titulo: 'Clasificación de antitusivos (págs. 68-70)', puntos: [
      '**Opiáceos**: codeína, dihidrocodeína, noscapina. **Sintéticos**: dextrometorfano, dimemorfano.',
      '**No opiáceos**: cloperastina, levodropropizina, fominobeno, oxolamina, clofedianol, benzonatato, carbetapentano, clobutinol, caramifeno, dimetoxanato, dropropizina.',
      '**Coadyuvantes**: anti-H1, belladona, drosera, polígala, borraja, eucalipto, hiedra, tomillo, anís verde, mentol.',
      '**Actúan sobre el centro de la tos**: opiáceos (codeína, dextrometorfano, noscapina) y no opiáceos (clofedianol). **Sobre la rama aferente**: anestésicos locales (lidocaína, benzocaína). **Modifican factores mucociliares o actúan sobre la rama eferente**: antihistamínicos H1 (difenhidramina) y anticolinérgicos (ipratropio). ⚠ Las págs. 82 y 81 rotulan lidocaína como «rama eferente» y benzocaína como «aferente»; la pág. 70 pone ambas en aferente: inconsistencia de la diapositiva.'
    ]},
    { titulo: 'Opioides antitusivos (págs. 71-79)', puntos: [
      'Codeína, dextrometorfano, noscapina: los más usados; **producen adicción y tolerancia** (ver abajo: dextrometorfano y noscapina casi no); otros efectos: analgésico, antidiarreico. **Mecanismo**: inhiben el centro de la tos en el **tracto solitario del tallo cerebral** activando receptores **mu y kappa**.',
      'Farmacocinética: absorción 60 %, más eficaz VO que parenteral (menor primer paso); metabolismo hepático; eliminación por orina inactivos (**10 % se desmetila a morfina**); vida media 2-4 h. Efecto antitusígeno con **dosis subanalgésicas**. **No usar en < 2 años**.',
      'EA: hipersensibilidad, náuseas, constipación, sedación; **depresión respiratoria** (dosis altas o mayor sensibilidad: ancianos, asmáticos, EPOC, insuficiencia respiratoria); prolonga el trabajo de parto, abstinencia y depresión neonatal; alta concentración en leche materna a dosis altas; EA aumentan con alcohol.',
      '**Codeína**: prototipo, referencia de eficacia para nuevas drogas; deprime el centro de la tos, **produce broncoconstricción**, reduce secreción bronquial; analgésica y antidiarreica.',
      '**Dextrometorfano**: análogo de la codeína, eficacia antitusiva similar; **libera histamina**, no deprime actividad ciliar; **sin acción analgésica ni depresora respiratoria**, mínima adicción, mejor tolerancia digestiva. Absorción rápida VO (inicio 15-30 min, pico 2 h); metabolismo hepático **CYP2D6**; orina; vida media 11 h. **Dosis**: adultos 15 mg cada 4-6 h, máx. 120 mg/día; niños 6-12 años 5-10 mg cada 4-6 h, máx. 60 mg/día; 2-6 años 2,5-5 mg cada 4 h, máx. 30 mg/día; individualizar en < 2 años.',
      '**Noscapina**: derivado del opio **sin actividad opioide**; actúa sobre el centro respiratorio/de la tos; libera histamina; menos potente que la codeína; no deprime la respiración; solo sedación central moderada; no provoca manía ni hábito. Se absorbe bien por vía bucal y rectal; metabolismo casi total; orina inactiva. Dosis: adultos 1-2 comprimidos 3 veces/día; niños 2-5 años 2-5 mg/día; 6-12 años 6-12 mg/día. EA: somnolencia, mareos, cefalea, náuseas, rash, hipotensión, estreñimiento. Interacción: sedantes del SNC ↑ somnolencia. Contraindicada en **enfermedad hepática** e **insuficiencia respiratoria**.'
    ]},
    { titulo: 'Clofedianol y otros antitusivos (págs. 80-87)', puntos: [
      '**Clofedianol** (no opiáceo): suprime el reflejo de la tos por efecto directo sobre el centro (bulbo raquídeo); posible efecto **anestésico local moderado** y cierta acción **antimuscarínica**; tos **no productiva**. Metabolismo hepático; pico más tardío que los narcóticos pero **acción más prolongada**; vía renal. Dosis VO: adultos 25 mg 3-4 veces/día; niños 2-6 años 12,5 mg 3-4 veces/día; 6-12 años 12,5-25 mg 3-4 veces/día. EA: alucinaciones, pesadillas, excitación, rash/urticaria; dosis altas: efectos antimuscarínicos (visión borrosa, somnolencia, mareos, boca seca, náuseas, vómitos). **Contraindicado en tos productiva** (retención de secreciones).',
      '**Lidocaína** (pág. 82): anestésico local, bloquea la conducción disminuyendo la permeabilidad al sodio; inicio 2-5 min, dura 1-4 h; 90 % metabolizada en hígado; excreción renal; solución al **2 % nebulizada sin conservantes**. **Benzocaína** (pág. 83): mismo mecanismo; metabolismo y excreción renal de metabolitos; uso común: anestesiar heridas bucales, aftas.',
      '**Difenhidramina** (págs. 84-85): bloquea H1; ↓ contracción del músculo liso; actúa más como **depresor central** que como antihistamínico; sedante; **seca mucosas y espesa secreciones**. EA: hipertensión en sensibles, resequedad de nariz y garganta, agruras, ↑ o ↓ del apetito, sequedad ocular, ictericia conjuntival, estreñimiento, náuseas, incoordinación, fasciculaciones, confusión, alucinaciones, delirio, euforia, pérdida de memoria, somnolencia, **retención urinaria**, trastornos sexuales, resequedad vaginal.',
      '**Bromuro de ipratropio** (págs. 86-87): anticolinérgico derivado de la atropina, inhalado; bloquea receptores muscarínicos → ↓ broncoconstricción y moco; eficacia antitusígena en bronquitis crónica e infecciones de vías altas. ~**90 % de la dosis se deglute**; efecto máximo a 30-90 min, dura 4-6 h; metabolismo hepático; vida media 2 h. **Indicaciones**: EPOC, rinitis alérgica; combinado con salbutamol en exacerbaciones de asma grave.'
    ]}
  ],

  explicacion: [
    { titulo: '1. El asma en una frase y por qué tiene dos tiempos', p: [
      'Imagínate un tubo (el bronquio) con tres problemas a la vez: **se aprieta** (broncoconstricción), **se irrita por cualquier cosa** (hiperreactividad) y **está inflamado** (linfocitos y eosinófilos). Lo bueno: el apretón es **reversible**, y eso lo separa de la EPOC.',
      'La patogenia son **dos olas**. **Ola 1 (temprana)**: la IgE pegada a los mastocitos dispara histamina, leucotrienos C4/D4, PGD2 y PAF → bronco se cierra en minutos (cae el FEV1). **Ola 2 (tardía, 3-6 h después)**: llegan los linfocitos Th2 con IL-4, IL-5 → eosinófilos, moco, edema → segunda caída del FEV1. Ojo con esto: un fármaco que solo abre el bronquio (β2) arregla la ola 1; lo que frena la ola 2 es la **inflamación** (corticoide).',
      'Dato que sorprende: la mayoría de las crisis **no** son por alérgeno sino por **virus**. Y el ejercicio, el aire frío, el humo y el SO2 también disparan broncoespasmo por la hiperreactividad.'
    ], pausa: {
      q: 'Un paciente tiene crisis solo cuando corre en aire frío. ¿Qué mecanismo tiene y qué prevendría la crisis?',
      a: 'Hiperreactividad (estímulo no alérgico). Se previene con **β2 de acción corta antes del ejercicio** y también funcionan **cromoglicato/nedocromilo** (inhiben el broncoespasmo inducido por ejercicio) y, ⚠ en los exámenes, **montelukast**. Los β2 de acción corta son eficaces en asma por aire frío y ejercicio (pregunta de examen).'
    }},
    { titulo: '2. Espirometría: cómo se lee', p: [
      'Piénsalo como soplar un globo lo más fuerte posible: **FVC** = cuánto aire sacas en total; **FEV1** = cuánto sacas en el primer segundo. Si el bronquio está apretado, sacas poco en el primer segundo: **FEV1 baja**, y el cociente **FEV1/FVC cae por debajo de 70-75 %** → obstrucción.',
      'En el asma, tras dar un broncodilatador **el FEV1 mejora** (reversible). En EPOC no mejora tanto. ⚠ La pág. 8 de la diapositiva dice «relación VEF1/CVF alta»: es un error aparente, la relación está **baja** en obstrucción.'
    ]},
    { titulo: '3. Aliviadores vs controladores', p: [
      'Regla que ordena todo el tratamiento: **aliviador** = el que abre el bronquio ya (β2 de acción corta, ipratropio). **Controlador** = el que apaga la inflamación y previene (ICS, antileucotrienos, cromonas, LABA siempre junto a ICS, monoclonales).',
      'Escalera por gravedad (pág. 54): **intermitente** → solo β2 corto a demanda. **Persistente leve** → β2 corto + ICS (o antileucotrieno). **Moderado** → β2 corto + ICS dosis mayor, o ICS dosis baja + LABA. **Grave** → ICS dosis alta + LABA (a veces teofilina retardada). Señales de que hay que subir: rescate > 2 veces/semana, síntomas nocturnos > 2 veces/mes, FEV1 < 80 %.'
    ]},
    { titulo: '4. Agonistas β2: de corto a ultralargo', p: [
      'Mecanismo (lo que cae): se activa Gs → ↑ AMPc → **relaja el músculo liso** bronquial; además frenan la liberación de mediadores del mastocito, ↓ permeabilidad microvascular y ↑ transporte mucociliar. Por eso el albuterol «hace de todo» menos antiinflamar la mucosa (⚠ no tienen efecto controlador sobre la hiperreactividad en el asma aguda; pregunta de examen donde esa opción es falsa).',
      '**Corta (ABAC)**: albuterol/salbutamol, terbutalina, fenoterol, etc. Máximo a 15 min, duran 3-4 h. Son el **rescate**. **Larga (ABAL)**: salmeterol y formoterol, ~12 h por ser muy liposolubles → **nunca solos**, siempre con ICS. **Ultralarga (ABAML)**: indacaterol, olodaterol, vilanterol, bambuterol, 1 vez/día; en asma solo con ICS (porque tapan la inflamación sin tratarla); en EPOC pueden ir solos.',
      'EA para el examen: **taquicardia, temblor, ↓ K⁺** (por β2 en músculo esquelético y la bomba Na/K), ↓ transitoria de PaO2 (mejora con O2) y **taquifilaxia**. ⚠ La caída de K⁺ por β2 es lógica farmacológica; la diapositiva solo lo menciona.',
      'Historia que se pregunta: el **isoproterenol** (no selectivo) a dosis altas inhalado aumentó la mortalidad en Reino Unido → se abandonó. La **epinefrina SC** (0,4 mL 1:1000) funciona en 15 min pero un β2 inhalado es igual de bueno en ataque leve y con menos efectos sistémicos.'
    ]},
    { titulo: '5. Metilxantinas: la vieja guardia', p: [
      'Teofilina, aminofilina (teofilina + etilendiamina), doxofilina. Tres mecanismos: **inhibe PDE** (↑ AMPc, igual que los β2 pero por otra puerta), **bloquea adenosina**, y **activa la desacetilación de histonas** (antiinflamatorio). Imagínate un portero (la PDE) que borra el mensaje AMPc: la teofilina lo amarra → el AMPc dura más → bronquio relajado.',
      'Efectos extra que te preguntan (examen 2025 con claves 1-4): ↑ contractilidad del **músculo esquelético y diafragma** (revierte fatiga), ↑ alerta y temblor (SNC), taquicardia (inotropo y cronotropo +), ↑ ácido gástrico, diuresis débil, y **vasoconstricción cerebral** (único lecho donde no relajan).',
      '¿Por qué ya casi no se usa? Margen terapéutico **estrecho** (náuseas, vómitos, temblor, arritmias, convulsiones) y hay que medir niveles. Aún tiene un lugar en **EPOC** (diafragma) y en algunos pacientes graves con la forma retardada. **Roflumilast** es otro cuento: PDE4 selectiva, **para EPOC, no para asma**.'
    ], pausa: {
      q: '¿Qué antiasmático ves en «EPOC y no en asma» y cuál ve el examen como «inhibidor selectivo de PDE4»?',
      a: '**Roflumilast** (mejora función pulmonar y ↓ exacerbaciones en EPOC).'
    }},
    { titulo: '6. Antimuscarínicos', p: [
      'La vía vagal contrae el bronquio y da moco: si bloqueas el receptor muscarínico, los dos bajan. **Ipratropio** = atropina «cuaternaria»: casi no se absorbe, así que no da los efectos sistémicos de la atropina (taquicardia, boca seca, retención). Sirve para quien **no tolera β2**, y en **EPOC**.',
      'Los de acción prolongada (**tiotropio, aclidinio, umeclidinio, glucopirrolato**) se inhalan 1 vez/día en **EPOC**; solo **tiotropio** tiene aprobación de mantenimiento en asma (añadido a ICS rinde como añadir un LABA). Se unen a M1, M2 y M3 con la misma afinidad.',
      'Ojo con la trampa: ipratropio inhalado ~**90 % se traga** y casi no se absorbe, por eso es seguro. Efecto máximo a 30-90 min, dura 4-6 h.'
    ]},
    { titulo: '7. Corticoides inhalados: el pilar', p: [
      'Son el **tratamiento antiinflamatorio base**. Frenan citocinas, reducen la infiltración por linfocitos, eosinófilos y mastocitos, contraen vasos congestionados y **hacen que los β2 funcionen mejor**. Resultado: menos hiperreactividad y menos exacerbaciones, **pero solo mientras los uses** (a las semanas de parar, vuelve el asma).',
      'Ventaja de inhalar: dosis alta **en el pulmón** con poca absorción sistémica. Por eso se dice que es la forma más efectiva de evitar los EA de los corticoides sistémicos. Pero hay EA locales y algunos sistémicos con uso crónico: **candidiasis orofaríngea** (enjuagarse la boca; clotrimazol y gárgaras), **ronquera**, **osteoporosis, cataratas** y **↓ ~1 cm del crecimiento** en niños el primer año. **Ciclesonida** es profármaco que se activa en el bronquio → menos candidiasis.',
      'Cuidado con una cosa: si pasas de corticoide **oral a inhalado**, hazlo **lento** para evitar **insuficiencia suprarrenal** (el eje HHA se apagó).',
      'Dosis y secuencias: 800 mcg/día de beclometasona es una dosis eficaz media. Terapia continuada 10-12 semanas y luego reevalúas. En grave (FEV1 < 50 %): ICS alta + LABA y a las 4-6 semanas bajas escalonado. Combos fijos: fluticasona/salmeterol, budesonida/formoterol, mometasona/formoterol, fluticasona/vilanterol.',
      '**Crisis grave**: ahí sí **sistémicos**: prednisona 30-60 mg VO/día, o metilprednisolona 0,5-1 mg/kg IV cada 6-12 h; se retiran en 5-10 días.'
    ]},
    { titulo: '8. Cromonas y antileucotrienos', p: [
      '**Cromoglicato y nedocromilo**: estabilizan el mastocito (no dejan que se degranule). **No broncodilatan**; previenen la crisis por antígeno o ejercicio. Muy seguros (no se absorben) pero modestos. Mejor en jóvenes con asma alérgica; el cromoglicato además sirve en rinoconjuntivitis alérgica y mastocitosis.',
      '**Antileucotrienos**: dos formas de cortar la vía. **Zileutón** bloquea la **5-lipooxigenasa** (no produce leucotrienos; ⚠ hepatotóxico: lo dice el examen 2020 «precaución por su toxicidad hepática», no la diapositiva). **Zafirlukast y montelukast** bloquean el **receptor LTD4**. Oral, no sirven en crisis aguda. Montelukast es el favorito (1 vez/día, niños desde 12 meses, con rinitis alérgica, y en **AERD**: asma + rinitis + poliposis que empeora con aspirina).',
      'Truco: la **aspirina** (AINE) bloquea la COX, se desvía el ácido araquidónico a la vía de la 5-LOX → más leucotrienos → crisis. Por eso en AERD sirven los antileucotrienos. ⚠ Esta explicación es farmacología general, no está en la diapositiva.'
    ]},
    { titulo: '9. Monoclonales: «terapia blanco» para el asma grave', p: [
      'Solo para **asma crónica grave mal controlada con ICS + LABA**. Costosos, parenterales (cada 2-4 semanas), con riesgo de anafilaxia.',
      '**Omalizumab** = anti-**IgE**: se pega a la IgE y le impide engancharse al mastocito. Para asma moderada-grave **con sensibilización alérgica demostrada**; SC cada 2-4 semanas; ↓ exacerbaciones y requerimientos de corticoides; también **urticaria crónica** y alergia al maní.',
      '**Mepolizumab, reslizumab** = anti-**IL-5**; **benralizumab** = contra el **receptor de IL-5**: asma **eosinofílica** grave. Mepolizumab → riesgo de **herpes zóster**; reslizumab (y omalizumab) → **anafilaxia** (0,3 %), observar tras infusión. **Dupilumab** = receptor de IL-4 (también cubre IL-13): fenotipo eosinofílico o dependiente de corticoide. **Tezepelumab** = anti-**TSLP**: ↓ eosinófilos, IgE y FeNO; −71 % de exacerbaciones en PATHWAY.',
      'Regla para el examen: **IgE → omalizumab; IL-5 → mepolizumab/reslizumab; receptor IL-5 → benralizumab; receptor IL-4 → dupilumab; TSLP → tezepelumab**.'
    ]},
    { titulo: '10. EPOC: parecido al asma pero distinto', p: [
      'Misma obstrucción, pero **no reversible del todo**, en **mayores y fumadores**, con inflamación **neutrofílica**, que **responde poco a los ICS** y empeora de forma progresiva.',
      'Tratamiento: agudo → β2 corto y/o ipratropio. Persistente → **LABA y/o anticolinérgico de acción prolongada** (ahora sí pueden ir solos los ultralargos). ICS solo en obstrucción grave o ≥ 2 exacerbaciones. **Teofilina** (diafragma), **roflumilast**, **azitromicina** diaria (↓ exacerbaciones). Hay estudios de **β-bloqueadores** que reducen mortalidad y exacerbaciones ⚠ (se ignora si por efecto cardiovascular: no lo tomes como regla).'
    ]},
    { titulo: '11. Tos: no toda tos se suprime', p: [
      'La tos **húmeda/productiva** limpia la vía aérea: **no la suprimas**. La **seca/irritativa** sí. Dura: aguda < 3 semanas, subaguda 3-8, crónica > 8.',
      'Antes de dar antitusivo, piensa si el paciente toma algo que **causa tos**: **IECA** (captopril, lisinopril → ↑ bradicinina y sustancia P → tos seca), ⚠ ARA-II (la diapositiva dice AT2 pero son AT1; la tos con ARA-II es menos frecuente), y los que dan broncoespasmo: **AINE** y **β-bloqueadores** (propranolol, timolol). Pregunta típica: «¿cuáles se relacionan con tos? captopril, losartán, diclofenaco, propranolol» → todos (examen 2020s).',
      '**Ordena los antitusivos por dónde actúan**: centro de la tos (codeína, dextrometorfano, noscapina, clofedianol), rama aferente (lidocaína, benzocaína), rama eferente/factores mucociliares (difenhidramina, ipratropio).'
    ], pausa: {
      q: 'Un paciente asmático con EPOC y tos seca: ¿darías codeína?',
      a: 'Con cuidado: los opioides dan **depresión respiratoria** (más en asmáticos, EPOC, ancianos) y **codeína produce broncoconstricción**. Mejor un no opioide o dextrometorfano (sin acción depresora respiratoria).'
    }},
    { titulo: '12. Antitusivos opioides y no opioides', p: [
      '**Codeína**: el prototipo; inhibe el centro de la tos en el tracto solitario activando receptores **mu y kappa**; también es analgésica y antidiarreica; produce adicción, tolerancia, constipación, sedación, depresión respiratoria; 10 % se desmetila a morfina; no en < 2 años.',
      '**Dextrometorfano**: «primo» de la codeína sin analgesia ni depresión respiratoria ni adicción; metabolizado por **CYP2D6**; vida media 11 h; máx. 120 mg/día en adultos. ⚠ Interacciones con ISRS/IMAO (síndrome serotoninérgico) y los inhibidores de CYP2D6: no vienen en la diapositiva.',
      '**Noscapina**: del opio pero **sin acción opioide**; libera histamina; sedación leve, sin hábito. Contraindicada en hepatopatía e insuficiencia respiratoria.',
      '**Clofedianol**: no opioide, actúa en el bulbo, algo anestésico local y antimuscarínico; efecto más lento pero **más duradero**. Dosis altas → efectos antimuscarínicos. **Contraindicado en tos productiva**.',
      '**Lidocaína** y **benzocaína**: bloquean canales de sodio en la rama aferente. **Difenhidramina**: más sedante que antihistamínico, **espesa secreciones**. **Ipratropio**: ↓ moco y broncoconstricción.'
    ]},
    { titulo: '13. Secreciones: mucolíticos y expectorantes (⚠ no está en la diapositiva)', p: [
      '⚠ Esta parte sale de las preguntas de examen (OCR) y de farmacología general. La diapositiva no la desarrolla.',
      '**Acetilcisteína**: mucolítico que **fragmenta las mucinas** (rompe puentes disulfuro) y reduce la viscosidad; antiinflamatorio; precursor del **glutatión** → **antídoto del paracetamol** (esto es lo que repiten los exámenes). **Ambroxol** (derivado de la vasicina) y **bromhexina**: fluidificantes; el ambroxol es metabolito activo de la bromhexina. **Carbocisteína**: mucolítico; ⚠ en examen aparece como falso «indicada en intoxicación por paracetamol» (eso es de acetilcisteína). **Guaifenesina**: expectorante, ⚠ el examen dice «no debe utilizarse normalmente en broncopatía aguda» (texto OCR ruidoso). **Yoduros**: ⚠ el examen dice que actúan irritando la mucosa bronquial (OCR ruidoso).'
    ]}
  ],

  memoria: {
    columnas: ['Fármaco / grupo', 'Mecanismo', 'Dosis / duración', 'Usos', 'Ojo con… (EA / contraindicaciones)'],
    filas: [
      ['Albuterol (salbutamol), terbutalina, fenoterol (ABAC)', 'β2 selectivo, ↑ AMPc, relaja músculo liso', 'Máx. 15 min; dura 3-4 h; terbutalina SC 0,25 mg', 'Rescate en asma y EPOC', 'Temblor, taquicardia, nerviosismo, ↓ K⁺, taquifilaxia, ↓ PaO2 transitoria'],
      ['Salmeterol, formoterol (ABAL)', 'β2 larga acción, muy liposolubles', '~12 h', 'Mantenimiento con ICS; EPOC', 'NO monoterapia en asma'],
      ['Indacaterol, olodaterol, vilanterol, bambuterol (ABAML)', 'β2 ultra largo', '1 vez/día', 'Asma solo con ICS; EPOC sola o combinada', 'Enmascaran inflamación; ⚠ el examen pone bambuterol como NO acción corta'],
      ['Epinefrina, efedrina, isoproterenol', 'β no selectivos', 'Epi 15 min (0,4 mL 1:1000 SC); isoproterenol 60-90 min', 'Rescate histórico', 'Isoproterenol: ↑ mortalidad con dosis altas inhaladas'],
      ['Teofilina, aminofilina, doxofilina', 'Inhibe PDE, antagoniza adenosina, ↑ desacetilación de histonas', 'Margen estrecho; medir niveles', 'Casi obsoleta; EPOC (diafragma); asma grave (retardada)', 'Náuseas, vómitos, temblor, arritmias, convulsiones; vasoconstricción cerebral'],
      ['Roflumilast', 'Inhibidor PDE4', '—', 'EPOC (no asma)', '—'],
      ['Ipratropio', 'Antimuscarínico cuaternario inhalado', 'Máx. 30-90 min; 4-6 h; vida media 2 h; ~90 % se deglute', 'EPOC; asma grave junto a salbutamol; rinitis alérgica; tos', 'Pocos efectos sistémicos'],
      ['Tiotropio, aclidinio, umeclidinio, glucopirrolato', 'Antimuscarínicos de acción prolongada', 'Inhalados', 'Mantenimiento de EPOC; tiotropio también asma', 'Unión M1, M2, M3 por igual'],
      ['Prednisona / metilprednisolona (sistémicos)', 'Antiinflamatorio amplio', 'Prednisona 30-60 mg/día VO; metilprednisolona 0,5-1 mg/kg IV c/6-12 h; 5-10 días', 'Exacerbación grave', 'EA graves si se dan crónicos'],
      ['ICS: beclometasona, budesonida, ciclesonida, flunisolida, fluticasona, mometasona, triamcinolona', '↓ citocinas; ↓ linfocitos, eosinófilos, mastocitos', 'Beclometasona ~800 mcg/día; evaluar a 10-12 sem', 'Controlador del asma persistente', 'Candidiasis, ronquera, ↓ crecimiento ~1 cm, osteoporosis, cataratas; ciclesonida (profármaco): menos candidiasis'],
      ['Cromoglicato, nedocromilo', 'Estabilizan mastocito (↓ degranulación)', '2-4 inhalaciones 2-4 veces/día', 'Asma alérgica leve; rinoconjuntivitis; mastocitosis', 'No broncodilatan; mal sabor (nedocromilo)'],
      ['Zileutón', 'Inhibe 5-lipooxigenasa', '1200 mg liberación sostenida 2 veces/día', 'Asma persistente, AERD', '⚠ hepatotoxicidad (examen); no en asma aguda'],
      ['Zafirlukast, montelukast', 'Antagonistas del receptor LTD4', 'Zafirlukast 20 mg 2/día; montelukast 10 mg adultos / 4 mg niños 1/día', 'Asma leve alternativa a ICS; AERD; rinitis alérgica', 'No en asma aguda; montelukast desde 12 meses'],
      ['Omalizumab', 'Anti-IgE', 'SC cada 2-4 semanas', 'Asma moderada-grave alérgica (IgE); urticaria crónica; alergia al maní', 'Anafilaxia; alto costo'],
      ['Mepolizumab, reslizumab, benralizumab', 'Anti-IL-5 (benralizumab: receptor IL-5)', 'Parenteral cada 2-4 semanas', 'Asma eosinofílica grave', 'Reslizumab: anafilaxia 0,3 %; mepolizumab: herpes zóster'],
      ['Dupilumab', 'Receptor de IL-4', '—', 'Asma moderada-grave eosinofílica o dependiente de corticoide', '—'],
      ['Tezepelumab', 'Anti-TSLP (IgG2λ)', '—', 'Asma grave (PATHWAY: −71 % exacerbaciones)', '⚠ solo fase 2b en la diapositiva'],
      ['Codeína', 'Opioide, inhibe centro de la tos (mu y kappa)', 'Vida media 2-4 h', 'Tos seca; prototipo', 'Depresión respiratoria, broncoconstricción, adicción; no < 2 años; 10 % → morfina'],
      ['Dextrometorfano', 'Análogo de codeína sin analgesia', '15 mg c/4-6 h, máx. 120 mg/día (adultos); vida media 11 h', 'Tos seca', 'Libera histamina; CYP2D6; sin depresión respiratoria ni adicción'],
      ['Noscapina', 'Derivado del opio sin acción opioide', '1-2 comprimidos 3/día', 'Tos seca', 'Contraindicada: hepatopatía, insuf. respiratoria'],
      ['Clofedianol', 'No opioide, centro de la tos, anestésico local y antimuscarínico leve', '25 mg 3-4/día (adultos)', 'Tos no productiva', 'Contraindicado en tos productiva; alucinaciones; antimuscarínicos a dosis altas'],
      ['Lidocaína / benzocaína', 'Bloquean canal de Na⁺ (rama aferente)', 'Lidocaína 2 % nebulizada; 2-5 min, 1-4 h', 'Tos; benzocaína: aftas y heridas bucales', '—'],
      ['Difenhidramina', 'Anti-H1, depresor central', '—', 'Tos (rama eferente)', 'Seca mucosas, espesa secreciones, sedación, retención urinaria'],
      ['Acetilcisteína ⚠', 'Mucolítico (rompe mucinas); precursor de glutatión', '—', 'Mucolítico; antídoto de paracetamol', '⚠ fuera de la diapositiva'],
      ['Ambroxol / bromhexina ⚠', 'Fluidificantes (derivados de vasicina)', '—', 'Mucolíticos', '⚠ fuera de la diapositiva']
    ],
    notas: [
      'Aliviadores = β2 corto e ipratropio. Controladores = ICS, antileucotrienos, cromonas, LABA (siempre con ICS), monoclonales.',
      'EPOC: neutrofílica, mal respuesta a ICS, ultralargos (ABAML) pueden ir solos; en asma nunca.'
    ]
  },

  preguntan: [
    { tipo: 'Crisis aguda: qué revierte la obstrucción (se repite casi todos los años)',
      texto: '«Revierten la crisis obstructiva aguda de la vía aérea en pacientes asmáticos: 1-antagonistas muscarínicos, 2-inhibidores de la fosfodiesterasa, 3-agonistas adrenérgicos, 4-agonistas colinérgicos.» ⚠ Clave leída por OCR no segura; por lógica, 1, 2 y 3 broncodilatan (colinérgicos no).',
      trampa: 'Los **agonistas colinérgicos broncoconstriñen**; los de rescate son **β2 agonistas**.' },
    { tipo: 'Agonistas β2 (afirmaciones 1-4)',
      texto: '«En relación al uso de agonistas β2 en el asma es cierto que: 1-su efecto broncodilatador se refuerza al impedir la migración leucocitaria; 2-al inhibir la adenilatociclasa disminuyen el espasmo; 3-tienen efecto controlador disminuyendo la hiperreactividad en el asma agudo; 4-producen activación de la proteína Gs, fosforilación y relajación.» Otra: «los β2 de acción corta son eficaces en asma inducida por: ácaros, aire frío, ejercicio…». Y la 2020: «En relación a la terbutalina, qué afirmación es incorrecta: relaja la musculatura lisa / incrementa la actividad mucociliar / disminuye hiperreactividad / disminuye permeabilidad microvascular / disminuye la secreción de moco».',
      trampa: 'Opción 4 (**Gs → AMPc → relajación**) es la correcta. «Inhibe la adenilatociclasa» es falsa. «Disminuye la secreción de moco» y «efecto controlador» suelen ser las falsas. ⚠ Verifica la clave con la foto del patrón.' },
    { tipo: 'EXCEPTO: broncodilatadores de acción corta (2020)',
      texto: '«Son broncodilatadores de acción corta (4 a 8 h), EXCEPTO: salbutamol, procaterol, terbutalina, fenoterol, bambuterol.»',
      trampa: 'Bambuterol está en el grupo **ultra prolongado (ABAML)** en la diapositiva (pág. 20) → es el EXCEPTO. ⚠ por OCR, confirma en la foto.' },
    { tipo: 'Corticoides en asma',
      texto: '«Los glucocorticoides inhalados en el asma: reducen el uso de esteroides sistémicos; son de primera línea…; su efecto más importante es la supresión de la inflamación; …»; «Tienen pocos EA cuando se usan en asma crónico: budesonida, fluticasona, flunisolida, betametasona». «El tratamiento con ICS es la forma más efectiva de evitar los EA de los corticoides sistémicos; a pesar de esto el uso crónico puede producir: ronquera, candidiasis orofaríngea, osteoporosis, catarata.» «Corticosteroides sistémicos útiles en exacerbaciones asmáticas, EXCEPTO: prednisona, hidrocortisona, dexametasona, **fluticasona**, betametasona.» «Un paciente con asma crónico leve persistente se beneficiaría con el uso inhalatorio de: flunisolide / zileutón / albuterol / teofilina.»',
      trampa: '**Betametasona** no es inhalada (sistémica); **fluticasona** es inhalada (no sistémica) → es el EXCEPTO. Asma persistente leve = **ICS** (flunisolide). Zileutón/teofilina no son inhalados.' },
    { tipo: 'Antileucotrienos / AERD / monoclonales',
      texto: '«Antiasmático que actúa inhibiendo la 5-lipooxigenasa y debe usarse con precaución por su toxicidad hepática: montelukast / omalizumab / salmeterol / zafirlukast / **zileutón**.» «Inhibidor de la vía de leucotrienos más prescrito, 1 vez/día, VO, indicado en asma exacerbada por aspirina, rinitis y poliposis: zileutón, zafirlukast, **montelukast**, roflumilast, dupilumab.» «Se usa principalmente en asma grave con sensibilidad mediada por IgE: mepolizumab, dupilumab, **omalizumab**, benralizumab, reslizumab.» «Se administra por vía parenteral, actúa uniéndose a la IgE en los mastocitos sensibilizados…: omalizumab.» «Inhibidor selectivo de PDE4 en EPOC: **roflumilast**.» «Nedocromilo en asma: inhibe fosfodiesterasa, es broncodilatador, inhibe 5-lipooxigenasa o **estabiliza la membrana del mastocito**».',
      trampa: 'No confundas **zileutón** (inhibe 5-LOX) con **montelukast/zafirlukast** (bloquean receptor). Montelukast = más prescrito, 1 vez/día. Roflumilast ≠ asma.' },
    { tipo: 'Teofilina y antimuscarínicos',
      texto: '«Si a un paciente con asma le administramos teofilina, qué efectos farmacológicos son previsibles: 1-mejor contractilidad del músculo esquelético, 2-relaja el diafragma ⚠, 3-aumenta la actividad ciliar, 4-aumenta la ventilación pulmonar» (clave 1-4 con OCR ruidoso). «Antimuscarínicos de acción prolongada por vía inhalatoria: trospio, aclidinio, ipratropio, tiotropio.» «Antiasmáticos…: tiotropio, antiteofilina ⚠, albuterol, cromolín» (OCR).',
      trampa: 'Teofilina mejora la contractilidad del diafragma (no «relaja»). **Trospio** (⚠ no está en la diapositiva) no es de este grupo; ipratropio es de acción corta.' },
    { tipo: 'Antitusivos',
      texto: '«Es de antitusivos: codeína, dextrometorfano, clofedianol…»; «El dextrometorfano: deprime el centro de la tos, no produce depresión respiratoria, tiene efecto comparable a la codeína, se puede usar en niños»; «Se usa en tos no productiva suprimiendo el centro de la tos en el bulbo: **clofedianol** / benzocaína / noscapina / ipratropio / acetilcisteína» (apareció en 2020 y repetida en otros exámenes). «Antitusígeno opioide que deprime el centro de la tos, reduce la secreción bronquial, analgésico y antidiarreico: **codeína**.» Final: «Pertenecen a los antitusígenos opiáceos: clofedianol, clobutinol, levodropropizina, noscapina».',
      trampa: 'Clofedianol = **no opiáceo** (bulbo); noscapina = derivado del opio **sin acción opioide**; ⚠ el examen la mete como opiácea en una pregunta final: ojo. Codeína reduce secreción; dextrometorfano no deprime respiración.' },
    { tipo: 'Fármacos que producen tos',
      texto: '«Son fármacos relacionados con la producción de tos: captopril, losartán, diclofenaco, propranolol.»',
      trampa: 'Todos (IECA, ARA-II, AINE, β-bloqueador) salen en la diapositiva. IECA es el clásico (tos seca por bradicinina). En «efecto secundario solo de IECA» la respuesta es **tos seca**.' },
    { tipo: 'Mucolíticos y expectorantes (⚠ fuera de la diapositiva)',
      texto: '«Mucolítico que fragmenta las mucinas, reduce viscosidad, acción antiinflamatoria y precursor de glutatión (antídoto del paracetamol): ambroxol / bromhexina / **acetilcisteína** / citiolona / benjuí.» «Pertenece a los mucolíticos derivados de la vasicina, con acción fluidificante: benjuí / **ambroxol** / guayfenesina…» «En referencia a los expectorantes y mucolíticos: la guaifenesina no debe utilizarse…; los yoduros actúan irritando la mucosa; el ambroxol es un metabolito más potente que la bromhexina; la carbocisteína está indicada en intoxicación por paracetamol» (afirmaciones 1-4).',
      trampa: 'El antídoto del paracetamol es **acetilcisteína**, no carbocisteína. ⚠ Verifica la clave en la foto del patrón.' },
    { tipo: 'EPOC y asma en otros temas',
      texto: '«Un paciente con HTA y antecedentes de asma NO debería recibir: [β-bloqueador no selectivo]» (⚠ opciones no legibles). «Pueden precipitar broncoespasmo en pacientes con asma o EPOC: …». «El glicopirrolato y la diciclomina se utilizan en: asma, cistitis transitoria, retención urinaria, hipermotilidad intestinal.» «Mejora la función pulmonar reduciendo exacerbaciones, aprobado FDA en EPOC: roflumilast.»',
      trampa: 'β-bloqueadores no selectivos (propranolol) **contraindicados en asma**. ⚠ Examen OCR ruidoso; revisa fuentes\\_ocr\\examenes-final.txt y examenes-p3.txt.' }
  ],

  consejo: [
    '🧠 **Aliviador = abre ya (β2 corto, ipratropio). Controlador = apaga la inflamación (ICS).** LABA y ABAML **siempre con ICS** en asma.',
    '🧠 **Dos olas**: la temprana la hacen histamina y leucotrienos (se abre con β2); la tardía la hacen IL-4/IL-5 y eosinófilos (se frena con corticoide).',
    '🧠 Monoclonales: **omalizumab = IgE**; **mepolizumab/reslizumab = IL-5**; **benralizumab = receptor IL-5**; **dupilumab = IL-4**; **tezepelumab = TSLP**.',
    '🧠 Antileucotrienos: **zileutón = 5-LOX** (hígado), **-lukast = receptor LTD4** (montelukast el más usado, 1 vez/día, niños desde 12 meses).',
    '🧠 Tos: **seca se suprime, húmeda no**. IECA y β-bloqueador/AINE **causan** tos o broncoespasmo. Clofedianol = no opioide del bulbo; dextrometorfano = sin analgesia ni depresión respiratoria.'
  ]
});
