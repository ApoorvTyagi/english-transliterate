const { expect } = require('chai');
const translate = require('../src/index');
const { levenshteinDistance } = require('../src/levenshtein');

describe('Testcases for english-transliterate', () => {
  it('Should Translate the hindi name', async () => {
    const testName = 'अपूर्व';
    const name = await translate(testName);
    expect(name).to.be.a('String');
    expect(name).to.include('apoorv');
  });
  it('Should give the same name back for english names', async () => {
    const testName = 'apoorv';
    const name = await translate(testName);
    expect(name).to.be.a('String');
    expect(name).to.include(testName);
  });
});

describe('Testcases for Levenshtein Distance', () => {
  it('Should give Levenshtein Distance as 3', () => {
    const distance = levenshteinDistance('kitten', 'sitting');
    expect(distance).to.be.equal(3);
  });
  it('Should give Levenshtein Distance as 0', () => {
    const distance = levenshteinDistance('apoorv', 'apoorv');
    expect(distance).to.be.equal(0);
  });
});
