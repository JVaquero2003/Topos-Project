({
    myAction : function(component, event, helper) {

    },
    callApex : function(component, event, helper){
        var action = component.get("c.generar");
        var numIntento = event.getParam("numero");
        var numeroAnterior = component.get("v.ultimoNumeroGenerado")
        var numeroAnterior2 = component.get("v.ultimoNumeroGenerado2")
        var numeroAnterior3 = component.get("v.ultimoNumeroGenerado3")
        component.set("v.numIntento", numIntento);
        console.log(numeroAnterior+ " " + numeroAnterior2 + " " + numeroAnterior3)
        action.setParams({
            "numeroAnterior" : numeroAnterior,
            "numeroAnterior2" : numeroAnterior2,
            "numeroAnterior3" : numeroAnterior3,
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var listaNumeros = response.getReturnValue();
                /* 
                var numero = response.getReturnValue()
                var numero2 = response.getReturnValue()
                component.set("v.numero", numero);
                component.set("v.numero2", numero2); */
                console.log(listaNumeros[0]);
                console.log(listaNumeros[1]);
                console.log(listaNumeros[2]);
                var selectedOption = component.get("v.selectedOption")
                if(listaNumeros[0] != listaNumeros[1] && listaNumeros[0] != listaNumeros[2] && listaNumeros[1] != listaNumeros[2]){
                    if(listaNumeros[0] != numeroAnterior && listaNumeros[0] != numeroAnterior2 && listaNumeros[0] != numeroAnterior3 &&
                        listaNumeros[1] != numeroAnterior && listaNumeros[1] != numeroAnterior2 && listaNumeros[1] != numeroAnterior3 &&
                        listaNumeros[2] != numeroAnterior && listaNumeros[2] != numeroAnterior2 && listaNumeros[2] != numeroAnterior3){
                        component.set("v.ultimoNumeroGenerado", listaNumeros[0]);
                        component.set("v.ultimoNumeroGenerado2", listaNumeros[1]);
                        component.set("v.ultimoNumeroGenerado3", listaNumeros[2]);
                    }
                    for(var i = 0; i < selectedOption; i++){
                        console.log(listaNumeros[i] + "Desde el for")
                        var numPeroString = listaNumeros[i].toString();
                        
                        component.find(numPeroString).set("v.clase", "color");
                    }
                }
                else{
                    var evento = $A.get("e.c:reloadApexMethod");
                    evento.fire();
                }
            }
        });
        $A.enqueueAction(action);
    },
    botonPlay : function(component, event, helper){
        for (var x = 1; x<9; x++){
            var numPeroString2 = x.toString();
            component.find(numPeroString2).set("v.clase", "limpia");
        }
        component.set("v.score", 0);
        var evento = $A.get("e.c:reloadApexMethod");
        evento.fire();
    },

    aumentarContador : function(component, event){
        var acierto = event.getParam("sumar");
        if (acierto){
            var numScore = component.get("v.score");
            component.set("v.score", numScore+1);
            for (var x = 1; x<9; x++){
                var numPeroString2 = x.toString();
                component.find(numPeroString2).set("v.clase", "limpia");
            }
        }
        else{
            alert("Fallaste, Continua Jugando con el contador a 0")
            component.set("v.score", 0);
            for (var x = 1; x<9; x++){
                var numPeroString2 = x.toString();
                component.find(numPeroString2).set("v.clase", "limpia");
            }
        }
        var evento = $A.get("e.c:reloadApexMethod");
        evento.fire();
    },
    stopGame : function(component, event){
        alert("Has Finalizado tu partida");
        component.set("v.highscore",
        component.get("v.score"));

        var puntosRecogidos = component.get("v.score")
        var evento = $A.get("e.c:partidasJugadas");
        evento.setParams({"score" : puntosRecogidos});
        evento.fire();
        component.set("v.score", 0);
        
    },
})
