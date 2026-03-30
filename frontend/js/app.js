const API_URL ='http://localhost:4000/profesor'

fetch('API_URL').then(response => response.json( ))
                .then(data =>{

                const div = document.getElementById("contenedor")
                div.innerHTML = `<h1>${data.profesores[0]} </h1>`
                

                })