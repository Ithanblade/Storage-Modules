// Importar node-localstorage
const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage("./scratch"); // Directorio para almacenar los datos

// Obtener un consejo aleatorio de la API
fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(json => {
        let advice = {
            advice: json.slip.advice
        };
        guardarLocalStorage(advice);
    })
    .catch(error => console.error("Error:", error));

// Función para guardar el consejo en localStorage
const guardarLocalStorage = (data) => {
    localStorage.setItem("advice", JSON.stringify(data));
};

// Función para obtener el consejo de localStorage
const obtenerLocalStorage = () => {
    const respuesta = localStorage.getItem("advice") ? JSON.parse(localStorage.getItem("advice")) : "No hay datos";
    console.log(respuesta);
};

// Función para eliminar el consejo de localStorage
const eliminarLocalStorage = () => {
    !localStorage.getItem("advice") ? console.log("No hay clave") : localStorage.removeItem("advice");
};

// Ejecuciones de ejemplo
obtenerLocalStorage("advice"); // Para ver el dato almacenado
eliminarLocalStorage(); // Para eliminar el dato almacenado
