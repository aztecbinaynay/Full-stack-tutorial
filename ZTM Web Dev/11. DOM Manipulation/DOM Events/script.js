var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("ul")[0].children;

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
	li.addEventListener("click", togglefunc)
	li.childNodes[1].addEventListener("click", deletelist);

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
	console.log(e.target);
}

function deletelist(e) {
	console.log(e.target);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// code below iterates through every existing list elements and give them an event listener method that when clicked... goes to the function called togglefunc. togglefunc is a fucntion that applies the toggle method  that allows the list to be striked through (and reverse once cliked again).

for (var i = 0; listItems.length > i; i++) {
	var button = document.createElement("button");
	button.innerHTML = "Delete";
	listItems[i].append(button);
	listItems[i].addEventListener("click", togglefunc);
	listItems[i].childNodes[1].addEventListener("click", deletelist);
}