import "./map.css";
import { Map, View } from "ol";
import { FullScreen } from "ol/control";
import TileLayer from "ol/layer/Tile";
import { useGeographic } from "ol/proj";
import XYZ from "ol/source/XYZ";

const attributions = ["Grundkarte: <a href='https://www.basemap.at'>basemap.at</a>"]

/**
 * Creates a map with a dynamic background layer: aerial imagery from highest
 * highest zoom level to 16, basemap from 16 to lowest zoom level. The view
 * is configured to allow zooming in to zoom 18, which is approximately a
 * scale of 1 : 2000. A FullScreen control is also added.
 * @returns {import("ol/Map").default} The map.
 */
export function createMap(target) {
  useGeographic();
  const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new XYZ({
          attributions,
          url: 'https://maps{1-4}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png'
        }),
        maxZoom: 16
      }),
      new TileLayer({
        source: new XYZ({
          attributions,
          url: ' https://maps{1-4}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg'
        }),
        minZoom: 16,
        maxZoom: 19
      })
    ],
    view: new View({
      zoom: 7,
      center: [13.35, 47.70]
    })
  });
  map.addControl(new FullScreen());
  return map;
}