// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',  
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Describe your project and the problem it will solve.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Describe how you have built the application, including the technologies/tools you have used',
        name: 'how',
    },
    {
        type: 'input',
        message: 'How does the user install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Describe how your project will be used.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which license have you used for your project?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla', 'Apache', 'MIT'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please provide guidelines on how others can contribute to your project.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Describe how the application can be tested',
        name: 'testing',
    },
    
];

// Function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./sample-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Success! Your README.md file has been created!'
            });
        });
    });
};


//Function to store user inputs
const init = () => {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

init() 
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})

