# Professional README Generator

## Description

My aim with this project was to create a command line application which allows users to dynamically create a README.md file based on their input. I wanted to ask all questions to the user through the command line using the Inquirer npm package, so that the user's typed response would go into the corresponding part of the README. I also was able to create a list of licenses the user could choose from which would generate the respective license information within the README.md file, but also allowing the user to select no license at all. 

I used asynchronous code to generate the Markdown file once the questions have all been answered, and insert those answers into a template I have created. I made sure that there is a table of contents which can take the reader to the respective section of the README.md file.

As an option, the user can allow for the README.md file to be named based on the user's project name. The name will be trimmed, set to lower case and replace any spaces with hyphens to allow for ease when saving the file. This is included at the very bottom of the index.js file.

In the future, I would like to include more licenses dynamically. I would also like to account for existing files with the same name as the proposed name for the README.md file, such as perhaps using an alert or appending the file.


## Table of Contents
- [Professional README Generator](#professional-readme-generator)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)


## Installation

N/A


## Usage

Using the code in this respository, the user should be able to open Git Bash within your terminal and initate the application by typing 'node index.js'. The user is then taken through questions, such as naming their project, including a description, contribution guidelines and other questions to complete the README.md file.

As part of the questionnaire, the user will also be able to select whether they would like to apply a license to their project. If the user decides to have no license, a sentence confirming the same will be included in the 'License' section. Otherwise, the license badge will be inserted at the top and the relevant license information will be included in the 'License' section.

Once all questions are completed, a new README.md file will be created based on the user's responses, which can be edited as the user decides.


## Credits

The following third-party assets were used to assist with this code:

[Professional README Guide - Request-Response](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

[github-licenses - npmjs](https://www.npmjs.com/package/github-licenses)

[Inquirer.js - npmjs](https://www.npmjs.com/package/inquirer#inquirerjs)

[oslicense - npmjs](https://www.npmjs.com/package/oslicense)

[promisfy - npmjs](https://www.npmjs.com/package/promisfy)

[Array.prototype.forEach() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

[Conditional (ternary) operator - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

[Array.prototype.find() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

[Markdown guide](https://www.markdownguide.org/cheat-sheet/)

[Node.js fs.writeFile() Method - Geeks For Geeks](https://www.geeksforgeeks.org/node-js-fs-writefile-method/)



## License

There is no license applied to this repository.