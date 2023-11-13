const playerOkyBtn = document.querySelector('#ok');
const xCoin = document.querySelector('#coinSelectionX');
const oCoin = document.querySelector('#coinSelectionO');

const playerName = document.querySelector('#playerName');
const bodyt = document.getElementsByTagName('body')[0];

let playerSelection = '';




//Player constructor object

function Player (name, marker)
{
    this.name = name;
    this.marker = marker;
}




//button event
playerOkyBtn.addEventListener('click', display_player_name_hisMarker);



//button event function
function display_player_name_hisMarker(){



    const disPlayerdetails = document.createElement('h2');



    if (xCoin.checked)
    {
    playerSelection='X';
    console.log('x selected');
    }
    else{
    console.log('x is not selected');
    }
    
    
    if (oCoin.checked)
    {
        playerSelection='O';
        console.log('o selected');
        }
        else{
        console.log('o is not selected');
        }
    

        const player = new Player (playerName.value, playerSelection);
        


    disPlayerdetails.setAttribute('style', 'background:lightseagreen');



    disPlayerdetails.textContent = `the player name is ${player.name} and the player selected ${player.marker}`;
    bodyt.appendChild(disPlayerdetails);

console.log(player);
}

