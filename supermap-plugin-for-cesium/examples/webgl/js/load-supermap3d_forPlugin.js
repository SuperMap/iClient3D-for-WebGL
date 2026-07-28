window.SUPERMAP3D_BASE_URL = "../../../../Build/SuperMapCesiumPluginUnminified/";

import("../../../Build/Cesium-1.133/CesiumUnminified/index.js").then((cesiumModule)=>{
    window.Cesium = cesiumModule;
    return import("../../../../Build/SuperMapCesiumPluginUnminified/index.js");
}).then((superMapModule) => {
    window.SuperMapCesiumPlugin = superMapModule;
    if (!window.startupCalled && typeof window.onload === 'function') {
        window.onload( window.Cesium, SuperMapCesiumPlugin);
    }
});

