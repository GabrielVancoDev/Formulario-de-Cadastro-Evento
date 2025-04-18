document.getElementById("formulario").addEventListener("submit", validarFormulario);

function validarFormulario(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const termos = document.getElementById("termos").checked;

  if (!nome || !email || !telefone) {
    alert("Por favor, preencha todos os campos.");
    return;
  }
}
