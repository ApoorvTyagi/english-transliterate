const translate = require('../src/index');
const { expect } = require('chai');

describe('Testcases for english-transliterate', () => {
  it('Should Translate the hindi name', async () => {
    const testName = 'अपूर्व'
    const name = await translate(testName);
    expect(name).to.be.a('String');
    expect(name).to.include('apoorv');
  });
  it('Should give the same name back for english names', async () => {
    const testName = 'apoorv'
    const name = await translate(testName);
    expect(name).to.be.a('String');
    expect(name).to.include(testName);
  });
});
