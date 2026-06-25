/* ===== Andres Godinez — Landing · interacciones ===== */
(function () {
  'use strict';

  /* --- Slider "Sobre mí" (Quién está detrás / Divulgación tech) --- */
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide[data-slide]'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.dot[data-slide]'));
  var order = ['quien', 'divulg'];
  var current = 'quien';

  function showSlide(name) {
    current = name;
    slides.forEach(function (s) {
      var active = s.getAttribute('data-slide') === name;
      s.classList.toggle('is-active', active);
    });
    dots.forEach(function (d) {
      d.classList.toggle('is-active', d.getAttribute('data-slide') === name);
    });
  }

  function step() {
    var i = order.indexOf(current);
    showSlide(order[(i + 1) % order.length]);
  }

  var prev = document.getElementById('slidePrev');
  var next = document.getElementById('slideNext');
  if (prev) prev.addEventListener('click', step);
  if (next) next.addEventListener('click', step);
  dots.forEach(function (d) {
    d.addEventListener('click', function () { showSlide(d.getAttribute('data-slide')); });
  });

  /* --- Formulario de contacto --- */
  var form = document.getElementById('contactForm');
  var success = document.getElementById('formSuccess');
  if (form) {
    // Honeypot anti-spam (bots tienden a llenar todo)
    var hp = document.createElement('input');
    hp.type = 'text';
    hp.name = '_hp';
    hp.tabIndex = -1;
    hp.autocomplete = 'off';
    hp.setAttribute('aria-hidden', 'true');
    hp.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none;';
    form.appendChild(hp);

    var submitBtn = form.querySelector('button[type="submit"]');
    var btnText = submitBtn ? submitBtn.textContent : '';

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = {
        nombre:  ((form.elements['nombre']  || {}).value || '').trim(),
        email:   ((form.elements['email']   || {}).value || '').trim(),
        empresa: ((form.elements['empresa'] || {}).value || '').trim(),
        mensaje: ((form.elements['mensaje'] || {}).value || '').trim(),
        _hp:     ((form.elements['_hp']     || {}).value || '')
      };

      if (!data.nombre || !data.email || !data.mensaje) {
        alert('Por favor completa nombre, email y mensaje.');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        alert('Por favor revisa el correo.');
        return;
      }

      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Enviando…'; }

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(function (res) {
          return res.json().then(function (j) { return { ok: res.ok, json: j }; });
        })
        .then(function (out) {
          if (!out.ok) throw new Error((out.json && out.json.error) || 'Error al enviar');
          form.setAttribute('hidden', '');
          if (success) success.removeAttribute('hidden');
        })
        .catch(function (err) {
          console.error('[form] submit failed:', err);
          alert((err && err.message) || 'No pudimos enviar el mensaje. Intenta de nuevo.');
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = btnText; }
        });
    });
  }
})();
