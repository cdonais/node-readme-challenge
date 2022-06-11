// TODO: Include packages needed for this application
const generateMarkdown=require('./utils./generateMarkdown')
const inquirer=require('inquirer');
const fs=require('fs');
// TODO: Create an array of questions for user input
const questions =[
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter project name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a response.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is the method of installation?',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter a response.');
                    return false;
                }
            }
        },
        { type: 'input',
          name: 'usage',
          message: 'What will this project be used for?',
          validate: usageInput => {
              if(usageInput){
                  return true;
              } else {
                  console.log('Please enter a response.');
                  return false;
              }
          }  
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to this project?',
            validate: contributingInput => {
                if(contributingInput){
                    return true;
                } else {
                    console.log('Please enter a response.');
                    return false;
                }
            }
        },
        {
           type: 'input',
           name: 'tests',
           message: 'What tests did you do?',  
        },
        {
            type:'input',
            name: 'github',
            message: 'What is your github link?',
            validate: githubInput => {
                if(githubInput){
                    return true;
                } else {
                    console.log('Please enter a response.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? Check all that apply.',
            choices: ['HTML', 'CSS', 'JavaScript', 'Node'] 
        }
    ];

// TODO: Create a function to write README file
 function writeToFile(fileName, data) {
     fs.writeFile(fileName, data, (err) => {
         err ? console.error(err) : console.log("Your Readme has been created.")
     });
 }

// // TODO: Create a function to initialize app
 function init() {
inquirer(questions)
        .then(userInput)=>generateMarkdown(userInput);
        .then(writeToFile("README.md",))
 }

// // Function call to initialize app
 init();
