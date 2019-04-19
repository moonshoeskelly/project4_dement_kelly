//Leaving Page Popup

var ext_link = document.getElementById("external_link");
ext_link.addEventListener("click",
	function(event) {
		var is_sure = confirm("Are you Paw-sitively sure you want to leave?");
		if (is_sure === false) {
			event.preventDefault();
			alert("I knew you were just kitten!")
		}
	}, false
);

var ext_link = document.getElementById("external_link2");
ext_link.addEventListener("click",
	function(event) {
		var is_sure = confirm("Are you Paw-sitively sure you want to leave?");
		if (is_sure === false) {
			event.preventDefault();
			alert("I knew you were just kitten!")
		}
	}, false
);

var ext_link = document.getElementById("external_link3");
ext_link.addEventListener("click",
	function(event) {
		var is_sure = confirm("Are you Paw-sitively sure you want to leave?");
		if (is_sure === false) {
			event.preventDefault();
			alert("I knew you were just kitten!")
		}
	}, false
);
