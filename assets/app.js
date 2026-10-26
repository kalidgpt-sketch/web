// Dalil: práctica del CCSE con explicaciones en árabe.
// Todo funciona en el dispositivo: el progreso se guarda en localStorage y no se envía a ningún servidor.
(function () {
  "use strict";

  var PREGUNTAS = window.DALIL_PREGUNTAS || [];
  var TEMAS = window.DALIL_TEMAS || {};
  var STORE_KEY = "dalil:v1";
  var EXAM_SIZE = 25;          // preguntas del examen real
  var EXAM_MINUTES = 45;       // duración del examen real
  var PASS_RATIO = 0.6;        // 15 de 25

  var T = {
    ar: {
      dir: "rtl", other: "Español",
      study: "تعلّم", exam: "امتحان تجريبي", fails: "أخطائي",
      showAr: "إظهار الترجمة", hideAr: "إخفاء الترجمة",
      correct: "إجابة صحيحة", wrong: "إجابة خاطئة. الصحيح هو:",
      next: "السؤال التالي", vocab: "مفردات مهمة",
      listenEs: "استمع بالإسبانية", listenAr: "استمع بالعربية",
      progress: function (a, b) { return "السؤال " + a + " من " + b; },
      examIntro: function (n, m) { return "امتحان تجريبي من " + n + " سؤالًا في " + m + " دقيقة. لا تظهر الإجابات إلا في النهاية. تنجح إذا أجبت بشكل صحيح على 60٪ على الأقل."; },
      examDemoNote: "هذه نسخة تجريبية: الامتحان يستعمل الأسئلة النموذجية المتوفرة فقط.",
      start: "ابدأ الامتحان", finish: "إنهاء وتصحيح", restart: "امتحان جديد",
      passed: "ناجح", failed: "لم تنجح بعد", reviewTitle: "مراجعة الإجابات",
      yourAnswer: "إجابتك:", noAnswer: "بدون إجابة", rightAnswer: "الصحيح:",
      noFails: "لا توجد أخطاء محفوظة بعد. تدرّب في قسم «تعلّم» وستظهر هنا الأسئلة التي أخطأت فيها.",
      practiceFails: "تدرّب على أخطائي", clearFails: "مسح القائمة",
      timeUp: "انتهى الوقت",
      stats: function (seen, total) { return "رأيت " + seen + " من " + total + " سؤالًا"; }
    },
    es: {
      dir: "ltr", other: "العربية",
      study: "Estudiar", exam: "Simulacro", fails: "Mis fallos",
      showAr: "Ver traducción al árabe", hideAr: "Ocultar traducción",
      correct: "¡Correcto!", wrong: "Incorrecto. La respuesta correcta es:",
      next: "Siguiente pregunta", vocab: "Vocabulario clave",
      listenEs: "Escuchar en español", listenAr: "Escuchar en árabe",
      progress: function (a, b) { return "Pregunta " + a + " de " + b; },
      examIntro: function (n, m) { return "Simulacro de " + n + " preguntas en " + m + " minutos. Las respuestas se corrigen al final. Apruebas con un 60 % de aciertos."; },
      examDemoNote: "Versión de demostración: el simulacro solo usa las preguntas de ejemplo disponibles.",
      start: "Empezar simulacro", finish: "Terminar y corregir", restart: "Nuevo simulacro",
      passed: "Apto", failed: "Todavía no", reviewTitle: "Repaso de respuestas",
      yourAnswer: "Tu respuesta:", noAnswer: "Sin responder", rightAnswer: "Correcta:",
      noFails: "Todavía no hay fallos guardados. Practica en «Estudiar» y aquí aparecerán las preguntas que falles.",
      practiceFails: "Practicar mis fallos", clearFails: "Vaciar la lista",
      timeUp: "Se acabó el tiempo",
      stats: function (seen, total) { return "Has visto " + seen + " de " + total + " preguntas"; }
    }
  };

  // ---------- Estado guardado en el dispositivo ----------
  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      var data = raw ? JSON.parse(raw) : null;
      if (data && typeof data === "object") return data;
    } catch (e) { /* sin almacenamiento disponible */ }
    return { lang: "ar", seen: {}, fails: [] };
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* ignorar */ }
  }
  var store = load();
  if (!store.seen) store.seen = {};
  if (!store.fails) store.fails = [];
  if (store.lang !== "es") store.lang = "ar";

  function t() { return T[store.lang]; }

  function record(q, isOk) {
    var s = store.seen[q.id] || { ok: 0, ko: 0 };
    if (isOk) s.ok++; else s.ko++;
    store.seen[q.id] = s;
    var i = store.fails.indexOf(q.id);
    if (!isOk && i === -1) store.fails.push(q.id);
    if (isOk && i !== -1) store.fails.splice(i, 1);
    save();
  }

  // ---------- Utilidades ----------
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "class") n.className = attrs[k];
      else if (k.indexOf("on") === 0) n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function shuffle(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; }
    return a;
  }
  function byId(id) { for (var i = 0; i < PREGUNTAS.length; i++) if (PREGUNTAS[i].id === id) return PREGUNTAS[i]; return null; }

  // Lectura en voz alta con las voces del propio dispositivo, si las hay.
  var canSpeak = "speechSynthesis" in window && typeof window.SpeechSynthesisUtterance === "function";
  function speak(text, lang) {
    if (!canSpeak) return;
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = lang === "ar" ? "ar-SA" : "es-ES";
      var voices = window.speechSynthesis.getVoices() || [];
      for (var i = 0; i < voices.length; i++) {
        if (voices[i].lang && voices[i].lang.toLowerCase().indexOf(lang) === 0) { u.voice = voices[i]; break; }
      }
      u.rate = 0.95;
      window.speechSynthesis.speak(u);
    } catch (e) { /* el navegador no permite audio */ }
  }
  function speakBtn(label, text, lang) {
    if (!canSpeak) return null;
    return el("button", { type: "button", "class": "btn btn-ghost speak", onclick: function () { speak(text, lang); } }, ["🔊 " + label]);
  }

  // ---------- Vistas ----------
  var view = document.getElementById("view");
  var tabs = document.getElementById("tabs");
  var langBtn = document.getElementById("langBtn");
  var current = "study";

  function applyLang() {
    document.documentElement.lang = store.lang;
    document.documentElement.dir = t().dir;
    langBtn.textContent = t().other;
    Array.prototype.forEach.call(tabs.querySelectorAll("[data-tab]"), function (b) {
      b.textContent = t()[b.getAttribute("data-tab")];
      b.setAttribute("aria-selected", String(b.getAttribute("data-tab") === current));
    });
  }

  function questionBlock(q, showAr) {
    var arBlock = el("p", { "class": "q-ar", lang: "ar", dir: "rtl", text: q.ar.q });
    arBlock.hidden = !showAr;
    var toggle = el("button", { type: "button", "class": "btn btn-ghost speak" }, [showAr ? t().hideAr : t().showAr]);
    toggle.addEventListener("click", function () {
      arBlock.hidden = !arBlock.hidden;
      toggle.textContent = arBlock.hidden ? t().showAr : t().hideAr;
    });
    return {
      node: el("div", null, [
        el("p", { "class": "q-es", lang: "es", dir: "ltr", text: q.es.q }),
        arBlock,
        el("div", { "class": "row" }, [toggle, speakBtn(t().listenEs, q.es.q, "es")])
      ]),
      arBlock: arBlock
    };
  }

  function optionButton(q, i) {
    // Si la opción es igual en los dos idiomas (cifras, siglas), se muestra una sola vez.
    var same = q.es.opts[i] === q.ar.opts[i];
    return el("button", { type: "button", "class": "opt", "data-i": String(i) }, [
      el("span", { "class": "t-es", lang: "es", dir: "ltr", text: q.es.opts[i] }),
      same ? null : el("span", { "class": "t-ar", lang: "ar", dir: "rtl", text: q.ar.opts[i] })
    ]);
  }

  // Modo estudio: corrige al momento y explica en árabe.
  var studyQueue = [];
  var studyIndex = 0;
  function startStudy(ids) {
    studyQueue = ids && ids.length ? shuffle(ids.map(byId).filter(Boolean)) : shuffle(PREGUNTAS);
    studyIndex = 0;
    current = "study";
    render();
  }
  function renderStudy() {
    if (!studyQueue.length) studyQueue = shuffle(PREGUNTAS);
    if (studyIndex >= studyQueue.length) { studyQueue = shuffle(PREGUNTAS); studyIndex = 0; }
    var q = studyQueue[studyIndex];
    var tema = TEMAS[q.tema] ? TEMAS[q.tema][store.lang] : q.tema;
    var seenCount = Object.keys(store.seen).length;
    var qb = questionBlock(q, store.lang === "ar");
    var opts = el("div", { "class": "opts" });
    var fb = el("div", { "class": "feedback", "aria-live": "polite" });
    fb.hidden = true;
    var nextBtn = el("button", { type: "button", "class": "btn btn-primary", onclick: function () { studyIndex++; render(); } }, [t().next]);
    nextBtn.hidden = true;

    q.es.opts.forEach(function (_, i) {
      var b = optionButton(q, i);
      b.addEventListener("click", function () {
        var isOk = i === q.ok;
        record(q, isOk);
        Array.prototype.forEach.call(opts.children, function (o, k) {
          o.disabled = true;
          if (k === q.ok) o.classList.add("correct");
          else if (k === i) o.classList.add("wrong");
        });
        fb.className = "feedback " + (isOk ? "ok" : "bad");
        fb.innerHTML = "";
        fb.appendChild(el("p", null, [el("strong", { text: isOk ? t().correct : t().wrong + " " + q.es.opts[q.ok] })]));
        fb.appendChild(el("p", { lang: "ar", dir: "rtl", text: q.exp.ar }));
        fb.appendChild(el("p", { lang: "es", dir: "ltr", text: q.exp.es }));
        if (q.vocab && q.vocab.length) {
          fb.appendChild(el("strong", { text: t().vocab }));
          fb.appendChild(el("ul", { "class": "vocab" }, q.vocab.map(function (v) {
            return el("li", null, [el("span", { lang: "es", dir: "ltr", text: v[0] }), el("span", { lang: "ar", dir: "rtl", text: v[1] })]);
          })));
        }
        fb.appendChild(el("div", { "class": "row" }, [speakBtn(t().listenAr, q.exp.ar, "ar"), speakBtn(t().listenEs, q.exp.es, "es")]));
        fb.hidden = false;
        nextBtn.hidden = false;
        qb.arBlock.hidden = false;
        nextBtn.focus();
      });
      opts.appendChild(b);
    });

    return el("div", { "class": "card" }, [
      el("div", { "class": "meta" }, [
        el("span", { "class": "chip", text: tema }),
        el("span", { text: t().progress(studyIndex + 1, studyQueue.length) })
      ]),
      qb.node, opts, fb,
      el("div", { "class": "row" }, [nextBtn]),
      el("p", { "class": "note", text: t().stats(seenCount, PREGUNTAS.length) })
    ]);
  }

  // Simulacro: mismas reglas que el examen, corrección al final.
  var exam = null;
  var timerId = null;
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }
  function renderExam() {
    if (!exam) {
      var n = Math.min(EXAM_SIZE, PREGUNTAS.length);
      return el("div", { "class": "card" }, [
        el("p", { text: t().examIntro(n, EXAM_MINUTES) }),
        PREGUNTAS.length < EXAM_SIZE ? el("p", { "class": "note", text: t().examDemoNote }) : null,
        el("div", { "class": "row" }, [el("button", { type: "button", "class": "btn btn-primary", onclick: function () {
          exam = { qs: shuffle(PREGUNTAS).slice(0, n), answers: {}, i: 0, ends: Date.now() + EXAM_MINUTES * 60000, done: false };
          render();
        } }, [t().start])])
      ]);
    }
    if (exam.done) return renderExamResult();

    var q = exam.qs[exam.i];
    var timer = el("span", { "class": "timer", "aria-live": "off" });
    function tick() {
      var left = Math.max(0, exam.ends - Date.now());
      var m = Math.floor(left / 60000), s = Math.floor((left % 60000) / 1000);
      timer.textContent = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
      if (left <= 0) { stopTimer(); setTimeout(finishExam, 0); }
    }
    stopTimer();
    tick();
    timerId = setInterval(tick, 1000);

    var bar = el("div", { "class": "progress" }, [el("span", { style: "width:" + Math.round((exam.i / exam.qs.length) * 100) + "%" })]);
    var opts = el("div", { "class": "opts" });
    q.es.opts.forEach(function (_, i) {
      var b = optionButton(q, i);
      if (exam.answers[q.id] === i) b.classList.add("chosen");
      b.addEventListener("click", function () {
        exam.answers[q.id] = i;
        Array.prototype.forEach.call(opts.children, function (o) { o.classList.remove("chosen"); });
        b.classList.add("chosen");
      });
      opts.appendChild(b);
    });
    var last = exam.i === exam.qs.length - 1;
    return el("div", { "class": "card" }, [
      el("div", { "class": "meta" }, [el("span", { text: t().progress(exam.i + 1, exam.qs.length) }), timer]),
      bar,
      questionBlock(q, false).node,
      opts,
      el("div", { "class": "row" }, [
        exam.i > 0 ? el("button", { type: "button", "class": "btn", onclick: function () { exam.i--; render(); } }, [store.lang === "ar" ? "→" : "←"]) : null,
        last
          ? el("button", { type: "button", "class": "btn btn-primary", onclick: finishExam }, [t().finish])
          : el("button", { type: "button", "class": "btn btn-primary", onclick: function () { exam.i++; render(); } }, [t().next])
      ])
    ]);
  }
  function finishExam() {
    if (!exam || exam.done) return;
    stopTimer();
    exam.done = true;
    exam.qs.forEach(function (q) {
      if (exam.answers.hasOwnProperty(q.id)) record(q, exam.answers[q.id] === q.ok);
      else record(q, false);
    });
    render();
  }
  function renderExamResult() {
    var right = exam.qs.filter(function (q) { return exam.answers[q.id] === q.ok; }).length;
    var total = exam.qs.length;
    var passed = right >= Math.ceil(total * PASS_RATIO);
    var timeUp = Date.now() >= exam.ends;
    return el("div", { "class": "card" }, [
      el("div", { "class": "result" }, [
        timeUp ? el("p", { "class": "note", text: t().timeUp }) : null,
        el("p", { "class": "score " + (passed ? "pass" : "fail"), text: right + " / " + total }),
        el("p", { "class": passed ? "pass" : "fail" }, [el("strong", { text: passed ? t().passed : t().failed })])
      ]),
      el("h3", { text: t().reviewTitle }),
      el("ul", { "class": "review" }, exam.qs.map(function (q) {
        var a = exam.answers.hasOwnProperty(q.id) ? exam.answers[q.id] : null;
        var ok = a === q.ok;
        return el("li", null, [
          el("div", { lang: "es", dir: "ltr" }, [el("strong", { text: q.es.q })]),
          el("div", { "class": ok ? "ok" : "bad" }, [t().yourAnswer + " ", el("span", { lang: "es", text: a === null ? t().noAnswer : q.es.opts[a] })]),
          ok ? null : el("div", null, [t().rightAnswer + " ", el("span", { lang: "es", text: q.es.opts[q.ok] })]),
          ok ? null : el("div", { "class": "note", lang: "ar", dir: "rtl", text: q.exp.ar })
        ]);
      })),
      el("div", { "class": "row" }, [el("button", { type: "button", "class": "btn btn-primary", onclick: function () { exam = null; render(); } }, [t().restart])])
    ]);
  }

  function renderFails() {
    var list = store.fails.map(byId).filter(Boolean);
    if (!list.length) return el("div", { "class": "card" }, [el("p", { "class": "empty", text: t().noFails })]);
    return el("div", { "class": "card" }, [
      el("ul", { "class": "review" }, list.map(function (q) {
        return el("li", null, [
          el("div", { lang: "es", dir: "ltr" }, [el("strong", { text: q.es.q })]),
          el("div", { "class": "note", lang: "ar", dir: "rtl", text: q.ar.q })
        ]);
      })),
      el("div", { "class": "row" }, [
        el("button", { type: "button", "class": "btn btn-primary", onclick: function () { startStudy(store.fails.slice()); } }, [t().practiceFails]),
        el("button", { type: "button", "class": "btn", onclick: function () { store.fails = []; save(); render(); } }, [t().clearFails])
      ])
    ]);
  }

  function render() {
    if (current !== "exam") stopTimer();
    applyLang();
    view.innerHTML = "";
    if (!PREGUNTAS.length) { view.appendChild(el("p", { "class": "empty", text: "No hay preguntas cargadas." })); return; }
    view.appendChild(current === "exam" ? renderExam() : current === "fails" ? renderFails() : renderStudy());
  }

  tabs.addEventListener("click", function (e) {
    var b = e.target.closest("[data-tab]");
    if (!b) return;
    current = b.getAttribute("data-tab");
    render();
  });
  langBtn.addEventListener("click", function () {
    store.lang = store.lang === "ar" ? "es" : "ar";
    save();
    render();
  });

  studyQueue = shuffle(PREGUNTAS);
  render();

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    try { navigator.serviceWorker.register("sw.js").catch(function () {}); } catch (e) { /* sin modo sin conexión */ }
  }
})();
