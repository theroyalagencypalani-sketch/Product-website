// Header year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
btn?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  btn.setAttribute("aria-expanded", open ? "true" : "false");
});

// WhatsApp deep links (auto-includes the business name)
const phone = "916380181459"; // +91 6380181459
const waURL = `https://wa.me/${phone}?text=${encodeURIComponent(
  "Hello The Royal Agency, I’d like to enquire about sanitary/tools/hardware/plumbing supplies."
)}`;
document.getElementById("whatsappLink").href = waURL;
document.getElementById("waCard").href = waURL;

// Lightweight contact form (mailto fallback)
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  // If you later add a backend, POST `data` to your API here.
  const body = [
    `Name: ${data.name}`,
    `Reply To: ${data.replyTo}`,
    `Message: ${data.message}`
  ].join("\n");

  // Mailto fallback — replace with your email if needed
  window.location.href = `mailto:?subject=${encodeURIComponent(
    "Enquiry — The Royal Agency"
  )}&body=${encodeURIComponent(body)}`;

  note.textContent = "Opening your email app…";
  form.reset();
});
