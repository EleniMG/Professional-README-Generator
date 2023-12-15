const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const licenses = require("github-licenses");
const shielder = require('shields');
const util = require('util')

const licensesArray = Object.keys(licenses);

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
//   {
//     type: 'confirm',
//     name: 'contents',
//     message: 'Do you want to include a table of contents?'
//   },
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
    choices: ["None", ...licensesArray]
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
    const fileNameWithoutSpaces = `${questions.title.toLowerCase().trim().split(" ").join("")}`;
    const trimmedFileName = `${questions.title.trim()}`
    
    writeFileAsync(`${fileNameWithoutSpaces}.md`, generateMarkdown(questions));
}
    
    );
