                /*ESTABELECENDO AS VARIÁVEIS */
let nome = window.document.getElementById('nome');
let email = document.querySelector('#email'); 
let assunto = document.querySelector('#assunto');

/*A variável nome já está linkada com o elemento com id=nome, vindo de Contato*/
/*Assim, é possível chamar a variável e fazer mudanças nesse elemento*/

/*O campo de NOME passa a ocupar 100% da coluna da row */
nome.style.width ='100%'
email.style.width='100%'

                /*FUNÇÕES */

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){ //Se o valor dentro de NOME, tiver um tamanho menor que três
        txt.innerHTML = 'Nome Inválido'//Para não usar um alert de nome inválido. Cria uma DIV em Contato, que mostrará o aviso
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
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
    }
}
