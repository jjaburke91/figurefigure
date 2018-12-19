# Figure Figure 

Built with Node, Github Pages & Gatsby (including 'Gatsby React Boilerplate' template).

## Requirements

* [Node.js / NPM](http://nodejs.org)
* [Gatsby (React, Sass)](https://www.gatsbyjs.org/docs/)

### Features

* Basic configuration and folder structure.
* Uses postcss and sass (with autoprefixer and pixrem).
* Uses data from local json files.
* Contains Node.js server code for easy, secure, and fast hosting.
* [SVG sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/): Add your SVG icons in `components/icon` as .icon files and use them.

## Setup

Before all stages, make sure you've installed the required dependencies with `npm install` in the root directory.

### Develop

1. Run `npm run dev`, this will try execute the development process and local server.
1. You should see a message saying your local server has started at `http://localhost:8000/`. Open this URL in the browser to view.
1. Start coding, the development process will automatically rebuild the local project on any code changes.

Note, this build is slightly different to the build that'll be used on the live site. To test a build matching how it'd be live, follow the next guide `Build`.

### Build

This will locally build the application, in the same way it'll be built for the live site.

1. Run `npm run build`. You should see a `Done building` message. This will build the application into a `public` folder.
1. Now you can test this build locally using `npm run serve`. This will create a local server running from the `public` folder.
1. You should see a message saying the server is running locally at `http://localhost:9000`. Open this URL in the browser to test.


### Deploy

The live website is served via Github pages, routing [figurefigure.fr](figurefigure.fr) to the Github pages host. Follow the next steps to deploy:

1. Locally test your build process with the above `Build` guide, and ensure everything is working there before deploying.
1. To deploy live, run `npm run deploylive`. This will build the app, and commit the build files to a `gh-pages` branch in the repository - Github pages will serve the website from this branch.
1. Done! You can view the site at [figurefigure.fr](figurefigure.fr). Remember, it can take a few minutes for changes to become visible.

## Making site updates

Please create a pull request via Git from a feature branch, and do not commit onto master. I'd like to sign off any changes before merging in.

## Considerations

* **RTL**: The usual method of generating different css file for RTL pages (as seen in static-html-boilerplate) will not work out of the box here since Gatsby pulls all the css together, this means the RTL css will override the LTR one.
