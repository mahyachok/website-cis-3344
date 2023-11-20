"use strict"; // prevent browser from globally auto-declaring variables

  const MakeBJJR = ({ positionName: ThePositionName = "unknown position",
    moveImage: theMoveImage = "unknown url",
    Gi: TheGi = "false",
  }) => {


    TheGi = TheGi ? "Yes" : "No";


    const [positionName, setPositionName] = React.useState(ThePositionName);

    const [positionNameInput, setPositionNameInput] = React.useState("");

    const [Gi, setGi] = React.useState(TheGi);

    const [giInput, setGiInput] = React.useState("");


    const [moveImage, setImage] = React.useState(theMoveImage);
    const [imageInput, setImageInput] = React.useState("");




    //these two functions change the variables

    function changePositionName() {
      setPositionName(positionNameInput);
    }

    function changeGi() {
      //this checks if the input is true, yes, or 1 and sets the variable to true
      if (
        giInput == "true" ||
        giInput == "True" ||
        giInput == "TRUE" ||
        giInput == "yes" ||
        giInput == "Yes" ||
        giInput == "YES" ||
        giInput == "y" ||
        giInput == "Y" ||
        giInput == "1"
      ) {
        var giInputBoolean = true;
      } else {
        var giInputBoolean = false;
      }

      giInputBoolean = giInputBoolean ? "Yes" : "No"; //this is fun, this is a ternary operator, it's like an if statement but it's in one line
      //here its essentally saying if giInputBoolean is true, set it to string yes, else set it to no
      setGi(giInputBoolean);
    }


function changeImage(){
  setImage(imageInput);
}


    return (
      <div className="bjj">
        position: {positionName}
        <br />
        Gi: {Gi}
        <br />
        <button onClick={changePositionName}> Change Position Name to: </button>
        <input
          value={positionNameInput}
          onChange={(e) => setPositionNameInput(e.target.value)}
        />


        <br />
        <button onClick={changeGi}>Change Gi: </button>
        <input value={giInput} onChange={(e) => setGiInput(e.target.value)} />


        <br />
        <button onClick={changeImage}>Change Image</button>
        <input value={imageInput} onChange={(e) => setImageInput(e.target.value)} />
      </div>
    );
  };





