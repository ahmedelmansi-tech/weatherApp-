const log = console.log
const API_KEY = "579246c2fdbc4ef7ae7224730251306";




const container = document.querySelector(".container");
let search = document.getElementById("search"); 
const notFound  = document.querySelector(".not-found");
const weatherBody  = document.querySelector(".weather-body");
const weatherBodyImage  = document.querySelector(".weather-body img");
const temperature  = document.querySelector(".temperature");
const description  = document.querySelector(".description");
const humidity  = document.querySelector(".detailes .humidity div span");
const wind  = document.querySelector(".detailes .wind div span");
const footer = document.querySelector("footer");




search.addEventListener("click" , function(){
    let city = document.getElementById("city").value;
    const api = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

        container.classList.remove("fadeIn");


    // first Check if the city is empty 
    if (city === ''){
        return;
    }

    fetch(api)
    .then(res => {

        if (!res.ok){
            log("Miss Typing Country");
            container.style.height = '360px'
            notFound.style.display = 'block';
            weatherBody.style.display = 'none';
            footer.style.display = 'none';
            // throw new Error(`HTTP Error: ${res.status}`);
        }

        return res.json()
    })
    .then(data => {


        log(data)

            if (data.error) {
                notFound.style.display = 'block';
                weatherBody.style.display = 'none';
                log("API Error:", data.error.message);
                return;
            }


            container.style.height = `500px`;
            notFound.style.display = 'none';
            weatherBody.style.display = 'block';
            footer.style.display = 'block';
            temperature.innerHTML = `${data.current.temp_c} <sup>o</sup>C`;
            description.innerHTML = `${data.current.condition.text};`
            humidity.innerHTML = `${data.current.humidity}%`
            wind.innerHTML = `${data.current.wind_kph}Km/h`
            
            switch (data.current.condition.text){
                case "Sunny":
                  weatherBodyImage.src = `./images/clear.png`;
                  break;  

                case "Partly cloudy":
                  weatherBodyImage.src = `./images/cloud.png`;
                  break; 

                case "Partly Cloudy":
                  weatherBodyImage.src = `./images/cloud.png`;
                  break; 

                case "Light rain shower":
                  weatherBodyImage.src = `./images/rain.png`;
                  break; 

                case "Clear":
                  weatherBodyImage.src = `./images/clear.png`;
                  break; 

                case "Moderate or heavy rain with thunder":
                  weatherBodyImage.src = `./images/snow.png`;
                  break; 

                defaut:
                  weatherBodyImage.src = `./images/snow.png`;
                  
            }
                log(data)

    })
})


/*  
01129386769  
631978293

01104896954
153158251

01129499385
124102532

01129487918
176055893

01129512442
168127546

01158508746
181242887

01124851963
190758565

*/  