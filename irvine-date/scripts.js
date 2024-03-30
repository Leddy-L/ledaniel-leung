let stage = ["#intro", "#mall", "#lunch", "#boba", "#end"];
let current_stage = 0;
let options = {
  Near: "Irvine Spectrum Center",
  Far: "South Coast Plaza",
  NearNative: "Capital Dim Sum",
  NearForeign: "Robata Wasa",
  FarNative: "AnQi Restaurant",
  FarForeign: "K Soul Food",
  Black: "TPTea",
  Yellow: "Sunright",
};

$(document).ready(function () {
  let mall = "";
  let lunch = "";
  let boba = "";

  $(".next").on("click", function () {
    $(stage[current_stage++]).hide();
    $(stage[current_stage]).css("display", "flex");
  });

  $(".reset").on("click", function () {
    $(stage[current_stage]).hide();
    $(".option-revealed").hide();
    current_stage = 0;
    $(stage[current_stage]).css("display", "flex");
    $(".options").css("display", "flex");
  });

  $("input").on("click", function () {
    let val = $(this).val();
    let parent = $(this).parent();
    let block = parent.parent();
    let block_id = parent.parent().attr("id");
    let option_revealed = parent.siblings(".option-revealed");

    let img_src = "";
    let option = "";

    switch (val) {
      case "Near":
        mall = val;
        break;
      case "Far":
        mall = val;
        break;
      case "Native":
        lunch = mall + val;
        break;
      case "Foreign":
        lunch = mall + val;
        break;
      case "Black":
        boba = val;
        break;
      case "Yellow":
        boba = val;
        break;
    }

    switch (block_id) {
      case "mall":
        img_src = `assets/${mall}.jpg`;
        option = mall;
        break;
      case "lunch":
        img_src = `assets/${lunch}.jpg`;
        option = lunch;
        break;
      case "boba":
        img_src = `assets/${boba}.jpg`;
        option = boba;
        break;
    }

    console.log(option);

    block.find("img").attr("src", img_src);
    block.find("figcaption").append(options[option]);

    option_revealed.css("display", "flex");
    parent.hide();
  });
});
