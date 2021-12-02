const express = require ('express');
const routes = require ('./routes');

const app = express();

app.use (express.json());
app.use(routes);

const port = process.env.PORT || 5000;

app.listen(3333);
//Para rodar localmente, remova o comentário da linha abaixo, e comente a linha subsequente;
/*app.listen(PORT, () => {
	console.log("Server started......." + PORT);
});*/
