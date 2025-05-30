const config = require('./config');

// Mensaje de bienvenida personalizado
async function sendWelcome(client, number) {
    await client.sendMessage(number, config.MENSAJE_BIENVENIDA);
}

// Menú de opciones
async function sendMenu(client, number) {
    const menu = config.MENU_OPCIONES.join('\n');
    await client.sendMessage(number, menu);
}

module.exports = {
    sendWelcome,
    sendMenu
};
