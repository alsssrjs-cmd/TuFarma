registrarTema({
  id: 'p3-tiroides',
  ficha: {
    fuente: 'Hormonas Tiroideas y Fármacos Anti-tiroideos - Dra. Crespo.pdf (UMSS 2021)',
    diapositivas: 'diap. 1-131 (números impresos en cada diapositiva). Fisiología y hormonas (1-32), antitiroideos (33-49), hipotiroidismo (50-84), hipertiroidismo y Graves (85-131).',
    examenes: '3.er parcial 2018-2025: PTU/metimazol (~29 menciones), tiroides (~17): cae casi todos los años (🔥). Preguntas muy repetidas: tioamidas, yodo radiactivo, tormenta tiroidea, levotiroxina e interacciones, embarazo.',
    avisos: [
      '⚠ Varias diapositivas son esquemas/imagen y no se pudo leer su texto: diap. 2-3 (anatomía), 8-9 (esquema de síntesis hormonal), 13, 16-17 (eje hipotálamo-hipofisario y TSH), 19, 21-23, 25-26, 29-30 (levotiroxina: la ficha está fragmentada), 33, 35, 49-59 (cretinismo, clínica de hipotiroidismo), 71-72, 85-92, 103-106, 109-113, 121-122, 129-130. Si en clase viste algo que no está aquí, avísame.',
      '⚠ Las dosis de la diapositiva a veces mezclan unidades o están cortadas (ej. «Metimazol 30-60 mg/día» frente a «inicial 15-40 mg/día»); copio lo que dice y marco ⚠ lo dudoso.',
      '⚠ = dato que NO está en las diapositivas (sale de lógica farmacológica, de Katzung o de un examen). Verifícalo antes de memorizarlo.'
    ]
  },

  diapositiva: [
    { titulo: 'La glándula y el yodo (diap. 3-6)', puntos: [
      'Órgano en la región anterior del cuello; dos lóbulos unidos por el **istmo**; pesa 20-30 g; irrigada por arterias tiroideas superior e inferior; inervada por ganglios cervicales y nervio vago.',
      'Constituida por **folículos cerrados** con células epiteliales cilíndricas (foliculares), llenos de **coloide**; también células **parafoliculares** que secretan **calcitonina**.',
      '**El yodo** es indispensable para sintetizar hormonas tiroideas y viene **exclusivamente de la ingesta**; se absorbe en intestino delgado y se transforma en **yoduro**; en el LEC alcanza 1-1,5 μg/dL; se elimina por riñón y heces.',
      '**Requerimiento diario de yodo**: adultos 100-150 μg; niños 90-120 μg (1-8 años: 90; 9-13: 120); **embarazo/lactancia 200-290 μg** o más.'
    ]},
    { titulo: 'Síntesis de hormonas tiroideas (diap. 7-9)', puntos: [
      '1) **Captación** del yodo plasmático por la **bomba de Na⁺ yoduro-dependiente** (NIS) de la célula tiroidea.',
      '2) **Organificación** del yodo por la **peroxidasa tiroidea (TPO)**.',
      '3) **Yodación** de los componentes tirosílicos de la **tiroglobulina** → monoyodotirosina (**MIT**) y diyodotirosina (**DIT**).',
      '4) **Acoplamiento** de las yodotirosinas → **T3** (triyodotironina) y **T4** (tetrayodotironina o tiroxina), por acción de la peroxidasa.',
      '5) **Rotura proteolítica** de los enlaces tiroglobulina-hormonas y **liberación** a la sangre.',
      'Esquema (diap. 9): TPO, NADPH oxidasa y H₂O₂, endocitosis de coloide, megalina, hidrólisis de TG, deshalogenación de MIT y DIT; vías PKA (proliferación y funciones diferenciadas) y PKC (proliferación y síntesis de H₂O₂).'
    ]},
    { titulo: 'T4 vs T3: propiedades (diap. 10-12 y 27)', puntos: [
      '**T4 se produce en la tiroides 100 %; T3 solo 30 %** (el resto de T3 viene de la conversión periférica de T4 en el hígado: T4 80-90 μg/día; T3 15-30 μg/día, 20 % de T3 de la tiroides; de T4 convertido: 41 % T3, 38 % rT3, 21 % metabolitos).',
      'Tabla: T4 total 8 mcg/100 mL, T3 0,14. **Fracción libre T4 0,04 %**, **T3 0,4 %**. **Vida media sérica T4 7 días**, **T3 0,75 días**. Fracción intracelular T4 20 %, T3 70 %. **Potencia metabólica T4 0,3; T3 1**.',
      '**Tabla cinética**: volumen de distribución T4 10 L / T3 40 L; producción diaria **75 μg / 25 μg**; vida media 7 días / 1 día; potencia biológica 1 / 4; unión a proteínas **99,96 % / 99,6 %**; absorción oral **50-80 % / 95 %**.',
      '**Proteínas transportadoras**: globulina (TBG), prealbúmina (TBPA), albúmina. **Embarazo o estrógenos** ↑ TBG (↑ hormona total, libre estable); **andrógenos, glucocorticoides, nefrosis, cirrosis** ↓ TBG; **salicilatos, fenitoína, anticoagulantes orales** desplazan a la tiroxina de sus uniones proteicas ↑ hormona libre.'
    ]},
    { titulo: 'Regulación y mecanismo de acción (diap. 13-24)', puntos: [
      'Eje **hipotálamo-adenohipófisis** (TRH → TSH). **Autorregulación tiroidea**: grandes cantidades de yodo **inhiben la organificación** de yoduros. Estimuladores anormales: **anticuerpo estimulante del receptor de TSH** (efecto más prolongado), tejido muscular orbitario.',
      '**TSH** (diap. 15): en el tirocito ↑ receptores de TSH, ↑ tamaño y función secretora, ↑ número de células; en metabolismo del yoduro ↑ NIS, ↑ yoduro folicular, ↑ flujo sanguíneo, ↑ eflujo; en la síntesis de HT ↑ TG y TPO, ↑ H₂O₂, ↑ NADPH, ↑ yodación y acoplamiento; en la secreción ↑ proteólisis de TG y liberación de TG al plasma.',
      '**Mecanismo nuclear**: complejos **T3-TR** se unen al ADN o a elementos de respuesta → síntesis de proteínas; activan el metabolismo energético, ↑ consumo calórico, regulan crecimiento y maduración de tejidos y el recambio de casi todos los sustratos, vitaminas y hormonas.',
      '**Receptores**: TRα1 (desarrollo cerebelo; músculo esquelético, grasa parda, función cardíaca, desarrollo intestinal); TRβ1 (hígado, riñón, cerebro); **TRβ2** (hipotálamo, hipófisis, oído interno, retina; regulación negativa de los genes de TRH y TSH); TRβ3 (riñón, pulmón).',
      '**Acciones**: desarrollo, crecimiento, termorregulación, consumo de O₂, cardiovasculares, metabólicas (colesterol, ácidos grasos, síntesis proteica, hidratos de carbono), eritropoyesis. SNC: ↑ genes de **proteína básica de mielina** y laminina.',
      '**Efectos por tejido** (diap. 24): **corazón**: cronotrópico e inotrópico (↑ número y afinidad de receptores β; ↑ respuesta a catecolaminas; ↑ cadena pesada α de miosina); **adiposo**: catabólico (lipólisis); **músculo**: catabólico (↑ desdoblamiento proteico); **hueso**: desarrollo y recambio óseo; **SNC**: desarrollo; **intestino**: ↑ absorción de carbohidratos; **lipoproteínas**: ↑ receptores de LDL; calorigénico: ↑ consumo de O₂ y metabolismo basal.'
    ]},
    { titulo: 'Levotiroxina: farmacocinética, usos y precauciones (diap. 26-32)', puntos: [
      '**Levotiroxina (T4)**: inicio de acción terapéutica **VO 3-5 días, IV 6-8 h**; absorción oral **errática (50-80 %)** en el intestino delgado; metabolismo hepático; **vida media de eliminación 6-7 d (eutiroideo), 9-10 d (hipotiroidismo), 3-4 d (hipertiroidismo)**; excreción urinaria y fecal. Tomar con **estómago vacío**.',
      '**Indicaciones**: terapia de reemplazo en hipotiroidismo; supresión de TSH hipofisaria.',
      '**Contraindicaciones**: **tirotoxicosis**, **IM reciente**, **insuficiencia adrenal no corregida**. **Precauciones**: insuficiencia adrenal, **diabetes** (respuesta exagerada), **mixedema** (respuesta exagerada), arritmias cardíacas, angina pectoris o enfermedad CV; control periódico.',
      '**Farmacocinética**: depuración metabólica ↑ en hipertiroidismo y ↓ en hipotiroidismo; **inductores enzimáticos** ↑ metabolismo; unión a TBG ↑ en embarazo, estrógenos o anticonceptivos.'
    ]},
    { titulo: 'Antitiroideos: clasificación y tioamidas (diap. 33-40)', puntos: [
      'Grupos: **tioamidas, inhibidores de aniones, yoduros, medios de contraste yodados, yodo radiactivo, β-bloqueantes**.',
      '**1. Tioamidas**: **inhibidores irreversibles de la peroxidasa**; interfieren la incorporación de I en los residuos de tirosina de la tiroglobulina (**organificación**) y el **acoplamiento** de yodotirosinas a yodotironinas. **Metimazol es 10 veces más activo que PTU**.',
      '**PTU**: absorción rápida, Cmáx 1 h, biodisponibilidad 50-80 % (primer paso), se acumula en la tiroides, T½ **1,5 h**, unión a proteínas 70-80 %; **inhibe también la conversión de T4 en T3**; se da **3-4 veces al día**. **Metimazol**: absorción completa (velocidad variable), excreción lenta (48 h), T½ **6 h**, **1 vez al día**. **Carbimazol**: se convierte en **metimazol** (metabolito activo), T½ 6 h, 1 vez/día. (La T½ plasmática tiene poca influencia porque se acumulan en la tiroides.)',
      '**Eliminación**: hepática/renal los tres. **EA comunes**: rash, hepatotoxicidad, lupus-like, **agranulocitosis**. Menos comunes: **exantema papular urticariforme, hepatitis, nefritis, vasculitis ANCA (PTU 50 %)**, pérdida de cabello.',
      '**Teratogenicidad**: **aplasia cutis congénita**, alteración del cuero cabelludo. **Embarazo: PTU** (mayor unión a proteínas plasmáticas); **lactancia: metimazol 20 mg/día**. ⚠ Los exámenes también preguntan «metimazol en el 1.er trimestre»: ver «Lo que preguntan».',
      '**Dosis**: **metimazol** inicial 15-40 mg/día (reducir; eutiroideos en 12 semanas) ⚠ otra diapositiva: «metimazol y carbimazol 30-60 mg/día»; **PTU** 100 mg c/8 h (otra diapositiva: «propiltiouracilo y metiltiouracilo 300-600 mg/día»; los primeros cada 8 h, los otros en dosis única) durante **12-18 meses en adultos y 2 años en niños**.',
      '**Usos**: a) supresión del hipertiroidismo a largo plazo en niños y adultos; b) **adyuvante de la radioterapia** mientras se esperan los efectos de la radiación; c) control del hipertiroidismo en la **preparación para cirugía**. **62 % de remisión a los 2 años**.',
      '**Toxicidad** (diap. 110): reacciones cutáneas de hipersensibilidad, fiebre, trastornos del TGI, conjuntivitis, hepatitis tóxica y **agranulocitosis**. Reactivación autoinmunitaria: ↑ TSH; se puede añadir levotiroxina 50-100 μg (bloqueo-reemplazo).'
    ]},
    { titulo: 'Inhibidores de aniones, yoduros y medios de contraste (diap. 41-45)', puntos: [
      '**2. Inhibidores de aniones**: ClO₄⁻ (perclorato), TcO₄⁻ (pertecnetato), SCN⁻ (tiocianato), fluoroborato. **Bloquean la captación de yoduros**. **Perclorato de K⁺**: hipertiroidismo inducido por yoduro (p. ej. **amiodarona**); 10 veces más activo que el tiocianato; **a dosis altas (2-3 g/día) causó anemia aplástica letal**; dosis de 750 mg/día en enfermedad de Graves. **El litio** ↓ la secreción de T4 y T3 → hipotiroidismo evidente en algunos pacientes que lo reciben para manía.',
      '**3. Yoduros**: altas concentraciones producen el **efecto de Wolff-Chaikoff**; efecto muy rápido (24 h); máximo a 10-15 días; por corto tiempo; **↓ vascularidad** y **↓ tamaño de la célula**. **Indicaciones**: preparación para tiroidectomía (↓ tamaño y vascularidad), **tormenta tirotóxica** (inhibe proteólisis y liberación de hormonas), **protección de la tiroides ante yodo radiactivo tras accidente nuclear** (inhibe captación y organificación).',
      '**Preparados**: **solución de Lugol** (yodo 5 % + KI 10 %, 6,3 mg yodo/gota) 3-5 gotas TID; **solución saturada de yoduro de potasio** (38 mg yodo/gota) 1-3 gotas TID. **EA**: sabor metálico y ardor en boca, garganta, dientes y encías; yodismo leve («resfriado»); inflamación de faringe, laringe y amígdalas (¿parotiditis?); lesiones acneiformes; irritación gástrica, diarrea sanguinolenta.',
      '**4. Sustancias de contraste yodadas**: **ipodato, ácido iopanoico** VO 0,5-1 g/día; **diatrizoato** EV. **Inhiben la conversión de T4 a T3**; efecto rápido; útiles en **tormenta tiroidea** o contraindicación de tioamidas.'
    ]},
    { titulo: 'Yodo radiactivo y β-bloqueantes (diap. 46-49, 115-116)', puntos: [
      '**5. Yodo radiactivo (¹³¹I)**: radiaciones **beta** (destructivas dentro del folículo; penetración 400-2000 μm) y **gamma** (pasan el tejido, para cuantificación). **VO; T½ 5 días**. Indicaciones: **tiroidectomía subtotal** (15-30 mCi, beta); **mayores de 30 años**; diagnóstico de enfermedades tiroideas 30 mCi (gamma). **Ablación glandular en 6-18 semanas** (otra diapositiva: 6-12 semanas). **Contraindicado en embarazo y lactancia**.',
      '**Dosis en hipertiroidismo (diap. 115)**: ¹³¹I 50-80 μCi/g de tejido tiroideo; evitar yoduros; **consecuencias**: hipotiroidismo, leucemias, cáncer tiroideo, irradiación nociva a gónadas; recibir el tratamiento: pacientes **>40 años**.',
      '**6. β-bloqueantes**: mejoran los síntomas de exceso adrenérgico (taquicardia, fibrilación auricular, temblor, ansiedad). **Propranolol**: también **inhibe la conversión periférica de T4 a T3** (160 mg/día), **reduce T3 ~20 %**; 20-40 mg/6-8 h según severidad. **Atenolol** 25-50 mg/día.',
      '**Colestiramina**: 4 g 4 veces al día con metimazol → reduce T4 y T3 más rápido que metimazol solo (terapia complementaria en pacientes que requieren mejora rápida).'
    ]},
    { titulo: 'Hipotiroidismo: clínica, etiología y diagnóstico (diap. 53-69)', puntos: [
      '**Manifestaciones**: fatiga, ganancia de peso (retención de líquidos), piel seca e intolerancia al frío, piel amarillenta, cabello áspero y caída, ronquera, bocio, **bradicardia e hipotermia**, mixedema, retardo en la fase de relajación de los reflejos, ataxia, estreñimiento, alteración mental/memoria, depresión, irregularidades menstruales e infertilidad, mialgias, **hiperlipidemias**.',
      '**Por aparatos**: circulatorio (↓ GC, vasoconstricción periférica, dilatación cardíaca); respiratorio (derrames pleurales); digestivo (macroglosia, encías pálidas e hinchadas, malabsorción, ↓ peristaltismo → estreñimiento); renal (↓ FG, ↓ capacidad de concentrar la orina); sangre (anemia normocítica/macrocítica/microcítica); nervioso/muscular (↓ libido, lentitud intelectual, ataxia cerebelosa, ceguera nocturna, sordera, **túnel del carpo**); endocrino (hiperplasia de tirotropas → **hiperprolactinemia**; mujeres: anovulación, amenorrea; hombres: impotencia, oligospermia); metabolismo: ↑ lipemia, ↑ colesterolemia, ↓ formación ósea, ↑ densidad ósea.',
      '**Coma mixedematoso** = hipotiroidismo intenso sin tratamiento: fascies y piel mixedematosas, bradicardia, hipotermia, hipoventilación alveolar, obnubilación o coma.',
      '**Etiología**: **tiroiditis de Hashimoto** (destrucción autoinmune), **deficiencia de yodo**, ablación (radiación, cirugía, ¹³¹I), enfermedades de hipófisis o hipotálamo, fármacos, dishormonogénesis, congénito.',
      '**Diagnóstico**: **TSH baja en el hipotiroidismo secundario; TSH alta en el primario**. Prueba de estimulación con TSH (rara): hipotiroidismo primario no responde; secundario muestra respuesta intensa. T3 sérico total ↓ en hepatopatías, nefropatías crónicas, inanición y dietas pobres en carbohidratos.',
      '**Primario**: T3 y T4 bajas, **TSH aumentada** (congénito: atireosis, ectopia, dishormonogénesis; adquirido: déficit de yodo, autoinmunidad, ¹³¹I, postquirúrgico, antitiroideos, exceso de yodo). **Secundario**: T3 y T4 bajas por déficit de TSH (hipopituitarismo, tumores, necrosis hipofisaria, traumatismos). **Terciario o central**: déficit de TRH (craneofaringioma, traumatismos, radioterapia).'
    ]},
    { titulo: 'Tratamiento del hipotiroidismo con levotiroxina (diap. 70-84)', puntos: [
      '**Levotiroxina**: **lactantes y niños necesitan más T4 por kg que los adultos**. Lactantes 1-6 meses: **10-15 μg/kg/día**. **Adultos: 1,6-1,8 μg/kg/día** (diap. 70: 1,7). Equilibrio de tiroxina a las **6-8 semanas**. Hipotiroidismo de larga duración: dosis reducidas (adultos 12,5-25 μg/d por 2 semanas, ↑ 25 μg cada 2 semanas). En obesos/sobrepeso usar peso ideal.',
      '**Cardiopatía isquémica o HT grave/larga duración**: iniciar con **12,5-25 μg/día** e incrementar. **Objetivo**: resolver signos y síntomas, normalizar TSH (rango habitual 0,2-0,3 a 4,5-5 mUI/L en adultos) y hormonas; evitar sobretratamiento, sobre todo en ancianos y mujeres posmenopáusicas (TSH 4-6 mUI/L).',
      '**Administración**: dosis única diaria, en **ayunas**, al menos **30 min (idealmente 1 h) antes del desayuno** o 3 h después de la cena. **Olvidar una dosis no altera sustancialmente** los niveles. **Calcio, hierro y cationes polivalentes** y alteraciones GI interfieren en su absorción.',
      '**Control**: TSH a las **4-6 semanas** de iniciar (ajustes de 12,5-25 μg/día), luego cada 4-6 semanas y, al lograr dosis, anual. **Modificar la dosis** si: grandes cambios de peso, alteraciones GI, terapia androgénica o estrogénica, fármacos que interaccionan, ancianos, **embarazo**. No modificar en asintomáticos con TSH ligeramente fuera de rango. Si necesitan dosis altas: investigar **adherencia**. **ATA**: en contra de levotiroxina en eutiroideos para obesidad o depresión.',
      '**Toxicidad** (por exceso): en niños: cansancio, insomnio, crecimiento y maduración ósea acelerada, intolerancia al calor, palpitaciones, taquicardia, pérdida de peso.',
      '**Problemas especiales**: **mixedema y enfermedad arterial coronaria** (ancianos): dosis bajas. **Coma mixedematoso**: debilidad progresiva, hipotermia, hipoventilación, hipoglucemia, hiponatremia, choque y muerte; retención de CO₂ (↓ sensibilidad del centro respiratorio), hiponatremia, hipotermia hasta 24 °C. **Tratamiento: levotiroxina IV 300-400 μg y luego 50 μg/día + hidrocortisona IV** (en insuficiencia suprarrenal o hipofisaria).',
      '**Hipotiroidismo subclínico** (TSH >4-5 con T4 normal): **TSH >10 mUI/L**: tratar (frecuentemente progresa; ↑ riesgo CV e IC). **TSH 4,5-10**: monitorizar y tratar según anti-TPO, síntomas, edad, bocio. **>70 años con TSH 4,5-8**: los beneficios no superan los riesgos. Si se trata: TSH en el extremo inferior del rango. Algoritmo: TSH elevada + T4 libre normal = subclínico; baja = primario; TPO Ac + = autoinmune; factores de riesgo (TSH >10, eco de tiroiditis, anti-TPO +, bocio, familiares).',
      '**Embarazo**: tratar si TSH > rango específico del trimestre y T4 libre baja, y a todas las mujeres con **TSH ≥10**. HT diagnosticado antes de la gestación: **↑ dosis 25-30 %** (dos dosis adicionales a la semana); monitorizar cada 4 semanas en la 1.ª mitad y al menos una vez entre las semanas 26 y 32; ↑ TBG materna; control con TSH y T4 libre.',
      '**Niños**: recién nacido 10-15 μg/kg/día (casos severos más); 1-3 años 4-6; 3-10 años 3-5; 10-16 años 2-4 μg/kg/día. Control clínico y bioquímico (T4 libre y TSH cada 1-2 meses el primer año en HT congénito; reevaluar a los 3 años salvo ectopia; Hashimoto en niños: evaluar a los 6-12 meses).'
    ]},
    { titulo: 'Hipertiroidismo y enfermedad de Graves-Basedow (diap. 85-102, 107-114)', puntos: [
      '**Tirotoxicosis**: secreción excesiva de hormonas tiroideas (↑ en sangre). Causas: **enfermedad de Graves-Basedow**, adenoma tóxico, bocio multinodular tóxico, tiroiditis subaguda, tormenta tiroidea, tirotoxicosis facticia, estruma ovárico, mola hidatiforme, carcinoma tiroideo metastásico.',
      '**Graves**: afección multisistémica **autoinmune**: hiperplasia difusa con hiperfunción, **oftalmopatía infiltrativa**, bocio difuso, a veces **mixedema pretibial** (4 %: mucopolisacáridos entre haces de colágeno, induración violácea, osteoartropatía con acropaquia). Autoanticuerpos **IgG (TSI)** contra el receptor de TSH que lo estimulan.',
      '**Metabolismo**: ↑ lípidos libres, ↓ colesterol; proteínas muy aumentadas (balance nitrogenado negativo, pérdida de peso, debilidad); **hueso**: ↑ resorción (hipercalcemia, calciuria, ↑ fosfatasa alcalina, desmineralización). **Clínica**: termogénesis excesiva, sudoración, polidipsia, poliuria, pérdida de peso, astenia; piel caliente y húmeda, eritema palmar, cabello fino, uñas de Plummer, vitíligo; ↓ RVP, ↑ GC, ↑ volumen sistólico, ↑ FC, **pulso saltón**, **fibrilación auricular**; GI (↑ frecuencia de deposiciones); nerviosismo, temblor fino, miastenia tirotóxica, parálisis periódica; bocio difuso con **soplo**.',
      '**Oftalmopatía**: no infiltrativa (retracción palpebral, signo de **Graefe**) o **infiltrativa** (**exoftalmos**, congestión vascular, quemosis, epífora, ↑ presión intraorbitaria, estrabismo, diplopía). **Exoftalmia maligna** (2-3 %, puede llevar a ceguera). **Cardiopatía tirotóxica** (arritmias, IC, insuficiencia coronaria). **Crisis tirotóxica: 20 % de mortalidad** (fiebre, sudoración, taquicardia extrema, temblor, agitación, diarrea, deshidratación, delirio, coma).',
      '**Diagnóstico**: clínico, hemograma, EGO, TSH, T3, T4, anticuerpos antitiroideos y **anti-receptor de TSH**.',
      '**Tratamiento – medicación tiroestática (tioamidas)**: **PTU y metiltiouracilo 300-600 mg/día; metimazol y carbimazol 30-60 mg/día**; los primeros cada 8 h, los otros dosis única, por **12-18 meses en adultos y 2 años en niños**. Bloquean la síntesis hormonal: inhiben **organificación**, **yodación de tirosinas (MIT/DIT)** y **acoplamiento** (T3/T4).',
      '**Tiroidectomía subtotal**: se deja un fragmento para lograr eutiroidismo; **<4 g = hipotiroidismo; >10 g = recidiva (hipertiroidismo)**. **Preparación quirúrgica**: tioderivados + yodoterapia preoperatoria (Lugol) + propranolol.',
      '**Yodo radiactivo**: ver sección anterior (¹³¹I 50-80 μCi/g; 6-12 semanas; consecuencias: hipotiroidismo, leucemias, cáncer, gónadas; recibir si >40 años).',
      '**Adenoma tóxico** (Plummer 1912): bocio adenomatoso tóxico **sin exoftalmos**; nódulo único caliente con autonomía funcional (93 % mujeres, 30-40 años). **Bocio multinodular tóxico**: ≥2 nódulos calientes, zona de endemia bociosa, predominio en mujeres desde los 50 años. Tratamiento: tioamidas, ¹³¹I o tiroidectomía (diap. 121).',
      '**Tiroiditis subaguda**: fase aguda de infección viral, destrucción del parénquima; **autolimitada**: **AINE, corticoides, propranolol**.'
    ]},
    { titulo: 'Tormenta tiroidea (diap. 124-125)', puntos: [
      '**Síntomas exagerados** con exacerbación brusca (Dx desconocido o suspensión brusca del tratamiento). **Tríada: fiebre, taquicardia (FA) y alteraciones neurológicas** (confusión, temblor, delirio). 1.º tratar la causa.',
      '**Medidas generales**: rehidratación, tratar acidosis metabólica, enfriamiento corporal; soporte circulatorio (digital, dopamina).',
      '**Específicas**: 1) **antitiroideos a dosis altas**: **PTU 1200 mg/d (200 mg c/4 h)**; enema 400 mg en 90 mL. 2) **Propranolol** 1-2 mg/4 h IV; 80 mg/6 h oral. 3) Otros: **yodo, betametasona 5 mg/6 h IV o hidrocortisona 100 mg/6 h IV**.',
      '**Por mecanismo**: ↓ secreción hormonal: **PTU 200 mg c/4 h, Lugol 30 gotas/día, yoduro sódico 1 g EV c/8 h**. Exceso de respuesta periférica: **propranolol 1-2 mg EV**. Déficit de compensación: líquidos, glucosa, electrolitos, complejo B y **hidrocortisona 100 mg c/6 h**. Tratar factores desencadenantes e infecciones.'
    ]},
    { titulo: 'Situaciones especiales (diap. 126-131)', puntos: [
      '**Embarazo e hipertiroidismo**: tratamiento médico con **PTU 300 mg/día**; el hipotiroidismo y bocio en el recién nacido son riesgos. **Tiroidectomía subtotal** si hay intolerancia a tioderivados, en el **2.º trimestre**.',
      '**Graves neonatal**: paso de TSH-R Ab materna (autolimitada 4-12 semanas) o transmisión genética; T4 libre ↑, T3 ↑, TSH ↓. **Tx**: PTU 5-10 mg/kg/día (c/8 h), **Lugol 1 gota (8 mg) c/8 h**, propranolol 2 mg/kg/día, prednisona 2 mg/kg/día.',
      '**Oftalmopatía de Graves**: leves: gafas oscuras, metilcelulosa 1 %, diuréticos, oclusión nocturna. Graves: **prednisona** (40-80 mg/día + ciclosporina; hasta 140 mg/día 8-21 días), **metilprednisolona 1 g/día x 1 semana**, inyección retrobulbar, **radioterapia orbitaria 20 Gy en 10 sesiones/2 semanas**, inmunosupresores, tarsorrafia, **descompresión orbital**.',
      '**Hipertiroidismo subclínico**: TSH suprimido, T3 y T4 normales. Tx: TSH a 0,1 mU/L; si menor supresión: vigilancia.'
    ]}
  ],

  explicacion: [
    { titulo: '1. La fábrica de hormonas tiroideas', p: [
      'Imagínate la tiroides como una **fábrica con una cinta de ensamblaje en 5 estaciones**: (1) **captura** de yoduro con la bomba NIS, (2) **organificación** con la peroxidasa (TPO), (3) **yodación** de la tiroglobulina → MIT y DIT, (4) **acoplamiento** → T3 y T4, (5) **proteólisis** y liberación a la sangre.',
      'Si te acuerdas de esas 5 estaciones, entiendes **todos los antitiroideos**: las **tioamidas** sabotean las estaciones 2-4 (peroxidasa), los **aniones (perclorato)** sabotean la 1, el **yoduro** en exceso frena la 2 y la 5 (Wolff-Chaikoff y liberación), el **yodo radiactivo** destruye la fábrica.',
      'Datos para el examen: **el 100 % del T4 viene de la tiroides; de T3 solo el 30 %** (el resto, conversión periférica). **T4 = reserva** (vida media 7 días, 99,96 % unida a proteínas, absorción oral 50-80 %). **T3 = la activa** (4 veces más potente, vida media 1 día, absorción 95 %). Por eso para reemplazo se prefiere **levotiroxina (T4)**: larga, estable, 1 vez al día, y el cuerpo la convierte a T3.',
      'Las hormonas actúan sobre receptores **nucleares** (TR): corazón (más receptores β), grasa y músculo (catabólicas), hueso, SNC (mielina), intestino, LDL, calor (↑ consumo de O₂). Hipertiroidismo = todo acelerado; hipotiroidismo = todo lento.'
    ], pausa: {
      q: 'Una mujer embarazada tiene más TBG circulante. ¿Qué pasa con la T4 total y qué con la libre?',
      a: 'La **total sube** (más proteína transportadora) pero la **libre se mantiene** (⚠ la diapositiva solo dice que estrógenos/embarazo ↑ TBG y que en esos casos hay que ↑ dosis de levotiroxina en 25-30 %).'
    }},
    { titulo: '2. Levotiroxina: hipotiroidismo bien tratado', p: [
      'Hipotiroidismo = **lento y frío**: fatiga, ganancia de peso, piel seca, intolerancia al frío, bradicardia, estreñimiento, depresión, hiperlipidemia. **Causa más común: Hashimoto** (autoinmune). **Primario: TSH alta; secundario/terciario: TSH baja o normal con T4 baja.**',
      '**Tratamiento: levotiroxina**, siempre. Dosis adulto ≈ **1,6-1,8 μg/kg/día**; niños y lactantes más por kg (RN 10-15 μg/kg). **Arrancar bajo** (12,5-25 μg) si hay cardiopatía isquémica o ancianos, y subir cada 2 semanas.',
      '**Cómo se toma**: **en ayunas, 30-60 min antes del desayuno**. Calcio, hierro, y similares **bloquean su absorción**. ⚠ Los exámenes agregan: **sucralfato, hidróxido de aluminio, colestiramina/colestipol, estrógenos** (↑ TBG), **omeprazol** (↑ pH) y sulfato ferroso disminuyen la absorción/efecto (la diapositiva solo cita calcio, hierro y cationes).',
      '**Controlar TSH** a las 4-6 semanas y ajustar 12,5-25 μg. **Si el embarazo**: ↑ dosis 25-30 %. Si necesita dosis altas: sospecha **mala adherencia**.',
      '**Contraindicaciones/precauciones** (se deducen: «más hormona = más calor, más latido»): **tirotoxicosis, IM reciente, insuficiencia suprarrenal no corregida**, angina o arritmias, diabetes (respuesta exagerada), mixedema. En **coma mixedematoso**: levotiroxina IV 300-400 μg → 50 μg/d + **hidrocortisona**.',
      '**Subclínico**: TSH >10 → tratar; 4,5-10 → monitorear y decidir según anti-TPO, síntomas, edad, bocio.'
    ], pausa: {
      q: 'Mujer de 72 años con hipotiroidismo y enfermedad coronaria conocida. ¿Con cuánta levotiroxina empiezas?',
      a: '**Dosis baja (12,5-25 μg/día)** y subir poco a poco: el exceso de hormona sobrecarga el corazón (isquemia, arritmias).'
    }},
    { titulo: '3. Tioamidas: PTU, metimazol, carbimazol', p: [
      'Son **inhibidores irreversibles de la peroxidasa**: no dejan que el yodo se pegue a la tirosina (organificación) ni que se acoplen MIT y DIT. **El metimazol es 10 veces más potente que PTU** y se da **1 vez al día**; PTU 3-4 veces al día (vida media 1,5 h vs 6 h). **Carbimazol** = profármaco de metimazol.',
      '**Lo único exclusivo de PTU**: además **inhibe la conversión periférica de T4 → T3** (5′-deiodinasa) (por eso se usa en tormenta tiroidea). ⚠ Tarda semanas en actuar: las tioamidas solo bloquean la síntesis, no destruyen hormona ya hecha.',
      '**Efectos adversos**: rash, **agranulocitosis** (el temido: dolor de garganta y fiebre → suspender), hepatotoxicidad, lupus-like, vasculitis ANCA (PTU), artralgias, pérdida de cabello. ⚠ En exámenes: «NO es EA de tioamidas: **daño renal**» (opciones: agranulocitosis, hepatotoxicidad, daño renal, exantema papular, vasculitis); la diapositiva sí cita nefritis como EA menos común.',
      '**Embarazo**: **PTU** (más unido a proteínas, cruza menos la placenta; **metimazol → aplasia cutis**) **en el 1.er trimestre**. **Lactancia**: metimazol 20 mg/día (⚠ según la diapositiva). Después del 1.er trimestre se suele cambiar a metimazol por la hepatotoxicidad de PTU ⚠ (no dicho en la diapositiva).',
      '**Usos**: tratamiento prolongado (12-18 meses; 62 % remisión a 2 años), **adyuvante antes y después de ¹³¹I**, y preparar para cirugía.'
    ], pausa: {
      q: 'Mujer de 28 años embarazada de 8 semanas con enfermedad de Graves. ¿Qué tioamida eliges y por qué?',
      a: '**PTU**: mayor unión a proteínas → cruza menos la placenta, y el **metimazol** se asocia a **aplasia cutis congénita**. Cuidado: la pregunta de examen dice «se prefiere en el primer trimestre: PTU». El metimazol «se prefiere en la mayoría de los casos por vida media más larga y menor riesgo de efectos graves» (hepatotoxicidad).'
    }},
    { titulo: '4. Yoduro, contrastes y yodo radiactivo', p: [
      '**Yoduro (Lugol, KI saturado)**: dosis altas → **efecto de Wolff-Chaikoff** (bloquea la organificación) y frena la liberación de hormona. Efecto **rapidísimo** (24 h) pero **corto** (máx. a 10-15 días: escape). Por eso lo usas **antes de cirugía** (la glándula se vuelve **menos vascularizada y más pequeña**) y en **tormenta tiroidea**. También protege a la tiroides de **¹³¹I tras accidente nuclear**. EA: sabor metálico, yodismo, acné, irritación gástrica.',
      '**Contrastes yodados (ipodato, ácido iopanoico, diatrizoato)**: **inhiben la conversión T4 → T3** (efecto rápido, útil en tormenta o si no se pueden dar tioamidas).',
      '**Aniones (perclorato, tiocianato)**: bloquean la captación de yoduro; el **perclorato** se usa en hipertiroidismo **inducido por yoduro** (**amiodarona**); pero a dosis altas **anemia aplástica**. El **litio** puede causar hipotiroidismo.',
      '**¹³¹I**: se bebe, la tiroides lo atrapa y la **radiación beta destruye el folículo** (penetra 0,4-2 mm). T½ 5 días. **Ablación en 6-12 semanas (6-18 en la tabla)** (⚠ una diapositiva dice 6-18 y otra 6-12). **Contraindicado en embarazo y lactancia**. Consecuencia esperada: **hipotiroidismo** (hay que dar levotiroxina después). Mejor en **>30-40 años** (por riesgo de cáncer/leucemia y gónadas).',
      'Antes y durante el ¹³¹I **evitar yoduros** (la diapositiva: «evitar el uso de yoduros»): bloquearían la captación del radioyodo.'
    ], pausa: {
      q: 'Paciente con Graves va a cirugía en 10 días. ¿Qué le das antes para que la glándula sangre menos?',
      a: '**Tioamida** (para llevarlo a eutiroidismo) + **yoduro (Lugol)** unos días antes (↓ vascularidad y tamaño) + **propranolol** (síntomas adrenérgicos).'
    }},
    { titulo: '5. β-bloqueantes y otros coadyuvantes', p: [
      '**Propranolol**: no trata la causa, trata los **síntomas** (taquicardia, temblor, ansiedad, FA). A dosis altas (160 mg/día) además **bloquea la conversión T4 → T3** (↓ T3 ~20 %). **Atenolol** también sirve. **Colestiramina** (4 g cuatro veces al día) con metimazol baja T4 y T3 más rápido.',
      '**Glucocorticoides** (hidrocortisona, betametasona): en la tormenta tiroidea (también bloquean la conversión T4 → T3 ⚠ lo dicen los exámenes); en Graves ocular grave (prednisona, metilprednisolona).'
    ]},
    { titulo: '6. Tormenta tiroidea: el orden importa', p: [
      '**Tríada**: fiebre, taquicardia/FA y alteración neurológica (confusión, delirio). Mortalidad ~20 %. **Primero la causa** (infección, suspensión del tratamiento).',
      'Trata por **capas**: (1) **frena la síntesis**: **PTU 200 mg c/4 h** (1200 mg/día; por el efecto adicional sobre T4→T3); (2) **frena la liberación**: **yoduro/Lugol** (después de PTU, ⚠ no dicho: yodar primero daría más sustrato); (3) **frena el efecto periférico**: **propranolol** 1-2 mg IV; (4) **hidrocortisona** 100 mg c/6 h (déficit de compensación); (5) **líquidos, glucosa, electrolitos**, enfriamiento.',
      'Lo que **sí** está en la tormenta: PTU, yoduro, Lugol, propranolol, hidrocortisona. Lo que **NO** (⚠ deducido): levotiroxina y **amiodarona** (más yodo y riesgo). ⚠ La pregunta de examen «No está indicado en tormenta tiroidea» tiene versiones con opciones distintas (hidrocortisona / yoduro / PTU / propranolol / metimazol y metimazol/amiodarona/propranolol…): lee bien las opciones.'
    ]},
    { titulo: '7. Graves y otras causas', p: [
      '**Graves**: autoanticuerpos IgG (TSI) estimulan el receptor de TSH (como si TSH estuviera siempre encendida). Tríada: **hipertiroidismo, bocio difuso con soplo, oftalmopatía** (± mixedema pretibial). Tratamiento: **tioamidas 12-18 meses** (recaída frecuente), **¹³¹I** (>30-40 años, no embarazo), **cirugía**.',
      '**Adenoma tóxico** y **bocio multinodular tóxico**: nódulos calientes autónomos; tratamiento definitivo: ¹³¹I o cirugía (las tioamidas solo controlan).',
      '**Tiroiditis subaguda**: viral, **autolimitada**: AINE, corticoide, propranolol (no antitiroideos).',
      '**Graves neonatal** (Ac maternos): PTU, Lugol, propranolol, prednisona; dura 4-12 semanas.'
    ]}
  ],

  memoria: {
    columnas: ['Fármaco', 'Mecanismo', 'Uso', 'Efectos adversos', 'Ojo con…'],
    filas: [
      ['Levotiroxina (T4)', 'Reemplazo; T4 → T3 periférica; receptor nuclear TR', 'Hipotiroidismo (1,6-1,8 μg/kg/día), supresión de TSH, coma mixedematoso (IV 300-400 μg)', 'Sobredosis: taquicardia, insomnio, pérdida de peso, arritmias', 'En ayunas. Cationes (Ca, Fe) ↓ absorción. ↑ dosis 25-30 % en embarazo. Dosis baja en cardiopatía. CI: tirotoxicosis, IM reciente, insuf. adrenal'],
      ['Liotironina (T3)', 'Hormona activa (4×); vida media 1 día', '⚠ solo citada en la tabla T4/T3', '—', 'T4 se prefiere por vida media larga y más estable (pregunta de examen ⚠)'],
      ['Propiltiouracilo (PTU)', 'Inhibe peroxidasa; también ↓ conversión T4 → T3', 'Graves, tormenta tiroidea, embarazo 1.er trimestre; 100 mg c/8 h (300-600 mg/día); 200 mg c/4 h en tormenta', 'Agranulocitosis, hepatotoxicidad, rash, lupus-like, vasculitis ANCA', 'T½ 1,5 h; 3-4 veces/día; unión a proteínas 70-80 %'],
      ['Metimazol', 'Inhibe peroxidasa (10× PTU)', 'Graves, preparación para cirugía; 15-40 mg/día (30-60 mg/día); lactancia 20 mg/día', 'Agranulocitosis, rash, hepatotoxicidad; aplasia cutis congénita', 'T½ 6 h; 1 vez/día; metabolito activo'],
      ['Carbimazol', 'Profármaco de metimazol', 'Igual que metimazol', 'Igual', '1 vez/día'],
      ['Perclorato / tiocianato / pertecnetato (aniones)', 'Bloquean la captación de yoduro (NIS)', 'Hipertiroidismo inducido por yoduro (amiodarona); Graves 750 mg/día', 'Anemia aplástica con 2-3 g/día', 'Litio también ↓ T4/T3 (hipotiroidismo)'],
      ['Yoduro: Lugol / KI saturado', 'Wolff-Chaikoff; ↓ proteólisis y liberación; ↓ vascularidad', 'Tormenta tiroidea; preparación quirúrgica; accidente nuclear', 'Sabor metálico, yodismo, acné, irritación gástrica', 'Lugol 3-5 gotas TID; KI 1-3 gotas TID; efecto máx. 10-15 d'],
      ['Contrastes yodados: ipodato, ácido iopanoico, diatrizoato', 'Inhiben conversión T4 → T3', 'Tormenta tiroidea o CI de tioamidas', '—', 'ipodato/iopanoico 0,5-1 g/día VO; diatrizoato EV'],
      ['Yodo radiactivo ¹³¹I', 'Radiación beta destruye el folículo; T½ 5 d', 'Graves, bocio nodular, >30-40 años; ablación en 6-12 sem', 'Hipotiroidismo, leucemias, cáncer tiroideo, irradiación de gónadas', 'CI embarazo y lactancia; penetración 400-2000 μm'],
      ['Propranolol (y atenolol)', 'β-bloqueo; propranolol ↓ T4 → T3', 'Síntomas adrenérgicos; tormenta tiroidea; tiroiditis subaguda; preparación quirúrgica', 'Bradicardia, broncoespasmo', 'Propranolol 160 mg/día ↓ T3 20 %'],
      ['Glucocorticoides: hidrocortisona, betametasona, prednisona', 'Antiinflamatorios; ↓ conversión T4 → T3 (⚠)', 'Tormenta tiroidea; oftalmopatía de Graves; tiroiditis subaguda; coma mixedematoso con insuficiencia adrenal', '—', 'Hidrocortisona 100 mg c/6 h'],
      ['Colestiramina', 'Secuestra hormona tiroidea en el intestino', 'Complemento de metimazol para bajar T4/T3 más rápido', '—', '4 g cuatro veces al día']
    ],
    notas: [
      '**Inhiben T4 → T3** (la «5′-deiodinasa» según exámenes ⚠): **PTU**, **propranolol (dosis altas)**, **hidrocortisona/corticoides**, **ipodato / ácido iopanoico**, **amiodarona**. **Metimazol NO** lo hace.',
      '**Tormenta**: PTU 200 mg c/4 h + yoduro/Lugol + propranolol + hidrocortisona + soporte. **Preparar cirugía**: tioamida + Lugol + propranolol.',
      '**Embarazo**: PTU 1.er trimestre; ¹³¹I **contraindicado**; levotiroxina ↑ 25-30 %.'
    ]
  },

  preguntan: [
    { tipo: 'Tioamidas: afirmaciones y EXCEPTO (cae casi todos los años)',
      texto: '«Todo lo siguiente es cierto en relación a las tioamidas, EXCEPTO: a) inhiben la peroxidasa tiroidea, b) **PTU se absorbe más rápido**, c) metimazol tiene vida media de 6 h, d) PTU se administra 3 a 4 veces al día, e) **metimazol se une 70-80 % a proteínas, más seguro en las primeras semanas del embarazo** (F: es PTU el que se une 70-80 % y se prefiere en el embarazo)». «**NO es un efecto adverso de las tioamidas: agranulocitosis, hepatotoxicidad, daño renal, exantema papular, vasculitis**» (⚠ respuesta esperada: daño renal; revisa, porque la diapositiva cita nefritis como EA menos común). «Inhibe la proteólisis de tiroglobulina: metimazol / amiodarona / ácido iopanoico / yoduro / PTU» (**yoduro**). «El **metimazol se prefiere sobre PTU en la mayoría de los casos porque: tiene VM más larga y menor riesgo de hepatotoxicidad grave**». «Se prefiere en el **primer trimestre del embarazo** e hipertiroidismo, por mayor unión a proteínas y atraviesa la placenta con menos facilidad (riesgo de aplasia cutis): **PTU**».',
      trampa: 'Cambian de PTU a metimazol: **PTU** = embarazo 1.er trimestre, 3-4 veces/día, T½ 1,5 h, inhibe T4→T3, 70-80 % a proteínas. **Metimazol** = 1 vez/día, T½ 6 h, 10 veces más potente, aplasia cutis.' },
    { tipo: 'Qué inhibe la conversión T4 → T3',
      texto: '«**Inhiben la 5-deiodinasa, disminuyendo la conversión de T4 en T3**: 1. propiltiouracilo, 2. hidrocortisona, 3. ipodato, 4. yoduro» (⚠ según la diapositiva los inhibidores de T4→T3 son PTU, contrastes yodados [ipodato] y propranolol; la hidrocortisona aparece en la tormenta). «**Inhibe la conversión de T4 en T3**: 1. hidrocortisona, 2. **propranolol** (dosis altas), 3. propiltiouracilo, 4. amiodarona». «Inhiben T4→T3: 1. PTU 2. hidrocortisona 3. propranolol 4. [ipodato]». ⚠ Las claves oficiales no están disponibles: probablemente E (todos) en varias versiones.',
      trampa: 'Metimazol **no** inhibe la conversión periférica. PTU, propranolol (≥160 mg), corticoides, ipodato/iopanoico y amiodarona sí.' },
    { tipo: 'Tormenta tiroidea',
      texto: '«**No está indicado en tormenta tiroidea**: hidrocortisona, yoduro, PTU, propranolol EV, **metimazol**» y otra versión «metimazol / **amiodarona** / propranolol / yodo / PTU» (⚠ el OCR no deja ver cuál es la respuesta; revisa). «**Están indicados en tormenta tiroidea: 1. yoduro de sodio 2. Lugol 3. propranolol 160 mg 4. metimazol**».',
      trampa: 'Amiodarona (tiene yodo) **no**; PTU, yoduro/Lugol, propranolol y glucocorticoides sí. Antes de yoduro, antitiroideo (⚠).' },
    { tipo: 'Yodo radiactivo ¹³¹I (EXCEPTO y caso clínico)',
      texto: '«Todo lo siguiente es cierto en relación al ¹³¹I, EXCEPTO: destrucción de la glándula por rayos beta; **vida media 12 días (F, es 5 días)**; rango de penetración de 400 a 2000 μm; ablación glandular de 6 a 12 semanas; contraindicado en embarazo». «**Contraindicaciones del ¹³¹I: 1. menores de 30 años 2. lactancia 3. enfermedad de Graves (F) 4. embarazo**». «Efecto terapéutico del yodo radiactivo: 24 h / 5 días / 7 días / 3 semanas / **6 a 12 semanas**».',
      trampa: 'T½ del ¹³¹I = **5 días** (no 12). Tarda 6-12 semanas. Contraindicado en embarazo y lactancia; Graves **no** es contraindicación (es indicación).' },
    { tipo: 'Disminuye tamaño y vascularidad de la glándula',
      texto: '«Disminuye el tamaño y la vascularidad de la glándula tiroides: perclorato / metimazol / **yoduro de K⁺** / hidrocortisona / PTU». Se repite varias veces.',
      trampa: 'Es el **yoduro** (Lugol / KI), no el PTU ni el metimazol.' },
    { tipo: 'Levotiroxina: dosis, interacciones y especiales',
      texto: '«**Se debe administrar dosis baja de levotiroxina en: hipotiroidismo y enfermedad arterial coronaria**»; «la dosis debe **incrementarse** en: 1. hipotiroidismo y **embarazo**, 2. coma mixedematoso, 3. hipotiroidismo en lactantes, 4. [con] enfermedad arterial coronaria» (⚠ la 4 es la que pide dosis baja). «**NO disminuye la absorción de levotiroxina**: sulfato ferroso, estrógeno, hidróxido de aluminio, **omeprazol**, colestipol» (⚠ OCR; opción correcta dudosa: en la diapositiva solo Ca y Fe; el resto es de Katzung). «Interfieren la absorción de T4: omeprazol, sucralfato, estrógenos, colesevelam, hidróxido de aluminio». «Características farmacocinéticas de T4, **excepto**: absorción oral 50-80 %, producción diaria 75 μg, vida media 1 día (F, es 7 días), unión a proteínas 99,96 %, potencia 1». «**Mujer embarazada con hipotiroidismo**: se debe **incrementar la dosis de levotiroxina en 25-30 %**». «La levotiroxina (T4) se prefiere sobre T3 porque: **T4 tiene VM más larga y más estable**».',
      trampa: 'Embarazo = ↑ dosis. Cardiopatía = ↓ dosis. «Vida media 1 día» es de T3, no de T4.' },
    { tipo: 'Cruce amiodarona – tiroides',
      texto: '«Antiarrítmico clase III, bloquea canales de K⁺, por su alto contenido de yodo puede desencadenar hipo o hipertiroidismo: **amiodarona**.» «La amiodarona puede producir, por su contenido de yodo: 1. efecto **Wolff-Chaikoff** 2. efecto **Jod-Basedow** (bocio simple o multinodular) 3. hipotiroidismo transitorio 4. hipertiroidismo transitorio» (⚠ clave E probable).',
      trampa: 'Wolff-Chaikoff = exceso de yodo bloquea la síntesis (→ hipotiroidismo). Jod-Basedow = exceso de yodo en bocio nodular → hipertiroidismo.' },
    { tipo: 'Caso clínico: Graves',
      texto: '«Femenina de 30 años con palpitaciones, pérdida de peso y exoftalmos: **Graves**. ¿Tratamiento de elección para controlar el hipertiroidismo? yodo / levotiroxina / propiltiouracilo / [propranolol] / **metimazol**». (⚠ en la versión que se alcanza a leer la respuesta esperada es metimazol; PTU se reserva para embarazo 1.er trimestre y tormenta.)',
      trampa: 'No usar yodo ni levotiroxina como tratamiento de control. En no embarazadas la tioamida de elección es **metimazol**.' },
    { tipo: 'Hipotiroidismo y cretinismo / otros',
      texto: '⚠ Preguntas con tiroides y MIT/DIT, hipotiroidismo y enfermedades del eje, cretinismo, signos y síntomas aparecen en menor número (OCR). «Los inhibidores de la bomba de protones puede inhibir el metabolismo de las hormonas T3 y T4 (⚠ pregunta de otro tema)». «Radioyodo en el tratamiento del hipertiroidismo: dosis 15-30 mCi».',
      trampa: 'Si sale «hipotiroidismo secundario», TSH baja/normal con T4 baja; primario = TSH alta.' }
  ],

  consejo: [
    '🧠 **Las 5 estaciones de la fábrica**: captura (NIS) → organifica (TPO) → yoda (MIT/DIT) → acopla (T3/T4) → libera. Cada antitiroideo sabotea una: **perclorato (1), tioamidas (2-4), yoduro (5 y 2)**.',
    '🧠 **PTU vs metimazol**: PTU = **P**regnancy (embarazo 1.er trimestre), **P**eripheral T4→T3, **P**oco potente, **P**erdón 3-4 veces/día. Metimazol = 1 vez/día, 10× más potente, aplasia cutis. ⚠ regla propia de memoria.',
    '🧠 **Inhiben T4 → T3**: «**P**TU, **P**ropranolol, **P**redni/hidrocortisona, **I**podato (y amiodarona)». ⚠ regla propia.',
    '🧠 **Antes de cirugía**: tioamida + **Lugol** (menos sangrado) + propranolol. **Tormenta**: PTU + yoduro + propranolol + hidrocortisona + líquidos.',
    '🧠 **¹³¹I**: T½ **5 días**, beta destruye, ablación 6-12 semanas, **prohibido en embarazo y lactancia**, hipotiroidismo después.',
    '🧠 **Levotiroxina**: ayunas, lejos de Ca/Fe, TSH a las 4-6 semanas, ↑ dosis 25-30 % en embarazo, dosis baja si coronaria.'
  ]
});
