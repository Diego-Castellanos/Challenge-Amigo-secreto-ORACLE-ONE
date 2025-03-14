// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo"); // Obtener el input
    let nombre = input.value.trim(); // Obtener el valor y eliminar espacios extra

    if (nombre !== "") { // Verificar que el campo no esté vacío
        let lista = document.getElementById("listaAmigos"); // Obtener la lista <ul>
        let item = document.createElement("li"); // Crear un nuevo <li>
        item.textContent = nombre; // Asignar el nombre al <li>
        lista.appendChild(item); // Agregar el <li> a la lista

        input.value = ""; // Limpiar el campo de entrada después de agregar
        input.focus(); // Mantener el foco en el input
    } else {
        alert("Por favor, escribe un nombre antes de añadir.");
    }
}

// Seleccionamos la lista <ul>
let lista = document.getElementById("listaAmigos");

// Recorremos el array y creamos un <li> para cada amigo
amigos.forEach(amigo => {
    let item = document.createElement("li"); // Creamos un <li>
    item.textContent = amigo; // Asignamos el nombre al <li>
    lista.appendChild(item); // Agregamos el <li> dentro de la <ul>
});

function sortearAmigo() {
    // Selecciona todos los elementos <li> dentro de la lista de amigos
    let lista = document.querySelectorAll("#listaAmigos li");

    // Obtiene el elemento donde se mostrará el resultado del sorteo
    let resultado = document.getElementById("resultado");

    // Verifica si la lista está vacía
    if (lista.length === 0) {
        resultado.textContent = "No hay amigos para sortear."; // Muestra un mensaje de advertencia
        return; // Sale de la función para evitar errores
    }

    // Genera un número aleatorio entre 0 y la cantidad de elementos en la lista
    let indiceAleatorio = Math.floor(Math.random() * lista.length);

    // Obtiene el nombre del amigo sorteado usando el índice aleatorio
    let amigoGanador = lista[indiceAleatorio].textContent;

    // Muestra el nombre del amigo ganador en pantalla con emojis 🎉🎶
    resultado.textContent = `🎶🎉 El amigo sorteado es: ${amigoGanador} 🎉🎶`;
}