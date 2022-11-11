// JavaScript Document

// JavaScript Document for petrology textbook by John Brady

			var kappa = 0.000001;//$( "#kappa");
			var T0 = 1100; //Initial temperature of igneous intrusion
			var Tcr = 0;  //Initial temperature of the country rock
      var Tval = 0; //Variable to hold a temperature value
      var Tpos = 0; //Variable to hold the graph position (px) of the T
      var Tmax = [0]; //Array to hold maximum temperatures for each x
		  var x0 = 175; //pixel position
			var xr = 0; //Distance to the right of the dike centerline (meters)
      var rgt_hold = 225;
      var deltaR = 0;
		  var xi = 1;//xr/d; //Normalized distance right of the centerline
		  var xb = 1;//xr/d; //Normalized distance to dike boundary
			var dikeWidth = 400; //Width in meters
			var d = dikeWidth/2; //Dike half-width
      var tao = 0;
      var tSec = 0;

      var k;
      for (k=0; k<=600; k++){
				Tmax[k] = 350;
			}


$(document).ready(function(){

//---------------------------slider to change T and image  
	$(function() {
		$( "#slider-time" ).slider({
		  orientation: "horizontal",
		  range: "min",
		  min: 0,
		  max: 6,  //log time to 1 million years
		  value: 0,
			step: 0.1,
		  animate: "slow",
		  slide: function( event, ui ) {
			var ta_log = ui.value; //log10 of time in years
			var ta = Math.pow(10,ta_log);
      ta = Math.round(ta);
		  $( "#slide-time" ).html(ta);	

			tSec = 3.15576e7*ta;
			tao = kappa*tSec/(Math.pow(d,2));
				
//x=0 is at 175px. x=2000 is at 675px. ==> 4 px/meter				
			
			var i;
			var j;
//			var Tpoints = "" +175+ "," +(50+(1200-(T0*erfVal(0,tao)))/4)+ "";
			var Tpoints = "";
			var newPoint = "";

			for (i=-100; i<=500; i++) {
				j=i+100;
				xi = i*1*4/d;
				Tval = (Tcr+(T0-Tcr)*erfVal(xi,tao));
				Tpos = (50+(1200-(Tval))/4);
				if (Tmax[j] > Tpos){
						Tmax[j] = Tpos;
						}
				newPoint = " " +(x0+i*1)+ "," +(Tpos)+ "";
				Tpoints = Tpoints.concat(newPoint); 
			}
				
			var TpointsMax = "";
			var newMaxPoint = "";

			for (i=-100; i<=500; i++) {
				j=i+100;
				newMaxPoint = " " +(x0+i*1)+ "," +(Tmax[j])+ "";
				TpointsMax = TpointsMax.concat(newMaxPoint); 
			}
				
				$( "#T-line" ).attr("points",Tpoints);
				$( "#Tmax-line" ).attr("points",TpointsMax);
			
			} //-End slide function---
  });	  //-End slider function-----------------------------------------------------

	});   //-End function

//----------------------Show/hide maximum temperatures with a button

		$("#maxBut").click(function(){
			if( $(this).attr("class") == "noLine") {
				$(this).removeClass("noLine");
				$(this).addClass("Line");
				$(this).html("Hide Max T Values");
				$("#Tmax-line").show();
			}
			else if( $(this).attr("class") == "Line") {
				$(this).removeClass("Line");
				$(this).addClass("noLine");
				$(this).html("Show Max T Values");
				$("#Tmax-line").hide();
			}
			return false;
	});  //End "#menu2 h3" click function
	
	
//-------------------------------------------------------------------------------------------
//--Turn on or off the coordinates display with a button

	$("#coordsBut").click(function() {
			
			if ($("#coordsBut").attr("class") == "showCoords") {
				$("#coordsBut").html("Hide Coords");
				$("#coordsBut").attr("class","hideCoords");
				$("#canvasDike").toggle();				
			} else {
				$("#coordsBut").html("Show Coordinates");
				$("#coordsBut").attr("class","showCoords");
				$("#canvasDike").toggle();				
			}
	}); //End Coordinates click function
//-------------------------------------------------------------------------------------------
	var canvas = $("#canvasDike");  
	var ctxDike = canvas.get(0).getContext("2d"); 

//Show mouse coordinates with text when you mouse over a graph

	$(".coords").hover(function(){	
		if ($("#coordsBut").attr("class") == "hideCoords"){
				$("#coordView").toggle();				
	}}, //End mouseenter part
	function(){		//mouse out, remove coodinate text
		if ($("#coordsBut").attr("class") == "hideCoords"){
				$("#coordView").toggle();				
        ctxDike.clearRect(0,0,600,300);  //Also clear canvas404 of any lines
		}
	});	//End mouseleave part, end hover() actions

//When the mouse is moved, calculate the graph coordinates.

	$(".coords").mousemove(function(event){
//get mouse page coordinates, convert to plot=canvas coordinates (subtract offset)
		var pagePosX = event.pageX //Mouse page coordinate X
		var pagePosY = event.pageY //Mouse page coordinate Y
		var offsetCan = $("#canvasDike").offset();  //Position of (0,0) of #canvas404L relative to page 
		var canPosX = pagePosX - offsetCan.left; //Mouse #canvas404L coordinate X
		var canPosY = pagePosY - offsetCan.top;  //Mouse #canvas404L coordinate Y

//Convert to Temp axis, correcting for zero position and graph offset for H2O-NaCl
    
			var tCelcius = Math.round((222-canPosY)*1200/300+308); 
			var distance = Math.round((canPosX)*2400/600-400); 
			var coordTipText = ["Distance: " + distance +  "m",
							"Temperature: "  + tCelcius + "Â°C"].join("<br>");
		

//Reset the coordinate text for the current mousemove position
		$(".coordTip").html(coordTipText);
		
//Draw X- and Y-cursor lines within the graph		
		ctxDike.clearRect(0,0,600,300); //Clear the previous lines
		ctxDike.beginPath();
		ctxDike.moveTo(canPosX, 0);
		ctxDike.lineTo(canPosX, 300);
		ctxDike.lineWidth = 0.5;
		ctxDike.strokeStyle="#FF0000";  //Make the lines red
		ctxDike.globalAlpha=1.0;			//Make the line opaque
		ctxDike.stroke();
		ctxDike.beginPath();
		ctxDike.moveTo(0, canPosY);
		ctxDike.lineTo(600, canPosY);
		ctxDike.lineWidth = 0.5;
		ctxDike.stroke();
					
	}); //End mousemove function
		
		
//--------------------------------------------------------------------------
}); //End ready functions()
//--------------------------------------------------------------------------
//Function to compute Jaeger 1964 Elementary Solution ii., error function part
function erfVal (x,t) { //x is xi, t is tao
	var sqrtTao = Math.sqrt(t);
	var Tr2 = 0.5*(erf2((x+1)/sqrtTao) - erf2((x-1)/sqrtTao));
//	console.log(T0,x,t,T0*Tr2,Tr2,x+1,x-1,sqrtTao,2*sqrtTao,((x-1)/(2*sqrtTao)),((x+1)/(2*sqrtTao)));
	return Tr2;
	
}
  
