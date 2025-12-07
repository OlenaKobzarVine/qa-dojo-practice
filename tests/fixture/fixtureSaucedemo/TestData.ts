export class TestData {
  // static readonly standardUser = 'standard_user';
  // static readonly lockedOutUser = 'locked_out_user';
  // static readonly problemUser = 'problem_user';
  // static readonly performanceGlitchUser = 'performance_glitch_user';
  // static readonly errorUser = 'error_user';
  // static readonly visualUser = 'visual_user';

  // static readonly password = 'secret_sauce';

  static readonly users = {
    standardUser: 'standard_user',
    lockedOutUser: 'locked_out_user',
    problemUser: 'problem_user',
    performanceGlitchUser: 'performance_glitch_user',
    errorUser: 'error_user',
    visualUser: 'visual_user',
    password: 'secret_sauce',
  };

  static readonly checkoutData = {
    firstName: 'test_first_name',
    lastName: 'test_last_name',
    postalCode: '18777',
  };

  static readonly products = {
    backpack: 'Sauce Labs Backpack',
    bikeLight: 'Sauce Labs Bike Light',
    boltTshirt: 'Sauce Labs Bolt T-Shirt',
    fleeceJacket: 'Sauce Labs Fleece Jacket',
    onesie: 'Sauce Labs Onesie',
    tshirtRed: 'Test.allTheThings() T-Shirt (Red)',
  };
  
  static getValidUserData() {
    return {      
      username: this.users.standardUser,
      password: this.users.password,
    };
  }
  static getRequiredData() {
    return {
      firstName: this.checkoutData.firstName,
      lastName: this.checkoutData.lastName,
      postalCode: this.checkoutData.postalCode,
    };
  }
}
