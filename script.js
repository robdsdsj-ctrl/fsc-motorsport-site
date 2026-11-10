// Back to top
const toTop = document.getElementById('to-top');
if (toTop) {
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Contact form -> mailto fallback (static hosting, no backend)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get('subject') || 'Message from fsc-motorsport.com');
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message') || ''}`
    );
    window.location.href = `mailto:info@fsc-motorsport.com?subject=${subject}&body=${body}`;
  });
}
