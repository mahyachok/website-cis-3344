"use strict";
function Positions() {
  var ele = document.createElement("div");
  ele.classList.add("positions");




  var bjj1 = MakeBJJ({
    positionName: "rear naked choke",
    moveImage: "userPics/rear-naked-choke.jpg",
    Gi: true,

  });

  ele.appendChild(bjj1);




  var bjj2 = MakeBJJ({});

  ele.appendChildbjj2(bjj2);




  ele.innerHTML = content;
  ele.classList.add("blog");
  return ele;
}