
// weather api
// declarations
 let myKey = "c103953a288605d521acbc32ace7f35b";
 let btn = document.querySelector(".btn");
 let details = document.querySelector(".weather-inner-cont");
 let inpt = document.querySelector(".search-input");
 let loader= document.querySelector(".loader");



let newDate = new Date();
let currentDay = newDate.getDay();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

switch (currentDay) {
    case 0:
        day = "SUN";
        break;

    case 1:
        day = "MON";
        break;
    case 2:
        day = "TUES";
        break;
    case 3:
        day = "WED";
        break;
    case 4:
        day = "THURS";
        break;
    case 5:
        day = "FRI";
        break;
    case 6:
        day = "SAT";
        break;

}
let dates =  `${day}/ ${month}/${year}`
 function viewApi() {
    inpt.addEventListener("keyup", ()=>{
       
        if (e.key == "Enter" && e.target.value) {
            inptValue = e.target.value;
            // viewApi(inptValue)
            loader.style.display = "flex";
            const countryName = inpt.value;
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${myKey}`;
            fetch(api)
        .then((res)=>{
            return res.json();
        }).then((data)=>{
            loader.style.display = "none";
            // console.log(data);
            const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            const temp = data.main.temp - 273.15;
            let lat = data.coord.lat;
            let long = data.coord.lon;
            let rise = data.sys.sunset/20000000;
            let set = data.sys.sunrise/200000;
            // console.log(icon);
            const display =`
            <div class="weather-header">
            <div class="search-icon"> <img src="image/icon.png" class="search-img" onclick="searchAppear()">
            <div class="inpt-search-cont">
                <input type="text" placeholder="Search location" class="search-input">
            </div>
            </div>
            <div class="points-icon-holder"> 
                <img src="image/Rectangle 2.png" class="point-img">
                <img src="image/Rectangle 3.png" class="point-img">
                <img src="image/Rectangle 4.png" class="point-img">
            
            </div>
            <div class="bar-icon-holder"> <img src="image/icon (2).png" class="vector"></div>
        </div>
        <div class="Name-display">
           <h2 class="city-name">${data.name}</h2>
           <h4 class="date">${dates}</h4>
        </div>
        <div class="condition-display">
            <div class="condition-icon"><img src= "${icon}"/></div>
            <div class="temperature">${Math.floor(temp)}&#8451</div>
            </div>
            <div class="decription">${data.weather[0].description}&#8451</div>
        <div class="row-display">
            <div class="row wind">
                <div class="wind-img">
                    <img src="image/Vector.png" alt="">
                    <i class="wind-name">Wind</i>
                </div>
                <div class="content">
                ${data.wind.speed}mph
                &#8451
                </div>
            </div>
            <div class="row humid">
                <div class="humid-img">
                   <img src="image/icon (1).png" alt=""> 
                   <i class="humid-name">Humidity</i>
                </div>
                <div class="content-humid">
                ${data.main.humidity} &#8451
                </div>
                </div>
                <div class="row rinny">
                <div class="rainy-img">
                    <img src="image/umbrella.png" alt="">
                    <i class="rainy-name">Pressure</i>
                </div>
                <div class="content-rainy">
                ${data.main.pressure}  <span> mm Hg </span>
                </div>
                </div>
                </div>
                <div class="col-btn-holder">
                <button class="col">
                <p class="time">Lat</p>
                <p class="icon"><img src="image/icon (3).png" alt=""></p>
                <p class="temp">${Math.floor(lat)} &deg;</p>
                </button>
                <button class="col">
                <p class="time">Long</p>
                <p class="icon"><img src="image/icon (4).png" alt=""></p>
                <p class="temp">${Math.floor(long)}&deg;</p>
                </button>
                <button class="col">
                <p class="time">Set</p>
                <p class="icon"><img src="image/icon (5).png" alt=""></p>
                <p class="temp">${Math.floor(set)} &#8451;</p>
            </button>
            <button class="col">
                <p class="time">Rise</p>
                <p class="icon"><img src="image/icon (3).png" alt=""></p>
                <p class="temp">${Math.floor(rise)} &#8451;</p>
            </button>
        </div>
            `
            details.innerHTML = display;
        })
    }
    })
 }
//  viewApi();
//  inpt.addEventListener("keyup", (e)=>{
   
//  })