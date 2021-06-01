$(document).ready(function () {
  $("#clickable-lemon").click(function () {
    $("#lemon-showing").toggle();
    $("#lemon-hidden").toggle();
    clickable-lemon.preventDefault();
  });

  $("#clickable-orange").click(function () {
    $("#orange-showing").toggle();
    $("#orange-hidden").toggle();
    clickable-orange.preventDefault();
  });

  $("#clickable-lemon2").click(function () {
    $("#lemon-showing").toggle();
    $("#lemon-hidden").toggle();
    clickable-lemon2.preventDefault();

  });
  $("#clickable-orange2").click(function () {
    $("#orange-showing").toggle();
    $("#orange-hidden").toggle();
    clickable-orange2.preventDefault();
  });
});
