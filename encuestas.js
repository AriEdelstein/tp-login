$(document).ready(function () {
  $(".btnEnviar").click(function () {
    $(this).prop("disabled", true);
    $(this).text("enviado");
  });

  function guardarEncuestas(numRadio) {
    var opcionSeleccionada = $("input[name=" + numRadio + "]:checked");

    if (opcionSeleccionada.length > 0) {
      var data = {};
      data[numRadio] = opcionSeleccionada.val();
      var texto = opcionSeleccionada.next("label").text();
      data["respuesta"] = texto;
      var datosJSON = JSON.stringify(data);
      console.log(datosJSON);
      var datosGuardados = sessionStorage.getItem("encuestas");
      console.log("Datos recuperados de sessionStorage:", datosGuardados);

      var datosLeidos = JSON.parse(sessionStorage.getItem("encuestas"));

      if (datosLeidos == null) {
        datosLeidos = [];
        sessionStorage.setItem(
          "encuestas",
          JSON.stringify(datosLeidos)
        ); /*datos leidos los pasa a string*/
        console.log("Datos guardados en sessionStorage.");
      }

      datosLeidos.push(data);
      sessionStorage.setItem("encuestas", JSON.stringify(datosLeidos));
      console.log("Datos guardados en sessionStorage.");
    }
  }
  $("#enviar1").click(function () {
    guardarEncuestas(1);
  });
  $("#enviar2").click(function () {
    guardarEncuestas(2);
  });
  $("#enviar3").click(function () {
    guardarEncuestas(3);
  });
  $("#enviar4").click(function () {
    guardarEncuestas(4);
  });

  var datosGuardados = sessionStorage.getItem("encuestas");
  console.log("Datos recuperados de sessionStorage:", datosGuardados);

  var datosLeidos = JSON.parse(sessionStorage.getItem("encuestas"));
  if (datosLeidos != null) {
    for (var i = 0; i < datosLeidos.length; i++) {
      var encuesta = datosLeidos[i];
      var encuestaNombre = Object.keys(encuesta)[0];
      var encuestaValor = encuesta[encuestaNombre];

      // Obtener los radio buttons correspondientes a la encuesta
      var radioButtons = document.querySelectorAll(
        'input[name="' + encuestaNombre + '"]'
      );

      // Establecer el valor correspondiente en el radio button
      for (var j = 0; j < radioButtons.length; j++) {
        if (radioButtons[j].value === encuestaValor) {
          radioButtons[j].checked = true;
          $("#enviar" + encuestaNombre).prop("disabled", true);
          $("#enviar" + encuestaNombre).text("enviado");
          break;
        }
      }
    }
  }
});
