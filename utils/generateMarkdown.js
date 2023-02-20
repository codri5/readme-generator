// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          ## ${data.description}
          ## ${data.contents}
          ## ${data.installation}
          ## ${data.usage}
          ## ${data.license}
          ## ${data.contribute}
          ## ${data.tests}
          ## ${data.questions}
`;
}

module.exports = generateMarkdown;
