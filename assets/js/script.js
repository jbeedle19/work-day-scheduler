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
    }

    checkHour();
    localStorage.getItem(time, value);
})
