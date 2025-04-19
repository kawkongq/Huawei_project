import React, { useEffect, useRef, useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import Productcard from "./Card";

const THAILAND_TOPO_JSON = "/thailand-provinces.topojson";

interface MapProps {
    searchedProvince?: string;
}

const Map: React.FC<MapProps> = ({ searchedProvince }) => {
    const [selectedProvince, setSelectedProvince] = useState<string>("");
    const [highlightedProvince, setHighlightedProvince] = useState<string>(""); // ✅ province ที่จะถูกเน้นสี
    const geographiesRef = useRef<any[]>([])
    const [position, setPosition] = useState<{ coordinates: [number, number]; zoom: number }>({
        coordinates: [100.9925, 15.8700],
        zoom: 1,
    });
    const lastClicked = useRef<SVGElement | null>(null);

    const handleMoveEnd = (pos: { coordinates: [number, number]; zoom: number }) => {
        setPosition(pos);
    };

    const handleProvinceClick = (provinceName: string, el: SVGElement) => {
     
        if (lastClicked.current) {
          lastClicked.current.style.fill = "#FFFFFF"
        }
        
        el.style.fill = "#F53"
        lastClicked.current = el
    
   
        setSelectedProvince(provinceName)
        setHighlightedProvince(provinceName)
      }

    // ✅ ซูม + ใส่สีเมื่อค้นหา
    useEffect(() => {
        if (!searchedProvince || geographiesRef.current.length === 0) return

        const query = searchedProvince.toLowerCase()
        const found = geographiesRef.current.find((geo) => {
            const name = geo.properties.NAME_1.toLowerCase()
            return name === query || name.includes(query)
        })

        if (found) {
            // const [minX, minY, maxX, maxY] = found.bbox || [100, 10, 101, 11];
            // const centroid: [number, number] = [
            //     (minX + maxX) / 2,
            //     (minY + maxY) / 2
            // ];
            // setPosition({ coordinates: centroid, zoom: 4 });
            setSelectedProvince(found.properties.NAME_1);
            setHighlightedProvince(found.properties.NAME_1); // ✅ set สีบนแผนที่
        } else {
            console.warn("❌ ไม่พบจังหวัด:", searchedProvince);
        }
    }, [searchedProvince]);

    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f0f8ff" }}>
            <ComposableMap
                projection="geoMercator"
                width={60}
                height={60}
                style={{ width: "100%", height: "100vh" }}
            >
                <ZoomableGroup center={position.coordinates} zoom={position.zoom} onMoveEnd={handleMoveEnd}>
                    <Geographies geography={THAILAND_TOPO_JSON}>
                        {({ geographies }) => {
                            if (geographiesRef.current.length === 0) {
                                geographiesRef.current = geographies
                              };
                            return geographies.map((geo) => {
                                const provinceName = geo.properties.NAME_1;
                                const isHighlighted = provinceName === highlightedProvince;

                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onClick={(e) =>
                                            handleProvinceClick(
                                              provinceName,
                                              e.currentTarget as SVGElement
                                            )
                                          }
                                        style={{
                                            default: {
                                                fill: isHighlighted ? "#FFD700" : "#FFFFFF", // ✅ ใส่สีเหลืองทอง
                                                stroke: "#D9D9D9",
                                                strokeWidth: 0.01,
                                            },
                                            hover: { fill: "#F53", stroke: "none" },
                                            pressed: { fill: "#E42", stroke: "none" },
                                        }}
                                        tabIndex={-1}
                                        onFocus={(e) => e.target.blur()}
                                    />
                                );
                            });
                        }}
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            {selectedProvince && <Productcard name={selectedProvince} />}
        </div>
    );
};

export default Map;
