import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import HEX_DATA from "../../data/countries_hex_data.json";
import {
  globeArcsData,
  globeMarkersData,
  randomArcsData,
} from "../../data/globeMarkersData";
import { markups } from "./GlobeInstructorCard";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => <div className="w-full h-[350px]" />,
});

function InstructorGlobe() {
  const [globeReady, setGlobeReady] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: 1200, // Default large size
    height: 650, // Default large size
  });
  const globeRef = useRef(null);
  const [hex, setHex] = useState({ features: [] });

  // Initialize dimensions and set up resize listener
  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const updateDimensions = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerWidth < 600 ? 350 : 650,
        });
      };

      // Set initial dimensions
      updateDimensions();

      // Add event listener
      window.addEventListener("resize", updateDimensions);

      // Cleanup
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  // Countries data
  useEffect(() => {
    setHex(HEX_DATA);
  }, []);

  // Globe initialization
  useEffect(() => {
    if (!globeRef.current) return;

    globeRef.current.pointOfView(
      {
        lat: globeMarkersData[5].lat + 25,
        lng: globeMarkersData[5].lng - 7,
        altitude: 1.6,
      },
      1,
    );
    globeRef.current.controls().enableZoom = false;
  }, [globeReady]);

  return (
    <div className="wrapper-globe relative max-w-full overflow-hidden !mt-0">
      <Globe
        ref={globeRef}
        onGlobeReady={() => setGlobeReady(true)}
        height={dimensions.height}
        width={dimensions.width}
        animateIn={true}
        backgroundColor="rgba(0, 0, 0, 0)"
        globeMaterial={
          new THREE.MeshPhongMaterial({
            color: "#373668",
            opacity: 0.9,
            transparent: true,
          })
        }
        atmosphereColor="#91B4F5"
        atmosphereAltitude="0.20"
        hexPolygonsData={hex.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.5}
        hexPolygonColor={useCallback(() => "white", [])}
        htmlElementsData={globeMarkersData}
        htmlElement={(d) => {
          const el = document.createElement("div");
          if (d.tutor) {
            el.innerHTML = markups.at(d.pos);
            el.className = "globe-instructor-details";
            el.onclick = () => console.info(d);
          } else if (!d.tutor) {
            el.innerHTML = `<div> </div>`;
            el.className = "globe-student-details";
            el.style.backgroundColor = d.bgColor;
          }
          return el;
        }}
        htmlAltitude={(d) => (d?.tutor ? 0.2 : 0)}
        arcsData={randomArcsData}
        arcColor={"color"}
        arcAltitude={0.3}
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={3800}
      />
    </div>
  );
}

export default InstructorGlobe;