const apiKey = '27d2f772a50c29538689a99856dcc049';
let unit=localStorage.getItem('unit');
let symbol=localStorage.getItem('symbol');
console.log(unit);
console.log(symbol);
if(!unit){
unit="metric";
symbol='°C';
}
function getCity(){
    let existingChart = Chart.getChart("myChart1");
    document.querySelector(".anotherCity").innerHTML="";
            if (existingChart) {
                existingChart.destroy();
            }
            
        
   

    let city=document.getElementById("city").value;
   
    
    const apiUrl=`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`;

    //const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}`;

    fetch(apiUrl)
    .then(response => {
        if(!response.ok){
            alert("Enter a valid city name");
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
        let anotherCity=document.querySelector(".anotherCity");
      
        const chartD=[];
        const chartT=[];
        let extremeC;
        


for(let i=1;i<data.list.length-1;i++){
    
    let d=new Date(data.list[i].dt_txt);
    if(d.getHours()==0){
        let dChart=data.list[i].dt_txt;
let tempChart=data.list[i].main.temp.toFixed(2)
if(unit=="metric"){
if(tempChart<0 ){
extremeC="Extreme cold";

}
else if(tempChart>40){
    extremeC="Extreme hot";
    
    }
    else{extremeC=""}}
    if(unit=="standard"){
      if(tempChart<273.15){
      extremeC="Extreme cold";
      
      }
      else if(tempChart>313.15){
          extremeC="Extreme hot";
          
          }
          else{extremeC=""}}
        if(unit=="imperial"){
            if(tempChart<32){
            extremeC="Extreme cold";
            
            }
            else if(tempChart>104){
                extremeC="Extreme hot";
                
                }
                else{extremeC=""}}
                      

chartD.push( toDayWeek(dChart));
chartT.push( tempChart);
let html=document.createElement("div");
html.innerHTML=`<div class="anotherC"><canvas id="myChart1"></canvas>
</div><div><h2 id="mCityName">${data.city.name}</h2></div>
<div><h3 id="mCountry">${data.city.country}</h3></div>
<div><img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" alt="" id="myIcon"></div>
<div><p id="myWeather">${data.list[i].weather[0].description}</p></div>
<div><p id="mCity">${data.list[i].main.temp.toFixed(2)+" "+symbol}</p></div>
<div><p id="myHumidity">${data.list[i].main.humidity}</p></div>
<div><p id="myWind">${data.list[i].wind.speed}</p></div>
<div><p id="myExtreme">${extremeC}</p>`;

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
         




        

    })
   
    
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
        const chartD=[];
        const chartT=[];
html1.innerHTML=`<div><h2 id="mCityName">${data.city.name}</h2></div>
<div><h3 id="mCountry">${data.city.country}</h3></div>
<div><img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="" id="myIcon"></div>
<div><p id="myWeather">${data.list[0].weather[0].description}</p></div>
<div><p id="mCity">${data.list[0].main.temp.toFixed(2)+" "+symbol}</p></div>
<div><p id="myHumidity">${data.list[0].main.humidity}</p></div>
<div><p id="myWind">${data.list[0].wind.speed}</p></div>`;
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

for(let i=1;i<data.list.length-1;i++){
    
    let d=new Date(data.list[i].dt_txt);
    if(d.getHours()==0){
        let dChart=data.list[i].dt_txt;
let tempChart=data.list[i].main.temp.toFixed(2)
chartD.push( toDayWeek(dChart));
chartT.push( tempChart);
let html=document.createElement("div");
html.innerHTML=`<div><h2 id="mCityName">${data.city.name}</h2></div>
<div><h3 id="mCountry">${data.city.country}</h3></div>
<div><img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" alt="" id="myIcon"></div>
<div><p id="myWeather">${data.list[i].weather[0].description}</p></div>
<div><p id="mCity">${data.list[i].main.temp.toFixed(2)+" "+symbol}</p></div>
<div><p id="myHumidity">${data.list[i].main.humidity}</p></div>
<div><p id="myWind">${data.list[i].wind.speed}</p></div>`;
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

  
  
