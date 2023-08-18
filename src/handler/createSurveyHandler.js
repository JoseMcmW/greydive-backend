const { Survey } = require('../db');

const createSurveyHandler = async (full_name, email, birth_date, country_of_origin, terms_and_conditions) => {
  try {
    const createSurvey = await Survey.create({email, birth_date, country_of_origin, terms_and_conditions, full_name})

    return createSurvey;
  } catch (error) {
    return { message: error.message };
  }
}

module.exports = { createSurveyHandler };