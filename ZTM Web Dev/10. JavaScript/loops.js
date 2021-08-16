var todos = [
    "clean room",
    'exercise',
    'brush teeth',
    'study JavaScropt',
    'eat healthy'
];

// for loop
for (var i = 0; i < todos.length; i++) {
    console.log(todos[i] + "!");
    // change the values in the original list
    todos[i] = todos[i] + '!';
}

//  while loop
var counter1 = 0;
while (counter1 < 10) {
    console.log(counter1, "is your number");
    counter1++;
};

// forEach -> a method is called on todos called .forEach() that takes in a function as an argument wher the parameter of the function (i) is itself the items on the todos list. Here we are not accessing the index.
// the second parameter of the function (here *index*) is the index of the element.
todos.forEach(
    function(i, index) {
    console.log(i, 'is at index', index);
    }
);