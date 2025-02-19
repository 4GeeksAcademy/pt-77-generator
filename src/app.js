import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateGame()
};
const generateGame = () => {
  const equipmentArray = ["racket", "bat", "skates", "paddle", "board", "ball", "disk"];
  const locationArray = ["field", "court", "yard", "park", "beach", "pool", "table"];
  const nameArray = ["soccer", "compative fast walking", "corn hole", "volley ball", "ping pong", "pole vaulting"];

  let equipmentIndex = Math.floor(Math.random() * equipmentArray.length)
  let locationIndex  = Math.floor(Math.random() * locationArray.length)
  let nameIndex  = Math.floor(Math.random() * nameArray.length)

  const equipment = document.querySelector(".equipment")
  const location = document.querySelector(".location")
  const name = document.querySelector(".name")

  equipment.innerHTML = equipmentArray[equipmentIndex]
  location.innerHTML = locationArray[locationIndex]
  name.innerHTML = nameArray[nameIndex]

}
