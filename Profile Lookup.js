
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
 for (i=0;i< contacts.length;i++){ //can replace with regex
   if (contacts[i].firstName==firstName){//check name exists
     if(contacts[i].hasOwnProperty(prop) && contacts[i][prop]!==""){ //check prop isnt empty
       return contacts[i][prop]; //give result
     }
     else if (contacts[i].hasOwnProperty(prop)===false || contacts[i][prop]===""){ //prop is empty: 
       return "No such property";      //return no prop
     }
   }
   else if(i==contacts.length-1 && contacts[i].firstName.hasOwnProperty(firstName)===false){ //all checked, no find
     return "No such contact";
   }
 }
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira","address");
