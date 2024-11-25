import React from 'react';
import L from 'leaflet';
import icon from '../assets/marker.png' // https://icon-icons.com/fr/icone/map-marker/136421
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
        
        L.marker([40.741895, -73.989308], {icon: markerIcon}).bindPopup('<h2>Default Fortnite Dance</h2><b>Default Fortnite Dance</b>').addTo(map);
        
        
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