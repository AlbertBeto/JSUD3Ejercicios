'use strict'
// 3.1 Uso la función document.write directamente en el JS y simplemente llamo el script en el html
//ya que al momento del ejercicio solo hay este codigo. 

//document.write("<p>Tempestes venen del <strong>sud</strong>.</p>");



// 3.2 Usando prompts y document.write() pide datos e imprime en pantalla 
// 3.2.1 Prgunta si quiere ver perro o gato y muestra en pantalla la imagen de perro o gato. 

function preguntaPoC(){

    let respuesta=prompt("Quieres ver un perro o un gato?");
    if(respuesta=="perro"){
        return document.window("<img src='src/img/perro.jpg' alt='Imagen perro'>")
    }else if(respuesta=="gato"){
        return document.window("<img src='src/img/gato.jpg' alt='Imagen gato'>")
    }else{
        return document.window("<p>'Ha introducido mal su elección.'</p>")
    }

}

//preguntaPoC();
