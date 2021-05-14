const express = require('express');
const shopRoutes = express.Router();
const {shopsController} = require('../controllers')

shopRoutes.get('/',shopsController.get)

module.exports = shopRoutes;
