/* Dada una cadena de texto comprobar si es un políndromo o no
   Los polindromos son palabras que se leen igual , aunque estén invertidas.
   Ejemplo: Ana , Otto , Bob
*/
const BuscaPolindromos = cadena => {
   let separador = cadena.split('');
   let polindromo = separador.reverse().join(''); 
   // para revertir el orden del array se debe asignar el array split a otra variable
   // para unir el nuevo array inverso se debe ocupar join('') entre comillas para que los una como palabra 
  return cadena === polindromo;
  // se deja como return por que si son iguales devolverá un true o un false ahorrandonos el if
}

console.log(BuscaPolindromos("caca"));