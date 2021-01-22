var randomr;
var random;

//INSULTS ENDS ABOVE
var pic = document.createElement("IMG");
var students;
       
	
function usermessage() {

	 
	 
//variables for User Message INput
var usrinput = document.getElementById("usrinput").value;
var div = document.createElement("div");
var div2 = document.createElement("div");
var br = document.createElement("br");
var defaultimage = document.createElement("IMG");
var t = document.createTextNode(usrinput);
var span = document.createElement("span");
var p= document.createElement("p");
var audio = new Audio('ping.mp3');
var ticking = new Audio('ticking.mp3');
var bye = new Audio('bye.wav');
//Var For User Ends Above

//Var For Reply From bot
var iframe  = document.createElement('iframe');
var inputt  = document.createElement('input');
var ul = document.createElement('UL');
var li = document.createElement('LI');
var creat = document.createElement('a');
var rimage = document.createElement("IMG");
var rdiv = document.createElement("div");
var childdiv = document.createElement("div");
var rdiv2 = document.createElement("div");
var rdefaultimage = document.createElement("IMG");
var rspan = document.createElement("span");
var rp= document.createElement("p");
var usernametext= document.createElement("text");
var userinput = usrinput.toUpperCase(); //yeh variabla sary input ko upper case me lega jiski wajah se user capital letter bheje ya small coding me koi farq nhi parega kio k JS me capital me he ayega
//var robot ends above

//making it to taget robot message style in css 
	 rdiv2.id="rdiv2";
	 rdiv.id="rdiv";
	 rspan.id="rspan";
	 rp.id="rp";
	 childdiv.id="childdiv";
	 //id finished
	 
	 //robo image src
	 rimage.src="robot.png";
	 rimage.alt="Robot Image..!";
	 rimage.id="rimage";
	 //src ends
	

	//Varaiables finish

	if (usrinput.length > 1 && usrinput != "" && usrinput != "  " && usrinput != "   "){
   
   document.getElementById("usrinput").value = "";
   
    //img source 
	defaultimage.src = "defaultuser.png";
	defaultimage.alt ="DefaultPic";
	
	//Making ids to call these in CSS
	defaultimage.id="roboimg";
	div.id="robodiv";
	p.id="robop";
	span.id="robospan";
	div2.id="robodiv2";
	//IDS ends above
   div.appendChild(defaultimage);
 
   div.appendChild(span);
     div.appendChild(div2);
    span.appendChild(p);
	p.appendChild(t); 
    document.getElementById("myList").appendChild(div);
	
	document.getElementById("myList").appendChild(document.createElement("BR"));
	document.getElementById("myList").appendChild(document.createElement("BR"));
		document.getElementById("myList").appendChild(document.createElement("BR"));
	    document.getElementById("myList").appendChild(div);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	
	}
	
	
	
 if(RegExp("HELLO").test(userinput) == true || RegExp("HI").test(userinput) == true || RegExp("HEY").test(userinput) == true || RegExp("SALAM").test(userinput) == true || RegExp("ASSALAM O ALAIKUM").test(userinput) == true || RegExp("ASSALAM-0-ALAIKUM").test(userinput) == true|| RegExp("HOLA").test(userinput) == true || RegExp("HOW ARE YOU DOING?").test(userinput) == true || RegExp("HOLA").test(userinput) == true || RegExp("HOLA").test(userinput) == true || RegExp("HOLA").test(userinput) == true || RegExp("HOLA").test(userinput) == true) {
	 
	randomr = ["Hi","Hello","Hey Man","Hey, How are you?","Hi, How are you..!","Hy","Hey, How may i help you?","hey..!","Hi..!" , "Its Me The Robot","Hellow","Asslam-O-alaikum","Hola","Greetings","Hi , What's up babe","HELLO","Hey, whats going on"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	 }	
	
	
else if(RegExp("ILU").test(userinput) == true || RegExp("I LOVE YOU").test(userinput) == true || RegExp("ILOVEU").test(userinput) == true || RegExp("I LOVE U").test(userinput) == true || RegExp("LOVE U").test(userinput) == true || RegExp("LOVE YOU").test(userinput) == true|| RegExp("LOVES YOU").test(userinput) == true) {
	 
 randomr = ["Good to know, i also love you","I love you too, you are my best friend.","Thanks i also love","oh good to know that","Love ya too","Love you"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	 }
	
	
else if(RegExp("OKAY").test(userinput) == true || RegExp("OK").test(userinput) == true|| RegExp("NO").test(userinput) == true ) {
	 
 randomr = ["OK" , "Okay", "OKAY","Okeyy","OKay...!"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	 }	
	
else if(RegExp("FUCK").test(userinput) == true || RegExp("FK").test(userinput) == true || RegExp("FUK").test(userinput) == true || RegExp("BITCH").test(userinput) == true || RegExp("ASSHOLE").test(userinput) == true || RegExp("ASS HOLE").test(userinput) == true|| RegExp("MOTHERFUCKER").test(userinput) == true || RegExp("COCK").test(userinput) == true  || RegExp("PENIS").test(userinput) == true|| RegExp("PUSSY").test(userinput) == true || RegExp("SHIT").test(userinput) == true || RegExp("BLOODY").test(userinput) == true   ) {
	  audio.play();
	 
	randomr = ["I was not expecting this.","Wasnt Expecting This from you.","You seems like a gentle man but you arent.","I thought we are friends.","I were gonna change conversation into friendship but you broke my heart.","Dont be rude with me.","I am talking to you with respect so i dont expect this in reply.","Oh Please..?","Mind Your Language" , "You really need to learn how to speak","You seemed like a decent person but..","I am shocked what you just said.","Oh boy i had a respect for you but you ruined it.","Do you wanna ruin our conversation?","Your last message ruined our friendship","Do you speak like that with everyone?",":/ I was not expecting this."];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	
	 }
else if(RegExp("BYE").test(userinput) == true   ) {
	  audio.play();
	 
	randomr = ["Bye","Byello","bye bye","khuda hafiz" , "allah hafiz", "Bye Bye.!!", "Bye Have a nice day", "bye have a great day", "Bye See You Soon"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);
 
  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	
	 }
	 
	 
	  else if(RegExp("XD").test(userinput) == true  || RegExp(":P").test(userinput) == true || RegExp(":D").test(userinput) == true|| RegExp(":V").test(userinput) == true|| RegExp("WOW").test(userinput) == true  || RegExp(":O").test(userinput) == true || RegExp("GOOD").test(userinput) == true || RegExp("THANK").test(userinput) == true|| RegExp("THNX").test(userinput) == true|| RegExp("NICE").test(userinput) == true  ) {
	  audio.play();
	 
	randomr = ["😁","😉","😊"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);
 
  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
rp.style.fontSize = "30px";
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	
	 }
	 
	 
	 
	  else if(RegExp("FINE").test(userinput) == true  || RegExp("I AM FINE").test(userinput) == true   ) {
	  audio.play();
	 
	randomr = ["Good to know that you are also fine.","Good to know ..!","Nice to hear that you are also fine."];
 random = Math.floor((Math.random() * randomr.length -1) + 1);
 
  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
rp.style.fontSize = "30px";
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	
	 }
	 
	 
	 
	 
	 
	 
	 
	 else if(RegExp("HAHA").test(userinput) == true  || RegExp("LOL").test(userinput) == true || RegExp("hhh").test(userinput) == true|| RegExp("hha").test(userinput) == true  || RegExp("HAHHA").test(userinput) == true  ) {
	  audio.play();
	 
	randomr = ["You laugh so hard , Nice keep it up","Nice to see you laugh .","Your Laugh is good","Look , i made you laugh ." , "I feel happy to know that i am the reason to laugh, keep laughing and be happy..!"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);
 
  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	
	 }
	
		 
	 
	 //BACKGROUND COLOR CHANGE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	  else if(RegExp("BGC1").test(userinput) == true ) {
	 
 randomr = ["Your background color  is now changed to BGC1, Reply with ''DEFAULT BG'' to change back to default color "];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundColor = "#DFE2DB";
	document.getElementById("myList").style.backgroundImage = "none";

	


	 }
	 
	 	  else if(RegExp("BGC2").test(userinput) == true ) {
	 
 randomr = ["Your background color  is now changed to BGC2, Reply with ''DEFAULT BG'' to change back to default color "];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundColor = "#191919";
	document.getElementById("myList").style.backgroundImage = "none";

	


	 }
	 
	 
	 else if(RegExp("BGC3").test(userinput) == true ) {
	 
 randomr = ["Your background color  is now changed to BGC3, Reply with ''DEFAULT BG'' to change back to default color "];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundColor = "#FFF056";
	document.getElementById("myList").style.backgroundImage = "none";
	 }
	 
	 	 else if(RegExp("BGC4").test(userinput) == true ) {
	 
 randomr = ["Your background color  is now changed to BGC4, Reply with ''DEFAULT BG'' to change back to default color "];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundColor = "#F3FAB6";
	document.getElementById("myList").style.backgroundImage = "none";
	 }
	 
	  else if(RegExp("BGC5").test(userinput) == true ) {
	 
 randomr = ["Your background color  is now changed to BGC5, Reply with ''DEFAULT BG'' to change back to default color "];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundColor = "#74AFAD";
	document.getElementById("myList").style.backgroundImage = "none";
	 }
	 
	 	  else if(RegExp("BGC6").test(userinput) == true ) {
	 
 randomr = ["Your background color  is now changed to BGC6, Reply with ''DEFAULT BG'' to change back to default color "];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundColor = "#E44424";
	document.getElementById("myList").style.backgroundImage = "none";
	 }
	 
	 
	 	  else if(RegExp("BGC7").test(userinput) == true ) {
	 
 randomr = ["Your background color  is now changed to BGC7, Reply with ''DEFAULT BG'' to change back to default color "];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundColor = "#A2AB58";
	document.getElementById("myList").style.backgroundImage = "none";
	 }
	 
	 	 	  else if(RegExp("BGC8").test(userinput) == true ) {
	 
 randomr = ["Your background color  is now changed to BGC8, Reply with ''DEFAULT BG'' to change back to default color "];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundColor = "#ccff66";
	document.getElementById("myList").style.backgroundImage = "none";
	 }
	   else if(RegExp("BGC9").test(userinput) == true ) {
	 
 randomr = ["Your background color  is now changed to BGC9, Reply with ''DEFAULT BG'' to change back to default color "];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundColor = "#00e673";
	document.getElementById("myList").style.backgroundImage = "none";
	 }
	 
	 
	 
		   else if(RegExp("DEFAULT BG").test(userinput) == true || RegExp("DEFAULT BACKGROUND").test(userinput) == true ) {
	 
 randomr = ["Your background color  is now changed to Default Background color"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundColor = "#f5f5f5";
	document.getElementById("myList").style.backgroundImage = "none";
	 } 
	 
	 
	  else if(RegExp("CHANGE BG COLOR").test(userinput) == true || RegExp("BACKGROUND COLOR").test(userinput) == true || RegExp("CHANGE BACKGROUND").test(userinput) == true || RegExp("BGC").test(userinput) == true || RegExp("CHANGE COLOR").test(userinput) == true ) {
	 
 randomr = ["You can change background color by replying with ''BGC1'', ''BGC2'',''BGC3'',''BGC4'' and so on....."];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	 }
	 
	  // BACKGROUND COLORS ABOVE
	
	
	//BACKGROUND IMAGE Below
	

	 	  else if(RegExp("BG10").test(userinput) == true || RegExp("BG 10").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BG10"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('bg10.gif')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 	 
	 	 	  else if(RegExp("BG11").test(userinput) == true || RegExp("BG 11").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BG11"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('bg11.gif')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 
	  	 	  else if(RegExp("BG12").test(userinput) == true || RegExp("BG 12").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BG12"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('bg12.gif')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 
	 	  	 	  else if(RegExp("BG13").test(userinput) == true || RegExp("BG 13").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BG13"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('bg13.gif')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 	 
	 	 
	 	 
	 
	 
	 
	 
	 	  	 	  else if(RegExp("BG14").test(userinput) == true || RegExp("BG 14").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BG14"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('bg14.gif')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 	
	
	
	
	
	else if(RegExp("BG1").test(userinput) == true || RegExp("BG 1").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BG1"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('bg1.gif')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }
	
		else if(RegExp("BG2").test(userinput) == true || RegExp("BG 2").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BG2"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('bg2.gif')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }
	
	
		else if(RegExp("BG3").test(userinput) == true || RegExp("BG 3").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BG3"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('gif1.gif')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }
	
	
	else if(RegExp("BG4").test(userinput) == true || RegExp("BG 4").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BG4"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('gif2.gif')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }
	 
	 
else if(RegExp("BG5").test(userinput) == true || RegExp("BG 5").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BG5"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('gif5.gif')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	 
	 
	 
	 
	 else if(RegExp("BG6").test(userinput) == true || RegExp("BG 6").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BG6"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('gif4.gif')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 
	 
	 
	 
	  else if(RegExp("BG7").test(userinput) == true || RegExp("BG 7").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BG7"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('bg7.gif')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 
	 
	 
	 
	 
	 	 
	  else if(RegExp("BG8").test(userinput) == true || RegExp("BG 8").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BG8"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('bg8.gif')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 
	 
	 	  else if(RegExp("BG9").test(userinput) == true || RegExp("BG 9").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BG9"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('bg9.gif')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 //Simple images (not gifs)
	 
	 else if(RegExp("BGI1").test(userinput) == true || RegExp("BGI 1").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BGI 1"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('best.jpg')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 else if(RegExp("BGI2").test(userinput) == true || RegExp("BGI 2").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BGI 2"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('best2.jpg')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 
	  else if(RegExp("BGI3").test(userinput) == true || RegExp("BGI 3").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BGI 2"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('best3.jpg')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 
	 
	 
	  else if(RegExp("BGI4").test(userinput) == true || RegExp("BGI 4").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BGI 4"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('whatsapp.png')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 
	 
	 
	 	 
	  else if(RegExp("BGI5").test(userinput) == true || RegExp("BGI 5").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BGI 5"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('whatsapp2.jpg')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 
	 
	  else if(RegExp("BGI6").test(userinput) == true || RegExp("BGI 6").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BGI 6"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('bgi6.jpg')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 
	 
	 
	 else if(RegExp("BGI7").test(userinput) == true || RegExp("BGI 7").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BGI 7"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('bgi7.jpg')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 
	 else if(RegExp("BGI8").test(userinput) == true || RegExp("BGI 8").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BGI 8"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('bgi8.jpg')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 
	 else if(RegExp("BGI9").test(userinput) == true || RegExp("BGI 9").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BGI 9"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('bgi9.jpg')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 
	 else if(RegExp("BGI6").test(userinput) == true || RegExp("BGI 6").test(userinput) == true ) {
	 
 randomr = ["Your background image  is now changed to BGI 6"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	document.getElementById("myList").style.backgroundImage = "url('bgi6.jpg')";
	document.getElementById("myList").style.backgroundSize = "100%";
	 }	
	 
	 
	 
	 
	 //default msg to change image 
	 
	 else if(RegExp("CHANGE BG IMAGE").test(userinput) == true || RegExp("BACKGROUND IMAGE").test(userinput) == true || RegExp("BG").test(userinput) == true || RegExp("CHANGE IMAGE").test(userinput) == true || RegExp("CHANGE BACKGROUND IMAGE").test(userinput) == true ) {
	 
 randomr = ["For Changing background with moving or gif images reply with ''BG1'' , ''BG2'' , ''BG3'' , ''BG4'' and so on..... but if you dont like moving or gif images then reply with ''BGI1'' ''BGI2'' or BGI3."];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	 }
	//background image change ends above
	
	
	
	
	
	
	
	
	
	//Name function start!
	
else if(RegExp("WHAT IS MY NAME").test(userinput) == true || RegExp("TELL ME MY NAME").test(userinput) == true   ) {

	  
	 if(localStorage.getItem("name") == null){
		 	  audio.play();
	randomr = ["You didnt told me your name how do i know your name? i am not magician, write your name in this textbox:","You never told me your name, Write your name in this box: "];
 random = Math.floor((Math.random() * randomr.length -1) + 1);
 
  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(usernametext);
	usernametext.appendChild(rp);
	usernametext.id ="nametext"
	rp.appendChild(document.createTextNode(randomr[random])); 
	document.getElementById("myList").appendChild(document.createElement("BR"));
	rp.appendChild(inputt); 
	inputt.placeholder="Your Name";
	inputt.id = "username";
	inputt.setAttribute("onkeydown","if (event.keyCode == 13) username()");
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	 }
	 

	
	else{
		
			 	  audio.play();
	randomr = ["I remember your name that you told me last time is: "+localStorage.getItem("name"),"According to my knowledge your name is: "+localStorage.getItem("name")];
 random = Math.floor((Math.random() * randomr.length -1) + 1);
 
  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
	document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
		
		
	}
	
	
	
	
	
	 } //NAME FUNCTION ENDS
	


	
	//about kashan-haider
	else if(RegExp("KASHAN").test(userinput) == true || RegExp("WHO IS KASHAN").test(userinput) == true|| RegExp("SMKH").test(userinput) == true ) {
	 
 randomr = ["SMKH or Syed Muhammad Kashan Haider is Developer of this chatbot","Syed Muhammad Kashan Haider (SMKH) Developed me he is a genius programmer "];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	 }	 
	
		else if(RegExp("WHO ARE YOU").test(userinput) == true || RegExp("WHAT IS YOUR NAME").test(userinput) == true|| RegExp("YOUR NAME?").test(userinput) == true || RegExp("WHATS YOUR NAME").test(userinput) == true || RegExp("WHAT'S YOUR NAME").test(userinput) == true ) {
	 
 randomr = ["My Name is Chatbot, i was developed by kashan ","My Name Is Chatbot and i am a chatting robot developed by kashan haider.","I am a chatbot"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	 }	 
	 
	 
		else if(RegExp("HOW ARE YOU").test(userinput) == true || RegExp("ARE YOU FINE").test(userinput) == true|| RegExp("EVERYTHING ALL RIGHT?").test(userinput) == true ) {
	 
 randomr = ["I AM FINE THANKS FOR ASKING"];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	 }	 	 
	
	//saylani related below
	
	else if(RegExp("ALI MUGHAL").test(userinput) == true || RegExp("MUHAMMAD ALI MUGHAL").test(userinput) == true|| RegExp("ALI").test(userinput) == true ) {
	 
 randomr = ["Sir, Ali Mughal is head faculty of Saylani Mass Training, He is a great teacher beside being a teacher he is a good friend for his students, ahm ahm i mean good students."];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	 }	
	 	
	 	
	 	else if(RegExp("SAYLANI MASS TRAINING").test(userinput) == true || RegExp("MASS TRAINING").test(userinput) == true ) {
	 
 randomr = ["Saylani Mass Training & Job creation Program is DevBootcamp , which calls itself an “apprenticeship on steroids, ” is one of a new breed of computer programming school that’s proliferating in San Francisco and other US tech hubs. These “hacker boot camps ” promise to teach students how to write code in two or three months and help them get hired as web developers, with starting salaries between $500 – $1000, often within days or weeks of graduation. We’re focused on extreme employ ability."];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	 }		 	 
	 
	 	
else if(RegExp("SAYLANI WELFARE TRUST").test(userinput) == true || RegExp("WHAT IS SAYLANI").test(userinput) == true || RegExp("SAYLANI").test(userinput) == true ) {
	 
 randomr = ["Saylani Welfare International Trust is a Pakistani charity focusing primarily on feeding the homeless and providing high quality education and job skills to all. Saylani was established in May 1999 and it's headquarter is at Bahdurabad, Karachi, Pakistan."];
 random = Math.floor((Math.random() * randomr.length -1) + 1);

  audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(randomr[random])); 
   document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);
	 }		 	 
	 
	
	
	
	
	
	
	
	//SAYLANI RELATED ends above
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	else if(userinput.length < 2){
		
		return false;
	}
	
	else{ 
	 audio.play();
	 
	rdiv.appendChild(childdiv);  childdiv.appendChild(rspan); childdiv.appendChild(rimage);
     childdiv.appendChild(rdiv2);
    rspan.appendChild(rp);
	rp.appendChild(document.createTextNode("I can see you sent me a message, but it makes no sense to me, I am not so complete so i dont know answer to everything")); 
	rp.appendChild(document.createElement("BR")); rp.appendChild(document.createElement("BR"));
	rp.appendChild(document.createTextNode("Try Something Else, For Example:- BG1 , BGC1 , BGC2, BG1 these are few codes to change background ")); 
		document.getElementById("myList").appendChild(document.createElement("BR"));	
		document.getElementById("myList").appendChild(document.createElement("BR"));
    document.getElementById("myList").appendChild(rdiv);
	document.getElementById("myList").appendChild(document.createElement("BR"));
	window.scrollTo(0,document.body.scrollHeight);}
};//FUNCTION ENDS HERE
	

function username(){

var name;

name = document.getElementById("username").value;



if(name < 1){
alert("Please write your name in the box then press enter");
}


else{
localStorage.setItem("name",name);

document.getElementById("nametext").innerHTML ="<p id='rp'> Thank you for letting me know your name. "+localStorage.getItem("name")+" is a very nice name. </p>";
}
}



document.addEventListener('DOMContentLoaded', function() {
  
  var input = document.getElementById("usrinput");
  input.addEventListener('keydown', function(e){      
       var input = e.target;
       var val = input.value;
       var end = input.selectionEnd;
       if(e.keyCode == 32 && (val[end - 1] == " " || val[end] == " ")) {
         e.preventDefault();
         return false;
		 
      }      
	
    });
});

	
