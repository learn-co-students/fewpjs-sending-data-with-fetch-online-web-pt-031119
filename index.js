function submitData(name, email) {
	let formData = {
  	name: `${name}`,
 	email: `${email}`
		};

	let configObj = {
	  method: "POST",
	  headers: {
	    "Content-Type": "application/json",
	    "Accept": "application/json"
	  },
	  body: JSON.stringify(formData)
	};

	return fetch("http://localhost:3000/users", configObj)
	  .then(function(response) {
	    return response.json();
	  })
	  .then(function(object) {
	  	let element = document.createElement('p')
	  	document.body.appendChild(element)
	  	element.innerHTML = object.id
	  	
	  })
	  .catch(function(error) {
	    alert("Bad things! Ragnarők!");
	    let error_msg = document.createElement('p')
	    document.body.appendChild(error_msg)
	    error_msg.innerHTML = error
	  });
  }