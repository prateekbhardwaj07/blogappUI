// $(document).ready(function (){

// 	$('.post-slider .post-wrapper').slick({
// 	  slidesToShow: 4,
// 	  slidesToScroll: 1,
// 	  autoplay: true,
// 	  dots:false,
// 	  autoplaySpeed: 5000,
// 	  prevArrow : $('.prev'),
// 	  nextArrow : $('.next'),
// 	  responsive: [
// 	    {
// 	      breakpoint: 1024,
// 	      settings: {
// 	        slidesToShow: 3,
// 	        slidesToScroll: 1,
// 	        infinite: true
// 	      }
// 	    },
// 	    {
// 	      breakpoint: 812,
// 	      settings: {
// 	        slidesToShow: 2,
// 	        slidesToScroll: 1
// 	      }
// 	    },
// 	    {
// 	      breakpoint: 600,
// 	      settings: {
// 	        slidesToShow: 1,
// 	        slidesToScroll: 1
// 	      }
// 	    }
// 	    // You can unslick at a given breakpoint now by adding:
// 	    // settings: "unslick"
// 	    // instead of a settings object
// 	  ]
// 	});



	// var hits = 0;
	// $('.post-info.slidingtab').on('click',function(){
	//         if  (hits % 2 !== 0) //for hits 2,4,6,8 etc. Also the condition
	//         {

    //      		$(this).css({"height":"100px","transition":"height 0.15s ease-out"});
	// 			$(this).children('.relatedinfo').css({'display':"none"});
    //         }
    //         else
    //         { // for hits 1,3,5,7		
	// 		    $(this).css({"height":"175px","transition":"height 0.25s ease-in"});
	// 		 	$(this).children('.relatedinfo').css({'display':"block"}); 
	// 		}
    //         hits++;
	//     });

	
// 	$('.navsidebar .list_edit div').on('click',function(){
// 		console.log("clicked me");
// 		$(this).toggleClass('bigeditdiv');
// 		$(this).children('.nested_actions').toggle(10);
// 	});

// });



/*	Function to Match 2 Passwords */
function checkPass(){
	console.log("Inside CheckPass Method");
	var pass1 = document.getElementById("firstpass").value;
	var pass2 = document.getElementById("secondpass").value;
	if(pass1.localeCompare(pass2) != 0)
	{
		alert('Passwords Do Not Match');
		
	}
}


function deluseracc() {
	var deleteUser = window.confirm("Do you want to delete account ??");
	if(deleteUser){
		sendDeleteRequest();	
	}
	else {
		console.log("Canceled Request")
	}
}

function sendDeleteRequest(){
	var httpRequest = new XMLHttpRequest();
  	httpRequest.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
      		document.getElementById("demo").innerHTML =
     		this.responseText;
     	}
    };
    httpRequest.open("POST", "http://localhost:8080/blogapp/deleteuser", true);
    httpRequest.send();
}

function contactadmin(){
	var contactDetails = window.prompt("Kindly Enter Your Mail or Mobile Number","john@gmail.com");
	if (contactDetails == null || contactDetails == "") {
  			console.log('User cancelled the prompt.');
		} 
		else {
  			sendContactRequest();
		}	 
}

function sendContactRequest(){
	var httpRequest = new XMLHttpRequest();
  	httpRequest.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
      		document.getElementById("demo").innerHTML =
     		this.responseText;
     	}
    };
    httpRequest.open("POST", "http://localhost:8080/blogapp/contactuser", true);
    httpRequest.send();
}
