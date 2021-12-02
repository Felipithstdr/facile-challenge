const express = require ('express');
const routes = require ('./routes');

const app = express();

app.use (express.json());
app.use(routes);

//Para rodar localmente, remova o comentário da linha abaixo, e comente a linha subsequente;
//app.listen(3333);

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
server.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});