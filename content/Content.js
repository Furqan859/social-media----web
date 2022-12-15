
const data = JSON.parse(localStorage.getItem('data'));
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


window.location.hash = "no-back-button";
window.location.hash = "Again-No-back-button";
window.onhashchange = function () {
  window.location.hash = "no-back-button";
}





