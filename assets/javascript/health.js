$(document).ready(function () {

	//BMI calculator
	$("#bmiSubmit").on("click", function(event) {
		//adding the if statement for form validation. The number will be calculated only if an input was entered by the user.
		if ($("#bmiWeight").val().length > 0 && $("#bmiHeight").val().length > 0) {
				event.preventDefault();
				//grab the value from the input field and convert it into an integer
				var bmiWeight = parseInt($("#bmiWeight").val().trim());
				var bmiHeight = parseInt($("#bmiHeight").val().trim());
				//convert the height into meters
				bmiHeight = bmiHeight / 100;
				//the logic for the calculation
				var bmi = bmiWeight / (bmiHeight * bmiHeight);
				//testing
				console.log(bmi);
				//end up only with one decimal
				bmi = Math.round(bmi * 10) / 10;
				//write the result to the screen
				$("#bmiResult").val(bmi);
				//testing
				console.log(bmi);
		} else {
			$("#bmiWeight").css("border", "1px solid red");
			$("#bmiHeight").css("border", "1px solid red");
		}
	});

	// Body Fat % Calculator
	// -----------------------------------------------

	//Lean Body Mass Kg Calculator
	$("#leanMassSubmit").on("click", function(event) {
		//adding the if statement for form validation. The number will be calculated only if an input was entered by the user.
		if ($("#leanMassWeight").val().length > 0 && $("#fatPercentage").val().length > 0) {
			event.preventDefault();
			var leanMassWeight = parseInt($("#leanMassWeight").val().trim());
			var fatPercentage = parseInt($("#fatPercentage").val().trim());
			var leanMassKg = leanMassWeight - ((leanMassWeight * fatPercentage) / 100);
			leanMassKg = Math.round(leanMassKg * 10) / 10;
			console.log(leanMassKg);
			$("#leanMassResult").val(leanMassKg + " kilograms");
		} else {
			$("#leanMassWeight").css("border", "1px solid red");
			$("#fatPercentage").css("border", "1px solid red");
		}
	});

	//Maximum Heart Rate Calculator
	$("#maxHRSubmit").on("click", function(event) {
		//adding the if statement for form validation. The number will be calculated only if an input was entered by the user.
		if($("#maxHRage").val().length > 0 && $("#exerciseIntensity").val().length > 0) {
			event.preventDefault();
			var maxHrAge = parseInt($("#maxHRage").val().trim());
			var exerciseIntensity = parseInt($("#exerciseIntensity").val().trim());
			exerciseIntensity = exerciseIntensity / 100;
			var maxHR = (220 - maxHrAge) * exerciseIntensity;
			maxHR = Math.round(maxHR);
			console.log(maxHR);
			$("#maxHRresult").val(maxHR + " beats per minute");
		} else {
			$("#maxHRage").css("border", "1px solid red");
			$("#exerciseIntensity").css("border", "1px solid red");
		}
	});

	// Daily Caloric Intake Calculator
	// ----------------------------------------------


	// Protein RDA Calculator
	// ----------------------------------------------

});