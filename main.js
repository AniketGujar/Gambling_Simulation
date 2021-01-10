console.log("Gambling Simulation Problem");

let stake = 100;
let totalStake = 0;
let totalWin = 0;
let totalLoss = 0;
const BET = 1;
const DAYS = 20;
let stakeMap = new Map();

console.log("Player has total: " + stake + " $ ");

class Gambler {
    gamble = () => {
        for (let day = 1; day <= DAYS; day++) {

            let bet = Math.floor(Math.random() * 2);
            if (bet == BET) {
                stake++;
                stake = stake + (stake / 2);
                totalWin = totalWin + (stake / 2);
                console.log("Player Wins..!!   " + "Day " + day + "     Stake = " + stake);
            }
            else {
                stake--;
                stake = stake / 2;
                totalLoss = totalLoss + (stake / 2);
                console.log("Player Loss..!!   " + "Day " + day + "     Stake = " + stake);
            }
            if (stake <= 0) {
                console.log(" ----------------------------------------\nOn Day " + day + " Player Resign for the day");
                break;
            }
        }
        console.log("Total Amount Won " + totalWin + "\nTotal Amount Loss " + totalLoss);
    }
}

module.exports = new Gambler;