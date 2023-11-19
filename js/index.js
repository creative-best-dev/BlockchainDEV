// $(document).ready(function () {

// 	let hue = 350;
// 	// cache the jquery elements to prevent dom queries during the animation events
// 	let $run_skills = $(".skills-run");
// 	let $word = $(".word");
// 	let $header = $("header");
  
// 	// when the animation iterates
// 	$run_skills.on(
// 		"webkitAnimationIteration oanimationiteration msAnimationIteration animationiteration ",
// 		function () {
// 			// replace the header with a random word
// 			let word = words[Math.floor(Math.random() * words.length)];
// 			$word.text(word);
	
// 			// update the background color
// 			hue += 47;
// 			$run_skills.css("background-color", "hsl(" + hue + ", 100%, 20%, 20%)");
// 	  }
// 	);

// 	let move = 5;

// 	$("div").on(
// 		// "" + 1 + "" + 1 + "" + 1 + "" + 1 + "",
// 		"webkitAnimationIteration oanimationiteration msAnimationIteration animationiteration ",
// 		function () {
// 		move += 25;
// 		$header.css("background-position", "5% " + move + "px");
// 		$(".skills").css("background-position", "5% " + move + "px");
// 		$(".portfolio").css("background-position", "5% " + move + "px");
// 		$("footer").css("background-position", "5% " + move + "px");
// 		}
// 	);
// });
  
// words = [
// 	"javascript", "немного php", "html", "css", "mysql", "git", "jquery", "веб-программирование", "ajax", "bootstrap", "react", "node.js", "js",
// 	"a little bit python", "adobe photoshop", "yii2", "английский язык", "работа в команде", "figma", "многозадачность", "web-дизайн",
// ];
  
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