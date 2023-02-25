function renderLicenseBadge(license) {
  if (license !== "none") {
    return `(https://img.shields.io/badge/License-${license}-yellow.svg)`;
  }
  return "";
  }

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.username}

${renderLicenseBadge(data.license)}

## Table of contents
- [Description](#description)
- [Usage](#Usage)
- [Tests](#Tests)
- [Installation](#Installation)
- [Contribution](#Contribution)
- [Credits](#Credits)
- [Contacts](#Contacts)
- [License](#License)

## Description
${data.description}

## Usage
${data.usage}

## Tests
${data.tests}

## Installation
${data.installation}

## Contribution
${data.contribution}

## Credits
${data.credits}

## Contacts
- Username - ${data.username}
- GitHub - ${data.GitHub}(https://github.com/${data.GitHub}/)
- Email - [${data.email}](https:${data.email}/)

## License
${data.license}
${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
