const { Survey } = require('../db');

const getSurveyByIdHandler = async (id) => {
  try {
    const survey = await Survey.findByPk(id)

    if(!survey) {
      return { error: 'No se encontro la encuesta solicitada.' }
    } else {
      return survey
    }
  } catch (error) {
    return error.message
  }

}

module.exports = { getSurveyByIdHandler }