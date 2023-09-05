const translate = require('@iamtraction/google-translate');
const unidecode = require('unidecode');

/**
 *
 * @param {String} localName
 * @description Generates text for google (shorter statement context for short names)
 * @returns {String} returns text to translate based on localName length
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
function transliterate(localName, googleTranslatedName, unicodeString) {
  const decodedName = unidecode(localName);
  if (
    decodedName &&
    Array.from(decodedName)[0]?.toLowerCase() !==
      Array.from(googleTranslatedName)[0]?.toLowerCase()
  ) {
    return decodedName;
  }
  // If name fails to get translated, return unicode over local str for HTTP header
  return googleTranslatedName === localName
    ? unicodeString
    : googleTranslatedName;
}

/**
 *
 * @param {String} str
 * @description translates non-english string to English
 * @returns {String} returns translated string
 */
async function translateNameToEnglish(str) {
  if (!str || str.match(/^[a-zA-Z ]+$/i)) {
    return str;
  }
  const localName = str;
  try {
    const res = await translate(getGoogleTranslateText(localName), {
      to: 'en',
    });
    const translatedName = res.text.split(':')[1].trim();
    return transliterate(localName, translatedName, str);
  } catch (err) {}
  // In case of error, Returning unicode str over original so token name doesn't break in HTTP headers
  return str;
}

module.exports = { translateNameToEnglish };