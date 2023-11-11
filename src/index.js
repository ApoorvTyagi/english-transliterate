const { translateNameToEnglish } = require('./vernacular');

module.exports = async function translate(text) {
  const translatedName = await translateNameToEnglish(text);
  return translatedName.toLowerCase();
};
