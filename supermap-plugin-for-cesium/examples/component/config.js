/**
 * WebGL 示例配置文件：包含示例的分类、名称、缩略图、文件路径
 */
var identification = {
    name: "WebGL"
};
var exampleConfig = {
    "layer": {
        name: "组件",
        name_en: "layer",
        content: {
            "分析": {
                name: "分析",
                name_en: "analysis",
                content: [
                    {
                        name: "量测",
                        name_en: "vue_measure",
                        thumbnail: "vue_measure.jpg",
                        fileName: "vue_measure"
                    },
                    {
                        name: "可视域分析",
                        name_en: "vue_viewShed",
                        thumbnail: "vue_viewShed.jpg",
                        fileName: "vue_viewShed"
                    },
                    {
                        name: "天际线分析",
                        name_en: "vue_skyline",
                        thumbnail: "vue_skyline.jpg",
                        fileName: "vue_skyline"
                    },
                    {
                        name: "剖面分析",
                        name_en: "vue_profile3D",
                        thumbnail: "vue_profile3D.jpg",
                        fileName: "vue_profile3D"
                    },                    
                    {
                        name: "通视分析",
                        name_en: "vue_sightLine",
                        thumbnail: "vue_sightLine.jpg",
                        fileName: "vue_sightLine"
                    },
                    {
                        name: "阴影分析",
                        name_en: "vue_shadowQuery",
                        thumbnail: "vue_shadowQuery.jpg",
                        fileName: "vue_shadowQuery"
                    },
                    {
                        name: "地质体分析",
                        name_en: "vue_geologicBodyAnalysis",
                        thumbnail: "vue_geologicBodyAnalysis.jpg",
                        fileName: "vue_geologicBodyAnalysis"
                    },
                    {
                        name: "贴线分析",
                        name_en: "vue_onLineAnalysis",
                        thumbnail: "vue_onLineAnalysis.jpg",
                        fileName: "vue_onLineAnalysis"
                    },
                    {
                        name: "退线分析",
                        name_en: "vue_backLineAnalysis",
                        thumbnail: "vue_backLineAnalysis.jpg",
                        fileName: "vue_backLineAnalysis"
                    },
                    {
                        name: "限高分析",
                        name_en: "vue_limitHeightAnalysis",
                        thumbnail: "vue_limitHeightAnalysis.jpg",
                        fileName: "vue_limitHeightAnalysis"
                    }
					

                ]
            },
			"地形":{
				
				name: "地形",
                name_en: "terrain",
                content: [
                    {
                        name: "地形分析",
                        name_en: "vue_terrainAnalysis",
                        thumbnail: "vue_terrainAnalysis.jpg",
                        fileName: "vue_terrainAnalysis"
                    },

                ]
			},
			"裁剪":{
				
				name: "裁剪",
                name_en: "clip",
                content: [
                    {
                        name: "裁剪分析",
                        name_en: "vue_clipAnalysis",
                        thumbnail: "vue_clipAnalysis.jpg",
                        fileName: "vue_clipAnalysis"
                    },
					{
                        name: "BOX交互裁剪",
                        name_en: "vue_clipBoxByEditor",
                        thumbnail: "vue_clipBoxByEditor.jpg",
                        fileName: "vue_clipBoxByEditor"
                    },

                ]
			},

        }
    },

};

/**
 *key值：为exampleConfig配置的key值或者fileName值
 *      （为中间节点时是key值，叶结点是fileName值）
 *value值：fontawesome字体icon名
 *不分层
 */
var sideBarIconConfig = {
    "online-base-map": "fa-globe",
    "Scene": "fa-university",
    "fly": "fa-send",
    "layer": "fa-object-group",
    "KMLAndModel": "fa-cubes",
    "online-draw": "fa-edit",
    "search": "fa-search",
    "measurement": "fa-arrows-v",
    "analysis": "fa-map",
    "visualization": "fa-eye",
    "stereoscopic-show": "fa-cube",
    "plot": "fa-pencil"
};

/**
 *key值：为exampleConfig配置的key值
 *value值：fontawesome字体icon名
 *与sideBarIconConfig的区别：sideBarIconConfig包括侧边栏所有层级目录的图标，exampleIconConfig仅包括一级标题的图标
 */
var exampleIconConfig = {
    "online-base-map": "fa-globe",
    "Scene": "fa-university",
    "fly": "fa-send",
    "layer": "fa-object-group",
    "KMLAndModel": "fa-cubes",
    "online-draw": "fa-edit",
    "search": "fa-search",
    "measurement": "fa-arrows-v",
    "analysis": "fa-map",
    "visualization": "fa-eye",
    "stereoscopic-show": "fa-cube",
    "plot": "fa-pencil"
};