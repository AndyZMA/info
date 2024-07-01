document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.getElementById('chatIcon');
    const chatWindow = document.getElementById('chatWindow');
    const chatbotMessages = document.getElementById("chatbot-messages");
    const userMessageInput = document.getElementById("userMessage");
    const sendButton = document.getElementById("sendButton");

    // Funcionalidad del icono de chat
    if (chatIcon && chatWindow) {
        chatIcon.addEventListener('click', function() {
            chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
            if (chatWindow.style.display === 'block') {
                setTimeout(() => {
                    removeLoadingText();
                }, 1000);
            }
        });
    }

    sendButton.addEventListener("click", function () {
        const userMessage = userMessageInput.value.trim();
        if (userMessage !== "") {
            addUserMessage(userMessage);
            userMessageInput.value = "";
            processUserMessage(userMessage);
        }
    });

    userMessageInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });
});

function removeLoadingText() {
    const loadingText = document.querySelector(".loading-text");
    if (loadingText) {
        loadingText.style.animation = 'fadeOut 1s forwards';
        setTimeout(() => {
            loadingText.remove();
            addBotMessage("Hola, ¿cómo puedo ayudarte hoy?");
            setTimeout(() => {
                addOptions();
            }, 500); // Small delay to show the options after the greeting
        }, 1000);
    }
}

function addBotMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.className = "message bot-message";
    messageElement.innerHTML = message;
    document.getElementById("chatbot-messages").appendChild(messageElement);
    scrollToBottom();
}

function addUserMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.className = "message user-message";
    messageElement.textContent = message;
    document.getElementById("chatbot-messages").appendChild(messageElement);
    scrollToBottom();
}

function processUserMessage(message) {
    // Add your own logic to process user message
}

function handleOption(option) {
    if (option === "contactar") {
        addUserMessage("Quiero contactar un asesor");
        addBotMessage("Claro, un asesor se pondrá en contacto contigo pronto.");
    } else if (option === "consultar") {
        addUserMessage("Quiero consultar un trámite");
        addBotMessage("Por favor, escríbenos a: ayuda@mi-tramite-infonavit.com, para verificar el estado de tu trámite");
        enableUserInput();
    }
}

function enableUserInput() {
    document.getElementById("userMessage").disabled = false;
    document.getElementById("sendButton").disabled = false;
}

function addOptions() {
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "chatbot-buttons";

    const contactButton = document.createElement("button");
    contactButton.textContent = "Contactar un asesor";
    contactButton.onclick = () => handleOption('contactar');
    buttonsContainer.appendChild(contactButton);

    const consultButton = document.createElement("button");
    consultButton.textContent = "Consultar trámite";
    consultButton.onclick = () => handleOption('consultar');
    buttonsContainer.appendChild(consultButton);

    document.getElementById("chatbot-messages").appendChild(buttonsContainer);
    scrollToBottom();
}

function scrollToBottom() {
    const chatbotMessages = document.getElementById("chatbot-messages");
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}
