var _0x2d7de1=(function(){var _0x224cad=!![];return function(_0x326aa3,_0xe006d2){var _0x48d1a2=_0x224cad?function(){if(_0xe006d2){var _0x3fe7b8=_0xe006d2['apply'](_0x326aa3,arguments);return _0xe006d2=null,_0x3fe7b8;}}:function(){};return _0x224cad=![],_0x48d1a2;};}()),_0x421ef1=_0x2d7de1(this,function(){return _0x421ef1['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x421ef1)['search']('(((.+)+)+)+$');});_0x421ef1();import _0x3fff11 from'../ThirdParty/defer.js';let _0x13a39e=Cesium['loadImageFromTypedArray'],_0xe3c969=Cesium['defined'],_0x5d8d73=Cesium['RequestState'],_0x11a9c4=Object['assign']({'PACK':0x4,'BLOCK':0x5,'BLOCKPACK':0x6},Cesium['RequestType']);var _0x3c8190={'webp':'image/webp','png':'image/png'},_0x103167={'UNLOADED':0x0,'TRANSITIONING':0x1,'RECEIVED':0x2,'TEXTURE_LOADED':0x3,'READY':0x4,'FAILED':0x5,'INVALID':0x6,'PLACEHOLDER':0x7,'RENDERING':0x8,'RENDERED':0x9},_0x7b0a37=/\.dxtz/i;function _0x3b90ae(_0x5e4be0,_0x4dc26e,_0x2d5e88){var _0x295236=new DataView(_0x5e4be0,_0x4dc26e,_0x2d5e88),_0x3c081e=0x0,_0x56b86b=_0x295236['getUint32'](_0x3c081e,!![]);_0x3c081e+=Uint32Array['BYTES_PER_ELEMENT'];var _0x45935e=_0x295236['getUint32'](_0x3c081e,!![]);_0x3c081e+=Uint32Array['BYTES_PER_ELEMENT'];var _0x12c184=_0x56b86b===0x20?PixelFormat['RGBA_DXT5']:PixelFormat['RGB_DXT1'],_0x349371=_0x295236['getUint32'](_0x3c081e,!![]);_0x3c081e+=Uint32Array['BYTES_PER_ELEMENT'];var _0x420e6c=_0x295236['getUint32'](_0x3c081e,!![]);_0x3c081e+=Uint32Array['BYTES_PER_ELEMENT'];var _0x65ee18=_0x295236['getUint32'](_0x3c081e,!![]);_0x3c081e+=Uint32Array['BYTES_PER_ELEMENT'];var _0x188027=_0x295236['getUint32'](_0x3c081e,!![]);_0x3c081e+=Uint32Array['BYTES_PER_ELEMENT'];var _0x3b81eb=new Uint8Array(_0x5e4be0,_0x3c081e+_0x4dc26e,_0x188027),_0x47c044=pako['inflate'](_0x3b81eb)['buffer'],_0x5b45db=new Uint8Array(_0x47c044);return new CompressedTextureBuffer(_0x12c184,_0x349371,_0x420e6c,_0x5b45db);}function _0x1ddc41(_0x3a155a,_0x4c862b,_0x265c4d){var _0x190a03=new DataView(_0x3a155a),_0x4d6ebc=0x0,_0x330af2=_0x190a03['getUint32'](_0x4d6ebc,!![]);_0x4d6ebc+=0x4;var _0x4116d5=_0x190a03['getUint32'](_0x4d6ebc,!![]);_0x4d6ebc+=0x4;var _0x4fcdd5=_0x4c862b['col'],_0x904356=_0x4c862b['row'],_0x4501e0=_0x904356*_0x4c862b['blockSize']+_0x4fcdd5,_0x1ccb40=0x0,_0x17138b=0x0;for(var _0x32db0d=0x0;_0x32db0d<_0x4116d5;_0x32db0d++){if(_0x32db0d<_0x4501e0)_0x1ccb40+=_0x190a03['getUint32'](_0x4d6ebc,!![]);else{if(_0x32db0d===_0x4501e0){_0x17138b=_0x190a03['getUint32'](_0x4d6ebc,!![]),_0x4d6ebc+=0x4;break;}}_0x4d6ebc+=0x4;}_0x4d6ebc=0x8+_0x4116d5*0x4;if(_0x17138b===0x0)return undefined;_0x4d6ebc+=_0x1ccb40;var _0x138a46=_0x3fff11(),_0x533693=_0x4c862b['url'];return _0x7b0a37['test'](_0x533693)?_0x138a46['resolve'](_0x3b90ae(_0x3a155a,_0x4d6ebc,_0x17138b)):_0x13a39e({'uint8Array':new Uint8Array(_0x3a155a,_0x4d6ebc,_0x17138b),'format':_0x265c4d,'flipY':!![]});}function _0x32f2a6(_0x1b9484,_0x1f6e6c){const _0x1a537f=_0x1f6e6c['_imageryProvider'],_0x45661b=_0x1f6e6c;function _0x575ed5(_0x2ace87){if(!_0xe3c969(_0x2ace87))return _0x10878a();var _0x508fde=_0x3c8190[_0x1a537f['_fileExtension']],_0x3ed185=_0x1a537f['blockCache'][_0x1b9484['request']['quadKey']];!_0xe3c969(_0x3ed185['data'])&&(_0x3ed185['data']=_0x2ace87);_0x1a537f['blockCacheQueue']['touch'](_0x3ed185),_0x1a537f['blockCacheQueue']['trim'](_0x1a537f['blockCacheSize']);_0xe3c969(_0x1a537f['_cacheKey'])&&_0x1a537f['_cacheKey']['length']>0x0&&(_0x2ace87=decodeArrayBuffer(_0x2ace87,_0x1a537f['_cacheKey']));var _0x28626a=_0x1ddc41(_0x2ace87,_0x1b9484['request']['blockInfo'],_0x508fde);!_0xe3c969(_0x28626a)&&(_0x1b9484['state']=_0x103167['FAILED']);_0x28626a['then'](function(_0x72b89c){_0x1b9484['image']=_0x72b89c,_0x1b9484['state']=_0x103167['RECEIVED'];},_0x4dc4b5=>{_0x1b9484['state']=_0x103167['FAILED'];}),_0x1b9484['request']=undefined;if(_0xe3c969(Cesium['TileProviderError']['handleSuccess']))Cesium['TileProviderError']['handleSuccess'](_0x45661b['_requestImageError']);else _0xe3c969(Cesium['TileProviderError']['reportSuccess'])&&Cesium['TileProviderError']['reportSuccess'](_0x45661b['_requestImageError']);}function _0x10878a(_0x4fa0c2){if(_0x1b9484['request']['state']===_0x5d8d73['CANCELLED']){_0x1b9484['state']=_0x103167['UNLOADED'],_0x1b9484['request']=undefined;return;}_0x1b9484['state']=_0x103167['FAILED'],_0x1b9484['request']=undefined;const _0x13b65f='Failed\x20to\x20obtain\x20image\x20tile\x20X:\x20'+_0x1b9484['x']+'\x20Y:\x20'+_0x1b9484['y']+'\x20Level:\x20'+_0x1b9484['level']+'.';_0x45661b['_requestImageError']=Cesium['TileProviderError']['handleError'](_0x45661b['_requestImageError'],_0x1a537f,_0x1a537f['errorEvent'],_0x13b65f,_0x1b9484['x'],_0x1b9484['y'],_0x1b9484['level'],_0x35eb28,_0x4fa0c2);}function _0x35eb28(_0x49f12f){var _0x291b4a=new Cesium['Request']({'throttle':![],'throttleByServer':!![],'type':_0x11a9c4['IMAGERY']});_0x291b4a['cacheEnable']=_0x49f12f,_0x1b9484['request']=_0x291b4a,_0x1b9484['state']=_0x103167['TRANSITIONING'];var _0x2009a0=_0x1a537f['requestImage'](_0x1b9484['x'],_0x1b9484['y'],_0x1b9484['level'],_0x291b4a,_0x1b9484['rectangle'],_0x1b9484);if(!_0xe3c969(_0x2009a0)){_0x1b9484['state']=_0x103167['UNLOADED'],_0x1b9484['request']=undefined;return;}_0xe3c969(_0x1a537f['getTileCredits'])&&(_0x1b9484['credits']=_0x1a537f['getTileCredits'](_0x1b9484['x'],_0x1b9484['y'],_0x1b9484['level'])),!_0xe3c969(_0x2009a0['then'])&&(_0x2009a0=Promise['resolve'](_0x2009a0)),_0x2009a0['then'](_0x575ed5,_0x10878a);}_0x35eb28(!![]);}Cesium['ImageryLayer']['prototype']['hookRequestImageryFunc']=Cesium['ImageryLayer']['prototype']['_requestImagery'],Cesium['ImageryLayer']['prototype']['_requestImagery']=function(_0x3e5405){_0x3e5405['imageryLayer']['imageryProvider']['isBlock']?_0x32f2a6(_0x3e5405,this):this['hookRequestImageryFunc'](_0x3e5405);};export default{};