const _0x1bda8a=(function(){let _0x4b8a7b=!![];return function(_0x39be14,_0x2992c2){const _0x454595=_0x4b8a7b?function(){if(_0x2992c2){const _0x1c884c=_0x2992c2['apply'](_0x39be14,arguments);return _0x2992c2=null,_0x1c884c;}}:function(){};return _0x4b8a7b=![],_0x454595;};}()),_0x2267cd=_0x1bda8a(this,function(){return _0x2267cd['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x2267cd)['search']('(((.+)+)+)+$');});_0x2267cd();import _0x460981 from'../Core/ModifyTerrain.js';import _0x417b8e from'./buildModuleUrl.js';const _0x409638=Cesium['defined'],_0x407c2a=new Cesium['Cartesian2'](),_0x4701ec=new Cesium['Cartesian3'](),_0x1d6d09=new Cesium['Cartographic'](),_0x35ab33=new Cesium['Cartesian3'](),_0x476dd3=new Cesium['Matrix4'](),_0x33cc9b=new Cesium['Cartesian2']();function _0x394ed3(_0xb8bb52,_0x298f4d,_0x5b24f4){if(_0x5b24f4){const _0x20fc08=_0xb8bb52['camera']['_projection'];let _0x7e46c8=_0x20fc08['project'](Cartographic['fromDegrees'](_0x298f4d['positions'][0x0],_0x298f4d['positions'][0x1]));_0x7e46c8=new Cesium['Cartesian3'](_0x7e46c8['z'],_0x7e46c8['x'],_0x7e46c8['y']),_0x298f4d['_excavateMatrix']=Cesium['Matrix4']['fromTranslation'](_0x7e46c8);}else _0x298f4d['_excavateMatrix']=Cesium['Transforms']['eastNorthUpToFixedFrame'](Cesium['Cartesian3']['fromDegrees'](_0x298f4d['positions'][0x0],_0x298f4d['positions'][0x1]));}function _0x2dc194(_0x2432a5,_0x3a1687){const _0xa71aec=Cesium['Matrix4']['getTranslation'](_0x3a1687,new Cesium['Cartesian3']()),_0x5a2697=_0x2432a5['attributes']['position'],_0x4f2751=_0x5a2697['values'],_0x815b94=_0x4f2751['length'];for(let _0x1cf74c=0x0;_0x1cf74c<_0x815b94;_0x1cf74c+=0x3){Cesium['Cartesian3']['unpack'](_0x4f2751,_0x1cf74c,_0x4701ec),Cesium['Cartographic']['fromCartesian'](_0x4701ec,undefined,_0x1d6d09);let _0x407ef=Cesium['Math']['toDegrees'](_0x1d6d09['longitude']);_0x407ef=_0x407ef-_0xa71aec['x'];let _0x402315=Cesium['Math']['toDegrees'](_0x1d6d09['latitude']);_0x402315=_0x402315-_0xa71aec['y'],_0x4f2751[_0x1cf74c]=_0x407ef,_0x4f2751[_0x1cf74c+0x1]=_0x402315,_0x4f2751[_0x1cf74c+0x2]=_0x1d6d09['height']-0x1;}}function _0x970bce(_0x3838a8,_0x533244){if(_0x409638(_0x533244['command']))return;const _0x4d3184=new Cesium['DrawCommand']({'primitiveType':Cesium['PrimitiveType']['TRIANGLES'],'modelMatrix':_0x533244['modelMatrix']});_0x2dc194(_0x533244['worldGeometry'],_0x533244['modelMatrix']),_0x4d3184['vertexArray']=Cesium['VertexArray']['fromGeometry']({'context':_0x3838a8,'geometry':_0x533244['worldGeometry'],'attributeLocations':{'position':0x0},'bufferUsage':Cesium['BufferUsage']['STATIC_DRAW'],'interleave':!![]});const _0x5b4079='\x0a\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec4\x20position;\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vHeight;\x0a\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vHeight\x20=\x20position.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20czm_modelViewProjection\x20*\x20vec4(position.xy,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',_0x380b09='\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vHeight;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20packValue(float\x20value)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20SHIFT_LEFT8\x20=\x20256.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20SHIFT_RIGHT8\x20=\x201.0\x20/\x20256.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20result;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result.a\x20=\x20255.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20fPos\x20=\x20abs(value\x20+\x209000.0)\x20*\x20SHIFT_RIGHT8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result.b\x20=\x20(fPos\x20-\x20floor(fPos))\x20*\x20SHIFT_LEFT8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fPos\x20=\x20floor(fPos)\x20*\x20SHIFT_RIGHT8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result.g\x20=\x20(fPos\x20-\x20floor(fPos))\x20*\x20SHIFT_LEFT8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result.r\x20=\x20floor(fPos);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20/=\x20255.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20packValue(vHeight);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20';var _0xf1d4eb=new Cesium['ShaderSource']({'sources':[_0x5b4079]}),_0xda1fdb=new Cesium['ShaderSource']({'sources':[_0x380b09]});_0x4d3184['shaderProgram']=Cesium['ShaderProgram']['fromCache']({'context':_0x3838a8,'vertexShaderSource':_0xf1d4eb,'fragmentShaderSource':_0xda1fdb,'attributeLocations':{'position':0x0}}),_0x533244['command']=_0x4d3184;}function _0x2e6453(_0x156186,_0x4fad5a){if(!_0x4fad5a['_excavationSideTexture']){const _0x41edcc=_0x417b8e('Assets/Textures/excavationregion_side.jpg');var _0x2805aa=Cesium['Resource']['createIfNeeded'](_0x41edcc);_0x2805aa['fetchImage']()['then'](function(_0xa8bdc4){_0x4fad5a['_excavationSideTexture']=new Cesium['Texture']({'context':_0x156186['context'],'source':_0xa8bdc4,'sampler':new Cesium['Sampler']({'wrapS':Cesium['TextureWrap']['REPEAT'],'wrapT':Cesium['TextureWrap']['REPEAT'],'minificationFilter':Cesium['TextureMinificationFilter']['LINEAR_MIPMAP_NEAREST'],'magnificationFilter':Cesium['TextureMinificationFilter']['LINEAR']})}),_0x4fad5a['_excavationSideTexture']['generateMipmap'](Cesium['MipmapHint']['NICEST']);});}}function _0x566276(_0x1e01d8,_0x1f1078){if(!_0x409638(_0x1f1078['_excavationBottomTexture'])){const _0x8647e2=_0x417b8e('Assets/Textures/excavationregion_bottom.jpg');var _0x2d318a=Cesium['Resource']['createIfNeeded'](_0x8647e2);_0x2d318a['fetchImage']()['then'](function(_0x546723){_0x1f1078['_excavationBottomTexture']=new Cesium['Texture']({'context':_0x1e01d8['context'],'source':_0x546723,'sampler':new Cesium['Sampler']({'minificationFilter':Cesium['TextureMinificationFilter']['LINEAR_MIPMAP_NEAREST'],'magnificationFilter':Cesium['TextureMinificationFilter']['LINEAR']})}),_0x1f1078['_excavationBottomTexture']['generateMipmap'](Cesium['MipmapHint']['NICEST']);});}}function _0x28d36f(_0x1c571a,_0x50b397){let _0x3a0e62,_0xadeab7=![];for(let _0x13f418=0x0,_0x30d2c6=_0x1c571a['length'];_0x13f418<_0x30d2c6;_0x13f418++){_0x3a0e62=_0x1c571a[_0x13f418];let _0x3903fc=Cesium['Rectangle']['simpleIntersection'](_0x3a0e62['rectangle'],_0x50b397);if(_0x409638(_0x3903fc)){_0xadeab7=!![];break;}}if(!_0x409638(_0x3a0e62)||!_0xadeab7)return undefined;while(_0x409638(_0x3a0e62)){if(_0x3a0e62['rectangle']['contains'](_0x50b397))return _0x3a0e62;_0x3a0e62=_0x3a0e62['parent'];}return undefined;}const _0x38839d='\x0a\x20\x20\x20\x20#ifdef\x20QUANTIZATION_BITS12\x0a\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec4\x20compressed0;\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec4\x20position3DAndHeight;\x0a\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec4\x20textureCoordAndEncodedNormals;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#ifdef\x20QUANTIZATION_BITS12\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec2\x20u_minMaxHeight;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20mat4\x20u_scaleAndBias;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20uniform\x20float\x20uMinHeight;\x0a\x20\x20\x20\x20uniform\x20float\x20uHeightRange;\x0a\x20\x20\x20\x20uniform\x20vec2\x20uRepeat;\x0a\x20\x20\x20\x20varying\x20vec2\x20vUV;\x0a\x20\x20\x20\x20uniform\x20mat4\x20u_modifiedModelViewProjection;\x0a\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20#ifdef\x20QUANTIZATION_BITS12\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20xy\x20=\x20czm_decompressTextureCoordinates(compressed0.x);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20zh\x20=\x20czm_decompressTextureCoordinates(compressed0.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20position\x20=\x20vec3(xy,\x20zh.x);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20height\x20=\x20zh.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20textureCoordinates\x20=\x20czm_decompressTextureCoordinates(compressed0.z);\x0a\x20\x20\x20\x20\x20\x20\x20\x20height\x20=\x20height\x20*\x20(u_minMaxHeight.y\x20-\x20u_minMaxHeight.x)\x20+\x20u_minMaxHeight.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20position\x20=\x20(u_scaleAndBias\x20*\x20vec4(position,\x201.0)).xyz;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20texCoordX\x20=\x20czm_decompressTextureCoordinates(compressed0.w).x;\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20position\x20=\x20position3DAndHeight.xyz;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20height\x20=\x20position3DAndHeight.w;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20texCoordX\x20=\x20textureCoordAndEncodedNormals.z;\x0a\x20\x20\x20\x20#endif\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20u_modifiedModelViewProjection\x20*\x20vec4(position,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20y\x20=\x20uRepeat.y\x20*\x20(height\x20-\x20uMinHeight)\x20/\x20uHeightRange;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vUV\x20=\x20vec2(texCoordX\x20*\x20uRepeat.x,\x20y);\x0a\x20\x20\x20\x20}\x0a',_0x19a622='\x0a\x20\x20\x20\x20precision\x20mediump\x20float;\x0a\x20\x20\x20\x20precision\x20mediump\x20int;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uSideTex;\x0a\x20\x20\x20\x20varying\x20vec2\x20vUV;\x0a\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20texture2D(uSideTex,\x20vUV);\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20czm_gammaCorrect(gl_FragColor);\x0a\x20\x20\x20\x20}\x0a';function _0x5dd106(_0x1ba807,_0x35e59e,_0x4fe901,_0x216877,_0x591802){const _0xda4106=_0x1ba807['context'],_0x144c21=_0x216877['encoding'];let _0x1c107c;_0x144c21['quantization']===Cesium['TerrainQuantization']['BITS12']?_0x1c107c={'compressed0':0x0}:_0x1c107c={'position3DAndHeight':0x0,'textureCoordAndEncodedNormals':0x1};const _0x4e9141=Cesium['GlobeSurfaceTile']['_createVertexArrayForMesh'](_0xda4106,_0x216877),_0x5cbf25=new Cesium['DrawCommand']({'primitiveType':Cesium['PrimitiveType']['TRIANGLES'],'boundingVolume':_0x4fe901['boundingVolume'],'pass':Cesium['Pass']['GLOBE']});_0x5cbf25['vertexArray']=_0x4e9141;const _0x45b2b2=new Cesium['ShaderSource']({'sources':[_0x38839d]});_0x144c21['quantization']===Cesium['TerrainQuantization']['BITS12']&&_0x45b2b2['defines']['push']('QUANTIZATION_BITS12');const _0x309f95=new Cesium['ShaderSource']({'sources':[_0x19a622]});_0x5cbf25['shaderProgram']=Cesium['ShaderProgram']['fromCache']({'context':_0xda4106,'vertexShaderSource':_0x45b2b2,'fragmentShaderSource':_0x309f95,'attributeLocations':_0x1c107c}),_0x5cbf25['renderState']=Cesium['RenderState']['fromCache']({'cull':{'enabled':![]},'depthTest':{'enabled':!![]}});const _0x54cd31=_0xda4106['uniformState'];_0x5cbf25['uniformMap']={'uSideTex':function(){return _0x35e59e['_excavationSideTexture'];},'uMinHeight':function(){return _0x4fe901['minimumHeight'];},'uHeightRange':function(){return _0x4fe901['maximumHeight']-_0x4fe901['minimumHeight'];},'u_modifiedModelViewProjection':function(){let _0x3501c7=_0x54cd31['view'],_0xf0b6e4=_0x54cd31['projection'],_0x1270b6=Cesium['Matrix4']['multiplyByPoint'](_0x3501c7,_0x216877['center'],_0x35ab33);return Cesium['Matrix4']['setTranslation'](_0x3501c7,_0x1270b6,_0x476dd3),Cesium['Matrix4']['multiply'](_0xf0b6e4,_0x476dd3,_0x476dd3),_0x476dd3;},'uRepeat':function(){return _0x33cc9b['x']=_0x4fe901['oriPointCount'],_0x33cc9b['y']=Math['floor']((_0x4fe901['maximumHeight']-_0x4fe901['minimumHeight'])/0x64),_0x33cc9b['y']=Math['max'](_0x33cc9b['y'],0x1),_0x33cc9b;},'u_minMaxHeight':function(){return _0x407c2a['x']=_0x144c21['minimumHeight'],_0x407c2a['y']=_0x144c21['maximumHeight'],_0x407c2a;},'u_scaleAndBias':function(){return _0x144c21['matrix'];}},_0x591802[_0x4fe901['name']]=_0x5cbf25;}const _0x537642='\x0a\x20\x20\x20\x20attribute\x20vec4\x20position;\x0a\x20\x20\x20\x20attribute\x20vec2\x20st;\x0a\x20\x20\x20\x20varying\x20vec2\x20vUV;\x0a\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20czm_modelViewProjection\x20*\x20vec4(position.xyz,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vUV\x20=\x20st.xy;\x0a\x20\x20\x20\x20}\x0a',_0x38a0cc='\x0a\x20\x20\x20\x20precision\x20mediump\x20float;\x0a\x20\x20\x20\x20precision\x20mediump\x20int;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uBottomTex;\x0a\x20\x20\x20\x20varying\x20vec2\x20vUV;\x0a\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20texture2D(uBottomTex,\x20vUV);\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20czm_gammaCorrect(gl_FragColor);\x0a\x20\x20\x20\x20}\x0a';function _0x302893(_0xc02de0,_0x3d1c5c){let _0x4c2ef0=Cesium['Cartesian3']['unpackArray'](_0x3d1c5c),_0x2a5df0=_0xc02de0['_excavateMatrix'],_0xe94ae9=Cesium['Matrix4']['inverse'](_0x2a5df0,new Cesium['Matrix4']());for(let _0x5cd7fb=0x0,_0x2380ff=_0x4c2ef0['length'];_0x5cd7fb<_0x2380ff;_0x5cd7fb++){let _0x338702=_0x4c2ef0[_0x5cd7fb],_0x416fd0=Cesium['Matrix4']['multiplyByPoint'](_0xe94ae9,_0x338702,_0x4701ec);_0x3d1c5c[_0x5cd7fb*0x3]=_0x416fd0['x'],_0x3d1c5c[_0x5cd7fb*0x3+0x1]=_0x416fd0['y'],_0x3d1c5c[_0x5cd7fb*0x3+0x2]=_0x416fd0['z'];}}function _0x5b93e3(_0x77a203,_0x55d616,_0x2010ac,_0x2ea7d9,_0x3d6720){const _0x59e3a9=_0x77a203['context'];_0x302893(_0x2010ac,_0x2ea7d9['attributes']['position']['values']);const _0x3692bd=Cesium['VertexArray']['fromGeometry']({'context':_0x59e3a9,'geometry':_0x2ea7d9,'attributeLocations':Cesium['GeometryPipeline']['createAttributeLocations'](_0x2ea7d9),'bufferUsage':Cesium['BufferUsage']['STATIC_DRAW'],'interleave':!![]}),_0x473039=new Cesium['DrawCommand']({'primitiveType':Cesium['PrimitiveType']['TRIANGLES'],'boundingVolume':_0x2010ac['boundingVolume'],'pass':Cesium['Pass']['GLOBE'],'modelMatrix':_0x2010ac['_excavateMatrix']});_0x473039['vertexArray']=_0x3692bd;const _0x57c62e=new Cesium['ShaderSource']({'sources':[_0x537642]}),_0x5a9d2e=new Cesium['ShaderSource']({'sources':[_0x38a0cc]});_0x473039['shaderProgram']=Cesium['ShaderProgram']['fromCache']({'context':_0x59e3a9,'vertexShaderSource':_0x57c62e,'fragmentShaderSource':_0x5a9d2e,'attributeLocations':Cesium['GeometryPipeline']['createAttributeLocations'](_0x2ea7d9)}),_0x473039['renderState']=Cesium['RenderState']['fromCache']({'cull':{'enabled':![]},'depthTest':{'enabled':!![]}}),_0x473039['uniformMap']={'uBottomTex':function(){return _0x55d616['_excavationBottomTexture'];}},_0x3d6720[_0x2010ac['name']]=_0x473039;}Cesium['GlobeSurfaceTileProvider']['prototype']['_updateExcavateRegions']=function(_0x44190d){if(!this['_excavateRegionUpdate']||_0x44190d['camera']['bReflect']||this['_tilesToRenderByTextureCount']['length']<0x1)return;!this['loadingExcavateTexture']&&(this['loadingExcavateTexture']=!![],_0x2e6453(_0x44190d,this),_0x566276(_0x44190d,this));if(!_0x409638(this['_excavationBottomTexture'])||!_0x409638(this['_excavationSideTexture']))return;this['_excavateRegionUpdate']=![];const _0x4bb02a=_0x44190d['camera']['_scene']['mode']===Cesium['SceneMode']['COLUMBUS_VIEW'],_0x1e800a=this['_excavateRegions']['values'],_0x1572a6=this['_excavateRegions']['length'];!_0x409638(this['excavateSideCommands'])&&(this['excavateSideCommands']={});!_0x409638(this['bottomCommands'])&&(this['bottomCommands']={});for(let _0x2f5403=0x0;_0x2f5403<_0x1572a6;_0x2f5403++){const _0x52b602=_0x1e800a[_0x2f5403];if(_0x52b602['isCreateModifyTerrain'])continue;_0x394ed3(_0x44190d,_0x52b602,_0x4bb02a),_0x970bce(_0x44190d['context'],_0x52b602);const _0x4e71e9=_0x52b602['rectangle'],_0x4bd6e7=_0x28d36f(this['_quadtree']['_tilesToRender'],_0x4e71e9);if(!_0x409638(_0x4bd6e7)||!_0x409638(_0x4bd6e7['data']))continue;const _0x2b3efd=_0x52b602['sideGeometry'],_0x508611=_0x52b602['minimumHeight'],_0x208d70=_0x52b602['maximumHeight'],_0xb8525f=_0x460981['createTerrainData'](_0x4bd6e7,_0x2b3efd,_0x508611,_0x208d70,0x0);if(!_0x409638(_0xb8525f))continue;let _0x434829=_0x460981['createTerrainMesh'](_0x4bd6e7,_0xb8525f,!![],_0x52b602['totalLength']);_0x409638(_0x434829)&&_0x5dd106(_0x44190d,this,_0x52b602,_0x434829,this['excavateSideCommands']),_0x5b93e3(_0x44190d,this,_0x52b602,_0x52b602['bottomGeometry'],this['bottomCommands']),_0x52b602['isCreateModifyTerrain']=!![];}},Cesium['GlobeSurfaceTileProvider']['prototype']['_updateModifyRegions']=function(_0x15a972){if(!this['_modifyRegionUpdate']||_0x15a972['camera']['bReflect'])return;if(this['_quadtree']['_tilesToRender']['length']===0x0)return;if(this['_quadtree']['_tilesToRender'][0x0]['level']<0xa)return;!this['loadingExcavateTexture']&&(this['loadingExcavateTexture']=!![],_0x2e6453(_0x15a972,this),_0x566276(_0x15a972,this));if(!_0x409638(this['_excavationSideTexture']))return;!_0x409638(this['modifySideCommands'])&&(this['modifySideCommands']={});this['_modifyRegionUpdate']=![];var _0x11371c=this['_modifyRegions']['values'],_0x2de920=_0x11371c['length'];const _0x18d990=_0x15a972['context'];for(let _0x49c765=0x0;_0x49c765<_0x2de920;_0x49c765++){const _0x582da2=_0x11371c[_0x49c765];if(_0x582da2['isCreateModifyTerrain'])continue;const _0x3bd06d=_0x582da2['rectangle'];_0x970bce(_0x18d990,_0x582da2);const _0x43f712=_0x28d36f(this['_quadtree']['_tilesToRender'],_0x3bd06d);if(!_0x409638(_0x43f712)||!_0x409638(_0x43f712['data']))continue;const _0x5c88e7=_0x43f712['data'],_0x366329=_0x5c88e7['createModifyVertexArray'](_0x18d990,this,_0x43f712,_0x582da2,![]);_0x366329&&this['_upsampleParent'](_0x18d990,_0x43f712,_0x582da2);const _0x57e943=_0x582da2['sideGeometry'],_0x257e1e=_0x582da2['minimumHeight'],_0x5d2a40=_0x582da2['maximumHeight'],_0x48c706=_0x460981['createTerrainData'](_0x43f712,_0x57e943,_0x257e1e,_0x5d2a40,0x0);_0x582da2['maximumHeight']=_0x48c706['_maximumHeight'];if(_0x409638(_0x48c706)){let _0x258951=_0x460981['createTerrainMesh'](_0x43f712,_0x48c706,!![],_0x582da2['totalLength']);_0x409638(_0x258951)&&_0x5dd106(_0x15a972,this,_0x582da2,_0x258951,this['modifySideCommands']);}_0x582da2['isCreateModifyTerrain']=!![];}},Cesium['GlobeSurfaceTileProvider']['prototype']['_upsampleParent']=function(_0xc75f02,_0x385651,_0x14771d){const _0x52a4f5=_0x14771d['rectangle'];var _0x30e013=_0x385651['_southwestChild'],_0x26cae1;if(_0x409638(_0x30e013)&&_0x409638(_0x30e013['data'])){_0x26cae1=Cesium['Rectangle']['intersection'](_0x30e013['rectangle'],_0x52a4f5);if(_0x409638(_0x26cae1)){const _0x4d9841=_0x30e013['data']['createModifyVertexArray'](_0xc75f02,this,_0x30e013,_0x14771d,!![]);_0x4d9841&&this['_upsampleParent'](_0xc75f02,_0x30e013,_0x14771d);}}_0x30e013=_0x385651['_southeastChild'];if(_0x409638(_0x30e013)&&_0x409638(_0x30e013['data'])){_0x26cae1=Cesium['Rectangle']['intersection'](_0x30e013['rectangle'],_0x52a4f5);if(_0x409638(_0x26cae1)){const _0x10b907=_0x30e013['data']['createModifyVertexArray'](_0xc75f02,this,_0x30e013,_0x14771d,!![]);_0x10b907&&this['_upsampleParent'](_0xc75f02,_0x30e013,_0x14771d);}}_0x30e013=_0x385651['_northwestChild'];if(_0x409638(_0x30e013)&&_0x409638(_0x30e013['data'])){_0x26cae1=Cesium['Rectangle']['intersection'](_0x30e013['rectangle'],_0x52a4f5);if(_0x409638(_0x26cae1)){const _0x5ff610=_0x30e013['data']['createModifyVertexArray'](_0xc75f02,this,_0x30e013,_0x14771d,!![]);_0x5ff610&&this['_upsampleParent'](_0xc75f02,_0x30e013,_0x14771d);}}_0x30e013=_0x385651['_northeastChild'];if(_0x409638(_0x30e013)&&_0x409638(_0x30e013['data'])){_0x26cae1=Cesium['Rectangle']['intersection'](_0x30e013['rectangle'],_0x52a4f5);if(_0x409638(_0x26cae1)){const _0x135053=_0x30e013['data']['createModifyVertexArray'](_0xc75f02,this,_0x30e013,_0x14771d,!![]);_0x135053&&this['_upsampleParent'](_0xc75f02,_0x30e013,_0x14771d);}}},Cesium['GlobeSurfaceTileProvider']['prototype']['_rasterTiles']=function(_0x5ea303){const _0x122d02=this['_tilesToRenderByTextureCount'];let _0x104f3c=_0x122d02['length'];for(let _0x2697da=0x0;_0x2697da<_0x104f3c;++_0x2697da){const _0x10d561=_0x122d02[_0x2697da];if(!_0x409638(_0x10d561))continue;let _0x585fbe=_0x10d561['length'];for(let _0x3ecb83=0x0;_0x3ecb83<_0x585fbe;++_0x3ecb83){const _0x578a20=_0x10d561[_0x3ecb83];_0x578a20['rasterClipRegion'](_0x5ea303,this);}}};function _0x59130d(_0x1c66ae,_0x28550e,_0x3c19fc){!_0x409638(_0x28550e['uClipRasterTexture'])&&(_0x28550e['uClipRasterTexture']=function(){if(!_0x409638(this['properties']['clipRasterTexture']))return _0x1c66ae['context']['defaultTexture'];return this['properties']['clipRasterTexture'];}),_0x28550e['properties']['clipRasterTexture']=_0x3c19fc['_clipRasterTexture'],_0x28550e['properties']['tile']=_0x3c19fc;}function _0x40f510(_0x38cf0d,_0x3718df,_0x1afa7b,_0x302086){const _0x3ea87e=_0x1afa7b['data'];if(!_0x409638(_0x3ea87e))return;const _0x1444e6=_0x3ea87e['modifyTerrainVertexArray'],_0x3ca635=_0x3ea87e['modifyTerrainMesh'];if(!_0x409638(_0x1444e6)||!_0x409638(_0x3ca635))return;!_0x409638(_0x3718df['_modifyDrawCommands'])&&(_0x3718df['_modifyDrawCommands']=[],_0x3718df['_usedModifyDrawCommands']=0x0);for(let _0x5da765=0x0,_0x39b773=_0x1444e6['length'];_0x5da765<_0x39b773;_0x5da765++){let _0x3e8b4a;_0x3718df['_modifyDrawCommands']['length']<=_0x3718df['_usedModifyDrawCommands']?(_0x3e8b4a=Cesium['DrawCommand']['shallowClone'](_0x302086),_0x3718df['_modifyDrawCommands']['push'](_0x3e8b4a)):(_0x3e8b4a=_0x3718df['_modifyDrawCommands'][_0x3718df['_usedModifyDrawCommands']],Cesium['DrawCommand']['shallowClone'](_0x302086,_0x3e8b4a));++_0x3718df['_usedModifyDrawCommands'];let _0x257a79=Cesium['combine'](_0x302086['uniformMap'],{}),_0x34b27a=Cesium['combine'](_0x257a79['properties'],{});_0x257a79['properties']=_0x34b27a,_0x3e8b4a['uniformMap']=_0x257a79,_0x34b27a['rtc']=new Cesium['Cartesian3'](),_0x34b27a['center3D']=new Cesium['Cartesian3'](),_0x34b27a['scaleAndBias']=new Cesium['Matrix4'](),_0x34b27a['minMaxHeight']=new Cesium['Cartesian2']();let _0x2468d8=_0x1444e6[_0x5da765],_0x7ad898=_0x3ca635[_0x5da765],_0x145b51=_0x7ad898['encoding'];_0x3e8b4a['vertexArray']=_0x2468d8,_0x3e8b4a['count']=_0x2468d8['indexBuffer']['numberOfIndices'],_0x3e8b4a['boundingVolume']=_0x3ea87e['orientedBoundingBox'],Cesium['Cartesian3']['clone'](_0x7ad898['center'],_0x34b27a['rtc']),Cesium['Cartesian3']['clone'](_0x7ad898['center'],_0x34b27a['center3D']),Cesium['Matrix4']['clone'](_0x145b51['matrix'],_0x34b27a['scaleAndBias']),_0x34b27a['minMaxHeight']['x']=_0x145b51['minimumHeight'],_0x34b27a['minMaxHeight']['y']=_0x145b51['maximumHeight'];let _0x4d6063=_0x3e8b4a['shaderProgram'];const _0x5bd3bc=_0x4d6063['vertexShaderSource']['clone'](),_0x3c07d2=_0x4d6063['fragmentShaderSource']['clone']();_0x5bd3bc['defines']=_0x409638(_0x5bd3bc['defines'])?_0x5bd3bc['defines']['slice'](0x0):[],_0x3c07d2['defines']=_0x409638(_0x3c07d2['defines'])?_0x3c07d2['defines']['slice'](0x0):[],_0x3c07d2['defines']=_0x3c07d2['defines']['filter'](_0x7fc746=>{return _0x7fc746!=='Apply_Excavation';}),_0x7ad898['encoding']['quantization']===Cesium['TerrainQuantization']['BITS12']&&_0x5bd3bc['defines']['indexOf']('QUANTIZATION_BITS12')===-0x1&&_0x5bd3bc['defines']['push']('QUANTIZATION_BITS12'),_0x3e8b4a['shaderProgram']=Cesium['ShaderProgram']['fromCache']({'context':_0x38cf0d['context'],'vertexShaderSource':_0x5bd3bc,'fragmentShaderSource':_0x3c07d2,'attributeLocations':_0x145b51['getAttributeLocations']()}),_0x38cf0d['commandList']['push'](_0x3e8b4a);}}Cesium['GlobeSurfaceTileProvider']['prototype']['_updateDrawCommands']=function(_0x51317d){for(let _0x35b3e8=0x0,_0x12cc83=this['_usedDrawCommands'];_0x35b3e8<_0x12cc83;_0x35b3e8++){let _0x40dffc=this['_drawCommands'][_0x35b3e8],_0x200af4=_0x40dffc['uniformMap'],_0x4e077e=_0x40dffc['owner'];_0x59130d(_0x51317d,_0x200af4,_0x4e077e),_0x40f510(_0x51317d,this,_0x4e077e,_0x40dffc);}this['_usedModifyDrawCommands']=0x0;},Cesium['GlobeSurfaceTileProvider']['prototype']['_renderBottomAndSideCommands']=function(_0x16923e){const _0x78d6dc=_0x16923e['commandList'];if(_0x409638(this['excavateSideCommands']))for(let _0x1f4eaa in this['excavateSideCommands']){let _0x1db822=this['excavateSideCommands'][_0x1f4eaa];_0x78d6dc['push'](_0x1db822);}if(_0x409638(this['modifySideCommands']))for(let _0x3f1f98 in this['modifySideCommands']){let _0x18c34e=this['modifySideCommands'][_0x3f1f98];_0x78d6dc['push'](_0x18c34e);}if(_0x409638(this['bottomCommands']))for(let _0xbfe00b in this['bottomCommands']){let _0x4b3d37=this['bottomCommands'][_0xbfe00b];_0x78d6dc['push'](_0x4b3d37);}},Cesium['GlobeSurfaceTileProvider']['prototype']['hookEndUpdate']=Cesium['GlobeSurfaceTileProvider']['prototype']['endUpdate'],Cesium['GlobeSurfaceTileProvider']['prototype']['endUpdate']=function(_0x5776fa){this['_updateExcavateRegions'](_0x5776fa),this['_updateModifyRegions'](_0x5776fa),this['_rasterTiles'](_0x5776fa),this['hookEndUpdate'](_0x5776fa),this['_updateDrawCommands'](_0x5776fa),this['_renderBottomAndSideCommands'](_0x5776fa);},Cesium['GlobeSurfaceTileProvider']['prototype']['_removeExcavationCommands']=function(_0x29ded5){if(_0x409638(this['excavateSideCommands'])){let _0x4b8637=this['excavateSideCommands'][_0x29ded5];_0x409638(_0x4b8637)&&(_0x4b8637['vertexArray']=_0x4b8637['vertexArray']&&!_0x4b8637['vertexArray']['isDestroyed']()&&_0x4b8637['vertexArray']['destroy'](),_0x4b8637['shaderProgram']=_0x4b8637['shaderProgram']&&!_0x4b8637['shaderProgram']['isDestroyed']()&&_0x4b8637['shaderProgram']['destroy'](),delete this['excavateSideCommands'][_0x29ded5]);}if(_0x409638(this['bottomCommands'])){let _0x4b1fa5=this['bottomCommands'][_0x29ded5];_0x409638(_0x4b1fa5)&&(_0x4b1fa5['vertexArray']=_0x4b1fa5['vertexArray']&&!_0x4b1fa5['vertexArray']['isDestroyed']()&&_0x4b1fa5['vertexArray']['destroy'](),_0x4b1fa5['shaderProgram']=_0x4b1fa5['shaderProgram']&&!_0x4b1fa5['shaderProgram']['isDestroyed']()&&_0x4b1fa5['shaderProgram']['destroy'](),delete this['bottomCommands'][_0x29ded5]);}},Cesium['GlobeSurfaceTileProvider']['prototype']['_removeAllExcavationCommands']=function(){const _0x1d14e3=Object['keys'](this['_excavateRegions']['_hash']);for(let _0x61f4b8=0x0,_0xfa659=_0x1d14e3['length'];_0x61f4b8<_0xfa659;_0x61f4b8++){let _0x383d09=_0x1d14e3[_0x61f4b8];this['_removeExcavationCommands'](_0x383d09);}},Cesium['GlobeSurfaceTileProvider']['prototype']['_removeModifyRegionSideCommands']=function(_0x420565){if(_0x409638(this['modifySideCommands'])){let _0x3a5e17=this['modifySideCommands'][_0x420565];_0x409638(_0x3a5e17)&&(_0x3a5e17['vertexArray']=_0x3a5e17['vertexArray']&&!_0x3a5e17['vertexArray']['isDestroyed']()&&_0x3a5e17['vertexArray']['destroy'](),_0x3a5e17['shaderProgram']=_0x3a5e17['shaderProgram']&&!_0x3a5e17['shaderProgram']['isDestroyed']()&&_0x3a5e17['shaderProgram']['destroy'](),delete this['modifySideCommands'][_0x420565]);}},Cesium['GlobeSurfaceTileProvider']['prototype']['hookComputeTileVisibility']=Cesium['GlobeSurfaceTileProvider']['prototype']['computeTileVisibility'],Cesium['GlobeSurfaceTileProvider']['prototype']['computeTileVisibility']=function(_0x5071a8,_0x56beb2,_0x1cb3d1){let _0x14f20b=this['hookComputeTileVisibility'](_0x5071a8,_0x56beb2,_0x1cb3d1);return _0x409638(_0x5071a8['data'])&&_0x409638(_0x5071a8['data']['modifyTerrainVertexArray'])&&_0x5071a8['data']['modifyTerrainVertexArray']['length']>0x0&&(_0x14f20b=Cesium['Visibility']['FULL']),_0x14f20b;};export default{};