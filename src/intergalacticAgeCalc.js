//business logic
export default class intergalacticAgeCalc {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  calculateMercuryAge(){
    return this.earthAge / .24;
  }

  calculateVenusAge(){
    return this.earthAge / .62;
  }
  
  calculateMarsAge(){
    return this.earthAge / 1.88;
  }

  calculateJupiterAge(){
    return this.earthAge / 11.86;
  }

  calculateYearsPassed() {

  }
}


