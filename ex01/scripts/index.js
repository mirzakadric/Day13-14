document.getElementById("myModal").addEventListener("click", myFunc);
document.getElementById("myModal").addEventListener("click", myFuncClose);

function myFunc(){
  document.getElementById("myModal").style.visibility = "visible";
}

function myFuncClose(){
  document.getElementById("myModal").style.visibility = "hidden";
}

