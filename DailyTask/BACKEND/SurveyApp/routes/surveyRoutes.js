const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');

router.get('/', surveyController.renderHome);
router.get('/survey', surveyController.renderSurvey);
router.post('/submit', surveyController.submitSurvey);
router.get('/afterSurvey', surveyController.renderAfterSurvey);
router.get('/outcome', surveyController.renderOutcome);
router.get('/userResponse', surveyController.renderUserResponse);
router.post('/delete', surveyController.deleteUserData);

module.exports = router;
