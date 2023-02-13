   game();
    function transformUserInput(opciónDeUsuario){
        let temp=opciónDeUsuario.toLowerCase();
        let opciónUsuarioNum
        if(temp==="piedra"){
            opciónUsuarioNum = 1;
        } else if (temp==="papel"){
            opciónUsuarioNum = 2;
        } else {
            opciónUsuarioNum = 3;
        }
        return opciónUsuarioNum;

    }
    function getComputerChoice(){
        return Math.floor(Math.random()*3) + 1;
        
    }

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

    function game(){
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
    }
