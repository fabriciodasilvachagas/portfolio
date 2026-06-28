function validacao(){
    //pegando os valores dos inputs de contato.html
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let mensagem = document.getElementById("mensagem").value

    //para validação do e-mail
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //validacao
    if(!nome || !mensagem){
        alert("Preencha todos os dados corretamente!")
    }
    
    if (!regex.test(email)) {
        alert("Digite um e-mail válido!");
    }else{
        alert("Formulário enviado com sucesso!")
        nome.value = ""
        email.value = ""
        mensagem.value = ""
    }

}
