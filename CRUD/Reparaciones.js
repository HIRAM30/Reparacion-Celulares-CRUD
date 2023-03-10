var tabla_reparaciones=localStorage.getItem("tablareparacionesStorager");
tabla_reparaciones=JSON.parse(tabla_reparaciones);
if(tabla_reparaciones==null){
    var tabla_reparaciones=[];
}

function listar(){
    console.log("INGRESANDO A LISTA......");
    var dataFila=' ';
    if(tabla_reparaciones.length>0){
       for(const i in tabla_reparaciones){
        var varReparacion= JSON.parse(tabla_reparaciones[i]);
        dataFila +="<tr>"
        dataFila+="<td>"+varReparacion.id+"</td>";
        dataFila+="<td>"+varReparacion.modelo+"</td>";
        dataFila+="<td>"+varReparacion.maraca+"</td>";
        dataFila+="<td>"+varReparacion.danio+"</td>";
        dataFila+="<td>"+varReparacion.ingreso+"</td>";
        dataFila+="<td>"+varReparacion.salida+"</td>";
        dataFila+="<td>"+varReparacion.cliente+"</td>";
        dataFila+="<td>"+varReparacion.reparador+"</td>";
        dataFila+="<td>"+varReparacion.comentario+"</td>";
        dataFila+="<td>"+varReparacion.costo+"</td>";
        dataFila+="<td>"+"<button type='button' class='btn btn-warning' onclick='abrirForm("+varReparacion.id+")'>EDITAR</button>"+
                        "<button type='button' class='btn btn-info' onclick='eliminarItem("+varReparacion.id+")'>ELIMINAR</button>"+
        "</td>";
        
        dataFila +="</tr>"
    }
    document.getElementById("dataReparaciones").innerHTML=dataFila;
}else{
    document.getElementById("dataReparaciones").innerHTML="<tr><td colspan='7'>NO HAY DATOS</td></tr>";
}
}


function eliminarItem(idItem) {
    for(const i in tabla_reparaciones){
        varReparacion=JSON.parse(tabla_reparaciones[i]);
        if (varReparacion.id==idItem) {
            tabla_reparaciones.splice(i,1);
            localStorage.setItem("tablareparacionesStorager", JSON.stringify(tabla_reparaciones));
        }
    }
    listar();
}
function abrirForm(idForm){
localStorage.setItem("idForm",JSON.stringify(idForm));
window.location.replace("Form_reparacion.html");
}