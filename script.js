const apiKey = '27d2f772a50c29538689a99856dcc049';
let unit=localStorage.getItem('unit');
if(unit=="metric"){document.querySelector("#units").value="Celisius";}
if(unit=="standard"){document.querySelector("#units").value="Kelvin";}
if(unit=="imperial"){document.querySelector("#units").value="Fahrenheit";}

let symbol=localStorage.getItem('symbol');
console.log(unit);
console.log(symbol);
if(!unit){
unit="metric";
symbol='°C';
}
function getCity(){
    let existingChart = Chart.getChart("myChart1");
    let anotherCity=document.querySelector(".anotherCity");
    let chartAnother=document.querySelector(".chartAnother");
    document.querySelector(".anotherCity").innerHTML="";
            if (existingChart) {
                existingChart.destroy();
            }
            
        
   

    let city=document.getElementById("city").value;
    let showAlert = true;
   
    
    const apiUrl=`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`;

    //const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}`;

    fetch(apiUrl)
    .then(response => {
        if(!response.ok){
            alert("Enter a valid city name");
            showAlert = false;
            return;
        }
        return response.json();
    })
    
    .then(data => {
        
       /* let h=document.getElementById("aCityName");
        let h1=document.getElementById("aCountry");
        let p1=document.getElementById("aCity");
        let p2=document.getElementById("anIcon");
        let p3=document.getElementById("aWeather");
        let p4=document.getElementById("aHumidity");
        let p5=document.getElementById("aWind");
      
       name1 =data.city.name;
       name2=data.city.country;
        h.textContent=`${name1}`;
        h1.textContent=`${name2}`;
        temp1=data.list[0].main.temp - 273.15;
        p1.textContent=temp1.toFixed(2)+' C';
        p2.src="https://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+"@2x.png";
        p3.textContent=data.list[0].weather[0].description;
        p4.textContent=data.list[0].main.humidity;
        p5.textContent=data.list[0].wind.speed;*/
       if(showAlert){
      
        const chartD=[];
        const chartT=[];
        let extremeC=document.createElement("div");
            
        let chartGraph=document.createElement("div");
chartGraph.innerHTML='<div class="chartAnother"><canvas id="myChart1"></canvas></div>';
anotherCity.appendChild(chartGraph);  

        let d=new Date(data.list[0].dt_txt);
       
            let dChart=data.list[0].dt_txt;
    let tempChart=data.list[0].main.temp.toFixed(2)
    if(unit=="metric"){
    if(tempChart<0 ){
    extremeC=`<div><p id="myExtreme"><i id="alert" class="fa-solid fa-triangle-exclamation"></i> Extreme cold</p></div>`;
    
    }
    else if(tempChart>40){
        extremeC=`<div><p id="myExtreme"><i id="alert" class="fa-solid fa-triangle-exclamation"></i> Extreme hot</p></div>`;
        
        }
        else{extremeC=""}}
        if(unit=="standard"){
          if(tempChart<273.15){
          extremeC=`<div><p id="myExtreme"><i id="alert" class="fa-solid fa-triangle-exclamation"></i> Extreme cold</p></div>`;
          
          }
          else if(tempChart>313.15){
             extremeC=`<div><p id="myExtreme"><i id="alert" class="fa-solid fa-triangle-exclamation"></i> Extreme hot</p></div>`;
              
              }
              else{extremeC=""}}
            if(unit=="imperial"){
                if(tempChart<32){
               extremeC=`<div><p id="myExtreme"><i id="alert" class="fa-solid fa-triangle-exclamation"></i> Extreme cold</p></div>`;
                
                }
                else if(tempChart>104){
                    extremeC=`<div><p id="myExtreme"><i id="alert" class="fa-solid fa-triangle-exclamation"></i> Extreme hot</p></div>`;
                    
                    }
                    else{extremeC=""}}
                          
    
    chartD.push( toDayWeek(dChart));
    chartT.push( tempChart);
    let html=document.createElement("div");
    html.innerHTML=`
    <div><div><h2 id="mCityName">${data.city.name}</h2></div>
    <div><h3 id="mCountry">${data.city.country}</h3></div>
    <div><h4>Today</h4></div>
    <div><img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="" id="myIcon"></div>
    <div><p id="myWeather"><i class="fa-solid fa-cloud"></i> ${data.list[0].weather[0].description.charAt(0).toUpperCase()+data.list[0].weather[0].description.slice(1)}</p></div>
    <div><p id="mCity"><i class="fas fa-temperature-three-quarters"></i> ${data.list[0].main.temp.toFixed(2)+" "+symbol}</p></div>
    <div><p id="myHumidity"><i class="fas fa-tint"></i> ${data.list[0].main.humidity}%</p></div>
    <div><p id="myWind"><i class=" fas fa-wind"></i> ${data.list[0].wind.speed} m/s</p></div>
    ${extremeC}</div>`;
    
    anotherCity.appendChild(html);
    //console.log(data.list[i].dt_txt);
    
    
    
       








































for(let i=1;i<data.list.length;i++){
    
    let d=new Date(data.list[i].dt_txt);
    if(d.getHours()==12){
        let dChart=data.list[i].dt_txt;
let tempChart=data.list[i].main.temp.toFixed(2)
if(unit=="metric"){
    if(tempChart<0 ){
    extremeC=`<div><p id="myExtreme"><i id="alert" class="fa-solid fa-triangle-exclamation"></i> Extreme cold</p></div>`;
    
    }
    else if(tempChart>40){
        extremeC=`<div><p id="myExtreme"><i id="alert" class="fa-solid fa-triangle-exclamation"></i> Extreme hot</p></div>`;
        
        }
        else{extremeC=""}}
        if(unit=="standard"){
          if(tempChart<273.15){
          extremeC=`<div><p id="myExtreme"><i id="alert" class="fa-solid fa-triangle-exclamation"></i> Extreme cold</p></div>`;
          
          }
          else if(tempChart>313.15){
             extremeC=`<div><p id="myExtreme"><i id="alert" class="fa-solid fa-triangle-exclamation"></i> Extreme hot</p></div>`;
              
              }
              else{extremeC=""}}
            if(unit=="imperial"){
                if(tempChart<32){
               extremeC=`<div><p id="myExtreme"><i id="alert" class="fa-solid fa-triangle-exclamation"></i> Extreme cold</p></div>`;
                
                }
                else if(tempChart>104){
                    extremeC=`<div><p id="myExtreme"><i id="alert" class="fa-solid fa-triangle-exclamation"></i> Extreme hot</p></div>`;
                    
                    }
                    else{extremeC=""}
                          }
                      

chartD.push( toDayWeek(dChart));
chartT.push( tempChart);
let html=document.createElement("div");
html.innerHTML=`
<div><div><h2 id="mCityName">${data.city.name}</h2></div>
<div><h3 id="mCountry">${data.city.country}</h3></div>
<div><h4>${toDayWeek(data.list[i].dt_txt)}</h4></div>
<div><img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" alt="" id="myIcon"></div>
<div><p id="myWeather"><i class="fa-solid fa-cloud"></i> ${data.list[i].weather[0].description.charAt(0).toUpperCase()+data.list[i].weather[0].description.slice(1)}</p></div>
<div><p id="mCity"><i class="fas fa-temperature-three-quarters"></i> ${data.list[i].main.temp.toFixed(2)+" "+symbol}</p></div>
<div><p id="myHumidity"><i class="fas fa-tint"></i> ${data.list[i].main.humidity} %</p></div>
<div><p id="myWind"><i  class=" fa-solid fa-wind"></i> ${data.list[i].wind.speed} m/s</p></div>
${extremeC}</div>`;

anotherCity.appendChild(html);
//console.log(data.list[i].dt_txt);



    }

    
    
}
 

       
            const ctx1 = document.getElementById('myChart1');
            new Chart(ctx1, {
               
              type: 'line',
              data: {
                labels: chartD,
               

                datasets: [{
                  label: `# of temperature ${symbol}`,
                  data: chartT,
                  borderWidth: 1
                }]
              },
              options: {
                scales: {
                  y: {
                    beginAtZero: false
                    
                  }
                }
              }
            });
         




           

       }}
    )
    
   
    
}


