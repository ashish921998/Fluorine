let report= document.getElementById("report")
let output1 = "";
let output2 = "";
let output3 = "";
report.addEventListener("click",function(){
    document.getElementById("clientDiv").innerHTML = "";
    document.getElementById("teamDiv").innerHTML = "";
    output1 = `
    <a>Dashboard</a>
    <a>Activity</a>
    <a>Team pivot</a>
    <a>Economy</a>
    <a>Timesheet</a>
    `
    document.getElementById("reportsDiv").innerHTML = output1;
   
})

let client= document.getElementById("client")

client.addEventListener("click",function(){
    document.getElementById("reportsDiv").innerHTML = ""
    document.getElementById("teamDiv").innerHTML = "";
    output2 = `
    <a>Clients</a>
    <a>Invoices</a>
    <a>Uninvoiced</a>
    `
    document.getElementById("clientDiv").innerHTML = output2;

})

let team = document.getElementById("team")

team.addEventListener("click",function(){
    document.getElementById("reportsDiv").innerHTML = ""
    document.getElementById("clientDiv").innerHTML = "";
    output3 = `
    <a>Clients</a>
    <a>Invoices</a>
    <a>Uninvoiced</a>
    `
    document.getElementById("teamDiv").innerHTML = output3;

})