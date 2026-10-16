// ejericio 1:

// let nota1 = 15;
// let nota2 = 18;
// let nota3 = 12;
// let nota4 = 16;

// let promedio = (nota1 + nota2 + nota3 + nota4) / 4;
// console.log("El estudiante tiene un promedio de " + promedio + " de nota");




// ejericio 2:

// let base = 10;
// let altura = 5;

// let area = base * altura;
// console.log("El area del rectangulo es " + area);




//ejericio 3:

// let base = 8
// let altura = 5
// let area = base * altura / 2

// console.log("El area del triangulo es de " + area);




// ejericio 4:
// let radio = 5;
// let area = 3.14 * radio ** 2;

// console.log("El area del circulo es " + area);




// ejericio 5:
// let numeros = [2, 6, 1, 8];
// let suma = 0;

// for (let i = 0; i < numeros.length; i++) {
    
//     suma = suma + numeros[i];
// }

// let promedio = suma / numeros.length;

// console.log("Promedio:", promedio);




// ejericio 6:

// let numeros = [1, 2, 5, 8, 9, 12, 2, 3];
// let suma = 0;

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 === 0) {
//         suma = suma + numeros[i];
//     }
// }

// console.log("Suma de pares:", suma);




// ejericio 7:
// const library = [
//     {
//         author: "Bill Gates",
//         title: "The Road Ahead",
//         status: true
//     },
//     {
//         author: "Steve Jobs",
//         title: "Walter Isaacson",
//         status: true
//     },
//     {
//         author: "Suzanne Collins",
//         title: "Mockingjay",
//         status: false
//     }
// ];

// for (let i = 0; i < library.length; i++) {
//     if (library[i].status === true) {
//         console.log("Libro:", library[i].title);
//         console.log("Autor:", library[i].author);
//     }
// }




// ejericio 8:
// let arreglo1 = [2, 5, 2, 3, 7, 2];
// let arreglo2 = [1, 5, 3, 3];

// let arregloNuevo = arreglo1.concat(arreglo2);

// console.log("Arreglo nuevo:", arregloNuevo);
// console.log(arregloNuevo.length >= 10);




// ejericio 9:
// let arreglo1 = [2, 5, 2];
// let arreglo2 = [1, 5, 3];

// let arregloNuevo = arreglo1.concat(arreglo2);

// for (let i = 0; i < arregloNuevo.length; i++) {
//     arregloNuevo[i] = arregloNuevo[i] * 2;
// }

// console.log("Arreglo nuevo:", arregloNuevo);




// ejericio 10:
// let nota = Number(prompt("Ingresa una nota del 1 al 10:"));

// if (nota < 1 || nota > 10) {
//     console.log("Error: nota fuera del rango");
// } else if (nota < 6) {
//     console.log("Reprobado");
// } else if (nota <= 8) {
//     console.log("Regular");
// } else if (nota === 9) {6
//     console.log("Bien");
// } else {
//     console.log("Excelente");
// }




// ejericio 11:
// let numero1 = Number(prompt("Indica tu primer número de lotería (1 al 50):"));
// let numero2 = Number(prompt("Indica tu segundo número de lotería (1 al 50):"));

// for (let i = 1; i <= 50; i++) {
//     if (i === numero1 || i === numero2) {
//         console.log("¡Lotería!");
//         alert("¡Lotería!");2
//     } else {
//         console.log(i);
//     }
// }



// ejericio 12:
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }



// ejericio 13:
// let antiguedad = Number(prompt("¿Cuántos años de servicio llevas trabajando?"));
// let bono;

// if (antiguedad >= 5) {
//     bono = 1000;
// } else if (antiguedad >= 1) {
//     bono = antiguedad * 100;
// } else {
//     bono = 0;
// }

// console.log("Bono: $" + bono);



// ejericio 14:
// let salario = 1500;

// for (let i = 1; i <= 6; i++) {
//     salario = salario * 1.10;
//     console.log("Año", i, "- Salario:", salario.toFixed(2));
// }

// console.log("Salario final:", salario.toFixed(2));



// ejericio 15:
// let palabras = ["manzana", "banana", "cereza", "uva", "fresa"];
// let palabraMayor = palabras[0];

// for (let i = 1; i < palabras.length; i++) {
//     if (palabras[i].length > palabraMayor.length) {
//         palabraMayor = palabras[i];
//     }
// }

// console.log("La palabra más larga es", palabraMayor);



// ejericio 16:
// let cartas = [1, 2, 3, 4, 2, 3, 5, 6, 7, 8, 1, 9, 10, 10];

// let cartasUnicas = [];

// for (let i = 0; i < cartas.length; i++) {
//     if (!cartasUnicas.includes(cartas[i])) {
//         cartasUnicas.push(cartas[i]);
//     }
// }

// console.log("Tiene un total de " + cartasUnicas.length + " cartas unicas");



// // ejericio 17:

// ejericio 18:





// ejericio 19:
// let numeros = [];
// let numero;
// 100
// do {
//     numero = Number(prompt("Ingresa los numero que deseas guardar. (Solo ingresa 0 para guardar los numeros):"));

//     if (numero !== 0) {
//         numeros.push(numero);
//     }
// } while (numero !== 0);

// alert("Números capturados: " + numeros);
// console.log("Números capturados:", numeros);




// ejericio 20: