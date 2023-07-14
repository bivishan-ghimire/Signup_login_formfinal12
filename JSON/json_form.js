fetch("form.json")
.then(function(response){
    return response.json();
})
.then(function(form){
    let output = document.querySelector("#result");
    let out = "";
    for (let details of form){
        out += `
        <tr>
            <td>${details.number}</td>
            <td>${details.fullName}</td>
            <td>${details.email}</td>
        </tr>
        `;
    }
    output.innerHTML = out;
})