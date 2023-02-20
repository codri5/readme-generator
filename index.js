const fs = require("fs");
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    'Please enter the title of your project: ',
    'Please enter a description: ',
    'Please enter installation instructions: ',
    'Please enter usage information: ',
    'Please select the license used: ',
    'Please enter contribution guidelines: ',
    'Please enter test instructions: ',
    'Please enter your GitHub username: ',
    'Please enter your email address: '
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();