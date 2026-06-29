 /* CREACIÓN DEL HEADER (Tu código) */
const header = document.createElement('header');
header.className = 'sticky-top shadow-sm';

header.innerHTML = `
   <nav class="navbar navbar-expand-lg navbar-white bg-white border-bottom py-3 shadow-sm">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav gap-3">
                    <li class="nav-item">
                        <a class="nav-link fw-bold text-dark" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="proyectos.html">Proyectos</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;


document.body.prepend(header);

const footer = document.createElement('footer');
footer.className = 'bg-white border-top py-4 mt-5 text-center';
footer.innerHTML = `
        <div class="container text-muted">
            <p class="mb-1 fw-medium" style="font-size: 0.9rem;">&copy; 2026 - Karla Elizabeth Gonzalez Mondragon</p>
            <p class="small mb-0 text-secondary">Desarrolladora Full Stack | Java & JavaScript</p>
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



 