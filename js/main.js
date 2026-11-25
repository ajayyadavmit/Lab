// Load shared fragments so navigation and footer content stay easy to customize.
const includes = [...document.querySelectorAll("[data-include]")].map(async (slot) => {
  const path = slot.dataset.include;
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Could not load ${path}`);
  slot.outerHTML = await response.text();
});

Promise.all(includes).then(() => {
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
}).catch((error) => {
  console.error(error);
});
