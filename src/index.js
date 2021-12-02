const express = require ('express');
const routes = require ('./routes');

const app = express();

app.use (express.json());
app.use(routes);


# use alternate localhost and the port Heroku assigns to $PORT

const port = process.env.PORT || 5000;

//app.listen(3333);
app.listen(PORT, () => {
	console.log("Server started......." + PORT);
});