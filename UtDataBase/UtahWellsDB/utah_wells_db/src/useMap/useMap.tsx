//Load and display map with APIs form Mapbox
//Function to change the Visibility of different layer

import {useCallback, useEffect, useState, useRef} from "react";
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';
import MapService from "../services/MapService";
import {Sources, Layers} from "../data/SpatialData";
import {MapControl} from '../basemap/exportMap';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'; 
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.workerClass = MapboxWorker;

export const useMap = (ref: any, mapConfig: any) => {
    const [map, setMap] = useState<typeof ref.current | null>(null);
    const [mapStatus, setMapStatus] = useState({
      map: {
        created: false,
        loaded: false,
      },
      sources: {
        loaded: false,
        added: false,
      },
      layers: {
        loaded: false,
        added: false,
      },
    });
    const [sources, setSources] = useState([]);
    const [layers, setLayers] = useState<typeof Layers[]>([]);
    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));
  
    useEffect(() => {
      if (ref?.current && !mapStatus.map.created) {
        const newMap = new mapboxgl.Map({
          container: ref.current?? '',
          ...mapConfig,
        });
        setMap(newMap);
        setMapStatus((s) => ({
          ...s,
          map: {
            ...s.map,
            created: true,
          },
        }));
        newMap.on("load", () => {
          setMapStatus((s) => ({
            ...s,
            map: {
              ...s.map,
              loaded: true,
            },
          }));
        });
      }
    }, [ref, mapConfig, mapStatus.map.created]);
  
    const loadMapData = useCallback(() => {
      const shouldLoadData =
        !!map && mapStatus.map.loaded && !mapStatus.sources.loaded;
      async function loadData() {
        const fetchedSources: any = await MapService.getSources();
        const fetchedLayers: any = await MapService.getLayers();
        setSources(fetchedSources);
        setLayers(fetchedLayers);
        if (!mapStatus.sources.added) {
          fetchedSources.forEach((source: { id: any; }) => {
            const cleanedSource = { ...source };
            delete cleanedSource.id;
            map.addSource(source.id, cleanedSource);
          });
  
          if (!mapStatus.layers.added) {
            fetchedLayers.forEach((layer: any) => {
              map.addLayer(layer);
            });
          }
        }
        setMapStatus((s) => ({
          ...s,
          sources: {
            loaded: true,
            added: true,
          },
          layers: {
            loaded: true,
            added: true,
          },
        }));

        //albers, equirectangular, mercator, equalEarth, lambertConformalConic, naturalEarth, winkelTripel
        map.setProjection("mercator");

        /**
           * Event handler for defining what happens when a user clicks on the map
           * In this example, we are checking if the user has clicked on one or more feature layers
           * If they have, we want to render a popup with the data for the selected
           * bus feature
           * Else, do nothing
           */
          //build  a Popup component used to render a map popup with information for chosen feature
                    
        
        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', "wellsInUTLayer", () => {
          map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', "wellsInUTLayer", () => {
          map.getCanvas().style.cursor = '';
        });

        map?.addControl(
          new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl
          })); 
        
      }
      if (shouldLoadData) {
        loadData();
      }
    }, [map, mapStatus.map.loaded, mapStatus.sources, mapStatus.layers]);
  
    const updateLayerVisibility = (id: any, visible: any) => {
      if (!!map && !!map.getLayer(id)) {
        const visibleValue = visible ? "visible" : "none";
        map.setLayoutProperty(id, "visibility", visibleValue);
        setLayers((s) => {
          return s.map((layer: any) => {
            if (layer.id === id) {
              return {
                ...layer,
                layout: {
                  ...layer.layout,
                  visibility: visibleValue,
                },
              };
            }
            return layer;
          });
        });
      }
    };
  
    useEffect(() => {
      loadMapData();
    }, [loadMapData]);
  
    MapControl[0].map=map;
    MapControl[1].layer=layers;

    return {
      layers,
      map,
      sources,
      updateLayerVisibility,
    };
  };