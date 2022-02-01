
//Setting player X to start the game

let playerTurn = "X";
let playerInfo = document.getElementById('playerInfo');
let changePlayerTurn =() => `It's ${playerTurn}'s turn`;


  //With this function we are going to check if X or O is the winner of the game by checking every box - across and diagnol
  // we are also setting every box with a variable 
   function ticWinner(){
    var b1 = document.getElementById("Box1");
    var b2 = document.getElementById("Box2");
    var b3 = document.getElementById("Box3");
    var b4 = document.getElementById("Box4");
    var b5 = document.getElementById("Box5");
    var b6 = document.getElementById("Box6");
    var b7 = document.getElementById("Box7");
    var b8 = document.getElementById("Box8");
    var b9 = document.getElementById("Box9");

        //checking Box 1, 2 & 3 for a winner
    if((b1.innerHTML==='X')&& (b2.innerHTML==='X')&& (b3.innerHTML==='X')){
        let winnerIs = document.getElementById("playerWinz");
        winnerIs.innerHTML= 'Player X is the Winner';
        }
        if((b1.innerHTML==='O')&& (b2.innerHTML==='O')&& (b3.innerHTML==='O')){
            let winnerIs = document.getElementById("playerWinz");
            winnerIs.innerHTML= 'Player O is the Winner';
            }
            //checking Box 4, 5 & 6 for a winner

    if((b4.innerHTML==='O')&& (b5.innerHTML==='O')&& (b6.innerHTML==='O')){
                let winnerIs = document.getElementById("playerWinz");
                winnerIs.innerHTML= 'Player O is the Winner';
                }
        if((b4.innerHTML==='X')&& (b5.innerHTML==='X')&& (b6.innerHTML==='X')){
            let winnerIs = document.getElementById("playerWinz");
            winnerIs.innerHTML= 'Player X is the Winner';
            }

            //checking  Box 7,8,9 
    if((b7.innerHTML==='O')&& (b8.innerHTML==='O')&& (b9.innerHTML==='O')){
                let winnerIs = document.getElementById("playerWinz");
                winnerIs.innerHTML= 'Player O is the Winner';
                }
        if((b7.innerHTML==='X')&& (b8.innerHTML==='X')&& (b9.innerHTML==='X')){
            let winnerIs = document.getElementById("playerWinz");
            winnerIs.innerHTML= 'Player X is the Winner';       
        }

         // checking Box 1,4,7
    if((b1.innerHTML==='O')&& (b4.innerHTML==='O')&& (b7.innerHTML==='O')){
            let winnerIs = document.getElementById("playerWinz");
            winnerIs.innerHTML= 'Player O is the Winner';
            }
    if((b1.innerHTML==='X')&& (b4.innerHTML==='X')&& (b7.innerHTML==='X')){
        let winnerIs = document.getElementById("playerWinz");
        winnerIs.innerHTML= 'Player X is the Winner';       
    }

       //checking Box 2,5, 8   
    if((b2.innerHTML==='O')&& (b5.innerHTML==='O')&& (b8.innerHTML==='O')){
        let winnerIs = document.getElementById("playerWinz");
        winnerIs.innerHTML= 'Player O is the Winner';
        }
    if((b2.innerHTML==='X')&& (b5.innerHTML==='X')&& (b8.innerHTML==='X')){
    let winnerIs = document.getElementById("playerWinz");
    winnerIs.innerHTML= 'Player X is the Winner';       
}
    //checking Box 3,6,9 
   if((b3.innerHTML==='O')&& (b6.innerHTML==='O')&& (b9.innerHTML==='O')){
    let winnerIs = document.getElementById("playerWinz");
    winnerIs.innerHTML= 'Player O is the Winner';
    }
  if((b3.innerHTML==='X')&& (b6.innerHTML==='X')&& (b9.innerHTML==='X')){
     let winnerIs = document.getElementById("playerWinz");
     winnerIs.innerHTML= 'Player X is the Winner';       
    }

   //checking Box 1,5,9

   if((b1.innerHTML==='O')&& (b5.innerHTML==='O')&& (b9.innerHTML==='O')){
    let winnerIs = document.getElementById("playerWinz");
    winnerIs.innerHTML= 'Player O is the Winner';
    }
    if((b1.innerHTML==='X')&& (b5.innerHTML==='X')&& (b9.innerHTML==='X')){
    let winnerIs = document.getElementById("playerWinz");
    winnerIs.innerHTML= 'Player X is the Winner';       
    }

    //checking Box 3,5,7
    if((b3.innerHTML==='O')&& (b5.innerHTML==='O')&& (b7.innerHTML==='O')){
        let winnerIs = document.getElementById("playerWinz");
        winnerIs.innerHTML= 'Player O is the Winner';
        }
    if((b3.innerHTML==='X')&& (b5.innerHTML==='X')&& (b7.innerHTML==='X')){
    let winnerIs = document.getElementById("playerWinz");
    winnerIs.innerHTML= 'Player X is the Winner';       
 }
    
   //Here we check to see if there is a draw = no winner

 if((b1.innerHTML==='X' || b1.innerHTML==='O')&& (b2.innerHTML==='X' || b2.innerHTML==='O') && (b3.innerHTML==='X' || b3.innerHTML==='O') &&
 (b4.innerHTML==='X' || b4.innerHTML==='O') && (b5.innerHTML==='X' || b5.innerHTML==='O') && (b6.innerHTML==='X' || b6.innerHTML==='O') &&
 (b7.innerHTML==='X' || b7.innerHTML==='O') && (b8.innerHTML==='X' || b8.innerHTML==='O') && (b9.innerHTML==='X' || b9.innerHTML==='O')){

   let winnerIs = document.getElementById("playerWinz");
   winnerIs.innerHTML= 'Draw - No Winner! ';       
  }
 
}   
    
  
           
        
//The following functions will determine if there should be an X or O depending on the player turn

 function anotherOne (id){
    
     
     if(playerTurn =='X'){
        document.getElementById('Box1').innerHTML='X';
        
        
     }
      else{
        document.getElementById('Box1').innerHTML='O';
      }
      changePlayers()
      ticWinner()
      
 }
 

 function anotherTwo (id){
    
    if(playerTurn =='X'){
       document.getElementById('Box2').innerHTML='X';
    }
     else{
       document.getElementById('Box2').innerHTML='O';
     }
     changePlayers()
     ticWinner()
     
}
function anotherThree (id){
    
    if(playerTurn =='X'){
       document.getElementById('Box3').innerHTML='X';
    }
     else{
       document.getElementById('Box3').innerHTML='O';
     }
     changePlayers()
     ticWinner()
     
}
function anotherFour (id){
    if(playerTurn =='X'){
       document.getElementById('Box4').innerHTML='X';
    }
     else{
       document.getElementById('Box4').innerHTML='O';
     }
     changePlayers()
     ticWinner()
     
}
function anotherFive (id){
    if(playerTurn =='X'){
       document.getElementById('Box5').innerHTML='X';
    }
     else{
       document.getElementById('Box5').innerHTML='O';
     }
     changePlayers()
     ticWinner()
     
}

