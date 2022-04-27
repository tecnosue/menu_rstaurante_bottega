'use strict'

const bebidas = [
    {nombre:'Zumo de Naranja',precio:3},
    {nombre:'Café con Leche',precio:2}
]
const desayuno = [
    {nombre:'Tostadas con Mermelada',precio:3},
    {nombre:'Tostada de Jamón con Tomate',precio:4 }
]

const menus = [
    { nombre: 'Paella', precio: 10, id: 1,ingredientes: 'Arroz, calamar, gambas y mejillones.' },
    { nombre: 'Ensalada Aragonesa', precio: 8, id: 2, ingredientes:'Lechuga, tomate, cebolla, pepino, olivas negras huevo duro y jamón serrano.' },
    { nombre: 'Hamburguesa de Pollo', precio: 6, id: 3, ingredientes:`Pollo crujiente, lechuga, tomate, cebolla, mahonesa.` },
]

const complementos = [
    { nombre: 'Patatas Fritas', precio: 2, id: 1,ingredientes: 'Patatas.' },
    { nombre: 'Alitas de Pollo', precio: 6, id: 2, ingredientes: 'Alitas de Pollo y salsa barbacoa.'},
    { nombre: 'Patatas Bravas', precio: 4, id: 3, ingredientes: 'Patatas, Mayonesa y Picante.' }
]

