const API_URL ='http://localhost:3000/salones'

fetch(API_URL).then(response=>response,json())
.then(data =>{
      const div = document.getElementById("contenedor")
      div.innerHTML=`<h1>${data.grupos[0].nombre} </h1>`

})