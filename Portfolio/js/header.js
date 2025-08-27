document.getElementById('header').innerHTML = `
<header class="flex flex-col items-center py-6">
  <div class="text-center leading-tight">
  <h1 class="font-sacramento text-4xl leading-tight">michelle</h1>
  <h2 class="font-quicksand text-3xl font-bold -mt-6">tamayo</h2>
  </div>

<nav class="bg-white text-black font-bold mt-4 px-8 py-4 rounded-full flex gap-6">
  <a href="index.html" class="font-quicksand">projects</a>
  <a href="about.html" class="font-quicksand">about</a>
  <a href="contacts.html" class="font-quicksand">contact</a>
</nav>
</header>
`;

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPath = link.href.split('/').pop();
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});
