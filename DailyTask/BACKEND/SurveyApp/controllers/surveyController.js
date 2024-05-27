const Survey = require('../models/survey');

exports.renderHome = (req, res) => {
    res.render('index');
};


exports.renderSurvey = (req, res) => {
    res.render('survey');
};

exports.submitSurvey = async (req, res) => {
    const { name, email, responses } = req.body;
    if (!name || !email) {
        return res.status(400).send('Name and email are required');
    }
    try {
        const survey = new Survey({ name, email, responses });
        await survey.save();
        res.redirect('/afterSurvey');
    } catch (error) {
        res.status(500).send('Error submitting survey');
    }
};

exports.renderAfterSurvey = (req, res) => {
    res.render('afterSurvey');
};

exports.renderOutcome = async (req, res) => {
    const surveys = await Survey.find();
    // Process data to show outcomes
    res.render('outcome', { surveys });
};

exports.renderUserResponse = async (req, res) => {
    const { email } = req.query;
    if (!email) {
        return res.render('userResponse');
    }
    const survey = await Survey.findOne({ email });
    res.render('userResponse', { survey });
};

exports.deleteUserData = async (req, res) => {
    const { email } = req.body;
    await Survey.findOneAndDelete({ email });
    res.send('User data deleted');
};