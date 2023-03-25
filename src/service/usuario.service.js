const Usuario = require("../model/Usuario");

const findUserByIdService = (id)=>{
 return Usuario.findById(id);
};

const findAllUsersService = ()=>{
 return Usuario.find();
};

const createUserservice = (body)=>{
 return Usuario.create(body);
};

const updateUserService = (id,body)=>{
 return Usuario.findByIdAndUpdate(id,body, {returnDocument:"after"});
};

const removeUserService = (id)=>{
 return Usuario.findByIdAndRemove(id);
};

const addUserAddressService = (id,endereco) =>{

};

const removeUserAddressService = (id) =>{

};

const addUserFavProductService =(id, produto) =>{

};

const removeUserFavProductService = (produto)=>{

};

module.exports ={
  findUserByIdService,
  findAllUsersService,
  createUserservice,
  updateUserService,
  removeUserService,
  addUserAddressService,
  removeUserAddressService,
  addUserFavProductService,
  removeUserFavProductService
}