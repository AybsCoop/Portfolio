document.querySelectorAll('a[href^="#"]:not(.project-item)').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Smooth scroll to target
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


fetch('https://formsubmit.co/ayoubnasrsmain@gmail.com', {
  method: 'POST',
  body: JSON.stringify({
      page: window.location.href,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
  }),
  headers: { 'Content-Type': 'application/json' },
});
