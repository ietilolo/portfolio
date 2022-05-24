// Scroll page to contact_section
const contact_btn = document.querySelector("[data-button]");
const contact_section = document.querySelector("[data-scroll='contact']");
contact_btn.addEventListener("click", function () {
  console.dir(contact_section);
  window.scroll({
    top: contact_section.offsetTop,
    behavior: "smooth",
  });
});
