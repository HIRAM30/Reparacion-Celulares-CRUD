 var idForm=localStorage.getItem("idForm");
 idForm=JSON.parse(idForm);
 if (idForm==null) {
    var idForm=0;
 }
 var tablacliente=localStorage.getItem("tablaclienteStorager");
 tablacliente=JSON.parse(tablacliente);
 if(tablacliente==null){
     var tablacliente=[];
 }

cargarPagina();

function guardar(){
    console.log("GUARDAR");
    var objeto=JSON.stringify({
        id: (idForm>0)? idForm:(tablacliente.length+1),
        modelo: document.getElementById('nombre').value,
        maraca: document.getElementById('direccion').value,
        danio: document.getElementById('fecha').value,
        ingreso: document.getElementById('num').value,
        salida: document.getElementById('telefono').value

    });
    console.log(objeto);
//editar 
if (idForm>0) {
    for(const i in tablacliente){
        var varcliente=JSON.parse(tablacliente[i])
        if (varcliente.id==idForm) {
            tablacliente[i]=objeto;
            break;
        }
    }
}else{
//nuevas reparaciones
tablacliente.push(objeto);
}


    localStorage.setItem("tablaclienteStorager",JSON.stringify(tablacliente));

    window.location.replace("Clientes.html");
}



function cargarPagina() {
    if (idForm>0) {
        //sacar los datos de la tabala
        for(const i in tablacliente){
            var varcliente=JSON.parse(tablacliente[i])
            if (varcliente.id==idForm) {
                document.getElementById("idForm").value= varcliente.id;
                document.getElementById("nombre").value= varcliente.modelo;
                document.getElementById("direccion").value= varcliente.maraca;
                document.getElementById("fecha").value= varcliente.danio;
                document.getElementById("num").value= varcliente.ingreso;
                document.getElementById("telefono").value= varcliente.salida;
                break;
            }
        }
    }
}