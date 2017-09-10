$(document).ready(function(){
		// function to transform for mobile users
		if($("body").width() < 600){
			$(".navbar").hide();
			$(".mnavbar").css("display","flex");
		}
});
