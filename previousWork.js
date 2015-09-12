var count = 0;
var nQueens = 1;
var password = "javin-past-proj";

$(document).ready(function() {
	addNumbers();
});

function addNumbers(){
	var lst = 0;
	var lst2 = 0;
	var lst3 = 0;

	for(i = 1; i <= 118; i++){
		if(i != 118)
			lst = lst + i + "<br>";
		else if(i == 1)
			lst = i + "<br>";
		else
			lst = lst + i;
	}
	for(i = 1; i <= 44; i++){
		if(i != 44)
			lst2 = lst2 + i + "<br>";
		else if(i == 1)
			lst2 = i + "<br>";
		else
			lst2 = lst2 + i;
	}
	for(i = 1; i <= 62; i++){
		if(i != 62)
			lst3 = lst3 + i + "<br>";
		else if(i == 1)
			lst3 = i + "<br>";
		else
			lst3 = lst3 + i;
	}
	document.getElementById("numbers1").innerHTML = lst;
	document.getElementById("numbers2").innerHTML = lst2;
	document.getElementById("numbers3").innerHTML = lst3;
	document.getElementById("navName").style.fontSize = "25px";
	document.getElementById("navName").style.paddingTop = "16px";
	document.getElementById("navPrWork").style.fontSize = "15px";
	document.getElementById("navPrWork").style.paddingTop = "20px";
	document.getElementById("navAbout").style.fontSize = "15px";
	document.getElementById("navAbout").style.paddingTop = "20px";
	$("#codeSection1").slideUp();
	$("#codeSection2").slideUp();
	$("#codeSection3").slideUp();
}

function incorPass() {
	alert("Sorry wrong password, try again..");
}

$("#physDown").mousedown(function() {
	var pass = prompt("Please enter the password to download this file\nYou can get this password by contacting me!", "Put password here!");
	if(pass == password){
		console.log("correct password");
		window.location = "Physics Simulator.jar";
	}else{
		incorPass();
		console.log("incorrect password");
	}
});

$("#openNQueens").click(function() {
	if($("#codeSection1").is(":hidden")){
		$("#codeSection1").show("slow", function() {
			$("#b").scrollTop(3077);
		});
		$("#extraSpace").slideUp();
		//$('html, body, b').animate({scrollTop: 200}, 2000);
		var fieldNameElement = document.getElementById("openNQueens");
		fieldNameElement.innerHTML = "Hide";
	}else{
		$("#codeSection1").slideUp();
		var o2 = $("#codeSection2").is(":visible");
		var o3 = $("#codeSection3").is(":visible");
		if(o2 === false && o3 === false){
			$("#extraSpace").show("slow");
		}
		var fieldNameElement1 = document.getElementById("openNQueens");
		fieldNameElement1.innerHTML = "Show";
	}
});

$("#openSQueue").click(function() {
	if($("#codeSection2").is(":hidden")){
		var o4 = $("#codeSection1").is(":visible");
		var o5 = $("#codeSection3").is(":visible");
		$("#codeSection2").show("slow", function() {
			if(o4 === false && o5 === true){
				$("#b").scrollTop(3151);					
			}else{
				$("#b").scrollTop(3754);
			}
		});
		$("#extraSpace").slideUp();
		var fieldNameElement = document.getElementById("openSQueue");
		fieldNameElement.innerHTML = "Hide";
	}else{
		$("#codeSection2").slideUp();
		var o1 = $("#codeSection1").is(":visible");
		var o3 = $("#codeSection3").is(":visible");
		if(o1 === false && o3 === false){
			$("#extraSpace").show("slow");
		}
		var fieldNameElement2 = document.getElementById("openSQueue");
		fieldNameElement2.innerHTML = "Show";
	}
});

$("#openSudoku").click(function() {
	if($("#codeSection3").is(":hidden")){
		$("#codeSection3").show("slow", function() {
			$("#b").scrollTop(4233);
		});
		$("#extraSpace").slideUp();
		var fieldNameElement = document.getElementById("openSudoku");
		fieldNameElement.innerHTML = "Hide";
	}else{
		$("#codeSection3").slideUp();
		var o1 = $("#codeSection1").is(":visible");
		var o2 = $("#codeSection2").is(":visible");
		if(o1 === false && o2 === false){
			$("#extraSpace").show("slow");
		}
		var fieldNameElement3 = document.getElementById("openSudoku");
		fieldNameElement3.innerHTML = "Show";
	}
});

function scrollPosition(a){
		var o1 = $("#codeSection1").is(":visible");
		var o2 = $("#codeSection2").is(":visible");
		var o3 = $("#codeSection3").is(":visible");
		if(a == 1){
			if(o2 === false && o3 === false){
				return 3034;
			}if(o2 === true && o3 === false){
				return 3065;
			}if(o2 === true && o3 === true){
				return 3077;
			}if(o2 === false && o3 === true){
				return 3077;
			}
		}else if(a == 2){

		}else{

		}
}

$("body").keydown(function(e) {
  if(e.keyCode == 37) { // left
    console.log("scroll position: " + $("#b").scrollTop());
  }
});
