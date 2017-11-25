/*
El objeto con las propiedades del formulario
*/

var p = {

    entradas: document.querySelector("input.validar"),
    valor: null

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
        p.valor = input.target.value;
        
        if (p.valor == ""){
            
            document.querySelector("#"input.target.id)= "rgba(255,255,0,0.5)"
            
            document.querySelector("[for="+input.target.id+"].obligatorio").style.opacity = 1;
            
        }
    }
}

m.inicioFormulario();
