export class TestData {
  static readonly STANDARD_USER = 'standard_user';
  static readonly LOCKED_OUT_USER = 'locked_out_user';
  static readonly PROBLEM_USER = 'problem_user';
  static readonly PERFORMANCE_GLITCH_USER = 'performance_glitch_user';
  static readonly ERROR_USER = 'error_user';
  static readonly VISUAL_USER = 'visual_user';

  static readonly PASSWORD = 'secret_sauce';

  static readonly FIRST_NAME = 'TEST_FIRST_NAME';
  static readonly LAST_NAME = 'TEST_FIRST_NAME';
  static readonly POSTAL_CODE = '18777';

  static readonly PRODUCTS = {
    BACKPACK: 'Sauce Labs Backpack',
    BIKE_LIGHT: 'Sauce Labs Bike Light',
    BOLT_TSHIRT: 'Sauce Labs Bolt T-Shirt',
    FLEECE_JACKET: 'Sauce Labs Fleece Jacket',
    ONESIE: 'Sauce Labs Onesie',
    TSHIRT_RED: 'Test.allTheThings() T-Shirt (Red)',
  };

  static getValidUser() {
    return {
      username: this.STANDARD_USER,
      password: this.PASSWORD,
    };
  }

  static getRequiredData() {
    return {
      firstName: this.FIRST_NAME,
      lastName: this.LAST_NAME,
      postalCode: this.POSTAL_CODE,
    };
  }
}
