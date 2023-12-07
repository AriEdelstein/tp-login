$(document).ready(function () {
  var datosGuardados = sessionStorage.getItem("encuestas");
  console.log("Datos recuperados de sessionStorage:", datosGuardados);

  var datosLeidos = JSON.parse(sessionStorage.getItem("encuestas"));

  if (datosLeidos != null) {
    for (var i = 0; i < datosLeidos.length; i++) {
      var encuesta = datosLeidos[i];
      var encuestaNombre = Object.keys(encuesta)[0];
      var encuestaValor = encuesta[encuestaNombre];

      // Seleccionar el elemento <p> correspondiente por su ID
      var elementoP = $("#" + encuestaNombre);

      // Asignar el valor de la encuesta al contenido del elemento <p>
      elementoP.text(encuesta["respuesta"]);
    }
  }
});
