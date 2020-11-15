// Run everything inside function when page loads
$(document).ready(function() {
    
    // Get current date and display it
    var todaysDate = moment().format("dddd, MMMM Do");
        $("#currentDay").append(todaysDate);
    
    // Listen for save button to be clicked, save tasks to localStorage 
    $(".saveBtn").on("click", function() {
        var task = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");

        localStorage.setItem(hour, task);
    });
    
    // Function to check current time and color code background accordingly
    function checkHour() {
        var currentTime = moment().hours();

        $(".time-block").each(function() {
            var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
            // Past should be grey 
            if (timeBlockHour < currentTime) {
                $(this).addClass("past");
            }
            // Present should be red
            else if (timeBlockHour === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            // Future should be green
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    console.log("I am automated and working!")
    }

    checkHour();

    // Very ugly and a lot of code, let's figure out how to clean this up
    function loadTasks() {
        var task1 = localStorage.getItem("hour-9")
        $("#9").val(task1)
        var task2 = localStorage.getItem("hour-10")
        $("#10").val(task2)
        var task3 = localStorage.getItem("hour-11")
        $("#11").val(task3)
        var task4 = localStorage.getItem("hour-12")
        $("#12").val(task4)
        var task5 = localStorage.getItem("hour-13")
        $("#13").val(task5)
        var task6 = localStorage.getItem("hour-14")
        $("#14").val(task6)
        var task7 = localStorage.getItem("hour-15")
        $("#15").val(task7)
        var task8 = localStorage.getItem("hour-16")
        $("#16").val(task8)
        var task9 = localStorage.getItem("hour-17")
        $("#17").val(task9)
    }
    
    loadTasks();
    
    setInterval(function () {
       checkHour();
    }, 900000);

});