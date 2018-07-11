document.querySelector('.puzzle-0').addEventListener('click', function() {
	alert('Hello, World!');
	});

	document.querySelector('.puzzle-1').addEventListener('click', function() {
	alert('Hola, Mundia!');
	});

	document.querySelector('.puzzle-2').addEventListener('click', function() {
	document.querySelector('h1').textContent = "theMinorities";
	});

	document.querySelector('.puzzle-3').addEventListener('click', function() {
	document.querySelector('img').src="https://media.giphy.com/media/26BoElcdr7OiEHmfu/giphy.gif";
	});

	document.querySelector('.puzzle-4').addEventListener('click', function() {
	document.getElementById("myImage").style.visibility = "hidden";
	});

	document.querySelector('.puzzle-5').addEventListener('click', function() {
	document.getElementById("myImage").style.visibility ="visible";
	});

	document.querySelector('.puzzle-6-yellow').addEventListener('click', function() {
	document.querySelector("body").style.background="yellow";
	});

	document.querySelector('.puzzle-6-pink').addEventListener('click', function() {
	document.querySelector("body").style.background="pink";
	});

	document.querySelector('.puzzle-6-purple').addEventListener('click', function() {
	document.querySelector("body").style.background="purple";
	});

	document.querySelector('.puzzle-7').addEventListener('click', function() {
	document.querySelector("body").style.fontFamily ="comic Sans Ms";
	document.querySelector("body").style.color = "red";	
	});

	document.querySelector('.puzzle-8').addEventListener('click', function() {
	document.querySelector('a').href="https://google.com";
	document.querySelector('a').textContent="Go to Google";
	});

	// Challenge puzzles

	document.querySelector('.puzzle-9').addEventListener('click',function(){

	});	

	document.querySelector('.puzzle-10').addEventListener('click',function(){

	});

	document.querySelector('.puzzle-11').addEventListener('click',function(){
		document.querySelector('.whatever-i-want').innerHTML ="<img src='https://m1.fluidreview.com/media/assets/reviewrooms/gakko/logo/Gakko_Identity_01-RGB_Pos.png'>";
	});

	document.querySelector('.puzzle-12').addEventListener('click',function(){
		
	});

	document.querySelector('.puzzle-13').addEventListener('click', function() {
		document.querySelector('.ree').innerHTML="<h1>YEOO I LOST 140</h>";
	})

	document.querySelector('.puzzle-14').addEventListener('click',function(){

	});

	document.querySelector('.puzzle-15').addEventListener('click', function() {
		var color = prompt("enter your fav color");
		document.querySelector('body').style.background = color
	})