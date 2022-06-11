// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license){
    return('');
  } else {

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
            # ${data.title}
            ## Table of Contents
              1. Description
              2. Installation
              3. Usage
              4. Contributions
            ## Description
            ${data.description}
            ## Built With
            ${data.languages.map(language=>language).join(', ')}
            ## Installation
            ${data.installation}
            ## Usage
            ${data.usage}
            ## Contributions
            ${data.contributing}
            ## Tests
            ${data.tests}
            ## Questions?
            Please see Github at https://github.com/${data.github} for any questions.    
              

`;
  };


module.exports = generateMarkdown;