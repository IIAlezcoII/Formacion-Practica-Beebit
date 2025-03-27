// 1. Crea un set que almacene cinco libros
    mySet = new Set (["La Comunidad del Anillo", "Darth Plagueis", "Metro 2033", "Consecuencias", "La Caída del Imperio"]);
    
// 2. Añade otro libro
    mySet.add("Thrawn")
// 3. Elimina un libro
    mySet.delete("La Comunidad del Anillo")
    
// 4. Crea un mapa que asocie el número del mes a su nombre
    myMap = new Map([
        [1, "Enero"],
        [2, "Febrero"],
        [3, "Marzo"],
        [4, "Abril"],
        [5, "Mayo"],
        [6, "Junio"],
        [7, "Julio"],
        [8, "Agosto"],
        [9, "Septiembre"],
        [10, "Octubre"],
        [11, "Noviembre"],
        [12, "Diciembre"]
    ]);
    
// 5. Comprueba si el mes número 5 existe en el map e imprime su valor
    if(myMap.has(5)){
        console.log(myMap.get(5));
    }
// 6. Añade al mapa una clave con un array que almacene los meses de verano
    myArray = new Array("Junio", "Julio", "Agosto");
    myMap.set(myArray);
    
// 7. Crea un array, transfórmalo en set, y almacénalo en un map

    myArray2 = [];
    mySet = new Set(myArray2)
    myMap.set(mySet);
    console.log(myMap)


