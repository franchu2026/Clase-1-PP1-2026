function mostrarRespuesta(opcion) {
    const pantalla = document.getElementById("pantalla-chat");
    
    if (opcion === 'lugares') {
        pantalla.innerHTML = "<p>Puedes visitar nuestra Plaza Frente a la Iglesia, la PLaza Frente a la Municipalidad y el Museo Histórico.</p> <button onclick='location.reload()'>Volver al menú</button>";
    } else if (opcion === 'gastronomia') {
        pantalla.innerHTML = "<p>Contamos con el restaurante EL Galeón u otros cercanos en el centro.</p> <button onclick='location.reload()'>Volver al menú</button>";
    } else if (opcion === 'contacto') {
        pantalla.innerHTML = "<p>Llámanos al 0800-TURISMO.</p> <button onclick='location.reload()'>Volver al menú</button>";
    }
}

// jaja hola xd