//codeForAll

let myLatitude;
let myLongitude;
let name1;
let name2;
let temp1;

let text="test";

if("geolocation" in navigator){

    navigator.geolocation.getCurrentPosition(
function(position){
     myLatitude=position.coords.latitude;
     myLongitude=position.coords.longitude;
     const apiUrl1 = `http://api.openweathermap.org/data/2.5/forecast?lat=${myLatitude}&lon=${myLongitude}&appid=${apiKey}&units=${unit}`;
    console.log(myLatitude);
    console.log(myLongitude);
     fetch(apiUrl1)
    .then(response => {
        
        return response.json();
    })
    /*.then(data => {
        
        let h=document.getElementById("mCityName");
        let h1=document.getElementById("mCountry");
        let p1=document.getElementById("mCity");
        let p2=document.getElementById("myIcon");
        let p3=document.getElementById("myWeather");
        let p4=document.getElementById("myHumidity");
        let p5=document.getElementById("myWind");
      
       name1 =data.city.name;
       name2=data.city.country;
        h.textContent=`${name1}`;
        h1.textContent=`${name2}`;
        temp1=data.list[0].main.temp - 273.15;
        p1.textContent=temp1.toFixed(2)+' C';
        p2.src="https://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+"@2x.png";
        p3.textContent=data.list[0].weather[0].description;
        p4.textContent=data.list[0].main.humidity;
        p5.textContent=data.list[0].wind.speed;

        /********************************************** 
        let p11=document.getElementById("mCity1");
        let p22=document.getElementById("myIcon1");
        let p33=document.getElementById("myWeather1");
        let p44=document.getElementById("myHumidity1");
        let p55=document.getElementById("myWind1");
        p11.textContent=(data.list[1].main.temp - 273.15).toFixed(2)+' C';
        p22.src="https://openweathermap.org/img/wn/"+data.list[1].weather[0].icon+"@2x.png";
        p33.textContent=data.list[1].weather[0].description;
        p44.textContent=data.list[1].main.humidity;
        p55.textContent=data.list[1].wind.speed;

        console.log(data);
        console.log(data.list[0].weather[0].icon);

        console.log(data);
      
        

    }
    
    )*/
    .then(data=>{
        let main=document.querySelector(".main");
        let html1=document.createElement("div");
        html1.id="clickable";
        const chartD=[];
        const chartT=[];
html1.innerHTML=`<a href="#" onclick="hours3Forcast()"<div><h2 id="mCityName">${data.city.name}</h2></div>
<div><h3 id="mCountry">${data.city.country}</h3></div>
<div><h4>Today</h4></div>
<div><img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="" id="myIcon"></div>

<div><p id="myWeather"><i class="fa-solid fa-cloud"></i> ${data.list[0].weather[0].description.charAt(0).toUpperCase()+ data.list[0].weather[0].description.slice(1)}</p></div>
<div><p id="mCity"><i class="fas fa-temperature-three-quarters"></i>        ${data.list[0].main.temp.toFixed(2)+" "+symbol}</p></div>
<div><p id="myHumidity"><i class="fas fa-tint"></i>
${data.list[0].main.humidity} %</p></div>
<div><p id="myWind"><i class=" fas fa-wind"></i>
    ${data.list[0].wind.speed} m/s</p></div></a>`;
let dChart=data.list[0].dt_txt;
let fdate;

fdate = new Date(dChart);


let dayOfWeek=fdate.toLocaleDateString("en-US",{
    weekday:'long'
    
    });
console.log("FDATE TEST "+dayOfWeek);
console.log(data);
let tempChart=data.list[0].main.temp.toFixed(2)
chartD.push( dayOfWeek);
chartT.push( tempChart);
main.appendChild(html1);
//console.log(data.list[0].dt_txt,);

for(let i=1;i<data.list.length;i++){
    
    let d=new Date(data.list[i].dt_txt);
    if(d.getHours()==12){
        let dChart=data.list[i].dt_txt;
let tempChart=data.list[i].main.temp.toFixed(2)
chartD.push( toDayWeek(dChart));
chartT.push( tempChart);
let html=document.createElement("div");
html.innerHTML=`<div><h2 id="mCityName">${data.city.name}</h2></div>
<div><h3 id="mCountry">${data.city.country}</h3></div>
<div><h4>${toDayWeek(data.list[i].dt_txt)}</h4></div>
<div><img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" alt="" id="myIcon"></div>
<div><p id="myWeather"><i class="fa-solid fa-cloud"></i> ${data.list[i].weather[0].description.charAt(0).toUpperCase()+ data.list[i].weather[0].description.slice(1)}</p></div>
<div><p id="mCity"><i class="fas fa-temperature-three-quarters"></i> ${data.list[i].main.temp.toFixed(2)+" "+symbol}</p></div>
<div><p id="myHumidity"><i class="fas fa-tint"></i> ${data.list[i].main.humidity} %</p></div>
<div><p id="myWind"><i class=" fas fa-wind"></i> ${data.list[i].wind.speed} m/s</p></div>`;
main.appendChild(html);
console.log(data.list[i].dt_txt);


    }

}


       
            const ctx = document.getElementById('myChart');
            new Chart(ctx, {
               
              type: 'line',
              data: {
                labels: chartD,
               

                datasets: [{
                  label: `# of temperature ${symbol}`,
                  data: chartT,
                  borderWidth: 1
                }]
              },
              options: {
                scales: {
                  y: {
                    beginAtZero: false
                    
                  }
                }
              }
            });
         

console.log(data);

    })
   
},function(error){
console.error("Error getting location"+error.message)
},{enableHighAccuracy:true,
timeout:5000,
maximumAge:0}




            );}
            else{
                console.log("geolocation is not supported in this browser")
            }

   
