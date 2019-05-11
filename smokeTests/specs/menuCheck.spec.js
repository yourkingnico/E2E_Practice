describe('Load home page and check menu buttons', function() { 

  it('should load home page', function() { 
    // Entering application url in browser
    browser.waitForAngularEnabled(false);
    browser.get('http://nicktorres.net');
    console.log("Home page loaded for nicktorres.net");
  })

  it('should check menu', function() { 
    var menu =  element(by.css('.navbar-nav'));
    expect(menu.isDisplayed()).toBeTruthy();
    console.log("Menu found");
  })

});