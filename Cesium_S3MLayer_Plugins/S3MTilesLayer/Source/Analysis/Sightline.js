const _0x230e85=(function(){let _0x495764=!![];return function(_0x2731b2,_0x4bfb8b){const _0x559c73=_0x495764?function(){if(_0x4bfb8b){const _0x1b8b6e=_0x4bfb8b['apply'](_0x2731b2,arguments);return _0x4bfb8b=null,_0x1b8b6e;}}:function(){};return _0x495764=![],_0x559c73;};}()),_0x1f2236=_0x230e85(this,function(){return _0x1f2236['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x1f2236)['search']('(((.+)+)+)+$');});_0x1f2236();import _0x3e8f76 from'./DepthFramebuffer.js';import _0x16a8cf from'./Shaders/SightWideLineVS.js';import _0x3087bf from'./Shaders/SightWideLineFS.js';function _0x2bf67a(_0x1144b4){this['scene']=_0x1144b4,this['_command']=undefined,this['_viewPosition']=[0x0,0x0,0x0],this['_cameraDir']=new Cesium['Cartesian3'](),this['_viewProjMatrixs']=new Cesium['AssociativeArray'](),this['_renderTextureMatrixs']=new Cesium['AssociativeArray'](),this['_visibleColor']=new Cesium['Color'](0x0,0x1,0x0,0x1),this['_hiddenColor']=new Cesium['Color'](0x1,0x0,0x0,0x1),this['_targetPoints']=new Cesium['AssociativeArray'](),this['_sightlineCameras']=new Cesium['AssociativeArray'](),this['_update']=![],this['_updateAll']=![],this['_barrierPointArray']=new Cesium['AssociativeArray'](),this['_depthBuffers']=new Cesium['AssociativeArray'](),this['_commands']=new Cesium['AssociativeArray'](),this['_lineWidth']=0x2,this['isBuild']=![];}Object['defineProperties'](_0x2bf67a['prototype'],{'viewPosition':{'get':function(){return this['_viewPosition'];},'set':function(_0x3d53e5){this['_viewPosition']=_0x3d53e5,this['_updateAll']=!![],this['_update']=!![];}},'visibleColor':{'get':function(){return this['_visibleColor'];},'set':function(_0x3bc954){if(_0x3bc954===undefined)return;this['_visibleColor']=Cesium['Color']['clone'](_0x3bc954,this['_visibleColor']);}},'hiddenColor':{'get':function(){return this['_hiddenColor'];},'set':function(_0x6971de){if(_0x6971de===undefined)return;this['_hiddenColor']=Cesium['Color']['clone'](_0x6971de,this['_hiddenColor']);}},'lineWidth':{'get':function(){return this['_lineWidth'];},'set':function(_0x31c03f){if(_0x31c03f===undefined)return;this['_lineWidth']=_0x31c03f;}}}),_0x2bf67a['prototype']['addTargetPoint']=function(_0x14ca0e){const _0x2dd25f=_0x14ca0e['name'],_0x14760d=_0x14ca0e['position'];if(!Cesium['defined'](_0x2dd25f)||!Cesium['defined'](_0x14760d))return![];return this['_targetPoints']['set'](_0x2dd25f,_0x14760d),this['_currentTargetName']=_0x2dd25f,this['_currentTargetPoint']=_0x14760d,this['_update']=!![],this['_barrierPointArray']['set'](_0x2dd25f,{}),!![];},_0x2bf67a['prototype']['removeTargetPoint']=function(_0x51413f){this['_barrierPointArray']['remove'](_0x51413f);const _0x29216a=this['_targetPoints']['remove'](_0x51413f);this['_sightlineCameras']['remove'](_0x51413f);if(!_0x29216a)return![];this['_viewProjMatrixs']['remove'](_0x51413f),this['_renderTextureMatrixs']['remove'](_0x51413f);const _0x3b925b=this['_depthBuffers']['get'](_0x51413f);Cesium['defined'](_0x3b925b)&&(_0x3b925b['destroy'](),this['_depthBuffers']['remove'](_0x51413f));const _0x239638=this['_commands']['get'](_0x51413f);if(Cesium['defined'](_0x239638)){for(let _0x4f1ff9=0x0;_0x4f1ff9<_0x239638['length'];_0x4f1ff9++){const _0x5c4e19=_0x239638[_0x4f1ff9];_0x5c4e19['shaderProgram']=_0x5c4e19['shaderProgram']&&!_0x5c4e19['shaderProgram']['isDestroyed']()&&_0x5c4e19['shaderProgram']['destroy'](),_0x5c4e19['vertexArray']=_0x5c4e19['vertexArray']&&!_0x5c4e19['vertexArray']['isDestroyed']()&&_0x5c4e19['vertexArray']['destroy']();}this['_commands']['remove'](_0x51413f);}return this['_update']=!![],!![];},_0x2bf67a['prototype']['removeAllTargetPoint']=function(){this['_barrierPointArray']['removeAll'](),this['_targetPoints']['removeAll'](),this['_sightlineCameras']['removeAll']();for(let _0xd417f5 in this['_depthBuffers']['_hash']){this['_depthBuffers']['_hash']['hasOwnProperty'](_0xd417f5)&&this['_depthBuffers']['_hash'][_0xd417f5]['destroy']();}this['_depthBuffers']['removeAll']();for(let _0x421467=0x0,_0x2a0c40=this['_commands']['length'];_0x421467<_0x2a0c40;_0x421467++){const _0x5ce686=this['_commands']['values'][_0x421467];for(let _0x528e2c=0x0;_0x528e2c<_0x5ce686['length'];_0x528e2c++){const _0x4b0172=_0x5ce686[_0x528e2c];_0x4b0172['shaderProgram']=_0x4b0172['shaderProgram']&&!_0x4b0172['shaderProgram']['isDestroyed']()&&_0x4b0172['shaderProgram']['destroy'](),_0x4b0172['vertexArray']=_0x4b0172['vertexArray']&&!_0x4b0172['vertexArray']['isDestroyed']()&&_0x4b0172['vertexArray']['destroy']();}}this['_commands']['removeAll'](),this['_viewProjMatrixs']['removeAll'](),this['_renderTextureMatrixs']['removeAll'](),this['_update']=!![];};function _0x3837fa(_0x5d1ad9,_0x204526,_0x38d37d){const _0x16b391=_0x38d37d['camera'],_0x3b7369=_0x16b391['_projection'];let _0x113827;if(_0x5d1ad9['scene']['mode']===Cesium['SceneMode']['SCENE3D'])_0x113827=Cesium['Cartesian3']['fromDegreesArrayHeights'](_0x5d1ad9['_viewPosition'])[0x0];else{const _0x518db3=Cesium['Cartographic']['fromDegrees'](_0x5d1ad9['_viewPosition'][0x0],_0x5d1ad9['_viewPosition'][0x1],_0x5d1ad9['_viewPosition'][0x2]);_0x113827=_0x3b7369['project'](_0x518db3,new Cesium['Cartesian3']());}const _0x4a136e=new Cesium['Cartesian3'](0x0,0x0,0x0),_0x4fabf7=_0x5d1ad9['_targetPoints']['_hash'];let _0x5e5a51=0x0;const _0x5bae5e=_0x5d1ad9['_currentTargetPoint'];let _0xf2f7ea;if(_0x5d1ad9['scene']['mode']===Cesium['SceneMode']['SCENE3D'])_0xf2f7ea=Cesium['Cartesian3']['fromDegreesArrayHeights'](_0x5bae5e)[0x0];else{const _0x279178=Cesium['Cartographic']['fromDegrees'](_0x5bae5e[0x0],_0x5bae5e[0x1],_0x5bae5e[0x2]);_0xf2f7ea=_0x3b7369['project'](_0x279178,new Cesium['Cartesian3']());}const _0x2ff0dd=new Cesium['Cartesian3']();Cesium['Cartesian3']['subtract'](_0xf2f7ea,_0x113827,_0x2ff0dd),Cesium['Cartesian3']['normalize'](_0x2ff0dd,_0x2ff0dd),Cesium['Cartesian3']['add'](_0x4a136e,_0x2ff0dd,_0x4a136e),_0x5e5a51=Math['max'](_0x5e5a51,Cesium['Cartesian3']['distance'](_0xf2f7ea,_0x113827)),Cesium['Cartesian3']['normalize'](_0x4a136e,_0x4a136e),Cesium['Cartesian3']['clone'](_0x4a136e,_0x5d1ad9['_cameraDir']);const _0x29839b=new Cesium['Cartesian3'](),_0x21b612=new Cesium['Cartesian3'](),_0xa92aa2=new Cesium['Cartesian3']();let _0xdf4f5=_0x16b391['frustum']['fov'];Cesium['Cartesian3']['clone'](_0x16b391['position'],_0x29839b),Cesium['Cartesian3']['clone'](_0x16b391['direction'],_0x21b612),Cesium['Cartesian3']['clone'](_0x16b391['up'],_0xa92aa2);const _0xf5e04=Cesium['Math']['PI']*0x2/0x3,_0x4e7f77=_0x16b391['frustum']['near'],_0x5141f3=_0x16b391['frustum']['far'],_0x1f7782=_0x38d37d['useLogDepth'],_0xfcb37b=_0x5d1ad9['_currentTargetName'];let _0x1c54ac=_0x5d1ad9['_depthBuffers']['get'](_0xfcb37b);!Cesium['defined'](_0x1c54ac)&&(_0x1c54ac=new _0x3e8f76(_0x204526),_0x5d1ad9['_depthBuffers']['set'](_0xfcb37b,_0x1c54ac)),_0x1c54ac['isUpdate']=!![],_0x1c54ac['beginFunc']=()=>{_0x38d37d['useLogDepth']=![],Cesium['Cartesian3']['clone'](_0x16b391['position'],_0x29839b),Cesium['Cartesian3']['clone'](_0x16b391['direction'],_0x21b612),Cesium['Cartesian3']['clone'](_0x16b391['up'],_0xa92aa2),_0xdf4f5=_0x16b391['frustum']['fov'],_0x16b391['frustum']['fov']=_0xf5e04;const _0x5c5496=_0x4a136e;let _0x259230=new Cesium['Cartesian3']();_0x259230=Cesium['Cartesian3']['clone'](_0x113827,_0x259230),_0x259230=Cesium['Cartesian3']['normalize'](_0x259230,_0x259230);Math['abs'](Cesium['Cartesian3']['dot'](_0x259230,_0x5c5496))>=0x1&&(Math['abs'](Cesium['Cartesian3']['dot'](_0x5c5496,Cesium['Cartesian3']['UNIT_Y']))<0x1?_0x259230=Cesium['Cartesian3']['clone'](Cartesian3['UNIT_Y'],_0x259230):_0x259230=Cesium['Cartesian3']['clone'](Cesium['Cartesian3']['UNIT_Z'],_0x259230));let _0x2e768c=new Cesium['Cartesian3']();Cesium['Cartesian3']['cross'](_0x259230,_0x5c5496,_0x2e768c),_0x2e768c=Cesium['Cartesian3']['normalize'](_0x2e768c,_0x2e768c),Cesium['Cartesian3']['cross'](_0x5c5496,_0x2e768c,_0x259230),_0x259230=Cesium['Cartesian3']['normalize'](_0x259230,_0x259230);const _0x25e65f={'destination':_0x113827,'orientation':{'direction':_0x5c5496,'up':_0x259230},'convert':![]};_0x16b391['setView'](_0x25e65f),_0x5d1ad9['_sightlineCameras']['set'](_0xfcb37b,_0x25e65f),_0x16b391['frustum']['near']=0x1,_0x16b391['frustum']['far']=Math['ceil'](Math['max'](_0x5e5a51,0xa));const _0x1eaa1f=_0x5d1ad9['scene']['_primitives']['_primitives'];for(let _0x526b43=0x0;_0x526b43<_0x1eaa1f['length'];++_0x526b43){const _0x4c1931=_0x1eaa1f[_0x526b43];!Cesium['defined'](_0x4c1931['fileType'])&&(_0x4c1931['preShow']=_0x4c1931['show'],_0x4c1931['show']=![]);}const _0x556fbb=new Cesium['Matrix4']();Cesium['Matrix4']['multiply'](_0x16b391['frustum']['projectionMatrix'],_0x16b391['viewMatrix'],_0x556fbb),_0x5d1ad9['_viewProjMatrixs']['set'](_0xfcb37b,_0x556fbb),_0x5d1ad9['_renderTextureMatrixs']['set'](_0xfcb37b,new Cesium['Matrix4']());},_0x1c54ac['endFunc']=function(){_0x38d37d['useLogDepth']=_0x1f7782,_0x16b391['frustum']['fov']=_0xdf4f5,_0x16b391['setView']({'destination':_0x29839b,'orientation':{'direction':_0x21b612,'up':_0xa92aa2},'convert':![]}),_0x16b391['frustum']['near']=_0x4e7f77,_0x16b391['frustum']['far']=_0x5141f3,_0x1c54ac['isUpdate']=![];const _0x305299=_0x5d1ad9['scene']['_primitives']['_primitives'];for(let _0x239fb6=0x0;_0x239fb6<_0x305299['length'];++_0x239fb6){const _0x556e08=_0x305299[_0x239fb6];!Cesium['defined'](_0x556e08['fileType'])&&(_0x556e08['show']=_0x556e08['preShow']);}if(!_0x5d1ad9['_update']){const _0x390258=_0x4363c4(_0x5d1ad9,_0xfcb37b);_0x5d1ad9['_barrierPointArray']['set'](_0xfcb37b,_0x390258);}};}const _0x35561d=new Cesium['Matrix4'](0x0,0x0,0x1,0x0,0x1,0x0,0x0,0x0,0x0,0x1,0x0,0x0,0x0,0x0,0x0,0x1);let _0x41272c=null;function _0x2815a4(_0x5e56c4){if(Cesium['defined'](_0x41272c))return _0x41272c;const _0x3ad59e=new Float32Array(0x8);let _0xa404d9=0x0;return _0x3ad59e[_0xa404d9++]=0x0,_0x3ad59e[_0xa404d9++]=0x0,_0x3ad59e[_0xa404d9++]=0x0,_0x3ad59e[_0xa404d9++]=0x1,_0x3ad59e[_0xa404d9++]=0x1,_0x3ad59e[_0xa404d9++]=0x1,_0x3ad59e[_0xa404d9++]=0x1,_0x3ad59e[_0xa404d9++]=0x0,_0x41272c=Cesium['Buffer']['createVertexBuffer']({'context':_0x5e56c4,'typedArray':_0x3ad59e,'usage':Cesium['BufferUsage']['STATIC_DRAW']}),_0x41272c['vertexArrayDestroyable']=![],_0x41272c;}function _0x5d70f8(_0x2d447d,_0x1ee510){const _0xf42ba8=Cesium['ComponentDatatype']['createTypedArray'](Cesium['ComponentDatatype']['FLOAT'],0x2*0x3);return _0xf42ba8[0x0]=0x0,_0xf42ba8[0x1]=0x0,_0xf42ba8[0x2]=0x0,_0xf42ba8[0x3]=_0x1ee510['x'],_0xf42ba8[0x4]=_0x1ee510['y'],_0xf42ba8[0x5]=_0x1ee510['z'],Cesium['Buffer']['createVertexBuffer']({'context':_0x2d447d,'typedArray':_0xf42ba8,'usage':Cesium['BufferUsage']['STATIC_DRAW']});}function _0x45f2ec(){const _0x375112=new Uint16Array(0x6);let _0x4c9677=0x0;return _0x375112[_0x4c9677++]=0x2,_0x375112[_0x4c9677++]=0x1,_0x375112[_0x4c9677++]=0x0,_0x375112[_0x4c9677++]=0x3,_0x375112[_0x4c9677++]=0x2,_0x375112[_0x4c9677++]=0x0,_0x375112;}let _0x1a5b93=null;function _0x5d77ac(_0x328c2f){if(Cesium['defined'](_0x1a5b93))return _0x1a5b93;return _0x1a5b93=Cesium['Buffer']['createIndexBuffer']({'context':_0x328c2f,'typedArray':_0x45f2ec(),'usage':Cesium['BufferUsage']['STATIC_DRAW'],'indexDatatype':Cesium['IndexDatatype']['UNSIGNED_SHORT']}),_0x1a5b93['vertexArrayDestroyable']=![],_0x1a5b93;}let _0x506aff=new Cesium['Color'](),_0x1552ff=new Cesium['Color']();function _0x15383c(_0x7d1e2c,_0x585f9a,_0x451790){const _0x49f11f=_0x451790['camera'],_0x2b50b7=_0x49f11f['_projection'];let _0x2555cb;if(_0x7d1e2c['scene']['mode']===Cesium['SceneMode']['SCENE3D'])_0x2555cb=Cesium['Cartesian3']['fromDegreesArrayHeights'](_0x7d1e2c['_viewPosition'])[0x0];else{const _0x254a94=Cesium['Cartographic']['fromDegrees'](_0x7d1e2c['_viewPosition'][0x0],_0x7d1e2c['_viewPosition'][0x1],_0x7d1e2c['_viewPosition'][0x2]);_0x2555cb=_0x2b50b7['project'](_0x254a94,new Cesium['Cartesian3']());}const _0x20dddb=_0x7d1e2c['_currentTargetPoint'];let _0x1d6d00;if(_0x7d1e2c['scene']['mode']===Cesium['SceneMode']['SCENE3D'])_0x1d6d00=Cesium['Cartesian3']['fromDegreesArrayHeights'](_0x20dddb)[0x0];else{let _0x50c3cc=Cesium['Cartographic']['fromDegrees'](_0x20dddb[0x0],_0x20dddb[0x1],_0x20dddb[0x2]);_0x1d6d00=_0x2b50b7['project'](_0x50c3cc,new Cesium['Cartesian3']());}const _0xadf5b6=new Cesium['Cartesian3']();Cesium['Cartesian3']['subtract'](_0x1d6d00,_0x2555cb,_0xadf5b6);const _0x2153e8=_0x2815a4(_0x585f9a),_0x4370ca=_0x5d70f8(_0x585f9a,_0xadf5b6),_0x1580fb=[],_0xf4260d={};_0xf4260d['aSideness']=0x0,_0x1580fb['push']({'index':_0xf4260d['aSideness'],'vertexBuffer':_0x2153e8,'componentsPerAttribute':0x2,'componentDatatype':Cesium['ComponentDatatype']['FLOAT'],'offsetInBytes':0x0,'strideInBytes':0x2*0x4,'normalize':![]}),_0xf4260d['aPosition0']=0x1,_0x1580fb['push']({'index':_0xf4260d['aPosition0'],'vertexBuffer':_0x4370ca,'componentsPerAttribute':0x3,'componentDatatype':Cesium['ComponentDatatype']['FLOAT'],'offsetInBytes':0x0,'strideInBytes':0x3*0x4,'normalize':![],'instanceDivisor':0x1}),_0xf4260d['aPosition1']=0x2,_0x1580fb['push']({'index':_0xf4260d['aPosition1'],'vertexBuffer':_0x4370ca,'componentsPerAttribute':0x3,'componentDatatype':Cesium['ComponentDatatype']['FLOAT'],'offsetInBytes':0x3*0x4,'strideInBytes':0x3*0x4,'normalize':![],'instanceDivisor':0x1});const _0x22984b=_0x5d77ac(_0x585f9a),_0x4ee33a=new Cesium['DrawCommand']({'primitiveType':Cesium['PrimitiveType']['TRIANGLES'],'pass':Cesium['Pass']['OPAQUE'],'owner':_0x7d1e2c,'boundingVolume':new Cesium['BoundingSphere'](_0x2555cb,0x2710),'cull':![]});let _0x931c23=new Cesium['Matrix4']();Cesium['Matrix4']['clone'](Cesium['Matrix4']['IDENTITY'],_0x931c23),Cesium['Matrix4']['setTranslation'](_0x931c23,_0x2555cb,_0x931c23);_0x7d1e2c['scene']['mode']!==Cesium['SceneMode']['SCENE3D']&&Cesium['Matrix4']['multiply'](_0x35561d,_0x931c23,_0x931c23);_0x4ee33a['modelMatrix']=_0x931c23,_0x4ee33a['vertexArray']=new Cesium['VertexArray']({'context':_0x585f9a,'attributes':_0x1580fb,'indexBuffer':_0x22984b}),_0x4ee33a['shaderProgram']=Cesium['ShaderProgram']['fromCache']({'context':_0x585f9a,'vertexShaderSource':_0x16a8cf,'fragmentShaderSource':_0x3087bf,'attributeLocations':_0xf4260d}),_0x4ee33a['renderState']=Cesium['RenderState']['fromCache']({'cull':{'enabled':![]},'depthTest':{'enabled':!![]}});const _0x10620a=_0x7d1e2c['_currentTargetName'];_0x4ee33a['uniformMap']={'uRenderTextureMatrix':function(){return _0x7d1e2c['_renderTextureMatrixs']['get'](_0x10620a);},'uTexture0':function(){return _0x7d1e2c['_depthBuffers']['get'](_0x10620a)['depthTexture'];},'uVisibleColor':function(){return _0x7d1e2c['_visibleColor'];},'uHiddenColor':function(){return _0x7d1e2c['_hiddenColor'];},'uLineWidth':function(){return _0x7d1e2c['_lineWidth'];}};const _0x5240f6=Cesium['DrawCommand']['shallowClone'](_0x4ee33a);_0x5240f6['pass']=Cesium['Pass']['OPAQUE'],_0x5240f6['renderState']=Cesium['RenderState']['fromCache']({'depthMask':![],'depthTest':{'enabled':![]},'blending':Cesium['BlendingState']['ALPHA_BLEND']}),_0x5240f6['uniformMap']['uHiddenColor']=function(){return Cesium['Color']['clone'](_0x7d1e2c['_hiddenColor'],_0x506aff),_0x506aff['alpha']=0.2,_0x506aff;},_0x5240f6['uniformMap']['uVisibleColor']=function(){return Cesium['Color']['clone'](_0x7d1e2c['_visibleColor'],_0x1552ff),_0x1552ff['alpha']=0.2,_0x1552ff;},_0x7d1e2c['_commands']['set'](_0x10620a,[_0x5240f6,_0x4ee33a]);}_0x2bf67a['prototype']['update']=function(_0x4b9bda){if(_0x4b9bda['fbo']||_0x4b9bda['passes']['pick']||_0x4b9bda['passes']['depth'])return;const _0x47dc8a=_0x4b9bda['camera'];for(let _0x5dff5f in this['_viewProjMatrixs']['_hash']){if(this['_viewProjMatrixs']['_hash']['hasOwnProperty'](_0x5dff5f)){const _0x1b61a1=this['_viewProjMatrixs']['get'](_0x5dff5f);Cesium['Matrix4']['multiply'](_0x1b61a1,_0x47dc8a['inverseViewMatrix'],this['_renderTextureMatrixs']['get'](_0x5dff5f));}}if(this['_update']){this['_update']=![];if(this['_targetPoints']['values']['length']<0x1)return;if(this['_updateAll']){this['_updateAll']=![];for(let _0x368d14 in this['_targetPoints']['_hash']){if(this['_targetPoints']['_hash']['hasOwnProperty'](_0x368d14)){const _0xae6132=this['_targetPoints']['get'](_0x368d14);this['_currentTargetPoint']=_0xae6132,this['_currentTargetName']=_0x368d14,_0x3837fa(this,this['scene']['context'],_0x4b9bda),_0x15383c(this,this['scene']['context'],_0x4b9bda);}}}else _0x3837fa(this,this['scene']['context'],_0x4b9bda),_0x15383c(this,this['scene']['context'],_0x4b9bda);}if(!_0x4b9bda['passes']['pick']){const _0x86b9c6=this['_commands']['length'];for(let _0x5c3213=0x0;_0x5c3213<_0x86b9c6;_0x5c3213++){if(Cesium['defined'](this['_depthBuffers']['values'][_0x5c3213]['framebuffer'])){const _0x2c8710=this['_commands']['values'][_0x5c3213];_0x4b9bda['commandList']['push'](_0x2c8710[0x0]),_0x4b9bda['commandList']['push'](_0x2c8710[0x1]);}}}},_0x2bf67a['prototype']['getBarrierPoint']=function(_0x507546,_0x3c36d9){const _0x4414e2=this['_barrierPointArray']['get'](_0x507546);return defined(_0x3c36d9)&&_0x3c36d9['bind'](null,_0x4414e2)(),_0x4414e2;};function _0x4363c4(_0x3e4ad9,_0x98d09d){const _0x50cce4=_0x3e4ad9['_targetPoints']['get'](_0x98d09d);if(!Cesium['defined'](_0x50cce4))return;const _0x21551c={'isViewer':!![]},_0x4e1bb0=Cesium['Cartesian3']['fromDegreesArrayHeights'](_0x50cce4)[0x0],_0x1c4fba=new Cesium['Cartesian4'](_0x4e1bb0['x'],_0x4e1bb0['y'],_0x4e1bb0['z'],0x1),_0x20ac04=_0x3e4ad9['_viewProjMatrixs']['get'](_0x98d09d);Cesium['Matrix4']['multiplyByVector'](_0x20ac04,_0x1c4fba,_0x1c4fba),Cesium['Cartesian4']['divideByScalar'](_0x1c4fba,_0x1c4fba['w'],_0x1c4fba);if(_0x1c4fba['x']>0x1||_0x1c4fba['x']<-0x1||_0x1c4fba['y']>0x1||_0x1c4fba['y']<-0x1)return _0x21551c;const _0xb5ef8=_0x3e4ad9['scene']['context'],_0x14bf71=_0xb5ef8['drawingBufferWidth'],_0x1b700a=_0xb5ef8['drawingBufferHeight'],_0x3caec9=(_0x1c4fba['x']*0.5+0.5)*_0x14bf71-0.5,_0x4a8787=(_0x1c4fba['y']*0.5+0.5)*_0x1b700a-0.5;if(_0x3caec9<0x0||_0x4a8787<0x0)return _0x21551c;const _0x2fa85b=Math['floor'](_0x3caec9),_0xc31c05=_0x3caec9-_0x2fa85b,_0xbcd602=Math['floor'](_0x4a8787),_0x513996=_0x4a8787-_0xbcd602,_0x1cafc7=_0x3e4ad9['_depthBuffers']['get'](_0x98d09d),_0x344780=_0xb5ef8['readPixels']({'framebuffer':_0x1cafc7['framebuffer'],'x':_0x2fa85b,'y':_0xbcd602,'width':0x2,'height':0x2}),_0x5a4894=new Cesium['Cartesian4'](),_0x590cc2=new Cesium['Cartesian3'](),_0xa8e3d8=new Cesium['Cartesian4'](0x1/0xff,0x1/0xfe01,0x1/0x99246ff,0x1/0xfc05fc01),_0x5544eb=[],_0x3e1034=_0x3e4ad9['scene'],_0xc2dea3=_0xb5ef8['uniformState'],_0x1f192c=_0xc2dea3['currentFrustum'],_0x1e7b4e=_0x1f192c['x'],_0x330908=_0x1f192c['y'];for(let _0x3248de=0x0;_0x3248de<0x4;_0x3248de++){const _0x37b5f3=Cesium['Cartesian4']['unpack'](_0x344780,0x4*_0x3248de,_0x5a4894),_0x5d8f2f=Cesium['Cartesian4']['dot'](_0x37b5f3,_0xa8e3d8);if(!(_0x5d8f2f<0x1&&_0x5d8f2f>0x0))return _0x21551c;_0x5544eb[_0x3248de]=_0x5d8f2f*0x2-0x1;}const _0x545f10=(0x1-_0xc31c05)*_0x5544eb[0x0]+_0xc31c05*_0x5544eb[0x1],_0x15839d=(0x1-_0xc31c05)*_0x5544eb[0x2]+_0xc31c05*_0x5544eb[0x3],_0x209db4=(0x1-_0x513996)*_0x545f10+_0x513996*_0x15839d;if(_0x1c4fba['z']-_0x209db4>0.000001){const _0x14daaf=new Cesium['Matrix4']();Cesium['Matrix4']['inverse'](_0x20ac04,_0x14daaf),_0x1c4fba['z']=_0x209db4,Cesium['Matrix4']['multiplyByVector'](_0x14daaf,_0x1c4fba,_0x1c4fba),Cesium['Cartesian4']['divideByScalar'](_0x1c4fba,_0x1c4fba['w'],_0x1c4fba);const _0x3ce894=Cesium['Cartographic']['fromCartesian'](_0x1c4fba);_0x21551c['position']=_0x3ce894,_0x21551c['isViewer']=![],_0x21551c['st']=new Cesium['Cartesian2'](_0x2fa85b,_0xbcd602);}return _0x21551c;}_0x2bf67a['prototype']['build']=function(){if(this['isBuild'])return;this['isBuild']=!![],this['scene']['primitives']['add'](this),this['removeListenerFunc']=this['scene']['preUpdate']['addEventListener']((_0x8bb16c,_0x436edb)=>{for(let _0x37114a in this['_depthBuffers']['_hash']){if(this['_depthBuffers']['_hash']['hasOwnProperty'](_0x37114a)){let _0x4d686a=this['_depthBuffers']['_hash'][_0x37114a];_0x4d686a['renderToTexture'](_0x8bb16c);}}},this);},_0x2bf67a['prototype']['clear']=function(){if(!this['isBuild'])return;this['isBuild']=![],this['removeListenerFunc'](),this['scene']['primitives']['remove'](this);},_0x2bf67a['prototype']['isDestroyed']=function(){return![];},_0x2bf67a['prototype']['destroy']=function(){return this['removeAllTargetPoint'](),this['scene']['primitives']['remove'](this),Cesium['destroyObject'](this);};export default _0x2bf67a;