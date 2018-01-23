	var degrees = 0;
	var $j_object;
	var wheelValues = []; //vaues user inputted to the wheels fields
	var numSpinTimes = 1; //how many times the wheel spun; how manny inputed values
	var recievedParams //budget items(fields) chosen 
	var curIteration = 0; //keeps track of current number of calls to the 'addWheelValuesToForm' function to simulate iteration
	var numParams = 0;
	var purse = 0; //money_in goes in and spends on each iteration comes out
	var total = 0; //money_in

	// ** get params and output needed fields **
	$(document).ready(function() {    //DO I NEED TO THIS 1/2
		var array = [];
		var elements = $(); //stores the fields

		recievedParams =  $('.recievedParams').text(); //budget items(fields) chosen 
		numParams =  parseInt($('.numParams').text()); //the number of budget items chosen
		$j_object = $(".field"); //list of all page fields

		//remove all but first 3 fields (title, money in, week) 
		$j_object.each( function(i) {	 if(i > 2){ $(this).remove(); }    }); 

		//----rename allFields later its confussing

		//loop through all fileds to find the ones chosen by user
		for (var i = 0; i<$j_object.length; i++ ){
			var allFields = $($j_object[i], "label").text();
			if (recievedParams.toLowerCase().trim().indexOf(allFields.toLowerCase().trim()) >= 0){
				var hhl = $j_object[i];
				$(".fields").append(hhl.outerHTML);
			}
		}

		//-- make the form invisible, user interacts with wheel, wheel values put in this form and submitted--
		//$( ".fields" ).css("display", "none");

		//sets the focus on the first field ONE time if any keyboard input at all / remove styled cursor
		$( "body" ).one( "keypress", function() {
			$('#currentField1').focus(); 
			$('	.first').find('*').not('#currentField1').remove(); //remove flashing styled cursor
		});

	}); //DO I NEED TO THIS 2/2

	//spin the wheel
	function spinWheel(){ degrees+=120; $('.spinWheel').css('transform', 'rotate(' + degrees + 'deg)'); }

	function changeWheelFieldId(){

	}

	//+++++ check if enter is pressed in .spinWheel input then call spinWheel();
	$('.spinWheel').on("keypress", function(e) {
		
        if (e.keyCode == 13) {
        	var elemId = "#currentField" + numSpinTimes;
        	//alert(elemId);
        	var nextElemId = "#currentField" + (numSpinTimes + 1);
        	var value = $(elemId).val();
        	//alert(elemId + " has the value of: " + value );
            
            if (value == null || value == "" || value == " ") {	value = 0;	} //default value = 0
            //alert(value);
            wheelValues.push(value);
            spinWheel(); //spin wheel animation to next item (field)
            focusWheelItem(numSpinTimes); //blur the 2 wheel items not being used
            addWheelValuesToForm(wheelValues); //change title (of which field is now being filled) / add values to form

            //reset ids so only 3 fields are needed
            if (numSpinTimes == 3)  { numSpinTimes = 1; nextElemId = "#currentField" + 1; } //set back to 1 if its 3
            else { numSpinTimes = numSpinTimes + 1; } //increase to use to access the next input field it rotated to
            
            $(elemId).val("");	// reset the field value to blank
            $(nextElemId).focus();	// focus the cursor on the next field spinning around
            return false; // prevent the button click from happening
        }
	});

	// add the wheel values to the hidden form
	function addWheelValuesToForm(wheelValues){

		var input = $('.fields').find('input')[curIteration]; //get the input field for this call (like iteration, goes through 1by1)
		var theValue = wheelValues[curIteration];
		input.value = theValue; //put val from wheel to its corresponding field eg (title into title field)
		curIteration += 1;	//increase variable to keep track of number of calls this method gets  (to iterate through object)

		//--- display labels(field names) for wheel spins ---
		var label = $('.fields').find('div:nth-child('+(curIteration + 1)+')').text().trim(); //get the label (starts at index 2 					becasue first label is present in html and because this function runs after field has been used) ./ 	

		//if there is no more fields remove wheel
		if(!label){
			$('.spinWheel').hide();
			$('#submitBudgetBtn').removeClass("hidden");
		}

		var elem = $('#myBar')[0];

		$('#title').text(label); //change the title above wheel 

		if(curIteration == 2){
			purse = theValue;
			total = theValue;
			//updateProgressbar(0, theValue); add this func
		}//start retrieving values after 'week' 
		else if(curIteration == 3){
			$('#myBar').text("You have €" + purse);
			$('#barEnd').text("Out of: €" + purse);
			$('#myProgress').css("visibility", "visible");
		}
		else if(curIteration > 3){
			purse = purse - theValue;
			$('#myBar').text("You have €" + purse + " remaining");
			$('#barEnd').text("Out of: €" + total);
			var percentageOfPurseSpent = Math.floor(( (total - purse) / total) * 100);
			elem.style.width = percentageOfPurseSpent + '%'; 
			//get the total amount of money inputeed(spent) and 
			//updateProgressbar(0, theValue); add this func
		}
	}

//add code to 
//check if any letters are being pressed or any keyboard input to then autofocus field

$('#currentField1').click(function(){
	$('.first').find('*').not('#currentField1').remove(); //remove flashing styled cursor
});

//blurs the 2 wheel items (fields) that are not about to be used when animation spins it
function focusWheelItem(itemToFocus){
   	switch (itemToFocus) {
   		//if 1 -> hide 2 & 3 and show 1
	    case 1:
	    	$('.first').addClass( "blurWheelItem" );
	    	$('.second').addClass( "blurWheelItem" );
	    	$('.third').removeClass( "blurWheelItem" );
	        break;
	    //if 2 -> hide 1 & 3 and show 2
	    case 2:
	        $('.first').addClass( "blurWheelItem" );
	    	$('.third').addClass( "blurWheelItem" );
	    	$('.second').removeClass( "blurWheelItem" );
	        break;
	    //if 3 -> hide 1 & 2 and show 3
	    case 3:
	    	$('.second').addClass( "blurWheelItem" );
	        $('.first').removeClass( "blurWheelItem" );
	        break;
	}
}

