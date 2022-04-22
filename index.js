// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const generateLicense = require('./utils/generateLicense');


// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your full name?',
    validate(value) {
      if (value.length > 0) {
        return true;
      }      
      return 'Please enter a valid name';
    }
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your username?',
    validate(value) {
      if (value.length > 0) {
        return true;
      }      
      return 'Please enter a valid username';
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (e.g. name@email.com)',
    validate(value) {
      if (value.includes('@')) {
        return true;
      }      
      return 'Please enter a valid email address';
    }
  },
  {
    type: 'input',
    name: 'title',    
    message: 'What is the project name?',
    validate(value) {
      if (value.length > 0) {
        return true;
      }      
      return 'Please enter a valid project name';
    }
  },
  {
    type: 'editor',
    name: 'desc',
    message: 'Enter a short project description:'
    // validate(value) {
    //   if (value) {
    //     return true;
    //   }      
    //   return 'Please enter a description.';
    // }
  },
  {
    type: 'input',
    name: 'install',
    message: 'How is this installed?',
    validate(value) {
      if (value.length > 0) {
        return true;
      }      
      return 'Please enter an installation code.';
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is this program used?',
    validate(value) {
      if (value.length > 0) {
        return true;
      }      
      return 'Please enter a code.';
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'How do you test the program?',
    validate(value) {
      if (value.length > 0) {
        return true;
      }      
      return 'Please enter a test code.';
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'License:',
    choices: ['Apache', 'GNU GPLv3', 'MIT', 'Mozilla', 'Unlicense', 'None'],
    default: 5
  },
  {
    type: 'editor',
    name: 'contribute',
    message: 'What do we need to know about contributing?',
    validate(value) {
      if (value) {
        return true;
      }      
      return 'Please enter a text.';
    }
  }
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(`${fileName} successfully created!`));
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // console.log(JSON.stringify(answers, null, '  '));
    // console.log(generateMarkdown(answers));
    writeToFile('README.md', generateMarkdown(answers));
    if (answers.license && answers.license !== 'None') {
      writeToFile('LICENSE', generateLicense(answers));
    }
  });
}

// Function call to initialize app
init();
