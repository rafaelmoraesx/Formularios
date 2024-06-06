document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Evita que o formulário seja enviado de forma tradicional
    event.preventDefault();

    // Validação do formulário
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let assunto = document.getElementById("assunto").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome.trim() === "" || email.trim() === "" || assunto.trim() === "" || mensagem.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Aqui você pode adicionar o código para enviar os dados do formulário para o servidor
    // Por exemplo, usando XMLHttpRequest, fetch API ou outra biblioteca/framework

    // Exemplo de alerta para demonstrar que o formulário foi enviado com sucesso
    alert("O formulário foi enviado com sucesso!");
});
