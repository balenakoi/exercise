
//EXO 1
// function button(){
//   document.getElementById("paragraphe").style.backgroundColor = "red";
// }

//EXO 2
// function button(){
//   var link = document.getElementById("google");
//   var x = link.attributes[0].value;
//   var y = link.attributes[1].value;
//   var z =  link.attributes[2].value;
//    var a =  link.attributes[3].value;
//
//   document.getElementById("p").innerHTML = x + y + z + a;
//
// }


//EXO 3
// function myFunction(){
//   document.getElementById("change").style.backgroundColor = "lightgrey";
//   document.getElementById("change").innerHTML = "bienvenue"
// }
// function normal(){
//   document.getElementById("change").style.backgroundColor = "white";
//   document.getElementById("change").innerHTML = "survolez moi"
// }


//EXO 4

// document.getElementById("date").addEventListener('click', startTime);
// function date(){
//   var date = new Date();
//   document.getElementById("date").innerHTML = date;
// }



// function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('date').innerHTML = today +
//     h + ":" + m + ":" + s;
//     var t = setTimeout(startTime, 500);
// }
// function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
// }


//EXO 5
// var minutesLabel = document.getElementById("minutes");
// var secondsLabel = document.getElementById("seconds");
// var totalSeconds = 0;
// setInterval(setTime, 1000);
//
// function setTime() {
//   ++totalSeconds;
//   secondsLabel.innerHTML = pad(totalSeconds % 60);
//   minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
// }
//
// function pad(val) {
//   var valString = val + "";
//   if (valString.length < 2) {
//     return "0" + valString;
//   } else {
//     return valString;
//   }
// }



//EXO 6
// document.getElementById("color").addEventListener('click', change);
//  var place = 0;
//
// function change() {
//     var colorList = ["blue","orange","black"];
//     document.getElementById("color").style.backgroundColor = colorList[place];
//     place++;
//     if (place === colorList.length) {
//       place = 0;
//     }
// }


//EXO 7
// document.getElementById("addCelles").addEventListener('click', newCelles);
//
// function newCelles(){
//   var table = document.getElementById("tableau");
//   var row = table.insertRow(2);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   cell1.innerHTML = "ligne3";
//   cell2.innerHTML = "linge3";
// }


//EXO 8
// var body = document.getElementsByTagName("body");
// var newDiv = document.createElement("div");
// body[0].appendChild(newDiv);
// var link = document.createElement("a");
// link.setAttribute("href", "#");
// link.setAttribute("target", "_blank");
// newDiv.appendChild(link);
// var img = document.createElement("img");
// img.setAttribute("src", "img/body.gif");
// img.setAttribute("alt", "image 1");
// link.appendChild(img);
// var p = document.createElement("p");
// link.appendChild(p);
// var node = document.createTextNode("description de l'image");
// p.appendChild(node);


//EXO 9
// var myArray = document.getElementsByClassName("images");
// var array = [];
//
// function addId(element){
//
//   array.push(element.id);
//
//   element.removeAttribute("onclick");
//   console.log(array);
//   if((array.length) === 3){
//     for(var i = 0; i < myArray.length; i++){
//       myArray[i].style.display = "none";
//     }
//     var paragraphe = document.createElement("p");
//     paragraphe.textContent = "Félicitations, vous avez cliqué sur les 3 images. Voici leurs id : " + array[0] + ", " + array[1] + " et " + array[2] + ".";
//     document.body.appendChild(paragraphe);
//   }
// }
//
// for (var i = 0; i < myArray.length; i++){
//   myArray[i].onclick = function functionName(){
//   addId(this);
//   }
// }




//EXO 10
// document.getElementById("button").addEventListener('click', changeDisplay);
// function changeDisplay() {
//   var paragraphe = document.getElementById("change");
//   var originalContent = paragraphe.innerHTML;
//   paragraphe.innerHTML = "le contenu a changé";
//   setTimeout(function() {
//     paragraphe.innerHTML = originalContent
//   }, 2000)
// }
