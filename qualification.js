const config = require('./config');
const axios = require('axios');

// Revisa si el mensaje contiene palabras clave y manda datos a n8n
async function checkLead(client, message) {
    const text = message.body.toLowerCase();
    const numero = message.from;

    const contienePalabraClave = config.PALABRAS_CLAVE_LEAD.some(palabra =>
        text.includes(palabra)
    );

    if (contienePalabraClave) {
        // Enviar mensaje al usuario
        await client.sendMessage(numero, "✅ Gracias por tu interés. Hemos recibido tu consulta y uno de nuestros asesores se pondrá en contacto contigo lo antes posible." );

        // Mandar a n8n o CRM
        const payload = {
            telefono: numero,
            mensaje: message.body,
            fecha: new Date().toISOString()
        };

        try {
            await axios.post(config.URL_WEBHOOK_N8N, payload);
        } catch (error) {
            console.error("❌ Error al enviar lead a n8n:", error.message);
        }
    }
}

module.exports = {
    checkLead
};
