const { deleteSurveyHandler } = require('../handler/deleteSurveyHandler');

const deleteSurveyController = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await deleteSurveyHandler(id);

    response.error ? res.status(400).send(response.error)
    : res.status(200).send(response.message)
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

module.exports = { deleteSurveyController };