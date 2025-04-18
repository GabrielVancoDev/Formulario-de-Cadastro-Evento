const dadosSalvos = localStorage.getItem("cadastroEvento");

if (dadosSalvos) {
    const dados = JSON.parse(dadosSalvos);
    const container = document.getElementById("dadosContainer");

    container.innerHTML = `
        <div class="dado">
            <p><strong>Nome:</strong> ${dados.nome}</p>
            <p><strong>E-mail:</strong> ${dados.email}</p>
            <p><strong>Telefone:</strong> ${dados.telefone}</p>
        </div>
    `;
} else {
    document.getElementById("dadosContainer").innerHTML = `
        <div class="dado">
            <p>Nenhum dado encontrado.</p>
        </div>
    `;
}