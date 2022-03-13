// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

var database = [
    {
        username: "johndoe",
        password: "12345",
    },
    {
        username: "megan",
        password: "123",
    },
    {
        username: "tory",
        password: "12",
    },
    {
        username: "ben",
        password: "1",
    },
    {
        username: "larry",
        password: "123478",
    },
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var newsfeed = [
    {
        username: "lily",
        timeline: "So tired from all that learning!",
    },
    {
        username: "john",
        timeline: "yummy all in my tummy!",
    },
    {
        username: "jane",
        timeline: "I graduated! BS in BSology!",
    },
];

var usernamePrompt = prompt("What's your username?");
var passPrompt = prompt("What is your password?");

function isUserValid(username, pass) {
    for (var i = 0; i < database.length; i++) {
        if (
            database[i].username === username &&
            database[i].password === pass
        ) {
            return true;
        }
    }
    return false;
}

function signIn(username, pass) {
    if (isUserValid(username, pass) === true) {
        console.log(newsfeed);
    } else {
        alert("sorry, wrong username and password");
    }
}

signIn(usernamePrompt, passPrompt);
