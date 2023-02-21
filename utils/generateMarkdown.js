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
  return `# ${data.title} ${generateLicenseBadge(data)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

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