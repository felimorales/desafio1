alert("Calcula el cambio de pesos a moneda extranjera");

let dolarO = 115;
let dolarB = 223;
let euro = 236;
let shekel = 69;

let moneda = parseInt(
  prompt(
    "Pasar pesos a: \n 1: Dolar oficial \n 2: Dolar blue \n 3: Euro \n 4: Shekel \n Para salir ingrese 5."
  )
);

while (moneda !== 5) {
  if (moneda < 5 && moneda >= 1) {
    let pesos = parseFloat(prompt("Ingrese la cantidad de pesos"));
    if (!isNaN(pesos)) {
      let result = 0;
      switch (moneda) {
        case 1:
          result = pesos / dolarO;
          alert(`${pesos} son ${result} dolares al valor oficial`);
          break;
        case 2:
          result = pesos / dolarB;
          alert(`${pesos} son ${result} dolares al valor blue`);
          break;
        case 3:
          result = pesos / euro;
          alert(`${pesos} son ${result} euros`);
          break;
        case 4:
          result = pesos / shekel;
          alert(`${pesos} son ${result} shekel`);
          break;
      }
    } else {
      alert("Ingrese un monto en numero");
    }
  } else {
    alert("Ingrese una opcion valida");
  }
  moneda = parseInt(
    prompt(
      "Pasar pesos a: \n 1: Dolar oficial \n 2: Dolar blue \n 3: Euro \n 4: Shekel \n Para salir ingrese 5."
    )
  );
}
alert("Gracias por utilizar la calculadora de cambio");
