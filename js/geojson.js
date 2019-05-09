
//function to instantiate the Leaflet map
function createMap(){
  //create the map
  mapboxgl.accessToken = 'pk.eyJ1IjoibmlzaGlkaWxpcHNvbnRha2tlIiwiYSI6ImNqY3FucHJ4azAzNXgzM3MwbGRvM3M2YWsifQ.Mwh9X4xZhkSBBCTfBlZHEQ';
  
  //SW coordinate, NE coordinate boundaries
  var bounds = [[86.770444, 27.9033365], [87.054519, 28.08]];

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/nishidilipsontakke/cjuhnd62s559x1fqmt6kccmfe',
    center: [86.909, 27.988],
    zoom: 13,
    maxBounds: bounds
});

//Navigation controls added
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'bottom-left');

map.on("load", function() {
  /* Image: An image is loaded and added to the map. */
  map.loadImage("images/camp_deselect.png", function(error, image) {
    
  if (error) throw error;
  map.addImage("custom-marker", image);
  /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
  map.addLayer({
  id: "baseCamp",
  type: "symbol",
  /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
  source: {
  type: "geojson",
  data: {
  type: 'FeatureCollection',
  features: [
  {
  type: 'Feature',
  properties: {},
  geometry: {
  type: "Point",
  coordinates: [86.85719586641274, 28.00647209182954]
  }
  }
  ]
  }
  },
  layout: {
  "icon-image": "custom-marker",
  }
  });
  map.addLayer({
    id: "camp1",
    type: "symbol",
    /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
    source: {
    type: "geojson",
    data: {
    type: 'FeatureCollection',
    features: [
    {
    type: 'Feature',
    properties: {},
    geometry: {
    type: "Point",
    coordinates: [86.87624051444797, 27.98704598816326]
    }
    }
    ]
    }
    },
    layout: {
    "icon-image": "custom-marker",
    }
    });
  map.addLayer({
    id: "camp2",
    type: "symbol",
    /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
    source: {
    type: "geojson",
    data: {
    type: 'FeatureCollection',
    features: [
    {
    type: 'Feature',
    properties: {},
    geometry: {
    type: "Point",
    coordinates: [86.90335492493271, 27.980322036569067]
    }
    }
    ]
    }
    },
    layout: {
    "icon-image": "custom-marker",
    }
    });
  map.addLayer({
    id: "camp3",
    type: "symbol",
    /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
    source: {
    type: "geojson",
    data: {
    type: 'FeatureCollection',
    features: [
    {
    type: 'Feature',
    properties: {},
    geometry: {
    type: "Point",
    coordinates: [86.92478118334084, 27.967650460942664]
    }
    }
    ]
    }
    },
    layout: {
    "icon-image": "custom-marker",
    }
    });
  map.addLayer({
    id: "camp4",
    type: "symbol",
    /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
    source: {
    type: "geojson",
    data: {
    type: 'FeatureCollection',
    features: [
    {
    type: 'Feature',
    properties: {},
    geometry: {
    type: "Point",
    coordinates: [86.93082159811098, 27.973526561469413]
    }
    }
    ]
    }
    },
    layout: {
    "icon-image": "custom-marker",
    }
    });
});
map.loadImage("images/khumbu_icefall_deselect.png", function(error, image) {        
  if (error) throw error;
  map.addImage("custom-marker1", image);
  /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
  map.addLayer({
    id: "khumbuIcefall",
    type: "symbol",
    /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
    source: {
    type: "geojson",
    data: {
    type: 'FeatureCollection',
    features: [
    {
    type: 'Feature',
    properties: {},
    geometry: {
    type: "Point",
    coordinates: [86.87348093822881, 27.99618320240794]
    }
    }
    ]
    }
    },
    layout: {
    "icon-image": "custom-marker1",
    }
  });
});
map.loadImage("images/south_summit_deselect.png", function(error, image) {  
  if (error) throw error;
  map.addImage("custom-marker2", image);
    map.addLayer({
      id: "southSummit",
      type: "symbol",
      /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
      source: {
      type: "geojson",
      data: {
      type: 'FeatureCollection',
      features: [
      {
      type: 'Feature',
      properties: {},
      geometry: {
      type: "Point",
      coordinates: [86.9258221361935, 27.985193461286066]
      }
      }
      ]
      }
      },
      layout: {
      "icon-image": "custom-marker2",
      }
    });
});

map.loadImage("images/hillary_step_deselect.png", function(error, image) {       
  if (error) throw error;
  map.addImage("custom-marker3", image);
  map.addLayer({
  id: "hillaryStep",
  type: "symbol",
  /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
  source: {
  type: "geojson",
  data: {
  type: 'FeatureCollection',
  features: [
  {
  type: 'Feature',
  properties: {},
  geometry: {
  type: "Point",
  coordinates: [86.92505121693608, 27.98771791865574]
  }
  }
  ]
  }
  },
  layout: {
  "icon-image": "custom-marker3",
  }
  });
});

map.loadImage("images/summit_deselect.png", function(error, image) {       
  if (error) throw error;
  map.addImage("custom-marker4", image);
  /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
  map.addLayer({
    id: "summit",
    type: "symbol",
    /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
    source: {
    type: "geojson",
    data: {
    type: 'FeatureCollection',
    features: [
    {
    type: 'Feature',
    properties: {},
    geometry: {
    type: "Point",
    coordinates: [86.9254, 27.9889]
    }
    }
    ]
    }
    },
    layout: {
    "icon-image": "custom-marker4",
    }
    });
  });
});

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'baseCamp', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
  
  var popup = new mapboxgl.Popup({ offset: 0 })
  .setText("Base Camp");

  //Add things to the side panel
  var div = document.getElementById('locImg');
  div.innerHTML = '';
  div.innerHTML = "<img src=\"images/basecamp.jpg\" width=\"200px\" height=\"150px\">";

  var div = document.getElementById('elevation');
  div.innerHTML = '';
  div.innerHTML = div.innerHTML = '<span style="color:#1499ff">17,600 ft (5,380 m)</span>';

  var div2 = document.getElementById('oxygen');
  div2.innerHTML = '';
  div2.innerHTML = '11% (21% at Sea Level)';
  
  var div3 = document.getElementById('distToSummit');
  div3.innerHTML = '';
  div3.innerHTML = '11,435 ft (3,485 m)';

  var div4 = document.getElementById('distToBaseCamp');
  div4.innerHTML = '';
  div4.innerHTML = 'You are here!';

  var div5 = document.getElementById('info');
  div5.innerHTML = '';
  div5.innerHTML = 'This is the starting point of your ascent; make sure you’ve spent enough time acclimatizing before beginning!';
  
  var div6 = document.getElementById('Location');
  div6.innerHTML = '';
  div6.innerHTML = 'Base Camp';

  // create DOM element for the marker
  var el = document.createElement('div');
  el.id = 'marker';
  //console.log(route.features[0].geometry.coordinates[counter]);
  // create the marker
  new mapboxgl.Marker(el)
    .setLngLat([86.85719586641274, 28.00647209182954])
    //.setPopup(popup) // sets a popup on this marker
    .addTo(map)
    //.togglePopup();
});

  // When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'khumbuIcefall', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
   
  var popup = new mapboxgl.Popup({ offset: 0 })
  .setText("Khumbu Icefall");

  //Add things to the side panel
  var div = document.getElementById('locImg');
  div.innerHTML = '';
  div.innerHTML = "<img src=\"images/Khumbu-Icefall.jpg\" width=\"200px\" height=\"150px\">";

  var div = document.getElementById('elevation');
  div.innerHTML = '';
  div.innerHTML = div.innerHTML = '<span style="color: #14bcff">18,000 ft (5,486 m)</span>';

  var div2 = document.getElementById('oxygen');
  div2.innerHTML = '';
  div2.innerHTML = '10.5%';
  
  var div3 = document.getElementById('distToSummit');
  div3.innerHTML = '';
  div3.innerHTML = '11,035 (3,364 m)';

  var div4 = document.getElementById('distToBaseCamp');
  div4.innerHTML = '';
  div4.innerHTML = '400 ft (106 m)';

  var div5 = document.getElementById('info');
  div5.innerHTML = '';
  div5.innerHTML = 'Take extra care in this area, the ice and crevasses can be dangerous to cross.';

  var div6 = document.getElementById('Location');
  div6.innerHTML = '';
  div6.innerHTML = 'Khumbu Icefall';

  // create DOM element for the marker
  var el = document.createElement('div');
  el.id = 'marker';

  // create the marker
  new mapboxgl.Marker(el)
    .setLngLat([86.87348093822881, 27.99618320240794])
    //.setPopup(popup) // sets a popup on this marker
    .addTo(map)
    //.togglePopup();
  });

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'camp1', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
   
  var popup = new mapboxgl.Popup({ offset: 0 })
  .setText("Camp 1");

  //Add things to the side panel
  var div = document.getElementById('locImg');
  div.innerHTML = '';
  div.innerHTML = "<img src=\"images/camp1.jpg\" width=\"200px\" height=\"150px\">";

  var div = document.getElementById('elevation');
  div.innerHTML = '';
  div.innerHTML = div.innerHTML = '<span style="color: cyan">19,900 ft (6,065 m)</span>';

  var div2 = document.getElementById('oxygen');
  div2.innerHTML = '';
  div2.innerHTML = '9.7%';
  
  var div3 = document.getElementById('distToSummit');
  div3.innerHTML = '';
  div3.innerHTML = '9,135 ft (2,785 m)';

  var div4 = document.getElementById('distToBaseCamp');
  div4.innerHTML = '';
  div4.innerHTML = '2,300 ft (685 m)';

  var div5 = document.getElementById('info');
  div5.innerHTML = '';
  div5.innerHTML = 'You made it past the icefall, so take a break here and recover for the rest of the ascent.';

  var div6 = document.getElementById('Location');
  div6.innerHTML = '';
  div6.innerHTML = 'Camp 1';

  // create DOM element for the marker
  var el = document.createElement('div');
  el.id = 'marker';
  //console.log(route.features[0].geometry.coordinates[counter]);
  // create the marker
  new mapboxgl.Marker(el)
    .setLngLat([86.87624051444797, 27.98704598816326])
    //.setPopup(popup) // sets a popup on this marker
    .addTo(map)
    //.togglePopup();
  });

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'camp2', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
   
  var popup = new mapboxgl.Popup({ offset: 0 })
  .setText("Camp 2");

  //Add things to the side panel
  var div = document.getElementById('locImg');
  div.innerHTML = '';
  div.innerHTML = "<img src=\"images/camp2.jpg\" width=\"200px\" height=\"150px\">";

  var div = document.getElementById('elevation');
  div.innerHTML = '';
  div.innerHTML = div.innerHTML = '<span style="color: #7fc97f">21,300 ft (6,500 m)</span>';

  var div2 = document.getElementById('oxygen');
  div2.innerHTML = '';
  div2.innerHTML = '9.4%';
  
  var div3 = document.getElementById('distToSummit');
  div3.innerHTML = '';
  div3.innerHTML = '7,735 ft (2,350 m)';

  var div4 = document.getElementById('distToBaseCamp');
  div4.innerHTML = '';
  div4.innerHTML = '3,700 ft (1,120 m)';

  var div5 = document.getElementById('info');
  div5.innerHTML = '';
  div5.innerHTML = 'Grab some tea, there'+"'s"+' still quite a bit of climbing left! The base of the mountain Lhostse can be seen here as well.';

  var div6 = document.getElementById('Location');
  div6.innerHTML = '';
  div6.innerHTML = 'Camp 2';

  // create DOM element for the marker
  var el = document.createElement('div');
  el.id = 'marker';

  // create the marker
  new mapboxgl.Marker(el)
    .setLngLat([86.90335492493271, 27.980322036569067])
    //.setPopup(popup) // sets a popup on this marker
    .addTo(map)
    //.togglePopup();
});

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'camp3', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
   
  var popup = new mapboxgl.Popup({ offset: 0 })
  .setText("Camp 3");

  //Add things to the side panel
  var div = document.getElementById('locImg');
  div.innerHTML = '';
  div.innerHTML = "<img src=\"images/camp3.jpg\" width=\"200px\" height=\"150px\">";

  var div = document.getElementById('elevation');
  div.innerHTML = '';
  div.innerHTML = div.innerHTML = '<span style="color: #fd8d3c">24,500 ft (7,470 m)</span>';

  var div2 = document.getElementById('oxygen');
  div2.innerHTML = '';
  div2.innerHTML = '8.7%';
  
  var div3 = document.getElementById('distToSummit');
  div3.innerHTML = '';
  div3.innerHTML = '4,535 ft (1,380 m)';

  var div4 = document.getElementById('distToBaseCamp');
  div4.innerHTML = '';
  div4.innerHTML = '6,900 ft (2,090 m)';

  var div5 = document.getElementById('info');
  div5.innerHTML = '';
  div5.innerHTML = 'Rest and get ready for more climbing- you are nearing one of the great passive challenges of Everest.';

  var div6 = document.getElementById('Location');
  div6.innerHTML = '';
  div6.innerHTML = 'Camp 3';

  // create DOM element for the marker
  var el = document.createElement('div');
  el.id = 'marker';

  // create the marker
  new mapboxgl.Marker(el)
    .setLngLat([86.92478118334084, 27.967650460942664])
    //.setPopup(popup) // sets a popup on this marker
    .addTo(map)
    //.togglePopup();
});

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'camp4', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
   
  var popup = new mapboxgl.Popup({ offset: 0 })
  .setText("Camp 4");

  //Add things to the side panel
  var div = document.getElementById('locImg');
  div.innerHTML = '';
  div.innerHTML = "<img src=\"images/camp4.jpg\" width=\"200px\" height=\"150px\">";

  var div = document.getElementById('elevation');
  div.innerHTML = '';
  div.innerHTML = '<span style="color: #f16913">26,000 ft (7,925 m)</span>';

  var div2 = document.getElementById('oxygen');
  div2.innerHTML = '';
  div2.innerHTML = div2.innerHTML = '<span style="color: rgb(201, 34, 34)">7.8%</span>';
  
  var div3 = document.getElementById('distToSummit');
  div3.innerHTML = '';
  div3.innerHTML = '3,035 ft (925 m)';

  var div4 = document.getElementById('distToBaseCamp');
  div4.innerHTML = '';
  div4.innerHTML = '8,400 ft (2,545 m)';

  var div5 = document.getElementById('info');
  div5.innerHTML = '';
  div5.innerHTML = 'WARNING: This location marks the start of the Deathzone. The oxygen content here on up is not sufficient to sustain human life for an extended period of time. Make sure you have supplemental oxygen near, especially if you will be spending an long time above 8,000 meters.';

  var div6 = document.getElementById('Location');
  div6.innerHTML = '';
  div6.innerHTML = 'Camp 4';

  // create DOM element for the marker
  var el = document.createElement('div');
  el.id = 'marker';

  // create the marker
  new mapboxgl.Marker(el)
    .setLngLat([86.93082159811098, 27.973526561469413])
    //.setPopup(popup) // sets a popup on this marker
    .addTo(map)
    //.togglePopup();
  });

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'southSummit', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
   
  var popup = new mapboxgl.Popup({ offset: 0 })
  .setText("South Summit");

  //Add things to the side panel
  var div = document.getElementById('locImg');
  div.innerHTML = '';
  div.innerHTML = "<img src=\"images/southsumit.jpg\" width=\"200px\" height=\"150px\">";

  var div = document.getElementById('elevation');
  div.innerHTML = '';
  div.innerHTML = div.innerHTML = '<span style="color: rgb(201, 34, 34)">28,700 ft (8,748 m)</span>';

  var div2 = document.getElementById('oxygen');
  div2.innerHTML = '';
  div2.innerHTML = div2.innerHTML = '<span style="color: rgb(201, 34, 34)">7%</span>';
  
  var div3 = document.getElementById('distToSummit');
  div3.innerHTML = '';
  div3.innerHTML = '335 ft (102 m)';

  var div4 = document.getElementById('distToBaseCamp');
  div4.innerHTML = '';
  div4.innerHTML = '11,100 ft (3,368 m)';

  var div5 = document.getElementById('info');
  div5.innerHTML = '';
  div5.innerHTML = 'The sub-peak of the mountain, take a moment to look around and see just how far you'+"'ve"+' come.';

  var div6 = document.getElementById('Location');
  div6.innerHTML = '';
  div6.innerHTML = 'South Summit';

  // create DOM element for the marker
  var el = document.createElement('div');
  el.id = 'marker';

  // create the marker
  new mapboxgl.Marker(el)
    .setLngLat([86.92582516958662, 27.985105632009432])
    //.setPopup(popup) // sets a popup on this marker
    .addTo(map)
    //.togglePopup();
});

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'hillaryStep', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
   
  var popup = new mapboxgl.Popup({ offset: 0 })
  .setText("Hillary Step");

  //Add things to the side panel
  var div = document.getElementById('locImg');
  div.innerHTML = '';
  div.innerHTML = "<img src=\"images/hillary-step.jpg\" width=\"200px\" height=\"150px\">";

  var div = document.getElementById('elevation');
  div.innerHTML = '';
  div.innerHTML = div.innerHTML = '<span style="color: rgb(201, 34, 34)">28,840 ft (8,790 m)</span>';

  var div2 = document.getElementById('oxygen');
  div2.innerHTML = '';
  div2.innerHTML = div2.innerHTML = '<span style="color: rgb(201, 34, 34)">7%</span>';
  
  var div3 = document.getElementById('distToSummit');
  div3.innerHTML = '';
  div3.innerHTML = '195 ft (60 m)';

  var div4 = document.getElementById('distToBaseCamp');
  div4.innerHTML = '';
  div4.innerHTML = '11,240 ft (3,410 m)';

  var div5 = document.getElementById('info');
  div5.innerHTML = '';
  div5.innerHTML = 'Named in honor of Sir Edmund Hillary and Tenzing Norgay, this is the most difficult portion of the climb. It was affected by the 2015 Nepal earthquake, but still remains the last major challenge before the summit.';

  var div6 = document.getElementById('Location');
  div6.innerHTML = '';
  div6.innerHTML = 'Hillary Step';

  // create DOM element for the marker
  var el = document.createElement('div');
  el.id = 'marker';

  // create the marker
  new mapboxgl.Marker(el)
    .setLngLat([86.9250293824731, 27.98713299038748])
    //.setPopup(popup) // sets a popup on this marker
    .addTo(map)
    //.togglePopup();
});

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'summit', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
   
  var popup = new mapboxgl.Popup({ offset: 0 })
  .setText("Summit");

  //Add things to the side panel
  var div = document.getElementById('locImg');
  div.innerHTML = '';
  div.innerHTML = "<img src=\"images/everest_sumit.jpg\" width=\"200px\" height=\"150px\">";

  var div = document.getElementById('elevation');
  div.innerHTML = '';
  div.innerHTML = div.innerHTML = '<span style="color: rgb(201, 34, 34)">29,035 ft (8,850 m)</span>';

  var div2 = document.getElementById('oxygen');
  div2.innerHTML = '';
  div2.innerHTML = div2.innerHTML = '<span style="color: rgb(201, 34, 34)">6.9%</span>';
  
  var div3 = document.getElementById('distToSummit');
  div3.innerHTML = '';
  div3.innerHTML = 'You are here!';

  var div4 = document.getElementById('distToBaseCamp');
  div4.innerHTML = '';
  div4.innerHTML = '11,435 ft (3,485 m)';

  var div5 = document.getElementById('info');
  div5.innerHTML = '';
  div5.innerHTML = 'Congratulations, you made it! Take a moment to look around and savor your accomplishment, but don'+"'t"+' tarry too long- you still have to make it back down safely.';

  var div6 = document.getElementById('Location');
  div6.innerHTML = '';
  div6.innerHTML = 'Summit';

  // create DOM element for the marker
  var el = document.createElement('div');
  el.id = 'marker';

  // create the marker
  new mapboxgl.Marker(el)
    .setLngLat([86.92529072310032, 27.98803366188707])
    //.setPopup(popup) // sets a popup on this marker
    .addTo(map)
    //.togglePopup();
});
   

  //Change the cursor to a pointer and highlight the marker when the user mouses over it.
  map.on('mouseenter', 'baseCamp', function () {
    map.getCanvas().style.cursor = 'pointer';
    map.loadImage("images/camp_select.png", function(error, image) {
        map.addImage("custom-marker100", image);
        map.addLayer({
        "id": "baseCamp100",
        "source": "baseCamp",
        "type": "symbol",
        "layout": {
        "icon-image": "custom-marker100",
        "icon-rotate": ["get", "bearing"],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
        }
        });
      });
  });  
  //Change the cursor back to the default and un-highlight the marker when the user mouses out.
  map.on('mouseleave', 'baseCamp', function () {
    map.getCanvas().style.cursor = '';
    map.removeLayer("baseCamp100");
    map.removeImage("custom-marker100");
  });

  //Change the cursor to a pointer and highlight the marker when the user mouses over it.
  map.on('mouseenter', 'khumbuIcefall', function () {
    map.getCanvas().style.cursor = 'pointer';
    map.loadImage("images/khumbu_icefall_select.png", function(error, image) {
        map.addImage("khumbu", image);
        map.addLayer({
        "id": "khumbu",
        "source": "khumbuIcefall",
        "type": "symbol",
        "layout": {
        "icon-image": "khumbu",
        "icon-rotate": ["get", "bearing"],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
        }
        });
      });
  });
  //Change the cursor back to the default and un-highlight the marker when the user mouses out.
  map.on('mouseleave', 'khumbuIcefall', function () {
    map.getCanvas().style.cursor = '';
    map.removeLayer("khumbu");
    map.removeImage("khumbu");
  });

  //Change the cursor to a pointer and highlight the marker when the user mouses over it.
  map.on('mouseenter', 'camp1', function () {
    map.getCanvas().style.cursor = 'pointer';
    map.loadImage("images/camp_select.png", function(error, image) {
        map.addImage("custom-marker101", image);
        map.addLayer({
        "id": "baseCamp101",
        "source": "camp1",
        "type": "symbol",
        "layout": {
        "icon-image": "custom-marker101",
        "icon-rotate": ["get", "bearing"],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
        }
        });
      });
  });
  //Change the cursor back to the default and un-highlight the marker when the user mouses out.
  map.on('mouseleave', 'camp1', function () {
    map.getCanvas().style.cursor = '';
    map.removeLayer("baseCamp101");
    map.removeImage("custom-marker101");
  });

  //Change the cursor to a pointer and highlight the marker when the user mouses over it.
  map.on('mouseenter', 'camp2', function () {
    map.getCanvas().style.cursor = 'pointer';
    map.loadImage("images/camp_select.png", function(error, image) {
        map.addImage("custom-marker102", image);
        map.addLayer({
        "id": "baseCamp102",
        "source": "camp2",
        "type": "symbol",
        "layout": {
        "icon-image": "custom-marker102",
        "icon-rotate": ["get", "bearing"],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
        }
        });
      });
  }); 
  //Change the cursor back to the default and un-highlight the marker when the user mouses out.
  map.on('mouseleave', 'camp2', function () {
    map.getCanvas().style.cursor = '';
    map.removeLayer("baseCamp102");
    map.removeImage("custom-marker102");
  });

  //Change the cursor to a pointer and highlight the marker when the user mouses over it.
  map.on('mouseenter', 'camp3', function () {
    map.getCanvas().style.cursor = 'pointer';
    map.loadImage("images/camp_select.png", function(error, image) {
        map.addImage("custom-marker103", image);
        map.addLayer({
        "id": "baseCamp103",
        "source": "camp3",
        "type": "symbol",
        "layout": {
        "icon-image": "custom-marker103",
        "icon-rotate": ["get", "bearing"],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
        }
        });
      });
  });
  //Change the cursor back to the default and un-highlight the marker when the user mouses out.
  map.on('mouseleave', 'camp3', function () {
    map.getCanvas().style.cursor = '';
    map.removeLayer("baseCamp103");
    map.removeImage("custom-marker103");
  });

  //Change the cursor to a pointer and highlight the marker when the user mouses over it.
  map.on('mouseenter', 'camp4', function () {
    map.getCanvas().style.cursor = 'pointer';
    map.loadImage("images/camp_select.png", function(error, image) {
        map.addImage("custom-marker104", image);
        map.addLayer({
        "id": "baseCamp104",
        "source": "camp4",
        "type": "symbol",
        "layout": {
        "icon-image": "custom-marker104",
        "icon-rotate": ["get", "bearing"],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
        }
        });
      });
  });
  //Change the cursor back to the default and un-highlight the marker when the user mouses out.
  map.on('mouseleave', 'camp4', function () {
    map.getCanvas().style.cursor = '';
    map.removeLayer("baseCamp104");
    map.removeImage("custom-marker104");
  });

  //Change the cursor to a pointer and highlight the marker when the user mouses over it.
  map.on('mouseenter', 'southSummit', function () {
    map.getCanvas().style.cursor = 'pointer';
    map.loadImage("images/south_summit_select.png", function(error, image) {
        map.addImage("sSummit", image);
        map.addLayer({
        "id": "sSummit",
        "source": "southSummit",
        "type": "symbol",
        "layout": {
        "icon-image": "sSummit",
        "icon-rotate": ["get", "bearing"],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
        }
        });
      });
  });
  //Change the cursor back to the default and un-highlight the marker when the user mouses out.
  map.on('mouseleave', 'southSummit', function () {
    map.getCanvas().style.cursor = '';
    map.removeLayer("sSummit");
    map.removeImage("sSummit");
  });

  //Change the cursor to a pointer and highlight the marker when the user mouses over it.
  map.on('mouseenter', 'hillaryStep', function () {
    map.getCanvas().style.cursor = 'pointer';
    map.loadImage("images/hillary_step_select.png", function(error, image) {
        map.addImage("hStep", image);
        map.addLayer({
        "id": "hStep",
        "source": "hillaryStep",
        "type": "symbol",
        "layout": {
        "icon-image": "hStep",
        "icon-rotate": ["get", "bearing"],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
        }
        });
      });
  });
  //Change the cursor back to the default and un-highlight the marker when the user mouses out.
  map.on('mouseleave', 'hillaryStep', function () {
    map.getCanvas().style.cursor = '';
    map.removeLayer("hStep");
    map.removeImage("hStep");
  });

  ///Change the cursor to a pointer and highlight the marker when the user mouses over it.
  map.on('mouseenter', 'summit', function () {
    map.getCanvas().style.cursor = 'pointer';
    map.loadImage("images/summit_select.png", function(error, image) {
        map.addImage("summit99", image);
        map.addLayer({
        "id": "summit99",
        "source": "summit",
        "type": "symbol",
        "layout": {
        "icon-image": "summit99",
        "icon-rotate": ["get", "bearing"],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
        }
        });
      });
  });
  //Change the cursor back to the default and un-highlight the marker when the user mouses out.
  map.on('mouseleave', 'summit', function () {
    map.getCanvas().style.cursor = '';
    map.removeLayer("summit99");
    map.removeImage("summit99");
  });

