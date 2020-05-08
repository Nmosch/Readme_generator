const fs = require("fs");
const axios = require("axios");
//function to generate README data
function generateMarkdown(data) {
  
  return `
  # ${data.title}
  
  ## Description 
  
  ${data.description}
  
  ## Table of Contents

* [Installation](#Installation)
    
* [Usage](#Usage)
    
* [Credits](#Credits)

* [Contributing](#Contributing)
    
* [Tests](#Tests)

* [Questions](#Questions)

* [Badges] (#Badges)

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

  ## Badges
  
  ![alt text](https://img.shields.io/github/license/${data.username}/${data.repoName})
  ![alt text](https://img.shields.io/github/issues-closed/${data.username}/${data.repoName})
`;
}

module.exports = generateMarkdown;
