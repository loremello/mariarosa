// function soma(num1,num2){
//     return num1+num2
// }
// console.log(soma(3,6));

// function area(num1){
//     return num1**2;
// }
// console.log(area(4))
// let areaTrapezio=function(num1,num2,num3) {
//     return[num1+num2]*num3/2;
// }
// console.log(areaTrapezio(3,4,6))

// let media de valores= prompt('media de valores?')
// document.write(meia de valores)
// parseInt(prompt('media de valores?'))
let nomes=['Lucas','João','Lorena','Maria','Arthur','Julia','Nicolas','Felipe','Luiz','Gabriel','Marina','Lais','Mel','Monise','Caio','Aaron','Vinicius','Danilo','Gabriela','Geovana'];

let i=0;
while(i<nomes.length) {
    console.log(i);
    console.log(nomes[i]);
    i=i+1;
}
for (let i = 0; i < nomes.length; i++) {
    const element = nomes[i];
    console.log(i);
    console.log(nomes[i]);
    
}

let idade=parseInt(prompt('Qual é a sua idade?'))
if (idade>17) {
    console.log('pode dirigir')
    document.write(pode dirigir)
} else {
    console.log('ilegal dirigir')
    document.write(ilegal dirigir)

}