{ //Con tuplas
    const elementoInventario:[string, number] = ['tuerca', 11];

    // despues lo desestructuramos
    const [nombre, cantidad] = elementoInventario;
    
    const mensaje = agregarInventario(nombre, cantidad);
    
    console.log('[Ejercicio 1.6]', mensaje);
    
    function agregarInventario(nombre: string, cantidad: number): string {
        return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
    }
}



//---------------------------------------

{ //Con Objetos 
    const elementoInventario = {nombre:'tuerca', cantidad:11};

    // despues lo desestructuramos
    const {nombre, cantidad} = elementoInventario;
    
    const mensaje = agregarInventario(nombre, cantidad);
    
    console.log('[Ejercicio 1.6]', mensaje);
    
    function agregarInventario(nombre: string, cantidad: number): string {
        return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
    }
}
