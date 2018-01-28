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

	whattt().then(function(data){
		data = JSON.parse(data);
		console.log("does this work?");

		for (var key in data) {
		    if (data.hasOwnProperty(key)) {
		        if (data[key] > 0.05){
		        	
		        }
		    }
		}
		
		/*
		var element = document.getElementById("click");
		element.innerHTML = "the number is: " + number
		*/
	});

	/*
	var Data;

	var promise1 = new Promise(function(resolve,reject){
		setTimeout(function(){
			$.ajax({
		           type: "GET",
		           url: "http://0.0.0.0:5000/getstuff",
		           success: function (data, textStatus, XMLHttpRequest) {
		               alert(data);
		               Data = data
		           },
		           error: function(XMLHttpRequest, textStatus, errorThrown) {
		               alert("fail");
		           }
		     });
			}
		,30000);

		if (Data != undefined){
			resolve(Data);
		}
		else {
			reject();
		}
	});

	promise1.then(function(fromResolve){
		console.log(fromResolve)
		var element = document.getElementById("click");
		element.innerHTML = "the number is: " + number
		number++;
	}).catch(function(fromReject){
		console.log("shit is not working");
	})
	*/
}

const whattt = async() => {
	return await fetch("http://0.0.0.0:5000/getstuff")
		.then(res => res.json())
		.then(data =>{
			console.log(data);
			return data;
		})
}
