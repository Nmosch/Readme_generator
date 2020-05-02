const fs = require("fs");
const axios = require("axios");

function generateMarkdown(data) {
  
  return `
  # Your Project Title
  ${data.title};

  ## Description 
  
  ${data.description};
  
  ## Table of Contents

* [Installation](#Installation)
    
* [Usage](#Usage)
    
* [Credits](#Credits)

* [Contributing](#Contributing)
    
* [Tests](#Tests)

* [Questions](#Questions)

  ## Installation
    
  ${data.installation}

  ## Usage 
  
  ${data.usage}  
  
  ## Credits

  ${data.credit}

  ## Contributing

  ${data.contribute}
    
  ## Tests
  
  ${data.tests}

  ## Questions

  ![alt text](${data.githubProfilePic})

  Contact me with questions at ${data.githubEmail}

  ## License
  
  ![alt text](https://img.shields.io/github/license/${data.username}/${data.repoName})
  ![alt text](https://img.shields.io/github/issues-closed/${data.username}/${data.repoName})
`;
}

module.exports = generateMarkdown;
