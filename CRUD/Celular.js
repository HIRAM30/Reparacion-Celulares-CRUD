var idForm=localStorage.getItem("idForm");
 idForm=JSON.parse(idForm);
 if (idForm==null) {
    var idForm=0;
 }
 var tablacelular=localStorage.getItem("tablacelularStorager");
 tablacelular=JSON.parse(tablacelular);
 if(tablacelular==null){
     var tablacelular=[];
 }

cargarPagina();

function guardar(){
    console.log("GUARDAR");
    var objeto=JSON.stringify({
        id: (idForm>0)? idForm:(tablacelular.length+1),
        modelo: document.getElementById('modelo').value,
        maraca: document.getElementById('marca').value,
        danio: document.getElementById('color').value

    });
    console.log(objeto);
//editar 
if (idForm>0) {
    for(const i in tablacelular){
        var varcelular=JSON.parse(tablacelular[i])
        if (varcelular.id==idForm) {
            tablacelular[i]=objeto;
            break;
        }
    }
}else{
//nuevas reparaciones
tablacelular.push(objeto);
}


    localStorage.setItem("tablacelularStorager",JSON.stringify(tablacelular));

    window.location.replace("Celulares.html");
}



function cargarPagina() {
    if (idForm>0) {
        //sacar los datos de la tabala
        for(const i in tablacelular){
            var varcelular=JSON.parse(tablacelular[i])
            if (varcelular.id==idForm) {
                document.getElementById("idForm").value= varcelular.id;
                document.getElementById("modelo").value= varcelular.modelo;
                document.getElementById("marca").value= varcelular.maraca;
                document.getElementById("color").value= varcelular.danio;
                break;
            }
        }
    }
}