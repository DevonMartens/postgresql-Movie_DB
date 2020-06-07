const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

function   WelcomeToBlockBuster() {
    const blockBuster
     = logo({ name: "Hollywood Hills: Explore a movie actor database" }).render();
  
    console.log(blockBuster);
  
    findMovie();
  }

  WelcomeToBlockBuster();

async function findMovie() {
    const { choice } = await prompt([
{
        type: "list",
        name: "choice",
        message: "Hello, how can we help you select a movie today?",
        choices: [
          {
            name: "View All Movies",
            value: "VIEW_ALL_MOVIES"
          },
          {
            name: "Select a lanage to watch a movie in",
            value: "SELECT_LANG"
          },
         {
            name: "Select an actor and find the movies they are in",
            value: "SELECT_Actor"
          },{
             name: "Select a director and find the movies they created",
            value: "SELECT_DIRECTOR"
        }
        ]
    }])
}