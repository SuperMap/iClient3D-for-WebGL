# Cesium_S3MLayer_Plugins

目前，该插件集支持以S3MTilesLayer或S3MDataSource两种形式加载S3M数据，效果如下

![](./figures/cbd.jpg)

_使用S3M图层加载的北京CBD精模数据_

![](./figures/S3M_DataSource.jpg)

_使用S3M DataSource加载倾斜数据_

# 概述
Cesium_S3MLayer_Plugins是iClient3D for WebGL产品面向Cesium推出的插件集合，用户基于该插件，在Cesium中高效快捷的实现iClient3D for WebGL产品的部分功能。目前提供的两款插件均支持最新版本的Cesium。S3MTilesLayer功能全面，性能优化，S3MDataSource则轻量便捷，满足用户的各类场景需求。


该插件集合还在持续优化、完善中，条件成熟后会逐步开源。

## 插件集合
目前支持的插件有：

* [S3MTilesLayer](./S3MTilesLayer/)

    * 以图层形式在Cesium中加载S3M数据，并开发相关功能

* [S3MDataSource](./S3MDataSource/)
    * 以数据源形式在Cesium中加载S3M数据
