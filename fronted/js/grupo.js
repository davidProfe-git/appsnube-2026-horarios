const API_URL = 'http://localhost:3000/grupos'

fetch(API_URL).then(response => response.json())
      .then(data => {
        const div = document.getElementById("grupo")
        data.grupos.forEach(grupos => {
            div.innerHTML +=``


 })
    })
