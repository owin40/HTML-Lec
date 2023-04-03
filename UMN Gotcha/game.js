let charcode = localStorage.getItem("charcode");
let playerName = localStorage.getItem("nama");
var activity = 0;
document.getElementById("player").innerHTML = playerName;
var level = 1;
const speed = 1800;
let clockDiv = document.querySelector("#clock");
let lvlDiv = document.querySelector("#lvl");
let messageDiv = document.querySelector("#message");
let gameStartTime = 0;
let realStartTime = Date.now();
var day = 1;
var alertmakan = 0;
var alertmain = 0;
var alerttidur = 0;
var alertsehat = 0;
var console = document.getElementById("alertmakan");
var console2 = document.getElementById("alertmain");
var console3 = document.getElementById("alerttidur");
var kelipatan = 0;
var gasehat = 0;
$(document).ready(function () {
  document.getElementById("myNav").style.width = "100%";
  if (charcode == "a") {
    $("#avatar-container").css("background-image", "url(assets/a/idle.png)");
  }
  if (charcode == "b") {
    $("#avatar-container").css("background-image", "url(assets/b/idle.png)");
  }
  if (charcode == "c") {
    $("#avatar-container").css("background-image", "url(assets/c/idle.png)");
  }
});

let warningmakan = setInterval(function () {
  if (makan.value <= 15) {
    alertmakan += 1;
    if (alertmakan == 1) {
      $("<p id=warningmakan>need food</p>").appendTo("#alertmakan");
    }
  } else if (makan.value > 15) {
    alertmakan = 0;
    if (console.hasChildNodes()) {
      if (alertmakan == 0) {
        const listmakan = document.getElementById("warningmakan");
        listmakan.remove();
      }
    }
  }
}, 1000);

let warningmain = setInterval(function () {
  if (main.value <= 15) {
    alertmain += 1;
    if (alertmain == 1) {
      $("<p id=warningmain>need to play</p>").appendTo("#alertmain");
    }
  } else if (main.value > 15) {
    alertmain = 0;
    if (console2.hasChildNodes()) {
      if (alertmain == 0) {
        const listmain = document.getElementById("warningmain");
        listmain.remove();
      }
    }
  }
}, 1000);
let warningtidur = setInterval(function () {
  if (tidur.value <= 15) {
    alerttidur += 1;
    if (alerttidur == 1) {
      $("<p id=warningtidur>need rest</p>").appendTo("#alerttidur");
    }
  } else if (tidur.value > 15) {
    alerttidur = 0;
    if (console3.hasChildNodes()) {
      if (alerttidur == 0) {
        const listtidur = document.getElementById("warningtidur");
        listtidur.remove();
      }
    }
  }
}, 1000);

let warningsehat = setInterval(function () {
  if (sehat.value <= 15) {
    alertsehat += 1;
    if (alertsehat == 1) {
      $("<p id=warningsehat>need to clean</p>").appendTo("#alertsehat");
    }
  } else if (sehat.value > 15) {
    alertsehat = 0;
    if (console3.hasChildNodes()) {
      if (alertsehat == 0) {
        const listsehat = document.getElementById("warningsehat");
        listsehat.remove();
      }
    }
  }
}, 1000);

let decay = setInterval(function () {
  makan.value -= 1;
  main.value -= 1;
  tidur.value -= 1;
  sehat.value -= 1;
}, 2000);

