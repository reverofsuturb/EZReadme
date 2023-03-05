const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please briefly describe your project",
    },
    {
      type: "input",
      name: "installation",
      message: "Please describe any installation instructions for your project",
    },
    {
      type: "input",
      name: "usage",
      message: "Please describe how to use your project",
    },
    {
      type: "input",
      name: "contribute",
      message: "List any contributors to your project",
    },
    {
      type: "input",
      name: "tests",
      message: "Please show how the user can test this project",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please choose a license for your project",
      choices: [
        "Apache license 2.0",
        "MIT License",
        "GNU General Public License v3.0",
        "GNU Lesser Public License v3.0",
        "BSD License",
      ],
    },
  ])
  .then((data) => {
    console.log(data);
    fs.writeFile(
      "genREADME.md",
      `
# ${data.title}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributors
${data.contribute}
## Tests
${data.tests}
## License
${data.license}
## Questions
If you wish to contact me you can reach me at either my [github profile] (https://github.com/${data.username}) or feel free to email me at ${data.email}
`,
      (err) => {
        err ? console.log(err) : console.log("Portfolio was created");
      }
    );
  });
