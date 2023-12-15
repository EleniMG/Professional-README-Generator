const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const licenses = require("github-licenses");
const util = require('util');

// const licensesArray = Object.keys(licenses);
 const licensesArray = [
    {
        name: "None",
        badge: null,
        information: "There is no license applied to this repository."
    },
    {
        name: "Apache License 2.0",
        badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        information: licenses.APACHE()
        
    },
    {
        name: "BSD 2-Clause",
        badge: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
        information: licenses.BSD2C()
        
    },
    {
        name: "BSD 3-Clause",
        badge: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
        information: licenses.BSD3C()
        
    },
    {
        name: "GNU General Public License v2.0",
        badge: "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
        information: licenses.GPL2()
        
    },
    {
        name: "MIT License",
        badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        information: licenses.MIT()
        
    }
]

const licenseNamesArray = []

licensesArray.forEach((element) => licenseNamesArray.push(element.name))

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'How would you describe your project?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do users install your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions for using your project'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license for your project',
    choices: [...licenseNamesArray]
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Please include guidelines for other developers to contribute to your project'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide any tests for your project'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please provide your GitHub username'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email'
  }
];


const generateMarkdown = require("./utils/generateMarkdown");

// function to write README file
// function writeToFile(fileName, data) {
    // fileName = fs.writeFile( `${questions.title}.md`, generateMarkdown(questions));
    // console.log(`Successfully wrote a markdown file called ${questions.title}`);
    // return fs.writeFile( `${questions.title}.md`, generateMarkdown(questions));

// }

// function to initialize program
const writeFileAsync = util.promisify(fs.writeFile);
const init = () => inquirer.prompt(questions);

// function call to initialize program

init()
.then((questions) => {
    // My original approach was to take the project name and make this the name of the file

    // const fileNameWithoutSpaces = `${questions.title.toLowerCase().trim().split(" ").join("")}`;
    
    // writeFileAsync(`${fileNameWithoutSpaces}.md`, generateMarkdown(questions, licensesArray));

    writeFileAsync("./generated-readme/README.md", generateMarkdown(questions, licensesArray));
}
    );
