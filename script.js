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
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      name: "Visitor Name",
      email: "visitor@example.com",
      page: window.location.href,
      referrer: document.referrer,
  }),
})
  .then(response => {
      if (response.ok) {
          console.log('Data sent successfully!');
      } else {
          console.error('Error sending data.');
      }
  })
  .catch(error => console.error('Fetch error:', error));

