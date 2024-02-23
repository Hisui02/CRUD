/********************************************
 *    función de validación
 */

function validacion() {
  let correcto = true;
  let nombre = document.getElementById("nombre").value; // getter
  let apellidos = document.getElementById("apellidos").value; // getter
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let departamento = document.getElementById("departamento").value;
  let promocion = document.getElementById("promocion");
  let sexoHombre = document.getElementById("sexoHombre");
  let sexoMujer = document.getElementById("sexoMujer");
  let sexoNoDecir = document.getElementById("sexoNoDecir");


  if (
    nombre == "" ||
    /^\s+$/.test(nombre) ||
    /[0-9]/.test(nombre) ||
    !/[a-zñ]{2,}/.test(nombre)
  ) {
    document.getElementById("nombreHelp").style.visibility = "visible";
    document.getElementById("nombre").style.borderColor = "red";

    correcto = false;
  }

  if (
    apellidos == "" ||
    /^\s+$/.test(apellidos) ||
    /[0-9]/.test(apellidos) ||
    !/[a-zñ]{2,}/.test(apellidos)
  ) {
    document.getElementById("apellidosHelp").style.visibility = "visible";
    document.getElementById("apellidos").style.borderColor = "red";

    correcto = false;
  }

  if (
    email == "" ||
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,4})$/.test(
      email
    )
  ) {
    document.getElementById("emailHelp").style.visibility = "visible";
    document.getElementById("email").style.borderColor = "red";

    correcto = false;
  }

  if (
    telefono === "" ||
    !/^[0-9]{9}$/.test(telefono)
  ) {
    document.getElementById("telefonoHelp").style.visibility = "visible";
    document.getElementById("telefono").style.borderColor = "red";

    correcto = false;
  }

  if (
    direccion === ""
  ) {
    document.getElementById("direccionHelp").style.visibility = "visible";
    document.getElementById("direccion").style.borderColor = "red";

    correcto = false;
  }

  if (
    departamento == "ninguno"
  ) {
    document.getElementById("departamento").style.color = "red";

    correcto = false;
  }

  if (!sexoHombre.checked && !sexoMujer.checked && !sexoNoDecir.checked) {
    document.getElementById("sexoHelp").style.visibility = "visible";

    correcto = false;
  }

  if (!promocion.checked) {
    document.getElementById("promocionHelp").style.color = "red";

    correcto = false;
  }

  console.log(nombre)
  return correcto;
}

function resetear(id) {
  document.getElementById(id + "Help").style.visibility = "hidden";
  document.getElementById(id).style.borderColor = "lightgray";
}
