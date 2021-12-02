const express = require ('express');

const NameEncrypted = require('./controllers/NameEncryptedController');

const routes = express.Router();

routes.get('/encripts', NameEncrypted.index);
routes.get('/encripts/:id', NameEncrypted.nameDetails);
routes.post('/encripts', NameEncrypted.create);

module.exports = routes;