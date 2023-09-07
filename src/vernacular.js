const translate = require('@iamtraction/google-translate');
const unidecode = require('unidecode');

/**
 *
 * @param {String} localName
 * @description Generates text for google (shorter statement context for short names) based on localName length
 * @returns {String} returns text to translate
 */
function getGoogleTranslateText(localName) {
  /*
    Adding an english sentence before name so that
    it doesn't get trnaslated to its literal meaning.
    For eg परीक्षा to Exam instead of Pariksha.
  */
  if (localName.length <= 5) {
    return `name: ${localName}`;
  }
  return `your name is: ${localName}`;
}

/**
 *
 * @param {String} localName
 * @description Give ALMOST transliterated name
 * @returns {String} returns converted transliterated name from local language
 */
function transliterate(localName, googleTranslatedName) {
  const decodedName = unidecode(localName);
  if (
    decodedName &&
    Array.from(decodedName)[0]?.toLowerCase() !==
      Array.from(googleTranslatedName)[0]?.toLowerCase()
  ) {
    return decodedName;
  }
  return googleTranslatedName === localName
    ? localName
    : googleTranslatedName;
}

/**
 *
 * @param {String} Input non english string
 * @description translates non-english string to English
 * @returns {String} returns translated string
 */
async function translateNameToEnglish(localName) {
  if (!localName || localName.match(/^[a-zA-Z ]+$/i)) {
    // If name already in english just return
    return localName;
  }
  try {
    const res = await translate(getGoogleTranslateText(localName), {
      to: 'en',
    });
    const translatedName = res.text.split(':')[1].trim();
    return transliterate(localName, translatedName);
  } catch (err) {}
  // In case of error, Returning orignal string
  return localName;
}

module.exports = { translateNameToEnglish };