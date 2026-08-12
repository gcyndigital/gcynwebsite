// =========================================================
// GCYN Digital — site scripts
// 1) Mobile nav toggle
// 2) Contact form validation + submit handling
// 3) Footer year
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- mobile nav ---------- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the menu after tapping a link (mobile)
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- contact form ---------- */
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');

  // ⚠️ GitHub Pages is static and cannot send email on its own.
  // Sign up for a free form backend (e.g. https://formspree.io) and
  // paste your endpoint below to make this form actually deliver messages.
  const FORM_ENDPOINT = ''; // e.g. 'https://formspree.io/f/xxxxxxx'

  if (form) {
    const fields = {
      name:  { input: document.getElementById('name'),  error: document.getElementById('nameError'),  message: 'Please enter your name.' },
      email: { input: document.getElementById('email'), error: document.getElementById('emailError'), message: 'Please enter a valid email address.' },
      brief: { input: document.getElementById('brief'), error: document.getElementById('briefError'), message: 'Tell me a little about your project.' }
    };

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateField(key) {
      const { input, error, message } = fields[key];
      const value = input.value.trim();
      let valid = true;

      if (!value) {
        valid = false;
      } else if (key === 'email' && !emailPattern.test(value)) {
        valid = false;
      }

      input.closest('.field').classList.toggle('has-error', !valid);
      error.textContent = valid ? '' : message;
      return valid;
    }

    Object.keys(fields).forEach(key => {
      fields[key].input.addEventListener('blur', () => validateField(key));
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const results = Object.keys(fields).map(validateField);
      const allValid = results.every(Boolean);

      if (!allValid) {
        statusEl.textContent = 'Please fix the highlighted fields.';
        statusEl.className = 'form-status error';
        return;
      }

      const submitBtn = form.querySelector('.form-submit');
      submitBtn.disabled = true;
      statusEl.textContent = 'Sending…';
      statusEl.className = 'form-status';

      // No backend configured yet — fall back to a mailto draft
      // so the message is never lost.
      if (!FORM_ENDPOINT) {
        const name = fields.name.input.value.trim();
        const email = fields.email.input.value.trim();
        const brief = fields.brief.input.value.trim();
        const subject = encodeURIComponent(`New project brief from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${brief}`);
        window.location.href = `mailto:hello@gacayan.com?subject=${subject}&body=${body}`;

        statusEl.textContent = 'Opening your email app to send this — thanks!';
        statusEl.className = 'form-status success';
        submitBtn.disabled = false;
        return;
      }

      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(form)
        });

        if (response.ok) {
          statusEl.textContent = "Thanks! I'll be in touch shortly.";
          statusEl.className = 'form-status success';
          form.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        statusEl.textContent = 'Something went wrong. Please email hello@gacayan.com directly.';
        statusEl.className = 'form-status error';
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

});
