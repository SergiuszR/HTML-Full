// let date = new Date();
// let n = date.getFullYear();
// document.getElementById("date").innerHTML = "&copy " + n;

let openBtn = document.getElementById("open-modal");
let closeBtn = document.getElementById("close-modal");

openBtn.addEventListener("click", () => {
  document.getElementById("modal-bg").style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
});
closeBtn.addEventListener("click", () => {
  document.getElementById("modal-bg").style.display = "none";
  document.querySelector("body").style.overflow = "visible";

  scrollDisable();
});

function dealAdder() {
  let addDeal = document.getElementById("add-deal-btn");

  if (addDeal.innerHTML !== "Cancel") {
    document.getElementById("deal-add-bg").style.display = "flex";
    document.getElementById("add-deal-btn").innerHTML = "Cancel";
  } else {
    document.getElementById("deal-add-bg").style.display = "none";
    document.getElementById("add-deal-btn").innerHTML = "&#xFF0B; Add Deal";
  }
}

function sendTip() {
  document.getElementById("send-tip-btn").addEventListener("click", () => {
    alert("Got It!");
  });
}

function checkAll() {
  let inputVal = document.getElementById("email").value;
  let passVal = document.getElementById("pass").value;
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (inputVal === "" || passVal === "") {
    alert("Please fill in all the fields");
  } else if (inputVal.match(mailFormat)) {
    alert("Registered! Please check your inbox.");
  } else {
    alert("Not a valid e-mail address");
  }
}

window.addEventListener("scroll", () => {
  let nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

function scrollDisable() {
  let activeSub = document.getElementById("active-section").innerHTML;

  if (activeSub === "Contact") {
    document.querySelector("body").style.overflow = "hidden";
  }
}

scrollDisable();
