const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
  { type: 'input',
    name: 'username',
    message: 'What is your GitHub username? ',
  },

  { type: 'input',
    name: 'email',
    message: 'What is your email address? ',
  },

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
    choices: ['Apache 2.0', 'GNU GPL v3.0', 'MIT', 'BSD 2 Clause', 'BSD 3 Clause', 
              'Boost 1.0', 'CC0 v1.0 Universal', 'Eclipse 1.0', 'GNU AGPL v3.0', 
              'GNU GPL v2.0', 'GNU LGPL v3.0', 'Mozilla 2.0', 'Unlicense']
  },

  { type: 'input',
    name: 'contribute',
    message: 'Please enter contribution guidelines: ',
  },

  { type: 'input',
    name: 'tests',
    message: 'Please enter testing instructions: ',
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => error ? console.log(error) : console.log('Your README.md file has been created.'));
}

// function to initialize program
async function init() {
  try {
    const userInput = await inquirer.prompt(questions);
    const markdownFile = generateMarkdown(userInput);
    writeToFile('SampleREADME.md', markdownFile)
  }
  catch (error) { console.log(error); }
}

// function call to initialize program
init();