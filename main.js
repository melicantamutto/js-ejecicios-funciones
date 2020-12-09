// sumar(a, b)

const a = Number(prompt('Ingrese el primer número'));
const b = Number(prompt('Ingrese el segundo número'));

const sumar = (a, b) => a + b;

// alert('Prueba suma: ' + sumar(2, 3));
// alert('Prueba suma: ' + sumar(1.2, 3.4));
// alert('Prueba suma: ' + sumar(3, -5));
alert('Suma: ' + sumar(a, b));

// restar(a, b)

const restar = (a, b) => a - b;

// alert('Prueba resta: ' + restar(3, 2));
// alert('Prueba resta: ' + restar(10, 5.5));
// alert('Prueba resta: ' + restar(3, 5));
alert('Resta: ' + restar(a, b));

// multiplicar(a, b)

const multiplicar = (a, b) => a * b;

// alert('Prueba multiplicación: ' + multiplicar(2, 3));
// alert('Prueba multiplicación: ' + multiplicar(4, 0.5));
alert('Multiplicación: ' + multiplicar(a, b));

//dividir(a, b)

const dividir = (a, b) => a / b;

// alert('Prueba división: ' + dividir(2, 3));
// alert('Prueba división: ' + dividir(1.2, 3.4));
// alert('Prueba división: ' + dividir(3, -5));
alert('División: ' + dividir(a, b));

//esPar(numero)

const num = Number(prompt('Ingresa un número'));

function esPar(num){
    const resto = num % 2;
    if (resto === 0){
        alert(`${num} es par`);
    } else{
        alert(`${num} es impar`);
    }
};

// esPar(2);
// esPar(3);
esPar(num);

//esImpar(numero)

const otroNum = Number(prompt('Ingresa otro número'));

function esImpar(otroNum){
    const resto = otroNum % 2;
    if (resto !== 0){
        alert(`${otroNum} es impar`);
    } else{
        alert(`${otroNum} es par`);
    }
};

// esImpar(3);
// esImpar(2);
esImpar(otroNum);

// calcularAreaTriangulo(base, altura)

const base = Number(prompt('Ingresa la base del triángulo'));
const altura = Number(prompt('Ingresa la altura del triángulo'));

const calcularAreaTriangulo = (base, altura) => (base * altura) /2;

// alert(calcularAreaTriangulo(3, 4));
// alert(calcularAreaTriangulo(5, 6)); 
alert(calcularAreaTriangulo(base, altura));

// gritar(str)

const texto = prompt('Ingrese un texto');

const gritar = (texto) => '¡' + texto + '!';

// alert(gritar('hola')); 
// alert(gritar('aaaaaa'));
alert(gritar(texto));

// obtenerNombreCompleto(nombre, apellido)

const nombre = prompt('Ingrese un nombre');
const apellido = prompt('Ingrese un apellido');

const obtenerNombreCompleto = (nombre, apellido) => nombre + ' ' + apellido;
 
alert(obtenerNombreCompleto(nombre, apellido));

// saludar(nombre)

const saludar = (nombre) => 'Hola ' + nombre + ', un gusto conocerte'

alert(saludar(nombre))

// saludarGritando(nombre, apellido)

const nombreCompleto = obtenerNombreCompleto(nombre, apellido);
const saludo = saludar(nombreCompleto)
const grito = gritar(saludo)

alert(grito)

// obtenerDatosDeCiudad(nombre, poblacion, pais)

const ciudad = prompt('Ingrese una ciudad');
const poblacion = prompt('Ingrese su poblacion');
const pais = prompt('Ingrese el pais');

const obtenerDatosDeCiudad = (ciudad, poblacion, pais) => 'La ciudad de ' + ciudad + ' tiene una población de ' + poblacion + ' habitantes y está ubicada en ' + pais;

alert(obtenerDatosDeCiudad(ciudad, poblacion, pais));

// convertirHorasEnSegundos(horas)

const horas = prompt('Ingrese un numero de horas');

