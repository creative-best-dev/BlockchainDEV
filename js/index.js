$(document).ready(function () {

	let hue = 350;
	let $run_skills = $(".skills-run");
	let $word = $(".word");
  
	$run_skills.on(
		"webkitAnimationIteration oanimationiteration msAnimationIteration animationiteration ",
		function () {
			let word = words[Math.floor(Math.random() * words.length)];
			$word.text(word);
	
			hue += 85;
			$run_skills.css("background-color", "hsl(" + hue + ", 100%, 85%, 40%)");
	  }
	);

	let move = 5;

	$("div").on(
		"webkitAnimationIteration oanimationiteration msAnimationIteration animationiteration ",
		function () {
		move += 25;
		$("body").css("background-position", "5% " + move + "px");
		}
	);
});
  
words = [
	"javascript", "немного php", "html", "css", "mysql", "git", "jquery", "веб-программирование", "ajax", "bootstrap", "react", "node.js", "js",
	"a little bit python", "adobe photoshop", "yii2", "английский язык", "работа в команде", "figma", "многозадачность", "web-дизайн",
];
  
// document.getElementById('moveToResume').onclick = function(e){

// 	document.getElementById("avatarPhoto").innerHTML="<img src='img/peeps-avatar_change.png' class='avatar-photo' alt='Аватар'/>";
// 	document.getElementById('resume').scrollIntoView();
// 	setTimeout(() => {  document.getElementById("avatarPhoto").innerHTML="<img src='img/PhotoAva.png' class='avatar-photo' alt='Аватар'/>";  }, 2000);

// 	return false; 
// }
  
// document.getElementById('moveToPortfolio').onclick = function(e){
	
// 	document.getElementById("avatarPhoto").innerHTML="<img src='img/peeps-avatar_change_2.png' class='avatar-photo' alt='Аватар'/>";
// 	document.getElementById('portfolio').scrollIntoView();
// 	setTimeout(() => {  document.getElementById("avatarPhoto").innerHTML="<img src='img/PhotoAva.png' class='avatar-photo' alt='Аватар'/>";  }, 2000);

// 	return false; 
// }

function openTheme(event, themeName) {

	if (event.currentTarget.className == "portfolio-theme-button active") {
		document.getElementById(themeName).style.display = "none";
		event.currentTarget.className = event.currentTarget.className.replace(" active", "");
		console.log(1);
	}
	else {
		document.getElementById(themeName).style.display = "block";
		event.currentTarget.className += " active";
	}
}
