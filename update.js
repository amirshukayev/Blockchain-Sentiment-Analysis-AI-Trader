function postData(input) {
    /*$.ajax({
        type: "POST",
        url: "/reverse_pca.py",
        data: { param: input },
        success: callbackFunc
    });
    */
}

function callbackFunc(response) {
    // do something with the response
    console.log(response);
}

var number = 0;


// RUN WITH flask run --host=0.0.0.0
function updateit() {

	setTimeout(function(){
		$.ajax({
	           type: "GET",
	           url: "http://0.0.0.0:5000/getstuff",
	           success: function (data, textStatus, XMLHttpRequest) {
	               alert(data);
	               alert("success!");
	           },
	           error: function(XMLHttpRequest, textStatus, errorThrown) {
	               alert("fail");
	           }
	     });
		}
	,30000);


	var element = document.getElementById("click");
	element.innerHTML = "the number is: " + number
	number++;

}

postData('data to process');