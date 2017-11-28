/*
El objeto con las propiedades del formulario
*/

var p = {

    entradas: document.querySelectorAll("input.validar"),
    valor: null

}


/*
El objeto con los metodos del formulario
*/

var m = {

    inicioFormulario: function () {

        for (var i = 0; i < p.entradas.length; i++) {

            p.entradas[i].addEventListener("focus", m.enFoco)
            p.entradas[i].addEventListener("blur", m.FueraFoco)

        }

    },

    enFoco: function (input) {

        p.valor = input.target.value;

        if (p.valor == "") {

            document.querySelector("#" + input.target.id).style.background = "rgba(255,255,0,.5)";

            document.querySelector("[for=" + input.target.id + "] .obligatorio").style.opacity = 0;

        }

    },
    FueraFoco: function(input){
        
        document.querySelector("#" + input.target.id).style.background = "white";

            document.querySelector("[for=" + input.target.id + "] .obligatorio").style.opacity = 1;
    }

}

m.inicioFormulario();