let timerId = setInterval(function () {
  let gameTime = gameStartTime + (Date.now() - realStartTime) * speed;
  let min = Math.floor(gameTime / 60000) % 60;
  let hour = Math.floor(5 + gameTime / 3600000) % 24;
  if (hour == 0 && min == 0) {
    day += 1;
  }
  if (hour >= 6 && hour < 11) {
    messageDiv.textContent = "Good morninggg " + playerName;
    $("#screen").css("background-image", "url(assets/timebg/day2.png)");
  } else if (hour >= 12 && hour < 17) {
    messageDiv.textContent = "after the noonn " + playerName;
    $("#screen").css("background-image", "url(assets/timebg/afternoon2.png)");
  } else if (hour >= 17 && hour < 19) {
    messageDiv.textContent = "it's eveninn " + playerName;
    $("#screen").css("background-image", "url(assets/timebg/evening2.png)");
  } else if ((hour >= 19 && hour < 24) || (hour >= 0 && hour < 6)) {
    messageDiv.textContent = "Nighty nightt " + playerName;
    $("#screen").css("background-image", "url(assets/timebg/night2.png)");
  }

  if (day % 2 == 0 && day != 0 && !levelincrease && hour == 0 && min == 0) {
    if (sehat.value >= 60) {
      alert(playerName + " you are so healthy at level " + level);
      makan.value += 0;
      tidur.value += 0;
      main.value += 0;
      level += 1;
      levelincrease = true;
      sehat.value += 0;
    } else {
      alert(playerName + " you are not healthy at level " + level + ":(");
      makan.value += 0;
      tidur.value += 0;
      main.value += 0;
      gasehat += 1;
    }
  } else {
    levelincrease = false;
  }

  lvlDiv.textContent = "level " + level;
  clockDiv.textContent =
    `Day ` + day + ` - ${hour}:${min}`.replace(/\b\d\b/g, "0$&");

  if (
    makan.value == 0 ||
    main.value == 0 ||
    tidur.value == 0 ||
    sehat.value == 0
  ) {
    clearInterval(timerId);
    clearInterval(decay);
    alert("Game Over");
    if (confirm("Do you want to play again ?")) {
      location.reload();
    } else {
      window.location.assign("index.html");
    }
  }
  if (level == 3) {
    alert("Congrats " + playerName + " you are now the healthiest animal!");
    if (confirm("Do you want to play again ?")) {
      location.reload();
    } else {
      window.location.assign("index.html");
    }
  }
  if (gasehat == 3) {
    clearInterval(timerId);
    clearInterval(decay);
    alert(playerName + " is at bad conditions");
    alert("Game Over");
    if (confirm("Do you want to play again ?")) {
      location.reload();
    } else {
      window.location.assign("start.html");
    }
  }
}, 1000);

var makan = document.getElementById("stat-food");
var main = document.getElementById("stat-mood");
var tidur = document.getElementById("stat-sleep");
var sehat = document.getElementById("stat-health");
function optEat() {
  makan.value += 25;
  main.value += 5;
  tidur.value -= 5;
  sehat.value += 5;
  if (charcode == "a") {
    $("#avatar-container").css("background-image", "url(assets/a/makan.png)");
  } else if (charcode == "b") {
    $("#avatar-container").css("background-image", "url(assets/b/makan.png)");
  } else if (charcode == "c") {
    $("#avatar-container").css("background-image", "url(assets/c/makan.png)");
  }
}
function optPlay() {
  makan.value -= 5;
  main.value += 25;
  tidur.value -= 5;
  sehat.value -= 10;
  if (charcode == "a") {
    $("#avatar-container").css("background-image", "url(assets/a/main.png)");
  } else if (charcode == "b") {
    $("#avatar-container").css("background-image", "url(assets/b/main.png)");
  } else if (charcode == "c") {
    $("#avatar-container").css("background-image", "url(assets/c/main.png)");
  }
}
function optSleep() {
  makan.value -= 5;
  main.value -= 5;
  tidur.value += 50;
  sehat.value -= 5;
  if (charcode == "a") {
    $("#avatar-container").css("background-image", "url(assets/a/tidur.png)");
  }
  if (charcode == "b") {
    $("#avatar-container").css("background-image", "url(assets/b/tidur.png)");
  }
  if (charcode == "c") {
    $("#avatar-container").css("background-image", "url(assets/c/tidur.png)");
  }
}
function optHealth() {
  makan.value -= 5;
  main.value -= 5;
  tidur.value -= 5;
  sehat.value += 25;
  if (charcode == "a") {
    $("#avatar-container").css("background-image", "url(assets/a/sabun.png)");
  }
  if (charcode == "b") {
    $("#avatar-container").css("background-image", "url(assets/b/sabun.png)");
  }
  if (charcode == "c") {
    $("#avatar-container").css("background-image", "url(assets/c/sabun.png)");
  }
}
let changeSprite = setInterval(function () {
  function enable() {
    if (charcode == "a") {
      $("#avatar-container").css("background-image", "url(assets/a/idle.png)");
    } else if (charcode == "b") {
      $("#avatar-container").css("background-image", "url(assets/b/idle.png)");
    } else if (charcode == "c") {
      $("#avatar-container").css("background-image", "url(assets/c/idle.png)");
    }
    $(".option").attr("disabled", false);
  }
  $("#eat").mouseup(function () {
    $(".option").attr("disabled", true);
    setTimeout(enable, 4000);
  });
  $("#play").mouseup(function () {
    $(".option").attr("disabled", true);
    setTimeout(enable, 4000);
  });
  $("#sleep").mouseup(function () {
    $(".option").attr("disabled", true);
    setTimeout(enable, 10000);
  });
  $("#health").mouseup(function () {
    $(".option").attr("disabled", true);
    setTimeout(enable, 4000);
  });
}, 10);

