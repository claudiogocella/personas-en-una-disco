let capacidad : number  = 270;
let cantidadPersonas = generarNumeroAleatorio(1, capacidad);
let personas: number[] = new Array(cantidadPersonas);
let menores21 = 0;
completarEdadesPersonas(personas, cantidadPersonas);
menores21 = contarMenores(personas, cantidadPersonas);

console.log("Los menores de 21 son: " + menores21);
console.log("Los mayores de 21 son: " + (cantidadPersonas - menores21));
console.log("En total hay " + cantidadPersonas + " personas");
console.log(personas);