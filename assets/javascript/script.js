// Displays the current date in the header of the page
var today = dayjs().format("dddd, MMMM D YYYY, h:mm:ss a");
$("#currentDay").text(today);


$(function() {
  
  //Save button on click stores the time and task in local storage.
  // Logs the local storage in console
  $(".saveBtn").click(function (e) { 
    e.preventDefault();

    var task = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    
    localStorage.setItem(time , task)
    console.log(localStorage);
  })
  
  // Function compares current time to id and adds the past(grey text area), future(green text area) or present(red text area) class.
  
  // Logs current hour in console
  $(".time-block").each(function() { 
    var currentHour = dayjs().hour();
    console.log(currentHour);

    for (var i = 9; i < 18; i++) {
      if (currentHour < i) {
        $("#hour-"+i).addClass("past");

       } else if (currentHour > i) {
        $("#hour-"+i).addClass("future");

       } else if (currentHour === i) {
        $("#hour-"+i).addClass("present");
        
       }
    }
  });

  // Gets user input saved in local storage and sets the value in text area to that data
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-21 .description").val(localStorage.getItem("hour-21"));
});