function anotherSix (id){
    if(playerTurn =='X'){
       document.getElementById('Box6').innerHTML='X';
    }
     else{
       document.getElementById('Box6').innerHTML='O';
     }
     changePlayers()
     ticWinner()
     
}
function anotherSeven (id){
    if(playerTurn =='X'){
       document.getElementById('Box7').innerHTML='X';
    }
     else{
       document.getElementById('Box7').innerHTML='O';
     }
     changePlayers()
     ticWinner()
     
}
function anotherEight (id){
    if(playerTurn =='X'){
       document.getElementById('Box8').innerHTML='X';
    }
     else{
       document.getElementById('Box8').innerHTML='O';
     }
     changePlayers()
     ticWinner()
     
}
function anotherNine (id){
    if(playerTurn =='X'){
       document.getElementById('Box9').innerHTML='X';
    }
     else{
       document.getElementById('Box9').innerHTML='O';
     }
     changePlayers()
     ticWinner()
     
}
 //End of functions that determine if box should get an X or O



    

     //This function changes the rotation of the player once a click on the box has been made
 function changePlayers (){
     playerTurn = playerTurn ==="X" ? "O" : "X";
     playerInfo.innerHTML = changePlayerTurn();
 }

 //this function is to reset the board - clearing it
 
 function clearIt() {
    let winnerIs = document.getElementById("playerWinz");
    winnerIs.innerHTML= '';

    var b1 = document.getElementById("Box1");
    var b2 = document.getElementById("Box2");
    var b3 = document.getElementById("Box3");
    var b4 = document.getElementById("Box4");
    var b5 = document.getElementById("Box5");
    var b6 = document.getElementById("Box6");
    var b7 = document.getElementById("Box7");
    var b8 = document.getElementById("Box8");
    var b9 = document.getElementById("Box9");

    b1.innerHTML = " ";
    b2.innerHTML = " ";
    b3.innerHTML = " ";
    b4.innerHTML = " ";
    b5.innerHTML = " ";
    b6.innerHTML = " ";
    b7.innerHTML = " ";
    b8.innerHTML = " ";
    b9.innerHTML = " ";
    
 }

 
