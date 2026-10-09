
const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

document.getElementById("togglePassword").addEventListener("click", () => {
  const hidden = password.type === "password";

  password.type = hidden ? "text" : "password";

  document.getElementById("togglePassword").textContent =
    hidden ? "◎" : "◉";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  message.style.color = "#c0392b";

  if (!email.value.trim() || !password.value) {
    message.textContent = "Completa todos los campos.";
    return;
  }

  if (!email.validity.valid) {
    message.textContent = "Introduce un correo válido.";
    return;
  }

  message.style.color = "#16803c";
  message.textContent =
    "Formulario validado correctamente. Login de demostración.";
});

document.getElementById("forgotPassword").addEventListener("click", (event) => {
  event.preventDefault();
  message.style.color = "#0758df";
  message.textContent =
    "Recuperación de contraseña: función de demostración.";
});

document.getElementById("signUp").addEventListener("click", (event) => {
  event.preventDefault();
  message.style.color = "#0758df";
  message.textContent =
    "Registro de usuarios: función de demostración.";
});