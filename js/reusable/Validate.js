"use strict";

// We are still following JS file naming convention: 
// "JS file name matches the single JS function or object defined within."
// Validate object matches Validate.js 
var Validate = {};

// Now we add public methods to Validate object (all validation functions)

Validate.Number = function (inputVal, isRequired) {

    inputVal += ""; // convert to string if it is not already a string. 

    // remove formatting characters
    inputVal = inputVal.replace("$", "");
    inputVal = inputVal.replace(",", "");

    if (isRequired && inputVal.length === 0) {
        return "Required";
    }
    if (isNaN(inputVal)) {
        return "Error. Not a valid number.";
    }

    return "";
};

// Using Fat Arrow notation 
// (just an alternative to "regular" function definition above)
Validate.Integer = (inputVal, isRequired) => {
    if (isRequired && inputVal.length === 0) {
        return "Required";
    }

    if (!isNaN(inputVal)) { // means it is a number... 
        var numVal = Number(inputVal);
        var diff = numVal - Math.floor(numVal);
        if ((diff < 0.0001) && (diff > -0.0001)) {
            return "";
        } else {
            return "Error. You entered a number, but it's not an integer.";
        }
    }
    return "Error. Not a valid integer (not a number either).";
};

Validate.String = (inputVal, isRequired, maxLen) => {
    if (isRequired && inputVal.length === 0) {
        return "Required";
    }

    if (inputVal.length > maxLen) {
        return "Error: Please shorten your input to " +
                inputVal.substring(0, maxLen);
    }
    return "";
};

/* Note about date validation... I wanted to write some JS code (like above)
 to check if a user entered string was a valid date but it actually seems difficult 
 (and looks like you need a framework !!!)  So, we will just use the HTML5 
 input type="date" which provides a nice date UI and no way the user can enter 
 an invalid date. All we need to do is check that the user clicked a date 
 (if the date input is required). For this, we can use the generic "RequiredField"
 validation below, for a date or any type of input). 
 */
Validate.RequiredField = (inputVal, isRequired) => {
    if (isRequired && inputVal.length === 0) {
        return "Required";
    }
    return "";
};