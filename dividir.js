function dividir(num1, num2) {
  if (num1 == 0 || num2 == 0) {
    return "No se puede dividir por cero";
  } else {
    let cociente = num1 / num2;
    return cociente;
  }
}
module.exports = dividir;

//console.log(dividir(10,1));
