$(function () {
  // console.log("확인");
  //   $("#openBtn").click(function () {
  //     $("#popup").show();
  //   });
  //   $("#closeBtn").click(function () {
  //     $("#popup").hide();
  //   });
  //   $("#openBtn").click(function () {
  //     $("#popup").fadeIn(500);
  //   });
  $("#openBtn").click(function () {
    $("#popup").toggle();
  });
  $("#closeBtn").click(function () {
    $("#popup").fadeOut(500);
  });
}); //END
