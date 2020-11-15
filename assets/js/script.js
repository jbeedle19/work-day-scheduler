// Run everything in function when page loads
$(document).ready(function() {
    // Listen for save button to be clicked, save tasks to localStorage 
    $(".saveBtn").on("click", function() {
        var task = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");

        localStorage.setItem(hour, task);
    });
    var todaysDate = moment().format("dddd, MMMM Do");
        $("#currentDay").append(todaysDate);



})



var currentTime = moment().format("HH:mm:ss A");
    console.log(currentTime);