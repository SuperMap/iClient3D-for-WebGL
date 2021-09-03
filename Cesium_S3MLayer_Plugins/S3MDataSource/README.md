# 新增功能
	2021/09/03		新增Cesium加载S3M数据源工具类

# S3MDataSource

该插件支持在Cesium中直接加载S3M数据


## 使用方式

1. 将Source/DataSources/S3MDataSource.js文件和示例程序Apps/Sandcastle/gallery/S3M 3D Object Layer.html拷贝到Cesium同级目录下。

2. 编译新的Source/Cesium.js文件以包含S3MDataSource.js文件的引用。或者您可以手动在Source/Cesium.js最后加上引用。

3. 通过http服务访问示例程序。

4. 如果您需要在Release版本中包含该功能，那么需要编译出新的Build/Cesium.js文件，具体操作方法可以参考Cesium官方文档。
