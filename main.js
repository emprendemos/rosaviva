const arreglosContenedor = document.getElementById("arreglos-contenedor");

// Obtener los datos de los arreglos
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        // Almacenar los datos en una variable global
        window.arreglos = data.arreglos;
        // Mostrar los arreglos en la página
        mostrarArreglos();
    })
    .catch(error => console.error(error));

// Función para mostrar las arreglos en la página
function mostrarArreglos() {
    const arreglosContenedor = document.getElementById("arreglos-contenedor");
    arreglosContenedor.innerHTML = "";

    // Obtener los valores seleccionados en los filtros
    const filtroModelo = document.getElementById("filtro-modelo").value;
    const filtroPrecio = parseFloat(document.getElementById("filtro-precio").value);

    console.log(filtroPrecio);

    // Recorrer cada arreglo
    window.arreglos.forEach(function (arreglo) {
        // Comprobar si la arreglo cumple con los criterios de los filtros
        if ((filtroModelo === "" || arreglo.modelo === filtroModelo) && (filtroPrecio === 0 || arreglo.precio <= filtroPrecio)
        ) {
            // Crear un elemento div para el arreglo
            const arregloDiv = document.createElement("div");
            arregloDiv.classList.add("arreglo");
            // Crear una imagen para el arreglo
            const arregloImg = document.createElement("img");
            arregloImg.src = arreglo.img;
            arregloImg.alt = arreglo.modelo;
            arregloDiv.appendChild(arregloImg);

            // Crear un h3 para el nombre de el arreglo
            const arregloNombre = document.createElement("h3");
            arregloNombre.innerHTML = arreglo.nombre;
            arregloDiv.appendChild(arregloNombre);

            // Crear un p para el modelo del arreglo
            const arregloModel = document.createElement("p");
            arregloModel.innerHTML = arreglo.modelo;
            arregloDiv.appendChild(arregloModel);

            // Crear un p para el precio del arreglo
            const arregloPrice = document.createElement("p");
            arregloPrice.innerHTML = "$"+arreglo.precio;            
            arregloDiv.appendChild(arregloPrice);

            // Agregar el elemento div a la página
            arreglosContenedor.appendChild(arregloDiv);
        }
    });
}

// Agregar eventos a los filtros para que al cambiar su valor, se vuelva a mostrar los arreglos
document.getElementById("filtro-modelo").addEventListener("change", mostrarArreglos);
document.getElementById("filtro-precio").addEventListener("change", mostrarArreglos);