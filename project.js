let task = JSON.parse(localStorage.getItem("Added Project"));

let output = "";
for (i in task) {
  output = `
  <div class = "addPro1"><p>${task[0].name}</p>
  <p>Client</p>
          <p>Total Hours</p>
          <p>0 H</p>
          <p>0 $</p>
          <p>Created</p>
          <p>Created</p>
        <p>${task[1].client}</p>
        <p>${task[2].description}</p>
       </div> `;
  document.getElementById("addPro").innerHTML = output;
}
