console.log("Gambling Simulation Problem");

let stake = 100;
let totalStake = 0;
let totalAmount = 2000;
const BET = 1;
const WIN_STAKE = 150;
const LOSS_STAKE = 50;
let flag = true;
const DAYS = 20;
let stakeArray = [];

console.log("Player has total: " + stake + " $ ");

class Gambler {
    gamble = () => {
        for (let day = 1; day <= DAYS; day++) {
            stake = 100;
            flag = true;
            while (flag) {
                let bet = Math.floor(Math.random() * 2);
                if (bet == BET) {
                    stake++;
                }
                else {
                    stake--;
                }
                this.resign(day);
            }
        }
        if (totalAmount > totalStake) {
            console.log("Total Amount Loss " + (totalAmount - totalStake) + " $");
        }
        else {
            console.log("Total Amount Loss " + (totalStake - totalAmount) + " $");
        }
    }
    resign(day) {
        if (stake >= WIN_STAKE || stake <= LOSS_STAKE) {
            console.log(" ----------------------------------------\nOn Day " + day + " Player Resign for the day with " + stake);
            stakeArray[day - 1] = stake;
            totalStake += stake;
            flag = false;
        }
    }
}

module.exports = new Gambler;