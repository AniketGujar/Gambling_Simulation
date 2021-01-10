console.log("Gambling Simulation Problem");

let stake = 100;
const BET = 1;
console.log("Player has total: " + stake + " $ ");

class Gambler {
    gamble = () => {
        let bet = Math.floor(Math.random() * 2);
        if (bet == 0) {
            stake++;
            console.log("Player Won..!! \tPlayer has total: " + stake + " $ ");
        }
        else {
            stake--;
            console.log("Player Loss..!! \tPlayer has total: " + stake + " $ ");
        }
    }
}

module.exports = new Gambler;