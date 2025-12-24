$(function () {
  // 1. 좌우 슬라이드
  const slideList = $(".slide_list");
  const slideWidth = $(".slide_list > li").width();
  //   console.log(slideWidth);
  const moveSlide = () => {
    slideList.animate({ marginLeft: -slideWidth }, 1000, function () {
      $(this).append($(this).find("li:first"));
      $(this).css({ marginLeft: 0 });
    });
  };
  setInterval(moveSlide, 3000);

  // 2. 위로 슬라이드는 ul을 한번 더 감싸서 거기에 너비높이를 주고 overflow를 hidden해야함
  const slideListUp = $(".slide_list_up");
  const slideHeight = $(".slide_list_up > li").height();
  const moveUp = () => {
    slideListUp.animate({ marginTop: -slideHeight }, 1000, function () {
      $(this).append($(this).find("li:first"));
      $(this).css({ marginTop: 0 });
    });
  };
  setInterval(moveUp, 3000);

  // 3. fadeIn / fadeOut
  const slideFade = $(".slide_fade li");
  let current = 0;
  const moveFade = () => {
    let next = (current + 1) % slideFade.length;
    // console.log(next);
    slideFade.eq(current).fadeOut(1000);
    slideFade.eq(next).fadeIn(1000);
    current = next;
  };
  //   slideFade.hide().eq(0).show(); display를 none했을 때는 필요한 코드
  setInterval(moveFade, 3000);
}); //END
