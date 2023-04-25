const express = require('express');
const controller = require('../controllers/user.controller');

const userRoutes = express.Router();

userRoutes.get('/', controller.allUsers);
userRoutes.post('/', controller.createUser);

userRoutes.get('/:id', controller.usersById);

module.exports = userRoutes;
