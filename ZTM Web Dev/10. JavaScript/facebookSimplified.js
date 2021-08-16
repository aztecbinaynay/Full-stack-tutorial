var database = [
    {
        username: "qjeabinay",
        password: "50239812",
    },
    {
        username: "coochiequeen",
        password: "123",
    },
    {
        username: "americanreject",
        password: "eow",
    },
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "New Job, New Me!",
    },
    {
        username: "Teresa",
        timeline: "Web Developer Journey!",
    },
];

// user inputs: 
var usernamePrompt = prompt("enter your username: ");
var passwordPrompt = prompt("enter your password: ");

// loops through database to see if user is in database. Return newsFeed and true if yes and return false if no 
function isUserValid(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === usernamePrompt && database[i].password === passwordPrompt) {
            return true;
        }
    }
    // if user does not exist in database, then the program control will enter the line below and exit the function with a value of false.
    return false;
};

function signIn(user, pass) {
    //  invoke the isUserValid(_, _) here. If condition becomes true and the code block below it gets executed, otherwise use the alert.
    if (isUserValid(user, pass)) {
        console.log(newsFeed);
    } else {
        alert("sorry, wrong password and/or username!");
    }
}

// call the function
signIn(usernamePrompt, passwordPrompt);
