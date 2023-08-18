const { Survey } = require('../db');

const editSurveyHandler = async ({id, full_name, email, birth_date, country_of_origin, terms_and_conditions}) => {

  try {
    const survey = await Survey.findByPk(id);
    console.log('survey :>> ', survey);

    if(!survey) throw Error (`Encuesta de full_name no encontrada.`)

    const updateData = {}

    if (full_name) updateData.full_name = full_name;
    if (email) updateData.email = email;
    if (birth_date) updateData.birth_date = birth_date;
    if (country_of_origin) updateData.country_of_origin = country_of_origin;
    if (terms_and_conditions) updateData.terms_and_conditions = terms_and_conditions;

    if (Object.keys(updateData).length > 0) {
      await Survey.update(updateData, {
        where: {
          id: id,
        }
      });
    }

    const updateSurvey = await Survey.findByPk(id)

    return updateSurvey

  } catch (error) {
    return error.message;
  }
}

module.exports = { editSurveyHandler }