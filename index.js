var i= 0

function typeWriter(){
	var message = "Hello, I'm Teron Sampson.Your Friendly Neighborhood Web Developer. Welcome to my Portfolio Site!";
	if (i <= message.length){
		var text = message.substring(0,i);
		document.getElementById("type-writer").innerHTML = text;
		setTimeout("typeWriter()",50);
		i++;
	}
}

