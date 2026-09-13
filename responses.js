const config = require('./config');

// Mensaje de bienvenida
async function sendWelcome(client, number) {
    await client.sendMessage(number, `👋 ¡Hola! Soy Loki, el asistente virtual de ${config.NOMBRE_EMPRESA}. ¿En qué puedo ayudarte hoy?`);
}

module.exports = { sendWelcome };
