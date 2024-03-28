base ='databasevillagio.csv'
//A linha acima é alterada pelo script para coincidir com o arquivo necessário
//Configurando o regex para entender a base de dados fornecida através de csv
const { match } = require('assert')
const fs = require('fs')
const bancoCsv = base
const banco = fs.readFileSync(bancoCsv, "utf-8")
//Configurando o item que o regex irá escolher da base de dados
const regexValor = /\,\,\d+\.\d+\,/g
const matchValor = banco.match(regexValor)
//Definindo variáveis
const listaValores = [];
const listaValoresNum = []
valor = "";
cont1 = 0;
cont2 = 1;
soma = 0;
//Retirando pontos e virgulas que atrapalham na conta de valor total
for (i in matchValor) {
    listaValores.push(matchValor.slice(cont1, cont2).toString().replace(/,/g, ""))
    cont1 ++
    cont2 ++
}
//Retornando o valor para float 
for (let i = 0; i < listaValores.length; i++) {
    listaValoresNum.push(parseFloat(listaValores[i]));
}
console.log("Valores Unitários:")
console.log(listaValoresNum);
for (let i = 0; i < listaValoresNum.length; i++) {
    soma += listaValoresNum[i];
}
//Formatando o valor e imprimindo no console
somaFormatada = soma.toFixed(2)
console.log(`Valor total: R$${somaFormatada}`)
