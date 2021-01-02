let d = new Date();
let m = d.getDate();
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let n = monthNames[d.getMonth()];
document.getElementById("date").innerHTML = `<h1>Today, ${m}  ${n}</h1>`;
localStorage.setItem("date", m + " " + n);

document.getElementById("preDay").addEventListener("click", function () {
  let c;
  c = m - 1;
  console.log("cli");

  if (c == m) {
    document.getElementById("date").innerHTML = `<h1>Today, ${m}  ${n}</h1>`;
  } else {
    document.getElementById("date").innerHTML = `<h1> ${c}  ${n}</h1>`;
  }
  // document.getElementById("date").innerHTML = `<h1> ${c}  ${n}</h1>`;
});

document.getElementById("nextDay").addEventListener("click", function () {
  let c;
  c = m + 1;
  console.log("clicked");
  if (c == m) {
    document.getElementById("date").innerHTML = `<h1>Today, ${m}  ${n}</h1>`;
  } else {
    document.getElementById("date").innerHTML = `<h1> ${c}  ${n}</h1>`;
  }
});

let h1 = document.getElementById("h1");
let addTask = document.getElementById("task");
let start = document.getElementById("btn1");
let startBtn = document.getElementById("startBtn");
let seconds = 0;
let minutes = 0;
let hours = 0;
let t;

function add() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  h1.innerHTML =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds);

  // timer();
}

let stop1 = document.getElementById("stop1");
function timer() {
  t = setInterval(add, 1000);
  let out = " ";
  addTask.innerHTML = `<i class="far fa-edit"></i>
  Add a project task or tag
  `;
  out += `<button class = "stop"><i class="fas fa-stop"></i> Stop </button>`;
  stop1.innerHTML = out;
  start.innerHTML = "Start New";
}

/* Start button */

start.addEventListener("click", timer);

stop1.addEventListener("click", function () {
  clearInterval(t);
});

const createCard = () => {
  let out = "";

  out += `<div class = "timeLog">

            <div class = "flex">
              <h1>Add a time Log</h1>
              <i class="fas fa-times close" id = "close"></i>
            </div>

            <div class = "flex2">

              <label for = "pro">Project</label>
              <input type = "text" name = "pro" id = "pro" placeholder = "Select or enter project" class = "bigInp"></input>
              <lable name = "task">Task</lable>
              <input type = "text" id = "task" name = "task" placeholder = "Select or enter project" class = "bigInp"></input>
              <label for = "duration">Duration</label>
              <input name = "duration" type ="text" id = "dur" class = "duration"/>
            </div>

            <div class = "flex3">
              <textarea rows="5" cols="80"
              id = "text" class = "text" placeholder = "Edit log description or drop files here"></textarea>
              <input type = "number" class = "num" placeholder = "Start Time"/>
              <input type = "number" class = "num" placeholder = "End Time"/>
            </div>

            <div class = "fl">
            <input type = "text" placeholder = "Add a tag" class = "tag"></input>
            <input type = "text" class = "exp" placeholder = "Enter expense amount"/>
            </div>

            <button class = "addT" id = "addT">Add time Log</button>
            <button class = "cancel" id = "can">Cancel</button>
          </div>`;

  document.getElementById("addNew").innerHTML = out;

  document.getElementById("can").addEventListener("click", function () {
    out = `<div></div>`;
    document.getElementById("addNew").innerHTML = out;
  });

  document.getElementById("close").addEventListener("click", function () {
    out = `<div></div>`;
    document.getElementById("addNew").innerHTML = out;
  });
  document.getElementById("addT").addEventListener("click", function () {
    let project = document.getElementById("pro");
    let task = document.getElementById("task");
    let dur = document.getElementById("dur");

    out = `<div class = "newadd">
    <h3>Project</h3>
    <h3>task</h3>
    <h3>Duration</h3>
    <h3>Description</h3>
    <h3>Start</h3>
    <h3>End</h3>

    </div>
    <div class = "newadd">
    <h3>${project.value}</h3>
  <h3>${task.value}</h3>
  <h3>${dur.value}</h3>
  <h3>Description</h3>
  <h3>Start</h3>
  <h3>End</h3>
            </div>`;

    document.getElementById("newadd").innerHTML = out;
  });
};

document.getElementById("addLog").addEventListener("click", createCard);

let dt = document.getElementById("datepick").value;
console.log(dt);
