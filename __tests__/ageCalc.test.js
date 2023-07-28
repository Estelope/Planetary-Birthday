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


});

