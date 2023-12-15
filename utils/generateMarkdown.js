// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    ## Description
    ${data.description}


    ## Table of Contents
    
    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [License](#License)
    - [Contributions](#Contributions)
    - [Tests](#Tests)
    - [Contributions](#Contributions)
    - [Questions](#Questions)
    
    
    ## Installation
    
    ${data.installation}
    

    ## Usage

    ${data.usage}
    
    
    ## License
    
    ${data.license}
    
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
    ## Contributions
    
    ${data.contributions}
    
    ## Tests
    
    ${data.tests}


    ## Questions
    
    Please send any additional questions to ${data.email}, or visit my GitHub page: https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
