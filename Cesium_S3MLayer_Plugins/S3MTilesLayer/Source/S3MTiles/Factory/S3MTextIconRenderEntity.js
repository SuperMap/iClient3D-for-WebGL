var _0x459b23=(function(){var _0x36ab6b=!![];return function(_0x135f29,_0x27779f){var _0x5cb1fd=_0x36ab6b?function(){if(_0x27779f){var _0x1abe8e=_0x27779f['apply'](_0x135f29,arguments);return _0x27779f=null,_0x1abe8e;}}:function(){};return _0x36ab6b=![],_0x5cb1fd;};}()),_0x69627d=_0x459b23(this,function(){return _0x69627d['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x69627d)['search']('(((.+)+)+)+$');});_0x69627d();import _0x8243ea from'../Shaders/BillboardPixelSizeWithAngleVp.js';import _0x17e4b8 from'../Shaders/S3MTilesBillboardPixelSizeVp.js';import _0x520ae6 from'../Shaders/S3MTilesFontWithHaloFp.js';import _0x1250a4 from'../Shaders/S3MTilesCommonOntTextureFP.js';import _0x3147c1 from'../Enum/BillboardMode.js';import _0x494113 from'./RenderEntity.js';import _0x5437c2 from'../getComUniformMap.js';import _0x477fd8 from'../TextOverlapInfo.js';const _0x42d4d4=Cesium['defined'],_0x57470d=Cesium['defaultValue'],_0x5807ed=Cesium['ComponentDatatype'],_0x40b138=Cesium['BatchTable'],_0x4951d6=Cesium['Cartesian3'],_0x1b5fe8=Cesium['Matrix4'],_0x228661=Cesium['Matrix3'],_0x53ddf8=Cesium['Color'];function _0x461dcf(_0x302ac2){_0x494113['call'](this,_0x302ac2),this['_selectionInforMap']=undefined,this['_pickInfo']=_0x57470d(_0x302ac2['pickInfo'],{}),this['_ids']=Object['keys'](this['_pickInfo']);let _0x3553e3=_0x302ac2['layer'],_0xd3aefa=_0x3553e3['style3D'];_0xd3aefa['billboardMode']===_0x3147c1['FixedXYZ']?this['vs']=_0x8243ea:this['vs']=_0x17e4b8,_0x302ac2['material']['textures']['length']>0x1?this['fs']=_0x520ae6:this['fs']=_0x1250a4;}_0x461dcf['prototype']=Object['create'](_0x494113['prototype']),_0x461dcf['prototype']['constructor']=_0x494113;function _0x3a0864(){return Cesium['RenderState']['fromCache']({'cull':{'enabled':![]},'depthTest':{'enabled':!![],'func':Cesium['DepthFunction']['LESS_OR_EQUAL']},'blending':Cesium['BlendingState']['ALPHA_BLEND']});}function _0x47a1a4(_0x5c1eec,_0x182b0e,_0x849bc8){let _0x4cca56={'uDiffuseColor':function(){return _0x5c1eec['diffuseColor'];},'uSelColor':function(){return _0x182b0e['selectedColor'];},'uTexture':function(){return _0x5c1eec['textures'][0x0];},'uAmbientColor':function(){return _0x5c1eec['ambientColor'];}};return Object['assign'](_0x4cca56,_0x5437c2(_0x182b0e)),_0x4cca56['uSecTexture']=function(){var _0x554c7=_0x5c1eec['textures'][0x1];return _0x554c7;},_0x4cca56;}_0x461dcf['prototype']['createCommand']=function(){if(Cesium['defined'](this['colorCommand'])||this['vertexBufferToCreate']['length']!==0x0||this['indexBufferToCreate']['length']!==0x0||this['shaderProgramToCreate']['length']!==0x0)return;let _0xf8291f=this['layer'],_0x53913f=_0xf8291f['context'],_0x1dce6f=this['vertexPackage'],_0x2387f0=this['arrIndexPackage'],_0x9bb217=_0x1dce6f['vertexAttributes'];if(_0x2387f0['length']<0x1)return;let _0x197ce5=_0x2387f0[0x0],_0x184399=this['material'];this['vertexArray']=new Cesium['VertexArray']({'context':_0x53913f,'attributes':_0x9bb217,'indexBuffer':_0x197ce5['indexBuffer']}),this['colorCommand']=new Cesium['DrawCommand']({'primitiveType':_0x197ce5['primitiveType'],'modelMatrix':this['modelMatrix'],'boundingVolume':this['boundingVolume'],'vertexArray':this['vertexArray'],'shaderProgram':this['shaderProgram'],'pass':_0x184399['bTransparentSorting']?Cesium['Pass']['OVERLAY']:Cesium['Pass']['TRANSLUCENT'],'renderState':_0x3a0864(),'instanceCount':_0x1dce6f['instanceCount']});let _0x466801=_0x47a1a4(_0x184399,_0xf8291f,this);_0x42d4d4(this['batchTable'])&&(_0x466801=this['batchTable']['getUniformMapCallback']()(_0x466801)),this['colorCommand']['uniformMap']=_0x466801,this['vs']=undefined,this['fs']=undefined,this['ready']=!![];},_0x461dcf['prototype']['createSelectionMap']=function(){var _0x2c8460=this['_pickInfo'];if(!_0x42d4d4(_0x2c8460))return;this['_selectionInforMap']=new Cesium['AssociativeArray']();for(var _0x2fac01 in _0x2c8460){if(!_0x2c8460['hasOwnProperty'](_0x2fac01))continue;this['_selectionInforMap']['set'](_0x2fac01,_0x2c8460[_0x2fac01]);}};var _0x37416a=new Cesium['Cartesian4']();function _0x170993(_0x48ab5c,_0x1146b0,_0x4a7a4a){var _0xcfdec0=_0x1146b0['batchTable'],_0x537bb4=_0x1146b0['_selectionInforMap'],_0x472ada=_0x1146b0['_selectionInforMap']['_hash'];for(var _0x126626 in _0x472ada){if(_0x472ada['hasOwnProperty'](_0x126626)){var _0x52180c=_0x537bb4['get'](_0x126626);if(_0x1146b0['_isInstanceModel']){var _0x3e919b=_0x52180c['instanceIds'],_0xce6c66=_0x3e919b[0x0],_0x53d076=Object['keys'](_0x52180c['skeletonIds'])['length'];for(var _0x36def1 in _0x52180c['skeletonIds']){if(_0x52180c['skeletonIds']['hasOwnProperty'](_0x36def1)){var _0x347040=_0xce6c66*_0x53d076+Number(_0x36def1),_0x3622f1=_0x48ab5c['createPickId']({'primitive':_0x4a7a4a,'id':_0x126626,'skeletonId':Number(_0x36def1)}),_0x17402b=_0x3622f1['color'];_0x37416a['x']=_0x53ddf8['floatToByte'](_0x17402b['red']),_0x37416a['y']=_0x53ddf8['floatToByte'](_0x17402b['green']),_0x37416a['z']=_0x53ddf8['floatToByte'](_0x17402b['blue']),_0x37416a['w']=_0x53ddf8['floatToByte'](_0x17402b['alpha']),_0xcfdec0['setBatchedAttribute'](_0x347040,0x2,_0x37416a);}}}else{var _0x3622f1=_0x4a7a4a['_pickObjs'][_0x126626];!_0x42d4d4(_0x3622f1)&&(_0x3622f1=_0x48ab5c['createPickId']({'primitive':_0x4a7a4a,'id':_0x126626}),_0x4a7a4a['_pickObjs'][_0x126626]=_0x3622f1);var _0x17402b=_0x3622f1['color'];_0x37416a['x']=_0x53ddf8['floatToByte'](_0x17402b['red']),_0x37416a['y']=_0x53ddf8['floatToByte'](_0x17402b['green']),_0x37416a['z']=_0x53ddf8['floatToByte'](_0x17402b['blue']),_0x37416a['w']=_0x53ddf8['floatToByte'](_0x17402b['alpha']);if(_0x1146b0['_instanceCount']>0x0){var _0x3e919b=_0x52180c['instanceIds'];_0x3e919b['map'](function(_0x1b2c21){_0xcfdec0['setBatchedAttribute'](_0x1b2c21,0x2,_0x37416a);});}else{var _0x6ade1a=_0x52180c['batchId'];_0xcfdec0['setBatchedAttribute'](_0x6ade1a,0x2,_0x37416a);}}}}}_0x461dcf['prototype']['initialize']=function(_0x3b840e){if(this['_initialize'])return;!_0x3b840e['_allTextOverlap']&&(_0x3b840e['_allTextOverlap']=[]);this['createSelectionMap']();(this['layer']['fileType']==='TextCache'||this['layer']['fileType']==='IconPointCache')&&this['createBillboardsBounds'](this['layer']);if(!_0x42d4d4(this['batchTable'])&&Object['keys'](this['_pickInfo'])['length']>0x0){var _0x4cb050=this['layer'],_0xa0dee4=_0x4cb050['context'];this['createBatchTable'](_0xa0dee4,this,_0x4cb050),_0x170993(_0xa0dee4,this,_0x4cb050);}this['_initialize']=!![];},_0x461dcf['prototype']['transformResource']=function(_0x32340b,_0x576b3f){if(this['ready'])return;this['initialize'](_0x32340b),this['createPickIds'](),this['createBuffers'](_0x32340b),this['createShaderProgram'](_0x32340b),this['createCommand'](_0x32340b),this['initLayerSetting'](_0x576b3f);},_0x461dcf['prototype']['update']=function(_0x198fb9,_0x19971){this['batchTableDirty']&&(this['updateBatchTableAttributes'](),this['batchTableDirty']=![]),this['batchTable']&&this['batchTable']['update'](_0x198fb9),(this['layer']['fileType']==='TextCache'||this['layer']['fileType']==='IconPointCache')&&this['updateBillboardsBounds'](_0x19971,_0x198fb9),_0x198fb9['commandList']['push'](this['colorCommand']);},_0x461dcf['prototype']['createBillboardsBounds']=function(_0x5d616a){this['_arrtextOverlapInfo']=[];var _0x27c098=this['modelMatrix'],_0x357f96=this['_selectionInforMap']['values'],_0x2dd197=this['vertexPackage']['vertexAttributes'][0x0]['typedArray'],_0x39b8a1=this['vertexPackage']['vertexAttributes'][0x0]['componentsPerAttribute']||0x3;if(!_0x42d4d4(_0x2dd197)||!_0x42d4d4(_0x2dd197['buffer'])){console['log']('createBillboardsBounds');return;}var _0x32fd81=new Float32Array(_0x2dd197['buffer'],_0x2dd197['byteOffset'],_0x2dd197['byteLength']/0x4),_0x256682,_0x123d59;this['layer']['fileType']==='TextCache'?(_0x256682=this['vertexPackage']['vertexAttributes'][0x1]['typedArray'],_0x123d59=new Float32Array(_0x256682['buffer'],_0x256682['byteOffset'],_0x256682['byteLength']/0x4)):(_0x256682=this['vertexPackage']['vertexAttributes'][0x3]['typedArray'],_0x123d59=new Float32Array(_0x256682['buffer'],_0x256682['byteOffset'],_0x256682['byteLength']/0x4));var _0x3eed5c=new _0x4951d6(),_0x37d89b=[];for(var _0xaee38a=0x0;_0xaee38a<this['vertexPackage']['verticesCount'];_0xaee38a++){_0x4951d6['fromArray'](_0x123d59,0x3*_0xaee38a,_0x3eed5c),_0x37d89b['push'](_0x4951d6['clone'](_0x3eed5c));}var _0x501d80,_0x6d7f11,_0x342a0d,_0x58d11a=_0x42d4d4(_0x5d616a['_overlapWeightAttributeName']),_0x2d09dc=_0x42d4d4(_0x5d616a['_heightRangeAttributeName']);for(var _0x464bda=0x0,_0x4b31b7=_0x357f96['length'];_0x464bda<_0x4b31b7;_0x464bda++){var _0x10b0bc=new _0x477fd8(this['_ids'][_0x464bda],_0x5d616a);_0x501d80=_0x357f96[_0x464bda],_0x6d7f11=_0x501d80['vertexColorOffset'],_0x342a0d=_0x57470d(_0x501d80['vertexCount'],_0x501d80['vertexColorCount']);var _0x487aa2=Number['MAX_VALUE'],_0x222bf5=Number['MIN_VALUE'],_0x50b3b2=Number['MAX_VALUE'],_0x5a12f2=Number['MIN_VALUE'];for(var _0x1633bf=_0x6d7f11;_0x1633bf<_0x6d7f11+_0x342a0d;_0x1633bf++){var _0x5e026e=_0x37d89b[_0x1633bf];_0x487aa2=Math['min'](_0x5e026e['x'],_0x487aa2),_0x222bf5=Math['max'](_0x5e026e['x'],_0x222bf5),_0x50b3b2=Math['min'](_0x5e026e['y'],_0x50b3b2),_0x5a12f2=Math['max'](_0x5e026e['y'],_0x5a12f2);}_0x10b0bc['pixelWidth']=_0x222bf5-_0x487aa2,_0x10b0bc['pixelHeight']=_0x5a12f2-_0x50b3b2,_0x10b0bc['centerPixelOffset']=(_0x222bf5+_0x487aa2)*0.5;var _0xf6de08=new _0x4951d6(_0x32fd81[_0x6d7f11*_0x39b8a1],_0x32fd81[_0x6d7f11*_0x39b8a1+0x1],_0x32fd81[_0x6d7f11*_0x39b8a1+0x2]);_0x1b5fe8['multiplyByPoint'](_0x27c098,_0xf6de08,_0xf6de08),_0x10b0bc['absolutePosition']=_0xf6de08,_0x10b0bc['worldPosLeftBottom']=_0xf6de08,this['_arrtextOverlapInfo']['push'](_0x10b0bc);}},_0x461dcf['prototype']['updateBillboardsBounds']=function(_0x2db41d,_0x1f62bf){if(_0x2db41d['isOverlapDisplayed'])return;var _0x7eb0c=_0x1f62bf['context']['uniformState'],_0x664bb4=this['_arrtextOverlapInfo'],_0x454cbc=_0x1f62bf['camera']['_positionCartographic']['height'],_0x2e00ce=_0x1f62bf['camera']['positionWC'],_0x98e049=_0x7eb0c['viewProjection'],_0x12643e=_0x7eb0c['viewportTransformation'],_0xf2da8b=_0x7eb0c['viewport']['width'],_0x34547d=_0x7eb0c['viewport']['height'];for(var _0x295cac=0x0,_0x4cfef5=_0x664bb4['length'];_0x295cac<_0x4cfef5;_0x295cac++){var _0x1ad08f=_0x664bb4[_0x295cac];if(!_0x1ad08f['isInHeightRange'](_0x454cbc)){_0x1ad08f['visible']=![];continue;}if(!_0x1ad08f['isInVisibleRange'](_0x2e00ce)){_0x1ad08f['visible']=![];continue;}_0x1ad08f['calcWindowCoordRect'](_0x98e049,_0x12643e);if(!_0x1ad08f['isInViewport'](_0xf2da8b,_0x34547d)){_0x1ad08f['visible']=![];continue;}_0x1f62bf['_allTextOverlap']['push'](_0x1ad08f);}},_0x461dcf['prototype']['_getLabelWeightOrHeight']=function(_0xd128a0,_0x4fd9ff,_0x45c506,_0x3570fb){var _0x3d33e5=this;_0x4fd9ff['then'](_0xacb3f3=>{if(!_0x42d4d4(_0xacb3f3))return;_0x45c506&&(_0xd128a0['weight']=_0x57470d(_0xacb3f3[_0x45c506],0x3e8),_0xd128a0['heigtRangeMax']=-0x1);if(_0x3570fb){var _0x5315e4=parseInt(_0xacb3f3[_0x3570fb]['split'](',')[0x0]);_0xd128a0['heigtRangeMax']=_0x57470d(_0x5315e4,-0x1);}});},_0x461dcf['prototype']['isDestroyed']=function(){return![];},_0x461dcf['prototype']['destroy']=function(){return this['shaderProgram']=this['shaderProgram']&&!this['shaderProgram']['isDestroyed']()&&this['shaderProgram']['destroy'](),this['vertexArray']=this['vertexArray']&&!this['vertexArray']['isDestroyed']()&&this['vertexArray']['destroy'](),this['material']=this['material']&&!this['material']['isDestroyed']()&&this['material']['destroy'](),this['colorCommand']=undefined,this['vertexPackage']=null,this['arrIndexPackage']=null,this['modelMatrix']=undefined,this['pickInfo']=undefined,this['selectionInfoMap']=undefined,this['vs']=undefined,this['fs']=undefined,this['_arrtextOverlapInfo']=undefined,Cesium['destroyObject'](this);};export default _0x461dcf;