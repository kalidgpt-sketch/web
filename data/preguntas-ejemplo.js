// Preguntas de EJEMPLO redactadas para la demo de Dalil.
// No son las preguntas oficiales del Instituto Cervantes. Antes de cargar el
// banco oficial, comprueba sus condiciones de reutilización (ver README).
//
// Formato de cada pregunta:
//   id, tema, tipo ("opciones" | "vf"),
//   es: { q, opts }   texto en español, tal como aparece en el examen
//   ar: { q, opts }   traducción al árabe
//   ok                índice de la respuesta correcta
//   exp: { ar, es }   explicación
//   vocab             pares [español, árabe]
window.DALIL_TEMAS = {
  instituciones: { es: "Instituciones", ar: "المؤسسات" },
  derechos: { es: "Derechos y deberes", ar: "الحقوق والواجبات" },
  territorio: { es: "Territorio", ar: "الجغرافيا والأقاليم" },
  cultura: { es: "Cultura e historia", ar: "الثقافة والتاريخ" },
  sociedad: { es: "Vida práctica", ar: "الحياة اليومية" }
};

window.DALIL_PREGUNTAS = [
  {
    id: "ej-01", tema: "instituciones", tipo: "opciones",
    es: { q: "¿En qué año se aprobó la Constitución española vigente?", opts: ["1975", "1978", "1986"] },
    ar: { q: "في أي سنة تمت الموافقة على الدستور الإسباني المعمول به حاليًا؟", opts: ["1975", "1978", "1986"] },
    ok: 1,
    exp: {
      ar: "وافق الإسبان على الدستور في استفتاء شعبي يوم 6 ديسمبر 1978، ولهذا يُحتفل بـ«يوم الدستور» في 6 ديسمبر من كل عام.",
      es: "Se aprobó en referéndum el 6 de diciembre de 1978. Por eso el 6 de diciembre es el Día de la Constitución."
    },
    vocab: [["aprobar", "يوافق / يصادق"], ["vigente", "المعمول به حاليًا"], ["referéndum", "استفتاء شعبي"]]
  },
  {
    id: "ej-02", tema: "instituciones", tipo: "opciones",
    es: { q: "¿Cuál es la forma política del Estado español?", opts: ["República federal", "Monarquía parlamentaria", "Monarquía absoluta"] },
    ar: { q: "ما هو الشكل السياسي للدولة الإسبانية؟", opts: ["جمهورية فيدرالية", "ملكية برلمانية", "ملكية مطلقة"] },
    ok: 1,
    exp: {
      ar: "تنص المادة 1 من الدستور على أن الشكل السياسي للدولة هو الملكية البرلمانية: الملك هو رئيس الدولة، أما الحكم فبيد الحكومة التي تنبثق عن البرلمان.",
      es: "El artículo 1 de la Constitución establece la monarquía parlamentaria: el Rey es el jefe del Estado y gobierna el Gobierno que surge de las Cortes."
    },
    vocab: [["forma política", "الشكل السياسي"], ["jefe del Estado", "رئيس الدولة"]]
  },
  {
    id: "ej-03", tema: "instituciones", tipo: "opciones",
    es: { q: "¿Qué dos cámaras forman las Cortes Generales?", opts: ["Congreso de los Diputados y Senado", "Senado y Tribunal Supremo", "Congreso y Consejo de Ministros"] },
    ar: { q: "ما هما المجلسان اللذان يتكوّن منهما البرلمان الإسباني (Cortes Generales)؟", opts: ["مجلس النواب ومجلس الشيوخ", "مجلس الشيوخ والمحكمة العليا", "مجلس النواب ومجلس الوزراء"] },
    ok: 0,
    exp: {
      ar: "البرلمان الإسباني يتكوّن من مجلسين: مجلس النواب (Congreso de los Diputados) ومجلس الشيوخ (Senado). المحكمة العليا جزء من السلطة القضائية، ومجلس الوزراء جزء من الحكومة.",
      es: "Las Cortes Generales tienen dos cámaras: el Congreso de los Diputados y el Senado. El Tribunal Supremo pertenece al poder judicial y el Consejo de Ministros, al Gobierno."
    },
    vocab: [["cámara", "مجلس (في البرلمان)"], ["Cortes Generales", "البرلمان الإسباني"]]
  },
  {
    id: "ej-04", tema: "instituciones", tipo: "opciones",
    es: { q: "¿Quién elige al presidente del Gobierno?", opts: ["El Rey directamente", "El Congreso de los Diputados", "El Senado"] },
    ar: { q: "من ينتخب رئيس الحكومة؟", opts: ["الملك مباشرة", "مجلس النواب", "مجلس الشيوخ"] },
    ok: 1,
    exp: {
      ar: "يقترح الملك مرشحًا، لكن مجلس النواب هو الذي يمنحه الثقة بالتصويت في جلسة «التنصيب» (investidura).",
      es: "El Rey propone un candidato, pero es el Congreso de los Diputados quien le otorga la confianza en la votación de investidura."
    },
    vocab: [["elegir", "ينتخب"], ["investidura", "التنصيب / منح الثقة"]]
  },
  {
    id: "ej-05", tema: "instituciones", tipo: "opciones",
    es: { q: "Como norma general, ¿cada cuántos años hay elecciones generales?", opts: ["Cada 2 años", "Cada 4 años", "Cada 6 años"] },
    ar: { q: "كقاعدة عامة، كل كم سنة تُجرى الانتخابات العامة؟", opts: ["كل سنتين", "كل 4 سنوات", "كل 6 سنوات"] },
    ok: 1,
    exp: {
      ar: "مدة ولاية البرلمان 4 سنوات، لكن يمكن إجراء الانتخابات قبل ذلك إذا تم حل البرلمان.",
      es: "La legislatura dura 4 años, aunque las elecciones pueden adelantarse si se disuelven las Cortes."
    },
    vocab: [["elecciones generales", "الانتخابات العامة"], ["legislatura", "الولاية التشريعية"]]
  },
  {
    id: "ej-06", tema: "derechos", tipo: "opciones",
    es: { q: "¿A partir de qué edad se puede votar en las elecciones generales?", opts: ["16 años", "18 años", "21 años"] },
    ar: { q: "ابتداءً من أي سن يمكن التصويت في الانتخابات العامة؟", opts: ["16 سنة", "18 سنة", "21 سنة"] },
    ok: 1,
    exp: {
      ar: "سن الرشد في إسبانيا هو 18 سنة (المادة 12 من الدستور)، وهو أيضًا سن التصويت في الانتخابات العامة.",
      es: "La mayoría de edad es a los 18 años (artículo 12 de la Constitución), y es también la edad para votar en las elecciones generales."
    },
    vocab: [["votar", "يصوّت"], ["mayoría de edad", "سن الرشد"]]
  },
  {
    id: "ej-07", tema: "derechos", tipo: "vf",
    es: { q: "La Constitución española reconoce la libertad religiosa.", opts: ["Verdadero", "Falso"] },
    ar: { q: "الدستور الإسباني يعترف بحرية الدين.", opts: ["صحيح", "خطأ"] },
    ok: 0,
    exp: {
      ar: "تضمن المادة 16 حرية الفكر والدين والعبادة، وتنص على أنه لا يوجد دين رسمي للدولة.",
      es: "El artículo 16 garantiza la libertad ideológica, religiosa y de culto, y establece que ninguna confesión tendrá carácter estatal."
    },
    vocab: [["libertad religiosa", "حرية الدين"], ["culto", "العبادة"]]
  },
  {
    id: "ej-08", tema: "derechos", tipo: "vf",
    es: { q: "En España la enseñanza básica es obligatoria y gratuita.", opts: ["Verdadero", "Falso"] },
    ar: { q: "في إسبانيا التعليم الأساسي إلزامي ومجاني.", opts: ["صحيح", "خطأ"] },
    ok: 0,
    exp: {
      ar: "تنص المادة 27 من الدستور على أن التعليم الأساسي إلزامي ومجاني. عمليًا، يمتد التعليم الإلزامي من 6 إلى 16 سنة.",
      es: "El artículo 27 dice que la enseñanza básica es obligatoria y gratuita. En la práctica, la escolarización obligatoria va de los 6 a los 16 años."
    },
    vocab: [["enseñanza", "التعليم"], ["obligatoria", "إلزامية"], ["gratuita", "مجانية"]]
  },
  {
    id: "ej-09", tema: "territorio", tipo: "opciones",
    es: { q: "¿Cuántas comunidades autónomas hay en España?", opts: ["15", "17", "19"] },
    ar: { q: "كم عدد «المجتمعات المستقلة» (الأقاليم ذات الحكم الذاتي) في إسبانيا؟", opts: ["15", "17", "19"] },
    ok: 1,
    exp: {
      ar: "توجد 17 مجتمعًا مستقلًا، بالإضافة إلى مدينتين مستقلتين هما سبتة ومليلية.",
      es: "Hay 17 comunidades autónomas y, además, dos ciudades autónomas: Ceuta y Melilla."
    },
    vocab: [["comunidad autónoma", "مجتمع مستقل / إقليم ذو حكم ذاتي"]]
  },
  {
    id: "ej-10", tema: "territorio", tipo: "opciones",
    es: { q: "¿Cuáles son las dos ciudades autónomas de España?", opts: ["Ceuta y Melilla", "Cádiz y Málaga", "Las Palmas y Palma"] },
    ar: { q: "ما هما المدينتان المستقلتان في إسبانيا؟", opts: ["سبتة ومليلية", "قادس ومالقة", "لاس بالماس وبالما"] },
    ok: 0,
    exp: {
      ar: "سبتة (Ceuta) ومليلية (Melilla) مدينتان تتمتعان بالحكم الذاتي وتقعان في شمال إفريقيا.",
      es: "Ceuta y Melilla son ciudades autónomas situadas en el norte de África."
    },
    vocab: [["ciudad autónoma", "مدينة مستقلة"]]
  },
  {
    id: "ej-11", tema: "territorio", tipo: "opciones",
    es: { q: "¿Qué río pasa por Sevilla?", opts: ["Ebro", "Tajo", "Guadalquivir"] },
    ar: { q: "أي نهر يمر بمدينة إشبيلية؟", opts: ["إيبرو (Ebro)", "تاجه (Tajo)", "الوادي الكبير (Guadalquivir)"] },
    ok: 2,
    exp: {
      ar: "اسم «Guadalquivir» أصله عربي: «الوادي الكبير». يمر بقرطبة وإشبيلية ويصب في المحيط الأطلسي.",
      es: "El nombre Guadalquivir viene del árabe «al-wadi al-kabir», el río grande. Pasa por Córdoba y Sevilla y desemboca en el océano Atlántico."
    },
    vocab: [["río", "نهر"], ["desembocar", "يصبّ"]]
  },
  {
    id: "ej-12", tema: "territorio", tipo: "opciones",
    es: { q: "¿Cuál es la montaña más alta de España?", opts: ["Mulhacén", "Teide", "Aneto"] },
    ar: { q: "ما هو أعلى جبل في إسبانيا؟", opts: ["مولاسين (Mulhacén)", "تيدي (Teide)", "أنيتو (Aneto)"] },
    ok: 1,
    exp: {
      ar: "جبل تيدي في جزيرة تينيريفي (جزر الكناري) يبلغ ارتفاعه نحو 3.715 مترًا، وهو الأعلى في إسبانيا. أما مولاسين فهو الأعلى في شبه الجزيرة الإيبيرية.",
      es: "El Teide, en Tenerife (Canarias), mide unos 3.715 metros y es el más alto de España. El Mulhacén es el más alto de la península."
    },
    vocab: [["montaña", "جبل"], ["península", "شبه جزيرة"]]
  },
  {
    id: "ej-13", tema: "cultura", tipo: "opciones",
    es: { q: "¿Quién escribió «Don Quijote de la Mancha»?", opts: ["Lope de Vega", "Miguel de Cervantes", "Federico García Lorca"] },
    ar: { q: "من كتب رواية «دون كيخوتي دي لا مانتشا»؟", opts: ["لوبي دي بيغا", "ميغيل دي ثيربانتس", "فيديريكو غارسيا لوركا"] },
    ok: 1,
    exp: {
      ar: "كتبها ميغيل دي ثيربانتس، ونُشر الجزء الأول سنة 1605. ومن اسمه جاء اسم «معهد ثيربانتس» الذي ينظّم امتحان CCSE.",
      es: "La escribió Miguel de Cervantes; la primera parte se publicó en 1605. De su nombre viene el del Instituto Cervantes, que organiza la prueba CCSE."
    },
    vocab: [["escribir", "يكتب"], ["novela", "رواية"]]
  },
  {
    id: "ej-14", tema: "cultura", tipo: "opciones",
    es: { q: "¿Qué se celebra el 12 de octubre?", opts: ["El Día de la Constitución", "La Fiesta Nacional de España", "El Día del Trabajo"] },
    ar: { q: "بماذا يُحتفل يوم 12 أكتوبر؟", opts: ["يوم الدستور", "العيد الوطني لإسبانيا", "عيد العمال"] },
    ok: 1,
    exp: {
      ar: "12 أكتوبر هو العيد الوطني لإسبانيا (Fiesta Nacional). يوم الدستور هو 6 ديسمبر، وعيد العمال هو 1 مايو.",
      es: "El 12 de octubre es la Fiesta Nacional de España. El Día de la Constitución es el 6 de diciembre y el Día del Trabajo, el 1 de mayo."
    },
    vocab: [["celebrar", "يحتفل"], ["fiesta nacional", "العيد الوطني"]]
  },
  {
    id: "ej-15", tema: "cultura", tipo: "vf",
    es: { q: "El castellano es la lengua española oficial del Estado.", opts: ["Verdadero", "Falso"] },
    ar: { q: "القشتالية (الإسبانية) هي اللغة الرسمية للدولة.", opts: ["صحيح", "خطأ"] },
    ok: 0,
    exp: {
      ar: "تنص المادة 3 على أن القشتالية هي اللغة الرسمية للدولة، وأن لغات أخرى مثل الكتالانية والغاليسية والباسكية رسمية أيضًا في مجتمعاتها المستقلة.",
      es: "El artículo 3 dice que el castellano es la lengua oficial del Estado y que las demás lenguas españolas, como el catalán, el gallego o el euskera, son también oficiales en sus comunidades autónomas."
    },
    vocab: [["lengua oficial", "لغة رسمية"], ["castellano", "القشتالية / الإسبانية"]]
  },
  {
    id: "ej-16", tema: "sociedad", tipo: "opciones",
    es: { q: "¿Cuál es el teléfono único de emergencias en España y en toda la Unión Europea?", opts: ["091", "112", "010"] },
    ar: { q: "ما هو رقم الطوارئ الموحّد في إسبانيا وفي كل دول الاتحاد الأوروبي؟", opts: ["091", "112", "010"] },
    ok: 1,
    exp: {
      ar: "الرقم 112 مجاني ويعمل في كل دول الاتحاد الأوروبي. الرقم 091 خاص بالشرطة الوطنية، و010 رقم معلومات بلدية في بعض المدن.",
      es: "El 112 es gratuito y funciona en toda la Unión Europea. El 091 es el de la Policía Nacional y el 010 es un teléfono de información municipal en algunas ciudades."
    },
    vocab: [["emergencias", "الطوارئ"], ["gratuito", "مجاني"]]
  },
  {
    id: "ej-17", tema: "sociedad", tipo: "opciones",
    es: { q: "¿Qué documento de identidad tienen los ciudadanos españoles?", opts: ["NIE", "DNI", "TIE"] },
    ar: { q: "ما هي وثيقة الهوية التي يحملها المواطنون الإسبان؟", opts: ["NIE", "DNI", "TIE"] },
    ok: 1,
    exp: {
      ar: "الـ DNI هو بطاقة الهوية الوطنية للإسبان. أما NIE فهو رقم هوية الأجنبي، وTIE هي بطاقة إقامة الأجنبي.",
      es: "El DNI es el documento nacional de identidad. El NIE es el número de identidad de extranjero y la TIE, la tarjeta de identidad de extranjero."
    },
    vocab: [["documento de identidad", "وثيقة الهوية"], ["extranjero", "أجنبي"]]
  },
  {
    id: "ej-18", tema: "sociedad", tipo: "opciones",
    es: { q: "¿Dónde se hace el empadronamiento?", opts: ["En el ayuntamiento del municipio donde vives", "En una comisaría de policía", "En la Seguridad Social"] },
    ar: { q: "أين يتم التسجيل في سجل السكان (empadronamiento)؟", opts: ["في بلدية المكان الذي تسكن فيه", "في مركز للشرطة", "في الضمان الاجتماعي"] },
    ok: 0,
    exp: {
      ar: "التسجيل في سجل السكان (el padrón) يتم في بلدية (ayuntamiento) المكان الذي تسكن فيه، ويُطلب عادةً للوصول إلى خدمات مثل الصحة والتعليم.",
      es: "El empadronamiento se hace en el ayuntamiento del municipio donde vives y suele pedirse para acceder a servicios como la sanidad o la educación."
    },
    vocab: [["ayuntamiento", "البلدية"], ["empadronarse", "التسجيل في سجل السكان"]]
  }
];
