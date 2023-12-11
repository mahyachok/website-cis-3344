"use strict";
function MakeMoveImageR_legs() {

    var myPicList = [];

    console.log("SS_AJAX_CGF_R is running !!");

    // Tell React that 'items' (an array of objects) is a state variable
    // that (when changed by the React provided setter function 'setItems')
    // should redisplay this component. Set its initial value to [], an empty array.
    const [items, setItems] = React.useState([{fileName: "unknown", caption:"unnamed", gi: "unknown", description: "unknown description", difficulty: "unknown difficulty"}]);
  

    // Tell React that "error" is a state variable that (when changed by the React 
    // provided setter function 'setError') should redisplay this component. 
    // Set its initial value to null.
    const [error, setError] = React.useState(null);

    // Common React pattern. Display some "...Loading..." UI 
    // while the page is loading, then do whatever needs to be done
    // (presumably just once). 
    const [isLoading, setIsLoading] = React.useState(true);


    var newMoveImages;
    // useEffect takes two params. First is function to be run, 
    // second is list of state variables that (if they change) will 
    // cause that function to be run again. 
    // Common react pattern: with empty list of state variables, then 
    // that function is only run one time at the start of building the 
    // component. 

    // If you put initialization code before this useEffect, that code
    // would be run any time that a state variable changes (not good). 
    React.useEffect(
        () => {

            // ajax_alt takes three parameters: the URL to read, Success Fn, Failure Fn.
            ajax_alt(
                //NOTE: this only has the ../ because the code is in a subfolder... 
                "json/move2.json", // URL for AJAX call to invoke
                
                function (MoveList) {   // ajax_alt calls this function if ajax call successful 

                    console.log("AJAX call successful, catList on next line:");
                    console.log(MoveList);

                    // map function creates newCats as an array of image file names from catList,
                    // an array of  objects (where the image file name was in property 'pic').
                    newMoveImages = MoveList.map(function (move) {
                        return {
                            fileName: move.fileName,
                            caption: move.caption,
                            gi: move.gi,
                            description: move.description,
                            difficulty: move.difficulty
                        };
                    });

              

                    console.log("newCats on next line");
                    console.log(newMoveImages);

                    setItems(newMoveImages);

                    setIsLoading(false);
                },


                function (errorMsg) { // ajax_alt calls this function if ajax call fails

                    setError("AJAX Error: " + errorMsg);
                    setIsLoading(false);
                }

                
            );

         

            
            
        },
        [] // list of state variables. empty means run just once
    );

    if (isLoading) {
        return <div> Loading... </div>
    }

    if (error != null) {
        return <div>
            <h3> {error} (error)</h3>
        </div>
    }
    return (
        <div>
            <MakeMoveImageR picObjList={items} ssTitle="leg submissions" />
            <MakeMoveImageR />
        </div>
    );

    }