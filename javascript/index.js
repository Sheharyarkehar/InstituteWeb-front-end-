var abt=document.querySelector(".About");
var prep=document.querySelector(".Pre");
abt.addEventListener("click",function(){
prep.classList.toggle("color_change");
})
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(24.9385767,66.9864004),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}