$(document).ready(function () {

	var muscleName = ["Biceps", "Shoulder", "Ribs", "Chest", "Triceps", 
        					  "Abs", "Calves", "Glutes", "Trapezius", "Quads",
        					  "Hamstring", "Lats", "Brachialis", "Obliques", "Soleus"];

  var equipmentName = ["Barbell", "SZ-Bar", "Dumbbell", "Gym Mat", "None", 
                        "Pull-up Bar", "None", "Bench", "Incline Bench", 
                        "Kettlebell"];
  


	var muscle = "";
	var muscleIndex = 0;
	// wger API
	var baseURL = "https://wger.de/api/v2/exercise/?";
	var key = "d847f4de1299dad25a4bd31b15e5c5a3";
	var queryURLBefore = "https://wger.de/api/v2/exercise/?key=7984176e785d9a22346cacb2840d8ddb961748d3&language=2&muscles="; 
	var queryURL = "";

	


	$("#menu li a").on('click', function(){
	  event.preventDefault();
  	$('#muscleMenu').text($(this).text());

  	queryURL = "";

  	$("#exerciseSpace").empty();

  	muscle = $(this).text();
  	muscleIndex = parseInt(muscleName.indexOf(muscle)) + 1;

  	queryURL = queryURLBefore +muscleIndex;

    	
		console.log(queryURL);

		$.ajax({
			crossDomain: false,
	    	url: queryURL,
	    	method: "GET"
  		}).done(function(response) {
  			console.log(response);
  			
  			for (var i=0; i<Math.min(5, response.results.length); i++) {
  				var name = (response.results[i].name);
  				var des = (response.results[i].description);
          var secMuscles = response.results[i].muscles_secondary;
          var equipment = response.results[i].equipment;
          var idName = "exercise"+(i+1);

          // Display exercise info 
          // Below if is needed since some of the exercises have no description
          if (des) {
            $("#exerciseSpace").append("<button type='button' class='btn btn-info exercise-name' data-toggle='collapse' data-target='#"+idName+"'>"+name+"</button>");
            $("#exerciseSpace").append("<br><br>");
            $("#exerciseSpace").append("<div id="+idName+" class='collapse collapse-div'></div>");
            
            $("#"+idName).append("<h5 class='descHeader'>Description</h5><br>");
            $("#"+idName).append("<p>"+des+"</p><br>");

            
            if (secMuscles.length > 0) {
              $("#"+idName).append("<h5 class='descHeader'>Also works</h5><br>");
              for (var j=0; j<secMuscles.length; j++) {
                $("#"+idName).append("<p>"+muscleName[secMuscles[j]-1]+"</p>");
              }
            }

            if (equipment.length > 0) {
              $("#"+idName).append("<br><h5 class='descHeader'>Equipment</h5><br>");
              for (var j=0; j<equipment.length; j++) {
                $("#"+idName).append("<p>"+equipmentName[equipment[j]-1]+"</p>");
              }
            }
  			 } // if (des)
      }
  			
  	});

	});

  //toggle button function
  //saves the button itself as a variable and applies three data attribute
  var toggleBtn = $('.toggle.btn.btn-success');
  toggleBtn.attr("data-male", "assets/images/male-body.jpg");
  toggleBtn.attr("data-female", "assets/images/female-body.jpg");
  toggleBtn.attr("data-state", "male");

  $(toggleBtn).click(function (){

    var state = $(this).attr("data-state");
    //on click, if the data-state is male, change the image to the female image and change the data-state to female
    //if the data-state is female, change the image to male and the data-state to male
    if (state === "male"){
      $('#anatomy').attr("src", "assets/images/female-body.jpg");
      $(this).attr("data-state", "female");
    } else {
      $('#anatomy').attr("src", "assets/images/male-body.jpg");
      $(this).attr("data-state", "male");
    }

  });

});






