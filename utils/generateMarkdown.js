// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return ' ';
  }
}

/*
function licenseBadge(value) {
  if (value === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (value === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (value === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (value === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (value === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
  
    The application is covered under the following license:
  
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
}

// Function that returns license in table of contents
 function renderLicenseTOC(license) {
  if (license !== 'no license') {
  return `
  * [License](#license)
    `;
  } else {
    return ' ';
  }
 }
 */

 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)

  ${data.description}

  ${data.how}

  ## [Installation](#table-of-contents)

  ${data.installation}

  ## [Usage](#table-of-contents)

  ${data.usage}
  
  ## [License](#table-of-contents)
 
  ${data.license}

  ## [Contributing](#table-of-contents)
  
  ${data.contribution}

  ## [Tests](#table-of-contents)

  ${data.testing}

  ## [Questions](#table-of-contents)

  Please contact me using the following links:

  [GitHub](https://github.com/${data.githubUsername})

  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;

