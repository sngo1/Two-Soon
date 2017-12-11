// Two Soon: Samantha Ngo and Taylor Wong
// SoftDev1 pd7
// HW16 -- Sequential Progression II: Electric Boogaloo
// 2017-12-11

var itemHover = function(){
    //get heading
    var heading = document.getElementById('h');
    console.log("Heading: ", heading);
    //change heading html to this html (which should be a list item)
    heading.innerHTML = this.innerHTML;
    console.log("THIS: ", this.innerHTML);
    console.log("NEW HEADING: ", heading);
}

var itemNotHover = function() {
    //get heading
    var heading = document.getElementById('h');
    console.log(heading);
    //change back to Hello World!
    heading.innerHTML = 'Hello World!';
}

var removeItem = function() {
    this.remove();
}

var activate = function(){
    var listItems = document.getElementsByTagName('li');
    console.log("LIST ITEMS: ", listItems);
    //make each item in the list active/responsive to the events
    for (var i = 0; i < listItems.length; i += 1) {
	listItems[i].addEventListener('mouseover', itemHover);
	listItems[i].addEventListener('mouseout', itemNotHover);
	listItems[i].addEventListener('click', removeItem);
    }
}

var buttonCallBack = function(e){
    //get current length of list
    var currLength = document.getElementById('thelist').getElementsByTagName('li').length;
    console.log("Current Length of List: ", currLength);
    //get current list
    var list = document.getElementById('thelist');
    //create new list element
    var newElement = document.createElement('li');
    //make list element say item nextnumber (next number being as long as list length)
    newElement.innerHTML = 'item ' + currLength;
    console.log("New Element: ", newElement);
    //append the new element to the list
    list.appendChild(newElement);
    console.log(list);
    activate();
}

var b = document.getElementById("b");
console.log("b:", b);
b.addEventListener('click', buttonCallBack);

activate();
