/* ============================================
   CMNTY GOLF — main.js
   Premium. Social. Modern.
   ============================================ */

/* ============================================
   SCROLL REVEAL
   Uses IntersectionObserver to trigger
   .fade-in animations when elements enter
   the viewport.
   ============================================ */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

/* ============================================
   CONTACT FORM SUBMISSION
   Prevents default browser submit, shows
   a success state on the button.
   Replace the body of this function with
   your actual form submission logic (e.g.
   fetch to a backend endpoint or a service
   like Formspree / EmailJS).
   ============================================ */

function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');

  // Optional: basic validation
  const inputs = form.querySelectorAll('input, textarea, select');
  let valid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = '#c0392b';
      valid = false;
    } else {
      input.style.borderColor = '';
    }
  });

  if (!valid) return;

  // Success state
  btn.textContent = 'Sent ✓';
  btn.style.background = '#2a6e2a';
  btn.style.color = '#fff';
  btn.disabled = true;

  // Optional: reset form after delay
  setTimeout(() => {
    form.reset();
    btn.textContent = 'Send Inquiry';
    btn.style.background = '';
    btn.style.color = '';
    btn.disabled = false;
  }, 4000);
}
