//alert('Hola soy Rodo');

//variables
let nombre = 'Rodolfo';
nombre = 'rodolfo';

//constantes
const apellido = 'figueroa'
const altura = 184;
//altura = 190;

//imprimir por consola
console.log(nombre);
console.log(altura);

//concatenar dos strings
let concatenacion = nombre + " " + apellido;
console.log(concatenacion);

//seleccionar elementos del dom
const datos = document.querySelector('#datos');
datos.innerHTML = `
    <hr/>
    <h1>Datos del usuario</h1>
    <h2>Nombre: ${concatenacion}</h2>
    <h2>Estatura: ${altura} cms</h2>
`;

//condiiciones
if (altura >= 185) {
    datos.innerHTML += `
        <h1>Eres una persona alta</h1>
    `;
}else{
    datos.innerHTML += `
        <h1>Eres una persona bajita</h1>
    `;
}

//bucle for

for (let year = 2018; year <= 2024; year++) {
    datos.innerHTML += `<h3>Estamos en el año ${year}</h3>`
    
}

//Arrays

const lenguajes = ['Javascript', 'Dart', 'Python', 'Java', 'Ruby'];

const container = document.querySelector('#lenguajes')

container.innerHTML = `
    <h3>Lenguajes de Programacion</h3>
    <ul>
`;

/*lenguajes.forEach( lenguaje => {
    container.innerHTML += `<li>${lenguaje}</li>`
})*/

for(let lenguaje of lenguajes){
    container.innerHTML += `<li>${lenguaje}.</li>`
}

container.innerHTML += `
    </ul>
`;


//Funciones

const miInformacion = (nombre, edad) =>{
    const misDatos = `
        <p>Mi nombre es: ${nombre}</p>
        <p>Mi edad es: ${edad}</p>
    `;

    return misDatos;
}

const imprimir = () => {
    const container = document.querySelector('#informacion');
    container.innerHTML = miInformacion('Rodolfo', 38)
}

imprimir()