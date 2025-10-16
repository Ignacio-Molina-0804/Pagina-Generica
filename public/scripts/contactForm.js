function sendWhatsAppMessage() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;
  const telefono = "5491122334455"; // <-- CAMBIAR POR TU NÚMERO
  const texto = encodeURIComponent(
    `Hola! Soy ${nombre} (${email}).%0A%0A${mensaje}`
  );
  const url = `https://wa.me/${telefono}?text=${texto}`;
  window.open(url, "_blank");
}

function copyEmail() {
  const email = "contacto@ejemplo.com";
  navigator.clipboard.writeText(email).then(() => {
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = "Copiado!";
    setTimeout(() => (button.textContent = originalText), 2000);
  });
}
