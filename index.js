function encriptar() {
    let texto = document.getElementById("texto").value;

    // Verifica si el texto contiene solo letras minúsculas y espacios
if (!/^[a-z ]+$/.test(texto)) {
  swal("Error", "Ingresa solo letras minúsculas y sin acentos", "error");
  return; // Salir de la función si hay caracteres no permitidos
}

    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let figura = document.getElementById("figura");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      figura.src = "./img/encriptado.jpg";
    } else {
      figura.src = "./img/figura.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Oops!","Debes ingresar algun texto","warning");
    }
  }

  function desencriptar() {
    let texto = document.getElementById("texto").value;

    // Verifica si el texto contiene solo letras minúsculas y espacios
if (!/^[a-z ]+$/.test(texto)) {
  swal("Error", "Ingresa solo letras minúsculas y sin acentos", "error");
  return; // Salir de la función si hay caracteres no permitidos
}

    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let figura = document.getElementById("figura");

    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

      if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      figura.src = "./img/desencriptado.jpg";
      } 
      else {
      figura.src = "./img/figura.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Oops!","Debes ingresar algun texto","warning");
      }
  }

  function copiarTexto() {
    // Selecciona el área de texto
    var areaTexto = document.getElementById("texto");
  
    // Selecciona el texto dentro del área de texto
    areaTexto.select();
  
    // Copia el texto al portapapeles
    document.execCommand("copy");
  
    // Deselecciona el texto
    window.getSelection().removeAllRanges();
  
    // Muestra una alerta o mensaje indicando que el texto ha sido copiado
    swal("¡Texto copiado!", "", "success");
  }