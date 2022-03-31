var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("ul")[0].children; //an array of lists or li's derived from the parent tag, "ul"

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    var button = document.createElement("button");
    button.innerHTML = "Delete";
    li.append(button);
    li.addEventListener("click", togglefunc);
    li.childNodes[1].addEventListener("click", deletelist); // alternative solution from other coders: (1) btn.onclick = removeParent;
    // code above is necessary. Though I was hoping to make it cleaner. See the for loop allows us to add events on PRE-EXISTING lists. BUT NOT FOR LISTS THAT WE DYNAMICALLY CREATE. we essentially create the li along with its delete button and add events to those that will call the deletelist or togglefunc functions.
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function togglefunc(e) {
    e.target.classList.toggle("done");
    // the togglefunc has the parameter e which a reference pointer(?) and using e.target allows us to access the object/tag that we used the event listerner method on. In this case e.target will be a listItems[i] ot an <li></li>. Also the .classList.toggle("done") adds the done class to that tag
}

function deletelist(e) {
    e.target.parentElement.remove();
    // e.target in this case is the child node of an <li></li>, which is the <button></button>. .parentElement.remove() accesses the parent element of the button (which is li) and removes it, thereby also removing the button element and so the li and button element are gone now.
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// code below iterates through every existing list elements and give them an event listener method that when clicked... goes to the function called togglefunc. togglefunc is a fucntion that applies the toggle method  that allows the list to be striked through (and reverse once cliked again).

// code below also creates a delete button for every pre-existing list. Note that the delete button needs to be repeatedly made. If a delete button were made outside of the loop and appended as a child to the list, only the last list will get the delete button. we can access the delete button when we go to listItems[i] -> .childNodes[1]

for (var i = 0; listItems.length > i; i++) {
    var button = document.createElement("button");
    button.innerHTML = "Delete";
    listItems[i].append(button);
    listItems[i].addEventListener("click", togglefunc);
    listItems[i].childNodes[1].addEventListener("click", deletelist);
}

//   interesting method to add on click events:
// ul.onclick=function(event){
// 	var target=event.target;
// 	target.classList.toggle("done");
// }
// code above crosses all lists when the ul element is clicked
