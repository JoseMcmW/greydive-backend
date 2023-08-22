const { Router } = require('express');
const surveyRoutes = require('./surveyRoutes');
const router = Router();

router.use('/survey', surveyRoutes)


module.exports = router;
