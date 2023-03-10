var tabla_reparadores=localStorage.getItem("tablareparadoresStorager");
tabla_reparadores=JSON.parse(tabla_reparadores);
if(tabla_reparadores==null){
    var tabla_reparadores=[];
}

function listar(){
    console.log("INGRESANDO A LISTA......");
    var dataFila=' ';
    if(tabla_reparadores.length>0){
       for(const i in tabla_reparadores){
        var varReparador= JSON.parse(tabla_reparadores[i]);
        dataFila +="<tr>"
        dataFila+="<td>"+varReparador.id+"</td>";
        dataFila+="<td>"+varReparador.nombre+"</td>";
        dataFila+="<td>"+varReparador.apellidos+"</td>";
        dataFila+="<td>"+varReparador.especialidad+"</td>";
        dataFila+="<td>"+varReparador.sueldo+"</td>";
        dataFila+="<td>"+varReparador.horarios+"</td>";
        dataFila+="<td>"+"<button type='button' class='btn btn-warning' onclick='abrirForm("+varReparador.id+")'>EDITAR</button>"+
                        "<button type='button' class='btn btn-info' onclick='eliminarItem("+varReparador.id+")'>ELIMINAR</button>"+
        "</td>";
        
        dataFila +="</tr>"
    }
    document.getElementById("dataReparadores").innerHTML=dataFila;
}else{
    document.getElementById("dataReparadores").innerHTML="<tr><td colspan='7'>NO HAY DATOS</td></tr>";
}
}


function eliminarItem(idItem) {
    for(const i in tabla_reparadores){
        varReparador=JSON.parse(tabla_reparadores[i]);
        if (varReparador.id==idItem) {
            tabla_reparadores.splice(i,1);
            localStorage.setItem("tablareparadoresStorager", JSON.stringify(tabla_reparadores));
        }
    }
    listar();
}
function abrirForm(idForm){
localStorage.setItem("idForm",JSON.stringify(idForm));
window.location.replace("Form_reparador.html");
}