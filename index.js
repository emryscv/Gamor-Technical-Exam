const user_avatar = ["url(src/users1.jpg)", "url(src/users2.jpg)", "url(src/users3.jpg)", "url(src/users4.jpg)"];
const user1_avatar_node = document.getElementsByClassName("user1");
const user2_avatar_node = document.getElementsByClassName("user2");

const data = {
  "COD Warzone": ["Dr Team", "Mia Plays", "Keoxer", "Nickmerc"],
  "Fortnite": ["Headhunters", "Phoenix", "Gangsters", "Trollers"],
  "Miencraft": ["BlockBuster", "Karmaland", "Block Lords","Dr Gold"]
}

for(let i = 0; i < user1_avatar_node.length; i++){
    user1_avatar_node[i].style.setProperty("background-image", user_avatar[parseInt(Math.random()*4)]);
    console.log(user1_avatar_node[i]);
}
for(let i = 0; i < user2_avatar_node.length; i++){
    user2_avatar_node[i].style.setProperty("background-image", user_avatar[parseInt(Math.random()*4)]);
    console.log(user2_avatar_node[i]);
}


if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "dark");
}

if (!localStorage.getItem("loged")) {
  localStorage.setItem("loged", "f");
}
if (!localStorage.getItem("onStream")) {
  localStorage.setItem("onStream", "f");
}

if (localStorage.getItem("onStream") == "t") {
  document
    .getElementById("cf-box3-user")
    .style.setProperty("visibility", "visible");
}



if (localStorage.getItem("theme") == "light") {
  let root = document.querySelector(":root");
  root.style.setProperty("--boxes-bg", "white");
  root.style.setProperty("--important-letters-color", "#5c6167");
  root.style.setProperty("--body-bg", "rgb(251, 251, 255)");
  root.style.setProperty("--letter-color", "#1d212a");
  root.style.setProperty("--orange-dark-theme", "rgb(126, 35, 235)");
  root.style.setProperty("--rf-party-list-marker-color", "rgb(218, 214, 223)");
  root.style.setProperty("--big-slogan-diferent-word", "#fa874f");
  root.style.setProperty("--lf-create-account-button-bg", "rgb(218, 214, 223)");
  root.style.setProperty("--cf-bg-url", "url(src/center-frame-violet.png)");
  root.style.setProperty("--cf-marketing", "rgb(80, 8, 170)");
  root.style.setProperty("--cf-box-bg-color", "rgb(105, 33, 188)");
  root.style.setProperty("--platform-selector-active", "white");
  root.style.setProperty("--result-list-button-bg", "rgb(218, 214, 223)");
  root.style.setProperty("--change-theme-bg", "#1d212a");
  root.style.setProperty("--result-list-button-color", "#1d212a");

  document.querySelector("#auth li a").style.setProperty("color", "white");

  document.getElementById("cf-box2").style.setProperty("top", "26vw");
  document.getElementById("cf-box1").style.setProperty("top", "20vw");
  document.getElementById("cf-box1").style.setProperty("left", "3vw");
  document.getElementById("cf-box3-user").style.setProperty("top", "16vw");
  document.getElementById("cf-box3-user").style.setProperty("left", "16vw");
  document
    .getElementById("search-now")
    .style.setProperty("background-color", "#1d212a");
  document.getElementById("slogan-small").style.setProperty("color", "#1d212a");
  document.getElementById("bolded-text").style.setProperty("color", "black");
  document
    .getElementById("bolded-text")
    .style.setProperty("font-weight", "bold");
  document
    .getElementById("main-board")
    .style.setProperty("border", "solid darkgray 1px");

  var card_grid = document.getElementsByClassName("grid-card");

  for (let i = 0; i < card_grid.length; i++) {
    card_grid[i].style.setProperty("border", "solid darkgray 1px");
  }
  const arrow = document.getElementsByClassName("arrow");
  for(let i = 0; i < arrow.length; i++){
    arrow[i].style.setProperty("filter", "invert(1)");
  }
}

function changeTheme() {
  if (localStorage.getItem("theme") == "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  location.reload();
  console.log(localStorage.getItem("theme"));
}

function joinParty(e) {
  if (localStorage.getItem("loged") !== "t") {
    document.location.href = "login.html";
  }
  else{
    e.previousSibling.previousSibling.firstChild.nextSibling.style.setProperty("background-image", "url(src/user.png)")
  }
}
function joinStream() {
  if (localStorage.getItem("loged") !== "t") {
    document.location.href = "login.html";
  } else {
    if (localStorage.getItem("onStream") == "t") {
      localStorage.setItem("onStream", "f");
      document
        .getElementById("cf-box3-user")
        .style.setProperty("visibility", "hidden");
    } else {
      document
        .getElementById("cf-box3-user")
        .style.setProperty("visibility", "visible");
      localStorage.setItem("onStream", "t");
    }
  }
}
