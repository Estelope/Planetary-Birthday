import intergalacticAgeCalc from '../src/intergalacticAgeCalc';

describe('intergalacticAgeCalc', () => {

  test('it should succesfully create an age object from input ', () => {
    const ageCalc = new intergalacticAgeCalc(45);
    expect(ageCalc.earthAge).toEqual(45);
  });

  test('it should calculate age in Mercury years', () => {
    const ageCalc = new intergalacticAgeCalc(45);
    expect(ageCalc.calculateMercuryAge()).toBeCloseTo(187.5, 2);
  });

  test('it should calculate age in Venus years', () => {
    const ageCalc = new intergalacticAgeCalc(45);
    expect(ageCalc.calculateVenusAge()).toBeCloseTo(72.58, 2);
  });

  test('it should calculate age in Mars years', () => {
    const ageCalc = new intergalacticAgeCalc(45);
    expect(ageCalc.calculateMarsAge()).toBeCloseTo(23.9, 0)
  });

  test('it should calculate age in Jupiter years', () => {
    const ageCalc = new intergalacticAgeCalc(45);
    expect(ageCalc.calculateJupiterAge()).toBeCloseTo(3.794, 0)
  });

  test('it should determine how many years have passed on each planet since a past birthday', () => {
    const ageCalc = new intergalacticAgeCalc(56);
    let yearsPassed = ageCalc.calculateYearsPassed(43);
    let outcomes = {
      earth: 13,
      mercury: 54.16,
      venus: 20.96,
      mars: 6.91,
      jupiter: 1.09,
    };
    expect(yearsPassed.earth).toEqual(outcomes.earth);
    expect(yearsPassed.mercury).toBeCloseTo(outcomes.mercury, 1);
    expect(yearsPassed.venus).toBeCloseTo(outcomes.venus, 1);
    expect(yearsPassed.mars).toBeCloseTo(outcomes.mars, 1);
    expect(yearsPassed.jupiter).toBeCloseTo(outcomes.jupiter, 1);
  });
  test('it should determine how many years have yet to pass until a future birthday. ', () => {
    const ageCalc = new intergalacticAgeCalc(30);
    let yearsToPass = ageCalc.calculateYearsToPass(35);
    let outcomes = {
      earth: 5,
      mercury: 20.83,
      venus: 8.06,
      mars: 2.65,
      jupiter: .42,
    };
    expect(yearsToPass.earth).toEqual(outcomes.earth);
    expect(yearsToPass.mercury).toBeCloseTo(outcomes.mercury, 1);
    expect(yearsToPass.venus).toBeCloseTo(outcomes.venus, 1);
    expect(yearsToPass.mars).toBeCloseTo(outcomes.mars, 1);
    expect(yearsToPass.jupiter).toBeCloseTo(outcomes.jupiter, 1);
  });

});

// many expect statements are checked for the last two test.  You want unit tests to only check one thing at a time, so if one fails, it's easy to pinpoint what part of your code isn't working. You can write a single expect statement for an entire object.
// add edge cases for more robust code