var weather = require('weather-api-data');
const chalk = require('chalk');

async function getWeather(){
    const data = await weather.loction('Gomel');
    console.log(data);
}

getWeather();

console.log(chalk.blue('Hello world!'));