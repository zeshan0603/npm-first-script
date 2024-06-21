#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

const questions = [
  {
    type: 'input',
    name: 'htmlFileName',
    message: 'Enter the base name for the HTML file (default: index):',
    default: 'index'
  },
  {
    type: 'input',
    name: 'cssFileName',
    message: 'Enter the base name for the CSS file (default: style):',
    default: 'style'
  },
  {
    type: 'input',
    name: 'jsFileName',
    message: 'Enter the base name for the JS file (default: app):',
    default: 'app'
  }
];
inquirer.prompt(questions).then(answers => {
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="${answers.cssFileName}.css">
  <title>Your Project Name</title>
</head>
<body>
  <script src="${answers.jsFileName}.js"></script>
</body>
</html>`;

  const cssContent = `/* Add your styles here */`;
  const jsContent = `// Add your JavaScript here`;

  fs.writeFileSync(path.join(process.cwd(), (answers.htmlFileName+".html")), htmlContent);
  fs.writeFileSync(path.join(process.cwd(), (answers.cssFileName+".css")), cssContent);
  fs.writeFileSync(path.join(process.cwd(), (answers.jsFileName+".js")), jsContent);

  console.log('Project setup complete');
});
