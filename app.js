const inquirer = require('inquirer');

inquirer
  .prompt([
      {
          type: 'input',
          name: 'name',
          message: 'What is your name?'
      }
  ])
  .then(answers => console.log(answers));
  
/*
const fs = require('fs');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

const generatePage = require('./src/page-template.js');

const printProfileData = (profileDataArr) => {
    for (let i = 0; i < profileDataArr.length; i += 1){

      console.log(profileDataArr[i]);
      
    }
    console.log('=================');

    profileDataArr.forEach(profileItem => console.log(profileItem));
};


printProfileData(profileDataArgs);


fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});
*/