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
    ]).then( (data) => {

        let { username, title, description, installation, usage, credit, tests, contribute } = data
                   
    });