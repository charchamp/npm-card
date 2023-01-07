#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import chalk from 'chalk';
import boxen from 'boxen';

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           Charlie'),
  handle: chalk.white('charchamp'),
  shorthandle: chalk.white('charchamp'),
  work: chalk.white('Full-stack Software Developer.'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('charchampv'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~charchamp'),
  github: chalk.gray('https://github.com/') + chalk.green('charchamp'),
  web: chalk.cyan('https://charchamp.cc'),
  npx: chalk.red('npx') + ' ' + chalk.white('charchamp'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelnpm: chalk.white.bold('     npm:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + webing + newline + carding

console.log(chalk.green(boxen(output, options)))
