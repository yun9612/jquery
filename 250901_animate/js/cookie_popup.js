$(function () {
  // if($.cookie())
  let check = $("#check");
  if ($.cookie("popup") === "none") {
    $(".notice_wrap").hide();
  }
  $(".closeBtn").click(function () {
    if (check.is(":checked")) {
      $.cookie("popup", "none", { expires: 3, path: "/" });
    }
    $(".notice_wrap").fadeOut("fast");
  });
}); //END
