// TODO: Create a function that returns a license badge based on which license is passed in
const generateMarkdown=data => {
    return `# ${data.title} 

  ![license badge](https://img.shields.io/static/v1?label=license&message=${data.license}&color=red) 
  
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
  ## License
  The license used is [${data.license}](https://choosealicense.com/licenses/${data.license}/)
  ## Questions?
  Please contact me at [Github](https://github.com/${data.github}) or email me at [${data.email}](${data.email}) for any questions.   
  `;
  };


module.exports = generateMarkdown;