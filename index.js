function submitData(userName, userEmail) {
  let data = {
    name: userName,
    email: userEmail
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  };

  fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(object => {
      console.log(object);
      document.body.innerHTML = object["id"];
    })
    .catch(function(error) {
      alert("Something went wrong!");
      document.body.innerHTML = error.message;
    });
}
