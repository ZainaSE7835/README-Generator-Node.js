const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your project"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide description for project",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions on how to use the project",
    },
    {
        type: "input",
        name: "tests",
        message: "Include any tests for your project"
    },
    {
        type: "input",
        name: "installation",
        message: "If applicable, provide description of how to install and run your project",
    },
    {
    type: "input",
    name: "contribution",
    message: "How can people contribute to your project",
    },
    {
        type: "input",
        name: "credits",
        message: "If applicable, include credits in this section",
    },
    {
        type: "input",
        name: "username",
        message: "Please provide your GitHub username",
    },
    {
        type: "input",
        name: "GitHub",
        message: "Please provide the name of your GitHib repo"
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email address",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project",
        choices: ["MIT", "APACHE2.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Your professional README.md file has been created");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses}));
    });
}

// function call to initialize program
init();
