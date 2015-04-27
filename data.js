
 
	var clicked = "empty";
	
	 


$(function(){

  $(".button1").click(function(){
		clicked = "button1";
		alert_title = "Challenge complete";
		txt = "url(images/reward1.png)";
		alert_button_text = "Want Next";
		alert_button_text1 = "Save";
		url = "http://google.com";
		whichButton = "button1";
		img = "url(images/reward1.png)";
		console.log(clicked);

   }); 


   $(".button2").click(function(){
		clicked = "button2";
		alert_title = "Challenge NOT complete";
		txt = "Wrong Answer";
		alert_button_text = "Try Again";
		alert_button_text1 = "Save";
		url = "http://yahoo.com";
		whichButton = "button2";
		img = "url(images/oops.png)";
		console.log(clicked);
        
    }); 

   $(".button3").click(function(){
		clicked = "button3";
		alert_title = "Challenge NOT complete";
		txt = "Wrong Answer";
		alert_button_text = "Try Again";
		alert_button_text1 = "Save";
		url = "http://yahoo.com";
		whichButton = "button3";
		img = "images/oops.png";
		console.log(clicked);
        
    }); 
						 
						
	$("#transparent").draggable();

				$("#droppablediv").droppable({

				accept:"#transparent",
				drop:function(event, ui){ 

						console.log("Dragged from button"+whichButton);
						alert(alert_title, txt, alert_button_text, alert_button_text1, url, whichButton,img);


						$(this).html("Dropped").addClass("dropped");
						$("#draggablediv").html(" <style> padding-bottom: -30px;</style>")
						$(".button1").hide(); 
						$(".button2").hide(); 
						$(".button3").hide(); 
						$(".button4").hide(); 
						

			}
		});


 
			





if(document.getElementById) {

	window.alert = function(alert_title,txt, alert_button_text, alert_button_text1, url, whichButton, img ) {
		console.log("Which Button has"+whichButton);
		if(whichButton == ".button1") {
			alert("Calling 1");
			createCustomAlert(alert_title, txt, alert_button_text, alert_button_text1, url, whichButton, img);
	    }
	    else {
	    		alert("Calling 2");
	    		createCustomAlert2(alert_title, txt, alert_button_text, alert_button_text1, url, whichButton, img);
		}
	}
}

function createCustomAlert(alert_title,txt,alert_button_text,alert_button_text1, url, whichButton, img) {
	d = document;

	console.log("Button clicked is : " + whichButton);
	 
	if(d.getElementById("modalContainer")) return;


	mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
	mObj.id = "modalContainer";
	mObj.style.height = d.documentElement.scrollHeight + "px";
	
	
	alertObj = mObj.appendChild(d.createElement("div"));
	alertObj.id = "alertBox";
	if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
	alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
	alertObj.style.visiblity="visible";

	h1 = alertObj.appendChild(d.createElement("img"));
	h1.appendChild(d.createTextNode(alert_title));

	msg = alertObj.appendChild(d.createElement("img"));
	//msg.appendChild(d.createTextNode(txt));
	msg.innerHTML = txt;

	btn = alertObj.appendChild(d.createElement("a"));
	btn.id = "closeBtn";
	btn.appendChild(d.createTextNode(alert_button_text));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() { removeCustomAlert(url);return false; }

	btn = alertObj.appendChild(d.createElement("a"));
	btn.id = "closeBtn1";
	btn.appendChild(d.createTextNode(alert_button_text1));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() { removeCustomAlert(url);return false; }

	alertObj.style.display = "block";
	
}


function createCustomAlert2(alert_title,txt,alert_button_text,alert_button_text1, url, whichButton, img) {
	d = document;

	console.log("Button clicked is 2 : " + whichButton);
	    
	

	if(d.getElementById("modalContainer2")) return;


	mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
	mObj.id = "modalContainer2";
	mObj.style.height = d.documentElement.scrollHeight + "px";
	
	
	alertObj = mObj.appendChild(d.createElement("div"));
	alertObj.id = "alertBox";
	if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
	alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
	alertObj.style.visiblity="visible";

	h1 = alertObj.appendChild(d.createElement("img"));
	h1.appendChild(d.createTextNode(alert_title));

	msg = alertObj.appendChild(d.createElement("img"));
	//msg.appendChild(d.createTextNode(txt));
	msg.innerHTML = txt;

	btn = alertObj.appendChild(d.createElement("a"));
	btn.id = "closeBtn";
	btn.appendChild(d.createTextNode(alert_button_text));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() { removeCustomAlert(url);return false; }

	btn = alertObj.appendChild(d.createElement("a"));
	btn.id = "closeBtn1";
	btn.appendChild(d.createTextNode(alert_button_text1));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() { removeCustomAlert(url);return false; }

	alertObj.style.display = "block";
	
}

function removeCustomAlert(url) {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
	window.open(url,"_self");
}
function ful(){
alert('Alert this pages');
}



$(document).ready(function(){
    $("#test").click(function(e){
        e.preventDefault();
        $('body').scrollLeft(5000);
    });
});



$('#dropContainer').droppable({
       			drop: function(e,ui) {
            		$(ui.draggable).attr('src','images/crossblock0201.png');
       			}
  });




 
			  
			
}); 


