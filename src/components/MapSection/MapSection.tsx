import { useEffect, useRef, useState } from "react";
import { useGetWeatherQuery } from "@/redux/services/weather/weather";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; 
import mapboxgl from 'mapbox-gl';
import Skeleton from "../Skeleton/Skeleton";
import styles from "./Map.module.css";
import "mapbox-gl/dist/mapbox-gl.css";
 
mapboxgl.accessToken = import.meta.env.VITE_mapboxgl_accessToken;

export default function MapSection() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [lng, setLng] = useState<number>(0);
  const [lat, setLat] = useState<number>(0);
  const cityName = useSelector((state: RootState) => state.input.value);
  const lang = useSelector((state: RootState) => state.langs.langs);
  const { data, error, isLoading } = useGetWeatherQuery({cityName, lang});

  useEffect(() => {
    const loadMap = async () => {
      if (data?.city.coord.lat) {
        setLat(data?.city.coord.lat)
        setLng(data?.city.coord.lon)
      }
      const mapboxgl = await import('mapbox-gl');
      if (mapContainer.current) {
        new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: 10
        });
      }
    };
    loadMap();
  });

  return (
    <div className={styles.main}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Skeleton />
      ) : data ? (
        <>
          <div ref={mapContainer} style={{ height: "100%" }} />
        </>
      ) : null}
    </div>
  );
}
