$(document).on("click", "#addr",insert2)
$(document).on("click", "#remover", remove2)
$(document).on("click", ".list-group-item",select)

$(document).on("click", "#todoadd",insert)
$(document).on("click", "#todoremove", remove)

//NAV
$(document).on("click", "#nav_to", function(){

  $("#todo").slideDown("slow");
  $("#todo").siblings().slideUp("fast");
  
});

$(document).on("click", "#nav_ac", function(){

  $("#activity").slideDown("slow");
  $("#activity").siblings().slideUp("fast");
  
});

$(document).on("click", "#nav_re", function(){

  $("#resources").slideDown("slow");
  $("#resources").siblings().slideUp("fast");
  
});

$(document).on("click", "#nav_id", function(){

  $("#ideation").slideDown("slow");
  $("#ideation").siblings().slideUp("fast");
  
});

$("#nav_to").click();

//ACTIVITY
var x = 0;
var array = Array();

function activarray(){
array[x] = document.getElementById("activs").value;
alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("activs").value = "";

 var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
    e += "Number " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}

function genarray(){
  var x = Math.floor((Math.random() * array.length));
  z = "Do Activity: " + x;
  document.getElementById("Result2").innerHTML = z;
}


/*TODO*/
function insert() {

	var text = $("#text").val();
  
	if (text == "") {
  
  	alert("Your textbox is empty.");
  
  } else {
    
    var date = document.getElementById("tododate").value;
    var html = '<li class="list-group-item">'+text+'<br>'+'Do by date: '+date+'<br>'+'<input type="checkbox" onclick="done()"></input>'+'</li>';
		$("#list>ul").append(html);
    $("#text").val("");
    save();

  }

}

function done(){
  alert("One more done!");
}

function remove() {

	var count = $("li.list-group-item.active").length;
  
	if (count == 0) {
  
  	alert("Select at least one list item.");
  
  } else {
  
  	$("li.list-group-item.active").remove();
    save();
  
  }
  

} 

function select() {

	$(this).toggleClass("active");

} 

function save() {

	var html = $("#list").html();
	localStorage.setItem("todo", html);

} 

function load() {

	var html = localStorage.getItem("todo");

	if (html != "") {
  
  	$("#list").html(html);
  
  }

}
 load();

//RESOURCES
function insert2() {

	var text2 = $("#text2").val();
  
	if (text2 == "") {
  
  	alert("Your textbox is empty.");
  
  } else {
    
    var html = '<li class="list-group-item">'+text2+'</li>';
		$("#list2>ul").append(html);
    $("#text2").val("");
    save2();

  }

}

function remove2() {

	var count = $("li.list-group-item.active").length;
  
	if (count == 0) {
  
  	alert("Select at least one list item.");
  
  } else {
  
  	$("li.list-group-item.active").remove();
    save();
  
  }
  

} 


function save2() {

	var html = $("#list2").html();
	localStorage.setItem("resources", html);

} 

