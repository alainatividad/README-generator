// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const md = (answer) =>
  `
  # ${answer.projectName}

  ## Description

  Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ## Usage
  
  ## Credits
  
  ## License
  
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ## How to Contribute
  
  ## Tests

  ## Questions

  For more information, go to my [Github](https://www.github.com/${answer.username}) or contact [${answer.email}](mailto:${answer.email}) with any additional questions or comments.
  
  `
// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'projectName',    
    message: 'What is the Project Name?'
  }
  // ,
  // {
  //   type:,
  //   name:,
  //   message: 'Enter a short description:'
  // },
  // {
  //   type:,
  //   name:,
  //   message: 'License:'
  // },
  // {
  //   type:,
  //   name:,
  //   message: 'Dependencies:'
  // },
  // {
  //   type:,
  //   name:,
  //   message: 'Installation'
  // },
  // {
  //   type:,
  //   name:,
  //   message: 'Usage'
  // },
  // {
  //   type:,
  //   name:,
  //   message: 'Contributing'
  // },
  // {
  //   type:,
  //   name:,
  //   message: 'Tests'
  // }
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README successfully created!'));
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
    writeToFile('README.md',md(answers))
  });
}

// Function call to initialize app
init();
