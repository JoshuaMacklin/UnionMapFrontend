import icon from '../assets/marker.png'

// export default function Map() {
//     // Initialize leaflet.js
//     var L = require('leaflet');

//     // Initialize the map
//     var map = L.map('map', {
//     scrollWheelZoom: false
//     });

//     // Set the position and zoom level of the map
//     map.setView([47.70, 13.35], 7);

//     /*	Variety of base layers */
//     var osm_mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//         attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//     }).addTo(map);

//     var osm_bw_mapnik = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
//         maxZoom: 18,
//         attribution: '&copy; OSM Black and White Mapnik<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//     });

//     var osm_de = L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
//         maxZoom: 18,
//         attribution: '&copy; OSM Deutschland <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//     });

//     var osm_fr = L.tileLayer('http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
//         maxZoom: 20,
//         attribution: '&copy; OSM France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//     });

//     var osm_hot = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//         attribution: '&copy; OSM Hot <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
//     });

//     var osm_topo = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//         maxZoom: 17,
//         attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//     });

//     var stamen_Toner = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}', {
//         attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//         subdomains: 'abcd',
//         minZoom: 0,
//         maxZoom: 20,
//         ext: 'png'
//     });

//     var stamen_TonerBackground = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.{ext}', {
//         attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//         subdomains: 'abcd',
//         minZoom: 0,
//         maxZoom: 20,
//         ext: 'png'
//     });

//     var stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
//         attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//         subdomains: 'abcd',
//         minZoom: 0,
//         maxZoom: 20,
//         ext: 'png'
//     });

//     var stamen_Watercolor = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
//         attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//         subdomains: 'abcd',
//         minZoom: 1,
//         maxZoom: 16,
//         ext: 'png'
//     });

//     var stamen_Terrain = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}', {
//         attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//         subdomains: 'abcd',
//         minZoom: 0,
//         maxZoom: 18,
//         ext: 'png'
//     });

//     var stamen_TerrainBackground = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.{ext}', {
//         attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//         subdomains: 'abcd',
//         minZoom: 0,
//         maxZoom: 18,
//         ext: 'png'
//     });

//     var esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
//         attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
//     });

//     var esri_WorldTerrain = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
//         attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS',
//         maxZoom: 13
//     });

//     var esri_NatGeoWorldMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
//         attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
//         maxZoom: 16
//     });

//     // Create base layers group object
//     var baseLayers = {
//         "OSM Mapnik": osm_mapnik,
//         "OSM Black White Mapnik": osm_bw_mapnik,
//         "OSM Germany": osm_de,
//         "OSM France": osm_fr,
//         "OSM Hot": osm_hot,
//         "OSm Topo": osm_topo,
//         "Stamen Toner": stamen_Toner,
//         "Stamen Toner Background": stamen_TonerBackground,
//         "Stamen Toner Lite": stamen_TonerLite,
//         "Stamen Watercolor": stamen_Watercolor,
//         "Stamen Terrain": stamen_Terrain,
//         "Stamen Terrain Background": stamen_TerrainBackground,
//         "ESRI World Imagery": esri_WorldImagery,
//         "ESRI World Terrain": esri_WorldTerrain,
//         "ESRI National Geographic": esri_NatGeoWorldMap
//     };

//     // Add baseLayers to the map
//     L.control.layers(baseLayers, null).addTo(map);

//     return(
//         <div id="map"></div>
//     )
// }

import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Mapz = () => {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    if (mapRef.current) {
      try{
         // Initialize the map
        var map = L.map('map', {
        scrollWheelZoom: false
        });

        // Set the position and zoom level of the map
        map.setView([40.741895, -73.989308], 13);

        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        // //   attribution: '© OpenStreetMap contributors',
        // }).addTo(map);

        /*	Variety of base layers */
        var osm_mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: 'OpenStreetMap'
        }).addTo(map);

        var esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'ESRI WorldImagery'
        });

        // Create base layers group object
        var baseLayers = {
            "Default": osm_mapnik,
            "Satellite": esri_WorldImagery
        };

        // Icons

        var markerIcon = L.icon({
            iconUrl: icon,
            iconSize: [39, 39],
            iconAnchor: [18, 39],
            popupAnchor: [10, -35]
        });
        
        // var klagenfurt = L.marker([46.623997, 14.307812], {icon: markerIcon}).bindPopup('<b>Klagenfurt, Kärnten</b>'),
        // graz = L.marker([47.070762, 15.438698], {icon: markerIcon}).bindPopup('<b>Graz, Steiermark</b>'),
        // salzburg = L.marker([47.805109, 13.041151], {icon: markerIcon}).bindPopup('<b>Salzburg, Salzburg</b>'),
        // eisenstadt = L.marker([47.845993, 16.527337], {icon: markerIcon}).bindPopup('<b>Eisenstadt, Burgenland</b>'),
        // wien = L.marker([48.208539, 16.372505], {icon: markerIcon}).bindPopup('<b>Wien, Wien</b>'),
        // stpoelten = L.marker([48.203828, 15.630877], {icon: markerIcon}).bindPopup('<b>St.Pölten, Niederösterreich</b>'),
        // linz = L.marker([48.307025, 14.284829], {icon: markerIcon}).bindPopup('<b>Linz, Oberösterreich</b>'),
        // innsbruck = L.marker([47.268896, 11.401791], {icon: markerIcon}).bindPopup('<b>Innsbruck, Tirol</b>'),
        // bregenz = L.marker([47.500929, 9.740660], {icon: markerIcon}).bindPopup('<b>Bregenz, Vorarlberg</b>');
        
        
        // var capitals = L.layerGroup([klagenfurt, graz, eisenstadt, salzburg, wien, stpoelten, linz, innsbruck, bregenz]).addTo(map)
        
        L.marker([40.741895, -73.989308], {icon: markerIcon}).bindPopup('<b>Default Fortnite Dance</b>').addTo(map);
;
        
        // var overlays = {
        //     'Capitals': capitals
        // };

        // Add baseLayers to the map
        L.control.layers(baseLayers, null).addTo(map);
      } catch (e){
        console.log(e);
      }
    }
  }, []);

  return <div ref={mapRef} id="map"></div>;
};

export default Mapz;