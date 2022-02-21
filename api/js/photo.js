function photo(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => showImg(data) )
}
photo()

function showImg(photos){
    const sec = document.getElementById('photo')
for(const imge of photos){
    const div = document.createElement('div')
     div.classList.add('css')
    div.innerHTML = `
    <h2>${imge.title}</h2>
    <img src="${imge.url}">
     <img src="${imge.thumbnailUrl}">
    
    `
    sec.appendChild(div)
}
}

// function showImg(des){
//     for(const detail of des){
//         const sec = document.getElementById('photo')
//         const div = document.createElement('div')
//         div.innerHTML = `
//         <h2>${detail.title}</h2>
//         <img src="${detail.url}">
//         <img src="${detail.thumbnailUrl}">
//         `
//         sec.appendChild(div)
//     }
//    }