// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.tests}

## License
This application is covered under the ${data.license} license.

## Questions
If you have any questions, you can reach me on GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})

You can also contact me via email: ${data.email}
`;
}

module.exports = generateMarkdown;
