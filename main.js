console.log("Gambling Simulation Problem");

let stake = 100;
let totalWin = 0;
let totalLoss = 0;
const BET = 1;
const DAYS = 20;
let stakeArr = [];

class Gambler {
    gamble = () => {
        for (let day = 1; day <= DAYS; day++) {
            let bet = Math.floor(Math.random() * 2);
            if (bet == BET) {
                stake++;
                stake = stake + (stake / 2);
                totalWin = totalWin + (stake / 2);
                stakeArr[day - 1] = stake;
                console.log("Player Wins..!!   " + "Day " + day + "     Stake = " + stake);
            }
            else {
                stake--;
                stake = stake / 2;
                totalLoss = totalLoss + (stake / 2);
                stakeArr[day - 1] = stake;
                console.log("Player Loss..!!   " + "Day " + day + "     Stake = " + stake);
            }
            if (stake <= 0) {
                console.log(" ----------------------------------------\nOn Day " + day + " Player Resign for the day");
                break;
            }
            //stake += 100;
        }
        this.profitLoss();
    }
    profitLoss() {
        if (totalWin > totalLoss) {
            console.log("Total Amount Won By Player = " + (totalWin - totalLoss));
        }
        else {
            console.log("Total Amount Loss By Player = " + (totalLoss - totalWin));
        }
    }
    unLuckyDay() {
        let maxLoss = 0;
        let unLuckyDay = 0;
        for (let j = 0; j < stakeArr.length - 1; j++) {
            if (stakeArr[j] > stakeArr[j + 1]) {
                if ((stakeArr[j] - stakeArr[j + 1]) > maxLoss) {
                    maxLoss = stakeArr[j] - stakeArr[j + 1];
                    unLuckyDay = j + 2;
                }
            }
        }
        console.log("Unluckiest Loss = " + maxLoss + "\tUnlucky Day " + unLuckyDay);
    }
    LuckyDay() {
        let maxProfit = 0;
        let LuckyDay = 0;
        for (let j = 0; j < stakeArr.length - 1; j++) {
            if (stakeArr[j] < stakeArr[j + 1]) {
                if ((stakeArr[j + 1] - stakeArr[j]) > maxProfit) {
                    maxProfit = stakeArr[j + 1] - stakeArr[j];
                    LuckyDay = j + 2;
                }
            }
        }
        console.log("luckiest Profit = " + maxProfit + "\tlucky Day " + LuckyDay);
    }
}

module.exports = new Gambler;