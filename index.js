// Add your code here

let formData = {
  name: "Steve",
  email: "steve@steve.com"
};

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

// let errorMessage = {
//   message: "Unauthorized Access"
// };


function submitData(name, email) {
  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
    document.body.innerHTML = object.id;
  })
  .catch(function(error){
    alert("Something went wrong!");
    console.log(error.message);
    document.body.innerHTML = error.message;
  });
};
