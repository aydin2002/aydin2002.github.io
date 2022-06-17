
function myFunction(id) {
let person = prompt("Are you sure?", "Yes");
if (person != null) {
document.getElementById("homeLabel").innerHTML = "Ok, thanks!";
document.getElementById("homeLabel").style.fontSize = "50px";

if (document.getElementById(id).style.backgroundColor != 'red') {
  document.getElementById(id).style.backgroundColor = 'red';
}else {
  document.getElementById(id).style.backgroundColor = '#4cf023';
}

}else {
document.getElementById("homeLabel").style.fontSize = "35px";
document.getElementById("homeLabel").innerHTML = "Nothing changed!";

}

}
