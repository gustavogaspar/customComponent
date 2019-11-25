var unirest = require("unirest");
var req = unirest("GET", "https://OIC-DIGIDEV-ladsedigdev.integration.ocp.oraclecloud.com:443/ic/api/integration/v1/flows/rest/CONSULTA_BOT_CUTRALE/1.0/question");
req.query({
 "produto": "%",
 "periodo": "tarde",
 "dia": "ontem"
});
req.headers({
 "cache-control": "no-cache",
 "Connection": "keep-alive",
 "Accept-Encoding": "gzip, deflate",
 "Host": "oic-digidev-ladsedigdev.integration.ocp.oraclecloud.com:443",
 "Postman-Token": "4dc919fc-5f30-4d62-a6ba-55452894cef2,172c7ed0-c3a4-4d73-b9d6-9bec4b7202bf",
 "Cache-Control": "no-cache",
 "Accept": "/",
 "User-Agent": "PostmanRuntime/7.19.0",
 "Authorization": "Basic b2ljZGVtb3VzZXI6T3JhY2xlMTIzNDU2"
});
req.end(function (res) {
 if (res.error) throw new Error(res.error);
 console.log(res.body);
});