//'use strict'
// 3.1 Uso la función document.write directamente en el JS y simplemente llamo el script en el html
//ya que al momento del ejercicio solo hay este codigo. 

//document.write("<p>Tempestes venen del <strong>sud</strong>.</p>");


/*
// 3.2 Usando prompts y document.write() pide datos e imprime en pantalla 
// 3.2.1 Pregunta si quiere ver perro o gato y muestra en pantalla la imagen de perro o gato. 

//function preguntaPoG(){ //Intento crear una función y llamarla desde el html pero no acaba de funcionar. 

    let respuesta=prompt("Quieres ver un perro o un gato?");
    if(respuesta==="perro"){
        document.write("<img src='src/img/perro.jpg' alt='Imagen perro'>");
    }else if(respuesta==="gato"){
        document.write("<img src='src/img/gato.jpg' alt='Imagen gato'>");
    }else{
        document.write("<p>'Ha introducido mal su elección.'</p>");
    }

//}
//preguntaPoG();
*/

/*
//3.2.2 Modifica el programa para que el usuario deba pulsar 1 o 2 y se trate
// como valor númerico. 

let respuesta=parseInt(prompt("Si quieres ver un perro pulsa 1 y si quieres un gato pulsa 2."));
if(respuesta===1){
    document.write("<img src='src/img/perro.jpg' alt='Imagen perro'>");
}else if(respuesta===2){
    document.write("<img src='src/img/gato.jpg' alt='Imagen gato'>");
}else{
    document.write("<p>'Ha introducido mal su elección.'</p>");
}

//¿Que problema te has encontrado? Que la entrada de prompt la toma como string
//¿Que solución le has dado? Convierto el valor del promps a int con un parse. 
*/

/*
// 3.2.3 Modifica el programa para que ahora pueda preguntar por varios animales 
// ) y en función de la opción elegida, se muestren los mismos.

let respuesta=parseInt(prompt("Escoge un animal para mostrar: 1.Aguila 2.Buho 3.Gato 4.Leon 5.Oveja 6.Perro 7.Zorro "));
switch(respuesta){
    case 1:
        document.write("<img src='src/img/aguila.jpg' alt='Imagen aguila'>");
        break;
    case 2:
        document.write("<img src='src/img/buho.jpg' alt='Imagen buho'>");
        break;
    case 3:
        document.write("<img src='src/img/gato.jpg' alt='Imagen gato'>");
        break;
    case 4:
        document.write("<img src='src/img/lleo.jpg' alt='Imagen leon'>");
        break;
    case 5:
        document.write("<img src='src/img/ovella.jpg' alt='Imagen oveja'>");
        break;
    case 6:
        document.write("<img src='src/img/perro.jpg' alt='Imagen perro'>");
        break;
    case 7:
        document.write("<img src='src/img/zorro.jpg' alt='Imagen zorro'>");
        break;
    default:
        document.write("<p><strong>'Ha introducido mal su elección. Vuelva a intentarlo'</strong></p>");
}
*/

/*
// 3.3.1 Realiza un programa en javascript donde se le pregunte al usuario un número de filas y un número de columnas y genere una tabla (con los códigos HTML correspondientes) de las
// filas y columnas indicadas por el usuario. En cada celda deberá mostrarse el texto “CELDA X,Y” siendo X e Y el número de fila y columna correspondiente.

let filas=0;
let columnas=0;
filas=parseInt(prompt("Vamos a montar una tabla. Cuantas filas quieres que tenga?"));
columnas=parseInt(prompt("Cuantas columnas quieres que tenga?"));

document.write("<table style='border-collapse: collapse; width: 75%;'>");
for(let i = 1; i <= filas ; i++){
    document.write("<tr>");

    for(let j = 1; j <= columnas ; j++){
        document.write("<td style='border: 2px solid black; padding: 12px; text-align: center;'>");
            document.write("CELDA "+i+":"+j);
        document.write("</td>");
    }
    document.write("</tr>");
}

document.write("</table>");
*/


// 3.3.2 Copia el código anterior y realiza una modificación donde se le pida al usuario en que fila y columna se parará de crear la tabla. Cuando se llegue a dicha celda, se le preguntará al
// usuario si quiere continuar pintando la tabla o si abandona la ejecución de la misma. Explica, a través de comentarios en el código, qué instrucciones has usado y por qué.

let filas=0;
let columnas=0;
filas=parseInt(prompt("Vamos a montar una tabla. Cuantas filas quieres que tenga?"));
columnas=parseInt(prompt("Cuantas columnas quieres que tenga?"));

//Creo un nuevo juego de variables y promps para saber las coordenadas de la pausa
let stopfilas=0;
let stopcolumnas=0;
stopfilas=parseInt(prompt("En que fila quieres que hagamos la pausa de confirmación?"));
stopcolumnas=parseInt(prompt("Y en que columna?"));

document.write("<table style='border-collapse: collapse; width: 75%;'>");
for(let i = 1; i <= filas ; i++){
    document.write("<tr>");

    for(let j = 1; j <= columnas ; j++){
        if(i===stopfilas && j===stopcolumnas){
             let pausa=prompt("Quieres que continuemos? Si o No");
            if(pausa!=="No"){
                continue;
            }
            //Enganchado con el break. Mirar posibilidad de modificar los valores dei y de j
            else{break;}
        }
        document.write("<td style='border: 2px solid black; padding: 12px; text-align: center;'>");
            document.write("CELDA "+i+":"+j);
        document.write("</td>");

    }
    document.write("</tr>");
}

document.write("</table>");