const _0x5b68=['Mode_Height','vertexArray','position','destroy','Cartesian4','Matrix4','MAX_VALUE','_command','command','length','attributes','2750kuXwFc','ShaderSource','createCommand','86832nnVNYk','max','isDestroyed','min','1kkUIHG','updateGeometry','prototype','shaderProgram','fromGeometry','1xLvHHz','heightBuffer','multiplyByPoint','169MdwgoV','172789QRFkJx','height','528nmhYfK','512zXmrbI','defines','colorBuffer','RenderState','ShaderProgram','Cartesian3','11975dquJAO','framebuffer','BoundingRectangle','202917VgQwGg','push','updateGeoBounds','VertexArray','values','geometry','getColorTexture','renderState'];const _0x583857=_0x1e14;(function(_0xf7a527,_0x2a9ab1){const _0x14f1ca=_0x1e14;while(!![]){try{const _0x29e873=-parseInt(_0x14f1ca(0x1b2))+parseInt(_0x14f1ca(0x1c2))*parseInt(_0x14f1ca(0x1c1))+parseInt(_0x14f1ca(0x1bb))*parseInt(_0x14f1ca(0x1bf))+parseInt(_0x14f1ca(0x1be))*parseInt(_0x14f1ca(0x1b6))+-parseInt(_0x14f1ca(0x1cb))+-parseInt(_0x14f1ca(0x1c8))+-parseInt(_0x14f1ca(0x1af));if(_0x29e873===_0x2a9ab1)break;else _0xf7a527['push'](_0xf7a527['shift']());}catch(_0x418a4b){_0xf7a527['push'](_0xf7a527['shift']());}}}(_0x5b68,0x21e44));import _0xef443 from'./Shaders/RasterRegionVS.js';import _0x11c00b from'./Shaders/RasterRegionFS.js';function RasterRegion(){const _0x57043c=_0x1e14;this['bounds']=new Cesium[(_0x57043c(0x1a8))](Number['MAX_VALUE'],Number[_0x57043c(0x1aa)],-Number[_0x57043c(0x1aa)],-Number[_0x57043c(0x1aa)]),this[_0x57043c(0x1ac)]=undefined,this['geometry']=undefined,this[_0x57043c(0x1bc)]=undefined,this[_0x57043c(0x1c4)]=undefined;}let scratchCatesian3=new Cesium[(_0x583857(0x1c7))]();RasterRegion[_0x583857(0x1b8)][_0x583857(0x1b7)]=function(_0x5b54fe,_0x156909){const _0x56f928=_0x583857;let _0x3d1e43=_0x5b54fe[_0x56f928(0x1ae)][_0x56f928(0x1a6)],_0x178da3=_0x3d1e43[_0x56f928(0x1cf)];for(let _0x42312f=0x0,_0x19ffa0=_0x178da3[_0x56f928(0x1ad)];_0x42312f<_0x19ffa0;_0x42312f+=0x3){scratchCatesian3['x']=_0x178da3[_0x42312f],scratchCatesian3['y']=_0x178da3[_0x42312f+0x1],scratchCatesian3['z']=_0x178da3[_0x42312f+0x2],Cesium[_0x56f928(0x1a9)][_0x56f928(0x1bd)](_0x156909,scratchCatesian3,scratchCatesian3),_0x178da3[_0x42312f]=scratchCatesian3['x'],_0x178da3[_0x42312f+0x1]=scratchCatesian3['y'],_0x178da3[_0x42312f+0x2]=scratchCatesian3['z'];}this[_0x56f928(0x1d0)]=_0x5b54fe;},RasterRegion[_0x583857(0x1b8)][_0x583857(0x1cd)]=function(_0x385ac0){const _0x563dd9=_0x583857;let _0x11a6ec=_0x385ac0[_0x563dd9(0x1ae)][_0x563dd9(0x1a6)],_0x40e577=_0x11a6ec[_0x563dd9(0x1cf)],_0x345b81=this['bounds'];for(let _0x105282=0x0,_0x17bf79=_0x40e577[_0x563dd9(0x1ad)];_0x105282<_0x17bf79;_0x105282+=0x3){let _0x57e3e8=_0x40e577[_0x105282],_0x4dee4e=_0x40e577[_0x105282+0x1];_0x345b81['x']=Math[_0x563dd9(0x1b5)](_0x57e3e8,_0x345b81['x']),_0x345b81['y']=Math['min'](_0x4dee4e,_0x345b81['y']),_0x345b81['z']=Math[_0x563dd9(0x1b3)](_0x57e3e8,_0x345b81['z']),_0x345b81['w']=Math[_0x563dd9(0x1b3)](_0x4dee4e,_0x345b81['w']);}},RasterRegion['prototype'][_0x583857(0x1b1)]=function(_0x55d246,_0x369d28){const _0x392c15=_0x583857;if(this['command'])return;let _0x3ca9a4=_0x369d28[_0x392c15(0x1d1)](0x0),_0x2ab786=new Cesium['DrawCommand']({'primitiveType':Cesium['PrimitiveType']['TRIANGLES']}),_0x64da0f={'position':0x0};_0x2ab786[_0x392c15(0x1a5)]=Cesium[_0x392c15(0x1ce)][_0x392c15(0x1ba)]({'context':_0x55d246,'geometry':this[_0x392c15(0x1d0)],'attributeLocations':_0x64da0f,'bufferUsage':Cesium['BufferUsage']['STATIC_DRAW'],'interleave':!![]});let _0x38e9b3=new Cesium[(_0x392c15(0x1b0))]({'sources':[_0xef443]}),_0x3c3798=new Cesium[(_0x392c15(0x1b0))]({'sources':[_0x11c00b]});_0x38e9b3['defines'][_0x392c15(0x1cc)](_0x392c15(0x1d3)),_0x3c3798[_0x392c15(0x1c3)][_0x392c15(0x1cc)](_0x392c15(0x1d3)),_0x2ab786['shaderProgram']=Cesium[_0x392c15(0x1c6)]['fromCache']({'context':_0x55d246,'vertexShaderSource':_0x38e9b3,'fragmentShaderSource':_0x3c3798,'attributeLocations':_0x64da0f}),_0x2ab786[_0x392c15(0x1c9)]=_0x369d28,_0x2ab786[_0x392c15(0x1d2)]=Cesium[_0x392c15(0x1c5)]['fromCache']({'viewport':new Cesium[(_0x392c15(0x1ca))](0x0,0x0,_0x3ca9a4['width'],_0x3ca9a4[_0x392c15(0x1c0)])}),this[_0x392c15(0x1ac)]=_0x2ab786;},RasterRegion['prototype'][_0x583857(0x1a7)]=function(){const _0x20dbb2=_0x583857;this[_0x20dbb2(0x1ab)]&&(this['_command']['vertexArray']=this[_0x20dbb2(0x1ab)]['vertexArray']&&!this[_0x20dbb2(0x1ab)][_0x20dbb2(0x1a5)][_0x20dbb2(0x1b4)]()&&this[_0x20dbb2(0x1ab)][_0x20dbb2(0x1a5)][_0x20dbb2(0x1a7)](),this[_0x20dbb2(0x1ab)][_0x20dbb2(0x1b9)]=this[_0x20dbb2(0x1ab)][_0x20dbb2(0x1b9)]&&!this[_0x20dbb2(0x1ab)][_0x20dbb2(0x1b9)][_0x20dbb2(0x1b4)]()&&this[_0x20dbb2(0x1ab)]['shaderProgram']['destroy'](),this['_command']=null),this[_0x20dbb2(0x1c4)]=this['colorBuffer']&&this[_0x20dbb2(0x1c4)][_0x20dbb2(0x1a7)](),this[_0x20dbb2(0x1bc)]=this['heightBuffer']&&this['heightBuffer']['destroy'](),this[_0x20dbb2(0x1d0)]=null,this['bounds']=null;};function _0x1e14(_0x2a7983,_0x2b562f){_0x2a7983=_0x2a7983-0x1a5;let _0x5b687c=_0x5b68[_0x2a7983];return _0x5b687c;}export default RasterRegion;