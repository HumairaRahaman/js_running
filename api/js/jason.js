function showUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dataOfUser(data))
}

function dataOfUser(data){
    const dataShow = document.getElementById('showdes');
for(const user of data){
    const li = document.createElement('li');
    li.innerText = `name: ${user.name} , email: ${user.email}`;
    dataShow.appendChild(li)
}
}