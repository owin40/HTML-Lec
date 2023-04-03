var nama;
var currentAvatar = "a";

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
    var nextAvatar = $("#" + currentAvatar)
      .next()
      .attr("id");
    if (nextAvatar === undefined) {
      nextAvatar = firstImg.attr("id");
    }
    currentAvatar = nextAvatar;
    $(".active").removeClass("active");
    $("#" + currentAvatar).addClass("active");
  });
  $(".prev").on("mousedown", function () {
    var prevAvatar = $("#" + currentAvatar)
      .prev()
      .attr("id");
    if (prevAvatar === undefined) {
      prevAvatar = lastImg.attr("id");
    }
    currentAvatar = prevAvatar;
    $(".active").removeClass("active");
    $("#" + currentAvatar).addClass("active");
  });
});
