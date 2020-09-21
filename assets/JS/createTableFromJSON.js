let people = [];
$.getJSON('/Users/44750/Documents/Coding/github/SinglePage/assets/generated.json', function(data) {
    people = data;
});
console.log(people);

$(document).ready(function() {
    $("#buttonJSON").click(function() {        
        CreateTableFromJSON();
    });
});

function CreateTableFromJSON() {
    //col should become and array that contains the properties of the objects in json
    let col = [];
    for (let i = 0; i < people.length; i++) {
        for (let person in people[i]) {
            if (col.indexOf(person) === -1) {
                col.push(person);
            }
        }
    }
    

    //create dynamic table
    let table = document.createElement("table");

    let tr = table.insertRow(-1); //table row

    //creates table header usign the properties stored in col as headings
    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    //adds JSON data to table as rows
    for (let i = 0; i < people.length; i++) {
        for(let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = people[i][col[j]];
        }
    }

    //add table to p container
    let pContainer = document.getElementById("showData");
    pContainer.innerHTML = "hello";
    pContainer.appendChild(table);
}