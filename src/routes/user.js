const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

router.get('/', userController.getAll);

router.post('/', userController.create);

router.get('/:id', userController.getOne);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
