let cercle = document.getElementById("cercle");
let section2 = document.getElementById("section2");
let section1 = document.getElementById("section1");
let section3 = document.getElementById("section3");
let section4;

let sections = [section1, section2, section3];

section2.addEventListener("mousemove", (e) => {
  const rect = section2.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  cercle.style.left = `${x}px`;
  cercle.style.top = `${y}px`;
});

section2.addEventListener("mouseleave", () => {
  cercle.style.display = "none";
});

section2.addEventListener("mouseenter", () => {
  cercle.style.display = "block";
});

// code pour le menu à droite
// pour le clic
let boutonsDuMenu = Array.from(document.getElementsByClassName("a-nav"));
boutonsDuMenu.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    boutonsDuMenu.forEach((btn) => btn.classList.remove("active"));
    element.classList.add("active");
    scrollToSection(element.getAttribute("href").substring(1));
  });
});
console.log("test");

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
//pour le changement automatique
//fonction pour changer les boutons

function setActiveButton(id) {
  boutonsDuMenu.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("href") === "#" + id) {
      btn.classList.add("active");
    }
  });
}

//on fait une fonction observer
const observer = new IntersectionObserver(
  (elementsObserves) => {
    elementsObserves.forEach((elementObserve) => {
      if (elementObserve.isIntersecting) {
        setActiveButton(elementObserve.target.id);
      }
    });
  },
  { threshold: 0.5 }
);

//on la déclance pour les sections

sections.forEach((section) => observer.observe(section));

//clique bouton fleche bas
let flecheBas = document.getElementById("span-fb");
flecheBas.addEventListener("click", () => {
  scrollToSection("section2");
  setActiveButton("section2");
});

//pour le background fixed
// const observer2 = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.style.backgroundAttachment = "fixed";
//       } else {
//         entry.target.style.backgroundAttachment = "scroll";
//       }
//     });
//   },
//   { threshold: 0.62 }
// );

// observer2.observe(section2);

// const observer3 = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.style.backgroundAttachment = "fixed";
//       } else {
//         entry.target.style.backgroundAttachment = "scroll";
//       }
//     });
//   },
//   { threshold: 0.62 }
// );
