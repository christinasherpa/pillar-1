/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

var arrayOfPosts = [];

function createPost() {
	var post = prompt("What's bothering you?");
  listOfPosts.unshift(post);
};
  
function listPosts() {
	var listOfPosts = "";
	for (var i = 0; i < arrayOfPosts.length; i++) {
  	listOfPosts += i + "<br>";
  return listOfPosts;
