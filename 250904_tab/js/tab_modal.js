$(function () {
  // tabmenu
  $(".tabmenu > li > a").click(function () {
    // console.log(this);
    $(this).parent().addClass("active").siblings().removeClass("active");
  });

  // modal open/close
  $(".notice li:first-child").click(function () {
    $("#modal").addClass("active");
  });
  $(".modal-btn").click(function () {
    $("#modal").removeClass("active");
  });
}); //END
