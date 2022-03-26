function getAnyUpdate(){
    title = document.getElementById('title').value;
    desc = document.getElementById('description').value;

    if(localStorage.getItem('itemsJson') == null){
        itemJsonArray = [];
        itemJsonArray.push([title, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    } else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([title, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));

    }
    update();
}


function update(){
    if(localStorage.getItem('itemsJson') == null){
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    } else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }    

    // Populate table
    let tableBody = document.getElementById('tableBody');
    let Str = "";
    itemJsonArray.forEach((element, index) => {
        Str += `
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button onclick="deleteitem(${index})" class="btn btn-primary btn-sm">Delete</button></td>
      </tr>`
    })
    tableBody.innerHTML = Str;
}


const add = document.getElementById('add');
add.addEventListener("click", getAnyUpdate);
update();

function deleteitem(itemIndex){
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element form the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}

function clearlist() {
    if(confirm("Do you want to really clear?")){
    localStorage.clear();
    update();
    }
}