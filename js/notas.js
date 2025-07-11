alert ()
// SE TIRA UNA ALERTA EN LA PAGINA

//let cliente = Horacio
//SE DECLARA LO QUE VAYAMOS A PONER (declaro con "let" seguido de un nombre "cliente" seguido del signo "=" para poner el resultado)




let edad = 25;
let dinero = false;

if(edad => 18 || dinero) {
    console.log ("podes trabajar con nosotros")
} else {
    console.log ("no podes trabajar con nosotros");
}

// AND (&&) SE TIENE QUE CUMPLIR AMBAS CONDICIONES PARA QUE EL RESULTADO SEA "true"
// OR (||) SE TIENE QUE CUMPLIR AL MENOS UNA DE LAS CONDICIONES
// NOT (!) INVIERTE EL VALOR BOOLEANO DEL OPERADOR

////////////////// OPERADORES LOGICOS///////////////

// IGUAL (==) COMPARA SI DOS VALORES SON IGUALES IGNORANDO EL DATO

jsx console.log(2 == '2'); // true

// ESTRICTAMENTE IGUAL (===) COMPARA SI DOS VALORES SON IGUALES Y DEL MISMO TIPO

jsx console.log(2 === '2'); // false

// NO IGUAL (!) COMPARA SI DOS VALORES NO SON IGUALES IGNORANDO EL TIPO DE DATO

jsx console.log(2 != '3'); // true

// ESTRICTAMENTE NO IGUAL (!==) COMPARA SI DOS VALORES NO SON IGUALES Y NO SON DEL MISMO TIPO

jsx console.log(2 !== '2'); // true

/////////// OPERADORES DE COMPARACION////////////

// <, <=, >, >= (Menor que, Menor o igual que, Mayor que, Mayor o igual que): Utilizados para comparaciones numéricas. 

jsx console.log(3 < 4); // true console.log(5 >= 5); // true <--------------->

