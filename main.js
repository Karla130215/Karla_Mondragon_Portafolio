 /* CREACIÓN DEL HEADER (Tu código) */
const header = document.createElement('header');
header.className = 'sticky-top shadow-sm';

header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
        <!-- Este es el único que debe decir tu nombre -->
        <h1 class="titulo">Desarrolladora Full Stack</h1>
        
       
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="about.html">About Me</a></li>
                <li class="nav-item"><a class="nav-link" href="proyectos.html">Proyectos</a></li>
            </ul>
        </div>
    </div>
</nav>
`;


document.body.prepend(header);

const footer = document.createElement('footer');
footer.className = 'bg-dark border-top py-4 mt-5 text-center';
footer.innerHTML = `
       <footer class="bg-dark text-white text-center py-4 mt-5">
                <div class="container">
                    <p class="mb-3">&copy; 2026 Karla | Desarrolladora Full Stack JR</p>
                    
                    <div class="d-flex justify-content-center gap-3 fs-3">
                        
                        <a href="https://www.linkedin.com/in/karladesarrollofullstack/" target="_blank" class="text-white enlace-icono">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        
                        <a href="https://github.com/Karla130215" target="_blank" class="text-white enlace-icono">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        
                        <a href="https://wa.me/525564973947" target="_blank" class="text-white enlace-icono">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                        
                        <a href="mailto:elizabe130215@email.com" class="text-white enlace-icono">
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                        
                    </div>
                </div>
            </footer>`;

document.body.appendChild(footer);

function openModal(modalId, caption) {
  let modal = document.getElementById(modalId);
  modal.style.display = "flex";
  modal.classList.add("show");
  let message = modal.querySelector(".caption");
  message.innerText = caption;
}

function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
    modal.querySelector(".caption").innerText = "";
  }, 300);
}


document.addEventListener("DOMContentLoaded", () => {
    // Buscamos tu foto por el ID que le pusimos en el HTML
    const fotoPerfil = document.getElementById("fotoPerfil");

    if (fotoPerfil) {
        fotoPerfil.addEventListener("click", () => {
            // Añadimos la clase que contiene la animación @keyframes
            fotoPerfil.classList.add("img-animada-clic");

            // Quitamos la clase cuando termine la animación (800 milisegundos)
            // para que se pueda repetir el efecto en el siguiente clic
            setTimeout(() => {
                fotoPerfil.classList.remove("img-animada-clic");
            }, 800);
        });
    }
});
 