// TODO: Include packages needed for this application
const generateMarkdown=require('./utils/generateMarkdown.js');
const inquirer=require('inquirer');
const fs=require('fs');
// TODO: Create an array of questions for user input
const promptUser =()=>{
        return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
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
            type: 'checkbox',
            name: 'license',
            message: 'What license did you use?',
            choices: ['MIT', 'Apache-2.0', 'GNU-AGPL-3.0', 'None']
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
            name: 'contributions',
            message: 'How can others contribute to this project?',
            validate: contributionsInput => {
                if(contributionsInput){
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
           message: 'How can a user test your application?',
           validate: testsInput => {
               if(testsInput){
                   return true;
               } else {
                   console.log('Please enter a response.');
                   return false;
               }
           }  
        },
        {
            type:'input',
            name: 'github',
            message: 'What is your github username?',
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
            type:'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else {
                    console.log('Please enter a response');
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
 function writeToFile(fileName, data) {
     fs.writeFile(fileName, data, err => {
         err ? console.error(err) : console.log("Your Readme has been created.")
     });
 }

// // TODO: Create a function to initialize app
promptUser()
         .then(data=>{
             const content=generateMarkdown(data);
             writeToFile('./utils/README.md', content);

        });
 

