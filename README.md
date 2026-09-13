# LOKI - Agent IA
# Loki — Agente de Inteligencia Artificial para WhatsApp

Loki es un agente conversacional conectado a WhatsApp, desarrollado por [Andino](https://github.com/manu2306). Utiliza inteligencia artificial para atender clientes de forma autónoma, personalizable para cualquier empresa o emprendimiento.

---

## Características

-  Respuestas inteligentes impulsadas por IA (Claude / Gemini / GPT)
-  Memoria de conversación por sesión
-  Integrado con N8N para flujos automatizados
-  Compatible con Calendly para agendamiento de citas
-  Anti-spam integrado
-  100% personalizable por cliente

---

##  Arquitectura

---

##  Instalación

### Requisitos
- Node.js 18+
- PM2 (para producción)
- N8N (self-hosted o cloud)

### Pasos

1. Clona el repositorio:
```bash
git clone https://github.com/manu2306/ODIN-bot.git
cd ODIN-bot
```

2. Instala dependencias:
```bash
npm install
```

3. Configura el archivo `.env`:
```bash
cp .env.example .env
```

4. Edita `config.js` con los datos del cliente.

5. Inicia Loki:
```bash
pm2 start index.js --name loki
```

6. Escanea el QR con WhatsApp.

---

## ⚙️ Configuración por cliente

Todo se configura en `config.js`:

```javascript
module.exports = {
    SESSION_NAME: 'nombre-cliente',
    NOMBRE_EMPRESA: 'Nombre del Negocio',
    N8N_WEBHOOK: 'https://tu-n8n.com/webhook/loki',
    LINK_CALENDLY: 'https://calendly.com/tu-link',
};
```

---

## 🔗 Conexión con N8N

1. Crea un workflow en N8N con un nodo **Webhook**
2. Copia la URL del webhook y pégala en `config.js`
3. Conecta el webhook a un **AI Agent** con el modelo de tu preferencia
4. Agrega un nodo **Respond to Webhook** al final

---

##  Estructura del proyecto
loki/
├── index.js # Bot principal
├── config.js # Configuración del cliente
├── responses.js # Mensajes predefinidos
├── utils.js # Funciones auxiliares
├── sendCalendlyLink.js # Integración con Calendly (opcional)
└── README.md


---

## Desarrollado por

**Andino** — Agencia de soluciones tecnológicas a medida  
Creado por Manuel Corzo
