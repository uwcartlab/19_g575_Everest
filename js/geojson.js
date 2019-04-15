/* Map of GeoJSON data from emission.geojson */

// Global variable to hold layer
var searchLayer;

//function to instantiate the Leaflet map
function createMap(){
    //create the map
    mapboxgl.accessToken = 'pk.eyJ1IjoibmlzaGlkaWxpcHNvbnRha2tlIiwiYSI6ImNqY3FucHJ4azAzNXgzM3MwbGRvM3M2YWsifQ.Mwh9X4xZhkSBBCTfBlZHEQ';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/nishidilipsontakke/cjuhnd62s559x1fqmt6kccmfe',
      center: [86.924374,27.988195],
      zoom: 10.0
    });
};




function createSequenceControls(map,attributes){
$('#panel').append('<input class="range-slider" style="margin: 10px 10px 10px 10px;width: 93%;" type="range">');
$('#panel').append('<div class="row" style="text-align: center;"><div class="col-6"><button class="skip btn-sm btn btn-outline-info" id="reverse"><i class="fas fa-angle-double-left"> Reverse</i></button></div> <div class="col-6"><button class="skip btn-sm btn btn-outline-info" id="forward">Skip <i class="fas fa-angle-double-right"></i></button></div></div>');

    //set slider attributes
    $('.range-slider').attr({
        max: 6,
        min: 0,
        value: 0,
        step: 1
    });


   
};

$(document).ready(createMap); // calling create map function on document ready