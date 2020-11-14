var dailyTasks = {};

var todaysDate = moment().format("dddd, MMMM Do");
    $("#currentDay").append(todaysDate);

var currentTime = moment().format("HH:mm:ss A");
    console.log(currentTime);