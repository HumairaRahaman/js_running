function ShowComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => showData(data))
}
ShowComment()
function showData(des){
 for(const detail of des){
     const sec = document.getElementById('comment')
     const div = document.createElement('div')
     div.innerHTML = `
     <h2>${detail.name}</h2>
     <h4>${detail.email}</h4>
     <p>${detail.body}</p>
     `
     sec.appendChild(div)
 }
}