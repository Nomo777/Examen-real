
/*
Autor:keyla reynoza
fecha: 20/nov/24
*/



    // Función que lanza la alerta con un número
    
    function mostrarAlerta() {

        const texto = "pagina 4"; 

        alert(texto);
      }

      document.addEventListener('keydown', function(event){                 //Este código escucha el evento de presionar una tecla (keydown). Cuando el usuario presiona una tecla en el teclado, se ejecuta la función que está dentro de addEventListener.//
 
        const textoDiv = document.getElementById('texto');

        if (event.key == 'ArrowRight') {            // si se presiona la tecla de la felcha a la derecha se muestra el texto UWU

            textoDiv.textContent = " UWU"

        }
        else if (event.key == 'ArrowLeft') {      // si se presiona la tecla izquierza se muestra el texto UNU

            textoDiv.textContent = " UNU"

        }



      }    
    )
    function cambiarColorFondo(event) {

      const tecla = event.key.toLowerCase(); // Lee la tecla que presionaste
  
      if (tecla === '1') { // Si se presiona la tecla '1', cambiar a rojo

          document.body.style.backgroundColor = 'red'; 

      } else if (tecla === '2') { // Si se presiona la tecla '2', cambiar a verde

          document.body.style.backgroundColor = 'green'; 

      } else if (tecla === '3') { // Si se presiona la tecla '3', cambiar a azul

          document.body.style.backgroundColor = 'blue'; 

      } else if (tecla === '4') { // Si se presiona la tecla '4', cambiar a amarillo

          document.body.style.backgroundColor = 'yellow'; 

      } else if (tecla === '5') { // Si se presiona la tecla '5', cambiar a morado

          document.body.style.backgroundColor = 'purple'; 
      } else {
          // No hacer nada si se presionan otras teclas
      }
  }
  
  // Escuchar el evento 'keydown' para detectar las teclas presionadas

  window.addEventListener('keydown', cambiarColorFondo);
  
  
          document.addEventListener("keydown", function(event){console.log(event)});