var nama;

$("input")
  .keyup(function () {
    nama = $(this).val();
    localStorage.setItem("nama", nama);
  })
  .keyup();

function startGame() {
  if (nama == "") {
    alert("Nama Kosong");
  } else {
    if (confirm("Start Game as " + nama + "?")) {
      let charcode = $("img.active").attr("id");
      localStorage.setItem("charcode", charcode);
      window.location.assign("game.html");
    }
  }
}

$(document).ready(function () {
  var firstImg = $(".active");
  var lastImg = $(".last");
  $(".next").on("mousedown", function () {
    var currentImg = $(".active");
    var nextImg = currentImg.next();

    if (nextImg.length > 0) {
      currentImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    } else {
      currentImg.removeClass("active").css("z-index", -10);
      firstImg.addClass("active").css("z-index", 10);
    }
  });
  $(".prev").on("mousedown", function () {
    var currentImg = $(".active");
    var prevImg = currentImg.prev();

    if (prevImg.length > 0) {
      currentImg.removeClass("active").css("z-index", -10);
      prevImg.addClass("active").css("z-index", 10);
    } else {
      currentImg.removeClass("active").css("z-index", -10);
      lastImg.addClass("active").css("z-index", 10);
    }
  });
});
