import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
})

L.Marker.prototype.options.icon = DefaultIcon;

ReactDOM.render(<App />, document.getElementById('root'));
