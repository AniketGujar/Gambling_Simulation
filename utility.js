let readlineSync = require('readline-sync');
let utility = require('./main');

utility.gamble();
utility.LuckyDay();
utility.unLuckyDay();

if (readlineSync.keyInYN('Do you want to play again')) {
    utility.gamble();
    utility.LuckyDay();
    utility.unLuckyDay();
} else {
    console.log('Thankyou For Playing');
}