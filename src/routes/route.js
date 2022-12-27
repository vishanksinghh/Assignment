const express = require('express');
const router = express.Router();
const userController=require('../controllers/userController')
const middleWare=require('../middleware/auth')

router.post('/createUser',userController.createUser)
router.post('/userLogin',middleWare.login,userController.userLogin)
router.get('/users/:userId',middleWare.verifytoken,userController.user)
router.put('/updateUser/:userId',middleWare.verifytoken,userController.updateUser)
router.delete('/deleteUser/:userId',middleWare.verifytoken,userController.deleteUser)


module.exports = router;