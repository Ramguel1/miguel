var vdia=document.querySelector("#vdia");
var mes = document.querySelector("#mes");
var fecha = document.querySelector("#fecha");

var dia= document.querySelector("#dia");
var ima= document.querySelector("#ima");

 

dia.oninput=()=> dibujar();
mes.onchange=()=> dibujar();



const dibujar=()=>{
    let d=parseInt(dia.value)
    vdia.innerHTML=d;
   
  } 