
$(".container-fluid").on("click", ".saveBtn", function () {
  var textArea = $(this).siblings(".description");
  var hourBlock = $(this).parent(".time-block").attr("id");
  var eventText = textArea.val().trim();
  localStorage.setItem(hourBlock, eventText);
});

function populateSavedEvents() {
  $(".time-block").each(function () {
    var hourBlock = $(this).attr("id");
    var eventText = localStorage.getItem(hourBlock);
    $(this).find(".description").val(eventText);
  });
}


displayCurrentDay();
updateTimeBlocks();
populateSavedEvents();


