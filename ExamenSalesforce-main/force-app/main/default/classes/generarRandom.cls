public with sharing class generarRandom {

    public generarRandom() {

    }

    @AuraEnabled
    public static List<Integer> generar(Integer numeroAnterior, Integer numeroAnterior2, Integer numeroAnterior3){
        try {
            Integer nuevoNumero3;
            Integer nuevoNumero2;
            Integer nuevoNumero;
            List<Integer> listaNumeros = new List<Integer>();
            do {
                nuevoNumero = (Integer)(Math.floor(Math.random() * 8) + 1);
                nuevoNumero2 = (Integer)(Math.floor(Math.random() * 8) + 1);
                nuevoNumero3 = (Integer)(Math.floor(Math.random() * 8) + 1);
            } while (nuevoNumero == numeroAnterior || nuevoNumero == numeroAnterior2 || nuevoNumero == numeroAnterior3 || nuevoNumero2 == numeroAnterior || nuevoNumero2 == numeroAnterior2 || nuevoNumero2 == numeroAnterior3 || nuevoNumero3 == numeroAnterior || nuevoNumero3 == numeroAnterior2 || nuevoNumero3 == numeroAnterior3);
            numeroAnterior = nuevoNumero;
            numeroAnterior2 = nuevoNumero2;
            numeroAnterior3 = nuevoNumero3;
            listaNumeros.add(nuevoNumero);
            listaNumeros.add(nuevoNumero2);
            listaNumeros.add(nuevoNumero3);
            return listaNumeros;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
