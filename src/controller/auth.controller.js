const authService =require("../service/auth.service");
const bcrypt = require("bcrypt");

const loginController = async (req,res)=>{ 
  const {email,senha} =req.body;

  const user =await authService.loginService(email);

  if(!user){
    return res.status(400).send({menssage : "usuario não foi encontrado!"});
  }

  const isPasswordvalid = await bcrypt.compare(senha, user.senha);
  
  if(!isPasswordvalid){
    return res.status(400).send({menssage : "Senha invalida!"});
  }

  const token = authService.gererateToken(user.id);

  res.status(200).send({
    email,
    token
  });
}

module.exports = {loginController};