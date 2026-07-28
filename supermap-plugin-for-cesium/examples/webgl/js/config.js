var URL_CONFIG = {
    TDT_IMG : 'https://[subdomain].tianditu.com/img_w/wmts',//天地图影像
    TDT_LABEL : 'https://{s}.tianditu.gov.cn/mapservice',//天地图文字注记
    BINGMAP : '//dev.virtualearth.net',//bing map影像
	BING_MAP_KEY: 'AkNh5OpOWgi_CnmMMlh1pCEv7OGqHKnsK4XU1mxPbUSVq21ncmnZm4kf-lBh2hxw',
    STK : 'https://www.supermapol.com/realspace/services/3D-stk_terrain/rest/realspace/datas/info/data/path',//STK 地形
    ZF_IMG : 'http://www.supermapol.com/realspace/services/3D-dxyx_ios2/rest/realspace/datas/MosaicResult_2@IMAGE_1',
    ZF_TERRAIN : 'http://www.supermapol.com/realspace/services/3D-dxyx_ios2/rest/realspace/datas/DatasetDEM_1@sichuanTer',
    ZF_IMG2 : 'http://www.supermapol.com/realspace/services/3D-ZF_normal/rest/realspace/datas/image',//珠峰影像SCI
    ZF_TERRAIN2 : 'http://www.supermapol.com/realspace/services/3D-ZF_normal/rest/realspace/datas/srtm_54_07@zhufeng',//珠峰地形SCT
    SiChuan_TERRAIN : 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/DatasetDEM', // 四川地形
    SiChuan_IMG : 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult', // 四川影像
    TENSE_IMG0 : 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe-2/rest/realspace/datas/rs0300@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG1 : 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe-2/rest/realspace/datas/rs0310@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG2 : 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe-2/rest/realspace/datas/rs0330@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG3 : 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe-2/rest/realspace/datas/rs0340@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG4 : 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe-2/rest/realspace/datas/rs0350@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG5 : 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe-2/rest/realspace/datas/rs0400@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG6 : 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe-2/rest/realspace/datas/rs0410@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG7 : 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe-2/rest/realspace/datas/rs0420@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG8 : 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe-2/rest/realspace/datas/rs0430@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG9 : 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe-2/rest/realspace/datas/rs0440@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    TENSE_IMG10 : 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe-2/rest/realspace/datas/rs0450@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
    SUPERMAP_IMG_WGS : 'http://www.supermapol.com/realspace/services/map-World/rest/maps/World_Google',//经纬度投影地图TILE IMGERY（中国区域）
    SUPERMAP_IMG_MEC : 'http://www.supermapol.com/realspace/services/map-China400/rest/maps/China400',//墨卡托投影地图TILE IMGERY（全球）
    SCP_JINJIANG : 'http://www.supermapol.com/realspace/services/3D-jinjiang/rest/realspace/datas/jinjiang/config',// 晋江倾斜SCP
    SCP_JINJIANG2 : 'http://www.supermapol.com/realspace/services/3D-JinJiangS3MB/rest/realspace/datas/Combine/config',// 晋江倾斜SCP2
    SCENE_JINJIANG: 'http://www.supermapol.com/realspace/services/3D-jinjiang/rest/realspace', // 晋江倾斜 场景
    SCENE_JINJIANG2: 'http://www.supermapol.com/realspace/services/3D-JinJiangS3MB/rest/realspace', // 晋江倾斜2 场景
    SCP_SUOFEIYA : 'http://www.supermapol.com/realspace/services/3D-suofeiya_church/rest/realspace/datas/Config/config', // 索菲亚大教堂倾斜数据
    SCENE_SUOFEIYA: 'http://www.supermapol.com/realspace/services/3D-suofeiya_church/rest/realspace', // 索菲亚大教堂倾斜数据场景
    SCP_SRSB : 'http://www.supermapol.com/realspace/services/3D-srsb/rest/realspace/datas/srsb/config',//萨尔茨堡SCP
    SCENE_SRSB: 'http://www.supermapol.com/realspace/services/3D-srsb/rest/realspace', // 萨尔茨堡场景
    SCP_SRSB_WATER : 'http://www.supermapol.com/realspace/services/3D-srsb/rest/realspace/datas/%E6%B0%B4%E9%9D%A2@vector/config',//萨尔茨堡水面SCP
    SCP_NIAOCHAO : 'http://www.supermapol.com/realspace/services/3D-OlympicGreen-2/rest/realspace/datas/Building@OlympicGreen/config',//鸟巢SCP
    SCENE_NIAOCHAO: 'http://www.supermapol.com/realspace/services/3D-OlympicGreen-2/rest/realspace', // 鸟巢 场景
    SCP_NIAOCHAO_WATER : 'http://www.supermapol.com/realspace/services/3D-OlympicGreen-2/rest/realspace/datas/Waters@OlympicGreen/config',//鸟巢水面SCP
    SCP_CBD_TREE : 'http://www.supermapol.com/realspace/services/3D-CBD-2/rest/realspace/datas/Tree@CBD/config',//CBD 树SCP
    SCP_CBD_ROAD:'http://www.supermapol.com/realspace/services/3D-CBD-2/rest/realspace/datas/Xiaopin@CBD/config',//CBD的道路网
    SCP_CBD_BRIDGE:'http://www.supermapol.com/realspace/services/3D-CBD-2/rest/realspace/datas/Bridge@CBD/config',
    SCP_CBD_GROUND1 : 'http://www.supermapol.com/realspace/services/3D-CBD-2/rest/realspace/datas/Ground@CBD/config',//CBD 地面1 SCP
    // SCP_CBD_GROUND1 : 'http://www.supermapol.com/realspace/services/3D-CBDCache20200416/rest/realspace/datas/Ground_1@CBD/config',//新CBD 地面1 SCP
    SCP_CBD_GROUND2 : 'http://www.supermapol.com/realspace/services/3D-CBD-2/rest/realspace/datas/Ground2@CBD/config',//CBD 地面2 SCP
    //SCP_CBD_BUILD : 'http://www.supermapol.com/realspace/services/3D-WebGLCBD/rest/realspace/datas/Building@%E6%96%B0CBD/config',//CBD 建筑物 SCP  
    SCP_CBD_BUILD : 'http://www.supermapol.com/realspace/services/3D-CBD-2/rest/realspace/datas/Building@CBD/config',//CBD 建筑物 SCP
    // SCP_CBD_TREE: 'http://www.supermapol.com/realspace/services/3D-CBDCache20200416/rest/realspace/datas/Tree@CBD/config',//CBD的书
    SCP_CBD_LAKE : 'http://www.supermapol.com/realspace/services/3D-CBD-2/rest/realspace/datas/Lake@CBD/config',
    SCP_BIM : 'https://www.supermapol.com/realspace/services/3D-S3MData/rest/realspace/datas/T8H_NoLod/config',//BIM scp
    SCENE_BIMBUILDING: 'http://www.supermapol.com/realspace/services/3D-BIMbuilding-2/rest/realspace', // BIM 场景
    SCENE_WIREFRAME:'http://www.supermapol.com/realspace/services/3D-wireFrame-2/rest/realspace',//BIM wireFrame场景
    SCP_VECTOR_POLYGON : 'http://www.supermapol.com/realspace/services/3D-China/rest/realspace/datas/%E4%B8%93%E9%A2%98%E5%9B%BE/config',//矢量 面 SCP
    SCP_VECTOR_LINE : 'http://www.supermapol.com/realspace/services/3D-China/rest/realspace/datas/Line/config',// 矢量 线 SCP
    SCP_VECTOR_TEXT : 'http://www.supermapol.com/realspace/services/3D-China/rest/realspace/datas/text/config',//矢量 文字 SCP
    SCP_POINTCLOUD : 'http://www.supermapol.com/realspace/services/3D-cloud-2/rest/realspace/datas/POINTCLOUD23/config', //点云 SCP
    SCENE_POINTCLOUD: 'http://www.supermapol.com/realspace/services/3D-cloud-2/rest/realspace',
    SCP_SGNS : 'http://www.supermapol.com/realspace/services/3D-SGNS-2/rest/realspace/datas/siguniang/config',//四姑娘山 SCP
    SCENE_SGNS: 'http://www.supermapol.com/realspace/services/3D-SGNS-2/rest/realspace', // 四姑娘山 场景
	SCENE_RECT: 'http://www.supermapol.com/realspace/services/3D-Text01/rest/realspace', // 框选 场景
    SCP_OLYMPIC_TREE : 'http://www.supermapol.com/realspace/services/3D-OlympicGreen-2/rest/realspace/datas/Tree@OlympicGreen/config',//奥林匹克公园 树 SCP
    SCP_OLYMPIC_BUILD : 'http://www.supermapol.com/realspace/services/3D-OlympicGreen-2/rest/realspace/datas/Building@OlympicGreen/config',//奥林匹克公园 建筑物 SCP
    SCP_OLYMPIC_BILLBOARD : 'http://www.supermapol.com/realspace/services/3D-OlympicGreen-2/rest/realspace/datas/Road@OlympicGreen/config',//奥林匹克公园 人物 SCP
    SCP_OLYMPIC_GROUND : 'http://www.supermapol.com/realspace/services/3D-OlympicGreen-2/rest/realspace/datas/Road@OlympicGreen/config',//奥林匹克公园 地面 SCP
    SCP_OLYMPIC_WATER : 'http://www.supermapol.com/realspace/services/3D-OlympicGreen-2/rest/realspace/datas/Waters@OlympicGreen/config',//奥林匹克公园 水面 SCP
	SCP_OLYMPIC_OlympicGreen : 'http://www.supermapol.com/realspace/services/3D-OlympicGreen-2/rest/realspace/datas/BirdNest@OlympicGreen/config',//奥林匹克公园 单独鸟巢 SCP
    SCENE_OLYMPIC: 'http://www.supermapol.com/realspace/services/3D-OlympicGreen-2/rest/realspace',
    SCENE_OLYMPIC_GREEN: 'http://www.supermapol.com/realspace/services/3D-SampleCodeForFan20200420/rest/realspace',
    SCP_XGPARK : 'http://www.supermapol.com/realspace/services/3D-KeJiYuan-2/rest/realspace/datas/sci_park/config',// 香港科技园 SCP
    SCENE_XGPARK: 'http://www.supermapol.com/realspace/services/3D-KeJiYuan-2/rest/realspace', // 香港科技园 场景
    SCP_PIPELINE : 'https://www.supermapol.com/realspace/services/3D-pipeline_s3m/rest/realspace/datas/NetWork@Pipe3D/config', //管线 SCP 失效
    SCP_HISTOGRAM1 : 'http://www.supermapol.com/realspace/services/3D-Histogram/rest/realspace/datas/Point2D_3000_5000/config', //
    SCP_HISTOGRAM2 : 'http://www.supermapol.com/realspace/services/3D-Histogram/rest/realspace/datas/Point2D_10000_max/config', //
    SCP_HISTOGRAM3 : 'http://www.supermapol.com/realspace/services/3D-Histogram/rest/realspace/datas/Point2D_min_1000/config', //
    SCP_HISTOGRAM4 : 'http://www.supermapol.com/realspace/services/3D-Histogram/rest/realspace/datas/Point2D_5000_10000/config',//
    SCP_HISTOGRAM5 : 'http://www.supermapol.com/realspace/services/3D-Histogram/rest/realspace/datas/Point2D_1000_3000/config', //
    SCENE_HISTOGRAM: 'http://www.supermapol.com/realspace/services/3D-Histogram/rest/realspace',
    SCENE_CBD : 'http://www.supermapol.com/realspace/services/3D-CBD-2/rest/realspace', // CBD场景
	SCENE_WebGLCBD : 'http://www.supermapol.com/realspace/services/3D-CBDCache20200416-2/rest/realspace',   // 新CBD场景
    SCP_FCFH_QX: 'http://www.supermapol.com/realspace/services/3D-FCFH_Shangdong-2/rest/realspace/datas/config/config', //分层分户倾斜摄影图层
    SCP_FCFH_VECTOR_EXTRUDE: 'http://www.supermapol.com/realspace/services/3D-individualHouse/rest/realspace/datas/%E4%B8%93%E9%A2%98%E6%88%B7%E5%9E%8B%E9%9D%A2_%E6%8B%89%E4%BC%B8/config', // 分层分户侧面拉伸数据
    SCP_FCFH_DATA: 'http://www.supermapol.com/realspace/services/data-FCFH_Shangdong/rest/data', //分层分户数据服务
    SCP_WORLD_COUNTRY_VECTOR: 'http://www.supermapol.com/realspace/services/3D-Countries-World2-2/rest/realspace/datas/Countries_1@World/config', // 全球国家边界线的矢量                
    SCP_WORLD_COUNTRY_VECTOR2: 'http://www.supermapol.com/realspace/services/3D-ShiJieGuoJiaBianJie-2/rest/realspace',  // 全球国家边界线的矢量2
    SCENE_POLYLINEGROW_BUINDINGS: 'http://www.supermapol.com/realspace/services/3D-buildings1122/rest/realspace', // 光晕效果线数据,
    SCENE_TISHUJU: 'http://www.supermapol.com/realspace/services/3D-tishuju/rest/realspace', // 体数据场景    
    SCENE_GTC_UINSIDE:'http://www.supermapol.com/realspace/services/3D-data_all/rest/realspace/datas/%E5%86%85%E9%83%A8%E7%BB%93%E6%9E%84@%E5%AE%A4%E5%86%85/config',//u型BIM室内
	SCENE_GTC_UOUTSIDE:'http://www.supermapol.com/realspace/services/3D-data_all/rest/realspace/datas/%E5%A4%96%E9%83%A8%E7%BB%93%E6%9E%84@%E5%AE%A4%E5%86%85/config',//u型BIM室外
	SCENE_GTC_UWINDOW:'http://www.supermapol.com/realspace/services/3D-data_all/rest/realspace/datas/U%E5%9E%8B%E5%BB%BA%E7%AD%91%E7%AA%97@%E5%AE%A4%E5%86%85/config',//u型BIM窗
	SCENE_GTC_WALL9:'http://www.supermapol.com/realspace/services/3D-data_all/rest/realspace/datas/%E5%90%88%E5%B9%B6%E5%89%8D%E5%A2%99@%E4%B9%9D%E5%8F%B7%E6%A5%BC/config',//九号楼合并前墙
	SCENE_GTC_WINDOW9:'http://www.supermapol.com/realspace/services/3D-data_all/rest/realspace/datas/%E5%90%88%E5%B9%B6%E5%89%8D%E7%AA%97@%E4%B9%9D%E5%8F%B7%E6%A5%BC/config',//九号楼合并前窗
	SCENE_GTC_WINDOW9:'http://www.supermapol.com/realspace/services/3D-data_all/rest/realspace/datas/%E5%90%88%E5%B9%B6%E5%89%8D%E7%BB%93%E6%9E%84%E5%9F%BA%E7%A1%80@%E4%B9%9D%E5%8F%B7%E6%A5%BC/config',//九号楼合并前结构
	SCENE_GTC_WINDOW9:'http://www.supermapol.com/realspace/services/3D-data_all/rest/realspace/datas/%E5%90%88%E5%B9%B6%E5%89%8D%E9%97%A8@%E4%B9%9D%E5%8F%B7%E6%A5%BC/config',//九号楼合并前门
	SCENE_GTC_WINDOW9:'http://www.supermapol.com/realspace/services/3D-data_all/rest/realspace/datas/%E5%90%88%E5%B9%B6%E5%89%8D%E6%A5%BC%E6%9D%BF@%E4%B9%9D%E5%8F%B7%E6%A5%BC/config',//九号楼合并前楼板
	SCENE_GTC_FLOOR9:'http://www.supermapol.com/realspace/services/3D-data_all/rest/realspace/datas/%E6%8B%89%E4%BD%8E%E6%A5%BC%E5%B1%82@%E4%B9%9D%E5%8F%B7%E6%A5%BC/config',//九号楼楼层
	SCENE_GTC_LWINDOW9:'http://www.supermapol.com/realspace/services/3D-data_all/rest/realspace/datas/%E6%8B%89%E4%BD%8E%E7%AA%97@%E4%B9%9D%E5%8F%B7%E6%A5%BC/config',//九号楼拉低窗
	SCENE_GTC_LWALL9:'http://www.supermapol.com/realspace/services/3D-data_all/rest/realspace/datas/%E6%8B%89%E4%BD%8E%E5%A2%99@%E4%B9%9D%E5%8F%B7%E6%A5%BC/config',//九号楼拉低墙
	SCENE_GTC_LB9:'http://www.supermapol.com/realspace/services/3D-data_all/rest/realspace/datas/%E6%8B%89%E4%BD%8E%E6%A5%BC%E6%9D%BF@%E4%B9%9D%E5%8F%B7%E6%A5%BC/config',//九号楼拉低楼板
	SCENE_GTC_UNIT9:'http://www.supermapol.com/realspace/services/3D-data_all/rest/realspace/datas/%E5%90%88%E5%B9%B6%E5%90%8E@%E4%B9%9D%E5%8F%B7%E6%A5%BC/config',//合并九号楼
	SCENE_GTC_BUILDIBG:'http://www.supermapol.com/realspace/services/3D-data_all/rest/realspace/datas/building_udb@building/config',//building_udb@building
	SCENE_GTC_HILL:'http://www.supermapol.com/realspace/services/3D-data_all/rest/realspace/datas/%E5%B1%B1/config',//山
	SCENE_GTC_GROUND:'http://www.supermapol.com/realspace/services/3D-data_all/rest/realspace/datas/%E5%9C%B0%E9%9D%A2/config',//地面
	SCENE_MODELUPDATE:'http://www.supermapol.com/realspace/services/3D-MoXingGengXin-2/rest/realspace',//建筑分析区白模数据
    SCENE_CLIP:'http://www.supermapol.com/realspace/services/3D-clip_fengbian-2/rest/realspace',//裁剪封边数据
    TOKEN_TIANDITU: '97d2d09de3e54939dd20123859260bf9', // 天地图token
    SCENE_FEATUREVALUE:'http://www.supermapol.com/realspace/services/3D-featureValue_building9/rest/realspace/datas/%E4%B9%9D%E5%8F%B7@%E4%B9%9D%E5%8F%B7%E6%A5%BC/config',//带特征值的九号楼缓存
    SCENE_OLYMPIC_NIGHT:'http://www.supermapol.com/realspace/services/3D-OlympicGreenNight-2/rest/realspace',//鸟巢夜景
	SCENE_CHONGQING_TX:'http://www.supermapol.com/realspace/services/3D-CQmodel_wireframe_2000-2/rest/realspace',//重庆白模，特效用
	SCENE_VOLUME_NEAREST:'http://www.supermapol.com/realspace/services/3D-compare/rest/realspace',//临近采样模式白模数据
    SCENE_SICHUAN: 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace',
	SCENE_MOVINGLIGHT: 'http://www.supermapol.com/realspace/services/3D-BIMMoXing/rest/realspace',
    SCENE_CIATDT:'https://www.supermapol.com/proxy/swdm/wtfs',
	SCENE_RBBM:'http://www.supermapol.com/realspace/services/3D-XinBaiMo-2/rest/realspace', //日本白模
    SCENE_SUPERMAPONLINETERRAIN:'https://maptiles.supermapol.com/iserver/services/3D-local3DCache-GlobalTIN30M/rest/realspace/datas/Global_TIN_30M',
    SCENE_ANIMATION:'http://www.supermapol.com/realspace/services/3D-BIM-new/rest/realspace',  //图层动画
    SCENE_DRAWER:'http://www.supermapol.com/realspace/services/3D-HeBing8HaoLou-2/rest/realspace',  //抽屉效果
    OLYMPIC_PLAN:'http://www.supermapol.com/realspace/services/3D-OlympicGreen_Plan/rest/realspace',//奥林匹克 平面场景
    SCENE_XGPARK_LT:'http://www.supermapol.com/realspace/services/3D-KeJiYuan-2/rest/realspace',//香港科技园（连通性淹没分析场景）
    SCENE_CHONGQING_MH:'http://www.supermapol.com/realspace/services/3D-CQBaiMoMeiHua-2/rest/realspace',//重庆白模，美化用
    SCENE_CHONGQING_MH_N:'http://www.supermapol.com/realspace/services/3D-CQBaiMoMeiHuaYeJing-2/rest/realspace',//重庆白模，美化用_夜景
    SCENE_CBD_RIAN_SNOW:'http://www.supermapol.com/realspace/services/3D-CBD-2/rest/realspace',//CBD雨雪场景
    SCENE_BIM_EXPLODE:'http://www.supermapol.com/realspace/services/3D-BIMBaoZha-2/rest/realspace',//模型爆炸场景
    SCENE_TRANSFORMER_SUBSTATION:'https://www.supermapol.com/realspace/services/3D-BianDianZhan3/rest/realspace', // 变电站场景
    SCENE_TRANSFORMER_SUBSTATION_NIGHT:'http://www.supermapol.com/realspace/services/3D-BianDianZhan3_night/rest/realspace', // 变电站场景-夜景
};

var EngineType = 0;

function getEngineType(){
    var type = getType();
    console.log("当前EngineType:",type);
    return type;
}

function getType(){
    var EngineTypelocalStorage = localStorage.getItem("EngineType");
    if(EngineType === 0 && EngineTypelocalStorage){
        return EngineTypelocalStorage;
    }else if(EngineType === 2 || EngineType === 3){
        return EngineType;
    }else if(EngineTypelocalStorage == null || !EngineTypelocalStorage){
        return 2;
    }else{
        return EngineTypelocalStorage;
    }
}