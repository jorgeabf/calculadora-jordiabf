const sumar = (...numeros) => {
  const sumaNumeros = numeros.reduce((a, b) => a + b)
  console.log(sumaNumeros)
}

export default sumar
