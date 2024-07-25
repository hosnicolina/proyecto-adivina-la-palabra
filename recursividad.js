// loop o bucles

function contarHaciaAtras(number) {
    //6 //5 // 4
    // caso base
    if (number === 0) {
      return
    }
    console.log('Faltan: ', number) // 6 // 5 // 4
    // caso recursivo
    contarHaciaAtras(number - 1) // 5 //4 //3
  }
  
  // contarHaciaAtras(6)
  
  // calcular factorial
  
  function calcularFactorial(numero) {
   
    // caso base
    if (numero === 1) {
      return 1
    }
  
    // caso factorial
  
    return numero * calcularFactorial(numero - 1)
  
    // 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * undefined
  }
  
  console.log(calcularFactorial(4))
  