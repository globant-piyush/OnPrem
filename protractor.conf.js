var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  directConnect: true,
  
  capabilities: {
    'browserName': 'chrome'
  },

  suites:{
    smoke:['D:/Git/Tyco/OnPrem/src/tests/smoke/*.js']  
    // regression:[ON3.js,ON52.js,ON81.js,ON86.js, ON196.js, ON197.js],

  },
 
  framework: 'jasmine',
  
  // specs: ['../OnPrem/src/tests/ON197.js'],

  // specs: ['../OnPrem/src/tests/ON167.js'],
 
  chromeOptions: {
    args: ['allow-file-access-from-files'],
    prefs: {
      'download': {
        'prompt_for_download': false,
        'default_directory': 'Downloads'
      }
    }

  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 5000000,
    showColors:true
  },
  allScriptsTimeout: 240000000,
  getPageTimeout: 50000,

  onPrepare: function() {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots'
      })
    );
 }

};
