  "use strict";

  const MakeMoveImageR = ({
    picObjList = [{fileName: "unknown", caption:"unnamed", gi: "unknown", description: "unknown description", difficulty: "unknown difficulty"}],
    ssTitle = "Untitled"
}) => {

    console.log("MakeSlideShowR is running, picList is on the next line");
    console.log(picObjList);

    // Any data member (of the object being represented by our User Inteface) must
    // be declared as a React state variable using React.useState. We must always use 
    // the React provided setter function to change the value of that state variable. 
    // For example, we must use setPicNum to change the value of picNum. Whenever we 
    // use one of these React provided setters, the UI of our component will automatically 
    // be redisplayed by React. 
    const [picNum, setPicNum] = React.useState(0);
    const [showInfo, setShowInfo] = React.useState(false);
    const [showButton, setShowButton] = React.useState(true);



    function showInfoFn() {
        setShowInfo(true);
        setShowButton(false);
    }

    function hideInfoFn() {
        setShowInfo(false);
        setShowButton(true);
    }

    
    
    function nextPic() {
        console.log("ready to increment " + picNum);
        if (picNum < picObjList.length - 1) {
            setPicNum(picNum + 1);
        } else {
            console.log("Can't go next. picNum is already " + picNum + " (and list length is " + picObjList.length + ").");
        }
    }

    function prevPic() {
        console.log("ready to decrement " + picNum);
        if (picNum > 0) {
            setPicNum(picNum - 1);
        } else {
            console.log("Can't go back. picNum is already 0.");
        }
    }

    return (
        <div className="slideShow">
            <div>
                <h1>{ssTitle}</h1>
                <img src={picObjList[picNum].fileName} />
                <h2>{picObjList[picNum].caption}</h2>
                <p>
                {
                    showButton ?
                        <button onClick={showInfoFn}>More...{showButton}</button>
                        : null
                }
            </p>
            {
                showInfo ?
                    <div>
                        <h3>Gi required: {picObjList[picNum].gi}</h3>
                        <p>{picObjList[picNum].description}</p>
                        <h5>Difficulty: {picObjList[picNum].difficulty}</h5>
                        <p>
                            <button onClick={hideInfoFn}>Less...{showInfo}</button>
                        </p>
                    </div>
                    : null
            }
                
            </div>
            <button onClick={prevPic}>Back</button>
            <button onClick={nextPic}>Next</button>
        </div>
    );
}