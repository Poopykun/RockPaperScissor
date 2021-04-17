//starting scores of human and pc

let scoreHuman=0;
let scorePc=0;



// computer logic which gives out either of rock, paper and scissors
function computerPlay()
{

let game = ['rock', 'paper', 'scissor'];
return game[Math.floor(Math.random() *3)];

}
    
let playerSelection = "";  // player selection keeping it empty to define it later on in the function



// playround, this function plays one round of rock, paper and scissors

function playRound(playerSelection)
{
     
     let computerSelection = computerPlay();
     playerSelection = prompt('Type one:- Rock, Paper, Scissor!');

  if (playerSelection.toLowerCase() == "rock")
        
   {
        if(computerSelection == "rock")
        return "It is a tie!"

        else if (computerSelection == "paper")
        return "You lose Lmao"

        else
        return "You win! DING DING"
    
   }

   else if (playerSelection.toLowerCase() == "paper")
        
   {
        if(computerSelection == "rock")
        return "You win! DING DING";

        else if (computerSelection == "paper")
        return "It is a tie!";

        else
        return "You lose Lmao";
    
   }

   else if (playerSelection.toLowerCase() == "scissor")
        
   {
        if(computerSelection == "rock")
        return "You lose Lmao";

        else if (computerSelection == "paper")
        return "You win! DING DING";

        else
        return "It is a tie!";
        
    
   }

   else 
        {
   return "sorry you didn't type it quite write :D";
        }

   


}

// the main game where game runs for 5 times atleast and reports the winner or loser at the end

function game()
{    

     for (i=1;i<=20;i++)

     {
         let gamecheck = playRound();
        
          if (scoreHuman== 5)
          {    

              console.log("Human DEFEATS Computer!!!!!!");
              break;

          }    
          
          else if (scorePc == 5)
          {
               console.log("Computer DEFEATS PUNY HUMAN!!!!!");
               break;
          }

         else if (gamecheck == "You win! DING DING" )
          {
           scoreHuman+=1;    
          console.log("Your score is:-" + scoreHuman);
          console.log("PC score is:-" + scorePc);
          console.log (gamecheck);
          }

          else if(gamecheck == "You lose Lmao")

          {
               scorePc+=1;
               console.log ("Your score is:-" + scoreHuman);
               console.log ("PC score is:-" + scorePc);
               console.log (gamecheck);

          }

          else if(gamecheck == "It is a tie!" )
          {
               console.log("Your score is:-" + scoreHuman);
               console.log("PC score is:-" + scorePc);
               console.log (gamecheck);

          }

          
          
         
         
     }

     



}