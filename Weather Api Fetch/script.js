document.addEventListener('DOMContentLoaded',()=>{
    const cityInput = document.getElementById('city-input')
    const getWeatherBtn = document.getElementById('get-weather-btn')
    const weatherInfo = document.getElementById('weather-info')
    const cityNameDisplay = document.getElementById('city-name')
    const tempDisplay = document.getElementById('temperature')
    const descDisplay = document.getElementById('description')
    const errorMessage = document.getElementById('error-message')


    const API_KEY = '753aad24ad826cab507c8e81298ab796'


    getWeatherBtn.addEventListener('click',async()=>{
        const cityName = cityInput.value.trim()
        if(!cityName)return;
        //server may throw error
        //server/db is always in another continent
        try {
         const watherData = await fetchWeatherData(cityName);
         displayWeatherData(watherData);
           
            
        } catch (error) {
            showError()
            
        }



    })

    async function fetchWeatherData(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url)
        console.log(response)

        if(!response.ok ){
            throw new Error("City Not Found ")
        }

        const data = await response.json()
        return data
        

    }

    function displayWeatherData(watherData){

        console.log(watherData)

        const {name, main, weather} = watherData
        cityNameDisplay.textContent=name
        tempDisplay.textContent = `Temperature : ${main.temp}`
        descDisplay.textContent = `Weather :${weather[0].description}`


        weatherInfo.classList.remove('hidden')
        errorMessage.classList.add('hidden')

       

    }

    function showError(){
        weatherInfo.classList.add('hidden')
        errorMessage.classList.remove('hidden')
    }


})