let nombre = 'cesar mauricio navas calderon ';
console.log(nombre);
console.log(Object(nombre));




let numero1 = 85
let numero2 = 20



let myStyle = `font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
color:#100808;
font-weight: 500;
border-radius: 10px;
background:#9FE46A;
padding: 5px;`;


function suma(numero1, numero2, myStyle) {
  let resultado = numero1 + numero2;
console.group("Funcion SUMA");
console.log(`%cEl numero1: N° ${numero1}`, myStyle);
console.log(`%cEl numero2: N° ${numero2}`, myStyle);
console.log(`%cResultado de la suma: ${resultado}`, myStyle);
console.groupEnd();

}

suma(85,20,myStyle);


function resta (numero1,numero2,myStyle) {
    let resultado2 = numero1 - numero2;
console.group  ("funcion RESTA")
console.log(`%cEl numero1: N° ${numero1}`, myStyle);
console.log(`%cEl numero2: N° ${numero2}`, myStyle);
console.log(`%cResultado de la suma: ${resultado2}`, myStyle);
console.groupEnd();
}

resta(85,20,myStyle)

function multiplicacion ( numero1,numero2,myStyle){
    let resultado3 = numero1 * numero2;
console.group  ("funcion multiplicacion")
console.log(`%cEl numero1: N° ${numero1}`, myStyle);
console.log(`%cEl numero2: N° ${numero2}`, myStyle);
console.log(`%cResultado de la resta: E° ${resultado3}`, myStyle);
console.groupEnd();
}

multiplicacion(85,20,myStyle)


function division ( numero1,numero2,myStyle) {
    let resultado4 = numero1 / numero2;
console.group  ("funcion division")
console.log(`%cEl numero1: N° ${numero1}`, myStyle);
console.log(`%cEl numero2: N° ${numero2}`, myStyle);
console.log(`%cResultado de la division: E° ${resultado4}`, myStyle);
console.groupEnd();
}

division(85,20,myStyle)

function Elevar(numero1, numero2, myStyle) {
    let resultado = numero1 ** numero2;
    console.group("Funcion Elevear");
        console.log(`%cEl numero1: N° ${numero1}`, myStyle);
        console.log(`%cEl numero2: N° ${numero2}`, myStyle);
        console.log(`%cResultado al elevar el numero:  ${resultado}`, myStyle);
    console.groupEnd();
}

Elevar(80,20,myStyle);

function Modulo (numero1,numero2,myStyle) {
let resultadodivision  = numero1 / numero2;
let  resultadoModulo =  numero1 % numero2;
        console.group("Funcion modulo");
        console.log(`%cEl numero1: N° ${numero1}`, myStyle);
        console.log(`%cEl numero2: N° ${numero2}`, myStyle);
        console.log(`%cResultado del Modulo:  ${resultadoModulo}`, myStyle);
      
        console.group  ("funcion division")
        console.log(`%cEl numero1: N° ${numero1}`, myStyle);
        console.log(`%cEl numero2: N° ${numero2}`, myStyle);
        console.log(`%cResultado de la division:  ${resultadodivision}`, myStyle);
        console.groupEnd();
}

Modulo(85,20,myStyle);

