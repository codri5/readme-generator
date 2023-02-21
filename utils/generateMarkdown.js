// function to generate license badge
const generateLicenseBadge = (data) => {
  let license = data.license;
  let licenseBadge = '';
  if (license) {
    licenseBadge = `![License](https://img.shields.io/badge/License-${license}-yellow)`;
  }
  // regex to replace white spaces
  return licenseBadge.replace(/\s/g, '%20');
}

// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

${generateLicenseBadge(data)}

## Description

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

The application is licensed under the ${data.license} License.

## Contributing

${data.contribute}

## Tests

${data.tests}

## Questions

For any questions about this project, please contact me: 
* GitHub: https://github.com/${data.username}
* Email: ${data.email}
`;
}

module.exports = generateMarkdown;