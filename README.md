# iClient3D for WebGL — 三维网络客户端开发平台

iClient3D for WebGL是基于WebGL技术实现的三维网络客户端开发平台，可用于构建无插件、跨操作系统、 跨浏览器的三维GIS应用程序，支持访问SuperMap iServer发布的多种服务，可实现三维场景得可视化浏览、交互分析等功能，能实现在浏览器和移动端上美观、流畅地呈现场景并进行空间分析查询操作。

## SuperMap Plugin for Cesium

我们提供了面向CesiumJS的插件集合[SuperMap Plugin for Cesium](./supermap-plugin-for-cesium/)，基于该插件可以在CesiumJS中高效快捷地实现iClient3D for Cesium产品的部分功能。

## 内容
SuperMap Plugin for Cesium包含以下内容：
- `Build/`: 包含插件的依赖文件，如SuperMapCesiumPlugin.js等。
- `docs/`: API参考文档。
- `examples/`: 示例代码及所需资源，帮助用户快速上手。 其中 `examples/webgl/` 提供了数据加载、空间分析等范例。
- `web/`: 包含插件的依赖文件，例如语言资源等。  
- `index.html`: Web版本的入口页面。

### 功能

- 数据加载：支持加载SuperMap iServer发布的S3M瓦片、三维影像瓦片、地形数据和MVT数据，以及NetCDF数据、GLTF/GLB/S3MB格式单体模型等数据。
- 空间分析与查询：支持等值线分析、坡度坡向分析、填挖方分析、通视分析、可视域分析、日照分析、地质体开挖/裁剪/剖切等空间分析能力，以及S3M属性查询、MVT数据查询等查询能力。
- 图层管理：支持对S3M图层进行显隐控制、显示风格设置、选中偏移操作，支持MVT数据的显示风格设置与过滤显示操作。
- 飞行管理：提供绕点飞行和沿线飞行能力。
- 场景管理：提供高度量算、视频投放等能力。

### 使用

1. 下载插件：下载[SuperMap Plugin for Cesium](./supermap-plugin-for-cesium/)，并解压到任意目录。

2. 部署Cesium

     a. 下载[CesiumJS 1.133及以上版本](https://github.com/CesiumGS/cesium)。为保障插件最佳适配性，推荐使用CesiumJS 1.133。

    b. 解压后，将其完整复制到SuperMap Plugin for Cesium/Build下，确保Build/<Cesium文件夹名>/Cesium/Cesium.js存在。

3. 引入资源：打开[examples/webgl](./superMap-plugin-for-cesium/examples/webgl/)目录下所需示例，或者新建html文件。在html页面中引入widgets.css、Cesium.js、SuperMapCesiumPlugin.js等资源。例如：
```html
<link rel="stylesheet" href="../../Build/Cesium-1.133/Cesium/Widgets/widgets.css">
<script src="../../Build/Cesium-1.133/Cesium/Cesium.js"></script>
<script src="../../Build/SuperMapCesiumPlugin/SuperMapCesiumPlugin.js"></script>
```

​	4、使用示例：以打开SuperMap iServer发布的场景服务为例进行说明。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
  <meta name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
  <title>打开场景服务</title>
  <!-- 引入原生Cesium和SuperMap插件 -->
  <link href="../../Build/Cesium-1.133/Cesium/Widgets/widgets.css" rel="stylesheet" />
  <script src="../../Build/Cesium-1.133/Cesium/Cesium.js"></script>
  <script src="../../Build/SuperMapCesiumPlugin/SuperMapCesiumPlugin.js"></script>
  <style>
    html,
    body,
    #Container {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #000000;
    }
  </style>
</head>
<body>
  <div id="Container"></div>
  <script>
    function onload(Cesium, SuperMapCesiumPlugin) {
      if (SuperMapCesiumPlugin === undefined) {
        return;
      }
      const viewer = new Cesium.Viewer("Container", {});
      window.viewer = viewer;
      const scene = viewer.scene;
      scene.logarithmicDepthBuffer = true;
      scene.globe.show = true;
      const url = "https://www.supermapol.com/realspace/services/3D-CBD-2/rest/realspace";     
      const supermapPluginViewer = new SuperMapCesiumPlugin.CesiumViewer({
        scene:scene,
      });
      const sueperMapScene = supermapPluginViewer.scene;
      sueperMapScene.open(url);
    }  
    document.addEventListener("DOMContentLoaded", function () {
      console.log("加载成功");
      if (typeof Cesium !== "undefined") {
        onload(Cesium, SuperMapCesiumPlugin);
      }
    })
  </script>
</body>
</html>
```

周边

* [S3M ](https://github.com/SuperMap/s3m-spec)

    * S3M (Spatial 3D Model)是一种开放式、可扩展的三维地理空间数据格式，为海量多源异构空间三维模型数据在不同终端之间的传输、交换与共享提供具体的数据格式规范。

* [iClient3D-Vue](https://github.com/SuperMap/iClient3D-vue)
    * 在SuperMap iClient3D for WebGL产品包基础上使用Vue框架进行封装，以组件形式提供三维应用的常用功能，使之轻量且高效。

* [SuperMap-iEarth](https://github.com/SuperMap/SuperMap-iEarth)
    * SuperMap iEarth是基于全功能三维网络客户端SuperMap iClient3D for WebGL开发的一款三维在线应用程序。在多源数据加载、三维空间分析以及多种可视化效果等功能的支撑下，用户可以通过SuperMap iEarth在浏览器上进行三维浏览及应用。