// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//  function renderLicenseBadge(license) {
//    if(!license){
//      return('');
//    }else {
//   return `![badge](https://img.shields.io/static/v1?label=license&message=${data.license}&color=red)`

//    };
//  }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//  if(license === none){
//    return('');
//  }else {

//     return`https://choosealicense.com/licenses/${data.license}/
//       .toLowerCase()
//       .replace(" ", "-")`

//   };
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//TODO: Create a function to generate markdown for README
const generateMarkdown=data => {
    return `# ${data.title} ${data.license}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [License](#license)
* [Questions](#questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributions
${data.contributions}
## Tests
${data.tests}
## Questions?
Please see Github at https://github.com/${data.github} for any questions.    
`;
  };


module.exports = generateMarkdown;