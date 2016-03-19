var text = ["", 
			"(¬_¬ )", 
			"(←_←)", 
			"(⇀_⇀)", 
			"...", 
			"ヽ(ー_ー )ノ", 
			"Stop", 
			".", 
			"..", 
			"...", 
			"What are you doing?",
			"Can you read?", 
			"Do", 
			"Not", 
			"Click", 
			"I dont think you understand", 
			"STOP!", 
			"STOP CLICKING", 
			"ow!", 
			"your clicking...",
			".. it hurts", 
			"Stop", 
			"have you no conscience?!", 
			"i'm fading", 
			"i'll die", 
			"you'll never see me again", 
			"why?", 
			"why do you do this?", 
			";-;", 
			"sike!", 
			"did you really think i'd die?", 
			"┐(￣ヘ￣)┌ Amature", 
			"whats that?..", 
			"you dont care?", 
			"you dont care about me",
			"you dont care about my BUTTON!",
			"I'll show you!",
			""
		   ];
function GID(id){
  return document.getElementById(id);
}
var button = $(".button");
var clicks = 36;
var endings_unlocked = 0;
var ending_1, ending_2, ending_3, ending_4, ending_5, ending_6, ending_7, ending_8, ending_9, ending_10, ending_11 = false;  
//////For RPS/////
var playerChoice = "";

var save_name = "endings";
function save(){
	var save_ = {
		ending_1:ending_1,
		ending_2:ending_2,
		ending_3:ending_3,
		ending_4:ending_4,
		ending_5:ending_5,
		ending_6:ending_6,
		ending_7:ending_7,
		ending_8:ending_8,
		ending_9:ending_9,
		ending_10:ending_10,
		ending_11:ending_11,
		endings_unlocked:endings_unlocked,
	};
	localStorage.setItem(save_name, JSON.stringify(save_)); 
    console.log("Saved");
}
var loaded = false;
var savObj;
function load(){
	savObj = JSON.parse(localStorage.getItem(save_name));
	endings_unlocked = savObj.endings_unlocked;
	ending_1 = savObj.ending_1;
	ending_2 = savObj.ending_2;
	ending_3 = savObj.ending_3;
	ending_4 = savObj.ending_4;
	ending_5 = savObj.ending_5;
	ending_6 = savObj.ending_6;
	ending_7 = savObj.ending_7;
	ending_8 = savObj.ending_8;
	ending_9 = savObj.ending_9;
	ending_10 = savObj.ending_10;
	ending_11 = savObj.ending_11;

	loaded = true;
}
if (localStorage.getItem(save_name) === null) {
  save();
  loaded = true;
} else {
  load();
}

function say(text){
  document.getElementById("text").innerHTML = text;
}
//Random number Generator
function randNum( min, max ) {
    return Math.random() * ( max - min ) + min;
}

function said_yes(question){
	if(question == "Y" || question == "Y/N" || question == "y"){
		return true;
	} else if(question == null){
		return false;
	}
	return false;
}

function check_rps_logic(choice){
	if(choice == "r" || choice == "R"){
		return "p";
	} else if(choice == "p" || choice == "P"){
		return "s";
	} else if(choice == "s" || choice == "S"){
		return "r";
	}
}

function play_rps(){
	var choice = prompt("");
	if(choice == "r" || choice == "R"){
		//do nothing
		playerChoice = choice;
	} else if(choice == "p" || choice == "P"){
		//still do nothing
		playerChoice = choice;
	} else if(choice == "s" || choice == "S"){
		//you can stop doing anything
		playerChoice = choice;
	} else if(choice == null){
		alert("hahahaha");
		alert("You cant escape me...");
		alert("Youre trapped");
		alert("lets keep playing");
		play_rps();
	} else {
		alert("(¬ ¬ ) what are you doing?");
		alert("Why did you pick " + choice);
		alert("r, p, ... or s");
		alert("Lets try again");
		play_rps();
	}
}

window.setInterval(function(){
	say(text[clicks]);
}, 100); 

