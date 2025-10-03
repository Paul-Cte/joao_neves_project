let cercle = document.getElementById("cercle");
let section2 = document.getElementById("section2");

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
