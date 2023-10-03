
# J.A.T.E (Just Another Text Editor)

## Description
J.A.T.E is a web-based text editor that supports JavaScript syntax highlighting. The application is implemented with a service worker allowing it to work offline, making it a reliable tool for developers on the go. It is a progressive web application built with modern JavaScript and Web APIs, ensuring high performance and user experience.

The site can be accessed [here] (https://text-editor-100123-7b133408c5cd.herokuapp.com/).

![J.A.T.E.](./src/images/Website-Screenshot.png) 

## Installation

### Clone the repository
```sh
git clone <https://github.com/jonesmatr/Text-Editor.git>
cd <repository-folder>
```

### Install dependencies
J.A.T.E has a client and server-side, each with its own dependencies. Install them by running:
```sh
npm install
npm run install
```

### Running the application locally
Start the development server:
```sh
npm run start:dev
```
The application will open in your default web browser, or you can navigate to `http://localhost:3000/`.

## Usage
The editor provides a simple and intuitive interface for writing JavaScript code with syntax highlighting. It automatically saves your work, ensuring that you don't lose your code.

### Building the project for production
```sh
npm run build
```

## Deployment to Heroku
Ensure that you have the Heroku CLI installed and that you are logged in.

### Create a new Heroku application
```sh
heroku create <your-app-name>
```

### Push to Heroku
```sh
git push heroku main
```

Open the application in the browser:
```sh
heroku open
```
