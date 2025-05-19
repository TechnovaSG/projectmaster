function enviarMensagem() {
    const servico = document.getElementById("servico").value;
    if (!servico) {
        alert("Por favor, selecione um serviço.");
        return;
    }

    const mensagem = `Olá, gostaria de solicitar um orçamento para: ${servico}`;
    const numero = "5531991342575"; // Substitua pelo seu número com DDI e DDD
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
}