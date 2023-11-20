"use strict";

// MakeSlideShow expects a parameter object with two properties: 
//   * picObjList: an array of objects where each object has a property named 'imageFileName' and  
//                 maybe also some kind of caption property (but MakeSlideShow here does not add a caption to the images)... 
//   * ssTitle: a title for the Slide Show (but MakeSlideShow here does not add a title to the slideshow)... 


function MakeMoveImageJ({ ssTitle = "Untitled", picObjList = [{ fileName: "https://cis-linux2.temple.edu/~sallyk/pics_cat/pic5.png", caption: "unnamed", gi: "false", description: "unknown description",difficulty:"unknown difficulty" }], }) {

    // get reference to the DOM object inside which the SlideShow image 
    // and buttons will be created.
    var MoveImage = document.createElement("div");
    MoveImage.classList.add("slideShow");

    // add a div that will hold the image
    var imgHolder = document.createElement("div");
    MoveImage.appendChild(imgHolder);

    var captionHolder = document.createElement("div");
    MoveImage.appendChild(captionHolder);

    var giHolder = document.createElement("div");
    MoveImage.appendChild(giHolder);

    var descriptionHolder = document.createElement("div");
    MoveImage.appendChild(descriptionHolder);


    var difficultyHolder = document.createElement("div");
    MoveImage.appendChild(difficultyHolder);


    // add image into the div & set the image's src attribute to show picture
    var myImage = document.createElement("img");
    imgHolder.append(myImage);

    var myCaption = document.createElement("p");
    captionHolder.append(myCaption);


    var myGi = document.createElement("p");

    var myDescription = document.createElement("p");

    var myDifficulty = document.createElement("p");




    // add back button under the image (and empty paragraph)
    var backButton = document.createElement("button");
    backButton.innerHTML = " &lt; ";
    MoveImage.appendChild(backButton);

    // add forward button under the image (and empty paragraph)
    var fwdButton = document.createElement("button");
    fwdButton.innerHTML = " &gt; ";
    MoveImage.appendChild(fwdButton);








    var moreButton = document.createElement("button");
    moreButton.innerHTML = "More";
    MoveImage.appendChild(moreButton);


    var lessButton = document.createElement("button");
    lessButton.innerHTML = "Less";



    // private variable that keeps track of which image is showing
    var picNum = 0;
    setPic();

    function setPic() {
        myImage.src = picObjList[picNum].fileName;
        myCaption.innerHTML = picObjList[picNum].caption;
        myGi.innerHTML = "requires Gi: " + picObjList[picNum].gi;
        myDescription.innerHTML = picObjList[picNum].description;
        myDifficulty.innerHTML = "Difficulty: " + picObjList[picNum].difficulty;
        
    }

    // Advance to next image in the picture list
    function nextPic() {

        if (picNum < picObjList.length - 1) {
            picNum++;
        }
        setPic();
    }

    // Go to the previous image in the picture list
    function prevPic() {

        if (picNum > 0) {
            picNum--;
        }
        setPic();
    }

    // add next and previous funcionality to next and previous buttons
    backButton.onclick = prevPic;
    fwdButton.onclick = nextPic;

    MoveImage.setPicNum = function (newNum) {
        if ((newNum >= 0) && (newNum < picObjList.length)) {
            picNum = newNum;
            // change the src attribute of the image element to the desired new image)				
            setPic();
        }
    };


    function showMore() {
        giHolder.append(myGi);
        descriptionHolder.append(myDescription);
        difficultyHolder.append(myDifficulty);

        moreButton.remove();
        MoveImage.appendChild(lessButton);
    }

    
    function showLess() {
        giHolder.innerHTML = "";
        descriptionHolder.innerHTML = "";
        difficultyHolder.innerHTML = "";

        lessButton.remove();
        MoveImage.appendChild(moreButton);
    }

    moreButton.onclick = showMore;
    lessButton.onclick = showLess;








    return MoveImage;
}