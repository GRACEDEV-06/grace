
"use client"
import { latLng, Map } from "leaflet";
import {MapContainer, TileLayer  } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { MarkerHouse } from "./MarkerHouse";
import { Transform } from "stream";

export function Location() {
const coordinatePoint ={
    lat: 3.7161455726292623, 
    lng: -73.56375661370944 
}

const centerMarker = (position:{lat: number; lng:number }, fnMap:Map) =>{
    fnMap.flyTo({
        lat: position.lat,
        lng: position.lng
    })
}
    return (
        <MapContainer center ={coordinatePoint} zoom={5} scrollWheelZoom={false} className="h-[600px] ">
             <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png"/>
             <MarkerHouse selectMarker={centerMarker}/>
        </MapContainer>
    )
}
