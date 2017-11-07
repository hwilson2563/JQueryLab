$(document).ready(function() {
  $(".available").click(function () {
			$(".popUpForm").css("display","block");
			$(".tableNumber").text("Table Number: " + this.innerHTML);
			$(".available").css("z-index","-20");
			$(this).toggleClass("reserved");
		$(".submitInfo").click(function(){
  			$(".popUpForm").css("display","none");
  			$(".available").css("z-index","0");
      })
	});
  $(".material-icons").click(function(){
  	$(".popUpForm").css("display","none");
  	$(".available").css("z-index","0");
  	$(".available").toggleClass(".available");
  });
  $(".available").mouseenter(function () {
    $(this).fadeTo(400, .25); 
    });
    $(".available").mouseleave(function () {
    $(this).fadeTo(400, 1); 
    });
  $("input")
});

