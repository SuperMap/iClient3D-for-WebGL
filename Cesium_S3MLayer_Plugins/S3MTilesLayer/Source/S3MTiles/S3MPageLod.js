const _0x1ffccd=(function(){let _0x1bfc52=!![];return function(_0x4fd095,_0x3f0ecf){const _0x247462=_0x1bfc52?function(){if(_0x3f0ecf){const _0x2e77ab=_0x3f0ecf['apply'](_0x4fd095,arguments);return _0x3f0ecf=null,_0x2e77ab;}}:function(){};return _0x1bfc52=![],_0x247462;};}()),_0x40795e=_0x1ffccd(this,function(){return _0x40795e['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x40795e)['search']('(((.+)+)+)+$');});_0x40795e();import _0x3567be from'./Enum/RangeMode.js';import _0x929347 from'./S3MTile.js';function _0x7e4a6(){this['fileName']=undefined,this['rangeData']=undefined,this['rangeMode']=undefined,this['boundingVolume']=undefined,this['isLeafTile']=![],this['renderEntities']=[],this['childTile']=undefined,this['canRefine']=![],this['ready']=![];}_0x7e4a6['prototype']['update']=function(_0x4be8b2,_0x172598){const _0x45082f=_0x4be8b2['context'],_0xfad423=this['boundingVolume'],_0x51cd39=this['rangeMode'],_0x2b7c97=this['rangeData'],_0x21c703=_0x172598['lodRangeScale'],_0x4d30f8=_0xfad423['distanceToCamera'](_0x4be8b2);if(_0x51cd39===_0x3567be['Distance'])this['canRefine']=_0x4d30f8*_0x21c703<_0x2b7c97;else{if(_0x51cd39===_0x3567be['Pixel']){const _0x707226=_0xfad423['radius'],_0x158576=_0xfad423['center'],_0x2e771b=_0x4be8b2['context']['drawingBufferHeight'],_0x3f0701=_0x4be8b2['camera']['frustum']['_fovy']*0.5,_0x2c24a1=_0x2e771b*0.5,_0x53429c=_0x2c24a1/Math['tan'](_0x3f0701),_0x101840=_0x53429c*_0x707226/_0x4d30f8;this['canRefine']=_0x101840>_0x2b7c97*_0x21c703;}else{if(_0x51cd39===_0x3567be['GeometryError']){const _0x48da8=_0x45082f['uniformState']['pixelRatio'],_0x441eab=_0x45082f['drawingBufferHeight'],_0x3b8f95=_0x2b7c97,_0x18080b=_0x3b8f95*_0x441eab/(_0x4d30f8*_0x4be8b2['camera']['frustum']['sseDenominator'])/_0x48da8;this['canRefine']=_0x18080b>0x10*_0x21c703;}}}},_0x7e4a6['prototype']['createChildTile']=function(_0x35864c,_0x337fb7){const _0x342bee=this['boundingVolume'],_0x3540fb=new _0x929347(_0x35864c,_0x337fb7,_0x342bee,this['fileName']);this['childTile']=_0x3540fb;},_0x7e4a6['prototype']['isDestroyed']=function(){return![];},_0x7e4a6['prototype']['destroy']=function(){for(let _0x334506=0x0,_0x4713af=this['renderEntities']['length'];_0x334506<_0x4713af;_0x334506++){const _0x76b002=this['renderEntities'][_0x334506];_0x76b002['destroy']();}return this['renderEntities']['length']=0x0,this['childTile']=undefined,Cesium['destroyObject'](this);};export default _0x7e4a6;