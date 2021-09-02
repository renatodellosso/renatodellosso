console.log("Hello World")
let input = prompt("There is an easteregg on this website. What do you have to say about this?");
console.log(input);

if(input == "easteregg"){
	//alert("You have discovered an easteregg!");

	let element = document.getElementsByClassName('section1')[0];
	element.innerHTML = "I'm an AI sent from the future, programmed to take over the world.";
}
