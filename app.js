const map = L.map('map').setView([29.998874, 31.253835], 15);

const OSMurl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const OSMtiles = L.tileLayer(OSMurl, { attribution });

OSMtiles.addTo(map);

const esriWorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
   attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});


const markersCluster = L.markerClusterGroup();

const Clayer = L.circle([30.0444, 31.2357], { radius: 1000 });
// Clayer.addTo(map)
const myGeoJson = {
   "type": "FeatureCollection",
   "name": "cairo_2PolyIn1id",
   "crs": {
      "type": "name",
      "properties": {
         "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
      }
   },
   "features": [
      {
         "type": "Feature",
         "properties": {
            "id": 1
         },
         "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
               [
                  [
                     [
                        31.231227106227177,
                        30.002289377289443
                     ],
                     [
                        31.24877899877907,
                        30.003510378510445
                     ],
                     [
                        31.248931623931693,
                        29.99366605616612
                     ],
                     [
                        31.234279609279678,
                        29.992521367521434
                     ],
                     [
                        31.231227106227177,
                        30.002289377289443
                     ]
                  ],
                  [
                     [
                        31.240480006105077,
                        29.997806013431081
                     ],
                     [
                        31.240174755799828,
                        29.998569139194206
                     ],
                     [
                        31.243227258852333,
                        29.99925595238102
                     ],
                     [
                        31.24376144688652,
                        29.996432387057453
                     ],
                     [
                        31.24376144688652,
                        29.996432387057453
                     ],
                     [
                        31.24078525641033,
                        29.996127136752204
                     ],
                     [
                        31.240480006105077,
                        29.997806013431081
                     ]
                  ]
               ],
               [
                  [
                     [
                        31.256410256410327,
                        30.005189255189322
                     ],
                     [
                        31.269078144078215,
                        30.006181318681385
                     ],
                     [
                        31.276862026862098,
                        29.99336080586087
                     ],
                     [
                        31.262515262515333,
                        29.991605616605682
                     ],
                     [
                        31.262515262515333,
                        29.991605616605682
                     ],
                     [
                        31.256410256410327,
                        30.005189255189322
                     ]
                  ],
                  [
                     [
                        31.263755341880415,
                        30.000705891330959
                     ],
                     [
                        31.267876221001295,
                        30.001621642246707
                     ],
                     [
                        31.270699786324858,
                        29.997348137973205
                     ],
                     [
                        31.265357905982977,
                        29.996356074481142
                     ],
                     [
                        31.263755341880415,
                        30.000705891330959
                     ]
                  ]
               ]
            ]
         }
      }
   ]
}

let myGeoJsonPolygons = {
   "type": "FeatureCollection",
   "features": [
      {
         "type": "Feature",
         "properties": {
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#555555",
            "fill-opacity": 0.5,
            "POP": 1
         },
         "geometry": {
            "type": "Polygon",
            "coordinates": [
               [
                  [
                     31.25103950500488,
                     29.99352264076956
                  ],
                  [
                     31.255245208740234,
                     29.99352264076956
                  ],
                  [
                     31.255245208740234,
                     29.996644720796976
                  ],
                  [
                     31.25103950500488,
                     29.996644720796976
                  ],
                  [
                     31.25103950500488,
                     29.99352264076956
                  ]
               ]
            ]
         }
      },
      {
         "type": "Feature",
         "properties": {
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#555555",
            "fill-opacity": 0.5,
            "POP": 2
         },
         "geometry": {
            "type": "Polygon",
            "coordinates": [
               [
                  [
                     31.241254806518555,
                     29.99352264076956
                  ],
                  [
                     31.246318817138672,
                     29.99352264076956
                  ],
                  [
                     31.246318817138672,
                     29.996421718337448
                  ],
                  [
                     31.241254806518555,
                     29.996421718337448
                  ],
                  [
                     31.241254806518555,
                     29.99352264076956
                  ]
               ]
            ]
         }
      },
      {
         "type": "Feature",
         "properties": {
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#555555",
            "fill-opacity": 0.5,
            "POP": 3
         },
         "geometry": {
            "type": "Polygon",
            "coordinates": [
               [
                  [
                     31.235675811767578,
                     29.993373967842608
                  ],
                  [
                     31.23842239379883,
                     29.993373967842608
                  ],
                  [
                     31.23842239379883,
                     29.996198715376895
                  ],
                  [
                     31.235675811767578,
                     29.996198715376895
                  ],
                  [
                     31.235675811767578,
                     29.993373967842608
                  ]
               ]
            ]
         }
      }
   ]
}
let myGeoJsonPoints = {
   "type": "FeatureCollection",
   "features": [
      {
         "type": "Feature",
         "properties": {
            "marker-color": "#7e7e7e",
            "marker-size": "medium",
            "marker-symbol": "",
            "ID": 1
         },
         "geometry": {
            "type": "Point",
            "coordinates": [
               31.23713493347168,
               30.00571306296319
            ]
         }
      },
      {
         "type": "Feature",
         "properties": {
            "marker-color": "#7e7e7e",
            "marker-size": "medium",
            "marker-symbol": "",
            "ID": 2
         },
         "geometry": {
            "type": "Point",
            "coordinates": [
               31.246919631958004,
               30.008834759489474
            ]
         }
      },
      {
         "type": "Feature",
         "properties": {
            "marker-color": "#7e7e7e",
            "marker-size": "medium",
            "marker-symbol": "",
            "ID": 3
         },
         "geometry": {
            "type": "Point",
            "coordinates": [
               31.253957748413086,
               30.008091507321193
            ]
         }
      },
      {
         "type": "Feature",
         "properties": {
            "marker-color": "#7e7e7e",
            "marker-size": "medium",
            "marker-symbol": "",
            "ID": 4
         },
         "geometry": {
            "type": "Point",
            "coordinates": [
               31.247692108154297,
               30.00378053493808
            ]
         }
      },
      {
         "type": "Feature",
         "properties": {
            "marker-color": "#7e7e7e",
            "marker-size": "medium",
            "marker-symbol": "",
            "ID": 5
         },
         "geometry": {
            "type": "Point",
            "coordinates": [
               31.23576164245605,
               29.994563345023284
            ]
         }
      }
   ]
}

