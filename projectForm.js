showTask()
 var addTask = document.getElementById("addTask")
 var addTask1 = document.getElementById("addTask1")
document.getElementById("btn-1").addEventListener("click", function(){
  var  inputTaskValue = addTask.value;
  var  inputTaskValue1 = addTask1.value;
    if(inputTaskValue && inputTaskValue1.trim()){
        var task = localStorage.getItem("localTask");
    if (task == null){
            taskObj = [];
        }else{
            taskObj = JSON.parse(task)
        }

     taskObj.push({task_name: inputTaskValue})
     taskObj.push({task_name: inputTaskValue1})
     localStorage.setItem("localTask", JSON.stringify(taskObj));
     addTask.value = "";
     addTask1.value = "";

    }
    showTask();

})
function showTask(){
    var task = localStorage.getItem("localTask")
    if(task == null){
        var taskObj = []
    }else{
        taskObj = JSON.parse(task)
    }
  var html = "";
  var tabletask = document.getElementById("tabletask");
  taskObj.forEach(function(item, index){
      html += `<tr class = "row">
      <td>${index +1}</td>
      <td>${item.task_name}</td>
      <td> <button onClick = "deleteItem(${index})">DELETE</button><td>
      
      </tr>
      `
      
  })
  tabletask.innerHTML = html;


}
function deleteItem(index){
    var task = localStorage.getItem("localTask")
    var taskObj = JSON.parse(task);
    taskObj.splice(index, 1);
    localStorage.setItem("localTask", JSON.stringify(taskObj))
    showTask();

}
