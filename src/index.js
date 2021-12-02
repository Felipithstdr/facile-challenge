const express = require ('express');
const routes = require ('./routes');

const app = express();

app.use (express.json());
app.use(routes);


app.listen(3333);

//Para rodar no servidor heroku, remova o comentário da linha abaixo, e comente a linha acima;
/*const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});*/