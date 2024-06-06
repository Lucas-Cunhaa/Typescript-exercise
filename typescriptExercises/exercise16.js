class Player {
    Name
    Life
    Strength

    constructor(name, life, strength) {
        this.Name = name;
        this.Life = life;
        this.Strength = strength;
    }
}

function setWinner( player1, player2, firstAttack ) {
    do {
        if (player1.Name === firstAttack.Name) {
            player2.Life -= player1.Strength;
            console.log(player2.Name + " Had been attacked by " + player1.Name);
            if (player2.Life > 0) {
                player1.Life -= player2.Strength;
                console.log(player1.Name + " Had been attacked by " + player2.Name);
            }
        }
        else {
            player1.Life -= player2.Strength;
            console.log(player1.Name + " Had been attacked by " + player2.Name);
            if (player1.Life > 0 ) {
                player2.Life -= player1.Strength;
                console.log(player2.Name + " Had been attacked by " + player1.Name);
            }
        }
    } while (player1.Life > 0 && player2.Life > 0)

    if (player1.Life > player2.Life) {
        console.log(player1.Name + " WINS");
        return player1;
    }
    else {
        console.log(player2.Name + " WINS");
        return player2;
    }
}
var Lucas10 = new Player('Lucas', 11, 7);
var JoaoNeto = new Player('Joao Neto', 5, 10);
console.log(setWinner(Lucas10, JoaoNeto, JoaoNeto));
