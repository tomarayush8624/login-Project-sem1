"use strict";
const signupButton = document.getElementById("signupButton");
const loginButton = document.getElementById("loginButton");
const signupPage = document.getElementById("signupPage");
const loginPage = document.getElementById("loginPage");
const popupDiv = document.getElementById("something");
const something2 = document.getElementById("something2");

console.log("hi");

document.getElementById("showButton").addEventListener("click", () => {
  popupDiv.style.display = "none";
});

function showSignUp() {
  signupPage.style.left = "0";
  loginPage.style.left = "-200rem";
}

function showLogin() {
  signupPage.style.left = "-200rem";
  loginPage.style.left = "0";
}

//Include data to google sheets
function upload_details() {
  let name1 = document.querySelector(".name").value;
  let username = document.querySelector(".username").value;
  let mail = document.querySelector(".mail").value;
  let pass = document.querySelector(".password").value;
  // console.log(name1);

  let body = {
    sheet1: {
      name: name1,
      password: pass,
      username: username,
      email: mail,
    },
  };
  console.log(body);
  let url =
    "https://api.sheety.co/2b6613d7dad6008ce1e5dc7864019ab7/details/sheet1";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something with object
      console.log(json.sheet1);
    });
  popupDiv.style.display = "block";
}

function closeFunc() {
  location.reload();
}

// Match Details from google sheets
function get_details() {
  let url =
    "https://api.sheety.co/2b6613d7dad6008ce1e5dc7864019ab7/details/sheet1";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const getEmail = document.getElementById("getEmail");
      const getPassword = document.getElementById("getPassword");
      for (let i = 0; i < json.sheet1.length; i++) {
        if (
          getEmail.value == json.sheet1[i].email &&
          getPassword.value == json.sheet1[i].password
        ) {
          document.getElementById("login-page-popup").textContent =
            "Authentication Complete";
          something2.style.display = "block";
          console.log("passed");
        } else {
          document.getElementById("login-page-popup").textContent =
            "Login Failed";
          something2.style.display = "block";
        }
      }
    });
}
