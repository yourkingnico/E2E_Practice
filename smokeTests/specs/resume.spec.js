var ResumePage = require('../pages/ResumePage');
var Menu = require('../pages/sections/Menu');

describe('Load resume page and check for download', function() { 

  it('should load home page', function() { 
    browser.waitForAngularEnabled(false);
    browser.get('http://nicktorres.net');
    console.log("Home page loaded for nicktorres.net");
  })

  it('should naviagate the the resume page', function() { 
    expect(Menu.openResumePage()).toBeTruthy();
  })

  it('should verify download button is visible', function() { 
    expect(ResumePage.isDownloadButtonVisible()).toBeTruthy();
  })

  it('should verify resume isDownloadable', function() { 
    expect(ResumePage.isResumeDownloadable()).toBe(true);
  })
});