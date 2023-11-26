/**
 *
 * @param {String} first string
 * @param {String} second string
 * @description applies levenshtein algorithm on first and second string
 * @returns {Integer} returns levenshtein distance
 */
function levenshteinDistance(first_str, second_str) {
  if (first_str.length === 0) {
    return second_str.length;
  }

  if (second_str.length == 0) {
    return first_str.length;
  }

  const matrix = [];
  for (let row = 0; row <= first_str.length; row++) {
    const maxtrix_row = [];
    for (let column = 0; column <= second_str.length; column++) {
      maxtrix_row.push(column);
    }
    maxtrix_row[0] = row;
    matrix.push(maxtrix_row);
  }

  for (let row = 1; row <= first_str.length; row++) {
    for (let column = 1; column <= second_str.length; column++) {
      if (first_str[row - 1] === second_str[column - 1]) {
        matrix[row][column] = matrix[row - 1][column - 1];
      } else {
        matrix[row][column] =
          1 +
          Math.min(
            matrix[row][column - 1],
            matrix[row - 1][column - 1],
            matrix[row - 1][column],
          );
      }
    }
  }

  return matrix[first_str.length][second_str.length];
}

/**
 *
 * @param {String} first string
 * @param {String} second string
 * @description Finds how common first and second strings are based on value from 0 to 1
 * @returns {Boolean} returns true if value is greater than LEVENSHTEIN_THRESHOLD
 */
function isAlmostEqualStrings(first_str, second_str) {
  let LEVENSHTEIN_THRESHOLD = 0.8;

  if (first_str === second_str) {
    return true;
  }

  if (Math.min(first_str.length, second_str.length) < 5) {
    /* For small names, keeping the threshold low */
    LEVENSHTEIN_THRESHOLD = 0.5;
  }

  const distance = levenshteinDistance(first_str, second_str);
  const value = 1 - distance / Math.max(first_str.length, second_str.length);

  return value > LEVENSHTEIN_THRESHOLD;
}

module.exports = { isAlmostEqualStrings, levenshteinDistance };
