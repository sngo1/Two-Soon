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

var b = document.getElementById("b");
console.log("DOCUMENT: ", document);
console.log("Get Element by ID: ", b);
b.addEventListener('click', buttonCallBack);
