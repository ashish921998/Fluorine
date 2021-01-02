let nm = document.getElementById("name");
let cl = document.getElementById("cli");
let dex = document.getElementById("txt");

document.getElementById("save").addEventListener("click", () => {
  let nam = nm.value;
  let cli = cl.value;
  let decs = dex.value;
  const task = localStorage.getItem("Added Project");
  if (task == null) {
    obj = [];
  } else {
    obj = JSON.parse(task);
  }
  obj.push({ name: nam }, { client: cli }, { description: decs });
  localStorage.setItem("Added Project", JSON.stringify(obj));
  nm.value = "";
  cl.value = "";
  dex.value = "";
});
