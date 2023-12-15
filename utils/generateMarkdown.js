// function to generate markdown for README
function generateMarkdown(data, licensesArray) 
{
  const matchedLicense = licensesArray.find((license) => data.license === license.name)

    return `
${matchedLicense.badge ? matchedLicense.badge : ""}
    
# ${data.title}

## Description
${data.description}


## Table of Contents
- [${data.title.trim()}](#${data.title.trim().split(" ").join("-")})
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)


## Installation

${data.installation}


## Usage

${data.usage}


## License

${matchedLicense.information}


## Contributions

${data.contributions}

## Tests

${data.tests}


## Questions

Please send any additional questions to ${data.email}, or visit my GitHub page: https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
