"use strict";

function MakeBJJ({
  //this is the object that will be passed to the function
  positionName = "unknown position",
  moveImage = "unknown url",
  Gi = false,
}) {
  var BJJObj = document.createElement("div");


  BJJObj.classList.add("bjj");


  
  BJJObj.innerHTML =
    "Position: " +
    positionName +
    "<br/> Gi: " +
    Gi +

    "<br/> Move Image: " +
    "<img scr=  $(moveImgEr)>" ;

  moveImgEr="unknown url";



if (!moveImage) {
var moveImgEr = document.createElement ("p");
moveImgEr. innerHTML = "image not available"
BJJObj.appendChild(moveImgEr) ;
}


else {

var moveImgEr = document. createElement ("img");
moveImgEr.src = moveImage;
BJJObj.appendChild (moveImgEr)
}

  return BJJObj;
}
