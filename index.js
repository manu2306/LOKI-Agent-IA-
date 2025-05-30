const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const config = require('./config');
const { sendWelcome, sendMenu } = require('./responses');
//const { checkLead } = require('./qualification');
//const { sendCalendlyLink } = require('./calendly');
const { delay } = require('./utils');

const client = new Client({
    authStrategy: new LocalAuth()
});

const recentUsers = new Map();

function puedeResponder(numero) {
    const ahora = Date.now();
    const ultimo = recentUsers.get(numero) || 0;
    const diferencia = ahora - ultimo;
    if (diferencia < 60 * 1000) return false; // Evita responder si pasó menos de 1 min
    recentUsers.set(numero, ahora);
    return true;
}

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot está listo!');
});

client.on('message', async message => {
    const text = message.body.toLowerCase();
    const numero = message.from;

    if (!puedeResponder(numero)) return;

    if (text === 'hola' || text === 'hi') {
        await delay(1500);
        await sendWelcome(client, numero);
        await delay(1000);
        await sendMenu(client, numero);
    }

    //if (text.includes('reunión') || text.includes('agendar')) {
        //await delay(1000);
        //await sendCalendlyLink(client, numero);
    //}

    //await checkLead(client, message);
});

client.initialize();
