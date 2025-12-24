                                                                                                                                                                        $(function () {
  // 1. slideDown() / slideUp()
  //   $(".menu > li").hover(
  //     function () {
  //       // console.log("hover");
  //       $(this).find(".submenu").stop().slideDown(300);
  //     },
  //     function () {
  //       $(this).find(".submenu").stop().slideUp(300);
  //     }
  //   );
  // 2. fadeIn() / fadeOut()
  //   $(".menu > li").hover(
  //     function () {
  //       $(this).find(".submenu").stop().fadeIn(500);
  //     },
  //     function () {
  //       $(this).find(".submenu").stop().fadeOut(500);
  //     }
  //   );
  // 3. 전체 서브메뉴 한번에 열림
  //   $(".menu").hover(
  //     function () {
  //       $(".submenu").stop().slideDown(400);
  //     },
  //     function () {
  //       $(".submenu").stop().slideUp(400);
  //     }
  //   );
  // 4. 서브메뉴랑 headerBG랑 한번에 열림
  //   $(".menu").hover(
  //     function () {
  //       $(".submenu , .headerBg").stop().slideDown(400);
  //     },
  //     function () {
  //       $(".submenu , .headerBg").stop().slideUp(400);
  //     }
  //   );
  // 5. classList()
  $(".menu > li").hover(
    function () {
      $(this).find(".submenu").addClass("active");
    },
    function () {
      $(this).find(".submenu").removeClass("active");
    }
  );
}); //END
