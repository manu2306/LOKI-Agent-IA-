module.exports = {
    // Identificador único de esta instancia (una por cliente)
    SESSION_NAME: 'loki',

    // Nombre del negocio
    NOMBRE_EMPRESA: 'Andino',

    // URL del webhook de N8N
    N8N_WEBHOOK: process.env.N8N_WEBHOOK || 'http://localhost:5678/webhook/loki-andino',

    // Link de Calendly (opcional, activar en index.js si se usa)
    LINK_CALENDLY: '',

    // Palabras clave para detectar leads (opcional)
    PALABRAS_CLAVE_LEAD: ['precio', 'información', 'consulta', 'cotización']
};
