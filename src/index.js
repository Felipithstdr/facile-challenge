const express = require ('express');
const routes = require ('./routes');

const app = express();

app.use (express.json());
app.use(routes);

//Para rodar localmente, remova o comentário da linha abaixo, e comente a linha subsequente;
//app.listen(3333);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});