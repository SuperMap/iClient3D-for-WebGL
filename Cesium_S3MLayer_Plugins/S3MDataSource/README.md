# 新增功能
	2021/09/03		新增Cesium加载S3M数据源工具类

# S3MDataSource

该插件支持在Cesium中以DataSource方式加载S3M数据


## 使用方式

* 将当前文件放在Source/DataSources目录下，层级如下所示

|—— Source

|———— DataSources

|—————— **S3MDataSource.js**

* 当前插件提供一个示例程序，放在Apps/Sandcastle/gallery目录下，层级如下所示

|—— Apps

|———— Sandcastle

|—————— gallery

|———————— **S3M 3D Object Layer.html**


如果您需要在Release版本中包含该功能，那么需要您在安装完需要的node.js库之后执行gulp minify重新生成Build/Cesium/Cesium.js文件。

## 贡献者

- 任飞翔
- 白崇锦
