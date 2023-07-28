import intergalacticAgeCalc from '../src/intergalacticAgeCalc';

describe('intergalacticAgeCalc', () => {

  test('should succesfully create an age object from input ', () => {
    const ageCalc = new intergalacticAgeCalc(45);
    expect(ageCalc.age).toEqual(45);
  }
  )
});

