const readline = require('readline')

// Crear una interfaz de readline
// process es tu pc
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// preguntar al usuario sy nombre

function saludar() {
  rl.question('Como te llamas? ', (nombre) => {
    console.log(`Hola ${nombre}`)
    rl.close()
  })
}

let datosDelUsario = []

function solicitatDatos() {
  rl.question(
    'Ingresa un dato (o escribe fin para terminar ): ',
    (respuesta) => {
      if (respuesta.toLocaleLowerCase() === 'fin') {
        console.log('Los Datos del usuario: ', datosDelUsario)
        rl.close()
      } else {
        datosDelUsario.push(respuesta)
        solicitatDatos()
      }
    }
  )
}
// solicitatDatos()

function mostrarMenu() {
    console.log('\nMenú:');
    console.log('1. Opción 1');
    console.log('2. Opción 2');
    console.log('3. Salir');
  
    rl.question('Selecciona una opción: ', (opcion) => {
      switch (opcion) {
        case '1':
          console.log('Has seleccionado la Opción 1');
          mostrarMenu();
          break;
        case '2':
          console.log('Has seleccionado la Opción 2');
          mostrarMenu();
          break;
        case '3':
          console.log('Adiós!');
          rl.close();1
          break;
        default:
          console.log('Opción no válida. Inténtalo de nuevo.');
          mostrarMenu();
          break;
      }
    });
  }
  
  mostrarMenu();