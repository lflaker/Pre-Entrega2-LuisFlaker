// Inicio Pre-Entrega1-Flaker

/* alert("Bienvenido a docugenerator beta");


//Algoritmo condicional

let boleano = true;
do {
  let usuario = prompt(
    "Ingrese el tipo de usuario \n - Contratante \n - Contratista"
  );
  if (usuario === "Contratante" || usuario === "Contratista") {
    alert("Se seleccionó la opción " + usuario);
    boleano = false;
  } else {
    alert("Ingrese una opción válida");
  }
} while (boleano === true);


//Algoritmo con ciclo

let proyectoNombre;
let valorproyecto = 0;
let valortotalproyecto = 0;
let n = prompt("Ingrese el número de proyectos a relacionar");
for (i = 1; i <= n; i++) {
  let proyectoNombre = prompt("ingrese el nombre proyecto numero " + i);
  let valorproyecto = Number(
    prompt("Ingrese el valor del proyecto " + proyectoNombre)
  );
  valortotalproyecto = valortotalproyecto + valorproyecto;
  let plazoEjecucion = prompt(
    "Ingrese el plazo de ejecución (en meses) del proyecto " + proyectoNombre
  );
}
alert(
  "El valor total en proyectos es equivalente a la suma de $ " +
    valortotalproyecto
);


//Simulador Interactivo

function datosPrincipales() {
  alert("A continuación ingrese la información del Contratante");
  let personaJuridica = prompt(
    "Ingrese nombre de la Persona Jurídica Contratante"
  );
  let documentoJuridica = Number(
    prompt("Ingrese número de documento de la Persona Jurídica Contratante")
  );
  let nombreContratante = prompt(
    "Ingrese nombre del Representante Legal Contratante"
  );
  let documentoContratante = Number(
    prompt("Ingrese número de documento del Representante Legal Contratante")
  );
  let fechaDocumento = prompt("Ingrese fecha dd/mm/yyyy");
  let plazoContrato = prompt("Ingrese el plazo de ejecución dd/mm/yyyy");
  let valorcontrato = prompt("Digite valor de Contrato");
  alert("A continuación ingrese los datos del Contratista");
  let personaJuridicaContratista = prompt(
    "Ingrese nombre de la Persona Jurídica Contratista"
  );
  let documentoJuridicaContratista = Number(
    prompt("Ingrese número de documento de la Persona Jurídica Contratista")
  );
  let nombreContratista = prompt(
    "Ingrese nombre del Representante Legal Contratista"
  );
  let documentoContratista = Number(
    prompt("Ingrese número de documento del Representante Legal Contratista")
  );
  alert(
    "Entre los suscritos a saber: por una parte " +
      personaJuridica +
      ", con número de identificación tributario " +
      documentoJuridica +
      ", Representado Legalmente por " +
      nombreContratante +
      ", identificado(a) con número de documento " +
      documentoContratante +
      ", quien obra en su condición de representante legal y quien para efectos del presente documento se denominará el CONTRATANTE de una parte, y por la otra, " +
      personaJuridicaContratista +
      ", con número de identificación tributario " +
      documentoJuridicaContratista +
      ", Representado Legalmente por " +
      nombreContratista +
      ", identificado(a) con número de documento " +
      documentoContratista +
      ", quien obra en su condición de representante legal y quien para efectos del presente documento se denominará el CONTRATISTA de una parte"
  );
}
datosPrincipales(); */

// Fin Pre-Entrega1-Flaker

// Inicio Pre-Entrega2-Flaker

// function infoProyecto(nombre, valor, ubicacion, contratista,idContratista) {
//   this.nombre = prompt("Ingrese nombre del proyecto");
//   this.valor = prompt(`Ingrese valor del proyecto ${this.nombre}`);
//   this.ubicacion = prompt(`Ingrese ubicacion del proyecto ${this.nombre}`);
//   let tipoContratista = prompt(
//     `Ingrese el tipo de contratista para el proyecto ${this.nombre} \n 1. Persona Jurídica \n 2. Persona Natural`
//   );

//   if (tipoContratista === 1) {
//     this.contratista = prompt(`Ingrese nombre de la persona jurídica`);
//     this.idContratista = prompt(
//       `Ingrese número de identificación de ${this.contratista}`
//     );

//   }
// }

function infoProyecto(infoProyecto) {
  this.nombre = infoProyecto.nombre;
  this.valor = infoProyecto.valor;
  this.ubicacion = infoProyecto.ubicacion;
  let tipoContratista = infoProyecto.tipoContratista;

  if (tipoContratista == 1) {
    this.contratista = infoProyecto.contratista;
    this.idContratista = infoProyecto.idContratista;
    this.repContratista = infoProyecto.repContratista;
    this.idRepContratista = infoProyecto.idRepContratista;
  } else {
    this.contratista = infoProyecto.contratista;
    this.idContratista = infoProyecto.idContratista;
  }
}

let newproject = new infoProyecto({
  nombre: prompt("Ingrese nombre del proyecto"),
  valor: prompt(`Ingrese valor del proyecto`),
  ubicacion: prompt(`Ingrese ubicacion del proyecto `),
  tipoContratista: prompt(
    `Ingrese el tipo de contratista para el proyecto \n 1. Persona Jurídica \n 2. Persona Natural`
  ),
  contratista: prompt(`Ingrese nombre del contratista`),
  idContratista: prompt(`Ingrese número de identificación de }`),
  repContratista: prompt(`Ingrese nombre del representante legal de`),
  idRepContratista: Number(
    prompt(`Ingrese número de identificación de Rep Legal`)
  ),
});

infoProyecto();
