$(document).ready(function() {
  var currentTable = "";
  var name = "";
  var phoneNumber = "";
  var partySize= "";
  // on click for table elements
    $(".available").on("click", function (event) {
      if (this.innerHTML === "Free") {
        
        return;
      }
       if ($(this).hasClass("reserved")) {
        return;
      }
        currentTable = event;
        tableClass = this;
      $(".popUpForm").css("display","block");
      $(".tableNumber").text("Table Number: " + this.innerHTML);
      $(".available").css("z-index","-20");
      $(".index").css("display", "none");
    });
  // action that will submit the input information
  $(".submitInfo").on("click", function() { 
      name = $(".name").val();
      phoneNumber = $(".phoneNumber").val();
      partySize = $(".numberOfParty").val();
      currentTable.target.setAttribute("name", name);
      currentTable.target.setAttribute("phoneNumber", phoneNumber);
      currentTable.target.setAttribute("party", partySize);
      $(tableClass).append("<div class ='tableInfo'>"+"Name: "+ name
       + "<br>"+ "Phone #: "+ phoneNumber + "<br>" +"Party #: "+ partySize + "</div>");
      $(".popUpForm").css("display","none");
      $(".available").css("z-index","0");
      $(".index").css("display", "flex");
      $(".name").val("");
      $(".phoneNumber").val("");
      $(".numberOfParty").val(""); 
      $(tableClass).addClass("reserved");
      $(tableClass).removeClass("available");
    });
  // action to not submit information and go back to main display
  $(".material-icons").click(function(){
    $(".popUpForm").css("display","none");
    $(".available").css("z-index","0");
    $(".available").toggleClass(".available");
    $(".index").css("display", "flex");
    $(".name").val("");
    $(".phoneNumber").val("");
    $(".numberOfParty").val(""); 
  });
  // when cursor enters into table
  $(".available").on("mouseenter", function () {
     if ($(this).hasClass("reserved")) {
    $(this).find(".tableInfo").fadeIn("slow").css("position","absolute").css("display","block");
      return;
     }
     
     $(this).fadeTo(400, .25);
    });
  // when cursor exits table elements
    $(".available").on("mouseleave",function () {
      if ($(this).hasClass("reserved")) {
      $(this).find(".tableInfo").fadeOut("slow").css("position","absolute").css("display","none");
      return;
     }
      
    $(this).fadeTo(400, 1); 
    });
    $("#index").on("mouseenter", function() {
      $(".available").css("box-shadow", "1px 2px 4px rgba(255, 0, 0, .6)");
      return;
    });
    
    $("#index").on("mouseleave", function() {
      $(".available").css("box-shadow", "unset");
      return;
     });
});

