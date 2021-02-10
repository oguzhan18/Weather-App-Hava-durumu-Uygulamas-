var first = "https://fcc-weather-api.glitch.me/api/current?";
var second = ""
var api = first + second;

var x = document.getElementById("location");
var change = document.getElementById("format");

if (navigator.geolocation){
       navigator.geolocation.getCurrentPosition(function (position) {
    api = "https://fcc-weather-api.glitch.me/api/current?" + "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
     console.log(api);
$.getJSON(api, function(json) {
  $("#icon").attr("src",json.weather[0].icon);
  $("#current").html(Math.floor(json.main.temp * 1.8 + 32) + "°F");
  $("#high").html(Math.floor(json.main.temp_max * 1.8 + 32) + "°F");
  $("#low").html(Math.floor(json.main.temp_min * 1.8 + 32) + "°F");
  $("#location").html(json.name);
  
});
})

}
  else { 
    alert("bu hava durumu uygulamasını kullanmak için tarayıcınızı yükseltin");
       }
var cel = false;
   
  $("#format").click(function(){
   if (cel == false){
   $.getJSON(api, function(json) { $("#current").html(Math.floor(json.main.temp) + "°C");
  $("#high").html(Math.floor(json.main.temp_max) + "°C");
  $("#low").html(Math.floor(json.main.temp_min) + "°C");
  $("#format").html("°F");
  cel = true;
    })
   }
    else{
 $.getJSON(api, function(json) {
 $("#current").html(Math.floor(json.main.temp * 1.8 + 32) + "°F");
  $("#high").html(Math.floor(json.main.temp_max * 1.8 + 32) + "°F");
  $("#low").html(Math.floor(json.main.temp_min * 1.8 + 32) + "°F");
  $("#format").html("°C") 
    cel = false;
      })
    }
    })
    /*
 ██████╗  ██████╗ ██╗   ██╗███████╗██╗  ██╗ █████╗ ███╗   ██╗     ██████╗ █████╗ ██████╗ ██████╗ ████████╗
██╔═══██╗██╔════╝ ██║   ██║╚══███╔╝██║  ██║██╔══██╗████╗  ██║    ██╔════╝██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝
██║   ██║██║  ███╗██║   ██║  ███╔╝ ███████║███████║██╔██╗ ██║    ██║     ███████║██████╔╝██████╔╝   ██║   
██║   ██║██║   ██║██║   ██║ ███╔╝  ██╔══██║██╔══██║██║╚██╗██║    ██║     ██╔══██║██╔══██╗██╔══██╗   ██║   
╚██████╔╝╚██████╔╝╚██████╔╝███████╗██║  ██║██║  ██║██║ ╚████║    ╚██████╗██║  ██║██║  ██║██║  ██║   ██║   
 ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝     ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   
                                                                     ██                                     
 ██████╗ ███████╗███████╗██████╗  ██████╗ ██████╗ ██████╗ 
██╔══██╗██╔════╝██╔════╝██╔══██╗██╔════╝██╔═══██╗██╔══██╗
██║  ██║█████╗  █████╗  ██████╔╝██║     ██║   ██║██║  ██║ ----------------------------------------------
██║  ██║██╔══╝  ██╔══╝  ██╔═══╝ ██║     ██║   ██║██║  ██║ 
██████╔╝███████╗███████╗██║     ╚██████╗╚██████╔╝██████╔╝
╚═════╝ ╚══════╝╚══════╝╚═╝      ╚═════╝ ╚═════╝ ╚═════╝ 

 ██████╗ █████╗ ██████╗ ████████╗     █████╗ ██████╗ ██████╗ 
██╔════╝██╔══██╗██╔══██╗╚══██╔══╝    ██╔══██╗██╔══██╗██╔══██╗
██║     ███████║██████╔╝   ██║       ███████║██████╔╝██████╔╝
██║     ██╔══██║██╔══██╗   ██║       ██╔══██║██╔═══╝ ██╔═══╝ 
╚██████╗██║  ██║██║  ██║   ██║       ██║  ██║██║     ██║     
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚═╝  ╚═╝╚═╝     ╚═╝    
 */