//--------------------------------------------------------------------------

function erf2(y) {
  // save the sign of y
  var sign = (y >= 0) ? 1 : -1;
  y = Math.abs(y);

  var a1 =  0.254829592;
  var a2 = -0.284496736;
  var a3 =  1.421413741;
  var a4 = -1.453152027;
  var a5 =  1.061405429;
  var p  =  0.3275911;

  var t = 1.0/(1.0 + p*y);
  var z = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-y * y);

  return sign * z; 
}


//---------------------------slider to change magmaT
	
  var slide_magmaT = document.getElementById("slider_magmaT");
	var magmaT_value = document.getElementById("magmaT");

  slide_magmaT.oninput = function() {
  magmaT_value.value = this.value;
	T0 = Number(this.value);
		redrawSVG();
  }
//---------------------------input to change magmaT
	
	magmaT_value.oninput = function(){
	slide_magmaT.value = this.value;
	T0 = Number(this.value);
		redrawSVG();
	}
	
//---------------------------slider to change hostT
	
  var slide_hostT = document.getElementById("slider_hostT");
	var hostT_value = document.getElementById("hostT");

  slide_hostT.oninput = function() {
  hostT_value.value = this.value;
	Tcr = Number(this.value);
		redrawSVG();
  }
//---------------------------input to change hostT
	
	hostT_value.oninput = function(){
	slide_hostT.value = this.value;
	Tcr = Number(this.value);
		redrawSVG();
	}
	
