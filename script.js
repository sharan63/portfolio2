
/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* Close mobile menu */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


/* =========================
   TYPING EFFECT
========================= */

const typingText = document.getElementById("typingText");

const words = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Developer",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


/* =========================
   THEME
========================= */

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon =
        themeToggle.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.className = "fa-solid fa-sun";

    } else {

        icon.className = "fa-solid fa-moon";

    }

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section");

const links =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   SKILL ANIMATION
========================= */

const skillBars =
    document.querySelectorAll(".skill-bar span");


const skillObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const width =
                    entry.target.dataset.width;

                entry.target.style.width = width;

            }

        });

    }, {
        threshold: 0.5
    });


skillBars.forEach(bar => {

    skillObserver.observe(bar);

});


/* =========================
   SCROLL TOP
========================= */

const scrollTop =
    document.getElementById("scrollTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});


scrollTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        `Thank you ${name}! Your message has been received.`
    );

    contactForm.reset();

});


/* =========================
   ANTIGRAVITY MOUSE EFFECT
========================= */

const shapes =
    document.querySelectorAll(".floating-shape");


document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 30;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 30;


    shapes.forEach((shape, index) => {

        const multiplier = (index + 1) * 0.4;

        shape.style.transform =
            `translate(${x * multiplier}px,
                       ${y * multiplier}px)`;

    });

});
