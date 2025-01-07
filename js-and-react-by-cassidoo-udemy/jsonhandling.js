var response = null;
// let returns error Uncaught SyntaxError: Identifier 'response' has already been declared

document
    .getElementsByTagName("button")[0]
    .addEventListener("click", function (r) {
        getUser(document.getElementsByTagName("input")[0].value);
    });

function extracted(response) {
    console.log("response.avatar_url", response.avatar_url);
    document.getElementById("username").innerText = response.login;
    document.getElementById("name").innerText = response.name;
    document.getElementById("location").innerText = response.location;
    document.getElementById("bio").innerText = response.bio;
    document.getElementById("avatar").src = response.avatar_url;
}

function getUser(name) {
    fetch(`https://api.github.com/users/${name}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (j) {
            response = j;
            extracted(response);
        });
}
