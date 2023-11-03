async function initDatabase() {
  return await fetch('assets/Js/database.json').json();
}
async function iniAuth() {
  return await fetch('assets/Js/auth.json').json();
}

function auth() {
  var data = JSON.parse(localStorage.getItem("session"));
  if (data !== null) {
    return data;
  } else {
    return null;
  }
}
function login(username,password){
  var users = iniAuth();
  var user = users.find((user) => user.username === username && user.password === password );
  if(user){
     localStorage.setItem("session",JSON.stringify(user));
    return true;
  }else{
    return false;
  }
}
function logout(){
  localStorage.setItem("session",null);
}