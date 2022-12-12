const data = JSON.parse(localStorage.getItem('data'))
console.log(data, "userProfile");

// user nav data
const image = document.getElementById("nav-img")
image.src = data.image;
const image1 = document.getElementById("nav-img-1")
image1.src = data.image;

const firstName = document.getElementById('firstName').innerHTML = data.firstName;
const email = document.getElementById('email').innerHTML = data.email;
const gender = document.getElementById('gender').innerHTML = data.gender;
const userName = document.getElementById('userName').innerHTML = data.username;
const id = document.getElementById('id').innerHTML = data.id;

function homeFunction() {
    redirect: window.location.replace("../content/Content.html")
}

// function for logout
function LogOut() {
    localStorage.clear();
    redirect: window.location.replace("../login/login.html")
}









window.location.hash = "no-back-button";

    // Again because Google Chrome doesn't insert
    // the first hash into the history
    window.location.hash = "Again-No-back-button"; 

    window.onhashchange = function(){
        window.location.hash = "no-back-button";
    }