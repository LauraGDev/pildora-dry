// Sin DRY
function saludarJuan() {
    console.log("Buenos días Juan.");
}

function saludarMaria() {
    console.log("Buenos días María.");
}

function saludarPedro() {
    console.log("Buenos días Pedro.");
}
saludarJuan();
saludarMaria();
saludarPedro();


// con DRY y POO
class Persona { // Creamos
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola ${this.nombre}.`);
    }
}

const juan = new Persona("Juan");
const maria = new Persona("María");
const pedro = new Persona("Pedro");

juan.saludar();
maria.saludar();
pedro.saludar();