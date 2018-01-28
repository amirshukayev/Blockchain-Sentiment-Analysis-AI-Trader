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

function updateit() {
	console.log("waddup hoe");
}

postData('data to process');