alert("Bienvenido al sumulador de cuotas de Volkswagen");

let vehiculo = prompt(
  "Ingrese el nombre del vehículo a cotizar, en mayusculas: GOL TRENDLINE, POLO TRENDLINE O AMARAK TRENDLINE. \n Para salir ingrese ESC"
);
let precioGol = 1500600;
let precioPolo = 2800600;
let precioAmarok = 3500550;
let cuotas = 84;

while (
  vehiculo !== "GOL TRENDLINE" &&
  vehiculo !== "POLO TRENDLINE" &&
  vehiculo !== "AMAROK TRENDLINE" &&
  vehiculo !== "ESC"
) {
  alert("Vehículo inválido");
  vehiculo = prompt(
    "Ingrese el nombre del vehículo a cotizar, en mayusculas: GOL TRENDLINE, POLO TRENDLINE O AMARAK TRENDLINE"
  );
}

if (vehiculo === "GOL TRENDLINE") {
  alert(`Usted ingresó ${vehiculo}`);
  alert("El precio de sus cuotas es $" + totalCuotasGol());
} else if (vehiculo === "POLO TRENDLINE") {
  alert(`Usted ingresó ${vehiculo}`);
  alert("El precio de sus cuotas es $" + totalCuotasPolo());
} else if (vehiculo === "AMAROK TRENDLINE") {
  alert(`Usted ingresó ${vehiculo}`);
  alert("El precio de sus cuotas es $" + totalCuotasAmarok());
} else {
  alert("Muchas gracias, lo esperamos pronto");
}

function totalCuotasGol() {
  let precioGolCuotas = precioGol / cuotas;
  return parseInt(precioGolCuotas);
}

function totalCuotasPolo() {
  let precioPoloCuotas = precioPolo / cuotas;
  return parseInt(precioPoloCuotas);
}

function totalCuotasAmarok() {
  let precioAmarokCuotas = precioAmarok / cuotas;
  return parseInt(precioAmarokCuotas);
}
