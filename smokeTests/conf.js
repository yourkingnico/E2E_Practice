exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      'browserName': 'chrome'
      },
    framework: 'jasmine',
    specs: ['./specs/menuCheck.spec.js'],
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  };