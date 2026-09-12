document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("riveBox");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        const parent = canvas.parentElement;
        const scaleFactor = window.devicePixelRatio || 1;
        const width = parent.clientWidth;
        const height = parent.clientHeight;

        canvas.width = width * scaleFactor;
        canvas.height = height * scaleFactor;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(scaleFactor, scaleFactor);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const riveInstance = new rive.Rive({
        src: "./assets/untitled.riv", 
        canvas: canvas,
        autoplay: true,
        stateMachines: "State Machine 1",
        onLoad: () => {
            console.log("Animação carregada!");

            const inputs = riveInstance.stateMachineInputs("State Machine 1");
            console.log("Inputs do State Machine:", inputs);

            const trigger = inputs.find(input => input.name === "Trigger 1");

            if (trigger) {
                canvas.addEventListener("click", () => {
                    console.log("Caixa clicada! Disparando Trigger 1.");
                    trigger.fire();
                });
            } else {
                console.error("Trigger 1 não encontrado. Verifique o nome no Rive.");
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.sidebar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".parallax-image");
    const navDots = document.querySelectorAll(".nav-dot");

    function highlightCurrentSection() {
        let currentSection = null;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - window.innerHeight / 3;
            const sectionBottom = sectionTop + section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = index;
            }
        });

        navDots.forEach((dot, index) => {
            dot.classList.remove("active");
            if (index === currentSection) {
                dot.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", highlightCurrentSection);
    highlightCurrentSection(); 
});



