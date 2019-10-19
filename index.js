// Add your code here


function submitData(userName, userEmail) {
    let object = {name: userName, email: userEmail}
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(object)
      };
    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
      })
    .then(function(object) {
        let node = document.createElement("p");
        node.innerHTML = object.id
        document.body.appendChild(node)
    })
    .catch(function(error) {
        let node = document.createElement("p");
        node.innerHTML = error.message
        document.body.appendChild(node)
      });
}