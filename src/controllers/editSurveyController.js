const { editSurveyHandler } = require('../handler/editSurveyHandler');

const editSurveyController = async (req, res) => {
try {
  const { full_name, email, birth_date, country_of_origin, terms_and_conditions } = req.body;
  const { id } = req.params;

  const response = await editSurveyHandler({id, full_name, email, birth_date, country_of_origin, terms_and_conditions})

  response.error
  ? res.status(400).send(response.error)
  : res.json(response);

} catch (error) {
  return res.status(500).json({ error: "User not update" });
}
}

module.exports = { editSurveyController }