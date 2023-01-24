import { getPercents } from './script';
describe(`tests for percent calc function`, () => {
  it(`sucess calc of wished % from entered number`, () => {
    expect(getPercents(30, 200)).toBe(60);
  });
  it(`case when entered only 1 number`, () => {
    expect(getPercents(30)).toBe(60);
  });
  it(` case where entered is NaN`, () => {
    expect(getPercents(`abc`, 200)).toBeNaN();
  });
});
