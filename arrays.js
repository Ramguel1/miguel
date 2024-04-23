var miarray = new Array();
var btnAdd = document.getElementById('btnAdd');
var items = document.getElementById('items');
var del = document.getElementById('del');
btnAdd.onclick=()=>{
  var n = parseInt(document.getElementById("item").value);
  miarray.push(n)
  var nums="";
  for(var i=0; i< miarray.length;i++){
    nums+="<h2>"+miarray[i]+"</h2>";
  }
  items.innerHTML=nums;
}

del.onclick=()=>{
  var n = parseInt(document.getElementById("item").value);
  miarray.pop(n);
  var nums = "";
  for (var i = 0; i < miarray.length;i++){
    nums+="<h2>"+miarray[i]+"</h2>";
  }
  items.innerHTML=nums;
}