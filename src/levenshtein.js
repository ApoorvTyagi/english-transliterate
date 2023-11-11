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

function isAlmostEqualStrings(first_str, second_str) {
  if (first_str === second_str) {
    return true;
  }

  if (first_str.length < 2 || second_str.length < 2) {
    /* for 0-letter or 1-letter strings => Never able to compare them! */
    return false;
  }

  const distance = levenshteinDistance(first_str, second_str);
  const percentage =
    1 - distance / Math.max(first_str.length, second_str.length);

  return percentage > 0.8;
}

module.exports = { isAlmostEqualStrings, levenshteinDistance };
