registrarTema({
  id: 'p2-antivirales',
  ficha: {
    fuente: 'Antivirales - Dr. Jacobs.pdf (125 págs.) + Antivirales - Dra. Crespo.pdf (11 págs., diapositivas de 2021, solo TARV, hepatitis y antigripales). Cada punto lleva (Jacobs) o (Crespo).',
    diapositivas: 'Jacobs págs. 1-124: generalidades, herpes, influenza, hepatitis B y C, COVID-19, VIH, casos. Crespo págs. 1-11: VIH (clínica, ITRN, ITRNN, IP, integrasa, fusión, entrada), antihepatitis, antiinfluenza, otros.',
    examenes: '2.º parcial 2018-2025: cae todos los años (🔥🔥): zidovudina, inhibidores de proteasa, ganciclovir/valganciclovir, aciclovir, antirretrovirales y transmisión vertical, sofosbuvir + velpatasvir, oseltamivir/zanamivir.',
    avisos: [
      '⚠ Las diapositivas de Jacobs págs. 13-14, 87 y 90 son esquemas del ciclo del VIH (imagen): su texto no se pudo leer. Las diapositivas de Crespo con tablas (págs. 3-5 y 9) salen en texto desordenado: las dosis y mutaciones se copiaron tal cual, pero verifica en la diapositiva impresa.',
      '⚠ Crespo es de 2021 (incluye estavudina, didanosina, nevirapina, esquemas viejos); Jacobs es de 2025 (esquemas actuales con INI). Si hay conflicto, para el examen lo actual es Jacobs; lo viejo de Crespo igual ha caído en exámenes.',
      '⚠ = dato que NO está en las diapositivas (lógica farmacológica, Katzung o un examen). Verifícalo antes de memorizarlo.'
    ]
  },

  diapositiva: [
    { titulo: 'Virus y blancos terapéuticos (Jacobs, págs. 2-15)', puntos: [
      '**Virus** = agente infeccioso no celular, material genético (ADN o ARN) con cápside proteica (algunos con envoltura lipídica); **parásito intracelular obligado**. Sin metabolismo propio: «en el borde de la vida».',
      '**Difícil hallar blancos sin dañar la célula huésped.** Las dianas son enzimas virales propias: polimerasas (transcriptasa reversa, RdRp), proteasas, integrasas, helicasas, neuraminidasas. No tienen pared celular.',
      '**Virus ARN** se convierten a ADN por la **transcriptasa reversa**; **virus ADN** se integran al cromosoma. Tropismo por receptor: VIH → CD4 + CCR5/CXCR4; influenza → ácido siálico; EBV → CD21; rinovirus → ICAM-1; sarampión → CD150/Nectin-4.',
      '**Etapas del ciclo como blanco**: 1) adhesión y entrada (antagonistas CCR5, enfuvirtida); 2) desnudamiento (amantadina); 3) transcripción y replicación (aciclovir, sofosbuvir); 4) ensamblaje y liberación (inhibidores de proteasa, oseltamivir).',
      '**Estrategias**: 1) inhibir la replicación sin afectar a la célula; 2) potenciar la respuesta natural (vacunas, interferón); 3) matar selectivamente células infectadas (apoptosis, LTC).',
      '**Desafíos**: pocos blancos selectivos, resistencia alta, latencia (herpes), toxicidad al huésped, arsenal pequeño frente a antibacterianos.'
    ]},
    { titulo: 'Características generales de los antivirales (Jacobs, págs. 19-37)', puntos: [
      '**Clasificación general**: inhibidores de entrada, de transcriptasa reversa, de polimerasas virales, de proteasas, de neuraminidasas y moduladores inmunes (interferones).',
      'La mayoría **inhibe la síntesis de ácidos nucleicos o la síntesis tardía de proteínas**; muchos son **antimetabolitos** (se parecen a compuestos naturales); algunos necesitan **fosforilación** por cinasas virales o del huésped para activarse.',
      '**Virostáticos** (casi todos; ej. aciclovir) inhiben la replicación y necesitan al sistema inmune; **virucidas** (destruyen partículas) son raros. No eliminan virus latentes ni los que no se replican.',
      '**Acción directa (DAA)**: sobre proteínas/enzimas virales; alta eficacia y especificidad, riesgo de resistencia (aciclovir, sofosbuvir, dolutegravir, oseltamivir, remdesivir). **Acción indirecta**: modulan al huésped (interferón, inmunoglobulinas, dexametasona, tocilizumab, palivizumab); menos resistencia, respuesta variable.',
      '**Antibióticos vs antivirales**: antibióticos tienen muchos blancos; antivirales pocos, **más riesgo de toxicidad** y dependen del **tiempo de inicio**. Toxicidad selectiva: ej. **timidina cinasa viral** como blanco de aciclovir.',
      '**FC**: absorción oral variable; algunos cruzan BHE; activación enzimática; eliminación renal o hepática. **Resistencia**: mutaciones en enzimas virales por presión selectiva (uso prolongado/inadecuado) → adherencia y combinaciones.',
      '**Inicio precoz** (ver resumen final): influenza < 48 h, herpes < 72 h, COVID-19 primeros 5 días; después el daño depende más de la respuesta inmune.'
    ]},
    { titulo: 'Antiherpéticos y virus ADN (Jacobs, págs. 38-49)', puntos: [
      '**Virus ADN relevantes**: herpesvirus (HSV-1, HSV-2, VZV, CMV, EBV), VHB, VPH, poxvirus.',
      '**Fármacos**: aciclovir, valaciclovir, famciclovir; ganciclovir, valganciclovir (CMV); **foscarnet y cidofovir** (resistencias graves). Anti-VHB: tenofovir, entecavir, lamivudina. Mecanismo: **inhibición de la ADN polimerasa viral**.',
      '**Aciclovir**: requiere **activación por la timidina cinasa viral**; se incorpora como **nucleósido falso → terminación de cadena**; alta selectividad en células infectadas, baja toxicidad. **Resistencia**: mutación de la timidina cinasa o de la ADN polimerasa viral → alternativa foscarnet o cidofovir.',
      '**Indicaciones**: herpes labial, genital, zóster, encefalitis herpética, CMV en inmunosuprimidos. Tabla: HSV/VZV → aciclovir (infecciones agudas); CMV (retinitis, colitis) → ganciclovir; hepatitis B crónica → entecavir; HSV/CMV resistentes en inmunosuprimidos → cidofovir.',
      '**FC y RAM**: buena biodisponibilidad oral (**valaciclovir > aciclovir**); excreción renal → ajustar en IR. RAMs: cefalea, náuseas, **nefrotoxicidad (alta dosis IV)**, cristaluria (diap. 113). Se usan también como profilaxis en inmunosuprimidos.',
      'Preguntas de reflexión de la clase: ¿qué harías con herpes genital en embarazada?; ¿qué antivirales en inmunocomprometidos? ⚠ (sin respuesta en la diapositiva).'
    ]},
    { titulo: 'Antigripales (Jacobs, págs. 46-48 y 82-83; Crespo, pág. 10)', puntos: [
      '**Oseltamivir (Tamiflu) y zanamivir**: inhiben la **neuraminidasa** viral (influenza A y B). **Baloxavir marboxil (Xofluza)**: inhibe la **endonucleasa cap-dependiente** del complejo polimerasa (A y B). **Amantadina**: ya no se usa por resistencia. Útiles **si se dan en las primeras 48 h**.',
      '**FC/RAM (Jacobs)**: oseltamivir oral, buena absorción; zanamivir **inhalado**; RAMs náuseas, vómitos, **broncoespasmo (zanamivir)**; resistencia baja pero emergente con mal uso.',
      '**Crespo**: oseltamivir/zanamivir = **análogos del ácido siálico**, inhibición competitiva y reversible de la neuraminidasa. **Oseltamivir**: profármaco (activado por esterasas), T½ 6-10 h, biodisponibilidad ~80 %, 75 mg c/12 h × 5 días (prevención 75 mg/día), oral, excreción renal, RAM náuseas/vómitos/dolor abdominal. **Zanamivir**: T½ 2,8 h, biodisp. 5-15 %, 10 mg c/12 h × 5 días (prevención 10 mg/día), inhalatorio, RAM tos, broncoespasmo, molestia nasal.',
      '**Peramivir** (Crespo): análogo del ciclopentano, 600 mg IV dosis única, unión a proteínas 30 %, sin metabolismo, ajuste en IR, T½ 20 h; RAM diarrea, hipersensibilidad, SSJ, eritema multiforme, alucinaciones, delirio, coma.',
      '**Amantadina y rimantadina** (Crespo): aminas tricíclicas que bloquean el **canal iónico de protones M2** e inhiben el desnudamiento del ARN; **solo influenza A**. Amantadina: T½ 12-18 h, biodisp. > 90 %, 100 mg c/12 h o 200 mg/día, protege 70-90 %; excreción sin cambios en orina. Rimantadina: T½ 24-36 h, hidroxilación/conjugación hepática.',
      '**Comparación (Jacobs)**: antiherpéticos y antigripales inhiben la replicación con blancos distintos; el inicio precoz es clave; los antiherpéticos también se usan como **profilaxis** en inmunosuprimidos.'
    ]},
    { titulo: 'Hepatitis B (Jacobs, págs. 50-53; Crespo, pág. 9)', puntos: [
      '**Jacobs**: inhibidores de la transcriptasa inversa: **tenofovir (TDF o TAF), entecavir, lamivudina (resistencia frecuente)**. **Suprimen la replicación, NO erradican el cccDNA nuclear** → tratamiento crónico con vigilancia. Objetivo: suprimir la replicación y prevenir cirrosis y carcinoma hepatocelular.',
      'FC/RAM: buena biodisponibilidad oral, eliminación renal (ajustar en IR); RAMs **osteopenia y disfunción renal (tenofovir)** → monitoreo renal.',
      '**Crespo (dosis en hepatitis B crónica)**: lamivudina 100 mg/día VO; adefovir dipivoxil 10 mg/día; entecavir 0,5-1 mg/día; tenofovir disoproxil 300 mg/día; tenofovir alafenamida 25 mg/día; telbivudina 600 mg/día; interferón alfa-2b 5 MU/día o 10 MU 3 veces/semana SC/IM; interferón alfa-2a pegilado 180 µg/semana SC (monoterapia).'
    ]},
    { titulo: 'Hepatitis C (Jacobs, págs. 59-71; Crespo, págs. 9-10)', puntos: [
      '**Antivirales de acción directa (DAA)**: sofosbuvir, velpatasvir, ledipasvir, daclatasvir, ombitasvir, dasabuvir, glecaprevir. Eficacia **RVS > 95 %**, tratamiento de **8-12 semanas**, excelente tolerancia, muchos pangenotípicos, alta barrera a la resistencia, **sin interferón ni ribavirina**.',
      '**Dianas**: **NS5B** (polimerasa ARN dependiente de ARN): sofosbuvir, dasabuvir. **NS5A**: ledipasvir, velpatasvir, ombitasvir, daclatasvir. **NS3/4A (proteasa)**: glecaprevir.',
      '**Sofosbuvir**: análogo nucleotídico de uridina; inhibe NS5B; **terminación prematura de la cadena de ARN**; activo en genotipos 1-6. **Velpatasvir**: inhibe NS5A (replicación y ensamblaje); pangenotípico. **Combinación sofosbuvir + velpatasvir: 12 semanas**, doble bloqueo, RVS > 95 %.',
      'RAMs: cefalea, fatiga, náuseas; sin ajuste renal en general; **interacciones con antiácidos, estatinas, anticonvulsivantes**. Caso de clase: genotipo 1, sin cirrosis → sofosbuvir + velpatasvir 12 semanas y medir carga viral al terminar (RVS).',
      '**Crespo (regímenes sin cirrosis)**: velpatasvir 100 mg/sofosbuvir 400 mg × 12 sem (genotipos 1-6); elbasvir/grazoprevir × 12 sem (1a, 1b, 4); ledipasvir/sofosbuvir × 12 sem (1a, 1b, 4, 5, 6); daclatasvir + sofosbuvir (1a, 1b, 2, 3); simeprevir + sofosbuvir (1a, 1b); sofosbuvir + ribavirina (2, 3). **Ribavirina** 800-1200 mg/día VO con interferón; interferón alfa-2b 3 MU 3 veces/semana, alfacon-1 9-15 µg 3 veces/semana.'
    ]},
    { titulo: 'COVID-19 (Jacobs, págs. 72-81)', puntos: [
      '**Remdesivir**: inhibe la **ARN polimerasa (RdRp)**; **IV, uso hospitalario**; pocas interacciones; **contraindicado en IR grave**; RAM: ↑ transaminasas.',
      '**Nirmatrelvir/ritonavir (Paxlovid)**: inhibidor de **proteasa** (Mpro); **oral, uso ambulatorio precoz**; **muchas interacciones (CYP3A4, por el ritonavir)**; ajuste en IR. Eficacia ~**89 %** de reducción de hospitalización. Es de **elección en ambulatorios de alto riesgo sin interacciones**.',
      '**Molnupiravir**: análogo nucleosídico, **mutagénesis letal** del ARN; casi sin interacciones; eficacia ~**30 %**; **contraindicado en embarazo y menores de 18 años**; opción cuando Paxlovid está contraindicado.',
      'Remdesivir útil en hospitalizados o cuando Paxlovid no se puede usar. Todos eficaces si se inician precozmente (primeros 5 días). Anticuerpos monoclonales: uso limitado por variantes.',
      '**Inmunomoduladores en COVID grave (acción indirecta)**: **dexametasona** (↓ inflamación y mortalidad), **tocilizumab** (anti-IL-6, casos seleccionados), anticoagulación profiláctica, soporte respiratorio.',
      '**Inhibidores de RdRp** (diana ausente en células humanas → buena selectividad): sofosbuvir (VHC), remdesivir (COVID-19).'
    ]},
    { titulo: 'VIH: ciclo y clasificación (Jacobs, págs. 85-102; Crespo, págs. 4-8)', puntos: [
      '**Ciclo y dianas**: unión/entrada (CD4/CCR5/CXCR4) → transcripción inversa → integración (integrasa) → transcripción y traducción → ensamblaje y maduración (proteasa).',
      '**Grupos (Jacobs)**: ITRN nucleósidos, ITRNN no nucleósidos, nucleótidos, **inhibidores de proteasa (IP)**, **inhibidores de entrada/fusión** (maraviroc, enfuvirtida), **inhibidores de integrasa (INI)**.',
      '**Siempre en combinación** (evita resistencia). **Tratamiento estándar = triple**: 2 ITRN + un tercer fármaco (INI, ITRNN o IP potenciado). Primera línea actual: INI + 2 ITRN (ej. dolutegravir + tenofovir + lamivudina).',
      '**Esquemas (Jacobs)**: **BIC/FTC/TAF** (bictegravir + emtricitabina + tenofovir alafenamida): una toma diaria, sin potenciador, alta barrera genética. **DTG + 3TC + TDF/TAF**: muy usado en sistemas públicos. **Darunavir potenciado (cobicistat o ritonavir) + TAF/FTC**: pacientes con mutaciones previas o falla, adherencia irregular, más efectos secundarios que INI. **Dolutegravir + lamivudina (Dovato)**: terapia dual en pacientes sin carga viral elevada ni coinfección con hepatitis B. **Cabotegravir + rilpivirina**: inyectable mensual o bimensual, para pacientes con buena supresión viral y adherencia.',
      '**Metas**: prolongar la vida y la calidad de vida; carga viral < 20-50 copias/ml, reconstitución inmune (CD4 > 500), adherencia. **No curan ni erradican.** Programa nacional: CDVIR.',
      '**Indicaciones de inicio**: síndrome de infección aguda; infección crónica sintomática o asintomática con CD4 < 350/µl (o descendiendo) o ARN VIH > 50.000 copias/ml (o en aumento); profilaxis posexposición. Consideraciones: coinfecciones (VHB, TB), embarazo y transmisión vertical, adherencia, **PrEP: tenofovir/emtricitabina**.',
      '**Monitoreo**: CD4, carga viral, perfil lipídico, enzimas hepáticas.'
    ]},
    { titulo: 'VIH: efectos adversos por familia (Jacobs, págs. 93-97, 103-104; Crespo, pág. 8)', puntos: [
      '**ITRN** (Jacobs): terminación de cadena; anemia, neuropatía, nefrotoxicidad, hipersensibilidad. **ITRNN** (efavirenz, nevirapina): hepatotoxicidad y SNC. **IP** (lopinavir/ritonavir, darunavir): inhiben la maduración; alta potencia, **interacciones (CYP3A4)**, riesgo metabólico. **INI**: muy eficaces, bien tolerados, primera línea; **↑ peso e insomnio**.',
      '**TDF vs TAF**: la toxicidad renal y ósea es mayor con TDF. Terapias inyectables exigen adherencia estricta y supresión viral previa. **Síndrome de redistribución grasa**, toxicidad hepática y renal; interacciones con anticonvulsivantes, estatinas.',
      '**Crespo, tabla de toxicidad**: **NRTI** → **toxicidad mitocondrial** (20-40 %): neuropatía periférica, miopatía, cardiomiopatía, pancreatitis, esteatosis hepática, **acidosis láctica**, mielotoxicidad, alteración tubular proximal, lipoatrofia, hiperlipemia. **NNRTI** → hipersensibilidad (15-30 %): exantema, fiebre, afectación multiorgánica. **IP** → hiperlipemia, **resistencia a la insulina**, hipertrigliceridemia, hipercolesterolemia, diabetes, lipoacumulación intraabdominal, interacciones CYP3A (25-50 %). **Inhibidores de fusión** → inflamación local en el sitio de inyección (60-70 %).',
      '**Casos de clase (Jacobs)**: 1) VIH en TARV 2 años con CV 90.000 y CD4 150 → genotipado y cambio a esquema con INI; 2) inmunocomprometido con disnea, fiebre, TAC en vidrio esmerilado y PCR+ CMV → **ganciclovir IV**; 3) hepatitis C genotipo 1 sin cirrosis → sofosbuvir + velpatasvir 12 semanas.'
    ]},
    { titulo: 'VIH – Crespo: clínica y diagnóstico (págs. 1-3)', puntos: [
      '**Epidemiología**: HSH, heterosexuales, UDP; transmisión sexual, parenteral, **vertical (embarazo, parto o lactancia)**.',
      '**Diagnóstico**: directo o indirecto; anticuerpos (ELISA, EIA); **4.ª generación**: anticuerpos + **antígeno p24** (sensibilidad 99,9 %, especificidad 99,5 %, **ventana 13-15 días**); pruebas rápidas; Western blot; PCR.',
      '**Infección aguda** (semanas 1-4): fiebre (60-75 %), astenia, mialgias, exantema, cefalea, odinofagia, adenomegalias, artralgias, diarrea. **3 síndromes**: pseudogripal, mononucleósico, febril-exantemático. Raro: meningoencefalitis, mielitis. Oportunistas graves: **neumonía por Pneumocystis jirovecii, candidiasis esofágica, retinitis por CMV**. Laboratorio: trombopenia, leucopenia, ↑ transaminasas.',
      '**Objetivos del TARV**: ↓ carga viral, ↓ transmisión, preservar el sistema inmune, mejorar la calidad de vida, evitar resistencia.'
    ]},
    { titulo: 'VIH – Crespo: ITRN (págs. 4-5)', puntos: [
      '**ITRN** (toxicidad mitocondrial: neuropatía, pancreatitis, lipoatrofia, esteatosis, acidosis láctica): abacavir, didanosina, lamivudina, estavudina, tenofovir, zidovudina, emtricitabina.',
      '**Tenofovir disoproxil (VIH y VHB)**: análogo de **adenosina**; biodisp. 25 % (39 % con comidas grasas); 300 mg/día; T½ plasmática 17 h, celular 60 h; resistencia **K65R**; RAM GI, cefalea, astenia, **falla renal, síndrome de Fanconi** (monitorizar creatinina); usable en embarazo; **no dar con probenecid ni didanosina**. Profilaxis PrEP/PEP.',
      '**Lamivudina (3TC)**: análogo de **citosina**; 150 mg c/12 h o 300 mg/día; biodisp. 80 %; T½ 2,5 h (celular 10-15,5 h); resistencia **M184V, K65R**; RAM insomnio, GI, fatiga, cefalea, neuropatía; embarazo; VIH-1 y VHB.',
      '**Abacavir**: análogo de **guanosina**; 300 mg c/12 h o 600 mg/día; biodisp. 85 % (no alterada por comidas); resistencia M184V, L74V, D67N, K65R; RAM **erupción cutánea, hipersensibilidad (HLA-B＊5701)**, náuseas.',
      '**Zidovudina (AZT)**: análogo de **desoxitimidina**; T½ 1 h; **prevención de la transmisión vertical**: embarazo (14-34 sem) 100 mg 5 veces/día, **IV en el parto** 2 mg/kg en 1 h y luego 1 mg/kg/h, recién nacido 2 mg/kg c/6 h por 6 semanas; resistencia M41L, D67N, K70R, T215F; RAM **mielosupresión, anemia macrocítica**; ↑ niveles con probenecid, fenitoína, metadona, fluconazol, ácido valproico, lamivudina.',
      '**Estavudina (d4T)**: análogo de timidina; RAM neuropatía periférica sensorial, pancreatitis, ↑ aminotransferasas, acidosis láctica, esteatosis, **atrofia lipídica**; **no dar con zidovudina**.',
      '**Didanosina (ddI)**: análogo de desoxiadenosina; absorción 30-40 % en estómago vacío; RAM **pancreatitis dependiente de dosis**, neuropatía sensitiva distal, diarrea; cambios retinianos y neuritis óptica.',
      '**Emtricitabina (FTC)**: análogo de citidina, similar a lamivudina; biodisp. 90 %, sin interferencia de alimentos, T½ 8 h (metabolitos 39 h), excreción renal sin cambios, **sin interacciones con citocromos**; poco tóxica; PEP/PrEP, embarazo, VIH y VHB. ⚠ La tabla de la diapositiva (RAM por fármaco) está desordenada: la lectura por fármaco de arriba es la más probable.'
    ]},
    { titulo: 'VIH – Crespo: ITRNN, IP, INI, fusión y entrada (págs. 5-8)', puntos: [
      '**ITRNN** (efavirenz, nevirapina, delavirdina, etravirina, rilpivirina): se unen directo a la transcriptasa reversa del VIH-1 (no son análogos). Resistencia: **K103N, Y181C** (L100I, Y188C, G190A → nevirapina/efavirenz). Metabolismo por CYP450 (**inductores moderados de CYP3A4**). **Rash a veces severo** = RAM común.',
      '**Efavirenz**: 600 mg/día VO, **en estómago vacío**; RAM: **SNC (53 % psiquiátricas: sueños vívidos, disforia, depresión, psicosis; autolimitada 4 semanas)**, erupción (27 % primeras semanas), ↑ transaminasas, **hipercolesterolemia**; **teratógeno: contraindicado en el embarazo hasta la 8.ª semana**. Baja niveles de fenobarbital, fenitoína, carbamazepina, metadona; la rifampicina baja sus niveles. T½ 40-55 h.',
      '**Nevirapina**: 200 mg/día; no depende de alimentos; RAM **erupción (16 %), Stevens-Johnson (0,3 %)**, ↑ transaminasas (14 %), hepatitis 1 % (embarazo). Evitar con rifampicina y ketoconazol. T½ 25-30 h. **Prevención de transmisión madre-hijo**: 200 mg al inicio del parto y luego 2 mg/kg × 3 días en el RN (esquema NVP + ZDV + ddI en tratamiento adulto/niño/embarazo).',
      '**Etravirina**: inductor de CYP3A4, inhibe 2C9 y 2C19; SSJ y necrólisis epidérmica tóxica. (Exámenes: ITRNN, inductor moderado de CYP3A4, inhibidor de CYP2C9/2C19, hepatotoxicidad y SSJ → ver «Lo que preguntan».)',
      '**IP**: producen **partículas virales inmaduras no funcionales**; **contraindicada la monoterapia**; metabolismo por CYP450, interacciones importantes y **todos dan intolerancia GI**; síndrome de redistribución grasa. Atazanavir, lopinavir/**ritonavir** (400/100 mg c/12 h, con alimentos), ritonavir 600 mg c/12 h (potenciador; QT prolongado, hepatitis, pancreatitis, **↑ creatinina por inhibir secreción tubular**), indinavir, darunavir, fosamprenavir, nelfinavir, saquinavir, tipranavir. Atazanavir 400 mg o 300 mg con ritonavir 100 mg c/24 h; evitar antiácidos y omeprazol.',
      '**INI (inhibidores de la transferencia de la hebra)**: **raltegravir** 400 mg c/12 h, glucuronidación, usado en resistencia, RAM dolor muscular, cefalea, náuseas. **Dolutegravir**: tomar 2 h antes o 6 h después de antiácidos y cationes (Fe, Ca, sucralfato); T½ 14 h; **↑ creatinina** (inhibe secreción tubular); baja con efavirenz, etravirina, nevirapina, rifampicina; evitar inductores (fenitoína, carbamazepina, fenobarbital, hierba de San Juan). **Elvitegravir**: CYP3A; muchas contraindicaciones (ver diapositiva).',
      '**Enfuvirtida (inhibidor de fusión)**: se une a **gp41**; inyección **subcutánea 90 mg c/12 h**; efectos locales en el sitio, hipersensibilidad, eosinofilia; sin CYP.',
      '**Maraviroc (entrada)**: se une al **CCR5 del huésped**; sustrato de CYP3A4; contraindicado en IR grave/terminal y con rifampicina; RAM infección respiratoria alta, tos, fiebre, **hepatotoxicidad precedida de hipersensibilidad**; precaución en riesgo CV (isquemia, infarto).',
      '**ARV en embarazo (Crespo)**: NRTI recomendados abacavir, emtricitabina, lamivudina, tenofovir, zidovudina; NNRTI: efavirenz, rilpivirina; IP: atazanavir/ritonavir, darunavir/ritonavir, lopinavir/ritonavir; INI: raltegravir. ⚠ la lista «recomendados/alternativos» de la diapositiva está mezclada.'
    ]},
    { titulo: 'Otros antivirales (Crespo, pág. 10) y resumen (Jacobs, págs. 111-123)', puntos: [
      '**Interferones**: VHB y VHC; también tratamiento local de condilomas acuminados. **Ribavirina**: VHC con interferón alfa; **aerosol 20 mg/ml 12-18 h al día × 3-7 días en bronquiolitis/neumonía por VSR** en niños y lactantes.',
      '**Palivizumab**: anticuerpo monoclonal humanizado para **prevención de VSR** en niños de alto riesgo (prematuros, displasia broncopulmonar); RAM IRA, fiebre, rinitis, otitis media, ↑ aminotransferasas. **Imiquimod**: modificador de respuesta inmune, tratamiento tópico de verrugas genitales externas y perineales (crema 5 %, 3 veces/semana); RAM reacciones cutáneas locales.',
      '**FC (Jacobs, ejemplos)**: aciclovir oral/IV, eliminación renal; oseltamivir oral; tenofovir oral con ajuste renal; sofosbuvir oral, metabolismo hepático; remdesivir IV hospitalario. **RAMs frecuentes**: aciclovir cefalea/náuseas/**cristaluria**; **efavirenz neuropsiquiátricos y exantemas**; tenofovir disfunción renal y osteopenia; oseltamivir náuseas/vómitos; remdesivir ↑ transaminasas.',
      '**Mecanismo por grupo**: inhibidores de polimerasa (aciclovir, sofosbuvir, remdesivir); de proteasa (lopinavir, glecaprevir); de integrasa (dolutegravir); de entrada (enfuvirtida, maraviroc); de neuraminidasa (oseltamivir); de endonucleasa (baloxavir). Retrovirales: NRTI, NNRTI, PI, INI, inhibidores de entrada.',
      '**Preguntas de cierre (sin respuesta en la diapositiva)**: ¿qué grupo requiere más monitoreo?; ¿cuándo se justifica antiviral en influenza?; ¿cómo se previene la resistencia? → respuestas en «Lo que dices».'
    ]}
  ],

  explicacion: [
    { titulo: '1. La película completa: por qué los antivirales son difíciles', p: [
      'Imagínate un ladrón que vive dentro de tu casa y usa tus propias herramientas para fabricar copias de sí mismo. Si lo atacas, rompes tus propias herramientas. Eso es un virus: **parásito intracelular obligado**, sin metabolismo propio. Por eso es difícil dar con un blanco que no dañe a la célula humana.',
      'La solución: atacar lo que **solo el virus tiene**: transcriptasa reversa, integrasa, proteasa, neuraminidasa, polimerasas ARN (RdRp). El ejemplo de oro es el **aciclovir**: solo se activa donde está la **timidina cinasa viral**, o sea, solo en la célula infectada (selectividad).',
      'Casi todos son **virostáticos**: frenan la replicación, pero no matan al virus latente. Por eso necesitas al sistema inmune y por eso el **inicio precoz** es clave: **influenza < 48 h, herpes < 72 h, COVID-19 primeros 5 días**. Después, el daño ya depende de tu respuesta inmune, no de la replicación viral.'
    ], pausa: {
      q: 'Un paciente llega con gripe de 4 días. ¿Tiene sentido el oseltamivir?',
      a: 'Poco. La diapositiva dice que sirve si se da dentro de las primeras 48 h, cuando el virus todavía se está replicando activamente. ⚠ Que igual se use en grupos de riesgo o graves es criterio clínico que no está en la diapositiva.'
    }},
    { titulo: '2. Herpes y CMV: la familia del aciclovir', p: [
      'El aciclovir es un **nucleósido falso**. Pasos: (1) la **timidina cinasa viral** le pone el primer fosfato; (2) las enzimas de la célula completan hasta trifosfato; (3) la ADN polimerasa viral lo mete en la cadena y **se corta la copia** (terminación de cadena). En la célula sana no pasa el paso 1: por eso es poco tóxico.',
      '**Resistencia**: el virus muta la timidina cinasa (ya no activa el fármaco) o la ADN polimerasa. Si pasa eso, se usan **foscarnet o cidofovir**, que no dependen de esa cinasa.',
      '**Valaciclovir** es profármaco del aciclovir con **mejor biodisponibilidad oral**; igual con **valganciclovir** respecto a ganciclovir. Para **CMV** (retinitis, colitis, trasplantados) el de elección es **ganciclovir/valganciclovir**; en **profilaxis de CMV en trasplante de órgano**, valganciclovir.',
      'Toxicidad: aciclovir se elimina por riñón → ajustar en IR; a dosis IV altas daña el riñón (cristaluria). ⚠ La mielosupresión como RAM principal del ganciclovir no está en las diapositivas, pero es la respuesta de exámenes (Katzung).',
      'Embarazada con herpes genital: la diapositiva solo plantea la pregunta. ⚠ El aciclovir es lo usual (Katzung); verifícalo con tu docente.'
    ]},
    { titulo: '3. Influenza: neuraminidasa y compañía', p: [
      'El virus nuevo necesita **soltarse de la célula** cortando el ácido siálico: lo hace la **neuraminidasa**. **Oseltamivir y zanamivir** son **análogos del ácido siálico** y bloquean esa enzima → los virus quedan pegados. **Baloxavir** bloquea otra cosa: la **endonucleasa** del complejo de la polimerasa (no deja copiar el ARN).',
      'Oseltamivir = **profármaco oral** (lo activan esterasas), 75 mg c/12 h × 5 días. Zanamivir = **inhalado**, ojo con **broncoespasmo** (⚠ cuidado en asmáticos, razonamiento clínico). Amantadina/rimantadina bloquean el canal **M2** (solo influenza A) pero **ya no se usan por resistencia**.',
      'Pregunta clásica: «análogos del ácido siálico» → **oseltamivir y zanamivir**, no amantadina.'
    ]},
    { titulo: '4. Hepatitis B y C: suprimir vs curar', p: [
      '**Hepatitis B**: tenofovir, entecavir, lamivudina inhiben la transcriptasa inversa del VHB. El virus deja una copia escondida en el núcleo, el **cccDNA**; los fármacos **no la erradican**, solo suprimen la replicación. Es tratamiento crónico: vigilas riñón y hueso (tenofovir: **osteopenia y disfunción renal**). La lamivudina tiene mucha resistencia.',
      '**Hepatitis C**: los **DAA** cambiaron la historia: de enfermedad crónica grave a **infección curable** en 8-12 semanas, con RVS > 95 %. El que debes saber: **sofosbuvir** (inhibe NS5B, la polimerasa; análogo de uridina que corta la cadena) + **velpatasvir** (inhibe NS5A). Doble golpe en dos etapas = alta barrera a la resistencia. **No necesitan interferón ni ribavirina** (eso era el esquema viejo y tóxico).',
      'Regla de examen: hepatitis C crónica, genotipo 1, sin cirrosis, carga alta → **sofosbuvir + velpatasvir** (no ribavirina ni interferón, que son indirectos/antiguos).'
    ], pausa: {
      q: '¿Por qué se puede curar la hepatitis C pero no la B?',
      a: 'El VHC es un virus ARN que se replica en el citoplasma: bloqueas la polimerasa y desaparece. El VHB deja el cccDNA en el núcleo de la célula (la diapositiva lo pregunta: «cccDNA nuclear»), que los antivirales actuales no tocan.'
    }},
    { titulo: '5. COVID-19: tres fármacos, tres lógicas', p: [
      '**Paxlovid** (nirmatrelvir + ritonavir): inhibe la **proteasa**; es oral y para ambulatorios de alto riesgo, **precoz**. El **ritonavir** no es el antiviral: es el **potenciador** (frena el CYP3A4 y mantiene alto el nirmatrelvir) y por eso trae **muchísimas interacciones**.',
      '**Remdesivir**: inhibe la **RdRp**; **IV**, en hospital; pocas interacciones; **no en IR grave**. **Molnupiravir**: análogo que mete **errores letales** (mutagénesis) en el ARN; eficacia baja (~30 %), casi sin interacciones, **contraindicado en embarazo y < 18 años** (riesgo de mutagenicidad).',
      'Orden de preferencia (Jacobs): **Paxlovid** > remdesivir (hospitalizados o si Paxlovid está contraindicado) > molnupiravir (cuando nada más sirve). En COVID grave: dexametasona, tocilizumab (anti-IL-6) y anticoagulación → son **de acción indirecta**.'
    ]},
    { titulo: '6. VIH: por qué triple terapia y cómo se razona cada grupo', p: [
      'El VIH muta muchísimo (transcriptasa reversa sin corrección). Con un solo fármaco, sale una cepa resistente en poco tiempo. Por eso **siempre combinación**: **2 ITRN + un INI** (primera línea actual: dolutegravir + tenofovir + lamivudina). Meta: **carga viral indetectable y CD4 > 500**; no cura.',
      '**Imagen por etapa**: la transcriptasa reversa pasa el ARN a ADN → **ITRN** (análogos falsos que cortan la cadena) e **ITRNN** (se pegan a la enzima y la traban). La integrasa mete el ADN en el cromosoma → **INI** (-tegravir). La proteasa corta las proteínas largas → **IP** (-navir). Entrada → **maraviroc** (bloquea el CCR5 del huésped) y **enfuvirtida** (bloquea gp41).',
      '**ITRN = toxicidad mitocondrial** (neuropatía, pancreatitis, esteatosis, acidosis láctica, lipoatrofia). Toxicidad propia: zidovudina → **mielosupresión/anemia macrocítica** (la pregunta de examen «¿qué causó las anomalías hematológicas?»); abacavir → **hipersensibilidad, pedir HLA-B＊5701**; tenofovir → **riñón (Fanconi) y hueso**; estavudina/didanosina → neuropatía y pancreatitis.',
      '**ITRNN**: efavirenz → **SNC (sueños vívidos, psicosis), rash, teratógeno en el primer trimestre, ↑ colesterol**; nevirapina → **rash, Stevens-Johnson, hepatitis**. Ambos **inducen CYP3A4** (bajan otros fármacos: metadona, anticonvulsivos).',
      '**IP**: casi todos con **ritonavir como potenciador** (inhibe CYP3A4 → sube el nivel del otro IP; la pregunta de examen del «propósito del ritonavir»). Efectos: **hiperlipidemia, resistencia a la insulina/hiperglicemia**, lipodistrofia, intolerancia GI, interacciones. **Nunca monoterapia.**',
      '**INI**: bien tolerados; **↑ peso, insomnio**; se unen a cationes (separar de antiácidos, hierro, calcio); **suben la creatinina** sin dañar el riñón (bloquean secreción tubular).',
      '**Transmisión vertical (Crespo)**: **zidovudina** (embarazo, IV en el parto, RN 6 semanas) y **nevirapina** (dosis al inicio del parto y al RN) son los clásicos del examen.'
    ], pausa: {
      q: 'Una embarazada de 6 semanas con VIH necesita TARV. ¿Efavirenz?',
      a: 'No: según Crespo es teratógeno y está contraindicado hasta la semana 8. Recomendados en embarazo: abacavir, emtricitabina, lamivudina, tenofovir, zidovudina (+ IP potenciado o raltegravir). ⚠ En la lista de la diapositiva efavirenz también aparece como «recomendado»; el slide tiene ese conflicto, pregúntalo.'
    }},
    { titulo: '7. Resumen para recordar el tema entero', p: [
      '**Herpes/CMV** → inhiben ADN polimerasa (aciclovir, ganciclovir). **Gripe** → neuraminidasa (oseltamivir, zanamivir) o endonucleasa (baloxavir). **VHB** → tenofovir/entecavir (suprimen, no curan). **VHC** → sofosbuvir + velpatasvir (curan). **COVID** → Paxlovid (proteasa), remdesivir (RdRp), molnupiravir (mutagénesis). **VIH** → combo de 3: 2 ITRN + INI.',
      'Preguntas de cierre: **más monitoreo** → antirretrovirales (renal/ósea, lípidos, CV, hematológico). **Prevenir resistencia** → combinar, adherencia, inicio precoz, no usar de más (⚠ respuestas del conjunto de la clase, no textuales).'
    ]}
  ],

  memoria: {
    columnas: ['Fármaco / grupo', 'Diana y mecanismo', 'Usos', 'Efectos adversos', 'Ojo con… (docente)'],
    filas: [
      ['Aciclovir / valaciclovir / famciclovir', 'Nucleósido falso activado por **timidina cinasa viral** → inhibe ADN polimerasa, termina la cadena', 'HSV, VZV: labial, genital, zóster, encefalitis; profilaxis en inmunosuprimidos', 'Cefalea, náuseas, **cristaluria**, nefrotoxicidad a dosis IV altas', 'Valaciclovir mejor biodisp.; resistencia por TK viral → foscarnet/cidofovir (Jacobs)'],
      ['Ganciclovir / valganciclovir', 'Inhibe ADN polimerasa viral', '**CMV**: retinitis, colitis; profilaxis en trasplante (valganciclovir)', '⚠ **Mielosupresión** (Katzung/examen)', 'Más activo contra CMV que contra otros herpesvirus (examen); caso de CMV neumonitis (Jacobs)'],
      ['Foscarnet / cidofovir', 'Inhiben ADN polimerasa sin depender de la TK', 'HSV/CMV resistentes, inmunosuprimidos', '⚠ Nefrotoxicidad (Katzung)', 'Se reservan para resistencias graves (Jacobs)'],
      ['Oseltamivir / zanamivir / peramivir', 'Análogos del ácido siálico: inhiben la **neuraminidasa**', 'Influenza A y B, **< 48 h**', 'Oseltamivir: náuseas/vómitos; zanamivir: **broncoespasmo**; peramivir: SSJ, delirio', 'Oseltamivir = profármaco oral; zanamivir inhalado; peramivir 600 mg IV DU'],
      ['Baloxavir / amantadina-rimantadina', 'Baloxavir: **endonucleasa** de la polimerasa; amantadina: bloquea **canal M2** (solo A)', 'Influenza A y B (baloxavir)', 'Amantadina: ⚠ SNC (Katzung)', 'Amantadina ya no se usa por resistencia (Jacobs)'],
      ['Tenofovir (TDF/TAF), entecavir, lamivudina', 'Inhibe transcriptasa inversa del VHB; no erradica **cccDNA**', 'Hepatitis B crónica (tenofovir también VIH, PrEP)', 'Tenofovir: **osteopenia, disfunción renal / Fanconi**', 'TAF menos tóxico que TDF; lamivudina con resistencia frecuente'],
      ['Sofosbuvir + velpatasvir (DAA)', 'Sofosbuvir inhibe **NS5B**; velpatasvir inhibe **NS5A**', 'Hepatitis C, **12 semanas**, RVS > 95 %, pangenotípico', 'Cefalea, fatiga, náuseas', 'Interacciones con antiácidos, estatinas, anticonvulsivantes; sin interferón/ribavirina'],
      ['Remdesivir / Paxlovid / molnupiravir', 'RdRp / proteasa (con ritonavir potenciador) / mutagénesis letal', 'COVID-19 (hospital / ambulatorio precoz / alternativa)', 'Remdesivir: ↑ transaminasas', 'Paxlovid: interacciones CYP3A4; molnupiravir: **no embarazo ni < 18 años**'],
      ['ITRN (zidovudina, lamivudina, abacavir, tenofovir, emtricitabina, estavudina, didanosina)', 'Análogos que terminan la cadena de la transcriptasa reversa', 'VIH (2 ITRN + 3.er fármaco); ZDV: transmisión vertical', 'Toxicidad mitocondrial: **neuropatía, pancreatitis, acidosis láctica, lipoatrofia**; ZDV: anemia/neutropenia; ABC: hipersensibilidad **HLA-B＊5701**; TDF: Fanconi', 'No d4T con ZDV; no TDF con didanosina/probenecid (Crespo)'],
      ['ITRNN (efavirenz, nevirapina, etravirina)', 'Se unen directo a la transcriptasa reversa; **inducen CYP3A4**', 'VIH (3.er fármaco)', 'Efavirenz: **SNC, rash, teratógeno**; nevirapina: **rash, SSJ, hepatitis**', 'Resistencia K103N, Y181C; efavirenz en estómago vacío (Crespo)'],
      ['IP (lopinavir/ritonavir, atazanavir, darunavir)', 'Bloquean la proteasa → viriones inmaduros; **ritonavir potenciador (inhibe CYP3A4)**', 'VIH (3.er fármaco, fallas)', '**Hiperlipidemia, hiperglicemia/resistencia a la insulina**, lipodistrofia, GI', 'Nunca monoterapia; interacciones CYP3A (Jacobs y Crespo)'],
      ['INI (dolutegravir, raltegravir, bictegravir, elvitegravir)', 'Bloquean la **integrasa** (transferencia de la hebra)', 'VIH: **primera línea actual**', '↑ peso, insomnio, ↑ creatinina', 'Separar de antiácidos y cationes (Crespo); alta barrera genética (Jacobs)'],
      ['Entrada: maraviroc / enfuvirtida', 'Maraviroc: antagonista **CCR5**; enfuvirtida: bloquea **gp41** (fusión)', 'VIH con resistencia o carga alta', 'Enfuvirtida: reacción local 60-70 %, eosinofilia; maraviroc: hepatotoxicidad', 'Enfuvirtida SC 90 mg c/12 h; maraviroc contraindicado con rifampicina (Crespo)'],
      ['Interferón, ribavirina, palivizumab, imiquimod', 'Indirectos / antimetabolito / Ac monoclonal / modulador inmune', 'VHB, VHC; VSR; verrugas genitales', 'Imiquimod: reacción cutánea local', 'Ribavirina en aerosol para VSR; palivizumab prevención en prematuros (Crespo)']
    ],
    notas: ['Inicio precoz: influenza < 48 h · herpes < 72 h · COVID primeros 5 días. Siempre en combinación: VIH (triple). Ritonavir = potenciador, no antiviral estrella. ⚠ Las RAM marcadas ⚠ no están en la diapositiva.']
  },

  preguntan: [
    { tipo: 'Zidovudina: efecto adverso y mecanismo (cae casi siempre)',
      texto: '«Hombre VIH+ con 200 CD4: a los 2 meses de iniciar TARV, leucocitos 1000/mm3 y Hb baja: ¿qué fármaco causó esas anomalías? (aciclovir, foscarnet, rimantadina, **zidovudina**)». Y «mecanismo de la zidovudina»: **inhibidor nucleósido de la transcriptasa reversa**.',
      trampa: 'No es no nucleósido ni inhibe la proteasa ni el ensamblaje. Anemia/neutropenia = zidovudina. ⚠ OCR ruidoso: contrasta en las fotos.' },
    { tipo: 'Inhibidores de proteasa: efecto más común / para qué el ritonavir',
      texto: '«Efecto secundario más probable de los IP: anemia y neutropenia · **hiperglicemia e hiperlipidemia** · acidosis láctica · neuropatía · pancreatitis». «Esquema ritonavir + lopinavir + zidovudina + didanosina: ¿propósito del ritonavir? → **mantiene niveles de lopinavir inhibiendo su metabolismo**».',
      trampa: 'Acidosis láctica y neuropatía son de los **ITRN**, no de los IP. Ritonavir no es antiviral principal, es potenciador (la clave exacta del examen: ⚠ las opciones de OCR están truncadas, razonamiento propio).' },
    { tipo: 'ITRNN y abacavir (identificar el fármaco por sus datos)',
      texto: '«ITRNN, inductor moderado de CYP3A4, inhibidor de CYP2C9 y 2C19, hepatotoxicidad y SSJ → **etravirina**/nevirapina (ver opciones; ⚠ clave por verificar)». «De los análogos nucleósidos/nucleótidos, ¿cuál requiere test de **HLA-B＊5701**? → **abacavir**». «Efectos adversos de **TDF**: Fanconi, pérdida de densidad ósea, falla renal; **no erupción**».',
      trampa: 'Etravirina: inductor de 3A4 **e inhibidor de 2C9/2C19** (Crespo, pág. 6). Nevirapina y efavirenz solo inductores. Si te listan «erupción cutánea» como RAM de TDF, es la falsa.' },
    { tipo: 'Transmisión vertical e inhibidores de entrada',
      texto: '«Antirretrovirales que evitan la transmisión vertical: lamivudina, nevirapina, zidovudina, efavirenz…». «Antirretrovirales, inhibidores de entrada: raltegravir, ibalizumab, maraviroc, enfuvirtida…».',
      trampa: 'La combinación clásica de transmisión vertical es **zidovudina + nevirapina** (+ lamivudina); efavirenz es el teratógeno. **Raltegravir es integrasa, no entrada.**' },
    { tipo: 'Aciclovir y herpes',
      texto: '«Con relación al aciclovir es verdad que: 1. convertido a aciclovir-TP por enzimas celulares · 2. **fosforilado por la timidina cinasa viral** · 3. atrapamiento selectivo en células infectadas · 4. administrado como profármaco (⚠ valaciclovir)». «Herpes genital: tratamiento precoz mejora síntomas y reduce recurrencias; aciclovir se activa por enzima viral; **valaciclovir mejor biodisponibilidad**; profilaxis en inmunocomprometidos».',
      trampa: 'El aciclovir NO es un profármaco (el valaciclovir sí). La primera fosforilación la hace la **viral**; el resto, las celulares.' },
    { tipo: 'Ganciclovir / CMV',
      texto: '«Antiviral de primera elección para retinitis por CMV en inmunocomprometidos → **ganciclovir**». «Con respecto al ganciclovir: **actividad contra todos los herpesvirus, mayor contra CMV**» (no «análogo del pirofosfato», eso es foscarnet). «Principal RAM de ganciclovir → **mielosupresión**». «Profilaxis de CMV en trasplante → **valganciclovir**». «Mayor biodisponibilidad oral → **valaciclovir**».',
      trampa: 'Foscarnet = análogo de pirofosfato. Ganciclovir: mielosupresión (no nefrotoxicidad, que es la de foscarnet/cidofovir ⚠ Katzung).' },
    { tipo: 'Antigripales',
      texto: '«Son análogos del ácido siálico: **oseltamivir, zanamivir** (no amantadina ni rimantadina)». Tipo múltiple con amantadina/rimantadina como falsos.',
      trampa: 'Amantadina/rimantadina bloquean M2 (solo influenza A), no son del ácido siálico.' },
    { tipo: 'Hepatitis C y COVID / embarazo',
      texto: '«Antiviral de elección en hepatitis C crónica genotipo 1 sin cirrosis, carga alta → **sofosbuvir + velpatasvir** (no ribavirina, interferón, lamivudina, aciclovir)». «¿Qué antiviral está contraindicado en embarazadas por riesgo de mutagenicidad? → **molnupiravir** (opciones: efavirenz, sofosbuvir, entecavir, abacavir)».',
      trampa: 'Efavirenz es teratógeno, pero la «mutagenicidad» del enunciado = molnupiravir (mutagénesis letal). Si la pregunta dice «teratogenicidad», cambia la clave.' }
  ],

  consejo: [
    '🧠 **«-vir» por sufijo**: -ciclovir = herpes (ADN polimerasa); -amivir = gripe (neuraminidasa); -buvir/-asvir = hepatitis C; -navir = proteasa; -tegravir = integrasa; -virina/-virenz = ITRNN.',
    '🧠 **Zidovudina = médula (anemia); abacavir = HLA-B＊5701; tenofovir = riñón y hueso; efavirenz = sueños vívidos + teratógeno; nevirapina = rash/SSJ; IP = lípidos y glucosa; INI = peso e insomnio.**',
    '🧠 **Ritonavir = «el que sube a los demás»** (inhibe CYP3A4): potenciador de lopinavir, darunavir y de nirmatrelvir (Paxlovid).',
    '🧠 **HCV se cura (sofosbuvir + velpatasvir, 12 sem); HBV se suprime (cccDNA).** COVID: Paxlovid (proteasa, oral) > remdesivir (RdRp, IV) > molnupiravir (mutagénico, no embarazo).',
    '🧠 **Precoz: gripe < 48 h, herpes < 72 h, COVID 5 días.** VIH: siempre triple (2 ITRN + INI) y nunca IP en monoterapia.'
  ]
});
