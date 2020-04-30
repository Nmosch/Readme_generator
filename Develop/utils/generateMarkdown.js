function generateMarkdown(data) {
  const queryUrl = `https://api.github.com/users/${username}/events/public`;
  axios
      .get(queryUrl)
      .then(function (res) {
          
          let githubProfilePic = res.actor.avatar_url;
          let githubEmail = res.payload.commits.author.email;
          console.log(githubEmail)
          console.log(githubProfilePic)
          })
      .catch()

  return `
  # Your Project Title
    ${data.title};

  ## Description 
  
  ${data.description};
  
  ## Table of Contents
  
  ## Installation
    
  ${data.installation}

  ## Usage 
  
  ${data.usage}  
  
  ## Credits

  ${data.credit}
  
  ## License
  
  ${data.license}
  
  ---
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  https://img.shields.io/github/license/${username}/${repoName}
  ## Contributing

  ${data.contribute}
    
  ## Tests
  
  ${data.test}

  ## Questions

  Contact me at 
`;
}

module.exports = generateMarkdown;
