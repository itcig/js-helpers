/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable mocha/no-setup-in-describe */

import { expect } from 'chai';
// import assert from 'assert';

import { currentUrl, urlPath } from '../../src';

describe('url_path', () => {
  context('passed url arg', () => {
    const dataProvider = [
      {
        expectedResult: '/',
        arg: 'http://investingdaily.com/',
      },
      {
        expectedResult: '/hunter-rules/',
        arg: 'http://investingdaily.com/hunter-rules/',
      },
    ];

    dataProvider.forEach((testCase) => {
      describe(`with ${testCase.arg}`, () => {
        it(`should return a ${testCase.expectedResult}`, () => {
          expect(currentUrl()).to.equal('');
          expect(urlPath(testCase.arg)).to.equal(testCase.expectedResult);
        });
      });
    });
  });
});
