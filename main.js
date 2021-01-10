console.log("Gambling Simulation Problem");

let stake = 100;
const BET = 1;
const WIN_STAKE = 150;
const LOSS_STAKE = 50;
let flag = true;

console.log("Player has total: " + stake + " $ ");

class Gambler {
    gamble = () => {
        while (flag) {
            let bet = Math.floor(Math.random() * 2);
            if (bet == 0) {
                stake++;
                console.log("Player Won..!!     Player has total: " + stake + " $ ");
            }
            else {
                stake--;
                console.log("Player Loss..!!    Player has total: " + stake + " $ ");
            }
            this.resign();
        }
    }
    resign() {
        if (stake >= WIN_STAKE || stake <= LOSS_STAKE) {
            console.log(" ----------------------------------------\n    Player Resign for the day with " + stake);
            flag = false;
        }
    }
}

module.exports = new Gambler;