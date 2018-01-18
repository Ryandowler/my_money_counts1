$( ".myBudgetsBtn" ).click(function() {
	$( this ).slideUp( "slow", function() { });
  	$("#myBudgetsContainer").css("display", "block");
});

$(".myBudgetsHideBtn").click(function() {
	$("#myBudgetsContainer").css("display", "none");
	$( ".myBudgetsBtn" ).slideDown( "slow", function() {}); 
});
