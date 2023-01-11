import React from "react";
import { Ion, Viewer, createWorldTerrain } from "cesium";

function App() {
  // Your access token can be found at: https://cesium.com/ion/tokens.
  // This is the default access token
  Ion.defaultAccessToken = ""

  // Initialize the Cesium Viewer in the HTML element with the cesiumContainer ID.
  const viewer = new Viewer('cesiumContainer', {
    terrainProvider: createWorldTerrain()
  });


  return (
    <div>
    </div>

  );
}

export default App;