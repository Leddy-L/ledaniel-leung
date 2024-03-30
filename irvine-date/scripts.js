let stage = ["#intro", "#mall", "#lunch", "#boba", "#end"];
let current_stage = 0;

$(document).ready(function () {
  function nextStage() {
    console.log(stage[current_stage]);
    $(stage[current_stage++]).hide();
    $(stage[current_stage]).css("display", "flex");
  }

  $(".next").on("click", function () {
    nextStage();
  });
});
