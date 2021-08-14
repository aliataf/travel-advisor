import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';

import useStyles from './styles';

function SetViewOnChange({ coords }) {
	const map = useMap();
	map.setView(coords, map.getZoom());

	return null;
}

const Map = ({ coordinates }) => {
	const classes = useStyles();
	const isMobile = useMediaQuery('(min-width: 600px)');

	return (
		<MapContainer
			className={classes.mapContainer}
			center={coordinates}
			zoom={13}
			scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={coordinates}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
			<SetViewOnChange coords={coordinates} />
		</MapContainer>
	);
};

export default Map;
