// 1
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses);
for (var i = 0; i < meses.length; i++) {
    document.writeln("<h1>" + meses[i] + "</h1>");
}
//Ejercicio 2
var valores = [true, 5, false, "hola", "adios", 2];
var texto1 = valores[3]; // "hola"
var texto2 = valores[4]; // "adios"

if (texto1.length > texto2.length) {
    console.log("El texto mayor es: " + texto1);
} else {
    console.log("El texto mayor es: " + texto2);
}

var booleano1 = valores[0]; // true
var booleano2 = valores[2]; // false
var resultadoTrue = booleano1 || booleano2;
console.log("Resultado Verdadero: " + resultadoTrue);
var resultadoFalse = booleano1 && booleano2;
console.log("Resultado Falso: " + resultadoFalse);
var num1 = valores[1]; 
var num2 = valores[5]; 
console.log("Suma: " + (num1 + num2));
console.log("Resta: " + (num1 - num2));
console.log("Multiplicación: " + (num1 * num2));
console.log("División: " + (num1 / num2));
console.log("Módulo (resto): " + (num1 % num2));

//ejercicio 3
var numero1 = 5;
var numero2 = 8;
if (numero1 <= numero2) {
  console.log("numero1 no es mayor que numero2");
}
if (numero2 > 0) {
  console.log("numero2 es positivo");
}
if (numero1 < 0 || numero1 != 0) {
  console.log("numero1 es negativo o distinto de cero");
}
if (++numero1 < numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

//4
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numero = prompt("Introducí tu número de DNI (sin letra):");
var letraUsuario = prompt("Introducí la letra de tu DNI (en mayúscula):");
if (numero < 0 || numero > 99999999) {
    alert("El número proporcionado no es válido");
} 
else {
    //número es válido, calculamos la letra
    //% 23 nos da el resto de la división
    var resto = numero % 23;
    var letraCorrecta = letras[resto];
    if (letraCorrecta !== letraUsuario) {
        alert("La letra que has indicado no es correcta");
    } else {
        alert("El número y la letra de DNI son correctos");
    }
}
//5
var numero = 5; 
var resultado = 1;
for (var i = numero; i > 0; i--) {
    resultado = resultado * i;
}
console.log("El factorial de " + numero + " es: " + resultado);
document.writeln("<h2>El factorial de " + numero + "! es: " + resultado + "</h2>");
//6
function determinarParidad(numero) {
    if (numero % 2 == 0) {
        return "El número " + numero + " es par";
    } else {
        return "El número " + numero + " es impar";
    }
}
var resultado = determinarParidad(15);
console.log(resultado);
document.writeln("<h2>" + resultado + "</h2>");
//7
function analizarTexto(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return "La frase está formada solo por MAYÚSCULAS.";
    } 
    else if (cadena === cadena.toLowerCase()) {
        return "La frase está formada solo por minúsculas.";
    } 
    else {
        return "La frase es una mezcla de Mayúsculas y Minúsculas.";
    }
}
var Texto = "Holuuu";
var resultado = analizarTexto(Texto);
console.log(resultado);
document.writeln("<h3>Resultado: " + resultado + "</h3>");
//8
function esPalindromo(cadena) {
    var str = cadena.toLowerCase();
    str = str.replaceAll(" ", "");
    var ArrStr = str.split("");
    var ArrStrR = [...ArrStr].reverse();
    var strInvertida = ArrStrR.join("");
    if (str === strInvertida) {
        return "Es un palíndromo";
    } else {
        return "No es un palíndromo";
    }
}
document.writeln("<h3>" + esPalindromo(frase) + "</h3>");
//10
function


