// Two Soon: Samantha Ngo and Taylor Wong
// SoftDev1 pd7
// HW16 -- 
// 2017-12-08

var buttonCallBack = function(e){
    console.log("This is ...");
    console.log(e);
    console.log("This is THIS Object...");
    console.log(this);
}

var b = document.getElementById("b");
console.log("DOCUMENT: ", document);
console.log("Get Element by ID: ", b);
b.addEventListener('click', buttonCallBack);
