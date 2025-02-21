document.addEventListener('DOMContentLoaded', function(){

    const botaoEnviar = document.getElementById('btnenviar');

    botaoEnviar.addEventListener('click', function(event){
        const nome = document.querySelector('.containerNome input:nth-of-type(1)').value;
        const sobrenome = document.querySelector('.containerNome input:nth-of-type(2)').value;
        const email = document.querySelector('.containerEmail input').value;
        const mensagem = document.querySelector('.containerMensagem input').value;
        const contato = document.getElementById('equipeContato').checked;
        const consultaSelecionada = document.querySelector('input[name="tipoConsulta"]:checked');


        if(!nome || !sobrenome || !email || !mensagem || !consultaSelecionada){
            alert('Por favor, preencha todos os campos obrigatórios.')
            return;
        }

        const tipoConsulta = consultaSelecionada.nextSibling.textContent.trim()

        const dadosFormulario = {
            nome,
            sobrenome,
            email,
            tipoConsulta,
            mensagem,
            contato
        };

        const destinatario = "wadexah317@lxheir.com"; //enderço de email descartavel
        const assunto = encodeURIComponent("Novo Contato do Formulário");
        const corpo = encodeURIComponent(
            `Nome: ${nome} ${sobrenome}\nEmail: ${email}\nTipo de consulta: ${tipoConsulta}\nMensagem: ${mensagem}`
        );

        window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`

        console.log("Dados enviados:", dadosFormulario);
        alert("Formulário enviado com sucesso! Aguarde o contato");
    });
});