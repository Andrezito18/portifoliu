document.getElementById("enviar").addEventListener("click", function(event) {
    const nome = document.querySelector("input[name='nome']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const numero = document.querySelector("input[type='number']").value.trim();
    const mensagem = document.querySelector("textarea[name='mensagem']").value.trim();
    
    // Verifica se algum campo está vazio
    if (!nome || !email || !numero || !mensagem) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        event.preventDefault(); 
    }
});