let sql = window.matchMedia("(max-width: 766px)");

let sql_2 = window.matchMedia("(max-width: 1199px)");

function openSideNav() {
  document.getElementById("closeNav").style.width = "calc(100% - 15px)";

  if (sql.matches) {
    document.getElementById("closeNav_2").style.width = "calc(100% - 15px)";
  }

  document.getElementById("closeNav_3").style =
    "opacity : 1; transition-delay: 0.3s";

  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function openSideNav_2() {
  document.getElementById("closeNav").style.width = "40%";

  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeSideNav() {
  if (sql_2.matches) {
    document.getElementById("closeNav").style.width = "0";
  }

  if (sql.matches) {
    document.getElementById("closeNav_2").style.width = "0";
  }

  document.getElementById("closeNav_3").style =
    "opacity = 0 ; transition-delay : unset";

  document.body.style.backgroundColor = "white";
}

let myBtn = document.getElementById("dropdown");
let myMega = document.getElementById("mega");

if (sql_2.matches) {

  myBtn.onclick = function () {

    if (myMega.style.display == "block") {
      myMega.style.display = "none";
    } else {
      myMega.style.display = "block";
    }
  }
}


let myBtn_2 = document.getElementById("dropdown_2");
let myProducts = document.getElementById("products");

if (sql_2.matches) {

  myBtn_2.onclick = function () {

    if (myProducts.style.display == "block") {
      myProducts.style.display = "none";
    } else {
      myProducts.style.display = "block";
    }
  }
}


let myBtn_3 = document.getElementById("dropdown_3");
let myCompany = document.getElementById("company");

if (sql_2.matches) {

  myBtn_3.onclick = function () {

    if (myCompany.style.display == "block") {
      myCompany.style.display = "none";
    } else {
      myCompany.style.display = "block";
    }
  }
}
