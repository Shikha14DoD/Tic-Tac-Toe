const idArr=[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
let textArr=[
             ["","",""],
             ["","",""],
             ["","",""]
             ];
let moveOfPlayer1=true;
let moveOfPlayer2=false;
let currentPlayer=document.createElement("h3");
currentPlayer.setAttribute("id","currplayer");
currentPlayer.innerHTML="Player1 it's your move!";
document.body.appendChild(currentPlayer);

function play(id)
{
    let text;
    if(moveOfPlayer1)
    {
      if(!document.getElementById(id).innerHTML)
      {
      document.getElementById(id).innerHTML="X";
      text="X";
      moveOfPlayer1=false;
      currentPlayer.innerHTML="Player2 it's your move!";
      moveOfPlayer2=true;
      }
    }
    else
    {
      if(!document.getElementById(id).innerHTML)
      {
      document.getElementById(id).innerHTML="0";
      text="0";
      moveOfPlayer1=true;
      currentPlayer.innerHTML="Player1 it's your move!";
      moveOfPlayer2=false;
      }
    
    }

      let row=idArr[Number(id)-1][0];
      let col=idArr[Number(id)-1][1];
      textArr[row][col]=text;
      setTimeout(checkForWinning(text,row,col),2000);
}

 function cleartext()
 {
     for(let i=1;i<=9;i++)
     {
         document.getElementById(i.toString()).innerHTML="";
     }

     for(let i=0;i<9;i++)
     {
         for(let j=0;j<9;j++)
         {
             textArr[i][j]="";
         }
     }
     moveOfPlayer1=true;
     moveOfPlayer2=false;
     currentPlayer.innerHTML="Player1 it's your move!"


 }

function drawCheck()
{
    let flag=0;
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            if(textArr[i][j]==="")
            {
                flag=-1;
                break;
            }
             
        }
        if(flag==-1)
          break;
    }

    if(flag==0)
    {
      
      currentPlayer.innerHTML="Player1 it's your move!"
      window.alert("Draw!");
      //cleartext();
      resetEverything();
      
    }
}
drawCheck();

function resetEverything()
{
    moveOfPlayer1=true;
    moveOfPlayer2=false;
    setTimeout(cleartext,1000);
    currentPlayer.innerHTML="Player1 it's your move!";
}

function showFinalResult(text)
{
    if(text==="X")
        setTimeout(window.alert("Congratulations! Player1 wins"),1000);
    else
        setTimeout(window.alert("Congratulations! Player2 wins"),1000);
    resetEverything();
}

function checkForWinning(text,row,col)
{
    let flag=0;
    for(let i=0;i<3;i++)  //let's traverse row-wise
    {
        if(textArr[row][i]!==text)
        {
        flag=-1
           break;
        }
    } 

    if(flag==0)
    {
        showFinalResult(text);
        return;   
    }

    else
    {         
        flag=0;         //let's traverse col-wise
        for(let i=0;i<3;i++)
        {
           if(textArr[i][col]!==text)
             {
                 flag=-1;
                 break;
             }
        }

        if(flag==0)
        {
            showFinalResult(text);
            return;
        }

        else
        {
            flag=0;      //let's traverse diagonaly
            
                    for(let i=0;i<3;i++) //first way
                    {
                        if(textArr[i][i]!==text)
                        {
                          flag=-1;
                          break;
                        }
                    }

                    if(flag==0)
                    {
                        showFinalResult(text);
                        return;
                    }
                   else
                   {
                    flag=0;
                    for(let i=2;i>=0;i--) //second way
                    {
                        if(textArr[2-i][i]!==text)
                        {
                          flag=-1;
                          break;
                        }
                    }

                    if(flag==0)
                    {
                        showFinalResult(text);
                        return;
                    }
                    else
                     drawCheck();
                   
                }  
        }
    } 
       
    
   
}