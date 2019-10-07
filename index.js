const submitData = (name, email) => {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            const body = document.querySelector('body');
            const p = document.createElement('p');
            p.innerHTML = object['id'];
            body.appendChild(p);
        })
        .catch(function(error) {
            alert('Bad Monkey!');
            const body = document.querySelector('body');
            const p = document.createElement('p');
            p.innerHTML = error.message;
            body.appendChild(p);           
        })
    
};







// let formData = {
//     dogName: 'Byron',
//     dogBreed: 'Poodle'
// };

// let configObj = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify(formData)
// };

// fetch('http://localhost:3000/dogs', configObj)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object) {
//         console.log(object);
//     })
//     .catch(function(error){
//         alert('Bad things!');
//     });


// fetch('http://localhost:3000/dogs', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify({
//         dogName: 'Byron',
//         dogBreed: 'Poodle'
//     })
// });
