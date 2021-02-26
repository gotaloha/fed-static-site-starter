# FED Static Site Starter
This tool is intended to rapidly spin up new static web sites using modern tools, enabling you to take ideas from concept to realization in a consistent and more efficient way.


### Features
- **Independent Front-End framework**
You may use any front-end framework such as Bootstrap 4, Foundation 6, Tailwind, UIKit 3 etc. Refer to [recipes](/docs/recipes/) for some pre-build examples.
- **Sass support (SCSS)**
Compiles [Sass](http://sass-lang.com/) files into CSS, preconfigured to easily accept partials, components, and third-party css.
- **Optimized Performance**
Compiles, concatenates, and minifies JavaScript, CSS, and images to help keep pages lean.
- **ES6+ via Babel**
ES6+ support using [Babel](https://babeljs.io/). ES6+ source code will be automatically transpiled to ES5 for wide browser support. Polyfill will also be taken care of automatically.
- **Linting**
Lint CSS, SCSS with [stylelint](https://stylelint.io/) and JS with [ESLint](https://eslint.org/)
- **Nunjucks templating engine support**
Compiles optional Nunjucks templating [Nunjucks](https://mozilla.github.io/nunjucks/) into HTML, allowing the use of includes, extends, block inheritance, macros and everything else Nunjucks offers.
- **Built-In HTTP Server**
Includes a built-in server to preview your work locally while developing the site.
- **Live Browser Reloading**
Saved changes automatically reload in real-time in the browser.
- **Cross-Device Synchronization**
Synchronize browser screens to easily test how the site looks on multiple devices or browsers simultaneously thanks to [BrowserSync](http://browsersync.io). Clicks, scrolls, form submissions and views will live-reload across multiple devices during development.
- **Deploy via FTP**
Optionally deploy your production site directly to your server via FTP

### Requirements
- [Node.js](https://nodejs.org/en/) 8+
- [Gulp](https://gulpjs.com/) 4 (tested with 4.0.2)

### Quick start
- [Download the latest release](https://github.com/gotaloha/fed-static-site-starter/archive/master.zip) or
- Clone the repo `git clone https://github.com/gotaloha/fed-static-site-starter.git my-project/`
- With [npm](https://www.npmjs.com/): `npm install`
- Development: `npm run dev`
- Build for production: `npm run build`
- Remove the `dist` folder: `npm run clean`

### Setting up Deploy to FTP
**Be certain to follow steps 1-4 or you risk exposing your FTP credentials to the public!**

1. First open `.gitignore` located at the root of this repo
2. After `node_modules` add a new line and then add `deploy.js`
3. Commit, stage, and push this file to git
4. In a terminal, execute: `git rm --cached deploy.js`
5. Open `deploy.js` and follow the comments to add your personal FTP credentials
6. In a terminal, execute the following command to deploy `npm run deploy`

### Quick start guides:
- [Documentation](docs/README.md)
- [Eleventy](https://www.11ty.dev/docs/)
- [YAML](https://learnxinyminutes.com/docs/yaml/)
- [Nunjucks](https://mozilla.github.io/nunjucks/templating.html)
