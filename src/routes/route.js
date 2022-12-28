const express = require('express');
const router = express.Router();
const userController=require('../controllers/userController')
const middleWare=require('../middleware/auth')

router.post('/createUser',userController.createUser)
router.post('/userLogin',middleWare.login,userController.userLogin)
router.get('/users/:userId',middleWare.verifytoken,middleWare.authorization,userController.user)
router.put('/updateUser/:userId',middleWare.verifytoken,middleWare.authorization,userController.updateUser)
router.delete('/deleteUser/:userId',middleWare.verifytoken,middleWare.authorization,userController.deleteUser)


module.exports = router;