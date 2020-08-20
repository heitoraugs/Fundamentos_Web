                /*ESTABELECENDO AS VARIÁVEIS */
let nome = window.document.getElementById('nome');
let email = document.querySelector('#email'); 
let assunto = document.querySelector('#assunto');
let nomeVld = false
let emailVld= false //Variáveis para a validação dos campos
let assuntoVld= false
let mapa=document.querySelector('#mapa')

/*A variável nome já está linkada com o elemento com id=nome, vindo de Contato*/
/*Assim, é possível chamar a variável e fazer mudanças nesse elemento*/

/*O campo de NOME passa a ocupar 100% da coluna da row */
nome.style.width ='100%'
email.style.width='100%'
assunto.style.width='100%'

                /*FUNÇÕES */

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){ //Se o valor dentro de NOME, tiver um tamanho menor que três
        txt.innerHTML = 'Nome Inválido'//Para não usar um alert de nome inválido. Cria uma DIV em Contato, que mostrará o aviso
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
        nomeVld=true
    }
}
function validaEmail(){
    let txt = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){ //IndexOf faz a validação de um determinado caracter do texto. Retorna 1 (EXISTE) ou -1 (NÃO EXISTE)
        txtEmail.innerHTML = 'Email inválido' //Não esquecer de colocar o evento que chama a função, lá no Contato
        txt.style.color = 'red'
    }else{
        txt.innerHTML ='Email válido'
        txt.style.color='green'
        emailVld=true
    }
}
function validaAssunto(){
    let txt = document.querySelector('#txtAssunto')

    if(assunto.value.length >=100){
        txtAssunto.innerHTML ='Limite de carácteres ultrapassado'
        txt.style.color ='red'
        txtAssunto.style.display='block'
    }else{
        txtAssunto.style.display='none'
        assuntoVld=true
    }
}
function enviar(){
    if(nomeVld == true && emailVld==true && assuntoVld==true){
        alert('Mensagem enviado com sucesso!')
    }else{
        alert('Preencha todos os campos da mensagem!')
    }
}
function zoomImg(){
    mapa.style.width='800px'
    mapa.style.height='600px'
}

function normalImg(){
    mapa.style.width='400px'
    mapa.style.height='300px'
}
