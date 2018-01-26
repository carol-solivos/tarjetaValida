function isValidCard(number) {
  do {
    var patt = /^[0-9]*$/; // Expresión regular para que solo ingresen números.
    var answer = prompt('Ingresa el número que quieres validar'); // Número ingresado por el usuario.
    if (patt.test(answer) === false || answer === '') { // si no son numeros muestra lo siguiente.
      alert('Ingrese solo números del 0 al 9');
    } else if (patt.test(answer) === true) { // si son numeros hace lo siguiente. 
      var array1 = []; // Array que guarda el resultado final de cada digito ingresado por el usuario.
      var result = 0; // Es el resultado total de la suma de cada digito del número ingresado, luego de pasar por los siguientes pasos.
      for (var i = 1; i <= answer.length; i++) { // la variable i empieza en uno para que despues evalúe si esta en posicion par o no.
        if (i % 2 === 0) { // Si i es par que haga las siguientes operaciones.
          var pairProduct = parseInt(answer[answer.length - i]) * 2; // Multiplica los datos en posición par de derecha a izquierda.
          if (pairProduct > 9) { // Si tiene dos digitos que haga lo siguiente.
            var numToString = pairProduct.toString(); // Transforma el número de dos dígitos a string.
            array1.push(parseInt(numToString[0]) + parseInt(numToString[1])); // Suma el primer y segundo dígito y lo guarda en el array1.
          } else {
            array1.push(pairProduct); // Si tiene un solo dígito lo guarda directamente en array1.
          }
        } else {
          array1.push(parseInt(answer[answer.length - i])); // Si el número está en posición impar de derecha a izquierda lo guarda en array1.
        }
      } 	
      for (var j = 0; j < array1.length; j++) {
        result += array1[j]; // Suma la variable result con cada número del array1. Así result guarda la suma de todo.
      } 
      if (result % 10 === 0) { // Si la suma total (result) dividida en 10 da módulo 0 que haga el siguiente paso.
        return alert('Su tarjeta de crédito es válida');
      } else { // Si la suma total no da módulo 0.
        return alert('Su tarjeta de crédito no es válida');
      }
    }
  } while (answer === '' || patt.test(answer) === false || answer === null); // Si no cumple la expresión regular patt o no ingresa nada que vuelva a preguntar.
}
isValidCard();
// numero válido para probar = 4083952015263