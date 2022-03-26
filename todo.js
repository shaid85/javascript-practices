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
}


function update(){
    if(localStorage.getItem('itemsJson') == null){
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    } else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }    


}