//---------------------------slider to change intrusion width
	
  var slide_dikeW = document.getElementById("slider_dikeW");
	var dikeW_value = document.getElementById("dikeW");
  var RgtBdry = document.getElementById("RgtBdry");
	var LftBdry = document.getElementById("LeftBdry");
  var DikeCol = document.getElementById("DikeCol");
  var topScale = document.getElementById("x-vals-top");
	var top16 = document.getElementById("top16");
	var top12 = document.getElementById("top12");
  var deltaRstring = "";
  var trans = "translate(";
  var endP = ")";
  var rgt;
  var lft;
  var width;

  slide_dikeW.oninput = function() {
  dikeW_value.value = this.value;
	width = Number(this.value);
		d=width/2;
		rgt = 175+d/4;
		if (rgt >= 275 ){
			top16.setAttribute("display", "none");
		}
		else {
			top16.setAttribute("display", "block");
		}
		if (rgt >= 375 ){
			top12.setAttribute("display", "none");
		}
		else {
			top12.setAttribute("display", "block");
		}
		deltaR = rgt - rgt_hold;
		deltaRstring = deltaR.toString();
		deltaRstring = trans.concat(deltaRstring);
		deltaRstring = deltaRstring.concat(endP);
		console.log(deltaRstring, rgt, rgt_hold);
		//rgt_hold = rgt;
		lft = 175-d/4;
		if (lft >= 75){
		  LftBdry.setAttribute("x1",lft);
		  LftBdry.setAttribute("x2",lft);
		}	
		else {
		  LftBdry.setAttribute("x1",75);
		  LftBdry.setAttribute("x2",75);
		}
		if (lft >= 75){
		  DikeCol.setAttribute("x",lft);
		  DikeCol.setAttribute("width",d/2);
		}	
		else {
		  DikeCol.setAttribute("x",75);
		  DikeCol.setAttribute("width",rgt-75);
		}
		RgtBdry.setAttribute("x1",rgt);
		RgtBdry.setAttribute("x2",rgt);
		
		topScale.setAttribute("transform",deltaRstring);
		redrawSVG();
  }
//---------------------------input to change intrusion width
	
	
	dikeW_value.oninput = function(){
	slide_dikeW.value = this.value;
	width = Number(this.value);
		d=width/2;
		rgt = 175+d/4;
		deltaR = rgt - rgt_hold;
		rgt_hold = rgt;
		lft = 175-d/4;
		if (lft >= 75){
		  LftBdry.setAttribute("x1",lft);
		  LftBdry.setAttribute("x2",lft);
		}	
		else {
		  LftBdry.setAttribute("x1",75);
		  LftBdry.setAttribute("x2",75);
		}
		if (lft >= 75){
		  DikeCol.setAttribute("x",lft);
		  DikeCol.setAttribute("width",d/2);
		}	
		else {
		  DikeCol.setAttribute("x",75);
		  DikeCol.setAttribute("width",rgt-75);
		}
		RgtBdry.setAttribute("x1",rgt);
		RgtBdry.setAttribute("x2",rgt);
		redrawSVG();
  }
	
//---------------------------slider to change diffusivity
	
  var kappaNum = document.getElementById("slider_kappa");
	var kappa_value = document.getElementById("kappa");

  kappaNum.oninput = function() {
  kappa_value.value = this.value;
	kappa = Number(this.value);
		redrawSVG();
  }
//---------------------------input to change diffusivity
	
	kappa_value.oninput = function(){
	kappaNum.value = this.value;
	kappa = Number(this.value);
		redrawSVG();
	}
	
