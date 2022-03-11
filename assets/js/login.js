$(document).ready(function(){

	// change in night day mode when checkbox is changed
	$("#night-mode").change(function(){
		
		// if checkbox is checked its night mode
		if ($('#night-mode').is(":checked")){
			console.log("night-mode");
			$("body").css("background-color","#333647");
			$("html").css("background-color","#333647");
			$("#navibar").addClass("navbar-inverse");
			$("#navibar").removeClass("blue-navibar");
			$(".heading1").css("color","white");
			$(".heading2").css("color","white");
			$(".para-detail").css("color","white");
		}else{
			// else it is day mode
			console.log("day");
			$("body").css("background-color","white");
			$("html").css("background-color","white");
			$("#navibar").removeClass("navbar-inverse");
			$("#navibar").addClass("blue-navibar");
			$(".heading1").css("color","black");
			$(".heading2").css("color","black");
			$(".para-detail").css("color","black");
		}
	});
});