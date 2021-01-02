document.getElementById("day").innerHTML = localStorage.getItem("date") + " ";

//let data = localStorage.getItem("Added Project");
let nm = document.getElementById("name");
let cli = document.getElementById("cliname");
let dec = document.getElementById("descript");

let task = JSON.parse(localStorage.getItem("Added Project"));

// if (task == null) {
//   obj = [];
// } else {
//   obj = JSON.parse(task);
// }

console.log(task);
nm.innerHTML = task[0].name;
cli.innerHTML = task[1].client;
dec.innerHTML = task[2].description;

let newls = document.getElementById("taskTemp");
let modal = document.getElementById("modal");
let close = document.getElementById("close");

newls.addEventListener("click", function () {
  modal.style.display = "block";
});

close.addEventListener("click", function () {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

