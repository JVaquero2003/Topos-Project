({
    myAction : function(component, event, helper) {

    },
    guardarPartida : function(component, event, helper){
        var puntosRonda = event.getParam("score")
        var list = component.get("v.historico")
        list.push(puntosRonda);
        component.set("v.historico", list);
    }
})