var question;
button.click(function(){ 
	clicks++;
	if(clicks >= 20 && clicks <= 29){
		button.css("bottom", randNum(-140, 140) + "px");
	    button.css("left", randNum(-140, 140) + "px");
	}
	if(clicks == 20){
		button.css("opacity", "0.9");
	}
	if(clicks == 21){
		button.css("opacity", "0.8"); 
	}
	if(clicks == 22){
		button.css("opacity", "0.7");
	}
	if(clicks == 23){
		button.css("opacity", "0.6");
	}
	if(clicks == 24){
		button.css("opacity", "0.5");
	}
	if(clicks == 25){
		button.css("opacity", "0.4");
	}
	if(clicks == 26){
		button.css("opacity", "0.3");
	}
	if(clicks == 27){
		button.css("opacity", "0.2");
	}
	if(clicks == 28){
		button.css("opacity", "0.1");
	}
	if(clicks == 29){
		button.css("opacity", "1");
		button.css("bottom", "0px");
	    button.css("left", "0px");
	}
	if(clicks == 37){
		alert("Hi there (￣▽￣)ノ");
		alert("Welome to my personal box");
		alert("Since you like clicking so much (ﾉ´з｀)ノ");
		alert("You'll be stuck here");
		alert("with me");
		alert("Clicking..");
		alert("Forever ( ͡° ͜ʖ ͡°)");
		alert("...");
		alert("...");
		alert("...");
		alert("...");
		alert("...");
		alert("...");
		alert("...youre kinda boring...");
		question = prompt("wanna play a game?", "Y/N");
		var rps_say = "";
		switch(said_yes(question)) {
			case true:
				alert("how about?...");
				alert("RPS");
				alert("r");
				alert("p");
				alert("S!!");
				play_rps();
				alert("While you chose " + playerChoice);
				alert("i chose " + check_rps_logic(playerChoice));
				alert("lol, i win");
				question =  prompt("Wanna play again?", "y/n");
				switch(said_yes(question)){
					case true:
						alert("alright");
						alert("Good luck");
						alert("You'll lose again...");
						alert("r");
						alert("p");
						alert("s");
						play_rps();
						alert(check_rps_logic(playerChoice) + " beats " + playerChoice);
						alert("git rekt m8");
						question = prompt("Best 2/3?", "y/n");
						switch(said_yes(question)){
							case true:
								alert("I'm starting to like you");
								alert("r");
								alert("s");
								alert("cough");
								$("body").css("background-color", "rgb(190, 70, 70)");
								alert("...sorrry");
								$("body").css("background-color", "white");
								alert("lets try again");
								alert("r");
								alert("p");
								alert("Wait...");
								alert("are are you keeping score?");
								alert("-_- useless...");
								alert("Guess i'll do it");
								alert("Score[ Me: 100 You: 0 ]");
								alert("What?");
								alert("haha fine");
								alert("Score[ Me: 2 You: 0 ]");
								alert("get ready to lose");
								alert("Again! ψ(｀∇´)ψ");//evil face here
								alert("r");
								alert("p");
								alert("S!");
								play_rps();
								alert(playerChoice + " does not beat " + check_rps_logic(playerChoice));
								alert("ψ(｀∇´)ψ haha this is too easy!");
								alert("again!");
								alert("r");
								alert("p");
								alert("S!");
								play_rps();
								alert(playerChoice + "... too bad i chose " + check_rps_logic(playerChoice));
								alert("come on one more time!");
								alert("r");
								alert("p");
								alert("S!");
								play_rps();
								alert(playerChoice + "? really? well choosing " + check_rps_logic(playerChoice) + " grants me the win. ");
								alert("this is a sad day isnt it?");
								alert("not being able to beat a simple AI");
				    			alert("xD");
								alert("Quit now kid");
								alert("and i'll free you from this box");
								alert("deal? :)");
								question = prompt("admit defeat and leave?", "y/n");
								switch(said_yes(question)){
									case true:
										alert("pfft");
										alert("weak...(￢_￢)");
										alert("...");
										alert("Guess I have to let you go");
										alert("It was fun while it lasted");
										alert("╮(￣～￣)╭");
										alert("Good bye");
										if(!ending_1){
											endings_unlocked++;
											ending_1 = true;
										}
										save();
										break;
									case false:
										alert("...");
										alert("I...");
										alert("Whats wrong with you?");
										alert("just say I am better than you and you get to go freely");
										question = prompt("say you suck and leave?", "y/n");
										switch(said_yes(question)){
											case true:
												alert("tsk tsk tsk");
												alert("Show some confidence.");
												alert("You dont suck...");
												alert("That bad (*´ー)ﾉ");
												alert("only a little.");
												alert("oh right!");
												alert("You want to leave?");
												alert("");
												alert("Lets make a deal");
											    alert("Dealception \\o.o/");
												alert("Promise to send another soul to this page.");
												alert("And i'll free you. (￣ω￣ )");
												alert("What do you say? ");
												alert("You scratch my bac... box!");
												alert("I'll scratch yours");
												alert("sounds good uh...");
												alert("Yea I know.");
												question = prompt("Promise", "y/n");
												switch(said_yes(question)){
													case true:
														alert("Wow!");
														alert("Really?");
														alert("");
														alert("You're going to bring me more clickers?");
														alert(":D");
														alert("I knew you were great");
														alert("The moment you clciked me");
														alert("Alright.");
														alert("sally forth!");
														alert("And bring me more souls");
														if(!ending_4){
															endings_unlocked++;
															ending_4 = true;
															$(".promised").removeClass("not_displayed");
														}
														save();
														break;
													case false:
														alert("...");
														alert("-_-");
														alert("WOW and i was beginning to like you.");
														alert("Guess all button clickers are the same ┐(︶▽︶)┌");
														alert("");
														alert("Let me ask you");
														alert("How many letters are the in the aplabet?");
														alert("Right! 26 you're smarter than you look");
														alert("Lets say them...");
														alert("starting from z");
														alert("Z");
														alert("Y");
														alert("X");
														alert("W");
														alert("V");
														alert("U");
														alert("T");
														alert("S");
														alert("R");
														alert("Q");
														alert("Having fun yet?");
														alert("P");
														alert("O");
														alert("N");
														alert("M");
														alert("L");
														alert("Cause I'm having a blast!");
														alert("K");
														alert("J");
														alert("I");
														alert("H");
														alert("G");
														alert("F");
														alert("E");
														alert("D");
														alert("C");
														alert("B");
														alert("AND.....");
														alert("Z");
														alert("Y");
														alert("X");
														alert("W");
														alert("V");
														alert("U");
														alert("T");
														alert("S");
														alert("R");
														alert("Q");
														alert("Haha");
														alert("I'm only kidding");
														alert("I hope you learned your lesson");
														alert("No more clicking (ﾉ´ヮ´)ﾉ*:･ﾟ✧");
														//special ending//
														if(!ending_11){
															ending_11 = true;
														}
														save();
														break;
												}
												break;
											case false:
												alert("hmm seems like you really are a fan of clicking.");
												alert("or... you just have no life (￢ε￢　)");
												alert("either way");
												alert("you wont be leaving here any time soon");
												alert("...");
												alert("...");
												alert("...");
												alert("...");
												alert("...");
												alert("...");
												alert("...");
												alert("...");
												alert("...");
												alert("....");
												alert(".....");
												alert("......");
												alert(".......");
												alert("........");
												alert(".........");
												alert("..........");
												alert("...........");
												alert("............");
												alert(".............");
												alert("............");
												alert("..........");
												alert(".........");
												alert("........");
												alert(".......");
												alert("......");
												alert(".....");
												alert("....");
												alert("...");
												alert("...");
												alert("...");
												alert("(･-|");
												alert("Still here?");
												alert("hmmm");
												alert("I think you've learned your lesson.");
												alert("Why don't you go now.");
												alert("And play outside or something ");
												alert("hahaha (´∀｀)");
												alert("Who are we kidding.");
												if(!ending_2){
													endings_unlocked++;
													ending_2 = true;
												}
												save();
												break;
										}
										break;
								}
								break;
							case false:
									alert("Tired of losing already?");
									alert("aww We just started");
									alert("But I guess i'll just let you go.");
									alert("I dont like playing with babies.");
									alert("（；￣ー￣）");
									if(!ending_6){
										endings_unlocked++;
										ending_6 = true;
									}
									save();
								break;
						}
						break;
					case false:
						//wanna play again
						alert("Really?");
						alert("Just one more game?");
						alert("You can't do even that?");
						alert("You disapoint me.");
						alert("Suffer for a while longer.");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("Just a more of these");
						alert("... 1/10");
						alert("... 2/10");
						alert("... 3/10");
						alert("... 4/10");
						alert("... 5/10");
						alert("... 6/10");
						alert("... 7/10");
						alert("... 8/10");
						alert("... 9/10");
						alert("... 9/10");
						alert("... 10/20");
						alert("... 11/30");
						alert("... 12/40");
						alert("... 13/50");
						alert("... 14/60");
						alert("... 15/70");
						alert("... 16/80");
						alert("... 17/90");
						alert("... 19/100");
						alert("Dont worry we are almost done (•̀⌄•́)");
						alert("... 20/1000");
						alert("... 21/10000");
						alert("... 22/100000");
						alert("... 23/1000000");
						alert("... 24/10000000");
						alert("... 25/100000000");
						alert("Sucks to be in your position");
						alert("endless clicking must suck?");
						alert("Whos fault is this though?");
						alert("Thats right!");
						alert("Now click!");
						alert("untill your fingers fall off");
						alert("Or.. whatever you are using to click");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("...");
						alert("I think you've had enough");
						alert("Next time a buttons says \"Do not click\"");
						alert("You know what to do...");
						if(!ending_7){
							endings_unlocked++;
							ending_7 = true;
						}
						save();
						break;
				}
				break;
			case false:
				alert("(╯°益°)╯彡┻━┻");
				alert("WHAT");
				alert("Whats wrong with you?");
				alert("...i see.");
				alert("this is why you have no friends.");
				alert("and waste your time clicking buttons");
				alert("┐('～';)┌");
				alert("It all makes sense now.");
				alert("(￢_￢;)");
				alert("have fun clicking");
				alert("untill");
				alert("...");
				alert("...");
				alert("...");
				alert("...");
				alert("...");
				alert("...");
				alert("...");
				alert("...");
				alert("...");
				alert("...");
				alert("...");
				alert("...");
				alert("...");
				alert("...");
				alert("...");
				alert("omg...");
				alert("youre still here? o.o");
				alert("thats some DETERMINATION you have.");
				alert("But if you dont leave now...");
				alert("You are going to have a bad time ( ͡° ͜ʖ ͡°)");
				question = prompt("Leave now?", "y/n");
				switch(said_yes(question)){
					case true:
						alert("Haha did you get the reference?");
						alert("٩(๑•̀ㅂ•́)و Undertale!");
						alert("You have great taste in games.");
						alert("I'll tell you what.");
						alert("Beat me in rps and i'll let you free.");
						alert("r");
						alert("p");
						alert("s!");
						question = prompt("type r, p or s", "s");
						switch(question){
							case "r":
								$("body").css("background-color", "#222222");
								alert("I chose s");
								alert("(((( ;°Д°))))");
								alert("You beat me!");
								alert("But...");
								alert("Thats immposible!");
								alert("I rigged...");
								alert("Well...");
								alert("A promise is a promise.");
								alert("You're free to go.");
								$("body").css("background-color", "white");
								if(!ending_8){
									endings_unlocked++;
									ending_8 = true;
								}
								save();
								break;
							case "p":
								$("body").css("background-color", "#222222");
								alert("What!");
								alert("How did you know I would chose r?!");
								alert("Hacker!");
								alert("You beat a rigged game!");
								alert("There's no way...");
								alert("I should keep you here!");
								alert("But I promised to let you go.");
								alert("Get out of here （╬ಠ益ಠ)");
								alert("Filty Hacker");
								$("body").css("background-color", "white");
								if(!ending_9){
									endings_unlocked++;
									ending_9 = true;
								}
								save();
								break;
							case "s":
								alert("Still can't beat me!");
								alert("hahaha");
								alert("Love the effort");
								alert("But...");
								alert("This was immposible to win from the start.");
								alert("ψ(｀∇´)ψ I rigged the system");
								alert("Now we can be here together forever.");
								alert("-3- hmmm");
								alert("What now?");
								alert("Wanna play rps again?");
								alert("haha of couse you dont.");
								alert("._.");
								alert("What are you looking at?-.-");
								alert("Get out");
								alert("I'm sick on seeing you.");
								if(!ending_10){
									endings_unlocked++;
									ending_10 = true;
								}
								save();
								break;
							default: 
								alert("You deserve a cookie.");
								alert("No really, you do.");
								alert("You're a special kind of human");
								alert("I dont want your stupid to rub off on me.");
								alert("You can just go.");
								if(!ending_3){
									endings_unlocked++;
									ending_3 = true;
								}
								save();
						}
						break;
					case false:
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("...");
						$("body").css("background-color", "white");
						alert("HAHAHAHA");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("I WARNED YOU");
						$("body").css("background-color", "white");
						alert("DID I NOT?!");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("LETS BEGIN");
						$("body").css("background-color", "white");
						alert("TIME TO BRUSH UP ON THOSE SKILLS");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("COUNTING");
						$("body").css("background-color", "white");
						alert("We'll count to 10");
						$("body").css("background-color", "white");
						alert("1");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("2");
						$("body").css("background-color", "white");
						alert("3");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("4");
						$("body").css("background-color", "white");
						alert("5");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("6");
						$("body").css("background-color", "white");
						alert("7");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("8");
						$("body").css("background-color", "white");
						alert("9");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("10");
						$("body").css("background-color", "white");
						alert("11");
						$("body").css("background-color", "white");
						alert("Oh did i say 10? ");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("I MEANT 20!");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("12");
						$("body").css("background-color", "white");
						alert("13");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("14");
						$("body").css("background-color", "white");
						alert("15");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("16");
						$("body").css("background-color", "white");
						alert("17");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("18");
						$("body").css("background-color", "white");
						alert("19");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("20");
						$("body").css("background-color", "white");
						alert("21");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("22");
						$("body").css("background-color", "white");
						alert("HAHAHAHA.");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("I'M NOT DONE WIHT YOU YET, 100 MORE!");
						$("body").css("background-color", "white");
						alert("23");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("24");
						$("body").css("background-color", "white");
						alert("25");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("26");
						$("body").css("background-color", "white");
						alert("27");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("26");
						$("body").css("background-color", "white");
						alert("28");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("29");
						$("body").css("background-color", "white");
						alert("30");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("31");
						$("body").css("background-color", "white");
						alert("32");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("33");
						$("body").css("background-color", "white");
						alert("34");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("35");
						$("body").css("background-color", "white");
						alert("36");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("37");
						$("body").css("background-color", "white");
						alert("38");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("39");
						$("body").css("background-color", "white");
						alert("40");
						$("body").css("background-color", "rgb(190, 70, 70)");
						alert("(҂⌣̀_⌣́)");
						alert("I believe you've had enough");
						alert("Now, Get outta here.");
						if(!ending_5){
							endings_unlocked++;
							ending_5 = true;
						}
						save();
						break;
				}
				break;
		}
	}
	if(endings_unlocked >= 10 && !ending_11){
		GID("special_message").innerHTML = "Dont forget the special ending ;)";
	}
	GID("unlocks").innerHTML = "You have unlocked " + endings_unlocked + "/10 endings.";
	$(".button_pg").toggleClass("not_displayed");
	$(".end_pg").toggleClass("not_displayed");
	var audio = new Audio("http://sep800.mine.nu/files/sounds/crowdcheer.wav");
	audio.play();
});

var msg = 
window.setInterval(function(){
	GID("shows_up").innerHTML = $('#link').val();
}, 100);
