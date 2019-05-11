var menu = require('../pages/HomePage')


describe('Load home page and check menu buttons', function() { 

  it('should load home page', function() { 
    // Entering web url in browser
    browser.waitForAngularEnabled(false);
    browser.get('http://nicktorres.net');
    console.log("Home page loaded for nicktorres.net");
  })

  it('should check menu is visible', function() { 
    expect(menu.isMenuVisible()).toBe(true);
    console.log("Menu found");
  })

});