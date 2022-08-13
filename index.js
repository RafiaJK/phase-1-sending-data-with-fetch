function submitData (name, email) {
    return fetch("http://localhost:3000/users", {
    
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name,
        email}),
})

    .then(function (response) {
        return response.json();
    })
    .then(function(object) {
        document.body.append(object["id"])
    })

    .catch ((error) => {
        alert(`There's an error: ${error}`);
        document.body.append(error.message)
    });
}
