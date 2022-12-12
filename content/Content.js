

const data = JSON.parse(localStorage.getItem('data'));

// const email = document.getElementById('email').innerHTML = data.email;
// const userName = document.getElementById('userName').innerHTML = data.username;
// const image = document.getElementById("img-2")
// image.src = data.image;
// console.log(data.id, "token");


// function to check userprofile
function userProfile() {
  redirect: window.location.replace("../userProfile/userProfile.html")

}

// function for logout
function LogOut() {
  localStorage.clear();
  redirect: window.location.replace("../login/login.html")
}

const image = document.getElementById("nav-img")
image.src = data.image;
const image1 = document.getElementById("nav-img-1")
image1.src = data.image;
const image2 = document.getElementById("img-2")
image2.src = data.image;

// post api
// function loaderData(numDat = 10){
//   let i=0;
//   while(i< numDat){
async function handleFormSubmit() {
  try {
    const getPost = await fetch('https://dummyjson.com/posts', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    const post = await getPost.json();

    localStorage.setItem('post', JSON.stringify(post));
    // console.log(post, "post data");
  }

  catch (e) {
    console.log(e.message);
  }


}

handleFormSubmit();

// }
// }
// loaderData();




// const body = document.getElementById('body');
// const userName = document.getElementById('userName');
// const email = document.getElementById('email');
// const reactions = document.getElementById('reactions');
// const tags = document.getElementById('tags');





//no location save button
window.location.hash = "no-back-button";
// Again because Google Chrome doesn't insert
// the first hash into the history
window.location.hash = "Again-No-back-button";

window.onhashchange = function () {
  window.location.hash = "no-back-button";
}


window.addEventListener('scroll',()=>{
  console.log("scrolled", window.scrollY) //scrolled from top
  console.log(window.innerHeight) //visible part of screen
  if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
      console.log("end")
  }
})


