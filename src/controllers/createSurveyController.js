const { createSurveyHandler } = require('../handler/createSurveyHandler');

const createSurveyController = async (req, res) => {
try {
  const { full_name, email, birth_date, country_of_origin, terms_and_conditions } = req.body;

  const response = await createSurveyHandler(full_name, email, birth_date, country_of_origin, terms_and_conditions)

  response.error
  ? res.status(400).send(response.error)
  : res.status(200).json(response);

} catch (error) {
  return res.status(500).json({error: error.message});
}
}

module.exports = { createSurveyController };