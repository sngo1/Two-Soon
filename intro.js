// Two Soon: Samantha Ngo and Taylor Wong
// SoftDev1 pd7
// HW16 --
// 2017-12-08

var buttonCallBack = function(e){
  //get current length of list
  var currLength = document.getElementById('thelist').getElementsByTagName('li').length;
  console.log(currLength);
  //get current list
  var list = document.getElementById('thelist');
  //create new list element
  var newElement = document.createElement('li');
  //make list element say item nextnumber (next number being as long as list length)
  newElement.innerHTML = 'item ' + currLength;
  console.log(newElement);
  //append the new element to the list
  list.appendChild(newElement);
  console.log(list);

}

var itemHover = function(){
  //get heading
  var heading = document.getElementById('h');
  console.log(heading);
  //change heading html to this html (which should be a list item)
  heading.innerHTML = this.innerHTML;
  console.log(heading);

}

var b = document.getElementById("b");
console.log("b:", b);
b.addEventListener('click', buttonCallBack);

//make each item in the list active/responsive to the events
var listItems = document.getElementsByTagName('li');
console.log(listItems);

for (var i = 0; i < listItems.length; i += 1) {
  listItems[i].addEventListener('mouseover', itemHover);

}
