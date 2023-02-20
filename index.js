const fs = require('fs').promises;
const path = require('path');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    { type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },

    { type: 'input',
      name: 'description',
      message: 'Please enter a description: '
    },

    { type: 'input',
      name: 'installation',
      message: 'Please enter installation instructions: '
    },

    { type: 'input',
      name: 'usage',
      message: 'Please enter usage information: '
    },

    { type: 'list',
      name: 'license',
      message: 'Please select the license used: ',
      choices: ['Apache License 2.0', 'GNU GPL v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0', 'GNU AGPL v3.0', 'GNU GPL v2.0', 'GNU LGPL v2.1', 'Mozilla Public License 2.0',
                'The Unlicense']
    },

    { type: 'input',
      name: 'contribute',
      message: 'Please enter contribution guidelines: ',
    },

    { type: 'input',
      name: 'test',
      message: 'Please enter testing instructions: ',
    },

    { type: 'input',
      name: 'username',
      message: 'What is your GitHub username? ',
    },

    { type: 'input',
      name: 'email',
      message: 'What is your email address? ',
    }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => error ? console.log(error) : console.log('Your README.md file has been created.'));
}

const writeAsync = util.promisify(writeToFile);

// function to initialize program
function init() {
  const userInput = inquirer.prompt(questions);
  /*
  const mdFile = generateMarkdown(userInput);
  console.log(mdFile);
  writeAsync('README.md', mdFile);
*/
}

// function call to initialize program
init();