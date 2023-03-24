const mongoose =require("mongoose");

function connectToDatabase(){
  mongoose.connect("mongodb+srv://angelofe:5cIdGcv6P86DwrvJ@cluster0.cwyzrsy.mongodb.net/Empresa",{
useNewUrlParser: true,
useUnifiedTopology:true,
  }).then(()=>{
    console.log("MONGO DB CONECTADO");
  }).catch((err)=>{
    return console.log(`Erro na conexão com o banco : ${err}`);
  })
}

module.exports = connectToDatabase;