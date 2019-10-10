// Add your code here


  // method: "POST" is missing from the object below

  let formData = new Object;

  let configObj = () => ({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  });
   

    let submitData = (userName,email) => {
      formData.name = userName;
      formData.email = email;
      return fetch("http://localhost:3000/users", configObj())
        .then(function(response) {
          return response.json();
         })
         .then(function(object) {
          document.body.innerHTML = object[ "id" ]
          })
            .catch(function(error) {
              document.body.innerHTML = error.message
          });
       };


    