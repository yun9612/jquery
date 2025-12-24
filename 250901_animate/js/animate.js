$(function () {
  // 이동 애니메이션
  $(".move").click(function () {
    $(".box").animate(
      {
        left: "300px",
      },
      1000
    );
  });
  // 크기 변경 애니메이션
  $(".resize").click(function () {
    $(".box").animate(
      {
        width: "200px",
        height: "200px",
      },
      800
    );
  });
  // 투명도 변경 애니메이션
  $(".fade").click(function () {
    $(".box").animate(
      {
        opacity: 0.3,
      },
      500
    );
  });
  // 모든 애니메이션
  $(".all").click(function () {
    $(".box").animate(
      {
        left: "300px",
        width: "200px",
        height: "200px",
        opacity: 0.3,
        borderRadius: "50%",
      },
      1000
    );
  });
}); //END
