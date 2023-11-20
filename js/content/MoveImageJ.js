"use strict";
function MoveImageJ() {

  // Create a DOM element (div) like a CGF would do. 
  var ele = document.createElement("div");

  // style ele as a flex box and place two divs in that flex box
  // (each 50% wide). Each of these divs will hold one slide show.

  ele.innerHTML = `
                <style>
                  .ssFlex {
                    display:flex;
                    flex-direction:row;
                  }
                  .ssFlex .ssHolder {
                    width: 32%;
                    box-sizing:border-box;
                    text-align:center;
                    margin-left: 0.5%;
                    margin-right:0.5%;
                  }
                </style>

                <div class="firstDiv ssHolder">
                <h3>Arm Submissions</h3>
                </div>

              <div class="secondDiv ssHolder">
                <h3>Leg Submissions</h3>
              </div>

              <div class="thirdDiv ssHolder">
                <h3>Default</h3>
              </div>

               
              `;

  ele.classList.add("ssFlex"); // if we want ele to pick up the above 'ssFlex' styling. 

  // Get a reference to the two divs into which you want to place 
  // slide show components. 
  var firstDiv = ele.getElementsByClassName("firstDiv ssHolder")[0];
  var secondDiv = ele.getElementsByClassName("secondDiv ssHolder")[0];


  // Shows how an ajax error is handled -- you'll see an error 
  // message on the page. waterFunnn.json is mispelled.



  ajax("json/moves.json", processMoveList, firstDiv);
  function processMoveList(moveList) {

    // MakeSlideShow expects an array of image file namesct has a property called "imageFileName", 
    // So let's create a new Object List that has the right property names inside.
    // We can use the map function to do this instead of the technique used above. 
    // For each cat in cat list, we are returning a different object that'll get added to array 'newCatList'.
    var moveObjList = moveList.map(function (move) {
      return {
        fileName: move.fileName,
        caption: move.caption,
        gi: move.gi,
        description: move.description,
        difficulty: move.difficulty
      };

    });


    console.log('moveObjList:', moveObjList);
    var ss = MakeMoveImageJ({ picObjList: moveObjList }, { ssTitle: "Arm Submissions" });
    firstDiv.appendChild(ss);

    // Example showing why you need to get the ss reference, so the HTML page can invoke 
    // any public methods that may be available from the returned slide show object.
    ss.setPicNum(1);
  }

  ajax("json/move2.json", processMoveList, secondDiv);
  function processMoveList(moveList) {

    // MakeSlideShow expects an array of image file namesct has a property called "imageFileName", 
    // So let's create a new Object List that has the right property names inside.
    // We can use the map function to do this instead of the technique used above. 
    // For each cat in cat list, we are returning a different object that'll get added to array 'newCatList'.
    var moveObjList = moveList.map(function (move) {
      return {
        fileName: move.fileName,
        caption: move.caption,
        gi: move.gi,
        description: move.description,
        difficulty: move.difficulty
      };

    });


    console.log('moveObjList:', moveObjList);
    var ss2 = MakeMoveImageJ({ picObjList: moveObjList }, { ssTitle: "Leg Submissions" });
    secondDiv.appendChild(ss2);

    // Example showing why you need to get the ss reference, so the HTML page can invoke 
    // any public methods that may be available from the returned slide show object.
    ss2.setPicNum(1);
  }


  // To show how MakeSlideShow deals with an empty object parameter, there's no need to make an AJAX call... 
  var thirdDiv = ele.getElementsByClassName("thirdDiv")[0];
  var ss3 = MakeMoveImageJ({});
  thirdDiv.appendChild(ss3);

  return ele;
}