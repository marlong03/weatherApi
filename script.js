const API = "https://api.openweathermap.org/data/2.5/weather?q=" 
    const APIKEY = "8f6288e25c972f35b08334b23a792e4a";
        const APIIMG = "http://openweathermap.org/img/wn/"
// ----
const search = document.getElementById("search")
const submit = document.getElementById("submit")
// ----
const containerTarget = document.getElementById("containerTarget")
// ----
submit.addEventListener("click", buscar)
search.addEventListener("keyup", (x)=>x.which == 13 ? buscar(): console.log())
// ----
function buscar(){
    let ciudad = search.value
    fetch(API + ciudad + "&appid=" + APIKEY)
        .then(response => response.json())
        .then(res => {
            
            const target = document.createElement("div")
            target.classList.add("target")
            containerTarget.appendChild(target)

            const target_header = document.createElement("div")
            target_header.classList.add("target_header")
            target.appendChild(target_header)

            const nameCity = document.createElement("div")
            target_header.classList.add("nameCity")
            target_header.appendChild(nameCity)

            const paragraphNameCity = document.createElement("p")
            paragraphNameCity.innerHTML = res.name
            nameCity.appendChild(paragraphNameCity)

            const spanNameCity = document.createElement("span")
            spanNameCity.innerHTML = res.sys.country
            nameCity.appendChild(spanNameCity)

            const exit = document.createElement("div")
            target_header.classList.add("exit")
            target_header.appendChild(exit)

            
            const botonExit = document.createElement("input")
            botonExit.type = "button"
            botonExit.value = "x"
            exit.appendChild(botonExit)
            botonExit.addEventListener("click", function (){
                target.remove()
            })
            
            const target_content = document.createElement("div")
            target_content.classList.add("target_content")
            target.appendChild(target_content)

            const time = document.createElement("h2")
            time.innerHTML = Math.floor(res.main.temp - 273) + "°C"
            target_content.appendChild(time)

            const imageTime = document.createElement("img")
            imageTime.src =  APIIMG+res.weather[0].icon+"@2x.png"
            imageTime.alt = "img no encontrada"
            target_content.appendChild(imageTime)

            const descriptionTarget = document.createElement("p")
            descriptionTarget.innerHTML = res.weather[0].description
            target_content.appendChild(descriptionTarget)



        })
}