// A simple line from origin to destination.
var route = {
  "type": "FeatureCollection",
  "features": [{
  "type": "Feature",
  "geometry": {
  "type": "LineString",
  "coordinates": [ [ 86.857195866412738, 28.00647209182954, 50.0 ], [ 86.857536891046095, 28.006554800932211, 50.0 ], [ 86.860000374915188, 28.006495926551409, 50.0 ], [ 86.860985826307342, 28.00560842116003, 50.0 ], [ 86.862096203677766, 28.004873665423808, 50.0 ], [ 86.862201837204822, 28.003757259431481, 50.0 ], [ 86.862770083719596, 28.003082323544231, 50.0 ], [ 86.862890250302868, 28.002697093902722, 50.0 ], [ 86.863573501442346, 28.00234960464628, 50.0 ], [ 86.864288690020288, 28.002550286114509, 50.0 ], [ 86.864669664400651, 28.00303162546404, 50.0 ], [ 86.865188978319381, 28.00331751427046, 50.0 ], [ 86.865937235153098, 28.00326300502137, 50.0 ], [ 86.866513647118424, 28.00258549817022, 50.0 ], [ 86.867517400571188, 28.002114710451622, 50.0 ], [ 86.867804786015427, 28.001427305287368, 50.0 ], [ 86.867680865357897, 28.001013791944128, 50.0 ], [ 86.867730522540313, 28.000693374299949, 50.0 ], [ 86.867866688809045, 28.000546573432391, 50.0 ], [ 86.86829085007497, 28.00061593628633, 50.0 ], [ 86.868769130383427, 28.00052799481205, 50.0 ], [ 86.869059854939522, 28.000518631043619, 50.0 ], [ 86.869219214860792, 28.00047068558273, 50.0 ], [ 86.8692757128333, 28.000413738723861, 50.0 ], [ 86.86929024485309, 28.000354495370129, 50.0 ], [ 86.869231381085783, 28.000281663892562, 50.0 ], [ 86.869271201374104, 28.00017768967118, 50.0 ], [ 86.869721402504865, 27.999763442784879, 50.0 ], [ 86.870048687145697, 27.999582894051908, 50.0 ], [ 86.870557375235009, 27.999715217522311, 50.0 ], [ 86.870770289382634, 27.999575802341731, 50.0 ], [ 86.870893851610248, 27.99936029097567, 50.0 ], [ 86.87128804665231, 27.999444302802111, 50.0 ], [ 86.871524489907245, 27.999342178215429, 50.0 ], [ 86.871465349885852, 27.9991060933454, 50.0 ], [ 86.871429695470013, 27.998707539322702, 50.0 ], [ 86.871654317248812, 27.997995486602921, 50.0 ], [ 86.871749160049461, 27.997433815181608, 50.0 ], [ 86.872346874084243, 27.996989652236341, 50.0 ], [ 86.872692434944099, 27.997137649187231, 50.0 ], [ 86.873366630594205, 27.996909637461162, 50.0 ], [ 86.873632183752164, 27.99678146009045, 50.0 ], [ 86.873709605616568, 27.996561731269129, 50.0 ], [ 86.873429886718341, 27.99640285954478, 50.0 ], [ 86.87362654209322, 27.995556713905138, 50.0 ], [ 86.873286373634784, 27.99521549149868, 50.0 ], [ 86.872310696545782, 27.995156711546091, 50.0 ], [ 86.871863537086369, 27.994897607527299, 50.0 ], [ 86.871562151095276, 27.994416840558859, 50.0 ], [ 86.87170058867855, 27.993860160962249, 50.0 ], [ 86.871560023176173, 27.993665300297138, 50.0 ], [ 86.871651052820482, 27.993365225272409, 50.0 ], [ 86.87206563705314, 27.993126054883309, 50.0 ], [ 86.87230976145689, 27.992712480502011, 50.0 ], [ 86.872758135194459, 27.992566645842409, 50.0 ], [ 86.872838656925637, 27.991991085946399, 50.0 ], [ 86.872973856330688, 27.99145618659124, 50.0 ], [ 86.87328993407165, 27.991214982676748, 50.0 ], [ 86.873418300842758, 27.99082308694566, 50.0 ], [ 86.873598005913024, 27.990407553233961, 50.0 ], [ 86.874200202155734, 27.990514878958589, 50.0 ], [ 86.874628707494111, 27.9902566772592, 50.0 ], [ 86.874730885638499, 27.989829906824319, 50.0 ], [ 86.874839572466172, 27.989424000836259, 50.0 ], [ 86.874609101153794, 27.989071029204268, 50.0 ], [ 86.874677520920926, 27.988797518176661, 50.0 ], [ 86.875189645486927, 27.988684295005001, 50.0 ], [ 86.875728773460963, 27.988436721056249, 50.0 ], [ 86.875822944633043, 27.987657732373229, 50.0 ], [ 86.87601075191904, 27.987259065487319, 50.0 ], [ 86.876509010467558, 27.986796988598439, 50.0 ], [ 86.876581903035117, 27.98661299727987, 50.0 ], [ 86.876423989024474, 27.985647647887792, 50.0 ], [ 86.876338841830375, 27.984912557529501, 50.0 ], [ 86.876710174516575, 27.98421457878468, 50.0 ], [ 86.877453553881992, 27.98340073197414, 50.0 ], [ 86.878115028703419, 27.983258206813669, 50.0 ], [ 86.878637387771789, 27.982585872318559, 50.0 ], [ 86.879244594375109, 27.982018117001129, 50.0 ], [ 86.880924947116881, 27.981376173092301, 50.0 ], [ 86.881853680981052, 27.981399119667891, 50.0 ], [ 86.882962500576184, 27.981950185639331, 50.0 ], [ 86.883424362017436, 27.982765429283852, 50.0 ], [ 86.883903450702491, 27.98314280931509, 50.0 ], [ 86.884700531459956, 27.98325247626666, 50.0 ], [ 86.885720371789375, 27.983679913531411, 50.0 ], [ 86.886952905447316, 27.98362627417508, 50.0 ], [ 86.887799873497585, 27.983009757964439, 50.0 ], [ 86.888981514574652, 27.983156956184651, 50.0 ], [ 86.891055142399765, 27.982821987258241, 50.0 ], [ 86.892806763151142, 27.983194903068942, 50.0 ], [ 86.89399413324719, 27.982784905042909, 50.0 ], [ 86.894950182100402, 27.982113226060459, 50.0 ], [ 86.897868220306819, 27.980890151278281, 50.0 ], [ 86.899052534589146, 27.980132742748719, 50.0 ], [ 86.900043023074275, 27.979809125133581, 50.0 ], [ 86.90043690547175, 27.97988797236291, 50.0 ], [ 86.900803978810458, 27.980368763778461, 50.0 ], [ 86.901428414895108, 27.98059209974533, 50.0 ], [ 86.901963548320296, 27.98037516363847, 50.0 ], [ 86.902535535290326, 27.980252516779391, 50.0 ], [ 86.902974922203256, 27.980324928254159, 50.0 ], [ 86.903686096636733, 27.980319515618952, 50.0 ], [ 86.903717570116427, 27.980292453168929, 150.0 ], [ 86.903258370715932, 27.979649437255201, 150.0 ], [ 86.902932859080408, 27.97906084014307, 150.0 ], [ 86.902653646665243, 27.978678739615301, 150.0 ], [ 86.902273712747188, 27.978560305353842, 150.0 ], [ 86.901814198551065, 27.978713145532261, 150.0 ], [ 86.901025387241745, 27.978884815971458, 150.0 ], [ 86.900553385272147, 27.97836364136014, 150.0 ], [ 86.899767110271, 27.977949588732962, 150.0 ], [ 86.899159683604708, 27.977838872470201, 150.0 ], [ 86.898812091717829, 27.977259841922692, 150.0 ], [ 86.898356030113007, 27.977031641161119, 150.0 ], [ 86.898183103143296, 27.976558099674278, 150.0 ], [ 86.898365077503527, 27.976198864322601, 150.0 ], [ 86.898556262445823, 27.975609695179031, 150.0 ], [ 86.899096637566814, 27.974993273553551, 150.0 ], [ 86.899863722410217, 27.974053005690571, 150.0 ], [ 86.900795047645474, 27.973339745606719, 150.0 ], [ 86.902738590014479, 27.9727421150642, 150.0 ], [ 86.906882384041182, 27.971023377835071, 150.0 ], [ 86.910078276768189, 27.970871475567389, 150.0 ], [ 86.912935691197134, 27.970809775579148, 150.0 ], [ 86.914171868039872, 27.971107499920731, 150.0 ], [ 86.914575205139528, 27.9711356603922, 150.0 ], [ 86.915188377773418, 27.970834254634632, 150.0 ], [ 86.915829410221036, 27.970393468557731, 150.0 ], [ 86.916215933606779, 27.970294976313909, 150.0 ], [ 86.917076484914091, 27.970244203611479, 150.0 ], [ 86.917539820440098, 27.97003919620559, 150.0 ], [ 86.917787284875999, 27.969696643807879, 150.0 ], [ 86.917750091535808, 27.96934130452739, 150.0 ], [ 86.917740997933066, 27.9691111930007, 150.0 ], [ 86.917808454691254, 27.968918532431921, 150.0 ], [ 86.917988277979845, 27.968818029341669, 150.0 ], [ 86.91805660493128, 27.968671868277049, 150.0 ], [ 86.918229448865816, 27.968708823116749, 150.0 ], [ 86.918395212639425, 27.96868533800788, 150.0 ], [ 86.918482133588213, 27.968538492737, 150.0 ], [ 86.918620060444184, 27.968460366572501, 150.0 ], [ 86.918774451582891, 27.9686183086828, 100.0 ], [ 86.919049776189851, 27.96884928305294, 100.0 ], [ 86.919252279007367, 27.968857573417129, 100.0 ], [ 86.919516485227106, 27.968606292166971, 100.0 ], [ 86.919727130706249, 27.968504053132499, 100.0 ], [ 86.919944831453719, 27.968305572963921, 100.0 ], [ 86.920113845714539, 27.968105295299981, 100.0 ], [ 86.920389502420264, 27.968085767912662, 100.0 ], [ 86.920681737071803, 27.968052823979221, 100.0 ], [ 86.920986859233722, 27.9678910388117, 100.0 ], [ 86.921399875168291, 27.967838034274081, 100.0 ], [ 86.921765776442115, 27.967674455529799, 100.0 ], [ 86.92214636680923, 27.96751111849758, 100.0 ], [ 86.922415676472866, 27.96734254172048, 100.0 ], [ 86.922737471033116, 27.967136684364039, 100.0 ], [ 86.923028901033334, 27.967110891667112, 100.0 ], [ 86.923382831531299, 27.96722833764678, 100.0 ], [ 86.924181231165306, 27.967429648855308, 100.0 ], [ 86.924427326843301, 27.967570298182839, 100.0 ], [ 86.92461231172949, 27.96766259908599, 100.0 ], [ 86.924858225261815, 27.96764492325881, 100.0 ], [ 86.925048498032808, 27.967733657085859, 100.0 ], [ 86.925127442734166, 27.967824018099289, 100.0 ], [ 86.925316976097022, 27.96786652965589, 100.0 ], [ 86.925556197374092, 27.967832853739971, 100.0 ], [ 86.925936099043582, 27.9678420806529, 100.0 ], [ 86.926387962755044, 27.968012790264432, 100.0 ], [ 86.926643648139247, 27.96814257885169, 100.0 ], [ 86.927037004467223, 27.968519023343632, 100.0 ], [ 86.927583490271289, 27.96895412523574, 100.0 ], [ 86.928075266643958, 27.969260344317409, 100.0 ], [ 86.92843027770968, 27.969611654790089, 100.0 ], [ 86.928536839692654, 27.97015197951157, 100.0 ], [ 86.928758967336691, 27.970387367787101, 100.0 ], [ 86.928849891656569, 27.97061146215561, 100.0 ], [ 86.929003059788386, 27.970923196790679, 100.0 ], [ 86.929233489315223, 27.971064184030329, 100.0 ], [ 86.929448024667991, 27.971237060379071, 100.0 ], [ 86.929583189940288, 27.971442975567939, 100.0 ], [ 86.929660663587981, 27.97180211449356, 100.0 ], [ 86.929908550460468, 27.972322057530249, 100.0 ], [ 86.930263809489048, 27.972607059377069, 100.0 ], [ 86.930317489514564, 27.97286799492014, 100.0 ], [ 86.930678131409792, 27.973268241932349, 100.0 ], [ 86.930844871106487, 27.973568465623011, 100.0 ], [ 86.931115202330972, 27.974645874670649, 100.0 ], [ 86.931135841802543, 27.974764977203229, 100.0 ], [ 86.930984636257563, 27.97548003444253, 100.0 ], [ 86.930766891733512, 27.97603570871264, 100.0 ], [ 86.930125239094352, 27.976830456649829, 100.0 ], [ 86.92979311880849, 27.977455285525689, 100.0 ], [ 86.929079866370316, 27.978673666670922, 100.0 ], [ 86.92844912556582, 27.980452804838649, 100.0 ], [ 86.928096918801359, 27.981382254410288, 100.0 ], [ 86.927733045873978, 27.981772597591519, 100.0 ], [ 86.927399288768186, 27.982069733528149, 100.0 ], [ 86.927184244206927, 27.982375384653938, 100.0 ], 
  [ 86.927056015003203, 27.982732564218839, 100.0 ], [ 86.926777881483517, 27.983228796660519, 100.0 ], [ 86.926625708940605, 27.98348879551196, 100.0 ], [ 86.926350772786947, 27.983878248938289, 100.0 ], [ 86.926077484337128, 27.984056315012801, 100.0 ], [ 86.925949605875687, 27.98426979149254, 100.0 ], [ 86.925837332128566, 27.984753474681099, 100.0 ], [ 86.925817169486223, 27.985337267693559, 100.0 ], [ 86.925813789881502, 27.98555435071771, 100.0 ], [ 86.925818169723954, 27.98569252003389, 100.0 ], [ 86.925769895458728, 27.98585083415546, 100.0 ], [ 86.925779366611167, 27.98597409894305, 100.0 ], [ 86.925744444574619, 27.98612237022396, 100.0 ], [ 86.925667153820172, 27.986294042862561, 100.0 ], [ 86.925570392874846, 27.986516526312052, 100.0 ], [ 86.925478891749734, 27.98667147460268, 100.0 ], [ 86.925277827311476, 27.986769794085291, 100.0 ], [ 86.925201850000036, 27.986834048286081, 100.0 ], [ 86.925108999770643, 27.986922160336739, 100.0 ], [ 86.925042271423123, 27.987093708247549, 100.0 ], [ 86.924979026625579, 27.98728646152048, 100.0 ], [ 86.924974700378925, 27.98745904982302, 100.0 ], [ 86.924980852386227, 27.987566573601121, 100.0 ], [ 86.924985836124648, 27.987617917498898, 100.0 ], [ 86.92503225251204, 27.98770724147397, 100.0 ], [ 86.925149843704801, 27.98777344654799, 100.0 ], [ 86.925243621458051, 27.987890632345941, 100.0 ], 
  [ 86.9254, 27.9889, 100.0 ] ]
  }
  }]
};

