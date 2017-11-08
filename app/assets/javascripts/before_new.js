var array = [];
  		var finalArray = [];
  		var listItem; //holds the html for list item

		function get_chosen_fields(){
			 console.log("array is:" + array);
			 array = [];
			console.log("array is now :" + array);
			$( "#right-defaults > li" ).each(function() {
				var value  = $( this ).text();
				array.push(value); 
			});
			console.log("array is now 2 :" + array);
		}

		function createLink(){
			var link = $('#submitBtn').attr('href'); //get initial link from the a tag
			var string = link.split('=')[0]; //chop everything off after the =
			var newString =  string + "=" + (array.toString().replace(/,/g, '+')); //make new link (all items in array made into 1 string)
			//console.log(array);
			$("#submitBtn").attr("href", newString)//chnage the a tag to have the new link
		}

		function submitClicked(){

			get_chosen_fields();
			createLink();
			$('#prettyList').empty(); //
			$('#submitBtn').css("display", "block"); //show the link to go to form page
			$( ".examples" ).toggle( "fold" );
			$('.stickyBtn').css("display", "block"); //show the sticky button that when clicked shpws the drag n drop again
			$('#list').css("display", "block"); //show the div that contains the list and continue button
			console.log("array is now 3 :" + array);
			//iterate through each chosen filds and output a list item for each
			$.each(array, function(index, value) {
				//change the html to have the values of each chosen field
				listItem = '<div class="row"><div class="[ col-xs-6  ]" style="margin-left:-30px;"><ul class="event-list"><li><time datetime="2014-07-20"><span class="day">' + (index +1) + '</span></time><div class="info"><h2 class="title">' + value + '</h2></div></li></ul></div>';

			$('#prettyList').append(listItem);//output item
		    });

		    //$('#list').css("display", "block"); //show the list and continue button
		}

		function showDragAndDrop(){
			$( ".examples" ).toggle( "fold" );

			// -- Hide and show the final list and continue button when arrow clicked
			var theList = $('#list');
			if (theList.is(':visible')) {
				$(theList).css("display", "none"); 
			}else {
				$(theList).css("display", "block"); 
			}
			array = [];
		}