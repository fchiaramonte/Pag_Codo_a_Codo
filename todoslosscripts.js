// SCRIPTS DEL INDEX.HTML
    // <!-- Función de los botones de la barra de nav -->
    document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll(".nav-link");

        links.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault(); 
                const url = this.getAttribute("href");
                window.location.href = url; 
            });
        });
    });

    // <!-- Función del botón de la imagen del encabezado --> 
    var boton = document.getElementById("todaslasrecetas");

    boton.addEventListener("click", function() {
        window.open("recetas.html", "_blank");
    });


    // <!-- Funcionalidad de los botones del form -->
    const emailInput = document.getElementById('emailInput');
    const nameInput = document.getElementById('nameInput');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const cancelButton = document.getElementById('cancelButton');

    // Boton enviar
    sendButton.addEventListener('click', function() {
        // Recopila los valores del formulario
        const email = emailInput.value;
        const name = nameInput.value;
        const message = messageInput.value;

        // Boton cancelar
        emailInput.value = '';
        nameInput.value = '';
        messageInput.value = '';
    });

    //  Funcionalidad de borrar del boton cancelar
    cancelButton.addEventListener('click', function() {
        // Restablece los valores del formulario
        emailInput.value = '';
        nameInput.value = '';
        messageInput.value = '';
    });

    // <!-- Funcionalidad del botón de la card 1 -->
    function redirectToRecetas() {
        window.location.href = 'recetasdulces.html'; 
    }