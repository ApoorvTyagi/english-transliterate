const { translateNameToEnglish } = require('./vernacular');

module.exports = async function translate (text) {
    return translateNameToEnglish(text);
}