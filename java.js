/*declarando variaveis*/
let altura;
let peso;
let imc;
// criando uma função para calcular o imc
function calcImc(){
let altura = (document.getElementById("al").value)/100;
// Converte em metros
let peso = document.getElementById("ps").value;

// Converte para numeros
altura = parseFloat(altura);
/*
tipos de dados:
int = numeros inteiros
float = de ponto flutuante, exemplo o preço de gasolina 6.27
string = texto
boolean = verdadeiro ou falso
*/
peso = parseFloat(peso);

let imc = peso / (altura * altura);/*calcular o IMC */
window.alert('Seu IMC é'+ imc.toFixed(2));/*mostrando o imc em Janela*/
}
function alternarTemas_escuro(){
    const corpo = document.body; //corpo do html
    corpo.classList.toggle("escuro");
}
function alternarTemas_claro(){
     const corpo = document.body; //corpo do html
     corpo.classList.toggle("claro");
}