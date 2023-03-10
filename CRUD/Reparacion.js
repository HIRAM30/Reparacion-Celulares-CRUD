class Reparacion {
    id;
    Danio;
    Ingreso;
    Salida;
    Cliente;
    Reparador;
    Comentario;
    Costo;

    constructor(id,danio,ingreso,salida,cliente,reparador,comentario,costo){
        this.Danio=danio;
        this.Ingreso=ingreso;
        this.Salida=salida;
        this.Cliente=cliente;
        this.Reparador=reparador;
        this.Comentario=comentario;
        this.Costo=costo;
        
    }

}
 var idForm=localStorage.getItem("idForm");
 idForm=JSON.parse(idForm);
 if (idForm==null) {
    var idForm=0;
 }
 var tabla_reparaciones=localStorage.getItem("tablareparacionesStorager");
 tabla_reparaciones=JSON.parse(tabla_reparaciones);
 if(tabla_reparaciones==null){
     var tabla_reparaciones=[];
 }

cargarPagina();

function guardar(){
    console.log("GUARDAR");
    var objeto=JSON.stringify({
        id: (idForm>0)? idForm:(tabla_reparaciones.length+1),
        modelo: document.getElementById('modelo').value,
        maraca: document.getElementById('marca').value,
        danio: document.getElementById('danio').value,
        ingreso: document.getElementById('ingreso').value,
        salida: document.getElementById('salida').value,
        cliente: document.getElementById('cliente').value,
        reparador: document.getElementById('reparador').value,
        comentario: document.getElementById('comentario').value,
        costo:document.getElementById('costo').value

    });
    console.log(objeto);
//editar 
if (idForm>0) {
    for(const i in tabla_reparaciones){
        var varReparacion=JSON.parse(tabla_reparaciones[i])
        if (varReparacion.id==idForm) {
            tabla_reparaciones[i]=objeto;
            break;
        }
    }
}else{
//nuevas reparaciones
tabla_reparaciones.push(objeto);
}


    localStorage.setItem("tablareparacionesStorager",JSON.stringify(tabla_reparaciones));

    window.location.replace("Reparaciones.html");
}



function cargarPagina() {
    if (idForm>0) {
        //sacar los datos de la tabala
        for(const i in tabla_reparaciones){
            var varReparacion=JSON.parse(tabla_reparaciones[i])
            if (varReparacion.id==idForm) {
                document.getElementById("idForm").value= varReparacion.id;
                document.getElementById("modelo").value= varReparacion.modelo;
                document.getElementById("marca").value= varReparacion.maraca;
                document.getElementById("danio").value= varReparacion.danio;
                document.getElementById("ingreso").value= varReparacion.ingreso;
                document.getElementById("salida").value= varReparacion.salida;
                document.getElementById("cliente").value= varReparacion.cliente;
                document.getElementById("reparador").value= varReparacion.reparador;
                document.getElementById("comentario").value= varReparacion.comentario;
                document.getElementById("costo").value= varReparacion.costo;
                break;
            }
        }
    }
}