const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

function   WelcomeToBlockBuster() {
    const blockBuster
     = logo({ name: "Block Buster" }).render();
  
    console.log(blockBuster);
  
    findMovie();
  }

  WelcomeToBlockBuster();

// async function findMovie() {
//     const { choice } = await prompt([
//     



// {
// //         type: "list",
// //         name: "choice",
// //         message: "Hello, how can we help you select a movie today?",
// //         choices: [
// //           {
// //             name: "View All Movies",
// //             value: "VIEW_EMPLOYEES"
// //           },
// //           {
// //             name: "View All Employees By actors",
// //             value: "VIEW_EMPLOYEES_BY_Actor"
// //           },
// //           {
//            