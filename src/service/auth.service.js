const Usuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");

const loginService =(email)=> Usuario.findOne({email:email}).select("senha");

const gererateToken = (userId) => jwt.sign({id:userId},"asdadsasdasdadadsasdadsasd",{expiresIn:86400});

module.exports = {
  loginService,
  gererateToken
}