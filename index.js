//required modules
const inquirer = require("inquirer");
const fs = require("fs");
// license badges
const mit = "![MIT](https://img.shields.io/badge/license-MIT-green)";
const apache =
  "![APACHE2](https://img.shields.io/badge/license-Apache%202-blue)";
const bsd = "![BSD](https://img.shields.io/badge/license-BSD-green)";
const lgpl = "![LGPL](https://img.shields.io/badge/license-lgpl__2__1-blue)";
const gpl = "![GPL](https://img.shields.io/badge/license-GPL-blue)";

inquirer
  // quests to generate the information needed for the readme
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
      message: "Please write any test instructions for this project",
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
    //select correct graphic for license by drawing on the license selected by user
    if (data.license == "Apache license 2.0") var licensegraphic = apache;
    else if (data.license == "MIT License") {
      var licensegraphic = mit;
    } else if (data.license == "GNU General Public License v3.0") {
      var licensegraphic = gpl;
    } else if (data.license == "GNU Lesser Public License v3.0") {
      var licensegraphic = lgpl;
    } else if (data.license == "BSD License") {
      var licensegraphic = bsd;
    }
    // this creates the readme, used template literal with markdown syntax and input data directly from the data collected
    fs.writeFile(
      "README.md",
      `
# ${data.title}
${licensegraphic}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contribute}
## Tests
${data.tests}
## License
Covered under ${data.license}
## Questions
If you wish to contact me or have additional questions you can reach me at either my [github profile](https://github.com/${data.username}) or feel free to email me at [${data.email}](mailto:${data.email})
`,
      (err) => {
        err ? console.log(err) : console.log("README was created");
      }
    );
  });
