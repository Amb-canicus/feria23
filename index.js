var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var slideIndex1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8",
 "mySlides9", "mySlides10", "mySlides11", "mySlides12", "mySlides13", "mySlides14", "mySlides15", "mySlides16",
 "mySlides17", "mySlides18", "mySlides19", "mySlides20" , "mySlides21", "mySlides22", "mySlides23", "mySlides24", "mySlides25","mySlides26",
 "mySlides17", "mySlides18", "mySlides19", "mySlides20" , "mySlides21", "mySlides22", "mySlides23", "mySlides24", "mySlides25","mySlides26",
 "mySlides27","mySlides28", "mySlides29", "mySlides30", "mySlides31" , "mySlides32", "mySlides33", "mySlides34", "mySlides35", "mySlides36","mySlides37",]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);
showSlides(1, 11);
showSlides(1, 12);
showSlides(1, 13);
showSlides(1, 14);
showSlides(1, 15);
showSlides(1, 16);
showSlides(1, 17);
showSlides(1, 18);
showSlides(1, 19);
showSlides(1, 20);
showSlides(1, 21);
showSlides(1, 22);
showSlides(1, 23);
showSlides(1, 24);
showSlides(1, 25);
showSlides(1, 26);
showSlides(1, 27);
showSlides1(1, 28);
showSlides1(1, 29);
showSlides1(1, 30);
showSlides(1, 31);
showSlides(1, 32);
showSlides(1, 33);
showSlides(1, 34);
showSlides(1, 35);
showSlides(1, 36);
showSlides(1, 37);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  } 
  x[slideIndex[no] - 1].style.display = "block"; 
}
/**slide tienda 2 */


function plusSlides1(n, no) {
  showSlides1(slideIndex1[no] += n, no);
}

function showSlides1(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) { slideIndex1[no] = 1 }
  if (n < 1) { slideIndex1[no] = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex1[no] - 1].style.display = "block";
}

/*otro*/

document.getElementById('frente').style.opacity = 1;

/*FLIPPER*/
$(document).ready(function () {
  // set up hover panels
  // although this can be done without JavaScript, we've attached these events
  // because it causes the hover to be triggered when the element is tapped on a touch device
  $('.hover').hover(function () {
    $(this).addClass('flip');
  }, function () {
    $(this).removeClass('flip');
  });
});