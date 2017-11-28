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
             p.entradas[i].addEventListener("change", m.cambioEntrada)
        }

    },

    enFoco: function (input) {

        p.valor = input.target.value;

        if (p.valor == "") {

            document.querySelector("#" + input.target.id).style.background = "rgba(255,255,0,.5)";

            document.querySelector("[for=" + input.target.id + "] .obligatorio").style.opacity = 0;

        }
        	document.querySelector("[for=" + input.target.id + "]").appendChild(document.createElement("DIV")).setAttribute("class","error")

    },
    FueraFoco: function(input){
        
        document.querySelector("#" + input.target.id).style.background = "white";

            document.querySelector("[for=" + input.target.id + "] .obligatorio").style.opacity = 1;
    },

    cambioEntrada: function(input){

    	p.valor = input.target.value;

    	if (p.valor != ""){



    	switch (input.target.id){

    		case "nombre":

    		if(p.valor.length < 2 || p.valor.length > 6){

    			document.querySelector("[for=" + input.target.id + "] .error").innerHTML = '<span style="color:red">"Error al ingresar los datos: '+input.target.placeholder+'</span>';
    		}else{
    			document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error"));
    		}

    		break; 

    		case "password":

    		break; 

    		case "email":

    		break; 
    	}
    }
}
}

m.inicioFormulario();
