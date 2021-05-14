const express = require('express');
const router = express.Router();
const featuresRouter = express.Router();
const shopRoutes = require('./shops.routes')

featuresRouter.use('/shops', shopRoutes )

router.use('/api/v1', featuresRouter)
module.exports = router;
