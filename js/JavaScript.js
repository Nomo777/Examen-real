
/*
Autor:keyla reynoza
fecha: 20/nov/24
*/



    // Función que lanza la alerta 
    
    function mostrarAlerta() {

        const texto = "pagina 1"; 

        alert(texto);
      }
  
      function cambiarColorFondo(event) {
      
        const tecla = event.key.toLowerCase(); // Lee la tecla que presionaste
    
        if (tecla === '1') { // Si se presiona la tecla '1', cambiar a rojo
  
            document.body.style.backgroundColor = 'red'; 
  
        } else if (tecla === '2') { // Si se presiona la tecla '2', cambiar a verde
  
            document.body.style.backgroundColor = 'green';  //document.body: Se refiere al elemento <body>//
  
        } else if (tecla === '3') { // Si se presiona la tecla '3', cambiar a azul
  
            document.body.style.backgroundColor = 'blue'; 
  
        } else if (tecla === '4') { // Si se presiona la tecla '4', cambiar a amarillo
  
            document.body.style.backgroundColor = 'yellow'; 
  
        } else if (tecla === '5') { // Si se presiona la tecla '5', cambiar a morado
  
            document.body.style.backgroundColor = 'purple'; 
        } else {
            // No hace nada si se presionan otras teclas uwu
        }
    }
    
    // Escuchar el evento 'keydown' para detectar las teclas presionadas
  
    window.addEventListener('keydown', cambiarColorFondo);
    
  


  document.addEventListener("keydown", function(event){console.log(event)});



























