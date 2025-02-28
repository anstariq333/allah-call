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


// const Globe = dynamic(import("react-globe.gl"), { ssr: false });
let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

function InstructorGlobe() {
  const [globeReady, setGlobeReady] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerWidth < 600 ? 350 : 650,
  });
  const globeRef = useRef(null);
  const [hex, setHex] = useState({ features: [] });

  // Countries
  useEffect(() => {
    setHex(HEX_DATA);
  }, []);

  useEffect(() => {
    if (!globeRef.current) {
      return;
    }
    globeRef.current.pointOfView(
      {
        lat: globeMarkersData[5].lat + 25,
        lng: globeMarkersData[5].lng - 7,
        altitude: 1.6,
      },
      1,
    );
    globeRef.current.controls().enableZoom = false;
    // Auto-rotate
    // globeRef.current.controls().autoRotate = true;
    // globeRef.current.controls().autoRotateSpeed = 1;
  }, [globeReady]);

  // handle globe size
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerWidth < 600 ? 350 : 650,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="wrapper-globe relative !mt-0">
      {/* <div className="bg-[rgba(255, 255, 255, 0.7)] pointer-events-none absolute inset-0 z-40 !size-full mix-blend-screen"></div> */}
      {/* <div className="pointer-events-none absolute inset-0 z-40 h-[600px] w-full bg-white opacity-55 mix-blend-overlay"></div>   */}
      <Globe
        // Globe config
        ref={globeRef}
        onGlobeReady={() => setGlobeReady(true)}
        // height={650}
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
        // polygons
        hexPolygonsData={hex.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.5}
        hexPolygonColor={useCallback(() => "white", [])}
        // Variant
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
        htmlAltitude={(d) => {
          if (d?.tutor) return 0.2;
          return 0;
        }}
        // Arcs Data
        // arcsData={globeArcsData}
        arcsData={randomArcsData}
        arcColor={"color"}
        arcAltitude={0.3}
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        // arcDashAnimateTime={() => Math.random() * 4000 + 500}
        arcDashAnimateTime={3800}
      />
    </div>
  );
}

export default InstructorGlobe;