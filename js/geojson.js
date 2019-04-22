
// Global variable to hold layer
var searchLayer;
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
//function to instantiate the Leaflet map
function createMap(){
    //create the map
    mapboxgl.accessToken = 'pk.eyJ1IjoibmlzaGlkaWxpcHNvbnRha2tlIiwiYSI6ImNqY3FucHJ4azAzNXgzM3MwbGRvM3M2YWsifQ.Mwh9X4xZhkSBBCTfBlZHEQ';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/nishidilipsontakke/cjuhnd62s559x1fqmt6kccmfe',
      center: [86.924374,27.988195],
      zoom: 10.0
    });

    map.on('load', function () {
         
        map.addSource('contours', {
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-terrain-v2'
        });
        map.addLayer({
        'id': 'Elevation',
        'type': 'line',
        'source': 'contours',
        'source-layer': 'contour',
        'layout': {
          'visibility': 'none',
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
        'line-color': '#877b59',
        'line-width': 1,
        }
        });
        
      });

        var toggleableLayerIds = [ 'Elevation'];

 
        for (var i = 0; i < toggleableLayerIds.length; i++) {
        var id = toggleableLayerIds[i];
         
        var link = document.createElement('a');
        link.href = '#';
        //link.className = 'active';
        link.textContent = id;
         
        link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();
         
        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
         
        if (visibility === 'visible') {
        map.setLayoutProperty(clickedLayer, 'visibility', 'none');
        this.className = '';
        } else {
        this.className = 'active';
        map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
        };
         
        var layers = document.getElementById('menu');
        layers.appendChild(link);
        }
};




function createSequenceControls(map,attributes){
//$('#panel').append('<input class="range-slider" style="margin: 10px 10px 10px 10px;width: 93%;" type="range">');
$('#panel').append('<div class="row" style="text-align: center;"><div class="col-4"><button class="skip btn-sm btn" id="reverse"><i class="fas fa-backward"></i></button></div> <div class="col-4"><button class="skip btn-sm btn" id="play"><i class="fas fa-play"></i></button></div> <div class="col-4"><button class="skip btn-sm btn" id="forward"><i class="fas fa-forward"></i></button></div></div>');

    //set slider attributes
    $('.range-slider').attr({
        max: 6,
        min: 0,
        value: 0,
        step: 1
    });


   
};

$("#buttonweather").click(function(){
    $("#weatherwidget").toggle();
  });

//$(document).ready(); // calling create map function on document ready

$(document).ready(function(){        
    $('#welcomeWindow').modal('show');
    createMap();
    createSequenceControls();
   }); 
  /*   window.onload = function () {
console.log(localStorage.getItem("hasCodeRunBefore"));
    if (localStorage.getItem("hasCodeRunBefore") == false) {
      $('#test').modal('show');
        localStorage.setItem("hasCodeRunBefore", true);
    }

    createMap();
}*/