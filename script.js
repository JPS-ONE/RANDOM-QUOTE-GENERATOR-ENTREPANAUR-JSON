// Función para cargar y mostrar citas aleatorias
const generateQuote = function() {
    fetch('quotes.json') // Ruta relativa al archivo JSON
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex];
            
            const quoteText = randomQuote.text;
            const quoteAuthor = randomQuote.from;

            // Mostrar la cita en tu página HTML
            document.getElementById("quotes").textContent = quoteText;
            document.getElementById("author").textContent = `- ${quoteAuthor}`; // De este modo para añadir el guión antes del author
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


// Función para cambiar el color de fondo del body
function changeBackgroundColor() {
    const colors = ["#ff5733", "#33ff57", "#5733ff", "#ff33a6", "#a633ff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}


window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', function() {
        generateQuote();
        changeBackgroundColor(); 
    });
}






