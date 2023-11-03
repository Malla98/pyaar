async function initDatabase() {
  var data = await fetch('assets/Js/database.json');
  return data.json();
}
async function iniAuth() {
  var data = await fetch('assets/Js/auth.json').json();
  return data.json();
}

function auth() {
  var data = JSON.parse(localStorage.getItem("session"));
  if (data !== null) {
    return data;
  } else {
    return null;
  }
}
function login(username, password) {
  var response = iniAuth();
  console.log(response);
  var user = response.users.find((user) => user.username === username && user.password === password);
  if (user) {
    localStorage.setItem("session", JSON.stringify(user));
    return true;
  } else {
    return false;
  }
}
function logout() {
  localStorage.setItem("session", null);
}
function middleware() {

  var user = auth();
  if (user) {
    if (window.location.href == 'https://malla98.github.io/pyaar/login.html') {
      window.location.href = 'https://malla98.github.io/pyaar/dashboard.html';
    }
  } else {
    if(window.location.href != 'https://malla98.github.io/pyaar/login.html'){
      window.location.href = 'https://malla98.github.io/pyaar/login.html';
    }
  }
}