// Load shared page fragments so the header and footer can be maintained separately.
document.querySelectorAll("[data-include]").forEach(async (slot) => {
  try {
    const response = await fetch(slot.dataset.include);
    if (!response.ok) throw new Error(`Could not load ${slot.dataset.include}`);
    slot.outerHTML = await response.text();
  } catch (error) {
    console.error(error);
    slot.remove();
  }
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
