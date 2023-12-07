$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
  });
  var estaHome = window.location.pathname.includes("home.html");
  var esEmpleado = window.location.search.includes("?soyempleado=1");
  var esCoordinador = window.location.search.includes("?soycoordinador=1");
  if (estaHome && esEmpleado) {
    $("#botform").hide();
  }
  if (estaHome && esCoordinador) {
    $("#botform2").hide();
  }
  $("#btn-iniciar-sesion").click(function () {
    var usuario = $("#usuario").val();
    var contraseña = $("#contraseña").val();
    if (usuario === "empleado" && contraseña === "empleado123") {
      window.location.href = "formulario.html";
    } else if (usuario === "coordinador" && contraseña === "coordinador123") {
      window.location.href = "home.html?soycoordinador=1";
    } else {
      alert("Credenciales incorrectas. Por favor, inténtelo de nuevo.");
    }
  });
  $(".accordion").hide();
  $(".form-select").change(function () {
    var selectedOption = $(this).val();
    if (selectedOption === "1") {
      $(".accordion").slideDown();
    } else {
      $(".accordion").slideUp();
    }
  });
});
