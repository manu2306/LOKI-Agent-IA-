# Loki — Agente de Inteligencia Artificial para WhatsApp

Loki es un agente conversacional conectado a WhatsApp, desarrollado por [Andino](https://github.com/manu2306). Utiliza inteligencia artificial para atender clientes de forma autonoma, personalizable para cualquier empresa o emprendimiento.

---

## Caracteristicas

- Respuestas inteligentes impulsadas por IA (Claude / Gemini / GPT)
- Memoria de conversacion por sesion
- Integrado con N8N para flujos automatizados
- Compatible con Calendly para agendamiento de citas
- Anti-spam integrado
- 100% personalizable por cliente

---

## Arquitectura

WhatsApp -> Loki (whatsapp-web.js) -> N8N Webhook -> AI Agent -> Respuesta

---

## Instalacion

### Requisitos

- Node.js 18+
- PM2 (para produccion)
- N8N (self-hosted o cloud)

### Pasos

1. Clona el repositorio:
git clone https://github.com/manu2306/LOKI-Agent-IA-.git
cd LOKI-Agent-IA-

2. Instala dependencias:
npm install

3. Configura el archivo .env:
cp .env.example .env

4. Edita config.js con los datos del cliente.

5. Inicia Loki:
pm2 start index.js --name loki

6. Escanea el QR con WhatsApp.

---

## Configuracion por cliente

Todo se configura en config.js:

module.exports = {
    SESSION_NAME: 'nombre-cliente',
    NOMBRE_EMPRESA: 'Nombre del Negocio',
    N8N_WEBHOOK: 'https://tu-n8n.com/webhook/loki',
    LINK_CALENDLY: 'https://calendly.com/tu-link',
};

---

## Conexion con N8N

1. Crea un workflow en N8N con un nodo Webhook
2. Copia la URL del webhook y pegala en config.js
3. Conecta el webhook a un AI Agent con el modelo de tu preferencia
4. Agrega un nodo Respond to Webhook al final

---

## Estructura del proyecto

loki/
├── index.js            # Bot principal
├── config.js           # Configuracion del cliente
├── responses.js        # Mensajes predefinidos
├── utils.js            # Funciones auxiliares
├── sendCalendlyLink.js # Integracion con Calendly (opcional)
└── README.md

---

## Desarrollado por

Andino — Agencia de soluciones tecnologicas a medida
Creado por Manuel Corzo
