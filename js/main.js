// Hamburger Functionality

function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");

	document.getElementById("menu-bg").classList.toggle("change-bg");
}

// About Us "View More" Functionality

const button = document.querySelector('#viewLess')

function ViewMore(){

	if (button.innerHTML == 'VIEW MORE') {

		document.getElementById("aboutUsStoryExtended").style.display = "block";

		button.innerHTML = 'VIEW LESS';
	} else {

		button.innerHTML = 'VIEW MORE';

		document.getElementById("aboutUsStoryExtended").style.display = "none";
	}

}
