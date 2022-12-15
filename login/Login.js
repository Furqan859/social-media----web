// login data
async function handleFormSubmit(event) {
  event.preventDefault();
  const username = document.getElementById('username');
  const password = document.getElementById('password');

  try {
    const getData = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      })
    })
    const data = await getData.json();
    localStorage.setItem('data', JSON.stringify(data));
    if (!data.token) {
      alert("Invalid Email or Password");

    } else {
      redirect: window.location.replace("../content/Content.html")
    }

  }
  catch (e) {
    console.log(e.message);
  }
}
let form = document.querySelector('.form');
form.addEventListener('submit', handleFormSubmit);































