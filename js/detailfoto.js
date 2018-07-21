
function WhichDetail(x) {
	
	//x: 1= foto1 tonen, 2=foto2 tonen...
	if (x === undefined || x===null) {
          x = 0;
    }
	
    var slides = document.querySelectorAll(".photo");
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[x-1].style.display = "block";
}