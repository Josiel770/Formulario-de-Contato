document.addEventListener('DOMContentLoaded', function(){

    const botaoEnviar = document.getElementById('btnenviar');

    botaoEnviar.addEventListener('click', function(event){
        event.preventDefault();

        const inputsNome = document.querySelectorAll('.containerNome input');
        const nome = inputsNome[0].value;
        const sobrenome = inputsNome[1].value;
        
        const email = document.querySelector('.containerEmail input').value;
        const mensagem = document.getElementById('inputMensagem').value;
        const contato = document.getElementById('equipeContato').checked;
        const consultaSelecionada = document.querySelector('input[name="tipoConsulta"]:checked');

        let temErro = false;

        function mostrarErro(id, mensagem){
            document.getElementById(id).textContent = mensagem;
        }

        function limparErro(id){
            document.getElementById(id).textContent = '';
        }

        if(!nome){
            mostrarErro('erroNome', 'Por favor, preencha seu nome.')
            temErro = true;
        } else {
            limparErro('erroNome');
        };

        if(!sobrenome){
            mostrarErro('erroSobrenome', 'Por favor, preencha seu sobrenome.')
            temErro = true;
        } else {
            limparErro('erroSobrenome');
        };

        if(!email){
            mostrarErro('erroEmail', 'Por favor, preencha seu email.')
            temErro = true;
        } else {
            limparErro('erroEmail');
        };

        if(!mensagem){
            mostrarErro('erroMensagem', 'Por favor, escreva sua mensagem.')
            temErro = true;
        } else {
            limparErro('erroMensagem');
        };

        if(!consultaSelecionada){
            mostrarErro('erroConsulta', 'Selecione um tipo de consulta.')
            temErro = true;
        } else {
            limparErro('erroConsulta');
        };

        if(!contato){
            mostrarErro('erroContato', 'Para enviar este formulário, por favor, consinta em ser contatado.')
            temErro = true;
        } else {
            limparErro('erroContato');
        };

        if(temErro){
            return;
        }


        const tipoConsulta = consultaSelecionada.nextSibling.textContent.trim()

        console.log(tipoConsulta)

        const destinatario = "wadexah317@lxheir.com"; //enderço de email descartavel
        const assunto = encodeURIComponent("Novo Contato do Formulário");
        const corpo = encodeURIComponent(
            `Nome: ${nome} ${sobrenome}\nEmail: ${email}\nTipo de consulta: ${tipoConsulta}\nMensagem: ${mensagem}`
        );

        window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`

        alert("Formulário enviado com sucesso! Aguarde o contato");
    });
});