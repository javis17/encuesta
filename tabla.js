function order(){
    var shirt;
    var Agua;
    var Saludable;
    var estilo;
    if(document.getElementById("shirt1").checked == true){
    opcion= "correr"}
    else if (document.getElementById("shirt2").checked == true){
        opcion="andar en bici";
    }
    else{
        opcion="caminar";
    }
    
    
    
    if(document.getElementById("Agua1").checked == true){
        respuesta= "No"}
        else if (document.getElementById("Agua2").checked == true){
            respuesta="aveces";
        }
        else{
            respuesta="siempre";
        }
        
        
        if(document.getElementById("Saludable1").checked == true){
            seleccion= "Si"}
            else if (document.getElementById("Saludable2").checked == true){
                seleccion="No";
            }
            else{
                seleccion="tal vez";
            }
            
            
            if(document.getElementById("Saludable1").checked == true){
                buena= "Si"}
               
                else{
                    buena="no";
                }
                
                document.getElementById("out").innerHTML = "Tus respuestas de la encuesta fueron:<br>" + "Pregunta numero 1:" +opcion+"" +"<br>Pregunta numero 2:"+respuesta+""+"<br>Pregunta numero 3:"+seleccion+""+"<br>Pregunta numero 4:"+buena
            }