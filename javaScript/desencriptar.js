//selecciona el boton cuando da click
var botonDesencriptar = document.querySelector("#btn-desencriptar");

botonDesencriptar.addEventListener("click", function(event){

    //desabilita lo que  viene  por  defecto en este caso la accion del  boton
    event.preventDefault(); 
    
    
    // trae el formulario
    var form = document.querySelector('.formulario');  
    
    // trae  el mensasje del formulario
    var  inputTexto = form.texto;
    var  mensaje = inputTexto.value;
    var cambio = mensaje;
    inputTexto.value=cambio;


    //remplaza las palabras
    //funciona  cuando el mensaje incriptado  está en la caja  mensaje  y no en la caja resultado
    var encontrado=mensaje.includes('ai') //devuelve true si encuentra la palabra en el string con inclues
        if  (encontrado){
            cambio = cambio.replace(/ai/g,"a")
            console.log(mensaje);
        }

    var encontrado=mensaje.includes('enter')
    if  (encontrado){
        cambio = cambio.replace(/enter/g,"e")
        console.log(mensaje);
    }

    var encontrado=mensaje.includes('imes')
        if  (encontrado){
            cambio = cambio.replace(/imes/g,"i")
            console.log(mensaje);
        }

    var encontrado=mensaje.includes('ober')
        if  (encontrado){
            cambio = cambio.replace(/ober/g,"o")
            console.log(mensaje);
        }

    var encontrado=mensaje.includes('ufat')
        if  (encontrado){
            cambio = cambio.replace(/ufat/g,"u")
            console.log(mensaje);
        }
      

    //pasar  el srting  a  html 
    var inputDesencriptado= document.querySelector('.input-2'); 
    inputDesencriptado.value=cambio;

   
    
    
        
    }) 
     


    

 
     

    








