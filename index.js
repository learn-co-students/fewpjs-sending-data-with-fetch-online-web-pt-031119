// Add your code here
const destURL = 'http://localhost:3000/users';
const page = document.body;

// document.addEventListener('DOMContentLoaded', function(){
//   submitData(userName, userEmail);
// });

function submitData(userName, userEmail){
  const formData = {
    name: userName,
    email: userEmail
  };

  const configObject={
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  };

  return fetch(destURL, configObject)
  .then(function(response){
    return response.json();
  })
  .then(function(object){
    // for(const element of object){
    // console.log(object.id)
    page.innerHTML = `${object.id}`;
    // };
    // return fetch(object);
  })
  .catch(function(error){
    alert('Unauthorized Access');
    page.innerHTML = 'Unauthorized Access';
  });

};