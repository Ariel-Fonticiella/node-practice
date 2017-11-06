//import the "chalk" package into our program so we can use it
//(sharing code through global variables isn't really )
var chalk = require('chalk');
    //
    // npm install chalk

//import the "kirby-dance" package into our program so we can use it
var kirbyDance = require('kirby-dance');
    //
    // npm install kirby-dance

var cats = require('cat-ascii-faces');

var cool = require('cool-ascii-faces');

console.log(chalk.green('Hello, Node.js!') );


var arr = [1, 2, 3, 4, 5];

arr.forEach(function (oneNumbah){
  console.log( chalk.bgRed('Current number: ' + oneNumbah) );
});

console.log( chalk.bgCyan.red('You can combine styles too.') );


console.log( kirbyDance(7) );

console.log(
  chalk.magenta(
    kirbyDance(7)
  )
);

console.log( chalk.bgRed( cats() ) );


console.log(chalk.bgBlue( cool() ));
