const { getSurveyByIdHandler } = require('../handler/getSurveyByIdHandler');

const getSurveyByIdController = async (req, res) => {
try {
  const { id } = req.params

  const response = await getSurveyByIdHandler(id)

  response.error
  ? res.status(400).send(response.error)
  : res.json(response);

} catch (error) {
  return res.status(500).send(error.message);
}
}

module.exports = { getSurveyByIdController }