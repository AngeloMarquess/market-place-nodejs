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
return Usuario.findOneAndUpdate(
 {
  _id: id, 
 },
 {

  $push:{
    enderecos: endereco,
  }
 },
 {
  rawResult: true,
 }
  );
};

const removeUserAddressService = (id, addressId) =>{
  return Usuario.findOneAndUpdate(
    {
     _id: id, 
    },
    {
   
     $pull:{
       enderecos: {
        _id:addressId
       },
     }
    },
    {
     rawResult: true,
    }
     );
   

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