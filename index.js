function submitData(userName, userEmail) {
    let data = {
      name: userName,
      email: userEmail
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        console.log(object);
        document.body.innerHTML = object.id;
    })
    .catch(function(error){
        alert("Error");
        console.log(error.message);
        document.body.innerHTML = error.message;
    });
}  
