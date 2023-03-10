var tablacelular=localStorage.getItem("tablacelularStorager");
tablacelular=JSON.parse(tablacelular);
if(tablacelular==null){
    var tablacelular=[];
}

function listar(){
    console.log("INGRESANDO A LISTA......");
    var dataFila=' ';
    if(tablacelular.length>0){
       for(const i in tablacelular){
        var varcelular= JSON.parse(tablacelular[i]);
        dataFila +="<tr>"
        dataFila+="<td>"+varcelular.id+"</td>";
        dataFila+="<td>"+varcelular.modelo+"</td>";
        dataFila+="<td>"+varcelular.maraca+"</td>";
        dataFila+="<td>"+varcelular.danio+"</td>";
        dataFila+="<td>"+"<button type='button' class='btn btn-warning' onclick='abrirForm("+varcelular.id+")'>EDITAR</button>"+
                        "<button type='button' class='btn btn-info' onclick='eliminarItem("+varcelular.id+")'>ELIMINAR</button>"+
        "</td>";
        
        dataFila +="</tr>"
    }
    document.getElementById("dataCelulares").innerHTML=dataFila;
}else{
    document.getElementById("dataCelulares").innerHTML="<tr><td colspan='7'>NO HAY DATOS</td></tr>";
}
}


function eliminarItem(idItem) {
    for(const i in tablacelular){
        varcelular=JSON.parse(tablacelular[i]);
        if (varcelular.id==idItem) {
            tablacelular.splice(i,1);
            localStorage.setItem("tablacelularStorager", JSON.stringify(tablacelular));
        }
    }
    listar();
}
function abrirForm(idForm){
localStorage.setItem("idForm",JSON.stringify(idForm));
window.location.replace("Form_celulares.html");
}