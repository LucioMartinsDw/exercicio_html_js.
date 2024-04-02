document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja submetido normalmente

    // Obtém os valores dos campos A e B
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    // Verifica se o valor do campo B é maior que o valor do campo A
    if (campoB > campoA) {
        // Se for válido, exibe uma mensagem positiva
        document.getElementById('mensagem').textContent = "Formulário válido! B é maior que A.";
        document.getElementById('mensagem').style.color = "green";
    } else {
        // Se for inválido, exibe uma mensagem negativa
        document.getElementById('mensagem').textContent = "Formulário inválido! B deve ser maior que A.";
        document.getElementById('mensagem').style.color = "red";
    }
});
