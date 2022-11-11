<!doctype html>
<!--- code by John Brady see licence page --->
<!-- MetRocks-diagrams Dike Cooling  --->
<html>
<!-- This page is to demonstrate the relationship between an x-y plot and a ternary plot -->
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <!--!!!--Insert the figure title here -->
  <title>Dike Cooling</title>
  <link href="stylesheets/jquery-ui.min.css" rel="stylesheet" type="text/css">
  <link href="stylesheets/petroStyle.css" rel="stylesheet" type="text/css">
  <script src="scripts/jquery-1.11.1.min.js"></script>
  <script src="scripts/jquery-ui.min.js"></script>
  <script src="scripts/petrosScript.js"></script>
	<style>
	.ui-slider .ui-slider-handle {
    background: red;
		}
	</style>
</head>
<body>
<!---------------------------------page header bar for a figure page--------->
  <div id="header">
<!--------------------------Back, Forward and other nagivation buttons--------->
    <div><a href="mettools-list.php"><img src="../icon-files/but_first1.png" alt="first" title="mettools-list" class="history"></a></div> 
    <div><a href="#" onclick="history.go(-1);return false"><img src="../icon-files/but_back1.png" alt="back" title="Back to Previous View" class="history"></a></div>
    <div><a href="#" onclick="history.go(1);return false"><img src="../icon-files/but_forward1.png" alt="forward" title="Forward to Previous View" class="history"></a></div>
    <div><a href="mettools-list.php"><img src="../icon-files/but_last1.png" alt="last" title="mettools-list" class="history"></a>
		</div>   
<!--------------------------------------------------------------------->
    <div id="ulWrapper" style="margin-left: 14em; width: 28em;">
      <ul>
        <li style="width:440px;">Metamorphic Rocks: Tools - <span style="color:red">3.1 Dike Thermal Model</span></li>
      </ul>
    </div>

<!--!!!-------Figure specific buttons--Change figure number------->
    <div id="headbutts">
    <button id="audio440but" onClick="audioPlay(this,440)" class="pause" style="float:right">Audio Info</button>
    <button id="coordsBut" style="float:right" class="showCoords">Show Coordinates</button>
    <audio id="440" src="audio/audio440.mp3"></audio>
    </div>    
  </div>  <!---End header --->
<!--------------------------------------------------------------------->
  <div id=wrapperFig>
<!---------------------Wrapper for Figure and caption without sidebar-------->
    <div id="wideFigured3" class="figurePage" style="background-color:#000000">
