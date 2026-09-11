// =========================
// MENÚ HAMBURGUESA
// =========================

const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// =========================
// BARRAS DE HABILIDADES
// =========================

const skillsSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".skill-progress");

const observer = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {

        progressBars.forEach((bar) => {

            const progress = bar.dataset.progress;

            bar.style.width = progress;

        });

        observer.unobserve(skillsSection);
    }

}, {
    threshold: 0.3
});

observer.observe(skillsSection);


// =========================
// CARDS DE PROYECTOS
// =========================

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const card = button.closest(".project-card");

        card.classList.toggle("active");

        if (card.classList.contains("active")) {

            button.firstChild.textContent = "Ocultar proyecto ";

        } else {

            button.firstChild.textContent = "Ver proyecto ";

        }

    });

});


// VALIDACIÓN DEL FORMULARIO DE CONTACTO

const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");



//ENVIAR FORMULARIO

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameIsValid = validateName();
    const emailIsValid = validateEmail();
    const messageIsValid = validateMessage();

    //Mostrar mensajes de error si los campos no son válidos
    showError(nameInput, nameIsValid, "El nombre debe tener al menos 2 caracteres.");
    showError(emailInput, emailIsValid, "Por favor ingresa un correo electrónico válido.");
    showError(messageInput, messageIsValid, "El mensaje debe tener al menos 10 caracteres.");


    if (nameIsValid && emailIsValid && messageIsValid) {
        // Form is valid, you can submit it
        contactForm.submit();
    }
});



function validateName(){
    const name = nameInput.value.trim();

    if (name.length < 2) {
        return false;     
    } else {
        return true;
    }
}


function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function validateMessage() {
    const message = messageInput.value.trim();

    if (message.length < 10) {
        return false;
    } else {
        return true;
    }
}


// MOSTRAR / LIMPIAR ERROR
function showError(input, isValid, errorMessage) {

    // Buscar el .form-message perteneciente al mismo .form-group
    const formGroup = input.closest(".form-group");
    const errorElement = formGroup.querySelector(".form-message");

    if (!isValid) {
        errorElement.textContent = errorMessage;
        formGroup.classList.add("valid");
    } else {
        errorElement.textContent = "";
        formGroup.classList.remove("invalid");
    }
}