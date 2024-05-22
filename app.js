const inputBox=document.querySelector(".input-box");
const btn=document.getElementById("btn");
const weather_img=document.querySelector(".weather-img");
const temp=document.querySelector(".temp");
const desc=document.querySelector(".desc");
const humidity=document.getElementById("humidity");
const wind_speed=document.getElementById("wind-speed");


async function checkWeather(city){
    const api_key="ecb5b4602bd886245cc0c402eef83919";
    const url= `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${api_key}`;
    const weather_data= await fetch(`${url}`).then(response => response.json());
    console.log(weather_data)
}
btn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
})