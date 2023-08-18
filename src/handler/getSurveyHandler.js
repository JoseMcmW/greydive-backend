const { Survey } = require('../db');
const { Op } = require('sequelize');

const getSurveyHandler = async (email) => {
  try {
    if(email){
      const surveys = await Survey.findAll({
        where: {
          email: {[Op.iLike]: `%${email}%`}
        }
      })

      if(surveys.length > 0) {
        return surveys
      } else {
        return { error: `No hay encuestas con el mail ${email}` }
      }
    } else {
      const surveys = await Survey.findAll();

      return surveys;
    }

  } catch (error) {
    return error.message
  }
}

module.exports = { getSurveyHandler }