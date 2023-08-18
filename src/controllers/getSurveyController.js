const { getSurveyHandler } = require('../handler/getSurveyHandler');

const getSurveyController = async (req, res) => {
  const { email } = req.body;

  try {
    const response = await getSurveyHandler(email);

    response.error
    ? res.status(400).send(response.error)
    : res.json(response);
    
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = { getSurveyController }