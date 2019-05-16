exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      'browserName': 'chrome',
      'chromeOptions': {
        prefs: {
          download: {
            'prompt_for_download': false,
            'directory_upgrade': true,
            'default_directory':  'C:\\Users\\nicos_000\\Desktop\\E2E_Practice\\'
            }
        }
    }
      },
    framework: 'jasmine',
    specs: ['../specs/resume.spec.js'],
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  };