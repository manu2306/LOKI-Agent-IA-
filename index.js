require('dotenv').config();
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const axios = require('axios');
const config = require('./config');
const { sendWelcome } = require('./responses');
const { delay } = require('./utils');

const client = new Client({
    authStrategy: new LocalAuth({ clientId: config.SESSION_NAME }),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

// Control de spam - evita responder si el mismo número escribe en menos de 1 minuto
const recentUsers = new Map();

function puedeResponder(numero) {
    const ahora = Date.now();
    const ultimo = recentUsers.get(numero) || 0;
    const diferencia = ahora - ultimo;
    if (diferencia < 60 * 1000) return false;
    recentUsers.set(numero, ahora);
    return true;
}

client.on('qr', qr => {
    console.log('📱 Escanea el QR con WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log(`✅ Loki [${config.SESSION_NAME}] conectado a WhatsApp`);
});

client.on('message', async (msg) => {
    if (msg.from === 'status@broadcast') return;
    if (msg.fromMe) return;
    if (!puedeResponder(msg.from)) return;

    try {
        console.log(`📩 Mensaje de ${msg.from}: ${msg.body}`);

        await delay(1000); // Simula que está escribiendo

        const response = await axios.post(config.N8N_WEBHOOK, {
            session: config.SESSION_NAME,
            from: msg.from,
            body: msg.body,
            type: msg.type,
            timestamp: msg.timestamp
        }, {
            timeout: 30000
        });

        console.log('🤖 Respuesta de N8N:', JSON.stringify(response.data));

        const reply = response.data.output || (response.data[0] && response.data[0].output) || '';

        if (reply) {
            await delay(500);
            await msg.reply(reply);
            console.log('✅ Mensaje enviado');
        }

    } catch (err) {
        console.error('❌ Error:', err.message);
    }
});

client.initialize();
