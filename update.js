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

function updateit() {

	setTimeout (
		function() {
			$.ajax({
			    type: "POST",
			    url: "scraper.py",
			    data: { param: " "}
			    }).done(function( o ) {
			        alert("OK");
			});
		}
	, 10000);


	var element = document.getElementById("click");
	element.innerHTML = "the number is: " + number
	number++;
}

postData('data to process');