// function to generate license badge
function generateLicenseBadge(data) {
  let license = data.license;
  let licenseBadge = '';
  if (license) {
    licenseBadge = `[License](<https://img.shields.io/badge/License-${license}-yellow>)`
  }
  return licenseBadge;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${generateLicenseBadge(data)}

## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
4. [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
The application is lincesed under the ${data.license} License.

## Contributing
${data.contribute}

## Tests
${data.tests}

## Questions
https://github.com/${data.username}
For any additional questions, contact me at: ${data.email}
`;
}

module.exports = generateMarkdown;