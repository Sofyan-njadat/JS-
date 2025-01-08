


let loadBtn = document.getElementById("loadButton");

loadBtn.addEventListener("click" ,function () {
    // fetch("https://api.npoint.io/b7f36d5d3e0c1d3ee4d9")
    fetch("task6.json")
    .then(function (response) {        // response => string
        return response.json()        // response => obj
    })
    .then(function (data) {       // data => (new name) for the objects in json file
        for (let i = 0; i < data.length; i++) {

            let users = data[i];

            let cardsCon = document.createElement("div");
            cardsCon.className = "cards"

            cardsCon.innerHTML = `

            <h3> Name : ${users.name} </h3>
            <p> <b>age</b>: ${users.age} </p>
            <p> <b>email</b>: ${users.email} </p>
            <p> <b>profession</b>: ${users.profession} </p>

            `;

            let cardsContainer =document.getElementById("cardsContainer");

            cardsContainer.appendChild(cardsCon)

        }
    });


});