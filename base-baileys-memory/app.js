const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flujoPrincipal = addKeyword(['Hola', 'Buenas', 'Oe', 'Confirma'])
.addAnswer(['Bienvenido, en que podemos ayudarte'])
.addAnswer('¿Cual es tu correo?',{capture:true},(ctx, {fallBack}) => {

    if (!ctx.body.incluides('@')){
        return fallBack()
    }
    console.log('Mensaje entrante: ',ctx.body)
})

const flujoSecundario = addKeyword('Gracias').addAnswer('De nada fue un gusto ayudarte!')
