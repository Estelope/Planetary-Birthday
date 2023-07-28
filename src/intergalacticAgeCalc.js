//business logic
export default class intergalacticAgeCalc {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  calculateMercuryAge() {
    return this.earthAge / .24;
  }

  calculateVenusAge() {
    return this.earthAge / .62;
  }

  calculateMarsAge() {
    return this.earthAge / 1.88;
  }

  calculateJupiterAge() {
    return this.earthAge / 11.86;
  }

  calculateYearsPassed(pastBirthday) {
    const ageOnMercuryAtPastBirthday = this.calculateMercuryAge() - (pastBirthday / 0.24);
    const ageOnVenusAtPastBirthday = this.calculateVenusAge() - (pastBirthday / 0.62);
    const ageOnMarsAtPastBirthday = this.calculateMarsAge() - (pastBirthday / 1.88);
    const ageOnJupiterAtPastBirthday = this.calculateJupiterAge() - (pastBirthday / 11.86);

    return {
      earth: this.earthAge - pastBirthday,
      mercury: ageOnMercuryAtPastBirthday,
      venus: ageOnVenusAtPastBirthday,
      mars: ageOnMarsAtPastBirthday,
      jupiter: ageOnJupiterAtPastBirthday,
    };
  }

  calculateYearsToPass(futureBirthday) {
    const ageOnMercuryAtFutureBirthday = (futureBirthday / 0.24) - this.calculateMercuryAge();
    const ageOnVenusAtFutureBirthday = (futureBirthday / 0.62) - this.calculateVenusAge();
    const ageOnMarsAtFutureBirthday = (futureBirthday / 1.88) - this.calculateMarsAge();
    const ageOnJupiterAtFutureBirthday = (futureBirthday / 11.86) - this.calculateJupiterAge();

    return {
      earth: futureBirthday - this.earthAge,
      mercury: ageOnMercuryAtFutureBirthday,
      venus: ageOnVenusAtFutureBirthday,
      mars: ageOnMarsAtFutureBirthday,
      jupiter: ageOnJupiterAtFutureBirthday,
    };
  }

}