//--------------------------------------------------------------------------
function redrawSVG(){
	
      for (k=0; k<=600; k++){
				Tmax[k] = 350;
			}
	
			var TpointsMax = "";
			$( "#Tmax-line" ).attr("points",TpointsMax);

	
			var g;
			var h;
//			var Tpoints = "" +175+ "," +(50+(1200-(T0*erfVal(0,tao)))/4)+ "";
			var Tpoints = "";
			var newPoint = "";
			tao = kappa*tSec/(Math.pow(d,2));


			for (g=-100; g<=500; g++) {
				h=g+100;
				xi = g*1*4/d;
				Tval = (Tcr+(T0-Tcr)*erfVal(xi,tao));
				if (Number.isNaN(Tval) ){
					Tval = Tcr+(T0-Tcr)/2;
				}
				Tpos = (50+(1200-(Tval))/4);
				if (Tmax[h] > Tpos){
						Tmax[h] = Tpos;
						}
				newPoint = " " +(x0+g*1)+ "," +(Tpos)+ "";
				Tpoints = Tpoints.concat(newPoint); 
				//console.log(Tpoints);
			}
	
				$( "#T-line" ).attr("points",Tpoints);
}

//---------Question q1-dike ----------------------------------------------------------------
	$("#q1-dike").bind("keypress", function (e) { //Prevent a return from submitting the answer
		if (e.keyCode == 13) { //keyCode 13 is the return key
			return false;
		}
	});
		
	$("#q1-dike-but").click(function() {  //Respond to question
		var nbr=$("#q1-dike-ans").val(); //Get the input number
		if (nbr <= 520 && nbr >= 480) {  //The answer should be 500
			$("#q1-dike-yfeedback").show(); //If the correct answer is chosen, open the yes feedback window
			$("#q2-dike-span").show(); //If the correct answer is chosen, open the yes feedback window
		}
		else {
			$("#q1-dike-nfeedback").show(); 
			$("#q1b-dike-span").show(); 
    }
  }); //End click function

//---------Question q1b-dike ----------------------------------------------------------------
	$("#q1b-dike").bind("keypress", function (e) { //Prevent a return from submitting the answer
		if (e.keyCode == 13) { //keyCode 13 is the return key
			return false;
		}
	});
		
	$("#q1b-dike-but").click(function() {  //Respond to question
		var nbr=$("#q1b-dike-ans").val(); //Get the input number
		if (nbr <= 520 && nbr >= 480) {  //The answer should be 500
			$("#q1b-dike-yfeedback").show(); //If the correct answer is chosen, open the yes feedback window
			$("#q2-dike-span").show(); //If the correct answer is chosen, open the yes feedback window
		}
		else {
			$("#q1b-dike-nfeedback").show(); 
			$("#q2-dike-span").show(); //If the correct answer is chosen, open the yes feedback window
			window.scrollTo (0,2000);  //Scroll down to show the added question
    }
  }); //End click function

//---------Question q2-dike ----------------------------------------------------------------
	$("#q2-dike").bind("keypress", function (e) { //Prevent a return from submitting the answer
		if (e.keyCode == 13) { //keyCode 13 is the return key
			return false;
		}
	});
		
	$("#q2-dike-but").click(function() {  //Respond to question
		var nbr=$("#q2-dike-ans").val(); //Get the input number
		if (nbr <= 320 && nbr >= 280) {  //The answer should be 300
			$("#q2-dike-yfeedback").show(); //If the correct answer is chosen, open the yes feedback window
			$("#q3-dike-span").show(); //If the correct answer is chosen, open the yes feedback window
		}
		else {
			$("#q2-dike-nfeedback").show(); 
			$("#q2b-dike-span").show(); 
    }
  }); //End click function

//---------Question q2b-dike ----------------------------------------------------------------
	$("#q2b-dike").bind("keypress", function (e) { //Prevent a return from submitting the answer
		if (e.keyCode == 13) { //keyCode 13 is the return key
			return false;
		}
	});
		
	$("#q2b-dike-but").click(function() {  //Respond to question
		var nbr=$("#q2b-dike-ans").val(); //Get the input number
		if (nbr <= 320 && nbr >= 280) {  //The answer should be 300
			$("#q2b-dike-yfeedback").show(); //If the correct answer is chosen, open the yes feedback window
			$("#q3-dike-span").show(); //If the correct answer is chosen, open the yes feedback window
		}
		else {
			$("#q2b-dike-nfeedback").show(); 
			$("#q3-dike-span").show(); //If the correct answer is chosen, open the yes feedback window
			window.scrollTo (0,2000);  //Scroll down to show the added question
    }
  }); //End click function

