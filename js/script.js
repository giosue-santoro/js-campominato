//Funzioni

function randomNumber(min, max) {
    var result = Math.floor(Math.random() * (max + 1 - min) + min);
    return result;
  }

//Variabili generali

var containerMina = [];
var containerUser = [];
var userNumber;
var numeroMine;

//Faccio scegliere all'utente il livello
level = prompt('Scegli il livello tra facile, intermedia e difficile');

if (level !== 'facile' & level !== 'intermedia' & level !== 'difficile') {
    alert('Seleziona il livello scrivendo facile, intermedia o difficile')
} else {
    switch (level) {
        case 'facile':
          alert('Hai scelto la modalità facile');
          numeroMine = 100;
          break;
        case 'intermedia':
          alert('Hai scelto la modalità intermedia');
          numeroMine = 75;
          break;
        case  'difficile':
          alert('Hai scelto la modalità difficile');
          numeroMine = 50;
          break;  
        }
}

    console.log('Scegli un numero tra 1 e ' + numeroMine);
    
//Creo array dentro cui verranno pushati i numeri in base alla difficoltà scelta random tra 1 e numeroMine (che non potranno essere non uguali tra di loro)
    for(var i = 0; containerMina.length < 16; i++){
        var random = randomNumber(1, numeroMine)
        if(containerMina.indexOf(random) === -1) containerMina.push(random);
    }

    console.log('Numeri del computer: ' + containerMina + ';');

    //Creo while loop che chiede all'utente di inserire un numero tra 1 e 100 fino a che non trova un numero contenuto in containerMina
    //L'utente viene obbligato a scegliere un integer in base alla difficoltà selezionata

    while(!containerMina.includes(userNumber) && containerUser.length < (numeroMine - 16)){
        var userNumber = parseInt(prompt('Scegli un numero compreso tra 1 e ' + numeroMine));
        if (isNaN(userNumber) || userNumber < 1 || userNumber > numeroMine) {
            alert('Il numero che hai inserito non è valido');
        } else {
            userNumber = parseInt(userNumber);
            if (containerUser.indexOf(userNumber) === -1) { //Se il numero scelto non è ancora nell'array containerUser, pusha il numero scelto dall'utente nell'array
                containerUser.push(userNumber);
                console.log('hai scelto il numero ' + userNumber);
            } else {
                alert('Hai già inserito questo numero');
            }
        } 
    }

    //Notifica utente che ha perso la partita
    if (containerMina.includes(userNumber)) {
        alert('Sei esploso');
        console.log('Sei esploso');
    }


