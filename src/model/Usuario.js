const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
nome: {type: String, required: true},
email: {type: String, unique: true, required: true},
senha: {type: String, required:true},
imagem:{type: String,required:true},
endereços: [
  {
     rua: {type: String, required: true},
     rua: {type: Number, required: true},
     rua: {type: String, required: false},
     cep: {type: String, required: false},
     createdAt: {type: Date, required: true, default:Date.now()},
  }
],
createAt: {type: Date, required: true , default:Date.now()},
produtos_fav:[
  {
        _id:{type: mongoose.Schema.Types.ObjectId,required:true, unique:true, ref:"produtos"},
        createAt: {type: Date, required: true, default:Date.now()},
       
  }
],
admin:{ type: Boolean, required: true, default:false},
});

const Usuario = mongoose.model("usuarios",UsuarioSchema);

module.exports = Usuario;