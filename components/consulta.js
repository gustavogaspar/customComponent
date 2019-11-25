"use strict"


module.exports = {

    metadata: () => ({
        "name": "consulta",
        "properties": {
            "produto": { "type": "string", "required": true },
            "periodo": { "type": "string", "required": true },
            "dia": { "type": "string", "required": true },
        },
        "supportedActions": ["OK", "NOK"]
    }),

    invoke: (conversation, done) => {
        // Get query from the incoming message
        let produto = conversation.properties().produto;
        let periodo = conversation.properties().periodo;
        const dia = conversation.properties().dia;

        conversation.logger().info('[INFO] - From the bot:'+produto+" "+dia+" "+periodo)

        var request = require("request");
        var options = { method: 'GET',
         url: 'https://OIC-DIGIDEV-ladsedigdev.integration.ocp.oraclecloud.com:443/ic/api/integration/v1/flows/rest/CONSULTA_BOT_CUTRALE/1.0/question',
         qs: { produto: produto, periodo: periodo, dia: dia },
         headers:
          {
            Host: 'oic-digidev-ladsedigdev.integration.ocp.oraclecloud.com:443',
            Authorization: 'Basic b2ljZGVtb3VzZXI6T3JhY2xlMTIzNDU2' } };

        request(options, function (error, response, body) {
            if (error) {
                conversation.logger().error("Error: ", error)
                conversation.logger().error("API Response: ", response)
                conversation.reply({ text: "Erro de comunicação com API" })
                conversation.keepTurn(true);
                conversation.transition();
                done()
            }
            else {
                var resposta = JSON.parse(body)
                conversation.logger().info(resposta)
                conversation.logger().info("Success, we got this message from de API: ", body.valor)
                conversation.reply({ text: `O valor total é: R$ ${resposta.valor}`})
                conversation.keepTurn(true);
                conversation.transition();
                done()
            }
        });
    }
};