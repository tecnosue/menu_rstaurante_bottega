function generateFood(complementoElegido,menu){
    while(complementoElegido < 1 || complementoElegido  > 3 || isNaN(complementoElegido) ){
            var complementoElegido = parseInt(prompt(`Perfecto ha elegido ${menuElegido}\nAhora le mostramos nuestros complementos\n${complementos[0].id} - ${complementos[0].nombre}\n${complementos[1].id} - ${complementos[1].nombre}\n${complementos[2].id} - ${complementos[2].nombre}\n`, 1));
                }
    
    
            if (complementoElegido == 1) {
                complementoElegido = menu[0].nombre;
                var PreciocomplementoElegido = parseInt(menu[0].precio);
                var IngredientescomplementoElegido = menu[0].ingredientes;
    
            } else if (complementoElegido == 2) {
                complementoElegido = menu[1].nombre;
                var PreciocomplementoElegido = parseInt(menu[1].precio);
                var IngredientescomplementoElegido = menu[1].ingredientes;
            } else   {
                complementoElegido = menu[2].nombre;
                var PreciocomplementoElegido = parseInt(menu[2].precio);
                var IngredientescomplementoElegido = menu[2].ingredientes;
       
            }
        
        return total;

}


generateFood(prompt , desayuno)
enerateFood(prompt , bebida)
enerateFood(prompt , cena)