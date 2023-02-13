
const buttons = Array.from(document.querySelectorAll('button'));
console.log(buttons);
console.log(typeof buttons);
let computerScore=0;
    let userScore=0;
    const scoreScreen= document.querySelector('.score-container');
    game();

    
    //console.log(scoreScreen);
    

    function getComputerChoice(){
        return Math.floor(Math.random()*3) + 1;    
    }

    //function printScore()

    function getUserOption(e){
        /*let userOption=parseInt(this.classList.value);
        let computerOption=getComputerChoice();
        let roundWinner=playRound(userOption, computerOption);*/
        let roundWinner=playRound(parseInt(this.classList.value), getComputerChoice());
        if(roundWinner<0) userScore++;
        if(roundWinner>0) computerScore++;
        scoreScreen.textContent=`Usuario va: ${userScore} contra ${computerScore}`;
        if(userScore===5 || computerScore===5){
            scoreScreen.textContent="\n Gana uno de los dos";
            if(prompt("quiere jugar de nuevo")==="si"){
                userScore=0;
                computerScore=0;
                game();
            }
        };
    }
function game(){
    buttons.forEach(button => button.addEventListener('click', getUserOption));
}
    
    
    

    


    /*const buttonPiedra=document.querySelector('button.piedra');
    const buttonPapel=document.querySelector('button.papel');
    const buttonTijera=document.querySelector('button.tijera');

    buttonPiedra.addEventListener('click', (e) => {
        console.log("PIEDRA");
    });

    buttonPapel.addEventListener('click', (e) => {
        console.log("PAPEL");
    });

    buttonTijera.addEventListener('click', (e) => {
        console.log("TIJERA");
    });

    /*buttonOne.forEach(addEventListener('click', (e) => {
        console.log(e);
    }));*/

    function playRound(opciónDeUsuario, opciónDeComputador){
        let quien_ganó=0;
        if(opciónDeUsuario === opciónDeComputador ){
        } else if(opciónDeUsuario === 1 && opciónDeComputador === 2){
            quien_ganó++;
        } else if(opciónDeUsuario === 1 && opciónDeComputador === 3){
            quien_ganó--;
        } else if(opciónDeUsuario === 2 && opciónDeComputador === 1){
            quien_ganó--;
        } else if(opciónDeUsuario === 2 && opciónDeComputador === 3){
            quien_ganó++;
        } else if(opciónDeUsuario === 3 && opciónDeComputador === 1){
            quien_ganó++;
        } else { 
            quien_ganó--;
        }
        return quien_ganó;
    }

    /*function game(){
        let marcador_final=0;
        let marcador_temp=0;
        let inputDeUsuario;
        for(let i=1;i<=5;i++){
            console.log("ronda:", i);
            inputDeUsuario= prompt("Piedra, papel o tijera: ");
            marcador_temp=playRound(transformUserInput(inputDeUsuario),getComputerChoice());
            if(marcador_temp===0){
                console.log("Empate");
            } else if(marcador_temp===-1){
                console.log("Gana Computadora");
                marcador_final++;
            } else {
                console.log("Gana Usuario");
                marcador_final--;
            }
        }
        if(marcador_final===0){
            console.log("Empataron");
        } else if (marcador_final<0){
            console.log("Gnador final: Usuario");
        } else {
            console.log("Ganador final: Computadora");
        }
    }*/
