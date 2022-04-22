// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// badge markdown are from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  let badge = '[![License'
  switch (license) {
    case 'Apache':
      badge += '](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    
    case 'GNU GPLv3':
      badge += ': GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    
    case 'MIT':
      badge += ': MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    
    case 'Mozilla':
      badge += ': MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    
    case 'Unlicense':
      badge += ': Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    
    default:
      badge = ''
      break;
  }
  return badge;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ''
  switch (license) {
    case 'Apache':
      licenseLink = 'Licensed under the [Apache](./LICENSE) license';
      break;
    
    case 'GNU GPLv3':
      licenseLink = 'Licensed under the [GNU General Public License v3.0 or later](./LICENSE) license';
      break;
    
    case 'MIT':
      licenseLink = 'Licensed under the [MIT](./LICENSE) license.';
      break;
    
    case 'Mozilla':
      licenseLink = 'Licensed under the [MPLv2](./LICENSE) license.';
      break;
    
    case 'Unlicense':
      licenseLink = 'This is free and unencumbered public domain software. For more information, see [https://unlicense.org/](https://unlicense.org/) or the accompanying [file](./LICENSE).';
      break;
    
    default:
      licenseLink = ''
      break;
  }
  return licenseLink;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length > 0) {
    const licenseLink = renderLicenseLink(license);
    
    return `## License

${licenseLink}` 
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(`${data.license}`);
  const licenseSection = renderLicenseSection(`${data.license}`);
  const tableContent = (licenseSection !== 'None') ? '- [License](#license)' : '';

  return `# ${data.title}

${licenseBadge}

## Description

${data.desc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
${tableContent}

## Installation

\`\`\`
${data.install}  
\`\`\`

## Usage

\`\`\`
${data.usage}
\`\`\`

## Tests

\`\`\`
${data.test}
\`\`\`

## Contributing

${data.contribute}

## Questions

For more information, go to my [Github](https://www.github.com/${data.username}) or contact [${data.email}](mailto:${data.email}) with any additional questions or comments.

${licenseSection}
  
  `
;
}

module.exports = generateMarkdown;