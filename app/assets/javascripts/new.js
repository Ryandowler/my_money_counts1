	var degrees = 0;
	var $j_object;
	var wheelValues = []; //vaues user inputted to the wheels fields
	var numSpinTimes = 1; //how many times the wheel spun; how manny inputed values
	var recievedParams //budget items(fields) chosen 
	var curIteration = 0; //keeps track of current number of calls to the 'addWheelValuesToForm' function to simulate iteration
	var numParams = 0;
	var purse = 0; //money_in goes in and spends on each iteration comes out
	var total = 0; //money_in
	var first  = $('.first'); //item (field) on wheel
	var second = $('.second');//item (field) on wheel
	var third  = $('.third'); //item (field) on wheel

	// ** get params and output needed fields **
	$(document).ready(function() {    //DO I NEED TO THIS 1/2
		var array = [];
		var elements = $(); //stores the fields
		recievedParams =  $('.recievedParams').text(); //budget items(fields) chosen 
		numParams =  parseInt($('.numParams').text()); //the number of budget items chosen
		$j_object = $(".field"); //list of all page fields
		$j_object.each( function(i) {	 if(i > 2){ $(this).remove(); }}); //remove all but first 3 fields (title, money in, week) 

		//----rename allFields later its confussing & hh1(Change)

		//loop through all fileds to find the ones chosen by user
		for (var i = 0; i<$j_object.length; i++ ){
			var allFields = $($j_object[i], "label").text();
			if (recievedParams.toLowerCase().trim().indexOf(allFields.toLowerCase().trim()) >= 0){
				var hhl = $j_object[i];
				$(".fields").append(hhl.outerHTML);
			}
		}

		//sets the focus on the first field ONE time if any keyboard input at all / remove styled cursor
		$( "body" ).one( "keypress", function() {
			$('#currentField1').focus(); 
			$('	.first').find('*').not('#currentField1').remove(); //remove flashing styled cursor
		});
	}); //DO I NEED TO THIS 2/2

	//spin the wheel
	function spinWheel(){ degrees+=120; $('.spinWheel').css('transform', 'rotate(' + degrees + 'deg)'); }

	//check if enter is pressed in .spinWheel input then call spinWheel();
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
var tempCount = 0; //temp store how  many times user input less than 15 on items
	// add the wheel values to the hidden form
	function addWheelValuesToForm(wheelValues){
		var input = $('.fields').find('input')[curIteration]; //get the input field for this call (like iteration, goes through 1by1)
		var theValue = wheelValues[curIteration];
		input.value = theValue; //put val from wheel to its corresponding field eg (title into title field)
		curIteration += 1;	//increase variable to keep track of number of calls this method gets  (to iterate through object)
		var elem = $('#myBar2')[0];
		var label = $('.fields').find('div:nth-child('+(curIteration + 1)+')').text().trim(); //get the label (starts at index 2, holds labels(field names) for wheel spins					becasue first label is present in html and because this function runs after field has been used) ./ 	

		//if there is no more fields remove wheel
		if(!label){
			$('.spinWheel').hide();
			$('#myProgress').hide();
			$('#submitBudgetBtn').removeClass("hidden");
			$('body').css('background-color', 'rgba(123, 105, 235, 0.40)');
		}

		$('#title').text(label); //change the title above wheel 

		//change to switch statement
		if(curIteration == 2){
			purse = theValue;
			total = theValue;
		}//start retrieving values after 'week' 
		else if(curIteration == 3){
			$('#myBar').text("You have €" + purse);
			$('#circledivText').text("Out of €" + purse);
			$('#myProgress').css("visibility", "visible");
		}
		else if(curIteration > 3){
			purse = purse - theValue;
			$('#myBar').text("You have €" + purse + " remaining");
			$('#circledivText').text("Out of €" + total);
			var percentageOfPurseSpent = Math.floor(( (total - purse) / total) * 100);

			//when the bar is big enough tp hold the text clearly then remove #myBar
			if (percentageOfPurseSpent > 40){
				$("#myBar").animate({ left: '-500px' }, 'slow');
				$('#myBar').remove();
				$('#myBar2').text("You have €" + purse + " remaining");
			}
			elem.style.width = (percentageOfPurseSpent - 7) + '%';
		}
	}

//add code to  (change)
//check if any letters are being pressed or any keyboard input to then autofocus field

$('#currentField1').click(function(){
	$('.first').find('*').not('#currentField1').remove(); //remove flashing styled cursor
});

//blurs the 2 wheel items (fields) that are not about to be used when animation spins it

function focusWheelItem(itemToFocus){
   	switch (itemToFocus) {
   		//spin from item 1 to item 3 (clockwise)
	    case 1:
	    	first.addClass( "blurWheelItem" );
	    	second.addClass( "blurWheelItem" );
	    	third.removeClass( "blurWheelItem" );
	        break;
	    //spin from item 3 to item 2 (clockwise)
	    case 2:
	    	third.addClass( "blurWheelItem" );
	    	second.removeClass( "blurWheelItem" );
	        break;
	    //spin from item 2 to item 1 (clockwise)
	    case 3:
	    	second.addClass( "blurWheelItem" );
	        first.removeClass( "blurWheelItem" );
	        break;
	}
}

