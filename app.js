// Dev:      Eric Morgan 
// Date:     12/08/21
// Filename: app.js

import chalk from 'chalk'; // Pulling the chalk package classes/methods from install chalk package

const log = console.log;    // constant variable to hold console.log; allows log to be written for a shortcut 

// My strange short story
log(chalk.blue('There once was a bogan named Tobin.'));
log(chalk.blue('He lived under a rock of', chalk.gray('gray.')));
log(chalk.blue('That', chalk.gray('rock ') + chalk.blue('had been his home for 40 years')));
log(chalk.blue('Sometimes blocking out the', chalk.yellowBright('bright light', chalk.blue('of day.'))));
log(chalk.blue('When it came time to', chalk.green('eat', chalk.blue('He would', chalk.cyanBright('wish, and wish and wish', chalk.blue('.'))))));
log(chalk.blue('And that', chalk.cyanBright('wish', chalk.blue('was for a', chalk.gray('silver', chalk.greenBright('fish.'))))));
log(chalk.blue('The', chalk.gray('fish', chalk.blue('born from this', chalk.cyanBright('wish', chalk.blue('was large enough to fill any', chalk.magentaBright('dish.')))))));