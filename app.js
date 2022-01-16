const map = L.map('map').setView([29.998874, 31.253835], 15);

const OSMurl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tiles = L.tileLayer(OSMurl, { attribution });

tiles.addTo(map);

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
L.geoJson(myGeoJson).addTo(map)


L.marker([29.998874, 31.253835]).addTo(map)
   .bindPopup('Cairo')
   .openPopup();
31.253835, 29.998874