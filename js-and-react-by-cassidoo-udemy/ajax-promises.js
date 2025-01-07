fetch("https://api.github.com/users/annemarie35")
    .then(function (response) {
        console.log(response.status);
        return response.json();
    })
    .then(function (j) {
        // print out the result
        console.log(j);
    });
