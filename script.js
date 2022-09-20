//set current day 
var today =
    moment().format("dddd MMMM Do YYYY");

document.getElementById("currentDay").append(today);

// set current hour in a variable
var currentHour = moment().hour();
console.log(currentHour);

var setUpHourBlock = function (hourBlock) {
    console.log(hourBlock)

    // parse hourblock div id into a number
    var hourId = Number.parseInt(hourBlock.id)
    console.log(hourId);