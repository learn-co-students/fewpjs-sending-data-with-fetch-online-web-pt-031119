const submitData = (userName, userEmail) => {
    const url = 'http://localhost:3000/users'
    const configObj = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    }

    return fetch(url, configObj)
        .then(function(response) {
            return response.json();
        })
            .then(function(object) {
                document.body.innerHTML = object.id
            })
                .catch(function(error) {
                    document.body.innerHTML = error.message
                })
}