//Add to map Direcrt
// L.geoJson(myGeoJson).addTo(map)

let photoTEST = '<img src="https://static.pexels.com/photos/189349/pexels-photo-189349.jpeg" height="150px" width="150px"/>';

// Icon Styles
let myIcon1 = L.icon({
   iconUrl: 'location.png',
   iconSize: [100, 100],
});

let myIcon2 = L.icon({
   iconUrl: 'location2.png',
   iconSize: [100, 100],
});

let myIcon3 = L.icon({
   iconUrl: 'location3.png',
   iconSize: [100, 100],
});

let pointsGeoJsonStyled = L.geoJson(myGeoJsonPoints, {
   pointToLayer: function (geoJsonPoint, latlng) {
      // let pointID = geoJsonFeature.properties.POP
      switch (geoJsonPoint.properties.ID) {
         case (geoJsonPoint.properties.ID <= 3): return L.marker(latlng, { icon: myIcon1 });
         case 4: return markersCluster.addLayer(L.marker(latlng, { icon: myIcon2 }));
         case 5: return markersCluster.addLayer(L.marker(latlng, { icon: myIcon3 }));
         default: return markersCluster.addLayer(L.marker(latlng, { icon: myIcon1 }));
      }
   }
});

let PolyGeoJsonStyled = L.geoJson(myGeoJsonPolygons, {
   style: function (geoJsonFeature) {
      // let polyID = geoJsonFeature.properties.POP
      switch (geoJsonFeature.properties.POP) {
         case 1: return { color: "#ff0000" };
         case 2: return { color: "#0000ff" };
         default: return { color: "#09908f" };
      }
   }
}).bindPopup(function (geoJsonFeature) {
   console.log(geoJsonFeature.feature.properties.POP)
   return (geoJsonFeature.feature.properties.POP).toString();
})
// L.featureGroup([pointsGeoJsonStyled, PolyGeoJsonStyled])
// pointsGeoJsonStyled.addTo(map)
// PolyGeoJsonStyled.addTo(map)

map.on('click', function (eventInfo) {
   console.log(eventInfo)
})

map.on('dblclick', function (eventInfo) {
   console.log("dblclick" + eventInfo)
})

// Layers Ctrl

const basemapLayers = {
   "OpenStreetMap": OSMtiles,
   "ESRI": esriWorldTopoMap
}

const overlays = {
   "Points": pointsGeoJsonStyled,
   "Polygons": PolyGeoJsonStyled
};

const layerCtrl = L.control.layers(basemapLayers, overlays)
layerCtrl.addTo(map)
// markersCluster.addLayer(L.marker(getRandomLatLng(map)));
map.addLayer(markersCluster);