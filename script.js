$(document).ready(function() {
  var currentTable = "";
  var name = "";
  var phoneNumber = "";
  var partySize= "";
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
  $(".submitInfo").click(function(){
    console.log(tableClass);  
    name =$(".name").val();
    phoneNumber = $(".phoneNumber").val();
    partySize = $(".numberOfParty").val();
    currentTable.target.setAttribute("name", name);
    currentTable.target.setAttribute("phoneNumber", phoneNumber);
    currentTable.target.setAttribute("party", partySize);
    $(tableClass).append("<div class ='tableInfo'>"+"Name: "+ name + "<br>"+ "Phone #: "+ phoneNumber + "<br>" +"Party #: "+ partySize + "</div>");
    $(".popUpForm").css("display","none");
    $(".available").css("z-index","0");
    $(".index").css("display", "flex");
    $(".name").val("");
    $(".phoneNumber").val("");
    $(".numberOfParty").val(""); 
    $(tableClass).addClass("reserved");
  })
  $(".material-icons").click(function(){
    $(".popUpForm").css("display","none");
    $(".available").css("z-index","0");
    $(".available").toggleClass(".available");
    $(".index").css("display", "flex");
    $(".name").val("");
    $(".phoneNumber").val("");
    $(".numberOfParty").val(""); 
  });
  $(".available").mouseenter(function () {
     if ($(this).hasClass("reserved")) {
    $(this).find(".tableInfo").fadeIn("slow").css("position","absolute").css("display","block").css("opasity","1");
      return;
     }
     $(this).fadeTo(400, .25);
    });
    $(".available").mouseleave(function () {
      if ($(this).hasClass("reserved")) {
      $(this).find(".tableInfo").fadeIn("slow").css("position","absolute").css("display","none");
      return;
     }
    $(this).fadeTo(400, 1); 
    });
});

