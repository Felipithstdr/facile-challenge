const connection = require('../database/connection');
const { AES, enc } = require("crypto-js");

module.exports = {
    async create(request, response){
        const {name} = request.body;
        
        // Funcao de criptar, pegando o nome e inserindo uma senha para quando necessitar descriptografar
        const cryptedData = AES.encrypt(name, 'senha123').toString();

        if (!name){    
            return response.status(400).json({code: "E_VALIDATION_FAILURE", message: "O campo \"name\" é obrigatório" })
        }else{
            const nameEncrypt = await connection('nameEncrypted').insert({
                name:cryptedData  
            },['id', 'name'])
            return response.json(nameEncrypt);
        }
    },

    async index (request, response) {
        const nameEncrypted = await connection('nameEncrypted').select('*');
        return response.json(nameEncrypted);
    },

    async nameDetails (request, response) {
        const {id} = request.params;
        const nameEncrypt = await connection('nameEncrypted').where('id', id);
        if(!nameEncrypt){
            return response.status(400).json({message:"error"})
        
        }else{
            const bytesDecrypted = AES.decrypt(nameEncrypt[0].name, 'senha123');
            const stringDecrypted = bytesDecrypted.toString(enc.Utf8);
            
            return response.json({id: id , desencrypt_name: stringDecrypted});
        }

    }
    
}