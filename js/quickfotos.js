//var slideIndex = 1;
//showSlides(slideIndex);
//ofwel de 2 hierboven, dan zelf klikken, ofwel de 2 lijnen hieronder, dan automatisch afspelen
var slideIndex = 0;
showSlidesAutomaticQuick();

// Next/previous controls
function plusSlidesQ(n) {
  showSlidesQ(slideIndex += n);
}

// Thumbnail image controls
function currentSlideQ(n) {
  showSlidesQ(slideIndex = n);
}

function showSlidesQ(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesQuick");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("captionQ");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if(slideIndex-1 >= 0){
	slides[slideIndex-1].style.display = "block";
  }

}

function showSlidesAutomaticQuick() {
    var i;
    var slides = document.querySelectorAll(".mySlidesQuick");
	var captionText = document.getElementById("captionQ");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
		captionText=slides[i].alt;
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
	try{
		slides[slideIndex-1].style.display = "block";
	}catch(e){}	
    setTimeout(showSlidesAutomaticQuick, 2000); // Change image every 2 seconds
}