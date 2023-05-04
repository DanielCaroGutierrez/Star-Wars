// import {treaerCancionesSpotify} from "./servicioSpotify.js"
// import {pedirTokeEnSpotify} from "./servicioSpotify.js"

//  let fila = document.querySelector("#fila")

// pedirTokeEnSpotify()
//     .then(function(token){
    
//     treaerCancionesSpotify(token).
//         then(function(respuesta){

//         respuesta.tracks.forEach(function(cancion){

//             let columna = document.createElement("div")
//             columna.classList.add("col")

//             let tarjeta = document.createElement("div")
//             tarjeta.classList.add("card","h-100","shadow")

//             let pista = document.createElement("audio")
//             pista.classList.add("w-100")
//             pista.setAttribute("controls", "controls")
//             pista.src=cancion.preview_url

//             let foto=document.createElement("img")
//             foto.classList.add("img-fluid","w-100")
//             foto.src=cancion.album.images[0].url

//             let nombre=document.createElement("h4")
//             nombre.classList.add("text-center","fw-bold")
//             nombre.textContent=cancion.name

//             tarjeta .appendChild(foto)
//             tarjeta.appendChild(nombre)
//             tarjeta.appendChild(pista)  
//             columna.appendChild(tarjeta)
//             fila.appendChild(columna)   
//         });

//         console.log(respuesta.tracks[0])    
//         console.log(respuesta.tracks[0].name)
//         console.log(respuesta.tracks[0].preview_url)
//         console.log(respuesta.tracks[0].album.images[0].url)

//         })

//     })
    import {treaerPeliculas} from "./servicioStarWars.js"
    import {treaerPersonajes} from "./servicioStarWars.js"

    treaerPersonajes().
         then(function(respuesta){

             
                respuesta.results.forEach(function(personajes){

                let columna = document.createElement("div")
                columna.classList.add("col")

                let tarjeta = document.createElement("div")
                tarjeta.classList.add("card","h-100","shadow","align-center")

                let nombre=document.createElement("h4")
                nombre.classList.add("text-center","fw-bold")
                nombre.textContent=personajes.name
                
                let altura=document.createElement("h4")
                altura.classList.add("text-center","fw-bold")
                altura.textContent=personajes.height
                
                let peliculas=document.createElement("h4")
                peliculas.classList.add("text-center","fw-bold")
                peliculas.textContent=personajes.films

                tarjeta.appendChild(nombre)
                tarjeta.appendChild(altura)
                columna.appendChild(tarjeta)
                fila.appendChild(columna)
                

                console.log(personajes) 
                
            })
         })

         treaerPeliculas().then(function(respuesta){

            console.log(respuesta)
            respuesta.results.forEach(function(peliculas){

                let columna = document.createElement("div")
                columna.classList.add("col")

                let tarjeta = document.createElement("div")
                tarjeta.classList.add("card","h-100","shadow","align-center")

                let nombre=document.createElement("h4")
                nombre.classList.add("text-center","fw-bold")
                nombre.textContent=peliculas.name

                columna.appendChild(tarjeta)  
                fila2.appendChild(columna)
            })
         })