function submitData() {

	var data = {};
	data.submitter = document.getElementById("submitter").value;
	data.message = document.getElementById("message").value;
	data.email = document.getElementById("email").value;

	$.ajax({
             type: "POST",
             url: "http://scribble.ricklab.net/",
             data: data,
             contentType: "Content-Type: multipart/form-data; charset=utf-8",
             crossDomain: true,
             dataType: "json",
             
             success: function (data, status, jqXHR) {
                 alert(success);
             },

             error: function (jqXHR, status) {
                 console.log(jqXHR);
                 alert('failure: ' + status.code);
             }
          });
}