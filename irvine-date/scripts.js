let stage = ["#intro", "#mall", "#lunch", "#boba", "#end"];
let current_stage = 0;

$(document).ready(function () {
  function nextStage() {
    $(stage[current_stage++]).hide();
    $(stage[current_stage]).css("display", "flex");
  }

  function reset() {
    $(stage[current_stage]).hide();
    current_stage = 0;
    $(stage[current_stage]).css("display", "flex");
  }

  $(".next").on("click", function () {
    nextStage();
  });

  $(".reset").on("click", function () {
    reset();
  });
});
