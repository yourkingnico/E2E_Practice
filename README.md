# E2E_Practice
Practicing E2E tests

requires node.js

install protractor locally $npm i --save -dev protractor

install jasmine locally $npm i --save -dev jasmine

Using web-driver 3.8

$ webdriver-manager clean
$ webdriver-manager update --standalone --versions.standalone=3.8.0

To Run a Test conf 

1. start the driver ~ $ webdriver-manager start --versions.standalone=3.8.0
2. in new terminal  ~ $ protractor conf.js