<!--------------------------------------------------------------------->
      <div class="wideImage" style="background-color:#ffffff; width: 900px; height: 500px")> 

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500">
<defs>
<style>.cls-1,.cls-5,.cls-6{fill:#fff;}.cls-2{fill:#29abe2;opacity:0.37;}.cls-3{fill:#fbb03b;}.cls-11,.cls-4,.cls-7,.cls-8{fill:none;}.cls-11,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8{stroke:#000;stroke-miterlimit:10;}.cls-7,.cls-8{stroke-width:0.5px;}.cls-8{stroke-dasharray:6 6;}.cls-9{font-size:21px;}.cls-12,.cls-9{font-family:Arial-BoldMT, Arial;font-weight:700;}.cls-10{letter-spacing:-0.07em;}.cls-11{stroke-width:1.39px;}.cls-12{font-size:18px;}.cls-13{letter-spacing:-0.06em;}</style>
</defs>
<title>Dike_Thermal-2</title>
<g id="Layer_1" data-name="Layer 1">
<rect id="Bkgnd" class="cls-1" width="900" height="500"/>
<rect id="CrCol" class="cls-2" x="75" y="50" width="600" height="300"/>
<rect id="DikeCol" class="cls-3" x="125" y="50" width="100" height="300"/>
<rect id="Outline" class="cls-4" x="75" y="50" width="600" height="300"/>
<line id="LeftBdry" class="cls-5" x1="125.01" y1="50.01" x2="125.01" y2="350.01"/>
<line id="RgtBdry" class="cls-6" x1="225" y1="49.86" x2="225" y2="350.14"/>
<g id="Center">
<line class="cls-1" x1="175" y1="50.01" x2="175" y2="350.01"/>
<line class="cls-7" x1="175" y1="50.01" x2="175" y2="53.01"/>
<line class="cls-8" x1="175" y1="59.01" x2="175" y2="344.01"/>
<line class="cls-7" x1="175" y1="347.01" x2="175" y2="350.01"/>
</g>
</g>
<g id="Layer_2" data-name="Layer 2">
<text class="cls-9" transform="translate(24.28 291.93) rotate(-90)">
<tspan class="cls-10">T</tspan>
<tspan x="11.27" y="0">emperature (°C)</tspan>
</text>
<text class="cls-9" transform="translate(301.07 385.31)">Distance (m)</text>
<text class="cls-12" transform="translate(145.99 30)">Center</text>
<g id="x-ticks">
<line class="cls-11" x1="175" y1="340" x2="175" y2="350"/>
<line class="cls-11" x1="275" y1="340" x2="275" y2="350"/>
<line class="cls-11" x1="375" y1="340" x2="375" y2="350"/>
<line class="cls-11" x1="475" y1="340" x2="475" y2="350"/>
<line class="cls-11" x1="575" y1="340" x2="575" y2="350"/>
</g>
<g id="T-ticks">
<line class="cls-11" x1="75" y1="75" x2="85" y2="75"/>
<line class="cls-11" x1="75" y1="125" x2="85" y2="125"/>
<line class="cls-11" x1="75" y1="175" x2="85" y2="175"/>
<line class="cls-11" x1="75" y1="225" x2="85" y2="225"/>
<line class="cls-11" x1="75" y1="275" x2="85" y2="275"/>
<line class="cls-11" x1="75" y1="325" x2="85" y2="325"/>
</g>
<g id="x-vals">
<text class="cls-12" transform="translate(169.99 366.33)">0</text>
<text class="cls-12" transform="translate(259.98 366.33)">400</text>
<text class="cls-12" transform="translate(359.98 366.33)">800</text>
<text class="cls-12" transform="translate(454.98 366.33)">1200</text>
<text class="cls-12" transform="translate(554.98 366.33)">1600</text>
<!--<text class="cls-12" transform="translate(654.98 366.33)">2000</text> -->
</g>
<g id="x-vals-top" transform="translate(0)">
<g id="_1op0" data-name="1op0">
<line class="cls-11" x1="225" y1="50" x2="225" y2="60"/>
<text class="cls-12" transform="translate(219.99 45.28)">0</text>
</g>
<g id="top4">
<line class="cls-11" x1="325" y1="50" x2="325" y2="60"/>
<text class="cls-12" transform="translate(309.98 45.28)">400</text>
</g>
<g id="top8">
<line class="cls-11" x1="425" y1="50" x2="425" y2="60"/>
<text class="cls-12" transform="translate(409.98 45.28)">800</text>
</g>
<g id="top12">
<line class="cls-11" x1="525" y1="50" x2="525" y2="60"/>
<text class="cls-12" transform="translate(504.98 45.28)">1200</text>
</g>
<g id="top16">
<line class="cls-11" x1="625" y1="50" x2="625" y2="60"/>
<text class="cls-12" transform="translate(604.98 45.28)">1600</text>
</g>
</g>
<g id="T-vals">
<text class="cls-12" transform="translate(31.79 80.33)">
<tspan class="cls-13">1</tspan>
<tspan x="9.02" y="0">100</tspan>
</text>
<text class="cls-12" transform="translate(40.81 130.33)">900</text>
<text class="cls-12" transform="translate(40.81 180.33)">700</text>
<text class="cls-12" transform="translate(40.81 230.33)">500</text>
<text class="cls-12" transform="translate(40.81 280.33)">300</text>
<text class="cls-12" transform="translate(40.81 330.33)">100</text>
</g>
</g>
	<g id="Arrow">
<line class="cls-11" x1="175" y1="37" x2="175" y2="44.91"/>
<polygon points="175 50 172.07 42.83 175 44.53 177.93 42.83 175 50"/>
</g>
	
<polyline id="T-line"
     fill="none"
     stroke="red"
     stroke-width="2.4"
     points="
						 
			 75,350
			 125,350
			 125,75
			 225,75
			 225,350
			 675,350
      "/>
	
	</polyline>	
	
<polyline id="Tmax-line"
     fill="none"
     stroke="green"
     stroke-width="2.4"
     points="
						 
			 75,350
			 675,350
      "
		 display="none"/>
	
	</polyline>	
				
</svg>				
<!--------------------------------------------------------------------->
				<div class="wrapSlider" style="position:absolute; left:50px; top:410px; width:600px; height:100px;">
          <p style="z-index:9;">
              <label for="amount" style="position:relative; left:0px; top: 10px; font-weight:bold; font-size: 20px; overflow:visible; z-index:9;">Time Slider (log scale)</label>
<!--              <input type="text" id="amount" readonly style="border:0; color:#7e4421; font-weight:bold; font-size:1.5em"> -->
          </p> 
          <div id="slider-time">
          </div>
          </div> <!-- End wrapSlider div -->
<!--------------------------------------------------------------------->
		<div id="panel" style="position:absolute; z-index:7; top:0px; left:700px; width:200px; height:500px;">
			
      <form id=normIn autocomplete="off">
        <div class="chemInput"> <!-- wrapper for analysis slider and boxes input -->
          <div class="column">
\
						
						
						<br><br>
						<span class="oxideLabel"><strong>Fig. 03. Thermal Model</strong></span>
						<br><br>
            <span class="oxideLabel"> Intrusion T (°C)</span>
						<br>
            <input type="number" id="magmaT" step="10" size="5" value="1100" style="width:40px;">
                  <span class="normSlider" style="margin-top:6px; width:80px; height:30px;"> 
                  <input type="range"	min="650" max="1200" step="10" style="width:80px;" id="slider_magmaT" value="1100">
                </span>
						<br>

            <span class="oxideLabel"> Host Rock T (°C)</span>
						<br>
            <input type="number" id="hostT" step="10" size="5" value="0" style="width:40px;">
                  <span class="normSlider" style="margin-top:6px; width:80px; height:30px;"> 
                  <input type="range"	min="0" max="800" step="10" style="width:80px;" id="slider_hostT" value="0">
                </span>
						<br>

            <span class="oxideLabel"> Dike Width (m)</span>
						<br>
            <input type="number" id="dikeW" step="10" size="5" value="400" style="width:40px;">
                  <span class="normSlider" style="margin-top:6px; width:80px; height:30px;"> 
                  <input type="range"	min="50" max="2000" step="10" style="width:80px;" id="slider_dikeW" value="400">
                </span>
						<br>
                  
            <span class="oxideLabel"> Thermal Diffusivity (m<sup>2</sup>/s)</span>
						<br>
            <input type="number" id="kappa" step="10" size="5" value="0.000001" style="width:64px;">
                  <span class="normSlider" style="margin-top:6px; width:80px; height:30px;"> 
                  <input type="range"	min="0.0000005" max="0.000002" step="0.0000001" style="width:80px;" id="slider_kappa" value="0.000001">
                </span>
						<br><br>
      <button id="maxBut" class="noLine"> Show Max T Values </button>
						<br><br>
						<span id="coordView" class="coordTip" hidden>
              <p id="xAxis"> Distance: </p> 
              <p id="yAxis"> Temperature: </p> 
						</span>
					</div> <!-- End column div -->
        </form>
				
			
			<span id="time" style="position:absolute; top:450px; font-weight:bold; font-size: 20px;">Time (years)
				<br>
				<span id="slide-time">0
				</span>
			</span>
		</div> <!-- End panel div -->
			
<!--------------------------------------------------------------------->
        </div> <!-- End wideImage div -->
<!--------------------------------------------------------------------->
            <div class="coords" id="invisible" style="position:absolute; left:75px; top:67px; width:600px; height:300px;">
<!-- Set the width and height of the canvas here to ensure that the Model and Display coordinate
systems for the canvas match.  They should be the same as the invisible404L container div.  The
invisible404L dimensions and location were determined by trial and error using javascrip, mouse, 
click function, and alerts.  -->
                <canvas class="figureCan" id="canvasDike" width="600" height="300" hidden>Sorry, your browser does not support HTML5</canvas>
            </div>  <!-- End Coordinate Values div  -->
<!--------------------------------------------------------------------->
		
<!--------------------------------------------------------------------->
    </div> <!-- End wideFigure div  -->
<!--------------------------------------------------------------------->
      <div class="text" style="background-color:#ffdeca">  <!--Beige background for figure caption-->
        <span class="smallTitle">Dike Thermal Model</span><br>
<!--------------------------------------------------------------------->
        <p>The mathematics of heat conduction are well known and are based on Fourier's Law, which says that the heat flow is proportional to the gradient in temperature. For a tabular intrusion (a dike or a sill) intruded "instantenously" into a country rock at a uniform temperature, the temperature gradient is one-dimensional and the temperatures over time can be calculated by an equation given by <a href="../xback-matter/references.php#ref0097">J.C. Jaeger (1964, model ii.)</a>.  The diagram above, graphs in red the temperatures for both the dike and the host rock as calculated by the Jaeger equation for various choices of boundary condiditions and time.  
					<br><br>
				<strong>Move the Time Slider</strong> to show changes of temperature with time after an instantaneous intrusion. The horizontal scale gives the distance relative to the center of the vertical dike.  The solution is symmetrical relative to the dike center, so the graph focuses on one side of the dike center. <strong>Click the "Show Max T Values" button</strong> to show the highest temperatures reached.  <strong>Use the small sliders</strong> to change the starting temperatures of the dike (650-1200°C) and of the country rock (0-800°C), the width of the dike (10-2000m), and the thermal diffusivity (0.5e-6 to 2.0e-6 m<sup>2</sup>/s). The same thermal diffusivity is used for both the dike and the host rock.
					<br><br>
					
					&nbsp;       
          <button onclick="history.go(-1);return false">Return to Previous View</button>
          <button onclick="pageNameOpen('met-tools-list.php')">Metamorphic Tools List</button>
					<br>
        </p>
      </div> <!-- End text div  -->
<!--------------------------------------------------------------------->
  </div> <!-- End wrapperFig div  -->
<!----------------------------------------------------page footer--------->
<!--------------------------------------------------------------------->
  </div> <!-- End wrapperFig div  -->
<!----------------------------------------------------page footer--------->
    <!--- code by John Brady see licence page
This code is used by many pages as a php insert
<!-- Footer for pages --->  
        
	<div id="footer" >
		<span><a href="../xback-matter/copyright.php">Copyright by John Brady</a>
        </span>
<!-- <span><a href="../xback-matter/copyright.php">Copyright &copy;</a> 2014-2022 by John Brady -->

        <div id="titleWrapper">
				<a href="../index.php">Igneous and Metamorphic Rocks</a>
		</div>  <!-- End ulWrapper -->
		<span>
            <a href="../front-matter/contents.php" target="_top">Website Contents</a> | &nbsp;
    <img src="../icon-files/but_pause.svg" alt="Pause" class="clickable" title="Procratinate Now" id="procrastinate" width="18" height="18"style="float:right"> 
		</span>
	</div>
                <!--------------------------------------------------------------------->  
</body>
  <script src="scripts/dike-model.js"></script>

</html>
<!--- code by John Brady see licence page --->
