// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
For any additional questions, contact me at: ${data.email}.
`;
}

module.exports = generateMarkdown;