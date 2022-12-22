function Card(){

    const producto ={
        precio: 500,
        nombre: "Pantalón",
        descripción: "Pantalón talla XS"
    }

    return(
        <div>
            <h3>{producto.nombre}</h3>
            <h3>{producto.precio}</h3>
            <h3>{producto.descripción}</h3>
        </div>
    )
}