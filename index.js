function submitData(userName, userEmail) {
  let data = {
    name: userName,
    email: userEmail
  };

  let configObj = {
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
    })
    .catch(function(error) {
      alert("Something went wrong!");
      console.log(error.message);
    });
}
