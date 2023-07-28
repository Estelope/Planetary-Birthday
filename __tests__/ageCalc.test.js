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
      earth : 13,
      mercury: 54.16,
      venus: 20.96,
      mars: 6.91,
      jupiter: 1.09,
    }
    expect(yearsPassed).toBeCloseTo(outcomes, 2);
  });
  
});

