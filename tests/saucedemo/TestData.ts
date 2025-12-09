export class TestData {
  static readonly standardUser = 'standard_user';
  static readonly lockedOutUser = 'locked_out_user';
  static readonly problemUser = 'problem_user';
  static readonly performanceGlitchUser = 'performance_glitch_user';
  static readonly errorUser = 'error_user';
  static readonly visualUser = 'visual_user';

  static readonly password = 'secret_sauce';

  static readonly firstName = 'test_first_name';
  //static readonly last_name = 'test_first_name';
  static readonly lastName = 'test_last_name';
  static readonly postalCode = '18777';

  static readonly products = {
    backpack: 'Sauce Labs Backpack',
    bikeLight: 'Sauce Labs Bike Light',
    boltTshirt: 'Sauce Labs Bolt T-Shirt',
    fleeceJacket: 'Sauce Labs Fleece Jacket',
    onesie: 'Sauce Labs Onesie',
    tshirtRed: 'Test.allTheThings() T-Shirt (Red)',
  };
  static getValidUser() {
    return {
      username: this.standardUser,
      password: this.password,
    };
  }
  static getRequiredData() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      postalCode: this.postalCode,
    };
  }
}
