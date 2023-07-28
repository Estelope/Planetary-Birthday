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



});

