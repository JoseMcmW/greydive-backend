const surveyRoutes = require('express').Router();

const { createSurveyController } = require('../controllers/createSurveyController');
const { getSurveyController } = require('../controllers/getSurveyController');
const { deleteSurveyController } = require('../controllers/deleteSurveyController');
const { editSurveyController } = require('../controllers/editSurveyController');
const { getSurveyByIdController } = require('../controllers/getSurveyByIdController');

surveyRoutes.post('/', createSurveyController);
surveyRoutes.get('/', getSurveyController);
surveyRoutes.delete('/:id', deleteSurveyController);
surveyRoutes.put('/:id', editSurveyController);
surveyRoutes.get('/:id', getSurveyByIdController)

module.exports = surveyRoutes;