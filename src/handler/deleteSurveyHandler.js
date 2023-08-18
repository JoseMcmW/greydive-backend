const { Survey } = require('../db');

const deleteSurveyHandler = async (id) => {

  try {
    const response = await Survey.destroy({where: {id}})

    if(!response) {
      return { error: `No existe la encuesta solicitada.` }
    } else {
      return { message: `Encuesta eliminada satisfactoriamente` }
    }

  } catch (error) {
    return error.message;
  }
}

module.exports = { deleteSurveyHandler };