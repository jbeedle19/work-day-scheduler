$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //STOPPED HERE
    })
})
var dailyTasks = {};

var todaysDate = moment().format("dddd, MMMM Do");
    $("#currentDay").append(todaysDate);

var currentTime = moment().format("HH:mm:ss A");
    console.log(currentTime);