({
    myAction : function(component, event, helper) {

    },
    jugada : function(component, event, helper) {
        var myAttribute = component.get("v.clase");

        if (myAttribute == "color") {
            var evento = $A.get("e.c:almacenarIntentos");
            evento.setParams({
                "sumar": true
            });
            evento.fire();
        } 
        else {
            var evento = $A.get("e.c:almacenarIntentos");
            evento.setParams({
                "sumar": false
            });
            evento.fire();
        }
    },
    recibirClic : function(component, event,helper){
        var casilla = component.find("clase").getElement();
        $A.util.addClass(casilla, "color")
    }
})
