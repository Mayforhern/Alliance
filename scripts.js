<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Example function for handling link clicks
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default behavior for demo purposes
        console.log(`Link clicked: ${link.href}`);
      });
    });

    // Example function for handling button clicks
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        console.log(`Button clicked: ${button.textContent}`);
      });
    });
  // scripts.js

document.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax-bg');
    const scrollY = window.scrollY;
    parallax.style.transform = `translateY(${scrollY * 0.5}px)`;
  });
});
  
</script>
