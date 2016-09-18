Angular 2 Application
----------------------

The bootstrapping example is taken from Angular Quick Start, and adjusted as per the altered project structure. 

The by moving code to src directory.

It is important to install latest version of Node.js

 `wget -qO- https://deb.nodesource.com/setup_6.x | sudo bash - sudo apt-get install nodejs`

In VS Code, to hide .js and .map.js file generated after transpiling - add following in .vscode/settings.json

```json
{
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.js.map": true,
        "**/*.js": {"when": "$(basename).ts"}
    }
}
```

For execution steps follow - [Angular QuickStart](https://angular.io/docs/ts/latest/quickstart.html)