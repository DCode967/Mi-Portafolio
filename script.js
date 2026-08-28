//Menu Hamburguesa del nav

const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

  

});


//Barras de nivel para habilidades
const skillsSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".skill-progress");

const observer = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {

        progressBars.forEach((bar) => {

            const progress = bar.dataset.progress;

            bar.style.width = progress + "%";

        });

        observer.unobserve(skillsSection);
    }

}, {
    threshold: 0.3
});

observer.observe(skillsSection);

