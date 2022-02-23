//Variabili
const options = document.getElementById('options');
const play = document.getElementById('play');
const game = document.getElementById('game');

//Usare una funzione che genera la griglia in base all'opzione
const start = () =>{
    //Nominare la casella
    let square;
    //Nominare la colonna
    let column;

    //Generare le tre casistiche
    switch (options.value){
        case 'easy':
            //Dichiarare numero celle
            square = 100;
            //Dichiarare numero colonne
            column = 10;
            break;
        
        case 'normal':
            //Dichiarare numero celle
            square = 81;
            //Dichiarare numero colonne
            column = 9;
            break;
        case 'crazy':
            //Dichiarare numero celle
            square = 49;
            //Dichiarare numero colonne
            column = 7;
            break;
        default:
            square = 100;
            column = 10;
    }

    //Resettare la pagina alla fine dello swicth
    game.innerHTML = '';

    //Creare il ciclo che genera i numeri e le caselle
    for(let i = 0; i < square; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `calc(100% / ${column})`;
        box.append(i + 1);
        game.append(box);
    }
}

//Assegnare l'evento al button
play.addEventListener('click',start);