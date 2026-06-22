const scripts = [

{
ticket:"CR1001",
script:"ALTER_TABLE.sql",
requestedBy:"Bhushan",
executedBy:"DBA Team",
status:"SUCCESS",
backup:"YES"
},

{
ticket:"CR1002",
script:"PACKAGE_UPDATE.sql",
requestedBy:"Rahul",
executedBy:"DBA Team",
status:"PENDING",
backup:"NO"
},

{
ticket:"CR1003",
script:"DATA_FIX.sql",
requestedBy:"Amit",
executedBy:"DBA Team",
status:"FAILED",
backup:"YES"
}

];

let rows='';

scripts.forEach(item=>{

let cls='';

if(item.status==='SUCCESS')
cls='success';

if(item.status==='PENDING')
cls='pending';

if(item.status==='FAILED')
cls='failed';

rows += `
<tr>
<td>${item.ticket}</td>
<td>${item.script}</td>
<td>${item.requestedBy}</td>
<td>${item.executedBy}</td>
<td class="${cls}">${item.status}</td>
<td>${item.backup}</td>
</tr>
`;

});

document.getElementById("scriptTable").innerHTML = rows;