var tipoMenu = parseInt(prompt(`Bienvenido al restaurante Botegga\nElija tipo de menu:\n1-DESAYUNO\n2-ALMUERZO\n3-CENA`,1));
while(tipoMenu < 1 || tipoMenu  > 3 || isNaN(tipoMenu) ){
    var tipoMenu = parseInt(prompt(`Bienvenido al restaurante Botegga\n Elija tipo de menu:\n1-DESAYUNO\n2-ALMUERZO\n3-CENA`));
}
    if (tipoMenu == 1) {
        var desayunoElegido = parseInt(prompt(`Desayunos para hoy:\n1-${desayuno[0].nombre}, ${desayuno[0].precio} €\n2-${desayuno[1].nombre}, ${desayuno[1].precio} €\nDiga el número de desayuno que desea`, 1));

        while(desayunoElegido < 1 || desayunoElegido  > 2 || isNaN(desayunoElegido)) {
            var desayunoElegido = parseInt(prompt(`Desayunos para hoy:\n1- ${desayuno[0].nombre}, ${desayuno[0].precio} €\n2-${desayuno[1].nombre}, ${desayuno[1].precio} €\nDiga el número de desayuno que desea`, 1));
        }
            if (desayunoElegido == 1) {
                desayunoElegido = desayuno[0].nombre;
                var PreciodesayunoElegido = parseInt(desayuno[0].precio);
                
            
            } else {
                desayunoElegido = desayuno[1].nombre;
                var PreciodesayunoElegido = parseInt(desayuno[1].precio);
                
            }
            
    
        
    
    
        alert(`Ha elegido:\n${desayunoElegido}, ${PreciodesayunoElegido} €`);
    
    
    
    
        var bebidaElegida = parseInt(prompt(`Ha elegido: ${desayunoElegido}\nElija una bebida:\n1 -${bebidas[0].nombre}, ${bebidas[0].precio} €\n2 -${bebidas[1].nombre}, ${bebidas[1].precio} €`, 1));
    
        while(bebidaElegida < 1 || bebidaElegida  > 2 || isNaN(bebidaElegida) ){
            var bebidaElegida = parseInt(prompt(`Ha elegido: ${desayunoElegido}\nElija una bebida:\n1 -${bebidas[0].nombre}, ${bebidas[0].precio} €\n2 -${bebidas[1].nombre}, ${bebidas[1].precio} €`, 1));
        }
            
            
            if (bebidaElegida == 1) {
                bebidaElegida = bebidas[0].nombre;
                var PreciobebidaElegida = parseInt(bebidas[0].precio);
            
            } else  {
                bebidaElegida = bebidas[1].nombre;
                var PreciobebidaElegida = parseInt(bebidas[1].precio);
            }
            
        
    
        alert(`Ha elegido:\n ${bebidaElegida}, ${PreciobebidaElegida}€ `);
    
    
    function PrecioTotaldesayuno() {
        return (PreciodesayunoElegido + PreciobebidaElegida);
    };
    PrecioTotaldesayuno()
    
    confirm(`Su desayuno:\n${desayunoElegido} con ${bebidaElegida}, el precio total es:\n${PrecioTotaldesayuno()} €`);
    }else if (tipoMenu == 2){
        var menuElegido = parseInt(prompt(`Hoy tenemos:\nMenu 1: ${menus[0].nombre},\nMenu 2: ${menus[1].nombre},\nMenu 3: ${menus[2].nombre}\nDiga el número de menu que desea`, 1));

    while(menuElegido < 1 || menuElegido  > 3 || isNaN(menuElegido) ){
        var menuElegido = parseInt(prompt(`Hoy tenemos:\nMenu 1: ${menus[0].nombre},\nMenu 2: ${menus[1].nombre},\nMenu 3: ${menus[2].nombre}\nDiga el número de menu que desea`, 1));
    }
        if (menuElegido == 1) {
            menuElegido = menus[0].nombre;
            var PreciomenuElegido = parseInt(menus[0].precio);
            var IngredientesmenuElegido = menus[0].ingredientes;

        } else if (menuElegido == 2) {
            menuElegido = menus[1].nombre;
            var PreciomenuElegido = parseInt(menus[1].precio);
            var IngredientesmenuElegido = menus[1].ingredientes;


        } else  {
            menuElegido = menus[2].nombre;
            var PreciomenuElegido = parseInt(menus[2].precio);
            var IngredientesmenuElegido = menus[2].ingredientes;

        } 


    alert(`Ha elegido:\n ${menuElegido}:\nIngredientes:\n${IngredientesmenuElegido}\n${PreciomenuElegido}€ `);




    var complementoElegido = parseInt(prompt(`Perfecto ha elegido ${menuElegido}\nAhora le mostramos nuestros complementos\n${complementos[0].id} - ${complementos[0].nombre}\n${complementos[1].id} - ${complementos[1].nombre}\n${complementos[2].id} - ${complementos[2].nombre}\n`, 1));

    while(complementoElegido < 1 || complementoElegido  > 3 || isNaN(complementoElegido) ){
        var complementoElegido = parseInt(prompt(`Perfecto ha elegido ${menuElegido}\nAhora le mostramos nuestros complementos\n${complementos[0].id} - ${complementos[0].nombre}\n${complementos[1].id} - ${complementos[1].nombre}\n${complementos[2].id} - ${complementos[2].nombre}\n`, 1));
            }


        if (complementoElegido == 1) {
            complementoElegido = complementos[0].nombre;
            var PreciocomplementoElegido = parseInt(complementos[0].precio);
            var IngredientescomplementoElegido = complementos[0].ingredientes;

        } else if (complementoElegido == 2) {
            complementoElegido = complementos[1].nombre;
            var PreciocomplementoElegido = parseInt(complementos[1].precio);
            var IngredientescomplementoElegido = complementos[1].ingredientes;
        } else   {
            complementoElegido = complementos[2].nombre;
            var PreciocomplementoElegido = parseInt(complementos[2].precio);
            var IngredientescomplementoElegido = complementos[2].ingredientes;
        } 

    alert(`Ha elegido:\n ${complementoElegido}:\nIngredientes:\n${IngredientescomplementoElegido}\n${PreciocomplementoElegido}€ `);


    function PrecioTotal() {
        return (PreciomenuElegido + PreciocomplementoElegido);
    };
    PrecioTotal()

    confirm(`Gracias ha elegido ${menuElegido} con Extra ${complementoElegido} el precio total es ${PrecioTotal()}€`);
    }else {
            var menuElegido = parseInt(prompt(`Hoy tenemos:\nMenu 1: ${menus[0].nombre},\nMenu 2: ${menus[1].nombre},\nMenu 3: ${menus[2].nombre}\nDiga el número de menu que desea`, 1));

    while(menuElegido < 1 || menuElegido  > 3 || isNaN(menuElegido) ){
        var menuElegido = parseInt(prompt(`Hoy tenemos:\nMenu 1: ${menus[0].nombre},\nMenu 2: ${menus[1].nombre},\nMenu 3: ${menus[2].nombre}\nDiga el número de menu que desea`, 1));
    }
        if (menuElegido == 1) {
            menuElegido = menus[0].nombre;
            var PreciomenuElegido = parseInt(menus[0].precio)+2;
            var IngredientesmenuElegido = menus[0].ingredientes;

        } else if (menuElegido == 2) {
            menuElegido = menus[1].nombre;
            var PreciomenuElegido = parseInt(menus[1].precio)+2;
            var IngredientesmenuElegido = menus[1].ingredientes;


        } else  {
            menuElegido = menus[2].nombre;
            var PreciomenuElegido = parseInt(menus[2].precio)+2;
            var IngredientesmenuElegido = menus[2].ingredientes;

        } 


    alert(`Ha elegido:\n ${menuElegido}:\nIngredientes:\n${IngredientesmenuElegido}\n${PreciomenuElegido}€ `);




    var complementoElegido = parseInt(prompt(`Perfecto ha elegido ${menuElegido}\nAhora le mostramos nuestros complementos\n${complementos[0].id} - ${complementos[0].nombre}\n${complementos[1].id} - ${complementos[1].nombre}\n${complementos[2].id} - ${complementos[2].nombre}\n`, 1));

    while(complementoElegido < 1 || complementoElegido  > 3 || isNaN(complementoElegido) ){
        var complementoElegido = parseInt(prompt(`Perfecto ha elegido ${menuElegido}\nAhora le mostramos nuestros complementos\n${complementos[0].id} - ${complementos[0].nombre}\n${complementos[1].id} - ${complementos[1].nombre}\n${complementos[2].id} - ${complementos[2].nombre}\n`, 1));
            }


        if (complementoElegido == 1) {
            complementoElegido = complementos[0].nombre;
            var PreciocomplementoElegido = parseInt(complementos[0].precio)+2;
            var IngredientescomplementoElegido = complementos[0].ingredientes;

        } else if (complementoElegido == 2) {
            complementoElegido = complementos[1].nombre;
            var PreciocomplementoElegido = parseInt(complementos[1].precio)+2;
            var IngredientescomplementoElegido = complementos[1].ingredientes;
        } else   {
            complementoElegido = complementos[2].nombre;
            var PreciocomplementoElegido = parseInt(complementos[2].precio)+2;
            var IngredientescomplementoElegido = complementos[2].ingredientes;
        } 

    alert(`Ha elegido:\n ${complementoElegido}:\nIngredientes:\n${IngredientescomplementoElegido}\n${PreciocomplementoElegido}€ `);


    function PrecioTotal() {
        return (PreciomenuElegido + PreciocomplementoElegido);
    };
    PrecioTotal()

    confirm(`Gracias ha elegido ${menuElegido} con Extra ${complementoElegido} el precio total es ${PrecioTotal()}€`);
    }
