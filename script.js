// Array de colores de fondo posibles
const colors = ["#260934", "#760949", "#8da3e7", "#e5efd3", "#ffaef4", "#e73b78", "#d7fff5"];


// Espera a que la ventana (página) se cargue completamente antes de ejecutar el código
window.onload = function() {
    
    // Función para cargar y mostrar citas aleatorias
    function generateQuote() {
        // Realiza una solicitud para cargar un archivo JSON con citas
        fetch('quotes.json') // Ruta relativa al archivo JSON
            .then(response => response.json()) // Convierte la respuesta en JSON
            .then(data => {
                // Obtiene una cita aleatoria del JSON
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomQuote = data[randomIndex];
        
                const quoteText = randomQuote.text;
                const quoteAuthor = randomQuote.from;
        
                // Muestra la cita en el elemento HTML con el ID "quotes"
                const quoteElement = document.getElementById("quotes");
                quoteElement.textContent = `"${quoteText}"`;
        
                // Muestra el autor de la cita en el elemento HTML con el ID "author"
                const authorElement = document.getElementById("author");
                authorElement.textContent = `- ${quoteAuthor}`; // Muestra el autor
        
                // Ajusta el tamaño del elemento con la clase "container" según la longitud del texto
                const textLength = quoteText.length;
                const container = document.querySelector(".container");
                container.style.width = textLength + "ch";
                container.style.height = "auto"; // Permite que la altura se ajuste automáticamente
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

        // Genera una cita cuando se carga la página
        generateQuote();
    
        // Agrega un evento de clic al botón con el ID "generate"
        const generateButton = document.getElementById("generate");
        generateButton.addEventListener('click', function() {
            // Genera una nueva cita al hacer clic en el botón
            generateQuote();
            
            // Cambia el fondo del body al hacer clic en el botón
            changeBackgroundColor(); 
        });
        
    
// Función para cambiar el color de fondo del body
function changeBackgroundColor() {
    
    // Obtiene el color siguiente de la lista
    const nextColor = colors.shift();

    // Cambia el color de fondo del body
    document.body.style.backgroundColor = nextColor;

    // Añade el primer color al final de la lista
    colors.push(colors[0]);
}



// // Función para cambiar el color de fondo del body de forma aleatoria
// function changeBackgroundColor() {

//     // Obtiene un color aleatorio del array
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];

//     // Cambia el color de fondo del body
//     document.body.style.backgroundColor = randomColor;
// }

    

}







