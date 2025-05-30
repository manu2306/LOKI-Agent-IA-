const config = require('./config');

async function sendCalendlyLink(client, number) {
    const mensaje = `📅 Podés agendar tu consulta directamente en nuestro sistema de turnos online:\n${config.LINK_CALENDLY}`;
    await client.sendMessage(number, mensaje);
}

module.exports = { sendCalendlyLink };
