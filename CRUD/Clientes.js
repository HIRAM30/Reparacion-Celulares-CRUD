var tablacliente=localStorage.getItem("tablaclienteStorager");
tablacliente=JSON.parse(tablacliente);
if(tablacliente==null){
    var tablacliente=[];
}

function listar(){
    console.log("INGRESANDO A LISTA......");
    var dataFila=' ';
    if(tablacliente.length>0){
       for(const i in tablacliente){
        var varcliente= JSON.parse(tablacliente[i]);
        dataFila +="<tr>"
        dataFila+="<td>"+varcliente.id+"</td>";
        dataFila+="<td>"+varcliente.modelo+"</td>";
        dataFila+="<td>"+varcliente.maraca+"</td>";
        dataFila+="<td>"+varcliente.danio+"</td>";
        dataFila+="<td>"+varcliente.ingreso+"</td>";
        dataFila+="<td>"+varcliente.salida+"</td>";
        dataFila+="<td>"+"<button type='button' class='btn btn-warning' onclick='abrirForm("+varcliente.id+")'>EDITAR</button>"+
                        "<button type='button' class='btn btn-info' onclick='eliminarItem("+varcliente.id+")'>ELIMINAR</button>"+
        "</td>";
        
        dataFila +="</tr>"
    }
    document.getElementById("dataClientes").innerHTML=dataFila;
}else{
    document.getElementById("dataClientes").innerHTML="<tr><td colspan='7'>NO HAY DATOS</td></tr>";
}
}


function eliminarItem(idItem) {
    for(const i in tablacliente){
        varcliente=JSON.parse(tablacliente[i]);
        if (varcliente.id==idItem) {
            tablacliente.splice(i,1);
            localStorage.setItem("tablaclienteStorager", JSON.stringify(tablacliente));
        }
    }
    listar();
}
function abrirForm(idForm){
localStorage.setItem("idForm",JSON.stringify(idForm));
window.location.replace("Form_cliente.html");
}