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
level = prompt('Scegli il livello tra facile, intermedio e difficile');

switch (level) {
    case 'facile':
      alert('Hai scelto la modalità facile');
      numeroMine = 100;
      break;
    case 'intemedia':
      alert('Hai scelto la modalità intermedia');
      numeroMine = 80;
      break;
    case  'difficile':
      alert('Hai scelto la modalità difficile');
      numeroMine = 50;
      break;  
    }

//Creo array dentro cui verranno pushati i numeri in base alla difficoltà scelta random tra 1 e 100 (che non potranno essere non uguali tra di loro)
    for(var i = 0; containerMina.length < 16; i++){
        var random = randomNumber(1, numeroMine)
        if(containerMina.indexOf(random) === -1) containerMina.push(random);
    }

    console.log(containerMina);

    //Creo while loop che chiede all'utente di inserire un numero tra 1 e 100 fino a che non trova un numero contenuto in containerMina
    //L'utente viene obbligato a scegliere un integer compreso tra 1 e 100

    while(!containerMina.includes(userNumber)){
        var userNumber = parseInt(prompt('Scegli un numero compreso tra 1 e 100'));
        if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
            alert('Puoi scegliere solo un numero intero compreso tra 1 e 100');
        } else {
            userNumber = parseInt(userNumber);
            if (containerUser.indexOf(userNumber) === -1) { //Se il numero scelto non è ancora nell'array containerUser, pusha il numero scelto dall'utente nell'array
                containerUser.push(userNumber)
                console.log(userNumber);
            }
        } 
    }

    //Notifica utente che ha perso la partita
    if (containerMina.includes(userNumber)) {
        alert('Sei esploso');
    }


