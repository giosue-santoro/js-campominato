//Creo array dentro cui verranno pushati i 16 numeri random tra 1 e 100 (che non potranno essere non uguali tra di loro) attraverso while loop.
var containerMina = [];

while(containerMina.length < 16){
    var random = Math.floor(Math.random() * 100) + 1;
    if(containerMina.indexOf(random) === -1) containerMina.push(random);
}

console.log(containerMina);