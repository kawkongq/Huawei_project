import React, { useRef, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { ZoomableGroup } from "react-simple-maps";
import Productcard from "./Card";
import Image from 'next/image';
// TopoJSON file for Thailand map
const THAILAND_TOPO_JSON = "/thailand-provinces.topojson";

const Map: React.FC = () => {
    const [selectedProvince, setSelectedProvince] = useState<string>("");
    const lastClicked = useRef<SVGElement | null>(null);
    const handleProvinceClick = (provinceName: string) => {
        console.log(`Clicked on province: ${provinceName}`);
        // Add your logic to connect to another component here
        setSelectedProvince(provinceName);
        
    };
    const MAP_WIDTH = 60;
    const [position, setPosition] = React.useState<{ coordinates: [number, number]; zoom: number }>({ coordinates: [100.9925, 15.8700], zoom: 1 });

    const handleMoveEnd = (position: { coordinates: [number, number]; zoom: number }) => {
        setPosition(position);
    };
    const MAP_HEIGHT = 60;
    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f0f8ff" }}>
            <ComposableMap
                projection="geoMercator"
                width={MAP_WIDTH}
                height={MAP_HEIGHT}
                style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <ZoomableGroup
                    center={position.coordinates} // Keep the center fixed to the current position
                    zoom={position.zoom}
                    onMoveEnd={handleMoveEnd}
                >
                    <Geographies geography={THAILAND_TOPO_JSON}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onClick={e => {
                                        handleProvinceClick(geo.properties.NAME_1)
                                    const el = e.currentTarget;
                                    if (lastClicked.current) {
                                        lastClicked.current.style.fill = "#FFFFFF";
                                    }
                                    el.style.fill = "#F53";
                                    lastClicked.current = el;
                                    }}
                                    style={{
                                        default: { fill: "#FFFFFF", stroke: "#D9D9D9", strokeWidth: 0.01 },
                                        hover: { fill: "#F53", stroke: "none" },
                                        pressed: { fill: "#E42", stroke: "none" },
                                    }}
                                    tabIndex={-1} // Prevent focus ring or circle on click
                                    onFocus={(e) => e.target.blur()} // Remove focus to avoid the ring
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            {selectedProvince && (
        <div style={{
            width: "30%",
            height: "95%",
            padding: "0.5rem",
            background: "#fff",
            color: "#fff",
            borderRadius: "15px",
            margin: "1rem",

          }}>
          <h1 style={{textAlign: 'center',fontSize: '45px',color: 'black'}}>{selectedProvince}</h1>
          
          <Productcard/>
        </div>
    )}
        </div>
       
    );
};

export default Map;