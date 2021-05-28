// Accedemos a al formulario y a los diferentes inputs

/*const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

// expreciones regulares
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

const campos = {
  usuario: false,
  nombre: false,
  password: false,
  correo: false,
  telefono: false,
};

const validacionFormulario = (item) => {
  switch (item.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, item.target, "nombre");
      break;
    case "correo":
      validarCampo(expresiones.correo, item.target, "correo");
      break;
    case "telefono":
      validarCampo(expresiones.telefono, item.target, "telefono");
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo--${campo}`)
      .classList.remove("formulario--grupo-incorrecto");
    document
      .getElementById(`grupo--${campo}`)
      .classList.add("formulario--grupo-correcto");
    document
      .querySelector(`#grupo--${campo} i`)
      .classList.add("fa-check-circle");
    document
      .querySelector(`#grupo--${campo} i`)
      .classList.remove("fa-times-circle");
    document
      .querySelector(`#grupo--${campo} .formulario--input-error`)
      .classList.remove("formulario--input-error-activo");
  } else {
    document
      .getElementById(`grupo--${campo}`)
      .classList.add("formulario--grupo-incorrecto");
    document
      .getElementById(`grupo--${campo}`)
      .classList.remove("formulario--grupo-correcto");
    document
      .querySelector(`#grupo--${campo} i`)
      .classList.add("fa-times-circle");
    document
      .querySelector(`#grupo--${campo} i`)
      .classList.remove("fa-check-circle");
    document
      .querySelector(`#grupo--${campo} .formulario--input-error`)
      .classList.add("formulario--input-error-activo");
  }
};

// recorremos todos los inputs para acceder a los mismos

inputs.forEach((input) => {
  input.addEventListener("keyup", validacionFormulario);
  input.addEventListener("blur", validacionFormulario);
});

// validacion del mensaje de error cuando se envia el formulario

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const terminos = document.getElementById("terminos");
  if (campos.nombre && campos.correo && campos.telefono && terminos.checked) {
    formulario.reset();

    document
      .getElementById("formulario--mensaje-exito")
      .classList.add("formulario--mensaje-exito-activo");
    setTimeout(() => {
      document
        .getElementById("formulario--mensaje-exito")
        .classList.remove("formulario--mensaje-exito-activo");
    }, 5000);

    document
      .querySelectorAll(".formulario--grupo-correcto")
      .forEach((icono) => {
        icono.classList.remove("formulario--grupo-correcto");
      });
  } else {
    document
      .getElementById("formulario--mensaje")
      .classList.add("formulario--mensaje-activo");
  }
});*/