const convertirHorasEnSegundos = (horas) => horas + ' horas son ' + (horas * 3600) + ' segundos.';

alert(convertirHorasEnSegundos(horas));

// calcularPerimetroRectangulo(ancho, alto)

const alto = Number(prompt('Ingrese un alto'));
const ancho = Number(prompt('Ingrese un ancho'));

const calcularPerimetroRectangulo = (ancho, alto) =>{
    const perimetro = (2 * alto) + (2 * ancho);
    alert('El perímetro del rectángulo es de ' + perimetro)
}

calcularPerimetroRectangulo(ancho, alto);

// calcularPorcentaje(numero, porcentaje)

const numero = Number(prompt('Ingrese un numero'));
const porcentaje = Number(prompt('Ingrese un porcentaje'));

const calcularPorcentaje = (numero, porcentaje) => numero * porcentaje / 100;

alert('El porcentaje es ' + calcularPorcentaje(numero, porcentaje));

// sumarPorcentaje(numero, porcentaje)

const porcentajeFinal = calcularPorcentaje(numero, porcentaje);

const sumarPorcentaje = (numero, porcentajeFinal) => numero + porcentajeFinal;

alert('La suma del porcentaje es ' + sumarPorcentaje(numero, porcentajeFinal));

// restarPorcentaje(numero, porcentaje)

const restarPorcentaje = (numero, porcentajeFinal) => numero - porcentajeFinal;

alert('La resta del porcentaje es ' + restarPorcentaje(numero, porcentajeFinal));

// calcularFPS(fps, minutos)

const cuadros = Number(prompt('Ingrese la cantidad de cuadros'));
const minutos = Number(prompt('Ingrese la cantidad de minutos'));

const calcularFPS = (cuadros, minutos) => (cuadros * 60) * minutos;

alert(calcularFPS(cuadros, minutos));

// obtenerCompetencia(a, b)

const rival1 = prompt('Ingrese el primer rival');
const rival2 = prompt('Ingrese el segundo rival');

const obtenerCompetencia = (rival1 ,rival2) => rival1 +' vs. ' + rival2;

alert(obtenerCompetencia(rival1, rival2));

// generarEmail(usuario, dominio)

const usuario = prompt('Ingrese una usuario');
const dominio = prompt('Ingrese su dominio');

const generarEmail = (usuario, dominio) => usuario + '@' + dominio + '.com';

alert(generarEmail(usuario, dominio));

// esMayorDeEdad(edad)

const edad = Number(prompt('Ingresa una edad'));

function esMayorDeEdad(edad){
    if (edad >= 18){
        alert(`Con ${edad} es mayor de edad`);
    } else{
        alert(`Con ${edad} es menor de edad`);
    }
};

esMayorDeEdad(edad)

// haceCalor(temperatura)

const temperatura = Number(prompt('Ingresa una temperatura'));

function haceCalor(temperatura){
    if (temperatura >= 22){
        alert(`Con ${temperatura}° hace calor`);
    } 
};

haceCalor(temperatura)

// haceFrio(temperatura)

function haceFrio(temperatura){
    if (temperatura < 22){
        alert(`Con ${temperatura}° hace frio`);
    } 
};

haceFrio(temperatura)

// calcularPuntaje(facil, normal, dificil)

const facil = Number(prompt('Ingresa la nota'));
const normal = Number(prompt('Ingresa la segunda nota'));
const dificil = Number(prompt('Ingresa la tercer nota'));

const calcularPuntaje = (facil, normal, dificil) => (facil * 3) + (normal * 5) + (dificil * 10);

alert('La nota final es de ' + calcularPuntaje(facil, normal, dificil));

// aceptaDeposito(monto)

const monto = Number(prompt('Ingresa el monto'));

function aceptaDeposito(monto){
    const restoMonto = monto / 10;
    if(restoMonto === 0){
        alert('Si se acepta el depósito de $' + monto);
    } else{
        alert('No se acepta el depósito de $' + monto);
    }
};

aceptaDeposito(monto);