document.getElementById("stat-a").onmouseenter = function () {
  mouseEnterA();
};
document.getElementById("stat-a").onmouseleave = function () {
  mouseLeaveA();
};
document.getElementById("stat-b").onmouseenter = function () {
  mouseEnterB();
};
document.getElementById("stat-b").onmouseleave = function () {
  mouseLeaveB();
};
document.getElementById("stat-c").onmouseenter = function () {
  mouseEnterC();
};
document.getElementById("stat-c").onmouseleave = function () {
  mouseLeaveC();
};
document.getElementById("stat-d").onmouseenter = function () {
  mouseEnterD();
};
document.getElementById("stat-d").onmouseleave = function () {
  mouseLeaveD();
};
var l;

function mouseEnterA() {
  $('<div id="status"class="bar"></div>').appendTo("#stats-a");
  l = setInterval(function () {
    var hover = document.getElementById("stat-food").value;
    document.getElementById("status").innerHTML = hover + " / 100";
  }, 1);
}
function mouseLeaveA() {
  var listremove = document.getElementById("stats-a");
  listremove.removeChild(listremove.lastChild);
  clearInterval(l);
}

function mouseEnterB() {
  $('<div id="status"class="bar"></div>').appendTo("#stats-b");
  l = setInterval(function () {
    var hover = document.getElementById("stat-mood").value;
    document.getElementById("status").innerHTML = hover + " / 100";
  }, 1);
}

function mouseLeaveB() {
  var listremove = document.getElementById("stats-b");
  listremove.removeChild(listremove.lastChild);
  clearInterval(l);
}

function mouseEnterC() {
  $('<div id="status"class="bar"></div>').appendTo("#stats-c");
  l = setInterval(function () {
    var hover = document.getElementById("stat-sleep").value;
    document.getElementById("status").innerHTML = hover + " / 100";
  }, 1);
}

function mouseLeaveC() {
  var listremove = document.getElementById("stats-c");
  listremove.removeChild(listremove.lastChild);
  clearInterval(l);
}

function mouseEnterD() {
  $('<div id="status" class="bar"></div>').appendTo("#stats-d");
  l = setInterval(function () {
    var hover = document.getElementById("stat-health").value;
    document.getElementById("status").innerHTML = hover + " / 100";
  }, 1);
}

function mouseLeaveD() {
  var listremove = document.getElementById("stats-d");
  listremove.removeChild(listremove.lastChild);
  clearInterval(l);
}

function credit() {
  document.getElementById("myNav").style.width = "0%";
}
