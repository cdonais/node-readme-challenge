// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
            <h1>${name}<h1>
            ## Table of Contents
              1. Description
              2. Installation
              3. Usage
              4. Contributions
            ## Description
            <p>${description}</p>
            ## Built With
            ${languages.map(language=>language).join(', ')}
            ## Installation
            <p>${installation}</p>
            ## Usage
            <p>${usage}<p>
            ## Contributions
            <p>${contributing}</p>
            ## Tests
            <p>${tests}</p>
            ## Questions?
            <p>Please see Github at ${github} for any questions.</p>    
              

`;
  };


module.exports = generateMarkdown;