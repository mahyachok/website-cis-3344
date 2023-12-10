"use strict"; 

function UpcomingTournamentList() {

    var tournamentListDiv = document.createElement("div");

    ajax("json/upcomingTournaments.json", processUserList, tournamentListDiv);

    function processUserList(tournamentList) {

        // Defining the edit area and how values will be validated.
        var tournamentInputSpecs = [
            {
                "prompt": "Title(required): ",
                "fieldName": "title",
                "dataType": "string",
                "minLen": 1, // required field
                "maxLen": 50,
                "isRequired": true
            },
            {
                "prompt": "image url(required): ",
                "fieldName": "image",
                "dataType": "string",
                "minLen": 1, // empty string is OK
                "maxLen": 500,
                "isRequired": true
            },
            {
                "prompt": "Tournament Date(required): ",
                "fieldName": "date",
                "dataType": "date",
                "minLen": 0, // means optional
                "isRequired": true
            },
            {
                "prompt": "Description(optional): ",
                "fieldName": "description",
                "dataType": "string",
                "minLen": 0, // means optional
                "maxLen": 10 // 10 characters including decimal point
            }

        ];

        // defining how you want the objects shown in the child elements within the list
        //var displayTemplate = "<img src='${obj.image}'/> <span>${obj.userEmail}</span>";
        var dTemplate = "<img src='${obj.image}'/> " +
            "<div>"+
            "<h4>${obj.title}</h4>"+
            "<p>Tournament Date: ${obj.date} </p>"+
            "<p>Tournament details: ${obj.description}</p>" +
            "</div>";
    
        // function MakeEditList({objList, inputSpecs, displayTemplate}) {
            tournamentListDiv.appendChild(MakeCrudList({
            objList:tournamentList,
            inputSpecs: tournamentInputSpecs, 
            displayTemplate: dTemplate
        }));
        
        // To show that the consumer's userList is updated with objects edited by the user
        var myButton = MakeTag({
           htmlTag:"button",
           innerHTML: "Print User Object List To Console",
           parent: tournamentListDiv
        });
        myButton.onclick = function() {
            console.log(userList);
        };
    }


    return tournamentListDiv;

    


    
} // userListComponent