"use strict";
const signupButton = document.getElementById("signupButton");
const loginButton = document.getElementById("loginButton");
const signupPage = document.getElementById("signupPage");
const loginPage = document.getElementById("loginPage");
const popupDiv = document.getElementById("something");
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

//Get Data
let url =
  // "https://api.sheety.co/2b6613d7dad6008ce1e5dc7864019ab7/details/sheet1";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      // Do something with the data
      console.log(json.sheet1);
    });

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
    // "https://api.sheety.co/2b6613d7dad6008ce1e5dc7864019ab7/details/sheet1";
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

// Match Details from google sheets
function get_details() {
  let url =
    // "https://api.sheety.co/2b6613d7dad6008ce1e5dc7864019ab7/details/sheet1";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const getEmail = document.getElementById("getEmail");
        const getPassword = document.getElementById("getPassword");
        for (let i = 0; i < json.sheet1.length; i++) {
          if (
            getEmail.value == json.sheet1[i].email &&
            getPassword.value == json.sheet1[i].password
          )
            // console.log("Login successfully");
            // popup.classList.add("p-open-popup");
            window.open("loginsuccess.html");
        }
      });
}

// Send Email

// const axios = require("axios");

// const mailjetApiKey = "a0cfac7d5de6650824159db6f69ff34f";
// const mailjetApiSecret = "5461361dcfcfef8321113545fe69d4d9";

// const mailjetConfig = {
//   auth: {
//     username: mailjetApiKey,
//     password: mailjetApiSecret,
//   },
// };

// const sendEmail = async () => {
//   const emailData = {
//     Messages: [
//       {
//         From: {
//           Email: "zohydhiruxboa@bugfoo.com",
//           Name: "Ayush",
//         },
//         To: [
//           {
//             Email: "ayushrajput1708@gmail.com",
//             Name: "ayush123",
//           },
//         ],
//         Subject: "Test email",
//         HTMLPart: "<h3>Hello, this is a test email!</h3>",
//       },
//     ],
//   };

//   try {
//     const response = await axios.post(
//       "https://api.mailjet.com/v3.1/send",
//       emailData,
//       mailjetConfig
//     );

//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// sendEmail();