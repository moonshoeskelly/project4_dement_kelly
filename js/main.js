//Image Randomizer

var rand_int = Math.floor(Math.random() * 5);

var r_image = [
	"images/blue7.jpg",
	"images/blue10.jpg",
	"images/blue9.jpg",
	"images/blue8.jpg",
  "images/blue6.jpg"
],

	im = document.getElementById("bluerand");

im.src = r_image[rand_int];