function toDayWeek(dChart){

    let fdate;
    fdate = new Date(dChart);
    let dayOfWeek=fdate.toLocaleDateString("en-US",{
        weekday:'long'
        
        });
        return dayOfWeek;


}

 function changeUnits(){
let un=document.getElementById("units").value;
console.log(un);
if(un=="Kelvin"){localStorage.setItem('unit', 'standard');
localStorage.setItem('symbol', 'K');}
if(un=="Celisius"){localStorage.setItem('unit', 'metric');
localStorage.setItem('symbol', '°C');}
if(un=="Fahrenheit"){localStorage.setItem('unit', 'imperial');
localStorage.setItem('symbol', '°F');}
location.reload();

 }

function  hours3Forcast(){
  let main=document.querySelector(".main");
  main.innerHTML="";
  let myLatitude;
let myLongitude;
let name1;
let name2;
let temp1;

let text="test";

if("geolocation" in navigator){

    navigator.geolocation.getCurrentPosition(
function(position){
     myLatitude=position.coords.latitude;
     myLongitude=position.coords.longitude;
     const apiUrl1 = `http://api.openweathermap.org/data/2.5/forecast?lat=${myLatitude}&lon=${myLongitude}&appid=${apiKey}&units=${unit}`;
    console.log(myLatitude);
    console.log(myLongitude);
     fetch(apiUrl1)
    .then(response => {
        
        return response.json();
    })
    
    .then(data=>{
        let main=document.querySelector(".main");
        let html1=document.createElement("div");
        const chartD=[];
        const chartT=[];
html1.innerHTML=`<a href="#" onclick="hours3Forcast()"<div><h2 id="mCityName">${data.city.name}</h2></div>
<div><h3 id="mCountry">${data.city.country}</h3></div>
<div><h4>Now</h4></div>
<div><img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="" id="myIcon"></div>

<div><p id="myWeather"><i class="fa-solid fa-cloud"></i> ${data.list[0].weather[0].description.charAt(0).toUpperCase()+ data.list[0].weather[0].description.slice(1)}</p></div>
<div><p id="mCity"><i class="fas fa-temperature-three-quarters"></i>        ${data.list[0].main.temp.toFixed(2)+" "+symbol}</p></div>
<div><p id="myHumidity"><i class="fas fa-tint"></i>
${data.list[0].main.humidity} %</p></div>
<div><p id="myWind"><i class=" fas fa-wind"></i>
    ${data.list[0].wind.speed} m/s</p></div></a>`;
let dChart=data.list[0].dt_txt;
let fdate;

fdate = new Date(dChart);


let dayOfWeek=fdate.toLocaleDateString("en-US",{
    weekday:'long'
    
    });
console.log("FDATE TEST "+dayOfWeek);
console.log(data);
let tempChart=data.list[0].main.temp.toFixed(2)
chartD.push( dayOfWeek);
chartT.push( tempChart);
main.appendChild(html1);
//console.log(data.list[0].dt_txt,);

for(let i=1;i<8;i++){
    
    let d=new Date(data.list[i].dt_txt);
    
        let dChart=data.list[i].dt_txt;
let tempChart=data.list[i].main.temp.toFixed(2)
chartD.push( toDayWeek(dChart));
chartT.push( tempChart);
let html=document.createElement("div");
html.innerHTML=`<div><h2 id="mCityName">${data.city.name}</h2></div>
<div><h3 id="mCountry">${data.city.country}</h3></div>
<div><h4>${toTime(data.list[i].dt_txt)}</h4></div>
<div><img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" alt="" id="myIcon"></div>
<div><p id="myWeather"><i class="fa-solid fa-cloud"></i> ${data.list[i].weather[0].description.charAt(0).toUpperCase()+ data.list[i].weather[0].description.slice(1)}</p></div>
<div><p id="mCity"><i class="fas fa-temperature-three-quarters"></i> ${data.list[i].main.temp.toFixed(2)+" "+symbol}</p></div>
<div><p id="myHumidity"><i class="fas fa-tint"></i> ${data.list[i].main.humidity} %</p></div>
<div><p id="myWind"><i class=" fas fa-wind"></i> ${data.list[i].wind.speed} m/s</p></div>`;
main.appendChild(html);
console.log(data.list[i].dt_txt);


    

}


       
            
         

console.log(data);

    })
   
},function(error){
console.error("Error getting location"+error.message)
},{enableHighAccuracy:true,
timeout:5000,
maximumAge:0}




            );}
            else{
                console.log("geolocation is not supported in this browser")
            }

}


function toTime(d){

  let fdate;
  fdate = new Date(d);
  let hours=fdate.getHours();
  if(hours<10){
    hours="0"+hours;
  }
  let minutes=fdate.getMinutes();
  if(minutes<10){
    minutes="0"+minutes;
  }
  let time=hours+":"+minutes;
      
      
      return time;


}