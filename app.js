const inputBox=document.querySelector(".input-box");
const btn=document.getElementById("btn");
const weather_img=document.querySelector(".weather-img");
const tempe=document.querySelector(".temp");
const desc=document.querySelector(".desc");
const humidity=document.getElementById("humidity");
const wind_speed=document.getElementById("wind-speed");


async function checkWeather(city){
    const api_key="ecb5b4602bd886245cc0c402eef83919";
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data= await fetch(`${url}`).then(response => response.json());

    //if user enters wrong name
    if(weather_data.cod===`404`)
        {
            weather_img.src="./assest/pageNotFound.jpg";
            alert('Please enter correct name');
            return;
        }
   tempe.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`; //kelvin to celsius =(kelvin-273.15)
   desc.innerHTML=`${weather_data.weather[0].description}`
   humidity.innerHTML=`${weather_data.main.humidity}%`;
   wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;

   //tp put images
   switch(weather_data.weather[0].main)
   {
    case "Clouds":
        weather_img.src="./assest/cloud.png";
        break;
    
    case "Clear":
        weather_img.src="./assest/clear.png";
        break;
    case "Rain":
        weather_img.src="./assest/rain.png";
        break;
    case "Mist":
        weather_img.src="./assest/mist.png";
        break;
    case "Snow":
        weather_img.src="./assest/snow.png";
        break;
   }
   console.log(weather_data);
}
btn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
})