//---------Question q3-dike ----------------------------------------------------------------
	$("#q3-dike").bind("keypress", function (e) { //Prevent a return from submitting the answer
		if (e.keyCode == 13) { //keyCode 13 is the return key
			return false;
		}
	});
		
	$("#q3-dike-but").click(function() {  //Respond to question
		var nbr=$("#q3-dike-ans").val(); //Get the input number
		if (nbr <= 520 && nbr >= 480) {  //The answer should be 500
			$("#q3-dike-yfeedback").show(); //If the correct answer is chosen, open the yes feedback window
			$("#q4-dike-span").show(); //If the correct answer is chosen, open the yes feedback window
		}
		else {
			$("#q3-dike-nfeedback").show(); 
			$("#q3b-dike-span").show(); 
    }
  }); //End click function

//---------Question q3b-dike ----------------------------------------------------------------
	$("#q3b-dike").bind("keypress", function (e) { //Prevent a return from submitting the answer
		if (e.keyCode == 13) { //keyCode 13 is the return key
			return false;
		}
	});
		
	$("#q3b-dike-but").click(function() {  //Respond to question
		var nbr=$("#q3b-dike-ans").val(); //Get the input number
		if (nbr <= 520 && nbr >= 480) {  //The answer should be 500
			$("#q3b-dike-yfeedback").show(); //If the correct answer is chosen, open the yes feedback window
			$("#q4-dike-span").show(); //If the correct answer is chosen, open the yes feedback window
		}
		else {
			$("#q3b-dike-nfeedback").show(); 
			$("#q4-dike-span").show(); //If the correct answer is chosen, open the yes feedback window
			window.scrollTo (0,2000);  //Scroll down to show the added question
    }
  }); //End click function

//---------Question q4-dike ----------------------------------------------------------------
	$("#q4-dike").bind("keypress", function (e) { //Prevent a return from submitting the answer
		if (e.keyCode == 13) { //keyCode 13 is the return key
			return false;
		}
	});
		
	$("#q4-dike-but").click(function() {  //Respond to question
		var nbr=$("#q4-dike-ans").val(); //Get the input number
		if (nbr <= 770 && nbr >= 730) {  //The answer should be 500
			$("#q4-dike-yfeedback").show(); //If the correct answer is chosen, open the yes feedback window
			$("#q5-dike-span").show(); //If the correct answer is chosen, open the yes feedback window
		}
		else {
			$("#q4-dike-nfeedback").show(); 
			$("#q4b-dike-span").show(); 
    }
  }); //End click function

//---------Question q4b-dike ----------------------------------------------------------------
	$("#q4b-dike").bind("keypress", function (e) { //Prevent a return from submitting the answer
		if (e.keyCode == 13) { //keyCode 13 is the return key
			return false;
		}
	});
		
	$("#q4b-dike-but").click(function() {  //Respond to question
		var nbr=$("#q4b-dike-ans").val(); //Get the input number
		if (nbr <= 770 && nbr >= 730) {  //The answer should be 500
			$("#q4b-dike-yfeedback").show(); //If the correct answer is chosen, open the yes feedback window
			$("#q5-dike-span").show(); //If the correct answer is chosen, open the yes feedback window
		}
		else {
			$("#q4b-dike-nfeedback").show(); 
			$("#q5-dike-span").show(); //If the correct answer is chosen, open the yes feedback window
			window.scrollTo (0,2000);  //Scroll down to show the added question
    }
  }); //End click function

//----------Question q5-dike -----------------------------------------------------------------
	$("#q5-dike-but").click(function() {  //Respond to question 422
		var q5ans = $('input[name=q5-dike-ans]:checked', '#q5-dike').val();
		if (q5ans == "timeDown") {
			$("#q5-dike-yfeedback").show();
		}
		else {
			$("#q5-dike-nfeedback").show();
		}
			$("#q5-dike-done").show();
			$("#nextPage").show();
	}); //End click function


