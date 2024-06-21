# create-html-css-js-temp

A CLI tool to create a web template with HTML, CSS, and JS files.

## Description

`create-html-css-js-temp` is a command-line tool that automates the creation of a basic web project structure. It generates an HTML file, a CSS file, and a JavaScript file, and links them together. This tool saves time and effort when starting a new web project by providing a quick and consistent setup.

## Installation

To use this tool, you need to have [Node.js](https://nodejs.org/) installed on your machine.

You can install `create-html-css-js-temp` globally using npm:

```
npm install -g create-html-css-js-temp
```

## Usage
After installing the tool, you can use it to create a new web template. Simply run the following command:

```
npx create-html-css-js-temp
```

You will be prompted to enter the names for your HTML, CSS, and JS files (without extensions). The tool will create these files with the appropriate extensions and link them together.

## Example
```
npx create-html-css-js-temp
You will be prompted to enter:

The HTML file name (default: index)
The CSS file name (default: style)
The JS file name (default: app)
```

The tool will generate the following files in your current directory:

index.html
style.css
app.js
The generated index.html will include the following structure:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
</head>
<body>
  <script src="app.js"></script>
</body>
</html>
```


## Author
Zeshan Merchant

## Published on npm
This package is published on npm and can be found [here](https://www.npmjs.com/package/create-html-css-js-temp).
