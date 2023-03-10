class Reparador{
    Nombre;
    Apellidos;
    Sueldo;
    Especialidad;
    Horarios;
    constructor(nombre,apellidos,sueldo,especialdad,horarios){
        this.Nombre=nombre;
        this.Apellidos=apellidos;
        this.Sueldo=sueldo;
        this.Especialidad=especialdad;
        this.Horarios=horarios;
       
    }
    
}

var idForm=localStorage.getItem("idForm");
 idForm=JSON.parse(idForm);
 if (idForm==null) {
    var idForm=0;
 }
 var tabla_reparadores=localStorage.getItem("tablareparadoresStorager");
 tabla_reparadores=JSON.parse(tabla_reparadores);
 if(tabla_reparadores==null){
     var tabla_reparadores=[];
 }

cargarPagina();

function guardar(){
    console.log("GUARDAR");
    var objeto=JSON.stringify({
        id: (idForm>0)? idForm:(tabla_reparadores.length+1),
        nombre: document.getElementById('nombre').value,
        apellidos: document.getElementById('apellidos').value,
        especialidad: document.getElementById('especialidad').value,
        sueldo: document.getElementById('sueldo').value,
        horarios: document.getElementById('horarios').value

    });
    console.log(objeto);
//editar 
if (idForm>0) {
    for(const i in tabla_reparadores){
        var varReparador=JSON.parse(tabla_reparadores[i])
        if (varReparador.id==idForm) {
            tabla_reparadores[i]=objeto;
            break;
        }
    }
}else{
//nuevas reparaciones
tabla_reparadores.push(objeto);
}


    localStorage.setItem("tablareparadoresStorager",JSON.stringify(tabla_reparadores));

    window.location.replace("Reparador.html");
}



function cargarPagina() {
    if (idForm>0) {
        //sacar los datos de la tabala
        for(const i in tabla_reparadores){
            var varReparador=JSON.parse(tabla_reparadores[i])
            if (varReparador.id==idForm) {
                document.getElementById("idForm").value= varReparador.id;
                document.getElementById("nombre").value= varReparador.nombre;
                document.getElementById("apellidos").value= varReparador.apellidos;
                document.getElementById("especialidad").value= varReparador.especialidad;
                document.getElementById("sueldo").value= varReparador.sueldo;
                document.getElementById("horarios").value= varReparador.horarios;
                break;
            }
        }
    }
}