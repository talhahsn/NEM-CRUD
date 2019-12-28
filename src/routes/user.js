const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

function asyncTryCatchMiddleware(handler){
    return async (req, res, next) => {
       try{
           await handler(req, res);
       } catch(error) {
           next(error)
       }
    };
}

router.route('/')
    .get(asyncTryCatchMiddleware(userController.getAll))
    .put(asyncTryCatchMiddleware(userController.updateUser))
    .post(asyncTryCatchMiddleware(userController.create));

router.route('/:id')
    .get(asyncTryCatchMiddleware(userController.getOne))
    .delete(asyncTryCatchMiddleware(userController.deleteUser));

module.exports = router;
