import {useCallback, useEffect, useState, useRef} from "react";
import mapboxgl from "mapbox-gl";
import MapService from "../services/MapService";
import {Sources, Layers} from "../data/SpatialData";
import ReactDOM from "react-dom";

const Popup = ({ featureName, featureNumber, field, type }: { featureName: any, featureNumber: any, field: any, type: any }) => (
  <div className="popup">
    <h3 className="feature-name">{featureName}</h3>
    <div className="feature-metric-row">
      <h4 className="row-title">feature #</h4>
      <div className="row-value">{featureNumber}</div>
    </div>
    <div className="feature-metric-row">
      <h4 className="row-title">feature Type</h4>
      <div className="row-value">{type}</div>
    </div>
    <p className="feature-field">Serves {field}</p>
  </div>
);

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

        /**
           * Event handler for defining what happens when a user clicks on the map
           * In this example, we are checking if the user has clicked on one or more feature layers
           * If they have, we want to render a popup with the data for the selected
           * bus feature
           * Else, do nothing
           */
          //build  a Popup component used to render a map popup with information for chosen feature
                    
          map.on("click", (e: { point: any; lngLat: any; }) => {
            const features = map.queryRenderedFeatures(e.point, {
              layers: ["wellsInUTLayer"],
            });
            if (features.length > 0) {
              const feature = features[0];
              {
                // create popup node
                const popupNode = document.createElement("div");
                ReactDOM.render(
                  <Popup
                    featureName={feature?.properties?.wellname}
                    featureNumber={feature?.properties?.api}
                    field={feature?.properties?.fieldname}
                    type={feature?.properties?.welltype}
                  />,
                  popupNode
                );
                popUpRef.current
                  .setLngLat(e.lngLat)
                  .setDOMContent(popupNode)
                  .addTo(map);
              }
            }
    });
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
  
    return {
      layers,
      map,
      sources,
      updateLayerVisibility,
    };
  };