var origin=[86.85719586641274, 28.00647209182954];

  // A single point that animates along the route.
  // Coordinates are initially set to origin.
  var point = {
  "type": "FeatureCollection",
  "features": [{
  "type": "Feature",
  "properties": {},
  "geometry": {
  "type": "Point",
  "coordinates": origin
  }
  }]
};
  
// Calculate the distance in kilometers between route start/end point.
var lineDistance = turf.lineDistance(route.features[0], 'kilometers');

// Array used to store the coordinates of the route
var arc = [];

// Number of steps to use in the arc and animation, more steps means
// a smoother arc and animation, but too many steps will result in a
// low frame rate
var steps = 500;

// Draw an arc between the `origin` & `destination` of the two points
for (var i = 0; i < lineDistance; i += lineDistance / steps) {
  var segment = turf.along(route.features[0], i, 'kilometers');
  arc.push(segment.geometry.coordinates);
}

// Update the route with calculated arc coordinates
route.features[0].geometry.coordinates = arc;

// Used to increment the value of the point measurement against the route.
var counter = 0;

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
    
  
    // Add a source and layer displaying a point which will be animated in a circle.
    map.addSource('route', {
      "type": "geojson",
      lineMetrics: true,
      "data": route
    });
    
    map.addSource('point', {
      "type": "geojson",
      "data": point
    });
    
    map.addLayer({
      "id": "route",
      "source": "route",
      "type": "line",
      "paint": {
      "line-width": 3,
      "line-color": "#007cbf",
      // 'line-gradient' must be specified using an expression
      // with the special 'line-progress' property
      'line-gradient': [
      'interpolate',
      ['linear'],
      ['line-progress'],
      0, "#1499ff",
      0.1, "#14bcff",
      0.3, "cyan",
      0.5, "#7fc97f",
      0.7, "yellow",
      1, "#de2d26"
      ]
      },
      layout: {
      'line-cap': 'round',
      'line-join': 'round'
      }
    });
    map.loadImage("images/trek.png", function(error, image) {
      map.addImage("custom-marker5", image);
      map.addLayer({
        "id": "point",
        "source": "point",
        "type": "symbol",
        "layout": {
          "icon-image": "custom-marker5",
          "icon-rotate": ["get", "bearing"],
          "icon-rotation-alignment": "map",
          "icon-allow-overlap": true,
          "icon-ignore-placement": true
        }
      });
    });

    //Array used to store the coordinates of the POIs (markers)
    var test = [[86.85719586641274, 28.00647209182954], [86.87345895826398, 27.996277774768647], 
    [86.87623440610264, 27.987051652940377], [86.90329584448963, 27.98032248621871], 
    [86.92471347509948, 27.967655327696573], [86.93082117375526, 27.97352579739608], 
    [86.9258221361935, 27.985193461286066], [86.92505121693608, 27.98771791865574], 
    [86.9254, 27.9889]];
    var flag = false; //detect whether popup triggers
    var flagStop = true; //flag stop and start

  function animate() {
    // Update point geometry to a new position based on counter denoting
    // the index to access the arc.
    point.features[0].geometry.coordinates = route.features[0].geometry.coordinates[counter];
    
    
    // Calculate the bearing to ensure the icon is rotated to match the route arc
    // The bearing is calculate between the current point and the next point, except
    // at the end of the arc use the previous point and the current point
    point.features[0].properties.bearing = turf.bearing(
      turf.point(route.features[0].geometry.coordinates[counter >= steps ? counter - 1 : counter]),
      turf.point(route.features[0].geometry.coordinates[counter >= steps ? counter : counter + 1])
    );
    
    // Update the source with this new data.
    map.getSource('point').setData(point);
    
    // Request the next frame of animation so long the end has not been reached.
    if (counter <= steps) {
      //console.log(point.features[0].geometry.coordinates);
      for (a in test) {
        if (point.features[0].geometry.coordinates[0] == test[a][0] && point.features[0].geometry.coordinates[1] == test[a][1]){
          flag = true;

          //Check to see if the animation has reached this point
          if (test[a][0] == 86.85719586641274 && test[a][1] == 28.00647209182954) {
            var popup = new mapboxgl.Popup({ offset: 0 })
              .setText("Base Camp");

              //Add things to the side panel
              var div = document.getElementById('locImg');
              div.innerHTML = '';
              div.innerHTML = "<img src=\"images/basecamp.jpg\" width=\"200px\" height=\"150px\">";

              var div = document.getElementById('elevation');
              div.innerHTML = '';
              div.innerHTML = div.innerHTML = '<span style="color:#a4a4ff">17,600 ft (5,380 m)</span>';

              var div2 = document.getElementById('oxygen');
              div2.innerHTML = '';
              div2.innerHTML = '11% (21% at Sea Level)';
              
              var div3 = document.getElementById('distToSummit');
              div3.innerHTML = '';
              div3.innerHTML = '11,435 ft (3,485 m)';

              var div4 = document.getElementById('distToBaseCamp');
              div4.innerHTML = '';
              div4.innerHTML = 'You are here!';

              var div5 = document.getElementById('info');
              div5.innerHTML = '';
              div5.innerHTML = 'This is the starting point of your ascent; make sure you’ve spent enough time acclimatizing before beginning!';
              
              var div6 = document.getElementById('Location');
              div6.innerHTML = '';
              div6.innerHTML = 'Base Camp';
            }

            if (test[a][0] == 86.87345895826398 && test[a][1] == 27.996277774768647) {
              var popup = new mapboxgl.Popup({ offset: 0 })
                .setText("Khumbu Icefall");
              
                var div = document.getElementById('locImg');
                div.innerHTML = '';
                div.innerHTML = "<img src=\"images/Khumbu-Icefall.jpg\" width=\"200px\" height=\"150px\">";

                var div = document.getElementById('elevation');
                div.innerHTML = '';
                div.innerHTML = div.innerHTML = '<span style="color: royalblue">18,000 ft (5,486 m)</span>';

                var div2 = document.getElementById('oxygen');
                div2.innerHTML = '';
                div2.innerHTML = '10.5%';
                
                var div3 = document.getElementById('distToSummit');
                div3.innerHTML = '';
                div3.innerHTML = '11,035 (3,364 m)';

                var div4 = document.getElementById('distToBaseCamp');
                div4.innerHTML = '';
                div4.innerHTML = '400 ft (106 m)';

                var div5 = document.getElementById('info');
                div5.innerHTML = '';
                div5.innerHTML = 'Take extra care in this area, the ice and crevasses can be dangerous to cross.';

                var div6 = document.getElementById('Location');
                div6.innerHTML = '';
                div6.innerHTML = 'Khumbu Icefall';
            }

            if (test[a][0] == 86.87623440610264 && test[a][1] == 27.987051652940377) {
              var popup = new mapboxgl.Popup({ offset: 0 })
                .setText("Camp 1");

                var div = document.getElementById('locImg');
                div.innerHTML = '';
                div.innerHTML = "<img src=\"images/camp1.jpg\" width=\"200px\" height=\"150px\">";

                var div = document.getElementById('elevation');
                div.innerHTML = '';
                div.innerHTML = div.innerHTML = '<span style="color: cyan">19,900 ft (6,065 m)</span>';

                var div2 = document.getElementById('oxygen');
                div2.innerHTML = '';
                div2.innerHTML = '9.7%';
                
                var div3 = document.getElementById('distToSummit');
                div3.innerHTML = '';
                div3.innerHTML = '9,135 ft (2,785 m)';

                var div4 = document.getElementById('distToBaseCamp');
                div4.innerHTML = '';
                div4.innerHTML = '2,300 ft (685 m)';

                var div5 = document.getElementById('info');
                div5.innerHTML = '';
                div5.innerHTML = 'You made it past the icefall, so take a break here and recover for the rest of the ascent.';

                var div6 = document.getElementById('Location');
                div6.innerHTML = '';
                div6.innerHTML = 'Camp 1';
            }

            if (test[a][0] == 86.90329584448963 && test[a][1] == 27.98032248621871) {
              var popup = new mapboxgl.Popup({ offset: 0 })
                .setText("Camp 2");
              
                var div = document.getElementById('locImg');
                div.innerHTML = '';
                div.innerHTML = "<img src=\"images/camp2.jpg\" width=\"200px\" height=\"150px\">";

                var div = document.getElementById('elevation');
                div.innerHTML = '';
                div.innerHTML = div.innerHTML = '<span style="color: #7fc97f">21,300 ft (6,500 m)</span>';

                var div2 = document.getElementById('oxygen');
                div2.innerHTML = '';
                div2.innerHTML = '9.4%';
                
                var div3 = document.getElementById('distToSummit');
                div3.innerHTML = '';
                div3.innerHTML = '7,735 ft (2,350 m)';

                var div4 = document.getElementById('distToBaseCamp');
                div4.innerHTML = '';
                div4.innerHTML = '3,700 ft (1,120 m)';

                var div5 = document.getElementById('info');
                div5.innerHTML = '';
                div5.innerHTML = 'Grab some tea, there'+"'s"+' still quite a bit of climbing left! The base of the mountain Lhostse can be seen here as well.';

                var div6 = document.getElementById('Location');
                div6.innerHTML = '';
                div6.innerHTML = 'Camp 2';
            }

            if (test[a][0] == 86.92471347509948 && test[a][1] == 27.967655327696573) {
              var popup = new mapboxgl.Popup({ offset: 0 })
                .setText("Camp 3");
              
                var div = document.getElementById('locImg');
                div.innerHTML = '';
                div.innerHTML = "<img src=\"images/camp3.jpg\" width=\"200px\" height=\"150px\">";

                var div = document.getElementById('elevation');
                div.innerHTML = '';
                div.innerHTML = div.innerHTML = '<span style="color: #fd8d3c">24,500 ft (7,470 m)</span>';

                var div2 = document.getElementById('oxygen');
                div2.innerHTML = '';
                div2.innerHTML = '8.7%';
                
                var div3 = document.getElementById('distToSummit');
                div3.innerHTML = '';
                div3.innerHTML = '4,535 ft (1,380 m)';

                var div4 = document.getElementById('distToBaseCamp');
                div4.innerHTML = '';
                div4.innerHTML = '6,900 ft (2,090 m)';

                var div5 = document.getElementById('info');
                div5.innerHTML = '';
                div5.innerHTML = 'Rest and get ready for more climbing- you are nearing one of the great passive challenges of Everest.';

                var div6 = document.getElementById('Location');
                div6.innerHTML = '';
                div6.innerHTML = 'Camp 3';
            }

            if (test[a][0] == 86.93082117375526 && test[a][1] == 27.97352579739608) {
              var popup = new mapboxgl.Popup({ offset: 0 })
                .setText("Camp 4");
              
                var div = document.getElementById('locImg');
                div.innerHTML = '';
                div.innerHTML = "<img src=\"images/camp4.jpg\" width=\"200px\" height=\"150px\">";

                var div = document.getElementById('elevation');
                div.innerHTML = '';
                div.innerHTML = '<span style="color: #f16913">26,000 ft (7,925 m)</span>';
      
                var div2 = document.getElementById('oxygen');
                div2.innerHTML = '';
                div2.innerHTML = div2.innerHTML = '<span style="color: rgb(201, 34, 34)">7.8%</span>';
                
                var div3 = document.getElementById('distToSummit');
                div3.innerHTML = '';
                div3.innerHTML = '3,035 ft (925 m)';

                var div4 = document.getElementById('distToBaseCamp');
                div4.innerHTML = '';
                div4.innerHTML = '8,400 ft (2,545 m)';

                var div5 = document.getElementById('info');
                div5.innerHTML = '';
                div5.innerHTML = 'WARNING: This location marks the start of the Deathzone. The oxygen content here on up is not sufficient to sustain human life for an extended period of time. Make sure you have supplemental oxygen near, especially if you will be spending an long time above 8,000 meters.';

                var div6 = document.getElementById('Location');
                div6.innerHTML = '';
                div6.innerHTML = 'Camp 4';
              }

            if (test[a][0] == 86.9258221361935 && test[a][1] == 27.985193461286066) {
              var popup = new mapboxgl.Popup({ offset: 0 })
                .setText("South Summit");

                var div = document.getElementById('locImg');
                div.innerHTML = '';
                div.innerHTML = "<img src=\"images/southsumit.jpg\" width=\"200px\" height=\"150px\">";

                var div = document.getElementById('elevation');
                div.innerHTML = '';
                div.innerHTML = div.innerHTML = '<span style="color: rgb(201, 34, 34)">28,700 ft (8,748 m)</span>';

                var div2 = document.getElementById('oxygen');
                div2.innerHTML = '';
                div2.innerHTML = div2.innerHTML = '<span style="color: rgb(201, 34, 34)">7%</span>';
                
                var div3 = document.getElementById('distToSummit');
                div3.innerHTML = '';
                div3.innerHTML = '335 ft (102 m)';

                var div4 = document.getElementById('distToBaseCamp');
                div4.innerHTML = '';
                div4.innerHTML = '11,100 ft (3,368 m)';

                var div5 = document.getElementById('info');
                div5.innerHTML = '';
                div5.innerHTML = 'The sub-peak of the mountain, take a moment to look around and see just how far you'+"'ve"+' come.';

                var div6 = document.getElementById('Location');
                div6.innerHTML = '';
                div6.innerHTML = 'South Summit';
            }

            //Check if the animation has reached this point
            if (test[a][0] == 86.92505121693608 && test[a][1] == 27.98771791865574) {
              var popup = new mapboxgl.Popup({ offset: 0 })
                .setText("Hillary Step");

              var hillary={
                bearing: 27,
                center: [86.9250293824731, 27.98713299038748],
                zoom: 15
              } 
                    
              map.flyTo(hillary);
                
              var div = document.getElementById('locImg');
              div.innerHTML = '';
              div.innerHTML = "<img src=\"images/hillary-step.jpg\" width=\"200px\" height=\"150px\">";

              var div = document.getElementById('elevation');
              div.innerHTML = '';
              div.innerHTML = div.innerHTML = '<span style="color: rgb(201, 34, 34)">28,840 ft (8,790 m)</span>';

              var div2 = document.getElementById('oxygen');
              div2.innerHTML = '';
              div2.innerHTML = div2.innerHTML = '<span style="color: rgb(201, 34, 34)">7%</span>';
              
              var div3 = document.getElementById('distToSummit');
              div3.innerHTML = '';
              div3.innerHTML = '195 ft (60 m)';

              var div4 = document.getElementById('distToBaseCamp');
              div4.innerHTML = '';
              div4.innerHTML = '11,240 ft (3,410 m)';

              var div5 = document.getElementById('info');
              div5.innerHTML = '';
              div5.innerHTML = 'Named in honor of Sir Edmund Hillary and Tenzing Norgay, this is the most difficult portion of the climb. It was affected by the 2015 Nepal earthquake, but still remains the last major challenge before the summit.';

              var div6 = document.getElementById('Location');
              div6.innerHTML = '';
              div6.innerHTML = 'Hillary Step';
            }

            if (test[a][0] == 86.9254 && test[a][1] == 27.9889) {
              //console.log("test10")
              var popup = new mapboxgl.Popup({ offset: 0 })
                .setText("Summit");

              var div = document.getElementById('locImg');
              div.innerHTML = '';
              div.innerHTML = "<img src=\"images/everest_sumit.jpg\" width=\"200px\" height=\"150px\">";

              var div = document.getElementById('elevation');
              div.innerHTML = '';
              div.innerHTML = div.innerHTML = '<span style="color: rgb(201, 34, 34)">29,035 ft (8,850 m)</span>';

              var div2 = document.getElementById('oxygen');
              div2.innerHTML = '';
              div2.innerHTML = div2.innerHTML = '<span style="color: rgb(201, 34, 34)">6.9%</span>';
              
              var div3 = document.getElementById('distToSummit');
              div3.innerHTML = '';
              div3.innerHTML = 'You are here!';

              var div4 = document.getElementById('distToBaseCamp');
              div4.innerHTML = '';
              div4.innerHTML = '11,435 ft (3,485 m)';

              var div5 = document.getElementById('info');
              div5.innerHTML = '';
              div5.innerHTML = 'Congratulations, you made it! Take a moment to look around and savor your accomplishment, but don'+"'t"+' tarry too long- you still have to make it back down safely.';

              var div6 = document.getElementById('Location');
              div6.innerHTML = '';
              div6.innerHTML = 'Summit';
            }

          // create DOM element for the marker
          var el = document.createElement('div');
          el.id = 'marker';
console.log(test)
          // create the marker
          new mapboxgl.Marker(el)
            .setLngLat(test[a])
            //.setPopup(popup) // sets a popup on this marker
            .addTo(map)
            //.togglePopup();
        }
      }

    if (counter != steps) {
      if (flag) {
        flag = false;
        //Pause the animation for 2 seconds (2000 milliseconds) when it reaches each POI (marker)
        if (!flagStop){
          setTimeout(function(){requestAnimationFrame(animate)}, 2000);
        };
        //Continue playing the animation after the pause
      } else {
        if (!flagStop){
          setTimeout(function(){requestAnimationFrame(animate)}, 50);
        };
      }
    } 
  }
  counter = counter + 1;
} //end of the animate() function

  //Replay button that restarts the animation
  $('#replay').click(function() {
    if (counter == steps + 1) {
      requestAnimationFrame(animate);
    }
    // Set the coordinates of the original point back to origin
    point.features[0].geometry.coordinates = origin;
    
    // Update the source layer
    map.getSource('point').setData(point);
    
    // Reset the counter
    counter = 0;
    var baseCamp={
      bearing: 0,
      center: [86.909, 27.988],
      zoom: 13
    } 
    map.flyTo(baseCamp);
  });

  //Play button that starts the animation
  $("#play").click(function(){
    $("i", this).toggleClass("fas fa-play fas fa-pause");
    if (flagStop)
    {
      flagStop = false;
      setTimeout(function(){requestAnimationFrame(animate)}, 50);
    }else{
      flagStop = true;
    } 
  });
  animate(counter);
});
        
  var toggleableLayerIds = [ 'Elevation'];

  for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];
      
    var link = document.createElement('a');
    link.href = '#';
    link.innerHTML ='<i class="fas fa-mountain"></i>';
      
    link.onclick = function (e) {
      var clickedLayer = id;
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

/*toggling weather widget with animation*/
$("#buttonweather").click(function() {
  $("#weatherwidget").slideToggle(500);
});

/*Higlighting the play button on the close of welcome window */
$("#go").click(function() {
  $("#play").addClass("highlight");
});

$("#play").click(function() {
  $("#play").removeClass("highlight");
});

$(document).ready(function() {        
  $('#welcomeWindow').modal('show');
  createMap();
});