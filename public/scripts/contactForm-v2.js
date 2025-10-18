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
  const email = "contacto@ejemplo.com"; // tu correo
  navigator.clipboard.writeText(email);

  const button = event.target; // el botón que se clickeó
  const originalText = button.textContent;

  // Cambia el texto del botón
  button.textContent = "¡Copiado!";
  button.disabled = true;
  button.classList.add("opacity-70");

  // Vuelve al texto original después de 5 segundos
  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    button.classList.remove("opacity-70");
  }, 5000);
} 
