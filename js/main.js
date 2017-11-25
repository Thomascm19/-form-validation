/*
El objeto con las propiedades del formulario
*/

var p = {

    entradas: document.querySelector("input.validar")


}


/*
El objeto con los metodos del formulario
*/

var m = {
    inicioFormulario: function () {

        for (var i = 0; i < p.entradas.length; i++) {
            p.entradas[i].addEventListener("focus",m.enFoco)
        }
    },
    enFoco: function(input){
        
    }
}

m.inicioFormulario();
