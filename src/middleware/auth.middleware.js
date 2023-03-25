const jwt = require("jsonwebtoken");
const {findUserByIdService} = require("../service/usuario.service")

module.exports = async(req,res,next) =>{
  const authHeader = req.headers.authorization;

  if(!authHeader){
    return res.status(401).send({message:"O token nao foi informado"});
  }

  const parts =authHeader.split(""); //["Bearer, <token> "]

  if(parts.lenght !==2){
    return res.status(401).send({message: "Token invalido!"});
  }

  const [ schema,token] = parts;

  if(!/^Bearer$/i.test(schema)){
    return res.status(401).send({message: "O token mal formado"});
  }

  jwt.verify(token,"asdadsasdasdadadsasdadsasd",async(err,decoded)=>{
    if(err){
      return res.status(500).send({message: "Token invalido"});
    }
    const user = await findUserByIdService(decoded.id);
    if(!user || !user.id){
      return res.status(401).send({message: "token invalido" });
    }
    req.userId = decoded.id;
    return next();
  })
}