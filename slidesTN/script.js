
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 500;	// Time Between Switch
	 
// Image List
images[0] = "bg3.jpg";
images[1] = "bg4.jpg";
images[2] = "bg5.jpg";
images[3] = "bg6.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;