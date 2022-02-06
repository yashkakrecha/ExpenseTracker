var numberPeople = 1; //stores how many input field is in modal, =1 because there is already 1 input field in html 

//when website is loaded
$(document).ready(function(){

	//when user clicks add member button
	$("#add-button").on("click",function(){

		//new input field is appended to list
		numberPeople++;
		$(".group-members-list").append('<input type="Number" class="form-control" id="group-members'+numberPeople+'" placeholder="Phone Number">');
	});

	//when user clicks delete member button
	$("#delete-button").on("click",function(){
		
		//checks if 2 or more input fields are there, we cant delete last 1 input field
		if(numberPeople>1){
			//number of people is 
			numberPeople--;
			$(".group-members-list input").last().remove();
		}
	});
});