# MRCS5 Automation Test Suite
This repo is the automated test framework for Health Data Vision's MCRS5 application.

## Tech Stack
The automation framework uses [WebdriverIO](https://webdriver.io) JavaScript test framework with [Mocha JS](https://mochajs.org/) on top, and [Chai assertion library](https://www.chaijs.com/) for end to end automated testing. 

## Dependencies
This test framework requires Node and Java(version 1.8 minimum) to be installed. If you do not already have Git installed, install Git as well.

To install Node: https://nodejs.org/en/download/

To install Java: https://www.java.com/en/download/manual.jsp

To install Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

## Running tests
After installing above dependencies, clone this repo by running the following command in your terminal:

`git clone https://github.com/amyta/hdvi-mrcs5.git`

After cloning the repo, change directory into the project directory and run the following to install all node module dependencies:

`npm install`

The command to run tests is:

`npm test`

The command to generate the HTML report is:

`npm run report`
