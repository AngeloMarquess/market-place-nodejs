const espress = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

router.get('/findbyId:id');
router.get('/findAll');

router.post('/create');
router.post('/addAddress/:id');
router.post('/addfavProduct/:id');

router.put('/update/:id');

router.delete('/remove/:id');
router.delete('/removeAddress');
router.delete('/removeFavProduct');

module.exports =router;