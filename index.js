const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const markdownGenerator = require("./Develop/utils/generateMarkdown");
const data = {};

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your Github username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your Github repo name?",
            name: "repoName"
        },
        {
            type: "input",
            message: "What is your project title?",
            name: "title"
        },
        {
            type: "input",
            message: "Please desribe your project.",
            name: "description"
        },
        {
            type: "input",
            message: "Please list the steps to install your project.",
            name: "installation"
        },
        {
            type: "input",
            message: "Please provide instructions for use.",
            name: "usage"
        },
        {
            type: "input",
            message: "Please include additional credits.",
            name: "credit"
        },
        {
            type: "input",
            message: "Please list any tests for your application.",
            name: "tests"
        },
        {
            type: "input",
            message: "Please list how to contribute to your application.",
            name: "contribute"
        }
    ]).then( (input) => {

        const { username, repoName, title, description, installation, usage, credit, tests, contribute } = input
        
        data.title = title
        data.description = description
        data.installation = installation
        data.usage = usage
        data.credit = credit
        data.tests = tests
        data.contribute = contribute
        data.repoName = repoName
        data.username = username

        const queryUrl = `https://api.github.com/users/${username}/events/public`;
        axios
            .get(queryUrl)
            .then((res) => {
                
                let githubProfilePic = res.data[0].actor.avatar_url;
                let githubEmail = res.data[2].payload.commits[0].author.email;

                data.githubProfilePic = githubProfilePic;
                data.githubEmail = githubEmail;

                console.log(data);

                const README = markdownGenerator(data);

                fs.writeFile("./README.md", README, function(err){
                    console.log("Success!");
                })

                })
            .catch(err => console.log(err));
    
    }).catch(err => console.log(err));