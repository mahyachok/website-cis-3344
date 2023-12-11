"use strict";
function Positions() {
  var ele = document.createElement("div");
  ele.innerHTML = `

  <div class="firstDiv ssHolder">
  <h3>Arm Submissions</h3>
  </div>

<div class="secondDiv ssHolder">
  <h3>Leg Submissions</h3>
</div>


 
`;

ele.classList.add("positions");

var firstDiv = ele.getElementsByClassName("firstDiv ssHolder")[0];
var secondDiv = ele.getElementsByClassName("secondDiv ssHolder")[0];








  var bjj1 = MakeBJJ({
    positionName: "rear naked choke",
    moveImage: "pics/rear-naked-choke.jpg",
    Gi: true,

  });

  firstDiv.appendChild(bjj1);




  var bjj2 = MakeBJJ({});

  secondDiv.appendChild(bjj2);





  ele.classList.add("positions");
  return ele;
}