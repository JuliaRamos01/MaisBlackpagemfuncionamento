$(document).ready(() => {
    $(".chat-btn").click(() => {
        $(".chat-box").slideToggle("slow")
    })
})

let changeIcon = function (icon){

    icon.classList.toggle('fa-times-circle')
}

function exibe() {
    let campo = document.getElementById('campo').value 

    if (campo.toLowerCase() == 'cartão' || campo.toLowerCase() == 'cartao') {
        document.getElementById('escolhas-cartao').style.display = "block";
        document.getElementById('duvidas2').style.display = 'none';
    }

    else if (campo.toLowerCase() == 'cadastro') {
        document.getElementById('escolhas-cadastro').style.display = "block";
        document.getElementById('duvidas2').style.display = 'none';
    }


    else if (campo.toLowerCase() == 'aplicativo') {
        document.getElementById('escolhas-app').style.display = "block";
        document.getElementById('duvidas2').style.display = 'none';
    }


    else if (campo.toLowerCase() == 'outra dúvida' || campo.toLowerCase() == 'outra duvida') {
        document.getElementById('escolha-outra').style.display = "block";
        document.getElementById('duvidas2').style.display = 'none';
    }

    else {
        document.getElementById('erro').style.display = "block";
        document.getElementById('duvidas2').style.display = 'none';
    }
}

function exibeCartao() {
    document.getElementById('resp-cartao').style.display = 'block';
    document.getElementById('duvidas2').style.display = 'none';
    document.getElementById('erro').style.display = 'none';
}

function exibeCadastro() {
    document.getElementById('resp-cadastro').style.display = 'block';
    document.getElementById('duvidas2').style.display = 'none';
    document.getElementById('erro').style.display = 'none';
}

function exibeApp() {
    document.getElementById('resp-app').style.display = 'block';
    document.getElementById('duvidas2').style.display = 'none';
    document.getElementById('erro').style.display = 'none';
}

function exibeOutra() {
    document.getElementById('escolha-outra').style.display = 'block';
    document.getElementById('duvidas2').style.display = 'none';
    document.getElementById('erro').style.display = 'none';
}

function outraDuvida() {
    document.getElementById('duvidas2').style.display = 'block';
    document.getElementById('erro').style.display = 'none';
}