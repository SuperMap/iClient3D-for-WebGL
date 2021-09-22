(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.SuperMap3D = Cesium));
}(this, (function (exports) { 'use strict';

    var _0x41bd=['281VqMpAA','150362jOGNIY','1083940amwWWs','2kIsFNI','DeveloperError','390821hziKbH','483305MRSOdj','1WzEXID','3SAftUZ','1885xcyJKl','throwInstantiationError','191227hBowqW','prototype','1SKSobL','160563uzicWJ'];var _0x29078a=_0x40fb;(function(_0x5937a8,_0x2f66a2){var _0x35aa4c=_0x40fb;while(!![]){try{var _0x1325c5=parseInt(_0x35aa4c(0x1be))*-parseInt(_0x35aa4c(0x1c6))+parseInt(_0x35aa4c(0x1bf))*-parseInt(_0x35aa4c(0x1c5))+-parseInt(_0x35aa4c(0x1ca))*parseInt(_0x35aa4c(0x1bd))+-parseInt(_0x35aa4c(0x1c1))+parseInt(_0x35aa4c(0x1c4))+-parseInt(_0x35aa4c(0x1c3))*parseInt(_0x35aa4c(0x1cb))+parseInt(_0x35aa4c(0x1c7))*parseInt(_0x35aa4c(0x1c8));if(_0x1325c5===_0x2f66a2)break;else _0x5937a8['push'](_0x5937a8['shift']());}catch(_0x5d86e7){_0x5937a8['push'](_0x5937a8['shift']());}}}(_0x41bd,0x44ecf));function _0x40fb(_0x5b1b57,_0x33221c){_0x5b1b57=_0x5b1b57-0x1bd;var _0x41bd0a=_0x41bd[_0x5b1b57];return _0x41bd0a;}function RenderTarget(){}RenderTarget[_0x29078a(0x1c2)]['begin']=Cesium[_0x29078a(0x1c9)][_0x29078a(0x1c0)],RenderTarget[_0x29078a(0x1c2)]['end']=Cesium[_0x29078a(0x1c9)]['throwInstantiationError'];

    const _0xd9e7=['destroyObject','destroy','constructor','PixelDatatype','clearCommand','framebuffer','execute','endFunc','CLAMP_TO_EDGE','prototype','39GneolY','view','fromCache','PixelFormat','pick','isUpdate','equals','width','passState','NEAREST','height','3eUDokM','615636ORrVQF','viewport','environmentVisible','1AaSsoD','drawingBufferWidth','SceneFramebuffer','begin','createViewportQuadCommand','beginFunc','depthTextureToCopy','TextureMinificationFilter','isDestroyed','getFramebuffer','depthTexture','depthStencilTexture','end','copyDepthCommand','passes','287407fRRgdv','96488iqAKho','PassState','RenderState','_updateFramebuffer','UNSIGNED_BYTE','1248277DdBQGG','context','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20u_depthTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20v_textureCoordinates;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20czm_packDepth(texture2D(u_depthTexture,\x20v_textureCoordinates).r);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20','35179bYINOY','Color','Framebuffer','_updateCopyCommand','_hdr','sceneFramebuffer','TextureWrap','5594FwTdSY','vertexArray','126uGAfeE','114052ocEMcq','frameState','BoundingRectangle'];const _0xedd45b=_0x513b;(function(_0x5c3cdb,_0x3d2877){const _0x4d7380=_0x513b;while(!![]){try{const _0x4f896e=-parseInt(_0x4d7380(0x93))+-parseInt(_0x4d7380(0x94))*parseInt(_0x4d7380(0xbe))+-parseInt(_0x4d7380(0x9c))*-parseInt(_0x4d7380(0xb3))+parseInt(_0x4d7380(0xbf))+parseInt(_0x4d7380(0xc2))*-parseInt(_0x4d7380(0x99))+parseInt(_0x4d7380(0xa3))*parseInt(_0x4d7380(0xa5))+-parseInt(_0x4d7380(0xa6));if(_0x4f896e===_0x3d2877)break;else _0x5c3cdb['push'](_0x5c3cdb['shift']());}catch(_0x45716f){_0x5c3cdb['push'](_0x5c3cdb['shift']());}}}(_0xd9e7,0xb7e6d));function DepthFramebuffer(_0x374cb6){const _0x4397e3=_0x513b;this[_0x4397e3(0x9a)]=_0x374cb6,this['sceneFramebuffer']=new Cesium[(_0x4397e3(0xc4))](),this['passState']=new Cesium[(_0x4397e3(0x95))](_0x374cb6),this['passState'][_0x4397e3(0xc0)]=new Cesium[(_0x4397e3(0xa8))](),this[_0x4397e3(0xc1)]={'isSunVisible':![],'isMoonVisible':![],'isSkyAtmosphereVisible':![],'isSkyBoxVisible':![],'isGlobalVisible':!![],'isObjectVisible':!![]},this[_0x4397e3(0xba)]=0x0,this[_0x4397e3(0xbd)]=0x0,this['copyDepthCommand']=undefined,this[_0x4397e3(0xad)]=undefined,this[_0x4397e3(0xae)]=undefined,this[_0x4397e3(0x8a)]=undefined,this['rs']=undefined,this['depthTexture']=undefined,this[_0x4397e3(0xae)]=undefined,this[_0x4397e3(0xb8)]=![];}function _0x513b(_0x46557b,_0x1c15ca){_0x46557b=_0x46557b-0x87;let _0xd9e790=_0xd9e7[_0x46557b];return _0xd9e790;}DepthFramebuffer[_0xedd45b(0xb2)]=Object['create'](RenderTarget[_0xedd45b(0xb2)]),DepthFramebuffer[_0xedd45b(0xb2)][_0xedd45b(0xab)]=RenderTarget,DepthFramebuffer[_0xedd45b(0xb2)][_0xedd45b(0x97)]=function(_0x238fea){const _0x1888cd=_0xedd45b;let _0x5b3ce6=_0x238fea[_0x1888cd(0xc3)],_0x282488=_0x238fea['drawingBufferHeight'];(!this['framebuffer']||this['width']!==_0x5b3ce6||this[_0x1888cd(0xbd)]!==_0x282488)&&(this['width']=_0x5b3ce6,this['height']=_0x282488,this[_0x1888cd(0x8e)]=this[_0x1888cd(0x8e)]&&!this[_0x1888cd(0x8e)]['isDestroyed']()&&this['depthTexture'][_0x1888cd(0xaa)](),this[_0x1888cd(0x8e)]=new Cesium['Texture']({'context':_0x238fea,'width':_0x5b3ce6,'height':_0x282488,'pixelFormat':Cesium[_0x1888cd(0xb6)]['RGBA'],'pixelDatatype':Cesium[_0x1888cd(0xac)][_0x1888cd(0x98)],'sampler':new Cesium['Sampler']({'wrapS':Cesium[_0x1888cd(0xa2)][_0x1888cd(0xb1)],'wrapT':Cesium[_0x1888cd(0xa2)][_0x1888cd(0xb1)],'minificationFilter':Cesium[_0x1888cd(0x8b)][_0x1888cd(0xbc)],'magnificationFilter':Cesium['TextureMagnificationFilter'][_0x1888cd(0xbc)]})}),this[_0x1888cd(0xae)]=this[_0x1888cd(0xae)]&&!this[_0x1888cd(0xae)][_0x1888cd(0x8c)]()&&this[_0x1888cd(0xae)][_0x1888cd(0xaa)](),this[_0x1888cd(0xae)]=new Cesium[(_0x1888cd(0x9e))]({'context':_0x238fea,'colorTextures':[this[_0x1888cd(0x8e)]],'destroyAttachments':![]}));},DepthFramebuffer[_0xedd45b(0xb2)][_0xedd45b(0x9f)]=function(_0x2a89ff){const _0x3816b3=_0xedd45b;(!this['rs']||!Cesium['BoundingRectangle'][_0x3816b3(0xb9)](this[_0x3816b3(0xbb)][_0x3816b3(0xc0)],this['rs'][_0x3816b3(0xc0)]))&&(this['rs']=Cesium[_0x3816b3(0x96)][_0x3816b3(0xb5)]({'viewport':this[_0x3816b3(0xbb)][_0x3816b3(0xc0)]}));if(!this[_0x3816b3(0x91)]){let _0x566217=_0x3816b3(0x9b);this[_0x3816b3(0x91)]=_0x2a89ff[_0x3816b3(0x88)](_0x566217,{'uniformMap':{'u_depthTexture':()=>{const _0x24522f=_0x3816b3;return this[_0x24522f(0x8a)];}},'owner':this});}!this[_0x3816b3(0xad)]&&(this['clearCommand']=new Cesium['ClearCommand']({'color':new Cesium[(_0x3816b3(0x9d))](0x0,0x0,0x0,0x0),'stencil':0x0,'depth':0x1,'owner':this})),this['copyDepthCommand']['renderState']=this['rs'],this[_0x3816b3(0x91)][_0x3816b3(0xae)]=this[_0x3816b3(0xae)],this[_0x3816b3(0xad)]['framebuffer']=this[_0x3816b3(0xae)];},DepthFramebuffer['prototype'][_0xedd45b(0x87)]=function(_0x44223e){const _0x40b5fc=_0xedd45b;this[_0x40b5fc(0xa1)]['update'](_0x44223e[_0x40b5fc(0x9a)],_0x44223e[_0x40b5fc(0xb4)]['viewport'],_0x44223e[_0x40b5fc(0xa0)]),this[_0x40b5fc(0xbb)][_0x40b5fc(0xae)]=this[_0x40b5fc(0xa1)][_0x40b5fc(0x8d)](),Cesium['BoundingRectangle']['clone'](_0x44223e[_0x40b5fc(0xb4)]['viewport'],this[_0x40b5fc(0xbb)]['viewport']);let _0x1a83d5=_0x44223e[_0x40b5fc(0x9a)];return this['_updateFramebuffer'](_0x1a83d5),this[_0x40b5fc(0x9f)](_0x1a83d5),this['clearCommand'][_0x40b5fc(0xaf)](_0x1a83d5,this[_0x40b5fc(0xbb)]),_0x44223e['frameState']['passes']['depth']=!![],this['beginFunc']&&this[_0x40b5fc(0x89)](_0x44223e[_0x40b5fc(0xa7)]),this[_0x40b5fc(0xbb)];},DepthFramebuffer[_0xedd45b(0xb2)][_0xedd45b(0x90)]=function(_0x3bcc90,_0x3edbfd){const _0x2cfb76=_0xedd45b;_0x3bcc90[_0x2cfb76(0x92)][_0x2cfb76(0xb7)]=![],_0x3bcc90[_0x2cfb76(0x92)]['depth']=![],this[_0x2cfb76(0xb0)]&&this['endFunc'](_0x3bcc90),this[_0x2cfb76(0x8a)]=_0x3edbfd[_0x2cfb76(0xae)][_0x2cfb76(0x8f)],this['copyDepthCommand']&&this[_0x2cfb76(0x91)][_0x2cfb76(0xaf)](_0x3bcc90['context'],_0x3edbfd);},DepthFramebuffer[_0xedd45b(0xb2)]['isDestroyed']=function(){return ![];},DepthFramebuffer[_0xedd45b(0xb2)]['destroy']=function(){const _0x2ebd69=_0xedd45b;this[_0x2ebd69(0x8e)]=this['depthTexture']&&!this[_0x2ebd69(0x8e)]['isDestroyed']()&&this['depthTexture'][_0x2ebd69(0xaa)](),this[_0x2ebd69(0xae)]=this[_0x2ebd69(0xae)]&&!this[_0x2ebd69(0xae)]['isDestroyed']()&&this[_0x2ebd69(0xae)][_0x2ebd69(0xaa)]();if(this[_0x2ebd69(0x91)]){let _0x4d2d1a=this['copyDepthCommand']['sp'];_0x4d2d1a=_0x4d2d1a&&!_0x4d2d1a[_0x2ebd69(0x8c)]()&&_0x4d2d1a[_0x2ebd69(0xaa)]();let _0x27e9b8=this[_0x2ebd69(0x91)][_0x2ebd69(0xa4)];_0x27e9b8=_0x27e9b8&&!_0x27e9b8[_0x2ebd69(0x8c)]()&&_0x27e9b8[_0x2ebd69(0xaa)](),this[_0x2ebd69(0x91)]=undefined;}return this['clearCommand']=undefined,this[_0x2ebd69(0x8a)]=undefined,this['isUpdate']=![],Cesium[_0x2ebd69(0xa9)](this);};

    var _0x175d=['2407GtTmUh','71rvJXBW','3121ZZYZHR','260876dfMUjc','216173aSZSCM','149458CNFAMI','\x0a\x20\x20\x20\x20attribute\x20vec4\x20aPosition;\x0a\x20\x20\x20\x20varying\x20vec4\x20vClipPos;\x0a\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vClipPos\x20=\x20czm_modelViewProjection\x20*\x20vec4(aPosition.xyz,\x201.0);\x0a\x09\x20\x20\x20\x20gl_Position\x20=\x20vClipPos;\x0a\x20\x20\x20\x20}\x0a','4tjgsQf','1xRiKva','2jKzket','314856YvYjAO','193DeqBgl','1382251qeWdBr'];var _0x232d9a=_0x78a5;function _0x78a5(_0x1d1a8a,_0x48559c){_0x1d1a8a=_0x1d1a8a-0x173;var _0x175d0a=_0x175d[_0x1d1a8a];return _0x175d0a;}(function(_0x206947,_0x23e4c0){var _0x469460=_0x78a5;while(!![]){try{var _0x2c8b8c=parseInt(_0x469460(0x175))*parseInt(_0x469460(0x176))+parseInt(_0x469460(0x17d))*-parseInt(_0x469460(0x17e))+parseInt(_0x469460(0x178))+parseInt(_0x469460(0x177))+-parseInt(_0x469460(0x17f))*parseInt(_0x469460(0x174))+-parseInt(_0x469460(0x179))*parseInt(_0x469460(0x17b))+-parseInt(_0x469460(0x173))*-parseInt(_0x469460(0x17c));if(_0x2c8b8c===_0x23e4c0)break;else _0x206947['push'](_0x206947['shift']());}catch(_0x53b862){_0x206947['push'](_0x206947['shift']());}}}(_0x175d,0x5eebc));var _0x4df7a3 = _0x232d9a(0x17a);

    var _0x1327=['2482208JhQfHo','5233lpEShC','1BBUOtL','1000953cAHYIO','1zYTnYi','684722VmnjtF','\x0a#ifdef\x20GL_EXT_frag_depth\x0a#extension\x20GL_EXT_frag_depth\x20:\x20enable\x0a#endif\x0a#ifdef\x20GL_OES_standard_derivatives\x0a#extension\x20GL_OES_standard_derivatives\x20:\x20enable\x0a#endif\x0a\x0auniform\x20vec4\x20uVisibleAreaColor;\x0auniform\x20vec4\x20uHiddenAreaColor;\x0auniform\x20vec2\x20uTextureSize;\x0auniform\x20sampler2D\x20uGlobalDepthTexture;\x0auniform\x20sampler2D\x20uTexture;\x0auniform\x20mat4\x20uRenderTextureMatrix;\x0avarying\x20vec4\x20vClipPos;\x0a\x0afloat\x20getDepth(in\x20vec4\x20depth)\x0a{\x0a\x20\x20\x20\x20float\x20z_window\x20=\x20czm_unpackDepth(depth);\x0a\x20\x20\x20\x20return\x20z_window;\x0a}\x0a\x0afloat\x20getDepthFromShadowMap(in\x20sampler2D\x20viewShedTexture,\x20in\x20vec4\x20texCoord)\x0a{\x0a\x09vec2\x20tCoord;\x0a\x20\x20\x20\x20tCoord\x20=\x20texCoord.xy\x20*\x20uTextureSize\x20-\x200.5;\x0a\x09float\x20x0\x20=\x20floor(tCoord.x);\x0a\x09float\x20x1\x20=\x20ceil(tCoord.x);\x0a\x09float\x20y0\x20=\x20floor(tCoord.y);\x0a\x09float\x20y1\x20=\x20ceil(tCoord.y);\x0a\x09vec2\x20invTexSize\x20=\x201.0\x20/\x20uTextureSize;\x0a\x09vec2\x20t00\x20=\x20vec2((x0\x20+\x200.5)\x20*\x20invTexSize.x,\x20(y0\x20+\x200.5)\x20*\x20invTexSize.y);\x0a\x09vec2\x20t10\x20=\x20vec2((x1\x20+\x200.5)\x20*\x20invTexSize.x,\x20(y0\x20+\x200.5)\x20*\x20invTexSize.y);\x0a\x09vec2\x20t01\x20=\x20vec2((x0\x20+\x200.5)\x20*\x20invTexSize.x,\x20(y1\x20+\x200.5)\x20*\x20invTexSize.y);\x0a\x09vec2\x20t11\x20=\x20vec2((x1\x20+\x200.5)\x20*\x20invTexSize.x,\x20(y1\x20+\x200.5)\x20*\x20invTexSize.y);\x0a\x09float\x20z00\x20=\x20getDepth(texture2D(uTexture,\x20t00));\x0a\x09float\x20z10\x20=\x20getDepth(texture2D(uTexture,\x20t01));\x0a\x09float\x20z01\x20=\x20getDepth(texture2D(uTexture,\x20t10));\x0a\x09float\x20z11\x20=\x20getDepth(texture2D(uTexture,\x20t11));\x0a\x09float\x20depth\x20=\x20max(max(z00,\x20z01),\x20max(z10,\x20z11));\x0a\x09return\x20depth;\x0a}\x0a\x0avoid\x20main()\x0a{\x0a\x09vec4\x20depthTexCoord\x20=\x20vClipPos\x20/\x20vClipPos.w;\x0a\x09depthTexCoord.xy\x20=\x20depthTexCoord.xy\x20*\x200.5\x20+\x200.5;\x0a\x09float\x20sceneDepth\x20=\x20czm_unpackDepth(texture2D(uGlobalDepthTexture,\x20depthTexCoord.xy));\x0a\x09sceneDepth\x20=\x20sceneDepth\x20*\x202.0\x20-\x201.0;\x0a\x09vec4\x20pos\x20=\x20vClipPos;\x0a\x09pos.z\x20=\x20sceneDepth\x20*\x20pos.w;\x0a\x09vec4\x20renderTextureCoord\x20=\x20uRenderTextureMatrix\x20*\x20pos;\x0a\x09vec4\x20texCoord\x20=\x20renderTextureCoord\x20/\x20renderTextureCoord.w;\x0a\x09texCoord.xyz\x20=\x20texCoord.xyz\x20*\x200.5\x20+\x200.5;\x0a\x09float\x20depth\x20=\x20getDepthFromShadowMap(uTexture,\x20texCoord);\x0a\x09float\x20dxc\x20=\x20abs(dFdx(texCoord.z));\x0a\x09float\x20dyc\x20=\x20abs(dFdy(texCoord.z));\x0a\x09float\x20dF\x20=\x20max(dxc,\x20dyc)\x20*\x203.0;\x0a\x09float\x20bias\x20=\x201.0e-6\x20+\x20dF;\x0a\x09float\x20c\x20=\x20float(depth\x20+\x20bias\x20<\x20texCoord.z);\x0a\x09vec4\x20finalColor\x20=\x20mix(uVisibleAreaColor,\x20uHiddenAreaColor,\x20vec4(c));\x0a\x09if(finalColor.a\x20<\x200.1)\x0a\x09{\x0a\x09\x09discard;\x0a\x09}\x0a\x09gl_FragColor\x20=\x20czm_gammaCorrect(finalColor);\x0a}\x0a','1167823iOnarx','1147619FKhFgE','3iQQuFT','57ZVBAMq','148186eWOUOn'];var _0x3c24aa=_0xb1e6;(function(_0x13ac0f,_0x911d62){var _0x3944c2=_0xb1e6;while(!![]){try{var _0x3ddcd6=parseInt(_0x3944c2(0x1c9))+-parseInt(_0x3944c2(0x1d1))*-parseInt(_0x3944c2(0x1ce))+-parseInt(_0x3944c2(0x1cc))+parseInt(_0x3944c2(0x1cf))*parseInt(_0x3944c2(0x1cd))+-parseInt(_0x3944c2(0x1c8))*parseInt(_0x3944c2(0x1cb))+-parseInt(_0x3944c2(0x1c7))*parseInt(_0x3944c2(0x1c6))+parseInt(_0x3944c2(0x1d0));if(_0x3ddcd6===_0x911d62)break;else _0x13ac0f['push'](_0x13ac0f['shift']());}catch(_0x2d0a7e){_0x13ac0f['push'](_0x13ac0f['shift']());}}}(_0x1327,0x90dde));function _0xb1e6(_0x200041,_0x4030c9){_0x200041=_0x200041-0x1c6;var _0x13276f=_0x1327[_0x200041];return _0x13276f;}var _0x313bb2 = _0x3c24aa(0x1ca);

    var _0x5dee=['11297Honhrc','178511bRpOUD','27leQFPu','733274qZCSxJ','186109fFAUvR','34TPUJMg','5914WjHtqK','2nRCEBC','464147roZJaR','1nlEiKP','attribute\x20vec4\x20aPosition;\x0avarying\x20vec4\x20vClipVertex;\x0avarying\x20float\x20fWindowZ;\x0avec4\x20depthClampFarPlane(vec4\x20clipPos)\x0a{\x0a\x09fWindowZ\x20=\x20(0.5\x20*\x20(clipPos.z\x20/\x20clipPos.w)\x20+\x200.5)\x20*\x20clipPos.w;\x0a\x09clipPos.z\x20=\x20min(clipPos.z,\x20clipPos.w);\x0a\x09return\x20clipPos;\x0a}\x0avoid\x20main()\x0a{\x0a\x20\x20\x20vec4\x20pos\x20=\x20czm_modelViewProjection\x20*\x20vec4(aPosition.xyz,\x201.0);\x0a\x20\x20\x20gl_Position\x20=\x20depthClampFarPlane(pos);\x0a}\x0a','290011bnqbnB'];var _0x4ece3f=_0x2bfc;function _0x2bfc(_0x4e5082,_0xbc2321){_0x4e5082=_0x4e5082-0x7e;var _0x5dee3f=_0x5dee[_0x4e5082];return _0x5dee3f;}(function(_0x466cf0,_0x228dc8){var _0x49d1de=_0x2bfc;while(!![]){try{var _0x440088=-parseInt(_0x49d1de(0x7f))*-parseInt(_0x49d1de(0x7e))+-parseInt(_0x49d1de(0x89))+-parseInt(_0x49d1de(0x81))*parseInt(_0x49d1de(0x82))+-parseInt(_0x49d1de(0x84))+-parseInt(_0x49d1de(0x86))+parseInt(_0x49d1de(0x85))*-parseInt(_0x49d1de(0x87))+-parseInt(_0x49d1de(0x80))*-parseInt(_0x49d1de(0x88));if(_0x440088===_0x228dc8)break;else _0x466cf0['push'](_0x466cf0['shift']());}catch(_0x6db3f9){_0x466cf0['push'](_0x466cf0['shift']());}}}(_0x5dee,0x3b873));var _0x53fc49 = _0x4ece3f(0x83);

    var _0x2c42=['\x0a#ifdef\x20GL_EXT_frag_depth\x0a#extension\x20GL_EXT_frag_depth\x20:\x20enable\x0a#endif\x0auniform\x20vec4\x20uColor;\x0avarying\x20float\x20fWindowZ;\x0avoid\x20main()\x0a{\x0a#ifdef\x20GL_EXT_frag_depth\x0a\x09gl_FragDepthEXT\x20=\x20min(fWindowZ\x20*\x20gl_FragCoord.w,\x201.0);\x0a#endif\x0a\x20\x20\x20gl_FragColor\x20=\x20uColor;\x0a}','133GCMWlG','19715DMZxdr','662hSnxqB','1ZSdoRg','32098ILLOSc','7XdXqRL','14158ZuXOVG','9334HijQsc','1DgvFbV','153898nmBfDl','16XvRjwt','574741UXyUHk'];var _0x25d77f=_0x3658;(function(_0x3dbbe7,_0x406e7f){var _0x232c8b=_0x3658;while(!![]){try{var _0x335a66=parseInt(_0x232c8b(0x12d))+-parseInt(_0x232c8b(0x12f))*parseInt(_0x232c8b(0x129))+parseInt(_0x232c8b(0x12a))*-parseInt(_0x232c8b(0x12e))+parseInt(_0x232c8b(0x126))*parseInt(_0x232c8b(0x128))+-parseInt(_0x232c8b(0x12c))*parseInt(_0x232c8b(0x130))+parseInt(_0x232c8b(0x127))*-parseInt(_0x232c8b(0x12b))+parseInt(_0x232c8b(0x131));if(_0x335a66===_0x406e7f)break;else _0x3dbbe7['push'](_0x3dbbe7['shift']());}catch(_0x1c17e4){_0x3dbbe7['push'](_0x3dbbe7['shift']());}}}(_0x2c42,0x1daf8));function _0x3658(_0x3ad05e,_0x4eb53a){_0x3ad05e=_0x3ad05e-0x126;var _0x2c42d8=_0x2c42[_0x3ad05e];return _0x2c42d8;}var _0x3e61a4 = _0x25d77f(0x132);

    const _0x5704=['UNIT_Y','DECREMENT_WRAP','vertexArray','inverse','StencilFunction','170539qsdbKN','width','_context','magnitude','depthTexture','Matrix4','build','DrawCommand','_destroyCommand','DepthFunction','boundingSphere','4LyqOGY','length','17SAqZTw','viewProjectionMatrix','_viewPosition','588881dcYBox','endFunc','renderState','max','normalize','projectionMatrix','tan','dot','createIndexBuffer','_hintLineColor','DEGREES_PER_RADIAN','sin','Cartesian3','useLogDepth','frustum','NOT_EQUAL','update','_visibleAreaColor','near','segmentCount','_pitch','invViewMatrix','fov','scene','Math','RenderState','BoundingSphere','BufferUsage','_setRenderTarget','KEEP','FLOAT','ComponentDatatype','36891cDweRZ','_verticalFov','_createCommand','pick','context','shallowClone','_horizontalFov','Cartesian2','isUpdate','aspectRatio','stencilCommand','createTypedArray','Color','fbo','position','isDestroyed','INCREMENT_WRAP','1743179mDZFbJ','_global','uniformMap','push','shaderProgram','beginFunc','pitch','distance','viewMatrix','multiply','13721lHKtpB','UNIT_Z','clone','lineCommand','add','fromCache','transform','VertexArray','fromDegreesArrayHeights','subtract','Pass','_hiddenAreaColor','3qqHcSL','ShaderSource','StencilOperation','direction','view','_distance','RADIANS_PER_DEGREE','187531wVwnyM','_renderTargets','STATIC_DRAW','dirty','globalName','98xmlZPc','far','1TaoJjn','farToNearRatio','GREATER','passes','colorCommand','roll','destroy','_projection','OPAQUE','1shdaet','ShaderProgram','1HXFsTG','renderTextureMatrix','clear','heading','setView','_updateCamera','commandList','inverseViewMatrix','1183713wuQdDh','globalDepthBuffer','cross','PrimitiveType','IndexDatatype','center','depth','LINES','primitives','BlendingState','Buffer','ALPHA_BLEND','UNSIGNED_SHORT','prototype','name','cos','ALWAYS','radius','cameraDepthBuffer'];const _0x396531=_0x57af;(function(_0x397201,_0x61aecf){const _0x1727df=_0x57af;while(!![]){try{const _0x29bd63=-parseInt(_0x1727df(0x17c))*parseInt(_0x1727df(0x158))+-parseInt(_0x1727df(0x175))*-parseInt(_0x1727df(0x16e))+parseInt(_0x1727df(0x147))*parseInt(_0x1727df(0x1b4))+parseInt(_0x1727df(0x162))*parseInt(_0x1727df(0x17a))+-parseInt(_0x1727df(0x1a7))*-parseInt(_0x1727df(0x1b2))+parseInt(_0x1727df(0x187))*parseInt(_0x1727df(0x1b7))+parseInt(_0x1727df(0x185))*-parseInt(_0x1727df(0x18f));if(_0x29bd63===_0x61aecf)break;else _0x397201['push'](_0x397201['shift']());}catch(_0x37fd89){_0x397201['push'](_0x397201['shift']());}}}(_0x5704,0xd67cf));function _0x57af(_0x56c08d,_0x47c211){_0x56c08d=_0x56c08d-0x142;let _0x570461=_0x5704[_0x56c08d];return _0x570461;}function ViewShed3D(_0x1d07ab){const _0x58bb56=_0x57af;this[_0x58bb56(0x1ce)]=_0x1d07ab,this['cameraDepthBuffer']=new DepthFramebuffer(_0x1d07ab[_0x58bb56(0x1a9)]),this['globalDepthBuffer']=new DepthFramebuffer(_0x1d07ab['_context']),this[_0x58bb56(0x19d)]='',this[_0x58bb56(0x179)]='',this[_0x58bb56(0x1ca)]=0x14,this[_0x58bb56(0x1b6)]=[0x0,0x0,0x0],this['_direction']=0x0,this['_pitch']=0x0,this[_0x58bb56(0x14d)]=0x5a,this['_verticalFov']=0x3c,this['_distance']=0x64,this['_visibleAreaColor']=new Cesium[(_0x58bb56(0x153))](0x0,0x1,0x0,0.5),this[_0x58bb56(0x16d)]=new Cesium['Color'](0x1,0x0,0x0,0.5),this[_0x58bb56(0x1c0)]=new Cesium[(_0x58bb56(0x153))](0x1,0x1,0x1,0x1),this[_0x58bb56(0x1b1)]=new Cesium[(_0x58bb56(0x1d1))](),this[_0x58bb56(0x1b5)]=new Cesium[(_0x58bb56(0x1ac))](),this[_0x58bb56(0x1cc)]=new Cesium[(_0x58bb56(0x1ac))](),this['renderTextureMatrix']=new Cesium['Matrix4'](),this[_0x58bb56(0x180)]=undefined,this['stencilCommand']=undefined,this[_0x58bb56(0x165)]=undefined,this[_0x58bb56(0x178)]=![];}Object['defineProperties'](ViewShed3D['prototype'],{'viewPosition':{'get':function(){return this['_viewPosition'];},'set':function(_0x5f21a4){const _0x5bf017=_0x57af;this[_0x5bf017(0x1b6)]=_0x5f21a4;}},'direction':{'get':function(){return this['_direction'];},'set':function(_0x291957){const _0x16fa9b=_0x57af;this['_direction']=_0x291957,this[_0x16fa9b(0x178)]=!![];}},'pitch':{'get':function(){return this['_pitch'];},'set':function(_0x3c1d4c){const _0x4c6e97=_0x57af;this[_0x4c6e97(0x1cb)]=_0x3c1d4c,this[_0x4c6e97(0x178)]=!![];}},'horizontalFov':{'get':function(){const _0x2423c4=_0x57af;return this[_0x2423c4(0x14d)];},'set':function(_0x561ef4){const _0x218e02=_0x57af;this[_0x218e02(0x14d)]=_0x561ef4,this['dirty']=!![];}},'verticalFov':{'get':function(){return this['_verticalFov'];},'set':function(_0x46d551){const _0x36b82a=_0x57af;this[_0x36b82a(0x148)]=_0x46d551,this[_0x36b82a(0x178)]=!![];}},'distance':{'get':function(){const _0x27a48e=_0x57af;return this[_0x27a48e(0x173)];},'set':function(_0x3201fa){const _0x517134=_0x57af;this[_0x517134(0x173)]=Math[_0x517134(0x1ba)](_0x3201fa,0x0),this[_0x517134(0x178)]=!![];}}}),ViewShed3D[_0x396531(0x19c)][_0x396531(0x18c)]=function(_0x1faf52){const _0x5c6696=_0x396531;let _0x45fd17=_0x1faf52['camera'],_0x3a041d=this[_0x5c6696(0x14d)]*Cesium[_0x5c6696(0x1cf)][_0x5c6696(0x174)],_0x4268e2=this[_0x5c6696(0x148)]*Cesium['Math']['RADIANS_PER_DEGREE'],_0x2a6333=Math[_0x5c6696(0x1bd)](_0x3a041d*0.5),_0x5bb7a5=Math[_0x5c6696(0x1bd)](_0x4268e2*0.5),_0x2781d4=_0x2a6333/_0x5bb7a5,_0x200940=this[_0x5c6696(0x173)]*0.001,_0x2f32eb=Math[_0x5c6696(0x1ba)](this[_0x5c6696(0x173)],0xa),_0x4eebd9=this['_direction']*Cesium[_0x5c6696(0x1cf)]['RADIANS_PER_DEGREE'],_0x326eee=this[_0x5c6696(0x1cb)]*Cesium['Math']['RADIANS_PER_DEGREE'],_0x35b4d6=Cesium[_0x5c6696(0x1c3)]['fromDegreesArrayHeights'](this['_viewPosition'])[0x0],_0x2d374f=_0x45fd17[_0x5c6696(0x1c5)][_0x5c6696(0x150)],_0x21904b=_0x45fd17[_0x5c6696(0x1c5)][_0x5c6696(0x1cd)],_0x239670=_0x45fd17['frustum'][_0x5c6696(0x1c9)],_0x44fe3f=_0x45fd17[_0x5c6696(0x1c5)]['far'],_0x54f4dd=new Cesium['Cartesian3'](),_0xc9f05a=_0x45fd17['heading'],_0xe947dd=_0x45fd17[_0x5c6696(0x15e)];Cesium[_0x5c6696(0x1c3)][_0x5c6696(0x164)](_0x45fd17[_0x5c6696(0x155)],_0x54f4dd);let _0x3b21ad=_0x1faf52[_0x5c6696(0x1c4)],_0x4e14c6=this['scene']['farToNearRatio'];this['cameraDepthBuffer'][_0x5c6696(0x14f)]=!![],this[_0x5c6696(0x1a1)][_0x5c6696(0x15d)]=_0x47c771=>{const _0x112052=_0x5c6696;_0x47c771['useLogDepth']=![],_0x2d374f=_0x45fd17[_0x112052(0x1c5)][_0x112052(0x150)],_0x21904b=_0x45fd17[_0x112052(0x1c5)][_0x112052(0x1cd)],_0x239670=_0x45fd17[_0x112052(0x1c5)][_0x112052(0x1c9)],_0x44fe3f=_0x45fd17[_0x112052(0x1c5)][_0x112052(0x17b)],_0xc9f05a=_0x45fd17[_0x112052(0x18a)],_0xe947dd=_0x45fd17[_0x112052(0x15e)],Cesium[_0x112052(0x1c3)][_0x112052(0x164)](_0x45fd17[_0x112052(0x155)],_0x54f4dd),_0x45fd17[_0x112052(0x1c5)]['aspectRatio']=_0x2781d4,_0x45fd17[_0x112052(0x1c5)][_0x112052(0x1cd)]=_0x3a041d,_0x45fd17[_0x112052(0x1c5)][_0x112052(0x1c9)]=0x1,_0x45fd17['frustum'][_0x112052(0x17b)]=_0x2f32eb+0x1,_0x45fd17['setView']({'destination':_0x35b4d6,'orientation':{'heading':_0x4eebd9,'pitch':_0x326eee,'roll':_0x45fd17[_0x112052(0x181)]}}),Cesium[_0x112052(0x1ac)][_0x112052(0x161)](_0x45fd17[_0x112052(0x1c5)][_0x112052(0x1bc)],_0x45fd17[_0x112052(0x160)],this['viewProjectionMatrix']),Cesium['Matrix4']['clone'](_0x45fd17[_0x112052(0x18e)],this[_0x112052(0x1cc)]),Cesium[_0x112052(0x1c3)]['clone'](Cesium[_0x112052(0x1c3)]['ZERO'],this[_0x112052(0x1b1)][_0x112052(0x194)]),this[_0x112052(0x1b1)][_0x112052(0x1a0)]=this['_distance'],Cesium[_0x112052(0x1d1)][_0x112052(0x168)](this['boundingSphere'],this[_0x112052(0x1cc)],this[_0x112052(0x1b1)]);},this[_0x5c6696(0x1a1)][_0x5c6696(0x1b8)]=_0x45a007=>{const _0x34cb30=_0x5c6696;_0x45fd17['setView']({'destination':_0x54f4dd,'orientation':{'heading':_0xc9f05a,'pitch':_0xe947dd,'roll':_0x45fd17[_0x34cb30(0x181)]},'convert':![]}),_0x45fd17['frustum'][_0x34cb30(0x150)]=_0x2d374f,_0x45fd17[_0x34cb30(0x1c5)][_0x34cb30(0x1cd)]=_0x21904b,_0x45fd17[_0x34cb30(0x1c5)][_0x34cb30(0x1c9)]=_0x239670,_0x45fd17[_0x34cb30(0x1c5)][_0x34cb30(0x17b)]=_0x44fe3f,this['cameraDepthBuffer'][_0x34cb30(0x14f)]=![],_0x45a007['useLogDepth']=_0x3b21ad;},this[_0x5c6696(0x190)][_0x5c6696(0x14f)]=!![],this[_0x5c6696(0x190)][_0x5c6696(0x15d)]=_0xe14538=>{const _0x4f49c0=_0x5c6696;_0xe14538['useLogDepth']=![],_0x45fd17[_0x4f49c0(0x1c5)][_0x4f49c0(0x1c9)]=0xa,this[_0x4f49c0(0x1ce)]['farToNearRatio']=this[_0x4f49c0(0x1ce)]['logarithmicDepthFarToNearRatio'];},this[_0x5c6696(0x190)]['endFunc']=_0x4fa715=>{const _0xa46618=_0x5c6696;if(this['scene'][_0xa46618(0x172)]['frustumCommandsList'][_0xa46618(0x1b3)]>0x0){let _0x1b3e8a=this[_0xa46618(0x1ce)]['view']['frustumCommandsList'][0x0];_0x45fd17[_0xa46618(0x1c5)][_0xa46618(0x1c9)]=_0x1b3e8a[_0xa46618(0x1c9)],_0x45fd17[_0xa46618(0x1c5)]['far']=_0x1b3e8a[_0xa46618(0x17b)];}let _0x29439c=Cesium['Matrix4'][_0xa46618(0x1a5)](_0x45fd17[_0xa46618(0x1c5)][_0xa46618(0x1bc)],new Cesium[(_0xa46618(0x1ac))]()),_0x3a8cf5=Cesium['Matrix4'][_0xa46618(0x161)](_0x45fd17[_0xa46618(0x18e)],_0x29439c,new Cesium[(_0xa46618(0x1ac))]());Cesium[_0xa46618(0x1ac)][_0xa46618(0x161)](this[_0xa46618(0x1b5)],_0x3a8cf5,this[_0xa46618(0x188)]),_0x4fa715['useLogDepth']=_0x3b21ad,this[_0xa46618(0x1ce)][_0xa46618(0x17d)]=_0x4e14c6,_0x45fd17[_0xa46618(0x1c5)][_0xa46618(0x1c9)]=_0x239670,_0x45fd17[_0xa46618(0x1c5)][_0xa46618(0x17b)]=_0x44fe3f;};};function createVertices(_0x9ad6){const _0x211a48=_0x396531,_0x3c59e1=_0x9ad6['segmentCount'],_0x7d3eb1=_0x9ad6[_0x211a48(0x1ca)]+0x1,_0x551c4b=_0x9ad6[_0x211a48(0x173)];let _0x2ee32a=_0x7d3eb1*_0x7d3eb1+0x1,_0x26b999=Cesium[_0x211a48(0x146)][_0x211a48(0x152)](Cesium['ComponentDatatype'][_0x211a48(0x145)],_0x2ee32a*0x3),_0x5b720d=_0x9ad6[_0x211a48(0x14d)]*Cesium[_0x211a48(0x1cf)]['RADIANS_PER_DEGREE'],_0x392ce0=_0x9ad6[_0x211a48(0x148)]*Cesium[_0x211a48(0x1cf)]['RADIANS_PER_DEGREE'],_0x6abaf5=Math[_0x211a48(0x1bd)](_0x5b720d*0.5),_0x55bd5e=Math[_0x211a48(0x1bd)](_0x392ce0*0.5),_0x24c070=Math['PI']-_0x5b720d*0.5,_0x366bc4=_0x551c4b*_0x55bd5e,_0x3f40f3=0x0,_0x324369=0x0,_0x319db2=_0x5b720d/_0x3c59e1,_0xdd2f26=0x3;for(let _0x2827ce=0x0;_0x2827ce<_0x7d3eb1;_0x2827ce++){_0x3f40f3=_0x24c070+_0x2827ce*_0x319db2;let _0x338731=_0x366bc4/(_0x551c4b/Math[_0x211a48(0x19e)](_0x3f40f3)),_0x5ef6f3=Math['atan'](_0x338731),_0x2ccc83=-_0x5ef6f3,_0x24f068=_0x5ef6f3*0x2/_0x3c59e1;for(let _0x3fd43e=0x0;_0x3fd43e<_0x7d3eb1;_0x3fd43e++){_0x324369=_0x2ccc83+_0x3fd43e*_0x24f068;let _0x2a28a8=_0x551c4b*Math[_0x211a48(0x19e)](_0x324369)*Math['sin'](_0x3f40f3),_0x42a417=_0x551c4b*Math[_0x211a48(0x1c2)](_0x324369),_0x4be00f=_0x551c4b*Math[_0x211a48(0x19e)](_0x324369)*Math[_0x211a48(0x19e)](_0x3f40f3);_0x26b999[_0xdd2f26++]=_0x2a28a8,_0x26b999[_0xdd2f26++]=_0x42a417,_0x26b999[_0xdd2f26++]=_0x4be00f;}}return _0x26b999;}function createFaceIndices(_0x4a6194){const _0xb43401=_0x396531,_0x3c9668=_0x4a6194[_0xb43401(0x1ca)],_0x2db963=_0x3c9668+0x1;let _0x419ed4=_0x3c9668*_0x3c9668*0x3*0x2+_0x3c9668*0x3*0x4,_0x51d390=Cesium[_0xb43401(0x146)]['createTypedArray'](Cesium['ComponentDatatype'][_0xb43401(0x19b)],_0x419ed4),_0x3c9f5a=0x0,_0x39ab71=0x1;for(let _0x548d51=0x0;_0x548d51<_0x3c9668;_0x548d51++){for(let _0x517621=0x0;_0x517621<_0x3c9668;_0x517621++){_0x51d390[_0x3c9f5a++]=_0x39ab71+_0x548d51+_0x517621*_0x2db963,_0x51d390[_0x3c9f5a++]=_0x39ab71+_0x548d51+0x1+_0x517621*_0x2db963,_0x51d390[_0x3c9f5a++]=_0x39ab71+_0x548d51+(_0x517621+0x1)*_0x2db963,_0x51d390[_0x3c9f5a++]=_0x39ab71+_0x548d51+0x1+_0x517621*_0x2db963,_0x51d390[_0x3c9f5a++]=_0x39ab71+_0x548d51+0x1+(_0x517621+0x1)*_0x2db963,_0x51d390[_0x3c9f5a++]=_0x39ab71+_0x548d51+(_0x517621+0x1)*_0x2db963;}}for(let _0x5edaf7=0x0;_0x5edaf7<_0x3c9668;_0x5edaf7++){_0x51d390[_0x3c9f5a++]=_0x5edaf7+0x1+_0x39ab71,_0x51d390[_0x3c9f5a++]=_0x5edaf7+_0x39ab71,_0x51d390[_0x3c9f5a++]=0x0,_0x51d390[_0x3c9f5a++]=0x0,_0x51d390[_0x3c9f5a++]=_0x5edaf7+_0x3c9668*_0x2db963+_0x39ab71,_0x51d390[_0x3c9f5a++]=_0x5edaf7+0x1+_0x3c9668*_0x2db963+_0x39ab71;}for(let _0x34b65f=0x0;_0x34b65f<_0x3c9668;_0x34b65f++){_0x51d390[_0x3c9f5a++]=0x0,_0x51d390[_0x3c9f5a++]=_0x34b65f*_0x2db963+_0x39ab71,_0x51d390[_0x3c9f5a++]=(_0x34b65f+0x1)*_0x2db963+_0x39ab71,_0x51d390[_0x3c9f5a++]=_0x3c9668+(_0x34b65f+0x1)*_0x2db963+_0x39ab71,_0x51d390[_0x3c9f5a++]=_0x3c9668+_0x34b65f*_0x2db963+_0x39ab71,_0x51d390[_0x3c9f5a++]=0x0;}return _0x51d390;}function createLineIndices(_0xf36e0b){const _0x4c5d7c=_0x396531,_0x3fdbd2=_0xf36e0b[_0x4c5d7c(0x1ca)],_0x4df5a5=_0x3fdbd2+0x1,_0x46c058=(0x4+_0x3fdbd2*0x5+_0x3fdbd2*0x2*0x3)*0x2;let _0x4a8c1c=Cesium[_0x4c5d7c(0x146)][_0x4c5d7c(0x152)](Cesium['ComponentDatatype'][_0x4c5d7c(0x19b)],_0x46c058),_0x3314f6=0x0;_0x4a8c1c[_0x3314f6++]=0x0,_0x4a8c1c[_0x3314f6++]=0x1,_0x4a8c1c[_0x3314f6++]=0x0,_0x4a8c1c[_0x3314f6++]=_0x4df5a5,_0x4a8c1c[_0x3314f6++]=0x0,_0x4a8c1c[_0x3314f6++]=_0x3fdbd2*_0x4df5a5+0x1,_0x4a8c1c[_0x3314f6++]=0x0,_0x4a8c1c[_0x3314f6++]=_0x4df5a5*_0x4df5a5;for(let _0xeec1b4=0x0;_0xeec1b4<0x5;_0xeec1b4++){for(let _0x3e75fe=0x0;_0x3e75fe<_0x3fdbd2;_0x3e75fe++){_0x4a8c1c[_0x3314f6++]=0x1+_0x3e75fe+_0x4df5a5*0x5*_0xeec1b4,_0x4a8c1c[_0x3314f6++]=0x1+(_0x3e75fe+0x1)+_0x4df5a5*0x5*_0xeec1b4;}}for(let _0x10722e=0x0;_0x10722e<0x5;_0x10722e++){for(let _0xd253f1=0x0;_0xd253f1<_0x3fdbd2;_0xd253f1++){_0x4a8c1c[_0x3314f6++]=0x1+_0x4df5a5*_0xd253f1+_0x10722e*0x5,_0x4a8c1c[_0x3314f6++]=0x1+_0x4df5a5*(_0xd253f1+0x1)+_0x10722e*0x5;}}return _0x4a8c1c;}ViewShed3D['prototype'][_0x396531(0x149)]=function(_0x43e9d3){const _0x6f4763=_0x396531;let _0x34956e=createVertices(this),_0x2148b0=createFaceIndices(this),_0x381ebd=createLineIndices(this),_0x59d85c=_0x43e9d3[_0x6f4763(0x14b)],_0x22398b=Cesium[_0x6f4763(0x199)]['createVertexBuffer']({'context':_0x59d85c,'typedArray':_0x34956e,'usage':Cesium[_0x6f4763(0x142)][_0x6f4763(0x177)]}),_0x49d44f=Cesium['Buffer'][_0x6f4763(0x1bf)]({'context':_0x59d85c,'typedArray':_0x2148b0,'usage':Cesium['BufferUsage']['STATIC_DRAW'],'indexDatatype':Cesium[_0x6f4763(0x193)][_0x6f4763(0x19b)]}),_0xef5052=[{'index':0x0,'vertexBuffer':_0x22398b,'componentsPerAttribute':0x3,'componentDatatype':Cesium['ComponentDatatype']['FLOAT'],'offsetInBytes':0x0,'strideInBytes':0x3*0x4,'normalize':![]}],_0x16046e={'aPosition':0x0},_0x1345f8=new Cesium['VertexArray']({'context':_0x59d85c,'attributes':_0xef5052,'indexBuffer':_0x49d44f}),_0xded9fd=new Cesium[(_0x6f4763(0x16f))]({'sources':[_0x4df7a3]}),_0x4305d=new Cesium['ShaderSource']({'sources':[_0x313bb2]}),_0x4b47d9=Cesium[_0x6f4763(0x186)][_0x6f4763(0x167)]({'context':_0x59d85c,'vertexShaderSource':_0xded9fd,'fragmentShaderSource':_0x4305d,'attributeLocations':_0x16046e}),_0x2ea929=Cesium['RenderState'][_0x6f4763(0x167)]({'cull':{'enabled':![]},'depthTest':{'enabled':![]},'depthMask':![],'stencilTest':{'enabled':!![],'frontFunction':Cesium['StencilFunction'][_0x6f4763(0x1c6)],'frontOperation':{'fail':Cesium[_0x6f4763(0x170)][_0x6f4763(0x144)],'zFail':Cesium[_0x6f4763(0x170)]['KEEP'],'zPass':Cesium[_0x6f4763(0x170)][_0x6f4763(0x1a3)]},'backFunction':Cesium[_0x6f4763(0x1a6)][_0x6f4763(0x1c6)],'backOperation':{'fail':Cesium['StencilOperation']['KEEP'],'zFail':Cesium[_0x6f4763(0x170)]['KEEP'],'zPass':Cesium['StencilOperation']['DECREMENT_WRAP']},'reference':0x0,'mask':~0x0},'blending':Cesium[_0x6f4763(0x198)][_0x6f4763(0x19a)]});this[_0x6f4763(0x180)]=new Cesium['DrawCommand']({'primitiveType':Cesium[_0x6f4763(0x192)]['TRIANGLES'],'modelMatrix':this[_0x6f4763(0x1cc)],'boundingVolume':this[_0x6f4763(0x1b1)],'pass':Cesium[_0x6f4763(0x16c)][_0x6f4763(0x184)],'shaderProgram':_0x4b47d9,'vertexArray':_0x1345f8,'renderState':_0x2ea929,'owner':this,'cull':!![]}),this['colorCommand'][_0x6f4763(0x15a)]={'uVisibleAreaColor':()=>{const _0x4cae22=_0x6f4763;return this[_0x4cae22(0x1c8)];},'uHiddenAreaColor':()=>{const _0x11bfdf=_0x6f4763;return this[_0x11bfdf(0x16d)];},'uRenderTextureMatrix':()=>{const _0x511c9b=_0x6f4763;return this[_0x511c9b(0x188)];},'uTextureSize':()=>{const _0x4ff723=_0x6f4763;let _0x2a9a8c=this[_0x4ff723(0x1a1)]['depthTexture'];return new Cesium[(_0x4ff723(0x14e))](_0x2a9a8c[_0x4ff723(0x1a8)],_0x2a9a8c['height']);},'uTexture':()=>{const _0x57c0f5=_0x6f4763;return this[_0x57c0f5(0x1a1)][_0x57c0f5(0x1ab)];},'uGlobalDepthTexture':()=>{const _0x1989cb=_0x6f4763;return this[_0x1989cb(0x190)][_0x1989cb(0x1ab)];}};let _0x3aa7d5=Cesium[_0x6f4763(0x1ae)][_0x6f4763(0x14c)](this['colorCommand']);_0x3aa7d5[_0x6f4763(0x1b9)]=Cesium[_0x6f4763(0x1d0)]['fromCache']({'depthMask':![],'colorMask':{'red':![],'green':![],'blue':![],'alpha':![]},'depthTest':{'enabled':!![],'func':Cesium[_0x6f4763(0x1b0)][_0x6f4763(0x17e)]},'stencilTest':{'enabled':!![],'frontFunction':Cesium['StencilFunction'][_0x6f4763(0x19f)],'frontOperation':{'fail':Cesium[_0x6f4763(0x170)][_0x6f4763(0x144)],'zFail':Cesium[_0x6f4763(0x170)][_0x6f4763(0x144)],'zPass':Cesium[_0x6f4763(0x170)][_0x6f4763(0x157)]},'backFunction':Cesium[_0x6f4763(0x1a6)][_0x6f4763(0x19f)],'backOperation':{'fail':Cesium['StencilOperation']['KEEP'],'zFail':Cesium['StencilOperation']['KEEP'],'zPass':Cesium[_0x6f4763(0x170)][_0x6f4763(0x1a3)]},'reference':0x0,'mask':~0x0}}),this[_0x6f4763(0x151)]=_0x3aa7d5;let _0x459d1d=Cesium[_0x6f4763(0x199)]['createIndexBuffer']({'context':_0x59d85c,'typedArray':_0x381ebd,'usage':Cesium[_0x6f4763(0x142)][_0x6f4763(0x177)],'indexDatatype':Cesium[_0x6f4763(0x193)]['UNSIGNED_SHORT']});this['lineCommand']=new Cesium[(_0x6f4763(0x1ae))]({'primitiveType':Cesium[_0x6f4763(0x192)][_0x6f4763(0x196)],'modelMatrix':this['invViewMatrix'],'boundingVolume':this[_0x6f4763(0x1b1)],'pass':Cesium[_0x6f4763(0x16c)][_0x6f4763(0x184)],'owner':this,'cull':!![]}),this[_0x6f4763(0x165)]['vertexArray']=new Cesium[(_0x6f4763(0x169))]({'context':_0x59d85c,'attributes':_0xef5052,'indexBuffer':_0x459d1d}),this[_0x6f4763(0x165)][_0x6f4763(0x15c)]=Cesium[_0x6f4763(0x186)][_0x6f4763(0x167)]({'context':_0x59d85c,'vertexShaderSource':_0x53fc49,'fragmentShaderSource':_0x3e61a4,'attributeLocations':_0x16046e}),this[_0x6f4763(0x165)][_0x6f4763(0x1b9)]=Cesium[_0x6f4763(0x1d0)][_0x6f4763(0x167)]({'cull':{'enabled':![]},'depthTest':{'enabled':!![]},'blending':Cesium[_0x6f4763(0x198)][_0x6f4763(0x19a)]}),this[_0x6f4763(0x165)]['uniformMap']={'uColor':()=>{const _0x1c0698=_0x6f4763;return this[_0x1c0698(0x1c0)];}};},ViewShed3D[_0x396531(0x19c)]['setDistDirByPoint']=function(_0x4b483c){const _0x5eb634=_0x396531;let _0x30f8e3=this[_0x5eb634(0x1ce)]['camera'],_0x194bb7=_0x30f8e3[_0x5eb634(0x183)],_0x4649f1=Cesium[_0x5eb634(0x1c3)][_0x5eb634(0x16a)](_0x4b483c)[0x0],_0x262f61=Cesium[_0x5eb634(0x1c3)]['fromDegreesArrayHeights'](this[_0x5eb634(0x1b6)])[0x0],_0x1633c7=new Cesium['Cartesian3']();Cesium['Cartesian3'][_0x5eb634(0x16b)](_0x4649f1,_0x262f61,_0x1633c7);let _0x211eb2=Cesium[_0x5eb634(0x1c3)][_0x5eb634(0x1aa)](_0x1633c7);Cesium['Cartesian3'][_0x5eb634(0x1bb)](_0x1633c7,_0x1633c7),this[_0x5eb634(0x15f)]=_0x211eb2;let _0x4c352c=_0x30f8e3[_0x5eb634(0x18a)],_0xeb270d=_0x30f8e3[_0x5eb634(0x15e)],_0x23dc77=_0x30f8e3[_0x5eb634(0x181)],_0x4fa75a=new Cesium[(_0x5eb634(0x1c3))]();Cesium[_0x5eb634(0x1c3)][_0x5eb634(0x164)](_0x30f8e3['position'],_0x4fa75a);let _0x641aeb=_0x1633c7[_0x5eb634(0x164)](),_0x1cd763=_0x262f61['clone']();_0x1cd763=Cesium[_0x5eb634(0x1c3)][_0x5eb634(0x1bb)](_0x1cd763,_0x1cd763);Math['abs'](Cesium[_0x5eb634(0x1c3)][_0x5eb634(0x1be)](_0x1cd763,_0x641aeb))>=0x1&&(Math['abs'](Cesium['Cartesian3'][_0x5eb634(0x1be)](_0x641aeb,Cesium[_0x5eb634(0x1c3)][_0x5eb634(0x1a2)]))<0x1?_0x1cd763=Cesium[_0x5eb634(0x1c3)][_0x5eb634(0x164)](Cartesian3[_0x5eb634(0x1a2)],_0x1cd763):_0x1cd763=Cesium[_0x5eb634(0x1c3)][_0x5eb634(0x164)](Cartesian3[_0x5eb634(0x163)],_0x1cd763));let _0x462de3=new Cesium[(_0x5eb634(0x1c3))]();Cesium[_0x5eb634(0x1c3)][_0x5eb634(0x191)](_0x1cd763,_0x641aeb,_0x462de3),_0x462de3=Cesium[_0x5eb634(0x1c3)][_0x5eb634(0x1bb)](_0x462de3,_0x462de3),Cesium['Cartesian3'][_0x5eb634(0x191)](_0x641aeb,_0x462de3,_0x1cd763),_0x1cd763=Cesium[_0x5eb634(0x1c3)][_0x5eb634(0x1bb)](_0x1cd763,_0x1cd763),_0x30f8e3[_0x5eb634(0x18b)]({'destination':_0x262f61,'orientation':{'direction':_0x641aeb,'up':_0x1cd763},'convert':![]}),this[_0x5eb634(0x171)]=_0x30f8e3[_0x5eb634(0x18a)]*Cesium[_0x5eb634(0x1cf)]['DEGREES_PER_RADIAN'],this[_0x5eb634(0x15e)]=_0x30f8e3['pitch']*Cesium[_0x5eb634(0x1cf)][_0x5eb634(0x1c1)],_0x30f8e3[_0x5eb634(0x18b)]({'destination':_0x4fa75a,'orientation':{'heading':_0x4c352c,'pitch':_0xeb270d,'roll':_0x23dc77},'convert':![]});},ViewShed3D[_0x396531(0x19c)]['_destroyCommand']=function(){const _0x47ca5d=_0x396531;this[_0x47ca5d(0x180)]&&(this[_0x47ca5d(0x180)][_0x47ca5d(0x1a4)]=this[_0x47ca5d(0x180)][_0x47ca5d(0x1a4)]&&!this[_0x47ca5d(0x180)]['vertexArray'][_0x47ca5d(0x156)]()&&this[_0x47ca5d(0x180)][_0x47ca5d(0x1a4)][_0x47ca5d(0x182)](),this[_0x47ca5d(0x180)][_0x47ca5d(0x15c)]=this[_0x47ca5d(0x180)]['shaderProgram']&&!this[_0x47ca5d(0x180)][_0x47ca5d(0x15c)][_0x47ca5d(0x156)]()&&this[_0x47ca5d(0x180)][_0x47ca5d(0x15c)][_0x47ca5d(0x182)](),this[_0x47ca5d(0x180)]=undefined),this[_0x47ca5d(0x151)]&&(this[_0x47ca5d(0x151)][_0x47ca5d(0x1a4)]=this[_0x47ca5d(0x151)][_0x47ca5d(0x1a4)]&&!this[_0x47ca5d(0x151)][_0x47ca5d(0x1a4)]['isDestroyed']()&&this['stencilCommand'][_0x47ca5d(0x1a4)][_0x47ca5d(0x182)](),this[_0x47ca5d(0x151)]['shaderProgram']=this[_0x47ca5d(0x151)][_0x47ca5d(0x15c)]&&!this[_0x47ca5d(0x151)][_0x47ca5d(0x15c)][_0x47ca5d(0x156)]()&&this[_0x47ca5d(0x151)]['shaderProgram'][_0x47ca5d(0x182)](),this[_0x47ca5d(0x151)]=undefined),this[_0x47ca5d(0x165)]&&(this['lineCommand'][_0x47ca5d(0x1a4)]=this[_0x47ca5d(0x165)]['vertexArray']&&!this[_0x47ca5d(0x165)][_0x47ca5d(0x1a4)]['isDestroyed']()&&this['lineCommand'][_0x47ca5d(0x1a4)][_0x47ca5d(0x182)](),this[_0x47ca5d(0x165)][_0x47ca5d(0x15c)]=this[_0x47ca5d(0x165)][_0x47ca5d(0x15c)]&&!this[_0x47ca5d(0x165)][_0x47ca5d(0x15c)]['isDestroyed']()&&this[_0x47ca5d(0x165)][_0x47ca5d(0x15c)][_0x47ca5d(0x182)](),this[_0x47ca5d(0x165)]=undefined);},ViewShed3D[_0x396531(0x19c)][_0x396531(0x1c7)]=function(_0x45a059){const _0x5d0808=_0x396531;if(_0x45a059[_0x5d0808(0x154)]||_0x45a059[_0x5d0808(0x17f)][_0x5d0808(0x14a)]||_0x45a059['passes'][_0x5d0808(0x195)])return;this[_0x5d0808(0x178)]&&(this[_0x5d0808(0x178)]=![],this[_0x5d0808(0x1af)](),this[_0x5d0808(0x18c)](_0x45a059),this[_0x5d0808(0x149)](_0x45a059)),this[_0x5d0808(0x151)]&&_0x45a059[_0x5d0808(0x18d)][_0x5d0808(0x15b)](this['stencilCommand']),this['colorCommand']&&_0x45a059[_0x5d0808(0x18d)][_0x5d0808(0x15b)](this['colorCommand']),this[_0x5d0808(0x165)]&&_0x45a059[_0x5d0808(0x18d)][_0x5d0808(0x15b)](this[_0x5d0808(0x165)]);},ViewShed3D[_0x396531(0x19c)][_0x396531(0x1ad)]=function(){const _0x5d989b=_0x396531;this['name']='viewshed3d'+this['scene'][_0x5d989b(0x176)][_0x5d989b(0x1b3)],this[_0x5d989b(0x179)]=this[_0x5d989b(0x19d)]+_0x5d989b(0x159),this[_0x5d989b(0x1ce)][_0x5d989b(0x143)](this['name'],this[_0x5d989b(0x1a1)]),this[_0x5d989b(0x1ce)][_0x5d989b(0x143)](this[_0x5d989b(0x179)],this[_0x5d989b(0x190)]),this[_0x5d989b(0x1ce)]['primitives'][_0x5d989b(0x166)](this);},ViewShed3D[_0x396531(0x19c)][_0x396531(0x189)]=function(){const _0x41b1af=_0x396531;this['scene']['_removeRenderTarget'](this[_0x41b1af(0x19d)]),this[_0x41b1af(0x1ce)]['_removeRenderTarget'](this['globalName']),this[_0x41b1af(0x1ce)][_0x41b1af(0x197)]['remove'](this);},ViewShed3D[_0x396531(0x19c)][_0x396531(0x156)]=function(){return ![];},ViewShed3D[_0x396531(0x19c)]['destroy']=function(){const _0x56a593=_0x396531;this[_0x56a593(0x1a1)]=this[_0x56a593(0x1a1)][_0x56a593(0x182)](),this[_0x56a593(0x190)]=this[_0x56a593(0x190)][_0x56a593(0x182)]();if(this[_0x56a593(0x180)]){let _0x2083f2=this[_0x56a593(0x180)][_0x56a593(0x1a4)],_0x5561b0=this[_0x56a593(0x180)]['shaderProgram'];_0x2083f2=_0x2083f2&&!_0x2083f2[_0x56a593(0x156)]()&&_0x2083f2[_0x56a593(0x182)](),_0x5561b0=_0x5561b0&&!_0x5561b0[_0x56a593(0x156)]()&&_0x5561b0[_0x56a593(0x182)](),this[_0x56a593(0x180)]=undefined;}if(this[_0x56a593(0x151)]){let _0x1bd757=this[_0x56a593(0x151)]['vertexArray'],_0x219001=this['stencilCommand'][_0x56a593(0x15c)];_0x1bd757=_0x1bd757&&!_0x1bd757[_0x56a593(0x156)]()&&_0x1bd757[_0x56a593(0x182)](),_0x219001=_0x219001&&!_0x219001[_0x56a593(0x156)]()&&_0x219001['destroy'](),this['stencilCommand']=undefined;}if(this['lineCommand']){let _0x4077b1=this['lineCommand']['vertexArray'],_0x31b92a=this[_0x56a593(0x165)][_0x56a593(0x15c)];_0x4077b1=_0x4077b1&&!_0x4077b1[_0x56a593(0x156)]()&&_0x4077b1[_0x56a593(0x182)](),_0x31b92a=_0x31b92a&&!_0x31b92a[_0x56a593(0x156)]()&&_0x31b92a[_0x56a593(0x182)](),this[_0x56a593(0x165)]=undefined;}};

    const _0x4602=['nodeName','68683fiRaiL','getElementsByTagNameNS','7tojdKf','trim','queryStringValue','332709NZDCau','textContent','nodeType','501WTkSSA','16901lZPnFm','prefix','133997vKMzbz','firstChild','2zStbtA','queryBooleanAttribute','getAttributeNodeNS','queryNumericValue','false','true','xmldom','getChildValue','26047kMUdfR','length','1Xofvbp','queryStringAttribute','text/xml','250bOPJnK','nodeValue','push','childNodes','nextSibling','getAttribute','parseFromString','read','queryFirstNode','toLowerCase','859vkLwhC','localName','indexOf','namespaceURI','queryChildNodes','queryNumericAttribute','substring','1XwuNke','Microsoft.XMLDOM','queryNodes'];const _0x383943=_0x558e;(function(_0x3c7907,_0x2bbc19){const _0x2261d6=_0x558e;while(!![]){try{const _0x4feb6b=-parseInt(_0x2261d6(0xbc))*-parseInt(_0x2261d6(0xc1))+parseInt(_0x2261d6(0xbd))*-parseInt(_0x2261d6(0xb0))+-parseInt(_0x2261d6(0xc9))*-parseInt(_0x2261d6(0xb6))+-parseInt(_0x2261d6(0xb4))+parseInt(_0x2261d6(0xbf))*parseInt(_0x2261d6(0xcb))+parseInt(_0x2261d6(0xa9))*parseInt(_0x2261d6(0x9f))+-parseInt(_0x2261d6(0xb9));if(_0x4feb6b===_0x2bbc19)break;else _0x3c7907['push'](_0x3c7907['shift']());}catch(_0x130d58){_0x3c7907['push'](_0x3c7907['shift']());}}}(_0x4602,0x1bc79));function _0x558e(_0x3c0653,_0x18848c){_0x3c0653=_0x3c0653-0x9e;let _0x46028c=_0x4602[_0x3c0653];return _0x46028c;}function XMLParser(){}XMLParser[_0x383943(0xa6)]=function(_0x26379b){const _0x5507db=_0x383943;let _0x20835d=_0x26379b[_0x5507db(0xab)]('<');_0x20835d>0x0&&(_0x26379b=_0x26379b[_0x5507db(0xaf)](_0x20835d));if(DOMParser)return !XMLParser[_0x5507db(0xc7)]&&(XMLParser[_0x5507db(0xc7)]=new DOMParser()),XMLParser['xmldom'][_0x5507db(0xa5)](_0x26379b,_0x5507db(0x9e));return !XMLParser[_0x5507db(0xc7)]&&(XMLParser[_0x5507db(0xc7)]=new ActiveXObject(_0x5507db(0xb1))),XMLParser[_0x5507db(0xc7)]['loadXML'](_0x26379b);},XMLParser[_0x383943(0xb5)]=function(_0x39105d,_0x31745e,_0x2a919a){const _0x255416=_0x383943;let _0x226bae=[];if(_0x39105d[_0x255416(0xb5)])_0x226bae=_0x39105d['getElementsByTagNameNS'](_0x31745e,_0x2a919a);else {let _0x20f08b=_0x39105d['getElementsByTagName']('*'),_0x2b0096,_0xf32e7b;for(let _0x5addbe=0x0,_0x227302=_0x20f08b[_0x255416(0xca)];_0x5addbe<_0x227302;++_0x5addbe){_0x2b0096=_0x20f08b[_0x5addbe],_0xf32e7b=_0x2b0096['prefix']?_0x2b0096[_0x255416(0xbe)]+':'+_0x2a919a:_0x2a919a,(_0x2a919a==='*'||_0xf32e7b===_0x2b0096[_0x255416(0xb3)])&&((_0x31745e==='*'||_0x31745e===_0x2b0096[_0x255416(0xac)])&&_0x226bae[_0x255416(0xa1)](_0x2b0096));}}return _0x226bae;},XMLParser[_0x383943(0xc3)]=function(_0x278748,_0x15ed16,_0x2f08a1){const _0x330fad=_0x383943;let _0x55975f=null;if(_0x278748['getAttributeNodeNS'])_0x55975f=_0x278748[_0x330fad(0xc3)](_0x15ed16,_0x2f08a1);else {let _0x1691ae=_0x278748['attributes'],_0x3784b6,_0x275f5f;for(let _0x1990a7=0x0,_0x5b88f8=_0x1691ae[_0x330fad(0xca)];_0x1990a7<_0x5b88f8;++_0x1990a7){_0x3784b6=_0x1691ae[_0x1990a7];if(_0x3784b6[_0x330fad(0xac)]===_0x15ed16){_0x275f5f=_0x3784b6['prefix']?_0x3784b6['prefix']+':'+_0x2f08a1:_0x2f08a1;if(_0x275f5f===_0x3784b6[_0x330fad(0xb3)]){_0x55975f=_0x3784b6;break;}}}}return _0x55975f;},XMLParser[_0x383943(0xc8)]=function(_0x4fb0da,_0x4f1ca5){const _0xf0d170=_0x383943;let _0xa10b70=_0x4f1ca5||'';if(_0x4fb0da)for(let _0x4c64d6=_0x4fb0da[_0xf0d170(0xc0)];_0x4c64d6;_0x4c64d6=_0x4c64d6[_0xf0d170(0xa3)]){switch(_0x4c64d6[_0xf0d170(0xbb)]){case 0x3:case 0x4:_0xa10b70+=_0x4c64d6[_0xf0d170(0xa0)];}}return _0xa10b70;},XMLParser[_0x383943(0xae)]=function(_0x5d84f7,_0xa01aec){const _0x5679a1=_0x383943;if(!_0x5d84f7)return undefined;let _0x427449=_0x5d84f7[_0x5679a1(0xa4)](_0xa01aec);if(_0x427449!==null){let _0x527bdf=parseFloat(_0x427449);return !isNaN(_0x527bdf)?_0x527bdf:undefined;}return undefined;},XMLParser[_0x383943(0xcc)]=function(_0xf872b9,_0x255f1f){const _0x3b37fe=_0x383943;if(!_0xf872b9)return undefined;let _0x104aa1=_0xf872b9[_0x3b37fe(0xa4)](_0x255f1f);return _0x104aa1!==null?_0x104aa1:undefined;},XMLParser[_0x383943(0xc2)]=function(_0x6e5a3f,_0x4a9bd6){const _0x34e2c8=_0x383943;if(!_0x6e5a3f)return undefined;let _0x4abae0=_0x6e5a3f['getAttribute'](_0x4a9bd6);_0x4abae0=_0x4abae0[_0x34e2c8(0xa8)]();if(_0x34e2c8(0xc5)===_0x4abae0)return ![];if(_0x34e2c8(0xc6)===_0x4abae0)return !![];return undefined;},XMLParser[_0x383943(0xa7)]=function(_0x4bf39c,_0x60fc85,_0x27215c){const _0xc34aba=_0x383943;if(!_0x4bf39c)return undefined;let _0x287f0d=_0x4bf39c['childNodes'],_0x407866=_0x287f0d[_0xc34aba(0xca)];for(let _0x1f815b=0x0;_0x1f815b<_0x407866;_0x1f815b++){let _0x1a737f=_0x287f0d[_0x1f815b];if(_0x27215c){if(_0x1a737f[_0xc34aba(0xaa)]===_0x60fc85&&_0x27215c['indexOf'](_0x1a737f[_0xc34aba(0xac)])!==-0x1)return _0x1a737f;}else {if(_0x1a737f[_0xc34aba(0xaa)]===_0x60fc85)return _0x1a737f;}}return undefined;},XMLParser[_0x383943(0xb2)]=function(_0x643dfb,_0x2f4caf,_0xcbd09b){const _0xc47217=_0x383943;if(!_0x643dfb)return undefined;let _0x37c407=[],_0x1fe82b=_0x643dfb[_0xc47217(0xb5)]('*',_0x2f4caf),_0x4611ad=_0x1fe82b[_0xc47217(0xca)];for(let _0x3e026a=0x0;_0x3e026a<_0x4611ad;_0x3e026a++){let _0x53000d=_0x1fe82b[_0x3e026a];_0xcbd09b?_0x53000d[_0xc47217(0xaa)]===_0x2f4caf&&_0xcbd09b[_0xc47217(0xab)](_0x53000d[_0xc47217(0xac)])!==-0x1&&_0x37c407['push'](_0x53000d):_0x53000d['localName']===_0x2f4caf&&_0x37c407[_0xc47217(0xa1)](_0x53000d);}return _0x37c407;},XMLParser[_0x383943(0xad)]=function(_0x5249d1,_0x549b1f,_0x306d32){const _0x1e6ad6=_0x383943;if(!_0x5249d1)return [];let _0x5b72f0=[],_0x56dfb6=_0x5249d1[_0x1e6ad6(0xa2)],_0x6be458=_0x56dfb6['length'];for(let _0x30383a=0x0;_0x30383a<_0x6be458;_0x30383a++){let _0x57bc02=_0x56dfb6[_0x30383a];_0x306d32?_0x57bc02[_0x1e6ad6(0xaa)]===_0x549b1f&&_0x306d32[_0x1e6ad6(0xab)](_0x57bc02[_0x1e6ad6(0xac)])!==-0x1&&_0x5b72f0['push'](_0x57bc02):_0x57bc02[_0x1e6ad6(0xaa)]===_0x549b1f&&_0x5b72f0[_0x1e6ad6(0xa1)](_0x57bc02);}return _0x5b72f0;},XMLParser[_0x383943(0xc4)]=function(_0x488fc9,_0x966af1,_0x5c7715){const _0x195823=_0x383943;let _0x10aab7=XMLParser['queryFirstNode'](_0x488fc9,_0x966af1,_0x5c7715);if(_0x10aab7){let _0xabea91=parseFloat(_0x10aab7[_0x195823(0xba)]);return !isNaN(_0xabea91)?_0xabea91:undefined;}return undefined;},XMLParser[_0x383943(0xb8)]=function(_0x3ce715,_0x4978a5,_0x53b00c){const _0x41a9d3=_0x383943;let _0x2ccbae=XMLParser[_0x41a9d3(0xa7)](_0x3ce715,_0x4978a5,_0x53b00c);if(_0x2ccbae)return _0x2ccbae['textContent'][_0x41a9d3(0xb7)]();return undefined;},XMLParser['queryBooleanValue']=function(_0x3e46d2,_0x5d6eaa,_0x1c28ac){const _0x4ea72b=_0x383943;let _0x3a6ce8=XMLParser[_0x4ea72b(0xa7)](_0x3e46d2,_0x5d6eaa,_0x1c28ac);if(_0x3a6ce8){let _0x4b153c=_0x3a6ce8[_0x4ea72b(0xba)][_0x4ea72b(0xb7)]();return _0x4b153c==='1'||/^true$/i['test'](_0x4b153c);}return undefined;};

    const _0x33fb=['155707RuxhPl','2774DDovOD','398413LQHaEm','freeze','163KoNvMV','576448AOguBq','461XKIGqe','138PuLTlr','1OoPfJT','152231ozgFmd','1099UPLZir','1YXoSVn','671ikriOb'];const _0x48851e=_0x448d;(function(_0x44ec91,_0xa4d4d1){const _0x47431e=_0x448d;while(!![]){try{const _0x41991b=-parseInt(_0x47431e(0xc8))+-parseInt(_0x47431e(0xcb))*parseInt(_0x47431e(0xc9))+parseInt(_0x47431e(0xc7))*parseInt(_0x47431e(0xce))+parseInt(_0x47431e(0xcc))*parseInt(_0x47431e(0xca))+parseInt(_0x47431e(0xc4))+-parseInt(_0x47431e(0xcd))*-parseInt(_0x47431e(0xc6))+parseInt(_0x47431e(0xc5))*parseInt(_0x47431e(0xc3));if(_0x41991b===_0xa4d4d1)break;else _0x44ec91['push'](_0x44ec91['shift']());}catch(_0x1f5195){_0x44ec91['push'](_0x44ec91['shift']());}}}(_0x33fb,0xaa9ef));function _0x448d(_0x153b0d,_0x3776f0){_0x153b0d=_0x153b0d-0xc3;let _0x33fbe5=_0x33fb[_0x153b0d];return _0x33fbe5;}const FillStyle={'Fill':0x0,'WireFrame':0x1,'Fill_And_WireFrame':0x2};var _0x11bab4 = Object[_0x48851e(0xcf)](FillStyle);

    const _0x3249=['352118TuAWun','2RwXklv','429914gSWXax','1HFgQag','1084263wSGwAJ','1285MeivSv','476567rgFrDa','167HPJViF','14lLgWdY','25977NedsGw','73149ycVOwc'];(function(_0x181474,_0x4815b7){const _0x79cab3=_0x49bc;while(!![]){try{const _0x52b761=-parseInt(_0x79cab3(0x11b))*-parseInt(_0x79cab3(0x11c))+-parseInt(_0x79cab3(0x120))*-parseInt(_0x79cab3(0x117))+-parseInt(_0x79cab3(0x121))*parseInt(_0x79cab3(0x119))+-parseInt(_0x79cab3(0x11f))*parseInt(_0x79cab3(0x11d))+-parseInt(_0x79cab3(0x118))+-parseInt(_0x79cab3(0x11e))+-parseInt(_0x79cab3(0x11a));if(_0x52b761===_0x4815b7)break;else _0x181474['push'](_0x181474['shift']());}catch(_0x188e08){_0x181474['push'](_0x181474['shift']());}}}(_0x3249,0x8e621));const BillboardMode={'None':0x0,'FixedZ':0x1,'FixedXYZ':0x2};function _0x49bc(_0x1d338e,_0x35cd46){_0x1d338e=_0x1d338e-0x117;let _0x32497e=_0x3249[_0x1d338e];return _0x32497e;}var _0x1fe80d = Object['freeze'](BillboardMode);

    const _0x2175=['line\x20width','_fillForeColor','string','173062edTfhj','_calloutWidth','bottomAltitude\x20value','_fillStyle','_owner','4TgWlFy','620057sTNkjy','_lineColor','typeOf','_altitudeMode','_billboardMode','53528dTDzoV','object','2089285oDyBgE','fillStyleChange','emission\x20color','line\x20color','_emissionColor','SCREEN_ALIGNED','_pointColor','1oowKZu','number','_bottomAltitude','_pointSize','point\x20size','clone','_lineWidth','_imageReady','fillForeColor\x20value','Check','_dirty','NONE','1yhEYhi','RED','prototype','_calloutColor','95ekolQV','29129fhvYzL','439099jdmmRM','6363ciXKaJ','altitudeMode\x20value','defineProperties','_image','Color'];function _0x5ad9(_0x1b4d95,_0x146159){_0x1b4d95=_0x1b4d95-0x9a;let _0x21759b=_0x2175[_0x1b4d95];return _0x21759b;}const _0x160605=_0x5ad9;(function(_0x4e59ab,_0x576aa5){const _0x4bd502=_0x5ad9;while(!![]){try{const _0x337eb7=-parseInt(_0x4bd502(0xa3))*parseInt(_0x4bd502(0xa0))+-parseInt(_0x4bd502(0xb1))+-parseInt(_0x4bd502(0xbf))*parseInt(_0x4bd502(0xa2))+parseInt(_0x4bd502(0xb0))*parseInt(_0x4bd502(0xa1))+parseInt(_0x4bd502(0x9c))*-parseInt(_0x4bd502(0xb6))+-parseInt(_0x4bd502(0xab))+parseInt(_0x4bd502(0xb8));if(_0x337eb7===_0x576aa5)break;else _0x4e59ab['push'](_0x4e59ab['shift']());}catch(_0x3268a1){_0x4e59ab['push'](_0x4e59ab['shift']());}}}(_0x2175,0x4d0b2));function Style3D(){const _0x27eeb6=_0x5ad9;this[_0x27eeb6(0xa9)]=new Cesium[(_0x27eeb6(0xa7))](),this[_0x27eeb6(0xae)]=_0x11bab4['Fill'],this['_lineColor']=new Cesium[(_0x27eeb6(0xa7))](),this[_0x27eeb6(0xc5)]=0x1,this[_0x27eeb6(0xc1)]=0x0,this['_pointSize']=0x1,this[_0x27eeb6(0xbe)]=new Cesium[(_0x27eeb6(0xa7))](),this[_0x27eeb6(0xb4)]=Cesium['HeightReference'][_0x27eeb6(0x9b)],this[_0x27eeb6(0xbc)]=new Cesium[(_0x27eeb6(0xa7))](0x1,0x1,0x1,0x1),this[_0x27eeb6(0xaf)]=undefined,this[_0x27eeb6(0x9a)]=![],this['_image']=undefined,this[_0x27eeb6(0xc6)]=!![],this['_calloutColor']=Cesium[_0x27eeb6(0xa7)][_0x27eeb6(0x9d)],this[_0x27eeb6(0xac)]=0x1,this[_0x27eeb6(0xb5)]=_0x1fe80d[_0x27eeb6(0xbd)];}Object[_0x160605(0xa5)](Style3D[_0x160605(0x9e)],{'fillForeColor':{'get':function(){const _0x5b4c12=_0x160605;return this[_0x5b4c12(0xa9)];},'set':function(_0x8db1d4){const _0x34f4d6=_0x160605;Cesium[_0x34f4d6(0xc8)][_0x34f4d6(0xb3)][_0x34f4d6(0xb7)](_0x34f4d6(0xc7),_0x8db1d4),Cesium[_0x34f4d6(0xa7)][_0x34f4d6(0xc4)](_0x8db1d4,this[_0x34f4d6(0xa9)]);}},'bottomAltitude':{'get':function(){return this['_bottomAltitude'];},'set':function(_0xe8d014){const _0x5afaf0=_0x160605;Cesium['Check'][_0x5afaf0(0xb3)]['number'](_0x5afaf0(0xad),_0xe8d014),this[_0x5afaf0(0xc1)]!==_0xe8d014&&(this['_bottomAltitude']=_0xe8d014,this[_0x5afaf0(0x9a)]=!![]);}},'altitudeMode':{'get':function(){const _0x1caf23=_0x160605;return this[_0x1caf23(0xb4)];},'set':function(_0x227a6c){const _0x5d71f0=_0x160605;Cesium[_0x5d71f0(0xc8)]['typeOf'][_0x5d71f0(0xc0)](_0x5d71f0(0xa4),_0x227a6c),this[_0x5d71f0(0xb4)]=_0x227a6c;}},'fillStyle':{'get':function(){return this['_fillStyle'];},'set':function(_0x45782e){const _0x5133e0=_0x160605;Cesium['Check'][_0x5133e0(0xb3)]['number']('fillStyle\x20value',_0x45782e);let _0x3b99ff=this[_0x5133e0(0xae)];this[_0x5133e0(0xae)]=_0x45782e,_0x45782e!==_0x3b99ff&&this['_owner']&&this['_owner'][_0x5133e0(0xb9)]();}},'lineColor':{'get':function(){const _0x41224a=_0x160605;return this[_0x41224a(0xb2)];},'set':function(_0x26306c){const _0x3f5961=_0x160605;Cesium['Check']['typeOf'][_0x3f5961(0xb7)](_0x3f5961(0xbb),_0x26306c),Cesium[_0x3f5961(0xa7)][_0x3f5961(0xc4)](_0x26306c,this[_0x3f5961(0xb2)]);}},'lineWidth':{'get':function(){const _0x2e21d1=_0x160605;return this[_0x2e21d1(0xc5)];},'set':function(_0x390021){const _0x5ad943=_0x160605;Cesium[_0x5ad943(0xc8)][_0x5ad943(0xb3)][_0x5ad943(0xc0)](_0x5ad943(0xa8),_0x390021),this['_lineWidth']=_0x390021;}},'pointSize':{'get':function(){const _0x1cf059=_0x160605;return this[_0x1cf059(0xc2)];},'set':function(_0x949bcc){const _0xbba7d6=_0x160605;Cesium[_0xbba7d6(0xc8)][_0xbba7d6(0xb3)][_0xbba7d6(0xc0)](_0xbba7d6(0xc3),_0x949bcc),this['_pointSize']=_0x949bcc;}},'pointColor':{'get':function(){const _0x366557=_0x160605;return this[_0x366557(0xbe)];},'set':function(_0x170922){const _0xa2c7b5=_0x160605;Cesium['Check'][_0xa2c7b5(0xb3)][_0xa2c7b5(0xb7)]('point\x20color',_0x170922),Cesium[_0xa2c7b5(0xa7)][_0xa2c7b5(0xc4)](_0x170922,this[_0xa2c7b5(0xbe)]);}},'emissionColor':{'get':function(){const _0x55fdf2=_0x160605;return this[_0x55fdf2(0xbc)];},'set':function(_0x2e2b0c){const _0x1637d5=_0x160605;Cesium[_0x1637d5(0xc8)]['typeOf']['object'](_0x1637d5(0xba),_0x2e2b0c),Cesium[_0x1637d5(0xa7)][_0x1637d5(0xc4)](_0x2e2b0c,this[_0x1637d5(0xbc)]);}},'image':{'get':function(){const _0x41da2a=_0x160605;return this[_0x41da2a(0xa6)];},'set':function(_0x3a5ef4){const _0x4cc118=_0x160605;this[_0x4cc118(0xc6)]=![],this[_0x4cc118(0xa6)]=_0x3a5ef4,typeof _0x3a5ef4===_0x4cc118(0xaa)?this['_loadImage']():this['_imageReady']=!![];}},'imageReady':{'get':function(){const _0x30c02a=_0x160605;return this[_0x30c02a(0xc6)];}},'calloutColor':{'get':function(){const _0x1f834c=_0x160605;return this[_0x1f834c(0x9f)];},'set':function(_0x384e2c){const _0x3893ec=_0x160605;this[_0x3893ec(0x9f)]!==_0x384e2c&&(this[_0x3893ec(0x9f)]=_0x384e2c);}},'calloutWidth':{'get':function(){const _0x383ffc=_0x160605;return this[_0x383ffc(0xac)];},'set':function(_0x44e72c){const _0x22441f=_0x160605;this[_0x22441f(0xac)]!==_0x44e72c&&(this[_0x22441f(0xac)]=_0x44e72c);}},'billboardMode':{'get':function(){const _0x83298e=_0x160605;return this[_0x83298e(0xb5)];},'set':function(_0x383671){const _0x1bb7d8=_0x160605;this[_0x1bb7d8(0xb5)]!==_0x383671&&(this['_billboardMode']=_0x383671);}}});

    const _0xfe30=['418087qnftKC','490979WwoWWv','freeze','460512rjMGIb','358457CzltJT','10ZKLGkn','36304ZDowOu','4tETSIK','1yiirFd','85203zdklzN','385317ELRNbI'];const _0x2a88d2=_0x2361;function _0x2361(_0x5f3443,_0x4e8ba1){_0x5f3443=_0x5f3443-0x11a;let _0xfe306d=_0xfe30[_0x5f3443];return _0xfe306d;}(function(_0xdc1504,_0x1c05b4){const _0x5d50d5=_0x2361;while(!![]){try{const _0x177adf=parseInt(_0x5d50d5(0x11d))+parseInt(_0x5d50d5(0x123))*parseInt(_0x5d50d5(0x11a))+parseInt(_0x5d50d5(0x120))+-parseInt(_0x5d50d5(0x11b))+-parseInt(_0x5d50d5(0x122))*parseInt(_0x5d50d5(0x121))+parseInt(_0x5d50d5(0x11c))*parseInt(_0x5d50d5(0x124))+-parseInt(_0x5d50d5(0x11f));if(_0x177adf===_0x1c05b4)break;else _0xdc1504['push'](_0xdc1504['shift']());}catch(_0x4dfefb){_0xdc1504['push'](_0xdc1504['shift']());}}}(_0xfe30,0x6186a));const ContentState={'UNLOADED':0x0,'LOADING':0x1,'PARSING':0x2,'READY':0x3,'FAILED':0x4};var _0x1dc358 = Object[_0x2a88d2(0x11e)](ContentState);

    const _0x3f2c=['1auohOz','213563IIjcQJ','freeze','230454gpInqe','119183wiJwuH','6rOkuwP','2045NZtNyW','199821gvduZU','149491rrdwGm','129628uxtoEf','1JxTkFX','1YGqqjJ','59RDUWCQ'];function _0x4f8b(_0x56c8c7,_0x9e253d){_0x56c8c7=_0x56c8c7-0x93;let _0x3f2c6c=_0x3f2c[_0x56c8c7];return _0x3f2c6c;}const _0x49efed=_0x4f8b;(function(_0x502d73,_0x27131b){const _0x1f5fb5=_0x4f8b;while(!![]){try{const _0x3495f8=-parseInt(_0x1f5fb5(0x9a))*parseInt(_0x1f5fb5(0x9e))+parseInt(_0x1f5fb5(0x9d))*-parseInt(_0x1f5fb5(0x97))+-parseInt(_0x1f5fb5(0x93))*parseInt(_0x1f5fb5(0x94))+-parseInt(_0x1f5fb5(0x99))*-parseInt(_0x1f5fb5(0x9f))+-parseInt(_0x1f5fb5(0x9c))+-parseInt(_0x1f5fb5(0x96))+-parseInt(_0x1f5fb5(0x9b))*-parseInt(_0x1f5fb5(0x98));if(_0x3495f8===_0x27131b)break;else _0x502d73['push'](_0x502d73['shift']());}catch(_0x4b8527){_0x502d73['push'](_0x502d73['shift']());}}}(_0x3f2c,0x1e818));const S3MPixelFormat={'LUMINANCE_8':0x1,'LUMINANCE_16':0x2,'ALPHA':0x3,'ALPHA_4_LUMINANCE_4':0x4,'LUMINANCE_ALPHA':0x5,'RGB_565':0x6,'BGR565':0x7,'RGB':0xa,'BGR':0xb,'ARGB':0xc,'ABGR':0xd,'BGRA':0xe,'WEBP':0x19,'RGBA':0x1c,'DXT1':0x11,'DXT2':0x12,'DXT3':0x13,'DXT4':0x14,'DXT5':0x15,'CRN_DXT5':0x1a,'STANDARD_CRN':0x1b};var _0x4d10fa = Object[_0x49efed(0x95)](S3MPixelFormat);

    const _0x4b56=['1280187RTggzB','1038MlPMDJ','350758XwPkMl','freeze','379937wRaCQy','2338qFgFHg','3865201yubxnd','419IKnuvU','286aWHgyX','807614NUHXpP'];const _0x3e48bb=_0x3261;(function(_0x24524e,_0x51c22a){const _0x4dcbfa=_0x3261;while(!![]){try{const _0x354ecc=-parseInt(_0x4dcbfa(0xae))+-parseInt(_0x4dcbfa(0xab))*-parseInt(_0x4dcbfa(0xa7))+-parseInt(_0x4dcbfa(0xaa))+-parseInt(_0x4dcbfa(0xa9))+-parseInt(_0x4dcbfa(0xac))+-parseInt(_0x4dcbfa(0xaf))*parseInt(_0x4dcbfa(0xa8))+parseInt(_0x4dcbfa(0xb0));if(_0x354ecc===_0x51c22a)break;else _0x24524e['push'](_0x24524e['shift']());}catch(_0x40b9a7){_0x24524e['push'](_0x24524e['shift']());}}}(_0x4b56,0xc679f));function _0x3261(_0x52f4a7,_0x5e786c){_0x52f4a7=_0x52f4a7-0xa7;let _0x4b561c=_0x4b56[_0x52f4a7];return _0x4b561c;}const S3MCompressType={'encNONE':0x0,'enrS3TCDXTN':0xe,'enrPVRTPF_PVRTC2':0x13,'enrPVRTPF_PVRTC':0x14,'enrPVRTPF_PVRTC_4bpp':0x15,'enrPVRTPF_ETC1':0x16};var S3MCompressType$1 = Object[_0x3e48bb(0xad)](S3MCompressType);

    const _0x1e76=['freeze','209273paIDeL','66099AoGFMN','1CyZrOr','1uPecYI','3TqfPuc','1ssLvtF','60637TwRaMi','97462GlyCLi','161dbqnIO','277799HjDiQV','914MNEtUN','2ADrZbL','1Rnxipz','160957ztKRZx'];const _0xa395bb=_0x219d;(function(_0x5af1d0,_0x75835c){const _0x272206=_0x219d;while(!![]){try{const _0x332754=parseInt(_0x272206(0xef))*parseInt(_0x272206(0xed))+-parseInt(_0x272206(0xf0))*parseInt(_0x272206(0xec))+parseInt(_0x272206(0xeb))*-parseInt(_0x272206(0xf1))+-parseInt(_0x272206(0xf2))*-parseInt(_0x272206(0xea))+-parseInt(_0x272206(0xe7))*parseInt(_0x272206(0xee))+parseInt(_0x272206(0xe8))*parseInt(_0x272206(0xe5))+parseInt(_0x272206(0xe6))*parseInt(_0x272206(0xe9));if(_0x332754===_0x75835c)break;else _0x5af1d0['push'](_0x5af1d0['shift']());}catch(_0x9548a6){_0x5af1d0['push'](_0x5af1d0['shift']());}}}(_0x1e76,0x2c831));function _0x219d(_0xc9a1f6,_0x14f8c2){_0xc9a1f6=_0xc9a1f6-0xe4;let _0x1e76e3=_0x1e76[_0xc9a1f6];return _0x1e76e3;}const VertexCompressOptions={'SVC_Vertex':0x1,'SVC_Normal':0x2,'SVC_VertexColor':0x4,'SVC_SecondColor':0x8,'SVC_TexutreCoord':0x10,'SVC_TexutreCoordIsW':0x20};var _0x25c9a4 = Object[_0xa395bb(0xe4)](VertexCompressOptions);

    var tmp = {};

    /* pako 1.0.4 nodeca/pako */(function(f){tmp = f();})(function(){return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r);}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


        var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                        (typeof Uint16Array !== 'undefined') &&
                        (typeof Int32Array !== 'undefined');


        exports.assign = function (obj /*from1, from2, from3, ...*/) {
            var sources = Array.prototype.slice.call(arguments, 1);
            while (sources.length) {
                var source = sources.shift();
                if (!source) { continue; }

                if (typeof source !== 'object') {
                    throw new TypeError(source + 'must be non-object');
                }

                for (var p in source) {
                    if (source.hasOwnProperty(p)) {
                        obj[p] = source[p];
                    }
                }
            }

            return obj;
        };


    // reduce buffer size, avoiding mem copy
        exports.shrinkBuf = function (buf, size) {
            if (buf.length === size) { return buf; }
            if (buf.subarray) { return buf.subarray(0, size); }
            buf.length = size;
            return buf;
        };


        var fnTyped = {
            arraySet: function (dest, src, src_offs, len, dest_offs) {
                if (src.subarray && dest.subarray) {
                    dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
                    return;
                }
                // Fallback to ordinary array
                for (var i = 0; i < len; i++) {
                    dest[dest_offs + i] = src[src_offs + i];
                }
            },
            // Join array of chunks to single array.
            flattenChunks: function (chunks) {
                var i, l, len, pos, chunk, result;

                // calculate data length
                len = 0;
                for (i = 0, l = chunks.length; i < l; i++) {
                    len += chunks[i].length;
                }

                // join chunks
                result = new Uint8Array(len);
                pos = 0;
                for (i = 0, l = chunks.length; i < l; i++) {
                    chunk = chunks[i];
                    result.set(chunk, pos);
                    pos += chunk.length;
                }

                return result;
            }
        };

        var fnUntyped = {
            arraySet: function (dest, src, src_offs, len, dest_offs) {
                for (var i = 0; i < len; i++) {
                    dest[dest_offs + i] = src[src_offs + i];
                }
            },
            // Join array of chunks to single array.
            flattenChunks: function (chunks) {
                return [].concat.apply([], chunks);
            }
        };


    // Enable/Disable typed arrays use, for testing
    //
        exports.setTyped = function (on) {
            if (on) {
                exports.Buf8  = Uint8Array;
                exports.Buf16 = Uint16Array;
                exports.Buf32 = Int32Array;
                exports.assign(exports, fnTyped);
            } else {
                exports.Buf8  = Array;
                exports.Buf16 = Array;
                exports.Buf32 = Array;
                exports.assign(exports, fnUntyped);
            }
        };

        exports.setTyped(TYPED_OK);

    },{}],2:[function(require,module,exports){


        var utils = require('./common');


    // Quick check if we can use fast array to bin string conversion
    //
    // - apply(Array) can fail on Android 2.2
    // - apply(Uint8Array) can fail on iOS 5.1 Safary
    //
        var STR_APPLY_OK = true;
        var STR_APPLY_UIA_OK = true;

        try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
        try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


    // Table with utf8 lengths (calculated by first byte of sequence)
    // Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
    // because max possible codepoint is 0x10ffff
        var _utf8len = new utils.Buf8(256);
        for (var q = 0; q < 256; q++) {
            _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
        }
        _utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


    // convert string to array (typed, when possible)
        exports.string2buf = function (str) {
            var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

            // count binary size
            for (m_pos = 0; m_pos < str_len; m_pos++) {
                c = str.charCodeAt(m_pos);
                if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
                    c2 = str.charCodeAt(m_pos + 1);
                    if ((c2 & 0xfc00) === 0xdc00) {
                        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                        m_pos++;
                    }
                }
                buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
            }

            // allocate buffer
            buf = new utils.Buf8(buf_len);

            // convert
            for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
                c = str.charCodeAt(m_pos);
                if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
                    c2 = str.charCodeAt(m_pos + 1);
                    if ((c2 & 0xfc00) === 0xdc00) {
                        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                        m_pos++;
                    }
                }
                if (c < 0x80) {
                    /* one byte */
                    buf[i++] = c;
                } else if (c < 0x800) {
                    /* two bytes */
                    buf[i++] = 0xC0 | (c >>> 6);
                    buf[i++] = 0x80 | (c & 0x3f);
                } else if (c < 0x10000) {
                    /* three bytes */
                    buf[i++] = 0xE0 | (c >>> 12);
                    buf[i++] = 0x80 | (c >>> 6 & 0x3f);
                    buf[i++] = 0x80 | (c & 0x3f);
                } else {
                    /* four bytes */
                    buf[i++] = 0xf0 | (c >>> 18);
                    buf[i++] = 0x80 | (c >>> 12 & 0x3f);
                    buf[i++] = 0x80 | (c >>> 6 & 0x3f);
                    buf[i++] = 0x80 | (c & 0x3f);
                }
            }

            return buf;
        };

    // Helper (used in 2 places)
        function buf2binstring(buf, len) {
            // use fallback for big arrays to avoid stack overflow
            if (len < 65537) {
                if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
                    return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
                }
            }

            var result = '';
            for (var i = 0; i < len; i++) {
                result += String.fromCharCode(buf[i]);
            }
            return result;
        }


    // Convert byte array to binary string
        exports.buf2binstring = function (buf) {
            return buf2binstring(buf, buf.length);
        };


    // Convert binary string (typed, when possible)
        exports.binstring2buf = function (str) {
            var buf = new utils.Buf8(str.length);
            for (var i = 0, len = buf.length; i < len; i++) {
                buf[i] = str.charCodeAt(i);
            }
            return buf;
        };


    // convert array to string
        exports.buf2string = function (buf, max) {
            var i, out, c, c_len;
            var len = max || buf.length;

            // Reserve max possible length (2 words per char)
            // NB: by unknown reasons, Array is significantly faster for
            //     String.fromCharCode.apply than Uint16Array.
            var utf16buf = new Array(len * 2);

            for (out = 0, i = 0; i < len;) {
                c = buf[i++];
                // quick process ascii
                if (c < 0x80) { utf16buf[out++] = c; continue; }

                c_len = _utf8len[c];
                // skip 5 & 6 byte codes
                if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

                // apply mask on first byte
                c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
                // join the rest
                while (c_len > 1 && i < len) {
                    c = (c << 6) | (buf[i++] & 0x3f);
                    c_len--;
                }

                // terminated by end of string?
                if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

                if (c < 0x10000) {
                    utf16buf[out++] = c;
                } else {
                    c -= 0x10000;
                    utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
                    utf16buf[out++] = 0xdc00 | (c & 0x3ff);
                }
            }

            return buf2binstring(utf16buf, out);
        };


    // Calculate max possible position in utf8 buffer,
    // that will not break sequence. If that's not possible
    // - (very small limits) return max size as is.
    //
    // buf[] - utf8 bytes array
    // max   - length limit (mandatory);
        exports.utf8border = function (buf, max) {
            var pos;

            max = max || buf.length;
            if (max > buf.length) { max = buf.length; }

            // go back from last position, until start of sequence found
            pos = max - 1;
            while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

            // Fuckup - very small and broken sequence,
            // return max, because we should return something anyway.
            if (pos < 0) { return max; }

            // If we came to start of buffer - that means vuffer is too small,
            // return max too.
            if (pos === 0) { return max; }

            return (pos + _utf8len[buf[pos]] > max) ? pos : max;
        };

    },{"./common":1}],3:[function(require,module,exports){

    // Note: adler32 takes 12% for level 0 and 2% for level 6.
    // It doesn't worth to make additional optimizationa as in original.
    // Small size is preferable.

        function adler32(adler, buf, len, pos) {
            var s1 = (adler & 0xffff) |0,
                s2 = ((adler >>> 16) & 0xffff) |0,
                n = 0;

            while (len !== 0) {
                // Set limit ~ twice less than 5552, to keep
                // s2 in 31-bits, because we force signed ints.
                // in other case %= will fail.
                n = len > 2000 ? 2000 : len;
                len -= n;

                do {
                    s1 = (s1 + buf[pos++]) |0;
                    s2 = (s2 + s1) |0;
                } while (--n);

                s1 %= 65521;
                s2 %= 65521;
            }

            return (s1 | (s2 << 16)) |0;
        }


        module.exports = adler32;

    },{}],4:[function(require,module,exports){


        module.exports = {

            /* Allowed flush values; see deflate() and inflate() below for details */
            Z_NO_FLUSH:         0,
            Z_PARTIAL_FLUSH:    1,
            Z_SYNC_FLUSH:       2,
            Z_FULL_FLUSH:       3,
            Z_FINISH:           4,
            Z_BLOCK:            5,
            Z_TREES:            6,

            /* Return codes for the compression/decompression functions. Negative values
             * are errors, positive values are used for special but normal events.
             */
            Z_OK:               0,
            Z_STREAM_END:       1,
            Z_NEED_DICT:        2,
            Z_ERRNO:           -1,
            Z_STREAM_ERROR:    -2,
            Z_DATA_ERROR:      -3,
            //Z_MEM_ERROR:     -4,
            Z_BUF_ERROR:       -5,
            //Z_VERSION_ERROR: -6,

            /* compression levels */
            Z_NO_COMPRESSION:         0,
            Z_BEST_SPEED:             1,
            Z_BEST_COMPRESSION:       9,
            Z_DEFAULT_COMPRESSION:   -1,


            Z_FILTERED:               1,
            Z_HUFFMAN_ONLY:           2,
            Z_RLE:                    3,
            Z_FIXED:                  4,
            Z_DEFAULT_STRATEGY:       0,

            /* Possible values of the data_type field (though see inflate()) */
            Z_BINARY:                 0,
            Z_TEXT:                   1,
            //Z_ASCII:                1, // = Z_TEXT (deprecated)
            Z_UNKNOWN:                2,

            /* The deflate compression method */
            Z_DEFLATED:               8
            //Z_NULL:                 null // Use -1 or null inline, depending on var type
        };

    },{}],5:[function(require,module,exports){

    // Note: we can't get significant speed boost here.
    // So write code to minimize size - no pregenerated tables
    // and array tools dependencies.


    // Use ordinary array, since untyped makes no boost here
        function makeTable() {
            var c, table = [];

            for (var n = 0; n < 256; n++) {
                c = n;
                for (var k = 0; k < 8; k++) {
                    c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
                }
                table[n] = c;
            }

            return table;
        }

    // Create table on load. Just 255 signed longs. Not a problem.
        var crcTable = makeTable();


        function crc32(crc, buf, len, pos) {
            var t = crcTable,
                end = pos + len;

            crc ^= -1;

            for (var i = pos; i < end; i++) {
                crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
            }

            return (crc ^ (-1)); // >>> 0;
        }


        module.exports = crc32;

    },{}],6:[function(require,module,exports){


        function GZheader() {
            /* true if compressed data believed to be text */
            this.text       = 0;
            /* modification time */
            this.time       = 0;
            /* extra flags (not used when writing a gzip file) */
            this.xflags     = 0;
            /* operating system */
            this.os         = 0;
            /* pointer to extra field or Z_NULL if none */
            this.extra      = null;
            /* extra field length (valid if extra != Z_NULL) */
            this.extra_len  = 0; // Actually, we don't need it in JS,
                                 // but leave for few code modifications

            //
            // Setup limits is not necessary because in js we should not preallocate memory
            // for inflate use constant limit in 65536 bytes
            //

            /* space at extra (only when reading header) */
            // this.extra_max  = 0;
            /* pointer to zero-terminated file name or Z_NULL */
            this.name       = '';
            /* space at name (only when reading header) */
            // this.name_max   = 0;
            /* pointer to zero-terminated comment or Z_NULL */
            this.comment    = '';
            /* space at comment (only when reading header) */
            // this.comm_max   = 0;
            /* true if there was or will be a header crc */
            this.hcrc       = 0;
            /* true when done reading gzip header (not used when writing a gzip file) */
            this.done       = false;
        }

        module.exports = GZheader;

    },{}],7:[function(require,module,exports){

    // See state defs from inflate.js
        var BAD = 30;       /* got a data error -- remain here until reset */
        var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

        /*
         Decode literal, length, and distance codes and write out the resulting
         literal and match bytes until either not enough input or output is
         available, an end-of-block is encountered, or a data error is encountered.
         When large enough input and output buffers are supplied to inflate(), for
         example, a 16K input buffer and a 64K output buffer, more than 95% of the
         inflate execution time is spent in this routine.

         Entry assumptions:

         state.mode === LEN
         strm.avail_in >= 6
         strm.avail_out >= 258
         start >= strm.avail_out
         state.bits < 8

         On return, state.mode is one of:

         LEN -- ran out of enough output space or enough available input
         TYPE -- reached end of block code, inflate() to interpret next block
         BAD -- error in block data

         Notes:

         - The maximum input bits used by a length/distance pair is 15 bits for the
         length code, 5 bits for the length extra, 15 bits for the distance code,
         and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
         Therefore if strm.avail_in >= 6, then there is enough input to avoid
         checking for available input while decoding.

         - The maximum bytes that a single length/distance pair can output is 258
         bytes, which is the maximum length that can be coded.  inflate_fast()
         requires strm.avail_out >= 258 for each loop to avoid checking for
         output space.
         */
        module.exports = function inflate_fast(strm, start) {
            var state;
            var _in;                    /* local strm.input */
            var last;                   /* have enough input while in < last */
            var _out;                   /* local strm.output */
            var beg;                    /* inflate()'s initial strm.output */
            var end;                    /* while out < end, enough space available */
    //#ifdef INFLATE_STRICT
            var dmax;                   /* maximum distance from zlib header */
    //#endif
            var wsize;                  /* window size or zero if not using window */
            var whave;                  /* valid bytes in the window */
            var wnext;                  /* window write index */
            // Use `s_window` instead `window`, avoid conflict with instrumentation tools
            var s_window;               /* allocated sliding window, if wsize != 0 */
            var hold;                   /* local strm.hold */
            var bits;                   /* local strm.bits */
            var lcode;                  /* local strm.lencode */
            var dcode;                  /* local strm.distcode */
            var lmask;                  /* mask for first level of length codes */
            var dmask;                  /* mask for first level of distance codes */
            var here;                   /* retrieved table entry */
            var op;                     /* code bits, operation, extra bits, or */
            /*  window position, window bytes to copy */
            var len;                    /* match length, unused bytes */
            var dist;                   /* match distance */
            var from;                   /* where to copy match from */
            var from_source;


            var input, output; // JS specific, because we have no pointers

            /* copy state to local variables */
            state = strm.state;
            //here = state.here;
            _in = strm.next_in;
            input = strm.input;
            last = _in + (strm.avail_in - 5);
            _out = strm.next_out;
            output = strm.output;
            beg = _out - (start - strm.avail_out);
            end = _out + (strm.avail_out - 257);
    //#ifdef INFLATE_STRICT
            dmax = state.dmax;
    //#endif
            wsize = state.wsize;
            whave = state.whave;
            wnext = state.wnext;
            s_window = state.window;
            hold = state.hold;
            bits = state.bits;
            lcode = state.lencode;
            dcode = state.distcode;
            lmask = (1 << state.lenbits) - 1;
            dmask = (1 << state.distbits) - 1;


            /* decode literals and length/distances until end-of-block or not enough
             input data or output space */

            top:
                do {
                    if (bits < 15) {
                        hold += input[_in++] << bits;
                        bits += 8;
                        hold += input[_in++] << bits;
                        bits += 8;
                    }

                    here = lcode[hold & lmask];

                    dolen:
                        for (;;) { // Goto emulation
                            op = here >>> 24/*here.bits*/;
                            hold >>>= op;
                            bits -= op;
                            op = (here >>> 16) & 0xff/*here.op*/;
                            if (op === 0) {                          /* literal */
                                //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
                                //        "inflate:         literal '%c'\n" :
                                //        "inflate:         literal 0x%02x\n", here.val));
                                output[_out++] = here & 0xffff/*here.val*/;
                            }
                            else if (op & 16) {                     /* length base */
                                len = here & 0xffff/*here.val*/;
                                op &= 15;                           /* number of extra bits */
                                if (op) {
                                    if (bits < op) {
                                        hold += input[_in++] << bits;
                                        bits += 8;
                                    }
                                    len += hold & ((1 << op) - 1);
                                    hold >>>= op;
                                    bits -= op;
                                }
                                //Tracevv((stderr, "inflate:         length %u\n", len));
                                if (bits < 15) {
                                    hold += input[_in++] << bits;
                                    bits += 8;
                                    hold += input[_in++] << bits;
                                    bits += 8;
                                }
                                here = dcode[hold & dmask];

                                dodist:
                                    for (;;) { // goto emulation
                                        op = here >>> 24/*here.bits*/;
                                        hold >>>= op;
                                        bits -= op;
                                        op = (here >>> 16) & 0xff/*here.op*/;

                                        if (op & 16) {                      /* distance base */
                                            dist = here & 0xffff/*here.val*/;
                                            op &= 15;                       /* number of extra bits */
                                            if (bits < op) {
                                                hold += input[_in++] << bits;
                                                bits += 8;
                                                if (bits < op) {
                                                    hold += input[_in++] << bits;
                                                    bits += 8;
                                                }
                                            }
                                            dist += hold & ((1 << op) - 1);
    //#ifdef INFLATE_STRICT
                                            if (dist > dmax) {
                                                strm.msg = 'invalid distance too far back';
                                                state.mode = BAD;
                                                break top;
                                            }
    //#endif
                                            hold >>>= op;
                                            bits -= op;
                                            //Tracevv((stderr, "inflate:         distance %u\n", dist));
                                            op = _out - beg;                /* max distance in output */
                                            if (dist > op) {                /* see if copy from window */
                                                op = dist - op;               /* distance back in window */
                                                if (op > whave) {
                                                    if (state.sane) {
                                                        strm.msg = 'invalid distance too far back';
                                                        state.mode = BAD;
                                                        break top;
                                                    }

    // (!) This block is disabled in zlib defailts,
    // don't enable it for binary compatibility
    //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
    //                if (len <= op - whave) {
    //                  do {
    //                    output[_out++] = 0;
    //                  } while (--len);
    //                  continue top;
    //                }
    //                len -= op - whave;
    //                do {
    //                  output[_out++] = 0;
    //                } while (--op > whave);
    //                if (op === 0) {
    //                  from = _out - dist;
    //                  do {
    //                    output[_out++] = output[from++];
    //                  } while (--len);
    //                  continue top;
    //                }
    //#endif
                                                }
                                                from = 0; // window index
                                                from_source = s_window;
                                                if (wnext === 0) {           /* very common case */
                                                    from += wsize - op;
                                                    if (op < len) {         /* some from window */
                                                        len -= op;
                                                        do {
                                                            output[_out++] = s_window[from++];
                                                        } while (--op);
                                                        from = _out - dist;  /* rest from output */
                                                        from_source = output;
                                                    }
                                                }
                                                else if (wnext < op) {      /* wrap around window */
                                                    from += wsize + wnext - op;
                                                    op -= wnext;
                                                    if (op < len) {         /* some from end of window */
                                                        len -= op;
                                                        do {
                                                            output[_out++] = s_window[from++];
                                                        } while (--op);
                                                        from = 0;
                                                        if (wnext < len) {  /* some from start of window */
                                                            op = wnext;
                                                            len -= op;
                                                            do {
                                                                output[_out++] = s_window[from++];
                                                            } while (--op);
                                                            from = _out - dist;      /* rest from output */
                                                            from_source = output;
                                                        }
                                                    }
                                                }
                                                else {                      /* contiguous in window */
                                                    from += wnext - op;
                                                    if (op < len) {         /* some from window */
                                                        len -= op;
                                                        do {
                                                            output[_out++] = s_window[from++];
                                                        } while (--op);
                                                        from = _out - dist;  /* rest from output */
                                                        from_source = output;
                                                    }
                                                }
                                                while (len > 2) {
                                                    output[_out++] = from_source[from++];
                                                    output[_out++] = from_source[from++];
                                                    output[_out++] = from_source[from++];
                                                    len -= 3;
                                                }
                                                if (len) {
                                                    output[_out++] = from_source[from++];
                                                    if (len > 1) {
                                                        output[_out++] = from_source[from++];
                                                    }
                                                }
                                            }
                                            else {
                                                from = _out - dist;          /* copy direct from output */
                                                do {                        /* minimum length is three */
                                                    output[_out++] = output[from++];
                                                    output[_out++] = output[from++];
                                                    output[_out++] = output[from++];
                                                    len -= 3;
                                                } while (len > 2);
                                                if (len) {
                                                    output[_out++] = output[from++];
                                                    if (len > 1) {
                                                        output[_out++] = output[from++];
                                                    }
                                                }
                                            }
                                        }
                                        else if ((op & 64) === 0) {          /* 2nd level distance code */
                                            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
                                            continue dodist;
                                        }
                                        else {
                                            strm.msg = 'invalid distance code';
                                            state.mode = BAD;
                                            break top;
                                        }

                                        break; // need to emulate goto via "continue"
                                    }
                            }
                            else if ((op & 64) === 0) {              /* 2nd level length code */
                                here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
                                continue dolen;
                            }
                            else if (op & 32) {                     /* end-of-block */
                                //Tracevv((stderr, "inflate:         end of block\n"));
                                state.mode = TYPE;
                                break top;
                            }
                            else {
                                strm.msg = 'invalid literal/length code';
                                state.mode = BAD;
                                break top;
                            }

                            break; // need to emulate goto via "continue"
                        }
                } while (_in < last && _out < end);

            /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
            len = bits >> 3;
            _in -= len;
            bits -= len << 3;
            hold &= (1 << bits) - 1;

            /* update state and return */
            strm.next_in = _in;
            strm.next_out = _out;
            strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
            strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
            state.hold = hold;
            state.bits = bits;
            return;
        };

    },{}],8:[function(require,module,exports){


        var utils         = require('../utils/common');
        var adler32       = require('./adler32');
        var crc32         = require('./crc32');
        var inflate_fast  = require('./inffast');
        var inflate_table = require('./inftrees');

        var CODES = 0;
        var LENS = 1;
        var DISTS = 2;

        /* Public constants ==========================================================*/
        /* ===========================================================================*/


        /* Allowed flush values; see deflate() and inflate() below for details */
    //var Z_NO_FLUSH      = 0;
    //var Z_PARTIAL_FLUSH = 1;
    //var Z_SYNC_FLUSH    = 2;
    //var Z_FULL_FLUSH    = 3;
        var Z_FINISH        = 4;
        var Z_BLOCK         = 5;
        var Z_TREES         = 6;


        /* Return codes for the compression/decompression functions. Negative values
         * are errors, positive values are used for special but normal events.
         */
        var Z_OK            = 0;
        var Z_STREAM_END    = 1;
        var Z_NEED_DICT     = 2;
    //var Z_ERRNO         = -1;
        var Z_STREAM_ERROR  = -2;
        var Z_DATA_ERROR    = -3;
        var Z_MEM_ERROR     = -4;
        var Z_BUF_ERROR     = -5;
    //var Z_VERSION_ERROR = -6;

        /* The deflate compression method */
        var Z_DEFLATED  = 8;


        /* STATES ====================================================================*/
        /* ===========================================================================*/


        var    HEAD = 1;       /* i: waiting for magic header */
        var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
        var    TIME = 3;       /* i: waiting for modification time (gzip) */
        var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
        var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
        var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
        var    NAME = 7;       /* i: waiting for end of file name (gzip) */
        var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
        var    HCRC = 9;       /* i: waiting for header crc (gzip) */
        var    DICTID = 10;    /* i: waiting for dictionary check value */
        var    DICT = 11;      /* waiting for inflateSetDictionary() call */
        var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
        var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
        var        STORED = 14;    /* i: waiting for stored size (length and complement) */
        var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
        var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
        var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
        var        LENLENS = 18;   /* i: waiting for code length code lengths */
        var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
        var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
        var            LEN = 21;       /* i: waiting for length/lit/eob code */
        var            LENEXT = 22;    /* i: waiting for length extra bits */
        var            DIST = 23;      /* i: waiting for distance code */
        var            DISTEXT = 24;   /* i: waiting for distance extra bits */
        var            MATCH = 25;     /* o: waiting for output space to copy string */
        var            LIT = 26;       /* o: waiting for output space to write literal */
        var    CHECK = 27;     /* i: waiting for 32-bit check value */
        var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
        var    DONE = 29;      /* finished check, done -- remain here until reset */
        var    BAD = 30;       /* got a data error -- remain here until reset */
        var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
        var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

        /* ===========================================================================*/



        var ENOUGH_LENS = 852;
        var ENOUGH_DISTS = 592;
    //var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

        var MAX_WBITS = 15;
        /* 32K LZ77 window */
        var DEF_WBITS = MAX_WBITS;


        function zswap32(q) {
            return  (((q >>> 24) & 0xff) +
                     ((q >>> 8) & 0xff00) +
                     ((q & 0xff00) << 8) +
                     ((q & 0xff) << 24));
        }


        function InflateState() {
            this.mode = 0;             /* current inflate mode */
            this.last = false;          /* true if processing last block */
            this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
            this.havedict = false;      /* true if dictionary provided */
            this.flags = 0;             /* gzip header method and flags (0 if zlib) */
            this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
            this.check = 0;             /* protected copy of check value */
            this.total = 0;             /* protected copy of output count */
            // TODO: may be {}
            this.head = null;           /* where to save gzip header information */

            /* sliding window */
            this.wbits = 0;             /* log base 2 of requested window size */
            this.wsize = 0;             /* window size or zero if not using window */
            this.whave = 0;             /* valid bytes in the window */
            this.wnext = 0;             /* window write index */
            this.window = null;         /* allocated sliding window, if needed */

            /* bit accumulator */
            this.hold = 0;              /* input bit accumulator */
            this.bits = 0;              /* number of bits in "in" */

            /* for string and stored block copying */
            this.length = 0;            /* literal or length of data to copy */
            this.offset = 0;            /* distance back to copy string from */

            /* for table and code decoding */
            this.extra = 0;             /* extra bits needed */

            /* fixed and dynamic code tables */
            this.lencode = null;          /* starting table for length/literal codes */
            this.distcode = null;         /* starting table for distance codes */
            this.lenbits = 0;           /* index bits for lencode */
            this.distbits = 0;          /* index bits for distcode */

            /* dynamic table building */
            this.ncode = 0;             /* number of code length code lengths */
            this.nlen = 0;              /* number of length code lengths */
            this.ndist = 0;             /* number of distance code lengths */
            this.have = 0;              /* number of code lengths in lens[] */
            this.next = null;              /* next available space in codes[] */

            this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
            this.work = new utils.Buf16(288); /* work area for code table building */

            /*
             because we don't have pointers in js, we use lencode and distcode directly
             as buffers so we don't need codes
             */
            //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
            this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
            this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
            this.sane = 0;                   /* if false, allow invalid distance too far */
            this.back = 0;                   /* bits back of last unprocessed length/lit */
            this.was = 0;                    /* initial length of match */
        }

        function inflateResetKeep(strm) {
            var state;

            if (!strm || !strm.state) { return Z_STREAM_ERROR; }
            state = strm.state;
            strm.total_in = strm.total_out = state.total = 0;
            strm.msg = ''; /*Z_NULL*/
            if (state.wrap) {       /* to support ill-conceived Java test suite */
                strm.adler = state.wrap & 1;
            }
            state.mode = HEAD;
            state.last = 0;
            state.havedict = 0;
            state.dmax = 32768;
            state.head = null/*Z_NULL*/;
            state.hold = 0;
            state.bits = 0;
            //state.lencode = state.distcode = state.next = state.codes;
            state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
            state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

            state.sane = 1;
            state.back = -1;
            //Tracev((stderr, "inflate: reset\n"));
            return Z_OK;
        }

        function inflateReset(strm) {
            var state;

            if (!strm || !strm.state) { return Z_STREAM_ERROR; }
            state = strm.state;
            state.wsize = 0;
            state.whave = 0;
            state.wnext = 0;
            return inflateResetKeep(strm);

        }

        function inflateReset2(strm, windowBits) {
            var wrap;
            var state;

            /* get the state */
            if (!strm || !strm.state) { return Z_STREAM_ERROR; }
            state = strm.state;

            /* extract wrap request from windowBits parameter */
            if (windowBits < 0) {
                wrap = 0;
                windowBits = -windowBits;
            }
            else {
                wrap = (windowBits >> 4) + 1;
                if (windowBits < 48) {
                    windowBits &= 15;
                }
            }

            /* set number of window bits, free window if different */
            if (windowBits && (windowBits < 8 || windowBits > 15)) {
                return Z_STREAM_ERROR;
            }
            if (state.window !== null && state.wbits !== windowBits) {
                state.window = null;
            }

            /* update state and reset the rest of it */
            state.wrap = wrap;
            state.wbits = windowBits;
            return inflateReset(strm);
        }

        function inflateInit2(strm, windowBits) {
            var ret;
            var state;

            if (!strm) { return Z_STREAM_ERROR; }
            //strm.msg = Z_NULL;                 /* in case we return an error */

            state = new InflateState();

            //if (state === Z_NULL) return Z_MEM_ERROR;
            //Tracev((stderr, "inflate: allocated\n"));
            strm.state = state;
            state.window = null/*Z_NULL*/;
            ret = inflateReset2(strm, windowBits);
            if (ret !== Z_OK) {
                strm.state = null/*Z_NULL*/;
            }
            return ret;
        }

        function inflateInit(strm) {
            return inflateInit2(strm, DEF_WBITS);
        }


        /*
         Return state with length and distance decoding tables and index sizes set to
         fixed code decoding.  Normally this returns fixed tables from inffixed.h.
         If BUILDFIXED is defined, then instead this routine builds the tables the
         first time it's called, and returns those tables the first time and
         thereafter.  This reduces the size of the code by about 2K bytes, in
         exchange for a little execution time.  However, BUILDFIXED should not be
         used for threaded applications, since the rewriting of the tables and virgin
         may not be thread-safe.
         */
        var virgin = true;

        var lenfix, distfix; // We have no pointers in JS, so keep tables separate

        function fixedtables(state) {
            /* build fixed huffman tables if first call (may not be thread safe) */
            if (virgin) {
                var sym;

                lenfix = new utils.Buf32(512);
                distfix = new utils.Buf32(32);

                /* literal/length table */
                sym = 0;
                while (sym < 144) { state.lens[sym++] = 8; }
                while (sym < 256) { state.lens[sym++] = 9; }
                while (sym < 280) { state.lens[sym++] = 7; }
                while (sym < 288) { state.lens[sym++] = 8; }

                inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

                /* distance table */
                sym = 0;
                while (sym < 32) { state.lens[sym++] = 5; }

                inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

                /* do this just once */
                virgin = false;
            }

            state.lencode = lenfix;
            state.lenbits = 9;
            state.distcode = distfix;
            state.distbits = 5;
        }


        /*
         Update the window with the last wsize (normally 32K) bytes written before
         returning.  If window does not exist yet, create it.  This is only called
         when a window is already in use, or when output has been written during this
         inflate call, but the end of the deflate stream has not been reached yet.
         It is also called to create a window for dictionary data when a dictionary
         is loaded.

         Providing output buffers larger than 32K to inflate() should provide a speed
         advantage, since only the last 32K of output is copied to the sliding window
         upon return from inflate(), and since all distances after the first 32K of
         output will fall in the output data, making match copies simpler and faster.
         The advantage may be dependent on the size of the processor's data caches.
         */
        function updatewindow(strm, src, end, copy) {
            var dist;
            var state = strm.state;

            /* if it hasn't been done already, allocate space for the window */
            if (state.window === null) {
                state.wsize = 1 << state.wbits;
                state.wnext = 0;
                state.whave = 0;

                state.window = new utils.Buf8(state.wsize);
            }

            /* copy state->wsize or less output bytes into the circular window */
            if (copy >= state.wsize) {
                utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
                state.wnext = 0;
                state.whave = state.wsize;
            }
            else {
                dist = state.wsize - state.wnext;
                if (dist > copy) {
                    dist = copy;
                }
                //zmemcpy(state->window + state->wnext, end - copy, dist);
                utils.arraySet(state.window, src, end - copy, dist, state.wnext);
                copy -= dist;
                if (copy) {
                    //zmemcpy(state->window, end - copy, copy);
                    utils.arraySet(state.window, src, end - copy, copy, 0);
                    state.wnext = copy;
                    state.whave = state.wsize;
                }
                else {
                    state.wnext += dist;
                    if (state.wnext === state.wsize) { state.wnext = 0; }
                    if (state.whave < state.wsize) { state.whave += dist; }
                }
            }
            return 0;
        }

        function inflate(strm, flush) {
            var state;
            var input, output;          // input/output buffers
            var next;                   /* next input INDEX */
            var put;                    /* next output INDEX */
            var have, left;             /* available input and output */
            var hold;                   /* bit buffer */
            var bits;                   /* bits in bit buffer */
            var _in, _out;              /* save starting available input and output */
            var copy;                   /* number of stored or match bytes to copy */
            var from;                   /* where to copy match bytes from */
            var from_source;
            var here = 0;               /* current decoding table entry */
            var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
            //var last;                   /* parent table entry */
            var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
            var len;                    /* length to copy for repeats, bits to drop */
            var ret;                    /* return code */
            var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
            var opts;

            var n; // temporary var for NEED_BITS

            var order = /* permutation of code lengths */
                [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


            if (!strm || !strm.state || !strm.output ||
                (!strm.input && strm.avail_in !== 0)) {
                return Z_STREAM_ERROR;
            }

            state = strm.state;
            if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


            //--- LOAD() ---
            put = strm.next_out;
            output = strm.output;
            left = strm.avail_out;
            next = strm.next_in;
            input = strm.input;
            have = strm.avail_in;
            hold = state.hold;
            bits = state.bits;
            //---

            _in = have;
            _out = left;
            ret = Z_OK;

            inf_leave: // goto emulation
                for (;;) {
                    switch (state.mode) {
                        case HEAD:
                            if (state.wrap === 0) {
                                state.mode = TYPEDO;
                                break;
                            }
                            //=== NEEDBITS(16);
                            while (bits < 16) {
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                            }
                            //===//
                            if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
                                state.check = 0/*crc32(0L, Z_NULL, 0)*/;
                                //=== CRC2(state.check, hold);
                                hbuf[0] = hold & 0xff;
                                hbuf[1] = (hold >>> 8) & 0xff;
                                state.check = crc32(state.check, hbuf, 2, 0);
                                //===//

                                //=== INITBITS();
                                hold = 0;
                                bits = 0;
                                //===//
                                state.mode = FLAGS;
                                break;
                            }
                            state.flags = 0;           /* expect zlib header */
                            if (state.head) {
                                state.head.done = false;
                            }
                            if (!(state.wrap & 1) ||   /* check if zlib header allowed */
                                (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
                                strm.msg = 'incorrect header check';
                                state.mode = BAD;
                                break;
                            }
                            if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
                                strm.msg = 'unknown compression method';
                                state.mode = BAD;
                                break;
                            }
                            //--- DROPBITS(4) ---//
                            hold >>>= 4;
                            bits -= 4;
                            //---//
                            len = (hold & 0x0f)/*BITS(4)*/ + 8;
                            if (state.wbits === 0) {
                                state.wbits = len;
                            }
                            else if (len > state.wbits) {
                                strm.msg = 'invalid window size';
                                state.mode = BAD;
                                break;
                            }
                            state.dmax = 1 << len;
                            //Tracev((stderr, "inflate:   zlib header ok\n"));
                            strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
                            state.mode = hold & 0x200 ? DICTID : TYPE;
                            //=== INITBITS();
                            hold = 0;
                            bits = 0;
                            //===//
                            break;
                        case FLAGS:
                            //=== NEEDBITS(16); */
                            while (bits < 16) {
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                            }
                            //===//
                            state.flags = hold;
                            if ((state.flags & 0xff) !== Z_DEFLATED) {
                                strm.msg = 'unknown compression method';
                                state.mode = BAD;
                                break;
                            }
                            if (state.flags & 0xe000) {
                                strm.msg = 'unknown header flags set';
                                state.mode = BAD;
                                break;
                            }
                            if (state.head) {
                                state.head.text = ((hold >> 8) & 1);
                            }
                            if (state.flags & 0x0200) {
                                //=== CRC2(state.check, hold);
                                hbuf[0] = hold & 0xff;
                                hbuf[1] = (hold >>> 8) & 0xff;
                                state.check = crc32(state.check, hbuf, 2, 0);
                                //===//
                            }
                            //=== INITBITS();
                            hold = 0;
                            bits = 0;
                            //===//
                            state.mode = TIME;
                        /* falls through */
                        case TIME:
                            //=== NEEDBITS(32); */
                            while (bits < 32) {
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                            }
                            //===//
                            if (state.head) {
                                state.head.time = hold;
                            }
                            if (state.flags & 0x0200) {
                                //=== CRC4(state.check, hold)
                                hbuf[0] = hold & 0xff;
                                hbuf[1] = (hold >>> 8) & 0xff;
                                hbuf[2] = (hold >>> 16) & 0xff;
                                hbuf[3] = (hold >>> 24) & 0xff;
                                state.check = crc32(state.check, hbuf, 4, 0);
                                //===
                            }
                            //=== INITBITS();
                            hold = 0;
                            bits = 0;
                            //===//
                            state.mode = OS;
                        /* falls through */
                        case OS:
                            //=== NEEDBITS(16); */
                            while (bits < 16) {
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                            }
                            //===//
                            if (state.head) {
                                state.head.xflags = (hold & 0xff);
                                state.head.os = (hold >> 8);
                            }
                            if (state.flags & 0x0200) {
                                //=== CRC2(state.check, hold);
                                hbuf[0] = hold & 0xff;
                                hbuf[1] = (hold >>> 8) & 0xff;
                                state.check = crc32(state.check, hbuf, 2, 0);
                                //===//
                            }
                            //=== INITBITS();
                            hold = 0;
                            bits = 0;
                            //===//
                            state.mode = EXLEN;
                        /* falls through */
                        case EXLEN:
                            if (state.flags & 0x0400) {
                                //=== NEEDBITS(16); */
                                while (bits < 16) {
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                }
                                //===//
                                state.length = hold;
                                if (state.head) {
                                    state.head.extra_len = hold;
                                }
                                if (state.flags & 0x0200) {
                                    //=== CRC2(state.check, hold);
                                    hbuf[0] = hold & 0xff;
                                    hbuf[1] = (hold >>> 8) & 0xff;
                                    state.check = crc32(state.check, hbuf, 2, 0);
                                    //===//
                                }
                                //=== INITBITS();
                                hold = 0;
                                bits = 0;
                                //===//
                            }
                            else if (state.head) {
                                state.head.extra = null/*Z_NULL*/;
                            }
                            state.mode = EXTRA;
                        /* falls through */
                        case EXTRA:
                            if (state.flags & 0x0400) {
                                copy = state.length;
                                if (copy > have) { copy = have; }
                                if (copy) {
                                    if (state.head) {
                                        len = state.head.extra_len - state.length;
                                        if (!state.head.extra) {
                                            // Use untyped array for more conveniend processing later
                                            state.head.extra = new Array(state.head.extra_len);
                                        }
                                        utils.arraySet(
                                            state.head.extra,
                                            input,
                                            next,
                                            // extra field is limited to 65536 bytes
                                            // - no need for additional size check
                                            copy,
                                            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                                            len
                                        );
                                        //zmemcpy(state.head.extra + len, next,
                                        //        len + copy > state.head.extra_max ?
                                        //        state.head.extra_max - len : copy);
                                    }
                                    if (state.flags & 0x0200) {
                                        state.check = crc32(state.check, input, copy, next);
                                    }
                                    have -= copy;
                                    next += copy;
                                    state.length -= copy;
                                }
                                if (state.length) { break inf_leave; }
                            }
                            state.length = 0;
                            state.mode = NAME;
                        /* falls through */
                        case NAME:
                            if (state.flags & 0x0800) {
                                if (have === 0) { break inf_leave; }
                                copy = 0;
                                do {
                                    // TODO: 2 or 1 bytes?
                                    len = input[next + copy++];
                                    /* use constant limit because in js we should not preallocate memory */
                                    if (state.head && len &&
                                        (state.length < 65536 /*state.head.name_max*/)) {
                                        state.head.name += String.fromCharCode(len);
                                    }
                                } while (len && copy < have);

                                if (state.flags & 0x0200) {
                                    state.check = crc32(state.check, input, copy, next);
                                }
                                have -= copy;
                                next += copy;
                                if (len) { break inf_leave; }
                            }
                            else if (state.head) {
                                state.head.name = null;
                            }
                            state.length = 0;
                            state.mode = COMMENT;
                        /* falls through */
                        case COMMENT:
                            if (state.flags & 0x1000) {
                                if (have === 0) { break inf_leave; }
                                copy = 0;
                                do {
                                    len = input[next + copy++];
                                    /* use constant limit because in js we should not preallocate memory */
                                    if (state.head && len &&
                                        (state.length < 65536 /*state.head.comm_max*/)) {
                                        state.head.comment += String.fromCharCode(len);
                                    }
                                } while (len && copy < have);
                                if (state.flags & 0x0200) {
                                    state.check = crc32(state.check, input, copy, next);
                                }
                                have -= copy;
                                next += copy;
                                if (len) { break inf_leave; }
                            }
                            else if (state.head) {
                                state.head.comment = null;
                            }
                            state.mode = HCRC;
                        /* falls through */
                        case HCRC:
                            if (state.flags & 0x0200) {
                                //=== NEEDBITS(16); */
                                while (bits < 16) {
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                }
                                //===//
                                if (hold !== (state.check & 0xffff)) {
                                    strm.msg = 'header crc mismatch';
                                    state.mode = BAD;
                                    break;
                                }
                                //=== INITBITS();
                                hold = 0;
                                bits = 0;
                                //===//
                            }
                            if (state.head) {
                                state.head.hcrc = ((state.flags >> 9) & 1);
                                state.head.done = true;
                            }
                            strm.adler = state.check = 0;
                            state.mode = TYPE;
                            break;
                        case DICTID:
                            //=== NEEDBITS(32); */
                            while (bits < 32) {
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                            }
                            //===//
                            strm.adler = state.check = zswap32(hold);
                            //=== INITBITS();
                            hold = 0;
                            bits = 0;
                            //===//
                            state.mode = DICT;
                        /* falls through */
                        case DICT:
                            if (state.havedict === 0) {
                                //--- RESTORE() ---
                                strm.next_out = put;
                                strm.avail_out = left;
                                strm.next_in = next;
                                strm.avail_in = have;
                                state.hold = hold;
                                state.bits = bits;
                                //---
                                return Z_NEED_DICT;
                            }
                            strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
                            state.mode = TYPE;
                        /* falls through */
                        case TYPE:
                            if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
                        /* falls through */
                        case TYPEDO:
                            if (state.last) {
                                //--- BYTEBITS() ---//
                                hold >>>= bits & 7;
                                bits -= bits & 7;
                                //---//
                                state.mode = CHECK;
                                break;
                            }
                            //=== NEEDBITS(3); */
                            while (bits < 3) {
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                            }
                            //===//
                            state.last = (hold & 0x01)/*BITS(1)*/;
                            //--- DROPBITS(1) ---//
                            hold >>>= 1;
                            bits -= 1;
                            //---//

                            switch ((hold & 0x03)/*BITS(2)*/) {
                                case 0:                             /* stored block */
                                    //Tracev((stderr, "inflate:     stored block%s\n",
                                    //        state.last ? " (last)" : ""));
                                    state.mode = STORED;
                                    break;
                                case 1:                             /* fixed block */
                                    fixedtables(state);
                                    //Tracev((stderr, "inflate:     fixed codes block%s\n",
                                    //        state.last ? " (last)" : ""));
                                    state.mode = LEN_;             /* decode codes */
                                    if (flush === Z_TREES) {
                                        //--- DROPBITS(2) ---//
                                        hold >>>= 2;
                                        bits -= 2;
                                        //---//
                                        break inf_leave;
                                    }
                                    break;
                                case 2:                             /* dynamic block */
                                    //Tracev((stderr, "inflate:     dynamic codes block%s\n",
                                    //        state.last ? " (last)" : ""));
                                    state.mode = TABLE;
                                    break;
                                case 3:
                                    strm.msg = 'invalid block type';
                                    state.mode = BAD;
                            }
                            //--- DROPBITS(2) ---//
                            hold >>>= 2;
                            bits -= 2;
                            //---//
                            break;
                        case STORED:
                            //--- BYTEBITS() ---// /* go to byte boundary */
                            hold >>>= bits & 7;
                            bits -= bits & 7;
                            //---//
                            //=== NEEDBITS(32); */
                            while (bits < 32) {
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                            }
                            //===//
                            if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
                                strm.msg = 'invalid stored block lengths';
                                state.mode = BAD;
                                break;
                            }
                            state.length = hold & 0xffff;
                            //Tracev((stderr, "inflate:       stored length %u\n",
                            //        state.length));
                            //=== INITBITS();
                            hold = 0;
                            bits = 0;
                            //===//
                            state.mode = COPY_;
                            if (flush === Z_TREES) { break inf_leave; }
                        /* falls through */
                        case COPY_:
                            state.mode = COPY;
                        /* falls through */
                        case COPY:
                            copy = state.length;
                            if (copy) {
                                if (copy > have) { copy = have; }
                                if (copy > left) { copy = left; }
                                if (copy === 0) { break inf_leave; }
                                //--- zmemcpy(put, next, copy); ---
                                utils.arraySet(output, input, next, copy, put);
                                //---//
                                have -= copy;
                                next += copy;
                                left -= copy;
                                put += copy;
                                state.length -= copy;
                                break;
                            }
                            //Tracev((stderr, "inflate:       stored end\n"));
                            state.mode = TYPE;
                            break;
                        case TABLE:
                            //=== NEEDBITS(14); */
                            while (bits < 14) {
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                            }
                            //===//
                            state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
                            //--- DROPBITS(5) ---//
                            hold >>>= 5;
                            bits -= 5;
                            //---//
                            state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
                            //--- DROPBITS(5) ---//
                            hold >>>= 5;
                            bits -= 5;
                            //---//
                            state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
                            //--- DROPBITS(4) ---//
                            hold >>>= 4;
                            bits -= 4;
                            //---//
    //#ifndef PKZIP_BUG_WORKAROUND
                            if (state.nlen > 286 || state.ndist > 30) {
                                strm.msg = 'too many length or distance symbols';
                                state.mode = BAD;
                                break;
                            }
    //#endif
                            //Tracev((stderr, "inflate:       table sizes ok\n"));
                            state.have = 0;
                            state.mode = LENLENS;
                        /* falls through */
                        case LENLENS:
                            while (state.have < state.ncode) {
                                //=== NEEDBITS(3);
                                while (bits < 3) {
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                }
                                //===//
                                state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
                                //--- DROPBITS(3) ---//
                                hold >>>= 3;
                                bits -= 3;
                                //---//
                            }
                            while (state.have < 19) {
                                state.lens[order[state.have++]] = 0;
                            }
                            // We have separate tables & no pointers. 2 commented lines below not needed.
                            //state.next = state.codes;
                            //state.lencode = state.next;
                            // Switch to use dynamic table
                            state.lencode = state.lendyn;
                            state.lenbits = 7;

                            opts = { bits: state.lenbits };
                            ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
                            state.lenbits = opts.bits;

                            if (ret) {
                                strm.msg = 'invalid code lengths set';
                                state.mode = BAD;
                                break;
                            }
                            //Tracev((stderr, "inflate:       code lengths ok\n"));
                            state.have = 0;
                            state.mode = CODELENS;
                        /* falls through */
                        case CODELENS:
                            while (state.have < state.nlen + state.ndist) {
                                for (;;) {
                                    here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
                                    here_bits = here >>> 24;
                                    here_op = (here >>> 16) & 0xff;
                                    here_val = here & 0xffff;

                                    if ((here_bits) <= bits) { break; }
                                    //--- PULLBYTE() ---//
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                    //---//
                                }
                                if (here_val < 16) {
                                    //--- DROPBITS(here.bits) ---//
                                    hold >>>= here_bits;
                                    bits -= here_bits;
                                    //---//
                                    state.lens[state.have++] = here_val;
                                }
                                else {
                                    if (here_val === 16) {
                                        //=== NEEDBITS(here.bits + 2);
                                        n = here_bits + 2;
                                        while (bits < n) {
                                            if (have === 0) { break inf_leave; }
                                            have--;
                                            hold += input[next++] << bits;
                                            bits += 8;
                                        }
                                        //===//
                                        //--- DROPBITS(here.bits) ---//
                                        hold >>>= here_bits;
                                        bits -= here_bits;
                                        //---//
                                        if (state.have === 0) {
                                            strm.msg = 'invalid bit length repeat';
                                            state.mode = BAD;
                                            break;
                                        }
                                        len = state.lens[state.have - 1];
                                        copy = 3 + (hold & 0x03);//BITS(2);
                                        //--- DROPBITS(2) ---//
                                        hold >>>= 2;
                                        bits -= 2;
                                        //---//
                                    }
                                    else if (here_val === 17) {
                                        //=== NEEDBITS(here.bits + 3);
                                        n = here_bits + 3;
                                        while (bits < n) {
                                            if (have === 0) { break inf_leave; }
                                            have--;
                                            hold += input[next++] << bits;
                                            bits += 8;
                                        }
                                        //===//
                                        //--- DROPBITS(here.bits) ---//
                                        hold >>>= here_bits;
                                        bits -= here_bits;
                                        //---//
                                        len = 0;
                                        copy = 3 + (hold & 0x07);//BITS(3);
                                        //--- DROPBITS(3) ---//
                                        hold >>>= 3;
                                        bits -= 3;
                                        //---//
                                    }
                                    else {
                                        //=== NEEDBITS(here.bits + 7);
                                        n = here_bits + 7;
                                        while (bits < n) {
                                            if (have === 0) { break inf_leave; }
                                            have--;
                                            hold += input[next++] << bits;
                                            bits += 8;
                                        }
                                        //===//
                                        //--- DROPBITS(here.bits) ---//
                                        hold >>>= here_bits;
                                        bits -= here_bits;
                                        //---//
                                        len = 0;
                                        copy = 11 + (hold & 0x7f);//BITS(7);
                                        //--- DROPBITS(7) ---//
                                        hold >>>= 7;
                                        bits -= 7;
                                        //---//
                                    }
                                    if (state.have + copy > state.nlen + state.ndist) {
                                        strm.msg = 'invalid bit length repeat';
                                        state.mode = BAD;
                                        break;
                                    }
                                    while (copy--) {
                                        state.lens[state.have++] = len;
                                    }
                                }
                            }

                            /* handle error breaks in while */
                            if (state.mode === BAD) { break; }

                            /* check for end-of-block code (better have one) */
                            if (state.lens[256] === 0) {
                                strm.msg = 'invalid code -- missing end-of-block';
                                state.mode = BAD;
                                break;
                            }

                            /* build code tables -- note: do not change the lenbits or distbits
                             values here (9 and 6) without reading the comments in inftrees.h
                             concerning the ENOUGH constants, which depend on those values */
                            state.lenbits = 9;

                            opts = { bits: state.lenbits };
                            ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
                            // We have separate tables & no pointers. 2 commented lines below not needed.
                            // state.next_index = opts.table_index;
                            state.lenbits = opts.bits;
                            // state.lencode = state.next;

                            if (ret) {
                                strm.msg = 'invalid literal/lengths set';
                                state.mode = BAD;
                                break;
                            }

                            state.distbits = 6;
                            //state.distcode.copy(state.codes);
                            // Switch to use dynamic table
                            state.distcode = state.distdyn;
                            opts = { bits: state.distbits };
                            ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
                            // We have separate tables & no pointers. 2 commented lines below not needed.
                            // state.next_index = opts.table_index;
                            state.distbits = opts.bits;
                            // state.distcode = state.next;

                            if (ret) {
                                strm.msg = 'invalid distances set';
                                state.mode = BAD;
                                break;
                            }
                            //Tracev((stderr, 'inflate:       codes ok\n'));
                            state.mode = LEN_;
                            if (flush === Z_TREES) { break inf_leave; }
                        /* falls through */
                        case LEN_:
                            state.mode = LEN;
                        /* falls through */
                        case LEN:
                            if (have >= 6 && left >= 258) {
                                //--- RESTORE() ---
                                strm.next_out = put;
                                strm.avail_out = left;
                                strm.next_in = next;
                                strm.avail_in = have;
                                state.hold = hold;
                                state.bits = bits;
                                //---
                                inflate_fast(strm, _out);
                                //--- LOAD() ---
                                put = strm.next_out;
                                output = strm.output;
                                left = strm.avail_out;
                                next = strm.next_in;
                                input = strm.input;
                                have = strm.avail_in;
                                hold = state.hold;
                                bits = state.bits;
                                //---

                                if (state.mode === TYPE) {
                                    state.back = -1;
                                }
                                break;
                            }
                            state.back = 0;
                            for (;;) {
                                here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
                                here_bits = here >>> 24;
                                here_op = (here >>> 16) & 0xff;
                                here_val = here & 0xffff;

                                if (here_bits <= bits) { break; }
                                //--- PULLBYTE() ---//
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                                //---//
                            }
                            if (here_op && (here_op & 0xf0) === 0) {
                                last_bits = here_bits;
                                last_op = here_op;
                                last_val = here_val;
                                for (;;) {
                                    here = state.lencode[last_val +
                                                         ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
                                    here_bits = here >>> 24;
                                    here_op = (here >>> 16) & 0xff;
                                    here_val = here & 0xffff;

                                    if ((last_bits + here_bits) <= bits) { break; }
                                    //--- PULLBYTE() ---//
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                    //---//
                                }
                                //--- DROPBITS(last.bits) ---//
                                hold >>>= last_bits;
                                bits -= last_bits;
                                //---//
                                state.back += last_bits;
                            }
                            //--- DROPBITS(here.bits) ---//
                            hold >>>= here_bits;
                            bits -= here_bits;
                            //---//
                            state.back += here_bits;
                            state.length = here_val;
                            if (here_op === 0) {
                                //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
                                //        "inflate:         literal '%c'\n" :
                                //        "inflate:         literal 0x%02x\n", here.val));
                                state.mode = LIT;
                                break;
                            }
                            if (here_op & 32) {
                                //Tracevv((stderr, "inflate:         end of block\n"));
                                state.back = -1;
                                state.mode = TYPE;
                                break;
                            }
                            if (here_op & 64) {
                                strm.msg = 'invalid literal/length code';
                                state.mode = BAD;
                                break;
                            }
                            state.extra = here_op & 15;
                            state.mode = LENEXT;
                        /* falls through */
                        case LENEXT:
                            if (state.extra) {
                                //=== NEEDBITS(state.extra);
                                n = state.extra;
                                while (bits < n) {
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                }
                                //===//
                                state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
                                //--- DROPBITS(state.extra) ---//
                                hold >>>= state.extra;
                                bits -= state.extra;
                                //---//
                                state.back += state.extra;
                            }
                            //Tracevv((stderr, "inflate:         length %u\n", state.length));
                            state.was = state.length;
                            state.mode = DIST;
                        /* falls through */
                        case DIST:
                            for (;;) {
                                here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
                                here_bits = here >>> 24;
                                here_op = (here >>> 16) & 0xff;
                                here_val = here & 0xffff;

                                if ((here_bits) <= bits) { break; }
                                //--- PULLBYTE() ---//
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                                //---//
                            }
                            if ((here_op & 0xf0) === 0) {
                                last_bits = here_bits;
                                last_op = here_op;
                                last_val = here_val;
                                for (;;) {
                                    here = state.distcode[last_val +
                                                          ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
                                    here_bits = here >>> 24;
                                    here_op = (here >>> 16) & 0xff;
                                    here_val = here & 0xffff;

                                    if ((last_bits + here_bits) <= bits) { break; }
                                    //--- PULLBYTE() ---//
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                    //---//
                                }
                                //--- DROPBITS(last.bits) ---//
                                hold >>>= last_bits;
                                bits -= last_bits;
                                //---//
                                state.back += last_bits;
                            }
                            //--- DROPBITS(here.bits) ---//
                            hold >>>= here_bits;
                            bits -= here_bits;
                            //---//
                            state.back += here_bits;
                            if (here_op & 64) {
                                strm.msg = 'invalid distance code';
                                state.mode = BAD;
                                break;
                            }
                            state.offset = here_val;
                            state.extra = (here_op) & 15;
                            state.mode = DISTEXT;
                        /* falls through */
                        case DISTEXT:
                            if (state.extra) {
                                //=== NEEDBITS(state.extra);
                                n = state.extra;
                                while (bits < n) {
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                }
                                //===//
                                state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
                                //--- DROPBITS(state.extra) ---//
                                hold >>>= state.extra;
                                bits -= state.extra;
                                //---//
                                state.back += state.extra;
                            }
    //#ifdef INFLATE_STRICT
                            if (state.offset > state.dmax) {
                                strm.msg = 'invalid distance too far back';
                                state.mode = BAD;
                                break;
                            }
    //#endif
                            //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
                            state.mode = MATCH;
                        /* falls through */
                        case MATCH:
                            if (left === 0) { break inf_leave; }
                            copy = _out - left;
                            if (state.offset > copy) {         /* copy from window */
                                copy = state.offset - copy;
                                if (copy > state.whave) {
                                    if (state.sane) {
                                        strm.msg = 'invalid distance too far back';
                                        state.mode = BAD;
                                        break;
                                    }
    // (!) This block is disabled in zlib defailts,
    // don't enable it for binary compatibility
    //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
    //          Trace((stderr, "inflate.c too far\n"));
    //          copy -= state.whave;
    //          if (copy > state.length) { copy = state.length; }
    //          if (copy > left) { copy = left; }
    //          left -= copy;
    //          state.length -= copy;
    //          do {
    //            output[put++] = 0;
    //          } while (--copy);
    //          if (state.length === 0) { state.mode = LEN; }
    //          break;
    //#endif
                                }
                                if (copy > state.wnext) {
                                    copy -= state.wnext;
                                    from = state.wsize - copy;
                                }
                                else {
                                    from = state.wnext - copy;
                                }
                                if (copy > state.length) { copy = state.length; }
                                from_source = state.window;
                            }
                            else {                              /* copy from output */
                                from_source = output;
                                from = put - state.offset;
                                copy = state.length;
                            }
                            if (copy > left) { copy = left; }
                            left -= copy;
                            state.length -= copy;
                            do {
                                output[put++] = from_source[from++];
                            } while (--copy);
                            if (state.length === 0) { state.mode = LEN; }
                            break;
                        case LIT:
                            if (left === 0) { break inf_leave; }
                            output[put++] = state.length;
                            left--;
                            state.mode = LEN;
                            break;
                        case CHECK:
                            if (state.wrap) {
                                //=== NEEDBITS(32);
                                while (bits < 32) {
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    // Use '|' insdead of '+' to make sure that result is signed
                                    hold |= input[next++] << bits;
                                    bits += 8;
                                }
                                //===//
                                _out -= left;
                                strm.total_out += _out;
                                state.total += _out;
                                if (_out) {
                                    strm.adler = state.check =
                                        /*UPDATE(state.check, put - _out, _out);*/
                                        (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

                                }
                                _out = left;
                                // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
                                if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                                    strm.msg = 'incorrect data check';
                                    state.mode = BAD;
                                    break;
                                }
                                //=== INITBITS();
                                hold = 0;
                                bits = 0;
                                //===//
                                //Tracev((stderr, "inflate:   check matches trailer\n"));
                            }
                            state.mode = LENGTH;
                        /* falls through */
                        case LENGTH:
                            if (state.wrap && state.flags) {
                                //=== NEEDBITS(32);
                                while (bits < 32) {
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                }
                                //===//
                                if (hold !== (state.total & 0xffffffff)) {
                                    strm.msg = 'incorrect length check';
                                    state.mode = BAD;
                                    break;
                                }
                                //=== INITBITS();
                                hold = 0;
                                bits = 0;
                                //===//
                                //Tracev((stderr, "inflate:   length matches trailer\n"));
                            }
                            state.mode = DONE;
                        /* falls through */
                        case DONE:
                            ret = Z_STREAM_END;
                            break inf_leave;
                        case BAD:
                            ret = Z_DATA_ERROR;
                            break inf_leave;
                        case MEM:
                            return Z_MEM_ERROR;
                        case SYNC:
                        /* falls through */
                        default:
                            return Z_STREAM_ERROR;
                    }
                }

            // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

            /*
             Return from inflate(), updating the total counts and the check value.
             If there was no progress during the inflate() call, return a buffer
             error.  Call updatewindow() to create and/or update the window state.
             Note: a memory error from inflate() is non-recoverable.
             */

            //--- RESTORE() ---
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            //---

            if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                                (state.mode < CHECK || flush !== Z_FINISH))) {
                if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
            }
            _in -= strm.avail_in;
            _out -= strm.avail_out;
            strm.total_in += _in;
            strm.total_out += _out;
            state.total += _out;
            if (state.wrap && _out) {
                strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
                    (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
            }
            strm.data_type = state.bits + (state.last ? 64 : 0) +
                             (state.mode === TYPE ? 128 : 0) +
                             (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
            if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
                ret = Z_BUF_ERROR;
            }
            return ret;
        }

        function inflateEnd(strm) {

            if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
                return Z_STREAM_ERROR;
            }

            var state = strm.state;
            if (state.window) {
                state.window = null;
            }
            strm.state = null;
            return Z_OK;
        }

        function inflateGetHeader(strm, head) {
            var state;

            /* check state */
            if (!strm || !strm.state) { return Z_STREAM_ERROR; }
            state = strm.state;
            if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

            /* save header structure */
            state.head = head;
            head.done = false;
            return Z_OK;
        }

        function inflateSetDictionary(strm, dictionary) {
            var dictLength = dictionary.length;

            var state;
            var dictid;
            var ret;

            /* check state */
            if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
            state = strm.state;

            if (state.wrap !== 0 && state.mode !== DICT) {
                return Z_STREAM_ERROR;
            }

            /* check for correct dictionary identifier */
            if (state.mode === DICT) {
                dictid = 1; /* adler32(0, null, 0)*/
                /* dictid = adler32(dictid, dictionary, dictLength); */
                dictid = adler32(dictid, dictionary, dictLength, 0);
                if (dictid !== state.check) {
                    return Z_DATA_ERROR;
                }
            }
            /* copy dictionary to window using updatewindow(), which will amend the
             existing dictionary if appropriate */
            ret = updatewindow(strm, dictionary, dictLength, dictLength);
            if (ret) {
                state.mode = MEM;
                return Z_MEM_ERROR;
            }
            state.havedict = 1;
            // Tracev((stderr, "inflate:   dictionary set\n"));
            return Z_OK;
        }

        exports.inflateReset = inflateReset;
        exports.inflateReset2 = inflateReset2;
        exports.inflateResetKeep = inflateResetKeep;
        exports.inflateInit = inflateInit;
        exports.inflateInit2 = inflateInit2;
        exports.inflate = inflate;
        exports.inflateEnd = inflateEnd;
        exports.inflateGetHeader = inflateGetHeader;
        exports.inflateSetDictionary = inflateSetDictionary;
        exports.inflateInfo = 'pako inflate (from Nodeca project)';

        /* Not implemented
         exports.inflateCopy = inflateCopy;
         exports.inflateGetDictionary = inflateGetDictionary;
         exports.inflateMark = inflateMark;
         exports.inflatePrime = inflatePrime;
         exports.inflateSync = inflateSync;
         exports.inflateSyncPoint = inflateSyncPoint;
         exports.inflateUndermine = inflateUndermine;
         */

    },{"../utils/common":1,"./adler32":3,"./crc32":5,"./inffast":7,"./inftrees":9}],9:[function(require,module,exports){


        var utils = require('../utils/common');

        var MAXBITS = 15;
        var ENOUGH_LENS = 852;
        var ENOUGH_DISTS = 592;
    //var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

        var CODES = 0;
        var LENS = 1;
        var DISTS = 2;

        var lbase = [ /* Length codes 257..285 base */
            3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
            35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
        ];

        var lext = [ /* Length codes 257..285 extra */
            16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
            19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
        ];

        var dbase = [ /* Distance codes 0..29 base */
            1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
            257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
            8193, 12289, 16385, 24577, 0, 0
        ];

        var dext = [ /* Distance codes 0..29 extra */
            16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
            23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
            28, 28, 29, 29, 64, 64
        ];

        module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
        {
            var bits = opts.bits;
            //here = opts.here; /* table entry for duplication */

            var len = 0;               /* a code's length in bits */
            var sym = 0;               /* index of code symbols */
            var min = 0, max = 0;          /* minimum and maximum code lengths */
            var root = 0;              /* number of index bits for root table */
            var curr = 0;              /* number of index bits for current table */
            var drop = 0;              /* code bits to drop for sub-table */
            var left = 0;                   /* number of prefix codes available */
            var used = 0;              /* code entries in table used */
            var huff = 0;              /* Huffman code */
            var incr;              /* for incrementing code, index */
            var fill;              /* index for replicating entries */
            var low;               /* low bits for current root entry */
            var mask;              /* mask for low root bits */
            var next;             /* next available space in table */
            var base = null;     /* base value table to use */
            var base_index = 0;
    //  var shoextra;    /* extra bits table to use */
            var end;                    /* use base and extra for symbol > end */
            var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
            var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
            var extra = null;
            var extra_index = 0;

            var here_bits, here_op, here_val;

            /*
             Process a set of code lengths to create a canonical Huffman code.  The
             code lengths are lens[0..codes-1].  Each length corresponds to the
             symbols 0..codes-1.  The Huffman code is generated by first sorting the
             symbols by length from short to long, and retaining the symbol order
             for codes with equal lengths.  Then the code starts with all zero bits
             for the first code of the shortest length, and the codes are integer
             increments for the same length, and zeros are appended as the length
             increases.  For the deflate format, these bits are stored backwards
             from their more natural integer increment ordering, and so when the
             decoding tables are built in the large loop below, the integer codes
             are incremented backwards.

             This routine assumes, but does not check, that all of the entries in
             lens[] are in the range 0..MAXBITS.  The caller must assure this.
             1..MAXBITS is interpreted as that code length.  zero means that that
             symbol does not occur in this code.

             The codes are sorted by computing a count of codes for each length,
             creating from that a table of starting indices for each length in the
             sorted table, and then entering the symbols in order in the sorted
             table.  The sorted table is work[], with that space being provided by
             the caller.

             The length counts are used for other purposes as well, i.e. finding
             the minimum and maximum length codes, determining if there are any
             codes at all, checking for a valid set of lengths, and looking ahead
             at length counts to determine sub-table sizes when building the
             decoding tables.
             */

            /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
            for (len = 0; len <= MAXBITS; len++) {
                count[len] = 0;
            }
            for (sym = 0; sym < codes; sym++) {
                count[lens[lens_index + sym]]++;
            }

            /* bound code lengths, force root to be within code lengths */
            root = bits;
            for (max = MAXBITS; max >= 1; max--) {
                if (count[max] !== 0) { break; }
            }
            if (root > max) {
                root = max;
            }
            if (max === 0) {                     /* no symbols to code at all */
                //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
                //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
                //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
                table[table_index++] = (1 << 24) | (64 << 16) | 0;


                //table.op[opts.table_index] = 64;
                //table.bits[opts.table_index] = 1;
                //table.val[opts.table_index++] = 0;
                table[table_index++] = (1 << 24) | (64 << 16) | 0;

                opts.bits = 1;
                return 0;     /* no symbols, but wait for decoding to report error */
            }
            for (min = 1; min < max; min++) {
                if (count[min] !== 0) { break; }
            }
            if (root < min) {
                root = min;
            }

            /* check for an over-subscribed or incomplete set of lengths */
            left = 1;
            for (len = 1; len <= MAXBITS; len++) {
                left <<= 1;
                left -= count[len];
                if (left < 0) {
                    return -1;
                }        /* over-subscribed */
            }
            if (left > 0 && (type === CODES || max !== 1)) {
                return -1;                      /* incomplete set */
            }

            /* generate offsets into symbol table for each length for sorting */
            offs[1] = 0;
            for (len = 1; len < MAXBITS; len++) {
                offs[len + 1] = offs[len] + count[len];
            }

            /* sort symbols by length, by symbol order within each length */
            for (sym = 0; sym < codes; sym++) {
                if (lens[lens_index + sym] !== 0) {
                    work[offs[lens[lens_index + sym]]++] = sym;
                }
            }

            /*
             Create and fill in decoding tables.  In this loop, the table being
             filled is at next and has curr index bits.  The code being used is huff
             with length len.  That code is converted to an index by dropping drop
             bits off of the bottom.  For codes where len is less than drop + curr,
             those top drop + curr - len bits are incremented through all values to
             fill the table with replicated entries.

             root is the number of index bits for the root table.  When len exceeds
             root, sub-tables are created pointed to by the root entry with an index
             of the low root bits of huff.  This is saved in low to check for when a
             new sub-table should be started.  drop is zero when the root table is
             being filled, and drop is root when sub-tables are being filled.

             When a new sub-table is needed, it is necessary to look ahead in the
             code lengths to determine what size sub-table is needed.  The length
             counts are used for this, and so count[] is decremented as codes are
             entered in the tables.

             used keeps track of how many table entries have been allocated from the
             provided *table space.  It is checked for LENS and DIST tables against
             the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
             the initial root table size constants.  See the comments in inftrees.h
             for more information.

             sym increments through all symbols, and the loop terminates when
             all codes of length max, i.e. all codes, have been processed.  This
             routine permits incomplete codes, so another loop after this one fills
             in the rest of the decoding tables with invalid code markers.
             */

            /* set up for code type */
            // poor man optimization - use if-else instead of switch,
            // to avoid deopts in old v8
            if (type === CODES) {
                base = extra = work;    /* dummy value--not used */
                end = 19;

            } else if (type === LENS) {
                base = lbase;
                base_index -= 257;
                extra = lext;
                extra_index -= 257;
                end = 256;

            } else {                    /* DISTS */
                base = dbase;
                extra = dext;
                end = -1;
            }

            /* initialize opts for loop */
            huff = 0;                   /* starting code */
            sym = 0;                    /* starting code symbol */
            len = min;                  /* starting code length */
            next = table_index;              /* current table to fill in */
            curr = root;                /* current table index bits */
            drop = 0;                   /* current bits to drop from code for index */
            low = -1;                   /* trigger new sub-table when len > root */
            used = 1 << root;          /* use root table entries */
            mask = used - 1;            /* mask for comparing low */

            /* check available table space */
            if ((type === LENS && used > ENOUGH_LENS) ||
                (type === DISTS && used > ENOUGH_DISTS)) {
                return 1;
            }

            /* process all codes and make table entries */
            for (;;) {
                /* create table entry */
                here_bits = len - drop;
                if (work[sym] < end) {
                    here_op = 0;
                    here_val = work[sym];
                }
                else if (work[sym] > end) {
                    here_op = extra[extra_index + work[sym]];
                    here_val = base[base_index + work[sym]];
                }
                else {
                    here_op = 32 + 64;         /* end of block */
                    here_val = 0;
                }

                /* replicate for those indices with low len bits equal to huff */
                incr = 1 << (len - drop);
                fill = 1 << curr;
                min = fill;                 /* save offset to next table */
                do {
                    fill -= incr;
                    table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
                } while (fill !== 0);

                /* backwards increment the len-bit code huff */
                incr = 1 << (len - 1);
                while (huff & incr) {
                    incr >>= 1;
                }
                if (incr !== 0) {
                    huff &= incr - 1;
                    huff += incr;
                } else {
                    huff = 0;
                }

                /* go to next symbol, update count, len */
                sym++;
                if (--count[len] === 0) {
                    if (len === max) { break; }
                    len = lens[lens_index + work[sym]];
                }

                /* create new sub-table if needed */
                if (len > root && (huff & mask) !== low) {
                    /* if first time, transition to sub-tables */
                    if (drop === 0) {
                        drop = root;
                    }

                    /* increment past last table */
                    next += min;            /* here min is 1 << curr */

                    /* determine length of next table */
                    curr = len - drop;
                    left = 1 << curr;
                    while (curr + drop < max) {
                        left -= count[curr + drop];
                        if (left <= 0) { break; }
                        curr++;
                        left <<= 1;
                    }

                    /* check for enough space */
                    used += 1 << curr;
                    if ((type === LENS && used > ENOUGH_LENS) ||
                        (type === DISTS && used > ENOUGH_DISTS)) {
                        return 1;
                    }

                    /* point entry in root table to sub-table */
                    low = huff & mask;
                    /*table.op[low] = curr;
                     table.bits[low] = root;
                     table.val[low] = next - opts.table_index;*/
                    table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
                }
            }

            /* fill in remaining table entry if code is incomplete (guaranteed to have
             at most one remaining entry, since if the code is incomplete, the
             maximum code length that was allowed to get this far is one bit) */
            if (huff !== 0) {
                //table.op[next + huff] = 64;            /* invalid code marker */
                //table.bits[next + huff] = len - drop;
                //table.val[next + huff] = 0;
                table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
            }

            /* set return parameters */
            //opts.table_index += used;
            opts.bits = root;
            return 0;
        };

    },{"../utils/common":1}],10:[function(require,module,exports){

        module.exports = {
            2:      'need dictionary',     /* Z_NEED_DICT       2  */
            1:      'stream end',          /* Z_STREAM_END      1  */
            0:      '',                    /* Z_OK              0  */
            '-1':   'file error',          /* Z_ERRNO         (-1) */
            '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
            '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
            '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
            '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
            '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
        };

    },{}],11:[function(require,module,exports){


        function ZStream() {
            /* next input byte */
            this.input = null; // JS specific, because we have no pointers
            this.next_in = 0;
            /* number of bytes available at input */
            this.avail_in = 0;
            /* total number of input bytes read so far */
            this.total_in = 0;
            /* next output byte should be put there */
            this.output = null; // JS specific, because we have no pointers
            this.next_out = 0;
            /* remaining free space at output */
            this.avail_out = 0;
            /* total number of bytes output so far */
            this.total_out = 0;
            /* last error message, NULL if no error */
            this.msg = ''/*Z_NULL*/;
            /* not visible by applications */
            this.state = null;
            /* best guess about the data type: binary or text */
            this.data_type = 2/*Z_UNKNOWN*/;
            /* adler32 value of the uncompressed data */
            this.adler = 0;
        }

        module.exports = ZStream;

    },{}],"/lib/inflate.js":[function(require,module,exports){


        var zlib_inflate = require('./zlib/inflate');
        var utils        = require('./utils/common');
        var strings      = require('./utils/strings');
        var c            = require('./zlib/constants');
        var msg          = require('./zlib/messages');
        var ZStream      = require('./zlib/zstream');
        var GZheader     = require('./zlib/gzheader');

        var toString = Object.prototype.toString;

        /**
         * class Inflate
         *
         * Generic JS-style wrapper for zlib calls. If you don't need
         * streaming behaviour - use more simple functions: [[inflate]]
         * and [[inflateRaw]].
         **/

        /* internal
         * inflate.chunks -> Array
         *
         * Chunks of output data, if [[Inflate#onData]] not overriden.
         **/

        /**
         * Inflate.result -> Uint8Array|Array|String
         *
         * Uncompressed result, generated by default [[Inflate#onData]]
         * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
         * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
         * push a chunk with explicit flush (call [[Inflate#push]] with
         * `Z_SYNC_FLUSH` param).
         **/

        /**
         * Inflate.err -> Number
         *
         * Error code after inflate finished. 0 (Z_OK) on success.
         * Should be checked if broken data possible.
         **/

        /**
         * Inflate.msg -> String
         *
         * Error message, if [[Inflate.err]] != 0
         **/


        /**
         * new Inflate(options)
         * - options (Object): zlib inflate options.
         *
         * Creates new inflator instance with specified params. Throws exception
         * on bad params. Supported options:
         *
         * - `windowBits`
         * - `dictionary`
         *
         * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
         * for more information on these.
         *
         * Additional options, for internal needs:
         *
         * - `chunkSize` - size of generated data chunks (16K by default)
         * - `raw` (Boolean) - do raw inflate
         * - `to` (String) - if equal to 'string', then result will be converted
         *   from utf8 to utf16 (javascript) string. When string output requested,
         *   chunk length can differ from `chunkSize`, depending on content.
         *
         * By default, when no options set, autodetect deflate/gzip data format via
         * wrapper header.
         *
         * ##### Example:
         *
         * ```javascript
         * var pako = require('pako')
         *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
         *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
         *
         * var inflate = new pako.Inflate({ level: 3});
         *
         * inflate.push(chunk1, false);
         * inflate.push(chunk2, true);  // true -> last chunk
         *
         * if (inflate.err) { throw new Error(inflate.err); }
         *
         * console.log(inflate.result);
         * ```
         **/
        function Inflate(options) {
            if (!(this instanceof Inflate)) return new Inflate(options);

            this.options = utils.assign({
                chunkSize: 16384,
                windowBits: 0,
                to: ''
            }, options || {});

            var opt = this.options;

            // Force window size for `raw` data, if not set directly,
            // because we have no header for autodetect.
            if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
                opt.windowBits = -opt.windowBits;
                if (opt.windowBits === 0) { opt.windowBits = -15; }
            }

            // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
            if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
                !(options && options.windowBits)) {
                opt.windowBits += 32;
            }

            // Gzip header has no info about windows size, we can do autodetect only
            // for deflate. So, if window size not set, force it to max when gzip possible
            if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
                // bit 3 (16) -> gzipped data
                // bit 4 (32) -> autodetect gzip/deflate
                if ((opt.windowBits & 15) === 0) {
                    opt.windowBits |= 15;
                }
            }

            this.err    = 0;      // error code, if happens (0 = Z_OK)
            this.msg    = '';     // error message
            this.ended  = false;  // used to avoid multiple onEnd() calls
            this.chunks = [];     // chunks of compressed data

            this.strm   = new ZStream();
            this.strm.avail_out = 0;

            var status  = zlib_inflate.inflateInit2(
                this.strm,
                opt.windowBits
            );

            if (status !== c.Z_OK) {
                throw new Error(msg[status]);
            }

            this.header = new GZheader();

            zlib_inflate.inflateGetHeader(this.strm, this.header);
        }

        /**
         * Inflate#push(data[, mode]) -> Boolean
         * - data (Uint8Array|Array|ArrayBuffer|String): input data
         * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
         *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
         *
         * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
         * new output chunks. Returns `true` on success. The last data block must have
         * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
         * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
         * can use mode Z_SYNC_FLUSH, keeping the decompression context.
         *
         * On fail call [[Inflate#onEnd]] with error code and return false.
         *
         * We strongly recommend to use `Uint8Array` on input for best speed (output
         * format is detected automatically). Also, don't skip last param and always
         * use the same type in your code (boolean or number). That will improve JS speed.
         *
         * For regular `Array`-s make sure all elements are [0..255].
         *
         * ##### Example
         *
         * ```javascript
         * push(chunk, false); // push one of data chunks
         * ...
         * push(chunk, true);  // push last chunk
         * ```
         **/
        Inflate.prototype.push = function (data, mode) {
            var strm = this.strm;
            var chunkSize = this.options.chunkSize;
            var dictionary = this.options.dictionary;
            var status, _mode;
            var next_out_utf8, tail, utf8str;
            var dict;

            // Flag to properly process Z_BUF_ERROR on testing inflate call
            // when we check that all output data was flushed.
            var allowBufError = false;

            if (this.ended) { return false; }
            _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);

            // Convert data if needed
            if (typeof data === 'string') {
                // Only binary strings can be decompressed on practice
                strm.input = strings.binstring2buf(data);
            } else if (toString.call(data) === '[object ArrayBuffer]') {
                strm.input = new Uint8Array(data);
            } else {
                strm.input = data;
            }

            strm.next_in = 0;
            strm.avail_in = strm.input.length;

            do {
                if (strm.avail_out === 0) {
                    strm.output = new utils.Buf8(chunkSize);
                    strm.next_out = 0;
                    strm.avail_out = chunkSize;
                }

                status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */

                if (status === c.Z_NEED_DICT && dictionary) {
                    // Convert data if needed
                    if (typeof dictionary === 'string') {
                        dict = strings.string2buf(dictionary);
                    } else if (toString.call(dictionary) === '[object ArrayBuffer]') {
                        dict = new Uint8Array(dictionary);
                    } else {
                        dict = dictionary;
                    }

                    status = zlib_inflate.inflateSetDictionary(this.strm, dict);

                }

                if (status === c.Z_BUF_ERROR && allowBufError === true) {
                    status = c.Z_OK;
                    allowBufError = false;
                }

                if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
                    this.onEnd(status);
                    this.ended = true;
                    return false;
                }

                if (strm.next_out) {
                    if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {

                        if (this.options.to === 'string') {

                            next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

                            tail = strm.next_out - next_out_utf8;
                            utf8str = strings.buf2string(strm.output, next_out_utf8);

                            // move tail
                            strm.next_out = tail;
                            strm.avail_out = chunkSize - tail;
                            if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

                            this.onData(utf8str);

                        } else {
                            this.onData(utils.shrinkBuf(strm.output, strm.next_out));
                        }
                    }
                }

                // When no more input data, we should check that internal inflate buffers
                // are flushed. The only way to do it when avail_out = 0 - run one more
                // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
                // Here we set flag to process this error properly.
                //
                // NOTE. Deflate does not return error in this case and does not needs such
                // logic.
                if (strm.avail_in === 0 && strm.avail_out === 0) {
                    allowBufError = true;
                }

            } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

            if (status === c.Z_STREAM_END) {
                _mode = c.Z_FINISH;
            }

            // Finalize on the last chunk.
            if (_mode === c.Z_FINISH) {
                status = zlib_inflate.inflateEnd(this.strm);
                this.onEnd(status);
                this.ended = true;
                return status === c.Z_OK;
            }

            // callback interim results if Z_SYNC_FLUSH.
            if (_mode === c.Z_SYNC_FLUSH) {
                this.onEnd(c.Z_OK);
                strm.avail_out = 0;
                return true;
            }

            return true;
        };


        /**
         * Inflate#onData(chunk) -> Void
         * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
         *   on js engine support. When string output requested, each chunk
         *   will be string.
         *
         * By default, stores data blocks in `chunks[]` property and glue
         * those in `onEnd`. Override this handler, if you need another behaviour.
         **/
        Inflate.prototype.onData = function (chunk) {
            this.chunks.push(chunk);
        };


        /**
         * Inflate#onEnd(status) -> Void
         * - status (Number): inflate status. 0 (Z_OK) on success,
         *   other if not.
         *
         * Called either after you tell inflate that the input stream is
         * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
         * or if an error happened. By default - join collected chunks,
         * free memory and fill `results` / `err` properties.
         **/
        Inflate.prototype.onEnd = function (status) {
            // On success - join
            if (status === c.Z_OK) {
                if (this.options.to === 'string') {
                    // Glue & convert here, until we teach pako to send
                    // utf8 alligned strings to onData
                    this.result = this.chunks.join('');
                } else {
                    this.result = utils.flattenChunks(this.chunks);
                }
            }
            this.chunks = [];
            this.err = status;
            this.msg = this.strm.msg;
        };


        /**
         * inflate(data[, options]) -> Uint8Array|Array|String
         * - data (Uint8Array|Array|String): input data to decompress.
         * - options (Object): zlib inflate options.
         *
         * Decompress `data` with inflate/ungzip and `options`. Autodetect
         * format via wrapper header by default. That's why we don't provide
         * separate `ungzip` method.
         *
         * Supported options are:
         *
         * - windowBits
         *
         * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
         * for more information.
         *
         * Sugar (options):
         *
         * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
         *   negative windowBits implicitly.
         * - `to` (String) - if equal to 'string', then result will be converted
         *   from utf8 to utf16 (javascript) string. When string output requested,
         *   chunk length can differ from `chunkSize`, depending on content.
         *
         *
         * ##### Example:
         *
         * ```javascript
         * var pako = require('pako')
         *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
         *   , output;
         *
         * try {
     *   output = pako.inflate(input);
     * } catch (err)
         *   console.log(err);
         * }
         * ```
         **/
        function inflate(input, options) {
            var inflator = new Inflate(options);

            inflator.push(input, true);

            // That will never happens, if you don't cheat with options :)
            if (inflator.err) { throw inflator.msg || msg[inflator.err]; }

            return inflator.result;
        }


        /**
         * inflateRaw(data[, options]) -> Uint8Array|Array|String
         * - data (Uint8Array|Array|String): input data to decompress.
         * - options (Object): zlib inflate options.
         *
         * The same as [[inflate]], but creates raw data, without wrapper
         * (header and adler32 crc).
         **/
        function inflateRaw(input, options) {
            options = options || {};
            options.raw = true;
            return inflate(input, options);
        }


        /**
         * ungzip(data[, options]) -> Uint8Array|Array|String
         * - data (Uint8Array|Array|String): input data to decompress.
         * - options (Object): zlib inflate options.
         *
         * Just shortcut to [[inflate]], because it autodetects format
         * by header.content. Done for convenience.
         **/


        exports.Inflate = Inflate;
        exports.inflate = inflate;
        exports.inflateRaw = inflateRaw;
        exports.ungzip  = inflate;

    },{"./utils/common":1,"./utils/strings":2,"./zlib/constants":4,"./zlib/gzheader":6,"./zlib/inflate":8,"./zlib/messages":10,"./zlib/zstream":11}]},{},[])("/lib/inflate.js")
    });

    var _0x53a39a = tmp;

    const _0x5223=['aNormal','199rybuON','1NYPYyt','602114bkFJgZ','equals','createEdgeDataByIndices','vertCompressConstant','IndexDatatype','UNSIGNED_SHORT','createIndexBuffer','computeNeighbors','attributes','createSilhouetteEdgeAttributes','instancesData','verticesCount','distance','181284pEXRxH','uniqueCount','subtract','81435sIZBIf','silhouette','byteOffset','push','length','getSizeInBytes','normalize','floor','byteLength','componentsPerAttribute','selectIndexData','FLOAT','Buffer','121lwDOBA','attributeLocations','aNormalB','minVerticesValue','typedArray','aSideness','vertexAttributes','BufferUsage','attrLocation','11049Drukrl','ZERO','700839XfptPH','ComponentDatatype','aNormalA','293ACMbJW','aPosition0','createVertexBuffer','extractEdgeInformation','Cartesian3','RegularInstanceStride','aPosition1','slice','regular','buffer','deduplicate','indicesTypedArray','STATIC_DRAW','vertexArrayDestroyable','cross','aPosition','630225UHCOAr'];function _0x278b(_0x4edc88,_0x2d0b10){_0x4edc88=_0x4edc88-0x197;let _0x522311=_0x5223[_0x4edc88];return _0x522311;}const _0x291460=_0x278b;(function(_0x352ccf,_0x5a6430){const _0x39d1f8=_0x278b;while(!![]){try{const _0x59135c=parseInt(_0x39d1f8(0x19b))+parseInt(_0x39d1f8(0x19f))+parseInt(_0x39d1f8(0x19e))*parseInt(_0x39d1f8(0x1ac))+-parseInt(_0x39d1f8(0x1af))+-parseInt(_0x39d1f8(0x1bc))*parseInt(_0x39d1f8(0x1c5))+parseInt(_0x39d1f8(0x1c7))+parseInt(_0x39d1f8(0x1ca))*parseInt(_0x39d1f8(0x19d));if(_0x59135c===_0x5a6430)break;else _0x352ccf['push'](_0x352ccf['shift']());}catch(_0x88affa){_0x352ccf['push'](_0x352ccf['shift']());}}}(_0x5223,0xb82e5));function S3MEdgeProcessor(){}S3MEdgeProcessor[_0x291460(0x1cf)]=0x9,S3MEdgeProcessor['createEdgeData']=function(_0x425434,_0x1ac04c,_0x2f2549){const _0x3fc9f3=_0x291460;if(_0x1ac04c[_0x3fc9f3(0x1b3)]==0x0)return null;let _0x440398=_0x1ac04c[0x0],_0x2be916;_0x440398['indexType']===0x0?_0x2be916=new Uint16Array(_0x440398['indicesTypedArray'][_0x3fc9f3(0x1d3)],_0x440398[_0x3fc9f3(0x1d5)]['byteOffset'],_0x440398[_0x3fc9f3(0x1d5)][_0x3fc9f3(0x1b7)]/0x2):_0x2be916=new Uint32Array(_0x440398['indicesTypedArray'][_0x3fc9f3(0x1d3)],_0x440398[_0x3fc9f3(0x1d5)][_0x3fc9f3(0x1b1)],_0x440398[_0x3fc9f3(0x1d5)][_0x3fc9f3(0x1b7)]/0x4);let _0x2872f9=![],_0x3389e3=S3MEdgeProcessor['extractEdgeInformation'](_0x425434,_0x2872f9,_0x2be916),_0x89fd23=EdgePreprocessing['extractEdges'](_0x3389e3);return _0x2f2549&&(_0x89fd23['regular'][_0x3fc9f3(0x1a9)]&&_0x2f2549[_0x3fc9f3(0x1b2)](_0x89fd23[_0x3fc9f3(0x1d2)][_0x3fc9f3(0x1a9)][_0x3fc9f3(0x1d3)]),_0x89fd23[_0x3fc9f3(0x1b0)]['instancesData']&&_0x2f2549[_0x3fc9f3(0x1b2)](_0x89fd23[_0x3fc9f3(0x1b0)][_0x3fc9f3(0x1a9)][_0x3fc9f3(0x1d3)])),_0x89fd23;};let scratchSidenessVertexBuffer=null;function createEdgeSidenessVertexBuffer(_0x4e8204){const _0x333fab=_0x291460;if(scratchSidenessVertexBuffer)return scratchSidenessVertexBuffer;let _0x16ea50=new Float32Array(0x8),_0x41fa34=0x0;return _0x16ea50[_0x41fa34++]=0x0,_0x16ea50[_0x41fa34++]=0x0,_0x16ea50[_0x41fa34++]=0x0,_0x16ea50[_0x41fa34++]=0x1,_0x16ea50[_0x41fa34++]=0x1,_0x16ea50[_0x41fa34++]=0x1,_0x16ea50[_0x41fa34++]=0x1,_0x16ea50[_0x41fa34++]=0x0,scratchSidenessVertexBuffer=Cesium[_0x333fab(0x1bb)][_0x333fab(0x1cc)]({'context':_0x4e8204,'typedArray':_0x16ea50,'usage':Cesium['BufferUsage'][_0x333fab(0x197)]}),scratchSidenessVertexBuffer[_0x333fab(0x198)]=![],scratchSidenessVertexBuffer;}function createEdgeIndexArray(){let _0x280832=new Uint16Array(0x6),_0x21c346=0x0;return _0x280832[_0x21c346++]=0x2,_0x280832[_0x21c346++]=0x1,_0x280832[_0x21c346++]=0x0,_0x280832[_0x21c346++]=0x3,_0x280832[_0x21c346++]=0x2,_0x280832[_0x21c346++]=0x0,_0x280832;}let scratchIndexBuffer=null;S3MEdgeProcessor['createIndexBuffer']=function(_0x3fc369){const _0x4b0096=_0x291460;if(scratchIndexBuffer)return scratchIndexBuffer;return scratchIndexBuffer=Cesium[_0x4b0096(0x1bb)][_0x4b0096(0x1a5)]({'context':_0x3fc369,'typedArray':createEdgeIndexArray(),'usage':Cesium[_0x4b0096(0x1c3)][_0x4b0096(0x197)],'indexDatatype':Cesium[_0x4b0096(0x1a3)][_0x4b0096(0x1a4)]}),scratchIndexBuffer[_0x4b0096(0x198)]=![],scratchIndexBuffer;},S3MEdgeProcessor['createRegularEdgeAttributes']=function(_0x1fbab1,_0xfd1239){const _0x3c05ec=_0x291460;if(!_0xfd1239[_0x3c05ec(0x1a9)]||_0xfd1239[_0x3c05ec(0x1a9)][_0x3c05ec(0x1b3)]===0x0)return;let _0xe079e9={},_0x314245=[];_0xfd1239[_0x3c05ec(0x1bd)]=_0xe079e9,_0xfd1239[_0x3c05ec(0x1a7)]=_0x314245;let _0x156ce3=Cesium[_0x3c05ec(0x1bb)][_0x3c05ec(0x1cc)]({'context':_0x1fbab1,'typedArray':_0xfd1239[_0x3c05ec(0x1a9)],'usage':Cesium[_0x3c05ec(0x1c3)]['STATIC_DRAW']});_0xfd1239[_0x3c05ec(0x1a9)]=null;let _0x357b8e=Cesium[_0x3c05ec(0x1c8)][_0x3c05ec(0x1b4)](Cesium[_0x3c05ec(0x1c8)][_0x3c05ec(0x1ba)]),_0x15c204=createEdgeSidenessVertexBuffer(_0x1fbab1),_0x321db5=0x0;_0xe079e9['aSideness']=_0x321db5++,_0x314245[_0x3c05ec(0x1b2)]({'index':_0xe079e9[_0x3c05ec(0x1c1)],'vertexBuffer':_0x15c204,'componentsPerAttribute':0x2,'componentDatatype':Cesium['ComponentDatatype'][_0x3c05ec(0x1ba)],'offsetInBytes':0x0,'strideInBytes':Cesium['ComponentDatatype']['getSizeInBytes'](Cesium[_0x3c05ec(0x1c8)][_0x3c05ec(0x1ba)])*0x2,'normalize':![]});let _0x5e08ee=S3MEdgeProcessor[_0x3c05ec(0x1cf)],_0x1f7854=0x0;_0xe079e9[_0x3c05ec(0x1cb)]=_0x321db5++,_0x314245['push']({'index':_0xe079e9[_0x3c05ec(0x1cb)],'vertexBuffer':_0x156ce3,'componentsPerAttribute':0x3,'componentDatatype':Cesium['ComponentDatatype'][_0x3c05ec(0x1ba)],'normalize':![],'offsetInBytes':_0x357b8e*_0x1f7854,'strideInBytes':_0x357b8e*_0x5e08ee,'instanceDivisor':0x1}),_0x1f7854+=0x3,_0xe079e9[_0x3c05ec(0x1d0)]=_0x321db5++,_0x314245['push']({'index':_0xe079e9[_0x3c05ec(0x1d0)],'vertexBuffer':_0x156ce3,'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x3c05ec(0x1c8)][_0x3c05ec(0x1ba)],'normalize':![],'offsetInBytes':_0x357b8e*_0x1f7854,'strideInBytes':_0x357b8e*_0x5e08ee,'instanceDivisor':0x1}),_0x1f7854+=0x3,_0xe079e9[_0x3c05ec(0x19c)]=_0x321db5++,_0x314245[_0x3c05ec(0x1b2)]({'index':_0xe079e9['aNormal'],'vertexBuffer':_0x156ce3,'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x3c05ec(0x1c8)]['FLOAT'],'normalize':!![],'offsetInBytes':_0x357b8e*_0x1f7854,'strideInBytes':_0x357b8e*_0x5e08ee,'instanceDivisor':0x1}),_0x1f7854+=0x3;},S3MEdgeProcessor[_0x291460(0x1a8)]=function(_0x1eed16,_0x410545){const _0x122ac3=_0x291460;if(!_0x410545[_0x122ac3(0x1a9)]||_0x410545['instancesData'][_0x122ac3(0x1b3)]==0x0)return;let _0x313565={},_0x3f7954=[];_0x410545[_0x122ac3(0x1bd)]=_0x313565,_0x410545[_0x122ac3(0x1a7)]=_0x3f7954;let _0x34e1b6=Cesium[_0x122ac3(0x1bb)]['createVertexBuffer']({'context':_0x1eed16,'typedArray':_0x410545[_0x122ac3(0x1a9)],'usage':Cesium[_0x122ac3(0x1c3)][_0x122ac3(0x197)]});_0x410545[_0x122ac3(0x1a9)]=null;let _0x555d59=Cesium['ComponentDatatype']['getSizeInBytes'](Cesium[_0x122ac3(0x1c8)][_0x122ac3(0x1ba)]),_0x36aaf2=0x0;_0x313565[_0x122ac3(0x1c1)]=_0x36aaf2++,_0x3f7954[_0x122ac3(0x1b2)]({'index':_0x313565['aSideness'],'vertexBuffer':createEdgeSidenessVertexBuffer(_0x1eed16),'componentsPerAttribute':0x2,'componentDatatype':Cesium['ComponentDatatype'][_0x122ac3(0x1ba)],'offsetInBytes':0x0,'strideInBytes':_0x555d59*0x2,'normalize':![]});let _0x51f306=0x3+0x3+0x3+0x3,_0x38e7ee=0x0;_0x313565[_0x122ac3(0x1cb)]=_0x36aaf2++,_0x3f7954[_0x122ac3(0x1b2)]({'index':_0x313565[_0x122ac3(0x1cb)],'vertexBuffer':_0x34e1b6,'componentsPerAttribute':0x3,'componentDatatype':Cesium['ComponentDatatype'][_0x122ac3(0x1ba)],'normalize':![],'offsetInBytes':_0x555d59*_0x38e7ee,'strideInBytes':_0x555d59*_0x51f306,'instanceDivisor':0x1}),_0x38e7ee+=0x3,_0x313565[_0x122ac3(0x1d0)]=_0x36aaf2++,_0x3f7954[_0x122ac3(0x1b2)]({'index':_0x313565[_0x122ac3(0x1d0)],'vertexBuffer':_0x34e1b6,'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x122ac3(0x1c8)]['FLOAT'],'normalize':![],'offsetInBytes':_0x555d59*_0x38e7ee,'strideInBytes':_0x555d59*_0x51f306,'instanceDivisor':0x1}),_0x38e7ee+=0x3,_0x313565[_0x122ac3(0x1c9)]=_0x36aaf2++,_0x3f7954[_0x122ac3(0x1b2)]({'index':_0x313565['aNormalA'],'vertexBuffer':_0x34e1b6,'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x122ac3(0x1c8)]['FLOAT'],'normalize':!![],'offsetInBytes':_0x555d59*_0x38e7ee,'strideInBytes':_0x555d59*_0x51f306,'instanceDivisor':0x1}),_0x38e7ee+=0x3,_0x313565[_0x122ac3(0x1be)]=_0x36aaf2++,_0x3f7954[_0x122ac3(0x1b2)]({'index':_0x313565[_0x122ac3(0x1be)],'vertexBuffer':_0x34e1b6,'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x122ac3(0x1c8)]['FLOAT'],'normalize':!![],'offsetInBytes':_0x555d59*_0x38e7ee,'strideInBytes':_0x555d59*_0x51f306,'instanceDivisor':0x1}),_0x38e7ee+=0x3;};S3MEdgeProcessor[_0x291460(0x1cd)]=function(_0x2db8fd,_0x191138,_0x557e27){const _0x20415c=_0x291460;let _0x1240ad=_0x2db8fd[_0x20415c(0x1c4)][_0x20415c(0x19a)],_0x3943b8=_0x2db8fd[_0x20415c(0x1c2)][_0x1240ad],_0x3593b9=_0x3943b8['componentsPerAttribute'],_0x12d63d=new Float32Array(_0x3943b8[_0x20415c(0x1c0)]['buffer'],_0x3943b8[_0x20415c(0x1c0)][_0x20415c(0x1b1)],_0x3943b8[_0x20415c(0x1c0)][_0x20415c(0x1b7)]/0x4),_0x4a05a8=_0x12d63d[_0x20415c(0x1b3)]/_0x3593b9;if(_0x191138&&_0x557e27){let _0x505582=MeshProcessing['computeNeighbors'](_0x557e27,_0x4a05a8);return {'faces':_0x557e27,'neighbors':_0x505582,'vertices':_0x12d63d,'dim':_0x3593b9};}let _0x2c0a27=_0x3943b8[_0x20415c(0x1c0)][_0x20415c(0x1d3)],_0x23e499;isCompress?_0x23e499=_0x12d63d[_0x20415c(0x1d3)]:_0x23e499=_0x2c0a27['slice'](_0x3943b8[_0x20415c(0x1c0)][_0x20415c(0x1b1)],_0x3943b8[_0x20415c(0x1c0)]['byteOffset']+_0x3943b8['typedArray'][_0x20415c(0x1b7)]);let _0x4c2682=MeshProcessing[_0x20415c(0x1d4)](_0x23e499,_0x3593b9),_0x2fb8d3=S3MEdgeProcessor[_0x20415c(0x1b9)](_0x4c2682['indices'],_0x557e27),_0xdc1cb0=MeshProcessing[_0x20415c(0x1a6)](_0x2fb8d3,_0x4c2682[_0x20415c(0x1ad)]),_0x4dceb6=new Float32Array(_0x4c2682[_0x20415c(0x1d3)]);return {'faces':_0x2fb8d3,'neighbors':_0xdc1cb0,'vertices':_0x4dceb6,'dim':_0x3593b9};},S3MEdgeProcessor[_0x291460(0x1b9)]=function(_0x54f63b,_0x5202ee){const _0x2fed68=_0x291460;if(_0x5202ee){_0x5202ee=_0x5202ee[_0x2fed68(0x1d1)]();for(let _0x4c53ac=0x0;_0x4c53ac<_0x5202ee[_0x2fed68(0x1b3)];_0x4c53ac++){_0x5202ee[_0x4c53ac]=_0x54f63b[_0x5202ee[_0x4c53ac]];}return _0x5202ee;}return _0x54f63b;};let scratchV0=new Cesium[(_0x291460(0x1ce))](),scratchV1=new Cesium[(_0x291460(0x1ce))](),scratchV2=new Cesium[(_0x291460(0x1ce))](),scratchV3=new Cesium['Cartesian3'](),scratchN0=new Cesium['Cartesian3'](),scratchN1=new Cesium[(_0x291460(0x1ce))](),scratchN2=new Cesium[(_0x291460(0x1ce))](),scratchN3=new Cesium['Cartesian3']();S3MEdgeProcessor[_0x291460(0x1a1)]=function(_0x257bde,_0x9c216c){const _0x3c6161=_0x291460;let _0x142fb8=_0x257bde['attrLocation'][_0x3c6161(0x19a)],_0x22b986=_0x257bde[_0x3c6161(0x1c2)][_0x142fb8],_0x3d30c9=_0x22b986[_0x3c6161(0x1b8)],_0x218fd7=new Float32Array(_0x22b986[_0x3c6161(0x1c0)][_0x3c6161(0x1d3)],_0x22b986[_0x3c6161(0x1c0)][_0x3c6161(0x1b1)],_0x22b986[_0x3c6161(0x1c0)]['byteLength']/0x4);let _0x5cbc67;_0x9c216c['indexType']===0x0?_0x5cbc67=new Uint16Array(_0x9c216c[_0x3c6161(0x1d5)][_0x3c6161(0x1d3)],_0x9c216c[_0x3c6161(0x1d5)][_0x3c6161(0x1b1)],_0x9c216c[_0x3c6161(0x1d5)][_0x3c6161(0x1b7)]/0x2):_0x5cbc67=new Uint32Array(_0x9c216c[_0x3c6161(0x1d5)][_0x3c6161(0x1d3)],_0x9c216c[_0x3c6161(0x1d5)][_0x3c6161(0x1b1)],_0x9c216c[_0x3c6161(0x1d5)]['byteLength']/0x4);let _0x46379a=[],_0x160ae8=[],_0x3b6058=_0x5cbc67[_0x3c6161(0x1b3)],_0x4d0f01=0x0;for(let _0x4d1ab5=0x0,_0x590817=Math[_0x3c6161(0x1b6)](_0x3b6058/0x4)*0x4;_0x4d1ab5<_0x590817;_0x4d1ab5+=0x4){let _0x40529b=_0x5cbc67[_0x4d1ab5],_0x53da36=_0x5cbc67[_0x4d1ab5+0x1],_0x23faad=_0x5cbc67[_0x4d1ab5+0x2],_0x5af802=_0x5cbc67[_0x4d1ab5+0x3];scratchV0['x']=_0x218fd7[_0x3d30c9*_0x40529b],scratchV0['y']=_0x218fd7[_0x3d30c9*_0x40529b+0x1],scratchV0['z']=_0x218fd7[_0x3d30c9*_0x40529b+0x2],scratchV1['x']=_0x218fd7[_0x3d30c9*_0x53da36],scratchV1['y']=_0x218fd7[_0x3d30c9*_0x53da36+0x1],scratchV1['z']=_0x218fd7[_0x3d30c9*_0x53da36+0x2],scratchV2['x']=_0x218fd7[_0x3d30c9*_0x23faad],scratchV2['y']=_0x218fd7[_0x3d30c9*_0x23faad+0x1],scratchV2['z']=_0x218fd7[_0x3d30c9*_0x23faad+0x2],scratchV3['x']=_0x218fd7[_0x3d30c9*_0x5af802],scratchV3['y']=_0x218fd7[_0x3d30c9*_0x5af802+0x1],scratchV3['z']=_0x218fd7[_0x3d30c9*_0x5af802+0x2];if(Cesium['Cartesian3'][_0x3c6161(0x1a0)](scratchV1,scratchV2)||Cesium['Cartesian3'][_0x3c6161(0x1a0)](scratchV1,scratchV3)||Cesium[_0x3c6161(0x1ce)][_0x3c6161(0x1a0)](scratchV1,scratchV0)||Cesium[_0x3c6161(0x1ce)][_0x3c6161(0x1a0)](scratchV2,scratchV0)||Cesium[_0x3c6161(0x1ce)][_0x3c6161(0x1a0)](scratchV3,scratchV0))continue;if(_0x23faad===_0x5af802){Cesium[_0x3c6161(0x1ce)][_0x3c6161(0x1ae)](scratchV1,scratchV0,scratchN0),Cesium['Cartesian3']['subtract'](scratchV2,scratchV0,scratchN1),Cesium[_0x3c6161(0x1ce)][_0x3c6161(0x199)](scratchN0,scratchN1,scratchN0);if(Cesium['Cartesian3'][_0x3c6161(0x1a0)](scratchN0,Cesium[_0x3c6161(0x1ce)]['ZERO']))continue;Cesium[_0x3c6161(0x1ce)]['normalize'](scratchN0,scratchN0),_0x46379a[_0x3c6161(0x1b2)](scratchV0['x']),_0x46379a['push'](scratchV0['y']),_0x46379a['push'](scratchV0['z']),_0x46379a['push'](scratchV1['x']),_0x46379a[_0x3c6161(0x1b2)](scratchV1['y']),_0x46379a[_0x3c6161(0x1b2)](scratchV1['z']),_0x46379a[_0x3c6161(0x1b2)](scratchN0['x']),_0x46379a['push'](scratchN0['y']),_0x46379a[_0x3c6161(0x1b2)](scratchN0['z']);}else {Cesium[_0x3c6161(0x1ce)][_0x3c6161(0x1ae)](scratchV1,scratchV0,scratchN0),Cesium[_0x3c6161(0x1ce)][_0x3c6161(0x1ae)](scratchV2,scratchV0,scratchN1),Cesium[_0x3c6161(0x1ce)][_0x3c6161(0x199)](scratchN0,scratchN1,scratchN0);if(Cesium[_0x3c6161(0x1ce)]['equals'](scratchN0,Cesium['Cartesian3'][_0x3c6161(0x1c6)]))continue;Cesium[_0x3c6161(0x1ce)][_0x3c6161(0x1b5)](scratchN0,scratchN0),Cesium[_0x3c6161(0x1ce)][_0x3c6161(0x1ae)](scratchV1,scratchV0,scratchN2),Cesium['Cartesian3'][_0x3c6161(0x1ae)](scratchV3,scratchV0,scratchN3),Cesium[_0x3c6161(0x1ce)][_0x3c6161(0x199)](scratchN2,scratchN3,scratchN2);if(Cesium['Cartesian3'][_0x3c6161(0x1a0)](scratchN2,Cesium[_0x3c6161(0x1ce)][_0x3c6161(0x1c6)]))continue;Cesium['Cartesian3'][_0x3c6161(0x1b5)](scratchN2,scratchN2),_0x160ae8[_0x3c6161(0x1b2)](scratchV0['x']),_0x160ae8[_0x3c6161(0x1b2)](scratchV0['y']),_0x160ae8[_0x3c6161(0x1b2)](scratchV0['z']),_0x160ae8[_0x3c6161(0x1b2)](scratchV1['x']),_0x160ae8['push'](scratchV1['y']),_0x160ae8[_0x3c6161(0x1b2)](scratchV1['z']),_0x160ae8['push'](scratchN0['x']),_0x160ae8[_0x3c6161(0x1b2)](scratchN0['y']),_0x160ae8[_0x3c6161(0x1b2)](scratchN0['z']),_0x160ae8[_0x3c6161(0x1b2)](scratchN2['x']),_0x160ae8['push'](scratchN2['y']),_0x160ae8[_0x3c6161(0x1b2)](scratchN2['z']);}_0x4d0f01+=Cesium['Cartesian3'][_0x3c6161(0x1ab)](scratchV0,scratchV1);}let _0x23b9c3=_0x3b6058/0x4,_0x46084f=_0x4d0f01/_0x23b9c3,_0x5a0743=_0x46379a[_0x3c6161(0x1b3)]/S3MEdgeProcessor[_0x3c6161(0x1cf)],_0x581097=_0x160ae8['length']/0xc;return {'regular':{'instancesData':new Float32Array(_0x46379a),'instanceCount':_0x5a0743,'edgeLength':_0x5a0743*_0x46084f},'silhouette':{'instancesData':new Float32Array(_0x160ae8),'instanceCount':_0x581097,'edgeLength':_0x581097},'averageEdgeLength':_0x46084f};};

    const _0x4c93=['uv3','aTexCoordZ','uv1','instanceBuffer','buffer','SV_Compressed','inflate','unpack','BYTES_PER_ELEMENT','texCoordCompressConstant','uv7','912039eLNaaA','4643qJlwyM','instanceIds','SVC_Vertex','PixelFormat','285408FjOIIM','vertCompressConstant','parse','green','649202sSMGKL','string','1GthUnG','batchId','materials','verticesCount','534091xczQkq','vertexColorInstance','SHORT','minTexCoordValue','1959rNNzke','skeletonNames','vertexPackage','pickInfo','length','minVerticesValue','createEdgeDataByIndices','instanceMode','1jGIIxL','aPosition','getUint32','indexType','materialCode','aTexCoord','rangeList','groupNode','vertexColor','Geometry','aNormal','SVC_TexutreCoordIsW','getUint8','primitiveType','uv2','SV_Standard','indicesTypedArray','rangeMode','Color','version','BGR','arrayFill','uv6','uv4','geodes','push','instanceBounds','boundingSphere','aColor','aSecondColor','blue','RGB','getFloat64','vertexAttributes','ComponentDatatype','UNSIGNED_BYTE','FLOAT','pageLods','matrix','uv5','getStringFromTypedArray','geoPackage','getUint16','bytesOffset','1qvdjYs','compressOptions','uv9','SVC_Normal','379qAxHYu','indexOf','184BVogrS','1345689QZYRjY','indicesCount','parseBuffer','slice','getFloat32','1XuGXwJ','SVC_TexutreCoord','attrLocation','secondary_colour'];const _0x3911ff=_0x545d;(function(_0x2827e5,_0x2494aa){const _0x42e0b8=_0x545d;while(!![]){try{const _0x1bdba3=parseInt(_0x42e0b8(0x189))*parseInt(_0x42e0b8(0x17e))+parseInt(_0x42e0b8(0x16f))*parseInt(_0x42e0b8(0x187))+-parseInt(_0x42e0b8(0x167))*parseInt(_0x42e0b8(0x191))+-parseInt(_0x42e0b8(0x17f))*-parseInt(_0x42e0b8(0x169))+-parseInt(_0x42e0b8(0x18d))*-parseInt(_0x42e0b8(0x163))+-parseInt(_0x42e0b8(0x183))+-parseInt(_0x42e0b8(0x16a))*parseInt(_0x42e0b8(0x199));if(_0x1bdba3===_0x2494aa)break;else _0x2827e5['push'](_0x2827e5['shift']());}catch(_0x5b2f71){_0x2827e5['push'](_0x2827e5['shift']());}}}(_0x4c93,0x8ca56));function S3ModelParser(){}let S3MBVertexTag={'SV_Unkown':0x0,'SV_Standard':0x1,'SV_Compressed':0x2};function unZip(_0x3207c4,_0x344018){const _0xa1ea60=_0x545d;let _0xbc4ceb=new Uint8Array(_0x3207c4,_0x344018);return _0x53a39a[_0xa1ea60(0x179)](_0xbc4ceb)[_0xa1ea60(0x177)];}function parseString(_0x107440,_0x1df54b,_0x18014b){const _0x530cb3=_0x545d;let _0x343788=_0x1df54b['getUint32'](_0x18014b,!![]);_0x18014b+=Uint32Array[_0x530cb3(0x17b)];let _0x5f5045=new Uint8Array(_0x107440,_0x18014b,_0x343788),_0x308bb2=Cesium[_0x530cb3(0x15f)](_0x5f5045);return _0x18014b+=_0x343788,{'string':_0x308bb2,'bytesOffset':_0x18014b};}function parseGeode(_0x23183f,_0x15dfa3,_0x1ca357,_0x2456e4){const _0x57e7f1=_0x545d;let _0xa50923={},_0x4e263e=[],_0x46fd86=new Array(0x10);for(let _0x1028ae=0x0;_0x1028ae<0x10;_0x1028ae++){_0x46fd86[_0x1028ae]=_0x15dfa3[_0x57e7f1(0x157)](_0x1ca357,!![]),_0x1ca357+=Float64Array['BYTES_PER_ELEMENT'];}_0xa50923[_0x57e7f1(0x15d)]=_0x46fd86,_0xa50923[_0x57e7f1(0x192)]=_0x4e263e;let _0x3093a7=_0x15dfa3[_0x57e7f1(0x19b)](_0x1ca357,!![]);_0x1ca357+=Uint32Array[_0x57e7f1(0x17b)];for(let _0x3a327a=0x0;_0x3a327a<_0x3093a7;_0x3a327a++){let _0x3b8eea=parseString(_0x23183f,_0x15dfa3,_0x1ca357);_0x4e263e[_0x57e7f1(0x150)](_0x3b8eea[_0x57e7f1(0x188)]),_0x1ca357=_0x3b8eea[_0x57e7f1(0x162)];}return _0x2456e4[_0x57e7f1(0x150)](_0xa50923),_0x1ca357;}function parsePageLOD(_0x56b3b9,_0x440a14,_0x17de1b,_0x5282dc){const _0x5df322=_0x545d;let _0x263697={};_0x263697[_0x5df322(0x19f)]=_0x440a14[_0x5df322(0x16e)](_0x17de1b,!![]),_0x17de1b+=Float32Array['BYTES_PER_ELEMENT'],_0x263697[_0x5df322(0x1aa)]=_0x440a14['getUint16'](_0x17de1b,!![]),_0x17de1b+=Uint16Array['BYTES_PER_ELEMENT'];let _0x518ebe={};_0x518ebe['x']=_0x440a14[_0x5df322(0x157)](_0x17de1b,!![]),_0x17de1b+=Float64Array[_0x5df322(0x17b)],_0x518ebe['y']=_0x440a14['getFloat64'](_0x17de1b,!![]),_0x17de1b+=Float64Array[_0x5df322(0x17b)],_0x518ebe['z']=_0x440a14['getFloat64'](_0x17de1b,!![]),_0x17de1b+=Float64Array[_0x5df322(0x17b)];let _0x4dde66=_0x440a14[_0x5df322(0x157)](_0x17de1b,!![]);_0x17de1b+=Float64Array[_0x5df322(0x17b)],_0x263697[_0x5df322(0x152)]={'center':_0x518ebe,'radius':_0x4dde66};let _0x1c1026=parseString(_0x56b3b9,_0x440a14,_0x17de1b),_0x4ea512=_0x1c1026[_0x5df322(0x188)];_0x17de1b=_0x1c1026[_0x5df322(0x162)];let _0x4ec662=_0x4ea512[_0x5df322(0x168)](_0x5df322(0x1a2));if(_0x4ec662!==-0x1){let _0xb082f1=_0x4ea512['substring'](_0x4ec662);_0x4ea512=_0x4ea512['replace'](_0xb082f1,'');}_0x263697['childTile']=_0x4ea512,_0x263697[_0x5df322(0x14f)]=[];let _0x43b6be=_0x440a14[_0x5df322(0x19b)](_0x17de1b,!![]);_0x17de1b+=Uint32Array[_0x5df322(0x17b)];for(let _0xc746c4=0x0;_0xc746c4<_0x43b6be;_0xc746c4++){_0x17de1b=parseGeode(_0x56b3b9,_0x440a14,_0x17de1b,_0x263697['geodes']);}return _0x5282dc['push'](_0x263697),_0x17de1b;}function parseGroupNode(_0x154cec,_0x24d073,_0x14ca69,_0x43a816){const _0xfbc43d=_0x545d;let _0x16f1bf={},_0x3ae190=[],_0x6e77aa=_0x24d073[_0xfbc43d(0x19b)](_0x14ca69,!![]);_0x14ca69+=Uint32Array[_0xfbc43d(0x17b)];let _0x1c80a6=_0x24d073['getUint32'](_0x14ca69,!![]);_0x14ca69+=Uint32Array[_0xfbc43d(0x17b)];for(let _0x569150=0x0;_0x569150<_0x1c80a6;_0x569150++){_0x14ca69=parsePageLOD(_0x154cec,_0x24d073,_0x14ca69,_0x3ae190);}_0x16f1bf[_0xfbc43d(0x15c)]=_0x3ae190;let _0x2637b7=_0x14ca69%0x4;return _0x2637b7!==0x0&&(_0x14ca69+=0x4-_0x2637b7),_0x43a816[_0xfbc43d(0x1a0)]=_0x16f1bf,_0x14ca69;}function parseVertex(_0x3d4de0,_0x12036c,_0x2fb558,_0x41bde6){const _0x1f82af=_0x545d;let _0x6ef9db=_0x12036c[_0x1f82af(0x19b)](_0x2fb558,!![]);_0x41bde6['verticesCount']=_0x6ef9db,_0x2fb558+=Uint32Array[_0x1f82af(0x17b)];if(_0x2fb558<=0x0)return _0x2fb558;let _0x448a32=_0x12036c[_0x1f82af(0x161)](_0x2fb558,!![]);_0x2fb558+=Uint16Array[_0x1f82af(0x17b)];let _0x51d505=_0x12036c[_0x1f82af(0x161)](_0x2fb558,!![]);_0x51d505=_0x448a32*Float32Array[_0x1f82af(0x17b)],_0x2fb558+=Uint16Array[_0x1f82af(0x17b)];let _0x4e8237=_0x6ef9db*_0x448a32*Float32Array[_0x1f82af(0x17b)],_0x4f3a5b=new Uint8Array(_0x3d4de0,_0x2fb558,_0x4e8237);_0x2fb558+=_0x4e8237;let _0x17292d=_0x41bde6[_0x1f82af(0x158)],_0x2b881e=_0x41bde6['attrLocation'];return _0x2b881e[_0x1f82af(0x19a)]=_0x17292d['length'],_0x17292d[_0x1f82af(0x150)]({'index':_0x2b881e[_0x1f82af(0x19a)],'typedArray':_0x4f3a5b,'componentsPerAttribute':_0x448a32,'componentDatatype':Cesium[_0x1f82af(0x159)]['FLOAT'],'offsetInBytes':0x0,'strideInBytes':_0x51d505,'normalize':![]}),_0x2fb558;}function parseNormal(_0xa86366,_0x7e04e9,_0x43da5e,_0x5f5255){const _0x506499=_0x545d;let _0x455de0=_0x7e04e9[_0x506499(0x19b)](_0x43da5e,!![]);_0x43da5e+=Uint32Array[_0x506499(0x17b)];if(_0x455de0<=0x0)return _0x43da5e;let _0x107536=_0x7e04e9[_0x506499(0x161)](_0x43da5e,!![]);_0x43da5e+=Uint16Array['BYTES_PER_ELEMENT'];let _0x42221f=_0x7e04e9[_0x506499(0x161)](_0x43da5e,!![]);_0x43da5e+=Uint16Array[_0x506499(0x17b)];let _0x3595ab=_0x455de0*_0x107536*Float32Array[_0x506499(0x17b)],_0x3484c7=new Uint8Array(_0xa86366,_0x43da5e,_0x3595ab);_0x43da5e+=_0x3595ab;let _0x328b59=_0x5f5255['vertexAttributes'],_0x41bc0e=_0x5f5255[_0x506499(0x171)];return _0x41bc0e[_0x506499(0x1a3)]=_0x328b59[_0x506499(0x195)],_0x328b59[_0x506499(0x150)]({'index':_0x41bc0e[_0x506499(0x1a3)],'typedArray':_0x3484c7,'componentsPerAttribute':_0x107536,'componentDatatype':Cesium[_0x506499(0x159)][_0x506499(0x15b)],'offsetInBytes':0x0,'strideInBytes':_0x42221f,'normalize':![]}),_0x43da5e;}function parseVertexColor(_0x407aa9,_0xbbb6ae,_0x24d370,_0xda3d35){const _0x2e9471=_0x545d;let _0xfceb1a=_0xbbb6ae[_0x2e9471(0x19b)](_0x24d370,!![]);_0x24d370+=Uint32Array[_0x2e9471(0x17b)];let _0x367907=_0xda3d35[_0x2e9471(0x18c)],_0x5a95c8;if(_0xfceb1a>0x0){let _0x50eeb3=_0xbbb6ae[_0x2e9471(0x161)](_0x24d370,!![]);_0x24d370+=Uint16Array[_0x2e9471(0x17b)],_0x24d370+=Uint8Array[_0x2e9471(0x17b)]*0x2;let _0x3e3426=_0xfceb1a*Uint8Array[_0x2e9471(0x17b)]*0x4,_0x539cdb=new Uint8Array(_0x407aa9,_0x24d370,_0x3e3426);_0x5a95c8=_0x539cdb[_0x2e9471(0x16d)](0x0,_0x3e3426),_0x24d370+=_0x3e3426;}else {_0x5a95c8=new Uint8Array(0x4*_0x367907);for(let _0x1fbab2=0x0;_0x1fbab2<_0x367907;_0x1fbab2++){_0x5a95c8[_0x1fbab2*0x4]=0xff,_0x5a95c8[_0x1fbab2*0x4+0x1]=0xff,_0x5a95c8[_0x1fbab2*0x4+0x2]=0xff,_0x5a95c8[_0x1fbab2*0x4+0x3]=0xff;}}let _0x50b5b2=_0xda3d35[_0x2e9471(0x158)],_0x58418c=_0xda3d35[_0x2e9471(0x171)];return _0x58418c[_0x2e9471(0x153)]=_0x50b5b2[_0x2e9471(0x195)],_0x50b5b2['push']({'index':_0x58418c[_0x2e9471(0x153)],'typedArray':_0x5a95c8,'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x2e9471(0x159)][_0x2e9471(0x15a)],'offsetInBytes':0x0,'strideInBytes':0x4,'normalize':!![]}),_0xda3d35[_0x2e9471(0x1a1)]=_0x5a95c8,_0x24d370;}function parseSecondColor(_0x54ecc6,_0x343acc,_0x4cb8f7,_0xced1b0){const _0x4a8ee0=_0x545d;let _0x572a42=_0x343acc[_0x4a8ee0(0x19b)](_0x4cb8f7,!![]);_0x4cb8f7+=Uint32Array[_0x4a8ee0(0x17b)];if(_0x572a42<=0x0)return _0x4cb8f7;let _0x2e3ef3=_0x343acc[_0x4a8ee0(0x161)](_0x4cb8f7,!![]);_0x4cb8f7+=Uint16Array[_0x4a8ee0(0x17b)],_0x4cb8f7+=Uint8Array['BYTES_PER_ELEMENT']*0x2;let _0x4f7aff=_0x572a42*Uint8Array[_0x4a8ee0(0x17b)]*0x4,_0x456a0d=new Uint8Array(_0x54ecc6,_0x4cb8f7,_0x4f7aff);_0x4cb8f7+=_0x4f7aff;let _0x1e0922=_0xced1b0[_0x4a8ee0(0x158)],_0x697d5a=_0xced1b0[_0x4a8ee0(0x171)];return _0x697d5a[_0x4a8ee0(0x154)]=_0x1e0922[_0x4a8ee0(0x195)],_0x1e0922[_0x4a8ee0(0x150)]({'index':_0x697d5a[_0x4a8ee0(0x154)],'typedArray':_0x456a0d,'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x4a8ee0(0x159)][_0x4a8ee0(0x15a)],'offsetInBytes':0x0,'strideInBytes':0x4,'normalize':!![]}),_0x4cb8f7;}function parseTexCoord(_0x3f9da7,_0x1c0266,_0x2f435f,_0x56ead6){const _0x53b3e6=_0x545d;let _0x35b02d=_0x1c0266[_0x53b3e6(0x161)](_0x2f435f,!![]);_0x2f435f+=Uint16Array['BYTES_PER_ELEMENT'],_0x2f435f+=Uint16Array[_0x53b3e6(0x17b)];for(let _0x14a06d=0x0;_0x14a06d<_0x35b02d;_0x14a06d++){let _0x21e740=_0x1c0266['getUint32'](_0x2f435f,!![]);_0x2f435f+=Uint32Array[_0x53b3e6(0x17b)];let _0x1126ee=_0x1c0266[_0x53b3e6(0x161)](_0x2f435f,!![]);_0x2f435f+=Uint16Array[_0x53b3e6(0x17b)];let _0x29dc99=_0x1c0266[_0x53b3e6(0x161)](_0x2f435f,!![]);_0x2f435f+=Uint16Array[_0x53b3e6(0x17b)];let _0xfb0fb7=_0x21e740*_0x1126ee*Float32Array[_0x53b3e6(0x17b)],_0x18ffe3=new Uint8Array(_0x3f9da7,_0x2f435f,_0xfb0fb7);_0x2f435f+=_0xfb0fb7;let _0x300f34=_0x53b3e6(0x19e)+_0x14a06d,_0x5736a2=_0x56ead6[_0x53b3e6(0x158)],_0x58252e=_0x56ead6[_0x53b3e6(0x171)];_0x58252e[_0x300f34]=_0x5736a2[_0x53b3e6(0x195)],_0x5736a2[_0x53b3e6(0x150)]({'index':_0x58252e[_0x300f34],'typedArray':_0x18ffe3,'componentsPerAttribute':_0x1126ee,'componentDatatype':Cesium[_0x53b3e6(0x159)][_0x53b3e6(0x15b)],'offsetInBytes':0x0,'strideInBytes':_0x1126ee*Float32Array[_0x53b3e6(0x17b)],'normalize':![]});}return _0x2f435f;}function parseInstanceInfo(_0x56df8c,_0x4c37ab,_0x3addec,_0x1acd75){const _0x5d4d75=_0x545d;let _0x4fb36c=_0x4c37ab[_0x5d4d75(0x161)](_0x3addec,!![]);_0x3addec+=Uint16Array[_0x5d4d75(0x17b)],_0x3addec+=Uint16Array[_0x5d4d75(0x17b)];let _0x1abf2f=_0x1acd75[_0x5d4d75(0x158)],_0x4b7ec7=_0x1acd75['attrLocation'];for(let _0x46fc33=0x0;_0x46fc33<_0x4fb36c;_0x46fc33++){let _0x51d8b5=_0x4c37ab['getUint32'](_0x3addec,!![]);_0x3addec+=Uint32Array['BYTES_PER_ELEMENT'];let _0x264661=_0x4c37ab[_0x5d4d75(0x161)](_0x3addec,!![]);_0x3addec+=Uint16Array['BYTES_PER_ELEMENT'];let _0x309ad0=_0x4c37ab[_0x5d4d75(0x161)](_0x3addec,!![]);_0x3addec+=Uint16Array[_0x5d4d75(0x17b)];let _0x52a599=_0x51d8b5*_0x264661*Float32Array[_0x5d4d75(0x17b)];if(_0x264661===0x11||_0x264661===0x1d){let _0x273dfb=new Uint8Array(_0x56df8c,_0x3addec,_0x52a599);_0x1acd75['instanceCount']=_0x51d8b5,_0x1acd75[_0x5d4d75(0x198)]=_0x264661,_0x1acd75[_0x5d4d75(0x176)]=_0x273dfb,_0x1acd75['instanceIndex']=0x1;let _0x1fa9ce=_0x264661*_0x51d8b5*0x4,_0x3804a2=_0x273dfb[_0x5d4d75(0x16d)](0x0,_0x1fa9ce);_0x1acd75[_0x5d4d75(0x18e)]=_0x3804a2;let _0x1a8e0b;if(_0x264661===0x11)_0x1a8e0b=Float32Array['BYTES_PER_ELEMENT']*0x11,_0x4b7ec7['uv2']=_0x1abf2f['length'],_0x1abf2f[_0x5d4d75(0x150)]({'index':_0x4b7ec7[_0x5d4d75(0x1a7)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x5d4d75(0x15b)],'normalize':![],'offsetInBytes':0x0,'strideInBytes':_0x1a8e0b,'instanceDivisor':0x1}),_0x4b7ec7[_0x5d4d75(0x173)]=_0x1abf2f['length'],_0x1abf2f[_0x5d4d75(0x150)]({'index':_0x4b7ec7[_0x5d4d75(0x173)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5d4d75(0x159)][_0x5d4d75(0x15b)],'normalize':![],'offsetInBytes':0x4*Float32Array['BYTES_PER_ELEMENT'],'strideInBytes':_0x1a8e0b,'instanceDivisor':0x1}),_0x4b7ec7['uv4']=_0x1abf2f[_0x5d4d75(0x195)],_0x1abf2f[_0x5d4d75(0x150)]({'index':_0x4b7ec7['uv4'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5d4d75(0x159)][_0x5d4d75(0x15b)],'normalize':![],'offsetInBytes':0x8*Float32Array[_0x5d4d75(0x17b)],'strideInBytes':_0x1a8e0b,'instanceDivisor':0x1}),_0x4b7ec7[_0x5d4d75(0x172)]=_0x1abf2f[_0x5d4d75(0x195)],_0x1abf2f[_0x5d4d75(0x150)]({'index':_0x4b7ec7[_0x5d4d75(0x172)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x5d4d75(0x15b)],'normalize':![],'offsetInBytes':0xc*Float32Array[_0x5d4d75(0x17b)],'strideInBytes':_0x1a8e0b,'instanceDivisor':0x1}),_0x4b7ec7[_0x5d4d75(0x14d)]=_0x1abf2f[_0x5d4d75(0x195)],_0x1abf2f['push']({'index':_0x4b7ec7[_0x5d4d75(0x14d)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5d4d75(0x159)][_0x5d4d75(0x15a)],'normalize':!![],'offsetInBytes':0x10*Float32Array[_0x5d4d75(0x17b)],'strideInBytes':_0x1a8e0b,'instanceDivisor':0x1});else _0x264661===0x1d&&(_0x1a8e0b=Float32Array[_0x5d4d75(0x17b)]*0x1d,_0x4b7ec7[_0x5d4d75(0x175)]=_0x1abf2f['length'],_0x1abf2f['push']({'index':_0x4b7ec7[_0x5d4d75(0x175)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5d4d75(0x159)][_0x5d4d75(0x15b)],'normalize':![],'offsetInBytes':0x0,'strideInBytes':_0x1a8e0b,'instanceDivisor':0x1,'byteLength':_0x52a599}),_0x4b7ec7['uv2']=_0x1abf2f[_0x5d4d75(0x195)],_0x1abf2f[_0x5d4d75(0x150)]({'index':_0x4b7ec7['uv2'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5d4d75(0x159)]['FLOAT'],'normalize':![],'offsetInBytes':0x4*Float32Array[_0x5d4d75(0x17b)],'strideInBytes':_0x1a8e0b,'instanceDivisor':0x1}),_0x4b7ec7[_0x5d4d75(0x173)]=_0x1abf2f['length'],_0x1abf2f[_0x5d4d75(0x150)]({'index':_0x4b7ec7[_0x5d4d75(0x173)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5d4d75(0x159)][_0x5d4d75(0x15b)],'normalize':![],'offsetInBytes':0x8*Float32Array[_0x5d4d75(0x17b)],'strideInBytes':_0x1a8e0b,'instanceDivisor':0x1}),_0x4b7ec7['uv4']=_0x1abf2f[_0x5d4d75(0x195)],_0x1abf2f[_0x5d4d75(0x150)]({'index':_0x4b7ec7[_0x5d4d75(0x14e)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5d4d75(0x159)]['FLOAT'],'normalize':![],'offsetInBytes':0xc*Float32Array[_0x5d4d75(0x17b)],'strideInBytes':_0x1a8e0b,'instanceDivisor':0x1}),_0x4b7ec7[_0x5d4d75(0x15e)]=_0x1abf2f[_0x5d4d75(0x195)],_0x1abf2f[_0x5d4d75(0x150)]({'index':_0x4b7ec7[_0x5d4d75(0x15e)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x5d4d75(0x15b)],'normalize':![],'offsetInBytes':0x10*Float32Array['BYTES_PER_ELEMENT'],'strideInBytes':_0x1a8e0b,'instanceDivisor':0x1}),_0x4b7ec7[_0x5d4d75(0x14d)]=_0x1abf2f[_0x5d4d75(0x195)],_0x1abf2f['push']({'index':_0x4b7ec7[_0x5d4d75(0x14d)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5d4d75(0x159)][_0x5d4d75(0x15b)],'normalize':![],'offsetInBytes':0x14*Float32Array[_0x5d4d75(0x17b)],'strideInBytes':_0x1a8e0b,'instanceDivisor':0x1}),_0x4b7ec7[_0x5d4d75(0x17d)]=_0x1abf2f[_0x5d4d75(0x195)],_0x1abf2f[_0x5d4d75(0x150)]({'index':_0x4b7ec7[_0x5d4d75(0x17d)],'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x5d4d75(0x159)]['FLOAT'],'normalize':![],'offsetInBytes':0x18*Float32Array[_0x5d4d75(0x17b)],'strideInBytes':_0x1a8e0b,'instanceDivisor':0x1}),_0x4b7ec7[_0x5d4d75(0x172)]=_0x1abf2f['length'],_0x1abf2f[_0x5d4d75(0x150)]({'index':_0x4b7ec7[_0x5d4d75(0x172)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5d4d75(0x159)][_0x5d4d75(0x15a)],'normalize':!![],'offsetInBytes':0x1b*Float32Array[_0x5d4d75(0x17b)],'strideInBytes':_0x1a8e0b,'instanceDivisor':0x1}),_0x4b7ec7[_0x5d4d75(0x165)]=_0x1abf2f[_0x5d4d75(0x195)],_0x1abf2f[_0x5d4d75(0x150)]({'index':_0x4b7ec7[_0x5d4d75(0x165)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5d4d75(0x159)][_0x5d4d75(0x15a)],'normalize':!![],'offsetInBytes':0x1c*Float32Array[_0x5d4d75(0x17b)],'strideInBytes':_0x1a8e0b,'instanceDivisor':0x1}));}else {let _0x430179=_0x51d8b5*_0x264661;_0x1acd75[_0x5d4d75(0x151)]=new Float32Array(_0x430179);for(let _0x21de9f=0x0;_0x21de9f<_0x430179;_0x21de9f++){_0x1acd75[_0x5d4d75(0x151)][_0x21de9f]=_0x4c37ab[_0x5d4d75(0x16e)](_0x3addec+_0x21de9f*Float32Array[_0x5d4d75(0x17b)],!![]);}}_0x3addec+=_0x52a599;}return _0x3addec;}function parseCompressVertex(_0x578819,_0x83b4e8,_0x487af2,_0x3e3e99){const _0x15b869=_0x545d;let _0x34c8c2=_0x83b4e8[_0x15b869(0x19b)](_0x487af2,!![]);_0x3e3e99[_0x15b869(0x18c)]=_0x34c8c2,_0x487af2+=Uint32Array['BYTES_PER_ELEMENT'];if(_0x487af2<=0x0)return _0x487af2;let _0x5ecdde=_0x83b4e8[_0x15b869(0x161)](_0x487af2,!![]);_0x487af2+=Uint16Array['BYTES_PER_ELEMENT'];let _0x373c99=_0x83b4e8[_0x15b869(0x161)](_0x487af2,!![]);_0x373c99=_0x5ecdde*Int16Array[_0x15b869(0x17b)],_0x487af2+=Uint16Array['BYTES_PER_ELEMENT'];let _0x10677c=_0x83b4e8['getFloat32'](_0x487af2,!![]);_0x487af2+=Float32Array['BYTES_PER_ELEMENT'];let _0x3577c1={};_0x3577c1['x']=_0x83b4e8[_0x15b869(0x16e)](_0x487af2,!![]),_0x487af2+=Float32Array[_0x15b869(0x17b)],_0x3577c1['y']=_0x83b4e8[_0x15b869(0x16e)](_0x487af2,!![]),_0x487af2+=Float32Array[_0x15b869(0x17b)],_0x3577c1['z']=_0x83b4e8[_0x15b869(0x16e)](_0x487af2,!![]),_0x487af2+=Float32Array[_0x15b869(0x17b)],_0x3577c1['w']=_0x83b4e8['getFloat32'](_0x487af2,!![]),_0x487af2+=Float32Array[_0x15b869(0x17b)],_0x3e3e99[_0x15b869(0x184)]=_0x10677c,_0x3e3e99[_0x15b869(0x196)]=_0x3577c1;let _0x41c5ca=_0x34c8c2*_0x5ecdde*Int16Array[_0x15b869(0x17b)],_0x4a2885=new Uint8Array(_0x578819,_0x487af2,_0x41c5ca);_0x487af2+=_0x41c5ca;let _0x556ce2=_0x3e3e99[_0x15b869(0x158)],_0x2ac1cc=_0x3e3e99[_0x15b869(0x171)];return _0x2ac1cc[_0x15b869(0x19a)]=_0x556ce2[_0x15b869(0x195)],_0x556ce2[_0x15b869(0x150)]({'index':_0x2ac1cc[_0x15b869(0x19a)],'typedArray':_0x4a2885,'componentsPerAttribute':_0x5ecdde,'componentDatatype':Cesium[_0x15b869(0x159)][_0x15b869(0x18f)],'offsetInBytes':0x0,'strideInBytes':_0x373c99,'normalize':![]}),_0x487af2;}function parseCompressNormal(_0xdcbba8,_0x1f3245,_0x394f9a,_0x27085e){const _0x3e9521=_0x545d;let _0x3aba0b=_0x1f3245['getUint32'](_0x394f9a,!![]);_0x394f9a+=Uint32Array[_0x3e9521(0x17b)];if(_0x3aba0b<=0x0)return _0x394f9a;let _0x33339e=_0x1f3245[_0x3e9521(0x161)](_0x394f9a,!![]);_0x394f9a+=Uint16Array[_0x3e9521(0x17b)];let _0x1c99a8=_0x1f3245['getUint16'](_0x394f9a,!![]);_0x394f9a+=Uint16Array[_0x3e9521(0x17b)];let _0x5164ff=_0x3aba0b*0x2*Int16Array['BYTES_PER_ELEMENT'],_0x1e577f=new Uint8Array(_0xdcbba8,_0x394f9a,_0x5164ff);_0x394f9a+=_0x5164ff;let _0x97c93c=_0x27085e[_0x3e9521(0x158)],_0x8cf532=_0x27085e[_0x3e9521(0x171)];return _0x8cf532[_0x3e9521(0x1a3)]=_0x97c93c[_0x3e9521(0x195)],_0x97c93c['push']({'index':_0x8cf532[_0x3e9521(0x1a3)],'typedArray':_0x1e577f,'componentsPerAttribute':0x2,'componentDatatype':Cesium[_0x3e9521(0x159)][_0x3e9521(0x18f)],'offsetInBytes':0x0,'strideInBytes':_0x1c99a8,'normalize':![]}),_0x394f9a;}function parseCompressTexCoord(_0x2c03f1,_0x2b032d,_0x24821f,_0x484dc9){const _0x5dc550=_0x545d;_0x484dc9[_0x5dc550(0x17c)]=[],_0x484dc9['minTexCoordValue']=[];let _0x37e0dd=_0x2b032d[_0x5dc550(0x161)](_0x24821f,!![]);_0x24821f+=Uint16Array[_0x5dc550(0x17b)],_0x24821f+=Uint16Array['BYTES_PER_ELEMENT'];for(let _0x34d1a2=0x0;_0x34d1a2<_0x37e0dd;_0x34d1a2++){let _0x506b6e=_0x2b032d[_0x5dc550(0x1a5)](_0x24821f,!![]);_0x24821f+=Uint8Array[_0x5dc550(0x17b)],_0x24821f+=Uint8Array[_0x5dc550(0x17b)]*0x3;let _0x15efea=_0x2b032d[_0x5dc550(0x19b)](_0x24821f,!![]);_0x24821f+=Uint32Array[_0x5dc550(0x17b)];let _0x2b99e3=_0x2b032d[_0x5dc550(0x161)](_0x24821f,!![]);_0x24821f+=Uint16Array[_0x5dc550(0x17b)];let _0x9b5d95=_0x2b032d[_0x5dc550(0x161)](_0x24821f,!![]);_0x24821f+=Uint16Array[_0x5dc550(0x17b)];let _0x53cc72=_0x2b032d[_0x5dc550(0x16e)](_0x24821f,!![]);_0x24821f+=Float32Array[_0x5dc550(0x17b)],_0x484dc9['texCoordCompressConstant'][_0x5dc550(0x150)](_0x53cc72);let _0x3f26ac={};_0x3f26ac['x']=_0x2b032d[_0x5dc550(0x16e)](_0x24821f,!![]),_0x24821f+=Float32Array['BYTES_PER_ELEMENT'],_0x3f26ac['y']=_0x2b032d['getFloat32'](_0x24821f,!![]),_0x24821f+=Float32Array[_0x5dc550(0x17b)],_0x3f26ac['z']=_0x2b032d[_0x5dc550(0x16e)](_0x24821f,!![]),_0x24821f+=Float32Array['BYTES_PER_ELEMENT'],_0x3f26ac['w']=_0x2b032d[_0x5dc550(0x16e)](_0x24821f,!![]),_0x24821f+=Float32Array[_0x5dc550(0x17b)],_0x484dc9[_0x5dc550(0x190)][_0x5dc550(0x150)](_0x3f26ac);let _0x574131=_0x15efea*_0x2b99e3*Int16Array[_0x5dc550(0x17b)],_0x2f162f=new Uint8Array(_0x2c03f1,_0x24821f,_0x574131);_0x24821f+=_0x574131;let _0xdbea73=_0x24821f%0x4;_0xdbea73!==0x0&&(_0x24821f+=0x4-_0xdbea73);let _0x3951bf=_0x5dc550(0x19e)+_0x34d1a2,_0x2d719e=_0x484dc9[_0x5dc550(0x158)],_0x548f44=_0x484dc9[_0x5dc550(0x171)];_0x548f44[_0x3951bf]=_0x2d719e[_0x5dc550(0x195)],_0x2d719e[_0x5dc550(0x150)]({'index':_0x548f44[_0x3951bf],'typedArray':_0x2f162f,'componentsPerAttribute':_0x2b99e3,'componentDatatype':Cesium[_0x5dc550(0x159)][_0x5dc550(0x18f)],'offsetInBytes':0x0,'strideInBytes':_0x2b99e3*Int16Array[_0x5dc550(0x17b)],'normalize':![]});if(_0x506b6e){_0x574131=_0x15efea*Float32Array[_0x5dc550(0x17b)];let _0x135d60=new Uint8Array(_0x2c03f1,_0x24821f,_0x574131);_0x24821f+=_0x574131,_0x484dc9['texCoordZMatrix']=!![],_0x3951bf=_0x5dc550(0x174)+_0x34d1a2,_0x548f44[_0x3951bf]=_0x2d719e[_0x5dc550(0x195)],_0x2d719e['push']({'index':_0x548f44[_0x3951bf],'typedArray':_0x135d60,'componentsPerAttribute':0x1,'componentDatatype':Cesium[_0x5dc550(0x159)][_0x5dc550(0x15b)],'offsetInBytes':0x0,'strideInBytes':Float32Array['BYTES_PER_ELEMENT'],'normalize':![]});}}return _0x24821f;}function parseStandardSkeleton(_0x418380,_0x5660e4,_0x2774e5,_0x4f1fa3){return _0x2774e5=parseVertex(_0x418380,_0x5660e4,_0x2774e5,_0x4f1fa3),_0x2774e5=parseNormal(_0x418380,_0x5660e4,_0x2774e5,_0x4f1fa3),_0x2774e5=parseVertexColor(_0x418380,_0x5660e4,_0x2774e5,_0x4f1fa3),_0x2774e5=parseSecondColor(_0x418380,_0x5660e4,_0x2774e5,_0x4f1fa3),_0x2774e5=parseTexCoord(_0x418380,_0x5660e4,_0x2774e5,_0x4f1fa3),_0x2774e5=parseInstanceInfo(_0x418380,_0x5660e4,_0x2774e5,_0x4f1fa3),_0x2774e5;}function parseCompressSkeleton(_0x5024b6,_0x3c9066,_0x488297,_0x1cbd0d){const _0x1a3834=_0x545d;let _0xb0a15b=_0x3c9066[_0x1a3834(0x19b)](_0x488297,!![]);return _0x1cbd0d[_0x1a3834(0x164)]=_0xb0a15b,_0x488297+=Uint32Array[_0x1a3834(0x17b)],(_0xb0a15b&_0x25c9a4[_0x1a3834(0x181)])===_0x25c9a4[_0x1a3834(0x181)]?_0x488297=parseCompressVertex(_0x5024b6,_0x3c9066,_0x488297,_0x1cbd0d):_0x488297=parseVertex(_0x5024b6,_0x3c9066,_0x488297,_0x1cbd0d),(_0xb0a15b&_0x25c9a4[_0x1a3834(0x166)])===_0x25c9a4[_0x1a3834(0x166)]?_0x488297=parseCompressNormal(_0x5024b6,_0x3c9066,_0x488297,_0x1cbd0d):_0x488297=parseNormal(_0x5024b6,_0x3c9066,_0x488297,_0x1cbd0d),_0x488297=parseVertexColor(_0x5024b6,_0x3c9066,_0x488297,_0x1cbd0d),_0x488297=parseSecondColor(_0x5024b6,_0x3c9066,_0x488297,_0x1cbd0d),(_0xb0a15b&_0x25c9a4[_0x1a3834(0x170)])===_0x25c9a4['SVC_TexutreCoord']?_0x488297=parseCompressTexCoord(_0x5024b6,_0x3c9066,_0x488297,_0x1cbd0d):_0x488297=parseTexCoord(_0x5024b6,_0x3c9066,_0x488297,_0x1cbd0d),(_0xb0a15b&_0x25c9a4[_0x1a3834(0x1a4)])===_0x25c9a4[_0x1a3834(0x1a4)]&&(_0x1cbd0d['textureCoordIsW']=!![]),_0x488297=parseInstanceInfo(_0x5024b6,_0x3c9066,_0x488297,_0x1cbd0d),_0x488297;}function parseIndexPackage(_0x3accb5,_0x20634f,_0x448d8f,_0x17dcd5){const _0x35456b=_0x545d;let _0x31dead=_0x20634f[_0x35456b(0x19b)](_0x448d8f,!![]);_0x448d8f+=Uint32Array[_0x35456b(0x17b)];for(let _0x23552d=0x0;_0x23552d<_0x31dead;_0x23552d++){let _0x52ee6f={},_0xf14779=_0x20634f[_0x35456b(0x19b)](_0x448d8f,!![]);_0x448d8f+=Uint32Array['BYTES_PER_ELEMENT'];let _0x2754fe=_0x20634f['getUint8'](_0x448d8f,!![]);_0x448d8f+=Uint8Array[_0x35456b(0x17b)];let _0x18e64d=_0x20634f[_0x35456b(0x1a5)](_0x448d8f,!![]);_0x448d8f+=Uint8Array[_0x35456b(0x17b)];let _0x2c6f54=_0x20634f[_0x35456b(0x1a5)](_0x448d8f,!![]);_0x448d8f+=Uint8Array[_0x35456b(0x17b)],_0x448d8f+=Uint8Array[_0x35456b(0x17b)];if(_0xf14779>0x0){let _0xd6ad80=null,_0x34e337;_0x2754fe===0x1||_0x2754fe===0x3?(_0x34e337=_0xf14779*Uint32Array[_0x35456b(0x17b)],_0xd6ad80=new Uint8Array(_0x3accb5,_0x448d8f,_0x34e337)):(_0x34e337=_0xf14779*Uint16Array[_0x35456b(0x17b)],_0xd6ad80=new Uint8Array(_0x3accb5,_0x448d8f,_0x34e337),_0xf14779%0x2!==0x0&&(_0x34e337+=0x2)),_0x52ee6f[_0x35456b(0x1a9)]=_0xd6ad80,_0x448d8f+=_0x34e337;}_0x52ee6f['indicesCount']=_0xf14779,_0x52ee6f[_0x35456b(0x19c)]=_0x2754fe,_0x52ee6f[_0x35456b(0x1a6)]=_0x2c6f54;let _0x9b3527=_0x20634f[_0x35456b(0x19b)](_0x448d8f,!![]);_0x448d8f+=Uint32Array[_0x35456b(0x17b)];for(let _0x2947e3=0x0;_0x2947e3<_0x9b3527;_0x2947e3++){let _0x29180c=parseString(_0x3accb5,_0x20634f,_0x448d8f),_0x452a76=_0x29180c[_0x35456b(0x188)];_0x448d8f=_0x29180c['bytesOffset'],_0x52ee6f[_0x35456b(0x19d)]=_0x452a76;}let _0x30eb28=_0x448d8f%0x4;if(_0x30eb28!==0x0){let _0x1137b7=0x4-_0x448d8f%0x4;_0x448d8f+=_0x1137b7;}_0x17dcd5['push'](_0x52ee6f);}return _0x448d8f;}function parseSkeleton(_0x3eb00a,_0x3c1208,_0x3c142b,_0x4e0540){const _0x1d5272=_0x545d;let _0x508aed=_0x3c1208[_0x1d5272(0x19b)](_0x3c142b,!![]);_0x3c142b+=Uint32Array['BYTES_PER_ELEMENT'];let _0x2e434a=_0x3c1208[_0x1d5272(0x19b)](_0x3c142b,!![]);_0x3c142b+=Uint32Array['BYTES_PER_ELEMENT'];for(let _0x4e26f5=0x0;_0x4e26f5<_0x2e434a;_0x4e26f5++){let _0x59d2fb=parseString(_0x3eb00a,_0x3c1208,_0x3c142b),_0x35c0f8=_0x59d2fb[_0x1d5272(0x188)];_0x3c142b=_0x59d2fb[_0x1d5272(0x162)];let _0x431b14=_0x3c142b%0x4;_0x431b14!==0x0&&(_0x3c142b+=0x4-_0x431b14);let _0x1cf6de=_0x3c1208[_0x1d5272(0x19b)](_0x3c142b,!![]);_0x3c142b+=Int32Array[_0x1d5272(0x17b)];let _0x46ee3e={'vertexAttributes':[],'attrLocation':{},'instanceCount':0x0,'instanceMode':0x0,'instanceIndex':-0x1};if(_0x1cf6de===S3MBVertexTag[_0x1d5272(0x1a8)])_0x3c142b=parseStandardSkeleton(_0x3eb00a,_0x3c1208,_0x3c142b,_0x46ee3e);else _0x1cf6de===S3MBVertexTag[_0x1d5272(0x178)]&&(_0x3c142b=parseCompressSkeleton(_0x3eb00a,_0x3c1208,_0x3c142b,_0x46ee3e));let _0x371ceb=[];_0x3c142b=parseIndexPackage(_0x3eb00a,_0x3c1208,_0x3c142b,_0x371ceb);let _0x5e55ee=undefined;_0x371ceb[_0x1d5272(0x195)]===0x2&&_0x371ceb[0x1][_0x1d5272(0x1a6)]===0xd&&_0x371ceb[0x1][_0x1d5272(0x16b)]>=0x3&&(_0x5e55ee=S3MEdgeProcessor[_0x1d5272(0x197)](_0x46ee3e,_0x371ceb[0x1])),_0x4e0540[_0x35c0f8]={'vertexPackage':_0x46ee3e,'arrIndexPackage':_0x371ceb,'edgeGeometry':_0x5e55ee};}let _0x28b4b7=_0x3c1208['getUint32'](_0x3c142b,!![]);return _0x3c142b+=_0x28b4b7,_0x3c142b+=Uint32Array[_0x1d5272(0x17b)],_0x3c142b;}function parseTexturePackage(_0x33a8ee,_0x30a55a,_0x17bbd0,_0x492561){const _0xe725d2=_0x545d;let _0x10360=_0x30a55a[_0xe725d2(0x19b)](_0x17bbd0,!![]);_0x17bbd0+=Uint32Array[_0xe725d2(0x17b)];let _0xd1d429=_0x30a55a[_0xe725d2(0x19b)](_0x17bbd0,!![]);_0x17bbd0+=Uint32Array[_0xe725d2(0x17b)];for(let _0x3fc0bc=0x0;_0x3fc0bc<_0xd1d429;_0x3fc0bc++){let _0x22af2b=parseString(_0x33a8ee,_0x30a55a,_0x17bbd0),_0x1efd38=_0x22af2b['string'];_0x17bbd0=_0x22af2b['bytesOffset'];let _0x113c45=_0x17bbd0%0x4;_0x113c45!==0x0&&(_0x17bbd0+=0x4-_0x113c45);let _0x278e3a=_0x30a55a[_0xe725d2(0x19b)](_0x17bbd0,!![]);_0x17bbd0+=Uint32Array['BYTES_PER_ELEMENT'];let _0x2af664=_0x30a55a[_0xe725d2(0x19b)](_0x17bbd0,!![]);_0x17bbd0+=Uint32Array['BYTES_PER_ELEMENT'];let _0x4fa2bc=_0x30a55a[_0xe725d2(0x19b)](_0x17bbd0,!![]);_0x17bbd0+=Uint32Array['BYTES_PER_ELEMENT'];let _0x5c9f7b=_0x30a55a[_0xe725d2(0x19b)](_0x17bbd0,!![]);_0x17bbd0+=Uint32Array[_0xe725d2(0x17b)];let _0x4427c7=_0x30a55a['getUint32'](_0x17bbd0,!![]);_0x17bbd0+=Uint32Array[_0xe725d2(0x17b)];let _0x463df8=_0x30a55a[_0xe725d2(0x19b)](_0x17bbd0,!![]);_0x17bbd0+=Uint32Array['BYTES_PER_ELEMENT'];let _0x1055f6=new Uint8Array(_0x33a8ee,_0x17bbd0,_0x4427c7);_0x17bbd0+=_0x4427c7;let _0x216ea7=_0x463df8===_0x4d10fa[_0xe725d2(0x156)]||_0x463df8===_0x4d10fa[_0xe725d2(0x14b)]?Cesium[_0xe725d2(0x182)]['RGB_DXT1']:Cesium[_0xe725d2(0x182)]['RGBA_DXT5'];_0x492561[_0x1efd38]={'id':_0x1efd38,'width':_0x2af664,'height':_0x4fa2bc,'compressType':_0x5c9f7b,'nFormat':_0x463df8,'internalFormat':_0x216ea7,'arrayBufferView':_0x1055f6};}return _0x17bbd0;}function parseMaterial(_0x38a64a,_0x11f010,_0xc7e0cb,_0x2136d6){const _0x3e816f=_0x545d;let _0x3526a0=_0x11f010['getUint32'](_0xc7e0cb,!![]);_0xc7e0cb+=Uint32Array['BYTES_PER_ELEMENT'];let _0x33a20a=new Uint8Array(_0x38a64a,_0xc7e0cb,_0x3526a0),_0x127040=Cesium['getStringFromTypedArray'](_0x33a20a);return _0xc7e0cb+=_0x3526a0,_0x2136d6[_0x3e816f(0x18b)]=JSON[_0x3e816f(0x185)](_0x127040),_0xc7e0cb;}let colorScratch=new Cesium['Color'](),LEFT_16=0x10000;function _0x545d(_0x25e2e8,_0x1a1c46){_0x25e2e8=_0x25e2e8-0x14b;let _0x4c9334=_0x4c93[_0x25e2e8];return _0x4c9334;}function parsePickInfo(_0x51fcb6,_0x3cd465,_0x38ec60,_0x263564,_0x5e7a6b,_0x410177){const _0x5e058d=_0x545d;if((_0x263564&0x1)===0x1){let _0x222d06=_0x3cd465['getUint32'](_0x38ec60,!![]);_0x38ec60+=Uint32Array[_0x5e058d(0x17b)];let _0x22a0f3=_0x3cd465[_0x5e058d(0x19b)](_0x38ec60,!![]);_0x38ec60+=Uint32Array[_0x5e058d(0x17b)];for(let _0x25c7c3=0x0;_0x25c7c3<_0x22a0f3;_0x25c7c3++){let _0x79c0a6=parseString(_0x51fcb6,_0x3cd465,_0x38ec60),_0x511ba2=_0x79c0a6[_0x5e058d(0x188)];_0x38ec60=_0x79c0a6[_0x5e058d(0x162)];let _0xfa7141=_0x3cd465[_0x5e058d(0x19b)](_0x38ec60,!![]);_0x38ec60+=Uint32Array['BYTES_PER_ELEMENT'];let _0x3d4505={};_0x5e7a6b[_0x511ba2][_0x5e058d(0x194)]=_0x3d4505;let _0x200e2b=_0x5e7a6b[_0x511ba2][_0x5e058d(0x193)]['instanceIndex'];if(_0x200e2b==-0x1){let _0x27a0ba=new Float32Array(_0x5e7a6b[_0x511ba2]['vertexPackage'][_0x5e058d(0x18c)]);for(let _0x36e506=0x0;_0x36e506<_0xfa7141;_0x36e506++){let _0x3fb4c6=_0x3cd465[_0x5e058d(0x19b)](_0x38ec60,!![]);_0x38ec60+=Uint32Array[_0x5e058d(0x17b)];let _0x2ce650=_0x3cd465[_0x5e058d(0x19b)](_0x38ec60,!![]);_0x38ec60+=Uint32Array['BYTES_PER_ELEMENT'];let _0x2fa08e=[];for(let _0x59e953=0x0;_0x59e953<_0x2ce650;_0x59e953++){let _0x241742=_0x3cd465['getUint32'](_0x38ec60,!![]);_0x38ec60+=Uint32Array[_0x5e058d(0x17b)];let _0x9bf0a1=_0x3cd465[_0x5e058d(0x19b)](_0x38ec60,!![]);_0x38ec60+=Uint32Array['BYTES_PER_ELEMENT'],Cesium[_0x5e058d(0x14c)](_0x27a0ba,_0x36e506,_0x241742,_0x241742+_0x9bf0a1),_0x2fa08e[_0x5e058d(0x150)]({'vertexColorOffset':_0x241742,'vertexColorCount':_0x9bf0a1,'batchId':_0x36e506});}_0x3d4505[_0x3fb4c6]=_0x2fa08e;}createBatchIdAttribute(_0x5e7a6b[_0x511ba2][_0x5e058d(0x193)],_0x27a0ba,undefined);}else {let _0x3a7434=_0x5e7a6b[_0x511ba2][_0x5e058d(0x193)]['instanceCount'],_0x3c115f=_0x5e7a6b[_0x511ba2][_0x5e058d(0x193)][_0x5e058d(0x176)],_0x25020a=_0x5e7a6b[_0x511ba2][_0x5e058d(0x193)][_0x5e058d(0x198)],_0x508691=new Float32Array(_0x3a7434),_0x453aa8=[];for(let _0x26175b=0x0;_0x26175b<_0xfa7141;_0x26175b++){let _0x5a41ad=_0x3cd465[_0x5e058d(0x19b)](_0x38ec60,!![]);_0x453aa8[_0x5e058d(0x150)](_0x5a41ad),_0x38ec60+=Uint32Array['BYTES_PER_ELEMENT'];let _0x1fa5fd=_0x3cd465[_0x5e058d(0x19b)](_0x38ec60,!![]);_0x38ec60+=Uint32Array[_0x5e058d(0x17b)];for(let _0x44be19=0x0;_0x44be19<_0x1fa5fd;_0x44be19++){let _0x199d73=_0x3cd465[_0x5e058d(0x19b)](_0x38ec60,!![]);_0x38ec60+=Uint32Array[_0x5e058d(0x17b)];if(_0x410177==0x2){let _0x5f198b=_0x3cd465['getUint32'](_0x38ec60,!![]);_0x38ec60+=Uint32Array[_0x5e058d(0x17b)];}}}let _0x5c1b4c=_0x25020a===0x11?0x10:0x1c;_0x5c1b4c*=Float32Array['BYTES_PER_ELEMENT'];for(let _0x50b853=0x0;_0x50b853<_0x3a7434;_0x50b853++){_0x508691[_0x50b853]=_0x50b853;let _0x1f33b3=_0x50b853*_0x25020a*Float32Array[_0x5e058d(0x17b)]+_0x5c1b4c;Cesium[_0x5e058d(0x1ab)][_0x5e058d(0x17a)](_0x3c115f,_0x1f33b3,colorScratch);let _0x222735=_0x410177===0x2?_0x453aa8[_0x50b853]:colorScratch['red']+colorScratch[_0x5e058d(0x186)]*0x100+colorScratch[_0x5e058d(0x155)]*LEFT_16;_0x3d4505[_0x222735]===undefined&&(_0x3d4505[_0x222735]={'vertexColorCount':0x1,'instanceIds':[],'vertexColorOffset':_0x50b853}),_0x3d4505[_0x222735][_0x5e058d(0x180)][_0x5e058d(0x150)](_0x50b853);}createBatchIdAttribute(_0x5e7a6b[_0x511ba2][_0x5e058d(0x193)],_0x508691,0x1);}}}return _0x38ec60;}function createBatchIdAttribute(_0x465503,_0x37dde9,_0x3ccda5){const _0x3bf50f=_0x545d;let _0x27f17f=_0x465503[_0x3bf50f(0x158)],_0x126d53=_0x465503[_0x3bf50f(0x171)],_0x3e9080=_0x27f17f[_0x3bf50f(0x195)],_0x52a5f1=_0x3ccda5===0x1?'instanceId':_0x3bf50f(0x18a);_0x126d53[_0x52a5f1]=_0x3e9080,_0x27f17f[_0x3bf50f(0x150)]({'index':_0x3e9080,'typedArray':_0x37dde9,'componentsPerAttribute':0x1,'componentDatatype':Cesium[_0x3bf50f(0x159)][_0x3bf50f(0x15b)],'offsetInBytes':0x0,'strideInBytes':0x0,'instanceDivisor':_0x3ccda5});}S3ModelParser[_0x3911ff(0x16c)]=function(_0x25c6d6){const _0x4079b8=_0x3911ff;let _0x59f87=0x0,_0x47b918={'version':undefined,'groupNode':undefined,'geoPackage':{},'matrials':undefined,'texturePackage':{}},_0x5f05df=new DataView(_0x25c6d6);_0x47b918[_0x4079b8(0x1ac)]=_0x5f05df[_0x4079b8(0x16e)](_0x59f87,!![]),_0x59f87+=Float32Array[_0x4079b8(0x17b)];if(_0x47b918[_0x4079b8(0x1ac)]>=0x2){let _0xf6ab46=_0x5f05df['getUint32'](_0x59f87,!![]);_0x59f87+=Uint32Array[_0x4079b8(0x17b)];}let _0x1f5de3=_0x5f05df[_0x4079b8(0x19b)](_0x59f87,!![]);_0x59f87+=Uint32Array['BYTES_PER_ELEMENT'];let _0x29495c=unZip(_0x25c6d6,_0x59f87);_0x5f05df=new DataView(_0x29495c),_0x59f87=0x0;let _0x318f3e=_0x5f05df[_0x4079b8(0x19b)](_0x59f87,!![]);return _0x59f87+=Uint32Array[_0x4079b8(0x17b)],_0x59f87=parseGroupNode(_0x29495c,_0x5f05df,_0x59f87,_0x47b918),_0x59f87=parseSkeleton(_0x29495c,_0x5f05df,_0x59f87,_0x47b918[_0x4079b8(0x160)]),_0x59f87=parseTexturePackage(_0x29495c,_0x5f05df,_0x59f87,_0x47b918['texturePackage']),_0x59f87=parseMaterial(_0x29495c,_0x5f05df,_0x59f87,_0x47b918),parsePickInfo(_0x29495c,_0x5f05df,_0x59f87,_0x318f3e,_0x47b918['geoPackage'],_0x47b918[_0x4079b8(0x1ac)]),_0x47b918;};

    const _0x2334=['109541TAnqyP','26413CvyvDn','463433nlxlML','11surycd','1gazZyR','387870ZETPYy','freeze','44511OQzgpk','246994cuEmMC','41947WmJfZX','3TCOUlE'];function _0x512b(_0x3e9908,_0x25d68f){_0x3e9908=_0x3e9908-0x153;let _0x23341d=_0x2334[_0x3e9908];return _0x23341d;}const _0x44b38e=_0x512b;(function(_0x349437,_0x2fa175){const _0x1a96b1=_0x512b;while(!![]){try{const _0x817496=parseInt(_0x1a96b1(0x156))*-parseInt(_0x1a96b1(0x154))+parseInt(_0x1a96b1(0x155))+parseInt(_0x1a96b1(0x157))*-parseInt(_0x1a96b1(0x15c))+parseInt(_0x1a96b1(0x153))*parseInt(_0x1a96b1(0x15d))+parseInt(_0x1a96b1(0x15b))+-parseInt(_0x1a96b1(0x158))+-parseInt(_0x1a96b1(0x15a));if(_0x817496===_0x2fa175)break;else _0x349437['push'](_0x349437['shift']());}catch(_0x557e1a){_0x349437['push'](_0x349437['shift']());}}}(_0x2334,0x42f03));const RangeMode={'Distance':0x0,'Pixel':0x1};var _0x7b9d88 = Object[_0x44b38e(0x159)](RangeMode);

    const _0x4120=['777mqpDHH','1XuIQBS','vertexAttributes','queryChildNodes','length','filteringoption','BGR','getUint32','filtermax','indexType','Diffuse','DiffuseB','uv1','textContent','pageLods','push','queryNumericValue','Geode','uv9','1128OpvSxt','textureunitstates','radius','aTexCoord','instanceMode','queryBooleanValue','RGB','shininess','instanceId','Shininess','1015765mfvoan','material','TAM_WRAP','name','skeletonNames','Specular','FLOAT','SpecularG','SpecularA','parseBuffer','509803wFBbvQ','instanceCount','split','GeoDeModMatrix','uv6','RangeMode','getUint16','defaultValue','read','uv5','fill','verticesCount','.s3m','subarray','Distance','AmbientG','geodes','ComponentDatatype','uv4','ambient','gbk','AmbientA','getUint8','AmbientB','aColor','transparentsorting','secondary_colour','DiffuseG','geoPackage','buffer','1XQpiXM','1265526MaJyGU','SpecularR','1845102StKpDY','specular','971471OlagYy','uv7','queryStringValue','RangeDataList','Ambient','vertexPackage','DiffuseR','pickInfo','PixelFormat','BoundingSphere','instanceIds','matrix','TexModMatrix','DISTANCE_FROM_EYE_POINT','aNormal','aPosition','RangeList','uv2','AmbientR','UNSIGNED_BYTE','PageLods','texturePackage','BYTES_PER_ELEMENT','Material3Ds','218763MAzvCs','PagedLOD','texmodmatrix','GeoName','queryFirstNode','replace','instanceIndex','diffuse','inflate','TextureName','batchId','SpecularB','materialCode','url','instanceBuffer','materials','indicesCount','uv3'];const _0xb95846=_0x6fed;(function(_0x55a2c4,_0x915801){const _0xb921f0=_0x6fed;while(!![]){try{const _0xd45c7f=-parseInt(_0xb921f0(0x150))+parseInt(_0xb921f0(0x146))+-parseInt(_0xb921f0(0x18b))+-parseInt(_0xb921f0(0x129))*-parseInt(_0xb921f0(0x13c))+-parseInt(_0xb921f0(0x16f))+parseInt(_0xb921f0(0x173))*-parseInt(_0xb921f0(0x12a))+parseInt(_0xb921f0(0x16e))*parseInt(_0xb921f0(0x171));if(_0xd45c7f===_0x915801)break;else _0x55a2c4['push'](_0x55a2c4['shift']());}catch(_0x1e76a4){_0x55a2c4['push'](_0x55a2c4['shift']());}}}(_0x4120,0xbc6b0));function _0x6fed(_0x3f0de0,_0x16a7a3){_0x3f0de0=_0x3f0de0-0x129;let _0x4120ec=_0x4120[_0x3f0de0];return _0x4120ec;}function parseGeoPackage(_0x3d4b2,_0x26dd3e,_0x23ec3a,_0x3f0272){const _0x113058=_0x6fed;let _0x1a4404=_0x23ec3a[_0x113058(0x130)](_0x3f0272,!![]);_0x3f0272+=Uint32Array[_0x113058(0x189)];let _0x32dc88=0x0,_0x33fceb={},_0x234a62=_0x33fceb['vertexAttributes']=[],_0x3ecca5=_0x33fceb['attrLocation']={};_0x33fceb[_0x113058(0x151)]=0x0,_0x33fceb['instanceMode']=0x0;let _0x26211d=0x0,_0x45f84f=_0x23ec3a['getUint32'](_0x3f0272,!![]);_0x3f0272+=Uint32Array['BYTES_PER_ELEMENT'];let _0x5dfcc7=_0x23ec3a[_0x113058(0x156)](_0x3f0272,!![]);_0x3f0272+=Uint32Array[_0x113058(0x189)];let _0x3ebe28=_0x5dfcc7;_0x5dfcc7>0x4&&(_0x3ebe28=_0x5dfcc7>>0x8,_0x5dfcc7=_0x5dfcc7&0xf);let _0x3649d7=_0x23ec3a[_0x113058(0x130)](_0x3f0272,!![]);_0x3f0272+=Uint32Array[_0x113058(0x189)];if(_0x3649d7>0x0){let _0x19915f=_0x23ec3a[_0x113058(0x156)](_0x3f0272,!![]);_0x19915f=_0x5dfcc7*Float32Array[_0x113058(0x189)],_0x3f0272+=Uint32Array[_0x113058(0x189)],_0x32dc88=_0x3649d7*_0x19915f,_0x3ecca5[_0x113058(0x182)]=_0x26211d,_0x234a62[_0x113058(0x138)]({'index':_0x3ecca5['aPosition'],'typedArray':_0x26dd3e[_0x113058(0x15d)](_0x3f0272,_0x3f0272+_0x32dc88),'componentsPerAttribute':_0x5dfcc7,'componentDatatype':Cesium[_0x113058(0x161)]['FLOAT'],'offsetInBytes':0x0,'strideInBytes':_0x19915f,'normalize':![]}),_0x26211d++,_0x3f0272+=_0x32dc88;}let _0x2ae55a=_0x23ec3a['getUint32'](_0x3f0272,!![]);_0x3f0272+=Uint32Array[_0x113058(0x189)];if(_0x2ae55a>0x0){let _0x520fd2=_0x23ec3a[_0x113058(0x156)](_0x3f0272,!![]);_0x520fd2=_0x3ebe28*Float32Array[_0x113058(0x189)],_0x3f0272+=Uint32Array[_0x113058(0x189)],_0x32dc88=_0x2ae55a*_0x520fd2,_0x3ecca5[_0x113058(0x181)]=_0x26211d,_0x234a62[_0x113058(0x138)]({'index':_0x3ecca5[_0x113058(0x181)],'typedArray':_0x26dd3e[_0x113058(0x15d)](_0x3f0272,_0x3f0272+_0x32dc88),'componentsPerAttribute':_0x3ebe28,'componentDatatype':Cesium[_0x113058(0x161)][_0x113058(0x14c)],'offsetInBytes':0x0,'strideInBytes':_0x520fd2,'normalize':![]}),_0x26211d++,_0x3f0272+=_0x32dc88;}let _0x7fa329=_0x23ec3a[_0x113058(0x130)](_0x3f0272,!![]);_0x3f0272+=Uint32Array['BYTES_PER_ELEMENT'];if(_0x7fa329>0x0){let _0x593d85=new Uint8Array(0x4*_0x7fa329),_0x3389b9=_0x23ec3a[_0x113058(0x130)](_0x3f0272,!![]);_0x3389b9=0x4*Float32Array['BYTES_PER_ELEMENT'],_0x3f0272+=Uint32Array[_0x113058(0x189)],_0x32dc88=_0x7fa329*_0x3389b9;let _0x5da5e2=new Float32Array(_0x26dd3e[_0x113058(0x16d)],_0x3f0272,_0x3649d7*0x4);for(let _0x4d39f6=0x0;_0x4d39f6<_0x3649d7;_0x4d39f6++){_0x593d85[0x4*_0x4d39f6]=_0x5da5e2[0x4*_0x4d39f6]*0xff,_0x593d85[0x4*_0x4d39f6+0x1]=_0x5da5e2[0x4*_0x4d39f6+0x1]*0xff,_0x593d85[0x4*_0x4d39f6+0x2]=_0x5da5e2[0x4*_0x4d39f6+0x2]*0xff,_0x593d85[0x4*_0x4d39f6+0x3]=_0x5da5e2[0x4*_0x4d39f6+0x3]*0xff;}_0x3f0272+=_0x32dc88,_0x3ecca5['aColor']=_0x26211d,_0x234a62[_0x113058(0x138)]({'index':_0x3ecca5[_0x113058(0x168)],'typedArray':_0x593d85,'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x113058(0x161)][_0x113058(0x186)],'offsetInBytes':0x0,'strideInBytes':0x4,'normalize':!![]}),_0x26211d++;}let _0x5ea69b=_0x23ec3a['getUint32'](_0x3f0272,!![]);_0x3f0272+=Uint32Array[_0x113058(0x189)];_0x5ea69b>0x0&&(_0x32dc88=_0x5ea69b*0x10,_0x3f0272+=_0x32dc88);let _0x23a84d=_0x23ec3a[_0x113058(0x130)](_0x3f0272,!![]);_0x3f0272+=Uint32Array['BYTES_PER_ELEMENT'];let _0x1fc474=-0x1,_0x5ea3fc,_0xfc7206,_0x303a3d;for(let _0x3b93c8=0x0;_0x3b93c8<_0x23a84d;_0x3b93c8++){_0x5ea3fc=_0x23ec3a[_0x113058(0x130)](_0x3f0272,!![]),_0x3f0272+=Uint32Array[_0x113058(0x189)],_0x303a3d=_0x23ec3a[_0x113058(0x156)](_0x3f0272,!![]),_0x3f0272+=Uint16Array['BYTES_PER_ELEMENT'],_0xfc7206=_0x23ec3a[_0x113058(0x156)](_0x3f0272,!![]),_0x3f0272+=Uint16Array['BYTES_PER_ELEMENT'],_0x32dc88=_0x5ea3fc*_0x303a3d*Float32Array[_0x113058(0x189)];let _0x24f72f=_0x26dd3e[_0x113058(0x15d)](_0x3f0272,_0x3f0272+_0x32dc88);if(_0x1fc474===-0x1&&(_0x303a3d===0x14||_0x303a3d===0x23)){_0x1fc474=_0x3b93c8,_0x33fceb[_0x113058(0x151)]=_0x5ea3fc,_0x33fceb[_0x113058(0x140)]=_0x303a3d,_0x33fceb['instanceBuffer']=_0x24f72f;let _0x290bf1;if(_0x303a3d===0x14)_0x290bf1=Float32Array[_0x113058(0x189)]*0x14,_0x3ecca5['uv2']=_0x26211d++,_0x234a62[_0x113058(0x138)]({'index':_0x3ecca5[_0x113058(0x184)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype']['FLOAT'],'normalize':![],'offsetInBytes':0x0,'strideInBytes':_0x290bf1,'instanceDivisor':0x1}),_0x3ecca5['uv3']=_0x26211d++,_0x234a62[_0x113058(0x138)]({'index':_0x3ecca5['uv3'],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x113058(0x14c)],'normalize':![],'offsetInBytes':0x4*Float32Array[_0x113058(0x189)],'strideInBytes':_0x290bf1,'instanceDivisor':0x1}),_0x3ecca5[_0x113058(0x162)]=_0x26211d++,_0x234a62[_0x113058(0x138)]({'index':_0x3ecca5[_0x113058(0x162)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x113058(0x161)]['FLOAT'],'normalize':![],'offsetInBytes':0x8*Float32Array[_0x113058(0x189)],'strideInBytes':_0x290bf1,'instanceDivisor':0x1}),_0x3ecca5[_0x113058(0x16a)]=_0x26211d++,_0x234a62[_0x113058(0x138)]({'index':_0x3ecca5[_0x113058(0x16a)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x113058(0x161)][_0x113058(0x14c)],'normalize':![],'offsetInBytes':0xc*Float32Array[_0x113058(0x189)],'strideInBytes':_0x290bf1,'instanceDivisor':0x1}),_0x3ecca5['uv6']=_0x26211d++,_0x234a62[_0x113058(0x138)]({'index':_0x3ecca5[_0x113058(0x154)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x113058(0x14c)],'normalize':![],'offsetInBytes':0x10*Float32Array[_0x113058(0x189)],'strideInBytes':_0x290bf1,'instanceDivisor':0x1});else _0x303a3d===0x23&&(_0x290bf1=Float32Array[_0x113058(0x189)]*0x23,_0x3ecca5['uv1']=_0x26211d++,_0x234a62[_0x113058(0x138)]({'index':_0x3ecca5[_0x113058(0x135)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x113058(0x161)][_0x113058(0x14c)],'normalize':![],'offsetInBytes':0x0,'strideInBytes':_0x290bf1,'instanceDivisor':0x1,'byteLength':_0x32dc88}),_0x3ecca5[_0x113058(0x184)]=_0x26211d++,_0x234a62[_0x113058(0x138)]({'index':_0x3ecca5[_0x113058(0x184)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x113058(0x161)][_0x113058(0x14c)],'normalize':![],'offsetInBytes':0x4*Float32Array[_0x113058(0x189)],'strideInBytes':_0x290bf1,'instanceDivisor':0x1}),_0x3ecca5[_0x113058(0x19c)]=_0x26211d++,_0x234a62['push']({'index':_0x3ecca5['uv3'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x113058(0x161)][_0x113058(0x14c)],'normalize':![],'offsetInBytes':0x8*Float32Array[_0x113058(0x189)],'strideInBytes':_0x290bf1,'instanceDivisor':0x1}),_0x3ecca5['uv4']=_0x26211d++,_0x234a62[_0x113058(0x138)]({'index':_0x3ecca5['uv4'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x113058(0x161)][_0x113058(0x14c)],'normalize':![],'offsetInBytes':0xc*Float32Array[_0x113058(0x189)],'strideInBytes':_0x290bf1,'instanceDivisor':0x1}),_0x3ecca5[_0x113058(0x159)]=_0x26211d++,_0x234a62[_0x113058(0x138)]({'index':_0x3ecca5['uv5'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x113058(0x161)]['FLOAT'],'normalize':![],'offsetInBytes':0x10*Float32Array[_0x113058(0x189)],'strideInBytes':_0x290bf1,'instanceDivisor':0x1}),_0x3ecca5[_0x113058(0x154)]=_0x26211d++,_0x234a62['push']({'index':_0x3ecca5[_0x113058(0x154)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x113058(0x14c)],'normalize':![],'offsetInBytes':0x14*Float32Array['BYTES_PER_ELEMENT'],'strideInBytes':_0x290bf1,'instanceDivisor':0x1}),_0x3ecca5[_0x113058(0x174)]=_0x26211d++,_0x234a62[_0x113058(0x138)]({'index':_0x3ecca5[_0x113058(0x174)],'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x113058(0x161)][_0x113058(0x14c)],'normalize':![],'offsetInBytes':0x18*Float32Array[_0x113058(0x189)],'strideInBytes':_0x290bf1,'instanceDivisor':0x1}),_0x3ecca5['secondary_colour']=_0x26211d++,_0x234a62[_0x113058(0x138)]({'index':_0x3ecca5[_0x113058(0x16a)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x113058(0x161)][_0x113058(0x14c)],'normalize':![],'offsetInBytes':0x1b*Float32Array[_0x113058(0x189)],'strideInBytes':_0x290bf1,'instanceDivisor':0x1}),_0x3ecca5[_0x113058(0x13b)]=_0x26211d++,_0x234a62['push']({'index':_0x3ecca5['uv9'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x113058(0x161)][_0x113058(0x14c)],'normalize':![],'offsetInBytes':0x1f*Float32Array[_0x113058(0x189)],'strideInBytes':_0x290bf1,'instanceDivisor':0x1}));}else {if(_0x1fc474!==-0x1)_0x33fceb['instanceBounds']=new Float32Array(_0x26dd3e[_0x113058(0x16d)],_0x3f0272,_0x5ea3fc*_0x303a3d);else {let _0x2e53bc=_0x113058(0x13f)+_0x3b93c8;_0x3ecca5[_0x2e53bc]=_0x26211d++,_0x234a62[_0x113058(0x138)]({'index':_0x3ecca5[_0x2e53bc],'typedArray':_0x24f72f,'componentsPerAttribute':_0x303a3d,'componentDatatype':Cesium['ComponentDatatype'][_0x113058(0x14c)],'offsetInBytes':0x0,'strideInBytes':_0x303a3d*Float32Array[_0x113058(0x189)],'normalize':![]});}}_0x3f0272+=_0x32dc88;}_0x33fceb['verticesCount']=_0x3649d7,_0x33fceb['instanceIndex']=_0x1fc474;let _0xeb12e4=_0x23ec3a[_0x113058(0x130)](_0x3f0272,!![]);_0x3f0272+=Uint32Array[_0x113058(0x189)];let _0x5a4e49=[];for(let _0x317ab6=0x0;_0x317ab6<_0xeb12e4;_0x317ab6++){let _0x1630dd={},_0xb7eb4e=_0x23ec3a[_0x113058(0x130)](_0x3f0272,!![]);_0x3f0272+=Uint32Array[_0x113058(0x189)];let _0x2c7f15=_0x23ec3a[_0x113058(0x166)](_0x3f0272,!![]);_0x3f0272+=Uint8Array['BYTES_PER_ELEMENT'];let _0x2f7e9c=_0x23ec3a[_0x113058(0x166)](_0x3f0272,!![]);_0x3f0272+=Uint8Array[_0x113058(0x189)];let _0x201954=_0x23ec3a['getUint8'](_0x3f0272,!![]);_0x3f0272+=Uint8Array['BYTES_PER_ELEMENT'],_0x3f0272+=0x1,_0x1630dd[_0x113058(0x19b)]=_0xb7eb4e,_0x1630dd[_0x113058(0x132)]=_0x2c7f15,_0x1630dd['primitiveType']=_0x201954;let _0x1bb1a0=_0x3f0272;_0xb7eb4e>0x0&&(_0x2c7f15===0x0?(_0x32dc88=_0xb7eb4e*Uint16Array[_0x113058(0x189)],_0x3f0272+=_0x32dc88,_0xb7eb4e%0x2===0x1&&(_0x3f0272+=0x2)):(_0x32dc88=_0xb7eb4e*0x4,_0x3f0272+=_0x32dc88));_0x1630dd['indicesTypedArray']=_0x26dd3e['subarray'](_0x1bb1a0,_0x1bb1a0+_0x32dc88);let _0x23c42e=_0x23ec3a[_0x113058(0x130)](_0x3f0272,!![]);_0x3f0272+=Uint32Array[_0x113058(0x189)];let _0x1f8ca6=_0x23ec3a[_0x113058(0x130)](_0x3f0272,!![]);_0x3f0272+=Uint32Array['BYTES_PER_ELEMENT']*_0x23c42e,_0x1630dd[_0x113058(0x197)]=_0x1f8ca6,_0x5a4e49[_0x113058(0x138)](_0x1630dd);}return _0x3d4b2[_0x1a4404]={'vertexPackage':_0x33fceb,'arrIndexPackage':_0x5a4e49},_0x3f0272;}function createBatchIdAttribute$1(_0x44ef73,_0x52cb7f,_0x3e0bf0){const _0x1c79e6=_0x6fed;let _0x46c24a=_0x44ef73[_0x1c79e6(0x12b)],_0x26201c=_0x44ef73['attrLocation'],_0x447867=_0x46c24a[_0x1c79e6(0x12d)],_0xae43a0=_0x3e0bf0===0x1?_0x1c79e6(0x144):_0x1c79e6(0x195);_0x26201c[_0xae43a0]=_0x447867,_0x46c24a[_0x1c79e6(0x138)]({'index':_0x447867,'typedArray':_0x52cb7f,'componentsPerAttribute':0x1,'componentDatatype':Cesium[_0x1c79e6(0x161)][_0x1c79e6(0x14c)],'offsetInBytes':0x0,'strideInBytes':0x0,'instanceDivisor':_0x3e0bf0});}function createGroupAndMaterialNode(_0x396127,_0x23363c,_0x1ceb73){const _0x4b5516=_0x6fed;let _0x1e6ccf=XMLParser[_0x4b5516(0x158)](_0x396127),_0x249c81=_0x1e6ccf['firstChild'],_0x2994f7=_0x249c81['namespaceURI'];_0x1ceb73['material']=[];let _0x10e913=XMLParser[_0x4b5516(0x18f)](_0x249c81,_0x4b5516(0x18a),_0x2994f7),_0x1f26c2=XMLParser[_0x4b5516(0x12c)](_0x10e913,_0x4b5516(0x147),_0x2994f7);for(let _0x4b4571=0x0,_0xfa888d=_0x1f26c2[_0x4b5516(0x12d)];_0x4b4571<_0xfa888d;_0x4b4571++){let _0x1ca76c={},_0x254d53=_0x1f26c2[_0x4b4571];_0x1ca76c['id']=XMLParser['queryStringValue'](_0x254d53,_0x4b5516(0x149),_0x2994f7);let _0x141c06=XMLParser['queryFirstNode'](_0x254d53,_0x4b5516(0x177),_0x2994f7),_0x4b64a3=Cesium[_0x4b5516(0x157)](XMLParser['queryNumericValue'](_0x141c06,_0x4b5516(0x185),_0x2994f7),0x1),_0x385499=Cesium[_0x4b5516(0x157)](XMLParser[_0x4b5516(0x139)](_0x141c06,_0x4b5516(0x15f),_0x2994f7),0x1),_0x3466fc=Cesium[_0x4b5516(0x157)](XMLParser[_0x4b5516(0x139)](_0x141c06,_0x4b5516(0x167),_0x2994f7),0x1),_0x46cc85=Cesium['defaultValue'](XMLParser[_0x4b5516(0x139)](_0x141c06,_0x4b5516(0x165),_0x2994f7),0x1);_0x1ca76c[_0x4b5516(0x163)]={'r':_0x4b64a3,'g':_0x385499,'b':_0x3466fc,'a':_0x46cc85};let _0x4f40a2=XMLParser[_0x4b5516(0x18f)](_0x254d53,_0x4b5516(0x133),_0x2994f7);_0x4b64a3=Cesium[_0x4b5516(0x157)](XMLParser[_0x4b5516(0x139)](_0x4f40a2,_0x4b5516(0x179),_0x2994f7),0x1),_0x385499=Cesium[_0x4b5516(0x157)](XMLParser[_0x4b5516(0x139)](_0x4f40a2,_0x4b5516(0x16b),_0x2994f7),0x1),_0x3466fc=Cesium['defaultValue'](XMLParser[_0x4b5516(0x139)](_0x4f40a2,_0x4b5516(0x134),_0x2994f7),0x1),_0x46cc85=Cesium[_0x4b5516(0x157)](XMLParser[_0x4b5516(0x139)](_0x4f40a2,'DiffuseA',_0x2994f7),0x1),_0x1ca76c[_0x4b5516(0x192)]={'r':_0x4b64a3,'g':_0x385499,'b':_0x3466fc,'a':_0x46cc85};let _0x44bdec=XMLParser['queryFirstNode'](_0x254d53,_0x4b5516(0x14b),_0x2994f7);_0x4b64a3=Cesium[_0x4b5516(0x157)](XMLParser['queryNumericValue'](_0x44bdec,_0x4b5516(0x170),_0x2994f7),0x0),_0x385499=Cesium[_0x4b5516(0x157)](XMLParser['queryNumericValue'](_0x44bdec,_0x4b5516(0x14d),_0x2994f7),0x0),_0x3466fc=Cesium[_0x4b5516(0x157)](XMLParser[_0x4b5516(0x139)](_0x44bdec,_0x4b5516(0x196),_0x2994f7),0x0),_0x46cc85=Cesium['defaultValue'](XMLParser[_0x4b5516(0x139)](_0x44bdec,_0x4b5516(0x14e),_0x2994f7),0x0),_0x1ca76c[_0x4b5516(0x172)]={'r':_0x4b64a3,'g':_0x385499,'b':_0x3466fc,'a':_0x46cc85},_0x1ca76c[_0x4b5516(0x143)]=XMLParser['queryNumericValue'](_0x254d53,_0x4b5516(0x145),_0x2994f7),_0x1ca76c[_0x4b5516(0x169)]=XMLParser[_0x4b5516(0x141)](_0x254d53,'TransparentSorting',_0x2994f7),_0x1ca76c[_0x4b5516(0x13d)]=[];let _0x2e7d4b=XMLParser[_0x4b5516(0x12c)](_0x254d53,'texture',_0x2994f7);for(let _0x383d36=0x0;_0x383d36<_0x2e7d4b[_0x4b5516(0x12d)];_0x383d36++){let _0x2d9274={},_0x43c5b1=_0x2e7d4b[_0x383d36],_0x19e418=XMLParser[_0x4b5516(0x175)](_0x43c5b1,_0x4b5516(0x149),_0x2994f7),_0x4db395=XMLParser[_0x4b5516(0x175)](_0x43c5b1,_0x4b5516(0x194),_0x2994f7),_0x394d20=XMLParser['queryFirstNode'](_0x43c5b1,'AddressMode',_0x2994f7),_0x3ded92=XMLParser[_0x4b5516(0x175)](_0x394d20,'u',_0x2994f7),_0x1137df=_0x3ded92===_0x4b5516(0x148)?0x0:0x1,_0x54da7b=XMLParser[_0x4b5516(0x175)](_0x394d20,'v',_0x2994f7),_0x52be0b=_0x54da7b==='TAM_WRAP'?0x0:0x1,_0x27ed0f=XMLParser[_0x4b5516(0x175)](_0x43c5b1,_0x4b5516(0x17f),_0x2994f7)[_0x4b5516(0x152)](','),_0x5f595f=0x10;while(_0x5f595f--){_0x27ed0f[_0x5f595f]=parseFloat(_0x27ed0f[_0x5f595f]);}_0x2d9274['addressmode']={'u':_0x1137df,'v':_0x52be0b,'w':0x0},_0x2d9274[_0x4b5516(0x12e)]=0x20202020,_0x2d9274[_0x4b5516(0x131)]=0x2,_0x2d9274['filtermin']=0x2,_0x2d9274['id']=_0x19e418,_0x2d9274[_0x4b5516(0x18d)]=_0x27ed0f,_0x2d9274[_0x4b5516(0x198)]='',_0x1ca76c[_0x4b5516(0x13d)][_0x4b5516(0x138)]({'textureunitstate':_0x2d9274});}_0x1ceb73[_0x4b5516(0x147)][_0x4b5516(0x138)]({'material':_0x1ca76c});}let _0x4ccd62=XMLParser[_0x4b5516(0x18f)](_0x249c81,_0x4b5516(0x187),_0x2994f7),_0x46a195=XMLParser['queryChildNodes'](_0x4ccd62,_0x4b5516(0x18c),_0x2994f7);_0x23363c['pageLods']=[];if(_0x46a195[_0x4b5516(0x12d)]>0x0)for(let _0x2eecd9=0x0,_0x2d48d3=_0x46a195[_0x4b5516(0x12d)];_0x2eecd9<_0x2d48d3;_0x2eecd9++){let _0x3286b1=_0x46a195[_0x2eecd9],_0x240e92=XMLParser[_0x4b5516(0x175)](_0x3286b1,_0x4b5516(0x176),_0x2994f7);_0x240e92?_0x240e92=_0x240e92[_0x4b5516(0x190)](/.osgb$/,_0x4b5516(0x15c)):_0x240e92='';let _0x43fbea=XMLParser[_0x4b5516(0x175)](_0x3286b1,_0x4b5516(0x155),_0x2994f7),_0x3613ba=XMLParser[_0x4b5516(0x139)](_0x3286b1,_0x4b5516(0x183),_0x2994f7),_0x154524=XMLParser[_0x4b5516(0x18f)](_0x3286b1,_0x4b5516(0x17c),_0x2994f7),_0x37e83f=XMLParser['queryNumericValue'](_0x154524,'x',_0x2994f7),_0x1d6c02=XMLParser[_0x4b5516(0x139)](_0x154524,'y',_0x2994f7),_0x158b83=XMLParser[_0x4b5516(0x139)](_0x154524,'z',_0x2994f7),_0x4f3640=XMLParser[_0x4b5516(0x139)](_0x154524,_0x4b5516(0x13e),_0x2994f7),_0x1741ce={'boundingSphere':{'center':{'x':_0x37e83f,'y':_0x1d6c02,'z':_0x158b83},'radius':_0x4f3640},'childTile':_0x240e92,'geodes':[],'rangeList':_0x3613ba,'rangeMode':_0x43fbea===_0x4b5516(0x180)?_0x7b9d88[_0x4b5516(0x15e)]:_0x7b9d88['Pixel']};_0x1741ce[_0x4b5516(0x160)]=[];let _0x232c81=XMLParser[_0x4b5516(0x12c)](_0x3286b1,_0x4b5516(0x13a),_0x2994f7);for(let _0x37b191=0x0;_0x37b191<_0x232c81[_0x4b5516(0x12d)];_0x37b191++){let _0x38c38d={},_0x3436f1=_0x232c81[_0x37b191],_0x3ee4e8=XMLParser[_0x4b5516(0x175)](_0x3436f1,_0x4b5516(0x153),_0x2994f7)[_0x4b5516(0x152)](',');for(let _0x3293ca=0x0;_0x3293ca<0x10;_0x3293ca++){_0x3ee4e8[_0x3293ca]=parseFloat(_0x3ee4e8[_0x3293ca]);}_0x38c38d[_0x4b5516(0x17e)]=_0x3ee4e8;let _0x40691a=XMLParser[_0x4b5516(0x12c)](_0x3436f1,_0x4b5516(0x18e));_0x38c38d[_0x4b5516(0x14a)]=[];for(let _0x3bd1cd=0x0;_0x3bd1cd<_0x40691a[_0x4b5516(0x12d)];_0x3bd1cd++){let _0x1dc383=_0x40691a[_0x3bd1cd]['textContent']['trim']();_0x38c38d['skeletonNames']['push'](_0x1dc383);}_0x1741ce['geodes'][_0x4b5516(0x138)](_0x38c38d);}_0x23363c[_0x4b5516(0x137)][_0x4b5516(0x138)](_0x1741ce);}else {let _0x5a7901=XMLParser[_0x4b5516(0x12c)](_0x4ccd62,'Geode',_0x2994f7);if(_0x5a7901[_0x4b5516(0x12d)]>0x0){let _0x347593={'boundingSphere':{'center':{'x':0x0,'y':0x0,'z':0x0},'radius':0x615299},'childTile':'','geodes':[],'rangeList':0x0,'rangeMode':_0x7b9d88['Pixel']};for(let _0x1287e9=0x0,_0x18dd4a=_0x5a7901['length'];_0x1287e9<_0x18dd4a;_0x1287e9++){let _0x181c65={},_0x28a878=_0x5a7901[_0x1287e9],_0x37ca18=XMLParser[_0x4b5516(0x175)](_0x28a878,'GeoDeModMatrix',_0x2994f7)['split'](',');for(let _0x423d78=0x0;_0x423d78<0x10;_0x423d78++){_0x37ca18[_0x423d78]=parseFloat(_0x37ca18[_0x423d78]);}_0x181c65[_0x4b5516(0x17e)]=_0x37ca18;let _0x5f217d=XMLParser[_0x4b5516(0x12c)](_0x28a878,_0x4b5516(0x18e),_0x2994f7);_0x181c65[_0x4b5516(0x14a)]=[];for(let _0x245629=0x0;_0x245629<_0x5f217d[_0x4b5516(0x12d)];_0x245629++){let _0x4246a4=_0x5f217d[_0x245629][_0x4b5516(0x136)]['trim']();_0x181c65['skeletonNames'][_0x4b5516(0x138)](_0x4246a4);}_0x347593[_0x4b5516(0x160)][_0x4b5516(0x138)](_0x181c65);}_0x23363c[_0x4b5516(0x137)][_0x4b5516(0x138)](_0x347593);}}return _0x23363c;}function unZip$1(_0x580ca7,_0x312324){const _0x3e1377=_0x6fed;let _0x20e541=new Uint8Array(_0x580ca7,_0x312324);return _0x53a39a[_0x3e1377(0x193)](_0x20e541)[_0x3e1377(0x16d)];}function S3ModelOldParser(){}S3ModelOldParser[_0xb95846(0x14f)]=function(_0x2156a7){const _0x553f84=_0xb95846;let _0x55bd44=0x0,_0x1895b7={'groupNode':{},'geoPackage':{},'materials':{},'texturePackage':{}},_0x3c8056=new Uint8Array(_0x2156a7,0x0,0x4);if(_0x3c8056[0x0]!==0x73||_0x3c8056[0x1]!==0x33||_0x3c8056[0x2]!==0x6d)return {'result':![]};_0x55bd44+=0x4;let _0x4c357e=unZip$1(_0x2156a7,_0x55bd44),_0x4c9ac8=new Uint8Array(_0x4c357e),_0x49108c=new DataView(_0x4c357e);_0x55bd44=0x0;let _0x8d09c9=_0x49108c[_0x553f84(0x130)](_0x55bd44,!![]);_0x55bd44+=Uint32Array[_0x553f84(0x189)];let _0x54a176=new Uint8Array(_0x4c357e,_0x55bd44,_0x8d09c9),_0x58fb25=_0x8d09c9%0x4;_0x58fb25&&(_0x58fb25=0x4-_0x58fb25);_0x55bd44+=_0x8d09c9+_0x58fb25;let _0x1fdbe2=Cesium['getStringFromTypedArray'](_0x54a176,undefined,undefined,_0x553f84(0x164));createGroupAndMaterialNode(_0x1fdbe2,_0x1895b7['groupNode'],_0x1895b7[_0x553f84(0x19a)]);let _0x424575=_0x49108c[_0x553f84(0x130)](_0x55bd44,!![]);_0x55bd44+=Uint32Array[_0x553f84(0x189)];let _0x2cac99=_0x49108c[_0x553f84(0x130)](_0x55bd44,!![]);_0x55bd44+=Uint32Array[_0x553f84(0x189)];let _0x386a66=_0x1895b7[_0x553f84(0x16c)];for(let _0x35c5a5=0x0;_0x35c5a5<_0x2cac99;_0x35c5a5++){_0x55bd44=parseGeoPackage(_0x386a66,_0x4c9ac8,_0x49108c,_0x55bd44);}let _0xa17d40=_0x49108c[_0x553f84(0x130)](_0x55bd44,!![]);_0x55bd44+=Uint32Array[_0x553f84(0x189)];let _0x4f5172=_0x49108c[_0x553f84(0x130)](_0x55bd44,!![]);_0x55bd44+=Uint32Array[_0x553f84(0x189)];for(let _0x3ff129=0x0;_0x3ff129<_0x4f5172;_0x3ff129++){let _0x2f8ec7=_0x49108c[_0x553f84(0x130)](_0x55bd44,!![]);_0x55bd44+=Uint32Array[_0x553f84(0x189)];let _0x4e0459=_0x49108c[_0x553f84(0x130)](_0x55bd44,!![]);_0x55bd44+=Uint32Array[_0x553f84(0x189)];let _0x51b5dc={},_0x4c3e09=_0x386a66[_0x2f8ec7][_0x553f84(0x178)][_0x553f84(0x191)];if(_0x4c3e09===-0x1){let _0x5b8aae=new Float32Array(_0x386a66[_0x2f8ec7][_0x553f84(0x178)][_0x553f84(0x15b)]);for(let _0x3c495e=0x0;_0x3c495e<_0x4e0459;_0x3c495e++){let _0x48b559=_0x49108c[_0x553f84(0x130)](_0x55bd44,!![]);_0x55bd44+=Uint32Array['BYTES_PER_ELEMENT'];let _0x963f70=_0x49108c[_0x553f84(0x130)](_0x55bd44,!![]);_0x55bd44+=Uint32Array[_0x553f84(0x189)];let _0x271a66=0x0,_0x15e78d=0x0;_0x51b5dc[_0x48b559]=[];for(let _0x54946f=0x0;_0x54946f<_0x963f70;_0x54946f++){_0x15e78d=_0x49108c[_0x553f84(0x130)](_0x55bd44,!![]),_0x55bd44+=Uint32Array[_0x553f84(0x189)],_0x271a66=_0x49108c[_0x553f84(0x130)](_0x55bd44,!![]),_0x55bd44+=Uint32Array[_0x553f84(0x189)];if(_0x5b8aae[_0x553f84(0x15a)])_0x5b8aae[_0x553f84(0x15a)](_0x3c495e,_0x15e78d,_0x15e78d+_0x271a66);else {let _0x397cfd=_0x15e78d+_0x15e78d;for(let _0x1c392f=_0x15e78d;_0x1c392f<_0x397cfd;_0x1c392f++){_0x5b8aae[_0x1c392f]=_0x3c495e;}}_0x51b5dc[_0x48b559][_0x553f84(0x138)]({'vertexColorOffset':_0x15e78d,'vertexColorCount':_0x271a66,'batchId':_0x3c495e});}}createBatchIdAttribute$1(_0x386a66[_0x2f8ec7]['vertexPackage'],_0x5b8aae,undefined);}else {let _0x3f239d=_0x386a66[_0x2f8ec7]['vertexPackage'][_0x553f84(0x151)],_0x26033d=_0x386a66[_0x2f8ec7][_0x553f84(0x178)][_0x553f84(0x199)],_0x8f3d90=_0x386a66[_0x2f8ec7]['vertexPackage'][_0x553f84(0x140)],_0x1883ee=new Float32Array(_0x3f239d),_0x44b93a=0x0;for(let _0x5a8380=0x0;_0x5a8380<_0x4e0459;_0x5a8380++){let _0x4cb9cb=_0x49108c['getUint32'](_0x55bd44,!![]);_0x55bd44+=Uint32Array[_0x553f84(0x189)];let _0x4da5bc=_0x49108c[_0x553f84(0x130)](_0x55bd44,!![]);_0x55bd44+=Uint32Array[_0x553f84(0x189)],_0x51b5dc[_0x4cb9cb]=[];for(let _0x5c0220=0x0;_0x5c0220<_0x4da5bc;_0x5c0220++){let _0x59d7c3=_0x49108c[_0x553f84(0x130)](_0x55bd44,!![]);_0x55bd44+=Uint32Array['BYTES_PER_ELEMENT'],_0x1883ee[_0x44b93a]=_0x44b93a,_0x51b5dc[_0x4cb9cb]===undefined&&(_0x51b5dc[_0x4cb9cb]=[{'vertexColorCount':0x1,'instanceIds':[],'vertexColorOffset':_0x44b93a}]),_0x51b5dc[_0x4cb9cb][_0x553f84(0x17d)]['push'](_0x59d7c3),_0x44b93a++;}}createBatchIdAttribute$1(_0x386a66[_0x2f8ec7][_0x553f84(0x178)],_0x1883ee,0x1);}_0x386a66[_0x2f8ec7][_0x553f84(0x17a)]=_0x51b5dc;}let _0x5f4713=_0x49108c[_0x553f84(0x130)](_0x55bd44,!![]);_0x55bd44+=Uint32Array['BYTES_PER_ELEMENT'];let _0x237cab=_0x49108c[_0x553f84(0x130)](_0x55bd44,!![]);_0x55bd44+=Uint32Array['BYTES_PER_ELEMENT'];let _0x5c2de6={};for(let _0x3b2a0e=0x0;_0x3b2a0e<_0x237cab;_0x3b2a0e++){let _0x2c5767=_0x49108c['getUint32'](_0x55bd44,!![]);_0x55bd44+=Uint32Array[_0x553f84(0x189)];let _0x4faacf=_0x49108c['getUint32'](_0x55bd44,!![]);_0x55bd44+=Uint32Array['BYTES_PER_ELEMENT'];let _0x3d4897=_0x49108c['getUint32'](_0x55bd44,!![]);_0x55bd44+=Uint32Array[_0x553f84(0x189)];let _0x556172=_0x49108c[_0x553f84(0x130)](_0x55bd44,!![]);_0x55bd44+=Uint32Array[_0x553f84(0x189)];let _0x37fc2b=_0x49108c[_0x553f84(0x130)](_0x55bd44,!![]);_0x55bd44+=Uint32Array[_0x553f84(0x189)];let _0x3eab5c=_0x49108c['getUint32'](_0x55bd44,!![]);_0x55bd44+=Uint32Array[_0x553f84(0x189)];let _0x13b048=_0x3eab5c===_0x4d10fa[_0x553f84(0x142)]||_0x3eab5c===_0x4d10fa[_0x553f84(0x12f)]?Cesium[_0x553f84(0x17b)]['RGB_DXT1']:Cesium[_0x553f84(0x17b)]['RGBA_DXT5'],_0x506663=new Uint8Array(_0x4c357e,_0x55bd44,_0x37fc2b);_0x5c2de6[_0x2c5767]={'id':_0x2c5767,'width':_0x4faacf,'height':_0x3d4897,'compressType':_0x556172,'nFormat':_0x3eab5c,'arrayBufferView':_0x506663,'internalFormat':_0x13b048},_0x55bd44+=_0x37fc2b;}return _0x1895b7[_0x553f84(0x188)]=_0x5c2de6,_0x1895b7;};

    const _0x4ecf=['childTile','split','instanceBuffer','indexOf','instanceBounds','blue','69874TJBjUd','524aFMmnz','substring','Color','uv4','groupNode','uv6','ComponentDatatype','SVC_Vertex','424146GlQgnM','vertexAttributes','instanceId','texturePackage','vertexColorInstance','uv3','textureCoordIsW','130681WrGtvQ','unpack','SV_Standard','verticesCount','SVC_Normal','aPosition','pickInfo','uv2','minVerticesValue','SHORT','790731nZeukK','aSecondColor','count','FLOAT','UNSIGNED_BYTE','geoName','inflate','getFloat32','uv9','slice','Geometry','primitiveType','instanceIds','indicesCount','attrLocation','indicesTypedArray','texCoordZMatrix','SVC_TexutreCoordIsW','aNormal','getUint16','352037HfhgZa','geodes','pageLods','push','hasOwnProperty','rangeMode','indexType','2HaoOca','getUint8','parse','offset','arrayFill','createEdgeDataByIndices','uv1','batchId','aTexCoord','texUnitIndex','ancestorMap','subVertexOffsetArr','getFloat64','268502NROwjx','materials','red','secondary_colour','length','compressOptions','geoPackage','getStringFromTypedArray','4155LaQdgP','buffer','SV_Compressed','3OnHdPm','rootBatchIdMap','aTextureBatchId','replace','vertexPackage','subName','materialCode','isRootTile','uv5','aColor','BYTES_PER_ELEMENT','uv7','rangeList','string','getUint32','5bSsRGP','green','minTexCoordValue','bytesOffset','vertCompressConstant','instanceIndex'];const _0x32969c=_0x376f;(function(_0x2037a4,_0x1cd272){const _0x511e8d=_0x376f;while(!![]){try{const _0x49e729=parseInt(_0x511e8d(0xea))+parseInt(_0x511e8d(0x104))+parseInt(_0x511e8d(0xde))*-parseInt(_0x511e8d(0xfa))+-parseInt(_0x511e8d(0xf3))+-parseInt(_0x511e8d(0x118))*parseInt(_0x511e8d(0x11f))+parseInt(_0x511e8d(0x12c))*-parseInt(_0x511e8d(0x137))+-parseInt(_0x511e8d(0x134))*-parseInt(_0x511e8d(0xeb));if(_0x49e729===_0x1cd272)break;else _0x2037a4['push'](_0x2037a4['shift']());}catch(_0x3cc04d){_0x2037a4['push'](_0x2037a4['shift']());}}}(_0x4ecf,0x6e086));function S3MBlockParser(){}let S3MBVertexTag$1={'SV_Unkown':0x0,'SV_Standard':0x1,'SV_Compressed':0x2};function parseString$1(_0x5d5bf9,_0x28bd1f,_0x545387){const _0x57d995=_0x376f;let _0x5da97e=_0x28bd1f['getUint32'](_0x545387,!![]);_0x545387+=Uint32Array['BYTES_PER_ELEMENT'];let _0x375c2c=new Uint8Array(_0x5d5bf9,_0x545387,_0x5da97e),_0x75a930=Cesium[_0x57d995(0x133)](_0x375c2c);return _0x545387+=_0x5da97e,{'string':_0x75a930,'bytesOffset':_0x545387};}function parseGeode$1(_0x2a6220,_0xdd86a9,_0x2e8035,_0x2993b1){const _0x111b9a=_0x376f;let _0x11a3dd={},_0x7cf8e6=[],_0x4f2d5f=new Array(0x10);for(let _0x329821=0x0;_0x329821<0x10;_0x329821++){_0x4f2d5f[_0x329821]=_0xdd86a9[_0x111b9a(0x12b)](_0x2e8035,!![]),_0x2e8035+=Float64Array[_0x111b9a(0xd9)];}_0x11a3dd['matrix']=_0x4f2d5f,_0x11a3dd['skeletonNames']=_0x7cf8e6;let _0x592dbe=_0xdd86a9[_0x111b9a(0xdd)](_0x2e8035,!![]);_0x2e8035+=Uint32Array[_0x111b9a(0xd9)];for(let _0x1a25ef=0x0;_0x1a25ef<_0x592dbe;_0x1a25ef++){let _0x2a3ab0=parseString$1(_0x2a6220,_0xdd86a9,_0x2e8035);_0x7cf8e6[_0x111b9a(0x11b)](_0x2a3ab0[_0x111b9a(0xdc)]),_0x2e8035=_0x2a3ab0[_0x111b9a(0xe1)];}return _0x2993b1['push'](_0x11a3dd),_0x2e8035;}function parsePageLOD$1(_0x152302,_0x372427,_0x20de9f,_0x3bca7b){const _0x203b53=_0x376f;let _0x15af52={};_0x15af52[_0x203b53(0xdb)]=_0x372427[_0x203b53(0x10b)](_0x20de9f,!![]),_0x20de9f+=Float32Array[_0x203b53(0xd9)],_0x15af52['rangeMode']=_0x372427[_0x203b53(0x117)](_0x20de9f,!![]),_0x20de9f+=Uint16Array[_0x203b53(0xd9)];let _0x400dfc={};_0x400dfc['x']=_0x372427['getFloat64'](_0x20de9f,!![]),_0x20de9f+=Float64Array[_0x203b53(0xd9)],_0x400dfc['y']=_0x372427[_0x203b53(0x12b)](_0x20de9f,!![]),_0x20de9f+=Float64Array[_0x203b53(0xd9)],_0x400dfc['z']=_0x372427['getFloat64'](_0x20de9f,!![]),_0x20de9f+=Float64Array[_0x203b53(0xd9)];let _0x34c708=_0x372427['getFloat64'](_0x20de9f,!![]);_0x20de9f+=Float64Array[_0x203b53(0xd9)],_0x15af52['boundingSphere']={'center':_0x400dfc,'radius':_0x34c708};let _0x45d734=parseString$1(_0x152302,_0x372427,_0x20de9f),_0x2ddc21=_0x45d734[_0x203b53(0xdc)];_0x20de9f=_0x45d734[_0x203b53(0xe1)];let _0x5dcefa=_0x2ddc21[_0x203b53(0xe7)](_0x203b53(0x10e));if(_0x5dcefa!==-0x1){let _0x57559b=_0x2ddc21[_0x203b53(0xec)](_0x5dcefa);_0x2ddc21=_0x2ddc21[_0x203b53(0xd2)](_0x57559b,'');}_0x15af52[_0x203b53(0xe4)]=_0x2ddc21,_0x15af52[_0x203b53(0x119)]=[];let _0x38ee4b=_0x372427[_0x203b53(0xdd)](_0x20de9f,!![]);_0x20de9f+=Uint32Array['BYTES_PER_ELEMENT'];for(let _0x1d1988=0x0;_0x1d1988<_0x38ee4b;_0x1d1988++){_0x20de9f=parseGeode$1(_0x152302,_0x372427,_0x20de9f,_0x15af52[_0x203b53(0x119)]);}return _0x3bca7b[_0x203b53(0x11b)](_0x15af52),_0x20de9f;}function parseGroupNode$1(_0x58f0cd,_0x1e6090,_0x18b0cb,_0x3a5517){const _0x2d67f0=_0x376f;let _0x1c4caf={},_0x1168f2=[],_0xd3ab0d=_0x1e6090[_0x2d67f0(0xdd)](_0x18b0cb,!![]);_0x18b0cb+=Uint32Array[_0x2d67f0(0xd9)];let _0x4b0c55=_0x1e6090[_0x2d67f0(0xdd)](_0x18b0cb,!![]);_0x18b0cb+=Uint32Array[_0x2d67f0(0xd9)];for(let _0x467c25=0x0;_0x467c25<_0x4b0c55;_0x467c25++){_0x18b0cb=parsePageLOD$1(_0x58f0cd,_0x1e6090,_0x18b0cb,_0x1168f2);}_0x1c4caf[_0x2d67f0(0x11a)]=_0x1168f2;let _0x262b4b=_0x18b0cb%0x4;return _0x262b4b!==0x0&&(_0x18b0cb+=0x4-_0x262b4b),_0x3a5517[_0x2d67f0(0xef)]=_0x1c4caf,_0x18b0cb;}function parseVertex$1(_0x428eed,_0x5500ae,_0x5ebdd1,_0x2ed58e){const _0x32b42d=_0x376f;let _0x4b8381=_0x5500ae[_0x32b42d(0xdd)](_0x5ebdd1,!![]);_0x2ed58e['verticesCount']=_0x4b8381,_0x5ebdd1+=Uint32Array[_0x32b42d(0xd9)];if(_0x5ebdd1<=0x0)return _0x5ebdd1;let _0x2d4d67=_0x5500ae['getUint16'](_0x5ebdd1,!![]);_0x5ebdd1+=Uint16Array['BYTES_PER_ELEMENT'];let _0x1e3b30=_0x5500ae[_0x32b42d(0x117)](_0x5ebdd1,!![]);_0x1e3b30=_0x2d4d67*Float32Array[_0x32b42d(0xd9)],_0x5ebdd1+=Uint16Array[_0x32b42d(0xd9)];let _0x40c847=_0x4b8381*_0x2d4d67*Float32Array[_0x32b42d(0xd9)],_0x5176d7=new Uint8Array(_0x428eed,_0x5ebdd1,_0x40c847);_0x5ebdd1+=_0x40c847;let _0x4708cb=_0x2ed58e[_0x32b42d(0xf4)],_0x18eeda=_0x2ed58e[_0x32b42d(0x112)];return _0x18eeda[_0x32b42d(0xff)]=_0x4708cb[_0x32b42d(0x130)],_0x4708cb[_0x32b42d(0x11b)]({'index':_0x18eeda['aPosition'],'typedArray':_0x5176d7,'componentsPerAttribute':_0x2d4d67,'componentDatatype':Cesium[_0x32b42d(0xf1)]['FLOAT'],'offsetInBytes':0x0,'strideInBytes':_0x1e3b30,'normalize':![]}),_0x5ebdd1;}function parseNormal$1(_0x8af070,_0x53d543,_0x1f554a,_0x24cc71){const _0x4c8be3=_0x376f;let _0x1ed5db=_0x53d543['getUint32'](_0x1f554a,!![]);_0x1f554a+=Uint32Array[_0x4c8be3(0xd9)];if(_0x1ed5db<=0x0)return _0x1f554a;let _0x5e241d=_0x53d543[_0x4c8be3(0x117)](_0x1f554a,!![]);_0x1f554a+=Uint16Array[_0x4c8be3(0xd9)];let _0x8bd347=_0x53d543['getUint16'](_0x1f554a,!![]);_0x1f554a+=Uint16Array[_0x4c8be3(0xd9)];let _0x5354d0=_0x1ed5db*_0x5e241d*Float32Array['BYTES_PER_ELEMENT'],_0x35c458=new Uint8Array(_0x8af070,_0x1f554a,_0x5354d0);_0x1f554a+=_0x5354d0;let _0x2fdb26=_0x24cc71[_0x4c8be3(0xf4)],_0x11091a=_0x24cc71['attrLocation'];return _0x11091a[_0x4c8be3(0x116)]=_0x2fdb26[_0x4c8be3(0x130)],_0x2fdb26[_0x4c8be3(0x11b)]({'index':_0x11091a[_0x4c8be3(0x116)],'typedArray':_0x35c458,'componentsPerAttribute':_0x5e241d,'componentDatatype':Cesium[_0x4c8be3(0xf1)]['FLOAT'],'offsetInBytes':0x0,'strideInBytes':_0x8bd347,'normalize':![]}),_0x1f554a;}function parseVertexColor$1(_0x3b1ae1,_0x1e1baf,_0x4b6e21,_0x1ab930){const _0xafc25e=_0x376f;let _0x5d50df=_0x1e1baf['getUint32'](_0x4b6e21,!![]);_0x4b6e21+=Uint32Array[_0xafc25e(0xd9)];let _0x45ce1c=_0x1ab930['verticesCount'],_0x2c4a3e;if(_0x5d50df>0x0){let _0x2014d6=_0x1e1baf[_0xafc25e(0x117)](_0x4b6e21,!![]);_0x4b6e21+=Uint16Array[_0xafc25e(0xd9)],_0x4b6e21+=Uint8Array['BYTES_PER_ELEMENT']*0x2;let _0x8cd35d=_0x5d50df*Uint8Array[_0xafc25e(0xd9)]*0x4,_0x470af1=new Uint8Array(_0x3b1ae1,_0x4b6e21,_0x8cd35d);_0x2c4a3e=_0x470af1[_0xafc25e(0x10d)](0x0,_0x8cd35d),_0x4b6e21+=_0x8cd35d;}else {_0x2c4a3e=new Uint8Array(0x4*_0x45ce1c);for(let _0x3e528a=0x0;_0x3e528a<_0x45ce1c;_0x3e528a++){_0x2c4a3e[_0x3e528a*0x4]=0xff,_0x2c4a3e[_0x3e528a*0x4+0x1]=0xff,_0x2c4a3e[_0x3e528a*0x4+0x2]=0xff,_0x2c4a3e[_0x3e528a*0x4+0x3]=0xff;}}let _0x30e5b1=_0x1ab930[_0xafc25e(0xf4)],_0x2a6a70=_0x1ab930[_0xafc25e(0x112)];return _0x2a6a70['aColor']=_0x30e5b1[_0xafc25e(0x130)],_0x30e5b1[_0xafc25e(0x11b)]({'index':_0x2a6a70[_0xafc25e(0xd8)],'typedArray':_0x2c4a3e,'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0xafc25e(0xf1)]['UNSIGNED_BYTE'],'offsetInBytes':0x0,'strideInBytes':0x4,'normalize':!![]}),_0x1ab930['vertexColor']=_0x2c4a3e,_0x4b6e21;}function parseSecondColor$1(_0x122040,_0x2e9ef6,_0x5df8cf,_0x59430d){const _0x4a673c=_0x376f;let _0x230b13=_0x2e9ef6['getUint32'](_0x5df8cf,!![]);_0x5df8cf+=Uint32Array[_0x4a673c(0xd9)];if(_0x230b13<=0x0)return _0x5df8cf;let _0x5c378a=_0x2e9ef6['getUint16'](_0x5df8cf,!![]);_0x5df8cf+=Uint16Array['BYTES_PER_ELEMENT'],_0x5df8cf+=Uint8Array['BYTES_PER_ELEMENT']*0x2;let _0x1c6f31=_0x230b13*Uint8Array[_0x4a673c(0xd9)]*0x4,_0x38b205=new Uint8Array(_0x122040,_0x5df8cf,_0x1c6f31);_0x5df8cf+=_0x1c6f31;let _0x40ee0e=_0x59430d['vertexAttributes'],_0x49acef=_0x59430d['attrLocation'];return _0x49acef['aSecondColor']=_0x40ee0e[_0x4a673c(0x130)],_0x40ee0e[_0x4a673c(0x11b)]({'index':_0x49acef[_0x4a673c(0x105)],'typedArray':_0x38b205,'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x4a673c(0xf1)][_0x4a673c(0x108)],'offsetInBytes':0x0,'strideInBytes':0x4,'normalize':!![]}),_0x5df8cf;}function parseTexCoord$1(_0x2b36b5,_0x5573d0,_0x4b22fd,_0x47fab6){const _0x29a04b=_0x376f;let _0x568d61=_0x5573d0[_0x29a04b(0x117)](_0x4b22fd,!![]);_0x4b22fd+=Uint16Array[_0x29a04b(0xd9)],_0x4b22fd+=Uint16Array[_0x29a04b(0xd9)];for(let _0xb7efe6=0x0;_0xb7efe6<_0x568d61;_0xb7efe6++){let _0x10f8b6=_0x5573d0[_0x29a04b(0xdd)](_0x4b22fd,!![]);_0x4b22fd+=Uint32Array[_0x29a04b(0xd9)];let _0x2c095d=_0x5573d0['getUint16'](_0x4b22fd,!![]);_0x4b22fd+=Uint16Array[_0x29a04b(0xd9)];let _0x1c66fc=_0x5573d0[_0x29a04b(0x117)](_0x4b22fd,!![]);_0x4b22fd+=Uint16Array[_0x29a04b(0xd9)];let _0x159113=_0x10f8b6*_0x2c095d*Float32Array[_0x29a04b(0xd9)],_0x2479f5=new Uint8Array(_0x2b36b5,_0x4b22fd,_0x159113);_0x4b22fd+=_0x159113;let _0x35b6fc=_0x29a04b(0x127)+_0xb7efe6,_0x2c0279=_0x47fab6['vertexAttributes'],_0x432b0c=_0x47fab6[_0x29a04b(0x112)];_0x432b0c[_0x35b6fc]=_0x2c0279[_0x29a04b(0x130)],_0x2c0279[_0x29a04b(0x11b)]({'index':_0x432b0c[_0x35b6fc],'typedArray':_0x2479f5,'componentsPerAttribute':_0x2c095d,'componentDatatype':Cesium[_0x29a04b(0xf1)][_0x29a04b(0x107)],'offsetInBytes':0x0,'strideInBytes':_0x2c095d*Float32Array[_0x29a04b(0xd9)],'normalize':![]});}return _0x4b22fd;}function parseInstanceInfo$1(_0x5e38ca,_0x4bb8e8,_0x38c85f,_0x298c20){const _0x5aa220=_0x376f;let _0x369dc7=_0x4bb8e8[_0x5aa220(0x117)](_0x38c85f,!![]);_0x38c85f+=Uint16Array['BYTES_PER_ELEMENT'],_0x38c85f+=Uint16Array[_0x5aa220(0xd9)];let _0x52b861=_0x298c20['vertexAttributes'],_0x52a485=_0x298c20['attrLocation'];for(let _0x5f1214=0x0;_0x5f1214<_0x369dc7;_0x5f1214++){let _0x4e7ead=_0x4bb8e8[_0x5aa220(0xdd)](_0x38c85f,!![]);_0x38c85f+=Uint32Array[_0x5aa220(0xd9)];let _0x165f3e=_0x4bb8e8[_0x5aa220(0x117)](_0x38c85f,!![]);_0x38c85f+=Uint16Array['BYTES_PER_ELEMENT'];let _0x1bb12d=_0x4bb8e8[_0x5aa220(0x117)](_0x38c85f,!![]);_0x38c85f+=Uint16Array[_0x5aa220(0xd9)];let _0x56874f=_0x4e7ead*_0x165f3e*Float32Array[_0x5aa220(0xd9)];if(_0x165f3e===0x11||_0x165f3e===0x1d){let _0x2c6d33=new Uint8Array(_0x5e38ca,_0x38c85f,_0x56874f);_0x298c20['instanceCount']=_0x4e7ead,_0x298c20['instanceMode']=_0x165f3e,_0x298c20[_0x5aa220(0xe6)]=_0x2c6d33,_0x298c20[_0x5aa220(0xe3)]=0x1;let _0x4f0031=_0x165f3e*_0x4e7ead*0x4,_0x351805=_0x2c6d33[_0x5aa220(0x10d)](0x0,_0x4f0031);_0x298c20[_0x5aa220(0xf7)]=_0x351805;let _0x1ade73;if(_0x165f3e===0x11)_0x1ade73=Float32Array['BYTES_PER_ELEMENT']*0x11,_0x52a485[_0x5aa220(0x101)]=_0x52b861[_0x5aa220(0x130)],_0x52b861[_0x5aa220(0x11b)]({'index':_0x52a485[_0x5aa220(0x101)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5aa220(0xf1)][_0x5aa220(0x107)],'normalize':![],'offsetInBytes':0x0,'strideInBytes':_0x1ade73,'instanceDivisor':0x1}),_0x52a485[_0x5aa220(0xf8)]=_0x52b861[_0x5aa220(0x130)],_0x52b861[_0x5aa220(0x11b)]({'index':_0x52a485[_0x5aa220(0xf8)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5aa220(0xf1)]['FLOAT'],'normalize':![],'offsetInBytes':0x4*Float32Array['BYTES_PER_ELEMENT'],'strideInBytes':_0x1ade73,'instanceDivisor':0x1}),_0x52a485[_0x5aa220(0xee)]=_0x52b861['length'],_0x52b861[_0x5aa220(0x11b)]({'index':_0x52a485[_0x5aa220(0xee)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5aa220(0xf1)][_0x5aa220(0x107)],'normalize':![],'offsetInBytes':0x8*Float32Array['BYTES_PER_ELEMENT'],'strideInBytes':_0x1ade73,'instanceDivisor':0x1}),_0x52a485['secondary_colour']=_0x52b861[_0x5aa220(0x130)],_0x52b861[_0x5aa220(0x11b)]({'index':_0x52a485[_0x5aa220(0x12f)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5aa220(0xf1)][_0x5aa220(0x107)],'normalize':![],'offsetInBytes':0xc*Float32Array[_0x5aa220(0xd9)],'strideInBytes':_0x1ade73,'instanceDivisor':0x1}),_0x52a485[_0x5aa220(0xf0)]=_0x52b861[_0x5aa220(0x130)],_0x52b861[_0x5aa220(0x11b)]({'index':_0x52a485['uv6'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5aa220(0xf1)][_0x5aa220(0x108)],'normalize':!![],'offsetInBytes':0x10*Float32Array[_0x5aa220(0xd9)],'strideInBytes':_0x1ade73,'instanceDivisor':0x1});else _0x165f3e===0x1d&&(_0x1ade73=Float32Array[_0x5aa220(0xd9)]*0x1d,_0x52a485[_0x5aa220(0x125)]=_0x52b861['length'],_0x52b861[_0x5aa220(0x11b)]({'index':_0x52a485[_0x5aa220(0x125)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x5aa220(0x107)],'normalize':![],'offsetInBytes':0x0,'strideInBytes':_0x1ade73,'instanceDivisor':0x1,'byteLength':_0x56874f}),_0x52a485[_0x5aa220(0x101)]=_0x52b861[_0x5aa220(0x130)],_0x52b861['push']({'index':_0x52a485['uv2'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5aa220(0xf1)]['FLOAT'],'normalize':![],'offsetInBytes':0x4*Float32Array['BYTES_PER_ELEMENT'],'strideInBytes':_0x1ade73,'instanceDivisor':0x1}),_0x52a485[_0x5aa220(0xf8)]=_0x52b861[_0x5aa220(0x130)],_0x52b861[_0x5aa220(0x11b)]({'index':_0x52a485[_0x5aa220(0xf8)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5aa220(0xf1)]['FLOAT'],'normalize':![],'offsetInBytes':0x8*Float32Array[_0x5aa220(0xd9)],'strideInBytes':_0x1ade73,'instanceDivisor':0x1}),_0x52a485[_0x5aa220(0xee)]=_0x52b861['length'],_0x52b861[_0x5aa220(0x11b)]({'index':_0x52a485['uv4'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5aa220(0xf1)][_0x5aa220(0x107)],'normalize':![],'offsetInBytes':0xc*Float32Array['BYTES_PER_ELEMENT'],'strideInBytes':_0x1ade73,'instanceDivisor':0x1}),_0x52a485[_0x5aa220(0xd7)]=_0x52b861[_0x5aa220(0x130)],_0x52b861[_0x5aa220(0x11b)]({'index':_0x52a485[_0x5aa220(0xd7)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x5aa220(0x107)],'normalize':![],'offsetInBytes':0x10*Float32Array[_0x5aa220(0xd9)],'strideInBytes':_0x1ade73,'instanceDivisor':0x1}),_0x52a485[_0x5aa220(0xf0)]=_0x52b861[_0x5aa220(0x130)],_0x52b861[_0x5aa220(0x11b)]({'index':_0x52a485[_0x5aa220(0xf0)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype']['FLOAT'],'normalize':![],'offsetInBytes':0x14*Float32Array[_0x5aa220(0xd9)],'strideInBytes':_0x1ade73,'instanceDivisor':0x1}),_0x52a485[_0x5aa220(0xda)]=_0x52b861[_0x5aa220(0x130)],_0x52b861[_0x5aa220(0x11b)]({'index':_0x52a485['uv7'],'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x5aa220(0xf1)][_0x5aa220(0x107)],'normalize':![],'offsetInBytes':0x18*Float32Array['BYTES_PER_ELEMENT'],'strideInBytes':_0x1ade73,'instanceDivisor':0x1}),_0x52a485[_0x5aa220(0x12f)]=_0x52b861[_0x5aa220(0x130)],_0x52b861['push']({'index':_0x52a485[_0x5aa220(0x12f)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x5aa220(0x108)],'normalize':!![],'offsetInBytes':0x1b*Float32Array[_0x5aa220(0xd9)],'strideInBytes':_0x1ade73,'instanceDivisor':0x1}),_0x52a485[_0x5aa220(0x10c)]=_0x52b861[_0x5aa220(0x130)],_0x52b861['push']({'index':_0x52a485[_0x5aa220(0x10c)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x5aa220(0xf1)]['UNSIGNED_BYTE'],'normalize':!![],'offsetInBytes':0x1c*Float32Array[_0x5aa220(0xd9)],'strideInBytes':_0x1ade73,'instanceDivisor':0x1}));}else {let _0x5bc9a6=_0x4e7ead*_0x165f3e;_0x298c20[_0x5aa220(0xe8)]=new Float32Array(_0x5bc9a6);for(let _0xa8f0=0x0;_0xa8f0<_0x5bc9a6;_0xa8f0++){_0x298c20[_0x5aa220(0xe8)][_0xa8f0]=_0x4bb8e8[_0x5aa220(0x10b)](_0x38c85f+_0xa8f0*Float32Array[_0x5aa220(0xd9)],!![]);}}_0x38c85f+=_0x56874f;}return _0x38c85f;}function _0x376f(_0x616285,_0x21a731){_0x616285=_0x616285-0xd1;let _0x4ecf71=_0x4ecf[_0x616285];return _0x4ecf71;}function parseCompressVertex$1(_0x5a28cf,_0x432590,_0x4062e1,_0x10643f){const _0x52f7dc=_0x376f;let _0x39589e=_0x432590[_0x52f7dc(0xdd)](_0x4062e1,!![]);_0x10643f[_0x52f7dc(0xfd)]=_0x39589e,_0x4062e1+=Uint32Array[_0x52f7dc(0xd9)];if(_0x4062e1<=0x0)return _0x4062e1;let _0x3bdc73=_0x432590[_0x52f7dc(0x117)](_0x4062e1,!![]);_0x4062e1+=Uint16Array['BYTES_PER_ELEMENT'];let _0x14920d=_0x432590[_0x52f7dc(0x117)](_0x4062e1,!![]);_0x14920d=_0x3bdc73*Int16Array[_0x52f7dc(0xd9)],_0x4062e1+=Uint16Array[_0x52f7dc(0xd9)];let _0x21e1b3=_0x432590[_0x52f7dc(0x10b)](_0x4062e1,!![]);_0x4062e1+=Float32Array[_0x52f7dc(0xd9)];let _0x478e4c={};_0x478e4c['x']=_0x432590[_0x52f7dc(0x10b)](_0x4062e1,!![]),_0x4062e1+=Float32Array['BYTES_PER_ELEMENT'],_0x478e4c['y']=_0x432590[_0x52f7dc(0x10b)](_0x4062e1,!![]),_0x4062e1+=Float32Array[_0x52f7dc(0xd9)],_0x478e4c['z']=_0x432590['getFloat32'](_0x4062e1,!![]),_0x4062e1+=Float32Array[_0x52f7dc(0xd9)],_0x478e4c['w']=_0x432590[_0x52f7dc(0x10b)](_0x4062e1,!![]),_0x4062e1+=Float32Array[_0x52f7dc(0xd9)],_0x10643f[_0x52f7dc(0xe2)]=_0x21e1b3,_0x10643f[_0x52f7dc(0x102)]=_0x478e4c;let _0x296070=_0x39589e*_0x3bdc73*Int16Array[_0x52f7dc(0xd9)],_0x9a3c50=new Uint8Array(_0x5a28cf,_0x4062e1,_0x296070);_0x4062e1+=_0x296070;let _0x4af407=_0x10643f['vertexAttributes'],_0x3f260b=_0x10643f[_0x52f7dc(0x112)];return _0x3f260b[_0x52f7dc(0xff)]=_0x4af407[_0x52f7dc(0x130)],_0x4af407['push']({'index':_0x3f260b['aPosition'],'typedArray':_0x9a3c50,'componentsPerAttribute':_0x3bdc73,'componentDatatype':Cesium['ComponentDatatype']['SHORT'],'offsetInBytes':0x0,'strideInBytes':_0x14920d,'normalize':![]}),_0x4062e1;}function parseCompressNormal$1(_0x48dd9e,_0x3e9e50,_0x41ec43,_0x508d80){const _0x5c0037=_0x376f;let _0x275383=_0x3e9e50[_0x5c0037(0xdd)](_0x41ec43,!![]);_0x41ec43+=Uint32Array['BYTES_PER_ELEMENT'];if(_0x275383<=0x0)return _0x41ec43;let _0x54282f=_0x3e9e50[_0x5c0037(0x117)](_0x41ec43,!![]);_0x41ec43+=Uint16Array['BYTES_PER_ELEMENT'];let _0x145376=_0x3e9e50['getUint16'](_0x41ec43,!![]);_0x41ec43+=Uint16Array[_0x5c0037(0xd9)];let _0x39f248=_0x275383*0x2*Int16Array[_0x5c0037(0xd9)],_0x450221=new Uint8Array(_0x48dd9e,_0x41ec43,_0x39f248);_0x41ec43+=_0x39f248;let _0x139c85=_0x508d80[_0x5c0037(0xf4)],_0x3887d6=_0x508d80[_0x5c0037(0x112)];return _0x3887d6['aNormal']=_0x139c85[_0x5c0037(0x130)],_0x139c85[_0x5c0037(0x11b)]({'index':_0x3887d6[_0x5c0037(0x116)],'typedArray':_0x450221,'componentsPerAttribute':0x2,'componentDatatype':Cesium[_0x5c0037(0xf1)][_0x5c0037(0x103)],'offsetInBytes':0x0,'strideInBytes':_0x145376,'normalize':![]}),_0x41ec43;}function parseCompressTexCoord$1(_0x4e4a8b,_0x129a54,_0x3d7be5,_0x4e909b){const _0x1317fe=_0x376f;_0x4e909b['texCoordCompressConstant']=[],_0x4e909b[_0x1317fe(0xe0)]=[];let _0x5be761=_0x129a54[_0x1317fe(0x117)](_0x3d7be5,!![]);_0x3d7be5+=Uint16Array['BYTES_PER_ELEMENT'],_0x3d7be5+=Uint16Array[_0x1317fe(0xd9)];for(let _0x34dbaf=0x0;_0x34dbaf<_0x5be761;_0x34dbaf++){let _0x24642c=_0x129a54[_0x1317fe(0x120)](_0x3d7be5,!![]);_0x3d7be5+=Uint8Array['BYTES_PER_ELEMENT'],_0x3d7be5+=Uint8Array['BYTES_PER_ELEMENT']*0x3;let _0x2a2629=_0x129a54[_0x1317fe(0xdd)](_0x3d7be5,!![]);_0x3d7be5+=Uint32Array[_0x1317fe(0xd9)];let _0x48dbd7=_0x129a54[_0x1317fe(0x117)](_0x3d7be5,!![]);_0x3d7be5+=Uint16Array[_0x1317fe(0xd9)];let _0x1fbe3f=_0x129a54[_0x1317fe(0x117)](_0x3d7be5,!![]);_0x3d7be5+=Uint16Array[_0x1317fe(0xd9)];let _0x592d7c=_0x129a54[_0x1317fe(0x10b)](_0x3d7be5,!![]);_0x3d7be5+=Float32Array[_0x1317fe(0xd9)],_0x4e909b['texCoordCompressConstant']['push'](_0x592d7c);let _0x103ead={};_0x103ead['x']=_0x129a54[_0x1317fe(0x10b)](_0x3d7be5,!![]),_0x3d7be5+=Float32Array[_0x1317fe(0xd9)],_0x103ead['y']=_0x129a54[_0x1317fe(0x10b)](_0x3d7be5,!![]),_0x3d7be5+=Float32Array[_0x1317fe(0xd9)],_0x103ead['z']=_0x129a54[_0x1317fe(0x10b)](_0x3d7be5,!![]),_0x3d7be5+=Float32Array[_0x1317fe(0xd9)],_0x103ead['w']=_0x129a54[_0x1317fe(0x10b)](_0x3d7be5,!![]),_0x3d7be5+=Float32Array[_0x1317fe(0xd9)],_0x4e909b['minTexCoordValue']['push'](_0x103ead);let _0x49c6fd=_0x2a2629*_0x48dbd7*Int16Array[_0x1317fe(0xd9)],_0x4d3e59=new Uint8Array(_0x4e4a8b,_0x3d7be5,_0x49c6fd);_0x3d7be5+=_0x49c6fd;let _0x39a804=_0x3d7be5%0x4;_0x39a804!==0x0&&(_0x3d7be5+=0x4-_0x39a804);let _0xa83eba='aTexCoord'+_0x34dbaf,_0x434cfd=_0x4e909b[_0x1317fe(0xf4)],_0xa0cd4=_0x4e909b['attrLocation'];_0xa0cd4[_0xa83eba]=_0x434cfd['length'],_0x434cfd[_0x1317fe(0x11b)]({'index':_0xa0cd4[_0xa83eba],'typedArray':_0x4d3e59,'componentsPerAttribute':_0x48dbd7,'componentDatatype':Cesium[_0x1317fe(0xf1)][_0x1317fe(0x103)],'offsetInBytes':0x0,'strideInBytes':_0x48dbd7*Int16Array['BYTES_PER_ELEMENT'],'normalize':![]});if(_0x24642c){_0x49c6fd=_0x2a2629*Float32Array['BYTES_PER_ELEMENT'];let _0x4e9cdf=new Uint8Array(_0x4e4a8b,_0x3d7be5,_0x49c6fd);_0x3d7be5+=_0x49c6fd,_0x4e909b[_0x1317fe(0x114)]=!![],_0xa83eba='aTexCoordZ'+_0x34dbaf,_0xa0cd4[_0xa83eba]=_0x434cfd[_0x1317fe(0x130)],_0x434cfd['push']({'index':_0xa0cd4[_0xa83eba],'typedArray':_0x4e9cdf,'componentsPerAttribute':0x1,'componentDatatype':Cesium[_0x1317fe(0xf1)][_0x1317fe(0x107)],'offsetInBytes':0x0,'strideInBytes':Float32Array[_0x1317fe(0xd9)],'normalize':![]});}}return _0x3d7be5;}function parseStandardSkeleton$1(_0xc0c63c,_0x2723a6,_0x482243,_0xc71ea6){return _0x482243=parseVertex$1(_0xc0c63c,_0x2723a6,_0x482243,_0xc71ea6),_0x482243=parseNormal$1(_0xc0c63c,_0x2723a6,_0x482243,_0xc71ea6),_0x482243=parseVertexColor$1(_0xc0c63c,_0x2723a6,_0x482243,_0xc71ea6),_0x482243=parseSecondColor$1(_0xc0c63c,_0x2723a6,_0x482243,_0xc71ea6),_0x482243=parseTexCoord$1(_0xc0c63c,_0x2723a6,_0x482243,_0xc71ea6),_0x482243=parseInstanceInfo$1(_0xc0c63c,_0x2723a6,_0x482243,_0xc71ea6),_0x482243;}function parseCompressSkeleton$1(_0x30be3f,_0x2360f4,_0x340908,_0x319855){const _0xa00c67=_0x376f;let _0x416f49=_0x2360f4[_0xa00c67(0xdd)](_0x340908,!![]);return _0x319855[_0xa00c67(0x131)]=_0x416f49,_0x340908+=Uint32Array['BYTES_PER_ELEMENT'],(_0x416f49&_0x25c9a4[_0xa00c67(0xf2)])===_0x25c9a4[_0xa00c67(0xf2)]?_0x340908=parseCompressVertex$1(_0x30be3f,_0x2360f4,_0x340908,_0x319855):_0x340908=parseVertex$1(_0x30be3f,_0x2360f4,_0x340908,_0x319855),(_0x416f49&_0x25c9a4[_0xa00c67(0xfe)])===_0x25c9a4['SVC_Normal']?_0x340908=parseCompressNormal$1(_0x30be3f,_0x2360f4,_0x340908,_0x319855):_0x340908=parseNormal$1(_0x30be3f,_0x2360f4,_0x340908,_0x319855),_0x340908=parseVertexColor$1(_0x30be3f,_0x2360f4,_0x340908,_0x319855),_0x340908=parseSecondColor$1(_0x30be3f,_0x2360f4,_0x340908,_0x319855),(_0x416f49&_0x25c9a4['SVC_TexutreCoord'])===_0x25c9a4['SVC_TexutreCoord']?_0x340908=parseCompressTexCoord$1(_0x30be3f,_0x2360f4,_0x340908,_0x319855):_0x340908=parseTexCoord$1(_0x30be3f,_0x2360f4,_0x340908,_0x319855),(_0x416f49&_0x25c9a4[_0xa00c67(0x115)])===_0x25c9a4['SVC_TexutreCoordIsW']&&(_0x319855[_0xa00c67(0xf9)]=!![]),_0x340908=parseInstanceInfo$1(_0x30be3f,_0x2360f4,_0x340908,_0x319855),_0x340908;}function parseIndexPackage$1(_0x22e8b5,_0x1cdce7,_0x2cc211,_0x40b33d){const _0x3ce8e2=_0x376f;let _0x57e35a=_0x1cdce7[_0x3ce8e2(0xdd)](_0x2cc211,!![]);_0x2cc211+=Uint32Array['BYTES_PER_ELEMENT'];for(let _0x4232b8=0x0;_0x4232b8<_0x57e35a;_0x4232b8++){let _0x73254f={},_0x10e8f7=_0x1cdce7[_0x3ce8e2(0xdd)](_0x2cc211,!![]);_0x2cc211+=Uint32Array[_0x3ce8e2(0xd9)];let _0x99b52c=_0x1cdce7[_0x3ce8e2(0x120)](_0x2cc211,!![]);_0x2cc211+=Uint8Array[_0x3ce8e2(0xd9)];let _0x247941=_0x1cdce7[_0x3ce8e2(0x120)](_0x2cc211,!![]);_0x2cc211+=Uint8Array['BYTES_PER_ELEMENT'];let _0x49ff2c=_0x1cdce7[_0x3ce8e2(0x120)](_0x2cc211,!![]);_0x2cc211+=Uint8Array[_0x3ce8e2(0xd9)],_0x2cc211+=Uint8Array['BYTES_PER_ELEMENT'];if(_0x10e8f7>0x0){let _0xf262b=null,_0x42acc5;_0x99b52c===0x1||_0x99b52c===0x3?(_0x42acc5=_0x10e8f7*Uint32Array['BYTES_PER_ELEMENT'],_0xf262b=new Uint8Array(_0x22e8b5,_0x2cc211,_0x42acc5)):(_0x42acc5=_0x10e8f7*Uint16Array[_0x3ce8e2(0xd9)],_0xf262b=new Uint8Array(_0x22e8b5,_0x2cc211,_0x42acc5),_0x10e8f7%0x2!==0x0&&(_0x42acc5+=0x2)),_0x73254f[_0x3ce8e2(0x113)]=_0xf262b,_0x2cc211+=_0x42acc5;}_0x73254f[_0x3ce8e2(0x111)]=_0x10e8f7,_0x73254f[_0x3ce8e2(0x11e)]=_0x99b52c,_0x73254f[_0x3ce8e2(0x10f)]=_0x49ff2c;let _0x38c597=[],_0x939fed=_0x1cdce7['getUint32'](_0x2cc211,!![]);_0x2cc211+=Uint32Array[_0x3ce8e2(0xd9)];for(let _0x45af63=0x0;_0x45af63<_0x939fed;_0x45af63++){let _0x27a4b3=parseString$1(_0x22e8b5,_0x1cdce7,_0x2cc211),_0x3dccdd=_0x27a4b3['string'];_0x2cc211=_0x27a4b3['bytesOffset'],_0x38c597[_0x3ce8e2(0x11b)](_0x3dccdd),_0x73254f[_0x3ce8e2(0xd5)]=_0x3dccdd;}let _0x2a2f05=_0x2cc211%0x4;if(_0x2a2f05!==0x0){let _0x1d5983=0x4-_0x2cc211%0x4;_0x2cc211+=_0x1d5983;}_0x40b33d[_0x3ce8e2(0x11b)](_0x73254f);}return _0x2cc211;}function parseSkeleton$1(_0x38ba7d,_0x59db1c,_0x297a72,_0x16b353){const _0x553dc8=_0x376f;let _0x146d85=_0x59db1c['getUint32'](_0x297a72,!![]);_0x297a72+=Uint32Array[_0x553dc8(0xd9)];let _0x4a620b=_0x59db1c[_0x553dc8(0xdd)](_0x297a72,!![]);_0x297a72+=Uint32Array[_0x553dc8(0xd9)];for(let _0x1fff3f=0x0;_0x1fff3f<_0x4a620b;_0x1fff3f++){let _0x3c2867=parseString$1(_0x38ba7d,_0x59db1c,_0x297a72),_0x5cd3e8=_0x3c2867['string'];_0x297a72=_0x3c2867[_0x553dc8(0xe1)];let _0x1ff24d=_0x297a72%0x4;_0x1ff24d!==0x0&&(_0x297a72+=0x4-_0x1ff24d);let _0x337727=_0x59db1c[_0x553dc8(0xdd)](_0x297a72,!![]);_0x297a72+=Int32Array[_0x553dc8(0xd9)];let _0x563bfb={'vertexAttributes':[],'attrLocation':{},'instanceCount':0x0,'instanceMode':0x0,'instanceIndex':-0x1};if(_0x337727===S3MBVertexTag$1[_0x553dc8(0xfc)])_0x297a72=parseStandardSkeleton$1(_0x38ba7d,_0x59db1c,_0x297a72,_0x563bfb);else _0x337727===S3MBVertexTag$1[_0x553dc8(0x136)]&&(_0x297a72=parseCompressSkeleton$1(_0x38ba7d,_0x59db1c,_0x297a72,_0x563bfb));let _0x40d5e5=[];_0x297a72=parseIndexPackage$1(_0x38ba7d,_0x59db1c,_0x297a72,_0x40d5e5);let _0x69c147=undefined;_0x40d5e5[_0x553dc8(0x130)]===0x2&&_0x40d5e5[0x1][_0x553dc8(0x10f)]===0xd&&_0x40d5e5[0x1]['indicesCount']>=0x3&&(_0x69c147=S3MEdgeProcessor[_0x553dc8(0x124)](_0x563bfb,_0x40d5e5[0x1])),_0x16b353[_0x5cd3e8]={'vertexPackage':_0x563bfb,'arrIndexPackage':_0x40d5e5,'edgeGeometry':_0x69c147};}let _0x54b661=_0x59db1c['getUint32'](_0x297a72,!![]);return _0x297a72+=_0x54b661,_0x297a72+=Uint32Array['BYTES_PER_ELEMENT'],_0x297a72;}function createTextureBatch(_0x4301a2,_0x3c485e,_0x32cd42,_0x1b8ff5){const _0x384f14=_0x376f;let _0x5df4d0=_0x32cd42[_0x384f14(0x130)];for(let _0x1cd1dd=0x0;_0x1cd1dd<_0x5df4d0;_0x1cd1dd++){let _0x218b29=_0x32cd42[_0x1cd1dd],_0x4061e8=_0x218b29[_0x384f14(0xd4)][_0x384f14(0xe5)]('_')[0x0],_0x7df7bf=_0x218b29[_0x384f14(0x12a)];for(let _0x18a73d=0x0;_0x18a73d<_0x7df7bf[_0x384f14(0x130)];_0x18a73d++){let _0x4de3df=_0x7df7bf[_0x18a73d],_0x21b107=_0x4de3df[_0x384f14(0x109)],_0x417573=_0x4de3df[_0x384f14(0x122)],_0x377d65=_0x4de3df[_0x384f14(0x106)],_0x13e6a2=_0x4de3df[_0x384f14(0x128)],_0x229191=_0x3c485e[_0x21b107][_0x384f14(0xd3)],_0x2d794d=_0x229191[_0x384f14(0xfd)],_0x436b38=_0x1b8ff5[_0x21b107];!_0x436b38&&(_0x436b38=_0x1b8ff5[_0x21b107]={});let _0x170c06=_0x436b38[_0x13e6a2];!_0x170c06&&(_0x170c06=_0x436b38[_0x13e6a2]=new Float32Array(_0x2d794d),Cesium[_0x384f14(0x123)](_0x170c06,-0x1));let _0x54fdcf=_0x4301a2?_0x4301a2[_0x4061e8]:_0x1cd1dd;Cesium['arrayFill'](_0x170c06,_0x54fdcf,_0x417573,_0x417573+_0x377d65);}}}function createTexBatchIdAttribute(_0x570518,_0x39c8dd,_0x726e84){const _0x2e404c=_0x376f;var _0x1fb688=_0x570518[_0x2e404c(0xf4)],_0x392085=_0x570518[_0x2e404c(0x112)],_0x45138b=_0x1fb688[_0x2e404c(0x130)];_0x392085[_0x2e404c(0xd1)+_0x726e84]=_0x45138b,_0x1fb688[_0x2e404c(0x11b)]({'index':_0x45138b,'typedArray':_0x39c8dd,'componentsPerAttribute':0x1,'componentDatatype':Cesium[_0x2e404c(0xf1)][_0x2e404c(0x107)],'offsetInBytes':0x0,'strideInBytes':0x0});}function parseTexturePackage$1(_0x1e62be,_0x25cb46,_0x5f4eee,_0xcd959,_0x443baf,_0x5e718a,_0x6a9b23,_0x505a41){const _0x470b73=_0x376f;let _0x113f37=_0x5f4eee,_0x10ec8e=_0x25cb46[_0x470b73(0xdd)](_0x113f37,!![]);_0x113f37+=Uint32Array['BYTES_PER_ELEMENT'];let _0x4e1918=_0x25cb46['getUint32'](_0x113f37,!![]);_0x113f37+=Uint32Array[_0x470b73(0xd9)];let _0x2c6dda={};for(let _0x494c3f=0x0;_0x494c3f<_0x4e1918;_0x494c3f++){let _0x354cae=parseString$1(_0x1e62be,_0x25cb46,_0x113f37),_0x4b8e8d=_0x354cae[_0x470b73(0xdc)];_0x113f37=_0x354cae[_0x470b73(0xe1)];let _0xc37e44=_0x113f37%0x4;_0xc37e44!==0x0&&(_0x113f37+=0x4-_0xc37e44);let _0xb0a643=_0x25cb46[_0x470b73(0xdd)](_0x113f37,!![]);_0x113f37+=Uint32Array[_0x470b73(0xd9)];let _0x2ff64b=_0x25cb46['getUint8'](_0x113f37,!![]);_0x113f37+=Uint8Array[_0x470b73(0xd9)];let _0xf8f7cc=_0x25cb46[_0x470b73(0xdd)](_0x113f37,!![]);_0x113f37+=Uint32Array[_0x470b73(0xd9)];let _0x2fb48d=_0x25cb46[_0x470b73(0xdd)](_0x113f37,!![]);_0x113f37+=Uint32Array[_0x470b73(0xd9)];let _0xf765d0=_0x25cb46[_0x470b73(0xdd)](_0x113f37,!![]);_0x113f37+=Uint32Array[_0x470b73(0xd9)];let _0x5655ad=_0x25cb46[_0x470b73(0xdd)](_0x113f37,!![]);_0x113f37+=Uint32Array[_0x470b73(0xd9)];let _0x5dd084=_0x25cb46['getUint32'](_0x113f37,!![]);_0x113f37+=Uint32Array[_0x470b73(0xd9)];let _0x5e1a6a;_0x505a41&&(_0x5e1a6a=new Uint8Array(_0x1e62be,_0x113f37,_0x5655ad),_0x113f37+=_0x5655ad);let _0x155d2b=_0x25cb46[_0x470b73(0xdd)](_0x113f37,!![]);_0x113f37+=Uint32Array[_0x470b73(0xd9)];let _0x5c1635=[];for(let _0x410e83=0x0;_0x410e83<_0x155d2b;_0x410e83++){let _0x137468=parseString$1(_0x1e62be,_0x25cb46,_0x113f37),_0x4d27f5=_0x137468[_0x470b73(0xdc)];_0x113f37=_0x137468[_0x470b73(0xe1)],_0x5c1635[_0x470b73(0x11b)](_0x4d27f5),_0x6a9b23[_0x4d27f5]=_0x4b8e8d;}let _0x1b6a77=_0x25cb46['getUint32'](_0x113f37,!![]);_0x113f37+=Uint32Array[_0x470b73(0xd9)];let _0x5ba0a0=[];for(let _0x106133=0x0;_0x106133<_0x1b6a77;_0x106133++){let _0xe5dd6d=parseString$1(_0x1e62be,_0x25cb46,_0x113f37);_0x113f37=_0xe5dd6d[_0x470b73(0xe1)],_0x5ba0a0['push'](_0xe5dd6d[_0x470b73(0xdc)]);}let _0x629a69=_0x25cb46[_0x470b73(0xdd)](_0x113f37,!![]);_0x113f37+=Uint32Array['BYTES_PER_ELEMENT'];let _0x32b827=[],_0x520a09=undefined,_0x2cf1d5=_0x4b8e8d;if(_0x505a41)_0x520a09=_0x5e718a[_0x4b8e8d]={};else {let _0x1c2faf=_0x6a9b23[_0x4b8e8d];_0x2cf1d5=_0x1c2faf;while(_0x1c2faf){_0x2cf1d5=_0x1c2faf,_0x1c2faf=_0x6a9b23[_0x1c2faf];}_0x2cf1d5&&(_0x520a09=_0x5e718a[_0x2cf1d5]);}let _0xc29394=0x0;for(let _0x3bd9ad=0x0;_0x3bd9ad<_0x629a69;_0x3bd9ad++){let _0x415110=parseString$1(_0x1e62be,_0x25cb46,_0x113f37),_0x492a44=_0x415110['string'];_0x113f37=_0x415110[_0x470b73(0xe1)];if(_0x505a41){let _0x170b7f=_0x492a44[_0x470b73(0xe5)]('_')[0x0];!_0x520a09[_0x170b7f]?_0x520a09[_0x170b7f]=_0x3bd9ad-_0xc29394:_0xc29394++;}let _0x4503f9=_0x25cb46[_0x470b73(0xdd)](_0x113f37,!![]);_0x113f37+=Uint32Array[_0x470b73(0xd9)];let _0x3f27a7=_0x25cb46[_0x470b73(0xdd)](_0x113f37,!![]);_0x113f37+=Uint32Array[_0x470b73(0xd9)];let _0x1164bd=_0x25cb46[_0x470b73(0xdd)](_0x113f37,!![]);_0x113f37+=Uint32Array['BYTES_PER_ELEMENT'];let _0x280af1=_0x25cb46[_0x470b73(0xdd)](_0x113f37,!![]);_0x113f37+=Uint32Array[_0x470b73(0xd9)];let _0x1320c9=_0x25cb46['getUint32'](_0x113f37,!![]);_0x113f37+=Uint32Array[_0x470b73(0xd9)];let _0x5ed789=[];for(let _0x2d7d3f=0x0;_0x2d7d3f<_0x1320c9;_0x2d7d3f++){let _0x2a1d78=parseString$1(_0x1e62be,_0x25cb46,_0x113f37),_0x47745b=_0x2a1d78[_0x470b73(0xdc)];_0x113f37=_0x2a1d78[_0x470b73(0xe1)];let _0x523ffb=_0x25cb46['getUint32'](_0x113f37,!![]);_0x113f37+=Uint32Array[_0x470b73(0xd9)];let _0x35674d=_0x25cb46[_0x470b73(0xdd)](_0x113f37,!![]);_0x113f37+=Uint32Array[_0x470b73(0xd9)];let _0x2e3703=_0x25cb46[_0x470b73(0xdd)](_0x113f37,!![]);_0x113f37+=Uint32Array[_0x470b73(0xd9)],_0x5ed789[_0x470b73(0x11b)]({'geoName':_0x47745b,'offset':_0x523ffb,'count':_0x35674d,'texUnitIndex':_0x2e3703});}_0x32b827[_0x470b73(0x11b)]({'subName':_0x492a44,'offsetX':_0x4503f9,'offsetY':_0x3f27a7,'width':_0x1164bd,'height':_0x280af1,'subVertexOffsetArr':_0x5ed789});}createTextureBatch(_0x520a09,_0x443baf,_0x32b827,_0x2c6dda),_0xcd959[_0x4b8e8d]={'id':_0x4b8e8d,'rootTextureName':_0x2cf1d5,'width':_0xf8f7cc,'height':_0x2fb48d,'compressType':_0xf765d0,'size':_0x5655ad,'format':_0x5dd084,'textureData':_0x5e1a6a,'subTexInfos':_0x32b827,'requestNames':_0x5ba0a0};}for(let _0x31c7aa in _0x2c6dda){if(_0x2c6dda[_0x470b73(0x11c)](_0x31c7aa)){let _0x5972d9=_0x443baf[_0x31c7aa]['vertexPackage'],_0x3e4f3f=_0x2c6dda[_0x31c7aa];for(let _0x8f3f9f in _0x3e4f3f){if(_0x3e4f3f[_0x470b73(0x11c)](_0x8f3f9f)){let _0x19f0b0=_0x3e4f3f[_0x8f3f9f];createTexBatchIdAttribute(_0x5972d9,_0x19f0b0,_0x8f3f9f);}}}}return _0x113f37;}function parseMaterial$1(_0x500f03,_0x16da75,_0x521706,_0x8d29c){const _0x58d49a=_0x376f;let _0x5dbb48=_0x16da75['getUint32'](_0x521706,!![]);_0x521706+=Uint32Array[_0x58d49a(0xd9)];let _0xbfc991=new Uint8Array(_0x500f03,_0x521706,_0x5dbb48),_0x3d7573=Cesium['getStringFromTypedArray'](_0xbfc991);return _0x521706+=_0x5dbb48,_0x8d29c[_0x58d49a(0x12d)]=JSON[_0x58d49a(0x121)](_0x3d7573),_0x521706;}let colorScratch$1=new Cesium[(_0x32969c(0xed))](),LEFT_16$1=0x10000;function parsePickInfo$1(_0x29083b,_0x1b9e60,_0x3999f9,_0x2e05b8,_0x540327,_0x4cd36f){const _0x3cda7d=_0x32969c;if((_0x2e05b8&0x1)===0x1){let _0x26c600=_0x1b9e60[_0x3cda7d(0xdd)](_0x3999f9,!![]);_0x3999f9+=Uint32Array[_0x3cda7d(0xd9)];let _0x49b494=_0x1b9e60[_0x3cda7d(0xdd)](_0x3999f9,!![]);_0x3999f9+=Uint32Array[_0x3cda7d(0xd9)];for(let _0x26ce83=0x0;_0x26ce83<_0x49b494;_0x26ce83++){let _0x3d9eb3=parseString$1(_0x29083b,_0x1b9e60,_0x3999f9),_0xe1aa0f=_0x3d9eb3['string'];_0x3999f9=_0x3d9eb3[_0x3cda7d(0xe1)];let _0x3b51b8=_0x1b9e60['getUint32'](_0x3999f9,!![]);_0x3999f9+=Uint32Array['BYTES_PER_ELEMENT'];let _0x4c5ccd={};_0x540327[_0xe1aa0f][_0x3cda7d(0x100)]=_0x4c5ccd;let _0x565833=_0x540327[_0xe1aa0f][_0x3cda7d(0xd3)]['instanceIndex'];if(_0x565833==-0x1){let _0x55d9d1=new Float32Array(_0x540327[_0xe1aa0f][_0x3cda7d(0xd3)][_0x3cda7d(0xfd)]);for(let _0x280419=0x0;_0x280419<_0x3b51b8;_0x280419++){let _0x2af157=_0x1b9e60[_0x3cda7d(0xdd)](_0x3999f9,!![]);_0x3999f9+=Uint32Array[_0x3cda7d(0xd9)];let _0x137a10=_0x1b9e60['getUint32'](_0x3999f9,!![]);_0x3999f9+=Uint32Array[_0x3cda7d(0xd9)];let _0x1c777a=[];for(let _0x2e3920=0x0;_0x2e3920<_0x137a10;_0x2e3920++){let _0x524168=_0x1b9e60['getUint32'](_0x3999f9,!![]);_0x3999f9+=Uint32Array['BYTES_PER_ELEMENT'];let _0x5a572c=_0x1b9e60[_0x3cda7d(0xdd)](_0x3999f9,!![]);_0x3999f9+=Uint32Array['BYTES_PER_ELEMENT'],Cesium[_0x3cda7d(0x123)](_0x55d9d1,_0x280419,_0x524168,_0x524168+_0x5a572c),_0x1c777a['push']({'vertexColorOffset':_0x524168,'vertexColorCount':_0x5a572c,'batchId':_0x280419});}_0x4c5ccd[_0x2af157]=_0x1c777a;}createBatchIdAttribute$2(_0x540327[_0xe1aa0f][_0x3cda7d(0xd3)],_0x55d9d1,undefined);}else {let _0x217e14=_0x540327[_0xe1aa0f]['vertexPackage']['instanceCount'],_0x11d25a=_0x540327[_0xe1aa0f][_0x3cda7d(0xd3)]['instanceBuffer'],_0x2d9f60=_0x540327[_0xe1aa0f][_0x3cda7d(0xd3)]['instanceMode'],_0x4d721c=new Float32Array(_0x217e14),_0x49ff8a=[];for(let _0x361a34=0x0;_0x361a34<_0x3b51b8;_0x361a34++){let _0x4ee386=_0x1b9e60[_0x3cda7d(0xdd)](_0x3999f9,!![]);_0x49ff8a['push'](_0x4ee386),_0x3999f9+=Uint32Array[_0x3cda7d(0xd9)];let _0x4ef55a=_0x1b9e60[_0x3cda7d(0xdd)](_0x3999f9,!![]);_0x3999f9+=Uint32Array[_0x3cda7d(0xd9)];for(let _0x31e1c8=0x0;_0x31e1c8<_0x4ef55a;_0x31e1c8++){let _0x338977=_0x1b9e60['getUint32'](_0x3999f9,!![]);_0x3999f9+=Uint32Array['BYTES_PER_ELEMENT'];if(_0x4cd36f==0x2){let _0x241d9a=_0x1b9e60[_0x3cda7d(0xdd)](_0x3999f9,!![]);_0x3999f9+=Uint32Array['BYTES_PER_ELEMENT'];}}}let _0x19fe11=_0x2d9f60===0x11?0x10:0x1c;_0x19fe11*=Float32Array[_0x3cda7d(0xd9)];for(let _0x168ce7=0x0;_0x168ce7<_0x217e14;_0x168ce7++){_0x4d721c[_0x168ce7]=_0x168ce7;let _0x2e3887=_0x168ce7*_0x2d9f60*Float32Array[_0x3cda7d(0xd9)]+_0x19fe11;Cesium[_0x3cda7d(0xed)][_0x3cda7d(0xfb)](_0x11d25a,_0x2e3887,colorScratch$1);let _0x1600d1=_0x4cd36f===0x2?_0x49ff8a[_0x168ce7]:colorScratch$1[_0x3cda7d(0x12e)]+colorScratch$1[_0x3cda7d(0xdf)]*0x100+colorScratch$1[_0x3cda7d(0xe9)]*LEFT_16$1;_0x4c5ccd[_0x1600d1]===undefined&&(_0x4c5ccd[_0x1600d1]={'vertexColorCount':0x1,'instanceIds':[],'vertexColorOffset':_0x168ce7}),_0x4c5ccd[_0x1600d1][_0x3cda7d(0x110)]['push'](_0x168ce7);}createBatchIdAttribute$2(_0x540327[_0xe1aa0f][_0x3cda7d(0xd3)],_0x4d721c,0x1);}}}return _0x3999f9;}function createBatchIdAttribute$2(_0x33dcf3,_0x2ff4b3,_0x4f0a2d){const _0x5b4d5c=_0x32969c;let _0x34a62c=_0x33dcf3[_0x5b4d5c(0xf4)],_0x5c291b=_0x33dcf3[_0x5b4d5c(0x112)],_0x592851=_0x34a62c[_0x5b4d5c(0x130)],_0x3c2c66=_0x4f0a2d===0x1?_0x5b4d5c(0xf5):_0x5b4d5c(0x126);_0x5c291b[_0x3c2c66]=_0x592851,_0x34a62c['push']({'index':_0x592851,'typedArray':_0x2ff4b3,'componentsPerAttribute':0x1,'componentDatatype':Cesium[_0x5b4d5c(0xf1)]['FLOAT'],'offsetInBytes':0x0,'strideInBytes':0x0,'instanceDivisor':_0x4f0a2d});}function removeUnusedStringTileName(_0x1b2bab){const _0x35408e=_0x32969c;let _0x4db19a=_0x1b2bab[_0x35408e(0xe7)](_0x35408e(0x10e));if(_0x4db19a===-0x1)return _0x1b2bab;let _0x29cd4f=_0x1b2bab['substring'](_0x4db19a,_0x1b2bab[_0x35408e(0x130)]);return _0x1b2bab[_0x35408e(0xd2)](_0x29cd4f,'');}S3MBlockParser['parseBuffer']=function(_0x50c2e,_0x2d7209){const _0x2aab36=_0x32969c;let _0x566c88=_0x2d7209[_0x2aab36(0x138)],_0x466b0a=_0x2d7209[_0x2aab36(0x129)],_0x55c01f=0x0,_0x16200c=new DataView(_0x50c2e),_0x904400=_0x16200c[_0x2aab36(0x10b)](_0x55c01f,!![]);_0x55c01f+=Float32Array['BYTES_PER_ELEMENT'];let _0x48d4c2=_0x16200c[_0x2aab36(0xdd)](_0x55c01f,!![]);_0x55c01f+=Uint32Array[_0x2aab36(0xd9)];let _0x13d8d6={};while(_0x48d4c2--){_0x16200c=new DataView(_0x50c2e);let _0x4c3ede=parseString$1(_0x50c2e,_0x16200c,_0x55c01f),_0x5c59e3=_0x4c3ede['string'],_0x1b2517=_0x13d8d6[_0x5c59e3]={'groupNode':undefined,'geoPackage':{},'texturePackage':{},'materials':{},'rootBatchIdMap':_0x566c88,'ancestorMap':_0x466b0a};_0x55c01f=_0x4c3ede[_0x2aab36(0xe1)];let _0x53a446=_0x16200c[_0x2aab36(0xdd)](_0x55c01f,!![]);_0x55c01f+=Uint32Array['BYTES_PER_ELEMENT'];let _0x2582db=[];for(let _0x1e27a1=0x0;_0x1e27a1<_0x53a446;_0x1e27a1++){let _0x40ab1f={},_0x310b03=_0x16200c['getFloat32'](_0x55c01f,!![]);_0x55c01f+=Float32Array[_0x2aab36(0xd9)];let _0x38e5df=_0x16200c[_0x2aab36(0x117)](_0x55c01f,!![]);_0x55c01f+=Uint16Array[_0x2aab36(0xd9)],_0x40ab1f[_0x2aab36(0x11d)]=_0x38e5df,_0x40ab1f['rangeList']=_0x310b03;let _0x136544={};_0x136544['x']=_0x16200c[_0x2aab36(0x12b)](_0x55c01f,!![]),_0x55c01f+=Float64Array['BYTES_PER_ELEMENT'],_0x136544['y']=_0x16200c[_0x2aab36(0x12b)](_0x55c01f,!![]),_0x55c01f+=Float64Array['BYTES_PER_ELEMENT'],_0x136544['z']=_0x16200c[_0x2aab36(0x12b)](_0x55c01f,!![]),_0x55c01f+=Float64Array[_0x2aab36(0xd9)];let _0x43a18c=_0x16200c[_0x2aab36(0x12b)](_0x55c01f,!![]);_0x55c01f+=Float64Array[_0x2aab36(0xd9)],_0x40ab1f['boundingSphere']={'center':_0x136544,'radius':_0x43a18c};let _0x170f26=parseString$1(_0x50c2e,_0x16200c,_0x55c01f),_0x297fd8=_0x170f26['string'];_0x55c01f=_0x170f26[_0x2aab36(0xe1)],_0x297fd8=_0x297fd8[_0x2aab36(0xd2)](/(\.s3mblock)|(\.s3mbz)|(\.s3mb)/gi,''),_0x297fd8=removeUnusedStringTileName(_0x297fd8),_0x40ab1f[_0x2aab36(0xe4)]=_0x297fd8,_0x2582db[_0x2aab36(0x11b)](_0x40ab1f);}let _0x50e327=_0x16200c[_0x2aab36(0x10b)](_0x55c01f,!![]);_0x55c01f+=Float32Array[_0x2aab36(0xd9)];let _0x10c64a=_0x16200c['getUint32'](_0x55c01f,!![]);_0x55c01f+=Uint32Array['BYTES_PER_ELEMENT'];let _0x3f5e4f=_0x16200c['getUint32'](_0x55c01f,!![]);_0x55c01f+=Uint32Array['BYTES_PER_ELEMENT'];let _0x4fd31c=new Uint8Array(_0x50c2e,_0x55c01f,_0x3f5e4f),_0x253593=_0x55c01f+_0x3f5e4f,_0x220d4f=_0x53a39a[_0x2aab36(0x10a)](_0x4fd31c)[_0x2aab36(0x135)];_0x16200c=new DataView(_0x220d4f),_0x55c01f=0x0;let _0x26c8bd=_0x16200c[_0x2aab36(0xdd)](_0x55c01f,!![]);_0x55c01f+=Uint32Array[_0x2aab36(0xd9)],_0x55c01f=parseGroupNode$1(_0x220d4f,_0x16200c,_0x55c01f,_0x1b2517),_0x55c01f=parseSkeleton$1(_0x220d4f,_0x16200c,_0x55c01f,_0x1b2517[_0x2aab36(0x132)]),_0x55c01f=parseTexturePackage$1(_0x220d4f,_0x16200c,_0x55c01f,_0x1b2517[_0x2aab36(0xf6)],_0x1b2517[_0x2aab36(0x132)],_0x566c88,_0x466b0a,_0x2d7209[_0x2aab36(0xd6)]),_0x55c01f=parseMaterial$1(_0x220d4f,_0x16200c,_0x55c01f,_0x1b2517),_0x55c01f=parsePickInfo$1(_0x220d4f,_0x16200c,_0x55c01f,_0x26c8bd,_0x1b2517[_0x2aab36(0x132)],_0x50e327),_0x55c01f=_0x253593;}return _0x13d8d6;};

    const _0x2560=['xOffset','compressType','update','buffer','44618uQSGJH','activeTexture','CLAMP_TO_EDGE','TEXTURE_2D','LINEAR','contextId','internalFormat','PixelFormat','createTexture','context','TEXTURE_MAX_ANISOTROPY_EXT','_gl','bindTexture','compressedTextureSizeInBytes','_textureFilterAnisotropic','229918QPMGwc','TEXTURE_WRAP_S','wrapS','UNPACK_PREMULTIPLY_ALPHA_WEBGL','pixelStorei','destroy','length','_texture','rootName','wrapT','isDestroyed','max','UNSIGNED_BYTE','UNPACK_FLIP_Y_WEBGL','deleteTexture','texParameteri','143483UVmYEa','TEXTURE_WRAP_T','textureId','defaultValue','TEXTURE0','isTexBlock','_width','3kadCbE','arrayBufferView','prototype','height','refCount','40565sZQBPD','TEXTURE_MAG_FILTER','141735GmYEbQ','width','_target','renderable','28661cKGGea','77063htPSaj','ready','texImage2D','RGBA','yOffset','TextureWrap','pixelFormat','TEXTURE_MIN_FILTER','layerId'];const _0xa90574=_0xed6f;(function(_0x23b493,_0x75a897){const _0xe2c3be=_0xed6f;while(!![]){try{const _0x47170a=-parseInt(_0xe2c3be(0xd7))+parseInt(_0xe2c3be(0xd5))+parseInt(_0xe2c3be(0xb9))+parseInt(_0xe2c3be(0xc9))+parseInt(_0xe2c3be(0xd0))*parseInt(_0xe2c3be(0xdb))+-parseInt(_0xe2c3be(0xaa))+-parseInt(_0xe2c3be(0xdc));if(_0x47170a===_0x75a897)break;else _0x23b493['push'](_0x23b493['shift']());}catch(_0x30c6e7){_0x23b493['push'](_0x23b493['shift']());}}}(_0x2560,0x39bf5));const NOCOMPRESSED_RGBA=0x1111,NOCOMPRESSED_LA=0x190a;function DDSTexture(_0x364fee,_0x4c3f9b,_0x582e33){const _0x4172e5=_0xed6f;let _0x2b7199=_0x364fee['_gl'];this[_0x4172e5(0xaf)]=_0x364fee['id'],this[_0x4172e5(0xcb)]=_0x4c3f9b,this[_0x4172e5(0xa5)]=_0x582e33[_0x4172e5(0xa5)],this[_0x4172e5(0xc1)]=_0x582e33['rootName'],this[_0x4172e5(0xb3)]=_0x364fee,this[_0x4172e5(0xd8)]=_0x582e33['width'],this[_0x4172e5(0xd3)]=_0x582e33[_0x4172e5(0xd3)],this[_0x4172e5(0xa7)]=_0x582e33[_0x4172e5(0xa7)],this[_0x4172e5(0xb0)]=_0x582e33['internalFormat'],this[_0x4172e5(0xe2)]=_0x582e33[_0x4172e5(0xe2)],this[_0x4172e5(0xd1)]=_0x582e33[_0x4172e5(0xd1)],this[_0x4172e5(0xbb)]=Cesium['defaultValue'](_0x582e33[_0x4172e5(0xbb)],Cesium[_0x4172e5(0xe1)][_0x4172e5(0xac)]),this[_0x4172e5(0xc2)]=Cesium[_0x4172e5(0xcc)](_0x582e33[_0x4172e5(0xc2)],Cesium['TextureWrap'][_0x4172e5(0xac)]),this[_0x4172e5(0xd9)]=_0x2b7199[_0x4172e5(0xad)],this['_texture']=undefined,this[_0x4172e5(0xd4)]=0x1,this[_0x4172e5(0xdd)]=!_0x582e33[_0x4172e5(0xce)],this[_0x4172e5(0xda)]=!_0x582e33[_0x4172e5(0xce)],this[_0x4172e5(0xce)]=_0x582e33[_0x4172e5(0xce)],this[_0x4172e5(0xd1)]&&this['init']();}function _0xed6f(_0x15b683,_0x5469f9){_0x15b683=_0x15b683-0xa4;let _0x256016=_0x2560[_0x15b683];return _0x256016;}DDSTexture['prototype']['init']=function(){const _0x5344dc=_0xed6f;let _0x412916=this[_0x5344dc(0xb3)][_0x5344dc(0xb5)];!this[_0x5344dc(0xc0)]&&(this[_0x5344dc(0xc0)]=_0x412916[_0x5344dc(0xb2)]());_0x412916[_0x5344dc(0xb6)](_0x412916['TEXTURE_2D'],this[_0x5344dc(0xc0)]);let _0x27b7af=this[_0x5344dc(0xb0)];(_0x27b7af===NOCOMPRESSED_LA||_0x27b7af===NOCOMPRESSED_RGBA)&&_0x412916[_0x5344dc(0xbd)](_0x412916[_0x5344dc(0xc6)],!![]);let _0x308505=0x0;if(this[_0x5344dc(0xd1)]){let _0x5aed93=0x0,_0x58b6fa=this['width'],_0x3a9062=this['height'],_0x151c52=validateMipmap(this[_0x5344dc(0xd1)],_0x27b7af,_0x58b6fa,_0x3a9062);do{let _0x36cd3f=Cesium[_0x5344dc(0xb1)][_0x5344dc(0xb7)](_0x27b7af,_0x58b6fa,_0x3a9062),_0x43c1ab=new Uint8Array(this[_0x5344dc(0xd1)][_0x5344dc(0xa9)],this[_0x5344dc(0xd1)]['byteOffset']+_0x5aed93,_0x36cd3f);_0x27b7af===NOCOMPRESSED_RGBA?_0x412916[_0x5344dc(0xde)](_0x412916['TEXTURE_2D'],_0x308505++,_0x412916[_0x5344dc(0xdf)],_0x58b6fa,_0x3a9062,0x0,_0x412916[_0x5344dc(0xdf)],_0x412916[_0x5344dc(0xc5)],_0x43c1ab):_0x412916['compressedTexImage2D'](_0x412916[_0x5344dc(0xad)],_0x308505++,_0x27b7af,_0x58b6fa,_0x3a9062,0x0,_0x43c1ab),_0x58b6fa=Math[_0x5344dc(0xc4)](_0x58b6fa>>0x1,0x1),_0x3a9062=Math['max'](_0x3a9062>>0x1,0x1),_0x5aed93+=_0x36cd3f;}while(_0x5aed93<this[_0x5344dc(0xd1)]['byteLength']&&_0x151c52);}else {let _0x251fda=Cesium[_0x5344dc(0xb1)]['compressedTextureSizeInBytes'](_0x27b7af,this['width'],this[_0x5344dc(0xd3)]);_0x27b7af===NOCOMPRESSED_RGBA?_0x412916['texImage2D'](_0x412916[_0x5344dc(0xad)],0x0,_0x412916[_0x5344dc(0xdf)],this[_0x5344dc(0xcf)],this[_0x5344dc(0xd3)],0x0,_0x412916[_0x5344dc(0xdf)],_0x412916[_0x5344dc(0xc5)],new Uint8Array(this[_0x5344dc(0xd8)]*this[_0x5344dc(0xd3)]*0x4)):_0x412916['compressedTexImage2D'](_0x412916[_0x5344dc(0xad)],0x0,_0x27b7af,this[_0x5344dc(0xd8)],this[_0x5344dc(0xd3)],0x0,new Uint8Array(_0x251fda));}_0x308505>0x1?(_0x412916['texParameteri'](_0x412916[_0x5344dc(0xad)],_0x412916[_0x5344dc(0xd6)],_0x412916['LINEAR']),_0x412916[_0x5344dc(0xc8)](_0x412916[_0x5344dc(0xad)],_0x412916[_0x5344dc(0xa4)],_0x412916['LINEAR_MIPMAP_LINEAR'])):(_0x412916[_0x5344dc(0xc8)](_0x412916[_0x5344dc(0xad)],_0x412916[_0x5344dc(0xd6)],_0x412916['LINEAR']),_0x412916[_0x5344dc(0xc8)](_0x412916[_0x5344dc(0xad)],_0x412916[_0x5344dc(0xa4)],_0x412916[_0x5344dc(0xae)])),_0x412916[_0x5344dc(0xc8)](_0x412916[_0x5344dc(0xad)],_0x412916[_0x5344dc(0xba)],this[_0x5344dc(0xbb)]),_0x412916[_0x5344dc(0xc8)](_0x412916[_0x5344dc(0xad)],_0x412916[_0x5344dc(0xca)],this[_0x5344dc(0xc2)]),_0x412916[_0x5344dc(0xc8)](this[_0x5344dc(0xd9)],this[_0x5344dc(0xb3)][_0x5344dc(0xb8)][_0x5344dc(0xb4)],0x1),_0x412916[_0x5344dc(0xb6)](_0x412916['TEXTURE_2D'],null),this['arrayBufferView']=undefined,this[_0x5344dc(0xdd)]=!![];};function validateMipmap(_0x2c1cae,_0x4bff18,_0x45d1c6,_0x46c2c7){const _0x518e57=_0xed6f;let _0x367ea0=_0x2c1cae[_0x518e57(0xbf)],_0xb71376=_0x45d1c6,_0xf74762=_0x46c2c7,_0x4ae07c=0x0;while(0x1){let _0x261682=Cesium[_0x518e57(0xb1)][_0x518e57(0xb7)](_0x4bff18,_0xb71376,_0xf74762);_0x4ae07c+=_0x261682,_0xb71376=_0xb71376>>0x1,_0xf74762=_0xf74762>>0x1;if(_0xb71376===0x0&&_0xf74762===0x0)break;_0xb71376=Math[_0x518e57(0xc4)](_0xb71376,0x1),_0xf74762=Math[_0x518e57(0xc4)](_0xf74762,0x1);}return _0x4ae07c===_0x367ea0;}DDSTexture[_0xa90574(0xd2)]['copyFrom']=function(_0x117a8e){const _0x2dbfc8=_0xa90574;let _0x4f7f03=this[_0x2dbfc8(0xb3)]['_gl'],_0x2cf13b=this[_0x2dbfc8(0xd9)];_0x4f7f03[_0x2dbfc8(0xab)](_0x4f7f03[_0x2dbfc8(0xcd)]),_0x4f7f03['bindTexture'](_0x2cf13b,this[_0x2dbfc8(0xc0)]);let _0xd2fba4=_0x117a8e[_0x2dbfc8(0xa6)],_0x32e7e8=_0x117a8e[_0x2dbfc8(0xe0)],_0x39dc9c=_0x117a8e['width'],_0x101d28=_0x117a8e[_0x2dbfc8(0xd3)],_0x12f2c5=_0x117a8e['arrayBufferView'],_0x184b3e=this['internalFormat'],_0x55d915=_0x4f7f03[_0x2dbfc8(0xc5)];_0x4f7f03[_0x2dbfc8(0xbd)](_0x4f7f03[_0x2dbfc8(0xbc)],![]),_0x4f7f03[_0x2dbfc8(0xbd)](_0x4f7f03['UNPACK_FLIP_Y_WEBGL'],![]),_0x4f7f03['compressedTexSubImage2D'](_0x2cf13b,0x0,_0xd2fba4,_0x32e7e8,_0x39dc9c,_0x101d28,_0x184b3e,_0x12f2c5),_0x4f7f03[_0x2dbfc8(0xb6)](_0x2cf13b,null);},DDSTexture[_0xa90574(0xd2)][_0xa90574(0xa8)]=function(_0x488e54){const _0x22d681=_0xa90574;this[_0x22d681(0xb3)]=_0x488e54['context'],this[_0x22d681(0xaf)]=_0x488e54[_0x22d681(0xb3)]['id'],this[_0x22d681(0xa5)]=_0x488e54[_0x22d681(0xa5)],this[_0x22d681(0xc1)]=_0x488e54[_0x22d681(0xc1)],this[_0x22d681(0xcb)]=_0x488e54[_0x22d681(0xcb)],this[_0x22d681(0xd8)]=_0x488e54[_0x22d681(0xd8)],this[_0x22d681(0xd3)]=_0x488e54[_0x22d681(0xd3)],this[_0x22d681(0xb0)]=_0x488e54[_0x22d681(0xb0)],this[_0x22d681(0xd1)]=_0x488e54[_0x22d681(0xd1)],this[_0x22d681(0xd4)]=0x1,this[_0x22d681(0xdd)]=![],this['renderable']=![],defined(this['arrayBufferView'])&&this['init']();},DDSTexture[_0xa90574(0xd2)][_0xa90574(0xc3)]=function(){return ![];},DDSTexture[_0xa90574(0xd2)][_0xa90574(0xbe)]=function(){const _0x1614f2=_0xa90574;let _0x520232=this[_0x1614f2(0xb3)][_0x1614f2(0xb5)];_0x520232[_0x1614f2(0xc7)](this[_0x1614f2(0xc0)]),this[_0x1614f2(0xc0)]=null,this['id']=0x0,Cesium['destroyObject'](this);};

    const _0x1265=['1BELdwC','29afoVzb','23428heKEYI','diffuseColor','5TPOgsF','161233wCyshq','destroyObject','prototype','length','17073eiRFif','destroy','bTransparentSorting','45228fHUXyC','ambientColor','110184OuxYHI','textures','shininess','specularColor','192047LLSboS','Color','isDestroyed','6297EeTwla'];function _0x4e16(_0x5d4738,_0x405688){_0x5d4738=_0x5d4738-0x18f;let _0x1265e7=_0x1265[_0x5d4738];return _0x1265e7;}const _0x1e5c29=_0x4e16;(function(_0x43700a,_0x2ca194){const _0x488b66=_0x4e16;while(!![]){try{const _0x2c26c3=-parseInt(_0x488b66(0x194))*-parseInt(_0x488b66(0x18f))+parseInt(_0x488b66(0x1a0))*-parseInt(_0x488b66(0x1a2))+-parseInt(_0x488b66(0x1a3))*-parseInt(_0x488b66(0x1a1))+parseInt(_0x488b66(0x19d))+parseInt(_0x488b66(0x190))+-parseInt(_0x488b66(0x197))+-parseInt(_0x488b66(0x199));if(_0x2c26c3===_0x2ca194)break;else _0x43700a['push'](_0x43700a['shift']());}catch(_0x5646d1){_0x43700a['push'](_0x43700a['shift']());}}}(_0x1265,0x1e490));function MaterialPass(){const _0x205f18=_0x4e16;this['ambientColor']=new Cesium[(_0x205f18(0x19e))](),this[_0x205f18(0x1a4)]=new Cesium[(_0x205f18(0x19e))](),this['specularColor']=new Cesium[(_0x205f18(0x19e))](0x0,0x0,0x0,0x0),this[_0x205f18(0x19b)]=0x32,this[_0x205f18(0x196)]=![],this[_0x205f18(0x19a)]=[];}MaterialPass['prototype'][_0x1e5c29(0x19f)]=function(){return ![];},MaterialPass[_0x1e5c29(0x192)]['destroy']=function(){const _0x3f9e8c=_0x1e5c29;let _0x49a159=this[_0x3f9e8c(0x19a)][_0x3f9e8c(0x193)];for(let _0x58f779=0x0;_0x58f779<_0x49a159;_0x58f779++){let _0x4057ed=this[_0x3f9e8c(0x19a)][_0x58f779];_0x4057ed[_0x3f9e8c(0x195)]();}return this['textures'][_0x3f9e8c(0x193)]=0x0,this[_0x3f9e8c(0x198)]=undefined,this['diffuseColor']=undefined,this[_0x3f9e8c(0x19c)]=undefined,Cesium[_0x3f9e8c(0x191)](this);};

    var _0x2ab0=['570058PCvaPS','\x0a\x20\x20\x20\x20attribute\x20vec4\x20aPosition;\x0a\x20\x20\x20\x20attribute\x20vec4\x20aColor;\x0a\x20\x20\x20\x20attribute\x20vec3\x20aNormal;\x0a#ifdef\x20TexCoord\x0a\x20\x20\x20\x20attribute\x20vec4\x20aTexCoord0;\x0a\x20\x20\x20\x20uniform\x20float\x20uTexture0Width;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexCoord;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexMatrix;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexCoordTransform;\x0a#endif\x0a#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20varying\x20float\x20wValue;\x20\x20\x20\x20\x0a#endif\x0a#ifdef\x20FLATTEN\x0a\x20\x20\x20\x20uniform\x20mat4\x20uGeoMatrix;\x0a\x20\x20\x20\x20uniform\x20mat4\x20uInverseGeoMatrix;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uFlattenTexture;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uFlattenRect;\x0a#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20uniform\x20vec4\x20uSelectedColor;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20varying\x20vec4\x20vSecondColor;\x0a\x20\x20\x20\x20varying\x20vec4\x20vPositionMC;\x0a\x20\x20\x20\x20varying\x20vec3\x20vPositionEC;\x0a#ifdef\x20VertexColor\x0a\x20\x20\x20\x20varying\x20vec4\x20vColor;\x0a#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20const\x20float\x20SHIFT_LEFT8\x20=\x20256.0;\x0a\x20\x20\x20\x20const\x20float\x20SHIFT_RIGHT8\x20=\x201.0\x20/\x20256.0;\x0a\x20\x20\x20\x20const\x20float\x20SHIFT_RIGHT4\x20=\x201.0\x20/\x2016.0;\x0a\x20\x20\x20\x20const\x20float\x20SHIFT_LEFT4\x20=\x2016.0;\x0a\x20\x20\x20\x20void\x20getTextureMatrixFromZValue(in\x20float\x20nZ,\x20inout\x20float\x20XTran,\x20inout\x20float\x20YTran,\x20inout\x20float\x20scale)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(nZ\x20<=\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20nDel8\x20=\x20floor(nZ\x20*\x20SHIFT_RIGHT8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20nDel16\x20=\x20floor(nDel8\x20*\x20SHIFT_RIGHT8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20nDel20\x20=\x20floor(nDel16\x20*\x20SHIFT_RIGHT4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20YTran\x20=\x20nZ\x20-\x20nDel8\x20*\x20SHIFT_LEFT8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20XTran\x20=\x20nDel8\x20-\x20nDel16\x20*\x20SHIFT_LEFT8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20nLevel\x20=\x20nDel16\x20-\x20nDel20\x20*\x20SHIFT_LEFT4;\x0a\x20\x20\x20\x20\x20\x20\x20\x20scale\x20=\x201.0\x20/\x20pow(2.0,\x20nLevel);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a#ifdef\x20FLATTEN\x0a\x20\x20\x20\x20float\x20unpackValue(vec4\x20packedValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20SHIFT_LEFT16\x20=\x2065536.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20SHIFT_LEFT8\x20=\x20256.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20value\x20=\x20packedValue\x20*\x20255.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20value.r\x20*\x20SHIFT_LEFT16\x20+\x20value.g\x20*\x20SHIFT_LEFT8\x20+\x20value.b\x20-\x209000.0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20vec4\x20calculateHeight(vec4\x20vertexPos)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20vecPos\x20=\x20uGeoMatrix\x20*\x20vec4(vertexPos.xyz,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20vecRatio\x20=\x20vec2(uFlattenRect.z\x20-\x20uFlattenRect.x,\x20uFlattenRect.w\x20-\x20uFlattenRect.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20vecTexCoord\x20=\x20vec2(vecPos.x\x20-\x20uFlattenRect.x,\x20vecPos.y\x20-\x20uFlattenRect.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vecTexCoord.x\x20=\x20vecTexCoord.x\x20/\x20vecRatio.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vecTexCoord.y\x20=\x20vecTexCoord.y\x20/\x20vecRatio.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vecTexCoord.x\x20>\x201.0\x20||\x20vecTexCoord.x\x20<\x200.0\x20||\x20vecTexCoord.y\x20>\x201.0\x20||\x20vecTexCoord.y\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vertexPos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fHeight\x20=\x20unpackValue(texture2D(uFlattenTexture,\x20vecTexCoord.xy));\x0a\x20\x20\x20\x20\x20\x20\x20\x20fHeight\x20=\x20fHeight;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vecPos.z\x20>\x20fHeight)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vecPos.z\x20=\x20fHeight;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vecPos.w\x20=\x20vecPos.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20uInverseGeoMatrix\x20*\x20vec4(vecPos.xyz,\x201.0);\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x20\x20\x20\x20void\x20main()\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20#ifdef\x20TexCoord\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexCoord.xy\x20=\x20aTexCoord0.xy;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix\x20=\x20vec4(0.0,0.0,1.0,0.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexCoordTransform.x\x20=\x20aTexCoord0.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vTexCoordTransform.x\x20<\x20-90000.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix.z\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20getTextureMatrixFromZValue(floor(vTexCoordTransform.x),\x20vTexMatrix.x,\x20vTexMatrix.y,\x20vTexMatrix.z);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix.w\x20=\x20log2(uTexture0Width\x20*\x20vTexMatrix.z);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20vec4\x20vertexPos\x20=\x20aPosition;\x0a#ifdef\x20FLATTEN\x0a\x20\x20\x20\x20vertexPos\x20=\x20calculateHeight(vertexPos);\x0a#endif\x0a\x0a\x20\x20\x20\x20#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20\x20\x20\x20\x20wValue\x20=\x20vertexPos.w;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20positionMC\x20=\x20vec4(vertexPos.xyz,\x201.0);\x0a#ifdef\x20VertexColor\x0a\x20\x20\x20\x20\x20\x20\x20\x20vColor\x20=\x20aColor;\x0a#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vPositionMC\x20=\x20positionMC;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vPositionEC\x20=\x20(czm_modelView\x20*\x20positionMC).xyz;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20czm_modelViewProjection\x20*\x20vec4(vertexPos.xyz,\x201.0);\x0a\x20\x20\x20\x20}\x0a','6254pEHOhq','1355bDtMfn','23uUgOGK','300935SDPZML','140722WseYvX','227WMYkOS','447599tPLhSp','4314hyyJOp','166RZzTMN'];var _0x45a775=_0x2f73;(function(_0x4b0902,_0x460f6c){var _0xc896a7=_0x2f73;while(!![]){try{var _0xe425a8=parseInt(_0xc896a7(0x17e))*-parseInt(_0xc896a7(0x17c))+parseInt(_0xc896a7(0x17a))+-parseInt(_0xc896a7(0x17f))+-parseInt(_0xc896a7(0x182))+-parseInt(_0xc896a7(0x179))*parseInt(_0xc896a7(0x17d))+-parseInt(_0xc896a7(0x180))+-parseInt(_0xc896a7(0x181))*-parseInt(_0xc896a7(0x178));if(_0xe425a8===_0x460f6c)break;else _0x4b0902['push'](_0x4b0902['shift']());}catch(_0x36da8d){_0x4b0902['push'](_0x4b0902['shift']());}}}(_0x2ab0,0x471ec));function _0x2f73(_0x2b3b61,_0x9ae343){_0x2b3b61=_0x2b3b61-0x178;var _0x2ab0fd=_0x2ab0[_0x2b3b61];return _0x2ab0fd;}var _0x20fcfa = _0x45a775(0x17b);

    var _0x4d30=['14lfXGoW','29533ZxlsaJ','529387dcwdnd','\x0a#ifdef\x20GL_OES_standard_derivatives\x0a#extension\x20GL_OES_standard_derivatives\x20:\x20enable\x0a#endif\x0a#ifdef\x20GL_EXT_shader_texture_lod\x0a#extension\x20GL_EXT_shader_texture_lod\x20:\x20enable\x0a#endif\x0a\x20\x20\x20\x20uniform\x20vec4\x20uDiffuseColor;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uAmbientColor;\x0a#ifdef\x20TexCoord\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uTexture;\x0a\x20\x20\x20\x20uniform\x20float\x20uTexture0Width;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexCoord;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexCoordTransform;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexMatrix;\x0a#endif\x0a#ifdef\x20VertexColor\x0a\x20\x20\x20\x20varying\x20vec4\x20vColor;\x0a#endif\x0a\x20\x20\x20\x20varying\x20vec4\x20vSecondColor;\x0a\x20\x20\x20\x20varying\x20vec4\x20vPositionMC;\x0a\x20\x20\x20\x20varying\x20vec3\x20vPositionEC;\x0a\x20\x20\x20\x20void\x20calculateMipLevel(in\x20vec2\x20inTexCoord,\x20in\x20float\x20vecTile,\x20in\x20float\x20fMaxMip,\x20inout\x20float\x20mipLevel)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20dx\x20=\x20dFdx(inTexCoord\x20*\x20vecTile);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20dy\x20=\x20dFdy(inTexCoord\x20*\x20vecTile);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dotX\x20=\x20dot(dx,\x20dx);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dotY\x20=\x20dot(dy,\x20dy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dMax\x20=\x20max(dotX,\x20dotY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dMin\x20=\x20min(dotX,\x20dotY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20offset\x20=\x20(dMax\x20-\x20dMin)\x20/\x20(dMax\x20+\x20dMin);\x0a\x20\x20\x20\x20\x20\x20\x20\x20offset\x20=\x20clamp(offset,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20d\x20=\x20dMax\x20*\x20(1.0\x20-\x20offset)\x20+\x20dMin\x20*\x20offset;\x0a\x20\x20\x20\x20\x20\x20\x20\x20mipLevel\x20=\x200.5\x20*\x20log2(d);\x0a\x20\x20\x20\x20\x20\x20\x20\x20mipLevel\x20=\x20clamp(mipLevel,\x200.0,\x20fMaxMip\x20-\x201.62);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20void\x20calculateMipLevel(in\x20vec2\x20inTexCoord,\x20in\x20vec2\x20vecTile,\x20in\x20float\x20fMaxMip,\x20inout\x20float\x20mipLevel)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20dx\x20=\x20dFdx(inTexCoord\x20*\x20vecTile.x);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20dy\x20=\x20dFdy(inTexCoord\x20*\x20vecTile.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dotX\x20=\x20dot(dx,\x20dx);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dotY\x20=\x20dot(dy,\x20dy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dMax\x20=\x20max(dotX,\x20dotY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dMin\x20=\x20min(dotX,\x20dotY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20offset\x20=\x20(dMax\x20-\x20dMin)\x20/\x20(dMax\x20+\x20dMin);\x0a\x20\x20\x20\x20\x20\x20\x20\x20offset\x20=\x20clamp(offset,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20d\x20=\x20dMax\x20*\x20(1.0\x20-\x20offset)\x20+\x20dMin\x20*\x20offset;\x0a\x20\x20\x20\x20\x20\x20\x20\x20mipLevel\x20=\x200.5\x20*\x20log2(d);\x0a\x20\x20\x20\x20\x20\x20\x20\x20mipLevel\x20=\x20clamp(mipLevel,\x200.0,\x20fMaxMip\x20-\x201.62);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20void\x20calculateTexCoord(in\x20vec3\x20inTexCoord,\x20in\x20float\x20scale,\x20in\x20float\x20XTran,\x20in\x20float\x20YTran,\x20in\x20float\x20fTile,\x20in\x20float\x20mipLevel,\x20inout\x20vec2\x20outTexCoord)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(inTexCoord.z\x20<\x20-9000.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outTexCoord\x20=\x20inTexCoord.xy;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20fTexCoord\x20=\x20fract(inTexCoord.xy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20offset\x20=\x201.0\x20*\x20pow(2.0,\x20mipLevel)\x20/\x20fTile;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fTexCoord\x20=\x20clamp(fTexCoord,\x20offset,\x201.0\x20-\x20offset);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outTexCoord.x\x20=\x20(fTexCoord.x\x20+\x20XTran)\x20*\x20scale;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outTexCoord.y\x20=\x20(fTexCoord.y\x20+\x20YTran)\x20*\x20scale;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec4\x20getTexColorForS3M(sampler2D\x20curTexture,\x20vec3\x20oriTexCoord,\x20float\x20texTileWidth,\x20float\x20fMaxMipLev,\x20float\x20fTexCoordScale,\x20vec2\x20vecTexCoordTranslate)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20color\x20=\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20mipLevel\x20=\x200.0;\x0a\x20\x20\x20\x20#ifdef\x20GL_OES_standard_derivatives\x0a\x20\x20\x20\x20\x20\x20\x20\x20calculateMipLevel(oriTexCoord.xy,\x20texTileWidth,\x20fMaxMipLev,\x20mipLevel);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20realTexCoord;\x0a\x20\x20\x20\x20\x20\x20\x20\x20calculateTexCoord(oriTexCoord,\x20fTexCoordScale,\x20vecTexCoordTranslate.x,\x20vecTexCoordTranslate.y,\x20texTileWidth,\x20mipLevel,\x20realTexCoord);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(oriTexCoord.z\x20<\x20-9000.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color\x20=\x20texture2D(curTexture,\x20realTexCoord.xy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#ifdef\x20GL_EXT_shader_texture_lod\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color\x20=\x20texture2DLodEXT(curTexture,\x20realTexCoord.xy,\x20mipLevel);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color\x20=\x20texture2D(curTexture,\x20realTexCoord.xy,\x20mipLevel);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20color;\x0a\x20\x20\x20\x20}\x0a#ifdef\x20TexCoord\x0a\x20\x20\x20\x20vec4\x20getTextureColor()\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vTexMatrix.z\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20texTileWidth0\x20=\x20vTexMatrix.z\x20*\x20uTexture0Width;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20realTexCoord\x20=\x20vec3(vTexCoord.xy,\x20vTexCoordTransform.x);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20FColor\x20=\x20getTexColorForS3M(uTexture,\x20realTexCoord,\x20texTileWidth0,\x20vTexMatrix.w,\x20vTexMatrix.z,\x20vTexMatrix.xy);\x0a\x20\x20\x20\x20#ifdef\x20TexCoord2\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20texTileWidth1\x20=\x20vTexMatrix2.z\x20*\x20uTexture1Width;\x0a\x20\x20\x20\x20\x20\x20\x20\x20realTexCoord\x20=\x20vec3(vTexCoord.zw,\x20vTexCoordTransform.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20SColor\x20=\x20getTexColorForS3M(uTexture2,\x20realTexCoord,\x20texTileWidth1,\x20vTexMatrix2.w,\x20vTexMatrix2.z,\x20vTexMatrix2.xy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20SColor.r\x20=\x20clamp(SColor.r,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20SColor.g\x20=\x20clamp(SColor.g,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20SColor.b\x20=\x20clamp(SColor.b,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20FColor\x20*\x20SColor;\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20FColor;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x20\x20\x20\x20\x0a#ifdef\x20CLIP\x0a\x20\x20\x20\x20uniform\x20float\x20uClipMode;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uClipPlanes[6];\x0a\x20\x20\x20\x20float\x20getClipDistance(vec3\x20pos,\x20vec3\x20planeNormal,\x20float\x20disToOrigin)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20dot(planeNormal,\x20pos)\x20+\x20disToOrigin;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20float\x20clipBehindAllPlane(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x20-1.0;\x0a\x20\x20\x20\x20#ifdef\x20CLIPPLANE\x0a\x20\x20\x20\x20\x20\x20\x20\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[0].xyz,\x20uClipPlanes[0].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if\x20(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20float\x20clipBehindAnyPlane(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if((distance\x20+\x20fBorderWidth)\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20float\x20clipAnythingButLine(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20vec4\x20clip(vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(uClipMode\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#ifdef\x20GL_OES_standard_derivatives\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dxc\x20=\x20abs(dFdx(vertex.x));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dyc\x20=\x20abs(dFdy(vertex.y));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fBorderWidth\x20=\x20max(dxc,\x20dyc);\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fBorderWidth\x20=\x201.0;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20clipResult\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(uClipMode\x20<\x201.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipBehindAnyPlane(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(uClipMode\x20<\x202.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipBehindAllPlane(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(uClipMode\x20<\x203.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipAnythingButLine(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(clipResult\x20<\x20-0.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(clipResult\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x0a#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uHypsometricTexture;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uMinMaxValue;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uOpacityIntervalFillMode;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uHypLineColor;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uNoValueColor;\x0a\x20\x20\x20\x20varying\x20float\x20wValue;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20float\x20computeMixCon(float\x20fValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20distanceToContour;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20minVisibleValue\x20=\x20uMinMaxValue.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20maxVisibleValue\x20=\x20uMinMaxValue.w;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20interval\x20=\x20uOpacityIntervalFillMode.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(abs(maxVisibleValue\x20-\x20minVisibleValue)\x20>\x200.1)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(fValue\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distanceToContour\x20=\x20mod(fValue\x20-\x200.0002,\x20interval);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20t\x20=\x20floor(fValue\x20/\x20interval);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distanceToContour\x20=\x20abs(fValue\x20-\x20(t\x20*\x20interval)\x20-\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distanceToContour\x20=\x20abs(fValue\x20-\x20maxVisibleValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dxc\x20=\x20abs(dFdx(fValue));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dyc\x20=\x20abs(dFdy(fValue));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dF\x20=\x20max(dxc,\x20dyc);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20distanceToContour\x20<\x20dF\x20?\x201.0\x20:\x200.0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec4\x20computeContourMapColor(float\x20fValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20floorValue\x20=\x20uMinMaxValue.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20ceilValue\x20=\x20uMinMaxValue.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20threshold\x20=\x20abs(ceilValue\x20-\x20floorValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20contourRate\x20=\x20(fValue\x20-\x20floorValue)\x20/\x20threshold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20finalCoord\x20=\x20clamp(contourRate,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20count\x20=\x20floor(finalCoord\x20*\x2016.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20y\x20=\x20(count*2.0\x20+\x201.0)/32.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20x\x20=\x20fract(finalCoord*16.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(y\x20>\x201.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20x\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20contourCoord\x20=\x20vec2(x,\x20y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20texture2D(uHypsometricTexture,\x20contourCoord);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec4\x20getContourMapColor(vec4\x20oriColor,\x20float\x20fValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20contourMapColor\x20=\x20vec4(0.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20finalOpacity\x20=\x20uOpacityIntervalFillMode.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20minVisibleValue\x20=\x20uMinMaxValue.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20maxVisibleValue\x20=\x20uMinMaxValue.w;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fillMode\x20=\x20uOpacityIntervalFillMode.z;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(fValue\x20>\x20maxVisibleValue\x20+\x204.0\x20||\x20fValue\x20<\x20minVisibleValue\x20-\x204.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20uNoValueColor\x20*\x20oriColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(fillMode\x20>\x202.9)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20mix_con\x20=\x20computeMixCon(fValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20contourMapColor\x20=\x20mix(computeContourMapColor(fValue),\x20uHypLineColor,\x20mix_con);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(fillMode\x20>\x201.9)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20finalOpacity\x20=\x20computeMixCon(fValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20contourMapColor\x20=\x20uHypLineColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(fillMode\x20>\x200.9)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20contourMapColor\x20=\x20computeContourMapColor(fValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20finalOpacity\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20finalColor\x20=\x20mix(oriColor,\x20contourMapColor,\x20finalOpacity);\x0a\x20\x20\x20\x20#ifdef\x20PT_CLOUD\x0a\x20\x20\x20\x20\x20\x20\x20\x20finalColor\x20=\x20mix(vec4(1.0,1.0,1.0,1.0),\x20contourMapColor,\x20finalOpacity);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20finalColor;\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x20\x20\x0a#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20uniform\x20vec4\x20uSwipeRegion;\x0a\x20\x20\x20\x20void\x20rollerShutter(vec2\x20coord,\x20vec4\x20region)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20f\x20=\x20step(region.xw,\x20coord);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20s\x20=\x20step(coord,\x20region.zy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(f.x\x20*\x20f.y\x20*\x20s.x\x20*\x20s.y\x20<\x201.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20void\x20main()\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20\x20\x20\x20\x20rollerShutter(gl_FragCoord.xy,\x20uSwipeRegion);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20vec4\x20baseColorWithAlpha\x20=\x20vec4(1.0);\x0a\x20\x20\x20\x20#ifdef\x20VertexColor\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20baseColorWithAlpha\x20=\x20vColor;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20#ifdef\x20TexCoord\x0a\x20\x20\x20\x20\x20\x20\x20\x20baseColorWithAlpha\x20*=\x20getTextureColor();\x0a\x20\x20\x20\x20#endif\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20outColor\x20=\x20baseColorWithAlpha;\x0a\x20\x20\x20\x20#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20\x20\x20\x20\x20outColor\x20=\x20getContourMapColor(outColor,\x20wValue);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20#ifdef\x20CLIP\x0a\x20\x20\x20\x20\x20\x20\x20\x20outColor\x20*=\x20clip(vec4(vPositionEC,\x201.0));\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20outColor;\x0a\x20\x20\x20\x20}\x0a','748847XsWEKx','270252Fnqqpg','11ioMTcW','1WdGAyz','730130TGGZix','12323EiVntM','110771XzWUeh'];var _0x3796d3=_0x4e3b;(function(_0x57b0a4,_0x4bcb06){var _0x2b970b=_0x4e3b;while(!![]){try{var _0x5d4418=-parseInt(_0x2b970b(0x1b8))*-parseInt(_0x2b970b(0x1b4))+-parseInt(_0x2b970b(0x1b9))*-parseInt(_0x2b970b(0x1b7))+parseInt(_0x2b970b(0x1bb))+-parseInt(_0x2b970b(0x1b2))+-parseInt(_0x2b970b(0x1b6))+parseInt(_0x2b970b(0x1b5))*parseInt(_0x2b970b(0x1ba))+parseInt(_0x2b970b(0x1b3));if(_0x5d4418===_0x4bcb06)break;else _0x57b0a4['push'](_0x57b0a4['shift']());}catch(_0x47130b){_0x57b0a4['push'](_0x57b0a4['shift']());}}}(_0x4d30,0xb4f4e));function _0x4e3b(_0x165130,_0x5d9176){_0x165130=_0x165130-0x1b2;var _0x4d307b=_0x4d30[_0x165130];return _0x4d307b;}var _0x1ab936 = _0x3796d3(0x1bc);

    const _0x1aac=['vertexPackage','vertexBuffer','createVertexBuffer','instance\x20buffer\x20is\x20null','index','Buffer','vertexAttributes','541439GbgDlY','7692bwlOtZ','2tldjpL','model','101814QiTnvx','1685933gKYeam','24jrNATP','1rbtqld','instanceBuffer','90962OfBaMr','instanceDivisor','prototype','BufferUsage','defined','set','125363iHNodk','typedArray','479433OHXGeW','instanceIndex','DeveloperError','6DAqlXN','context'];const _0x2f825d=_0x2ac7;function _0x2ac7(_0x469f37,_0x475612){_0x469f37=_0x469f37-0x70;let _0x1aac45=_0x1aac[_0x469f37];return _0x1aac45;}(function(_0x3b177a,_0x1eadae){const _0x5a8833=_0x2ac7;while(!![]){try{const _0xff0829=parseInt(_0x5a8833(0x88))*-parseInt(_0x5a8833(0x86))+parseInt(_0x5a8833(0x75))+parseInt(_0x5a8833(0x73))+parseInt(_0x5a8833(0x81))*parseInt(_0x5a8833(0x83))+parseInt(_0x5a8833(0x8a))+-parseInt(_0x5a8833(0x78))*-parseInt(_0x5a8833(0x85))+parseInt(_0x5a8833(0x87))*parseInt(_0x5a8833(0x82));if(_0xff0829===_0x1eadae)break;else _0x3b177a['push'](_0x3b177a['shift']());}catch(_0x4ed73a){_0x3b177a['push'](_0x3b177a['shift']());}}}(_0x1aac,0xd8d83));function S3MCreateVertexJob(){const _0x48cb79=_0x2ac7;this[_0x48cb79(0x79)]=undefined,this[_0x48cb79(0x84)]=undefined,this[_0x48cb79(0x7e)]=undefined;}S3MCreateVertexJob[_0x2f825d(0x8c)][_0x2f825d(0x72)]=function(_0x4e8ed6,_0x187cc9,_0x3b2af4){const _0x13b4e5=_0x2f825d;this[_0x13b4e5(0x79)]=_0x4e8ed6,this[_0x13b4e5(0x84)]=_0x187cc9,this[_0x13b4e5(0x7e)]=_0x3b2af4;},S3MCreateVertexJob[_0x2f825d(0x8c)]['execute']=function(){const _0x4ed850=_0x2f825d;let _0x272849=this[_0x4ed850(0x79)],_0x1d14d1=this[_0x4ed850(0x7e)],_0x36cfd9=this[_0x4ed850(0x84)][_0x4ed850(0x7a)],_0x1f0fa2=_0x36cfd9[_0x4ed850(0x80)][_0x1d14d1];if(!Cesium[_0x4ed850(0x71)](_0x1f0fa2))throw new Cesium[(_0x4ed850(0x77))]('attribute\x20is\x20null');if(_0x36cfd9[_0x4ed850(0x76)]!==-0x1&&!Cesium[_0x4ed850(0x71)](this[_0x4ed850(0x84)][_0x4ed850(0x89)])){if(!Cesium['defined'](_0x36cfd9[_0x4ed850(0x89)]))throw new Cesium[(_0x4ed850(0x77))](_0x4ed850(0x7d));this[_0x4ed850(0x84)][_0x4ed850(0x89)]=Cesium[_0x4ed850(0x7f)][_0x4ed850(0x7c)]({'context':_0x272849,'typedArray':_0x36cfd9[_0x4ed850(0x89)],'usage':Cesium[_0x4ed850(0x70)]['STATIC_DRAW']});}if(_0x1f0fa2[_0x4ed850(0x8b)]===0x1&&!Cesium[_0x4ed850(0x71)](_0x1f0fa2['typedArray'])){_0x1f0fa2[_0x4ed850(0x7b)]=this[_0x4ed850(0x84)][_0x4ed850(0x89)];return;}!Cesium['defined'](_0x1f0fa2[_0x4ed850(0x7b)])&&(_0x1f0fa2[_0x4ed850(0x7b)]=Cesium[_0x4ed850(0x7f)][_0x4ed850(0x7c)]({'context':_0x272849,'typedArray':_0x1f0fa2[_0x4ed850(0x74)],'usage':Cesium[_0x4ed850(0x70)]['STATIC_DRAW']}),_0x1f0fa2['typedArray']=null,delete _0x1f0fa2[_0x4ed850(0x74)]);};

    const _0x2f0c=['model','elementIndexUint','indexBuffer','52442cvuXeh','Math','index\x20package\x20is\x20null','STATIC_DRAW','index','UNSIGNED_INT','SIXTY_FOUR_KILOBYTES','202TpKjOT','arrIndexPackage','indexType','index\x20buffer\x20is\x20null','443729itjdcl','UNSIGNED_SHORT','202648NCpMar','indicesTypedArray','createIndexBuffer','context','1241IyAhDZ','1slzxXi','IndexDatatype','vertexPackage','prototype','441686KYGIJE','DeveloperError','defined','5mtaeMq','275339ffqwJW','execute','7465SoFNet'];const _0x2270d4=_0x2ca5;function _0x2ca5(_0x49c325,_0x1326cd){_0x49c325=_0x49c325-0x1c6;let _0x2f0c6b=_0x2f0c[_0x49c325];return _0x2f0c6b;}(function(_0x109e4c,_0x1f9a64){const _0x1957f0=_0x2ca5;while(!![]){try{const _0x3fa846=parseInt(_0x1957f0(0x1d4))*-parseInt(_0x1957f0(0x1cd))+parseInt(_0x1957f0(0x1e1))+-parseInt(_0x1957f0(0x1d0))+parseInt(_0x1957f0(0x1ca))+parseInt(_0x1957f0(0x1df))*parseInt(_0x1957f0(0x1c6))+-parseInt(_0x1957f0(0x1e5))*parseInt(_0x1957f0(0x1db))+-parseInt(_0x1957f0(0x1ce));if(_0x3fa846===_0x1f9a64)break;else _0x109e4c['push'](_0x109e4c['shift']());}catch(_0x14c4e6){_0x109e4c['push'](_0x109e4c['shift']());}}}(_0x2f0c,0x4760f));function S3MCreateIndexBufferJob(){const _0x52dcd9=_0x2ca5;this[_0x52dcd9(0x1d1)]=undefined,this[_0x52dcd9(0x1e4)]=undefined,this['index']=0x0;}S3MCreateIndexBufferJob[_0x2270d4(0x1c9)]['set']=function(_0x556930,_0x870daf,_0x5d6caf){const _0x1e9a98=_0x2270d4;this[_0x1e9a98(0x1d1)]=_0x870daf,this[_0x1e9a98(0x1e4)]=_0x556930,this[_0x1e9a98(0x1d8)]=_0x5d6caf;},S3MCreateIndexBufferJob['prototype'][_0x2270d4(0x1cf)]=function(){const _0x46959b=_0x2270d4;let _0x41b945=this[_0x46959b(0x1e4)],_0x3a9062=this['model'][_0x46959b(0x1dc)][this['index']],_0x4f6343=this['model'][_0x46959b(0x1c8)]['verticesCount'];if(!Cesium[_0x46959b(0x1cc)](_0x3a9062))throw new Cesium[(_0x46959b(0x1cb))](_0x46959b(0x1d6));if(Cesium[_0x46959b(0x1cc)](_0x3a9062['indexBuffer']))return;if(!Cesium[_0x46959b(0x1cc)](_0x3a9062['indicesTypedArray']))throw new Cesium['DeveloperError'](_0x46959b(0x1de));let _0xf1151d=Cesium[_0x46959b(0x1c7)][_0x46959b(0x1e0)];(_0x3a9062[_0x46959b(0x1dd)]===0x1||_0x4f6343>=Cesium[_0x46959b(0x1d5)][_0x46959b(0x1da)])&&_0x41b945[_0x46959b(0x1d2)]&&(_0xf1151d=Cesium[_0x46959b(0x1c7)][_0x46959b(0x1d9)]),!Cesium['defined'](_0x3a9062['indexBuffer'])&&(_0x3a9062[_0x46959b(0x1d3)]=Cesium['Buffer'][_0x46959b(0x1e3)]({'context':_0x41b945,'typedArray':_0x3a9062['indicesTypedArray'],'usage':Cesium['BufferUsage'][_0x46959b(0x1d7)],'indexDatatype':_0xf1151d})),_0x3a9062[_0x46959b(0x1e2)]=null,delete _0x3a9062[_0x46959b(0x1e2)];};

    const _0x807c=['PBR_THEME','COMPUTE_W_VALUE','UseInstanceSkeletonMatrix','COMPRESS_COLOR','APPLY_SWIPE','SKETCH_MODE','IBL','HAS_SKELETONSELECTED','TEXTURE_MOVE','HAS_NORMAL','VOL_AND_HYP','INVALID_OBLIQUE','1TLlHRY','COMPRESS_VERTEX','Volume2','33126mRIZTB','197477ilybiX','HYPSOMETRIC','SPOT_LIGHTS\x20','VERTEX_CAPTURE','REPLACE_COLOR_TYPE','APPLY_SPLIT','BRDF','EXCAVATION','TextureAtlasSec','SEC_TEX_EMISSION','FALTTEN','TEXTURE_COORD_ONE_IS_W','6wuxhzw','HAS_LIGHT','COMPUTE_TEXCOORD','101518FZeqmP','109561DEKzJr','2003HZQLws','370MCDBXd','WEBP','OVERLAY','DIR_LIGHTS\x20','Translation','CLIP','COMPRESS_TEXCOORD','TRIANGLE_FILTRATE','4KoKcDK','22222ZziUSq','TexCoord','EMISSION_TEXTURE_COUNT\x20','PBR','FLATTEN','SILHOUETTE_SELECT_TYPE','TRANSPARENT_BACK_COLOR','CLIP_FILT_BY_ID','POST_EFFECT','TexCoord2','Volume','W_VISIBLE','216495kTtJjj','MULTI_TEX','ADJUST_COLOR','REPLACE_SELECT_TYPE','TextureAtlas'];function _0x55e9(_0x21287f,_0x36d435){_0x21287f=_0x21287f-0x179;let _0x807c35=_0x807c[_0x21287f];return _0x807c35;}const _0x4b29c1=_0x55e9;(function(_0x23f3a2,_0x294a44){const _0x4ad0a5=_0x55e9;while(!![]){try{const _0x24d663=parseInt(_0x4ad0a5(0x1af))*-parseInt(_0x4ad0a5(0x1b0))+parseInt(_0x4ad0a5(0x1ad))*parseInt(_0x4ad0a5(0x1aa))+-parseInt(_0x4ad0a5(0x19d))*-parseInt(_0x4ad0a5(0x17c))+parseInt(_0x4ad0a5(0x17d))+parseInt(_0x4ad0a5(0x19e))+parseInt(_0x4ad0a5(0x189))+parseInt(_0x4ad0a5(0x19a))*parseInt(_0x4ad0a5(0x1ae));if(_0x24d663===_0x294a44)break;else _0x23f3a2['push'](_0x23f3a2['shift']());}catch(_0x358171){_0x23f3a2['push'](_0x23f3a2['shift']());}}}(_0x807c,0x855d1));const ProgramDefines$1={'EXCAVATION':_0x4b29c1(0x1a5),'FALTTEN':_0x4b29c1(0x1a8),'OVERLAY':_0x4b29c1(0x1b2),'HYPSOMETRIC':_0x4b29c1(0x19f),'ADJUST_COLOR':_0x4b29c1(0x18b),'TRANSPARENT_BACK_COLOR':_0x4b29c1(0x183),'HORIZONTAL_LINE':'HORIZONTAL_LINE','COMPUTE_W_VALUE':_0x4b29c1(0x18f),'COMPUTE_TEXCOORD':_0x4b29c1(0x1ac),'HAS_LIGHT':_0x4b29c1(0x1ab),'HAS_NORMAL':_0x4b29c1(0x197),'REPLACE_SELECT_TYPE':_0x4b29c1(0x18c),'SILHOUETTE_SELECT_TYPE':_0x4b29c1(0x182),'MULTI_TEX':_0x4b29c1(0x18a),'APPLY_SPLIT':_0x4b29c1(0x1a3),'APPLY_SWIPE':_0x4b29c1(0x192),'TEXCOORD':_0x4b29c1(0x17e),'TEXCOORD2':_0x4b29c1(0x186),'COMPRESS_VERTEX':_0x4b29c1(0x19b),'COMPRESS_NORMAL':'COMPRESS_NORMAL','COMPRESS_COLOR':_0x4b29c1(0x191),'COMPRESS_TEXCOORD':_0x4b29c1(0x17a),'SKETCH_MODE':_0x4b29c1(0x193),'NORMAL_AND_DEPTH':'NORMAL_AND_DEPTH','POST_EFFECT':_0x4b29c1(0x185),'CLIP_FILT_BY_ID':_0x4b29c1(0x184),'CLIP':_0x4b29c1(0x179),'CLIPPLANE':'CLIPPLANE','PBR':_0x4b29c1(0x180),'PT_CLOUD':'PT_CLOUD','DIR_LIGHTS':_0x4b29c1(0x1b3),'POINT_LIGHTS':'POINT_LIGHTS\x20','SPOT_LIGHTS':_0x4b29c1(0x1a0),'W_VISIBLE':_0x4b29c1(0x188),'EMISSION_TEXTURE':'EMISSION_TEXTURE','EMISSION_TEXTURE_COUNT':_0x4b29c1(0x17f),'TEXTURE_MOVE':_0x4b29c1(0x196),'VOLUME':_0x4b29c1(0x187),'VOLUME2':_0x4b29c1(0x19c),'TEXTURE_COORD_ONE_IS_W':_0x4b29c1(0x1a9),'TRIANGLE_FILTRATE':_0x4b29c1(0x17b),'UseInstanceSkeletonMatrix':_0x4b29c1(0x190),'WEBP':_0x4b29c1(0x1b1),'HAS_SKELETONSELECTED':_0x4b29c1(0x195),'SKELETONSELECT_ENABLE':'SKELETONSELECT_ENABLE','REPLACE_COLOR_TYPE':_0x4b29c1(0x1a2),'INVALID_OBLIQUE':_0x4b29c1(0x199),'IGNORE_NORMAL':'IGNORE_NORMAL','TextureAtlas':_0x4b29c1(0x18d),'TextureAtlasSec':_0x4b29c1(0x1a6),'Translation':_0x4b29c1(0x1b4),'VOL_AND_HYP':_0x4b29c1(0x198),'VERTEX_CAPTURE':_0x4b29c1(0x1a1),'SEC_TEX_EMISSION':_0x4b29c1(0x1a7),'BRDF':_0x4b29c1(0x1a4),'PBR_THEME':_0x4b29c1(0x18e),'IBL':_0x4b29c1(0x194),'FLATTEN':_0x4b29c1(0x181)};var _0x1ca8a8 = Object['freeze'](ProgramDefines$1);

    const _0x1eaf=['execute','766023LsgzgE','182798TTcbNI','material','SVC_Normal','9836SNBpfI','FLATTEN','316405aXfHQH','aTexCoord0','COMPRESS_VERTEX','509255qyQaVT','VertexNormal','aColor','compressOptions','TexCoord','defines','textureCoordIsW','Instance','840274HjqjVj','_hypsometric','defaultValue','COMPRESS_TEXCOORD','model','aNormal','HYPSOMETRIC','CLIPPLANE','getExtension','EXT_shader_texture_lod','flattening','_enableClip','textures','COMPRESS_NORMAL','batchTableBake','_gl','COMPRESS_COLOR','SVC_VertexColor','vertexPackage','layer','58XslCZN','190TNqFRe','SVC_TexutreCoord','attributeLocations','SVC_Vertex','shaderProgram','batchTable','_flattenPar','length','defined','push','1xpFUqp','CLIP','instanceIndex','isUseHypColorTable','1jhTCkJ','3694eDMNMy','TexCoord2','TextureAtlasSec','context','ShaderSource','texturelod','set','TextureAtlas'];const _0x56b26e=_0x2fff;(function(_0xde1ffb,_0x5d0576){const _0x4b9286=_0x2fff;while(!![]){try{const _0x14a7c0=parseInt(_0x4b9286(0xbf))+parseInt(_0x4b9286(0xb4))*parseInt(_0x4b9286(0xa0))+-parseInt(_0x4b9286(0xaf))+-parseInt(_0x4b9286(0xae))*parseInt(_0x4b9286(0xa4))+parseInt(_0x4b9286(0xb7))+parseInt(_0x4b9286(0x95))*parseInt(_0x4b9286(0xb2))+-parseInt(_0x4b9286(0x96))*parseInt(_0x4b9286(0xa5));if(_0x14a7c0===_0x5d0576)break;else _0xde1ffb['push'](_0xde1ffb['shift']());}catch(_0x4c64ac){_0xde1ffb['push'](_0xde1ffb['shift']());}}}(_0x1eaf,0x8f00d));function _0x2fff(_0x42e222,_0x7bf4d8){_0x42e222=_0x42e222-0x86;let _0x1eaf2d=_0x1eaf[_0x42e222];return _0x1eaf2d;}function S3MCreateShaderProgramJob(){const _0x49b360=_0x2fff;this[_0x49b360(0xc3)]=undefined,this[_0x49b360(0xa8)]=undefined;}S3MCreateShaderProgramJob['prototype'][_0x56b26e(0xab)]=function(_0x38400f,_0x354241){const _0x21beb7=_0x56b26e;this[_0x21beb7(0xc3)]=_0x354241,this[_0x21beb7(0xa8)]=_0x38400f;};function getExtension(_0x5668f5,_0x319999){const _0x116486=_0x56b26e;let _0x1d61f3=_0x319999[_0x116486(0x9d)];for(let _0x128666=0x0;_0x128666<_0x1d61f3;++_0x128666){let _0x127e79=_0x5668f5[_0x116486(0x89)](_0x319999[_0x128666]);if(_0x127e79)return _0x127e79;}return undefined;}S3MCreateShaderProgramJob['prototype'][_0x56b26e(0xad)]=function(){const _0x27f2ef=_0x56b26e,_0x1bee5d=this[_0x27f2ef(0xa8)],_0x3c42ee=this[_0x27f2ef(0xc3)],_0x2bae82=_0x3c42ee[_0x27f2ef(0x94)],_0x573b97=_0x3c42ee['vs'],_0x107919=_0x3c42ee['fs'],_0x194f72=_0x3c42ee[_0x27f2ef(0x98)],_0x817dd=_0x3c42ee[_0x27f2ef(0xb0)],_0x43f103=_0x3c42ee[_0x27f2ef(0x93)];let _0x4fc9aa=_0x3c42ee[_0x27f2ef(0x9b)]?_0x3c42ee[_0x27f2ef(0x9b)]['getVertexShaderCallback']()(_0x573b97):_0x573b97;_0x1bee5d[_0x27f2ef(0xaa)]===undefined&&(_0x1bee5d['texturelod']=Cesium[_0x27f2ef(0xc1)](getExtension(_0x1bee5d[_0x27f2ef(0x90)],[_0x27f2ef(0x8a)]),![]));let _0x5e3d95=new Cesium[(_0x27f2ef(0xa9))]({'sources':[_0x4fc9aa]}),_0x346100=new Cesium[(_0x27f2ef(0xa9))]({'sources':[_0x107919]});Cesium[_0x27f2ef(0x9e)](_0x194f72[_0x27f2ef(0x86)])&&(_0x5e3d95[_0x27f2ef(0xbc)][_0x27f2ef(0x9f)](_0x27f2ef(0xb8)),_0x346100[_0x27f2ef(0xbc)][_0x27f2ef(0x9f)]('VertexNormal'));Cesium['defined'](_0x194f72[_0x27f2ef(0xb9)])&&_0x5e3d95[_0x27f2ef(0xbc)][_0x27f2ef(0x9f)]('VertexColor');_0x817dd&&_0x817dd[_0x27f2ef(0x8d)][_0x27f2ef(0x9d)]>0x0&&(_0x5e3d95[_0x27f2ef(0xbc)]['push'](_0x27f2ef(0xbb)),_0x346100['defines']['push'](_0x27f2ef(0xbb)));_0x817dd&&_0x817dd[_0x27f2ef(0x8d)][_0x27f2ef(0x9d)]===0x2&&(_0x5e3d95[_0x27f2ef(0xbc)]['push'](_0x27f2ef(0xa6)),_0x346100['defines']['push'](_0x27f2ef(0xa6)));_0x43f103[_0x27f2ef(0xa2)]>-0x1&&_0x5e3d95['defines'][_0x27f2ef(0x9f)](_0x27f2ef(0xbe));if(Cesium[_0x27f2ef(0x9e)](_0x43f103[_0x27f2ef(0xba)])){let _0x50850b=_0x43f103[_0x27f2ef(0xba)];(_0x50850b&_0x25c9a4[_0x27f2ef(0x99)])===_0x25c9a4['SVC_Vertex']&&_0x5e3d95['defines'][_0x27f2ef(0x9f)](_0x1ca8a8[_0x27f2ef(0xb6)]),(_0x50850b&_0x25c9a4[_0x27f2ef(0xb1)])===_0x25c9a4[_0x27f2ef(0xb1)]&&_0x5e3d95[_0x27f2ef(0xbc)][_0x27f2ef(0x9f)](_0x1ca8a8[_0x27f2ef(0x8e)]),(_0x50850b&_0x25c9a4['SVC_VertexColor'])===_0x25c9a4[_0x27f2ef(0x92)]&&_0x5e3d95['defines'][_0x27f2ef(0x9f)](_0x1ca8a8[_0x27f2ef(0x91)]),(_0x50850b&_0x25c9a4[_0x27f2ef(0x97)])===_0x25c9a4[_0x27f2ef(0x97)]&&_0x5e3d95['defines'][_0x27f2ef(0x9f)](_0x1ca8a8[_0x27f2ef(0xc2)]);}_0x43f103[_0x27f2ef(0xbd)]&&_0x194f72['TexCoord']&&_0x5e3d95['defines'][_0x27f2ef(0x9f)](_0x1ca8a8['TEXTURE_COORD_ONE_IS_W']),_0x2bae82[_0x27f2ef(0x8c)]&&_0x346100[_0x27f2ef(0xbc)][_0x27f2ef(0x9f)](_0x1ca8a8[_0x27f2ef(0xa1)]),_0x2bae82['_enableClipPlane']&&_0x346100['defines'][_0x27f2ef(0x9f)](_0x1ca8a8[_0x27f2ef(0x88)]),_0x2bae82[_0x27f2ef(0xc0)][_0x27f2ef(0xa3)]&&(_0x5e3d95[_0x27f2ef(0xbc)][_0x27f2ef(0x9f)](_0x1ca8a8[_0x27f2ef(0x87)]),_0x346100['defines']['push'](_0x1ca8a8[_0x27f2ef(0x87)])),_0x2bae82[_0x27f2ef(0x9c)][_0x27f2ef(0x8b)]&&_0x5e3d95[_0x27f2ef(0xbc)][_0x27f2ef(0x9f)](_0x1ca8a8[_0x27f2ef(0xb3)]),_0x2bae82['swipeEnabled']&&_0x346100[_0x27f2ef(0xbc)][_0x27f2ef(0x9f)](_0x1ca8a8['APPLY_SWIPE']),_0x43f103[_0x27f2ef(0xbd)]&&_0x194f72[_0x27f2ef(0xb5)]&&_0x5e3d95['defines'][_0x27f2ef(0x9f)](_0x1ca8a8['TEXTURE_COORD_ONE_IS_W']),_0x817dd['batchTable']&&(_0x5e3d95[_0x27f2ef(0xbc)][_0x27f2ef(0x9f)](_0x1ca8a8[_0x27f2ef(0xac)]),_0x346100[_0x27f2ef(0xbc)]['push'](_0x1ca8a8['TextureAtlas'])),_0x817dd[_0x27f2ef(0x8f)]&&(_0x5e3d95[_0x27f2ef(0xbc)][_0x27f2ef(0x9f)](_0x1ca8a8[_0x27f2ef(0xa7)]),_0x346100[_0x27f2ef(0xbc)][_0x27f2ef(0x9f)](_0x1ca8a8[_0x27f2ef(0xa7)])),_0x3c42ee[_0x27f2ef(0x9a)]=Cesium['ShaderProgram']['fromCache']({'context':_0x1bee5d,'vertexShaderSource':_0x5e3d95,'fragmentShaderSource':_0x346100,'attributeLocations':_0x194f72});};

    const _0x340f=['22147gkyUkV','857667NfAvaf','3WbLThW','734100fsOTjv','2nlTvqV','709606rPzKOY','385623MCvtAS','461002apQMha','1354184tbiEYC','7RpwJsO','3OKutHP','freeze'];function _0x2021(_0x489d6a,_0x437de8){_0x489d6a=_0x489d6a-0x1ee;let _0x340fa6=_0x340f[_0x489d6a];return _0x340fa6;}const _0x14f2b9=_0x2021;(function(_0x59b557,_0x4629a0){const _0xfe1964=_0x2021;while(!![]){try{const _0x40bdc3=-parseInt(_0xfe1964(0x1f8))*-parseInt(_0xfe1964(0x1f5))+-parseInt(_0xfe1964(0x1f4))*-parseInt(_0xfe1964(0x1f0))+parseInt(_0xfe1964(0x1f1))+parseInt(_0xfe1964(0x1f3))+-parseInt(_0xfe1964(0x1f6))+parseInt(_0xfe1964(0x1ee))*-parseInt(_0xfe1964(0x1f7))+parseInt(_0xfe1964(0x1ef))*-parseInt(_0xfe1964(0x1f2));if(_0x40bdc3===_0x4629a0)break;else _0x59b557['push'](_0x59b557['shift']());}catch(_0x56dd13){_0x59b557['push'](_0x59b557['shift']());}}}(_0x340f,0xb94fa));const OperationType={'RESET':0x0,'SetColor':0x1,'SELECTED':0x2,'HIDE':0x4,'OFFSET':0x8,'CLIP':0x10,'BLOOM':0x20,'ALL':0xff};var _0x4994c3 = Object[_0x14f2b9(0x1f9)](OperationType);

    const _0x2808=['values','toBytes','geoMatrix','green','shaderProgramToCreate','layer','initLayerSetting','setBatchedAttribute','vertexBufferToCreate','Cartesian3','isArray','defined','fromCache','defines','updateObjsOperation','2938166vEaxPT','dirty','ComponentDatatype','createBuffers','batchTable','push','ALL','s3m_batchTable_color','_objsHideList','updateBatchTableAttributes','s3m_batchTable_pickColor','enable','jobScheduler','instanceBounds','radius','floatToByte','AssociativeArray','attributeLocations','boundingVolume','batchTableDirty','material','selectionInfoMap','colorCommand','HYPSOMETRIC','color','840313hLpyJu','PROGRAM','operationValue','center','createShaderProgram','TRANSPARENT','map','get','_allObjsHide','UNSIGNED_BYTE','CLIPPLANE','ready','createPickIds','3xhSjsK','idsColorMap','CLIP','componentsPerAttribute','swipe','s3m_batchTable_operation','blue','arrIndexPackage','updateAllObjsVisible','vertexShaderSource','hypsometric','Queue','18127eYFkxt','keys','context','alpha','createPickId','shaderProgram','batchId','Color','FLATTEN','contains','prototype','instanceCount','dequeue','indexBufferToCreate','update','vertexPackage','225611sXXSsd','_objsColorList','DeveloperError','Matrix4','fragmentShaderSource','ShaderProgram','clone','destroy','remove','length','BatchTable','hasOwnProperty','_objsOperationList','JobType','createBatchTable','edgeGeometry','544042tzQnoX','execute','flatten','_objsVisibleList','vSecondColor','APPLY_SWIPE','enqueue','distance','522472JmJUAg','throwInstantiationError','createBoundingBoxForInstance','instanceIds','Cartesian4','clip','_enableClipPlane','idsOperationMap','BUFFER','indexOf','modelMatrix','225768WZrfBS','pickInfo','_hash','lerp','HIDE','set','peek'];const _0x4de7b7=_0x3055;(function(_0x4ea7be,_0x44e435){const _0x3397b9=_0x3055;while(!![]){try{const _0x1fadcf=-parseInt(_0x3397b9(0xf1))+parseInt(_0x3397b9(0x10a))*parseInt(_0x3397b9(0xfe))+-parseInt(_0x3397b9(0xc2))+-parseInt(_0x3397b9(0xaf))+-parseInt(_0x3397b9(0x11a))+-parseInt(_0x3397b9(0xb7))+parseInt(_0x3397b9(0xd8));if(_0x1fadcf===_0x44e435)break;else _0x4ea7be['push'](_0x4ea7be['shift']());}catch(_0x1ab093){_0x4ea7be['push'](_0x4ea7be['shift']());}}}(_0x2808,0x9ade5));function _0x3055(_0x40dabe,_0xb38e23){_0x40dabe=_0x40dabe-0xa5;let _0x2808c2=_0x2808[_0x40dabe];return _0x2808c2;}function RenderEntity(_0x1e0b63){const _0x27edd9=_0x3055;this[_0x27edd9(0xce)]=_0x1e0b63['layer'],this[_0x27edd9(0x119)]=_0x1e0b63[_0x27edd9(0x119)],this[_0x27edd9(0x105)]=_0x1e0b63[_0x27edd9(0x105)],this[_0x27edd9(0xd1)]=new Cesium['Queue'](),this[_0x27edd9(0x117)]=new Cesium[(_0x27edd9(0x109))](),this[_0x27edd9(0xcd)]=new Cesium['Queue']();let _0x501394,_0x3394f8;for(_0x501394=0x0,_0x3394f8=this[_0x27edd9(0x119)]['vertexAttributes'][_0x27edd9(0xa8)];_0x501394<_0x3394f8;_0x501394++){this['vertexBufferToCreate'][_0x27edd9(0xb5)](_0x501394);}for(_0x501394=0x0,_0x3394f8=this['arrIndexPackage'][_0x27edd9(0xa8)];_0x501394<_0x3394f8;_0x501394++){this[_0x27edd9(0x117)]['enqueue'](_0x501394);}this[_0x27edd9(0xcd)]['enqueue'](0x0),this[_0x27edd9(0xea)]=_0x1e0b63['boundingVolume'],this[_0x27edd9(0xec)]=Cesium['defaultValue'](_0x1e0b63[_0x27edd9(0xec)],new MaterialPass()),this['geoName']=_0x1e0b63['geoName'],this['modelMatrix']=_0x1e0b63['modelMatrix'],this['geoMatrix']=_0x1e0b63[_0x27edd9(0xcb)],this['invGeoMatrix']=Cesium['Matrix4']['inverse'](this[_0x27edd9(0xcb)],new Cesium[(_0x27edd9(0x11d))]()),this['instanceCount']=_0x1e0b63[_0x27edd9(0x119)][_0x27edd9(0x115)],this[_0x27edd9(0xe9)]=_0x1e0b63[_0x27edd9(0x119)]['attrLocation'],this[_0x27edd9(0x10f)]=undefined,this['vertexArray']=undefined,this[_0x27edd9(0xee)]=undefined,this[_0x27edd9(0xc3)]=_0x1e0b63['pickInfo'],this[_0x27edd9(0xed)]=new Cesium[(_0x27edd9(0xe8))](),this[_0x27edd9(0xdc)]=undefined,this['batchTableDirty']=![],this['pickColorIdentifier']=_0x27edd9(0xb3),this[_0x27edd9(0xbe)]=new Cesium['AssociativeArray'](),this[_0x27edd9(0xff)]=new Cesium[(_0x27edd9(0xe8))](),this['useWValue']=_0x1e0b63['vertexPackage']['vertexAttributes'][0x0][_0x27edd9(0x101)]===0x4,this[_0x27edd9(0xae)]=_0x1e0b63[_0x27edd9(0xae)],this[_0x27edd9(0xb9)](),this[_0x27edd9(0xfc)]=![];}const _vertexBufferJob=new S3MCreateVertexJob(),_indexBufferJob=new S3MCreateIndexBufferJob(),_shaderProgramJob=new S3MCreateShaderProgramJob();function createVertexBuffers(_0x5e390d,_0x46d826){const _0x148b2a=_0x3055;let _0x2d05ad=_0x5e390d['layer'][_0x148b2a(0x10c)],_0x3e8661=_0x5e390d[_0x148b2a(0xd1)];while(_0x3e8661['length']){let _0x4b338d=_0x3e8661[_0x148b2a(0xc8)]();_vertexBufferJob['set'](_0x2d05ad,_0x5e390d,_0x4b338d);if(!_0x46d826['jobScheduler'][_0x148b2a(0xb0)](_vertexBufferJob,Cesium[_0x148b2a(0xac)][_0x148b2a(0xbf)]))break;_0x3e8661[_0x148b2a(0x116)]();}}function createIndexBuffers(_0x170b7e,_0x14f978){const _0x515e48=_0x3055;let _0x28d707=_0x170b7e[_0x515e48(0xce)][_0x515e48(0x10c)],_0xb7a8c2=_0x170b7e['indexBufferToCreate'];while(_0xb7a8c2[_0x515e48(0xa8)]){let _0x1f03b2=_0xb7a8c2['peek']();_indexBufferJob['set'](_0x28d707,_0x170b7e,_0x1f03b2);if(!_0x14f978[_0x515e48(0xe4)][_0x515e48(0xb0)](_indexBufferJob,Cesium[_0x515e48(0xac)][_0x515e48(0xbf)]))break;_0xb7a8c2[_0x515e48(0x116)]();}}function createShaderProgram(_0x5100f4,_0x5b2703){const _0x2ba5cf=_0x3055;let _0x4cdb91=_0x5100f4['layer']['context'],_0x1b2f15=_0x5100f4[_0x2ba5cf(0xcd)];while(_0x1b2f15['length']){let _0x43e222=_0x1b2f15[_0x2ba5cf(0xc8)]();_shaderProgramJob[_0x2ba5cf(0xc7)](_0x4cdb91,_0x5100f4);if(!_0x5b2703[_0x2ba5cf(0xe4)][_0x2ba5cf(0xb0)](_shaderProgramJob,Cesium['JobType'][_0x2ba5cf(0xf2)]))break;_0x1b2f15['dequeue']();}}function createBatchTable(_0x18eb7c,_0x345f38){const _0x352e48=_0x3055;if(Cesium[_0x352e48(0xd4)](_0x18eb7c['batchTable'])||!_0x18eb7c[_0x352e48(0xc3)])return;const _0x5db09f=_0x18eb7c[_0x352e48(0xce)][_0x352e48(0x10c)];let _0x2eb474=[];_0x2eb474['push']({'functionName':_0x352e48(0xdf),'componentDatatype':Cesium[_0x352e48(0xda)][_0x352e48(0xfa)],'componentsPerAttribute':0x4,'normalize':!![]},{'functionName':_0x352e48(0x103),'componentDatatype':Cesium[_0x352e48(0xda)][_0x352e48(0xfa)],'componentsPerAttribute':0x4},{'functionName':_0x352e48(0xe2),'componentDatatype':Cesium[_0x352e48(0xda)][_0x352e48(0xfa)],'componentsPerAttribute':0x4,'normalize':!![]});let _0x1c2f52=_0x18eb7c['pickInfo'],_0x11b279=Object['keys'](_0x1c2f52),_0x55ef1b=_0x18eb7c[_0x352e48(0x115)]>0x0?_0x18eb7c[_0x352e48(0x115)]:_0x11b279['length'];_0x18eb7c[_0x352e48(0xdc)]=new Cesium[(_0x352e48(0xa9))](_0x5db09f,_0x2eb474,_0x55ef1b);}RenderEntity['prototype'][_0x4de7b7(0xdb)]=function(_0x139e06){createVertexBuffers(this,_0x139e06),createIndexBuffers(this,_0x139e06);},RenderEntity[_0x4de7b7(0x114)][_0x4de7b7(0xf5)]=function(_0x3c401e){createShaderProgram(this,_0x3c401e);},RenderEntity[_0x4de7b7(0x114)][_0x4de7b7(0xad)]=function(_0x2d3634){createBatchTable(this);};let scratchPntCenter=new Cesium['Cartesian3']();RenderEntity['prototype']['createBoundingBoxForInstance']=function(){const _0x527103=_0x4de7b7,_0x191f4d=this[_0x527103(0x119)];if(!Cesium[_0x527103(0xd4)](_0x191f4d)||_0x191f4d['instanceIndex']===-0x1||!Cesium[_0x527103(0xd4)](_0x191f4d[_0x527103(0xe5)]))return;let _0x3a5565=_0x191f4d['instanceBounds'],_0x537aa8=new Cesium[(_0x527103(0xd2))](_0x3a5565[0x0],_0x3a5565[0x1],_0x3a5565[0x2]),_0x2f52fa=new Cesium['Cartesian3'](_0x3a5565[0x3],_0x3a5565[0x4],_0x3a5565[0x5]),_0x4a95a8=Cesium[_0x527103(0xd2)][_0x527103(0xc5)](_0x537aa8,_0x2f52fa,0.5,scratchPntCenter),_0x2d0ef5=Cesium[_0x527103(0xd2)][_0x527103(0xb6)](_0x4a95a8,_0x537aa8),_0x388ae3=new Cesium['Cartesian3']();Cesium[_0x527103(0x11d)]['multiplyByPoint'](this[_0x527103(0xc1)],_0x4a95a8,_0x388ae3),this[_0x527103(0xea)][_0x527103(0xf4)]=_0x388ae3,this[_0x527103(0xea)][_0x527103(0xe6)]=_0x2d0ef5,_0x191f4d[_0x527103(0xe5)]=undefined;};let cartesian4Scratch=new Cesium[(_0x4de7b7(0xbb))]();RenderEntity[_0x4de7b7(0x114)][_0x4de7b7(0xfd)]=function(){const _0x45c1aa=_0x4de7b7,_0x32bf74=this[_0x45c1aa(0xce)],_0xa2cce=_0x32bf74['context'],_0x4acc1c=this[_0x45c1aa(0xc3)];if(!Cesium[_0x45c1aa(0xd4)](_0x4acc1c))return;for(let _0x395369 in _0x4acc1c){if(!_0x4acc1c['hasOwnProperty'](_0x395369))continue;this[_0x45c1aa(0xed)][_0x45c1aa(0xc7)](_0x395369,_0x4acc1c[_0x395369]);}let _0x1707aa=this['batchTable'],_0x2fe21d=this['selectionInfoMap'],_0x35ea8e=_0x2fe21d['_hash'];for(let _0x2509c0 in _0x35ea8e){if(_0x35ea8e[_0x45c1aa(0xaa)](_0x2509c0)){let _0x3110ba=_0x2fe21d[_0x45c1aa(0xf8)](_0x2509c0),_0xafd9;!Cesium[_0x45c1aa(0xd4)](_0xafd9)&&(_0xafd9=_0xa2cce[_0x45c1aa(0x10e)]({'primitive':_0x32bf74,'id':_0x2509c0}));let _0x458aa4=_0xafd9[_0x45c1aa(0xf0)];cartesian4Scratch['x']=Cesium[_0x45c1aa(0x111)][_0x45c1aa(0xe7)](_0x458aa4['red']),cartesian4Scratch['y']=Cesium[_0x45c1aa(0x111)][_0x45c1aa(0xe7)](_0x458aa4[_0x45c1aa(0xcc)]),cartesian4Scratch['z']=Cesium[_0x45c1aa(0x111)]['floatToByte'](_0x458aa4[_0x45c1aa(0x104)]),cartesian4Scratch['w']=Cesium[_0x45c1aa(0x111)][_0x45c1aa(0xe7)](_0x458aa4[_0x45c1aa(0x10d)]);let _0x2d40fb=_0x3110ba[_0x45c1aa(0xba)];if(this[_0x45c1aa(0x115)]>0x0)_0x2d40fb[_0x45c1aa(0xf7)](function(_0x57de88){const _0x397945=_0x45c1aa;_0x1707aa[_0x397945(0xd0)](_0x57de88,0x2,cartesian4Scratch);});else {let _0x33c541=_0x3110ba[0x0]['batchId'];_0x1707aa[_0x45c1aa(0xd0)](_0x33c541,0x2,cartesian4Scratch);}}}this[_0x45c1aa(0xc3)]=undefined;},RenderEntity['prototype'][_0x4de7b7(0xcf)]=function(_0x28abe4){const _0x490818=_0x4de7b7;_0x28abe4[_0x490818(0xf9)]&&this[_0x490818(0x106)](!_0x28abe4['_allObjsHide']),Object[_0x490818(0x10b)](_0x28abe4[_0x490818(0x11b)])[_0x490818(0xa8)]>0x0&&this['updateObjsColor'](_0x28abe4[_0x490818(0x11b)]),_0x28abe4[_0x490818(0xab)][_0x490818(0xa8)]>0x0&&this['updateObjsOperation'](_0x28abe4[_0x490818(0xab)]);},RenderEntity[_0x4de7b7(0x114)][_0x4de7b7(0xe1)]=function(){const _0x1f1489=_0x4de7b7;let _0xc600a9=this,_0x5edba9=this[_0x1f1489(0xff)],_0x45a9e7=[];for(let _0x26dd25=0x0,_0x48872d=_0x5edba9[_0x1f1489(0xa8)];_0x26dd25<_0x48872d;_0x26dd25++){let _0x5172c3=_0x5edba9[_0x1f1489(0xc9)][_0x26dd25];if(!_0x5172c3[_0x1f1489(0xd9)])continue;_0x5172c3[_0x1f1489(0xd9)]=![],_0x45a9e7=_0x5172c3[_0x1f1489(0xf0)][_0x1f1489(0xca)](),cartesian4Scratch['x']=_0x45a9e7[0x0],cartesian4Scratch['y']=_0x45a9e7[0x1],cartesian4Scratch['z']=_0x45a9e7[0x2],cartesian4Scratch['w']=_0x45a9e7[0x3];if(Cesium[_0x1f1489(0xd4)](_0x5172c3[_0x1f1489(0x110)]))this[_0x1f1489(0xdc)][_0x1f1489(0xd0)](_0x5172c3[_0x1f1489(0x110)],0x0,cartesian4Scratch);else Array[_0x1f1489(0xd3)](_0x5172c3[_0x1f1489(0xba)])&&_0x5172c3[_0x1f1489(0xba)][_0x1f1489(0xf7)](function(_0x3470da){const _0x16183e=_0x1f1489;_0xc600a9['batchTable'][_0x16183e(0xd0)](_0x3470da,0x0,cartesian4Scratch);});}let _0x2b6832=this['idsOperationMap'];for(let _0x1f2730=0x0,_0x5d3e18=_0x2b6832['length'];_0x1f2730<_0x5d3e18;_0x1f2730++){let _0x41226f=_0x2b6832['values'][_0x1f2730];if(!_0x41226f[_0x1f1489(0xd9)])continue;_0x41226f[_0x1f1489(0xd9)]=![],this[_0x1f1489(0x115)]>0x0?Array[_0x1f1489(0xd3)](_0x41226f['instanceIds'])&&_0x41226f[_0x1f1489(0xba)][_0x1f1489(0xf7)](function(_0x34c0a6){const _0x2ee34e=_0x1f1489;_0xc600a9[_0x2ee34e(0xdc)][_0x2ee34e(0xd0)](_0x34c0a6,0x1,_0x41226f[_0x2ee34e(0xf3)]);}):Cesium[_0x1f1489(0xd4)](_0x41226f[_0x1f1489(0x110)])&&this[_0x1f1489(0xdc)][_0x1f1489(0xd0)](_0x41226f[_0x1f1489(0x110)],0x1,_0x41226f[_0x1f1489(0xf3)]);}},RenderEntity['prototype']['updateObjsColor']=function(_0x1d78c5){const _0x2057a9=_0x4de7b7;if(!this[_0x2057a9(0xfc)]||this[_0x2057a9(0xed)][_0x2057a9(0xa8)]<0x1)return;let _0x375856=this[_0x2057a9(0xed)]['_hash'];for(let _0x2406f3 in _0x375856){if(!_0x375856['hasOwnProperty'](_0x2406f3))continue;let _0x319e84=_0x1d78c5[_0x2406f3];if(!Cesium[_0x2057a9(0xd4)](_0x319e84))continue;let _0xdf7d5e=_0x375856[_0x2406f3][0x0];const _0x310694=_0xdf7d5e[_0x2057a9(0x110)],_0x16fe51=_0xdf7d5e['instanceIds'];this[_0x2057a9(0xff)][_0x2057a9(0xc7)](_0x2406f3,{'batchId':_0x310694,'instanceIds':_0x16fe51,'color':_0x319e84,'dirty':!![]});let _0x157610=this[_0x2057a9(0xbe)][_0x2057a9(0xf8)](_0x2406f3);!Cesium['defined'](_0x157610)&&(_0x157610={'batchId':_0x310694,'instanceIds':_0x16fe51,'operationValue':new Cesium[(_0x2057a9(0xbb))](),'dirty':!![]}),_0x157610[_0x2057a9(0xd9)]=!![],_0x157610[_0x2057a9(0xf3)]['x']=_0x319e84===Cesium['Color'][_0x2057a9(0xf6)]?_0x157610[_0x2057a9(0xf3)]['x']&0xfe:_0x157610['operationValue']['x']|0x1,this[_0x2057a9(0xbe)][_0x2057a9(0xc7)](_0x2406f3,_0x157610),this[_0x2057a9(0xeb)]=!![];}},RenderEntity[_0x4de7b7(0x114)][_0x4de7b7(0xd7)]=function(_0x16d9de){const _0x56657d=_0x4de7b7;if(!this[_0x56657d(0xfc)]||this[_0x56657d(0xed)][_0x56657d(0xa8)]<0x1)return;let _0x52d705=this['selectionInfoMap'][_0x56657d(0xc4)];for(let _0x2d3d49 in _0x52d705){if(!_0x52d705[_0x56657d(0xaa)](_0x2d3d49))continue;if(!_0x16d9de['contains'](_0x2d3d49))continue;let _0x2159c6=_0x52d705[_0x2d3d49][0x0],_0x231f0d=_0x2159c6[_0x56657d(0x110)],_0x19a40c=_0x2159c6['instanceIds'],_0x2f4647=_0x16d9de['get'](_0x2d3d49),_0x35c868=this[_0x56657d(0xbe)][_0x56657d(0xf8)](_0x2d3d49);!Cesium[_0x56657d(0xd4)](_0x35c868)&&(_0x35c868={'batchId':_0x231f0d,'instanceIds':_0x19a40c,'operationValue':new Cesium[(_0x56657d(0xbb))](),'dirty':!![]}),_0x35c868[_0x56657d(0xd9)]=!![],_0x35c868[_0x56657d(0xf3)]['x']=_0x35c868[_0x56657d(0xf3)]['x']&0x1|_0x2f4647,this['idsOperationMap'][_0x56657d(0xc7)](_0x2d3d49,_0x35c868),this['batchTableDirty']=!![];}},RenderEntity[_0x4de7b7(0x114)][_0x4de7b7(0x106)]=function(_0x11db0b){const _0x1440ff=_0x4de7b7;if(!this['ready']||this['selectionInfoMap'][_0x1440ff(0xa8)]<0x1)return;let _0x50d5ca=this[_0x1440ff(0xce)],_0x48c5af=this[_0x1440ff(0xed)][_0x1440ff(0xc4)];for(let _0x36a680 in _0x48c5af){if(!_0x48c5af['hasOwnProperty'](_0x36a680))continue;if(_0x50d5ca[_0x1440ff(0xb2)][_0x1440ff(0x113)](_0x36a680))continue;let _0xa36dfb=_0x48c5af[_0x36a680][0x0],_0x207414=_0xa36dfb[_0x1440ff(0x110)],_0x3c696b=_0xa36dfb[_0x1440ff(0xba)],_0x3ba8a1=this['idsOperationMap'][_0x1440ff(0xf8)](_0x36a680);!Cesium[_0x1440ff(0xd4)](_0x3ba8a1)&&(_0x3ba8a1={'batchId':_0x207414,'instanceIds':_0x3c696b,'operationValue':new Cesium[(_0x1440ff(0xbb))](),'dirty':!![]}),_0x3ba8a1[_0x1440ff(0xd9)]=!![],_0x11db0b?_0x3ba8a1[_0x1440ff(0xf3)]['x']=_0x3ba8a1[_0x1440ff(0xf3)]['x']&(_0x4994c3[_0x1440ff(0xde)]^_0x4994c3[_0x1440ff(0xc6)]):_0x3ba8a1[_0x1440ff(0xf3)]['x']=_0x3ba8a1['operationValue']['x']|_0x4994c3[_0x1440ff(0xc6)],this[_0x1440ff(0xbe)]['set'](_0x36a680,_0x3ba8a1),_0x3ba8a1[_0x1440ff(0xf3)]['x']===_0x4994c3['RESET']?_0x50d5ca[_0x1440ff(0xab)][_0x1440ff(0xa7)](_0x36a680):(_0x50d5ca[_0x1440ff(0xab)][_0x1440ff(0xc7)](_0x36a680,_0x3ba8a1[_0x1440ff(0xf3)]['x']),_0x50d5ca[_0x1440ff(0xe0)][_0x1440ff(0xc7)](_0x36a680,!![])),this[_0x1440ff(0xeb)]=!![];}};function removeDefine(_0x40410a,_0x242009){const _0x1643a7=_0x4de7b7;let _0x5bca56=_0x40410a[_0x1643a7(0xd6)][_0x1643a7(0xc0)](_0x242009);_0x5bca56>=0x0&&_0x40410a[_0x1643a7(0xd6)]['splice'](_0x5bca56,0x1);}RenderEntity[_0x4de7b7(0x114)][_0x4de7b7(0xbc)]=function(_0x45f252){const _0x1d8463=_0x4de7b7;if(!this[_0x1d8463(0xfc)])return;let _0x54f01b=this[_0x1d8463(0x10f)]['vertexShaderSource'][_0x1d8463(0xa5)](),_0x1cc022=this['shaderProgram'][_0x1d8463(0x11e)][_0x1d8463(0xa5)](),_0x46666b=this[_0x1d8463(0xe9)];_0x45f252[_0x1d8463(0xe3)]?_0x1cc022[_0x1d8463(0xd6)][_0x1d8463(0xc0)](_0x1ca8a8[_0x1d8463(0x100)])===-0x1&&_0x1cc022[_0x1d8463(0xd6)][_0x1d8463(0xdd)](_0x1ca8a8[_0x1d8463(0x100)]):removeDefine(_0x1cc022,_0x1ca8a8['CLIP']),this[_0x1d8463(0xce)][_0x1d8463(0xbd)]?_0x1cc022[_0x1d8463(0xd6)][_0x1d8463(0xc0)](_0x1ca8a8[_0x1d8463(0xfb)])===-0x1&&_0x1cc022['defines']['push'](_0x1ca8a8[_0x1d8463(0xfb)]):removeDefine(_0x1cc022,_0x1ca8a8[_0x1d8463(0xfb)]),this['shaderProgram'][_0x1d8463(0xa6)](),this['shaderProgram']=Cesium['ShaderProgram'][_0x1d8463(0xd5)]({'context':this[_0x1d8463(0xce)][_0x1d8463(0x10c)],'vertexShaderSource':_0x54f01b,'fragmentShaderSource':_0x1cc022,'attributeLocations':_0x46666b}),this[_0x1d8463(0xee)]['shaderProgram']=this['shaderProgram'];},RenderEntity['prototype'][_0x4de7b7(0x108)]=function(_0x575ab0){const _0x112a14=_0x4de7b7;if(!this[_0x112a14(0xfc)])return;let _0x40d8e4=this[_0x112a14(0x10f)][_0x112a14(0x107)][_0x112a14(0xa5)](),_0x270809=this[_0x112a14(0x10f)][_0x112a14(0x11e)][_0x112a14(0xa5)](),_0x3281d4=this[_0x112a14(0xe9)];_0x575ab0[_0x112a14(0xe3)]?(_0x40d8e4[_0x112a14(0xd6)]['indexOf'](_0x1ca8a8['HYPSOMETRIC'])===-0x1&&_0x40d8e4[_0x112a14(0xd6)][_0x112a14(0xdd)](_0x1ca8a8['HYPSOMETRIC']),_0x270809[_0x112a14(0xd6)]['indexOf'](_0x1ca8a8['HYPSOMETRIC'])===-0x1&&_0x270809[_0x112a14(0xd6)][_0x112a14(0xdd)](_0x1ca8a8[_0x112a14(0xef)])):removeDefine(_0x270809,_0x1ca8a8[_0x112a14(0xef)]),this['shaderProgram']['destroy'](),this[_0x112a14(0x10f)]=Cesium['ShaderProgram'][_0x112a14(0xd5)]({'context':this[_0x112a14(0xce)][_0x112a14(0x10c)],'vertexShaderSource':_0x40d8e4,'fragmentShaderSource':_0x270809,'attributeLocations':_0x3281d4}),this[_0x112a14(0xee)][_0x112a14(0x10f)]=this[_0x112a14(0x10f)];},RenderEntity[_0x4de7b7(0x114)][_0x4de7b7(0x102)]=function(_0x45fee3){const _0x10bf8e=_0x4de7b7;if(!this['ready'])return;let _0x29fe5f=this[_0x10bf8e(0x10f)]['vertexShaderSource'][_0x10bf8e(0xa5)](),_0x461913=this[_0x10bf8e(0x10f)]['fragmentShaderSource'][_0x10bf8e(0xa5)](),_0x520434=this[_0x10bf8e(0xe9)];_0x45fee3[_0x10bf8e(0xe3)]?_0x461913[_0x10bf8e(0xd6)][_0x10bf8e(0xc0)](_0x1ca8a8['APPLY_SWIPE'])===-0x1&&_0x461913[_0x10bf8e(0xd6)][_0x10bf8e(0xdd)](_0x1ca8a8['APPLY_SWIPE']):removeDefine(_0x461913,_0x1ca8a8[_0x10bf8e(0xb4)]),this[_0x10bf8e(0x10f)]['destroy'](),this[_0x10bf8e(0x10f)]=Cesium['ShaderProgram'][_0x10bf8e(0xd5)]({'context':this[_0x10bf8e(0xce)]['context'],'vertexShaderSource':_0x29fe5f,'fragmentShaderSource':_0x461913,'attributeLocations':_0x520434}),this[_0x10bf8e(0xee)][_0x10bf8e(0x10f)]=this[_0x10bf8e(0x10f)];},RenderEntity[_0x4de7b7(0x114)][_0x4de7b7(0xb1)]=function(_0x328837){const _0x4c4ddc=_0x4de7b7;if(!this[_0x4c4ddc(0xfc)])return;let _0x231a2f=this[_0x4c4ddc(0x10f)][_0x4c4ddc(0x107)][_0x4c4ddc(0xa5)](),_0x1c6743=this['shaderProgram'][_0x4c4ddc(0x11e)][_0x4c4ddc(0xa5)](),_0x40439b=this[_0x4c4ddc(0xe9)];_0x328837[_0x4c4ddc(0xe3)]?_0x231a2f['defines'][_0x4c4ddc(0xc0)](_0x1ca8a8[_0x4c4ddc(0x112)])===-0x1&&_0x231a2f[_0x4c4ddc(0xd6)]['push'](_0x1ca8a8[_0x4c4ddc(0x112)]):removeDefine(_0x231a2f,_0x1ca8a8[_0x4c4ddc(0x112)]),this[_0x4c4ddc(0x10f)][_0x4c4ddc(0xa6)](),this[_0x4c4ddc(0x10f)]=Cesium[_0x4c4ddc(0x11f)][_0x4c4ddc(0xd5)]({'context':this[_0x4c4ddc(0xce)][_0x4c4ddc(0x10c)],'vertexShaderSource':_0x231a2f,'fragmentShaderSource':_0x1c6743,'attributeLocations':_0x40439b}),this[_0x4c4ddc(0xee)]['shaderProgram']=this['shaderProgram'];},RenderEntity[_0x4de7b7(0x114)]['createCommand']=Cesium['DeveloperError']['throwInstantiationError'],RenderEntity[_0x4de7b7(0x114)][_0x4de7b7(0x118)]=Cesium['DeveloperError'][_0x4de7b7(0xb8)],RenderEntity[_0x4de7b7(0x114)]['isDestroyed']=Cesium['DeveloperError'][_0x4de7b7(0xb8)],RenderEntity[_0x4de7b7(0x114)]['destroy']=Cesium[_0x4de7b7(0x11c)][_0x4de7b7(0xb8)];

    const _0x121f=['length','161051kcXmuZ','indexBufferToCreate','layer','RenderState','466SNboAo','primitiveType','291247bwLAlj','arrIndexPackage','create','constructor','Cartesian4','indexBuffer','LineColor','geoMatrix','shaderProgram','1DSoPXy','shaderProgramToCreate','vertexPackage','commandList','material','uniformMap','LESS_OR_EQUAL','vertexBufferToCreate','bTransparentSorting','fromCache','colorCommand','createShaderProgram','_hypsometric','ColorTableMinKey','clone','1ZkpIFp','setting','boundingVolume','texture','createBuffers','selectionInfoMap','noValueColor','5839ARiDWa','DrawCommand','drawingBufferHeight','textures','defined','BoundingSphere','Pass','width','2KTcIpf','instanceCount','389479lCveGT','252691ifHdIV','initLayerSetting','MinVisibleValue','destroyObject','Opacity','ready','drawingBufferWidth','call','_clipMode','vertexArray','bounds','isDestroyed','6430bVGJgA','LineInterval','53uCgKWj','_swipeRegion','prototype','DepthFunction','1041bMWySv','destroy','_clipPlane','modelMatrix','VertexArray','invGeoMatrix','push','createCommand','BlendingState'];const _0x5d05dc=_0xc0ad;(function(_0x46ae33,_0x5c371d){const _0x2e4206=_0xc0ad;while(!![]){try{const _0x2c720d=parseInt(_0x2e4206(0x191))*-parseInt(_0x2e4206(0x183))+parseInt(_0x2e4206(0x1ab))*parseInt(_0x2e4206(0x170))+-parseInt(_0x2e4206(0x16e))*parseInt(_0x2e4206(0x166))+-parseInt(_0x2e4206(0x19c))*parseInt(_0x2e4206(0x193))+parseInt(_0x2e4206(0x18d))+parseInt(_0x2e4206(0x171))+-parseInt(_0x2e4206(0x17f))*-parseInt(_0x2e4206(0x17d));if(_0x2c720d===_0x5c371d)break;else _0x46ae33['push'](_0x46ae33['shift']());}catch(_0x6f4069){_0x46ae33['push'](_0x46ae33['shift']());}}}(_0x121f,0x56e8c));function _0xc0ad(_0x131e4b,_0x505b96){_0x131e4b=_0x131e4b-0x164;let _0x121fff=_0x121f[_0x131e4b];return _0x121fff;}function S3MObliqueRenderEntity(_0x5541d8){const _0x33b98a=_0xc0ad;RenderEntity[_0x33b98a(0x178)](this,_0x5541d8),this['vs']=_0x20fcfa,this['fs']=_0x1ab936;}S3MObliqueRenderEntity['prototype']=Object[_0x5d05dc(0x195)](RenderEntity['prototype']),S3MObliqueRenderEntity[_0x5d05dc(0x181)][_0x5d05dc(0x196)]=RenderEntity;function getOpaqueRenderState(){const _0x22be8e=_0x5d05dc;return Cesium[_0x22be8e(0x190)][_0x22be8e(0x1a5)]({'cull':{'enabled':!![]},'depthTest':{'enabled':!![],'func':Cesium[_0x22be8e(0x182)][_0x22be8e(0x1a2)]},'blending':Cesium[_0x22be8e(0x18b)]['ALPHA_BLEND']});}let hypMinMaxValueScratch=new Cesium['Cartesian4'](),hypOpacityIntervalFillModeScratch=new Cesium['Cartesian4'](),swipRegionScratch=new Cesium[(_0x5d05dc(0x197))]();function getUniformMap(_0x2dd1c9,_0x15a0ce,_0x273625){return {'uGeoMatrix':function(){const _0x31deac=_0xc0ad;return _0x273625[_0x31deac(0x19a)];},'uInverseGeoMatrix':function(){const _0x169e86=_0xc0ad;return _0x273625[_0x169e86(0x188)];},'uTexture':function(){const _0x382693=_0xc0ad;return _0x2dd1c9[_0x382693(0x169)][0x0];},'uTexture0Width':function(){const _0x2eee93=_0xc0ad;return _0x2dd1c9[_0x2eee93(0x169)][0x0][_0x2eee93(0x16d)];},'uClipMode':function(){const _0x29f8d1=_0xc0ad;return _0x15a0ce[_0x29f8d1(0x179)];},'uClipPlanes':function(){const _0x29351f=_0xc0ad;return _0x15a0ce[_0x29351f(0x185)];},'uHypsometricTexture':function(){const _0x3ea2da=_0xc0ad;return _0x15a0ce[_0x3ea2da(0x1a8)][_0x3ea2da(0x1ae)];},'uHypLineColor':function(){const _0x5649b7=_0xc0ad;return _0x15a0ce[_0x5649b7(0x1a8)][_0x5649b7(0x1ac)][_0x5649b7(0x199)];},'uNoValueColor':function(){const _0x4c3f29=_0xc0ad;return _0x15a0ce[_0x4c3f29(0x1a8)]['setting'][_0x4c3f29(0x165)];},'uMinMaxValue':function(){const _0x219fcd=_0xc0ad;let _0x34de8b=_0x15a0ce['_hypsometric'][_0x219fcd(0x1ac)];return hypMinMaxValueScratch['x']=_0x34de8b[_0x219fcd(0x1a9)],hypMinMaxValueScratch['y']=_0x34de8b['ColorTableMaxKey'],hypMinMaxValueScratch['z']=_0x34de8b[_0x219fcd(0x173)],hypMinMaxValueScratch['w']=_0x34de8b['MaxVisibleValue'],hypMinMaxValueScratch;},'uOpacityIntervalFillMode':function(){const _0xbabab9=_0xc0ad;let _0x57d81f=_0x15a0ce[_0xbabab9(0x1a8)]['setting'];return hypOpacityIntervalFillModeScratch['x']=_0x57d81f[_0xbabab9(0x175)],hypOpacityIntervalFillModeScratch['y']=_0x57d81f[_0xbabab9(0x17e)],hypOpacityIntervalFillModeScratch['z']=_0x57d81f['DisplayMode'],hypOpacityIntervalFillModeScratch;},'uFlattenRect':function(){const _0x2066e3=_0xc0ad;return _0x15a0ce['_flattenPar'][_0x2066e3(0x17b)];},'uFlattenTexture':function(){const _0x31be87=_0xc0ad;return _0x15a0ce['_flattenPar'][_0x31be87(0x1ae)];},'uSwipeRegion':function(){const _0x4e708c=_0xc0ad,_0x4f269f=_0x15a0ce['context'];return swipRegionScratch['x']=_0x15a0ce[_0x4e708c(0x180)]['x']*_0x4f269f[_0x4e708c(0x177)],swipRegionScratch['y']=(0x1-_0x15a0ce[_0x4e708c(0x180)]['y'])*_0x4f269f[_0x4e708c(0x168)],swipRegionScratch['z']=_0x15a0ce[_0x4e708c(0x180)]['z']*_0x4f269f['drawingBufferWidth'],swipRegionScratch['w']=(0x1-_0x15a0ce[_0x4e708c(0x180)]['w'])*_0x4f269f['drawingBufferHeight'],swipRegionScratch;}};}S3MObliqueRenderEntity[_0x5d05dc(0x181)][_0x5d05dc(0x18a)]=function(){const _0x1c5208=_0x5d05dc;if(Cesium[_0x1c5208(0x16a)](this[_0x1c5208(0x1a6)])||this[_0x1c5208(0x1a3)][_0x1c5208(0x18c)]!==0x0||this[_0x1c5208(0x18e)][_0x1c5208(0x18c)]!==0x0||this[_0x1c5208(0x19d)][_0x1c5208(0x18c)]!==0x0)return;let _0x211005=this[_0x1c5208(0x18f)],_0x5b18fb=_0x211005['context'],_0x327b56=this['vertexPackage'],_0x146148=this['arrIndexPackage'],_0x27d8f3=_0x327b56['vertexAttributes'];if(_0x146148[_0x1c5208(0x18c)]<0x1)return;let _0x638180=_0x146148[0x0],_0x32f4d3=this['material'];this[_0x1c5208(0x17a)]=new Cesium[(_0x1c5208(0x187))]({'context':_0x5b18fb,'attributes':_0x27d8f3,'indexBuffer':_0x638180[_0x1c5208(0x198)]}),this[_0x1c5208(0x1a6)]=new Cesium[(_0x1c5208(0x167))]({'primitiveType':_0x638180[_0x1c5208(0x192)],'modelMatrix':this[_0x1c5208(0x186)],'boundingVolume':Cesium[_0x1c5208(0x16b)][_0x1c5208(0x1aa)](this[_0x1c5208(0x1ad)]),'vertexArray':this[_0x1c5208(0x17a)],'shaderProgram':this[_0x1c5208(0x19b)],'pass':_0x32f4d3[_0x1c5208(0x1a4)]?Cesium[_0x1c5208(0x16c)]['TRANSLUCENT']:Cesium['Pass']['OPAQUE'],'renderState':getOpaqueRenderState(),'instanceCount':_0x327b56[_0x1c5208(0x16f)]}),this[_0x1c5208(0x1a6)][_0x1c5208(0x1a1)]=getUniformMap(_0x32f4d3,_0x211005,this),this[_0x1c5208(0x19e)]=undefined,this[_0x1c5208(0x194)]=undefined,this['vs']=undefined,this['fs']=undefined,this[_0x1c5208(0x176)]=!![];},S3MObliqueRenderEntity[_0x5d05dc(0x181)]['update']=function(_0x221c88,_0x531987){const _0x10a9a6=_0x5d05dc;if(!this[_0x10a9a6(0x176)]){this[_0x10a9a6(0x1af)](_0x221c88),this[_0x10a9a6(0x1a7)](_0x221c88),this['createCommand'](_0x221c88),this[_0x10a9a6(0x172)](_0x531987);return;}_0x221c88[_0x10a9a6(0x19f)][_0x10a9a6(0x189)](this[_0x10a9a6(0x1a6)]);},S3MObliqueRenderEntity['prototype']['isDestroyed']=function(){return ![];},S3MObliqueRenderEntity[_0x5d05dc(0x181)][_0x5d05dc(0x184)]=function(){const _0x1657d3=_0x5d05dc;return this['shaderProgram']=this[_0x1657d3(0x19b)]&&!this[_0x1657d3(0x19b)]['isDestroyed']()&&this[_0x1657d3(0x19b)][_0x1657d3(0x184)](),this[_0x1657d3(0x17a)]=this[_0x1657d3(0x17a)]&&!this[_0x1657d3(0x17a)][_0x1657d3(0x17c)]()&&this[_0x1657d3(0x17a)][_0x1657d3(0x184)](),this['material']=this[_0x1657d3(0x1a0)]&&!this[_0x1657d3(0x1a0)]['isDestroyed']()&&this[_0x1657d3(0x1a0)][_0x1657d3(0x184)](),this[_0x1657d3(0x1a6)]=undefined,this[_0x1657d3(0x19e)]=null,this[_0x1657d3(0x194)]=null,this[_0x1657d3(0x186)]=undefined,this['pickInfo']=undefined,this[_0x1657d3(0x164)]=undefined,this['vs']=undefined,this['fs']=undefined,Cesium[_0x1657d3(0x174)](this);};

    var _0x1d65=['39383gDKpvL','1523052mwjaCL','66581ZmESwK','1756389SWxgtf','1622767AZNGMk','1HslPiz','880133vXOiCl','17QBuEHU','124SskJms','72515bonaWb','9YSCnen'];(function(_0x1a4e1d,_0x399458){var _0x24d5f4=_0x1711;while(!![]){try{var _0x202cdf=-parseInt(_0x24d5f4(0x1e8))*-parseInt(_0x24d5f4(0x1ed))+-parseInt(_0x24d5f4(0x1e7))+-parseInt(_0x24d5f4(0x1e9))+-parseInt(_0x24d5f4(0x1ec))*parseInt(_0x24d5f4(0x1eb))+parseInt(_0x24d5f4(0x1ef))*parseInt(_0x24d5f4(0x1e5))+-parseInt(_0x24d5f4(0x1ea))+parseInt(_0x24d5f4(0x1ee))*parseInt(_0x24d5f4(0x1e6));if(_0x202cdf===_0x399458)break;else _0x1a4e1d['push'](_0x1a4e1d['shift']());}catch(_0x40d733){_0x1a4e1d['push'](_0x1a4e1d['shift']());}}}(_0x1d65,0xd839f));function _0x1711(_0x46df20,_0x364cd0){_0x46df20=_0x46df20-0x1e5;var _0x1d65fc=_0x1d65[_0x46df20];return _0x1d65fc;}var _0x1bfb0f = '\x0a\x20\x20\x20\x20attribute\x20vec4\x20aPosition;\x0a\x20\x20\x20\x20attribute\x20vec4\x20aColor;\x0a\x20\x20\x20\x20attribute\x20vec3\x20aNormal;\x0a#ifdef\x20Instance\x0a\x20\x20\x20\x20attribute\x20float\x20instanceId;\x0a#else\x0a\x20\x20\x20\x20attribute\x20float\x20batchId;\x0a#endif\x20\x0a\x0a#ifdef\x20TextureAtlas\x0a\x20\x20\x20\x20attribute\x20float\x20aTextureBatchId0;\x0a#endif\x0a\x0a#ifdef\x20TexCoord\x0a\x20\x20\x20\x20attribute\x20vec4\x20aTexCoord0;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexCoord;\x0a#ifdef\x20TextureAtlas\x0a\x20\x20\x20\x20uniform\x20vec4\x20uTexAtlasDim;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexAtlasTran;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexAtlasScale;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexAtlasSize;\x0a\x20\x20\x20\x20varying\x20vec2\x20vMaxMipLevel;\x0a#else\x0a\x20\x20\x20\x20uniform\x20float\x20uTexture0Width;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexMatrix;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexCoordTransform;\x0a#endif\x0a#endif\x0a\x0a#ifdef\x20TexCoord2\x0a\x20\x20\x20\x20attribute\x20vec4\x20aTexCoord1;\x0a\x20\x20\x20\x20uniform\x20float\x20uTexture1Width;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexMatrix2;\x0a#endif\x0a#ifdef\x20Instance\x0a\x20\x20\x20\x20attribute\x20vec4\x20uv2;\x0a\x20\x20\x20\x20attribute\x20vec4\x20uv3;\x0a\x20\x20\x20\x20attribute\x20vec4\x20uv4;\x0a\x20\x20\x20\x20attribute\x20vec4\x20secondary_colour;\x0a\x20\x20\x20\x20attribute\x20vec4\x20uv6;\x20\x20\x20\x0a#endif\x0a#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20varying\x20float\x20wValue;\x20\x20\x20\x20\x0a#endif\x0a#ifdef\x20FLATTEN\x0a\x20\x20\x20\x20uniform\x20mat4\x20uGeoMatrix;\x0a\x20\x20\x20\x20uniform\x20mat4\x20uInverseGeoMatrix;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uFlattenTexture;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uFlattenRect;\x0a#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20uniform\x20vec4\x20uSelectedColor;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20varying\x20vec4\x20vSecondColor;\x0a\x20\x20\x20\x20varying\x20vec4\x20vPositionMC;\x0a\x20\x20\x20\x20varying\x20vec3\x20vPositionEC;\x0a\x20\x20\x20\x20varying\x20vec3\x20vNormalEC;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20varying\x20vec4\x20vColor;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20const\x20float\x20SHIFT_LEFT8\x20=\x20256.0;\x0a\x20\x20\x20\x20const\x20float\x20SHIFT_RIGHT8\x20=\x201.0\x20/\x20256.0;\x0a\x20\x20\x20\x20const\x20float\x20SHIFT_RIGHT4\x20=\x201.0\x20/\x2016.0;\x0a\x20\x20\x20\x20const\x20float\x20SHIFT_LEFT4\x20=\x2016.0;\x0a\x20\x20\x20\x20void\x20getTextureMatrixFromZValue(in\x20float\x20nZ,\x20inout\x20float\x20XTran,\x20inout\x20float\x20YTran,\x20inout\x20float\x20scale)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(nZ\x20<=\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20nDel8\x20=\x20floor(nZ\x20*\x20SHIFT_RIGHT8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20nDel16\x20=\x20floor(nDel8\x20*\x20SHIFT_RIGHT8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20nDel20\x20=\x20floor(nDel16\x20*\x20SHIFT_RIGHT4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20YTran\x20=\x20nZ\x20-\x20nDel8\x20*\x20SHIFT_LEFT8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20XTran\x20=\x20nDel8\x20-\x20nDel16\x20*\x20SHIFT_LEFT8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20nLevel\x20=\x20nDel16\x20-\x20nDel20\x20*\x20SHIFT_LEFT4;\x0a\x20\x20\x20\x20\x20\x20\x20\x20scale\x20=\x201.0\x20/\x20pow(2.0,\x20nLevel);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20void\x20operation(vec4\x20operationType,\x20vec4\x20color,\x20vec4\x20selectedColor,\x20inout\x20vec4\x20vertexColor)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20right_2\x20=\x20operationType.x\x20*\x200.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20right_4\x20=\x20right_2\x20*\x200.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20right_8\x20=\x20right_4\x20*\x200.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20right_16\x20=\x20right_8\x20*\x200.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20isSetColor\x20=\x20fract(right_2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(isSetColor\x20>\x200.1)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vertexColor\x20*=\x20color;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20isPicked\x20=\x20fract(floor(right_2)*\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(isPicked\x20>\x200.1)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vertexColor\x20*=\x20selectedColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20isHide\x20=\x20fract(floor(right_4)*\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(isHide\x20>\x200.1)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vertexColor.a\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a#ifdef\x20FLATTEN\x0a\x20\x20\x20\x20float\x20unpackValue(vec4\x20packedValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20SHIFT_LEFT16\x20=\x2065536.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20SHIFT_LEFT8\x20=\x20256.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20value\x20=\x20packedValue\x20*\x20255.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20value.r\x20*\x20SHIFT_LEFT16\x20+\x20value.g\x20*\x20SHIFT_LEFT8\x20+\x20value.b\x20-\x209000.0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20vec4\x20calculateHeight(vec4\x20vertexPos)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20vecPos\x20=\x20uGeoMatrix\x20*\x20vec4(vertexPos.xyz,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20vecRatio\x20=\x20vec2(uFlattenRect.z\x20-\x20uFlattenRect.x,\x20uFlattenRect.w\x20-\x20uFlattenRect.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20vecTexCoord\x20=\x20vec2(vecPos.x\x20-\x20uFlattenRect.x,\x20vecPos.y\x20-\x20uFlattenRect.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vecTexCoord.x\x20=\x20vecTexCoord.x\x20/\x20vecRatio.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vecTexCoord.y\x20=\x20vecTexCoord.y\x20/\x20vecRatio.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vecTexCoord.x\x20>\x201.0\x20||\x20vecTexCoord.x\x20<\x200.0\x20||\x20vecTexCoord.y\x20>\x201.0\x20||\x20vecTexCoord.y\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vertexPos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fHeight\x20=\x20unpackValue(texture2D(uFlattenTexture,\x20vecTexCoord.xy));\x0a\x20\x20\x20\x20\x20\x20\x20\x20fHeight\x20=\x20fHeight;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vecPos.z\x20>\x20fHeight)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vecPos.z\x20=\x20fHeight;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vecPos.w\x20=\x20vecPos.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20uInverseGeoMatrix\x20*\x20vec4(vecPos.xyz,\x201.0);\x0a\x20\x20\x20\x20}\x0a#endif\x0a#ifdef\x20TextureAtlas\x0a\x20\x20\x20\x20uniform\x20highp\x20sampler2D\x20batchTextureAtlas;\x20\x0a\x20\x20\x20\x20uniform\x20vec4\x20batchTextureAtlasStep;\x20\x0a#ifdef\x20SecTextureAtlas\x0a\x20\x20\x20\x20uniform\x20highp\x20sampler2D\x20batchTextureAtlasSec;\x20\x0a\x20\x20\x20\x20uniform\x20vec4\x20batchTextureAtlasStepSec;\x20\x0a#endif\x0a\x20\x20\x20\x20vec2\x20computeAtlasSt(float\x20batchId,\x20vec4\x20step)\x20\x0a\x20\x20\x20\x20{\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20stepX\x20=\x20step.x;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20centerX\x20=\x20step.y;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20numberOfAttributes\x20=\x20float(1);\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec2(centerX\x20+\x20(batchId\x20*\x20numberOfAttributes\x20*\x20stepX),\x200.5);\x20\x0a\x20\x20\x20\x20}\x20\x0a\x20\x20\x20\x20vec4\x20atlas_batchTable_xywh(float\x20batchId,\x20sampler2D\x20texture,\x20vec4\x20step)\x20\x0a\x20\x20\x20\x20{\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20st\x20=\x20computeAtlasSt(batchId,\x20step);\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20st.x\x20+=\x20step.x\x20*\x20float(0);\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20textureValue\x20=\x20texture2D(texture,\x20st);\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20value\x20=\x20textureValue;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20value;\x20\x0a\x20\x20\x20\x20}\x20\x0a\x20\x20\x20\x20void\x20getTexAtlasParameter(in\x20vec4\x20xywh,\x20in\x20vec2\x20textureDim,\x20inout\x20vec2\x20translate,\x20inout\x20vec2\x20scale,\x20inout\x20vec2\x20texSize,\x20inout\x20float\x20maxMipLevel)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20width\x20=\x20xywh.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20height\x20\x20=\x20xywh.w;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width\x20*=\x202.0\x20/\x203.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20maxMipLevel\x20=\x20log2(min(width,\x20height));\x0a\x20\x20\x20\x20\x20\x20\x20\x20scale.x\x20=\x20width\x20/\x20textureDim.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20scale.y\x20=\x20height\x20/\x20textureDim.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20translate.x\x20=\x20xywh.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20translate.y\x20\x20=\x20xywh.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20translate\x20/=\x20textureDim;\x0a\x20\x20\x20\x20\x20\x20\x20\x20texSize.x\x20=\x20width;\x0a\x20\x20\x20\x20\x20\x20\x20\x20texSize.y\x20=\x20height;\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x20\x20\x20\x20void\x20main()\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20#ifdef\x20TexCoord\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexCoord.xy\x20=\x20aTexCoord0.xy;\x0a\x20\x20\x20\x20#ifdef\x20TextureAtlas\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(aTextureBatchId0\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vMaxMipLevel.x\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20xywh\x20=\x20atlas_batchTable_xywh(aTextureBatchId0,\x20batchTextureAtlas,\x20batchTextureAtlasStep);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20getTexAtlasParameter(xywh,\x20uTexAtlasDim.xy,\x20vTexAtlasTran.xy,\x20vTexAtlasScale.xy,\x20vTexAtlasSize.xy,\x20vMaxMipLevel.x);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix\x20=\x20vec4(0.0,0.0,1.0,0.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexCoordTransform.x\x20=\x20aTexCoord0.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vTexCoordTransform.x\x20<\x20-90000.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix.z\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20getTextureMatrixFromZValue(floor(vTexCoordTransform.x),\x20vTexMatrix.x,\x20vTexMatrix.y,\x20vTexMatrix.z);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix.w\x20=\x20log2(uTexture0Width\x20*\x20vTexMatrix.z);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#ifdef\x20TexCoord2\x0a\x20\x20\x20\x20#ifdef\x20TextureAtlas\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(aTextureBatchIdSec\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vMaxMipLevel.y\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20xywh2\x20=\x20atlas_batchTable_xywh(aTextureBatchIdSec,\x20batchTextureAtlasSec,\x20batchTextureAtlasStepSec);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20getTexAtlasParameter(xywh2,\x20uTexAtlasDim.zw,\x20vTexAtlasTran.zw,\x20vTexAtlasScale.zw,\x20vTexAtlasSize.zw,\x20vMaxMipLevel.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexCoord.zw\x20=\x20aTexCoord1.xy;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix2\x20=\x20vec4(0.0,0.0,1.0,0.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexCoordTransform.y\x20=\x20aTexCoord1.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vTexCoordTransform.y\x20<\x20-90000.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix2.z\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20getTextureMatrixFromZValue(floor(vTexCoordTransform.y),\x20vTexMatrix2.x,\x20vTexMatrix2.y,\x20vTexMatrix2.z);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix2.w\x20=\x20log2(uTexture1Width\x20*\x20vTexMatrix.z);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec4\x20vertexPos\x20=\x20aPosition;\x0a#ifdef\x20FLATTEN\x0a\x20\x20\x20\x20vertexPos\x20=\x20calculateHeight(vertexPos);\x0a#endif\x0a\x20\x20\x20\x20vec4\x20vertexColor\x20=\x20vec4(1.0);\x0a#ifdef\x20VertexColor\x0a\x20\x20\x20\x20vertexColor\x20=\x20aColor;\x0a#endif\x0a\x20\x20\x20\x20#ifdef\x20Instance\x0a\x20\x20\x20\x20\x20\x20\x20\x20mat4\x20worldMatrix;\x0a\x20\x20\x20\x20\x20\x20\x20\x20worldMatrix[0]\x20=\x20uv2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20worldMatrix[1]\x20=\x20uv3;\x0a\x20\x20\x20\x20\x20\x20\x20\x20worldMatrix[2]\x20=\x20uv4;\x0a\x20\x20\x20\x20\x20\x20\x20\x20worldMatrix[3]\x20=\x20vec4(0,\x200,\x200,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vertexPos\x20=\x20vec4(vertexPos.xyz,1.0)\x20*\x20worldMatrix;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vertexColor\x20*=\x20secondary_colour;\x20\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20#ifdef\x20Instance\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20index\x20=\x20instanceId;\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20index\x20=\x20batchId;\x0a\x20\x20\x20\x20#endif\x20\x20\x0a\x20\x20\x20\x20#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20\x20\x20\x20\x20wValue\x20=\x20vertexPos.w;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20operationType\x20=\x20s3m_batchTable_operation(index);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20objsColor\x20=\x20s3m_batchTable_color(index);\x0a\x20\x20\x20\x20\x20\x20\x20\x20operation(operationType,\x20objsColor,\x20uSelectedColor,\x20vertexColor);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vSecondColor\x20=\x20s3m_batchTable_pickColor(index);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20positionMC\x20=\x20vec4(vertexPos.xyz,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vColor\x20=\x20vertexColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vNormalEC\x20=\x20czm_normal\x20*\x20aNormal;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vPositionMC\x20=\x20positionMC;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vPositionEC\x20=\x20(czm_modelView\x20*\x20positionMC).xyz;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20czm_modelViewProjection\x20*\x20vec4(vertexPos.xyz,\x201.0);\x0a\x20\x20\x20\x20}\x0a';

    var _0x1b85=['18pesccb','52648FzoYjk','711234LjLKxa','\x0a#ifdef\x20GL_OES_standard_derivatives\x0a#extension\x20GL_OES_standard_derivatives\x20:\x20enable\x0a#endif\x0a#ifdef\x20GL_EXT_shader_texture_lod\x0a#extension\x20GL_EXT_shader_texture_lod\x20:\x20enable\x0a#endif\x0a\x20\x20\x20\x20uniform\x20vec4\x20uDiffuseColor;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uAmbientColor;\x0a#ifdef\x20TexCoord\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uTexture;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexCoord;\x0a#ifdef\x20TextureAtlas\x0a\x20\x20\x20\x20uniform\x20vec4\x20uTexAtlasDim;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexAtlasTran;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexAtlasScale;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexAtlasSize;\x0a\x20\x20\x20\x20varying\x20vec2\x20vMaxMipLevel;\x0a#else\x0a\x20\x20\x20\x20uniform\x20float\x20uTexture0Width;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexCoordTransform;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexMatrix;\x0a#endif\x0a#endif\x0a\x0a\x20\x20\x20\x20varying\x20vec4\x20vColor;\x0a\x20\x20\x20\x20varying\x20vec4\x20vSecondColor;\x0a\x20\x20\x20\x20varying\x20vec4\x20vPositionMC;\x0a\x20\x20\x20\x20varying\x20vec3\x20vPositionEC;\x0a\x20\x20\x20\x20varying\x20vec3\x20vNormalEC;\x0a#ifdef\x20TexCoord2\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uTexture2;\x0a\x20\x20\x20\x20uniform\x20float\x20uTexture1Width;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexMatrix2;\x0a#endif\x20\x0a\x20\x20\x20\x20void\x20calculateMipLevel(in\x20vec2\x20inTexCoord,\x20in\x20float\x20vecTile,\x20in\x20float\x20fMaxMip,\x20inout\x20float\x20mipLevel)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20dx\x20=\x20dFdx(inTexCoord\x20*\x20vecTile);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20dy\x20=\x20dFdy(inTexCoord\x20*\x20vecTile);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dotX\x20=\x20dot(dx,\x20dx);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dotY\x20=\x20dot(dy,\x20dy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dMax\x20=\x20max(dotX,\x20dotY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dMin\x20=\x20min(dotX,\x20dotY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20offset\x20=\x20(dMax\x20-\x20dMin)\x20/\x20(dMax\x20+\x20dMin);\x0a\x20\x20\x20\x20\x20\x20\x20\x20offset\x20=\x20clamp(offset,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20d\x20=\x20dMax\x20*\x20(1.0\x20-\x20offset)\x20+\x20dMin\x20*\x20offset;\x0a\x20\x20\x20\x20\x20\x20\x20\x20mipLevel\x20=\x200.5\x20*\x20log2(d);\x0a\x20\x20\x20\x20\x20\x20\x20\x20mipLevel\x20=\x20clamp(mipLevel,\x200.0,\x20fMaxMip\x20-\x201.62);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20void\x20calculateMipLevel(in\x20vec2\x20inTexCoord,\x20in\x20vec2\x20vecTile,\x20in\x20float\x20fMaxMip,\x20inout\x20float\x20mipLevel)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20dx\x20=\x20dFdx(inTexCoord\x20*\x20vecTile.x);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20dy\x20=\x20dFdy(inTexCoord\x20*\x20vecTile.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dotX\x20=\x20dot(dx,\x20dx);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dotY\x20=\x20dot(dy,\x20dy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dMax\x20=\x20max(dotX,\x20dotY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dMin\x20=\x20min(dotX,\x20dotY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20offset\x20=\x20(dMax\x20-\x20dMin)\x20/\x20(dMax\x20+\x20dMin);\x0a\x20\x20\x20\x20\x20\x20\x20\x20offset\x20=\x20clamp(offset,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20d\x20=\x20dMax\x20*\x20(1.0\x20-\x20offset)\x20+\x20dMin\x20*\x20offset;\x0a\x20\x20\x20\x20\x20\x20\x20\x20mipLevel\x20=\x200.5\x20*\x20log2(d);\x0a\x20\x20\x20\x20\x20\x20\x20\x20mipLevel\x20=\x20clamp(mipLevel,\x200.0,\x20fMaxMip\x20-\x201.62);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20void\x20calculateTexCoord(in\x20vec3\x20inTexCoord,\x20in\x20float\x20scale,\x20in\x20float\x20XTran,\x20in\x20float\x20YTran,\x20in\x20float\x20fTile,\x20in\x20float\x20mipLevel,\x20inout\x20vec2\x20outTexCoord)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(inTexCoord.z\x20<\x20-9000.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outTexCoord\x20=\x20inTexCoord.xy;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20fTexCoord\x20=\x20fract(inTexCoord.xy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20offset\x20=\x201.0\x20*\x20pow(2.0,\x20mipLevel)\x20/\x20fTile;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fTexCoord\x20=\x20clamp(fTexCoord,\x20offset,\x201.0\x20-\x20offset);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outTexCoord.x\x20=\x20(fTexCoord.x\x20+\x20XTran)\x20*\x20scale;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outTexCoord.y\x20=\x20(fTexCoord.y\x20+\x20YTran)\x20*\x20scale;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec4\x20getTexColorForS3M(sampler2D\x20curTexture,\x20vec3\x20oriTexCoord,\x20float\x20texTileWidth,\x20float\x20fMaxMipLev,\x20float\x20fTexCoordScale,\x20vec2\x20vecTexCoordTranslate)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20color\x20=\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20mipLevel\x20=\x200.0;\x0a\x20\x20\x20\x20#ifdef\x20GL_OES_standard_derivatives\x0a\x20\x20\x20\x20\x20\x20\x20\x20calculateMipLevel(oriTexCoord.xy,\x20texTileWidth,\x20fMaxMipLev,\x20mipLevel);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20realTexCoord;\x0a\x20\x20\x20\x20\x20\x20\x20\x20calculateTexCoord(oriTexCoord,\x20fTexCoordScale,\x20vecTexCoordTranslate.x,\x20vecTexCoordTranslate.y,\x20texTileWidth,\x20mipLevel,\x20realTexCoord);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(oriTexCoord.z\x20<\x20-9000.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color\x20=\x20texture2D(curTexture,\x20realTexCoord.xy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#ifdef\x20GL_EXT_shader_texture_lod\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color\x20=\x20texture2DLodEXT(curTexture,\x20realTexCoord.xy,\x20mipLevel);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color\x20=\x20texture2D(curTexture,\x20realTexCoord.xy,\x20mipLevel);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20color;\x0a\x20\x20\x20\x20}\x0a#ifdef\x20TexCoord\x0a#ifdef\x20TextureAtlas\x0a\x20\x20\x20\x20vec4\x20getTextureAtlasColor(sampler2D\x20texture,\x20vec2\x20uv,\x20vec2\x20texDim,\x20vec2\x20texTran,\x20vec2\x20texScale,\x20float\x20maxMipLevel)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(maxMipLevel\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20colorCeil\x20=\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20mipLevel\x20=\x200.0;\x0a\x20\x20\x20\x20#ifdef\x20GL_OES_standard_derivatives\x0a\x20\x20\x20\x20\x20\x20\x20\x20calculateMipLevel(uv,\x20texDim,\x20maxMipLevel,\x20mipLevel);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20ceilMipLevel\x20=\x20ceil(mipLevel);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20translate\x20=\x20vec2(texTran.x,\x20texTran.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20temp;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(ceilMipLevel\x20>\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20translate.x\x20=\x20texTran.x\x20+\x20texScale.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20temp\x20=\x20pow(2.0,\x20ceilMipLevel\x20-\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20translate.y\x20=\x20texTran.y\x20+\x20texScale.y\x20*\x20(temp\x20-\x201.0)\x20/\x20temp;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20scale\x20=\x201.0\x20/\x20pow(2.0,\x20ceilMipLevel);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20texcoord\x20=\x20fract(uv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20offsetX\x20=\x20pow(2.0,\x20ceilMipLevel)\x20/\x20texDim.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20offsetY\x20=\x20pow(2.0,\x20ceilMipLevel)\x20/\x20texDim.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord.x\x20=\x20clamp(texcoord.x,\x200.0\x20+\x20offsetX,\x201.0\x20-\x20offsetX);\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord.y\x20=\x20clamp(texcoord.y,\x200.0\x20+\x20offsetY,\x201.0\x20-\x20offsetY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord.x\x20=\x20texcoord.x\x20*\x20texScale.x\x20*\x20scale\x20+\x20translate.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord.y\x20=\x20texcoord.y\x20*\x20texScale.y\x20*\x20scale\x20+\x20translate.y;\x0a\x20\x20\x20\x20#ifdef\x20GL_EXT_shader_texture_lod\x0a\x20\x20\x20\x20\x20\x20\x20\x20colorCeil\x20=\x20texture2DLodEXT(texture,\x20texcoord.xy,\x200.0);\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20colorCeil\x20=\x20texture2D(texture,\x20texcoord.xy,\x200.0);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20colorFloor\x20=\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20floorMipLevel\x20=\x20floor(mipLevel);\x0a\x20\x20\x20\x20\x20\x20\x20\x20translate\x20=\x20vec2(texTran.x,\x20texTran.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(floorMipLevel\x20>\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20translate.x\x20=\x20texTran.x\x20+\x20texScale.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20temp\x20=\x20pow(2.0,\x20floorMipLevel\x20-\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20translate.y\x20=\x20texTran.y\x20+\x20texScale.y\x20*\x20(temp\x20-\x201.0)\x20/\x20temp;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20scale\x20=\x201.0\x20/\x20pow(2.0,\x20floorMipLevel);\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord\x20=\x20fract(uv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20offsetX\x20=\x20pow(2.0,\x20floorMipLevel)\x20/\x20texDim.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20offsetY\x20=\x20pow(2.0,\x20floorMipLevel)\x20/\x20texDim.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord.x\x20=\x20clamp(texcoord.x,\x200.0\x20+\x20offsetX,\x201.0\x20-\x20offsetX);\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord.y\x20=\x20clamp(texcoord.y,\x200.0\x20+\x20offsetY,\x201.0\x20-\x20offsetY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord.x\x20=\x20texcoord.x\x20*\x20texScale.x\x20*\x20scale\x20+\x20translate.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord.y\x20=\x20texcoord.y\x20*\x20texScale.y\x20*\x20scale\x20+\x20translate.y;\x0a\x20\x20\x20\x20#ifdef\x20GL_EXT_shader_texture_lod\x0a\x20\x20\x20\x20\x20\x20\x20\x20colorFloor\x20=\x20texture2DLodEXT(texture,\x20texcoord.xy,\x200.0);\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20colorFloor\x20=\x20texture2D(texture,\x20texcoord.xy,\x200.0);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20color\x20=\x20colorCeil\x20*\x200.5\x20+\x20colorFloor\x20*\x200.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20color;\x0a\x20\x20\x20\x20}\x0a#else\x0a\x20\x20\x20\x20vec4\x20getTextureColor()\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vTexMatrix.z\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20texTileWidth0\x20=\x20vTexMatrix.z\x20*\x20uTexture0Width;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20realTexCoord\x20=\x20vec3(vTexCoord.xy,\x20vTexCoordTransform.x);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20FColor\x20=\x20getTexColorForS3M(uTexture,\x20realTexCoord,\x20texTileWidth0,\x20vTexMatrix.w,\x20vTexMatrix.z,\x20vTexMatrix.xy);\x0a\x20\x20\x20\x20#ifdef\x20TexCoord2\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20texTileWidth1\x20=\x20vTexMatrix2.z\x20*\x20uTexture1Width;\x0a\x20\x20\x20\x20\x20\x20\x20\x20realTexCoord\x20=\x20vec3(vTexCoord.zw,\x20vTexCoordTransform.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20SColor\x20=\x20getTexColorForS3M(uTexture2,\x20realTexCoord,\x20texTileWidth1,\x20vTexMatrix2.w,\x20vTexMatrix2.z,\x20vTexMatrix2.xy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20SColor.r\x20=\x20clamp(SColor.r,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20SColor.g\x20=\x20clamp(SColor.g,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20SColor.b\x20=\x20clamp(SColor.b,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20FColor\x20*\x20SColor;\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20FColor;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20}\x0a#endif\x0a#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20const\x20float\x20M_PI\x20=\x203.141592653589793;\x0a\x20\x20\x20\x20vec3\x20SRGBtoLINEAR3(vec3\x20srgbIn)\x20\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20pow(srgbIn,\x20vec3(2.2));\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec4\x20SRGBtoLINEAR4(vec4\x20srgbIn)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20srgbIn\x20=\x20srgbIn\x20;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20linearOut\x20=\x20pow(srgbIn.rgb,\x20vec3(2.2));\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(linearOut,\x20srgbIn.a);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20vec3\x20LINEARtoSRGB(vec3\x20linearIn)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20#ifndef\x20HDR\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20pow(linearIn,\x20vec3(1.0/2.2));\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20linearIn;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20vec3\x20lambertianDiffuse(vec3\x20diffuseColor)\x20\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20diffuseColor\x20/\x20M_PI;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec3\x20fresnelSchlick2(vec3\x20f0,\x20vec3\x20f90,\x20float\x20VdotH)\x20\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20f0\x20+\x20(f90\x20-\x20f0)\x20*\x20pow(clamp(1.0\x20-\x20VdotH,\x200.0,\x201.0),\x205.0);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20float\x20smithVisibilityG1(float\x20NdotV,\x20float\x20roughness)\x20\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20k\x20=\x20(roughness\x20+\x201.0)\x20*\x20(roughness\x20+\x201.0)\x20/\x208.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20NdotV\x20/\x20(NdotV\x20*\x20(1.0\x20-\x20k)\x20+\x20k);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20float\x20smithVisibilityGGX(float\x20roughness,\x20float\x20NdotL,\x20float\x20NdotV)\x20\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20smithVisibilityG1(NdotL,\x20roughness)\x20*\x20smithVisibilityG1(NdotV,\x20roughness);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20float\x20GGX(float\x20roughness,\x20float\x20NdotH)\x20\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20roughnessSquared\x20=\x20roughness\x20*\x20roughness;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20f\x20=\x20(NdotH\x20*\x20roughnessSquared\x20-\x20NdotH)\x20*\x20NdotH\x20+\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20roughnessSquared\x20/\x20(M_PI\x20*\x20f\x20*\x20f);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec3\x20applyTonemapping(vec3\x20linearIn)\x20\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20#ifndef\x20HDR\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20czm_acesTonemapping(linearIn);\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20linearIn;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20}\x0a#ifdef\x20CLIP\x0a\x20\x20\x20\x20uniform\x20float\x20uClipMode;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uClipPlanes[6];\x0a\x20\x20\x20\x20float\x20clipBehindAllPlane(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x20-1.0;\x0a\x20\x20\x20\x20#ifdef\x20CLIPPLANE\x0a\x20\x20\x20\x20\x20\x20\x20\x20distance\x20=\x20czm_planeDistance(uClipPlanes[0].xyz,\x20uClipPlanes[0].w,\x20vertex.xyz);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if\x20(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distance\x20=\x20czm_planeDistance(uClipPlanes[i].xyz,\x20uClipPlanes[i].w,\x20vertex.xyz);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20float\x20clipBehindAnyPlane(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x20czm_planeDistance(uClipPlanes[i].xyz,\x20uClipPlanes[i].w,\x20vertex.xyz);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if((distance\x20+\x20fBorderWidth)\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20float\x20clipAnythingButLine(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x20czm_planeDistance(uClipPlanes[i].xyz,\x20uClipPlanes[i].w,\x20vertex.xyz);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20vec4\x20clip(vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(uClipMode\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#ifdef\x20GL_OES_standard_derivatives\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dxc\x20=\x20abs(dFdx(vertex.x));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dyc\x20=\x20abs(dFdy(vertex.y));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fBorderWidth\x20=\x20max(dxc,\x20dyc);\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fBorderWidth\x20=\x201.0;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20clipResult\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(uClipMode\x20<\x201.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipBehindAnyPlane(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(uClipMode\x20<\x202.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipBehindAllPlane(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(uClipMode\x20<\x203.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipAnythingButLine(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(clipResult\x20<\x20-0.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(clipResult\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x0a#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uHypsometricTexture;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uMinMaxValue;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uOpacityIntervalFillMode;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uHypLineColor;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uNoValueColor;\x0a\x20\x20\x20\x20varying\x20float\x20wValue;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20float\x20computeMixCon(float\x20fValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20distanceToContour;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20minVisibleValue\x20=\x20uMinMaxValue.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20maxVisibleValue\x20=\x20uMinMaxValue.w;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20interval\x20=\x20uOpacityIntervalFillMode.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(abs(maxVisibleValue\x20-\x20minVisibleValue)\x20>\x200.1)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(fValue\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distanceToContour\x20=\x20mod(fValue\x20-\x200.0002,\x20interval);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20t\x20=\x20floor(fValue\x20/\x20interval);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distanceToContour\x20=\x20abs(fValue\x20-\x20(t\x20*\x20interval)\x20-\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distanceToContour\x20=\x20abs(fValue\x20-\x20maxVisibleValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dxc\x20=\x20abs(dFdx(fValue));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dyc\x20=\x20abs(dFdy(fValue));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dF\x20=\x20max(dxc,\x20dyc);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20distanceToContour\x20<\x20dF\x20?\x201.0\x20:\x200.0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec4\x20computeContourMapColor(float\x20fValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20floorValue\x20=\x20uMinMaxValue.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20ceilValue\x20=\x20uMinMaxValue.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20threshold\x20=\x20abs(ceilValue\x20-\x20floorValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20contourRate\x20=\x20(fValue\x20-\x20floorValue)\x20/\x20threshold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20finalCoord\x20=\x20clamp(contourRate,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20count\x20=\x20floor(finalCoord\x20*\x2016.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20y\x20=\x20(count*2.0\x20+\x201.0)/32.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20x\x20=\x20fract(finalCoord*16.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(y\x20>\x201.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20x\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20contourCoord\x20=\x20vec2(x,\x20y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20texture2D(uHypsometricTexture,\x20contourCoord);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec4\x20getContourMapColor(vec4\x20oriColor,\x20float\x20fValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20contourMapColor\x20=\x20vec4(0.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20finalOpacity\x20=\x20uOpacityIntervalFillMode.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20minVisibleValue\x20=\x20uMinMaxValue.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20maxVisibleValue\x20=\x20uMinMaxValue.w;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fillMode\x20=\x20uOpacityIntervalFillMode.z;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(fValue\x20>\x20maxVisibleValue\x20+\x204.0\x20||\x20fValue\x20<\x20minVisibleValue\x20-\x204.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20uNoValueColor\x20*\x20oriColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(fillMode\x20>\x202.9)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20mix_con\x20=\x20computeMixCon(fValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20contourMapColor\x20=\x20mix(computeContourMapColor(fValue),\x20uHypLineColor,\x20mix_con);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(fillMode\x20>\x201.9)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20finalOpacity\x20=\x20computeMixCon(fValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20contourMapColor\x20=\x20uHypLineColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(fillMode\x20>\x200.9)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20contourMapColor\x20=\x20computeContourMapColor(fValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20finalOpacity\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20finalColor\x20=\x20mix(oriColor,\x20contourMapColor,\x20finalOpacity);\x0a\x20\x20\x20\x20#ifdef\x20PT_CLOUD\x0a\x20\x20\x20\x20\x20\x20\x20\x20finalColor\x20=\x20mix(vec4(1.0,1.0,1.0,1.0),\x20contourMapColor,\x20finalOpacity);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20finalColor;\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x20\x20\x0a#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20uniform\x20vec4\x20uSwipeRegion;\x0a\x20\x20\x20\x20void\x20rollerShutter(vec2\x20coord,\x20vec4\x20region)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20f\x20=\x20step(region.xw,\x20coord);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20s\x20=\x20step(coord,\x20region.zy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(f.x\x20*\x20f.y\x20*\x20s.x\x20*\x20s.y\x20<\x201.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x20\x20\x20\x20vec3\x20computeNormal(in\x20vec3\x20oriVertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20normal\x20=\x20cross(vec3(dFdx(oriVertex.x),\x20dFdx(oriVertex.y),\x20dFdx(oriVertex.z)),\x20vec3(dFdy(oriVertex.x),\x20dFdy(oriVertex.y),\x20dFdy(oriVertex.z)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20normal\x20=\x20normalize(normal);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20normal;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20void\x20main()\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20if(vColor.a\x20<\x200.1)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20}\x20\x0a\x20\x20\x20\x20#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20\x20\x20\x20\x20rollerShutter(gl_FragCoord.xy,\x20uSwipeRegion);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20baseColorWithAlpha\x20=\x20vColor;\x0a\x20\x20\x20\x20#ifdef\x20TexCoord\x0a\x20\x20\x20\x20#ifdef\x20TextureAtlas\x0a\x20\x20\x20\x20\x20\x20\x20\x20baseColorWithAlpha\x20*=\x20getTextureAtlasColor(uTexture,\x20vTexCoord.xy,\x20vTexAtlasSize.xy,\x20vTexAtlasTran.xy,\x20vTexAtlasScale.xy,\x20vMaxMipLevel.x);\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20baseColorWithAlpha\x20*=\x20getTextureColor();\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(baseColorWithAlpha.a\x20<\x200.1)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20baseColorWithAlpha\x20=\x20SRGBtoLINEAR4(baseColorWithAlpha);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20ng\x20=\x20normalize(vNormalEC);\x0a\x20\x20\x20\x20\x20\x20\x20\x20ng\x20=\x20length(ng)\x20>\x200.1\x20?\x20ng\x20:\x20computeNormal(vPositionMC.xyz);\x0a\x20\x20\x20\x20#ifdef\x20HAS_NORMAL_TEXTURE\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20pos_dx\x20=\x20dFdx(vPositionEC);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20pos_dy\x20=\x20dFdy(vPositionEC);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20tex_dx\x20=\x20dFdx(vec3(vTexCoord.xy,\x200.0));\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20tex_dy\x20=\x20dFdy(vec3(vTexCoord.xy,\x200.0));\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20t\x20=\x20(tex_dy.t\x20*\x20pos_dx\x20-\x20tex_dx.t\x20*\x20pos_dy)\x20/\x20(tex_dx.s\x20*\x20tex_dy.t\x20-\x20tex_dy.s\x20*\x20tex_dx.t);\x0a\x20\x20\x20\x20\x20\x20\x20\x20t\x20=\x20normalize(t\x20-\x20ng\x20*\x20dot(ng,\x20t));\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20b\x20=\x20normalize(cross(ng,\x20t));\x0a\x20\x20\x20\x20\x20\x20\x20\x20mat3\x20tbn\x20=\x20mat3(t,\x20b,\x20ng);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20n\x20=\x20texture2D(uNormalTexture,\x20vTexCoord.xy).rgb;\x0a\x20\x20\x20\x20\x20\x20\x20\x20n\x20=\x20normalize(tbn\x20*\x20(2.0\x20*\x20n\x20-\x201.0));\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20n\x20=\x20ng;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20baseColor\x20=\x20baseColorWithAlpha.rgb;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20roughness\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20metalness\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20v\x20=\x20-normalize(vPositionEC);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20lightColorHdr\x20=\x20vec3(5.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20l\x20=\x20normalize(czm_lightDirectionEC);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20h\x20=\x20normalize(v\x20+\x20l);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20NdotL\x20=\x20clamp(dot(n,\x20l),\x200.001,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20NdotV\x20=\x20abs(dot(n,\x20v))\x20+\x200.001;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20NdotH\x20=\x20clamp(dot(n,\x20h),\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20LdotH\x20=\x20clamp(dot(l,\x20h),\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20VdotH\x20=\x20clamp(dot(v,\x20h),\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20f0\x20=\x20vec3(0.04);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20diffuseColor\x20=\x20baseColor\x20*\x20(1.0\x20-\x20metalness)\x20*\x20(1.0\x20-\x20f0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20specularColor\x20=\x20mix(f0,\x20baseColor,\x20metalness);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20alpha\x20=\x20roughness\x20*\x20roughness;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20reflectance\x20=\x20max(max(specularColor.r,\x20specularColor.g),\x20specularColor.b);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20r90\x20=\x20vec3(clamp(reflectance\x20*\x2025.0,\x200.0,\x201.0));\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20r0\x20=\x20specularColor.rgb;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20F\x20=\x20fresnelSchlick2(r0,\x20r90,\x20VdotH);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20G\x20=\x20smithVisibilityGGX(alpha,\x20NdotL,\x20NdotV);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20D\x20=\x20GGX(alpha,\x20NdotH);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20diffuseContribution\x20=\x20(1.0\x20-\x20F)\x20*\x20lambertianDiffuse(diffuseColor);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20specularContribution\x20=\x20F\x20*\x20G\x20*\x20D\x20/\x20(4.0\x20*\x20NdotL\x20*\x20NdotV);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20color\x20=\x20NdotL\x20*\x20lightColorHdr\x20*\x20(diffuseContribution\x20+\x20specularContribution);\x0a\x20\x20\x20\x20#ifndef\x20IBL\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20positionWC\x20=\x20vec3(czm_inverseView\x20*\x20vec4(vPositionEC,\x201.0));\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20r\x20=\x20normalize(czm_inverseViewRotation\x20*\x20normalize(reflect(v,\x20n)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20vertexRadius\x20=\x20length(positionWC);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20horizonDotNadir\x20=\x201.0\x20-\x20min(1.0,\x20czm_ellipsoidRadii.x\x20/\x20vertexRadius);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20reflectionDotNadir\x20=\x20dot(r,\x20normalize(positionWC));\x0a\x20\x20\x20\x20\x20\x20\x20\x20r.x\x20=\x20-r.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20r\x20=\x20-normalize(czm_temeToPseudoFixed\x20*\x20r);\x0a\x20\x20\x20\x20\x20\x20\x20\x20r.x\x20=\x20-r.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20inverseRoughness\x20=\x201.04\x20-\x20roughness;\x0a\x20\x20\x20\x20\x20\x20\x20\x20inverseRoughness\x20*=\x20inverseRoughness;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20sceneSkyBox\x20=\x20textureCube(czm_environmentMap,\x20r).rgb\x20*\x20inverseRoughness;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20atmosphereHeight\x20=\x200.05;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20blendRegionSize\x20=\x200.1\x20*\x20((1.0\x20-\x20inverseRoughness)\x20*\x208.0\x20+\x201.1\x20-\x20horizonDotNadir);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20blendRegionOffset\x20=\x20roughness\x20*\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20farAboveHorizon\x20=\x20clamp(horizonDotNadir\x20-\x20blendRegionSize\x20*\x200.5\x20+\x20blendRegionOffset,\x201.0e-10\x20-\x20blendRegionSize,\x200.99999);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20aroundHorizon\x20=\x20clamp(horizonDotNadir\x20+\x20blendRegionSize\x20*\x200.5,\x201.0e-10\x20-\x20blendRegionSize,\x200.99999);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20farBelowHorizon\x20=\x20clamp(horizonDotNadir\x20+\x20blendRegionSize\x20*\x201.5,\x201.0e-10\x20-\x20blendRegionSize,\x200.99999);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20smoothstepHeight\x20=\x20smoothstep(0.0,\x20atmosphereHeight,\x20horizonDotNadir);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20belowHorizonColor\x20=\x20mix(vec3(0.1,\x200.15,\x200.25),\x20vec3(0.4,\x200.7,\x200.9),\x20smoothstepHeight);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20nadirColor\x20=\x20belowHorizonColor\x20*\x200.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20aboveHorizonColor\x20=\x20mix(vec3(0.9,\x201.0,\x201.2),\x20belowHorizonColor,\x20roughness\x20*\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20blueSkyColor\x20=\x20mix(vec3(0.18,\x200.26,\x200.48),\x20aboveHorizonColor,\x20reflectionDotNadir\x20*\x20inverseRoughness\x20*\x200.5\x20+\x200.75);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20zenithColor\x20=\x20mix(blueSkyColor,\x20sceneSkyBox,\x20smoothstepHeight);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20blueSkyDiffuseColor\x20=\x20vec3(0.7,\x200.85,\x200.9);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20diffuseIrradianceFromEarth\x20=\x20(1.0\x20-\x20horizonDotNadir)\x20*\x20(reflectionDotNadir\x20*\x200.25\x20+\x200.75)\x20*\x20smoothstepHeight;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20diffuseIrradianceFromSky\x20=\x20(1.0\x20-\x20smoothstepHeight)\x20*\x20(1.0\x20-\x20(reflectionDotNadir\x20*\x200.25\x20+\x200.25));\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20diffuseIrradiance\x20=\x20blueSkyDiffuseColor\x20*\x20clamp(diffuseIrradianceFromEarth\x20+\x20diffuseIrradianceFromSky,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20notDistantRough\x20=\x20(1.0\x20-\x20horizonDotNadir\x20*\x20roughness\x20*\x200.8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20specularIrradiance\x20=\x20mix(zenithColor,\x20aboveHorizonColor,\x20smoothstep(farAboveHorizon,\x20aroundHorizon,\x20reflectionDotNadir)\x20*\x20notDistantRough);\x0a\x20\x20\x20\x20\x20\x20\x20\x20specularIrradiance\x20=\x20mix(specularIrradiance,\x20belowHorizonColor,\x20smoothstep(aroundHorizon,\x20farBelowHorizon,\x20reflectionDotNadir)\x20*\x20inverseRoughness);\x0a\x20\x20\x20\x20\x20\x20\x20\x20specularIrradiance\x20=\x20mix(specularIrradiance,\x20nadirColor,\x20smoothstep(farBelowHorizon,\x201.0,\x20reflectionDotNadir)\x20*\x20inverseRoughness);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20LdotZenith\x20=\x20clamp(dot(normalize(czm_inverseViewRotation\x20*\x20l),\x20normalize(positionWC\x20*\x20-1.0)),\x200.001,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20S\x20=\x20acos(LdotZenith);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20NdotZenith\x20=\x20clamp(dot(normalize(czm_inverseViewRotation\x20*\x20n),\x20normalize(positionWC\x20*\x20-1.0)),\x200.001,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20gamma\x20=\x20acos(NdotL);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20numerator\x20=\x20((0.91\x20+\x2010.0\x20*\x20exp(-3.0\x20*\x20gamma)\x20+\x200.45\x20*\x20pow(NdotL,\x202.0))\x20*\x20(1.0\x20-\x20exp(-0.32\x20/\x20NdotZenith)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20denominator\x20=\x20(0.91\x20+\x2010.0\x20*\x20exp(-3.0\x20*\x20S)\x20+\x200.45\x20*\x20pow(LdotZenith,2.0))\x20*\x20(1.0\x20-\x20exp(-0.32));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20luminance\x20=\x200.2\x20*\x20(numerator\x20/\x20denominator);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20brdfLut\x20=\x20texture2D(czm_brdfLut,\x20vec2(NdotV,\x20roughness)).rg;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20IBLColor\x20=\x20(diffuseIrradiance\x20*\x20diffuseColor\x20*\x201.0)\x20+\x20(specularIrradiance\x20*\x20SRGBtoLINEAR3(specularColor\x20*\x20brdfLut.x\x20+\x20brdfLut.y)\x20*\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20maximumComponent\x20=\x20max(max(lightColorHdr.x,\x20lightColorHdr.y),\x20lightColorHdr.z);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20lightColor\x20=\x20lightColorHdr\x20/\x20max(maximumComponent,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20IBLColor\x20*=\x20lightColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color\x20+=\x20IBLColor\x20*\x20luminance;\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20mat3\x20fixedToENU\x20=\x20mat3(czm_modelView[0][0],\x20czm_modelView[1][0],\x20czm_modelView[2][0],\x20czm_modelView[0][1],\x20czm_modelView[1][1],\x20czm_modelView[2][1],\x20czm_modelView[0][2],\x20czm_modelView[1][2],\x20czm_modelView[2][2]);\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20mat3\x20yUpToZUp\x20=\x20mat3(-1.0,\x200.0,\x200.0,\x200.0,\x200.0,\x20-1.0,\x200.0,\x201.0,\x200.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20cubeDir\x20=\x20normalize(yUpToZUp\x20*\x20fixedToENU\x20*\x20reflect(-v,\x20n));\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20diffuseIrradiance\x20=\x20czm_sphericalHarmonics(cubeDir,\x20czm_sphericalHarmonicCoefficients);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20brdfLut\x20=\x20texture2D(czm_brdfLut,\x20vec2(NdotV,\x20roughness)).rg;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20specularIBL\x20=\x20czm_sampleOctahedralProjection(czm_specularEnvironmentMaps,\x20czm_specularEnvironmentMapSize,\x20cubeDir,\x20\x20roughness\x20*\x20czm_specularEnvironmentMapsMaximumLOD,\x20czm_specularEnvironmentMapsMaximumLOD);\x0a\x20\x20\x20\x20\x20\x20\x20\x20specularIBL\x20*=\x20F\x20*\x20brdfLut.x\x20+\x20brdfLut.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color\x20+=\x20diffuseIrradiance\x20*\x20diffuseColor\x20+\x20specularColor\x20*\x20specularIBL;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20color\x20=\x20applyTonemapping(color);\x0a\x20\x20\x20\x20\x20\x20\x20\x20color\x20=\x20LINEARtoSRGB(color);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20outColor\x20=\x20vec4(color,\x20baseColorWithAlpha.a);\x0a\x20\x20\x20\x20#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20\x20\x20\x20\x20outColor\x20=\x20getContourMapColor(outColor,\x20wValue);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20#ifdef\x20CLIP\x0a\x20\x20\x20\x20\x20\x20\x20\x20outColor\x20*=\x20clip(vec4(vPositionEC,\x201.0));\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20outColor;\x0a\x20\x20\x20\x20}\x0a','1001807OjgwZK','634WaBbfc','1085986FYysmb','1199267TpHBRW','920206EyCTng','20TeWXFW','1qUhGfg'];var _0x41883e=_0x2d0f;(function(_0x1fcab9,_0x5430be){var _0x3af8f7=_0x2d0f;while(!![]){try{var _0x1250cf=parseInt(_0x3af8f7(0x13a))+-parseInt(_0x3af8f7(0x13c))+parseInt(_0x3af8f7(0x143))+-parseInt(_0x3af8f7(0x140))*parseInt(_0x3af8f7(0x13d))+-parseInt(_0x3af8f7(0x13b))*-parseInt(_0x3af8f7(0x13e))+-parseInt(_0x3af8f7(0x141))+parseInt(_0x3af8f7(0x139))*parseInt(_0x3af8f7(0x13f));if(_0x1250cf===_0x5430be)break;else _0x1fcab9['push'](_0x1fcab9['shift']());}catch(_0x56755f){_0x1fcab9['push'](_0x1fcab9['shift']());}}}(_0x1b85,0x95eb8));function _0x2d0f(_0x378c71,_0x4fbc61){_0x378c71=_0x378c71-0x139;var _0x1b85ea=_0x1b85[_0x378c71];return _0x1b85ea;}var _0x54c1c4 = _0x41883e(0x142);

    var _0x4f89=['6933qhqukb','569247RLSiQc','341334jEegjh','59895uAWjaX','424856PdyqwH','431884qrqeDY','663852jyBEDz','precision\x20highp\x20float;\x0aconst\x20float\x20uPixelRatio\x20=\x201.0;\x0a//\x20Inputs\x0aattribute\x20vec3\x20aPosition0;\x0aattribute\x20vec3\x20aPosition1;\x0a//attribute\x20float\x20aVariantOffset;\x0a//attribute\x20float\x20aVariantStroke;\x0a//attribute\x20float\x20aVariantExtension;\x0a\x0a#ifdef\x20SILHOUETTE\x0aattribute\x20vec3\x20aNormalA;\x0aattribute\x20vec3\x20aNormalB;\x0a#else\x20/*\x20SILHOUETTE\x20*/\x0aattribute\x20vec3\x20aNormal;\x0a#endif\x20/*\x20SILHOUETTE\x20*/\x0a\x0aattribute\x20vec2\x20aSideness;\x0a//attribute\x20vec2\x20aPackedAttributes;\x0a\x0astruct\x20UnpackedAttributes\x0a{\x0a\x20\x20\x20\x20vec2\x20sideness;\x0a\x20\x20\x20\x20vec2\x20sidenessNorm;\x0a\x20\x20\x20\x20float\x20lineWidthPixels;\x0a\x20\x20\x20\x20float\x20extensionLengthPixels;\x0a#if\x20(MODE\x20==\x202)\x0a\x20\x20\x20\x20float\x20type;\x0a#endif\x0a};\x0a\x0a//\x20Output\x20required\x20to\x20compute\x20color\x0avarying\x20vec4\x20vColor;\x0a//\x20Output\x20required\x20to\x20compute\x20distance\x20to\x20line/caps\x0avarying\x20vec3\x20vPosition;\x20\x0avarying\x20vec3\x20vViewPosition;\x0avarying\x20float\x20vRadius;\x0avarying\x20float\x20vLineLengthPixels;\x0avarying\x20float\x20vSizeFalloffFactor;\x0avarying\x20float\x20vDistanceFromEye;\x0a\x0auniform\x20float\x20uLineWidth;\x0auniform\x20vec4\x20uLineColor;\x0aconst\x20vec2\x20uDepthBias\x20=\x20vec2(0.5,\x20-4e-4);\x0a\x0a//\x20Utility\x20function\x20to\x20check\x20for\x20NaN\x20values\x0abool\x20isNaN(float\x20val)\x0a{\x0a\x20\x20\x20\x20return\x20(\x20val\x20<\x200.0\x20||\x200.0\x20<\x20val\x20||\x20val\x20==\x200.0\x20)\x20?\x20false\x20:\x20true;\x0a\x20\x20\x20\x20//\x20important:\x20some\x20nVidias\x20failed\x20to\x20cope\x20with\x20version\x20below.\x0a\x20\x20\x20\x20//\x20Probably\x20wrong\x20optimization.\x0a\x20\x20\x20\x20/*return\x20(\x20val\x20<=\x200.0\x20||\x200.0\x20<=\x20val\x20)\x20?\x20false\x20:\x20true;*/\x0a}\x0a\x0avec2\x20calculateProjectedBiasXY(vec4\x20projPos,\x20vec3\x20worldNormal)\x0a{\x0a\x20\x20\x20\x20float\x20offsetXY\x20=\x20uDepthBias.x;\x0a\x20\x20\x20\x20float\x20offsetZ\x20\x20=\x20uDepthBias.y;\x0a\x20\x20\x20\x20vec4\x20projNormal\x20=\x20czm_projection\x20*\x20czm_view\x20*\x20vec4(worldNormal,\x200.0);\x0a\x20\x20\x20\x20return\x20offsetXY\x20*\x20projPos.w\x20*\x202.0\x20/\x20czm_viewport.zw\x20*\x20normalize(projNormal.xyz).xy;\x0a}\x0a\x0a//\x20A\x20z-offset,\x20using\x20a\x20depth\x20based\x20heuristic.\x0afloat\x20calculateProjectedBiasZ(vec4\x20projPos)\x0a{\x0a\x20\x20\x20\x20float\x20fProjZ\x20=\x20projPos.z\x20/\x20projPos.w;\x0a\x20\x20\x20\x20if(fProjZ\x20<\x200.1)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x200.0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20float\x20offsetZ\x20=\x20uDepthBias.y;\x0a\x20\x20\x20\x20return\x20sqrt(projPos.z)\x20*\x20offsetZ;\x0a}\x0a\x0avec4\x20adjustProjectedPosition(vec4\x20projPos,\x20vec3\x20worldNormal,\x20float\x20lineWidth)\x0a{\x0a\x20\x20\x20\x20vec2\x20offsetXY\x20=\x20calculateProjectedBiasXY(projPos,\x20worldNormal);\x0a\x20\x20\x20\x20//\x20we\x20currently\x20have\x20to\x20do\x20this\x20check\x20because\x20some\x20geometries\x20come\x20with\x200\x20length\x20edge\x20normals.\x0a\x20\x20\x20\x20if\x20(!isNaN(offsetXY.x)\x20&&\x20!isNaN(offsetXY.y))\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20projPos.xy\x20+=\x20offsetXY;\x0a\x20\x20\x20\x20}\x0a#ifdef\x20LOG_DEPTH\x0a\x20\x20\x20\x20vDistanceFromEye\x20=\x20projPos.w;\x0a#else\x0a\x20\x20\x20\x20projPos.z\x20+=\x20calculateProjectedBiasZ(projPos);\x0a#endif\x0a\x20\x20\x20\x20return\x20projPos;\x0a}\x0a\x0a#if\x20(MODE\x20==\x202\x20||\x20MODE\x20==\x201)\x0auniform\x20vec2\x20uStrokesTextureScale;\x0auniform\x20float\x20uStrokesLog2Resolution;\x0auniform\x20float\x20uStrokeVariants;\x0avarying\x20vec2\x20vStrokeUV;\x0avarying\x20float\x20vLineIndex;\x0avoid\x20calculateStyleOutputsSketch(float\x20lineLength,\x20UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20vec2\x20sidenessNorm\x20=\x20unpackedAttributes.sidenessNorm;\x0a\x20\x20\x20\x20float\x20lineIndex\x20=\x20clamp(ceil(log2(lineLength)),\x200.0,\x20uStrokesLog2Resolution);\x0a\x20\x20\x20\x20vStrokeUV\x20=\x20vec2(exp2(lineIndex)\x20*\x20sidenessNorm.y,\x20lineIndex\x20*\x20uStrokeVariants\x20+\x20aVariantStroke\x20+\x200.5)\x20*\x20uStrokesTextureScale;\x0a\x20\x20\x20\x20vStrokeUV.x\x20+=\x20aVariantOffset;\x0a\x20\x20\x20\x20vLineIndex\x20=\x20lineIndex;\x0a}\x0a#endif\x0a\x0a#if\x20(MODE\x20==\x200)\x0avoid\x20calculateStyleOutputs(vec4\x20viewPosV0,\x20vec4\x20viewPosV1,\x20vec4\x20worldPosV0,\x20vec4\x20worldPosV1,\x20vec4\x20projPos,\x20vec3\x20worldNormal,\x20UnpackedAttributes\x20unpackedAttributes)\x0a{}\x0a#elif\x20(MODE\x20==\x201)\x0avoid\x20calculateStyleOutputs(vec4\x20viewPosV0,\x20vec4\x20viewPosV1,\x20vec4\x20worldPosV0,\x20vec4\x20worldPosV1,\x20vec4\x20projPos,\x20vec3\x20worldNormal,\x20UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20calculateStyleOutputsSketch(vLineLengthPixels,\x20unpackedAttributes);\x0a}\x0a#elif\x20(MODE\x20==\x202)\x0avarying\x20float\x20vType;\x0avoid\x20calculateStyleOutputs(vec4\x20viewPosV0,\x20vec4\x20viewPosV1,\x20vec4\x20worldPosV0,\x20vec4\x20worldPosV1,\x20vec4\x20projPos,\x20vec3\x20worldNormal,\x20UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20vType\x20=\x20unpackedAttributes.type;\x0a\x20\x20\x20\x20if\x20(unpackedAttributes.type\x20<=\x200.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20calculateStyleOutputsSketch(vLineLengthPixels,\x20unpackedAttributes);\x0a\x20\x20\x20\x20}\x0a}\x0a#endif\x0a\x0a\x0a//\x20Solid\x0a#if\x20(MODE\x20==\x202\x20||\x20MODE\x20==\x200)\x0afloat\x20calculateLineAmplitudeSolid()\x0a{\x0a\x20\x20\x20\x20return\x200.0;\x0a}\x0a#endif\x0a#if\x20(MODE\x20==\x200)\x0afloat\x20calculateLineAmplitude(UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20return\x20calculateLineAmplitudeSolid();\x0a}\x0a#endif\x0a//\x20Sketch\x0a#if\x20(MODE\x20==\x202\x20||\x20MODE\x20==\x201)\x0a\x20\x20\x20\x20uniform\x20float\x20uStrokesAmplitude;\x0afloat\x20calculateLineAmplitudeSketch()\x0a{\x0a\x20\x20\x20\x20return\x20uStrokesAmplitude;\x0a}\x0a#endif\x0a#if\x20(MODE\x20==\x201)\x0afloat\x20calculateLineAmplitude(UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20return\x20calculateLineAmplitudeSketch();\x0a}\x0a#endif\x0a//\x20Uber\x0a#if\x20(MODE\x20==\x202)\x0afloat\x20calculateLineAmplitude(UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20float\x20type\x20=\x20unpackedAttributes.type;\x0a\x20\x20\x20\x20if\x20(type\x20<=\x200.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20calculateLineAmplitudeSketch();\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20else\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20calculateLineAmplitudeSolid();\x0a\x20\x20\x20\x20}\x0a}\x0a#endif\x0a\x0a\x0auniform\x20float\x20uDistanceFalloffFactor;\x0afloat\x20distanceBasedPerspectiveFactor(float\x20distance)\x0a{\x0a\x20\x20\x20\x20return\x20clamp(sqrt(uDistanceFalloffFactor\x20/\x20distance),\x200.0,\x201.0);\x0a}\x0a\x0a#define\x20COMPONENT_COLOR_FIELD_OFFSET\x200.0\x0a#define\x20COMPONENT_OTHER_FIELDS_OFFSET\x201.0\x0a#define\x20COMPONENT_FIELD_COUNT\x202.0\x0a#define\x20LINE_WIDTH_FRACTION_FACTOR\x208.0\x0a#define\x20EXTENSION_LENGTH_OFFSET\x20128.0\x0a#define\x20COMPONENT_TEX_WIDTH\x204096.0\x0a\x0astruct\x20ComponentData\x0a{\x0a\x20\x20\x20\x20float\x20lineWidth;\x0a\x20\x20\x20\x20float\x20extensionLength;\x0a\x20\x20\x20\x20float\x20type;\x0a};\x0a\x0a\x0aComponentData\x20readComponentData()\x0a{\x0a\x20\x20\x20\x20return\x20ComponentData(uLineWidth,\x200.0,\x200.0);\x0a}\x0a\x0avec3\x20modelToWorldNormal(vec3\x20normal)\x0a{\x0a\x20\x20\x20\x20return\x20(czm_model\x20*\x20vec4(normal,\x200.0)).xyz;\x0a}\x0a\x0avec3\x20silhouetteWorldNormal(vec3\x20normalA,\x20vec3\x20normalB)\x0a{\x0a\x20\x20\x20\x20return\x20modelToWorldNormal(normalize(normalA\x20+\x20normalB));\x0a}\x0a\x0a//\x20Fall-off\x20extension\x20length\x20for\x20shorter\x20strokes,\x20starting\x20from\x20strokes\x20that\x20are\x20256\x20size,\x0a//\x20fall-off\x20exponentially\x0afloat\x20calculateExtensionLength(float\x20extensionLength,\x20float\x20lineLength)\x0a{\x0a\x20\x20\x20\x20return\x20extensionLength\x20/\x20(log2(max(1.0,\x20256.0\x20/\x20lineLength))\x20*\x200.2\x20+\x201.0);\x0a}\x0a\x0a#ifdef\x20SILHOUETTE\x0a//\x20#uniforms:\x20czm_view,\x20czm_model\x0abool\x20isSilhouetteEdge(vec4\x20viewPos,\x20vec3\x20normalA,\x20vec3\x20normalB)\x0a{\x0a//\x20transform\x20the\x20two\x20face\x20normals\x0a\x20\x20\x20\x20vec3\x20viewNormalA\x20=\x20(czm_view\x20*\x20czm_model\x20*\x20vec4(normalA,\x200.0)).xyz;\x0a\x20\x20\x20\x20vec3\x20viewNormalB\x20=\x20(czm_view\x20*\x20czm_model\x20*\x20vec4(normalB,\x200.0)).xyz;\x0a//\x20compute\x20the\x20direction\x20from\x20the\x20edge\x20to\x20the\x20camera\x0a\x20\x20\x20\x20vec3\x20viewDir\x20=\x20-viewPos.xyz;\x0a//\x20check\x20which\x20of\x20the\x20two\x20faces\x20are\x20visible\x0a//\x20display\x20the\x20edge\x20if\x20exactly\x20one\x20of\x20the\x20two\x20is\x20visible\x0a\x20\x20\x20\x20float\x20faceAVisible\x20=\x20dot(viewDir,\x20viewNormalA);\x0a//\x20positive\x20if\x20visible\x0a\x20\x20\x20\x20float\x20faceBVisible\x20=\x20dot(viewDir,\x20viewNormalB);\x0a//\x20positive\x20if\x20visible\x0a//\x201\x20if\x20exactly\x20one\x20face\x20visible,\x200\x20otherwise\x0a\x20\x20\x20\x20return\x20faceAVisible\x20*\x20faceBVisible\x20<\x200.0;\x0a}\x0a#endif\x20/*\x20SILHOUETTE\x20*/\x0a\x0avoid\x20clipLineSegmentToNearPlane(vec3\x20p0,vec3\x20p1,out\x20bool\x20clipped,out\x20bool\x20culledByNearPlane,out\x20vec4\x20clippedPositionEC)\x0a{\x0a\x20\x20\x20\x20culledByNearPlane\x20=\x20false;\x0a\x20\x20\x20\x20clipped\x20=\x20false;\x0a\x20\x20\x20\x20vec3\x20p0ToP1\x20=\x20p1\x20-\x20p0;\x0a\x20\x20\x20\x20float\x20magnitude\x20=\x20length(p0ToP1);\x0a\x20\x20\x20\x20vec3\x20direction\x20=\x20normalize(p0ToP1);\x0a\x20\x20\x20\x20float\x20endPoint0Distance\x20=\x20\x20czm_currentFrustum.x\x20+\x20p0.z;\x0a\x20\x20\x20\x20float\x20denominator\x20=\x20-direction.z;\x0a\x20\x20\x20\x20if\x20(endPoint0Distance\x20>\x200.0\x20&&\x20abs(denominator)\x20<\x20czm_epsilon7)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20culledByNearPlane\x20=\x20true;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20else\x20if\x20(endPoint0Distance\x20>\x200.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20t\x20=\x20endPoint0Distance\x20/\x20denominator;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(t\x20<\x200.0\x20||\x20t\x20>\x20magnitude)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20culledByNearPlane\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20p0\x20=\x20p0\x20+\x20t\x20*\x20direction;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20p0.z\x20=\x20min(p0.z,\x20-czm_currentFrustum.x);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipped\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20clippedPositionEC\x20=\x20vec4(p0,\x201.0);\x0a}\x0a\x0afloat\x20writeNonPerspective(float\x20value,\x20float\x20w)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20w;\x0a}\x0a\x0avec2\x20writeNonPerspective(vec2\x20value,\x20float\x20w)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20w;\x0a}\x0a\x0avec3\x20writeNonPerspective(vec3\x20value,\x20float\x20w)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20w;\x0a}\x0a\x0avec4\x20writeNonPerspective(vec4\x20value,\x20float\x20w)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20w;\x0a}\x0a\x0avec4\x20calculateGeometricOutputs(vec4\x20viewPosV0,\x20vec4\x20viewPosV1,\x20vec4\x20worldPosV0,\x20vec4\x20worldPosV1,\x20vec3\x20worldNormal,\x20UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20vec2\x20sideness\x20=\x20unpackedAttributes.sideness;\x0a\x20\x20\x20\x20vec2\x20sidenessNorm\x20=\x20unpackedAttributes.sidenessNorm;\x0a\x20\x20\x20\x20vec4\x20clippedViewPosV0;\x20\x20\x20\x20bool\x20clippedV0,culledV0;\x20\x20\x20\x20clipLineSegmentToNearPlane(viewPosV0.xyz,\x20viewPosV1.xyz,\x20clippedV0,\x20culledV0,\x20clippedViewPosV0);\x20\x20\x20\x20vec4\x20clippedViewPosV1;\x20\x20\x20\x20bool\x20clippedV1,\x20culledV1;\x20\x20\x20\x20clipLineSegmentToNearPlane(viewPosV1.xyz,\x20viewPosV0.xyz,\x20clippedV1,\x20culledV1,\x20clippedViewPosV1);\x20\x20\x20\x20vec4\x20viewPos\x20=\x20mix(clippedViewPosV0,\x20clippedViewPosV1,\x20sidenessNorm.y);\x0a\x20\x20\x20\x20vViewPosition\x20=\x20viewPos.xyz\x20/\x20viewPos.w;\x0a\x20\x20\x20\x20vec4\x20projPosV0\x20=\x20czm_projection\x20*\x20clippedViewPosV0;\x0a\x20\x20\x20\x20vec4\x20projPosV1\x20=\x20czm_projection\x20*\x20clippedViewPosV1;\x0a\x20\x20\x20\x20vec4\x20projPos\x20=\x20czm_projection\x20*\x20viewPos;\x0a\x20\x20\x20\x20vec3\x20screenSpaceLineNDC\x20=\x20(projPosV1.xyz\x20/\x20projPosV1.w\x20-\x20projPosV0.xyz\x20/\x20projPosV0.w);\x0a\x20\x20\x20\x20vec2\x20uNDCToPixel\x20=\x20vec2(czm_viewport.z\x20/\x202.0,\x20czm_viewport.w\x20/\x202.0);\x0a\x20\x20\x20\x20vec2\x20screenSpaceLinePixels\x20=\x20screenSpaceLineNDC.xy\x20*\x20uNDCToPixel;\x0a\x20\x20\x20\x20float\x20lineLengthPixels\x20=\x20length(screenSpaceLinePixels);\x0a\x20\x20\x20\x20float\x20dzPerPixel\x20=\x20screenSpaceLineNDC.z\x20/\x20lineLengthPixels;\x0a\x20\x20\x20\x20vec2\x20screenSpaceDirection\x20=\x20screenSpaceLinePixels\x20/\x20lineLengthPixels;\x0a\x20\x20\x20\x20vec2\x20perpendicularScreenSpaceDirection\x20=\x20vec2(screenSpaceDirection.y,\x20-screenSpaceDirection.x)\x20*\x20sideness.x;\x0a\x20\x20\x20\x20float\x20falloffFactor\x20=\x20distanceBasedPerspectiveFactor(-viewPos.z)\x20*\x20uPixelRatio;\x0a\x20\x20\x20\x20float\x20lineWidthPixels\x20=\x20unpackedAttributes.lineWidthPixels\x20*\x20falloffFactor;\x0a\x20\x20\x20\x20float\x20extensionLengthPixels\x20=\x20calculateExtensionLength(unpackedAttributes.extensionLengthPixels,\x20lineLengthPixels)\x20*\x20falloffFactor;\x0a\x20\x20\x20\x20float\x20lineAmplitudePixels\x20=\x20calculateLineAmplitude(unpackedAttributes)\x20*\x20uPixelRatio;\x0a\x20\x20\x20\x20vSizeFalloffFactor\x20=\x20falloffFactor;\x0a\x20\x20\x20\x20float\x20lineWidthAndAmplitudePixels\x20=\x20lineWidthPixels\x20+\x20lineAmplitudePixels\x20+\x20lineAmplitudePixels;\x0a\x20\x20\x20\x20float\x20extendedLineLengthPixels\x20=\x20lineLengthPixels\x20+\x20extensionLengthPixels\x20+\x20extensionLengthPixels;\x0a#ifdef\x20ANTIALIASING\x0a\x20\x20\x20\x20const\x20float\x20aaPaddingPixels\x20=\x201.0;\x0a\x20\x20\x20\x20//\x20Line\x20size\x20with\x20padding\x0a\x20\x20\x20\x20float\x20halfAAPaddedLineWidthAndAmplitudePixels\x20=\x20lineWidthAndAmplitudePixels\x20*\x200.5\x20+\x20aaPaddingPixels;\x0a\x20\x20\x20\x20float\x20aaPaddedRoundedCapSizePixels\x20=\x20lineWidthPixels\x20*\x200.5\x20+\x20aaPaddingPixels;\x0a\x20\x20\x20\x20//\x20Line\x20length\x20with\x20padding\x0a\x20\x20\x20\x20float\x20aaPaddedLineLengthPixels\x20=\x20extendedLineLengthPixels\x20+\x20aaPaddingPixels\x20+\x20aaPaddingPixels;\x0a\x20\x20\x20\x20float\x20halfAAPaddedLineLengthPixels\x20=\x20aaPaddedLineLengthPixels\x20*\x200.5;\x0a#else\x20/*\x20ANTIALIASING\x20*/\x0a\x20\x20\x20\x20//\x20Even\x20if\x20there\x20is\x20no\x20AA,\x20we\x20still\x20want\x20to\x20do\x20proper\x20<1px\x20rendering,\x0a\x20\x20\x20\x20//\x20so\x20we\x20effectively\x20clamp\x20the\x20pixel\x20sizes\x20to\x20minimum\x20of\x201px\x20and\x20compute\x0a\x20\x20\x20\x20//\x20coverage\x20in\x20the\x20fragment\x20shader\x20\x20\x20\x0a\x20\x20\x20\x20float\x20halfAAPaddedLineWidthAndAmplitudePixels\x20=\x20max(lineWidthAndAmplitudePixels,\x201.0)\x20*\x200.5;\x0a\x20\x20\x20\x20float\x20aaPaddedRoundedCapSizePixels\x20=\x20max(lineWidthPixels,\x201.0)\x20*\x200.5;\x0a\x20\x20\x20\x20float\x20halfAAPaddedLineLengthPixels\x20=\x20max(extendedLineLengthPixels,\x201.0)\x20*\x200.5;\x0a#endif\x20/*\x20ANTIALIASING\x20*/\x0a\x20\x20\x20\x20//\x20Half\x20line\x20width\x20in\x20NDC\x20including\x20padding\x20for\x20anti\x20aliasing\x0a\x20\x20\x20\x20vec2\x20uPixelToNDC\x20=\x20vec2(2.0\x20/\x20czm_viewport.z,\x202.0\x20/\x20czm_viewport.w);\x0a\x20\x20\x20\x20vec2\x20halfAAPaddedLineWidthAndAmplitudeNDC\x20=\x20halfAAPaddedLineWidthAndAmplitudePixels\x20*\x20uPixelToNDC;\x0a\x20\x20\x20\x20vec2\x20aaPaddedRoundedCapSizeNDC\x20=\x20aaPaddedRoundedCapSizePixels\x20*\x20uPixelToNDC;\x0a\x20\x20\x20\x20vec2\x20extensionLengthNDC\x20=\x20extensionLengthPixels\x20*\x20uPixelToNDC;\x0a\x20\x20\x20\x20//\x20Compute\x20screen\x20space\x20position\x20of\x20vertex,\x20offsetting\x20for\x20line\x20size\x20and\x20end\x20caps\x0a\x20\x20\x20\x20vec2\x20ndcOffset\x20=\x20(screenSpaceDirection\x20*\x20sideness.y\x20*\x20(aaPaddedRoundedCapSizeNDC\x20+\x20extensionLengthNDC)\x20+\x20perpendicularScreenSpaceDirection\x20*\x20halfAAPaddedLineWidthAndAmplitudeNDC);\x0a\x20\x20\x20\x20projPos.xy\x20+=\x20ndcOffset\x20*\x20projPos.w;\x0a\x20\x20\x20\x20projPos.z\x20+=\x20(dzPerPixel\x20*\x20(aaPaddedRoundedCapSizePixels\x20+\x20extensionLengthPixels))\x20*\x20sideness.y\x20*\x20projPos.w;\x0a\x20\x20\x20\x20projPos\x20=\x20adjustProjectedPosition(projPos,\x20worldNormal,\x201.0\x20+\x20max((lineWidthAndAmplitudePixels\x20-\x201.0)\x20*\x200.5,\x200.0));\x0a\x20\x20\x20\x20//\x20Line\x20length\x20with\x20end\x20caps\x0a\x20\x20\x20\x20float\x20aaPaddedLineWithCapsLengthPixels\x20=\x20extendedLineLengthPixels\x20+\x20aaPaddedRoundedCapSizePixels\x20+\x20aaPaddedRoundedCapSizePixels;\x0a\x20\x20\x20\x20float\x20pixelPositionAlongLine\x20=\x20aaPaddedLineWithCapsLengthPixels\x20*\x20sidenessNorm.y\x20-\x20aaPaddedRoundedCapSizePixels;\x0a\x20\x20\x20\x20//\x20Position\x20in\x20pixels\x20with\x20origin\x20at\x20first\x20vertex\x20of\x20line\x20segment\x0a\x20\x20\x20\x20//\x20The\x20line\x20width\x20radius\x20in\x20pixels\x0a\x20\x20\x20\x20vRadius\x20=\x20lineWidthPixels\x20*\x200.5;\x0a\x20\x20\x20\x20vLineLengthPixels\x20=\x20extendedLineLengthPixels;\x0a\x20\x20\x20\x20vPosition\x20=\x20writeNonPerspective(vec3(halfAAPaddedLineWidthAndAmplitudePixels\x20*\x20sideness.x,\x20pixelPositionAlongLine,\x20pixelPositionAlongLine\x20/\x20extendedLineLengthPixels),\x20projPos.w);\x0a#ifdef\x20SILHOUETTE\x0a\x20\x20\x20\x20gl_Position\x20=\x20isSilhouetteEdge(viewPosV0,\x20aNormalA,\x20aNormalB)\x20?\x20projPos\x20:\x20vec4(10.0,\x2010.0,\x2010.0,\x201.0);\x0a#else\x20/*\x20SILHOUETTE\x20*/\x0a\x20\x20\x20\x20gl_Position\x20=\x20projPos;\x0a#endif\x20/*\x20SILHOUETTE\x20*/\x0a\x0a#if\x20(MODE\x20==\x202)\x0a\x20\x20\x20\x20if\x20(unpackedAttributes.type\x20<=\x200.0\x20&&\x20lineLengthPixels\x20<=\x203.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20vec4(10.0,\x2010.0,\x2010.0,\x201.0);\x0a\x20\x20\x20\x20}\x0a#elif\x20(MODE\x20==\x201)\x0a\x20\x20\x20\x20if\x20(lineLengthPixels\x20<=\x203.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20vec4(10.0,\x2010.0,\x2010.0,\x201.0);\x20\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x20\x20\x20\x20return\x20projPos;\x0a}\x0a\x0a\x0a#if\x20(MODE\x20==\x202)\x0aUnpackedAttributes\x20unpackAttributes(ComponentData\x20component)\x0a{\x0a\x20\x20\x20\x20vec2\x20sidenessNorm\x20=\x20aSideness;\x0a\x20\x20\x20\x20vec2\x20sideness\x20=\x20sidenessNorm\x20*\x202.0\x20-\x201.0;\x0a\x20\x20\x20\x20float\x20fType\x20=\x20component.type;\x0a\x20\x20\x20\x20float\x20extensionLengthPixels\x20=\x20component.extensionLength;\x0a\x20\x20\x20\x20float\x20lineWidth\x20=\x20component.lineWidth;\x0a\x20\x20\x20\x20if\x20(fType\x20<=\x200.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20extensionLengthPixels\x20*=\x20aVariantExtension\x20*\x202.0\x20-\x201.0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20return\x20UnpackedAttributes(sideness,\x20sidenessNorm,\x20lineWidth,\x20extensionLengthPixels,\x20fType);\x0a}\x0a#else\x20/*\x20(MODE\x20==\x202)\x20*/\x0aUnpackedAttributes\x20unpackAttributes(ComponentData\x20component)\x0a{\x0a\x20\x20\x20\x20vec2\x20sidenessNorm\x20=\x20aSideness;\x0a\x20\x20\x20\x20vec2\x20sideness\x20=\x20sidenessNorm\x20*\x202.0\x20-\x201.0;\x0a\x20\x20\x20\x20float\x20extensionLengthPixels\x20=\x20component.extensionLength;\x0a#if\x20(MODE\x20==\x201)\x0a\x20\x20\x20\x20extensionLengthPixels\x20*=\x20aVariantExtension\x20*\x202.0\x20-\x201.0;\x0a#endif\x0a\x20\x20\x20\x20float\x20lineWidth\x20=\x20component.lineWidth;\x0a\x20\x20\x20\x20return\x20UnpackedAttributes(sideness,\x20sidenessNorm,\x20lineWidth,\x20extensionLengthPixels);\x0a}\x0a#endif\x20/*\x20(MODE\x20==\x202)\x20*/\x0a\x0avarying\x20float\x20fSelected;\x0avoid\x20main()\x0a{\x0a\x20\x20\x20\x20fSelected\x20=\x200.0;\x0a\x20\x20\x20\x20ComponentData\x20component\x20=\x20readComponentData();\x0a\x20\x20\x20\x20UnpackedAttributes\x20unpackedAttributes\x20=\x20unpackAttributes(component);\x0a\x20\x20\x20\x20vec4\x20worldPosV0\x20=\x20czm_model\x20*\x20vec4(aPosition0,\x201.0);\x0a\x20\x20\x20\x20vec4\x20worldPosV1\x20=\x20czm_model\x20*\x20vec4(aPosition1,\x201.0);\x0a\x20\x20\x20\x20vec4\x20viewPosV0\x20=\x20czm_modelView\x20*\x20vec4(aPosition0,\x201.0);\x0a\x20\x20\x20\x20vec4\x20viewPosV1\x20=\x20czm_modelView\x20*\x20vec4(aPosition1,\x201.0);\x0a#ifdef\x20SILHOUETTE\x0a\x20\x20\x20\x20vec3\x20worldNormal\x20=\x20silhouetteWorldNormal(aNormalA,\x20aNormalB);\x0a#else\x20/*\x20SILHOUETTE\x20*/\x0a\x20\x20\x20\x20vec3\x20worldNormal\x20=\x20modelToWorldNormal(aNormal);\x0a#endif\x20/*\x20SILHOUETTE\x20*/\x0a\x20\x20\x20\x20//\x20General\x20geometric\x20computation\x20for\x20all\x20types\x20of\x20edges\x0a\x20\x20\x20\x20vec4\x20projPos\x20=\x20calculateGeometricOutputs(viewPosV0,\x20viewPosV1,\x20worldPosV0,\x20worldPosV1,\x20worldNormal,\x20unpackedAttributes);\x0a\x20\x20\x20\x20vColor\x20=\x20uLineColor;\x0a}','23bxZolS'];function _0x3ec0(_0x1d755f,_0x512a49){_0x1d755f=_0x1d755f-0x1a1;var _0x4f89e6=_0x4f89[_0x1d755f];return _0x4f89e6;}var _0x580721=_0x3ec0;(function(_0x26c99c,_0x5ba6ac){var _0x431388=_0x3ec0;while(!![]){try{var _0x2443b5=parseInt(_0x431388(0x1a2))+-parseInt(_0x431388(0x1a1))+-parseInt(_0x431388(0x1a9))*parseInt(_0x431388(0x1a8))+parseInt(_0x431388(0x1a3))+parseInt(_0x431388(0x1a6))+parseInt(_0x431388(0x1a5))+-parseInt(_0x431388(0x1a4));if(_0x2443b5===_0x5ba6ac)break;else _0x26c99c['push'](_0x26c99c['shift']());}catch(_0x3912be){_0x26c99c['push'](_0x26c99c['shift']());}}}(_0x4f89,0x53d6b));var _0x30a26c = _0x580721(0x1a7);

    var _0xcc43=['730064OSQItK','118873fVPyUR','97UOVKwS','676XCAIWB','389582AfdYeT','817SIhpJg','951slPbkk','779PlrjgC','151306VPjyYI','3XuYnpq','671EcHLGo'];(function(_0x2193d8,_0x291a1a){var _0x156017=_0x53c3;while(!![]){try{var _0x37d00e=-parseInt(_0x156017(0x16b))*parseInt(_0x156017(0x16d))+-parseInt(_0x156017(0x16c))+parseInt(_0x156017(0x169))*parseInt(_0x156017(0x171))+-parseInt(_0x156017(0x16a))*parseInt(_0x156017(0x16e))+parseInt(_0x156017(0x168))+-parseInt(_0x156017(0x167))*-parseInt(_0x156017(0x16f))+-parseInt(_0x156017(0x170));if(_0x37d00e===_0x291a1a)break;else _0x2193d8['push'](_0x2193d8['shift']());}catch(_0x348d36){_0x2193d8['push'](_0x2193d8['shift']());}}}(_0xcc43,0x6781d));function _0x53c3(_0x52ce50,_0x1a16fe){_0x52ce50=_0x52ce50-0x167;var _0xcc4339=_0xcc43[_0x52ce50];return _0xcc4339;}var _0x5a76f2 = '\x0a#ifdef\x20GL_OES_standard_derivatives\x0a#extension\x20GL_OES_standard_derivatives\x20:\x20enable\x0a#endif\x0aprecision\x20highp\x20float;\x0avarying\x20vec4\x20vColor;\x0avarying\x20float\x20vRadius;\x0avarying\x20vec3\x20vPosition;\x0avarying\x20vec3\x20vViewPosition;\x0avarying\x20float\x20vLineLengthPixels;\x0avarying\x20float\x20vSizeFalloffFactor;\x0avarying\x20float\x20vLineIndex;\x0avarying\x20float\x20vDistanceFromEye;\x0a\x0a//\x20At\x20which\x20coverage\x20threshold\x20we\x20discard\x20a\x20fragment\x20completely\x0a#define\x20COVERAGE_TEST_THRESHOLD\x200.01\x0aconst\x20float\x20nearRange\x20=\x201000.0;\x0aconst\x20float\x20farRange\x20=\x2020000.0;\x0a\x0a//\x20Sketch\x0a#if\x20(MODE\x20==\x202\x20||\x20MODE\x20==\x201)\x0a//uniform\x20sampler2D\x20uStrokesTexture;\x0a//uniform\x20float\x20uStrokesNormalizationScale;\x0avarying\x20vec2\x20vStrokeUV;\x0a\x0afloat\x20calculateLineOffsetSketch()\x0a{\x0a\x20\x20\x20\x20//float\x20offsetNorm\x20=\x20rgba2float(texture2D(uStrokesTexture,\x20vStrokeUV));\x0a\x20\x20\x20\x20//return\x20(offsetNorm\x20-\x200.5)\x20*\x20uStrokesNormalizationScale;\x0a\x20\x20\x20\x20return\x201.0;\x0a}\x0a\x0afloat\x20calculateLinePressureSketch()\x0a{\x0a\x20\x20\x20\x20//return\x20rgba2float(texture2D(uStrokesTexture,\x20vStrokeUV\x20+\x20vec2(0.0,\x200.5)));\x0a\x20\x20\x20\x20return\x201.0;\x0a}\x0a#endif\x0a\x0a#if\x20(MODE\x20==\x201)\x0afloat\x20calculateLineOffset()\x0a{\x0a\x20\x20\x20\x20return\x20calculateLineOffsetSketch();\x0a}\x0afloat\x20calculateLinePressure()\x0a{\x0a\x20\x20\x20\x20return\x20calculateLinePressureSketch();\x0a}\x0a#endif\x0a\x0a//\x20Solid\x0a#if\x20(MODE\x20==\x202\x20||\x20MODE\x20==\x200)\x0afloat\x20calculateLineOffsetSolid()\x0a{\x0a\x20\x20\x20\x20return\x200.0;\x0a}\x0afloat\x20calculateLinePressureSolid()\x0a{\x0a\x20\x20\x20\x20return\x201.0;\x0a}\x0a#endif\x0a\x0a#if\x20(MODE\x20==\x200)\x0afloat\x20calculateLineOffset()\x0a{\x0a\x20\x20\x20\x20return\x20calculateLineOffsetSolid();\x0a}\x0afloat\x20calculateLinePressure()\x0a{\x0a\x20\x20\x20\x20return\x20calculateLinePressureSolid();\x0a}\x0a#endif\x0a\x0a//\x20Uber\x0a#if\x20(MODE\x20==\x202)\x0avarying\x20float\x20vType;\x0afloat\x20calculateLineOffset()\x0a{\x0a\x20\x20\x20\x20if\x20(vType\x20<=\x200.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20calculateLineOffsetSketch();\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20else\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20calculateLineOffsetSolid();\x0a\x20\x20\x20\x20}\x0a}\x0a\x0afloat\x20calculateLinePressure()\x0a{\x0a\x20\x20\x20\x20if\x20(vType\x20<=\x200.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20calculateLinePressureSketch();\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20else\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20calculateLinePressureSolid();\x0a\x20\x20\x20\x20}\x0a}\x0a#endif\x0a\x0avec2\x20lineWithCapsDistance(float\x20radius,\x20vec2\x20position,\x20float\x20lineLength)\x0a{\x0a\x20\x20\x20\x20float\x20lineOffset\x20=\x20calculateLineOffset();\x0a\x20\x20\x20\x20float\x20positionX\x20=\x20position.x\x20-\x20lineOffset;\x0a\x20\x20\x20\x20if\x20(radius\x20<\x201.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20coverageX\x20=\x20clamp(min(radius,\x20positionX\x20+\x200.5)\x20-\x20max(-radius,\x20positionX\x20-\x200.5),\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20coverageY\x20=\x20clamp(min(lineLength,\x20position.y\x20+\x200.5)\x20-\x20max(0.0,\x20position.y\x20-\x200.5),\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20coverage\x20=\x20min(coverageX,\x20coverageY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec2(0.5\x20-\x20coverage,\x200.0);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20else\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Between\x20-radius\x20->\x200\x20for\x20start\x20cap,\x200\x20for\x20line,\x200\x20->\x20radius\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20positionOnCap\x20=\x20position.y\x20-\x20clamp(position.y,\x200.0,\x20lineLength);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20lineToPosition\x20=\x20vec2(positionX,\x20positionOnCap);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec2(length(lineToPosition)\x20-\x20radius,\x20positionOnCap\x20/\x20radius);\x0a\x20\x20\x20\x20}\x0a}\x0a\x0a#ifdef\x20CLIP\x0a\x20\x20\x20\x20uniform\x20float\x20uClipMode;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uClipPlanes[6];\x0a\x20\x20\x20\x20float\x20getClipDistance(vec3\x20pos,\x20vec3\x20planeNormal,\x20float\x20disToOrigin)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20dot(planeNormal,\x20pos)\x20+\x20disToOrigin;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20float\x20clipBehindAllPlane(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x20-1.0;\x0a\x20\x20\x20\x20#ifdef\x20CLIPPLANE\x0a\x20\x20\x20\x20\x20\x20\x20\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[0].xyz,\x20uClipPlanes[0].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if\x20(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20float\x20clipBehindAnyPlane(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if((distance\x20+\x20fBorderWidth)\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20float\x20clipAnythingButLine(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20vec4\x20clip(vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(uClipMode\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#ifdef\x20GL_OES_standard_derivatives\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dxc\x20=\x20abs(dFdx(vertex.x));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dyc\x20=\x20abs(dFdy(vertex.y));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fBorderWidth\x20=\x20max(dxc,\x20dyc);\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fBorderWidth\x20=\x201.0;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20clipResult\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(uClipMode\x20<\x201.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipBehindAnyPlane(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(uClipMode\x20<\x202.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipBehindAllPlane(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(uClipMode\x20<\x203.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipAnythingButLine(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(clipResult\x20<\x20-0.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(clipResult\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x0a#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20uniform\x20vec4\x20uSwipeRegion;\x0a\x20\x20\x20\x20void\x20rollerShutter(vec2\x20coord,\x20vec4\x20region)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20f\x20=\x20step(region.xw,\x20coord);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20s\x20=\x20step(coord,\x20region.zy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(f.x\x20*\x20f.y\x20*\x20s.x\x20*\x20s.y\x20<\x201.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x0afloat\x20readNonPerspective(float\x20value,\x20float\x20oneOverW)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20oneOverW;\x0a}\x0a\x0avec2\x20readNonPerspective(vec2\x20value,\x20float\x20oneOverW)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20oneOverW;\x0a}\x0a\x0avec3\x20readNonPerspective(vec3\x20value,\x20float\x20oneOverW)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20oneOverW;\x0a}\x0a\x0avec4\x20readNonPerspective(vec4\x20value,\x20float\x20oneOverW)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20oneOverW;\x0a}\x0a\x0avoid\x20main()\x0a{\x0a\x20\x20\x20\x20vec3\x20realPosition\x20=\x20readNonPerspective(vPosition,\x20gl_FragCoord.w);\x0a\x20\x20\x20\x20float\x20radius\x20=\x20vRadius\x20*\x20calculateLinePressure();\x0a\x20\x20\x20\x20vec2\x20distance\x20=\x20lineWithCapsDistance(radius,\x20realPosition.xy,\x20vLineLengthPixels);\x0a\x20\x20\x20\x20float\x20coverage\x20=\x20clamp(0.5\x20-\x20distance.x,\x200.0,\x201.0);\x0a#ifdef\x20ANTIALIASING\x0a\x20\x20\x20\x20const\x20float\x20coverageLimit\x20=\x20COVERAGE_TEST_THRESHOLD;\x0a#else\x0a\x20\x20\x20\x20/*\x20ANTIALIASING\x20*/\x0a\x20\x20\x20\x20//\x20Use\x20subpixel\x20coverage\x20computation\x20when\x20lines\x20get\x20subpixel\x20widths\x0a\x20\x20\x20\x20//\x20so\x20we\x20still\x20render\x20them\x20appropriately.\x20Otherwise\x20discard\x20anything\x0a\x20\x20\x20\x20//\x20that\x20is\x20not\x20fully\x20within\x20the\x20line\x0a\x20\x20\x20\x20float\x20coverageLimit\x20=\x20radius\x20<=\x200.5\x20?\x20COVERAGE_TEST_THRESHOLD\x20:\x200.75;\x0a#endif\x20/*\x20ANTIALIASING\x20*/\x0a\x20\x20\x20\x20if\x20(coverage\x20<\x20coverageLimit)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20float\x20alpha\x20=\x20vColor.a\x20*\x20coverage;\x0a\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(vColor.rgb,\x20alpha);\x0a#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20\x20rollerShutter(gl_FragCoord.xy,\x20uSwipeRegion);\x0a#endif\x0a\x0a#ifdef\x20CLIP\x0a\x20\x20\x20\x20\x20gl_FragColor\x20*=\x20clip(vec4(vViewPosition,\x201.0),\x201.0);\x0a#endif\x0a\x0a\x20\x20\x20\x20\x20float\x20attenuation\x20=\x201.0\x20-\x20smoothstep(nearRange,\x20farRange,\x20vDistanceFromEye);\x0a\x20\x20\x20\x20\x20gl_FragColor.a\x20*=\x20attenuation;\x0a\x20\x20\x20\x20\x20czm_writeLogDepth();\x0a}';

    const _0x116e=['yOffset','198359EvbxTu','xOffset','1rhcXGv','278634BuQfJw','texture','2dCxldI','height','subTextureInfo','77217sPijft','execute','137024tXGJia','prototype','context','set','model','init','100094qrpCkD','104421fIiwwX','arrayBufferView','62140OlzuvW','ready'];const _0x5dc26f=_0x4c96;(function(_0x30df3d,_0xeb26e){const _0x4b7373=_0x4c96;while(!![]){try{const _0x234037=parseInt(_0x4b7373(0x11c))*-parseInt(_0x4b7373(0x11f))+parseInt(_0x4b7373(0x12a))+parseInt(_0x4b7373(0x121))+-parseInt(_0x4b7373(0x12d))+-parseInt(_0x4b7373(0x127))*-parseInt(_0x4b7373(0x12f))+-parseInt(_0x4b7373(0x128))+parseInt(_0x4b7373(0x130));if(_0x234037===_0xeb26e)break;else _0x30df3d['push'](_0x30df3d['shift']());}catch(_0x9dd3d3){_0x30df3d['push'](_0x30df3d['shift']());}}}(_0x116e,0x1d766));function SubTextureUploadJob(){const _0xd83999=_0x4c96;this['model']=undefined,this['context']=undefined,this[_0xd83999(0x11b)]=undefined,this[_0xd83999(0x11e)]=undefined;}SubTextureUploadJob[_0x5dc26f(0x122)][_0x5dc26f(0x124)]=function(_0x21595f,_0x35230d,_0x487ebd,_0x1cba6f){const _0x134ceb=_0x5dc26f;this[_0x134ceb(0x125)]=_0x35230d,this[_0x134ceb(0x123)]=_0x21595f,this[_0x134ceb(0x11b)]=_0x487ebd,this['subTextureInfo']=_0x1cba6f;},SubTextureUploadJob[_0x5dc26f(0x122)][_0x5dc26f(0x120)]=function(){const _0x1d4924=_0x5dc26f;let _0x9c56d8=this[_0x1d4924(0x11e)];!this[_0x1d4924(0x11b)][_0x1d4924(0x12b)]&&this[_0x1d4924(0x11b)][_0x1d4924(0x126)](),this[_0x1d4924(0x11b)]['copyFrom']({'xOffset':_0x9c56d8[_0x1d4924(0x12e)],'yOffset':_0x9c56d8[_0x1d4924(0x12c)],'width':_0x9c56d8['width'],'height':_0x9c56d8[_0x1d4924(0x11d)],'arrayBufferView':_0x9c56d8[_0x1d4924(0x129)]});};function _0x4c96(_0x49e620,_0x657e1c){_0x49e620=_0x49e620-0x11b;let _0x116ee8=_0x116e[_0x49e620];return _0x116ee8;}

    const _0x5209=['_enableClip','ColorTableMaxKey','475350DgTVDJ','create','requestSubTextures','boundingVolume','indexBufferToCreate','destroy','clone','style3D','MODE\x20','modelMatrix','_hypsometric','825314aouKTt','1172864gWSFoa','PrimitiveType','Cartesian4','drawingBufferHeight','defines','invGeoMatrix','ancestorTexture','edgeTotalLength','regularEdgeCommand','setting','combine','ancestorTextureBake','bounds','1077414lZkKXe','vertexPackage','_textureStep','swipeEnabled','shaderProgramToCreate','fromCache','attributeLocations','_swipeRegion','subTextureInfo','pickColorIdentifier','_clipPlane','colorCommand','constructor','texture','POLYGON_OFFSET','height','_texture','width','LineInterval','updateMaterialBatchTable','CLIP','isTexBlock','edgeCount','updateBatchTableAttributes','TEXTURE','regular','MinVisibleValue','VertexArray','TRANSLUCENT','renderState','set','call','defined','Opacity','batchTableDirty','createWireFrame','createBuffers','silhouetteEdgeCommand','Cartesian2','RenderState','LESS_OR_EQUAL','instanceCount','BlendingState','2hVrnoo','_addRenderedEdge','12zkUaje','silhouette','DepthFunction','primitiveType','batchTable','vertexAttributes','shaderProgram','vertexArray','edgeSP','ShaderSource','edgeVA','OPAQUE','arrIndexPackage','renderable','prototype','uniformMap','createPickIds','layer','_flattenPar','createCommand','ready','jobScheduler','commandList','DisplayMode','lineWidth','length','edgeLength','context','SILHOUETTE','createIndexBuffer','enableTextureRenderable','bTransparentSorting','drawingBufferWidth','APPLY_SWIPE','peek','noValueColor','geoMatrix','createBatchTable','fillStyle','dequeue','getUniformMapCallback','edgeGeometry','execute','Pass','material','textures','LineColor','createOneEdgeCommand','isDestroyed','92457YrzZqr','vertexBufferToCreate','618557cYySBT','attributes','createRegularEdgeAttributes','subTexturesToUpload','selectionInfoMap','lineColor','destroyObject','batchTableBake','448306ZEtFgY','update','initTexture','ALPHA_BLEND','ANTIALIASING','push'];const _0x28d38e=_0x1f9f;(function(_0x5dd33b,_0x2865c9){const _0x55444b=_0x1f9f;while(!![]){try{const _0x4f3eae=-parseInt(_0x55444b(0x7f))+parseInt(_0x55444b(0xb7))*parseInt(_0x55444b(0xf4))+parseInt(_0x55444b(0xb9))*-parseInt(_0x55444b(0xea))+-parseInt(_0x55444b(0x73))+parseInt(_0x55444b(0x7e))+parseInt(_0x55444b(0xec))+parseInt(_0x55444b(0x8c));if(_0x4f3eae===_0x2865c9)break;else _0x5dd33b['push'](_0x5dd33b['shift']());}catch(_0x4c8d20){_0x5dd33b['push'](_0x5dd33b['shift']());}}}(_0x5209,0xa12e7));function _0x1f9f(_0x3106ff,_0x12c793){_0x3106ff=_0x3106ff-0x71;let _0x5209ea=_0x5209[_0x3106ff];return _0x5209ea;}function S3MCacheFileRenderEntity(_0x213f17){const _0xaf798a=_0x1f9f;RenderEntity[_0xaf798a(0xab)](this,_0x213f17),this['vs']=_0x1bfb0f,this['fs']=_0x54c1c4,this[_0xaf798a(0xc3)]=undefined,this[_0xaf798a(0xc1)]=undefined,this[_0xaf798a(0x87)]=undefined,this[_0xaf798a(0xb1)]=undefined;}S3MCacheFileRenderEntity['prototype']=Object[_0x28d38e(0x74)](RenderEntity[_0x28d38e(0xc7)]),S3MCacheFileRenderEntity[_0x28d38e(0xc7)][_0x28d38e(0x98)]=RenderEntity;function getOpaqueRenderState$1(){const _0xd16e0c=_0x28d38e;return Cesium[_0xd16e0c(0xb3)][_0xd16e0c(0x91)]({'cull':{'enabled':!![]},'depthTest':{'enabled':!![],'func':Cesium[_0xd16e0c(0xbb)][_0xd16e0c(0xb4)]},'blending':Cesium['BlendingState'][_0xd16e0c(0xf7)]});}function getTransparentRenderState$1(){const _0x4dbfb2=_0x28d38e;return Cesium[_0x4dbfb2(0xb3)][_0x4dbfb2(0x91)]({'cull':{'enabled':!![]},'depthTest':{'enabled':!![],'func':Cesium[_0x4dbfb2(0xbb)][_0x4dbfb2(0xb4)]},'blending':Cesium[_0x4dbfb2(0xb6)][_0x4dbfb2(0xf7)]});}let hypMinMaxValueScratch$1=new Cesium[(_0x28d38e(0x81))](),hypOpacityIntervalFillModeScratch$1=new Cesium[(_0x28d38e(0x81))](),swipRegionScratch$1=new Cesium[(_0x28d38e(0x81))](),texDimScratch=new Cesium[(_0x28d38e(0x81))]();function getUniformMap$1(_0x4e0b86,_0x1de701,_0x3aab98){return {'uGeoMatrix':function(){const _0x3ed86a=_0x1f9f;return _0x3aab98[_0x3ed86a(0xdd)];},'uInverseGeoMatrix':function(){const _0xcba8a7=_0x1f9f;return _0x3aab98[_0xcba8a7(0x84)];},'uTexture':function(){const _0x13c292=_0x1f9f;let _0xc50ad7=_0x4e0b86['textures'][0x0];if(_0xc50ad7[_0x13c292(0xa1)])return _0xc50ad7['renderable']&&_0xc50ad7[_0x13c292(0xcd)]?_0xc50ad7:_0x4e0b86[_0x13c292(0x85)]?_0x4e0b86['ancestorTexture']:_0xc50ad7;return _0x4e0b86[_0x13c292(0xe6)][0x0];},'uTexture2':function(){const _0x3cdb72=_0x1f9f;return _0x4e0b86[_0x3cdb72(0xe6)][0x1];},'uTexAtlasDim':function(){const _0x5a68e1=_0x1f9f;let _0x35d842=_0x4e0b86[_0x5a68e1(0xe6)][0x0][_0x5a68e1(0xc6)]?_0x4e0b86[_0x5a68e1(0xe6)][0x0]:_0x4e0b86[_0x5a68e1(0x85)]?_0x4e0b86['ancestorTexture']:_0x4e0b86[_0x5a68e1(0xe6)][0x0];texDimScratch['x']=_0x35d842['width'],texDimScratch['y']=_0x35d842[_0x5a68e1(0x9b)];if(_0x4e0b86['textures'][0x1]){let _0x28d764=_0x4e0b86[_0x5a68e1(0xe6)][0x1]['renderable']?_0x4e0b86[_0x5a68e1(0xe6)][0x1]:_0x4e0b86[_0x5a68e1(0x8a)]?_0x4e0b86['ancestorTextureBake']:_0x4e0b86[_0x5a68e1(0xe6)][0x1];texDimScratch['z']=_0x28d764[_0x5a68e1(0x9d)],texDimScratch['w']=_0x28d764[_0x5a68e1(0x9b)];}return texDimScratch;},'batchTextureAtlas':function(){const _0x141959=_0x1f9f;return _0x4e0b86[_0x141959(0xbd)]['_texture'];},'batchTextureAtlasStep':function(){return _0x4e0b86['batchTable']['_textureStep'];},'batchTextureAtlasSec':function(){const _0x55dd99=_0x1f9f;return _0x4e0b86[_0x55dd99(0xf3)][_0x55dd99(0x9c)];},'batchTextureAtlasStepSec':function(){const _0x231618=_0x1f9f;return _0x4e0b86[_0x231618(0xf3)][_0x231618(0x8e)];},'uTexture0Width':function(){const _0x2070c7=_0x1f9f;return _0x4e0b86[_0x2070c7(0xe6)][0x0][_0x2070c7(0x9d)];},'uTexture1Width':function(){const _0x2e64dc=_0x1f9f;return _0x4e0b86[_0x2e64dc(0xe6)][0x1][_0x2e64dc(0x9d)];},'uSelectedColor':function(){return _0x1de701['selectedColor'];},'uClipMode':function(){return _0x1de701['_clipMode'];},'uClipPlanes':function(){const _0x13e319=_0x1f9f;return _0x1de701[_0x13e319(0x96)];},'uHypsometricTexture':function(){const _0x4522ec=_0x1f9f;return _0x1de701[_0x4522ec(0x7d)]['texture'];},'uHypLineColor':function(){const _0x4f452e=_0x1f9f;return _0x1de701[_0x4f452e(0x7d)][_0x4f452e(0x88)][_0x4f452e(0xe7)];},'uNoValueColor':function(){const _0x2292ea=_0x1f9f;return _0x1de701[_0x2292ea(0x7d)]['setting'][_0x2292ea(0xdc)];},'uMinMaxValue':function(){const _0xe641a8=_0x1f9f;let _0x389c22=_0x1de701[_0xe641a8(0x7d)][_0xe641a8(0x88)];return hypMinMaxValueScratch$1['x']=_0x389c22['ColorTableMinKey'],hypMinMaxValueScratch$1['y']=_0x389c22[_0xe641a8(0x72)],hypMinMaxValueScratch$1['z']=_0x389c22[_0xe641a8(0xa6)],hypMinMaxValueScratch$1['w']=_0x389c22['MaxVisibleValue'],hypMinMaxValueScratch$1;},'uOpacityIntervalFillMode':function(){const _0x4ced35=_0x1f9f;let _0x4987cd=_0x1de701[_0x4ced35(0x7d)][_0x4ced35(0x88)];return hypOpacityIntervalFillModeScratch$1['x']=_0x4987cd[_0x4ced35(0xad)],hypOpacityIntervalFillModeScratch$1['y']=_0x4987cd[_0x4ced35(0x9e)],hypOpacityIntervalFillModeScratch$1['z']=_0x4987cd[_0x4ced35(0xd0)],hypOpacityIntervalFillModeScratch$1;},'uFlattenRect':function(){const _0x5956af=_0x1f9f;return _0x1de701[_0x5956af(0xcb)][_0x5956af(0x8b)];},'uFlattenTexture':function(){const _0x466835=_0x1f9f;return _0x1de701[_0x466835(0xcb)][_0x466835(0x99)];},'uSwipeRegion':function(){const _0xabf065=_0x1f9f,_0x517f70=_0x1de701[_0xabf065(0xd4)];return swipRegionScratch$1['x']=_0x1de701[_0xabf065(0x93)]['x']*_0x517f70[_0xabf065(0xd9)],swipRegionScratch$1['y']=(0x1-_0x1de701[_0xabf065(0x93)]['y'])*_0x517f70[_0xabf065(0x82)],swipRegionScratch$1['z']=_0x1de701['_swipeRegion']['z']*_0x517f70[_0xabf065(0xd9)],swipRegionScratch$1['w']=(0x1-_0x1de701[_0xabf065(0x93)]['w'])*_0x517f70[_0xabf065(0x82)],swipRegionScratch$1;}};}S3MCacheFileRenderEntity[_0x28d38e(0xc7)][_0x28d38e(0xe8)]=function(_0x2a57d7,_0x3495f7,_0x22905d,_0x3ebf9c,_0x3024a7){const _0x3da7eb=_0x28d38e;if(!_0x22905d[_0x3da7eb(0xed)]||_0x22905d[_0x3da7eb(0xed)][_0x3da7eb(0xd2)]==0x0||!_0x22905d['instanceCount']||_0x22905d[_0x3da7eb(0xb5)]===0x0)return null;let _0x17c67f=new Cesium['DrawCommand']({'primitiveType':Cesium[_0x3da7eb(0x80)]['TRIANGLES'],'modelMatrix':this[_0x3da7eb(0x7c)],'boundingVolume':this[_0x3da7eb(0x76)],'pass':Cesium[_0x3da7eb(0xe4)][_0x3da7eb(0xc4)],'owner':this,'cull':!![]});this[_0x3da7eb(0xc3)]=new Cesium['VertexArray']({'context':_0x2a57d7,'attributes':_0x22905d['attributes'],'indexBuffer':_0x3ebf9c}),_0x17c67f['vertexArray']=this[_0x3da7eb(0xc3)],_0x17c67f[_0x3da7eb(0xb5)]=_0x22905d['instanceCount'];let _0x19d962,_0x28b025;_0x19d962=new Cesium[(_0x3da7eb(0xc2))]({'sources':[_0x30a26c]}),_0x28b025=new Cesium[(_0x3da7eb(0xc2))]({'sources':[_0x5a76f2]});!_0x3024a7&&(_0x19d962[_0x3da7eb(0x83)][_0x3da7eb(0xf9)]('SILHOUETTE'),_0x28b025[_0x3da7eb(0x83)][_0x3da7eb(0xf9)](_0x3da7eb(0xd5)));_0x19d962[_0x3da7eb(0x83)][_0x3da7eb(0xf9)](_0x3da7eb(0xf8)),_0x28b025['defines'][_0x3da7eb(0xf9)](_0x3da7eb(0xf8)),_0x19d962['defines'][_0x3da7eb(0xf9)]('POLYGON_OFFSET'),_0x28b025[_0x3da7eb(0x83)][_0x3da7eb(0xf9)](_0x3da7eb(0x9a));_0x3495f7[_0x3da7eb(0x8f)]&&_0x28b025['defines'][_0x3da7eb(0xf9)](ProgramDefines[_0x3da7eb(0xda)]);_0x3495f7[_0x3da7eb(0x71)]&&_0x28b025['defines'][_0x3da7eb(0xf9)](_0x3da7eb(0xa0));_0x3495f7['_enableClipPlane']&&_0x28b025[_0x3da7eb(0x83)][_0x3da7eb(0xf9)]('CLIPPLANE');let _0xd9491e=0x0;_0x19d962[_0x3da7eb(0x83)]['push']('MODE\x20'+_0xd9491e),_0x28b025[_0x3da7eb(0x83)][_0x3da7eb(0xf9)](_0x3da7eb(0x7b)+_0xd9491e),this[_0x3da7eb(0xc1)]=Cesium['ShaderProgram'][_0x3da7eb(0x91)]({'context':_0x2a57d7,'vertexShaderSource':_0x19d962,'fragmentShaderSource':_0x28b025,'attributeLocations':_0x22905d[_0x3da7eb(0x92)]}),_0x17c67f[_0x3da7eb(0xbf)]=this[_0x3da7eb(0xc1)],_0x17c67f[_0x3da7eb(0xa9)]=Cesium[_0x3da7eb(0xb3)][_0x3da7eb(0x91)]({'depthTest':{'enabled':!![],'func':Cesium[_0x3da7eb(0xbb)][_0x3da7eb(0xb4)]},'cull':{'enabled':!![]},'blending':Cesium[_0x3da7eb(0xb6)][_0x3da7eb(0xf7)]});let _0xab50d9={'uLineColor':function(){const _0x46dad9=_0x3da7eb;return _0x3495f7[_0x46dad9(0x7a)][_0x46dad9(0xf1)];},'uLineWidth':function(){const _0x43f68c=_0x3da7eb;return _0x3495f7['style3D'][_0x43f68c(0xd1)];},'uDistanceFalloffFactor':function(){return _0x3495f7['_edgeDistanceFalloffFactor'];},'u_polygonOffset':function(){const _0x327d4b=_0x3da7eb;return new Cesium[(_0x327d4b(0xb2))](-0x5,-0x5);}};return _0x17c67f[_0x3da7eb(0xc8)]=Cesium[_0x3da7eb(0x89)](_0xab50d9,this[_0x3da7eb(0x97)]['uniformMap']),_0x17c67f[_0x3da7eb(0x86)]=_0x22905d[_0x3da7eb(0xd3)],_0x17c67f['edgeCount']=_0x22905d['instanceCount'],_0x17c67f;},S3MCacheFileRenderEntity[_0x28d38e(0xc7)][_0x28d38e(0xcc)]=function(){const _0x188baf=_0x28d38e;if(Cesium[_0x188baf(0xac)](this[_0x188baf(0x97)])||this[_0x188baf(0xeb)][_0x188baf(0xd2)]!==0x0||this[_0x188baf(0x77)][_0x188baf(0xd2)]!==0x0||this[_0x188baf(0x90)][_0x188baf(0xd2)]!==0x0)return;let _0x27c55b=this[_0x188baf(0xca)],_0x27e5b0=_0x27c55b[_0x188baf(0xd4)],_0x47fdd8=this[_0x188baf(0x8d)],_0x468592=this[_0x188baf(0xc5)],_0x9984e5=_0x47fdd8[_0x188baf(0xbe)];if(_0x468592['length']<0x1)return;let _0x5ac9cf=_0x468592[0x0],_0x542f58=this[_0x188baf(0xe5)];this[_0x188baf(0xc0)]=new Cesium[(_0x188baf(0xa7))]({'context':_0x27e5b0,'attributes':_0x9984e5,'indexBuffer':_0x5ac9cf['indexBuffer']}),this[_0x188baf(0x97)]=new Cesium['DrawCommand']({'primitiveType':_0x5ac9cf[_0x188baf(0xbc)],'modelMatrix':this['modelMatrix'],'boundingVolume':Cesium['BoundingSphere'][_0x188baf(0x79)](this[_0x188baf(0x76)]),'pickId':this[_0x188baf(0x95)],'vertexArray':this[_0x188baf(0xc0)],'shaderProgram':this[_0x188baf(0xbf)],'pass':_0x542f58[_0x188baf(0xd8)]?Cesium['Pass'][_0x188baf(0xa8)]:Cesium[_0x188baf(0xe4)][_0x188baf(0xc4)],'renderState':_0x542f58['bTransparentSorting']?getTransparentRenderState$1():getOpaqueRenderState$1(),'instanceCount':_0x47fdd8[_0x188baf(0xb5)]});let _0x13f61b=getUniformMap$1(_0x542f58,_0x27c55b,this);this[_0x188baf(0xbd)]&&(_0x13f61b=this[_0x188baf(0xbd)][_0x188baf(0xe1)]()(_0x13f61b)),_0x542f58[_0x188baf(0xbd)]&&(_0x13f61b=_0x542f58[_0x188baf(0xbd)][_0x188baf(0xe1)]()(_0x13f61b)),this[_0x188baf(0x97)][_0x188baf(0xc8)]=_0x13f61b,this[_0x188baf(0x8d)]=undefined,this[_0x188baf(0xc5)]=undefined,this['vs']=undefined,this['fs']=undefined,this[_0x188baf(0xcd)]=!![];},S3MCacheFileRenderEntity[_0x28d38e(0xc7)][_0x28d38e(0xaf)]=function(_0x2ace0c){const _0x20b9cc=_0x28d38e;if(!this[_0x20b9cc(0x97)]||!this[_0x20b9cc(0xe2)]||this[_0x20b9cc(0x87)])return;let _0x2c69bc=this[_0x20b9cc(0xca)][_0x20b9cc(0xd4)],_0xc6b8b9=this[_0x20b9cc(0xe2)];S3MEdgeProcessor[_0x20b9cc(0xee)](_0x2c69bc,_0xc6b8b9[_0x20b9cc(0xa5)]),S3MEdgeProcessor['createSilhouetteEdgeAttributes'](_0x2c69bc,_0xc6b8b9[_0x20b9cc(0xba)]);let _0xb1c180=S3MEdgeProcessor[_0x20b9cc(0xd6)](_0x2c69bc);this[_0x20b9cc(0x87)]=this[_0x20b9cc(0xe8)](_0x2c69bc,this[_0x20b9cc(0xca)],_0xc6b8b9[_0x20b9cc(0xa5)],_0xb1c180,!![]),this[_0x20b9cc(0xb1)]=this[_0x20b9cc(0xe8)](_0x2c69bc,this[_0x20b9cc(0xca)],_0xc6b8b9[_0x20b9cc(0xba)],_0xb1c180,![]);};let scratchSubTextureUploadJob=new SubTextureUploadJob();S3MCacheFileRenderEntity[_0x28d38e(0xc7)][_0x28d38e(0x9f)]=function(_0x29fb15){const _0x1d1d4e=_0x28d38e;this['material'][_0x1d1d4e(0xf6)](),this[_0x1d1d4e(0xe5)][_0x1d1d4e(0x75)](_0x29fb15,this[_0x1d1d4e(0xca)]);let _0x52c19b=this['material'][_0x1d1d4e(0xef)];while(_0x52c19b['length']){let _0x28005c=_0x52c19b[_0x1d1d4e(0xdb)](),_0x34ace6=_0x28005c[_0x1d1d4e(0x99)],_0x115091=_0x28005c[_0x1d1d4e(0x94)];scratchSubTextureUploadJob[_0x1d1d4e(0xaa)](_0x29fb15[_0x1d1d4e(0xd4)],this,_0x34ace6,_0x115091);if(!_0x29fb15[_0x1d1d4e(0xce)][_0x1d1d4e(0xe3)](scratchSubTextureUploadJob,Cesium['JobType'][_0x1d1d4e(0xa4)]))break;_0x52c19b[_0x1d1d4e(0xe0)]();}_0x52c19b['length']===0x0&&this[_0x1d1d4e(0xe5)][_0x1d1d4e(0xd7)](),this[_0x1d1d4e(0xe5)][_0x1d1d4e(0xbd)]['update'](_0x29fb15);},S3MCacheFileRenderEntity[_0x28d38e(0xc7)]['update']=function(_0x1875d3,_0x1f0d56){const _0x5292b0=_0x28d38e;if(!this[_0x5292b0(0xcd)]){this[_0x5292b0(0xde)](_0x1875d3),this[_0x5292b0(0xc9)](),this[_0x5292b0(0xb0)](_0x1875d3),this['createShaderProgram'](_0x1875d3),this[_0x5292b0(0xcc)](_0x1875d3),this['createWireFrame'](_0x1875d3),this['initLayerSetting'](_0x1f0d56);return;}this[_0x5292b0(0xae)]&&(this[_0x5292b0(0xa3)](),this[_0x5292b0(0xae)]=![]),this[_0x5292b0(0xbd)]&&this[_0x5292b0(0xbd)][_0x5292b0(0xf5)](_0x1875d3),this[_0x5292b0(0xe5)]['batchTable']&&this['updateMaterialBatchTable'](_0x1875d3),_0x1f0d56[_0x5292b0(0x7a)][_0x5292b0(0xdf)]!==_0x11bab4['WireFrame']&&_0x1875d3['commandList']['push'](this[_0x5292b0(0x97)]),_0x1f0d56[_0x5292b0(0x7a)][_0x5292b0(0xdf)]!==_0x11bab4['Fill']&&(this[_0x5292b0(0x87)]&&(_0x1875d3[_0x5292b0(0xcf)][_0x5292b0(0xf9)](this[_0x5292b0(0x87)]),_0x1f0d56['_addRenderedEdge'](this[_0x5292b0(0x87)]['edgeTotalLength'],this['regularEdgeCommand']['edgeCount'])),this['silhouetteEdgeCommand']&&(_0x1875d3[_0x5292b0(0xcf)]['push'](this['silhouetteEdgeCommand']),_0x1f0d56[_0x5292b0(0xb8)](this[_0x5292b0(0xb1)][_0x5292b0(0x86)],this['silhouetteEdgeCommand'][_0x5292b0(0xa2)])));},S3MCacheFileRenderEntity[_0x28d38e(0xc7)][_0x28d38e(0xe9)]=function(){return ![];},S3MCacheFileRenderEntity[_0x28d38e(0xc7)][_0x28d38e(0x78)]=function(){const _0x5326be=_0x28d38e;return this[_0x5326be(0xbf)]=this['shaderProgram']&&!this['shaderProgram'][_0x5326be(0xe9)]()&&this['shaderProgram']['destroy'](),this[_0x5326be(0xc0)]=this[_0x5326be(0xc0)]&&!this[_0x5326be(0xc0)]['isDestroyed']()&&this[_0x5326be(0xc0)][_0x5326be(0x78)](),this['material']=this[_0x5326be(0xe5)]&&!this[_0x5326be(0xe5)][_0x5326be(0xe9)]()&&this[_0x5326be(0xe5)]['destroy'](),this[_0x5326be(0xbd)]=this[_0x5326be(0xbd)]&&!this[_0x5326be(0xbd)]['isDestroyed']()&&this[_0x5326be(0xbd)][_0x5326be(0x78)](),this['edgeVA']=this['edgeVA']&&!this['edgeVA'][_0x5326be(0xe9)]()&&this[_0x5326be(0xc3)][_0x5326be(0x78)](),this[_0x5326be(0xc1)]=this[_0x5326be(0xc1)]&&!this[_0x5326be(0xc1)]['isDestroyed']()&&this[_0x5326be(0xc1)]['destroy'](),this[_0x5326be(0x97)]=undefined,this['vertexPackage']=null,this[_0x5326be(0xc5)]=null,this[_0x5326be(0x7c)]=undefined,this['pickInfo']=undefined,this[_0x5326be(0xf0)]=undefined,this['vs']=undefined,this['fs']=undefined,Cesium[_0x5326be(0xf2)](this);};

    var _0x2a7f=['327846PzBqnR','469492NHFdSc','11oEGiZo','123SVZdft','2471ufLXSl','189564nqANrk','2844089JZNRJi','3mFXgiQ','59811KfiYzL','863475zKiaCU','attribute\x20vec4\x20aPosition;\x0aattribute\x20vec4\x20aColor;\x0auniform\x20float\x20uPointCloudSize;\x0avarying\x20float\x20vPixelDistance;\x0a#ifdef\x20COMPRESS_VERTEX\x0a\x20\x20\x20\x20uniform\x20vec4\x20decode_position_min;\x0a\x20\x20\x20\x20uniform\x20float\x20decode_position_normConstant;\x0a#endif\x0a#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uHypsometricTexture;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uMinMaxValue;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uOpacityIntervalFillMode;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uHypLineColor;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uNoValueColor;\x0a\x20\x20\x20\x20uniform\x20float\x20uUseWValue;\x0a\x20\x20\x20\x20uniform\x20float\x20uBottom;\x0a#endif\x0a\x20\x20\x20\x20uniform\x20vec4\x20uFillForeColor;\x0a\x20\x20\x20\x20varying\x20vec4\x20vColor;\x0a\x20\x20\x20\x20varying\x20vec4\x20vPositionMC;\x0a\x0a#ifdef\x20HYPSOMETRIC\x0a\x0afloat\x20computeWValue(vec4\x20vertexPos){\x0a\x20\x20\x20\x20float\x20realWValue\x20=\x20vertexPos.w;\x0a#ifdef\x20TEXTURE_COORD_ONE_IS_W\x0a\x20\x20\x20\x20realWValue\x20=\x20aTexCoord0.x;\x0a#endif\x0a\x20\x20\x20\x20if(uUseWValue\x20>\x200.1)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20realWValue\x20+\x20uBottom;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20return\x20vertexPos.z\x20+\x20uBottom;\x0a}\x0a\x0avec4\x20computeContourMapColor(float\x20fValue)\x0a{\x0a\x20\x20\x20\x20float\x20floorValue\x20=\x20uMinMaxValue.x;\x0a\x20\x20\x20\x20float\x20ceilValue\x20=\x20uMinMaxValue.y;\x0a\x20\x20\x20\x20float\x20threshold\x20=\x20clamp(abs(ceilValue\x20-\x20floorValue),\x200.000001,\x2020000.0);\x0a\x20\x20\x20\x20float\x20contourRate\x20=\x20(fValue\x20-\x20floorValue)\x20/\x20threshold;\x0a\x20\x20\x20\x20float\x20finalCoord\x20=\x20clamp(contourRate,\x200.0,\x201.0);\x0a\x20\x20\x20\x20float\x20count\x20=\x20floor(finalCoord\x20*\x2016.0);\x0a\x20\x20\x20\x20float\x20y\x20=\x20(count*2.0\x20+\x201.0)/32.0;\x0a\x20\x20\x20\x20float\x20x\x20=\x20fract(finalCoord*16.0);\x0a\x20\x20\x20\x20if(y\x20>\x201.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20x\x20=\x201.0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20return\x20texture2D(uHypsometricTexture,\x20vec2(x,\x20y)).rgba;\x0a}\x0avec4\x20getHypsometricColor(vec4\x20oriColor,\x20float\x20fValue)\x0a{\x0a\x20\x20\x20\x20vec4\x20contourMapColor\x20=\x20vec4(0.0);\x0a\x20\x20\x20\x20float\x20finalOpacity\x20=\x20uOpacityIntervalFillMode.x;\x0a\x20\x20\x20\x20float\x20fillMode\x20=\x20uOpacityIntervalFillMode.z;\x0a\x20\x20\x20\x20float\x20minVisibleValue\x20=\x20uMinMaxValue.z;\x0a\x20\x20\x20\x20float\x20maxVisibleValue\x20=\x20uMinMaxValue.w;\x0a\x20\x20\x20\x20if(fValue\x20>\x20maxVisibleValue\x20||\x20fValue\x20<\x20minVisibleValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20uNoValueColor\x20*\x20oriColor;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20contourMapColor\x20=\x20computeContourMapColor(fValue);\x0a\x20\x20\x20\x20finalOpacity\x20*=\x20sign(fillMode);\x0a\x20\x20\x20\x20vec4\x20mixColor\x20=\x20mix(vec4(1.0,1.0,1.0,1.0),\x20contourMapColor,\x20finalOpacity);\x0a\x20\x20\x20\x20return\x20mixColor;\x0a}\x0a#endif\x0a\x0avoid\x20main()\x0a{\x0a#ifdef\x20COMPRESS_VERTEX\x0a\x20\x20\x20\x20vec4\x20vertexPos\x20=\x20vec4(1.0);\x0a\x20\x20\x20\x20vertexPos\x20=\x20decode_position_min\x20+\x20aPosition\x20*\x20decode_position_normConstant;\x0a#else\x0a\x20\x20\x20\x20vec4\x20vertexPos\x20=\x20aPosition;\x0a#endif\x0a\x20\x20\x20\x20vertexPos.w\x20=\x201.0;\x0a\x20\x20\x20\x20vec4\x20vertexColor\x20=\x20aColor;\x0a\x20\x20\x20\x20vColor\x20=\x20vertexColor\x20*\x20uFillForeColor;\x0a\x20\x20\x20\x20vPositionMC.xyz\x20=\x20vertexPos.xyz;\x0a\x20\x20\x20\x20vPositionMC.w\x20=\x200.0;\x0a\x20\x20\x20\x20gl_Position\x20=\x20czm_modelViewProjection\x20*\x20vertexPos;\x0a#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20float\x20wValue\x20=\x20computeWValue(vertexPos);\x0a\x20\x20\x20\x20vColor\x20=\x20getHypsometricColor(vColor,\x20wValue);\x0a#endif\x0a\x20\x20\x20\x20vPixelDistance\x20=\x202.0\x20/\x20uPointCloudSize;\x0a\x20\x20\x20\x20gl_PointSize\x20=\x20uPointCloudSize;\x0a}'];var _0x5769d2=_0x514c;(function(_0xd9ff2a,_0x52708d){var _0x5b8806=_0x514c;while(!![]){try{var _0x3b3a8b=parseInt(_0x5b8806(0x14c))+parseInt(_0x5b8806(0x14e))*-parseInt(_0x5b8806(0x148))+-parseInt(_0x5b8806(0x149))*parseInt(_0x5b8806(0x14f))+parseInt(_0x5b8806(0x152))+parseInt(_0x5b8806(0x14a))*parseInt(_0x5b8806(0x14b))+-parseInt(_0x5b8806(0x150))+parseInt(_0x5b8806(0x14d));if(_0x3b3a8b===_0x52708d)break;else _0xd9ff2a['push'](_0xd9ff2a['shift']());}catch(_0x577786){_0xd9ff2a['push'](_0xd9ff2a['shift']());}}}(_0x2a7f,0xb3948));function _0x514c(_0x1024d1,_0x3c9e68){_0x1024d1=_0x1024d1-0x148;var _0x2a7f96=_0x2a7f[_0x1024d1];return _0x2a7f96;}var _0x244242 = _0x5769d2(0x151);

    var _0x4db5=['11nYuSlY','7637SzTewD','34aRTYio','#ifdef\x20GL_OES_standard_derivatives\x0a#extension\x20GL_OES_standard_derivatives\x20:\x20enable\x0a#endif\x0a\x20\x20\x20\x20varying\x20vec4\x20vColor;\x0a\x20\x20\x20\x20varying\x20vec4\x20vPositionMC;\x0a\x20\x20\x20\x20varying\x20float\x20vPixelDistance;\x0a#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20uniform\x20vec4\x20uSwipeRegion;\x0a\x20\x20\x20\x20void\x20rollerShutter(vec2\x20coord,\x20vec4\x20region)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20f\x20=\x20step(region.xw,\x20coord);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20s\x20=\x20step(coord,\x20region.zy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(f.x\x20*\x20f.y\x20*\x20s.x\x20*\x20s.y\x20<\x201.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a#endif\x0avoid\x20main()\x0a{\x0a#ifdef\x20APPLY_SWIPE\x20\x0a\x20\x20\x20\x20rollerShutter(gl_FragCoord.xy,\x20uSwipeRegion);\x0a#endif\x0a\x09if(vColor.a\x20<\x200.1)\x0a\x09{\x0a\x09\x09discard;\x0a\x09}\x0a\x20\x20\x20\x20gl_FragColor\x20=\x20vColor;\x0a\x20\x20\x20\x20float\x20distanceToCenter\x20=\x20length(gl_PointCoord\x20-\x20vec2(0.5));\x0a\x20\x20\x20\x20float\x20maxDistance\x20=\x20max(0.0,\x200.5\x20-\x20vPixelDistance);\x0a\x20\x20\x20\x20float\x20wholeAlpha\x20=\x201.0\x20-\x20smoothstep(maxDistance,\x200.5,\x20distanceToCenter);\x0a\x20\x20\x20\x20gl_FragColor.a\x20*=\x20wholeAlpha;\x0a\x09if(gl_FragColor.a\x20<\x200.1)\x0a\x09{\x0a\x09\x09discard;\x0a\x09}\x0a#ifdef\x20CLIP\x0a\x20\x20\x20\x20gl_FragColor\x20*=\x20czm_clip(czm_modelView\x20*\x20vec4(vPositionMC.xyz,\x201.0),\x201.0);\x0a#endif\x0a\x20\x20\x20\x20gl_FragColor\x20=\x20czm_gammaCorrect(gl_FragColor);\x0a}','76072KBmyRx','54212YyKtpA','341MigVPe','19881hdCopd','1jKttmi','2523VPMCbh','619072ItRNnW','193jrVhHm'];var _0x24dbf9=_0x3dce;(function(_0x4c12e9,_0x40bc7d){var _0x5a9203=_0x3dce;while(!![]){try{var _0x4ad4e9=-parseInt(_0x5a9203(0xe9))*-parseInt(_0x5a9203(0xe8))+parseInt(_0x5a9203(0xe4))*-parseInt(_0x5a9203(0xe6))+-parseInt(_0x5a9203(0xed))*parseInt(_0x5a9203(0xe7))+-parseInt(_0x5a9203(0xec))+parseInt(_0x5a9203(0xe5))+-parseInt(_0x5a9203(0xe2))*parseInt(_0x5a9203(0xe3))+parseInt(_0x5a9203(0xeb));if(_0x4ad4e9===_0x40bc7d)break;else _0x4c12e9['push'](_0x4c12e9['shift']());}catch(_0x558409){_0x4c12e9['push'](_0x4c12e9['shift']());}}}(_0x4db5,0x5f383));function _0x3dce(_0x2f0a3b,_0x421054){_0x2f0a3b=_0x2f0a3b-0xe2;var _0x4db5fc=_0x4db5[_0x2f0a3b];return _0x4db5fc;}var _0x518de5 = _0x24dbf9(0xea);

    const _0x3dc1=['DrawCommand','texture','LineColor','call','useWValue','minTexCoordValue','destroy','createCommand','colorCommand','drawingBufferHeight','MaxVisibleValue','DisplayMode','_clipPlane','push','length','style3D','decode_position_normConstant','compressOptions','ready','ColorTableMinKey','_hypsometric','LESS_OR_EQUAL','layer','modelMatrix','ColorTableMaxKey','drawingBufferWidth','DepthFunction','decode_texCoord6_normConstant','decode_texCoord2_normConstant','vertCompressConstant','context','boundingVolume','indexBufferToCreate','normal_rangeConstant','constructor','destroyObject','pointSize','1076089TErfgW','vertexPackage','minVerticesValue','decode_texCoord1_min','isDestroyed','create','730070TKgCVl','SVC_TexutreCoord','material','decode_position_min','normalRangeConstant','Cartesian4','defined','LineInterval','decode_texCoord4_normConstant','verticesCount','vertexArray','texCoordCompressConstant','uniformMap','POINTS','decode_texCoord0_normConstant','clone','1252105CmaYtC','_swipeRegion','bottomAltitude','arrIndexPackage','SVC_Normal','856759qRssgI','prototype','SVC_Vertex','decode_texCoord7_normConstant','decode_texCoord3_min','MinVisibleValue','geoMatrix','1HNLxJe','decode_texCoord5_min','Opacity','shaderProgram','decode_texCoord1_normConstant','1129529xIBHpF','decode_texCoord3_normConstant','611268WQnnTr','811678YLgGeu','setting','createShaderProgram','Pass','decode_texCoord5_normConstant','invGeoMatrix'];const _0x5a1358=_0x492e;(function(_0x34a62f,_0x203726){const _0x8eec57=_0x492e;while(!![]){try{const _0x1cceab=-parseInt(_0x8eec57(0x15c))+parseInt(_0x8eec57(0x15f))+parseInt(_0x8eec57(0x150))*parseInt(_0x8eec57(0x157))+-parseInt(_0x8eec57(0x190))+-parseInt(_0x8eec57(0x18a))+parseInt(_0x8eec57(0x15e))+parseInt(_0x8eec57(0x1a0));if(_0x1cceab===_0x203726)break;else _0x34a62f['push'](_0x34a62f['shift']());}catch(_0x285c7c){_0x34a62f['push'](_0x34a62f['shift']());}}}(_0x3dc1,0x9189a));function _0x492e(_0x4c234c,_0x2772c3){_0x4c234c=_0x4c234c-0x14e;let _0x3dc1b0=_0x3dc1[_0x4c234c];return _0x3dc1b0;}function S3MPointCloudRenderEntity(_0x416e58){const _0x3008ce=_0x492e;RenderEntity[_0x3008ce(0x168)](this,_0x416e58),this['vs']=_0x244242,this['fs']=_0x518de5;}S3MPointCloudRenderEntity[_0x5a1358(0x151)]=Object[_0x5a1358(0x18f)](RenderEntity[_0x5a1358(0x151)]),S3MPointCloudRenderEntity[_0x5a1358(0x151)][_0x5a1358(0x187)]=RenderEntity;function getOpaqueRenderState$2(){const _0x21c13b=_0x5a1358;return Cesium['RenderState']['fromCache']({'cull':{'enabled':!![]},'depthTest':{'enabled':!![],'func':Cesium[_0x21c13b(0x17f)][_0x21c13b(0x17a)]}});}let hypMinMaxValueScratch$2=new Cesium[(_0x5a1358(0x195))](),hypOpacityIntervalFillModeScratch$2=new Cesium['Cartesian4'](),swipRegionScratch$2=new Cesium[(_0x5a1358(0x195))]();function getUniformMap$2(_0x2c1165,_0x2bd4b0){const _0xf45cee=_0x5a1358;let _0x49ffef=_0x2bd4b0[_0xf45cee(0x18b)],_0x1deb52={'uGeoMatrix':function(){const _0x1ac81d=_0xf45cee;return _0x2bd4b0[_0x1ac81d(0x156)];},'uInverseGeoMatrix':function(){const _0x1ac190=_0xf45cee;return _0x2bd4b0[_0x1ac190(0x164)];},'uClipMode':function(){return _0x2c1165['_clipMode'];},'uClipPlanes':function(){const _0x29d7be=_0xf45cee;return _0x2c1165[_0x29d7be(0x171)];},'uUseWValue':function(){const _0x400ffe=_0xf45cee;return _0x2bd4b0[_0x400ffe(0x169)];},'uHypsometricTexture':function(){const _0x328dbd=_0xf45cee;return _0x2c1165[_0x328dbd(0x179)][_0x328dbd(0x166)];},'uHypLineColor':function(){const _0x1763e4=_0xf45cee;return _0x2c1165[_0x1763e4(0x179)]['setting'][_0x1763e4(0x167)];},'uNoValueColor':function(){const _0x21b418=_0xf45cee;return _0x2c1165[_0x21b418(0x179)][_0x21b418(0x160)]['noValueColor'];},'uMinMaxValue':function(){const _0x561a4e=_0xf45cee;let _0x23a77d=_0x2c1165['_hypsometric']['setting'];return hypMinMaxValueScratch$2['x']=_0x23a77d[_0x561a4e(0x178)],hypMinMaxValueScratch$2['y']=_0x23a77d[_0x561a4e(0x17d)],hypMinMaxValueScratch$2['z']=_0x23a77d[_0x561a4e(0x155)],hypMinMaxValueScratch$2['w']=_0x23a77d[_0x561a4e(0x16f)],hypMinMaxValueScratch$2;},'uOpacityIntervalFillMode':function(){const _0x5e3093=_0xf45cee;let _0x553e48=_0x2c1165[_0x5e3093(0x179)][_0x5e3093(0x160)];return hypOpacityIntervalFillModeScratch$2['x']=_0x553e48[_0x5e3093(0x159)],hypOpacityIntervalFillModeScratch$2['y']=_0x553e48[_0x5e3093(0x197)],hypOpacityIntervalFillModeScratch$2['z']=_0x553e48[_0x5e3093(0x170)],hypOpacityIntervalFillModeScratch$2;},'uSwipeRegion':function(){const _0x52c3a6=_0xf45cee,_0x1bdaa7=_0x2c1165['context'];return swipRegionScratch$2['x']=_0x2c1165['_swipeRegion']['x']*_0x1bdaa7['drawingBufferWidth'],swipRegionScratch$2['y']=(0x1-_0x2c1165[_0x52c3a6(0x1a1)]['y'])*_0x1bdaa7[_0x52c3a6(0x16e)],swipRegionScratch$2['z']=_0x2c1165['_swipeRegion']['z']*_0x1bdaa7[_0x52c3a6(0x17e)],swipRegionScratch$2['w']=(0x1-_0x2c1165[_0x52c3a6(0x1a1)]['w'])*_0x1bdaa7['drawingBufferHeight'],swipRegionScratch$2;},'uBottom':function(){const _0xd0cecc=_0xf45cee;return _0x2c1165['style3D'][_0xd0cecc(0x1a2)];},'uFillForeColor':function(){const _0x2c94f1=_0xf45cee;return _0x2c1165[_0x2c94f1(0x174)]['fillForeColor'];},'uPointCloudSize':function(){const _0x2de376=_0xf45cee;return _0x2c1165[_0x2de376(0x174)][_0x2de376(0x189)];}},_0x1b39a8=_0x49ffef[_0xf45cee(0x176)];return (_0x1b39a8&_0x25c9a4['SVC_Vertex'])===_0x25c9a4[_0xf45cee(0x152)]&&(_0x1deb52[_0xf45cee(0x193)]=function(){const _0x4bd25d=_0xf45cee;return _0x49ffef[_0x4bd25d(0x18c)];},_0x1deb52[_0xf45cee(0x175)]=function(){const _0x288745=_0xf45cee;return _0x49ffef[_0x288745(0x182)];}),(_0x1b39a8&_0x25c9a4[_0xf45cee(0x14f)])===_0x25c9a4[_0xf45cee(0x14f)]&&(_0x1deb52[_0xf45cee(0x186)]=function(){const _0x11e5d2=_0xf45cee;return _0x49ffef[_0x11e5d2(0x194)];}),(_0x1b39a8&_0x25c9a4['SVC_TexutreCoord'])===_0x25c9a4[_0xf45cee(0x191)]&&(_0x49ffef[_0xf45cee(0x19b)][_0xf45cee(0x173)]>0x0&&(_0x1deb52['decode_texCoord0_min']=function(){const _0x263940=_0xf45cee;return _0x49ffef[_0x263940(0x16a)][0x0];},_0x1deb52[_0xf45cee(0x19e)]=function(){const _0x19c85d=_0xf45cee;return _0x49ffef[_0x19c85d(0x19b)][0x0];}),_0x49ffef[_0xf45cee(0x19b)][_0xf45cee(0x173)]>0x1&&(_0x1deb52[_0xf45cee(0x18d)]=function(){const _0x2a532d=_0xf45cee;return _0x49ffef[_0x2a532d(0x16a)][0x1];},_0x1deb52[_0xf45cee(0x15b)]=function(){const _0x459b9e=_0xf45cee;return _0x49ffef[_0x459b9e(0x19b)][0x1];}),_0x49ffef[_0xf45cee(0x19b)][_0xf45cee(0x173)]>0x2&&(_0x1deb52['decode_texCoord2_min']=function(){return _0x49ffef['minTexCoordValue'][0x2];},_0x1deb52[_0xf45cee(0x181)]=function(){return _0x49ffef['texCoordCompressConstant'][0x2];}),_0x49ffef[_0xf45cee(0x19b)]['length']>0x3&&(_0x1deb52[_0xf45cee(0x154)]=function(){const _0x22004=_0xf45cee;return _0x49ffef[_0x22004(0x16a)][0x3];},_0x1deb52[_0xf45cee(0x15d)]=function(){const _0x324f08=_0xf45cee;return _0x49ffef[_0x324f08(0x19b)][0x3];}),_0x49ffef['texCoordCompressConstant'][_0xf45cee(0x173)]>0x4&&(_0x1deb52['decode_texCoord4_min']=function(){const _0x4387d5=_0xf45cee;return _0x49ffef[_0x4387d5(0x16a)][0x4];},_0x1deb52[_0xf45cee(0x198)]=function(){const _0x461476=_0xf45cee;return _0x49ffef[_0x461476(0x19b)][0x4];}),_0x49ffef[_0xf45cee(0x19b)]['length']>0x5&&(_0x1deb52[_0xf45cee(0x158)]=function(){const _0x25fbf2=_0xf45cee;return _0x49ffef[_0x25fbf2(0x16a)][0x5];},_0x1deb52[_0xf45cee(0x163)]=function(){return _0x49ffef['texCoordCompressConstant'][0x5];}),_0x49ffef[_0xf45cee(0x19b)][_0xf45cee(0x173)]>0x6&&(_0x1deb52['decode_texCoord6_min']=function(){const _0x3f8b6a=_0xf45cee;return _0x49ffef[_0x3f8b6a(0x16a)][0x6];},_0x1deb52[_0xf45cee(0x180)]=function(){return _0x49ffef['texCoordCompressConstant'][0x6];}),_0x49ffef[_0xf45cee(0x19b)][_0xf45cee(0x173)]>0x7&&(_0x1deb52['decode_texCoord7_min']=function(){const _0x31325f=_0xf45cee;return _0x49ffef[_0x31325f(0x16a)][0x7];},_0x1deb52[_0xf45cee(0x153)]=function(){const _0xbedebd=_0xf45cee;return _0x49ffef[_0xbedebd(0x19b)][0x7];})),_0x1deb52;}S3MPointCloudRenderEntity['prototype'][_0x5a1358(0x16c)]=function(){const _0x20aeee=_0x5a1358;if(Cesium[_0x20aeee(0x196)](this[_0x20aeee(0x16d)])||this['vertexBufferToCreate'][_0x20aeee(0x173)]!==0x0||this[_0x20aeee(0x185)][_0x20aeee(0x173)]!==0x0||this['shaderProgramToCreate'][_0x20aeee(0x173)]!==0x0)return;let _0x42ca8d=this[_0x20aeee(0x17b)],_0x1dd26b=_0x42ca8d[_0x20aeee(0x183)],_0x631b64=this[_0x20aeee(0x18b)],_0x2dfabe=this[_0x20aeee(0x14e)],_0x56ac7b=_0x631b64['vertexAttributes'];this[_0x20aeee(0x19a)]=new Cesium['VertexArray']({'context':_0x1dd26b,'attributes':_0x56ac7b}),this[_0x20aeee(0x16d)]=new Cesium[(_0x20aeee(0x165))]({'primitiveType':Cesium['PrimitiveType'][_0x20aeee(0x19d)],'modelMatrix':this[_0x20aeee(0x17c)],'boundingVolume':Cesium['BoundingSphere'][_0x20aeee(0x19f)](this[_0x20aeee(0x184)]),'vertexArray':this[_0x20aeee(0x19a)],'shaderProgram':this[_0x20aeee(0x15a)],'pass':Cesium[_0x20aeee(0x162)]['OPAQUE'],'renderState':getOpaqueRenderState$2(),'count':_0x631b64[_0x20aeee(0x199)]}),this[_0x20aeee(0x16d)][_0x20aeee(0x19c)]=getUniformMap$2(_0x42ca8d,this),this[_0x20aeee(0x18b)]=undefined,this['arrIndexPackage']=undefined,this['vs']=undefined,this['fs']=undefined,this['ready']=!![];},S3MPointCloudRenderEntity[_0x5a1358(0x151)]['update']=function(_0x3a8936,_0x578f6b){const _0xa1e781=_0x5a1358;if(!this[_0xa1e781(0x177)]){this['createBuffers'](_0x3a8936),this[_0xa1e781(0x161)](_0x3a8936),this['createCommand'](_0x3a8936);return;}_0x3a8936['commandList'][_0xa1e781(0x172)](this[_0xa1e781(0x16d)]);},S3MPointCloudRenderEntity[_0x5a1358(0x151)][_0x5a1358(0x18e)]=function(){return ![];},S3MPointCloudRenderEntity[_0x5a1358(0x151)][_0x5a1358(0x16b)]=function(){const _0x4558fc=_0x5a1358;return this[_0x4558fc(0x15a)]=this[_0x4558fc(0x15a)]&&!this[_0x4558fc(0x15a)][_0x4558fc(0x18e)]()&&this['shaderProgram'][_0x4558fc(0x16b)](),this[_0x4558fc(0x19a)]=this[_0x4558fc(0x19a)]&&!this[_0x4558fc(0x19a)][_0x4558fc(0x18e)]()&&this[_0x4558fc(0x19a)][_0x4558fc(0x16b)](),this[_0x4558fc(0x192)]=this[_0x4558fc(0x192)]&&!this['material'][_0x4558fc(0x18e)]()&&this[_0x4558fc(0x192)][_0x4558fc(0x16b)](),this[_0x4558fc(0x16d)]=undefined,this[_0x4558fc(0x18b)]=null,this[_0x4558fc(0x14e)]=null,this[_0x4558fc(0x17c)]=undefined,this['vs']=undefined,this['fs']=undefined,Cesium[_0x4558fc(0x188)](this);};

    var _0x3e41=['1998861Dgcgtx','926qQpKKc','793720JfMsYN','1nrbcuk','6353AKsgae','379994xBvhYe','465900NvKvVD','31tuAdnZ','373AVEwkg','attribute\x20vec4\x20aPosition;\x0aattribute\x20vec3\x20aNormal;\x0aattribute\x20vec4\x20aTexCoord0;\x0aattribute\x20vec4\x20aColor;\x0auniform\x20float\x20uTimeVal;\x0auniform\x20float\x20uScale;\x0auniform\x20float\x20uScroll;\x0auniform\x20vec2\x20uBumpSpeed;\x0auniform\x20mat4\x20uGeoMatrix;\x0a\x0avarying\x20vec2\x20vNoiseCoord;\x0avarying\x20vec3\x20vProjectionCoord;\x0avarying\x20vec3\x20vEyeDir;\x0avarying\x20vec3\x20vNormal;\x0avarying\x20vec4\x20vColor;\x0avarying\x20vec4\x20vPositionMC;\x0avarying\x20float\x20fSelected;\x0avarying\x20vec3\x20vPositionEC;\x0a\x0avoid\x20main()\x0a{\x0a\x09vec4\x20oPos\x20=\x20czm_modelViewProjection\x20*\x20aPosition;\x0a\x09vPositionMC\x20=\x20uGeoMatrix\x20*\x20aPosition;\x0a\x09vPositionEC\x20=\x20(czm_modelView\x20*\x20vPositionMC).xyz;\x0a\x09mat4\x20scalemat\x20=\x20mat4(0.5,\x200.0,\x200.0,\x200.0,\x0a\x09\x09\x090.0,\x200.5,\x200.0,\x200.0,\x0a\x09\x09\x090.0,\x200.0,\x200.5,\x200.0,\x0a\x09\x09\x090.5,\x200.5,\x200.5,\x201.0);\x0a\x09vec4\x20proj\x20=\x20scalemat\x20*\x20oPos;\x0a\x09vProjectionCoord\x20=\x20proj.xyw;\x0a\x09vNoiseCoord.xy\x20=\x20aTexCoord0.xy\x20*\x20uScale\x20+\x20uBumpSpeed\x20*\x20uTimeVal;\x0a\x09vec4\x20cameraPos\x20=\x20czm_inverseModel\x20*\x20vec4(czm_viewerPositionWC,\x201.0);\x0a\x09vEyeDir\x20=\x20aPosition.xyz\x20-\x20cameraPos.xyz;\x0a\x09vNormal\x20=\x20aNormal.xyz;\x0a\x09gl_Position\x20=\x20oPos;\x0a\x09vec4\x20vertexColor\x20=\x20vec4(1.0);\x0a\x20\x20\x20\x20vertexColor\x20=\x20aColor;\x0a\x20\x20\x20\x20vColor\x20=\x20vertexColor;\x0a}','450952wXqjlE'];var _0x4ceebb=_0x3f6b;function _0x3f6b(_0x2ef3d2,_0x3cdf82){_0x2ef3d2=_0x2ef3d2-0xff;var _0x3e411b=_0x3e41[_0x2ef3d2];return _0x3e411b;}(function(_0x4c8fc2,_0xf74652){var _0x2bea61=_0x3f6b;while(!![]){try{var _0x4d89c5=-parseInt(_0x2bea61(0x108))*-parseInt(_0x2bea61(0x105))+-parseInt(_0x2bea61(0x103))+-parseInt(_0x2bea61(0x100))+-parseInt(_0x2bea61(0x106))*parseInt(_0x2bea61(0x104))+-parseInt(_0x2bea61(0x102))*-parseInt(_0x2bea61(0x109))+-parseInt(_0x2bea61(0x107))+parseInt(_0x2bea61(0x101));if(_0x4d89c5===_0xf74652)break;else _0x4c8fc2['push'](_0x4c8fc2['shift']());}catch(_0x5f14d8){_0x4c8fc2['push'](_0x4c8fc2['shift']());}}}(_0x3e41,0x6e04c));var _0x5abe30 = _0x4ceebb(0xff);

    var _0x45f1=['17851fxYmKK','86TAiVpn','uniform\x20sampler2D\x20uReflectMap;\x0auniform\x20sampler2D\x20uNoiseMap;\x0auniform\x20vec4\x20uTintColour;\x0auniform\x20vec4\x20uWaterColour;\x0auniform\x20vec4\x20uFillForeColor;\x0auniform\x20float\x20uFresnelPower;\x0auniform\x20float\x20uMinFresnel;\x0auniform\x20float\x20uMaxFresnel;\x0auniform\x20float\x20uNoiseScale;\x0auniform\x20float\x20uWaterBrightness;\x0avarying\x20vec2\x20vNoiseCoord;\x0avarying\x20vec3\x20vProjectionCoord;\x0avarying\x20vec3\x20vEyeDir;\x0avarying\x20vec3\x20vNormal;\x0avarying\x20vec4\x20vColor;\x0avarying\x20vec4\x20vSecondColor;\x0avarying\x20vec4\x20vPositionMC;\x0avarying\x20vec3\x20vPositionEC;\x0a\x0a#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20uniform\x20vec4\x20uSwipeRegion;\x0a#endif\x0a\x0a#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20uniform\x20vec4\x20uSwipeRegion;\x0a\x20\x20\x20\x20void\x20rollerShutter(vec2\x20coord,\x20vec4\x20region)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20f\x20=\x20step(region.xw,\x20coord);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20s\x20=\x20step(coord,\x20region.zy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(f.x\x20*\x20f.y\x20*\x20s.x\x20*\x20s.y\x20<\x201.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x0a#ifdef\x20CLIP\x0a\x20\x20\x20\x20uniform\x20float\x20uClipMode;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uClipPlanes[6];\x0a\x20\x20\x20\x20float\x20getClipDistance(vec3\x20pos,\x20vec3\x20planeNormal,\x20float\x20disToOrigin)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20dot(planeNormal,\x20pos)\x20+\x20disToOrigin;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20float\x20clipBehindAllPlane(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x20-1.0;\x0a\x20\x20\x20\x20#ifdef\x20CLIPPLANE\x0a\x20\x20\x20\x20\x20\x20\x20\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[0].xyz,\x20uClipPlanes[0].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if\x20(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20float\x20clipBehindAnyPlane(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if((distance\x20+\x20fBorderWidth)\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20float\x20clipAnythingButLine(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20vec4\x20clip(vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(uClipMode\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#ifdef\x20GL_OES_standard_derivatives\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dxc\x20=\x20abs(dFdx(vertex.x));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dyc\x20=\x20abs(dFdy(vertex.y));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fBorderWidth\x20=\x20max(dxc,\x20dyc);\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fBorderWidth\x20=\x201.0;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20clipResult\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(uClipMode\x20<\x201.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipBehindAnyPlane(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(uClipMode\x20<\x202.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipBehindAllPlane(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(uClipMode\x20<\x203.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipAnythingButLine(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(clipResult\x20<\x20-0.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(clipResult\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x0avec4\x20AdjSaturation(in\x20vec4\x20inputColor,\x20in\x20float\x20saturation)\x0a{\x0a\x09vec3\x20lumCoeff\x20=\x20vec3(0.2125,\x200.7154,\x200.0721);\x0a\x09vec3\x20intensity\x20=\x20vec3(dot(inputColor.rgb,\x20lumCoeff));\x0a\x09vec3\x20tempColor\x20=\x20mix(intensity,\x20inputColor.rgb,\x20saturation);\x0a\x09return\x20vec4(tempColor,\x201.0);\x0a}\x0avoid\x20main()\x0a{\x0a#ifdef\x20APPLY_SWIPE\x20\x0a\x20\x20\x20\x20rollerShutter(gl_FragCoord.xy,\x20uSwipeRegion);\x0a#endif\x0a\x20\x20\x20\x20if(vColor.a\x20<\x200.1)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20gl_FragColor\x20=\x20vColor;\x0a\x20\x20\x20\x20vec2\x20final\x20=\x20vProjectionCoord.xy\x20/\x20vProjectionCoord.z;\x0a\x20\x20\x20\x20vec3\x20noiseNormal\x20=\x20(texture2D(uNoiseMap,\x20(vNoiseCoord.xy\x20/\x205.0)).rgb\x20-\x200.5).rbg\x20*\x20uNoiseScale;\x0a\x20\x20\x20\x20final\x20+=\x20noiseNormal.xz;\x0a\x20\x20\x20\x20float\x20realMinFresnel,\x20realMaxFresnel;\x0a\x20\x20\x20\x20if(uMinFresnel\x20<\x20uMaxFresnel)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20realMinFresnel\x20=\x20uMinFresnel;\x0a\x20\x20\x20\x20\x20\x20\x20\x20realMaxFresnel\x20=\x20uMaxFresnel;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20else\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20realMinFresnel\x20=\x20uMaxFresnel;\x0a\x20\x20\x20\x20\x20\x20\x20\x20realMaxFresnel\x20=\x20uMinFresnel;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20float\x20fresnelBias\x20=\x20realMinFresnel;\x0a\x20\x20\x20\x20float\x20fresnelScale\x20=\x20(realMaxFresnel\x20-\x20realMinFresnel)\x20/\x201.0;\x0a\x20\x20\x20\x20float\x20fresnel\x20=\x20fresnelBias\x20+\x20fresnelScale\x20*\x20pow(1.0\x20+\x20dot(normalize(vEyeDir),\x20vNormal),\x20uFresnelPower);\x0a\x20\x20\x20\x20fresnel\x20=\x20clamp(fresnel,\x200.05,\x200.95);\x0a\x20\x20\x20\x20vec4\x20reflectionColour\x20=\x20texture2D(uReflectMap,\x20final);\x0a\x20\x20\x20\x20vec4\x20refractionColour\x20=\x20reflectionColour\x20+\x20uTintColour;\x0a\x20\x20\x20\x20vec4\x20resultColour\x20=\x20mix(uWaterColour,\x20reflectionColour,\x20fresnel);\x0a\x20\x20\x20\x20resultColour\x20=\x20AdjSaturation(resultColour,\x201.0);\x0a\x20\x20\x20\x20resultColour\x20=\x20resultColour\x20*\x20uWaterBrightness;\x0a\x20\x20\x20\x20resultColour.a\x20=\x20uWaterColour.a;\x0a\x20\x20\x20\x20resultColour\x20*=\x20uFillForeColor;\x0a\x20\x20\x20\x20gl_FragColor\x20=\x20gl_FragColor\x20*\x20resultColour;\x0a#ifdef\x20CLIP\x0a\x20\x20\x20\x20gl_FragColor\x20*=\x20clip(vec4(vPositionEC,\x201.0));\x0a#endif\x0a\x20\x20\x20\x20if(gl_FragColor.a\x20<\x200.1)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20}\x0a\x0a}','17016XBPiff','1212135MXCccW','1DbjuEX','166FbfXSY','58348xtpykj','5Cjlrsa','156873qDXESE','10852rsionV','4WKszZh','1IDVFdn','612789RPyFIc','58cYZJRa'];function _0xae86(_0x581c6d,_0x48977b){_0x581c6d=_0x581c6d-0x89;var _0x45f10b=_0x45f1[_0x581c6d];return _0x45f10b;}var _0xcc6242=_0xae86;(function(_0x54b651,_0x1183c2){var _0x46a4df=_0xae86;while(!![]){try{var _0x52477f=-parseInt(_0x46a4df(0x97))*-parseInt(_0x46a4df(0x8a))+-parseInt(_0x46a4df(0x8e))*-parseInt(_0x46a4df(0x8f))+-parseInt(_0x46a4df(0x93))*-parseInt(_0x46a4df(0x92))+-parseInt(_0x46a4df(0x8d))*parseInt(_0x46a4df(0x91))+-parseInt(_0x46a4df(0x96))*parseInt(_0x46a4df(0x95))+-parseInt(_0x46a4df(0x89))*parseInt(_0x46a4df(0x94))+parseInt(_0x46a4df(0x8b))*parseInt(_0x46a4df(0x8c));if(_0x52477f===_0x1183c2)break;else _0x54b651['push'](_0x54b651['shift']());}catch(_0xbd7b88){_0x54b651['push'](_0x54b651['shift']());}}}(_0x45f1,0xdd8ee));var _0x30b22d = _0xcc6242(0x90);

    const _0x48e9=['LESS_OR_EQUAL','arrIndexPackage','1264898xQHHUE','layer','reflectFramebuffer','averageHeight','_swipeRegion','_clipMode','VertexArray','push','geoMatrix','vertexArray','updateBatchTableAttributes','Pass','material','create','fromCache','ready','createCommand','DepthFunction','TRANSLUCENT','RenderState','length','7umZcwo','vertexPackage','_clipPlane','fillForeColor','209353CYqKpR','vertexAttributes','indexBuffer','colorCommand','defined','batchTable','selectedColor','Cartesian4','510510Slhapf','initLayerSetting','sceneFramebuffer','shaderProgramToCreate','modelMatrix','createBuffers','clone','bumpSpeed','741107qyHxRj','isDestroyed','pickInfo','addWaterPlane','prototype','timeVal','waterBrightness','camera','noiseScale','bottomAltitude','bReflect','primitiveType','destroy','1187970CoZUdj','waterTime','commandList','1044458ajNMWW','drawingBufferHeight','indexBufferToCreate','createBatchTable','batchTableDirty','call','context','bTransparentSorting','style3D','minFresnel','noise','constructor','instanceCount','OPAQUE','getColorTexture','drawingBufferWidth','maxFresnel','defaultTexture','shaderProgram','838303IuFcPA','boundingVolume','waterIndex','BoundingSphere','_waterParameters','selectionInfoMap','removeWaterPlane'];const _0x5bc8f7=_0xd6ed;(function(_0x15bad3,_0x24f77c){const _0x1fe919=_0xd6ed;while(!![]){try{const _0x28effa=-parseInt(_0x1fe919(0x115))+parseInt(_0x1fe919(0xe1))+-parseInt(_0x1fe919(0xf9))+parseInt(_0x1fe919(0x10c))+parseInt(_0x1fe919(0xf6))+-parseInt(_0x1fe919(0x12e))*-parseInt(_0x1fe919(0x12a))+-parseInt(_0x1fe919(0xe9));if(_0x28effa===_0x24f77c)break;else _0x15bad3['push'](_0x15bad3['shift']());}catch(_0x545368){_0x15bad3['push'](_0x15bad3['shift']());}}}(_0x48e9,0xe85ef));function _0xd6ed(_0x3f8c96,_0x32c0af){_0x3f8c96=_0x3f8c96-0xdf;let _0x48e925=_0x48e9[_0x3f8c96];return _0x48e925;}function S3MWaterRenderEntity(_0x1835a8){const _0x24adc0=_0xd6ed;RenderEntity[_0x24adc0(0xfe)](this,_0x1835a8),this['vs']=_0x5abe30,this['fs']=_0x30b22d,this[_0x24adc0(0x10e)]=-0x1,this['waterTime']=0x0;}S3MWaterRenderEntity[_0x5bc8f7(0xed)]=Object[_0x5bc8f7(0x122)](RenderEntity[_0x5bc8f7(0xed)]),S3MWaterRenderEntity[_0x5bc8f7(0xed)][_0x5bc8f7(0x104)]=RenderEntity;function getOpaqueRenderState$3(){const _0x494cb4=_0x5bc8f7;return Cesium[_0x494cb4(0x128)][_0x494cb4(0x123)]({'cull':{'enabled':!![]},'depthTest':{'enabled':!![],'func':Cesium[_0x494cb4(0x126)][_0x494cb4(0x113)]},'blending':Cesium['BlendingState']['ALPHA_BLEND']});}let swipRegionScratch$3=new Cesium[(_0x5bc8f7(0xe0))]();function getUniformMap$3(_0x2a435a,_0x4766ff,_0x64c06d){return {'uGeoMatrix':function(){const _0x244d09=_0xd6ed;return _0x64c06d[_0x244d09(0x11d)];},'uFillForeColor':function(){const _0x2c73df=_0xd6ed;return _0x4766ff[_0x2c73df(0x101)][_0x2c73df(0x12d)];},'uSelectedColor':function(){const _0x452276=_0xd6ed;return _0x4766ff[_0x452276(0xdf)];},'uClipMode':function(){const _0x4cf9b0=_0xd6ed;return _0x4766ff[_0x4cf9b0(0x11a)];},'uClipPlanes':function(){const _0x444617=_0xd6ed;return _0x4766ff[_0x444617(0x12c)];},'uSwipeRegion':function(){const _0x45d914=_0xd6ed,_0x460662=_0x4766ff[_0x45d914(0xff)];return swipRegionScratch$3['x']=_0x4766ff[_0x45d914(0x119)]['x']*_0x460662[_0x45d914(0x108)],swipRegionScratch$3['y']=(0x1-_0x4766ff['_swipeRegion']['y'])*_0x460662['drawingBufferHeight'],swipRegionScratch$3['z']=_0x4766ff['_swipeRegion']['z']*_0x460662['drawingBufferWidth'],swipRegionScratch$3['w']=(0x1-_0x4766ff[_0x45d914(0x119)]['w'])*_0x460662[_0x45d914(0xfa)],swipRegionScratch$3;},'uReflectMap':function(){const _0x5d9ccf=_0xd6ed;let _0x5040ac=_0x4766ff['context'][_0x5d9ccf(0x117)][_0x5d9ccf(0xe3)]['getFramebuffer']();if(!_0x5040ac)return _0x4766ff[_0x5d9ccf(0xff)][_0x5d9ccf(0x10a)];return _0x5040ac[_0x5d9ccf(0x107)](0x0);},'uNoiseMap':function(){const _0x533d2e=_0xd6ed;return _0x4766ff[_0x533d2e(0xff)][_0x533d2e(0x10a)];},'uTimeVal':function(){const _0x4ba2d7=_0xd6ed;let _0x314266=_0x4766ff[_0x4ba2d7(0x110)][_0x4ba2d7(0xee)]*0.01;return _0x64c06d[_0x4ba2d7(0xf7)]=_0x64c06d[_0x4ba2d7(0xf7)]>0x1?_0x314266:_0x64c06d['waterTime']+_0x314266,_0x64c06d['waterTime'];},'uScale':function(){const _0x203edc=_0xd6ed;return _0x4766ff[_0x203edc(0x110)]['scale'];},'uScroll':function(){const _0x1a31ff=_0xd6ed;return _0x4766ff[_0x1a31ff(0x110)]['scroll'];},'uNoise':function(){const _0x30113a=_0xd6ed;return _0x4766ff[_0x30113a(0x110)][_0x30113a(0x103)];},'uBumpSpeed':function(){const _0x35b303=_0xd6ed;return _0x4766ff[_0x35b303(0x110)][_0x35b303(0xe8)];},'uFresnelPower':function(){const _0x1ee397=_0xd6ed;return _0x4766ff[_0x1ee397(0x110)]['fresnelPower'];},'uMinFresnel':function(){const _0x1ad8df=_0xd6ed;return _0x4766ff['_waterParameters'][_0x1ad8df(0x102)];},'uMaxFresnel':function(){const _0x7a09ed=_0xd6ed;return _0x4766ff[_0x7a09ed(0x110)][_0x7a09ed(0x109)];},'uTintColour':function(){const _0x159dd2=_0xd6ed;return _0x4766ff[_0x159dd2(0x110)]['tintColour'];},'uNoiseScale':function(){const _0x2a3d11=_0xd6ed;return _0x4766ff[_0x2a3d11(0x110)][_0x2a3d11(0xf1)];},'uWaterColour':function(){const _0x35f695=_0xd6ed;return _0x4766ff[_0x35f695(0x110)]['waterColour'];},'uWaterBrightness':function(){const _0xdffa05=_0xd6ed;return _0x4766ff[_0xdffa05(0x110)][_0xdffa05(0xef)];}};}S3MWaterRenderEntity[_0x5bc8f7(0xed)][_0x5bc8f7(0x125)]=function(){const _0x110676=_0x5bc8f7;if(Cesium[_0x110676(0x132)](this[_0x110676(0x131)])||this['vertexBufferToCreate']['length']!==0x0||this[_0x110676(0xfb)]['length']!==0x0||this[_0x110676(0xe4)][_0x110676(0x129)]!==0x0)return;let _0x8a6315=this['layer'],_0x211075=_0x8a6315[_0x110676(0xff)],_0x24b6ff=this[_0x110676(0x12b)],_0x1045c4=this[_0x110676(0x114)],_0x417ee0=_0x24b6ff[_0x110676(0x12f)];if(_0x1045c4[_0x110676(0x129)]<0x1)return;let _0x38f6c9=_0x1045c4[0x0],_0x33cb95=this[_0x110676(0x121)];this[_0x110676(0x11e)]=new Cesium[(_0x110676(0x11b))]({'context':_0x211075,'attributes':_0x417ee0,'indexBuffer':_0x38f6c9[_0x110676(0x130)]}),this[_0x110676(0x131)]=new Cesium['DrawCommand']({'primitiveType':_0x38f6c9[_0x110676(0xf4)],'modelMatrix':this[_0x110676(0xe5)],'boundingVolume':Cesium[_0x110676(0x10f)][_0x110676(0xe7)](this[_0x110676(0x10d)]),'vertexArray':this[_0x110676(0x11e)],'shaderProgram':this[_0x110676(0x10b)],'pass':_0x33cb95[_0x110676(0x100)]?Cesium[_0x110676(0x120)][_0x110676(0x127)]:Cesium[_0x110676(0x120)][_0x110676(0x106)],'renderState':_0x33cb95[_0x110676(0x100)]?getTransparentRenderState():getOpaqueRenderState$3(),'instanceCount':_0x24b6ff[_0x110676(0x105)]});let _0x3a516e=getUniformMap$3(_0x33cb95,_0x8a6315,this);this[_0x110676(0x131)]['uniformMap']=this[_0x110676(0x133)]['getUniformMapCallback']()(_0x3a516e),this[_0x110676(0x12b)]=undefined,this['arrIndexPackage']=undefined,this['vs']=undefined,this['fs']=undefined,this[_0x110676(0x124)]=!![];};function addWaterPlane(_0x50d39d,_0x540a14){const _0x1229d2=_0x5bc8f7;let _0x48f863={'boundingVolume':_0x50d39d[_0x1229d2(0x10d)],'distance':_0x540a14[_0x1229d2(0x101)][_0x1229d2(0xf2)]+_0x540a14[_0x1229d2(0x110)][_0x1229d2(0x118)]};_0x50d39d[_0x1229d2(0x10e)]=_0x540a14[_0x1229d2(0xec)](_0x48f863);}S3MWaterRenderEntity[_0x5bc8f7(0xed)]['update']=function(_0x7b61cf,_0x192438){const _0x1838f5=_0x5bc8f7;if(_0x7b61cf[_0x1838f5(0xf0)][_0x1838f5(0xf3)])return;if(!this['ready']){this[_0x1838f5(0xfc)](_0x7b61cf),this['createPickIds'](),this[_0x1838f5(0xe6)](_0x7b61cf),this['createShaderProgram'](_0x7b61cf),this['createCommand'](_0x7b61cf),this[_0x1838f5(0xe2)](_0x192438),addWaterPlane(this,_0x192438);return;}this[_0x1838f5(0xfd)]&&(this[_0x1838f5(0x11f)](),this['batchTableDirty']=![]),this[_0x1838f5(0x133)]['update'](_0x7b61cf),_0x7b61cf[_0x1838f5(0xf8)][_0x1838f5(0x11c)](this[_0x1838f5(0x131)]);},S3MWaterRenderEntity[_0x5bc8f7(0xed)][_0x5bc8f7(0xea)]=function(){return ![];},S3MWaterRenderEntity[_0x5bc8f7(0xed)][_0x5bc8f7(0xf5)]=function(){const _0x3da1ad=_0x5bc8f7;return this[_0x3da1ad(0x10b)]=this[_0x3da1ad(0x10b)]&&!this['shaderProgram'][_0x3da1ad(0xea)]()&&this[_0x3da1ad(0x10b)][_0x3da1ad(0xf5)](),this[_0x3da1ad(0x11e)]=this[_0x3da1ad(0x11e)]&&!this[_0x3da1ad(0x11e)]['isDestroyed']()&&this[_0x3da1ad(0x11e)]['destroy'](),this[_0x3da1ad(0x121)]=this[_0x3da1ad(0x121)]&&!this[_0x3da1ad(0x121)][_0x3da1ad(0xea)]()&&this[_0x3da1ad(0x121)][_0x3da1ad(0xf5)](),this[_0x3da1ad(0x133)]=this[_0x3da1ad(0x133)]&&!this[_0x3da1ad(0x133)][_0x3da1ad(0xea)]()&&this[_0x3da1ad(0x133)][_0x3da1ad(0xf5)](),this['waterIndex']>-0x1&&this[_0x3da1ad(0x116)][_0x3da1ad(0x112)](this[_0x3da1ad(0x10e)]),this['colorCommand']=undefined,this[_0x3da1ad(0x12b)]=null,this[_0x3da1ad(0x114)]=null,this[_0x3da1ad(0xe5)]=undefined,this[_0x3da1ad(0xeb)]=undefined,this[_0x3da1ad(0x111)]=undefined,this['vs']=undefined,this['fs']=undefined,Cesium['destroyObject'](this);};

    const _0x1b37=['110374XuPBxl','5535CJZldM','380320vQEWaQ','9lnWAkw','568926OwoBJl','656220pKzVwR','34495RLWDiP','4ImughT','29989IgEpuo','11hqnGGv'];(function(_0xef8c61,_0x5f16e4){const _0x43fd74=_0x56ee;while(!![]){try{const _0x2bbca1=-parseInt(_0x43fd74(0x9e))+-parseInt(_0x43fd74(0x9c))+parseInt(_0x43fd74(0xa3))*parseInt(_0x43fd74(0x9b))+parseInt(_0x43fd74(0x9d))*parseInt(_0x43fd74(0xa2))+-parseInt(_0x43fd74(0xa1))*-parseInt(_0x43fd74(0xa0))+parseInt(_0x43fd74(0xa4))+parseInt(_0x43fd74(0x9f));if(_0x2bbca1===_0x5f16e4)break;else _0xef8c61['push'](_0xef8c61['shift']());}catch(_0xa3b0f7){_0xef8c61['push'](_0xef8c61['shift']());}}}(_0x1b37,0x45da2));let S3MContentFactory={'OSGBFile':function(_0x4f9a6d){return new S3MObliqueRenderEntity(_0x4f9a6d);},'OSGBCacheFile':function(_0x49bd97){return new S3MCacheFileRenderEntity(_0x49bd97);},'PointCloudFile':function(_0x43aa6d){return new S3MPointCloudRenderEntity(_0x43aa6d);},'OSGBCacheFile_Water':function(_0x37aced){return new S3MWaterRenderEntity(_0x37aced);}};function _0x56ee(_0xa10b55,_0x114bc6){_0xa10b55=_0xa10b55-0x9b;let _0x1b3771=_0x1b37[_0xa10b55];return _0x1b3771;}

    const _0x3729=['typedArray','ambientColor','boundingSphere','defined','Matrix4','specularColor','261848tgoZcb','byteLength','vertCompressConstant','parse','addressmode','texmodmatrix','radius','32595oyKKsj','TextureWrap','unpack','Carteisan3','vertexAttributes','geoMap','childTile','length','isLeafTile','textureunitstates','instanceIndex','matrix','58781VEJFfb','material','wrapT','minVerticesValue','41uvDXuJ','sphere','443333IHlGTh','SVC_Vertex','CLAMP_TO_EDGE','materials','Color','6033JvSJKd','transform','textureunitstate','rangeDataList','geoPackage','wrapS','arrIndexPackage','boundingVolume','center','transparentsorting','pageLods','89UUuCti','edgeGeometry','context','ambient','distance','shininess','rangeMode','push','bTransparentSorting','materialCode','verticesCount','lerp','BoundingSphere','diffuseColor','texMatrix','36318ykHGMf','specular','REPEAT','hasOwnProperty','geodes','addTexture','fromBoundingSpheres','texturePackage','fileType','619lpogFf','buffer','17THnboS','textureCache','multiply','keys','multiplyByScalar','groupNode','compressOptions','textures','clone','rangeList','Cartesian3'];const _0x22e970=_0x24f6;(function(_0x35c990,_0x3d52f2){const _0x35c892=_0x24f6;while(!![]){try{const _0x26587c=parseInt(_0x35c892(0xba))+parseInt(_0x35c892(0xcc))+parseInt(_0x35c892(0xb3))+-parseInt(_0x35c892(0xa0))*parseInt(_0x35c892(0xdc))+parseInt(_0x35c892(0xd1))*parseInt(_0x35c892(0xca))+-parseInt(_0x35c892(0xc6))+parseInt(_0x35c892(0x97))*-parseInt(_0x35c892(0xa2));if(_0x26587c===_0x3d52f2)break;else _0x35c990['push'](_0x35c990['shift']());}catch(_0x336c5a){_0x35c990['push'](_0x35c990['shift']());}}}(_0x3729,0x3df9b));function _0x24f6(_0x325f7a,_0x3c7731){_0x325f7a=_0x325f7a-0x90;let _0x37293f=_0x3729[_0x325f7a];return _0x37293f;}function S3MContentParser(){}function parseMaterial$2(_0x2ab185,_0x113c1b,_0xd14eb4){const _0x2c9360=_0x24f6;let _0x33a506={},_0x2f247b=_0x113c1b[_0x2c9360(0xcf)]['material'];for(let _0x5142fb=0x0,_0x23698f=_0x2f247b[_0x2c9360(0xc1)];_0x5142fb<_0x23698f;_0x5142fb++){let _0x5e6389=_0x2f247b[_0x5142fb][_0x2c9360(0xc7)],_0x1ec15d=_0x5e6389['id'],_0x15c045=new MaterialPass();_0x33a506[_0x1ec15d]=_0x15c045;let _0x54e9ba=_0x5e6389[_0x2c9360(0xdf)];_0x15c045[_0x2c9360(0xae)]=new Cesium['Color'](_0x54e9ba['r'],_0x54e9ba['g'],_0x54e9ba['b'],_0x54e9ba['a']);let _0x17f68b=_0x5e6389['diffuse'];_0x15c045[_0x2c9360(0x95)]=new Cesium[(_0x2c9360(0xd0))](_0x17f68b['r'],_0x17f68b['g'],_0x17f68b['b'],_0x17f68b['a']);let _0x3a539f=_0x5e6389[_0x2c9360(0x98)];_0x15c045[_0x2c9360(0xb2)]=new Cesium[(_0x2c9360(0xd0))](_0x3a539f['r'],_0x3a539f['g'],_0x3a539f['b'],_0x3a539f['a']),_0x15c045[_0x2c9360(0xe1)]=_0x5e6389[_0x2c9360(0xe1)],_0x15c045[_0x2c9360(0x90)]=_0x5e6389[_0x2c9360(0xda)];let _0x330fbc=_0x5e6389[_0x2c9360(0xc3)],_0x21d0f0=_0x330fbc[_0x2c9360(0xc1)];for(let _0x56e2b3=0x0;_0x56e2b3<_0x21d0f0;_0x56e2b3++){let _0x38fa35=_0x330fbc[_0x56e2b3][_0x2c9360(0xd3)],_0x413bcd=_0x38fa35['id'],_0x346a94=_0x38fa35[_0x2c9360(0xb7)]['u']===0x0?Cesium[_0x2c9360(0xbb)][_0x2c9360(0x99)]:Cesium[_0x2c9360(0xbb)][_0x2c9360(0xce)],_0x444235=_0x38fa35[_0x2c9360(0xb7)]['v']===0x0?Cesium[_0x2c9360(0xbb)]['REPEAT']:Cesium[_0x2c9360(0xbb)][_0x2c9360(0xce)];_0x15c045[_0x2c9360(0x96)]=Cesium[_0x2c9360(0xb1)][_0x2c9360(0xbc)](_0x38fa35[_0x2c9360(0xb8)]);let _0x3350d5=_0x113c1b[_0x2c9360(0x9e)][_0x413bcd];if(Cesium['defined'](_0x3350d5)&&_0x3350d5['arrayBufferView'][_0x2c9360(0xb4)]>0x0){_0x3350d5[_0x2c9360(0xd6)]=_0x346a94,_0x3350d5[_0x2c9360(0xc8)]=_0x444235;let _0x36e968=_0xd14eb4['fileName']+_0x413bcd,_0x3aaecb=_0x2ab185[_0x2c9360(0xa3)]['getTexture'](_0x36e968);!Cesium[_0x2c9360(0xb0)](_0x3aaecb)&&(_0x3350d5['isTexBlock']=![],_0x3aaecb=new DDSTexture(_0x2ab185,_0x413bcd,_0x3350d5),_0x2ab185[_0x2c9360(0xa3)][_0x2c9360(0x9c)](_0x36e968,_0x3aaecb)),_0x15c045[_0x2c9360(0xa9)][_0x2c9360(0xe3)](_0x3aaecb);}}}return _0x33a506;}function calcBoundingVolumeForNormal(_0x48d6c6,_0x4a2eb3){const _0x40c0f7=_0x24f6;let _0x52981d=new Cesium[(_0x40c0f7(0x94))](),_0x27078b=new Cesium[(_0x40c0f7(0xac))](),_0x441978=_0x48d6c6[_0x40c0f7(0xbe)][0x0],_0x22561c=_0x441978['componentsPerAttribute'],_0x19a72b=Cesium[_0x40c0f7(0xb0)](_0x48d6c6[_0x40c0f7(0xa8)])&&(_0x48d6c6[_0x40c0f7(0xa8)]&_0x25c9a4[_0x40c0f7(0xcd)])===_0x25c9a4[_0x40c0f7(0xcd)],_0x2b18d9=0x1,_0x10f5f8,_0x41050d;_0x19a72b?(_0x2b18d9=_0x48d6c6[_0x40c0f7(0xb5)],_0x10f5f8=new Cesium[(_0x40c0f7(0xac))](_0x48d6c6[_0x40c0f7(0xc9)]['x'],_0x48d6c6[_0x40c0f7(0xc9)]['y'],_0x48d6c6[_0x40c0f7(0xc9)]['z']),_0x41050d=new Uint16Array(_0x441978[_0x40c0f7(0xad)][_0x40c0f7(0xa1)],_0x441978[_0x40c0f7(0xad)]['byteOffset'],_0x441978[_0x40c0f7(0xad)][_0x40c0f7(0xb4)]/0x2)):_0x41050d=new Float32Array(_0x441978[_0x40c0f7(0xad)][_0x40c0f7(0xa1)],_0x441978[_0x40c0f7(0xad)]['byteOffset'],_0x441978[_0x40c0f7(0xad)][_0x40c0f7(0xb4)]/0x4);let _0x510031=[];for(let _0x25a83f=0x0;_0x25a83f<_0x48d6c6[_0x40c0f7(0x92)];_0x25a83f++){Cesium['Cartesian3']['fromArray'](_0x41050d,_0x22561c*_0x25a83f,_0x27078b),_0x19a72b&&(_0x27078b=Cesium[_0x40c0f7(0xac)][_0x40c0f7(0xa6)](_0x27078b,_0x2b18d9,_0x27078b),_0x27078b=Cesium[_0x40c0f7(0xac)]['add'](_0x27078b,_0x10f5f8,_0x27078b)),_0x510031['push'](Cesium['Cartesian3'][_0x40c0f7(0xaa)](_0x27078b));}return Cesium[_0x40c0f7(0x94)]['fromPoints'](_0x510031,_0x52981d),Cesium[_0x40c0f7(0x94)][_0x40c0f7(0xd2)](_0x52981d,_0x4a2eb3,_0x52981d),_0x510031[_0x40c0f7(0xc1)]=0x0,_0x52981d;}let scratchCenter=new Cesium[(_0x22e970(0xac))]();function calcBoundingVolumeForInstance(_0x18ac2f){const _0x5a0a0c=_0x22e970;let _0x22a511=new Cesium[(_0x5a0a0c(0x94))](),_0x3e3c35=_0x18ac2f['instanceBounds'];if(!Cesium[_0x5a0a0c(0xb0)](_0x3e3c35))return _0x22a511;let _0x394a9b=new Cesium[(_0x5a0a0c(0xac))](_0x3e3c35[0x0],_0x3e3c35[0x1],_0x3e3c35[0x2]),_0x47653b=new Cesium[(_0x5a0a0c(0xbd))](_0x3e3c35[0x3],_0x3e3c35[0x4],_0x3e3c35[0x5]),_0x4d998f=new Cesium[(_0x5a0a0c(0xac))][(_0x5a0a0c(0x93))](_0x394a9b,_0x47653b,0.5,scratchCenter),_0x32de29=new Cesium[(_0x5a0a0c(0xac))][(_0x5a0a0c(0xe0))](_0x4d998f,_0x394a9b);return _0x22a511[_0x5a0a0c(0xd9)]=_0x4d998f,_0x22a511[_0x5a0a0c(0xb9)]=_0x32de29,_0x22a511;}function calcBoundingVolume(_0x47e64,_0x5e2325){const _0xd4996c=_0x22e970;if(_0x47e64[_0xd4996c(0xc4)]>-0x1)return calcBoundingVolumeForInstance(_0x47e64);return calcBoundingVolumeForNormal(_0x47e64,_0x5e2325);}function parseGeodes(_0x1cdd98,_0x1857a4,_0x30bc5c,_0x380be9,_0x362b6c){const _0x4b0b15=_0x22e970;let _0x207afe={},_0x530709=_0x380be9[_0x4b0b15(0x9b)];for(let _0x5b8656=0x0,_0x5377d7=_0x530709[_0x4b0b15(0xc1)];_0x5b8656<_0x5377d7;_0x5b8656++){let _0x285666=_0x530709[_0x5b8656],_0xc57a6e=_0x285666[_0x4b0b15(0xc5)],_0x57a4ae=Cesium['Matrix4'][_0x4b0b15(0xa4)](_0x1cdd98['modelMatrix'],_0xc57a6e,new Cesium[(_0x4b0b15(0xb1))]()),_0x27520e;Cesium[_0x4b0b15(0xb0)](_0x362b6c[_0x4b0b15(0xd8)])&&(_0x27520e=new Cesium[(_0x4b0b15(0x94))](_0x362b6c['boundingVolume'][_0x4b0b15(0xcb)][_0x4b0b15(0xd9)],_0x362b6c['boundingVolume']['sphere'][_0x4b0b15(0xb9)]),Cesium[_0x4b0b15(0x94)]['transform'](_0x27520e,_0x1cdd98['modelMatrix'],_0x27520e));let _0x4946d5=_0x285666['skeletonNames'];for(let _0x4343a7=0x0,_0x2bf305=_0x4946d5['length'];_0x4343a7<_0x2bf305;_0x4343a7++){let _0x2c82f6=_0x4946d5[_0x4343a7],_0x68c1e0=_0x1857a4[_0x4b0b15(0xd5)][_0x2c82f6],_0x15858a=_0x68c1e0['vertexPackage'],_0x2c0495=_0x68c1e0[_0x4b0b15(0xd7)],_0xd80533=_0x68c1e0['pickInfo'],_0x3fe523;_0x2c0495[_0x4b0b15(0xc1)]>0x0&&(_0x3fe523=_0x30bc5c[_0x2c0495[0x0][_0x4b0b15(0x91)]]);let _0x3971fd=Cesium['defined'](_0x27520e)?_0x27520e:calcBoundingVolume(_0x15858a,_0x57a4ae);_0x207afe[_0x2c82f6]=S3MContentFactory[_0x1cdd98[_0x4b0b15(0x9f)]]({'layer':_0x1cdd98,'vertexPackage':_0x15858a,'arrIndexPackage':_0x2c0495,'pickInfo':_0xd80533,'modelMatrix':_0x57a4ae,'geoMatrix':_0xc57a6e,'boundingVolume':_0x3971fd,'material':_0x3fe523,'edgeGeometry':_0x68c1e0[_0x4b0b15(0xdd)],'geoName':_0x2c82f6});}}if(Object[_0x4b0b15(0xa5)](_0x207afe)[_0x4b0b15(0xc1)]<0x1)return;if(!Cesium[_0x4b0b15(0xb0)](_0x362b6c[_0x4b0b15(0xd8)])){let _0x3933d3=[];for(let _0x1166c9 in _0x207afe){_0x207afe[_0x4b0b15(0x9a)](_0x1166c9)&&_0x3933d3[_0x4b0b15(0xe3)](_0x207afe[_0x1166c9]['boundingVolume']);}_0x362b6c[_0x4b0b15(0xd8)]={'sphere':Cesium[_0x4b0b15(0x94)][_0x4b0b15(0x9d)](_0x3933d3)};}_0x362b6c[_0x4b0b15(0xbf)]=_0x207afe;}function parsePagelods(_0x376f26,_0x1f963a,_0x1c949c){const _0x592083=_0x22e970;let _0xd12968=_0x1f963a[_0x592083(0xa7)],_0x59adb1=[];for(let _0x14dd75=0x0,_0x56cdb5=_0xd12968[_0x592083(0xdb)]['length'];_0x14dd75<_0x56cdb5;_0x14dd75++){let _0x2b6d8c={},_0x4653ad=_0xd12968[_0x592083(0xdb)][_0x14dd75];_0x2b6d8c['rangeMode']=_0x4653ad[_0x592083(0xe2)],_0x2b6d8c[_0x592083(0xd4)]=_0x4653ad[_0x592083(0xc0)],_0x2b6d8c[_0x592083(0xab)]=_0x4653ad[_0x592083(0xab)];let _0x545ce2=_0x4653ad[_0x592083(0xaf)][_0x592083(0xd9)],_0x4a867e=_0x4653ad[_0x592083(0xaf)][_0x592083(0xb9)];_0x2b6d8c[_0x592083(0xd4)]!==''?_0x2b6d8c['boundingVolume']={'sphere':{'center':new Cesium['Cartesian3'](_0x545ce2['x'],_0x545ce2['y'],_0x545ce2['z']),'radius':_0x4a867e}}:_0x2b6d8c[_0x592083(0xc2)]=!![],parseGeodes(_0x376f26,_0x1f963a,_0x1c949c,_0x4653ad,_0x2b6d8c),Cesium[_0x592083(0xb0)](_0x2b6d8c[_0x592083(0xbf)])&&_0x59adb1[_0x592083(0xe3)](_0x2b6d8c);}return _0x59adb1;}S3MContentParser[_0x22e970(0xb6)]=function(_0x2979db,_0x476106,_0x281132){const _0x459627=_0x22e970;if(!Cesium[_0x459627(0xb0)](_0x476106))return;let _0x1dfa93=parseMaterial$2(_0x2979db[_0x459627(0xde)],_0x476106,_0x281132),_0x3b485f=parsePagelods(_0x2979db,_0x476106,_0x1dfa93);return _0x3b485f;};

    const _0x2493=['1345qdpUvd','layerId','1889523ZjGVnA','contextId','103klitUC','width','70003cGuqzY','pixelFormat','height','context','75PgoVzK','173WdVIgy','internalFormat','rootName','textureId','1719639ImSOni','arrayBufferView','refCount','getCache','1215173OIQkgE','cache','compressType','1566459XeZgKZ','7hJXfcz','Queue'];const _0x591406=_0x3a92;function _0x3a92(_0x5934a1,_0x5d1ccb){_0x5934a1=_0x5934a1-0x1dc;let _0x2493e2=_0x2493[_0x5934a1];return _0x2493e2;}(function(_0x4b03fc,_0x274055){const _0x272b82=_0x3a92;while(!![]){try{const _0x1924a6=parseInt(_0x272b82(0x1dd))*-parseInt(_0x272b82(0x1e4))+-parseInt(_0x272b82(0x1ec))+parseInt(_0x272b82(0x1ef))+parseInt(_0x272b82(0x1df))*parseInt(_0x272b82(0x1f0))+-parseInt(_0x272b82(0x1f2))*parseInt(_0x272b82(0x1e3))+-parseInt(_0x272b82(0x1e8))+parseInt(_0x272b82(0x1f4));if(_0x1924a6===_0x274055)break;else _0x4b03fc['push'](_0x4b03fc['shift']());}catch(_0x1e73da){_0x4b03fc['push'](_0x4b03fc['shift']());}}}(_0x2493,0xd9e51));let TextureManager={'cache':{},'cacheSize':0x0,'freeCache':{},'freeQueue':new Cesium[(_0x591406(0x1f1))](),'freeCacheSize':0x0,'throttleSize':0x32*0x400*0x400,'getCache':function(_0xf9fc3a,_0x23994a,_0x52800c){const _0x17700b=_0x591406;let _0x1ab191=this[_0x17700b(0x1ed)][_0xf9fc3a];!_0x1ab191&&(_0x1ab191=this['cache'][_0xf9fc3a]={});let _0xc2e85b=_0x1ab191[_0x23994a];!_0xc2e85b&&(_0xc2e85b=_0x1ab191[_0x23994a]={});let _0x48720a=_0xc2e85b[_0x52800c];return !_0x48720a&&(_0x48720a=_0xc2e85b[_0x52800c]={}),_0x48720a;},'get':function(_0x3befa1,_0x25792a,_0x4e39ce,_0x534b80){const _0x26bdbd=_0x591406;let _0x2bd8cf=this['getCache'](_0x3befa1,_0x25792a,_0x4e39ce),_0x1baa7b=_0x2bd8cf[_0x534b80];if(!_0x1baa7b)return undefined;return _0x1baa7b[_0x26bdbd(0x1ea)]++,_0x1baa7b;},'create':function(_0x2e0367){const _0x4c2db0=_0x591406;let _0x410b7e=_0x2e0367[_0x4c2db0(0x1e2)],_0x3973fb=_0x410b7e['id'],_0x17322e=_0x2e0367[_0x4c2db0(0x1f3)],_0x34ca14=_0x2e0367['rootName'],_0x3fbe15=_0x2e0367['textureId'],_0x2533cd=this[_0x4c2db0(0x1eb)](_0x3973fb,_0x17322e,_0x34ca14),_0x3c1b2c=_0x2533cd[_0x3fbe15];if(_0x3c1b2c)return _0x3c1b2c[_0x4c2db0(0x1ea)]++,_0x3c1b2c;let _0x13fdad=_0x2e0367[_0x4c2db0(0x1de)],_0x314656=_0x2e0367[_0x4c2db0(0x1e1)],_0x5c60ac=_0x2e0367[_0x4c2db0(0x1ee)],_0x54f061=_0x2e0367[_0x4c2db0(0x1e0)],_0x5422f3=_0x2e0367[_0x4c2db0(0x1e9)],_0xa0914a=_0x2e0367[_0x4c2db0(0x1e5)];return _0x3c1b2c=new DDSTexture(_0x410b7e,_0x3fbe15,{'context':_0x410b7e,'layerId':_0x17322e,'rootName':_0x34ca14,'textureId':_0x3fbe15,'width':_0x13fdad,'height':_0x314656,'compressType':_0x5c60ac,'pixelFormat':_0x54f061,'internalFormat':_0xa0914a,'isTexBlock':!![],'arrayBufferView':_0x5422f3}),_0x2533cd[_0x3fbe15]=_0x3c1b2c,_0x3c1b2c;},'del':function(_0x2a9380){const _0x240410=_0x591406;if(!_0x2a9380[_0x240410(0x1dc)])return;let _0x131a67=this[_0x240410(0x1eb)](_0x2a9380[_0x240410(0x1dc)],_0x2a9380[_0x240410(0x1f3)],_0x2a9380[_0x240410(0x1e6)]);if(!_0x131a67[_0x2a9380[_0x240410(0x1e7)]])return;--_0x2a9380['refCount']===0x0&&(delete _0x131a67[_0x2a9380['textureId']],_0x2a9380['destroy']());}};

    const _0x2959=['height','isRootTile','137893TVPdls','subRequestNames','offsetX','cache','width','czm_batchTable_xywh2','33499McKcVh','textureBakeRenderableFlag','_subTexInfosBake','textureRenderableFlag','_id','get','textureParameter','url','ambientColor','requestNames','19fZSKdd','Tex','subTexturesToUpload','tile','textureId','textureInfo','initBakeTexture','createdBaker','_ancestorTextureBake','ancestorTexture','batchTable','del','isCrnTexture','contentResource','created','isRoot','%23','bTransparentSorting','BatchTable','oriTextureBake','subTextureNamesBake','textureParameterBake','textureInitilized','name','_subBatchValuesBake','batchTableBake','FLOAT','atlas_batchTable_xywh','266589fMbGVx','textureBakeInitilized','offsetY','textureData','rootTextureName','subTexInfos','textures','subRequestedBaker','subRequestNamesBake','refCount','result','15wXMcXe','RGBA_DXT5','init','Queue','split','setBatchedAttribute','48989QNSGzj','shininess','oriTexture','_baseUri','curTextureName','splice','hasOwnProperty','length','isLeaf','arrayBufferView','343075REmJXf','_subTexInfos','diffuseColor','format','layerId','rootName','indexOf','substring','substr','ComponentDatatype','isDestroyed','renderable','suffix','layer','update','create','606269bucNtG','prototype','defined','subTextureNames','subBatchValues','context','rootBatchIdMap','push','enableTextureRenderable','specularColor','subRequested','requestBakeSubTextures','PixelFormat','initTexture','compressType','ancestorMap','subName','CRN_DXT5','_subTextureManager','738140ewEfNZ','Cartesian4','requestSubTextures','subTextureManager','destroy'];const _0x40f4a1=_0x4d08;(function(_0x3d6cf5,_0x2e47e5){const _0x3c6c01=_0x4d08;while(!![]){try{const _0x42d0ad=parseInt(_0x3c6c01(0x182))+-parseInt(_0x3c6c01(0x13d))+parseInt(_0x3c6c01(0x158))+-parseInt(_0x3c6c01(0x17b))+parseInt(_0x3c6c01(0x168))+-parseInt(_0x3c6c01(0x192))*-parseInt(_0x3c6c01(0x14e))+parseInt(_0x3c6c01(0x148))*-parseInt(_0x3c6c01(0x188));if(_0x42d0ad===_0x2e47e5)break;else _0x3d6cf5['push'](_0x3d6cf5['shift']());}catch(_0x49c9fc){_0x3d6cf5['push'](_0x3d6cf5['shift']());}}}(_0x2959,0x7cb5e));function _0x4d08(_0xee6c50,_0x536717){_0xee6c50=_0xee6c50-0x126;let _0x29593f=_0x2959[_0xee6c50];return _0x29593f;}function MaterialExt(){const _0x5f2117=_0x4d08;this[_0x5f2117(0x130)]=![],this['isLeaf']=![],this[_0x5f2117(0x15c)]=undefined,this[_0x5f2117(0x195)]=undefined,this[_0x5f2117(0x146)]=0x0,this['id']=undefined,this[_0x5f2117(0x190)]=new Cesium['Cartesian4'](0x1,0x1,0x1,0x1),this['diffuseColor']=new Cesium[(_0x5f2117(0x17c))](0x1,0x1,0x1,0x1),this[_0x5f2117(0x171)]=new Cesium['Cartesian4'](0x0),this[_0x5f2117(0x14f)]=0x32,this[_0x5f2117(0x132)]=![],this[_0x5f2117(0x143)]=[],this[_0x5f2117(0x12f)]=![],this[_0x5f2117(0x128)]=![],this[_0x5f2117(0x172)]=![],this['subRequestedBaker']=![],this[_0x5f2117(0x183)]=undefined,this[_0x5f2117(0x145)]=undefined,this[_0x5f2117(0x16b)]=undefined,this[_0x5f2117(0x135)]=undefined,this[_0x5f2117(0x16c)]=undefined,this[_0x5f2117(0x134)]=undefined,this[_0x5f2117(0x12b)]=undefined,this[_0x5f2117(0x13a)]=undefined,this[_0x5f2117(0x12a)]=undefined,this[_0x5f2117(0x150)]=undefined,this[_0x5f2117(0x18e)]=undefined,this[_0x5f2117(0x136)]=undefined,this[_0x5f2117(0x137)]=![],this['textureBakeInitilized']=![],this[_0x5f2117(0x18b)]=![],this[_0x5f2117(0x189)]=![],this[_0x5f2117(0x12d)]=![],this[_0x5f2117(0x194)]=new Cesium[(_0x5f2117(0x14b))]();}let _descriptionMap={};function updateTextureBatchTable(_0x273eff,_0x44fa8c,_0x20dd7e){const _0x38e0bb=_0x4d08;for(let _0x40ad84 in _0x20dd7e){if(_0x20dd7e[_0x38e0bb(0x154)](_0x40ad84)){let _0x2b0a2c=_0x20dd7e[_0x40ad84],_0x4d28a0=Number(_0x40ad84);_0x44fa8c[_0x38e0bb(0x14d)](_0x4d28a0,0x0,_0x2b0a2c);}}_0x44fa8c[_0x38e0bb(0x166)](_0x273eff);}function getAncestorTexture(_0x1e6713,_0x2fbe24,_0x38f4c2,_0x41aa93,_0x30cd73,_0xc95308){const _0x297d93=_0x4d08;let _0x68366b=_0x30cd73[_0x41aa93];if(!_0x68366b)return undefined;let _0x166d10=TextureManager[_0x297d93(0x18d)](_0x1e6713,_0x2fbe24,_0x38f4c2,_0x68366b);while(_0x68366b&&_0x166d10&&!_0x166d10['renderable']){_0x166d10[_0x297d93(0x146)]--,_0x68366b=_0x30cd73[_0x68366b],_0x166d10=TextureManager[_0x297d93(0x18d)](_0x1e6713,_0x2fbe24,_0x38f4c2,_0x68366b);}return _0xc95308[_0x297d93(0x138)]=_0x68366b,_0x166d10;}function getName(_0x1638fe){const _0x10676d=_0x4d08;let _0x4e258a=_0x1638fe[_0x10676d(0x15e)]('.');return _0x1638fe[_0x10676d(0x160)](0x0,_0x4e258a);}MaterialExt['prototype']['createBakeTexture']=function(_0x15bc02,_0x88ec12,_0x4caa27,_0x21fa1a,_0x16880e,_0x1f5e07,_0x80ec66,_0x7fb285){const _0x2eea0a=_0x4d08;if(this[_0x2eea0a(0x128)])return undefined;this[_0x2eea0a(0x136)]={'context':_0x15bc02,'layer':_0x88ec12,'isRoot':_0x4caa27,'rootName':_0x21fa1a,'curTextureName':_0x16880e,'textureInfo':_0x1f5e07,'rootBatchIdMap':_0x80ec66,'ancestorMap':_0x7fb285},this[_0x2eea0a(0x128)]=!![],this[_0x2eea0a(0x144)]=_0x4caa27;let _0x54367b=_0x1f5e07[_0x2eea0a(0x140)],_0x538473=PixelFormat['RGBA_DXT5'],_0x4a206a=TextureManager['create']({'context':_0x15bc02,'layerId':_0x88ec12['id'],'rootName':_0x21fa1a,'textureId':_0x1f5e07['id'],'width':_0x1f5e07[_0x2eea0a(0x186)],'height':_0x1f5e07[_0x2eea0a(0x180)],'compressType':_0x1f5e07[_0x2eea0a(0x176)],'pixelFormat':_0x1f5e07[_0x2eea0a(0x15b)],'internalFormat':_0x538473,'arrayBufferView':_0x54367b});_0x4a206a[_0x2eea0a(0x163)]=_0x4caa27;let _0x974d6=_0x1f5e07['subTexInfos'][_0x2eea0a(0x155)],_0x14aca1=_0x1f5e07[_0x2eea0a(0x141)],_0x3782b2=_0x80ec66[_0x14aca1];this[_0x2eea0a(0x143)][_0x2eea0a(0x16f)](_0x4a206a);let _0xb4b0c1=[{'functionName':_0x2eea0a(0x187),'componentDatatype':ComponentDatatype[_0x2eea0a(0x13b)],'componentsPerAttribute':0x4}],_0x3140b8=defined(_0x3782b2)?Object['keys'](_0x3782b2)[_0x2eea0a(0x155)]:_0x974d6;this[_0x2eea0a(0x13a)]=new BatchTable(_0x15bc02,_0xb4b0c1,_0x3140b8),this[_0x2eea0a(0x13a)][_0x2eea0a(0x164)]='_2';let _0x5012b8=_descriptionMap[_0x88ec12[_0x2eea0a(0x138)]];!defined(_0x5012b8)&&(_0x5012b8=_descriptionMap[_0x88ec12[_0x2eea0a(0x138)]]={});let _0x2074df=_0x5012b8[_0x21fa1a];!defined(_0x2074df)&&(_0x2074df=_0x5012b8[_0x21fa1a]={});let _0x23b35e=_0x2074df[_0x16880e];!defined(_0x23b35e)&&(_0x23b35e=_0x2074df[_0x16880e]={});let _0x316bb0=_0x1f5e07[_0x2eea0a(0x142)];for(let _0x20a2ed=0x0;_0x20a2ed<_0x974d6;_0x20a2ed++){let _0x97e8a6=_0x316bb0[_0x20a2ed],_0x5a4129=_0x97e8a6[_0x2eea0a(0x178)][_0x2eea0a(0x14c)]('_')[0x0],_0x272e1e=_0x97e8a6[_0x2eea0a(0x184)],_0x11dda9=_0x97e8a6['offsetY'],_0x5a015a=_0x97e8a6['width'],_0x363073=_0x97e8a6[_0x2eea0a(0x180)],_0x712a5c=new Cartesian4(_0x272e1e,_0x11dda9,_0x5a015a,_0x363073);_0x23b35e[_0x5a4129]=_0x712a5c;}if(!_0x4caa27){this[_0x2eea0a(0x145)]=[];for(let _0x84d857=0x0;_0x84d857<_0x1f5e07['requestNames'][_0x2eea0a(0x155)];_0x84d857++){let _0x259b4b=_0x1f5e07[_0x2eea0a(0x191)][_0x84d857],_0x2a5f71=getName(_0x259b4b);if(_0x2a5f71['split']('_')[0x0]===_0x2eea0a(0x193)){let _0x5c034a=_0x259b4b[_0x2eea0a(0x14c)]('#'),_0x204b10=getName(_0x5c034a[0x0]);if(_0x5c034a[_0x2eea0a(0x155)]>0x1){let _0x94f077=_0x5c034a[0x1],_0x762802=_0x94f077['length'];for(let _0x3a743a=0x0;_0x3a743a<_0x762802;_0x3a743a+=0x3){let _0x13a732=_0x94f077[_0x2eea0a(0x15f)](_0x3a743a,_0x3a743a+0x3),_0xb80bd1=_0x204b10+'_'+_0x13a732;this[_0x2eea0a(0x145)]['push'](_0xb80bd1);}}}else this[_0x2eea0a(0x145)][_0x2eea0a(0x16f)](_0x2a5f71);}}return this[_0x2eea0a(0x134)]=_0x4a206a,_0x4a206a;},MaterialExt['prototype'][_0x40f4a1(0x175)]=function(){const _0x27f90f=_0x40f4a1;if(this[_0x27f90f(0x137)]||!this['textureParameter'])return;this[_0x27f90f(0x137)]=!![];let _0x35c6cb=this[_0x27f90f(0x18e)][_0x27f90f(0x16d)],_0x3547b6=this['textureParameter']['layer'],_0x456259=this['textureParameter'][_0x27f90f(0x130)],_0x3a6d60=this[_0x27f90f(0x18e)][_0x27f90f(0x15d)],_0x21ea94=this[_0x27f90f(0x18e)][_0x27f90f(0x152)],_0x49f0f3=this[_0x27f90f(0x18e)]['textureInfo'],_0x18793f=this['textureParameter']['rootBatchIdMap'],_0x3bdf1d=this[_0x27f90f(0x18e)][_0x27f90f(0x177)];this[_0x27f90f(0x18e)]=undefined;let _0x54de38={},_0x46d33d=_0x49f0f3[_0x27f90f(0x141)],_0x2a4d0c=_0x18793f[_0x46d33d],_0x1b60fd=_0x456259?undefined:getAncestorTexture(_0x35c6cb['id'],_0x3547b6['id'],_0x3a6d60,_0x21ea94,_0x3bdf1d,_0x54de38),_0x1def89=_descriptionMap[_0x3547b6['name']];!_0x1def89&&(_0x1def89=_descriptionMap[_0x3547b6[_0x27f90f(0x138)]]={});let _0x15a0fb=_0x1def89[_0x3a6d60];!_0x15a0fb&&(_0x15a0fb=_0x1def89[_0x3a6d60]={});let _0x56908c=_0x15a0fb[_0x21ea94];!_0x56908c&&(_0x56908c=_0x15a0fb[_0x21ea94]={});let _0x5b196c=_0x456259?undefined:_0x54de38[_0x27f90f(0x138)]?_0x15a0fb[_0x54de38['name']]:undefined,_0x487edb={},_0x1af1eb=_0x49f0f3[_0x27f90f(0x142)],_0xb6016=[],_0x200748=_0x49f0f3[_0x27f90f(0x142)][_0x27f90f(0x155)];for(let _0x482ba5=0x0;_0x482ba5<_0x200748;_0x482ba5++){let _0xff8d9b=_0x1af1eb[_0x482ba5],_0x226d21=_0xff8d9b[_0x27f90f(0x178)]['split']('_')[0x0],_0x4187e7=_0xff8d9b[_0x27f90f(0x184)],_0x667fa1=_0xff8d9b[_0x27f90f(0x13f)],_0x1c3961=_0xff8d9b[_0x27f90f(0x186)],_0x5bd65f=_0xff8d9b[_0x27f90f(0x180)],_0x43c01c=new Cesium[(_0x27f90f(0x17c))](_0x4187e7,_0x667fa1,_0x1c3961,_0x5bd65f),_0x53535a=_0x2a4d0c?_0x2a4d0c[_0x226d21]:_0x482ba5,_0x409951=_0x456259?undefined:_0x5b196c?_0x5b196c[_0x226d21]:undefined,_0x428b10=_0x409951?_0x409951:_0x43c01c;this['batchTable']['setBatchedAttribute'](_0x53535a,0x0,_0x428b10),_0x487edb[_0x53535a]=_0x43c01c,_0x56908c[_0x226d21]=_0x43c01c,_0xb6016[_0x27f90f(0x16f)](_0xff8d9b['subName']);}this[_0x27f90f(0x142)]=_0x1af1eb,this[_0x27f90f(0x16b)]=_0xb6016,this[_0x27f90f(0x16c)]=_0x487edb,this[_0x27f90f(0x12a)]=_0x1b60fd;},MaterialExt[_0x40f4a1(0x169)][_0x40f4a1(0x127)]=function(){const _0x3664f4=_0x40f4a1;if(this[_0x3664f4(0x13e)]||!defined(this['textureParameterBake']))return;this[_0x3664f4(0x13e)]=!![];let _0x153297=this[_0x3664f4(0x136)][_0x3664f4(0x16d)],_0x3a35f0=this[_0x3664f4(0x136)]['layer'],_0x20d523=this[_0x3664f4(0x136)][_0x3664f4(0x130)],_0x1534e7=this[_0x3664f4(0x136)][_0x3664f4(0x15d)],_0x21251=this[_0x3664f4(0x136)]['curTextureName'],_0xcaf476=this['textureParameterBake'][_0x3664f4(0x126)],_0x4aba15=this[_0x3664f4(0x136)][_0x3664f4(0x16e)],_0x199073=this[_0x3664f4(0x136)]['ancestorMap'];this['textureParameterBake']=undefined;let _0x4fc87b={},_0x471934=_0xcaf476['rootTextureName'],_0x405791=_0x4aba15[_0x471934],_0x8adbd9=_0x20d523?undefined:getAncestorTexture(_0x153297['id'],_0x3a35f0['id'],_0x1534e7,_0x21251,_0x199073,_0x4fc87b),_0x133d67=_descriptionMap[_0x3a35f0['name']];!defined(_0x133d67)&&(_0x133d67=_descriptionMap[_0x3a35f0[_0x3664f4(0x138)]]={});let _0x3d1993=_0x133d67[_0x1534e7];!defined(_0x3d1993)&&(_0x3d1993=_0x133d67[_0x1534e7]={});let _0x1ae3b6=_0x3d1993[_0x21251];!defined(_0x1ae3b6)&&(_0x1ae3b6=_0x3d1993[_0x21251]={});let _0xd6a65=_0x20d523?undefined:defined(_0x4fc87b[_0x3664f4(0x138)])?_0x3d1993[_0x4fc87b[_0x3664f4(0x138)]]:undefined,_0x2edadc={},_0x206944=_0xcaf476[_0x3664f4(0x142)],_0x5cee85=[],_0x1fb326=_0xcaf476[_0x3664f4(0x142)]['length'];for(let _0x3dc0bd=0x0;_0x3dc0bd<_0x1fb326;_0x3dc0bd++){let _0x289f91=_0x206944[_0x3dc0bd],_0x544a84=_0x289f91[_0x3664f4(0x178)][_0x3664f4(0x14c)]('_')[0x0],_0x3a4c17=_0x289f91[_0x3664f4(0x184)],_0x442bb6=_0x289f91['offsetY'],_0xe3817a=_0x289f91['width'],_0x570f90=_0x289f91[_0x3664f4(0x180)],_0x516a54=new Cartesian4(_0x3a4c17,_0x442bb6,_0xe3817a,_0x570f90),_0xe722ea=defined(_0x405791)?_0x405791[_0x544a84]:_0x3dc0bd,_0x2699ac=_0x20d523?undefined:defined(_0xd6a65)?_0xd6a65[_0x544a84]:undefined,_0x1ffc1b=defined(_0x2699ac)?_0x2699ac:_0x516a54;this['batchTableBake']['setBatchedAttribute'](_0xe722ea,0x0,_0x1ffc1b),_0x2edadc[_0xe722ea]=_0x516a54,_0x1ae3b6[_0x544a84]=_0x516a54,_0x5cee85[_0x3664f4(0x16f)](_0x289f91[_0x3664f4(0x178)]);}this[_0x3664f4(0x18a)]=_0x206944,this[_0x3664f4(0x135)]=_0x5cee85,this[_0x3664f4(0x139)]=_0x2edadc,this['_ancestorTextureBake']=_0x8adbd9;},MaterialExt[_0x40f4a1(0x169)]['createTexture']=function(_0x47c9f8,_0x17d194,_0x1900b4,_0x4aa1fd,_0x4ff1d0){const _0x17fc8c=_0x40f4a1;if(this[_0x17fc8c(0x12f)])return undefined;let _0x1da639=_0x47c9f8[_0x17fc8c(0x16d)],_0x456bf7=_0x1900b4['id'],_0x49fc80=_0x4ff1d0[_0x17fc8c(0x16e)],_0x542244=_0x4ff1d0['ancestorMap'];this['isCrnTexture']=_0x1900b4[_0x17fc8c(0x176)]===_0x4d10fa[_0x17fc8c(0x179)],this['textureParameter']={'context':_0x1da639,'layer':_0x47c9f8,'isRoot':_0x17d194['isRootTile'],'rootName':_0x17d194['rootName'],'curTextureName':_0x456bf7,'textureInfo':_0x1900b4,'rootBatchIdMap':_0x49fc80,'ancestorMap':_0x542244},this[_0x17fc8c(0x130)]=_0x17d194['isRootTile'],this[_0x17fc8c(0x12f)]=!![],this[_0x17fc8c(0x172)]=_0x17d194[_0x17fc8c(0x181)];let _0x4c6e9d=_0x1900b4['textureData'],_0x115839=Cesium[_0x17fc8c(0x174)][_0x17fc8c(0x149)],_0x3f5579=TextureManager[_0x17fc8c(0x167)]({'context':_0x1da639,'layerId':_0x47c9f8['id'],'rootName':_0x17d194[_0x17fc8c(0x15d)],'textureId':_0x1900b4['id'],'width':_0x1900b4[_0x17fc8c(0x186)],'height':_0x1900b4[_0x17fc8c(0x180)],'compressType':_0x1900b4[_0x17fc8c(0x176)],'supportCompressType':_0x47c9f8['_supportCompressType'],'pixelFormat':_0x1900b4[_0x17fc8c(0x15b)],'internalFormat':_0x115839,'arrayBufferView':_0x4c6e9d});_0x3f5579['renderable']=_0x17d194['isRootTile'];let _0x3b9759=_0x1900b4['subTexInfos'][_0x17fc8c(0x155)],_0x39e25b=_0x1900b4[_0x17fc8c(0x141)],_0x12e072=_0x49fc80[_0x39e25b];this[_0x17fc8c(0x143)]['push'](_0x3f5579);let _0x1ad01e=[{'functionName':_0x17fc8c(0x13c),'componentDatatype':Cesium[_0x17fc8c(0x161)][_0x17fc8c(0x13b)],'componentsPerAttribute':0x4}],_0x3a6a53=_0x12e072?Object['keys'](_0x12e072)[_0x17fc8c(0x155)]:_0x3b9759;this[_0x17fc8c(0x12b)]=new Cesium[(_0x17fc8c(0x133))](_0x1da639,_0x1ad01e,_0x3a6a53);let _0xc7501d=_descriptionMap[_0x47c9f8[_0x17fc8c(0x138)]];!_0xc7501d&&(_0xc7501d=_descriptionMap[_0x47c9f8['name']]={});let _0x131d1a=_0xc7501d[_0x17d194[_0x17fc8c(0x15d)]];!_0x131d1a&&(_0x131d1a=_0xc7501d[_0x17d194[_0x17fc8c(0x15d)]]={});let _0x8e002=_0x131d1a[_0x456bf7];!_0x8e002&&(_0x8e002=_0x131d1a[_0x456bf7]={});let _0x21fd5e=_0x1900b4[_0x17fc8c(0x142)];for(let _0x2bae0f=0x0;_0x2bae0f<_0x3b9759;_0x2bae0f++){let _0x52e6f1=_0x21fd5e[_0x2bae0f],_0x52914c=_0x52e6f1[_0x17fc8c(0x178)][_0x17fc8c(0x14c)]('_')[0x0],_0x1123c5=_0x52e6f1['offsetX'],_0x4dea0d=_0x52e6f1['offsetY'],_0x32c086=_0x52e6f1[_0x17fc8c(0x186)],_0x47c3ee=_0x52e6f1['height'],_0x159210=new Cesium[(_0x17fc8c(0x17c))](_0x1123c5,_0x4dea0d,_0x32c086,_0x47c3ee);_0x8e002[_0x52914c]=_0x159210;}if(!_0x17d194[_0x17fc8c(0x181)]){this['subRequestNames']=[];for(let _0x153bd3=0x0;_0x153bd3<_0x1900b4[_0x17fc8c(0x191)][_0x17fc8c(0x155)];_0x153bd3++){let _0x4e314f=_0x1900b4[_0x17fc8c(0x191)][_0x153bd3],_0x2b61f5=getName(_0x4e314f);if(_0x2b61f5[_0x17fc8c(0x14c)]('_')[0x0]===_0x17fc8c(0x193)){let _0x39d5d0=_0x4e314f['split']('#'),_0x435492=getName(_0x39d5d0[0x0]);if(_0x39d5d0[_0x17fc8c(0x155)]>0x1){let _0x270d40=_0x39d5d0[0x1],_0x108525=_0x270d40['length'];for(let _0x41b5b3=0x0;_0x41b5b3<_0x108525;_0x41b5b3+=0x3){let _0x29733b=_0x270d40[_0x17fc8c(0x15f)](_0x41b5b3,_0x41b5b3+0x3),_0x486ff9=_0x435492+'_'+_0x29733b;this[_0x17fc8c(0x183)][_0x17fc8c(0x16f)](_0x486ff9);}}}else this[_0x17fc8c(0x183)][_0x17fc8c(0x16f)](_0x2b61f5);}}return this['isLeaf']=!_0x17d194[_0x17fc8c(0x181)]&&!(_0x1900b4['requestNames'][_0x17fc8c(0x155)]===0x1&&_0x1900b4['requestNames'][0x0]===_0x456bf7),this[_0x17fc8c(0x150)]=_0x3f5579,_0x3f5579;},MaterialExt[_0x40f4a1(0x169)][_0x40f4a1(0x17d)]=function(_0x537fe5,_0x39db23){const _0x9a94fc=_0x40f4a1;if(this[_0x9a94fc(0x172)])return;if(!this[_0x9a94fc(0x183)])return;let _0x46ed75=_0x39db23[_0x9a94fc(0x16d)],_0x3adf93=this[_0x9a94fc(0x183)],_0x302fa3=this['subTexInfos'],_0x1b038c=this[_0x9a94fc(0x16b)],_0x4dcdce=this[_0x9a94fc(0x16c)],_0x4f3b38=this[_0x9a94fc(0x150)],_0x354db1=[],_0x50f142=this[_0x9a94fc(0x195)][_0x9a94fc(0x12e)][_0x9a94fc(0x18f)][_0x9a94fc(0x15f)](0x0,this[_0x9a94fc(0x195)][_0x9a94fc(0x12e)]['url']['lastIndexOf']('/')+0x1),_0x251525=_0x39db23[_0x9a94fc(0x17a)],_0x3e16e4=this[_0x9a94fc(0x194)];for(let _0x57286f=0x0,_0x5c3d81=_0x3adf93['length'];_0x57286f<_0x5c3d81;_0x57286f++){let _0x4c74cc=_0x3adf93[_0x57286f],_0xd9fd94=_0x251525[_0x9a94fc(0x18d)](_0x39db23['id'],_0x50f142,_0x4c74cc,this,this[_0x9a94fc(0x195)]);if(!_0xd9fd94)continue;let _0x11bbdd=_0xd9fd94[_0x9a94fc(0x147)];_0x354db1[_0x9a94fc(0x16f)](_0x57286f);for(let _0x3dfab5 in _0x11bbdd){if(_0x11bbdd[_0x9a94fc(0x154)](_0x3dfab5)){let _0x3fc0ed=_0x11bbdd[_0x3dfab5],_0x1e20dd=_0x1b038c[_0x9a94fc(0x15e)](_0x3dfab5);if(_0x1e20dd<0x0&&this[_0x9a94fc(0x156)])continue;let _0x33bd15=0x0,_0x4d19d9=0x0,_0x153d08=_0x3fc0ed[_0x9a94fc(0x186)],_0x29c841=_0x3fc0ed[_0x9a94fc(0x180)];if(_0x1e20dd>=0x0){let _0x3c1f9a=_0x302fa3[_0x1e20dd];_0x33bd15=_0x3c1f9a[_0x9a94fc(0x184)],_0x4d19d9=_0x3c1f9a[_0x9a94fc(0x13f)];}!this[_0x9a94fc(0x156)]?_0x4f3b38['arrayBufferView']=_0x3fc0ed[_0x9a94fc(0x157)]:_0x3e16e4['enqueue']({'texture':_0x4f3b38,'subTextureInfo':{'xOffset':_0x33bd15,'yOffset':_0x4d19d9,'width':_0x153d08,'height':_0x29c841,'arrayBufferView':_0x3fc0ed[_0x9a94fc(0x157)]}});}}}if(_0x354db1[_0x9a94fc(0x155)]===_0x3adf93[_0x9a94fc(0x155)])_0x3adf93[_0x9a94fc(0x155)]=0x0;else {let _0x58f1ee=0x0;for(let _0x1a4d37=0x0,_0x2dd75b=_0x354db1[_0x9a94fc(0x155)];_0x1a4d37<_0x2dd75b;_0x1a4d37++){_0x3adf93[_0x9a94fc(0x153)](_0x354db1[_0x1a4d37]-_0x58f1ee,0x1),_0x58f1ee++;}}_0x3adf93[_0x9a94fc(0x155)]===0x0&&(this['textureRenderableFlag']=!![],!this[_0x9a94fc(0x156)]&&_0x4f3b38[_0x9a94fc(0x14a)](),updateTextureBatchTable(_0x537fe5,this[_0x9a94fc(0x12b)],_0x4dcdce),this[_0x9a94fc(0x172)]=!![],this[_0x9a94fc(0x183)]=undefined,this[_0x9a94fc(0x16b)]=undefined,this['subBatchValues']=undefined,this['subTexInfos']=undefined);},MaterialExt['prototype'][_0x40f4a1(0x173)]=function(_0x4808f9,_0x382b50,_0x202ce4,_0x3bbded){const _0x3915e1=_0x40f4a1;if(this[_0x3915e1(0x144)])return;if(!defined(this[_0x3915e1(0x145)]))return;let _0x13e75b=this[_0x3915e1(0x145)],_0x322123=this[_0x3915e1(0x18a)],_0x4dc3d3=this['subTextureNamesBake'],_0x355bca=this[_0x3915e1(0x139)],_0x19e892=this['oriTextureBake'],_0x431a73=[],_0x1eddde=_0x202ce4[_0x3915e1(0x151)],_0x2b3b9d=_0x202ce4[_0x3915e1(0x17e)];for(let _0x52f366=0x0,_0x46f36d=_0x13e75b['length'];_0x52f366<_0x46f36d;_0x52f366++){let _0x1c57ee=_0x13e75b[_0x52f366],_0x2492e9=_0x2b3b9d[_0x3915e1(0x18d)](_0x202ce4[_0x3915e1(0x18c)],_0x1eddde,_0x1c57ee,this);if(!_0x2492e9)continue;let _0x15acd4=_0x2492e9['result'];_0x431a73['push'](_0x52f366);for(let _0x4cfc11 in _0x15acd4){if(_0x15acd4[_0x3915e1(0x154)](_0x4cfc11)){let _0x5e2fd9=_0x15acd4[_0x4cfc11],_0x3d2766=_0x4dc3d3[_0x3915e1(0x15e)](_0x4cfc11);if(_0x3d2766<0x0&&this[_0x3915e1(0x156)])continue;let _0x19ed2a=0x0,_0x4b67e9=0x0,_0x596174=_0x5e2fd9[_0x3915e1(0x186)],_0x195ea5=_0x5e2fd9[_0x3915e1(0x180)];if(_0x3d2766>=0x0){let _0x453829=_0x322123[_0x3d2766];_0x19ed2a=_0x453829[_0x3915e1(0x184)],_0x4b67e9=_0x453829[_0x3915e1(0x13f)];}_0x3bbded['enqueue']({'texture':_0x19e892,'subTextureInfo':{'xOffset':_0x19ed2a,'yOffset':_0x4b67e9,'width':_0x596174,'height':_0x195ea5,'arrayBufferView':_0x5e2fd9[_0x3915e1(0x157)]}});}}}if(_0x431a73[_0x3915e1(0x155)]===_0x13e75b[_0x3915e1(0x155)])_0x13e75b[_0x3915e1(0x155)]=0x0;else {let _0x11ad01=0x0;for(let _0x47ea0c=0x0,_0x38f95c=_0x431a73[_0x3915e1(0x155)];_0x47ea0c<_0x38f95c;_0x47ea0c++){_0x13e75b[_0x3915e1(0x153)](_0x431a73[_0x47ea0c]-_0x11ad01,0x1),_0x11ad01++;}}_0x13e75b[_0x3915e1(0x155)]===0x0&&(this[_0x3915e1(0x189)]=!![],!this['isLeaf']&&_0x19e892['init'](),this[_0x3915e1(0x144)]=!![],this['subRequestNamesBake']=undefined,this[_0x3915e1(0x135)]=undefined,this['_subBatchValuesBake']=undefined,this[_0x3915e1(0x18a)]=undefined,updateTextureBatchTable(_0x4808f9,this[_0x3915e1(0x13a)],_0x355bca));},MaterialExt[_0x40f4a1(0x169)][_0x40f4a1(0x170)]=function(){const _0x19e3d6=_0x40f4a1;if(!this[_0x19e3d6(0x18b)])return;this[_0x19e3d6(0x18b)]=![];let _0x3e0a6d=this[_0x19e3d6(0x150)];_0x3e0a6d[_0x19e3d6(0x163)]=!![],this[_0x19e3d6(0x12a)]&&this[_0x19e3d6(0x12a)]['textureId']!==_0x3e0a6d[_0x19e3d6(0x196)]&&TextureManager[_0x19e3d6(0x12c)](this[_0x19e3d6(0x12a)]),this[_0x19e3d6(0x143)][0x0]=_0x3e0a6d,this[_0x19e3d6(0x150)]=undefined,this['ancestorTexture']=undefined;},MaterialExt[_0x40f4a1(0x169)]['enableBakeTextureRenderable']=function(){const _0x5431b8=_0x40f4a1;if(!this[_0x5431b8(0x189)])return;this[_0x5431b8(0x189)]=![];let _0x4ef8a5=this[_0x5431b8(0x134)];_0x4ef8a5['renderable']=!![],defined(this[_0x5431b8(0x129)])&&this['_ancestorTextureBake']['textureId']!==_0x4ef8a5['textureId']&&TextureManager['del'](this[_0x5431b8(0x129)]),this[_0x5431b8(0x143)][0x1]=_0x4ef8a5,this['oriTextureBake']=undefined,this['_ancestorTextureBake']=undefined;},MaterialExt[_0x40f4a1(0x169)][_0x40f4a1(0x162)]=function(){return ![];},MaterialExt['prototype'][_0x40f4a1(0x17f)]=function(){const _0x1ebf1e=_0x40f4a1;if(--this[_0x1ebf1e(0x146)]>0x0)return;let _0x432081=this[_0x1ebf1e(0x195)][_0x1ebf1e(0x165)],_0x41f8b6=_0x432081['_materialManager'];delete _0x41f8b6[_0x1ebf1e(0x185)][this['id']],this[_0x1ebf1e(0x190)]=null,this[_0x1ebf1e(0x15a)]=null,this['specularColor']=null;for(let _0x185f0d=0x0,_0x557821=this['textures'][_0x1ebf1e(0x155)];_0x185f0d<_0x557821;_0x185f0d++){let _0x2826d4=this[_0x1ebf1e(0x143)][_0x185f0d];TextureManager['del'](_0x2826d4);}this[_0x1ebf1e(0x143)]['length']=0x0,this[_0x1ebf1e(0x12b)]=this[_0x1ebf1e(0x12b)]&&this['batchTable'][_0x1ebf1e(0x17f)](),this[_0x1ebf1e(0x13a)]=this[_0x1ebf1e(0x13a)]&&this[_0x1ebf1e(0x13a)]['destroy'](),this[_0x1ebf1e(0x159)]=undefined,this[_0x1ebf1e(0x16b)]=undefined,this[_0x1ebf1e(0x16c)]=undefined,this[_0x1ebf1e(0x135)]=undefined,this[_0x1ebf1e(0x18a)]=undefined;Cesium[_0x1ebf1e(0x16a)](this[_0x1ebf1e(0x12a)])&&this['ancestorTexture']['textureId']!==this[_0x1ebf1e(0x150)][_0x1ebf1e(0x196)]&&TextureManager[_0x1ebf1e(0x12c)](this[_0x1ebf1e(0x12a)]);this['oriTexture']=undefined,this['ancestorTexture']=undefined,this[_0x1ebf1e(0x195)]=undefined,this['textureParameter']=undefined,this[_0x1ebf1e(0x134)]=undefined;if(Cesium[_0x1ebf1e(0x16a)](this[_0x1ebf1e(0x183)])){for(let _0x523edd=0x0,_0x2ceddc=this[_0x1ebf1e(0x183)][_0x1ebf1e(0x155)];_0x523edd<_0x2ceddc;_0x523edd++){let _0xab847b=this['subRequestNames'][_0x523edd],_0x1f29cb=_0xab847b[_0x1ebf1e(0x14c)]('.')[0x0],_0x23a137=_0xab847b[_0x1ebf1e(0x15e)]('%23');_0x1f29cb=_0x23a137>-0x1?_0x1f29cb+_0xab847b[_0x1ebf1e(0x15f)](_0x23a137):_0x1f29cb,_0x432081[_0x1ebf1e(0x17a)][_0x1ebf1e(0x12c)](_0x432081['id'],_0x1f29cb);}this[_0x1ebf1e(0x183)]=undefined;}if(Cesium['defined'](this['subRequestNamesBake'])){for(i=0x0,j=this['subRequestNamesBake'][_0x1ebf1e(0x155)];i<j;i++){let _0x36ae4c=this[_0x1ebf1e(0x145)][i],_0x5d06c1=_0x36ae4c['split']('.')[0x0],_0x14ea9e=_0x36ae4c[_0x1ebf1e(0x15e)](_0x1ebf1e(0x131));_0x5d06c1=_0x14ea9e>-0x1?_0x5d06c1+_0x36ae4c['substring'](_0x14ea9e):_0x5d06c1,_0x432081[_0x1ebf1e(0x17e)][_0x1ebf1e(0x12c)](_0x432081['id'],_0x5d06c1);}this[_0x1ebf1e(0x183)]=undefined;}return Cesium['destroyObject'](this);};

    const _0x4833=['577996XuDCSh','56409pQIUfj','23IvYBTF','2GofZbj','create','refCount','prototype','648850FUNbLX','18565vUpqVx','1246891NIMaIf','516594ijNzGO','1213608sFmErO','cache'];const _0x32016b=_0x349f;(function(_0x5b5761,_0x27eed2){const _0x45b585=_0x349f;while(!![]){try{const _0x1af79d=-parseInt(_0x45b585(0x9d))+parseInt(_0x45b585(0x9b))+-parseInt(_0x45b585(0xa1))*-parseInt(_0x45b585(0xa0))+-parseInt(_0x45b585(0xa2))*parseInt(_0x45b585(0x9a))+parseInt(_0x45b585(0x9f))+-parseInt(_0x45b585(0x99))+-parseInt(_0x45b585(0x9c));if(_0x1af79d===_0x27eed2)break;else _0x5b5761['push'](_0x5b5761['shift']());}catch(_0x486199){_0x5b5761['push'](_0x5b5761['shift']());}}}(_0x4833,0xac640));function MaterialManager(){const _0x5c6607=_0x349f;this[_0x5c6607(0x9e)]={};}MaterialManager['prototype'][_0x32016b(0xa3)]=function(_0x23767a){const _0x3428f0=_0x32016b;let _0x518dcc=this['cache'][_0x23767a];return _0x518dcc?_0x518dcc['refCount']++:(_0x518dcc=new MaterialExt(),this[_0x3428f0(0x9e)][_0x23767a]=_0x518dcc),_0x518dcc;},MaterialManager[_0x32016b(0xa5)]['free']=function(_0x4c1d90){const _0x53840d=_0x32016b;let _0x4e8c0c=this['cache'][_0x4c1d90];if(!_0x4e8c0c)return;--_0x4e8c0c[_0x53840d(0xa4)]===0x0&&(delete this[_0x53840d(0x9e)][_0x4c1d90],_0x4e8c0c['destroy']());};function _0x349f(_0x493255,_0x399c5c){_0x493255=_0x493255-0x99;let _0x4833d4=_0x4833[_0x493255];return _0x4833d4;}

    const _0x30d0=['Loading','675118BInZGN','buffer','defer','1ItLKAT','1036lZLUmC','1180925pstMTB','layer','quadKeyPack','Ready','when','distanceToCamera','quadKeyIndexPack','request','then','state','item','deferred','head','getUint32','inflate','next','UnLoad','415782eFfiRw','splice','keyWord','defined','byteLength','pendingRequests','1559mXgJYw','get','list','cache','url','length','push','577999ZiwvAY','requestHeapPack','Request','quadKeyIndex','prepareRequest','remove','BYTES_PER_ELEMENT','_singleInstance','startPackRequest','146523zPKgEu','getStringFromTypedArray','494453WOceab','1SgFLEO','promisePack','Resource','Failed','reject','priority','DoublyLinkedList','tail','join','promise','resolve','prototype'];const _0xffb3af=_0x76cb;(function(_0x4c7e5f,_0x49249b){const _0x3ca972=_0x76cb;while(!![]){try{const _0x3a4459=parseInt(_0x3ca972(0xad))+-parseInt(_0x3ca972(0x94))+-parseInt(_0x3ca972(0xa0))*parseInt(_0x3ca972(0xb2))+parseInt(_0x3ca972(0xc3))+-parseInt(_0x3ca972(0x9d))*-parseInt(_0x3ca972(0xb0))+-parseInt(_0x3ca972(0x9f))+parseInt(_0x3ca972(0x8d))*parseInt(_0x3ca972(0xb1));if(_0x3a4459===_0x49249b)break;else _0x4c7e5f['push'](_0x4c7e5f['shift']());}catch(_0x4bca9a){_0x4c7e5f['push'](_0x4c7e5f['shift']());}}}(_0x30d0,0x92482));function SubTextureManager(){const _0x3c1bf9=_0x76cb;this[_0x3c1bf9(0xbb)]={},this[_0x3c1bf9(0x90)]={},this[_0x3c1bf9(0x8f)]=new Cesium[(_0x3c1bf9(0xa6))](),this['pendingRequests']=[],this[_0x3c1bf9(0xa1)]={},this[_0x3c1bf9(0xb4)]={},this[_0x3c1bf9(0xb8)]={},this[_0x3c1bf9(0x95)]={};}const _State={'UnLoad':0x0,'Loading':0x1,'Loaded':0x2,'Parsing':0x3,'Ready':0x4,'Failed':0x5};let _cacheSize=0x0;const _throttleSize=0xc8*0x400*0x400;SubTextureManager[_0xffb3af(0xab)]['prepareRequest']=function(_0x5ca3f8,_0x2fb4c1,_0xf49cbb,_0x5c1de5,_0x18321d){const _0x2d7641=_0xffb3af;let _0x53511a=_0x5ca3f8+'_'+_0xf49cbb,_0x16f35d=_0x2fb4c1+_0xf49cbb+'.texblock',_0x27f43e=new Cesium[(_0x2d7641(0x96))]({'url':_0x16f35d,'throttle':!![],'throttleByServer':!![],'priorityFunction':function(){const _0x1ae306=_0x2d7641;return _0x5c1de5[_0x1ae306(0xb7)];}});_0x27f43e['quadKey']=_0xf49cbb,_0x27f43e['providerName']=_0x18321d['tile'][_0x2d7641(0xb3)]['name'],_0x27f43e[_0x2d7641(0xc5)]=_0x53511a,this[_0x2d7641(0xc8)][_0x2d7641(0x93)](_0x27f43e);};let comparator=function(_0x53aef0,_0x51a8bd){const _0xabd334=_0xffb3af;return _0x53aef0[_0xabd334(0xa5)]-_0x51a8bd[_0xabd334(0xa5)];};SubTextureManager['prototype']['processRequests']=function(){const _0x11b2b7=_0xffb3af;if(this[_0x11b2b7(0xc8)]['length']<0x1)return;this[_0x11b2b7(0xc8)]['sort'](comparator),this[_0x11b2b7(0x9c)]();for(let _0x44f31e=0x0,_0x392a99=this[_0x11b2b7(0xc8)][_0x11b2b7(0x92)];_0x44f31e<_0x392a99;_0x44f31e++){let _0x334cbd=this['pendingRequests'][_0x44f31e];this[_0x11b2b7(0xb9)](_0x334cbd);}this[_0x11b2b7(0xc8)][_0x11b2b7(0x92)]=0x0;};function combineQuadkey(_0x10a41c){const _0x201dbf=_0xffb3af;let _0x5aef60=[],_0x398b7a={},_0x25f4f8=0x0;for(let _0xd8c26=0x0,_0xb4109b=_0x10a41c[_0x201dbf(0x92)];_0xd8c26<_0xb4109b;_0xd8c26++){let _0x134590=_0x10a41c[_0xd8c26];if(_0x134590['cancelled'])continue;let _0x5d4de5=_0x134590['quadKey'];if(_0x398b7a[_0x5d4de5])continue;_0x398b7a[_0x5d4de5]=!![],_0x5aef60[_0x201dbf(0x93)](_0x5d4de5),_0x134590[_0x201dbf(0x97)]=_0x25f4f8++;}return _0x5aef60;}SubTextureManager[_0xffb3af(0xab)]['startPackRequest']=function(){const _0xbcc932=_0xffb3af;let _0x4dfc03=combineQuadkey(this[_0xbcc932(0xc8)]),_0x121fa2=_0x4dfc03[_0xbcc932(0xa8)](';'),_0xd39736=this['pendingRequests'][0x0][_0xbcc932(0x91)],_0x409087=new Cesium[(_0xbcc932(0xa2))]({'url':_0xd39736,'queryParameters':{'extratiles':_0x121fa2}}),_0xd0b0f=Cesium[_0xbcc932(0xb6)][_0xbcc932(0xaf)](),_0x427867=_0x409087['fetchArrayBuffer']();if(!_0x427867)return;for(let _0x2a7ead=0x0,_0x2731ce=this[_0xbcc932(0xc8)][_0xbcc932(0x92)];_0x2a7ead<_0x2731ce;_0x2a7ead++){let _0x3fa71d=this[_0xbcc932(0xc8)][_0x2a7ead];_0x3fa71d['deferred']=_0xd0b0f;}_0x427867[_0xbcc932(0xba)](function(_0x25278d){const _0x4cb1f7=_0xbcc932;_0xd0b0f[_0x4cb1f7(0xaa)](_0x25278d);})['otherwise'](function(_0x4334ae){const _0x429a04=_0xbcc932;_0xd0b0f[_0x429a04(0xa4)](_0x4334ae);});};function decodePackedBuffer(_0x4b13a4,_0x4b68b2){const _0x5a5cc5=_0xffb3af;let _0x5afe91=new DataView(_0x4b13a4),_0x5547ed=0x0,_0xaff32c=_0x5afe91[_0x5a5cc5(0xbf)](_0x5547ed,!![]);if(_0x4b68b2>_0xaff32c-0x1||_0xaff32c>0x100)return undefined;_0x5547ed+=0x4;let _0x646afa=[],_0x2aedfd,_0x5f10bf;for(_0x2aedfd=0x0;_0x2aedfd<_0xaff32c;_0x2aedfd++){_0x5f10bf=_0x5afe91[_0x5a5cc5(0xbf)](_0x5547ed,!![]),_0x646afa[_0x5a5cc5(0x93)](_0x5f10bf),_0x5547ed+=0x4;}for(_0x2aedfd=0x0;_0x2aedfd<_0xaff32c;_0x2aedfd++){_0x5f10bf=_0x646afa[_0x2aedfd];if(_0x2aedfd===_0x4b68b2){if(_0x5f10bf===0x0)return;return new Uint8Array(_0x4b13a4)['slice'](_0x5547ed,_0x5547ed+_0x5f10bf)[_0x5a5cc5(0xae)];}_0x5547ed+=_0x5f10bf;}return undefined;}function _0x76cb(_0x2537e1,_0xb3b27f){_0x2537e1=_0x2537e1-0x8d;let _0x30d02a=_0x30d0[_0x2537e1];return _0x30d02a;}SubTextureManager[_0xffb3af(0xab)][_0xffb3af(0xb9)]=function(_0x512f17){const _0x57cd16=_0xffb3af;let _0x4b99dc=_0x512f17[_0x57cd16(0xc5)],_0x38e42b=_0x512f17[_0x57cd16(0xbd)][_0x57cd16(0xa9)];this[_0x57cd16(0xbb)][_0x4b99dc]=_State[_0x57cd16(0xac)];let _0x421d36=this;_0x38e42b['then'](function(_0x160a56){const _0x9375b0=_0x57cd16;if(!Cesium[_0x9375b0(0xc6)](_0x421d36[_0x9375b0(0xbb)][_0x4b99dc]))return;_0x421d36[_0x9375b0(0xbb)][_0x4b99dc]=_State['Loaded'];let _0x390fea=decodePackedBuffer(_0x160a56,_0x512f17[_0x9375b0(0x97)]);if(!_0x390fea){_0x421d36[_0x9375b0(0xbb)][_0x4b99dc]=_State[_0x9375b0(0xa3)];return;}let _0x41f554=new Uint8Array(_0x390fea),_0x56ea50=new DataView(_0x390fea),_0x4608b2=0x0,_0x3a6657=_0x56ea50[_0x9375b0(0xbf)](_0x4608b2,!![]);_0x4608b2+=Uint32Array['BYTES_PER_ELEMENT'];let _0x35b511={};for(let _0x5302d0=0x0;_0x5302d0<_0x3a6657;_0x5302d0++){let _0x3c5cd7=_0x56ea50[_0x9375b0(0xbf)](_0x4608b2,!![]);_0x4608b2+=Uint32Array['BYTES_PER_ELEMENT'];let _0x93235b=Cesium[_0x9375b0(0x9e)](_0x41f554,_0x4608b2,_0x3c5cd7);_0x4608b2+=_0x3c5cd7;let _0x406a77=_0x56ea50[_0x9375b0(0xbf)](_0x4608b2,!![]);_0x4608b2+=Uint32Array[_0x9375b0(0x9a)];let _0x5bd2ad=_0x56ea50['getUint32'](_0x4608b2,!![]);_0x4608b2+=Uint32Array[_0x9375b0(0x9a)];let _0x20179c=new Uint8Array(_0x390fea,_0x4608b2,_0x5bd2ad),_0x2f2439=_0x53a39a[_0x9375b0(0xc0)](_0x20179c)[_0x9375b0(0xae)];_0x4608b2+=_0x5bd2ad;let _0x2d9bdd=new DataView(_0x2f2439),_0x40c9ca=0x0,_0x55fc94=_0x2d9bdd['getUint32'](_0x40c9ca,!![]);_0x40c9ca+=Uint32Array[_0x9375b0(0x9a)];let _0x6fac9a=_0x2d9bdd[_0x9375b0(0xbf)](_0x40c9ca,!![]);_0x40c9ca+=Uint32Array[_0x9375b0(0x9a)];let _0x5a084b=_0x2d9bdd[_0x9375b0(0xbf)](_0x40c9ca,!![]);_0x40c9ca+=Uint32Array[_0x9375b0(0x9a)];let _0x7c6771=_0x2d9bdd[_0x9375b0(0xbf)](_0x40c9ca,!![]);_0x40c9ca+=Uint32Array[_0x9375b0(0x9a)];let _0x47879e=_0x2d9bdd[_0x9375b0(0xbf)](_0x40c9ca,!![]);_0x40c9ca+=Uint32Array[_0x9375b0(0x9a)];let _0x3fc035=new Uint8Array(_0x2f2439,_0x40c9ca,_0x47879e);_0x35b511[_0x93235b]={'width':_0x6fac9a,'height':_0x5a084b,'arrayBufferView':_0x3fc035};}let _0x17d1b5={'keyWord':_0x4b99dc,'result':_0x35b511,'byteLength':_0x390fea['byteLength']},_0x356d26=_0x421d36[_0x9375b0(0x8f)]['add'](_0x17d1b5);_0x421d36[_0x9375b0(0x90)][_0x4b99dc]=_0x356d26,_0x421d36[_0x9375b0(0xbb)][_0x4b99dc]=_State[_0x9375b0(0xb5)],delete _0x421d36[_0x9375b0(0xbb)][_0x4b99dc],_cacheSize+=_0x390fea[_0x9375b0(0xc7)];let _0x74f1e4=_0x421d36['list'][_0x9375b0(0xbe)];while(_cacheSize>_throttleSize){let _0x1787d4=_0x74f1e4[_0x9375b0(0xbc)],_0x4024df=_0x74f1e4,_0x1eeb2b=_0x1787d4[_0x9375b0(0xc5)],_0x112b84=_0x421d36[_0x9375b0(0x90)][_0x1eeb2b],_0x595ab6=_0x112b84['item'];_cacheSize-=_0x595ab6['byteLength'],delete _0x421d36[_0x9375b0(0x90)][_0x1eeb2b],_0x74f1e4=_0x74f1e4[_0x9375b0(0xc1)],_0x421d36[_0x9375b0(0x8f)][_0x9375b0(0x99)](_0x4024df);}},function(_0x233ef9){const _0x491ddc=_0x57cd16;_0x421d36[_0x491ddc(0xbb)][_0x4b99dc]=_0x233ef9?_State[_0x491ddc(0xa3)]:_State[_0x491ddc(0xc2)];});},SubTextureManager[_0xffb3af(0xab)][_0xffb3af(0x8e)]=function(_0x223d0e,_0x7ffdbd,_0x5074a3,_0x548bbf){const _0xab2eab=_0xffb3af;let _0x20a2c4=_0x223d0e+'_'+_0x5074a3,_0x21b895=this['cache'][_0x20a2c4];if(_0x21b895)return this[_0xab2eab(0x8f)][_0xab2eab(0xc4)](this['list'][_0xab2eab(0xa7)],_0x21b895),_0x21b895[_0xab2eab(0xbc)];let _0x1ef399=this['state'][_0x20a2c4];return !Cesium[_0xab2eab(0xc6)](_0x1ef399)&&(_0x1ef399=this[_0xab2eab(0xbb)][_0x20a2c4]=_State[_0xab2eab(0xc2)]),_0x1ef399===_State['UnLoad']&&this[_0xab2eab(0x98)](_0x223d0e,_0x7ffdbd,_0x5074a3,_0x548bbf['tile'],_0x548bbf),undefined;},SubTextureManager['prototype']['del']=function(_0x3be76f,_0x5e6031){let _0x3cdb0f=_0x3be76f+'_'+_0x5e6031;delete this['state'][_0x3cdb0f];},SubTextureManager[_0xffb3af(0x9b)]=undefined,SubTextureManager['getSingleInstance']=function(){const _0x4b0782=_0xffb3af;return !SubTextureManager[_0x4b0782(0x9b)]&&(SubTextureManager[_0x4b0782(0x9b)]=new SubTextureManager()),SubTextureManager['_singleInstance'];};

    const _0x4418=['modelMatrix','clone','texMatrix','create','vertexAttributes','multiply','minVerticesValue','geodes','lerp','boundingVolume','createTexture','rangeMode','6HmIyOB','vertexPackage','parse','verticesCount','Cartesian3','BoundingSphere','groupNode','_subTextureManager','length','SVC_Vertex','845725ySCEOv','center','125519ADrMWF','byteLength','geoMap','layerId','radius','pageLods','sphere','typedArray','specularColor','transform','3SwcDdw','1451tbMOnH','ambientColor','271dKlofP','shininess','fileType','rangeDataList','instanceIndex','hasOwnProperty','arrIndexPackage','1pTBVVb','867236BlKEca','instanceBounds','TextureWrap','skeletonNames','wrapS','pickInfo','ambient','Color','rangeList','244833AzVwVd','material','unpack','textureunitstate','texturePackage','buffer','addressmode','vertCompressConstant','wrapT','REPEAT','fromPoints','materials','compressOptions','byteOffset','context','push','keys','materialCode','304070QmKlry','specular','texmodmatrix','CLAMP_TO_EDGE','1021WCBUXk','diffuse','Matrix4','tile','boundingSphere','edgeGeometry','defined','geoPackage','fromBoundingSpheres','_materialManager'];const _0x2e1c26=_0x214a;(function(_0x1bbbff,_0x342d4c){const _0x4a5459=_0x214a;while(!![]){try{const _0xae84e=-parseInt(_0x4a5459(0x11d))*-parseInt(_0x4a5459(0x11b))+parseInt(_0x4a5459(0x144))*parseInt(_0x4a5459(0x15a))+-parseInt(_0x4a5459(0x125))+parseInt(_0x4a5459(0x10e))+parseInt(_0x4a5459(0x140))+parseInt(_0x4a5459(0x110))*-parseInt(_0x4a5459(0x11a))+-parseInt(_0x4a5459(0x12e))*-parseInt(_0x4a5459(0x124));if(_0xae84e===_0x342d4c)break;else _0x1bbbff['push'](_0x1bbbff['shift']());}catch(_0x1b8c3c){_0x1bbbff['push'](_0x1bbbff['shift']());}}}(_0x4418,0x86526));function _0x214a(_0x33849e,_0x1a00ee){_0x33849e=_0x33849e-0x10b;let _0x4418b7=_0x4418[_0x33849e];return _0x4418b7;}function S3MBlockContentParser(){}function parseMaterial$3(_0xa7f191,_0x945555,_0x79d41b){const _0x343547=_0x214a;let _0x350aa0=_0xa7f191[_0x343547(0x13c)],_0x1070b8=_0xa7f191[_0x343547(0x14d)];!_0x1070b8&&(_0x1070b8=_0xa7f191[_0x343547(0x14d)]=new MaterialManager());let _0x212a5d=_0xa7f191[_0x343547(0x10b)];!_0xa7f191['_subTextureManager']&&(_0xa7f191[_0x343547(0x10b)]=SubTextureManager['getSingleInstance']());let _0x2e853f=_0x945555[_0x343547(0x139)][_0x343547(0x12f)];for(let _0x94a4d1=0x0,_0x9166f6=_0x2e853f[_0x343547(0x10c)];_0x94a4d1<_0x9166f6;_0x94a4d1++){let _0x3f724c=_0x2e853f[_0x94a4d1]['material'],_0x12aa4e=_0x3f724c['id'],_0x34aec1=_0x1070b8['create'](_0x12aa4e);_0x34aec1[_0x343547(0x113)]=_0xa7f191['id'],_0x34aec1[_0x343547(0x147)]=_0x79d41b;let _0x14db27=_0x3f724c[_0x343547(0x12b)];_0x34aec1[_0x343547(0x11c)]=new Cesium[(_0x343547(0x12c))](_0x14db27['r'],_0x14db27['g'],_0x14db27['b'],_0x14db27['a']);let _0x429a65=_0x3f724c[_0x343547(0x145)];_0x34aec1['diffuseColor']=new Cesium[(_0x343547(0x12c))](_0x429a65['r'],_0x429a65['g'],_0x429a65['b'],_0x429a65['a']);let _0x130a8d=_0x3f724c[_0x343547(0x141)];_0x34aec1[_0x343547(0x118)]=new Cesium[(_0x343547(0x12c))](_0x130a8d['r'],_0x130a8d['g'],_0x130a8d['b'],_0x130a8d['a']),_0x34aec1[_0x343547(0x11e)]=_0x3f724c[_0x343547(0x11e)],_0x34aec1['bTransparentSorting']=_0x3f724c['transparentsorting'],_0x34aec1['id']=_0x12aa4e;let _0x4343fb=_0x3f724c['textureunitstates'],_0x15762e=_0x4343fb['length'];for(let _0x4f1fd6=0x0;_0x4f1fd6<0x1;_0x4f1fd6++){let _0x1d3da6=_0x4343fb[_0x4f1fd6][_0x343547(0x131)],_0x5b8b6c=_0x1d3da6['id'],_0x5bcb55=_0x1d3da6[_0x343547(0x134)]['u']===0x0?Cesium[_0x343547(0x127)][_0x343547(0x137)]:Cesium[_0x343547(0x127)][_0x343547(0x143)],_0x54669f=_0x1d3da6[_0x343547(0x134)]['v']===0x0?Cesium[_0x343547(0x127)][_0x343547(0x137)]:Cesium[_0x343547(0x127)][_0x343547(0x143)];_0x34aec1[_0x343547(0x150)]=Cesium[_0x343547(0x146)][_0x343547(0x130)](_0x1d3da6[_0x343547(0x142)]);let _0x4e71f3=_0x945555[_0x343547(0x132)][_0x5b8b6c];_0x4e71f3&&(_0x4e71f3[_0x343547(0x129)]=_0x5bcb55,_0x4e71f3[_0x343547(0x136)]=_0x54669f,_0x34aec1[_0x343547(0x158)](_0xa7f191,_0x79d41b,_0x4e71f3,_0x4f1fd6,_0x945555));}}}function calcBoundingVolumeForNormal$1(_0x1a469c,_0x377dfe){const _0x3b28dc=_0x214a;let _0x542a26=new Cesium['BoundingSphere'](),_0x45bca4=new Cesium['Cartesian3'](),_0x1db782=_0x1a469c[_0x3b28dc(0x152)][0x0],_0x1ae25f=_0x1db782['componentsPerAttribute'],_0x10e8ee=Cesium[_0x3b28dc(0x14a)](_0x1a469c[_0x3b28dc(0x13a)])&&(_0x1a469c['compressOptions']&_0x25c9a4[_0x3b28dc(0x10d)])===_0x25c9a4[_0x3b28dc(0x10d)],_0x2e070d=0x1,_0x958d8,_0x203d02;_0x10e8ee?(_0x2e070d=_0x1a469c[_0x3b28dc(0x135)],_0x958d8=new Cesium[(_0x3b28dc(0x15e))](_0x1a469c['minVerticesValue']['x'],_0x1a469c[_0x3b28dc(0x154)]['y'],_0x1a469c[_0x3b28dc(0x154)]['z']),_0x203d02=new Uint16Array(_0x1db782[_0x3b28dc(0x117)][_0x3b28dc(0x133)],_0x1db782['typedArray'][_0x3b28dc(0x13b)],_0x1db782['typedArray'][_0x3b28dc(0x111)]/0x2)):_0x203d02=new Float32Array(_0x1db782[_0x3b28dc(0x117)][_0x3b28dc(0x133)],_0x1db782[_0x3b28dc(0x117)][_0x3b28dc(0x13b)],_0x1db782[_0x3b28dc(0x117)]['byteLength']/0x4);let _0x7338e2=[];for(let _0x5b9e2a=0x0;_0x5b9e2a<_0x1a469c[_0x3b28dc(0x15d)];_0x5b9e2a++){Cesium[_0x3b28dc(0x15e)]['fromArray'](_0x203d02,_0x1ae25f*_0x5b9e2a,_0x45bca4),_0x10e8ee&&(_0x45bca4=Cesium['Cartesian3']['multiplyByScalar'](_0x45bca4,_0x2e070d,_0x45bca4),_0x45bca4=Cesium[_0x3b28dc(0x15e)]['add'](_0x45bca4,_0x958d8,_0x45bca4)),_0x7338e2[_0x3b28dc(0x13d)](Cesium[_0x3b28dc(0x15e)][_0x3b28dc(0x14f)](_0x45bca4));}return Cesium[_0x3b28dc(0x15f)][_0x3b28dc(0x138)](_0x7338e2,_0x542a26),Cesium['BoundingSphere'][_0x3b28dc(0x119)](_0x542a26,_0x377dfe,_0x542a26),_0x7338e2[_0x3b28dc(0x10c)]=0x0,_0x542a26;}let scratchCenter$1=new Cesium[(_0x2e1c26(0x15e))]();function calcBoundingVolumeForInstance$1(_0x1ad1ef){const _0x1bfb87=_0x2e1c26;let _0x586af3=new Cesium[(_0x1bfb87(0x15f))](),_0x52e695=_0x1ad1ef[_0x1bfb87(0x126)];if(!Cesium[_0x1bfb87(0x14a)](_0x52e695))return _0x586af3;let _0x11cef3=new Cesium[(_0x1bfb87(0x15e))](_0x52e695[0x0],_0x52e695[0x1],_0x52e695[0x2]),_0x16c777=new Cesium['Carteisan3'](_0x52e695[0x3],_0x52e695[0x4],_0x52e695[0x5]),_0x1676e4=new Cesium[(_0x1bfb87(0x15e))][(_0x1bfb87(0x156))](_0x11cef3,_0x16c777,0.5,scratchCenter$1),_0x5d5a8e=new Cesium[(_0x1bfb87(0x15e))]['distance'](_0x1676e4,_0x11cef3);return _0x586af3['center']=_0x1676e4,_0x586af3[_0x1bfb87(0x114)]=_0x5d5a8e,_0x586af3;}function calcBoundingVolume$1(_0x5e02f0,_0x25638e){const _0x4cd86f=_0x2e1c26;if(_0x5e02f0[_0x4cd86f(0x121)]>-0x1)return calcBoundingVolumeForInstance$1(_0x5e02f0);return calcBoundingVolumeForNormal$1(_0x5e02f0,_0x25638e);}function parseGeodes$1(_0x2c9252,_0x2c1b3c,_0xf4eb6b,_0x5bdf34){const _0x386511=_0x2e1c26;let _0x274799={},_0x203268=_0xf4eb6b[_0x386511(0x155)];for(let _0x28d00a=0x0,_0x5096c2=_0x203268[_0x386511(0x10c)];_0x28d00a<_0x5096c2;_0x28d00a++){let _0x505f9e=_0x203268[_0x28d00a],_0x1d0509=_0x505f9e['matrix'],_0x13bade=Cesium[_0x386511(0x146)][_0x386511(0x153)](_0x2c9252['modelMatrix'],_0x1d0509,new Cesium['Matrix4']()),_0x3f7564;Cesium[_0x386511(0x14a)](_0x5bdf34[_0x386511(0x157)])&&(_0x3f7564=new Cesium[(_0x386511(0x15f))](_0x5bdf34[_0x386511(0x157)]['sphere'][_0x386511(0x10f)],_0x5bdf34['boundingVolume'][_0x386511(0x116)][_0x386511(0x114)]),Cesium[_0x386511(0x15f)][_0x386511(0x119)](_0x3f7564,_0x2c9252[_0x386511(0x14e)],_0x3f7564));let _0x3f8c1f=_0x505f9e[_0x386511(0x128)];for(let _0x471aa9=0x0,_0x29396a=_0x3f8c1f['length'];_0x471aa9<_0x29396a;_0x471aa9++){let _0x125a64=_0x3f8c1f[_0x471aa9],_0x5e6752=_0x2c1b3c[_0x386511(0x14b)][_0x125a64],_0x4d560f=_0x5e6752[_0x386511(0x15b)],_0x2eb931=_0x5e6752[_0x386511(0x123)],_0x536dd9=_0x5e6752[_0x386511(0x12a)],_0x4bb7e4;_0x2eb931[_0x386511(0x10c)]>0x0&&(_0x4bb7e4=_0x2c9252[_0x386511(0x14d)][_0x386511(0x151)](_0x2eb931[0x0][_0x386511(0x13f)]));let _0x3dc1e7=Cesium[_0x386511(0x14a)](_0x3f7564)?_0x3f7564:calcBoundingVolume$1(_0x4d560f,_0x13bade);_0x274799[_0x125a64]=S3MContentFactory[_0x2c9252[_0x386511(0x11f)]]({'layer':_0x2c9252,'vertexPackage':_0x4d560f,'arrIndexPackage':_0x2eb931,'pickInfo':_0x536dd9,'modelMatrix':_0x13bade,'geoMatrix':_0x1d0509,'boundingVolume':_0x3dc1e7,'material':_0x4bb7e4,'edgeGeometry':_0x5e6752[_0x386511(0x149)],'geoName':_0x125a64});}}if(Object[_0x386511(0x13e)](_0x274799)['length']<0x1)return;if(!Cesium[_0x386511(0x14a)](_0x5bdf34[_0x386511(0x157)])){let _0x3785fe=[];for(let _0x26fc6a in _0x274799){_0x274799[_0x386511(0x122)](_0x26fc6a)&&_0x3785fe[_0x386511(0x13d)](_0x274799[_0x26fc6a][_0x386511(0x157)]);}let _0x44ed44=Cesium[_0x386511(0x15f)][_0x386511(0x14c)](_0x3785fe);_0x5bdf34[_0x386511(0x157)]={'sphere':_0x44ed44};}_0x5bdf34['geoMap']=_0x274799;}function parsePagelods$1(_0x3c99aa,_0x133ff0){const _0x18d50e=_0x2e1c26;let _0x5dc983=_0x133ff0[_0x18d50e(0x160)],_0x1213d0=[];for(let _0x34f674=0x0,_0x20c22d=_0x5dc983[_0x18d50e(0x115)]['length'];_0x34f674<_0x20c22d;_0x34f674++){let _0x2e6e68={},_0xe671db=_0x5dc983['pageLods'][_0x34f674];_0x2e6e68[_0x18d50e(0x159)]=_0xe671db[_0x18d50e(0x159)],_0x2e6e68['rangeDataList']=_0xe671db['childTile'],_0x2e6e68[_0x18d50e(0x12d)]=_0xe671db[_0x18d50e(0x12d)];let _0x5f5bf1=_0xe671db[_0x18d50e(0x148)][_0x18d50e(0x10f)],_0x5530f9=_0xe671db[_0x18d50e(0x148)][_0x18d50e(0x114)];_0x2e6e68[_0x18d50e(0x120)]!==''?_0x2e6e68[_0x18d50e(0x157)]={'sphere':{'center':new Cesium['Cartesian3'](_0x5f5bf1['x'],_0x5f5bf1['y'],_0x5f5bf1['z']),'radius':_0x5530f9}}:_0x2e6e68['isLeafTile']=!![],parseGeodes$1(_0x3c99aa,_0x133ff0,_0xe671db,_0x2e6e68),Cesium[_0x18d50e(0x14a)](_0x2e6e68[_0x18d50e(0x112)])&&_0x1213d0['push'](_0x2e6e68);}return _0x1213d0;}S3MBlockContentParser[_0x2e1c26(0x15c)]=function(_0x4fd34a,_0x1a8e07,_0x3685a7){const _0x40f391=_0x2e1c26;if(!Cesium[_0x40f391(0x14a)](_0x3685a7))return;parseMaterial$3(_0x4fd34a,_0x3685a7,_0x1a8e07);let _0x4ac199=parsePagelods$1(_0x4fd34a,_0x3685a7);return _0x4ac199;};

    const _0xb249=['then','getServerKey','defined','min','s3m','ancestorMap','265783gpZKUA','computeVisibilityWithPlaneMask','priority','realspace','box','582545nXpqmk','resolve','parse','centerZDepth','prototype','Request','rangeDataList','getBaseUri','serverKey','cacheNode','1aiQmIA','children','createIfNeeded','rangeMode','isAncestorBlock','EPSILON7','get','visibility','multiplyByScalar','boundingVolume','frustum','camera','distanceToTile','isLeafTile','rootName','82985kyIZvz','getPixel','pow','radius','defaultValue','positionWC','length','lodRangeMode','updatedVisibilityFrame','parent','3oarOcu','isChildBlock','getScale','pixel','requestContent','sphere','drawingBufferHeight','Resource','renderEntities','refines','relativePath','defineProperties','finalResolution','rangeList','CullingVolume','distance','getUrlComponent','%2B','contains','70372qXuPfV','magnitude','MASK_OUTSIDE','priorityHolder','MASK_INDETERMINATE','parseBuffer','freeBlock','data/path/','visibleDistanceMax','push','selected','lodRangeData','_blockCache','BoundingSphere','shouldSelect','multiplyByPoint','max','fileName','subtract','requestedFrame','Matrix4','createBoundingVolume','blockKey','maximumComponent','touchedFrame','baseUri','ready','modelMatrix','abs','visibilityPlaneMask','isRootTile','free','contentReadyPromise','fileExtension','365995pXYFWu','state','MAX_VALUE','_minimumPriority','_cache','hasOwnProperty','contentState','TileBoundingSphere','otherwise','s3mb','destroy','_basePath','normalize','Cartesian3','directionWC','center','distanceToCamera','request','fromCornerPoints','Math','layer','contentResource','1FuzEHp','replace','defer','update','context','/rest/realspace','dot','distanceToTileCenter','rootBatchIdMap','clone','selectedFrame','wasMinPriorityChild','2YRYrLr','foveatedFactor','_maximumPriority','add','visibleDistanceMin','reject','Pixel','1flprYW','LOADING','851913gzDHBi','depth','updatePriority','TILES3D','UNLOADED','isDestroyed','RequestScheduler','FAILED','372823CHVRFP','READY','destroyObject','cullingVolume'];const _0x8503ef=_0x203b;(function(_0x420827,_0x3ae571){const _0x5dfbaf=_0x203b;while(!![]){try{const _0x3997d5=-parseInt(_0x5dfbaf(0x167))+-parseInt(_0x5dfbaf(0x128))*-parseInt(_0x5dfbaf(0x132))+-parseInt(_0x5dfbaf(0x119))*parseInt(_0x5dfbaf(0x100))+-parseInt(_0x5dfbaf(0x10a))*-parseInt(_0x5dfbaf(0xef))+-parseInt(_0x5dfbaf(0xf6))*parseInt(_0x5dfbaf(0x10f))+parseInt(_0x5dfbaf(0x145))+-parseInt(_0x5dfbaf(0xe3))*-parseInt(_0x5dfbaf(0xf8));if(_0x3997d5===_0x3ae571)break;else _0x420827['push'](_0x420827['shift']());}catch(_0x12a9f0){_0x420827['push'](_0x420827['shift']());}}}(_0xb249,0x5d203));function S3MTile(_0x2ad8c7,_0x55da4e,_0x473c37,_0x532272,_0x18e360,_0x39d886){const _0x1f0b18=_0x203b;this['layer']=_0x2ad8c7,this[_0x1f0b18(0x131)]=_0x55da4e;let _0x8ff8f0=_0x532272['replace'](/\\/g,'/');this[_0x1f0b18(0x166)]=Cesium['getExtensionFromUri'](_0x532272),this['relativePath']=getUrl(_0x8ff8f0,_0x2ad8c7),this[_0x1f0b18(0x156)]=_0x532272,this['isLeafTile']=_0x18e360===0x0,this[_0x1f0b18(0x163)]=![],this['boundingVolume']=this[_0x1f0b18(0x15a)](_0x473c37,_0x2ad8c7[_0x1f0b18(0x160)]);let _0x5c6bae=Cesium[_0x1f0b18(0x139)][_0x1f0b18(0x11b)](_0x2ad8c7['_baseResource']);if(Cesium['defined'](_0x55da4e))this[_0x1f0b18(0x15e)]=_0x55da4e[_0x1f0b18(0x15e)];else {let _0x3ba2cf=new Cesium['Resource'](_0x8ff8f0);this[_0x1f0b18(0x15e)]=_0x3ba2cf[_0x1f0b18(0x116)]();}this[_0x1f0b18(0xe2)]=_0x5c6bae['getDerivedResource']({'url':this[_0x1f0b18(0x13c)]}),this[_0x1f0b18(0x117)]=Cesium[_0x1f0b18(0xfe)][_0x1f0b18(0x105)](this['contentResource'][_0x1f0b18(0x142)]()),this[_0x1f0b18(0xde)]=undefined,this['cacheNode']=undefined,this[_0x1f0b18(0xdd)]=0x0,this[_0x1f0b18(0x112)]=0x0,this[_0x1f0b18(0x135)]=0x0,this[_0x1f0b18(0xf9)]=_0x55da4e?_0x55da4e['depth']+0x1:0x0,this[_0x1f0b18(0x162)]=0x0,this['visible']=![],this[_0x1f0b18(0x11a)]=[],this[_0x1f0b18(0x13a)]=[],this[_0x1f0b18(0x150)]=Cesium[_0x1f0b18(0x12c)](_0x18e360,0x10),this[_0x1f0b18(0x12f)]=Cesium[_0x1f0b18(0x12c)](_0x39d886,_0x7b9d88[_0x1f0b18(0xf5)]),this[_0x1f0b18(0xd3)]=this[_0x1f0b18(0x126)]?_0x1dc358[_0x1f0b18(0x101)]:_0x1dc358[_0x1f0b18(0xfc)],this[_0x1f0b18(0x15d)]=0x0,this[_0x1f0b18(0x158)]=0x0,this['processFrame']=0x0,this['selectedFrame']=0x0,this[_0x1f0b18(0x130)]=0x0,this[_0x1f0b18(0xf0)]=0x0,this['priority']=0x0,this[_0x1f0b18(0x148)]=this,this[_0x1f0b18(0xee)]=![],this[_0x1f0b18(0x153)]=![],this[_0x1f0b18(0x14f)]=![],this[_0x1f0b18(0x13e)]=!![],this[_0x1f0b18(0x13b)]=![],this[_0x1f0b18(0x127)]=!_0x55da4e?this[_0x1f0b18(0x156)]:_0x55da4e[_0x1f0b18(0x127)],this[_0x1f0b18(0x15b)]='',this[_0x1f0b18(0x11d)]=![],this[_0x1f0b18(0x133)]=![],this[_0x1f0b18(0xeb)]={},this[_0x1f0b18(0x109)]={};}function _0x203b(_0x15fc62,_0x424d09){_0x15fc62=_0x15fc62-0xcf;let _0xb2499f=_0xb249[_0x15fc62];return _0xb2499f;}Object[_0x8503ef(0x13d)](S3MTile[_0x8503ef(0x113)],{'renderable':{'get':function(){const _0x3361a7=_0x8503ef;let _0x1d1a14=this[_0x3361a7(0x13a)],_0x52b650=_0x1d1a14[_0x3361a7(0x12e)];if(_0x52b650===0x0)return ![];for(let _0x44636e=0x0;_0x44636e<_0x52b650;_0x44636e++){if(!_0x1d1a14[_0x44636e][_0x3361a7(0x15f)])return ![];}return !![];}}});let scratchScale=new Cesium[(_0x8503ef(0xda))]();function createSphere(_0x30e11a,_0x4b7b8b){const _0x198966=_0x8503ef;let _0x275bd5=Cesium['Cartesian3'][_0x198966(0xec)](_0x30e11a[_0x198966(0xdc)]),_0x408750=_0x30e11a[_0x198966(0x12b)];_0x275bd5=Cesium['Matrix4'][_0x198966(0x154)](_0x4b7b8b,_0x275bd5,_0x275bd5);let _0x2e3a54=Cesium[_0x198966(0x159)][_0x198966(0x134)](_0x4b7b8b,scratchScale),_0x24ff40=Cesium[_0x198966(0xda)][_0x198966(0x15c)](_0x2e3a54);return _0x408750*=_0x24ff40,new Cesium[(_0x198966(0xd4))](_0x275bd5,_0x408750);}function getUrl(_0x85887e,_0x53dc09){const _0x1ede6b=_0x8503ef;_0x85887e=_0x85887e['replace'](/\+/g,_0x1ede6b(0x143));let _0x5548c7=_0x53dc09[_0x1ede6b(0xd8)],_0x5d706b=_0x53dc09['_basePath']['indexOf'](_0x1ede6b(0x10d))>-0x1;if(!_0x5d706b)return _0x85887e;let _0x44d551=_0x5548c7[_0x1ede6b(0xe4)](/(.*realspace)/,''),_0x4c5bb1=_0x5548c7['replace'](/\/rest\/realspace/g,'')[_0x1ede6b(0xe4)](_0x44d551,'');return _0x4c5bb1+_0x1ede6b(0xe8)+_0x44d551+_0x1ede6b(0x14c)+_0x85887e[_0x1ede6b(0xe4)](/^\.*/,'')[_0x1ede6b(0xe4)](/^\//,'')[_0x1ede6b(0xe4)](/\/$/,'');}function createBoundingBox(_0x4d7dd7,_0x5a615f){const _0x3d295a=_0x8503ef;let _0x244a30=new Cesium[(_0x3d295a(0xda))](_0x4d7dd7[_0x3d295a(0x107)]['x'],_0x4d7dd7[_0x3d295a(0x107)]['y'],_0x4d7dd7[_0x3d295a(0x107)]['z']);Cesium[_0x3d295a(0x159)]['multiplyByPoint'](_0x5a615f,_0x244a30,_0x244a30);let _0x358cf8=new Cesium[(_0x3d295a(0xda))](_0x4d7dd7[_0x3d295a(0x155)]['x'],_0x4d7dd7[_0x3d295a(0x155)]['y'],_0x4d7dd7[_0x3d295a(0x155)]['z']);Cesium['Matrix4'][_0x3d295a(0x154)](_0x5a615f,_0x358cf8,_0x358cf8);let _0x3c5f89=Cesium[_0x3d295a(0x152)][_0x3d295a(0xdf)](_0x244a30,_0x358cf8,new Cesium['BoundingSphere']()),_0x5b5d01=_0x3c5f89['center'],_0x1a6113=_0x3c5f89[_0x3d295a(0x12b)],_0x131072=Cesium['Matrix4'][_0x3d295a(0x134)](_0x5a615f,scratchScale),_0x281000=Cesium[_0x3d295a(0xda)][_0x3d295a(0x15c)](_0x131072);return _0x1a6113*=_0x281000,new Cesium['TileBoundingSphere'](_0x5b5d01,_0x1a6113);}S3MTile[_0x8503ef(0x113)][_0x8503ef(0x15a)]=function(_0x4da7ea,_0x586362){const _0x150ff1=_0x8503ef;if(Cesium[_0x150ff1(0x106)](_0x4da7ea['sphere']))return createSphere(_0x4da7ea[_0x150ff1(0x137)],_0x586362);else {if(Cesium[_0x150ff1(0x106)](_0x4da7ea[_0x150ff1(0x10e)]))return createBoundingBox(_0x4da7ea[_0x150ff1(0x10e)],_0x586362);}return undefined;},S3MTile[_0x8503ef(0x113)]['canTraverse']=function(){const _0x2f07d7=_0x8503ef;if(this['children'][_0x2f07d7(0x12e)]===0x0||this[_0x2f07d7(0x126)])return ![];if(!Cesium[_0x2f07d7(0x106)](this[_0x2f07d7(0x150)]))return !![];return this['pixel']>this[_0x2f07d7(0x150)];};function getBoundingVolume(_0x68ab8,_0x3f11a8){const _0x3e73f1=_0x8503ef;return _0x68ab8[_0x3e73f1(0x122)];}S3MTile[_0x8503ef(0x113)][_0x8503ef(0x129)]=function(_0x187a36){const _0xd660d=_0x8503ef;let _0x34b8c7=this[_0xd660d(0x122)],_0x521ccb=_0x34b8c7['radius'],_0xa6a8cb=_0x34b8c7[_0xd660d(0xdc)],_0x173df1=Cesium[_0xd660d(0xda)][_0xd660d(0x141)](_0x187a36[_0xd660d(0x124)][_0xd660d(0x12d)],_0xa6a8cb),_0x36c4dd=_0x187a36[_0xd660d(0xe7)][_0xd660d(0x138)],_0x45f644=_0x187a36[_0xd660d(0x124)][_0xd660d(0x123)]['_fovy']*0.5,_0x16bb87=_0x36c4dd*0.5,_0x355964=_0x16bb87/Math['tan'](_0x45f644);return _0x355964*_0x521ccb/_0x173df1;},S3MTile['prototype'][_0x8503ef(0x125)]=function(_0x5b7551){const _0x5bea94=_0x8503ef;let _0x267dd7=getBoundingVolume(this);return _0x267dd7[_0x5bea94(0xdd)](_0x5b7551);};let scratchToTileCenter=new Cesium['Cartesian3']();S3MTile[_0x8503ef(0x113)][_0x8503ef(0xea)]=function(_0x4793d9){const _0x4c9312=_0x8503ef,_0x2d7465=getBoundingVolume(this),_0x39a5a5=Cesium[_0x4c9312(0xda)][_0x4c9312(0x157)](_0x2d7465[_0x4c9312(0xdc)],_0x4793d9[_0x4c9312(0x124)][_0x4c9312(0x12d)],scratchToTileCenter);return Cesium[_0x4c9312(0xda)][_0x4c9312(0xe9)](_0x4793d9['camera']['directionWC'],_0x39a5a5);},S3MTile[_0x8503ef(0x113)][_0x8503ef(0x120)]=function(_0x5c5688,_0x4bc92e){const _0x5d651d=_0x8503ef;let _0x231ded=getBoundingVolume(this);return _0x5c5688[_0x5d651d(0x103)][_0x5d651d(0x10b)](_0x231ded,_0x4bc92e);};let scratchCartesian=new Cesium[(_0x8503ef(0xda))]();function priorityDeferred(_0x1c4d02,_0x4866a5){const _0xf51ab1=_0x8503ef;let _0x375387=_0x4866a5[_0xf51ab1(0x124)],_0x46161e=_0x1c4d02[_0xf51ab1(0x122)],_0x386c3b=_0x46161e[_0xf51ab1(0x12b)],_0x18ec00=Cesium[_0xf51ab1(0xda)][_0xf51ab1(0x121)](_0x375387[_0xf51ab1(0xdb)],_0x1c4d02[_0xf51ab1(0x112)],scratchCartesian),_0x3de3d4=Cesium[_0xf51ab1(0xda)]['add'](_0x375387[_0xf51ab1(0x12d)],_0x18ec00,scratchCartesian),_0x41449d=Cesium['Cartesian3'][_0xf51ab1(0x157)](_0x3de3d4,_0x46161e['center'],scratchCartesian),_0x1537bc=Cesium[_0xf51ab1(0xda)][_0xf51ab1(0x146)](_0x41449d),_0x52ec04=_0x1537bc>_0x386c3b;if(_0x52ec04){let _0x1d847b=Cesium[_0xf51ab1(0xda)][_0xf51ab1(0xd9)](_0x41449d,scratchCartesian),_0x452039=Cesium['Cartesian3'][_0xf51ab1(0x121)](_0x1d847b,_0x386c3b,scratchCartesian),_0x478bf2=Cesium['Cartesian3'][_0xf51ab1(0xf2)](_0x46161e['center'],_0x452039,scratchCartesian),_0x24e492=Cesium[_0xf51ab1(0xda)]['subtract'](_0x478bf2,_0x375387['positionWC'],scratchCartesian),_0x6fcfab=Cesium[_0xf51ab1(0xda)]['normalize'](_0x24e492,scratchCartesian);_0x1c4d02[_0xf51ab1(0xf0)]=0x1-Math[_0xf51ab1(0x161)](Cesium[_0xf51ab1(0xda)]['dot'](_0x375387[_0xf51ab1(0xdb)],_0x6fcfab));}else _0x1c4d02['foveatedFactor']=0x0;}S3MTile[_0x8503ef(0x113)]['updateVisibility']=function(_0x3d8958,_0x148104){const _0x417a94=_0x8503ef;let _0x4d785b=this[_0x417a94(0x131)],_0x55144f=Cesium[_0x417a94(0x106)](_0x4d785b)?_0x4d785b[_0x417a94(0x162)]:Cesium[_0x417a94(0x140)][_0x417a94(0x149)];this[_0x417a94(0xdd)]=this[_0x417a94(0x125)](_0x3d8958),this[_0x417a94(0x112)]=this['distanceToTileCenter'](_0x3d8958),this[_0x417a94(0x135)]=this['getPixel'](_0x3d8958),this[_0x417a94(0x162)]=this[_0x417a94(0x120)](_0x3d8958,_0x55144f),this['visible']=this['visibilityPlaneMask']!==Cesium[_0x417a94(0x140)][_0x417a94(0x147)]&&this[_0x417a94(0xdd)]>=_0x148104[_0x417a94(0xf3)]&&this[_0x417a94(0xdd)]<=_0x148104[_0x417a94(0x14d)],this['priorityDeferred']=priorityDeferred(this,_0x3d8958);};function createPriorityFunction(_0xaf56ae){return function(){return _0xaf56ae['priority'];};}function getContentFailedFunction(_0x471910){return function(_0x3c1587){const _0x2ed6dd=_0x203b;_0x471910[_0x2ed6dd(0xd3)]=_0x1dc358[_0x2ed6dd(0xff)],_0x471910[_0x2ed6dd(0x165)][_0x2ed6dd(0xf4)](_0x3c1587);};}function createChildren(_0x955d73,_0x92ee62){const _0x26b54b=_0x8503ef;let _0x6c5c4a=_0x955d73['layer'],_0xe715d0=_0x92ee62[_0x26b54b(0x12e)],_0x552c00=Number[_0x26b54b(0xcf)],_0x2eb272=0x0,_0x2e223b=_0x7b9d88[_0x26b54b(0xf5)];for(let _0x5f87f0=0x0;_0x5f87f0<_0xe715d0;_0x5f87f0++){let _0x45b95d=_0x92ee62[_0x5f87f0],_0x2e7a73=_0x45b95d[_0x26b54b(0x122)],_0x4d2ac5=_0x45b95d[_0x26b54b(0x115)];_0x4d2ac5=_0x955d73['baseUri']+_0x4d2ac5;let _0x372427=_0x45b95d[_0x26b54b(0x13f)],_0x181e2c=_0x45b95d[_0x26b54b(0x11c)],_0x4d98f8=_0x45b95d['geoMap'];if(_0x372427!==0x0){let _0x56347c=new S3MTile(_0x6c5c4a,_0x955d73,_0x2e7a73,_0x4d2ac5,_0x372427,_0x181e2c);_0x955d73[_0x26b54b(0x11a)][_0x26b54b(0x14e)](_0x56347c),_0x6c5c4a[_0x26b54b(0xd1)]['add'](_0x56347c);}for(let _0x1ae86e in _0x4d98f8){_0x4d98f8[_0x26b54b(0xd2)](_0x1ae86e)&&_0x955d73[_0x26b54b(0x13a)]['push'](_0x4d98f8[_0x1ae86e]);}_0x552c00=Math['min'](_0x552c00,_0x372427),_0x2eb272=Math[_0x26b54b(0x155)](_0x2eb272,_0x372427),_0x2e223b=_0x181e2c;}_0x955d73[_0x26b54b(0x163)]&&(_0x955d73[_0x26b54b(0x150)]=_0x2e223b===_0x7b9d88[_0x26b54b(0xf5)]?_0x552c00/0x2:_0x2eb272*0x2);}function parseChildGroup(_0x28a734,_0x580da1,_0x39cdc2){const _0x37ed9b=_0x8503ef;let _0x49e406=_0x580da1[_0x39cdc2[_0x37ed9b(0x156)]];if(!_0x49e406)return;_0x39cdc2['blockKey']=_0x39cdc2[_0x37ed9b(0x156)],_0x39cdc2[_0x37ed9b(0x11d)]=!![];let _0x49f43f=S3MBlockContentParser[_0x37ed9b(0x111)](_0x28a734,_0x39cdc2,_0x49e406);createChildren(_0x39cdc2,_0x49f43f);let _0x295691=[_0x39cdc2];while(_0x295691['length']){let _0x2004be=_0x295691['pop'](),_0x39ea0c=_0x2004be[_0x37ed9b(0x11a)];for(let _0x4f2cbe=0x0,_0x339cd1=_0x39ea0c[_0x37ed9b(0x12e)];_0x4f2cbe<_0x339cd1;_0x4f2cbe++){let _0x38abe7=_0x39ea0c[_0x4f2cbe],_0xac7e06=_0x38abe7['fileName'];if(_0xac7e06==='')continue;_0x38abe7[_0x37ed9b(0xeb)]=_0x49e406['rootBatchIdMap'],_0x38abe7[_0x37ed9b(0x109)]=_0x49e406['ancestorMap'];let _0x163c8d=_0x580da1[_0x38abe7['fileName']];if(_0x163c8d){_0x38abe7[_0x37ed9b(0xd3)]=_0x1dc358[_0x37ed9b(0x101)],_0x38abe7[_0x37ed9b(0x15b)]=_0x2004be['blockKey'],_0x38abe7[_0x37ed9b(0x133)]=!![];let _0x4afb2d=S3MBlockContentParser['parse'](_0x28a734,_0x38abe7,_0x163c8d);createChildren(_0x38abe7,_0x4afb2d),_0x295691[_0x37ed9b(0x14e)](_0x38abe7);}else _0x38abe7[_0x37ed9b(0x11d)]=!![],_0x38abe7['blockKey']=_0x38abe7[_0x37ed9b(0x156)];}}}function contentReadyFunction(_0xad88ae,_0x5b3f0b,_0x1a6788){const _0x1947fb=_0x8503ef;_0xad88ae[_0x1947fb(0xd1)][_0x1947fb(0xf2)](_0x5b3f0b);if(_0xad88ae['_isS3MBlock']){let _0x5e6de5=S3MBlockParser[_0x1947fb(0x14a)](_0x1a6788,_0x5b3f0b);parseChildGroup(_0xad88ae,_0x5e6de5,_0x5b3f0b),_0x5b3f0b[_0x1947fb(0xed)]=0x0,_0x5b3f0b[_0x1947fb(0xd3)]=_0x1dc358[_0x1947fb(0x101)],_0x5b3f0b[_0x1947fb(0x165)][_0x1947fb(0x110)](!![]);return;}let _0x457d91;if(_0x5b3f0b[_0x1947fb(0x166)]===_0x1947fb(0xd6))_0x457d91=S3ModelParser[_0x1947fb(0x14a)](_0x1a6788);else _0x5b3f0b[_0x1947fb(0x166)]===_0x1947fb(0x108)&&(_0x457d91=S3ModelOldParser[_0x1947fb(0x14a)](_0x1a6788));if(!_0x457d91){_0x5b3f0b[_0x1947fb(0xd3)]=_0x1dc358['FAILED'],_0x5b3f0b[_0x1947fb(0x165)][_0x1947fb(0xf4)]();return;}let _0x3b6b30=S3MContentParser['parse'](_0xad88ae,_0x457d91,_0x5b3f0b);createChildren(_0x5b3f0b,_0x3b6b30),_0x5b3f0b[_0x1947fb(0xed)]=0x0,_0x5b3f0b[_0x1947fb(0xd3)]=_0x1dc358[_0x1947fb(0x101)],_0x5b3f0b[_0x1947fb(0x165)][_0x1947fb(0x110)](_0x457d91);}S3MTile[_0x8503ef(0x113)][_0x8503ef(0x136)]=function(){const _0x569b5d=_0x8503ef;let _0x4fd986=this,_0x9daa5=this[_0x569b5d(0xe1)];if(_0x9daa5['_isS3MBlock']&&_0x9daa5[_0x569b5d(0x151)][_0x569b5d(0x144)](_0x9daa5['id'],this[_0x569b5d(0x15b)])){let _0x422e50=_0x9daa5['_blockCache'][_0x569b5d(0x11f)](_0x9daa5['id'],this[_0x569b5d(0x15b)]);return this[_0x569b5d(0x165)]=Cesium['when'][_0x569b5d(0xe5)](),contentReadyFunction(_0x9daa5,this,_0x422e50),!![];}let _0x3b1bf1=this[_0x569b5d(0xe2)][_0x569b5d(0xec)](),_0x249320=new Cesium[(_0x569b5d(0x114))]({'throttle':!![],'throttleByServer':!![],'type':Cesium['RequestType'][_0x569b5d(0xfb)],'priorityFunction':createPriorityFunction(this),'serverKey':this[_0x569b5d(0x117)]});this[_0x569b5d(0xde)]=_0x249320,_0x3b1bf1[_0x569b5d(0xde)]=_0x249320;let _0x1a3830=_0x3b1bf1['fetchArrayBuffer']();if(!Cesium['defined'](_0x1a3830))return ![];this[_0x569b5d(0xd3)]=_0x1dc358[_0x569b5d(0xf7)],this[_0x569b5d(0x165)]=Cesium['when'][_0x569b5d(0xe5)]();let _0x3960f2=getContentFailedFunction(this);return _0x1a3830[_0x569b5d(0x104)](function(_0x289bf7){const _0x2dc184=_0x569b5d;if(_0x4fd986[_0x2dc184(0xfd)]()){_0x3960f2();return;}contentReadyFunction(_0x9daa5,_0x4fd986,_0x289bf7);})[_0x569b5d(0xd5)](function(_0x2dcc8f){const _0x43435a=_0x569b5d;if(_0x249320[_0x43435a(0x168)]===Cesium['RequestState']['CANCELLED']){_0x4fd986[_0x43435a(0xd3)]=_0x1dc358[_0x43435a(0xfc)];return;}_0x3960f2(_0x2dcc8f);}),!![];};function priorityNormalizeAndClamp(_0x35c896,_0x265260,_0x5ceee0){const _0x1d20eb=_0x8503ef;return Math['max'](Cesium[_0x1d20eb(0xe0)]['normalize'](_0x35c896,_0x265260,_0x5ceee0)-Cesium[_0x1d20eb(0xe0)][_0x1d20eb(0x11e)],0x0);}function isolateDigits(_0x2f3f2b,_0x2c60bd,_0x5e8c48){const _0x565b2b=_0x8503ef;let _0x350668=_0x2f3f2b*Math[_0x565b2b(0x12a)](0xa,_0x2c60bd),_0x447190=parseInt(_0x350668);return _0x447190*Math[_0x565b2b(0x12a)](0xa,_0x5e8c48);}S3MTile[_0x8503ef(0x113)][_0x8503ef(0xfa)]=function(_0x34f33a,_0x3b5412){const _0x3faba2=_0x8503ef;let _0x45a5a3=_0x34f33a[_0x3faba2(0xd0)],_0x1d23b8=_0x34f33a[_0x3faba2(0xf1)],_0x15c289=0x4,_0xe23af7=0x4,_0x377027=priorityNormalizeAndClamp(this[_0x3faba2(0xf0)],_0x45a5a3[_0x3faba2(0xf0)],_0x1d23b8['foveatedFactor']),_0x523aff=isolateDigits(_0x377027,_0xe23af7,_0x15c289);_0x15c289=0x8;let _0x33aea1=priorityNormalizeAndClamp(this['pixel'],_0x45a5a3['pixel'],_0x1d23b8['pixel']),_0xb860a5=isolateDigits(0x1-_0x33aea1,_0xe23af7,_0x15c289);_0x15c289=0x0;let _0x33a1f3=priorityNormalizeAndClamp(this[_0x3faba2(0xdd)],_0x45a5a3[_0x3faba2(0x141)],_0x1d23b8[_0x3faba2(0x141)]),_0x51a174=isolateDigits(_0x33a1f3,_0xe23af7,_0x15c289);this[_0x3faba2(0x10c)]=_0x523aff+_0xb860a5+_0x51a174;},S3MTile['prototype'][_0x8503ef(0xe6)]=function(_0x2fcba,_0x4f84b8){const _0x174627=_0x8503ef;for(let _0x5e950f=0x0,_0x2075eb=this[_0x174627(0x13a)][_0x174627(0x12e)];_0x5e950f<_0x2075eb;_0x5e950f++){this[_0x174627(0x13a)][_0x5e950f][_0x174627(0xe6)](_0x2fcba,_0x4f84b8);}},S3MTile[_0x8503ef(0x113)][_0x8503ef(0x164)]=function(){const _0x56644a=_0x8503ef;this[_0x56644a(0xd3)]=_0x1dc358['UNLOADED'],this['request']=undefined,this['cacheNode']=undefined,this['priorityHolder']=undefined,this['contentReadyPromise']=undefined,this[_0x56644a(0x148)]=undefined;for(let _0x5d25c1=0x0,_0x3803d4=this['renderEntities']['length'];_0x5d25c1<_0x3803d4;_0x5d25c1++){this[_0x56644a(0x13a)][_0x5d25c1]['destroy']();}this[_0x56644a(0x13a)]['length']=0x0,this[_0x56644a(0x11a)][_0x56644a(0x12e)]=0x0;},S3MTile[_0x8503ef(0x113)][_0x8503ef(0x14b)]=function(){const _0x53e0=_0x8503ef;this[_0x53e0(0xd3)]=_0x1dc358['UNLOADED'],this[_0x53e0(0xde)]=undefined,this[_0x53e0(0x118)]=undefined,this[_0x53e0(0x148)]=undefined,this[_0x53e0(0x165)]=undefined,this[_0x53e0(0x148)]=undefined;for(let _0x25691b=0x0,_0x1836f2=this['renderEntities'][_0x53e0(0x12e)];_0x25691b<_0x1836f2;_0x25691b++){this[_0x53e0(0x13a)][_0x25691b][_0x53e0(0xd7)]();}this[_0x53e0(0x13a)][_0x53e0(0x12e)]=0x0;for(let _0x597145=0x0,_0x3c7a7c=this[_0x53e0(0x11a)][_0x53e0(0x12e)];_0x597145<_0x3c7a7c;_0x597145++){let _0xfe31ce=this[_0x53e0(0x11a)][_0x597145];!_0xfe31ce['isAncestorBlock']&&_0xfe31ce[_0x53e0(0x14b)]();}this[_0x53e0(0x11a)][_0x53e0(0x12e)]=0x0;},S3MTile[_0x8503ef(0x113)][_0x8503ef(0xfd)]=function(){return ![];},S3MTile['prototype'][_0x8503ef(0xd7)]=function(){const _0x39229f=_0x8503ef;return this[_0x39229f(0x164)](),Cesium[_0x39229f(0x102)](this);};

    const _0x1d23=['_minimumPriority','push','foveatedFactor','defined','processFrame','198483NvnBSo','distanceToCamera','touch','119617OTMqkC','length','46259UGvpci','pixel','frameNumber','UNLOADED','schedule','shouldSelect','selected','6QnBuin','refines','visible','centerZDepth','lodRangeMode','updateVisibility','_rootTiles','distance','_stack','181318fKCgUp','requestedFrame','_cache','depth','updatedVisibilityFrame','pop','wasMinPriorityChild','sort','_maximumPriority','children','MAX_VALUE','2WfkNYE','346038QQnIEN','renderable','62241SXBShH','lodRangeData','max','_selectedTiles','3dQdoGF','40427IdBXaJ','lodRangeScale','2PCPWjL','isRootTile','contentState','touchedFrame','_processTiles','priorityHolder','_requestTiles','selectedFrame','min','READY'];const _0x3152c8=_0x3a6a;function _0x3a6a(_0x54ed7f,_0x516557){_0x54ed7f=_0x54ed7f-0xd7;let _0x1d237d=_0x1d23[_0x54ed7f];return _0x1d237d;}(function(_0x53d7de,_0xf4e895){const _0xdbcda=_0x3a6a;while(!![]){try{const _0x3b7c02=-parseInt(_0xdbcda(0x107))+parseInt(_0xdbcda(0xf1))*parseInt(_0xdbcda(0xf5))+-parseInt(_0xdbcda(0xe3))+parseInt(_0xdbcda(0xf8))*-parseInt(_0xdbcda(0xf6))+parseInt(_0xdbcda(0x10c))*parseInt(_0xdbcda(0xee))+-parseInt(_0xdbcda(0xef))+-parseInt(_0xdbcda(0xda))*-parseInt(_0xdbcda(0x10a));if(_0x3b7c02===_0xf4e895)break;else _0x53d7de['push'](_0x53d7de['shift']());}catch(_0x32a076){_0x53d7de['push'](_0x53d7de['shift']());}}}(_0x1d23,0x2e72a));function S3MLayerScheduler(){this['_stack']=[];}function sortComparator(_0x8ec284,_0x221e94){const _0x3fd564=_0x3a6a;if(_0x221e94[_0x3fd564(0x108)]===0x0&&_0x8ec284[_0x3fd564(0x108)]===0x0)return _0x221e94[_0x3fd564(0xdd)]-_0x8ec284['centerZDepth'];return _0x221e94[_0x3fd564(0x108)]-_0x8ec284['distanceToCamera'];}function updateChildren(_0x2c10b4,_0x5398cf,_0x3b9d95,_0x745a86){const _0x23554d=_0x3a6a;let _0x392d28,_0x55b025=_0x5398cf[_0x23554d(0xec)],_0x33394d=_0x55b025[_0x23554d(0x10b)];for(_0x392d28=0x0;_0x392d28<_0x33394d;++_0x392d28){updateTile(_0x745a86,_0x2c10b4,_0x55b025[_0x392d28]);}_0x55b025[_0x23554d(0xea)](sortComparator);let _0x51412d=!![],_0x52084f=![],_0x5ca57e=-0x1,_0x14e79e=Number[_0x23554d(0xed)],_0x1053e6=!![];for(_0x392d28=0x0;_0x392d28<_0x33394d;++_0x392d28){let _0x4ec8a6=_0x55b025[_0x392d28];_0x4ec8a6['foveatedFactor']<_0x14e79e&&(_0x5ca57e=_0x392d28,_0x14e79e=_0x4ec8a6[_0x23554d(0x104)]);_0x4ec8a6[_0x23554d(0xdc)]?(_0x3b9d95['push'](_0x4ec8a6),_0x52084f=!![]):(loadTile(_0x2c10b4,_0x4ec8a6,_0x745a86),touchTile(_0x2c10b4,_0x4ec8a6,_0x745a86));let _0x132ca2=_0x4ec8a6[_0x23554d(0xf0)];_0x1053e6&&(_0x51412d=_0x51412d&&_0x132ca2);}!_0x52084f&&(_0x51412d=![]);if(_0x5ca57e!==-0x1){let _0x7196b1=_0x55b025[_0x5ca57e];_0x7196b1[_0x23554d(0xe9)]=!![];let _0x4a4338=(_0x5398cf[_0x23554d(0xe9)]||_0x5398cf[_0x23554d(0xf9)])&&_0x14e79e<=_0x5398cf[_0x23554d(0xfd)][_0x23554d(0x104)]?_0x5398cf['priorityHolder']:_0x5398cf;_0x4a4338[_0x23554d(0x104)]=Math[_0x23554d(0x100)](_0x7196b1['foveatedFactor'],_0x4a4338[_0x23554d(0x104)]),_0x4a4338[_0x23554d(0x108)]=Math[_0x23554d(0x100)](_0x7196b1[_0x23554d(0x108)],_0x4a4338['distanceToCamera']);for(_0x392d28=0x0;_0x392d28<_0x33394d;++_0x392d28){let _0x220ad4=_0x55b025[_0x392d28];_0x220ad4[_0x23554d(0xfd)]=_0x4a4338;}}return _0x51412d;}function selectTile(_0x5aa2d5,_0xd6ef6a,_0x1e3cba){const _0x5da260=_0x3a6a;if(_0xd6ef6a[_0x5da260(0xff)]===_0x1e3cba[_0x5da260(0x10e)]||!_0xd6ef6a[_0x5da260(0xf0)])return;_0x5aa2d5[_0x5da260(0xf4)][_0x5da260(0x103)](_0xd6ef6a),_0xd6ef6a['selectedFrame']=_0x1e3cba[_0x5da260(0x10e)];}function loadTile(_0x4ccc82,_0x478231,_0x50fe2b){const _0x43b635=_0x3a6a;if(_0x478231[_0x43b635(0xe4)]===_0x50fe2b[_0x43b635(0x10e)]||_0x478231['contentState']!==_0x1dc358[_0x43b635(0x10f)])return;_0x4ccc82['_requestTiles'][_0x43b635(0x103)](_0x478231),_0x478231[_0x43b635(0xe4)]=_0x50fe2b[_0x43b635(0x10e)];}function processTile(_0x4d8fe9,_0x1862a9,_0x2ce588){const _0x257edc=_0x3a6a;if(_0x1862a9[_0x257edc(0x106)]===_0x2ce588['frameNumber']||_0x1862a9[_0x257edc(0xfa)]!==_0x1dc358[_0x257edc(0x101)]||_0x1862a9[_0x257edc(0xf0)])return;_0x1862a9[_0x257edc(0x106)]=_0x2ce588[_0x257edc(0x10e)],_0x4d8fe9[_0x257edc(0xfc)][_0x257edc(0x103)](_0x1862a9);}function touchTile(_0x2cfd2c,_0x4c22b8,_0x1cfb96){const _0x3dd1eb=_0x3a6a;if(_0x4c22b8[_0x3dd1eb(0xfb)]===_0x1cfb96['frameNumber'])return;_0x2cfd2c[_0x3dd1eb(0xe5)][_0x3dd1eb(0x109)](_0x4c22b8),_0x4c22b8[_0x3dd1eb(0xfb)]=_0x1cfb96[_0x3dd1eb(0x10e)];}function updateVisibility(_0x1e6523,_0x255b8a,_0x208452){const _0x3365a1=_0x3a6a;if(_0x255b8a[_0x3365a1(0xe7)]===_0x208452[_0x3365a1(0x10e)])return;_0x255b8a[_0x3365a1(0xe7)]=_0x208452[_0x3365a1(0x10e)],_0x255b8a[_0x3365a1(0xdf)](_0x208452,_0x1e6523);}function updateTileVisibility(_0x161a9d,_0x2a1a5d,_0x12b4be){updateVisibility(_0x2a1a5d,_0x12b4be,_0x161a9d);}function updateMinimumMaximumPriority(_0x12de3f,_0x229c0e){const _0x3005ba=_0x3a6a;_0x12de3f['_maximumPriority'][_0x3005ba(0xe1)]=Math[_0x3005ba(0xf3)](_0x229c0e[_0x3005ba(0x108)],_0x12de3f[_0x3005ba(0xeb)][_0x3005ba(0xe1)]),_0x12de3f['_minimumPriority'][_0x3005ba(0xe1)]=Math['min'](_0x229c0e[_0x3005ba(0x108)],_0x12de3f[_0x3005ba(0x102)]['distance']),_0x12de3f[_0x3005ba(0xeb)][_0x3005ba(0xe6)]=Math[_0x3005ba(0xf3)](_0x229c0e[_0x3005ba(0xe6)],_0x12de3f[_0x3005ba(0xeb)][_0x3005ba(0xe6)]),_0x12de3f[_0x3005ba(0x102)][_0x3005ba(0xe6)]=Math['min'](_0x229c0e[_0x3005ba(0xe6)],_0x12de3f[_0x3005ba(0x102)][_0x3005ba(0xe6)]),_0x12de3f[_0x3005ba(0xeb)][_0x3005ba(0x104)]=Math['max'](_0x229c0e[_0x3005ba(0x104)],_0x12de3f[_0x3005ba(0xeb)][_0x3005ba(0x104)]),_0x12de3f['_minimumPriority'][_0x3005ba(0x104)]=Math[_0x3005ba(0x100)](_0x229c0e[_0x3005ba(0x104)],_0x12de3f[_0x3005ba(0x102)][_0x3005ba(0x104)]),_0x12de3f[_0x3005ba(0xeb)][_0x3005ba(0x10d)]=Math[_0x3005ba(0xf3)](_0x229c0e[_0x3005ba(0x10d)],_0x12de3f[_0x3005ba(0xeb)][_0x3005ba(0x10d)]),_0x12de3f[_0x3005ba(0x102)][_0x3005ba(0x10d)]=Math[_0x3005ba(0x100)](_0x229c0e['pixel'],_0x12de3f['_minimumPriority'][_0x3005ba(0x10d)]);}function updateTile(_0x5e4f3b,_0x526627,_0x2d486b){const _0x518f8c=_0x3a6a;updateTileVisibility(_0x5e4f3b,_0x526627,_0x2d486b),_0x2d486b[_0x518f8c(0xe9)]=![],_0x2d486b[_0x518f8c(0xfd)]=_0x2d486b,updateMinimumMaximumPriority(_0x526627,_0x2d486b),_0x2d486b[_0x518f8c(0xd8)]=![],_0x2d486b[_0x518f8c(0xd9)]=![];}function canTraverse(_0x485622,_0x1bf0b1){const _0x1da265=_0x3a6a;if(_0x1bf0b1['children'][_0x1da265(0x10b)]===0x0)return ![];if(_0x1bf0b1[_0x1da265(0xde)]===_0x7b9d88['Pixel'])return _0x1bf0b1[_0x1da265(0x10d)]/_0x485622[_0x1da265(0xf7)]>_0x1bf0b1[_0x1da265(0xf2)];return _0x1bf0b1['distanceToCamera']*_0x485622[_0x1da265(0xf7)]<_0x1bf0b1[_0x1da265(0xf2)];}function traversal(_0x52d6a5,_0x5c0e6b,_0x543fb2){const _0x143f0f=_0x3a6a;while(_0x5c0e6b[_0x143f0f(0x10b)]){let _0x5320b6=_0x5c0e6b[_0x143f0f(0xe8)](),_0x1a67b1=_0x5320b6['parent'],_0x5ba432=!Cesium[_0x143f0f(0x105)](_0x1a67b1)||_0x1a67b1[_0x143f0f(0xdb)],_0x49b3dc=![];canTraverse(_0x52d6a5,_0x5320b6)&&(_0x49b3dc=updateChildren(_0x52d6a5,_0x5320b6,_0x5c0e6b,_0x543fb2)&&_0x5ba432);let _0x2381ec=!_0x49b3dc&&_0x5ba432;loadTile(_0x52d6a5,_0x5320b6,_0x543fb2),processTile(_0x52d6a5,_0x5320b6,_0x543fb2),_0x2381ec&&selectTile(_0x52d6a5,_0x5320b6,_0x543fb2),touchTile(_0x52d6a5,_0x5320b6,_0x543fb2),_0x5320b6[_0x143f0f(0xdb)]=_0x49b3dc;}}function selectRootTiles(_0x36c253,_0x2021a0,_0x1d12f2){const _0x5b11f2=_0x3a6a;_0x2021a0[_0x5b11f2(0x10b)]=0x0;for(let _0x3d4280=0x0,_0x57eae5=_0x36c253[_0x5b11f2(0xe0)][_0x5b11f2(0x10b)];_0x3d4280<_0x57eae5;_0x3d4280++){let _0x10eaab=_0x36c253['_rootTiles'][_0x3d4280];updateTile(_0x1d12f2,_0x36c253,_0x10eaab);if(!_0x10eaab['visible'])continue;_0x2021a0['push'](_0x10eaab);}}function updatePriority(_0xf02cd0,_0x30ddcf){const _0x3d0706=_0x3a6a;let _0x49c496=_0xf02cd0[_0x3d0706(0xfe)],_0x1291fa=_0x49c496['length'];for(let _0x5e20df=0x0;_0x5e20df<_0x1291fa;++_0x5e20df){_0x49c496[_0x5e20df]['updatePriority'](_0xf02cd0,_0x30ddcf);}}S3MLayerScheduler['prototype'][_0x3152c8(0xd7)]=function(_0x654cf1,_0x3a6e2){const _0x5578c2=_0x3152c8;let _0x23b96b=this[_0x5578c2(0xe2)];selectRootTiles(_0x654cf1,_0x23b96b,_0x3a6e2),traversal(_0x654cf1,_0x23b96b,_0x3a6e2),updatePriority(_0x654cf1,_0x3a6e2);};

    const _0x3de5=['unloadTiles','744859eiZppl','defined','totalMemoryUsageInBytes','unloadTile','next','unloadBlockTile','prototype','cacheNode','item','_list','68123VdzXoE','add','206nqAvph','_trimTiles','pop','2621BVpBlJ','remove','1363385lwiLdV','splice','children','DoublyLinkedList','441RmqisJ','length','trim','1370197HulADT','reset','_sentinel','3479GFqwwU','push','isAncestorBlock','tail','maximumMemoryUsage','head','3HURcFc','724775kajdMC'];const _0x334ff6=_0x1395;(function(_0x38f5a8,_0x19f666){const _0xedb813=_0x1395;while(!![]){try{const _0x327f24=-parseInt(_0xedb813(0x169))+parseInt(_0xedb813(0x162))+-parseInt(_0xedb813(0x16d))*-parseInt(_0xedb813(0x167))+-parseInt(_0xedb813(0x170))+-parseInt(_0xedb813(0x173))*-parseInt(_0xedb813(0x164))+-parseInt(_0xedb813(0x17a))+-parseInt(_0xedb813(0x17c))*-parseInt(_0xedb813(0x179));if(_0x327f24===_0x19f666)break;else _0x38f5a8['push'](_0x38f5a8['shift']());}catch(_0x3fe637){_0x38f5a8['push'](_0x38f5a8['shift']());}}}(_0x3de5,0xaf04e));function _0x1395(_0xc8337d,_0x17139a){_0xc8337d=_0xc8337d-0x15f;let _0x3de5f7=_0x3de5[_0xc8337d];return _0x3de5f7;}function S3MLayerCache(){const _0x31691d=_0x1395;this[_0x31691d(0x161)]=new Cesium[(_0x31691d(0x16c))](),this[_0x31691d(0x172)]=this['_list'][_0x31691d(0x163)](),this[_0x31691d(0x165)]=![];}S3MLayerCache['prototype'][_0x334ff6(0x171)]=function(){const _0x34715e=_0x334ff6;this[_0x34715e(0x161)][_0x34715e(0x16a)](this[_0x34715e(0x161)][_0x34715e(0x176)],this['_sentinel']);},S3MLayerCache[_0x334ff6(0x182)]['touch']=function(_0x37fbfb){const _0x6e88a5=_0x334ff6;let _0x5e64f8=_0x37fbfb[_0x6e88a5(0x15f)];Cesium['defined'](_0x5e64f8)&&this['_list'][_0x6e88a5(0x16a)](this[_0x6e88a5(0x172)],_0x5e64f8);},S3MLayerCache[_0x334ff6(0x182)][_0x334ff6(0x163)]=function(_0x337acd){const _0x403d10=_0x334ff6;!Cesium['defined'](_0x337acd['cacheNode'])&&(_0x337acd[_0x403d10(0x15f)]=this[_0x403d10(0x161)][_0x403d10(0x163)](_0x337acd));},S3MLayerCache[_0x334ff6(0x182)]['unloadTile']=function(_0x266fcf,_0x31184e,_0x406f67){const _0x5f86b1=_0x334ff6;let _0x445eb4=_0x31184e[_0x5f86b1(0x15f)];if(!Cesium[_0x5f86b1(0x17d)](_0x445eb4))return;this[_0x5f86b1(0x161)][_0x5f86b1(0x168)](_0x445eb4),_0x31184e['cacheNode']=undefined,_0x406f67(_0x266fcf,_0x31184e);},S3MLayerCache['prototype'][_0x334ff6(0x181)]=function(_0x1f4d43,_0x5ad669,_0x1e7278){const _0x4ee465=_0x334ff6;let _0x3a667f=[_0x5ad669],_0x25d3ea=[_0x5ad669];while(_0x3a667f[_0x4ee465(0x16e)]){let _0x58e3a8=_0x3a667f[_0x4ee465(0x166)]();for(let _0x319836=0x0,_0x5ecb15=_0x58e3a8[_0x4ee465(0x16b)]['length'];_0x319836<_0x5ecb15;_0x319836++){let _0x51b01e=_0x58e3a8[_0x4ee465(0x16b)][_0x319836];!_0x51b01e[_0x4ee465(0x175)]&&(_0x3a667f[_0x4ee465(0x174)](_0x51b01e),_0x25d3ea[_0x4ee465(0x174)](_0x51b01e));}}for(let _0x4686b9=0x0,_0x59f6a7=_0x25d3ea[_0x4ee465(0x16e)];_0x4686b9<_0x59f6a7;_0x4686b9++){let _0x3e3702=_0x25d3ea[_0x4686b9];this[_0x4ee465(0x17f)](_0x1f4d43,_0x3e3702,_0x1e7278);}},S3MLayerCache['prototype'][_0x334ff6(0x17b)]=function(_0x346a22,_0x49c970){const _0x2eef44=_0x334ff6;let _0x350e15=this['_trimTiles'];this[_0x2eef44(0x165)]=![];let _0x21a581=this[_0x2eef44(0x161)],_0x7d1ce1=_0x346a22[_0x2eef44(0x177)]*0x400*0x400,_0x5e7940=this[_0x2eef44(0x172)],_0x3c0395=_0x21a581['head'];while(_0x3c0395&&_0x3c0395!==_0x5e7940&&(_0x346a22[_0x2eef44(0x17e)]>_0x7d1ce1||_0x350e15)){let _0x43da84=_0x3c0395['item'];_0x3c0395=_0x3c0395[_0x2eef44(0x180)],this[_0x2eef44(0x17f)](_0x346a22,_0x43da84,_0x49c970);}},S3MLayerCache[_0x334ff6(0x182)]['unloadBlockTiles']=function(_0x431ea5,_0x405a94){const _0x5c92c8=_0x334ff6;let _0x5cc85f=this['_trimTiles'];this['_trimTiles']=![];let _0xaa2d5e=this[_0x5c92c8(0x161)],_0x411373=_0x431ea5[_0x5c92c8(0x177)]*0x400*0x400,_0x3e4d65=this[_0x5c92c8(0x172)],_0x57b5d9=_0xaa2d5e[_0x5c92c8(0x178)];while(_0x57b5d9&&_0x57b5d9!==_0x3e4d65&&(_0x431ea5[_0x5c92c8(0x17e)]>_0x411373||_0x5cc85f)){let _0x5a48b8=_0x57b5d9[_0x5c92c8(0x160)];_0x57b5d9=_0x57b5d9[_0x5c92c8(0x180)],_0x5a48b8['isAncestorBlock']&&this[_0x5c92c8(0x181)](_0x431ea5,_0x5a48b8,_0x405a94);}},S3MLayerCache[_0x334ff6(0x182)][_0x334ff6(0x16f)]=function(){this['_trimTiles']=!![];};

    const _0x4b4b=['84621AqGABl','30071fnhDoO','433460AlwelY','118097IOrirp','470916KWDiHT','462020APqzBd','1WoxWcS','freeze','353904YxCkxW','3FWOgoM'];const _0x23110c=_0x10af;(function(_0x507c87,_0x2d1ccb){const _0x4f3351=_0x10af;while(!![]){try{const _0x2dfaf5=parseInt(_0x4f3351(0x10f))+parseInt(_0x4f3351(0x110))*-parseInt(_0x4f3351(0x118))+parseInt(_0x4f3351(0x112))*parseInt(_0x4f3351(0x115))+parseInt(_0x4f3351(0x113))+-parseInt(_0x4f3351(0x117))+-parseInt(_0x4f3351(0x111))+parseInt(_0x4f3351(0x114));if(_0x2dfaf5===_0x2d1ccb)break;else _0x507c87['push'](_0x507c87['shift']());}catch(_0x49efab){_0x507c87['push'](_0x507c87['shift']());}}}(_0x4b4b,0x3f01d));const PLANECLIPMODE={'CLIP_NOTHING':0x0,'CLIP_BEHIND_ANY_PLANE':0x1,'CLIP_BEHIND_ALL_PLANE':0x2,'ONLY_KEEP_LINE':0x3};function _0x10af(_0x1b955a,_0x15e402){_0x1b955a=_0x1b955a-0x10f;let _0x4b4bb8=_0x4b4b[_0x1b955a];return _0x4b4bb8;}var _0x4e7632 = Object[_0x23110c(0x116)](PLANECLIPMODE);

    const _0x4641=['158nuuFNa','freeze','89rBuRkZ','4007vmbWBH','71sngMHz','25yXBlTM','27281ijxbCP','1406816zMNLQx','20849CPYchO','1290289ZhwANP','9419pycoIm','95704GsfPUE'];function _0x396a(_0x4a7c57,_0x5223be){_0x4a7c57=_0x4a7c57-0x6e;let _0x46418c=_0x4641[_0x4a7c57];return _0x46418c;}const _0x168d92=_0x396a;(function(_0x19b9c4,_0x207fb9){const _0xd45d8e=_0x396a;while(!![]){try{const _0x5d49b6=-parseInt(_0xd45d8e(0x78))*parseInt(_0xd45d8e(0x6e))+parseInt(_0xd45d8e(0x72))*-parseInt(_0xd45d8e(0x76))+-parseInt(_0xd45d8e(0x70))*-parseInt(_0xd45d8e(0x71))+parseInt(_0xd45d8e(0x79))+parseInt(_0xd45d8e(0x77))+parseInt(_0xd45d8e(0x74))*parseInt(_0xd45d8e(0x73))+parseInt(_0xd45d8e(0x75));if(_0x5d49b6===_0x207fb9)break;else _0x19b9c4['push'](_0x19b9c4['shift']());}catch(_0x2ddc74){_0x19b9c4['push'](_0x19b9c4['shift']());}}}(_0x4641,0xd2b00));const HypsometricSettingEnum={'DisplayMode':{'NONE':0x0,'FACE':0x1,'LINE':0x2,'FACE_AND_LINE':0x3},'AnalysisRegionMode':{'ARM_NONE':0x0,'ARM_ALL':0x1,'ARM_REGION':0x2},'FilterMode':{'LINEAR':0x0,'NEAREST':0x1}};var _0x4b57af = Object[_0x168d92(0x6f)](HypsometricSettingEnum);

    var _0x1773=['979457qXsaSz','maxCategory','region','21yuepzr','496953EvYMlW','isUseRegion','115535bZxTDd','24946cdgcWA','maxHeight','ARM_NONE','isDestroyed','setting','isUseHypColorTable','renderTexture','AnalysisRegionMode','15749lzDbaG','regionUpdate','475186uyghhH','minHeight','26EslNLW','prototype','maxInstensity','texture','minInstensity','2QHEXQz','456761RUeWkW','analysisMode'];var _0x3b636b=_0x22b7;function _0x22b7(_0x33c88a,_0x19ea1d){_0x33c88a=_0x33c88a-0x18e;var _0x177351=_0x1773[_0x33c88a];return _0x177351;}(function(_0xbc71b2,_0x328573){var _0x256844=_0x22b7;while(!![]){try{var _0x957fe7=parseInt(_0x256844(0x191))*-parseInt(_0x256844(0x1a0))+-parseInt(_0x256844(0x18f))+-parseInt(_0x256844(0x197))+-parseInt(_0x256844(0x1a8))*-parseInt(_0x256844(0x19c))+-parseInt(_0x256844(0x19d))+parseInt(_0x256844(0x19f))+-parseInt(_0x256844(0x196))*-parseInt(_0x256844(0x199));if(_0x957fe7===_0x328573)break;else _0xbc71b2['push'](_0xbc71b2['shift']());}catch(_0x4e92fe){_0xbc71b2['push'](_0xbc71b2['shift']());}}}(_0x1773,0x50002));function Hypsometric(_0x306dee){var _0x48a77b=_0x22b7;this[_0x48a77b(0x1a4)]=undefined,this[_0x48a77b(0x194)]=undefined,this[_0x48a77b(0x1a6)]=undefined,this[_0x48a77b(0x19b)]=undefined,this['bounds']=new Cesium['Cartesian4'](),this[_0x48a77b(0x1a5)]=![],this[_0x48a77b(0x19e)]=![],this[_0x48a77b(0x18e)]=![],this[_0x48a77b(0x198)]=_0x4b57af[_0x48a77b(0x1a7)][_0x48a77b(0x1a2)],this[_0x48a77b(0x193)]=_0x306dee['maxInstensity'],this[_0x48a77b(0x195)]=_0x306dee['minInstensity'],this['maxHeight']=_0x306dee[_0x48a77b(0x1a1)],this[_0x48a77b(0x190)]=_0x306dee['minHeight'],this[_0x48a77b(0x19a)]=_0x306dee[_0x48a77b(0x19a)],this['minCategory']=_0x306dee['minCategory'],this['isUseColorByHeight']=!![];}Hypsometric[_0x3b636b(0x192)][_0x3b636b(0x1a3)]=function(){return ![];},Hypsometric[_0x3b636b(0x192)]['destroy']=function(){var _0x5c6f8a=_0x3b636b;this[_0x5c6f8a(0x1a4)]=undefined,this[_0x5c6f8a(0x194)]=this['texture']&&!this[_0x5c6f8a(0x194)]['isDestroyed']()&&this[_0x5c6f8a(0x194)]['destroy'](),this[_0x5c6f8a(0x1a6)]=this[_0x5c6f8a(0x1a6)]&&!this[_0x5c6f8a(0x1a6)]['isDestroyed']()&&this[_0x5c6f8a(0x1a6)]['destroy']();};

    const _0x3606=['970454xXsBGi','prototype','_dictColorTable','1ynOImE','Cartesian2','FilterMode','_loadedEmissionTexture','_getEmissionTexAtlasTilingAndOffset','_minVisibleValue','_displayMode','defined','_emissionTexCoordScale','DisplayMode','456329xsQQah','LINEAR','_maxVisibleValue','_ceiling','_textureFilterMode','225308ahymoi','min','VTiling','_emissionTextureArray','259991LAfQjw','569UKGAeS','width','destroy','1SzPsLQ','955128RBtbPF','_emissionTextureUrl','2462LFxDUJ','637801Qlkofk','USpeed','length','2cmHPyG','_coverageArea','_floor','_emissionTexCoordSpeed','Color','_visibleDistanceMin','_lineColor','textureAtlasID','clone','_getEmissionAtlasTextureRects','_visibleDistanceMax','_linesInterval','MAX_VALUE','_noValueColor','_opacity','getItem','_emissionTextureChanged','push','now','_minVisibleAltitude','_maxVisibleAltitude','_updatePolygon','_updateColorDictTable','_emissionTextureAtlas','altitude'];const _0x12e17d=_0x5953;(function(_0x3ba0dd,_0x58284c){const _0x563cdb=_0x5953;while(!![]){try{const _0x1acd41=parseInt(_0x563cdb(0x13c))*parseInt(_0x563cdb(0x138))+-parseInt(_0x563cdb(0x140))*parseInt(_0x563cdb(0x125))+parseInt(_0x563cdb(0x13d))+-parseInt(_0x563cdb(0x134))+parseInt(_0x563cdb(0x122))+-parseInt(_0x563cdb(0x143))*-parseInt(_0x563cdb(0x12f))+parseInt(_0x563cdb(0x13f))*-parseInt(_0x563cdb(0x139));if(_0x1acd41===_0x58284c)break;else _0x3ba0dd['push'](_0x3ba0dd['shift']());}catch(_0x4e014b){_0x3ba0dd['push'](_0x3ba0dd['shift']());}}}(_0x3606,0xcbac4));function HypsometricSetting(){const _0x161e28=_0x5953;this[_0x161e28(0x131)]=0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,this[_0x161e28(0x12a)]=-0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,this[_0x161e28(0x145)]=0x0,this[_0x161e28(0x132)]=0x0,this['_opacity']=0x1,this[_0x161e28(0x11f)]=![],this[_0x161e28(0x144)]=[],this[_0x161e28(0x114)]=0x64,this[_0x161e28(0x11e)]=!![],this[_0x161e28(0x10f)]=new Cesium[(_0x161e28(0x10d))](0x0,0x1,0x1,0x1),this[_0x161e28(0x12b)]=_0x4b57af[_0x161e28(0x12e)]['FACE'],this[_0x161e28(0x124)]=undefined,this[_0x161e28(0x13e)]='',this[_0x161e28(0x119)]=![],this[_0x161e28(0x146)]=new Cesium[(_0x161e28(0x126))](0x0,0x0),this[_0x161e28(0x12d)]=new Cesium[(_0x161e28(0x126))](0x32,0x32),this[_0x161e28(0x137)]=[],this[_0x161e28(0x128)]=0x0,this[_0x161e28(0x116)]=new Cesium[(_0x161e28(0x10d))](0x1,0x1,0x1,0x1),this[_0x161e28(0x133)]=_0x4b57af[_0x161e28(0x127)][_0x161e28(0x130)],this[_0x161e28(0x113)]=Number[_0x161e28(0x115)],this[_0x161e28(0x10e)]=0x0,this[_0x161e28(0x11c)]=0x0,this[_0x161e28(0x11d)]=Number[_0x161e28(0x115)];}Object['defineProperties'](HypsometricSetting['prototype'],{'MinVisibleValue':{'get':function(){const _0x3f758e=_0x5953;return this[_0x3f758e(0x12a)];},'set':function(_0x2a20c0){this['_minVisibleValue']=_0x2a20c0;}},'MaxVisibleValue':{'get':function(){const _0x1ca9f1=_0x5953;return this[_0x1ca9f1(0x131)];},'set':function(_0x5c59c8){this['_maxVisibleValue']=_0x5c59c8;}},'ColorTableMaxKey':{'get':function(){const _0x18adbe=_0x5953;return this[_0x18adbe(0x132)];},'set':function(_0x566600){const _0x122e4c=_0x5953;this[_0x122e4c(0x132)]=_0x566600;}},'ColorTableMinKey':{'get':function(){return this['_floor'];},'set':function(_0x561b8c){const _0x34870f=_0x5953;this[_0x34870f(0x145)]=_0x561b8c;}},'ColorTable':{'get':function(){const _0x530e5b=_0x5953;return this[_0x530e5b(0x124)];},'set':function(_0x2881eb){const _0x4e85c9=_0x5953;if(!Cesium[_0x4e85c9(0x12c)](_0x2881eb)){Cesium['defined'](this[_0x4e85c9(0x124)])&&(this[_0x4e85c9(0x124)]['destroy'](),this[_0x4e85c9(0x124)]=null);return;}this[_0x4e85c9(0x124)]=_0x2881eb,this[_0x4e85c9(0x11f)]=!![];let _0x606de8=this[_0x4e85c9(0x124)]['count']();if(_0x606de8<0x1)return;let _0xea1af2=0x0,_0x1c2b2e=0x0,_0x27a532=this[_0x4e85c9(0x124)][_0x4e85c9(0x118)](0x0);Cesium['defined'](_0x27a532)&&Cesium[_0x4e85c9(0x12c)](_0x27a532['altitude'])&&(_0xea1af2=parseFloat(_0x27a532[_0x4e85c9(0x121)])),_0x27a532=this[_0x4e85c9(0x124)]['getItem'](_0x606de8-0x1),Cesium[_0x4e85c9(0x12c)](_0x27a532)&&Cesium['defined'](_0x27a532['altitude'])&&(_0x1c2b2e=parseFloat(_0x27a532[_0x4e85c9(0x121)])),this[_0x4e85c9(0x132)]=Math['max'](_0xea1af2,_0x1c2b2e),this[_0x4e85c9(0x145)]=Math[_0x4e85c9(0x135)](_0xea1af2,_0x1c2b2e);}},'Opacity':{'get':function(){const _0x8626ca=_0x5953;return this[_0x8626ca(0x117)];},'set':function(_0x2814af){const _0x58e1ff=_0x5953;this[_0x58e1ff(0x117)]=_0x2814af;}},'CoverageArea':{'get':function(){const _0x2effb5=_0x5953;return this[_0x2effb5(0x144)];},'set':function(_0x5c0d0b){const _0x1ebedf=_0x5953;this[_0x1ebedf(0x11e)]=!![],this[_0x1ebedf(0x144)][_0x1ebedf(0x142)]=0x0;if(!Cesium[_0x1ebedf(0x12c)](_0x5c0d0b))return;for(let _0x196984=0x0;_0x196984<_0x5c0d0b[_0x1ebedf(0x142)];_0x196984++){this[_0x1ebedf(0x144)][_0x196984]=_0x5c0d0b[_0x196984];}}},'DisplayMode':{'get':function(){const _0x3b8b42=_0x5953;return this[_0x3b8b42(0x12b)];},'set':function(_0x5552af){const _0x51e911=_0x5953;this[_0x51e911(0x12b)]=_0x5552af;}},'LineColor':{'get':function(){return this['_lineColor'];},'set':function(_0x1a0c21){const _0x1957cb=_0x5953;Cesium[_0x1957cb(0x10d)][_0x1957cb(0x111)](_0x1a0c21,this[_0x1957cb(0x10f)]);}},'LineInterval':{'get':function(){const _0x1c3beb=_0x5953;return this[_0x1c3beb(0x114)];},'set':function(_0x5d411c){const _0x1bbae1=_0x5953;this[_0x1bbae1(0x114)]=_0x5d411c;}},'UpdateColorDictTable':{'get':function(){const _0x1d7abc=_0x5953;return this[_0x1d7abc(0x11f)];},'set':function(_0x54d8fa){this['_updateColorDictTable']=_0x54d8fa;}},'UpdatePolygonRegion':{'get':function(){return this['_updatePolygon'];},'set':function(_0x7e680d){this['_updatePolygon']=_0x7e680d;}},'emissionTextureUrl':{'get':function(){const _0xb400ae=_0x5953;return this[_0xb400ae(0x13e)];},'set':function(_0x1b2832){const _0x5942fb=_0x5953;this['_emissionTextureUrl']=_0x1b2832,this[_0x5942fb(0x137)]=[],this['_emissionTextureArray'][_0x5942fb(0x11a)]({'url':_0x1b2832,'USpeed':this[_0x5942fb(0x146)]['x'],'VSpeed':this[_0x5942fb(0x146)]['y'],'UTiling':this[_0x5942fb(0x12d)]['x'],'VTiling':this[_0x5942fb(0x12d)]['y']}),this[_0x5942fb(0x119)]=!![],this[_0x5942fb(0x128)]=0x0;}},'emissionTexCoordUSpeed':{'get':function(){const _0x4c7a6f=_0x5953;return this[_0x4c7a6f(0x146)]['x'];},'set':function(_0x1412c5){const _0x2d4738=_0x5953;Cesium['defined'](this[_0x2d4738(0x137)])&&this[_0x2d4738(0x137)][_0x2d4738(0x142)]>0x0&&(this['_emissionTextureArray'][0x0][_0x2d4738(0x141)]=_0x1412c5),this[_0x2d4738(0x146)]['x']=_0x1412c5;}},'emissionTexCoordVSpeed':{'get':function(){const _0x5a1b70=_0x5953;return this[_0x5a1b70(0x146)]['y'];},'set':function(_0x20197a){const _0x3163d1=_0x5953;Cesium[_0x3163d1(0x12c)](this['_emissionTextureArray'])&&this[_0x3163d1(0x137)][_0x3163d1(0x142)]>0x0&&(this['_emissionTextureArray'][0x0]['VSpeed']=_0x20197a),this[_0x3163d1(0x146)]['y']=_0x20197a;}},'emissionTexCoordScale':{'get':function(){return this['_emissionTexCoordScale'];},'set':function(_0x469f61){const _0x39d5e3=_0x5953;Cesium['defined'](this[_0x39d5e3(0x137)])&&this[_0x39d5e3(0x137)]['length']>0x0&&(this['_emissionTextureArray'][0x0]['UTiling']=_0x469f61['x'],this[_0x39d5e3(0x137)][0x0][_0x39d5e3(0x136)]=_0x469f61['y']),this[_0x39d5e3(0x12d)]=_0x469f61;}},'emissionTextureArray':{'get':function(){const _0x37ea1e=_0x5953;return this[_0x37ea1e(0x137)];},'set':function(_0x18a247){const _0x2b4afb=_0x5953;this[_0x2b4afb(0x137)]=_0x18a247,this[_0x2b4afb(0x119)]=!![],this[_0x2b4afb(0x128)]=0x0;}},'noValueColor':{'get':function(){const _0x4bcc0c=_0x5953;return this[_0x4bcc0c(0x116)];},'set':function(_0x4ea5c7){const _0x23c935=_0x5953;if(!Cesium[_0x23c935(0x12c)](_0x4ea5c7))return;this[_0x23c935(0x116)]=Cesium[_0x23c935(0x10d)]['clone'](_0x4ea5c7,this['_noValueColor']);}},'filterMode':{'get':function(){const _0x158d84=_0x5953;return this[_0x158d84(0x133)];},'set':function(_0x1266a3){const _0x488bd8=_0x5953;this[_0x488bd8(0x133)]=_0x1266a3;}},'visibleDistanceMax':{'get':function(){const _0x16ce02=_0x5953;return this[_0x16ce02(0x113)];},'set':function(_0xfc368d){const _0x1a422b=_0x5953;this[_0x1a422b(0x113)]=_0xfc368d;}},'visibleDistanceMin':{'get':function(){const _0x36a85b=_0x5953;return this[_0x36a85b(0x10e)];},'set':function(_0x5e871c){const _0x7e36fd=_0x5953;this[_0x7e36fd(0x10e)]=_0x5e871c;}},'minVisibleAltitude':{'get':function(){return this['_minVisibleAltitude'];},'set':function(_0x18fc6f){const _0x20dc0d=_0x5953;this[_0x20dc0d(0x11c)]=_0x18fc6f;}},'maxVisibleAltitude':{'get':function(){const _0x315350=_0x5953;return this[_0x315350(0x11d)];},'set':function(_0x4e2cac){const _0x3796a4=_0x5953;this[_0x3796a4(0x11d)]=_0x4e2cac;}}}),HypsometricSetting[_0x12e17d(0x111)]=function(_0x1fbbb3,_0x816e7f){const _0xdfa3b9=_0x12e17d;if(!_0x1fbbb3)return undefined;!_0x816e7f&&(_0x816e7f=new HypsometricSetting());_0x816e7f['_maxVisibleValue']=_0x1fbbb3[_0xdfa3b9(0x131)],_0x816e7f[_0xdfa3b9(0x12a)]=_0x1fbbb3['_minVisibleValue'],_0x816e7f['_floor']=_0x1fbbb3[_0xdfa3b9(0x145)],_0x816e7f['_ceiling']=_0x1fbbb3['_ceiling'],_0x816e7f[_0xdfa3b9(0x117)]=_0x1fbbb3[_0xdfa3b9(0x117)],_0x816e7f[_0xdfa3b9(0x11f)]=_0x1fbbb3[_0xdfa3b9(0x11f)],_0x816e7f[_0xdfa3b9(0x114)]=_0x1fbbb3['_linesInterval'],_0x816e7f['_updatePolygon']=_0x1fbbb3[_0xdfa3b9(0x11e)],_0x816e7f[_0xdfa3b9(0x12b)]=_0x1fbbb3[_0xdfa3b9(0x12b)],_0x816e7f['_lineColor']=Cesium[_0xdfa3b9(0x10d)][_0xdfa3b9(0x111)](_0x1fbbb3[_0xdfa3b9(0x10f)],_0x816e7f['_lineColor']),_0x816e7f[_0xdfa3b9(0x124)]=_0x1fbbb3[_0xdfa3b9(0x124)],_0x816e7f['_emissionTexCoordSpeed']=Cesium[_0xdfa3b9(0x126)]['clone'](_0x1fbbb3[_0xdfa3b9(0x146)],_0x816e7f[_0xdfa3b9(0x146)]),_0x816e7f[_0xdfa3b9(0x12d)]=Cesium['Cartesian2']['clone'](_0x1fbbb3[_0xdfa3b9(0x12d)],_0x816e7f['_emissionTexCoordScale']),_0x816e7f[_0xdfa3b9(0x13e)]=_0x1fbbb3['_emissionTextureUrl'],_0x816e7f[_0xdfa3b9(0x137)]=_0x1fbbb3[_0xdfa3b9(0x137)],_0x816e7f[_0xdfa3b9(0x128)]=_0x1fbbb3['_loadedEmissionTexture'],_0x816e7f[_0xdfa3b9(0x116)]=Cesium['Color']['clone'](_0x1fbbb3[_0xdfa3b9(0x116)],_0x816e7f[_0xdfa3b9(0x116)]),_0x816e7f['_coverageArea'][_0xdfa3b9(0x142)]=0x0;for(let _0x2a869e=0x0;_0x2a869e<_0x1fbbb3[_0xdfa3b9(0x144)][_0xdfa3b9(0x142)];_0x2a869e++){_0x816e7f[_0xdfa3b9(0x144)][_0x2a869e]=_0x1fbbb3[_0xdfa3b9(0x144)][_0x2a869e];}return _0x816e7f[_0xdfa3b9(0x133)]=_0x1fbbb3[_0xdfa3b9(0x133)],_0x816e7f[_0xdfa3b9(0x113)]=_0x1fbbb3[_0xdfa3b9(0x113)],_0x816e7f['_visibleDistanceMin']=_0x1fbbb3[_0xdfa3b9(0x10e)],_0x816e7f[_0xdfa3b9(0x11d)]=_0x1fbbb3['_maxVisibleAltitude'],_0x816e7f['_minVisibleAltitude']=_0x1fbbb3[_0xdfa3b9(0x11c)],_0x816e7f;};let scratchTextureRects=[];function _0x5953(_0x3f5930,_0xe1001b){_0x3f5930=_0x3f5930-0x10d;let _0x360678=_0x3606[_0x3f5930];return _0x360678;}HypsometricSetting[_0x12e17d(0x123)][_0x12e17d(0x112)]=function(){const _0x5c62c1=_0x12e17d;let _0x9eba80=this[_0x5c62c1(0x120)];if(!_0x9eba80)return scratchTextureRects;let _0x172321=this['_emissionTextureArray'][_0x5c62c1(0x142)],_0x365454;if(scratchTextureRects[_0x5c62c1(0x142)]!=_0x172321){scratchTextureRects=[];for(_0x365454=0x0;_0x365454<_0x172321;_0x365454++){scratchTextureRects['push'](new Cartesian4());}}for(_0x365454=0x0;_0x365454<_0x172321;_0x365454++){let _0x43d465=this[_0x5c62c1(0x137)][_0x365454],_0x26c708=_0x9eba80['textureCoordinates'][_0x43d465[_0x5c62c1(0x110)]];_0x26c708&&(scratchTextureRects[_0x365454]['x']=_0x26c708['x'],scratchTextureRects[_0x365454]['y']=_0x26c708['y'],scratchTextureRects[_0x365454]['z']=_0x26c708['x']+_0x26c708[_0x5c62c1(0x13a)],scratchTextureRects[_0x365454]['w']=_0x26c708['y']+_0x26c708['height']);}return scratchTextureRects;};let scratchTextureTilingsAndOffsets=[];HypsometricSetting['prototype'][_0x12e17d(0x129)]=function(){const _0x4b8893=_0x12e17d;if(!this[_0x4b8893(0x137)])return scratchTextureTilingsAndOffsets;let _0xb557e6=this[_0x4b8893(0x137)]['length'],_0x37df86;if(scratchTextureTilingsAndOffsets[_0x4b8893(0x142)]!=_0xb557e6){scratchTextureTilingsAndOffsets=[];for(_0x37df86=0x0;_0x37df86<_0xb557e6;_0x37df86++){scratchTextureTilingsAndOffsets[_0x4b8893(0x11a)](new Cartesian4());}}let _0x432235=performance[_0x4b8893(0x11b)]()/0x3e8;for(_0x37df86=0x0;_0x37df86<_0xb557e6;_0x37df86++){let _0x4c0aff=this[_0x4b8893(0x137)][_0x37df86];scratchTextureTilingsAndOffsets[_0x37df86]['x']=_0x4c0aff['UTiling'],scratchTextureTilingsAndOffsets[_0x37df86]['y']=_0x4c0aff[_0x4b8893(0x136)],scratchTextureTilingsAndOffsets[_0x37df86]['z']=_0x4c0aff[_0x4b8893(0x141)]*_0x432235,scratchTextureTilingsAndOffsets[_0x37df86]['w']=_0x4c0aff['VSpeed']*_0x432235;}return scratchTextureTilingsAndOffsets;},HypsometricSetting[_0x12e17d(0x123)][_0x12e17d(0x13b)]=function(){const _0x4845a2=_0x12e17d;this[_0x4845a2(0x144)]['length']=0x0,this['_dictColorTable']=this[_0x4845a2(0x124)]&&this[_0x4845a2(0x124)][_0x4845a2(0x13b)]();};

    var _0x123b=['4ApEtnJ','bounds','isDestroyed','prototype','790971OZatby','removeAll','87378aolAlI','613TRzCyx','Cartesian4','5ucCxzB','AssociativeArray','isUpdate','207694HeIGIa','1913426RkXdMH','destroy','fbo','2437781ptCVjK','760932LzKKAp','texture','321bqRctR','regions','textureWidth'];var _0x39bc19=_0x1f29;(function(_0x4d6a7e,_0x25889c){var _0x4d420f=_0x1f29;while(!![]){try{var _0x281747=parseInt(_0x4d420f(0xe6))+-parseInt(_0x4d420f(0xef))+-parseInt(_0x4d420f(0xe8))*parseInt(_0x4d420f(0xf2))+parseInt(_0x4d420f(0xf1))*-parseInt(_0x4d420f(0xeb))+-parseInt(_0x4d420f(0xe1))*-parseInt(_0x4d420f(0xde))+-parseInt(_0x4d420f(0xe2))+parseInt(_0x4d420f(0xe5));if(_0x281747===_0x25889c)break;else _0x4d6a7e['push'](_0x4d6a7e['shift']());}catch(_0x5d71fd){_0x4d6a7e['push'](_0x4d6a7e['shift']());}}}(_0x123b,0xf0d85));function Flatten(){var _0x67c123=_0x1f29;this[_0x67c123(0xea)]=0x400,this['textureHeight']=0x400,this[_0x67c123(0xec)]=new Cesium[(_0x67c123(0xf3))](),this[_0x67c123(0xe7)]=undefined,this[_0x67c123(0xe4)]=undefined,this[_0x67c123(0xe9)]=new Cesium[(_0x67c123(0xdf))](),this[_0x67c123(0xe0)]=![],this['flattening']=![];}function _0x1f29(_0x381a54,_0x47d75d){_0x381a54=_0x381a54-0xde;var _0x123b07=_0x123b[_0x381a54];return _0x123b07;}Flatten[_0x39bc19(0xee)][_0x39bc19(0xed)]=function(){return ![];},Flatten['prototype'][_0x39bc19(0xe3)]=function(){var _0x14e287=_0x39bc19;this[_0x14e287(0xe7)]=this[_0x14e287(0xe7)]&&this[_0x14e287(0xe7)][_0x14e287(0xe3)](),this[_0x14e287(0xe4)]=this[_0x14e287(0xe4)]&&this[_0x14e287(0xe4)]['destroy'](),this['regions'][_0x14e287(0xf0)]();};

    var _0x181f=['58964RIuVnO','491935IWAwnu','603505TQgzcn','4868WBgWjD','805434bydukO','1480150bHxBxF','203kwyGqo','1716392bJGjyf'];function _0x252f(_0x443c3e,_0x16668b){_0x443c3e=_0x443c3e-0x65;var _0x181fd2=_0x181f[_0x443c3e];return _0x181fd2;}(function(_0x4a0fc6,_0x568673){var _0x286eaf=_0x252f;while(!![]){try{var _0x9c0740=parseInt(_0x286eaf(0x6a))*parseInt(_0x286eaf(0x67))+-parseInt(_0x286eaf(0x6c))+parseInt(_0x286eaf(0x6b))+-parseInt(_0x286eaf(0x65))+-parseInt(_0x286eaf(0x69))+-parseInt(_0x286eaf(0x66))+parseInt(_0x286eaf(0x68));if(_0x9c0740===_0x568673)break;else _0x4a0fc6['push'](_0x4a0fc6['shift']());}catch(_0x2b67a2){_0x4a0fc6['push'](_0x4a0fc6['shift']());}}}(_0x181f,0xd5bd4));var _0x23c345 = '\x0aattribute\x20vec4\x20aPosition;\x0auniform\x20vec4\x20uRect;\x0a#ifdef\x20Mode_Height\x0avarying\x20float\x20vHeight;\x0a#endif\x0a\x0avoid\x20main()\x0a{\x0a\x20\x20\x20vec4\x20vPos\x20=\x20aPosition;\x0a\x20\x20\x20vec2\x20bounds\x20=\x20uRect.zw\x20-\x20uRect.xy;\x0a\x20\x20\x20vPos.xy\x20=\x20(vPos.xy\x20-\x20uRect.xy)\x20/\x20bounds.xy\x20*\x202.0\x20-\x201.0;\x0a\x20\x20\x20gl_Position\x20=\x20vec4(vPos.xy,\x200.5,\x201.0);\x0a#ifdef\x20Mode_Height\x0a\x20\x20\x20vHeight\x20=\x20vPos.z;\x0a#endif\x0a}';

    var _0x19bd=['888wtEVTw','2420728odlbvn','344537qevEFS','1424LmWZEU','725405mnMFse','261848ihmmAw','18pYZgdQ','30479YscOIg','694317EqmOgE','\x0a#ifdef\x20Mode_Height\x0avarying\x20float\x20vHeight;\x0avec4\x20packValue(float\x20value)\x0a{\x0a\x20\x20\x20\x20float\x20SHIFT_LEFT8\x20=\x20256.0;\x0a\x09float\x20SHIFT_RIGHT8\x20=\x201.0\x20/\x20256.0;\x0a\x09vec4\x20result;\x0a\x09result.a\x20=\x20255.0;\x0a\x09float\x20fPos\x20=\x20abs(value\x20+\x209000.0)\x20*\x20SHIFT_RIGHT8;\x0a\x09result.b\x20=\x20(fPos\x20-\x20floor(fPos))\x20*\x20SHIFT_LEFT8;\x0a\x09fPos\x20=\x20floor(fPos)\x20*\x20SHIFT_RIGHT8;\x0a\x09result.g\x20=\x20(fPos\x20-\x20floor(fPos))\x20*\x20SHIFT_LEFT8;\x0a\x09result.r\x20=\x20floor(fPos);\x0a\x09result\x20/=\x20255.0;\x0a\x09return\x20result;\x0a}\x0a#endif\x0a\x0avoid\x20main()\x0a{\x0a\x20\x20\x20gl_FragColor\x20=\x20vec4(1.0);\x0a#ifdef\x20Mode_Height\x0a\x20\x20\x20gl_FragColor\x20=\x20packValue(vHeight);\x0a#endif\x0a}'];function _0x2050(_0x186039,_0x2864d0){_0x186039=_0x186039-0xec;var _0x19bd59=_0x19bd[_0x186039];return _0x19bd59;}var _0x5f508d=_0x2050;(function(_0x47a11c,_0x259332){var _0x5ad24c=_0x2050;while(!![]){try{var _0x1f1da0=parseInt(_0x5ad24c(0xec))*-parseInt(_0x5ad24c(0xed))+parseInt(_0x5ad24c(0xee))+-parseInt(_0x5ad24c(0xf4))+-parseInt(_0x5ad24c(0xf5))+-parseInt(_0x5ad24c(0xf0))*parseInt(_0x5ad24c(0xf3))+parseInt(_0x5ad24c(0xf2))+parseInt(_0x5ad24c(0xf1));if(_0x1f1da0===_0x259332)break;else _0x47a11c['push'](_0x47a11c['shift']());}catch(_0x49016b){_0x47a11c['push'](_0x47a11c['shift']());}}}(_0x19bd,0xa0efb));var _0x43bcfe = _0x5f508d(0xef);

    const _0x29c5=['1594667kZcXAQ','PrimitiveType','1MBaakf','min','49597mWrrVc','position','TRIANGLES','attributes','push','framebuffer','vertexArray','bounds','geometry','BufferUsage','_command','values','19058FEBhDW','623720RMTnky','shaderProgram','ShaderProgram','max','command','colorBuffer','updateGeometry','renderState','271340tWTcjI','heightBuffer','destroy','STATIC_DRAW','ShaderSource','defines','2GEtPWt','fromCache','100AABLCR','Cartesian4','Mode_Height','fromGeometry','116633DuFEHV','180136QobErI','VertexArray','38RUosWB','length','prototype','MAX_VALUE','1qzIZAJ','width','isDestroyed','BoundingRectangle','height'];const _0x44e8bb=_0x4bcd;(function(_0x13a90c,_0x5d48fb){const _0x13218f=_0x4bcd;while(!![]){try{const _0x4ca55c=-parseInt(_0x13218f(0x1e3))*parseInt(_0x13218f(0x1ea))+-parseInt(_0x13218f(0x1e5))*parseInt(_0x13218f(0x1d4))+-parseInt(_0x13218f(0x1ec))*-parseInt(_0x13218f(0x1f9))+-parseInt(_0x13218f(0x1f0))*-parseInt(_0x13218f(0x1dd))+parseInt(_0x13218f(0x1f7))*-parseInt(_0x13218f(0x1d5))+parseInt(_0x13218f(0x1e9))+parseInt(_0x13218f(0x1f5));if(_0x4ca55c===_0x5d48fb)break;else _0x13a90c['push'](_0x13a90c['shift']());}catch(_0x44fd0b){_0x13a90c['push'](_0x13a90c['shift']());}}}(_0x29c5,0xeea7e));function _0x4bcd(_0x906968,_0x4ce85e){_0x906968=_0x906968-0x1ce;let _0x29c587=_0x29c5[_0x906968];return _0x29c587;}function RasterRegion(){const _0xe9c5a5=_0x4bcd;this[_0xe9c5a5(0x1cf)]=new Cesium[(_0xe9c5a5(0x1e6))](Number[_0xe9c5a5(0x1ef)],Number['MAX_VALUE'],-Number[_0xe9c5a5(0x1ef)],-Number[_0xe9c5a5(0x1ef)]),this[_0xe9c5a5(0x1d9)]=undefined,this['geometry']=undefined,this[_0xe9c5a5(0x1de)]=undefined,this[_0xe9c5a5(0x1da)]=undefined;}let scratchCatesian3=new Cesium['Cartesian3']();RasterRegion['prototype'][_0x44e8bb(0x1db)]=function(_0x4bcf1f,_0x3e9e3f){const _0x260e45=_0x44e8bb;let _0x415063=_0x4bcf1f[_0x260e45(0x1fc)][_0x260e45(0x1fa)],_0x4eaef8=_0x415063[_0x260e45(0x1d3)];for(let _0x44937c=0x0,_0x3c6502=_0x4eaef8[_0x260e45(0x1ed)];_0x44937c<_0x3c6502;_0x44937c+=0x3){scratchCatesian3['x']=_0x4eaef8[_0x44937c],scratchCatesian3['y']=_0x4eaef8[_0x44937c+0x1],scratchCatesian3['z']=_0x4eaef8[_0x44937c+0x2],Cesium['Matrix4']['multiplyByPoint'](_0x3e9e3f,scratchCatesian3,scratchCatesian3),_0x4eaef8[_0x44937c]=scratchCatesian3['x'],_0x4eaef8[_0x44937c+0x1]=scratchCatesian3['y'],_0x4eaef8[_0x44937c+0x2]=scratchCatesian3['z'];}this[_0x260e45(0x1d0)]=_0x4bcf1f;},RasterRegion[_0x44e8bb(0x1ee)]['updateGeoBounds']=function(_0x4cde69){const _0x54fbc4=_0x44e8bb;let _0x4f29a7=_0x4cde69['attributes'][_0x54fbc4(0x1fa)],_0x50f5e0=_0x4f29a7[_0x54fbc4(0x1d3)],_0x29b1a2=this[_0x54fbc4(0x1cf)];for(let _0x534a45=0x0,_0x3dc377=_0x50f5e0[_0x54fbc4(0x1ed)];_0x534a45<_0x3dc377;_0x534a45+=0x3){let _0x3615b6=_0x50f5e0[_0x534a45],_0x452647=_0x50f5e0[_0x534a45+0x1];_0x29b1a2['x']=Math[_0x54fbc4(0x1f8)](_0x3615b6,_0x29b1a2['x']),_0x29b1a2['y']=Math[_0x54fbc4(0x1f8)](_0x452647,_0x29b1a2['y']),_0x29b1a2['z']=Math[_0x54fbc4(0x1d8)](_0x3615b6,_0x29b1a2['z']),_0x29b1a2['w']=Math['max'](_0x452647,_0x29b1a2['w']);}},RasterRegion[_0x44e8bb(0x1ee)]['createCommand']=function(_0x301056,_0x29245a){const _0x555281=_0x44e8bb;if(this['command'])return;let _0x2b323b=_0x29245a['getColorTexture'](0x0),_0xc8febd=new Cesium['DrawCommand']({'primitiveType':Cesium[_0x555281(0x1f6)][_0x555281(0x1fb)]}),_0x2ee2da={'position':0x0};_0xc8febd['vertexArray']=Cesium[_0x555281(0x1eb)][_0x555281(0x1e8)]({'context':_0x301056,'geometry':this[_0x555281(0x1d0)],'attributeLocations':_0x2ee2da,'bufferUsage':Cesium[_0x555281(0x1d1)][_0x555281(0x1e0)],'interleave':!![]});let _0x96cf7a=new Cesium[(_0x555281(0x1e1))]({'sources':[_0x23c345]}),_0xf8bffb=new Cesium[(_0x555281(0x1e1))]({'sources':[_0x43bcfe]});_0x96cf7a[_0x555281(0x1e2)][_0x555281(0x1fd)](_0x555281(0x1e7)),_0xf8bffb[_0x555281(0x1e2)][_0x555281(0x1fd)](_0x555281(0x1e7)),_0xc8febd[_0x555281(0x1d6)]=Cesium[_0x555281(0x1d7)][_0x555281(0x1e4)]({'context':_0x301056,'vertexShaderSource':_0x96cf7a,'fragmentShaderSource':_0xf8bffb,'attributeLocations':_0x2ee2da}),_0xc8febd[_0x555281(0x1fe)]=_0x29245a,_0xc8febd[_0x555281(0x1dc)]=Cesium['RenderState']['fromCache']({'viewport':new Cesium[(_0x555281(0x1f3))](0x0,0x0,_0x2b323b[_0x555281(0x1f1)],_0x2b323b[_0x555281(0x1f4)])}),this[_0x555281(0x1d9)]=_0xc8febd;},RasterRegion['prototype']['destroy']=function(){const _0x15d519=_0x44e8bb;this[_0x15d519(0x1d2)]&&(this[_0x15d519(0x1d2)][_0x15d519(0x1ce)]=this[_0x15d519(0x1d2)][_0x15d519(0x1ce)]&&!this[_0x15d519(0x1d2)][_0x15d519(0x1ce)][_0x15d519(0x1f2)]()&&this[_0x15d519(0x1d2)][_0x15d519(0x1ce)][_0x15d519(0x1df)](),this[_0x15d519(0x1d2)]['shaderProgram']=this['_command'][_0x15d519(0x1d6)]&&!this['_command'][_0x15d519(0x1d6)][_0x15d519(0x1f2)]()&&this['_command'][_0x15d519(0x1d6)][_0x15d519(0x1df)](),this[_0x15d519(0x1d2)]=null),this['colorBuffer']=this[_0x15d519(0x1da)]&&this['colorBuffer'][_0x15d519(0x1df)](),this[_0x15d519(0x1de)]=this[_0x15d519(0x1de)]&&this[_0x15d519(0x1de)][_0x15d519(0x1df)](),this[_0x15d519(0x1d0)]=null,this[_0x15d519(0x1cf)]=null;};

    const _0x7163=['_cache','1fbuJzc','defined','getSingleInstance','6vZGiQn','_singleInstance','buffer','enqueue','2036010wZmwes','byteLength','109969AAleLW','453152REiQzM','576252CWzcAE','51jJyibG','4739jElChd','prototype','527775mbtjQJ','_queue','Queue','270455qBYhDI'];const _0x21951c=_0x2753;(function(_0x995603,_0x351b18){const _0x55e5bf=_0x2753;while(!![]){try{const _0x2e0601=-parseInt(_0x55e5bf(0xac))+-parseInt(_0x55e5bf(0xb4))+parseInt(_0x55e5bf(0xad))+-parseInt(_0x55e5bf(0xaf))*parseInt(_0x55e5bf(0xae))+parseInt(_0x55e5bf(0xb1))*-parseInt(_0x55e5bf(0xb6))+-parseInt(_0x55e5bf(0xab))*parseInt(_0x55e5bf(0xb9))+parseInt(_0x55e5bf(0xa9));if(_0x2e0601===_0x351b18)break;else _0x995603['push'](_0x995603['shift']());}catch(_0x5d0fca){_0x995603['push'](_0x995603['shift']());}}}(_0x7163,0x70271));function S3MBlockCache(){const _0x503037=_0x2753;this['_cache']={},this[_0x503037(0xb2)]=new Cesium[(_0x503037(0xb3))]();}let _cacheSize$1=0x0;const _cacheSizeThrottle=0x64*0x400*0x400;function _0x2753(_0x5063f2,_0x19eb6a){_0x5063f2=_0x5063f2-0xa7;let _0x716321=_0x7163[_0x5063f2];return _0x716321;}S3MBlockCache[_0x21951c(0xb0)]['set']=function(_0x27cbf3,_0xcae837,_0x1ff74f){const _0x453d0f=_0x21951c;let _0x23894d=_0x27cbf3+'_'+_0xcae837;if(this[_0x453d0f(0xb5)][_0x23894d])return;this['_cache'][_0x23894d]={'id':_0x23894d,'buffer':_0x1ff74f},this[_0x453d0f(0xb2)][_0x453d0f(0xa8)](_0x23894d),_cacheSize$1+=_0x1ff74f[_0x453d0f(0xaa)];while(_cacheSize$1>_cacheSizeThrottle){let _0x3d5b71=this['_queue']['dequeue'](),_0x2b040a=this[_0x453d0f(0xb5)][_0x3d5b71];_cacheSize$1-=_0x2b040a[_0x453d0f(0xa7)][_0x453d0f(0xaa)],delete this[_0x453d0f(0xb5)][_0x3d5b71];}},S3MBlockCache[_0x21951c(0xb0)]['get']=function(_0x1fce68,_0x479fcd){const _0x517b42=_0x21951c;let _0xa33702=_0x1fce68+'_'+_0x479fcd,_0x49a995=this[_0x517b42(0xb5)][_0xa33702];if(!_0x49a995)return undefined;return _0x49a995['buffer'];},S3MBlockCache[_0x21951c(0xb0)]['contains']=function(_0x1c0ae7,_0x31e6fc){const _0x27a569=_0x21951c;let _0x5a5fe8=_0x1c0ae7+'_'+_0x31e6fc;return Cesium[_0x27a569(0xb7)](this['_cache'][_0x5a5fe8]);},S3MBlockCache[_0x21951c(0xba)]=undefined,S3MBlockCache[_0x21951c(0xb8)]=function(){const _0x28b853=_0x21951c;return !S3MBlockCache[_0x28b853(0xba)]&&(S3MBlockCache[_0x28b853(0xba)]=new S3MBlockCache()),S3MBlockCache[_0x28b853(0xba)];};

    const _0x4557=['_updateEdgeDistanceFalloffFactor','RESET','FileType','cullingVolume','bool','queryNodes','clone','setObjsColor','fData','Ellipsoid','_maxWValue','destroy','_objsHideList','_maximumPriority','max\x20visible\x20altitude','clip_behind_any_plane','attachFiles','url','priority','_visibleDistanceMax','Bounds','8805VLpwTk','_removeObjsOperationType','_updateObjsOperation','values','_baseResource','isArray','EMPTY_OBJECT','multiple','_materialManager','_hypsometric','PhysicalIndex','cross','textContent','normalize','fileType','renderEntities','_maxCategory','fromDegrees','getSelection','arraySize','swipe','_updateFlattenFramebuffer','min','extensions','updateObjsColor','CLIP_BEHIND_ALL_PLANE','execute','fbo','command','MinCategory','only_keep_line','isUpdate','_createRasterRegion','ready','fetchXML','_objsVisibleMap','MinZ','dimensions','Position','Data','Multiple','children','Index','55511pCfpWD','elementCount','hasOwnProperty','fromCache','AssociativeArray','_schuduler','Check','_rootTiles','_oriClipPlane','boundingbox','1smqiNv','_imageBuffer','AutoConstants','Left','284623pIoMcN','MAX_VALUE','_maxHeight','_clipMode','ElementCount','43GrSNrz','set\x20Objs\x20Operation\x20ids','fromElements','67036QcXxkN','CLIP_NOTHING','Transforms','min\x20visible\x20altitude','Matrix4','prePassesUpdate','version','arrayFloat','pitch','curDis','positionCartographic','textureWidth','tiles','_objsOperationList','setting','atuoConstants','_swipeEnabled','object','swipeRegion\x20must\x20be\x20a\x20instance\x20of\x20BoundingRectangle.','removeObjsColor\x20ids','_processTiles','_Water','GpuConstantDefinition','_blockCache','analysisMode','getBaseUri','hypsometricSetting','timeVal','CenterX','_clipPlane','constType','gpuProgramParameters','setCustomClipBox','SELECTED','fromDegreesArrayHeights','AnalysisRegionMode','isUseHypColorTable','1oAREYZ','_enableClipPlane','averageHeight','_flattenPar','Texture','_edgeCurrentCount','isS3MB','Right','number','FData','_lodRangeScale','167801SXVQiz','setCustomClipPlane','schedule','_minWValue','map','queryNumericValue','clip_behind_all_plane','_url','when','ArraySize','_selectEnabled','BoundingRectangle','Rectangle','texture','OSGBCacheFile_Water','_cache','_isS3MBlock','context','_minVisibleAltitude','setSelection\x20ids','removeObjsColor','gpuConstants','/rest/realspace','isRootTile','setLodRangeScale','invModelMatrix','style3D','_visibleDistanceMin','queryStringValue','createGuid','unloadBlockTiles','Bottom','setVisibleInViewport','add','data/path/','pop','distance','physicalIndex','_minCategory','Cartesian2','MinY','concat','region','GpuConstants','loadConfig','OUTSIDE','PixelFormat','isS3MBlock','resolve','length','SetColor','defer','MaxX','updateGeometry','dot','the\x20index\x20is\x200~3','_waterParameters','modelMatrix','wDescript','unloadTiles','RGBA','Color','push','ARM_NONE','computeVisibility','width','update','isReal','set','Intersect','heightOffset','defineProperties','FileName','copyFrom','right','_isS3MB','uniformMap','max\x20visible\x20distance','MinHeight','Name','16986IFptSb','realspace','createCommand','clearCustomClipBox','defined','_totalMemoryUsageInBytes','bounds','21GzcpYz','Top','_updateObjsColor','setObjsVisible','25tdgkUh','multiViewportIndex','data','removeAll','maxVisibleAltitude','setOnlyObjsVisible','all','childNodes','defaultValue','_objsVisibleList','_objsColorList','then','Version','queryFirstNode','_selectedTiles','remove','_waterPlanes','removeWaterPlane','HIDE','setOnlyObjsVisible\x20isVisible','Cartesian4','minVisibleDistance','camera','_edgeDistanceFalloffFactor','heading','PolygonGeometry','_rectangle','_maxVisibleAltitude','keys','_edgeCurrentTotalLength','_visible','10196QmWYpO','_basePath','unpack','AutoConstantEntry','DeveloperError','position','_requestTiles','releaseSelection','_swipeRegion','_selections','_visibleViewport','contains','maxVisibleDistance','hypsometric','getSingleInstance','clip','eastNorthUpToFixedFrame','clipMode','geoBounds','isVisible','max','renderTexture','firstChild','getExtensionFromUri','subtract','_enableClip','heightRange','top','setSelection','ColorTable','radius','MaxHeight','namespace','Resource','.s3m','_subTextureManager','_readyPromise','brdfLutGenerator','s3m:FileType','textureHeight','_multiChoose','getDerivedResource','typeOf','name','setObjsColor\x20color','min\x20visible\x20distance','dimensions\x20position\x20is\x20required\x20to\x20create\x20CustomClipBox','_position','visible','WGS84','_allObjsHide','range','Authentication\x20error','MinX','inverse','inverseViewMatrix','Cartesian3','CenterZ','GpuProgramParameters','_addRenderedEdge','set\x20Objs\x20Operation\x20operationType','setObjsColor\x20ids','destroyObject','framebuffer','abs','_hash','BoundingSphere','setOnlyObjsVisible\x20ids','free','positionWC','replace','prototype','_style3D','newFrame','_minHeight','s3mblock','transpose','_maximumMemoryUsage','_setObjsOperationType','_tranverseRenderEntity','planePos','_updateAllObjsVisible','ALL','7kiOtvX','reset','Radius','MaxZ','createGeometry','get','_selectedColor'];const _0x31f2c7=_0x2a05;(function(_0x680d20,_0x32f0b3){const _0x2507b1=_0x2a05;while(!![]){try{const _0xb8671e=parseInt(_0x2507b1(0x2d2))*parseInt(_0x2507b1(0x1b4))+parseInt(_0x2507b1(0x2db))*parseInt(_0x2507b1(0x29d))+parseInt(_0x2507b1(0x22e))*parseInt(_0x2507b1(0x20f))+-parseInt(_0x2507b1(0x2c8))+parseInt(_0x2507b1(0x20b))*-parseInt(_0x2507b1(0x204))+-parseInt(_0x2507b1(0x1a9))*-parseInt(_0x2507b1(0x2d6))+-parseInt(_0x2507b1(0x2de))*parseInt(_0x2507b1(0x281));if(_0xb8671e===_0x32f0b3)break;else _0x680d20['push'](_0x680d20['shift']());}catch(_0xa0dd15){_0x680d20['push'](_0x680d20['shift']());}}}(_0x4557,0x31eb6));function S3MTilesLayer(_0x1cefd6){const _0x45a3bb=_0x2a05;_0x1cefd6=Cesium['defaultValue'](_0x1cefd6,Cesium['defaultValue'][_0x45a3bb(0x2a3)]),Cesium[_0x45a3bb(0x2ce)]['defined']('options.context',_0x1cefd6[_0x45a3bb(0x1c5)]),Cesium[_0x45a3bb(0x2ce)]['defined'](_0x45a3bb(0x262),_0x1cefd6['rss']),this['id']=Cesium[_0x45a3bb(0x1d1)](),this[_0x45a3bb(0x259)]=_0x1cefd6[_0x45a3bb(0x259)],this['context']=_0x1cefd6['context'],this[_0x45a3bb(0x1ff)]=Cesium['defaultValue'](_0x1cefd6[_0x45a3bb(0x1af)],!![]),this['_isS3MBlock']=Cesium[_0x45a3bb(0x217)](_0x1cefd6[_0x45a3bb(0x1e3)],![]),this[_0x45a3bb(0x1bb)]=undefined,this['_basePath']=undefined,this[_0x45a3bb(0x2a1)]=undefined,this['modelMatrix']=new Cesium[(_0x45a3bb(0x2e2))](),this['invModelMatrix']=new Cesium[(_0x45a3bb(0x2e2))](),this[_0x45a3bb(0x2ab)]=undefined,this[_0x45a3bb(0x25d)]=undefined,this[_0x45a3bb(0x229)]=undefined,this[_0x45a3bb(0x2cf)]=[],this['_schuduler']=new S3MLayerScheduler(),this[_0x45a3bb(0x234)]=[],this['_processTiles']=[],this[_0x45a3bb(0x21d)]=[],this['_cache']=new S3MLayerCache(),this['_maximumMemoryUsage']=-0x1,this[_0x45a3bb(0x209)]=0x0,this[_0x45a3bb(0x295)]={'foveatedFactor':-Number['MAX_VALUE'],'depth':-Number[_0x45a3bb(0x2d7)],'distance':-Number['MAX_VALUE'],'pixel':-Number[_0x45a3bb(0x2d7)]},this['_minimumPriority']={'foveatedFactor':Number[_0x45a3bb(0x2d7)],'depth':Number[_0x45a3bb(0x2d7)],'distance':Number[_0x45a3bb(0x2d7)],'pixel':Number[_0x45a3bb(0x2d7)]},this[_0x45a3bb(0x252)]=Cesium[_0x45a3bb(0x1bc)][_0x45a3bb(0x1e7)](),this[_0x45a3bb(0x1be)]=!![],this[_0x45a3bb(0x256)]=![],this['_selections']=[],this[_0x45a3bb(0x287)]=new Cesium[(_0x45a3bb(0x1f1))](0.7,0.7,0x1,0x1),this[_0x45a3bb(0x2eb)]=new Cesium[(_0x45a3bb(0x2cc))](),this['_objsVisibleList']=new Cesium[(_0x45a3bb(0x2cc))](),this[_0x45a3bb(0x294)]=new Cesium[(_0x45a3bb(0x2cc))](),this[_0x45a3bb(0x2c0)]={},this[_0x45a3bb(0x219)]={},this['_allObjsHide']=![],this['_clipMode']=_0x4e7632[_0x45a3bb(0x2df)],this[_0x45a3bb(0x247)]=![],this[_0x45a3bb(0x1aa)]=![],this[_0x45a3bb(0x1a1)]=[new Cesium['Cartesian4'](0x0,0x0,0x0,0x0),new Cesium[(_0x45a3bb(0x223))](0x0,0x0,0x0,0x0),new Cesium[(_0x45a3bb(0x223))](0x0,0x0,0x0,0x0),new Cesium[(_0x45a3bb(0x223))](0x0,0x0,0x0,0x0),new Cesium['Cartesian4'](0x0,0x0,0x0,0x0),new Cesium[(_0x45a3bb(0x223))](0x0,0x0,0x0,0x0)],this[_0x45a3bb(0x2d0)]=[new Cesium[(_0x45a3bb(0x223))](0x0,0x0,0x0,0x0),new Cesium[(_0x45a3bb(0x223))](0x0,0x0,0x0,0x0),new Cesium[(_0x45a3bb(0x223))](0x0,0x0,0x0,0x0),new Cesium[(_0x45a3bb(0x223))](0x0,0x0,0x0,0x0),new Cesium[(_0x45a3bb(0x223))](0x0,0x0,0x0,0x0),new Cesium[(_0x45a3bb(0x223))](0x0,0x0,0x0,0x0)],this['_hypsometric']=new Hypsometric({}),this['_flattenPar']=new Flatten(),this[_0x45a3bb(0x1da)]=0x0,this[_0x45a3bb(0x2ad)]=0x0,this['_minHeight']=0x0,this[_0x45a3bb(0x2d8)]=0x0,this[_0x45a3bb(0x236)]=new Cesium[(_0x45a3bb(0x223))](0x0,0x0,0x1,0x1),this[_0x45a3bb(0x2ee)]=![],this[_0x45a3bb(0x29b)]=Cesium[_0x45a3bb(0x217)](_0x1cefd6[_0x45a3bb(0x23a)],Number['MAX_VALUE']),this[_0x45a3bb(0x1cf)]=Cesium[_0x45a3bb(0x217)](_0x1cefd6[_0x45a3bb(0x224)],0x0),this[_0x45a3bb(0x1c6)]=Cesium[_0x45a3bb(0x217)](_0x1cefd6['minVisibleAltitude'],0x0),this[_0x45a3bb(0x22a)]=Cesium['defaultValue'](_0x1cefd6[_0x45a3bb(0x213)],Number['MAX_VALUE']),this[_0x45a3bb(0x1b3)]=Cesium[_0x45a3bb(0x217)](_0x1cefd6['lodRangeScale'],0x1),this[_0x45a3bb(0x22d)]=Cesium['defaultValue'](_0x1cefd6['visible'],!![]),this[_0x45a3bb(0x276)]=Cesium[_0x45a3bb(0x217)](_0x1cefd6[_0x45a3bb(0x1ce)],new Style3D()),this[_0x45a3bb(0x238)]=0xfff,this[_0x45a3bb(0x1ec)]=undefined,this['_waterPlanes']=undefined,this['_edgeDistanceFalloffFactor']=0x0,this['_edgeCurrentTotalLength']=0x0,this[_0x45a3bb(0x1ae)]=0x0,this[_0x45a3bb(0x2f5)]=S3MBlockCache[_0x45a3bb(0x23c)](),this[_0x45a3bb(0x2a5)]=undefined,this[_0x45a3bb(0x251)]=undefined,this[_0x45a3bb(0x1e0)](_0x1cefd6['url']);}Object[_0x31f2c7(0x1fb)](S3MTilesLayer[_0x31f2c7(0x275)],{'ready':{'get':function(){const _0x3da84a=_0x31f2c7;if(this[_0x3da84a(0x2ab)]===_0x3da84a(0x1c2))return this[_0x3da84a(0x1ec)]!==undefined&&this['_rootTiles'][_0x3da84a(0x1e5)]>0x0;return this[_0x3da84a(0x2cf)][_0x3da84a(0x1e5)]>0x0;}},'readyPromise':{'get':function(){const _0x26e5cd=_0x31f2c7;return this[_0x26e5cd(0x252)];}},'visible':{'get':function(){const _0x433df6=_0x31f2c7;return this[_0x433df6(0x22d)];},'set':function(_0x1f596e){const _0xbd14de=_0x31f2c7;this[_0xbd14de(0x22d)]=_0x1f596e;}},'style3D':{'get':function(){return this['_style3D'];}},'rectangle':{'get':function(){return this['_rectangle'];}},'totalMemoryUsageInBytes':{'get':function(){const _0x11d6c1=_0x31f2c7;return this[_0x11d6c1(0x209)];},'set':function(_0x7c4645){const _0x55b962=_0x31f2c7;this[_0x55b962(0x209)]=_0x7c4645;}},'maximumMemoryUsage':{'get':function(){const _0x43cd60=_0x31f2c7;return this[_0x43cd60(0x27b)];},'set':function(_0x27c0f9){const _0x395f12=_0x31f2c7;this[_0x395f12(0x27b)]=_0x27c0f9;}},'lodRangeScale':{'get':function(){const _0x1a9b37=_0x31f2c7;return this[_0x1a9b37(0x1b3)];},'set':function(_0x455e91){const _0x4c1442=_0x31f2c7;Cesium[_0x4c1442(0x2ce)][_0x4c1442(0x258)][_0x4c1442(0x1b1)]('set\x20layer\x20lod\x20range\x20scale',_0x455e91),this['_lodRangeScale']=_0x455e91;}},'selectedColor':{'get':function(){return this['_selectedColor'];},'set':function(_0x30336f){const _0x254ae5=_0x31f2c7;Cesium[_0x254ae5(0x1f1)][_0x254ae5(0x28e)](_0x30336f,this['_selectedColor']);}},'dataMinValue':{'get':function(){const _0x276c85=_0x31f2c7;return Cesium[_0x276c85(0x217)](this[_0x276c85(0x1da)],this[_0x276c85(0x278)]);}},'dataMaxValue':{'get':function(){const _0x46ea5b=_0x31f2c7;return Cesium[_0x46ea5b(0x217)](this[_0x46ea5b(0x2ad)],this[_0x46ea5b(0x2d8)]);}},'swipeRegion':{'get':function(){const _0x1471a6=_0x31f2c7;return new Cesium['BoundingRectangle'](this['_swipeRegion']['x'],this['_swipeRegion']['y'],this[_0x1471a6(0x236)]['z']-this[_0x1471a6(0x236)]['x'],this['_swipeRegion']['w']-this[_0x1471a6(0x236)]['y']);},'set':function(_0x310d1f){const _0xbc8f70=_0x31f2c7;if(!_0x310d1f)return;if(!(_0x310d1f instanceof Cesium[_0xbc8f70(0x1bf)]))throw new Cesium[(_0xbc8f70(0x232))](_0xbc8f70(0x2f0));Cesium[_0xbc8f70(0x223)][_0xbc8f70(0x2dd)](_0x310d1f['x'],_0x310d1f['y'],_0x310d1f['x']+_0x310d1f[_0xbc8f70(0x1f5)],_0x310d1f['y']+_0x310d1f['height'],this[_0xbc8f70(0x236)]);}},'swipeEnabled':{'get':function(){const _0x430750=_0x31f2c7;return this[_0x430750(0x2ee)];},'set':function(_0x46648a){const _0x372352=_0x31f2c7;if(_0x46648a===this[_0x372352(0x2ee)])return;!_0x46648a&&Cesium[_0x372352(0x223)][_0x372352(0x2dd)](0x0,0x0,0x1,0x1,this[_0x372352(0x236)]),this['_swipeEnabled']=_0x46648a,this[_0x372352(0x27d)]({'enable':_0x46648a},swipeCallback);}},'visibleDistanceMax':{'get':function(){return this['_visibleDistanceMax'];},'set':function(_0x16163a){const _0x20fc33=_0x31f2c7;Cesium['Check'][_0x20fc33(0x258)]['number'](_0x20fc33(0x201),_0x16163a),this[_0x20fc33(0x29b)]=_0x16163a;}},'visibleDistanceMin':{'get':function(){const _0x1f31e0=_0x31f2c7;return this[_0x1f31e0(0x1cf)];},'set':function(_0x3e4f51){const _0x29fe24=_0x31f2c7;Cesium[_0x29fe24(0x2ce)][_0x29fe24(0x258)][_0x29fe24(0x1b1)](_0x29fe24(0x25b),_0x3e4f51),this[_0x29fe24(0x1cf)]=_0x3e4f51;}},'minVisibleAltitude':{'get':function(){return this['_minVisibleAltitude'];},'set':function(_0x170105){const _0xc212dd=_0x31f2c7;Cesium[_0xc212dd(0x2ce)][_0xc212dd(0x258)][_0xc212dd(0x1b1)](_0xc212dd(0x2e1),_0x170105),this[_0xc212dd(0x1c6)]=_0x170105;}},'maxVisibleAltitude':{'get':function(){const _0x1fc5cc=_0x31f2c7;return this[_0x1fc5cc(0x22a)];},'set':function(_0x3b4066){const _0x269dc0=_0x31f2c7;Cesium['Check']['typeOf'][_0x269dc0(0x1b1)](_0x269dc0(0x296),_0x3b4066),this['_maxVisibleAltitude']=_0x3b4066;}},'hypsometricSetting':{'get':function(){const _0x492955=_0x31f2c7;return {'hypsometricSetting':this['_hypsometric'][_0x492955(0x2ec)],'analysisMode':this[_0x492955(0x2a6)][_0x492955(0x2f6)]};},'set':function(_0x4af8a1){const _0x469fa1=_0x31f2c7;let _0x3134ab=this['_hypsometric'];if(!_0x4af8a1||!_0x4af8a1[_0x469fa1(0x2f8)]){_0x3134ab['isUseHypColorTable']=![],_0x3134ab['setting']=_0x3134ab[_0x469fa1(0x2ec)]&&_0x3134ab[_0x469fa1(0x2ec)][_0x469fa1(0x293)](),this['_tranverseRenderEntity']({'enable':![]},hypsometricCallback);return;}_0x3134ab[_0x469fa1(0x1de)]=_0x3134ab[_0x469fa1(0x1de)]&&_0x3134ab[_0x469fa1(0x1de)][_0x469fa1(0x293)](),!_0x3134ab['renderTexture']&&(_0x3134ab[_0x469fa1(0x243)]=new Cesium[(_0x469fa1(0x1ad))]({'context':this[_0x469fa1(0x1c5)],'width':0x400,'height':0x400,'pixelFormat':Cesium[_0x469fa1(0x1e2)][_0x469fa1(0x1f0)]})),!_0x3134ab[_0x469fa1(0x1c1)]&&(_0x3134ab['texture']=new Cesium[(_0x469fa1(0x1ad))]({'context':this['context'],'width':0x400,'height':0x40,'pixelFormat':Cesium['PixelFormat'][_0x469fa1(0x1f0)],'flipY':![]})),_0x3134ab['analysisMode']=Cesium[_0x469fa1(0x217)](_0x4af8a1[_0x469fa1(0x2f6)],_0x3134ab[_0x469fa1(0x2f6)]),_0x3134ab[_0x469fa1(0x2ec)]=HypsometricSetting[_0x469fa1(0x28e)](_0x4af8a1['hypsometricSetting'],_0x3134ab[_0x469fa1(0x2ec)]),_0x3134ab[_0x469fa1(0x2ec)][_0x469fa1(0x24b)]&&(_0x3134ab[_0x469fa1(0x2ec)][_0x469fa1(0x24b)]['generateBuffer'](),this[_0x469fa1(0x2a6)][_0x469fa1(0x1c1)]&&this[_0x469fa1(0x2a6)][_0x469fa1(0x1c1)][_0x469fa1(0x1fd)]({'width':0x400,'height':0x40,'arrayBufferView':_0x3134ab[_0x469fa1(0x2ec)]['ColorTable'][_0x469fa1(0x2d3)]})),_0x3134ab[_0x469fa1(0x1a8)]=_0x3134ab[_0x469fa1(0x2f6)]!==_0x4b57af[_0x469fa1(0x1a7)][_0x469fa1(0x1f3)],this[_0x469fa1(0x27d)]({'enable':_0x3134ab[_0x469fa1(0x1a8)]},hypsometricCallback);}}});function getWaterEffect(_0x420e93){const _0x16666d=_0x31f2c7;let _0x3a7b7e={},_0x1d720c=_0x420e93[_0x16666d(0x244)];_0x3a7b7e[_0x16666d(0x2e4)]=XMLParser[_0x16666d(0x1d0)](_0x1d720c,_0x16666d(0x21b)),_0x3a7b7e[_0x16666d(0x2ab)]=XMLParser[_0x16666d(0x1d0)](_0x1d720c,_0x16666d(0x28a));let _0xe91185=XMLParser[_0x16666d(0x21c)](_0x1d720c,'WaterEffect');_0x3a7b7e[_0x16666d(0x1ab)]=XMLParser[_0x16666d(0x1b9)](_0xe91185,'AverageHeight');let _0x20afd=XMLParser[_0x16666d(0x28d)](_0xe91185,_0x16666d(0x268));_0x3a7b7e['gpuProgramParameters']=[];for(let _0x3a4b4f=0x0,_0x3a597b=_0x20afd[_0x16666d(0x1e5)];_0x3a4b4f<_0x3a597b;_0x3a4b4f++){let _0x52a293={};_0x52a293[_0x16666d(0x1c9)]=[],_0x52a293[_0x16666d(0x2ed)]=[];let _0x104ee9=_0x20afd[_0x3a4b4f],_0x43e8c7=XMLParser[_0x16666d(0x21c)](_0x104ee9,_0x16666d(0x1df));if(_0x43e8c7){let _0x3185ad=XMLParser[_0x16666d(0x28d)](_0x43e8c7,_0x16666d(0x2f4));for(let _0x5ba33a=0x0,_0x4d243e=_0x3185ad[_0x16666d(0x1e5)];_0x5ba33a<_0x4d243e;_0x5ba33a++){let _0xd97922={},_0x2b1f4f=_0x3185ad[_0x5ba33a];_0xd97922[_0x16666d(0x1a2)]=XMLParser[_0x16666d(0x1b9)](_0x2b1f4f,'ConstType'),_0xd97922['index']=XMLParser['queryNumericValue'](_0x2b1f4f,_0x16666d(0x2c7)),_0xd97922['name']=XMLParser[_0x16666d(0x1d0)](_0x2b1f4f,_0x16666d(0x203)),_0xd97922['arraySize']=XMLParser['queryNumericValue'](_0x2b1f4f,_0x16666d(0x1bd)),_0xd97922[_0x16666d(0x2a4)]=XMLParser[_0x16666d(0x1b9)](_0x2b1f4f,_0x16666d(0x2c5));let _0x37b8ba=XMLParser[_0x16666d(0x21c)](_0x2b1f4f,'ArrayFloat');_0xd97922[_0x16666d(0x2e5)]=[];if(_0x37b8ba){let _0x42a6da=XMLParser[_0x16666d(0x28d)](_0x37b8ba,'Float'),_0x233497=0x0;while(_0x233497<_0xd97922[_0x16666d(0x2b0)]){let _0xc56224=parseFloat(_0x42a6da[_0x233497][_0x16666d(0x2a9)]);_0xd97922[_0x16666d(0x2e5)]['push'](_0xc56224),_0x233497++;}}_0x52a293[_0x16666d(0x1c9)][_0x16666d(0x1f2)](_0xd97922);}}let _0x265d8c=XMLParser[_0x16666d(0x21c)](_0x104ee9,_0x16666d(0x2d4));if(_0x265d8c){let _0x1c6541=XMLParser[_0x16666d(0x28d)](_0x265d8c,_0x16666d(0x231));for(let _0x34f483=0x0,_0x3fbd75=_0x1c6541[_0x16666d(0x1e5)];_0x34f483<_0x3fbd75;_0x34f483++){let _0x3df3da={},_0x155262=_0x1c6541[_0x34f483];_0x3df3da['paramType']=XMLParser['queryNumericValue'](_0x155262,'ParamType'),_0x3df3da[_0x16666d(0x259)]=XMLParser[_0x16666d(0x1d0)](_0x155262,_0x16666d(0x203)),_0x3df3da[_0x16666d(0x1d9)]=XMLParser[_0x16666d(0x1b9)](_0x155262,_0x16666d(0x2a7)),_0x3df3da[_0x16666d(0x2c9)]=XMLParser[_0x16666d(0x1b9)](_0x155262,_0x16666d(0x2da)),_0x3df3da[_0x16666d(0x211)]=XMLParser['queryNumericValue'](_0x155262,_0x16666d(0x2c4)),_0x3df3da[_0x16666d(0x290)]=XMLParser[_0x16666d(0x1b9)](_0x155262,_0x16666d(0x1b2)),_0x3df3da[_0x16666d(0x1f7)]=XMLParser['queryBooleanValue'](_0x155262,'IsReal'),_0x52a293[_0x16666d(0x2ed)][_0x16666d(0x1f2)](_0x3df3da);}}_0x3a7b7e[_0x16666d(0x1a3)][_0x16666d(0x1f2)](_0x52a293);}return _0x3a7b7e;}function _0x2a05(_0x24d6a6,_0x4e7a03){_0x24d6a6=_0x24d6a6-0x1a0;let _0x455751=_0x4557[_0x24d6a6];return _0x455751;}function getUrl$1(_0x546fdb,_0x2b718b){const _0x349f86=_0x31f2c7;let _0x537410=_0x2b718b[_0x349f86(0x22f)],_0x3bd061=_0x2b718b[_0x349f86(0x22f)]['indexOf'](_0x349f86(0x205))>-0x1;if(!_0x3bd061)return _0x546fdb;let _0x2f42d8=_0x537410['replace'](/(.*realspace)/,''),_0x2a2067=_0x537410[_0x349f86(0x274)](/\/rest\/realspace/g,'')[_0x349f86(0x274)](_0x2f42d8,'');return _0x2a2067+_0x349f86(0x1ca)+_0x2f42d8+_0x349f86(0x1d6)+_0x546fdb[_0x349f86(0x274)](/^\.*/,'')[_0x349f86(0x274)](/^\//,'')[_0x349f86(0x274)](/\/$/,'');}function parseWaterParameters(_0x5c63a5,_0xb5824f){const _0x388a61=_0x31f2c7;let _0x3bcc0a=_0xb5824f['extensions'];if(!_0x3bcc0a||!_0x3bcc0a[_0x388a61(0x298)])return;let _0x477f30=_0x3bcc0a[_0x388a61(0x298)],_0x481ade=[],_0xe7a320=_0x5c63a5[_0x388a61(0x22f)],_0x992329=![];for(let _0x29ce0b=0x0,_0x5970f2=_0x477f30[_0x388a61(0x1e5)];_0x29ce0b<_0x5970f2;_0x29ce0b++){let _0x633c1d=_0x477f30[_0x29ce0b]['attachFile'];if(_0x633c1d['indexOf']('.water')>0x0){let _0x14709d=getUrl$1(_0x633c1d,_0x5c63a5),_0x5cce01=_0x5c63a5[_0x388a61(0x2a1)][_0x388a61(0x257)]({'url':_0x14709d});_0x481ade[_0x388a61(0x1f2)](_0x5cce01[_0x388a61(0x2bf)]()),_0x992329=!![];}}if(!_0x481ade[_0x388a61(0x1e5)])return;Cesium[_0x388a61(0x1bc)][_0x388a61(0x215)](_0x481ade,_0x201432=>{const _0x33fabd=_0x388a61;let _0x1e0ca1=[];for(let _0x11d305=0x0,_0x3a2bb6=_0x201432[_0x33fabd(0x1e5)];_0x11d305<_0x3a2bb6;_0x11d305++){let _0x2dda90=_0x201432[_0x11d305];if(!_0x2dda90)break;let _0x1f032a=getWaterEffect(_0x2dda90);_0x1e0ca1['push'](_0x1f032a);}_0x5c63a5[_0x33fabd(0x21f)]=new Cesium[(_0x33fabd(0x2cc))](),_0x5c63a5[_0x33fabd(0x1ec)]={};let _0x599d11=_0x1e0ca1[0x0];_0x5c63a5[_0x33fabd(0x1ec)][_0x33fabd(0x1ab)]=_0x599d11[_0x33fabd(0x1ab)];for(let _0x1119f5=0x0;_0x1119f5<_0x599d11[_0x33fabd(0x1a3)][_0x33fabd(0x1e5)];_0x1119f5++){let _0x5593ca=_0x599d11[_0x33fabd(0x1a3)][_0x1119f5];for(let _0x39c8cf=0x0;_0x39c8cf<_0x5593ca[_0x33fabd(0x2ed)][_0x33fabd(0x1e5)];_0x39c8cf++){let _0x2a2fd4=_0x5593ca[_0x33fabd(0x2ed)][_0x39c8cf];if(_0x2a2fd4[_0x33fabd(0x259)]===_0x33fabd(0x2f9)){_0x5c63a5[_0x33fabd(0x1ec)][_0x2a2fd4[_0x33fabd(0x259)]]=_0x2a2fd4[_0x33fabd(0x290)];break;}}for(let _0x858f69=0x0;_0x858f69<_0x5593ca['gpuConstants'][_0x33fabd(0x1e5)];_0x858f69++){let _0x5ad3da=_0x5593ca['gpuConstants'][_0x858f69],_0x539d98=null;switch(_0x5ad3da[_0x33fabd(0x2b0)]){case 0x1:_0x539d98=_0x5ad3da['arrayFloat'][0x0];break;case 0x2:_0x539d98=new Cesium[(_0x33fabd(0x1db))](),Cesium[_0x33fabd(0x1db)][_0x33fabd(0x230)](_0x5ad3da[_0x33fabd(0x2e5)],0x0,_0x539d98);break;case 0x3:_0x539d98=new Cesium[(_0x33fabd(0x266))](),Cesium[_0x33fabd(0x266)][_0x33fabd(0x230)](_0x5ad3da['arrayFloat'],0x0,_0x539d98);break;case 0x4:_0x539d98=new Cesium['Cartesian4'](),Cesium['Cartesian4']['unpack'](_0x5ad3da[_0x33fabd(0x2e5)],0x0,_0x539d98);break;}if(!_0x539d98)continue;_0x5c63a5['_waterParameters'][_0x5ad3da[_0x33fabd(0x259)]]=_0x539d98;}}_0x5c63a5[_0x33fabd(0x2ab)]+=_0x33fabd(0x2f3);});}S3MTilesLayer[_0x31f2c7(0x275)][_0x31f2c7(0x1e0)]=function(_0xe74f16){const _0x5d82e8=_0x31f2c7;let _0x1b6314=this;Cesium['when'](_0xe74f16)[_0x5d82e8(0x21a)](function(_0x21fef9){const _0x2a444f=_0x5d82e8;let _0x3ac6fe,_0x46b4cb=Cesium[_0x2a444f(0x24f)]['createIfNeeded'](_0x21fef9);_0x3ac6fe=_0x46b4cb[_0x2a444f(0x2f7)](!![]),_0x1b6314['_url']=_0x46b4cb[_0x2a444f(0x299)],_0x1b6314[_0x2a444f(0x22f)]=_0x3ac6fe,_0x1b6314[_0x2a444f(0x2a1)]=_0x46b4cb;if(_0x1b6314[_0x2a444f(0x1ff)]||_0x1b6314[_0x2a444f(0x1c4)])return _0x46b4cb['fetchJson']();return _0x46b4cb[_0x2a444f(0x2bf)]();})[_0x5d82e8(0x21a)](function(_0x22cc92){const _0xd9cbab=_0x5d82e8;if(_0x1b6314[_0xd9cbab(0x1ff)]||_0x1b6314[_0xd9cbab(0x1c4)]){let _0x2c1721=_0x22cc92[_0xd9cbab(0x2b4)];_0x1b6314[_0xd9cbab(0x2ab)]=_0x2c1721[_0xd9cbab(0x254)];let _0x308d24=_0x22cc92[_0xd9cbab(0x233)]['x'],_0x3ff1f9=_0x22cc92[_0xd9cbab(0x233)]['y'],_0x231626=_0x22cc92[_0xd9cbab(0x233)]['z'];_0x1b6314[_0xd9cbab(0x25d)]=Cesium[_0xd9cbab(0x266)][_0xd9cbab(0x2ae)](_0x308d24,_0x3ff1f9,_0x231626),_0x1b6314[_0xd9cbab(0x1ed)]=Cesium['Transforms'][_0xd9cbab(0x23e)](_0x1b6314[_0xd9cbab(0x25d)]),_0x1b6314[_0xd9cbab(0x1cd)]=Cesium['Matrix4']['inverse'](_0x1b6314[_0xd9cbab(0x1ed)],_0x1b6314[_0xd9cbab(0x1cd)]),_0x1b6314[_0xd9cbab(0x229)]=Cesium[_0xd9cbab(0x1c0)][_0xd9cbab(0x2ae)](_0x22cc92[_0xd9cbab(0x240)]['left'],_0x22cc92[_0xd9cbab(0x240)]['bottom'],_0x22cc92[_0xd9cbab(0x240)][_0xd9cbab(0x1fe)],_0x22cc92[_0xd9cbab(0x240)][_0xd9cbab(0x249)]);_0x22cc92[_0xd9cbab(0x248)]&&(_0x1b6314[_0xd9cbab(0x278)]=_0x22cc92['heightRange'][_0xd9cbab(0x2b3)],_0x1b6314[_0xd9cbab(0x2d8)]=_0x22cc92['heightRange'][_0xd9cbab(0x242)]);if(_0x22cc92[_0xd9cbab(0x1ee)]){let _0x43293b=_0x22cc92[_0xd9cbab(0x1ee)][_0xd9cbab(0x261)];_0x1b6314[_0xd9cbab(0x1b7)]=_0x43293b[_0xd9cbab(0x2b3)],_0x1b6314[_0xd9cbab(0x292)]=_0x43293b[_0xd9cbab(0x242)];}if(_0x22cc92[_0xd9cbab(0x2ea)][_0xd9cbab(0x1e5)]>0x0){let _0x3de0f3=Cesium[_0xd9cbab(0x245)](_0x22cc92[_0xd9cbab(0x2ea)][0x0][_0xd9cbab(0x299)]);_0x3de0f3===_0xd9cbab(0x279)&&(_0x1b6314['_isS3MBlock']=!![]);}for(let _0x448a63=0x0,_0x444b23=_0x22cc92[_0xd9cbab(0x2ea)][_0xd9cbab(0x1e5)];_0x448a63<_0x444b23;_0x448a63++){let _0x1c48b7=_0x22cc92[_0xd9cbab(0x2ea)][_0x448a63][_0xd9cbab(0x299)],_0x208151={'box':_0x22cc92[_0xd9cbab(0x2ea)][_0x448a63][_0xd9cbab(0x2d1)]},_0x52e0ad=new S3MTile(_0x1b6314,undefined,_0x208151,_0x1c48b7);_0x52e0ad['isRootTile']=!![],_0x52e0ad['blockKey']=_0x1c48b7,_0x1b6314[_0xd9cbab(0x1c3)][_0xd9cbab(0x1d5)](_0x52e0ad),_0x1b6314[_0xd9cbab(0x2cf)][_0xd9cbab(0x1f2)](_0x52e0ad);}parseWaterParameters(_0x1b6314,_0x22cc92);}else {let _0x2610f0=_0x22cc92[_0xd9cbab(0x244)],_0x4c49f8=_0x2610f0[_0xd9cbab(0x24e)];_0x1b6314['fileType']=XMLParser[_0xd9cbab(0x1d0)](_0x2610f0,_0xd9cbab(0x28a),_0x4c49f8);let _0x275b05=XMLParser[_0xd9cbab(0x21c)](_0x2610f0,_0xd9cbab(0x2c3),_0x4c49f8),_0x18c186=XMLParser['queryNumericValue'](_0x275b05,'X',_0x4c49f8),_0xc7f700=XMLParser[_0xd9cbab(0x1b9)](_0x275b05,'Y',_0x4c49f8),_0x342315=XMLParser[_0xd9cbab(0x1b9)](_0x275b05,'Z',_0x4c49f8);_0x1b6314[_0xd9cbab(0x25d)]=Cesium['Cartesian3'][_0xd9cbab(0x2ae)](_0x18c186,_0xc7f700,_0x342315),_0x1b6314[_0xd9cbab(0x1ed)]=Cesium['Transforms'][_0xd9cbab(0x23e)](_0x1b6314['_position']),_0x1b6314[_0xd9cbab(0x1cd)]=Cesium[_0xd9cbab(0x2e2)][_0xd9cbab(0x264)](_0x1b6314[_0xd9cbab(0x1ed)],_0x1b6314[_0xd9cbab(0x1cd)]);let _0x54209e=XMLParser[_0xd9cbab(0x21c)](_0x2610f0,_0xd9cbab(0x29c),_0x4c49f8),_0x61b8e1=XMLParser[_0xd9cbab(0x21c)](_0x2610f0,'BoundingBox',_0x4c49f8);if(_0x54209e){let _0x3c79a9=XMLParser['queryNumericValue'](_0x54209e,_0xd9cbab(0x2d5),_0x4c49f8),_0x5b0a3d=XMLParser[_0xd9cbab(0x1b9)](_0x54209e,_0xd9cbab(0x20c),_0x4c49f8),_0x5e9f13=XMLParser['queryNumericValue'](_0x54209e,_0xd9cbab(0x1b0),_0x4c49f8),_0x2b6854=XMLParser[_0xd9cbab(0x1b9)](_0x54209e,_0xd9cbab(0x1d3),_0x4c49f8);_0x1b6314[_0xd9cbab(0x229)]=Cesium['Rectangle']['fromDegrees'](_0x3c79a9,_0x2b6854,_0x5e9f13,_0x5b0a3d);}else {if(_0x61b8e1){let _0x437c6c=XMLParser[_0xd9cbab(0x1b9)](_0x61b8e1,_0xd9cbab(0x263),_0x4c49f8),_0x5e838c=XMLParser[_0xd9cbab(0x1b9)](_0x61b8e1,_0xd9cbab(0x1dc),_0x4c49f8),_0x534895=XMLParser[_0xd9cbab(0x1b9)](_0x61b8e1,_0xd9cbab(0x2c1),_0x4c49f8),_0x49053c=XMLParser['queryNumericValue'](_0x61b8e1,_0xd9cbab(0x1e8),_0x4c49f8),_0x55f192=XMLParser['queryNumericValue'](_0x61b8e1,'MaxY',_0x4c49f8),_0x58d29d=XMLParser['queryNumericValue'](_0x61b8e1,_0xd9cbab(0x284),_0x4c49f8);_0x437c6c=0xb4*Math['abs'](_0x437c6c)/(Math['PI']*0x615299),_0x5e838c=0xb4*Math['abs'](_0x5e838c)/(Math['PI']*0x615299),_0x49053c=0xb4*Math[_0xd9cbab(0x26e)](_0x49053c)/(Math['PI']*0x615299),_0x55f192=0xb4*Math[_0xd9cbab(0x26e)](_0x55f192)/(Math['PI']*0x615299),_0x1b6314[_0xd9cbab(0x229)]=Cesium[_0xd9cbab(0x1c0)][_0xd9cbab(0x2ae)](_0x18c186-_0x437c6c,_0xc7f700-_0x5e838c,_0x18c186+_0x49053c,_0xc7f700+_0x55f192);}}let _0x5daaee=XMLParser[_0xd9cbab(0x21c)](_0x2610f0,'HeightRange',_0x4c49f8);_0x5daaee&&(_0x1b6314['_minHeight']=XMLParser['queryNumericValue'](_0x5daaee,_0xd9cbab(0x202),_0x4c49f8),_0x1b6314[_0xd9cbab(0x2d8)]=XMLParser[_0xd9cbab(0x1b9)](_0x5daaee,_0xd9cbab(0x24d),_0x4c49f8));let _0x6c8bb2=XMLParser[_0xd9cbab(0x21c)](_0x2610f0,'CategoryRange',_0x4c49f8);_0x6c8bb2&&(_0x1b6314[_0xd9cbab(0x292)]=XMLParser[_0xd9cbab(0x1b9)](_0x6c8bb2,'MaxCategory',_0x4c49f8),_0x1b6314[_0xd9cbab(0x1b7)]=XMLParser[_0xd9cbab(0x1b9)](_0x6c8bb2,_0xd9cbab(0x2ba),_0x4c49f8));let _0x2c3258=/\\+/g,_0x2d8e97=XMLParser[_0xd9cbab(0x21c)](_0x2610f0,'OSGFiles',_0x4c49f8),_0x29923e=XMLParser[_0xd9cbab(0x28d)](_0x2d8e97,'Files',_0x4c49f8);if(_0x29923e[_0xd9cbab(0x1e5)]>0x0)for(let _0x14004f=0x0,_0x3a1b37=_0x29923e[_0xd9cbab(0x1e5)];_0x14004f<_0x3a1b37;_0x14004f++){let _0x284777=_0x29923e[_0x14004f],_0x5efd27=XMLParser[_0xd9cbab(0x1d0)](_0x284777,'FileName',_0x4c49f8);_0x5efd27=_0x5efd27['replace'](_0x2c3258,'/'),_0x5efd27=_0x5efd27[_0xd9cbab(0x274)](/(\.osgb)/gi,_0xd9cbab(0x250));let _0x13c745=XMLParser['queryFirstNode'](_0x284777,_0xd9cbab(0x270),_0x4c49f8),_0x1519ae={'sphere':{'center':{'x':0x0,'y':0x0,'z':0x0},'radius':0x615299}};if(_0x13c745&&_0x13c745[_0xd9cbab(0x216)][_0xd9cbab(0x1e5)]){let _0xd45af1=XMLParser[_0xd9cbab(0x1b9)](_0x13c745,_0xd9cbab(0x1a0),_0x4c49f8),_0x2b6205=XMLParser[_0xd9cbab(0x1b9)](_0x13c745,'CenterY',_0x4c49f8),_0x5dba5f=XMLParser[_0xd9cbab(0x1b9)](_0x13c745,_0xd9cbab(0x267),_0x4c49f8),_0x238d8e=XMLParser[_0xd9cbab(0x1b9)](_0x13c745,_0xd9cbab(0x283),_0x4c49f8);_0x1519ae={'sphere':{'center':{'x':_0xd45af1,'y':_0x2b6205,'z':_0x5dba5f},'radius':_0x238d8e}};}let _0xed7ffb=new S3MTile(_0x1b6314,undefined,_0x1519ae,_0x5efd27);_0xed7ffb[_0xd9cbab(0x1cb)]=!![],_0x1b6314['_cache'][_0xd9cbab(0x1d5)](_0xed7ffb),_0x1b6314[_0xd9cbab(0x2cf)][_0xd9cbab(0x1f2)](_0xed7ffb);}else {let _0x1710c8=XMLParser[_0xd9cbab(0x28d)](_0x2d8e97,_0xd9cbab(0x1fc),_0x4c49f8);for(let _0x155a88=0x0,_0x2a0c8d=_0x1710c8['length'];_0x155a88<_0x2a0c8d;_0x155a88++){let _0x507bb9=_0x1710c8[_0x155a88][_0xd9cbab(0x2a9)];_0x507bb9=_0x507bb9[_0xd9cbab(0x274)](_0x2c3258,'/'),_0x507bb9=_0x507bb9['replace'](/(\.osgb)/gi,_0xd9cbab(0x250));let _0x10f42e={'sphere':{'center':{'x':0x0,'y':0x0,'z':0x0},'radius':0x615299}},_0x506f47=new S3MTile(_0x1b6314,undefined,_0x10f42e,_0x507bb9);_0x506f47['isRootTile']=!![],_0x1b6314[_0xd9cbab(0x1c3)][_0xd9cbab(0x1d5)](_0x506f47),_0x1b6314[_0xd9cbab(0x2cf)][_0xd9cbab(0x1f2)](_0x506f47);}}}_0x1b6314[_0xd9cbab(0x252)][_0xd9cbab(0x1e4)](_0x1b6314);})['otherwise'](function(_0x446f36){_0x1b6314['_readyPromise']['reject'](_0x446f36);});};function sortRequestByPriority(_0x360a5c,_0x5d01e9){const _0x2995ec=_0x31f2c7;return _0x360a5c[_0x2995ec(0x29a)]-_0x5d01e9[_0x2995ec(0x29a)];}function requestTiles(_0x43cc4e){const _0x4e940e=_0x31f2c7;let _0x4439e4=_0x43cc4e['_requestTiles'],_0x38fd47=_0x4439e4[_0x4e940e(0x1e5)];_0x4439e4['sort'](sortRequestByPriority);for(let _0x599cee=0x0;_0x599cee<_0x38fd47;++_0x599cee){let _0x4726a6=_0x4439e4[_0x599cee];_0x4726a6['requestContent']();}}function processTiles(_0x26bead,_0x191b42){const _0x5d06e2=_0x31f2c7;let _0x5f44e0=_0x26bead[_0x5d06e2(0x2f2)],_0x575ae8=_0x5f44e0[_0x5d06e2(0x1e5)];for(let _0x4ed9f0=0x0;_0x4ed9f0<_0x575ae8;++_0x4ed9f0){let _0x2ba50a=_0x5f44e0[_0x4ed9f0];_0x2ba50a['update'](_0x191b42,_0x26bead);}}function updateTiles(_0x61131b,_0x91761c){const _0x2e09ae=_0x31f2c7;let _0x598672=_0x61131b['_selectedTiles'],_0x3a0353=_0x598672[_0x2e09ae(0x1e5)];for(let _0x5d5765=0x0;_0x5d5765<_0x3a0353;_0x5d5765++){_0x598672[_0x5d5765][_0x2e09ae(0x1f6)](_0x91761c,_0x61131b);}}function unloadTile(_0x11ef59,_0x4c4c4d){const _0x3d0c0b=_0x31f2c7;_0x4c4c4d[_0x3d0c0b(0x272)]();}function freeResource(_0x74b03d){const _0x5d836b=_0x31f2c7;_0x74b03d[_0x5d836b(0x1c4)]?_0x74b03d['_cache'][_0x5d836b(0x1d2)](_0x74b03d,unloadTile):_0x74b03d[_0x5d836b(0x1c3)][_0x5d836b(0x1ef)](_0x74b03d,unloadTile);}S3MTilesLayer[_0x31f2c7(0x275)]['releaseSelection']=function(){const _0x5ab669=_0x31f2c7;if(this[_0x5ab669(0x237)]['length']<0x1)return;this[_0x5ab669(0x29e)](this[_0x5ab669(0x237)],_0x4994c3[_0x5ab669(0x1a5)]),this['_selections'][_0x5ab669(0x1e5)]=0x0;},S3MTilesLayer['prototype'][_0x31f2c7(0x1cc)]=function(_0xfdccdb){const _0x36a955=_0x31f2c7;this[_0x36a955(0x1b3)]=_0xfdccdb;},S3MTilesLayer['prototype'][_0x31f2c7(0x24a)]=function(_0x16c249){const _0x19b1ef=_0x31f2c7;Cesium[_0x19b1ef(0x2ce)][_0x19b1ef(0x208)](_0x19b1ef(0x1c7),_0x16c249);if(!this['_selectEnabled'])return;!Array[_0x19b1ef(0x2a2)](_0x16c249)&&(_0x16c249=[_0x16c249]),!this[_0x19b1ef(0x256)]&&this[_0x19b1ef(0x235)](),this['_selections']=this[_0x19b1ef(0x237)]['concat'](_0x16c249),this[_0x19b1ef(0x27c)](_0x16c249,_0x4994c3[_0x19b1ef(0x1a5)]);},S3MTilesLayer[_0x31f2c7(0x275)][_0x31f2c7(0x2af)]=function(){const _0xb8d898=_0x31f2c7;return [][_0xb8d898(0x1dd)](this[_0xb8d898(0x237)]);},S3MTilesLayer[_0x31f2c7(0x275)][_0x31f2c7(0x28f)]=function(_0xee4392,_0x2bef44){const _0x10c7dd=_0x31f2c7;Cesium[_0x10c7dd(0x2ce)][_0x10c7dd(0x208)](_0x10c7dd(0x26b),_0xee4392),Cesium[_0x10c7dd(0x2ce)][_0x10c7dd(0x208)]('setObjsColor\x20color',_0x2bef44),Cesium[_0x10c7dd(0x2ce)]['typeOf'][_0x10c7dd(0x2ef)](_0x10c7dd(0x25a),_0x2bef44);!Array['isArray'](_0xee4392)&&(_0xee4392=[_0xee4392]);let _0x394014={};for(let _0x29ec22=0x0,_0x573a34=_0xee4392[_0x10c7dd(0x1e5)];_0x29ec22<_0x573a34;_0x29ec22++){let _0x344b98=_0xee4392[_0x29ec22]+'';if(!Cesium[_0x10c7dd(0x208)](_0x344b98))continue;this[_0x10c7dd(0x219)][_0x344b98]=_0x2bef44,_0x394014[_0x344b98]=_0x2bef44;}this[_0x10c7dd(0x20d)](_0x394014);},S3MTilesLayer[_0x31f2c7(0x275)][_0x31f2c7(0x1c8)]=function(_0x3d7c4a){const _0x4b5308=_0x31f2c7;Cesium[_0x4b5308(0x2ce)][_0x4b5308(0x208)](_0x4b5308(0x2f1),_0x3d7c4a);!Array[_0x4b5308(0x2a2)](_0x3d7c4a)&&(_0x3d7c4a=[_0x3d7c4a]);let _0x34364f={};for(let _0x53091c=0x0,_0x2c7d90=_0x3d7c4a['length'];_0x53091c<_0x2c7d90;_0x53091c++){let _0x16f39f=_0x3d7c4a[_0x53091c];Cesium[_0x4b5308(0x208)](this['_objsColorList'][_0x16f39f])&&(_0x34364f[_0x16f39f]=Cesium[_0x4b5308(0x1f1)]['TRANSPARENT'],delete this[_0x4b5308(0x219)][_0x16f39f]);}this['_removeObjsOperationType'](_0x3d7c4a,_0x4994c3[_0x4b5308(0x1e6)]),this[_0x4b5308(0x20d)](_0x34364f);},S3MTilesLayer[_0x31f2c7(0x275)][_0x31f2c7(0x214)]=function(_0x48ac07,_0x308180){const _0x5dcb69=_0x31f2c7;Cesium[_0x5dcb69(0x2ce)]['defined'](_0x5dcb69(0x271),_0x48ac07),Cesium[_0x5dcb69(0x2ce)][_0x5dcb69(0x258)][_0x5dcb69(0x28c)](_0x5dcb69(0x222),_0x308180);!Array[_0x5dcb69(0x2a2)](_0x48ac07)&&(_0x48ac07=[_0x48ac07]);if(_0x48ac07[_0x5dcb69(0x1e5)]===0x0){this[_0x5dcb69(0x260)]=_0x308180,this[_0x5dcb69(0x218)][_0x5dcb69(0x212)]();let _0x2ea50e=Object[_0x5dcb69(0x22b)](this[_0x5dcb69(0x294)][_0x5dcb69(0x26f)]);this[_0x5dcb69(0x29e)](_0x2ea50e,_0x4994c3[_0x5dcb69(0x221)]),this[_0x5dcb69(0x294)][_0x5dcb69(0x212)](),this['_updateAllObjsVisible'](!_0x308180);return;}let _0xfe7b15=this['_objsVisibleList'],_0x1a55e8=this['_objsHideList'],_0xa6b71f=this['_objsVisibleMap'];!_0x308180?(_0x48ac07[_0x5dcb69(0x1b8)](function(_0x2e3e7b){const _0x1c6dda=_0x5dcb69;_0xfe7b15[_0x1c6dda(0x21e)](_0x2e3e7b),_0x1a55e8[_0x1c6dda(0x1f8)](_0x2e3e7b,!![]);}),this[_0x5dcb69(0x27c)](_0x48ac07,_0x4994c3[_0x5dcb69(0x221)])):(_0x48ac07[_0x5dcb69(0x1b8)](function(_0x4e5b2d){const _0x40fddb=_0x5dcb69;_0xfe7b15[_0x40fddb(0x1f8)](_0x4e5b2d,!![]),_0x1a55e8[_0x40fddb(0x21e)](_0x4e5b2d);}),this[_0x5dcb69(0x29e)](_0x48ac07,_0x4994c3[_0x5dcb69(0x221)]));},S3MTilesLayer[_0x31f2c7(0x275)][_0x31f2c7(0x20e)]=function(_0x35b0e7,_0x1cca9e){const _0x3bf090=_0x31f2c7;if(_0x35b0e7['length']===0x0){this[_0x3bf090(0x214)]([],_0x1cca9e);return;}this['setOnlyObjsVisible']([],_0x1cca9e),this[_0x3bf090(0x214)](_0x35b0e7,_0x1cca9e);};function createPlane(_0x258c17,_0x1be217,_0x6378d6){const _0x3733d0=_0x31f2c7;let _0x1491a0=new Cesium['Cartesian3'](),_0x3aea9f=new Cesium[(_0x3733d0(0x266))]();Cesium[_0x3733d0(0x266)][_0x3733d0(0x246)](_0x1be217,_0x258c17,_0x1491a0),Cesium['Cartesian3'][_0x3733d0(0x246)](_0x6378d6,_0x258c17,_0x3aea9f);let _0xf8a110=new Cesium['Cartesian3']();Cesium[_0x3733d0(0x266)][_0x3733d0(0x2a8)](_0x1491a0,_0x3aea9f,_0xf8a110),Cesium[_0x3733d0(0x266)][_0x3733d0(0x2aa)](_0xf8a110,_0xf8a110);let _0x59c7df=-Cesium[_0x3733d0(0x266)][_0x3733d0(0x1ea)](_0xf8a110,_0x258c17);return new Cesium[(_0x3733d0(0x223))](_0xf8a110['x'],_0xf8a110['y'],_0xf8a110['z'],_0x59c7df);}function clipCallback(_0x12c6ab,_0x23e14d){const _0x324a88=_0x31f2c7;_0x12c6ab[_0x324a88(0x23d)](_0x23e14d);}S3MTilesLayer[_0x31f2c7(0x275)][_0x31f2c7(0x1b5)]=function(_0x37cccf,_0x3ba996,_0x20dad1,_0x3e73bd){const _0xf1691f=_0x31f2c7;this[_0xf1691f(0x2d0)][0x0]=createPlane(_0x37cccf,_0x3ba996,_0x20dad1),this[_0xf1691f(0x2d9)]=Cesium[_0xf1691f(0x217)](_0x3e73bd,_0x4e7632[_0xf1691f(0x2b6)]),this[_0xf1691f(0x1aa)]=!![],!this['_enableClip']&&this[_0xf1691f(0x27d)]({'enable':!![]},clipCallback),this[_0xf1691f(0x247)]=!![];},S3MTilesLayer['prototype'][_0x31f2c7(0x1a4)]=function(_0x2341a9){const _0x1c0e7d=_0x31f2c7;_0x2341a9=_0x2341a9||{};if((!_0x2341a9[_0x1c0e7d(0x2c2)]||!_0x2341a9[_0x1c0e7d(0x233)])&&(!_0x2341a9['planePos']||!_0x2341a9['planeNormal']))throw new Cesium[(_0x1c0e7d(0x232))](_0x1c0e7d(0x25c));this['_clipMode']=_0x4e7632[_0x1c0e7d(0x2b6)];if(Cesium['defined'](_0x2341a9[_0x1c0e7d(0x23f)]))switch(_0x2341a9[_0x1c0e7d(0x23f)]){case _0x1c0e7d(0x297):this[_0x1c0e7d(0x2d9)]=_0x4e7632['CLIP_BEHIND_ANY_PLANE'];break;case _0x1c0e7d(0x1ba):this[_0x1c0e7d(0x2d9)]=_0x4e7632[_0x1c0e7d(0x2b6)];break;case _0x1c0e7d(0x2bb):this[_0x1c0e7d(0x2d9)]=_0x4e7632['ONLY_KEEP_LINE'];break;}if(_0x2341a9[_0x1c0e7d(0x2c2)]){let _0x497720=new Cesium[(_0x1c0e7d(0x2e2))](),_0x40449b=_0x2341a9[_0x1c0e7d(0x233)],_0x19d841,_0x487aa8,_0x3fe764;_0x19d841=_0x2341a9[_0x1c0e7d(0x227)]||0x0,_0x487aa8=_0x2341a9[_0x1c0e7d(0x2e6)]||0x0,_0x3fe764=_0x2341a9['roll']||0x0;let _0x110ad9=new Cesium['HeadingPitchRoll'](_0x19d841,_0x487aa8,_0x3fe764);_0x497720=Cesium[_0x1c0e7d(0x2e0)]['headingPitchRollToFixedFrame'](_0x40449b,_0x110ad9,Cesium[_0x1c0e7d(0x291)][_0x1c0e7d(0x25f)]);let _0x20f3e1=_0x2341a9[_0x1c0e7d(0x2c2)]['x']*0.5,_0x57971b=_0x2341a9['dimensions']['y']*0.5,_0x4ca153=_0x2341a9[_0x1c0e7d(0x2c2)]['z']*0.5,_0x520316=[];_0x520316[0x0]=new Cesium[(_0x1c0e7d(0x223))](-_0x20f3e1,_0x57971b,_0x4ca153,0x1),_0x520316[0x1]=new Cesium['Cartesian4'](_0x20f3e1,_0x57971b,_0x4ca153,0x1),_0x520316[0x2]=new Cesium['Cartesian4'](_0x20f3e1,-_0x57971b,_0x4ca153,0x1),_0x520316[0x3]=new Cesium[(_0x1c0e7d(0x223))](-_0x20f3e1,-_0x57971b,_0x4ca153,0x1),_0x520316[0x4]=new Cesium[(_0x1c0e7d(0x223))](-_0x20f3e1,_0x57971b,-_0x4ca153,0x1),_0x520316[0x5]=new Cesium[(_0x1c0e7d(0x223))](_0x20f3e1,_0x57971b,-_0x4ca153,0x1),_0x520316[0x6]=new Cesium['Cartesian4'](_0x20f3e1,-_0x57971b,-_0x4ca153,0x1),_0x520316[0x7]=new Cesium[(_0x1c0e7d(0x223))](-_0x20f3e1,-_0x57971b,-_0x4ca153,0x1);for(let _0x42b25b=0x0;_0x42b25b<0x8;_0x42b25b++){Cesium[_0x1c0e7d(0x2e2)]['multiplyByVector'](_0x497720,_0x520316[_0x42b25b],_0x520316[_0x42b25b]);}this[_0x1c0e7d(0x2d0)][0x0]=Cesium['Cartesian4'][_0x1c0e7d(0x28e)](createPlane(_0x520316[0x0],_0x520316[0x1],_0x520316[0x2])),this[_0x1c0e7d(0x2d0)][0x1]=Cesium['Cartesian4'][_0x1c0e7d(0x28e)](createPlane(_0x520316[0x0],_0x520316[0x4],_0x520316[0x1])),this['_oriClipPlane'][0x2]=Cesium[_0x1c0e7d(0x223)][_0x1c0e7d(0x28e)](createPlane(_0x520316[0x0],_0x520316[0x3],_0x520316[0x4])),this['_oriClipPlane'][0x3]=Cesium[_0x1c0e7d(0x223)][_0x1c0e7d(0x28e)](createPlane(_0x520316[0x6],_0x520316[0x2],_0x520316[0x5])),this[_0x1c0e7d(0x2d0)][0x4]=Cesium[_0x1c0e7d(0x223)][_0x1c0e7d(0x28e)](createPlane(_0x520316[0x6],_0x520316[0x7],_0x520316[0x2])),this['_oriClipPlane'][0x5]=Cesium['Cartesian4'][_0x1c0e7d(0x28e)](createPlane(_0x520316[0x6],_0x520316[0x5],_0x520316[0x7]));}else for(let _0x16dcd4=0x0;_0x16dcd4<_0x2341a9[_0x1c0e7d(0x27e)][_0x1c0e7d(0x1e5)];_0x16dcd4++){let _0x5c7885=_0x2341a9['planePos'][_0x16dcd4],_0x5c0a69=_0x2341a9['planeNormal'][_0x16dcd4];this[_0x1c0e7d(0x2d0)][_0x16dcd4]['x']=_0x5c0a69['x'],this[_0x1c0e7d(0x2d0)][_0x16dcd4]['y']=_0x5c0a69['y'],this[_0x1c0e7d(0x2d0)][_0x16dcd4]['z']=_0x5c0a69['z'],this[_0x1c0e7d(0x2d0)][_0x16dcd4]['w']=-Cesium[_0x1c0e7d(0x266)][_0x1c0e7d(0x1ea)](_0x5c7885,_0x5c0a69);}!this[_0x1c0e7d(0x247)]&&this['_tranverseRenderEntity']({'enable':!![]},clipCallback),this[_0x1c0e7d(0x247)]=!![];},S3MTilesLayer[_0x31f2c7(0x275)][_0x31f2c7(0x207)]=function(){const _0x5831b0=_0x31f2c7;this[_0x5831b0(0x247)]=![],this['_enableClipPlane']=![],this[_0x5831b0(0x27d)]({'enable':![]},clipCallback);},S3MTilesLayer[_0x31f2c7(0x275)]['_tranverseRenderEntity']=function(_0x2a07ff,_0x5aa7a5){const _0x73836=_0x31f2c7;let _0x3f000e=[];for(let _0x2bd648=0x0,_0x39c492=this['_rootTiles'][_0x73836(0x1e5)];_0x2bd648<_0x39c492;_0x2bd648++){let _0x275095=this[_0x73836(0x2cf)][_0x2bd648];_0x3f000e[_0x73836(0x1f2)](_0x275095);}while(_0x3f000e[_0x73836(0x1e5)]){let _0x4eef2c=_0x3f000e[_0x73836(0x1d7)]();for(let _0x510db9=0x0,_0x222249=_0x4eef2c[_0x73836(0x2ac)][_0x73836(0x1e5)];_0x510db9<_0x222249;_0x510db9++){const _0xcdf9d8=_0x4eef2c['renderEntities'][_0x510db9];_0xcdf9d8[_0x73836(0x2be)]&&_0x5aa7a5(_0xcdf9d8,_0x2a07ff);}for(let _0x6dfbc9=0x0,_0x184c86=_0x4eef2c[_0x73836(0x2c6)][_0x73836(0x1e5)];_0x6dfbc9<_0x184c86;_0x6dfbc9++){_0x3f000e[_0x73836(0x1f2)](_0x4eef2c[_0x73836(0x2c6)][_0x6dfbc9]);}}};function updateObjsOperationCallback(_0x1c0167,_0x301c33){_0x1c0167['updateObjsOperation'](_0x301c33['ids'],_0x301c33);}S3MTilesLayer[_0x31f2c7(0x275)]['_updateObjsOperation']=function(_0x8ea18e){this['_tranverseRenderEntity']({'ids':_0x8ea18e},updateObjsOperationCallback);};function updateObjsColorCallback(_0x28ea20,_0x3b664c){const _0x24371e=_0x31f2c7;_0x28ea20[_0x24371e(0x2b5)](_0x3b664c['ids'],_0x3b664c);}S3MTilesLayer[_0x31f2c7(0x275)][_0x31f2c7(0x20d)]=function(_0x3aa761){const _0x58f80b=_0x31f2c7;this[_0x58f80b(0x27d)]({'ids':_0x3aa761},updateObjsColorCallback);};function updateAllObjsVisibleCallback(_0x5ac57a,_0x2722a0){const _0x3c6aa5=_0x31f2c7;_0x5ac57a['updateAllObjsVisible'](_0x2722a0[_0x3c6aa5(0x241)]);}S3MTilesLayer[_0x31f2c7(0x275)][_0x31f2c7(0x27f)]=function(_0x2a4c07){const _0x808c8d=_0x31f2c7;this[_0x808c8d(0x27d)]({'isVisible':_0x2a4c07},updateAllObjsVisibleCallback);},S3MTilesLayer[_0x31f2c7(0x275)][_0x31f2c7(0x27c)]=function(_0x3c9001,_0x1f7f77){const _0x3508b8=_0x31f2c7;Cesium[_0x3508b8(0x2ce)]['defined'](_0x3508b8(0x2dc),_0x3c9001),Cesium['Check']['defined'](_0x3508b8(0x26a),_0x1f7f77);!Array[_0x3508b8(0x2a2)](_0x3c9001)&&(_0x3c9001=[_0x3c9001]);let _0x2f8d36=new Cesium[(_0x3508b8(0x2cc))](),_0x19ebd7;for(let _0x3baffc=0x0,_0x189c34=_0x3c9001[_0x3508b8(0x1e5)];_0x3baffc<_0x189c34;_0x3baffc++){_0x19ebd7=_0x3c9001[_0x3baffc];if(!Cesium['defined'](_0x19ebd7))continue;let _0x16a6de=Cesium[_0x3508b8(0x217)](this[_0x3508b8(0x2eb)]['get'](_0x19ebd7),0x0);if(_0x16a6de===_0x1f7f77)continue;_0x16a6de=_0x16a6de|_0x1f7f77,this[_0x3508b8(0x2eb)]['set'](_0x19ebd7,_0x16a6de),_0x2f8d36[_0x3508b8(0x1f8)](_0x19ebd7,_0x16a6de);}_0x2f8d36[_0x3508b8(0x1e5)]>0x0&&this[_0x3508b8(0x29f)](_0x2f8d36);},S3MTilesLayer[_0x31f2c7(0x275)][_0x31f2c7(0x29e)]=function(_0x72f216,_0x1dcdf1){const _0x5eb088=_0x31f2c7;Cesium[_0x5eb088(0x2ce)][_0x5eb088(0x208)]('set\x20Objs\x20Operation\x20ids',_0x72f216);!Array[_0x5eb088(0x2a2)](_0x72f216)&&(_0x72f216=[_0x72f216]);let _0x5b956b=_0x4994c3[_0x5eb088(0x280)]^_0x1dcdf1,_0x34f303=new Cesium[(_0x5eb088(0x2cc))](),_0x41f8d1;for(let _0x451baf=0x0,_0x558ac0=_0x72f216['length'];_0x451baf<_0x558ac0;_0x451baf++){_0x41f8d1=_0x72f216[_0x451baf];let _0x26bb54=this[_0x5eb088(0x2eb)][_0x5eb088(0x286)](_0x41f8d1);if(!Cesium[_0x5eb088(0x208)](_0x26bb54))continue;_0x26bb54&=_0x5b956b,_0x26bb54===_0x4994c3[_0x5eb088(0x289)]?this[_0x5eb088(0x2eb)]['remove'](_0x41f8d1):this[_0x5eb088(0x2eb)][_0x5eb088(0x1f8)](_0x41f8d1,_0x26bb54),_0x34f303[_0x5eb088(0x1f8)](_0x41f8d1,_0x26bb54);}_0x34f303['length']>0x0&&this[_0x5eb088(0x29f)](_0x34f303);},S3MTilesLayer['prototype'][_0x31f2c7(0x2bd)]=function(_0x4d1b1d){const _0x59f313=_0x31f2c7;let _0x20a086=Cesium[_0x59f313(0x266)][_0x59f313(0x1a6)](_0x4d1b1d),_0xe5b851=new Cesium[(_0x59f313(0x228))]({'polygonHierarchy':{'positions':_0x20a086},'perPositionHeight':!![]}),_0x25e0a6=Cesium['PolygonGeometry'][_0x59f313(0x285)](_0xe5b851),_0x457fdd=new RasterRegion();return _0x457fdd[_0x59f313(0x1e9)](_0x25e0a6,this['invModelMatrix']),_0x457fdd['updateGeoBounds'](_0x25e0a6),_0x457fdd;};function flattenCallback(_0x148e40,_0x4fae22){_0x148e40['flatten'](_0x4fae22);}S3MTilesLayer[_0x31f2c7(0x275)]['addFlattenRegion']=function(_0x373924){const _0x203367=_0x31f2c7;let _0x40b232=_0x373924[_0x203367(0x259)],_0x1fa57=_0x373924[_0x203367(0x233)];if(!_0x40b232||!_0x1fa57)return;let _0x1a63fb=this[_0x203367(0x1ac)],_0xcb42e2=_0x1a63fb['regions'];if(_0xcb42e2[_0x203367(0x239)](_0x40b232))return;!_0x1a63fb['texture']&&(_0x1a63fb['texture']=new Cesium[(_0x203367(0x1ad))]({'context':this[_0x203367(0x1c5)],'width':_0x1a63fb['textureWidth'],'height':_0x1a63fb[_0x203367(0x255)],'pixelFormat':Cesium[_0x203367(0x1e2)]['RGBA']}));let _0x23a296=this['_createRasterRegion'](_0x1fa57);_0xcb42e2[_0x203367(0x1f8)](_0x40b232,_0x23a296),_0x1a63fb[_0x203367(0x2bc)]=!![],_0xcb42e2[_0x203367(0x2a0)][_0x203367(0x1e5)]===0x1&&this[_0x203367(0x27d)]({'enable':!![]},flattenCallback);};function hypsometricCallback(_0x5435df,_0x24ce91){const _0x54a290=_0x31f2c7;_0x5435df[_0x54a290(0x23b)](_0x24ce91);}function swipeCallback(_0x57fedc,_0x17e5bd){const _0x2fe035=_0x31f2c7;_0x57fedc[_0x2fe035(0x2b1)](_0x17e5bd);}function combineRegionBounds(_0x16a34c){const _0x49ae56=_0x31f2c7;let _0x118746=new Cesium[(_0x49ae56(0x223))](Number[_0x49ae56(0x2d7)],Number['MAX_VALUE'],-Number[_0x49ae56(0x2d7)],-Number[_0x49ae56(0x2d7)]);for(let _0x1bec8f=0x0;_0x1bec8f<_0x16a34c[_0x49ae56(0x1e5)];_0x1bec8f++){const _0x2c339d=_0x16a34c[_0x1bec8f][_0x49ae56(0x20a)];_0x118746['x']=Math[_0x49ae56(0x2b3)](_0x2c339d['x'],_0x118746['x']),_0x118746['y']=Math[_0x49ae56(0x2b3)](_0x2c339d['y'],_0x118746['y']),_0x118746['z']=Math[_0x49ae56(0x242)](_0x2c339d['z'],_0x118746['z']),_0x118746['w']=Math[_0x49ae56(0x242)](_0x2c339d['w'],_0x118746['w']);}return _0x118746;}S3MTilesLayer[_0x31f2c7(0x275)][_0x31f2c7(0x2b2)]=function(_0x1917e4){const _0x420c48=_0x31f2c7;let _0x4c1621=this['_flattenPar'];if(!_0x4c1621[_0x420c48(0x2bc)])return;_0x4c1621[_0x420c48(0x2bc)]=![];let _0x575a63=_0x4c1621['regions'],_0x34e1d1=_0x575a63[_0x420c48(0x2a0)][_0x420c48(0x1e5)];_0x4c1621['flattening']=_0x34e1d1>0x0,_0x4c1621[_0x420c48(0x20a)]=combineRegionBounds(_0x575a63[_0x420c48(0x2a0)]);let _0x399367=new Cesium['ClearCommand']({'color':new Cesium[(_0x420c48(0x1f1))](0x1,0x1,0x1,0x1),'depth':0x1});!_0x4c1621['texture']&&(_0x4c1621[_0x420c48(0x1c1)]=new Cesium[(_0x420c48(0x1ad))]({'context':this['context'],'width':_0x4c1621[_0x420c48(0x2e9)],'height':_0x4c1621[_0x420c48(0x255)],'pixelFormat':Cesium[_0x420c48(0x1e2)]['RGBA']}));!_0x4c1621[_0x420c48(0x2b8)]&&(_0x4c1621['fbo']=new Cesium['Framebuffer']({'context':this[_0x420c48(0x1c5)],'colorTextures':[_0x4c1621[_0x420c48(0x1c1)]],'destroyAttachments':![]}));_0x399367[_0x420c48(0x26d)]=_0x4c1621[_0x420c48(0x2b8)],_0x399367['renderState']=Cesium['RenderState'][_0x420c48(0x2cb)](),_0x399367['execute'](this[_0x420c48(0x1c5)]);for(let _0x12c4c7=0x0;_0x12c4c7<_0x34e1d1;_0x12c4c7++){let _0x503d75=_0x575a63[_0x420c48(0x2a0)][_0x12c4c7];_0x503d75[_0x420c48(0x206)](this[_0x420c48(0x1c5)],_0x4c1621[_0x420c48(0x2b8)]),_0x503d75[_0x420c48(0x2b9)][_0x420c48(0x200)]={'uRect':function(){const _0x3420af=_0x420c48;return _0x4c1621[_0x3420af(0x20a)];}},_0x503d75['command'][_0x420c48(0x2b7)](this[_0x420c48(0x1c5)]);}},S3MTilesLayer[_0x31f2c7(0x275)][_0x31f2c7(0x1d4)]=function(_0x581428,_0xe3a3f2){const _0x51b9a2=_0x31f2c7;if(_0x581428>0x8)throw new Cesium['DeveloperError']('the\x20index\x20is\x200~8');_0xe3a3f2?this['_visibleViewport']=0x1<<_0x581428|this[_0x51b9a2(0x238)]:this[_0x51b9a2(0x238)]=~(0x1<<_0x581428)&this[_0x51b9a2(0x238)];},S3MTilesLayer[_0x31f2c7(0x275)]['getVisibleInViewport']=function(_0x5d4410){const _0x1782d3=_0x31f2c7;if(_0x5d4410>0x8)throw new Cesium['DeveloperError'](_0x1782d3(0x1eb));return 0x1<<_0x5d4410&this[_0x1782d3(0x238)];},S3MTilesLayer[_0x31f2c7(0x275)][_0x31f2c7(0x288)]=function(){const _0x23bdbf=_0x31f2c7;if(this[_0x23bdbf(0x1ae)]===0x0){this['_edgeCurrentTotalLength']=0x0;return;}this[_0x23bdbf(0x226)]=this[_0x23bdbf(0x22c)]/this[_0x23bdbf(0x1ae)]*0x28,this[_0x23bdbf(0x22c)]=0x0,this[_0x23bdbf(0x1ae)]=0x0;},S3MTilesLayer[_0x31f2c7(0x275)][_0x31f2c7(0x269)]=function(_0xb9b30d,_0x393a1e){const _0x45c35b=_0x31f2c7;this[_0x45c35b(0x22c)]+=_0xb9b30d,this[_0x45c35b(0x1ae)]+=_0x393a1e;};function updateWaterPlane(_0x277c9d,_0x3c9a84){const _0x3e1ba0=_0x31f2c7;if(!_0x277c9d[_0x3e1ba0(0x21f)])return;let _0x2f2e00=_0x277c9d[_0x3e1ba0(0x21f)];_0x3c9a84[_0x3e1ba0(0x2e7)]===undefined&&(_0x3c9a84[_0x3e1ba0(0x2e7)]=0x615299);_0x3c9a84['heightOffset']===undefined&&(_0x3c9a84['heightOffset']=0x0);let _0x3eceeb=_0x3c9a84[_0x3e1ba0(0x225)][_0x3e1ba0(0x273)];for(let _0xa6f453 in _0x2f2e00[_0x3e1ba0(0x26f)]){if(_0x2f2e00[_0x3e1ba0(0x26f)][_0x3e1ba0(0x2ca)](_0xa6f453)){let _0x1bdaac=_0x2f2e00['get'](_0xa6f453),_0x3e764a=_0x1bdaac['boundingVolume'];if(_0x3c9a84[_0x3e1ba0(0x28b)][_0x3e1ba0(0x1f4)](_0x3e764a)===Cesium[_0x3e1ba0(0x1f9)][_0x3e1ba0(0x1e1)])continue;let _0x1031f0=Cesium[_0x3e1ba0(0x266)]['distance'](_0x3e764a['center'],_0x3eceeb)-_0x3e764a[_0x3e1ba0(0x24c)];_0x1031f0=_0x1031f0<0.01?0.01:_0x1031f0,_0x1031f0<_0x3c9a84[_0x3e1ba0(0x2e7)]&&(_0x3c9a84[_0x3e1ba0(0x2e7)]=_0x1031f0,_0x3c9a84[_0x3e1ba0(0x1fa)]=_0x1bdaac[_0x3e1ba0(0x1d8)]);}}}S3MTilesLayer[_0x31f2c7(0x275)]['addWaterPlane']=function(_0x5b6586){const _0x866193=_0x31f2c7;let _0x12d7bd=this[_0x866193(0x21f)]['length'];return this[_0x866193(0x21f)]['set'](_0x12d7bd,_0x5b6586),_0x12d7bd;},S3MTilesLayer['prototype'][_0x31f2c7(0x220)]=function(_0x2c53dc){const _0x58d8f3=_0x31f2c7;this[_0x58d8f3(0x21f)][_0x58d8f3(0x21e)](_0x2c53dc);},S3MTilesLayer[_0x31f2c7(0x275)][_0x31f2c7(0x2e3)]=function(_0x98e044){const _0x382573=_0x31f2c7;if(!this[_0x382573(0x2be)])return;_0x98e044[_0x382573(0x277)]&&(this['_cache'][_0x382573(0x282)](),this['_requestTiles'][_0x382573(0x1e5)]=0x0,this[_0x382573(0x2f2)][_0x382573(0x1e5)]=0x0,this[_0x382573(0x21d)][_0x382573(0x1e5)]=0x0,Cesium[_0x382573(0x208)](_0x98e044[_0x382573(0x253)])&&_0x98e044[_0x382573(0x253)][_0x382573(0x1f6)](_0x98e044),updateWaterPlane(this,_0x98e044));};let scratchtTransposeViewMatrix=new Cesium[(_0x31f2c7(0x2e2))]();S3MTilesLayer['prototype']['postPassesUpdate']=function(_0xf87d2a){const _0x5cb4ce=_0x31f2c7;if(!this[_0x5cb4ce(0x2be)])return;freeResource(this),this[_0x5cb4ce(0x2b2)](_0xf87d2a),this[_0x5cb4ce(0x288)](),this[_0x5cb4ce(0x251)]&&this[_0x5cb4ce(0x251)]['processRequests'](this['id']);};function isLayerVisible(_0x7c2543,_0x3b24f4){const _0x14db2f=_0x31f2c7;let _0x3af765=_0x3b24f4[_0x14db2f(0x225)];if(_0x3af765[_0x14db2f(0x2e8)]['height']<_0x7c2543['_minVisibleAltitude']||_0x3af765[_0x14db2f(0x2e8)]['height']>_0x7c2543['_maxVisibleAltitude'])return ![];if(!_0x7c2543['getVisibleInViewport'](_0x3b24f4[_0x14db2f(0x210)]))return ![];return _0x7c2543[_0x14db2f(0x25e)];}function updateClipPlanes(_0x72f4a7,_0x10c428){const _0xb12d3d=_0x31f2c7;if(_0x72f4a7[_0xb12d3d(0x247)]){let _0x5eead4=_0x10c428[_0xb12d3d(0x225)][_0xb12d3d(0x265)];Cesium[_0xb12d3d(0x2e2)][_0xb12d3d(0x27a)](_0x5eead4,scratchtTransposeViewMatrix);for(let _0x4ffb43=0x0;_0x4ffb43<0x6;_0x4ffb43++){Cesium[_0xb12d3d(0x2e2)]['multiplyByVector'](scratchtTransposeViewMatrix,_0x72f4a7[_0xb12d3d(0x2d0)][_0x4ffb43],_0x72f4a7[_0xb12d3d(0x1a1)][_0x4ffb43]);}}}S3MTilesLayer[_0x31f2c7(0x275)]['update']=function(_0x2f2510){const _0x2df2a1=_0x31f2c7;if(!this[_0x2df2a1(0x2be)]||!isLayerVisible(this,_0x2f2510))return;this[_0x2df2a1(0x2cd)][_0x2df2a1(0x1b6)](this,_0x2f2510),requestTiles(this),processTiles(this,_0x2f2510),updateTiles(this,_0x2f2510),updateClipPlanes(this,_0x2f2510);},S3MTilesLayer[_0x31f2c7(0x275)]['isDestroyed']=function(){return ![];},S3MTilesLayer['prototype'][_0x31f2c7(0x293)]=function(){const _0x33663d=_0x31f2c7;return this[_0x33663d(0x1c3)][_0x33663d(0x282)](),freeResource(this),this[_0x33663d(0x2cf)][_0x33663d(0x1e5)]=0x0,this[_0x33663d(0x234)]['length']=0x0,this[_0x33663d(0x2f2)][_0x33663d(0x1e5)]=0x0,this[_0x33663d(0x21d)]['length']=0x0,this[_0x33663d(0x237)][_0x33663d(0x1e5)]=0x0,this[_0x33663d(0x2eb)]['removeAll'](),this[_0x33663d(0x218)]['removeAll'](),this[_0x33663d(0x294)][_0x33663d(0x212)](),this['_objsVisibleMap']={},this['_objsColorList']={},this['_hypsometric']['destroy'](),this[_0x33663d(0x1ac)][_0x33663d(0x293)](),Cesium[_0x33663d(0x26c)](this);};

    var _0x3a8a86 = (function (globalObject) {

    /*
     *      bignumber.js v8.1.1
     *      A JavaScript library for arbitrary-precision arithmetic.
     *      https://github.com/MikeMcl/bignumber.js
     *      Copyright (c) 2019 Michael Mclaughlin <M8ch88l@gmail.com>
     *      MIT Licensed.
     *
     *      BigNumber.prototype methods     |  BigNumber methods
     *                                      |
     *      absoluteValue            abs    |  clone
     *      comparedTo                      |  config               set
     *      decimalPlaces            dp     |      DECIMAL_PLACES
     *      dividedBy                div    |      ROUNDING_MODE
     *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
     *      exponentiatedBy          pow    |      RANGE
     *      integerValue                    |      CRYPTO
     *      isEqualTo                eq     |      MODULO_MODE
     *      isFinite                        |      POW_PRECISION
     *      isGreaterThan            gt     |      FORMAT
     *      isGreaterThanOrEqualTo   gte    |      ALPHABET
     *      isInteger                       |  isBigNumber
     *      isLessThan               lt     |  maximum              max
     *      isLessThanOrEqualTo      lte    |  minimum              min
     *      isNaN                           |  random
     *      isNegative                      |  sum
     *      isPositive                      |
     *      isZero                          |
     *      minus                           |
     *      modulo                   mod    |
     *      multipliedBy             times  |
     *      negated                         |
     *      plus                            |
     *      precision                sd     |
     *      shiftedBy                       |
     *      squareRoot               sqrt   |
     *      toExponential                   |
     *      toFixed                         |
     *      toFormat                        |
     *      toFraction                      |
     *      toJSON                          |
     *      toNumber                        |
     *      toPrecision                     |
     *      toString                        |
     *      valueOf                         |
     *
     */


      var BigNumber,
        isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
        hasSymbol = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol',

        mathceil = Math.ceil,
        mathfloor = Math.floor,

        bignumberError = '[BigNumber Error] ',
        tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

        BASE = 1e14,
        LOG_BASE = 14,
        MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
        // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
        POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
        SQRT_BASE = 1e7,

        // EDITABLE
        // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
        // the arguments to toExponential, toFixed, toFormat, and toPrecision.
        MAX = 1E9;                                   // 0 to MAX_INT32


      /*
       * Create and return a BigNumber constructor.
       */
      function clone(configObject) {
        var div, convertBase, parseNumeric,
          P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
          ONE = new BigNumber(1),


          //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------


          // The default values below must be integers within the inclusive ranges stated.
          // The values can also be changed at run-time using BigNumber.set.

          // The maximum number of decimal places for operations involving division.
          DECIMAL_PLACES = 20,                     // 0 to MAX

          // The rounding mode used when rounding to the above decimal places, and when using
          // toExponential, toFixed, toFormat and toPrecision, and round (default value).
          // UP         0 Away from zero.
          // DOWN       1 Towards zero.
          // CEIL       2 Towards +Infinity.
          // FLOOR      3 Towards -Infinity.
          // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
          // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
          // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
          // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
          // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
          ROUNDING_MODE = 4,                       // 0 to 8

          // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

          // The exponent value at and beneath which toString returns exponential notation.
          // Number type: -7
          TO_EXP_NEG = -7,                         // 0 to -MAX

          // The exponent value at and above which toString returns exponential notation.
          // Number type: 21
          TO_EXP_POS = 21,                         // 0 to MAX

          // RANGE : [MIN_EXP, MAX_EXP]

          // The minimum exponent value, beneath which underflow to zero occurs.
          // Number type: -324  (5e-324)
          MIN_EXP = -1e7,                          // -1 to -MAX

          // The maximum exponent value, above which overflow to Infinity occurs.
          // Number type:  308  (1.7976931348623157e+308)
          // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
          MAX_EXP = 1e7,                           // 1 to MAX

          // Whether to use cryptographically-secure random number generation, if available.
          CRYPTO = false,                          // true or false

          // The modulo mode used when calculating the modulus: a mod n.
          // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
          // The remainder (r) is calculated as: r = a - n * q.
          //
          // UP        0 The remainder is positive if the dividend is negative, else is negative.
          // DOWN      1 The remainder has the same sign as the dividend.
          //             This modulo mode is commonly known as 'truncated division' and is
          //             equivalent to (a % n) in JavaScript.
          // FLOOR     3 The remainder has the same sign as the divisor (Python %).
          // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
          // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
          //             The remainder is always positive.
          //
          // The truncated division, floored division, Euclidian division and IEEE 754 remainder
          // modes are commonly used for the modulus operation.
          // Although the other rounding modes can also be used, they may not give useful results.
          MODULO_MODE = 1,                         // 0 to 9

          // The maximum number of significant digits of the result of the exponentiatedBy operation.
          // If POW_PRECISION is 0, there will be unlimited significant digits.
          POW_PRECISION = 0,                    // 0 to MAX

          // The format specification used by the BigNumber.prototype.toFormat method.
          FORMAT = {
            prefix: '',
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ',',
            decimalSeparator: '.',
            fractionGroupSize: 0,
            fractionGroupSeparator: '\xA0',      // non-breaking space
            suffix: ''
          },

          // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
          // '-', '.', whitespace, or repeated character.
          // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
          ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';


        //------------------------------------------------------------------------------------------


        // CONSTRUCTOR


        /*
         * The BigNumber constructor and exported function.
         * Create and return a new instance of a BigNumber object.
         *
         * v {number|string|BigNumber} A numeric value.
         * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
         */
        function BigNumber(v, b) {
          var alphabet, c, caseChanged, e, i, isNum, len, str,
            x = this;

          // Enable constructor call without `new`.
          if (!(x instanceof BigNumber)) return new BigNumber(v, b);

          if (b == null) {

            if (v && v._isBigNumber === true) {
              x.s = v.s;

              if (!v.c || v.e > MAX_EXP) {
                x.c = x.e = null;
              } else if (v.e < MIN_EXP) {
                x.c = [x.e = 0];
              } else {
                x.e = v.e;
                x.c = v.c.slice();
              }

              return;
            }

            if ((isNum = typeof v == 'number') && v * 0 == 0) {

              // Use `1 / n` to handle minus zero also.
              x.s = 1 / v < 0 ? (v = -v, -1) : 1;

              // Fast path for integers, where n < 2147483648 (2**31).
              if (v === ~~v) {
                for (e = 0, i = v; i >= 10; i /= 10, e++);

                if (e > MAX_EXP) {
                  x.c = x.e = null;
                } else {
                  x.e = e;
                  x.c = [v];
                }

                return;
              }

              str = String(v);
            } else {

              if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

              x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
            }

            // Decimal point?
            if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

            // Exponential form?
            if ((i = str.search(/e/i)) > 0) {

              // Determine exponent.
              if (e < 0) e = i;
              e += +str.slice(i + 1);
              str = str.substring(0, i);
            } else if (e < 0) {

              // Integer.
              e = str.length;
            }

          } else {

            // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
            intCheck(b, 2, ALPHABET.length, 'Base');

            // Allow exponential notation to be used with base 10 argument, while
            // also rounding to DECIMAL_PLACES as with other bases.
            if (b == 10) {
              x = new BigNumber(v);
              return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
            }

            str = String(v);

            if (isNum = typeof v == 'number') {

              // Avoid potential interpretation of Infinity and NaN as base 44+ values.
              if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

              x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

              // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
              if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
                throw Error
                 (tooManyDigits + v);
              }
            } else {
              x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
            }

            alphabet = ALPHABET.slice(0, b);
            e = i = 0;

            // Check that str is a valid base b number.
            // Don't use RegExp, so alphabet can contain special characters.
            for (len = str.length; i < len; i++) {
              if (alphabet.indexOf(c = str.charAt(i)) < 0) {
                if (c == '.') {

                  // If '.' is not the first character and it has not be found before.
                  if (i > e) {
                    e = len;
                    continue;
                  }
                } else if (!caseChanged) {

                  // Allow e.g. hexadecimal 'FF' as well as 'ff'.
                  if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
                      str == str.toLowerCase() && (str = str.toUpperCase())) {
                    caseChanged = true;
                    i = -1;
                    e = 0;
                    continue;
                  }
                }

                return parseNumeric(x, String(v), isNum, b);
              }
            }

            // Prevent later check for length on converted number.
            isNum = false;
            str = convertBase(str, b, 10, x.s);

            // Decimal point?
            if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
            else e = str.length;
          }

          // Determine leading zeros.
          for (i = 0; str.charCodeAt(i) === 48; i++);

          // Determine trailing zeros.
          for (len = str.length; str.charCodeAt(--len) === 48;);

          if (str = str.slice(i, ++len)) {
            len -= i;

            // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
            if (isNum && BigNumber.DEBUG &&
              len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
                throw Error
                 (tooManyDigits + (x.s * v));
            }

             // Overflow?
            if ((e = e - i - 1) > MAX_EXP) {

              // Infinity.
              x.c = x.e = null;

            // Underflow?
            } else if (e < MIN_EXP) {

              // Zero.
              x.c = [x.e = 0];
            } else {
              x.e = e;
              x.c = [];

              // Transform base

              // e is the base 10 exponent.
              // i is where to slice str to get the first element of the coefficient array.
              i = (e + 1) % LOG_BASE;
              if (e < 0) i += LOG_BASE;  // i < 1

              if (i < len) {
                if (i) x.c.push(+str.slice(0, i));

                for (len -= LOG_BASE; i < len;) {
                  x.c.push(+str.slice(i, i += LOG_BASE));
                }

                i = LOG_BASE - (str = str.slice(i)).length;
              } else {
                i -= len;
              }

              for (; i--; str += '0');
              x.c.push(+str);
            }
          } else {

            // Zero.
            x.c = [x.e = 0];
          }
        }


        // CONSTRUCTOR PROPERTIES


        BigNumber.clone = clone;

        BigNumber.ROUND_UP = 0;
        BigNumber.ROUND_DOWN = 1;
        BigNumber.ROUND_CEIL = 2;
        BigNumber.ROUND_FLOOR = 3;
        BigNumber.ROUND_HALF_UP = 4;
        BigNumber.ROUND_HALF_DOWN = 5;
        BigNumber.ROUND_HALF_EVEN = 6;
        BigNumber.ROUND_HALF_CEIL = 7;
        BigNumber.ROUND_HALF_FLOOR = 8;
        BigNumber.EUCLID = 9;


        /*
         * Configure infrequently-changing library-wide settings.
         *
         * Accept an object with the following optional properties (if the value of a property is
         * a number, it must be an integer within the inclusive range stated):
         *
         *   DECIMAL_PLACES   {number}           0 to MAX
         *   ROUNDING_MODE    {number}           0 to 8
         *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
         *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
         *   CRYPTO           {boolean}          true or false
         *   MODULO_MODE      {number}           0 to 9
         *   POW_PRECISION       {number}           0 to MAX
         *   ALPHABET         {string}           A string of two or more unique characters which does
         *                                       not contain '.'.
         *   FORMAT           {object}           An object with some of the following properties:
         *     prefix                 {string}
         *     groupSize              {number}
         *     secondaryGroupSize     {number}
         *     groupSeparator         {string}
         *     decimalSeparator       {string}
         *     fractionGroupSize      {number}
         *     fractionGroupSeparator {string}
         *     suffix                 {string}
         *
         * (The values assigned to the above FORMAT object properties are not checked for validity.)
         *
         * E.g.
         * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
         *
         * Ignore properties/parameters set to null or undefined, except for ALPHABET.
         *
         * Return an object with the properties current values.
         */
        BigNumber.config = BigNumber.set = function (obj) {
          var p, v;

          if (obj != null) {

            if (typeof obj == 'object') {

              // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
              // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
              if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
                v = obj[p];
                intCheck(v, 0, MAX, p);
                DECIMAL_PLACES = v;
              }

              // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
              // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
              if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
                v = obj[p];
                intCheck(v, 0, 8, p);
                ROUNDING_MODE = v;
              }

              // EXPONENTIAL_AT {number|number[]}
              // Integer, -MAX to MAX inclusive or
              // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
              // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
              if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
                v = obj[p];
                if (v && v.pop) {
                  intCheck(v[0], -MAX, 0, p);
                  intCheck(v[1], 0, MAX, p);
                  TO_EXP_NEG = v[0];
                  TO_EXP_POS = v[1];
                } else {
                  intCheck(v, -MAX, MAX, p);
                  TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
                }
              }

              // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
              // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
              // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
              if (obj.hasOwnProperty(p = 'RANGE')) {
                v = obj[p];
                if (v && v.pop) {
                  intCheck(v[0], -MAX, -1, p);
                  intCheck(v[1], 1, MAX, p);
                  MIN_EXP = v[0];
                  MAX_EXP = v[1];
                } else {
                  intCheck(v, -MAX, MAX, p);
                  if (v) {
                    MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                  } else {
                    throw Error
                     (bignumberError + p + ' cannot be zero: ' + v);
                  }
                }
              }

              // CRYPTO {boolean} true or false.
              // '[BigNumber Error] CRYPTO not true or false: {v}'
              // '[BigNumber Error] crypto unavailable'
              if (obj.hasOwnProperty(p = 'CRYPTO')) {
                v = obj[p];
                if (v === !!v) {
                  if (v) {
                    if (typeof crypto != 'undefined' && crypto &&
                     (crypto.getRandomValues || crypto.randomBytes)) {
                      CRYPTO = v;
                    } else {
                      CRYPTO = !v;
                      throw Error
                       (bignumberError + 'crypto unavailable');
                    }
                  } else {
                    CRYPTO = v;
                  }
                } else {
                  throw Error
                   (bignumberError + p + ' not true or false: ' + v);
                }
              }

              // MODULO_MODE {number} Integer, 0 to 9 inclusive.
              // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
              if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
                v = obj[p];
                intCheck(v, 0, 9, p);
                MODULO_MODE = v;
              }

              // POW_PRECISION {number} Integer, 0 to MAX inclusive.
              // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
              if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
                v = obj[p];
                intCheck(v, 0, MAX, p);
                POW_PRECISION = v;
              }

              // FORMAT {object}
              // '[BigNumber Error] FORMAT not an object: {v}'
              if (obj.hasOwnProperty(p = 'FORMAT')) {
                v = obj[p];
                if (typeof v == 'object') FORMAT = v;
                else throw Error
                 (bignumberError + p + ' not an object: ' + v);
              }

              // ALPHABET {string}
              // '[BigNumber Error] ALPHABET invalid: {v}'
              if (obj.hasOwnProperty(p = 'ALPHABET')) {
                v = obj[p];

                // Disallow if only one character,
                // or if it contains '+', '-', '.', whitespace, or a repeated character.
                if (typeof v == 'string' && !/^.$|[+-.\s]|(.).*\1/.test(v)) {
                  ALPHABET = v;
                } else {
                  throw Error
                   (bignumberError + p + ' invalid: ' + v);
                }
              }

            } else {

              // '[BigNumber Error] Object expected: {v}'
              throw Error
               (bignumberError + 'Object expected: ' + obj);
            }
          }

          return {
            DECIMAL_PLACES: DECIMAL_PLACES,
            ROUNDING_MODE: ROUNDING_MODE,
            EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
            RANGE: [MIN_EXP, MAX_EXP],
            CRYPTO: CRYPTO,
            MODULO_MODE: MODULO_MODE,
            POW_PRECISION: POW_PRECISION,
            FORMAT: FORMAT,
            ALPHABET: ALPHABET
          };
        };


        /*
         * Return true if v is a BigNumber instance, otherwise return false.
         *
         * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
         *
         * v {any}
         *
         * '[BigNumber Error] Invalid BigNumber: {v}'
         */
        BigNumber.isBigNumber = function (v) {
          if (!v || v._isBigNumber !== true) return false;
          if (!BigNumber.DEBUG) return true;

          var i, n,
            c = v.c,
            e = v.e,
            s = v.s;

          out: if ({}.toString.call(c) == '[object Array]') {

            if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {

              // If the first element is zero, the BigNumber value must be zero.
              if (c[0] === 0) {
                if (e === 0 && c.length === 1) return true;
                break out;
              }

              // Calculate number of digits that c[0] should have, based on the exponent.
              i = (e + 1) % LOG_BASE;
              if (i < 1) i += LOG_BASE;

              // Calculate number of digits of c[0].
              //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
              if (String(c[0]).length == i) {

                for (i = 0; i < c.length; i++) {
                  n = c[i];
                  if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
                }

                // Last element cannot be zero, unless it is the only element.
                if (n !== 0) return true;
              }
            }

          // Infinity/NaN
          } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
            return true;
          }

          throw Error
            (bignumberError + 'Invalid BigNumber: ' + v);
        };


        /*
         * Return a new BigNumber whose value is the maximum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.maximum = BigNumber.max = function () {
          return maxOrMin(arguments, P.lt);
        };


        /*
         * Return a new BigNumber whose value is the minimum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.minimum = BigNumber.min = function () {
          return maxOrMin(arguments, P.gt);
        };


        /*
         * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
         * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
         * zeros are produced).
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
         * '[BigNumber Error] crypto unavailable'
         */
        BigNumber.random = (function () {
          var pow2_53 = 0x20000000000000;

          // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
          // Check if Math.random() produces more than 32 bits of randomness.
          // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
          // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
          var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
           ? function () { return mathfloor(Math.random() * pow2_53); }
           : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
             (Math.random() * 0x800000 | 0); };

          return function (dp) {
            var a, b, e, k, v,
              i = 0,
              c = [],
              rand = new BigNumber(ONE);

            if (dp == null) dp = DECIMAL_PLACES;
            else intCheck(dp, 0, MAX);

            k = mathceil(dp / LOG_BASE);

            if (CRYPTO) {

              // Browsers supporting crypto.getRandomValues.
              if (crypto.getRandomValues) {

                a = crypto.getRandomValues(new Uint32Array(k *= 2));

                for (; i < k;) {

                  // 53 bits:
                  // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                  // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                  // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                  //                                     11111 11111111 11111111
                  // 0x20000 is 2^21.
                  v = a[i] * 0x20000 + (a[i + 1] >>> 11);

                  // Rejection sampling:
                  // 0 <= v < 9007199254740992
                  // Probability that v >= 9e15, is
                  // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
                  if (v >= 9e15) {
                    b = crypto.getRandomValues(new Uint32Array(2));
                    a[i] = b[0];
                    a[i + 1] = b[1];
                  } else {

                    // 0 <= v <= 8999999999999999
                    // 0 <= (v % 1e14) <= 99999999999999
                    c.push(v % 1e14);
                    i += 2;
                  }
                }
                i = k / 2;

              // Node.js supporting crypto.randomBytes.
              } else if (crypto.randomBytes) {

                // buffer
                a = crypto.randomBytes(k *= 7);

                for (; i < k;) {

                  // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                  // 0x100000000 is 2^32, 0x1000000 is 2^24
                  // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                  // 0 <= v < 9007199254740992
                  v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
                     (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
                     (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

                  if (v >= 9e15) {
                    crypto.randomBytes(7).copy(a, i);
                  } else {

                    // 0 <= (v % 1e14) <= 99999999999999
                    c.push(v % 1e14);
                    i += 7;
                  }
                }
                i = k / 7;
              } else {
                CRYPTO = false;
                throw Error
                 (bignumberError + 'crypto unavailable');
              }
            }

            // Use Math.random.
            if (!CRYPTO) {

              for (; i < k;) {
                v = random53bitInt();
                if (v < 9e15) c[i++] = v % 1e14;
              }
            }

            k = c[--i];
            dp %= LOG_BASE;

            // Convert trailing digits to zeros according to dp.
            if (k && dp) {
              v = POWS_TEN[LOG_BASE - dp];
              c[i] = mathfloor(k / v) * v;
            }

            // Remove trailing elements which are zero.
            for (; c[i] === 0; c.pop(), i--);

            // Zero?
            if (i < 0) {
              c = [e = 0];
            } else {

              // Remove leading elements which are zero and adjust exponent accordingly.
              for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

              // Count the digits of the first element of c to determine leading zeros, and...
              for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

              // adjust the exponent accordingly.
              if (i < LOG_BASE) e -= LOG_BASE - i;
            }

            rand.e = e;
            rand.c = c;
            return rand;
          };
        })();


        /*
         * Return a BigNumber whose value is the sum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.sum = function () {
          var i = 1,
            args = arguments,
            sum = new BigNumber(args[0]);
          for (; i < args.length;) sum = sum.plus(args[i++]);
          return sum;
        };


        // PRIVATE FUNCTIONS


        // Called by BigNumber and BigNumber.prototype.toString.
        convertBase = (function () {
          var decimal = '0123456789';

          /*
           * Convert string of baseIn to an array of numbers of baseOut.
           * Eg. toBaseOut('255', 10, 16) returns [15, 15].
           * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
           */
          function toBaseOut(str, baseIn, baseOut, alphabet) {
            var j,
              arr = [0],
              arrL,
              i = 0,
              len = str.length;

            for (; i < len;) {
              for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

              arr[0] += alphabet.indexOf(str.charAt(i++));

              for (j = 0; j < arr.length; j++) {

                if (arr[j] > baseOut - 1) {
                  if (arr[j + 1] == null) arr[j + 1] = 0;
                  arr[j + 1] += arr[j] / baseOut | 0;
                  arr[j] %= baseOut;
                }
              }
            }

            return arr.reverse();
          }

          // Convert a numeric string of baseIn to a numeric string of baseOut.
          // If the caller is toString, we are converting from base 10 to baseOut.
          // If the caller is BigNumber, we are converting from baseIn to base 10.
          return function (str, baseIn, baseOut, sign, callerIsToString) {
            var alphabet, d, e, k, r, x, xc, y,
              i = str.indexOf('.'),
              dp = DECIMAL_PLACES,
              rm = ROUNDING_MODE;

            // Non-integer.
            if (i >= 0) {
              k = POW_PRECISION;

              // Unlimited precision.
              POW_PRECISION = 0;
              str = str.replace('.', '');
              y = new BigNumber(baseIn);
              x = y.pow(str.length - i);
              POW_PRECISION = k;

              // Convert str as if an integer, then restore the fraction part by dividing the
              // result by its base raised to a power.

              y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
               10, baseOut, decimal);
              y.e = y.c.length;
            }

            // Convert the number as integer.

            xc = toBaseOut(str, baseIn, baseOut, callerIsToString
             ? (alphabet = ALPHABET, decimal)
             : (alphabet = decimal, ALPHABET));

            // xc now represents str as an integer and converted to baseOut. e is the exponent.
            e = k = xc.length;

            // Remove trailing zeros.
            for (; xc[--k] == 0; xc.pop());

            // Zero?
            if (!xc[0]) return alphabet.charAt(0);

            // Does str represent an integer? If so, no need for the division.
            if (i < 0) {
              --e;
            } else {
              x.c = xc;
              x.e = e;

              // The sign is needed for correct rounding.
              x.s = sign;
              x = div(x, y, dp, rm, baseOut);
              xc = x.c;
              r = x.r;
              e = x.e;
            }

            // xc now represents str converted to baseOut.

            // THe index of the rounding digit.
            d = e + dp + 1;

            // The rounding digit: the digit to the right of the digit that may be rounded up.
            i = xc[d];

            // Look at the rounding digits and mode to determine whether to round up.

            k = baseOut / 2;
            r = r || d < 0 || xc[d + 1] != null;

            r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
                  : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
                   rm == (x.s < 0 ? 8 : 7));

            // If the index of the rounding digit is not greater than zero, or xc represents
            // zero, then the result of the base conversion is zero or, if rounding up, a value
            // such as 0.00001.
            if (d < 1 || !xc[0]) {

              // 1^-dp or 0
              str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
            } else {

              // Truncate xc to the required number of decimal places.
              xc.length = d;

              // Round up?
              if (r) {

                // Rounding up may mean the previous digit has to be rounded up and so on.
                for (--baseOut; ++xc[--d] > baseOut;) {
                  xc[d] = 0;

                  if (!d) {
                    ++e;
                    xc = [1].concat(xc);
                  }
                }
              }

              // Determine trailing zeros.
              for (k = xc.length; !xc[--k];);

              // E.g. [4, 11, 15] becomes 4bf.
              for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

              // Add leading zeros, decimal point and trailing zeros as required.
              str = toFixedPoint(str, e, alphabet.charAt(0));
            }

            // The caller will add the sign.
            return str;
          };
        })();


        // Perform division in the specified base. Called by div and convertBase.
        div = (function () {

          // Assume non-zero x and k.
          function multiply(x, k, base) {
            var m, temp, xlo, xhi,
              carry = 0,
              i = x.length,
              klo = k % SQRT_BASE,
              khi = k / SQRT_BASE | 0;

            for (x = x.slice(); i--;) {
              xlo = x[i] % SQRT_BASE;
              xhi = x[i] / SQRT_BASE | 0;
              m = khi * xlo + xhi * klo;
              temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
              carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
              x[i] = temp % base;
            }

            if (carry) x = [carry].concat(x);

            return x;
          }

          function compare(a, b, aL, bL) {
            var i, cmp;

            if (aL != bL) {
              cmp = aL > bL ? 1 : -1;
            } else {

              for (i = cmp = 0; i < aL; i++) {

                if (a[i] != b[i]) {
                  cmp = a[i] > b[i] ? 1 : -1;
                  break;
                }
              }
            }

            return cmp;
          }

          function subtract(a, b, aL, base) {
            var i = 0;

            // Subtract b from a.
            for (; aL--;) {
              a[aL] -= i;
              i = a[aL] < b[aL] ? 1 : 0;
              a[aL] = i * base + a[aL] - b[aL];
            }

            // Remove leading zeros.
            for (; !a[0] && a.length > 1; a.splice(0, 1));
          }

          // x: dividend, y: divisor.
          return function (x, y, dp, rm, base) {
            var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
              yL, yz,
              s = x.s == y.s ? 1 : -1,
              xc = x.c,
              yc = y.c;

            // Either NaN, Infinity or 0?
            if (!xc || !xc[0] || !yc || !yc[0]) {

              return new BigNumber(

               // Return NaN if either NaN, or both Infinity or 0.
               !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

                // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                xc && xc[0] == 0 || !yc ? s * 0 : s / 0
             );
            }

            q = new BigNumber(s);
            qc = q.c = [];
            e = x.e - y.e;
            s = dp + e + 1;

            if (!base) {
              base = BASE;
              e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
              s = s / LOG_BASE | 0;
            }

            // Result exponent may be one less then the current value of e.
            // The coefficients of the BigNumbers from convertBase may have trailing zeros.
            for (i = 0; yc[i] == (xc[i] || 0); i++);

            if (yc[i] > (xc[i] || 0)) e--;

            if (s < 0) {
              qc.push(1);
              more = true;
            } else {
              xL = xc.length;
              yL = yc.length;
              i = 0;
              s += 2;

              // Normalise xc and yc so highest order digit of yc is >= base / 2.

              n = mathfloor(base / (yc[0] + 1));

              // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
              // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
              if (n > 1) {
                yc = multiply(yc, n, base);
                xc = multiply(xc, n, base);
                yL = yc.length;
                xL = xc.length;
              }

              xi = yL;
              rem = xc.slice(0, yL);
              remL = rem.length;

              // Add zeros to make remainder as long as divisor.
              for (; remL < yL; rem[remL++] = 0);
              yz = yc.slice();
              yz = [0].concat(yz);
              yc0 = yc[0];
              if (yc[1] >= base / 2) yc0++;
              // Not necessary, but to prevent trial digit n > base, when using base 3.
              // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

              do {
                n = 0;

                // Compare divisor and remainder.
                cmp = compare(yc, rem, yL, remL);

                // If divisor < remainder.
                if (cmp < 0) {

                  // Calculate trial digit, n.

                  rem0 = rem[0];
                  if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

                  // n is how many times the divisor goes into the current remainder.
                  n = mathfloor(rem0 / yc0);

                  //  Algorithm:
                  //  product = divisor multiplied by trial digit (n).
                  //  Compare product and remainder.
                  //  If product is greater than remainder:
                  //    Subtract divisor from product, decrement trial digit.
                  //  Subtract product from remainder.
                  //  If product was less than remainder at the last compare:
                  //    Compare new remainder and divisor.
                  //    If remainder is greater than divisor:
                  //      Subtract divisor from remainder, increment trial digit.

                  if (n > 1) {

                    // n may be > base only when base is 3.
                    if (n >= base) n = base - 1;

                    // product = divisor * trial digit.
                    prod = multiply(yc, n, base);
                    prodL = prod.length;
                    remL = rem.length;

                    // Compare product and remainder.
                    // If product > remainder then trial digit n too high.
                    // n is 1 too high about 5% of the time, and is not known to have
                    // ever been more than 1 too high.
                    while (compare(prod, rem, prodL, remL) == 1) {
                      n--;

                      // Subtract divisor from product.
                      subtract(prod, yL < prodL ? yz : yc, prodL, base);
                      prodL = prod.length;
                      cmp = 1;
                    }
                  } else {

                    // n is 0 or 1, cmp is -1.
                    // If n is 0, there is no need to compare yc and rem again below,
                    // so change cmp to 1 to avoid it.
                    // If n is 1, leave cmp as -1, so yc and rem are compared again.
                    if (n == 0) {

                      // divisor < remainder, so n must be at least 1.
                      cmp = n = 1;
                    }

                    // product = divisor
                    prod = yc.slice();
                    prodL = prod.length;
                  }

                  if (prodL < remL) prod = [0].concat(prod);

                  // Subtract product from remainder.
                  subtract(rem, prod, remL, base);
                  remL = rem.length;

                   // If product was < remainder.
                  if (cmp == -1) {

                    // Compare divisor and new remainder.
                    // If divisor < new remainder, subtract divisor from remainder.
                    // Trial digit n too low.
                    // n is 1 too low about 5% of the time, and very rarely 2 too low.
                    while (compare(yc, rem, yL, remL) < 1) {
                      n++;

                      // Subtract divisor from remainder.
                      subtract(rem, yL < remL ? yz : yc, remL, base);
                      remL = rem.length;
                    }
                  }
                } else if (cmp === 0) {
                  n++;
                  rem = [0];
                } // else cmp === 1 and n will be 0

                // Add the next digit, n, to the result array.
                qc[i++] = n;

                // Update the remainder.
                if (rem[0]) {
                  rem[remL++] = xc[xi] || 0;
                } else {
                  rem = [xc[xi]];
                  remL = 1;
                }
              } while ((xi++ < xL || rem[0] != null) && s--);

              more = rem[0] != null;

              // Leading zero?
              if (!qc[0]) qc.splice(0, 1);
            }

            if (base == BASE) {

              // To calculate q.e, first get the number of digits of qc[0].
              for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

              round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

            // Caller is convertBase.
            } else {
              q.e = e;
              q.r = +more;
            }

            return q;
          };
        })();


        /*
         * Return a string representing the value of BigNumber n in fixed-point or exponential
         * notation rounded to the specified decimal places or significant digits.
         *
         * n: a BigNumber.
         * i: the index of the last digit required (i.e. the digit that may be rounded up).
         * rm: the rounding mode.
         * id: 1 (toExponential) or 2 (toPrecision).
         */
        function format(n, i, rm, id) {
          var c0, e, ne, len, str;

          if (rm == null) rm = ROUNDING_MODE;
          else intCheck(rm, 0, 8);

          if (!n.c) return n.toString();

          c0 = n.c[0];
          ne = n.e;

          if (i == null) {
            str = coeffToString(n.c);
            str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
             ? toExponential(str, ne)
             : toFixedPoint(str, ne, '0');
          } else {
            n = round(new BigNumber(n), i, rm);

            // n.e may have changed if the value was rounded up.
            e = n.e;

            str = coeffToString(n.c);
            len = str.length;

            // toPrecision returns exponential notation if the number of significant digits
            // specified is less than the number of digits necessary to represent the integer
            // part of the value in fixed-point notation.

            // Exponential notation.
            if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

              // Append zeros?
              for (; len < i; str += '0', len++);
              str = toExponential(str, e);

            // Fixed-point notation.
            } else {
              i -= ne;
              str = toFixedPoint(str, e, '0');

              // Append zeros?
              if (e + 1 > len) {
                if (--i > 0) for (str += '.'; i--; str += '0');
              } else {
                i += e - len;
                if (i > 0) {
                  if (e + 1 == len) str += '.';
                  for (; i--; str += '0');
                }
              }
            }
          }

          return n.s < 0 && c0 ? '-' + str : str;
        }


        // Handle BigNumber.max and BigNumber.min.
        function maxOrMin(args, method) {
          var n,
            i = 1,
            m = new BigNumber(args[0]);

          for (; i < args.length; i++) {
            n = new BigNumber(args[i]);

            // If any number is NaN, return NaN.
            if (!n.s) {
              m = n;
              break;
            } else if (method.call(m, n)) {
              m = n;
            }
          }

          return m;
        }


        /*
         * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
         * Called by minus, plus and times.
         */
        function normalise(n, c, e) {
          var i = 1,
            j = c.length;

           // Remove trailing zeros.
          for (; !c[--j]; c.pop());

          // Calculate the base 10 exponent. First get the number of digits of c[0].
          for (j = c[0]; j >= 10; j /= 10, i++);

          // Overflow?
          if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

            // Infinity.
            n.c = n.e = null;

          // Underflow?
          } else if (e < MIN_EXP) {

            // Zero.
            n.c = [n.e = 0];
          } else {
            n.e = e;
            n.c = c;
          }

          return n;
        }


        // Handle values that fail the validity test in BigNumber.
        parseNumeric = (function () {
          var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
            dotAfter = /^([^.]+)\.$/,
            dotBefore = /^\.([^.]+)$/,
            isInfinityOrNaN = /^-?(Infinity|NaN)$/,
            whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

          return function (x, str, isNum, b) {
            var base,
              s = isNum ? str : str.replace(whitespaceOrPlus, '');

            // No exception on ±Infinity or NaN.
            if (isInfinityOrNaN.test(s)) {
              x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
            } else {
              if (!isNum) {

                // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                s = s.replace(basePrefix, function (m, p1, p2) {
                  base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
                  return !b || b == base ? p1 : m;
                });

                if (b) {
                  base = b;

                  // E.g. '1.' to '1', '.1' to '0.1'
                  s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
                }

                if (str != s) return new BigNumber(s, base);
              }

              // '[BigNumber Error] Not a number: {n}'
              // '[BigNumber Error] Not a base {b} number: {n}'
              if (BigNumber.DEBUG) {
                throw Error
                  (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
              }

              // NaN
              x.s = null;
            }

            x.c = x.e = null;
          }
        })();


        /*
         * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
         * If r is truthy, it is known that there are more digits after the rounding digit.
         */
        function round(x, sd, rm, r) {
          var d, i, j, k, n, ni, rd,
            xc = x.c,
            pows10 = POWS_TEN;

          // if x is not Infinity or NaN...
          if (xc) {

            // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
            // n is a base 1e14 number, the value of the element of array x.c containing rd.
            // ni is the index of n within x.c.
            // d is the number of digits of n.
            // i is the index of rd within n including leading zeros.
            // j is the actual index of rd within n (if < 0, rd is a leading zero).
            out: {

              // Get the number of digits of the first element of xc.
              for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
              i = sd - d;

              // If the rounding digit is in the first element of xc...
              if (i < 0) {
                i += LOG_BASE;
                j = sd;
                n = xc[ni = 0];

                // Get the rounding digit at index j of n.
                rd = n / pows10[d - j - 1] % 10 | 0;
              } else {
                ni = mathceil((i + 1) / LOG_BASE);

                if (ni >= xc.length) {

                  if (r) {

                    // Needed by sqrt.
                    for (; xc.length <= ni; xc.push(0));
                    n = rd = 0;
                    d = 1;
                    i %= LOG_BASE;
                    j = i - LOG_BASE + 1;
                  } else {
                    break out;
                  }
                } else {
                  n = k = xc[ni];

                  // Get the number of digits of n.
                  for (d = 1; k >= 10; k /= 10, d++);

                  // Get the index of rd within n.
                  i %= LOG_BASE;

                  // Get the index of rd within n, adjusted for leading zeros.
                  // The number of leading zeros of n is given by LOG_BASE - d.
                  j = i - LOG_BASE + d;

                  // Get the rounding digit at index j of n.
                  rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
                }
              }

              r = r || sd < 0 ||

              // Are there any non-zero digits after the rounding digit?
              // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
              // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
               xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

              r = rm < 4
               ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
               : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

                // Check whether the digit to the left of the rounding digit is odd.
                ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
                 rm == (x.s < 0 ? 8 : 7));

              if (sd < 1 || !xc[0]) {
                xc.length = 0;

                if (r) {

                  // Convert sd to decimal places.
                  sd -= x.e + 1;

                  // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                  xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                  x.e = -sd || 0;
                } else {

                  // Zero.
                  xc[0] = x.e = 0;
                }

                return x;
              }

              // Remove excess digits.
              if (i == 0) {
                xc.length = ni;
                k = 1;
                ni--;
              } else {
                xc.length = ni + 1;
                k = pows10[LOG_BASE - i];

                // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                // j > 0 means i > number of leading zeros of n.
                xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
              }

              // Round up?
              if (r) {

                for (; ;) {

                  // If the digit to be rounded up is in the first element of xc...
                  if (ni == 0) {

                    // i will be the length of xc[0] before k is added.
                    for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                    j = xc[0] += k;
                    for (k = 1; j >= 10; j /= 10, k++);

                    // if i != k the length has increased.
                    if (i != k) {
                      x.e++;
                      if (xc[0] == BASE) xc[0] = 1;
                    }

                    break;
                  } else {
                    xc[ni] += k;
                    if (xc[ni] != BASE) break;
                    xc[ni--] = 0;
                    k = 1;
                  }
                }
              }

              // Remove trailing zeros.
              for (i = xc.length; xc[--i] === 0; xc.pop());
            }

            // Overflow? Infinity.
            if (x.e > MAX_EXP) {
              x.c = x.e = null;

            // Underflow? Zero.
            } else if (x.e < MIN_EXP) {
              x.c = [x.e = 0];
            }
          }

          return x;
        }


        function valueOf(n) {
          var str,
            e = n.e;

          if (e === null) return n.toString();

          str = coeffToString(n.c);

          str = e <= TO_EXP_NEG || e >= TO_EXP_POS
            ? toExponential(str, e)
            : toFixedPoint(str, e, '0');

          return n.s < 0 ? '-' + str : str;
        }


        // PROTOTYPE/INSTANCE METHODS


        /*
         * Return a new BigNumber whose value is the absolute value of this BigNumber.
         */
        P.absoluteValue = P.abs = function () {
          var x = new BigNumber(this);
          if (x.s < 0) x.s = 1;
          return x;
        };


        /*
         * Return
         *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
         *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
         *   0 if they have the same value,
         *   or null if the value of either is NaN.
         */
        P.comparedTo = function (y, b) {
          return compare(this, new BigNumber(y, b));
        };


        /*
         * If dp is undefined or null or true or false, return the number of decimal places of the
         * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
         *
         * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
         * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
         * ROUNDING_MODE if rm is omitted.
         *
         * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
         */
        P.decimalPlaces = P.dp = function (dp, rm) {
          var c, n, v,
            x = this;

          if (dp != null) {
            intCheck(dp, 0, MAX);
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);

            return round(new BigNumber(x), dp + x.e + 1, rm);
          }

          if (!(c = x.c)) return null;
          n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

          // Subtract the number of trailing zeros of the last number.
          if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
          if (n < 0) n = 0;

          return n;
        };


        /*
         *  n / 0 = I
         *  n / N = N
         *  n / I = 0
         *  0 / n = 0
         *  0 / 0 = N
         *  0 / N = N
         *  0 / I = 0
         *  N / n = N
         *  N / 0 = N
         *  N / N = N
         *  N / I = N
         *  I / n = I
         *  I / 0 = I
         *  I / N = N
         *  I / I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
         * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
        P.dividedBy = P.div = function (y, b) {
          return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
        };


        /*
         * Return a new BigNumber whose value is the integer part of dividing the value of this
         * BigNumber by the value of BigNumber(y, b).
         */
        P.dividedToIntegerBy = P.idiv = function (y, b) {
          return div(this, new BigNumber(y, b), 0, 1);
        };


        /*
         * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
         *
         * If m is present, return the result modulo m.
         * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
         * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
         *
         * The modular power operation works efficiently when x, n, and m are integers, otherwise it
         * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
         *
         * n {number|string|BigNumber} The exponent. An integer.
         * [m] {number|string|BigNumber} The modulus.
         *
         * '[BigNumber Error] Exponent not an integer: {n}'
         */
        P.exponentiatedBy = P.pow = function (n, m) {
          var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
            x = this;

          n = new BigNumber(n);

          // Allow NaN and ±Infinity, but not other non-integers.
          if (n.c && !n.isInteger()) {
            throw Error
              (bignumberError + 'Exponent not an integer: ' + valueOf(n));
          }

          if (m != null) m = new BigNumber(m);

          // Exponent of MAX_SAFE_INTEGER is 15.
          nIsBig = n.e > 14;

          // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
          if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

            // The sign of the result of pow when x is negative depends on the evenness of n.
            // If +n overflows to ±Infinity, the evenness of n would be not be known.
            y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
            return m ? y.mod(m) : y;
          }

          nIsNeg = n.s < 0;

          if (m) {

            // x % m returns NaN if abs(m) is zero, or m is NaN.
            if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

            isModExp = !nIsNeg && x.isInteger() && m.isInteger();

            if (isModExp) x = x.mod(m);

          // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
          // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
          } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
            // [1, 240000000]
            ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
            // [80000000000000]  [99999750000000]
            : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

            // If x is negative and n is odd, k = -0, else k = 0.
            k = x.s < 0 && isOdd(n) ? -0 : 0;

            // If x >= 1, k = ±Infinity.
            if (x.e > -1) k = 1 / k;

            // If n is negative return ±0, else return ±Infinity.
            return new BigNumber(nIsNeg ? 1 / k : k);

          } else if (POW_PRECISION) {

            // Truncating each coefficient array to a length of k after each multiplication
            // equates to truncating significant digits to POW_PRECISION + [28, 41],
            // i.e. there will be a minimum of 28 guard digits retained.
            k = mathceil(POW_PRECISION / LOG_BASE + 2);
          }

          if (nIsBig) {
            half = new BigNumber(0.5);
            if (nIsNeg) n.s = 1;
            nIsOdd = isOdd(n);
          } else {
            i = Math.abs(+valueOf(n));
            nIsOdd = i % 2;
          }

          y = new BigNumber(ONE);

          // Performs 54 loop iterations for n of 9007199254740991.
          for (; ;) {

            if (nIsOdd) {
              y = y.times(x);
              if (!y.c) break;

              if (k) {
                if (y.c.length > k) y.c.length = k;
              } else if (isModExp) {
                y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
              }
            }

            if (i) {
              i = mathfloor(i / 2);
              if (i === 0) break;
              nIsOdd = i % 2;
            } else {
              n = n.times(half);
              round(n, n.e + 1, 1);

              if (n.e > 14) {
                nIsOdd = isOdd(n);
              } else {
                i = +valueOf(n);
                if (i === 0) break;
                nIsOdd = i % 2;
              }
            }

            x = x.times(x);

            if (k) {
              if (x.c && x.c.length > k) x.c.length = k;
            } else if (isModExp) {
              x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
            }
          }

          if (isModExp) return y;
          if (nIsNeg) y = ONE.div(y);

          return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
         * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
         */
        P.integerValue = function (rm) {
          var n = new BigNumber(this);
          if (rm == null) rm = ROUNDING_MODE;
          else intCheck(rm, 0, 8);
          return round(n, n.e + 1, rm);
        };


        /*
         * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
         * otherwise return false.
         */
        P.isEqualTo = P.eq = function (y, b) {
          return compare(this, new BigNumber(y, b)) === 0;
        };


        /*
         * Return true if the value of this BigNumber is a finite number, otherwise return false.
         */
        P.isFinite = function () {
          return !!this.c;
        };


        /*
         * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * otherwise return false.
         */
        P.isGreaterThan = P.gt = function (y, b) {
          return compare(this, new BigNumber(y, b)) > 0;
        };


        /*
         * Return true if the value of this BigNumber is greater than or equal to the value of
         * BigNumber(y, b), otherwise return false.
         */
        P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
          return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

        };


        /*
         * Return true if the value of this BigNumber is an integer, otherwise return false.
         */
        P.isInteger = function () {
          return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
        };


        /*
         * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
         * otherwise return false.
         */
        P.isLessThan = P.lt = function (y, b) {
          return compare(this, new BigNumber(y, b)) < 0;
        };


        /*
         * Return true if the value of this BigNumber is less than or equal to the value of
         * BigNumber(y, b), otherwise return false.
         */
        P.isLessThanOrEqualTo = P.lte = function (y, b) {
          return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
        };


        /*
         * Return true if the value of this BigNumber is NaN, otherwise return false.
         */
        P.isNaN = function () {
          return !this.s;
        };


        /*
         * Return true if the value of this BigNumber is negative, otherwise return false.
         */
        P.isNegative = function () {
          return this.s < 0;
        };


        /*
         * Return true if the value of this BigNumber is positive, otherwise return false.
         */
        P.isPositive = function () {
          return this.s > 0;
        };


        /*
         * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
         */
        P.isZero = function () {
          return !!this.c && this.c[0] == 0;
        };


        /*
         *  n - 0 = n
         *  n - N = N
         *  n - I = -I
         *  0 - n = -n
         *  0 - 0 = 0
         *  0 - N = N
         *  0 - I = -I
         *  N - n = N
         *  N - 0 = N
         *  N - N = N
         *  N - I = N
         *  I - n = I
         *  I - 0 = I
         *  I - N = N
         *  I - I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber minus the value of
         * BigNumber(y, b).
         */
        P.minus = function (y, b) {
          var i, j, t, xLTy,
            x = this,
            a = x.s;

          y = new BigNumber(y, b);
          b = y.s;

          // Either NaN?
          if (!a || !b) return new BigNumber(NaN);

          // Signs differ?
          if (a != b) {
            y.s = -b;
            return x.plus(y);
          }

          var xe = x.e / LOG_BASE,
            ye = y.e / LOG_BASE,
            xc = x.c,
            yc = y.c;

          if (!xe || !ye) {

            // Either Infinity?
            if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

            // Either zero?
            if (!xc[0] || !yc[0]) {

              // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
              return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

               // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
               ROUNDING_MODE == 3 ? -0 : 0);
            }
          }

          xe = bitFloor(xe);
          ye = bitFloor(ye);
          xc = xc.slice();

          // Determine which is the bigger number.
          if (a = xe - ye) {

            if (xLTy = a < 0) {
              a = -a;
              t = xc;
            } else {
              ye = xe;
              t = yc;
            }

            t.reverse();

            // Prepend zeros to equalise exponents.
            for (b = a; b--; t.push(0));
            t.reverse();
          } else {

            // Exponents equal. Check digit by digit.
            j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

            for (a = b = 0; b < j; b++) {

              if (xc[b] != yc[b]) {
                xLTy = xc[b] < yc[b];
                break;
              }
            }
          }

          // x < y? Point xc to the array of the bigger number.
          if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

          b = (j = yc.length) - (i = xc.length);

          // Append zeros to xc if shorter.
          // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
          if (b > 0) for (; b--; xc[i++] = 0);
          b = BASE - 1;

          // Subtract yc from xc.
          for (; j > a;) {

            if (xc[--j] < yc[j]) {
              for (i = j; i && !xc[--i]; xc[i] = b);
              --xc[i];
              xc[j] += BASE;
            }

            xc[j] -= yc[j];
          }

          // Remove leading zeros and adjust exponent accordingly.
          for (; xc[0] == 0; xc.splice(0, 1), --ye);

          // Zero?
          if (!xc[0]) {

            // Following IEEE 754 (2008) 6.3,
            // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
            y.s = ROUNDING_MODE == 3 ? -1 : 1;
            y.c = [y.e = 0];
            return y;
          }

          // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
          // for finite x and y.
          return normalise(y, xc, ye);
        };


        /*
         *   n % 0 =  N
         *   n % N =  N
         *   n % I =  n
         *   0 % n =  0
         *  -0 % n = -0
         *   0 % 0 =  N
         *   0 % N =  N
         *   0 % I =  0
         *   N % n =  N
         *   N % 0 =  N
         *   N % N =  N
         *   N % I =  N
         *   I % n =  N
         *   I % 0 =  N
         *   I % N =  N
         *   I % I =  N
         *
         * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
         * BigNumber(y, b). The result depends on the value of MODULO_MODE.
         */
        P.modulo = P.mod = function (y, b) {
          var q, s,
            x = this;

          y = new BigNumber(y, b);

          // Return NaN if x is Infinity or NaN, or y is NaN or zero.
          if (!x.c || !y.s || y.c && !y.c[0]) {
            return new BigNumber(NaN);

          // Return x if y is Infinity or x is zero.
          } else if (!y.c || x.c && !x.c[0]) {
            return new BigNumber(x);
          }

          if (MODULO_MODE == 9) {

            // Euclidian division: q = sign(y) * floor(x / abs(y))
            // r = x - qy    where  0 <= r < abs(y)
            s = y.s;
            y.s = 1;
            q = div(x, y, 0, 3);
            y.s = s;
            q.s *= s;
          } else {
            q = div(x, y, 0, MODULO_MODE);
          }

          y = x.minus(q.times(y));

          // To match JavaScript %, ensure sign of zero is sign of dividend.
          if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

          return y;
        };


        /*
         *  n * 0 = 0
         *  n * N = N
         *  n * I = I
         *  0 * n = 0
         *  0 * 0 = 0
         *  0 * N = N
         *  0 * I = N
         *  N * n = N
         *  N * 0 = N
         *  N * N = N
         *  N * I = N
         *  I * n = I
         *  I * 0 = N
         *  I * N = N
         *  I * I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
         * of BigNumber(y, b).
         */
        P.multipliedBy = P.times = function (y, b) {
          var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
            base, sqrtBase,
            x = this,
            xc = x.c,
            yc = (y = new BigNumber(y, b)).c;

          // Either NaN, ±Infinity or ±0?
          if (!xc || !yc || !xc[0] || !yc[0]) {

            // Return NaN if either is NaN, or one is 0 and the other is Infinity.
            if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
              y.c = y.e = y.s = null;
            } else {
              y.s *= x.s;

              // Return ±Infinity if either is ±Infinity.
              if (!xc || !yc) {
                y.c = y.e = null;

              // Return ±0 if either is ±0.
              } else {
                y.c = [0];
                y.e = 0;
              }
            }

            return y;
          }

          e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
          y.s *= x.s;
          xcL = xc.length;
          ycL = yc.length;

          // Ensure xc points to longer array and xcL to its length.
          if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

          // Initialise the result array with zeros.
          for (i = xcL + ycL, zc = []; i--; zc.push(0));

          base = BASE;
          sqrtBase = SQRT_BASE;

          for (i = ycL; --i >= 0;) {
            c = 0;
            ylo = yc[i] % sqrtBase;
            yhi = yc[i] / sqrtBase | 0;

            for (k = xcL, j = i + k; j > i;) {
              xlo = xc[--k] % sqrtBase;
              xhi = xc[k] / sqrtBase | 0;
              m = yhi * xlo + xhi * ylo;
              xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
              c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
              zc[j--] = xlo % base;
            }

            zc[j] = c;
          }

          if (c) {
            ++e;
          } else {
            zc.splice(0, 1);
          }

          return normalise(y, zc, e);
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber negated,
         * i.e. multiplied by -1.
         */
        P.negated = function () {
          var x = new BigNumber(this);
          x.s = -x.s || null;
          return x;
        };


        /*
         *  n + 0 = n
         *  n + N = N
         *  n + I = I
         *  0 + n = n
         *  0 + 0 = 0
         *  0 + N = N
         *  0 + I = I
         *  N + n = N
         *  N + 0 = N
         *  N + N = N
         *  N + I = N
         *  I + n = I
         *  I + 0 = I
         *  I + N = N
         *  I + I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber plus the value of
         * BigNumber(y, b).
         */
        P.plus = function (y, b) {
          var t,
            x = this,
            a = x.s;

          y = new BigNumber(y, b);
          b = y.s;

          // Either NaN?
          if (!a || !b) return new BigNumber(NaN);

          // Signs differ?
           if (a != b) {
            y.s = -b;
            return x.minus(y);
          }

          var xe = x.e / LOG_BASE,
            ye = y.e / LOG_BASE,
            xc = x.c,
            yc = y.c;

          if (!xe || !ye) {

            // Return ±Infinity if either ±Infinity.
            if (!xc || !yc) return new BigNumber(a / 0);

            // Either zero?
            // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
            if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
          }

          xe = bitFloor(xe);
          ye = bitFloor(ye);
          xc = xc.slice();

          // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
          if (a = xe - ye) {
            if (a > 0) {
              ye = xe;
              t = yc;
            } else {
              a = -a;
              t = xc;
            }

            t.reverse();
            for (; a--; t.push(0));
            t.reverse();
          }

          a = xc.length;
          b = yc.length;

          // Point xc to the longer array, and b to the shorter length.
          if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

          // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
          for (a = 0; b;) {
            a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
            xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
          }

          if (a) {
            xc = [a].concat(xc);
            ++ye;
          }

          // No need to check for zero, as +x + +y != 0 && -x + -y != 0
          // ye = MAX_EXP + 1 possible
          return normalise(y, xc, ye);
        };


        /*
         * If sd is undefined or null or true or false, return the number of significant digits of
         * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
         * If sd is true include integer-part trailing zeros in the count.
         *
         * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
         * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
         * ROUNDING_MODE if rm is omitted.
         *
         * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
         *                     boolean: whether to count integer-part trailing zeros: true or false.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
         */
        P.precision = P.sd = function (sd, rm) {
          var c, n, v,
            x = this;

          if (sd != null && sd !== !!sd) {
            intCheck(sd, 1, MAX);
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);

            return round(new BigNumber(x), sd, rm);
          }

          if (!(c = x.c)) return null;
          v = c.length - 1;
          n = v * LOG_BASE + 1;

          if (v = c[v]) {

            // Subtract the number of trailing zeros of the last element.
            for (; v % 10 == 0; v /= 10, n--);

            // Add the number of digits of the first element.
            for (v = c[0]; v >= 10; v /= 10, n++);
          }

          if (sd && x.e + 1 > n) n = x.e + 1;

          return n;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
         * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
         *
         * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
         */
        P.shiftedBy = function (k) {
          intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
          return this.times('1e' + k);
        };


        /*
         *  sqrt(-n) =  N
         *  sqrt(N) =  N
         *  sqrt(-I) =  N
         *  sqrt(I) =  I
         *  sqrt(0) =  0
         *  sqrt(-0) = -0
         *
         * Return a new BigNumber whose value is the square root of the value of this BigNumber,
         * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
        P.squareRoot = P.sqrt = function () {
          var m, n, r, rep, t,
            x = this,
            c = x.c,
            s = x.s,
            e = x.e,
            dp = DECIMAL_PLACES + 4,
            half = new BigNumber('0.5');

          // Negative/NaN/Infinity/zero?
          if (s !== 1 || !c || !c[0]) {
            return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
          }

          // Initial estimate.
          s = Math.sqrt(+valueOf(x));

          // Math.sqrt underflow/overflow?
          // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
          if (s == 0 || s == 1 / 0) {
            n = coeffToString(c);
            if ((n.length + e) % 2 == 0) n += '0';
            s = Math.sqrt(+n);
            e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

            if (s == 1 / 0) {
              n = '1e' + e;
            } else {
              n = s.toExponential();
              n = n.slice(0, n.indexOf('e') + 1) + e;
            }

            r = new BigNumber(n);
          } else {
            r = new BigNumber(s + '');
          }

          // Check for zero.
          // r could be zero if MIN_EXP is changed after the this value was created.
          // This would cause a division by zero (x/t) and hence Infinity below, which would cause
          // coeffToString to throw.
          if (r.c[0]) {
            e = r.e;
            s = e + dp;
            if (s < 3) s = 0;

            // Newton-Raphson iteration.
            for (; ;) {
              t = r;
              r = half.times(t.plus(div(x, t, dp, 1)));

              if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

                // The exponent of r may here be one less than the final result exponent,
                // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                // are indexed correctly.
                if (r.e < e) --s;
                n = n.slice(s - 3, s + 1);

                // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                // iteration.
                if (n == '9999' || !rep && n == '4999') {

                  // On the first iteration only, check to see if rounding up gives the
                  // exact result as the nines may infinitely repeat.
                  if (!rep) {
                    round(t, t.e + DECIMAL_PLACES + 2, 0);

                    if (t.times(t).eq(x)) {
                      r = t;
                      break;
                    }
                  }

                  dp += 4;
                  s += 4;
                  rep = 1;
                } else {

                  // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                  // result. If not, then there are further digits and m will be truthy.
                  if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

                    // Truncate to the first rounding digit.
                    round(r, r.e + DECIMAL_PLACES + 2, 1);
                    m = !r.times(r).eq(x);
                  }

                  break;
                }
              }
            }
          }

          return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
        };


        /*
         * Return a string representing the value of this BigNumber in exponential notation and
         * rounded using ROUNDING_MODE to dp fixed decimal places.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
         */
        P.toExponential = function (dp, rm) {
          if (dp != null) {
            intCheck(dp, 0, MAX);
            dp++;
          }
          return format(this, dp, rm, 1);
        };


        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounding
         * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
         * but e.g. (-0.00001).toFixed(0) is '-0'.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
         */
        P.toFixed = function (dp, rm) {
          if (dp != null) {
            intCheck(dp, 0, MAX);
            dp = dp + this.e + 1;
          }
          return format(this, dp, rm);
        };


        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounded
         * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
         * of the format or FORMAT object (see BigNumber.set).
         *
         * The formatting object may contain some or all of the properties shown below.
         *
         * FORMAT = {
         *   prefix: '',
         *   groupSize: 3,
         *   secondaryGroupSize: 0,
         *   groupSeparator: ',',
         *   decimalSeparator: '.',
         *   fractionGroupSize: 0,
         *   fractionGroupSeparator: '\xA0',      // non-breaking space
         *   suffix: ''
         * };
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         * [format] {object} Formatting options. See FORMAT pbject above.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
         * '[BigNumber Error] Argument not an object: {format}'
         */
        P.toFormat = function (dp, rm, format) {
          var str,
            x = this;

          if (format == null) {
            if (dp != null && rm && typeof rm == 'object') {
              format = rm;
              rm = null;
            } else if (dp && typeof dp == 'object') {
              format = dp;
              dp = rm = null;
            } else {
              format = FORMAT;
            }
          } else if (typeof format != 'object') {
            throw Error
              (bignumberError + 'Argument not an object: ' + format);
          }

          str = x.toFixed(dp, rm);

          if (x.c) {
            var i,
              arr = str.split('.'),
              g1 = +format.groupSize,
              g2 = +format.secondaryGroupSize,
              groupSeparator = format.groupSeparator || '',
              intPart = arr[0],
              fractionPart = arr[1],
              isNeg = x.s < 0,
              intDigits = isNeg ? intPart.slice(1) : intPart,
              len = intDigits.length;

            if (g2) i = g1, g1 = g2, g2 = i, len -= i;

            if (g1 > 0 && len > 0) {
              i = len % g1 || g1;
              intPart = intDigits.substr(0, i);
              for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
              if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
              if (isNeg) intPart = '-' + intPart;
            }

            str = fractionPart
             ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
              ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
               '$&' + (format.fractionGroupSeparator || ''))
              : fractionPart)
             : intPart;
          }

          return (format.prefix || '') + str + (format.suffix || '');
        };


        /*
         * Return an array of two BigNumbers representing the value of this BigNumber as a simple
         * fraction with an integer numerator and an integer denominator.
         * The denominator will be a positive non-zero value less than or equal to the specified
         * maximum denominator. If a maximum denominator is not specified, the denominator will be
         * the lowest value necessary to represent the number exactly.
         *
         * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
         *
         * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
         */
        P.toFraction = function (md) {
          var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
            x = this,
            xc = x.c;

          if (md != null) {
            n = new BigNumber(md);

            // Throw if md is less than one or is not an integer, unless it is Infinity.
            if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
              throw Error
                (bignumberError + 'Argument ' +
                  (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
            }
          }

          if (!xc) return new BigNumber(x);

          d = new BigNumber(ONE);
          n1 = d0 = new BigNumber(ONE);
          d1 = n0 = new BigNumber(ONE);
          s = coeffToString(xc);

          // Determine initial denominator.
          // d is a power of 10 and the minimum max denominator that specifies the value exactly.
          e = d.e = s.length - x.e - 1;
          d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
          md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

          exp = MAX_EXP;
          MAX_EXP = 1 / 0;
          n = new BigNumber(s);

          // n0 = d1 = 0
          n0.c[0] = 0;

          for (; ;)  {
            q = div(n, d, 0, 1);
            d2 = d0.plus(q.times(d1));
            if (d2.comparedTo(md) == 1) break;
            d0 = d1;
            d1 = d2;
            n1 = n0.plus(q.times(d2 = n1));
            n0 = d2;
            d = n.minus(q.times(d2 = d));
            n = d2;
          }

          d2 = div(md.minus(d0), d1, 0, 1);
          n0 = n0.plus(d2.times(n1));
          d0 = d0.plus(d2.times(d1));
          n0.s = n1.s = x.s;
          e = e * 2;

          // Determine which fraction is closer to x, n0/d0 or n1/d1
          r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
              div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

          MAX_EXP = exp;

          return r;
        };


        /*
         * Return the value of this BigNumber converted to a number primitive.
         */
        P.toNumber = function () {
          return +valueOf(this);
        };


        /*
         * Return a string representing the value of this BigNumber rounded to sd significant digits
         * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
         * necessary to represent the integer part of the value in fixed-point notation, then use
         * exponential notation.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
         */
        P.toPrecision = function (sd, rm) {
          if (sd != null) intCheck(sd, 1, MAX);
          return format(this, sd, rm, 2);
        };


        /*
         * Return a string representing the value of this BigNumber in base b, or base 10 if b is
         * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
         * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
         * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
         * TO_EXP_NEG, return exponential notation.
         *
         * [b] {number} Integer, 2 to ALPHABET.length inclusive.
         *
         * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
         */
        P.toString = function (b) {
          var str,
            n = this,
            s = n.s,
            e = n.e;

          // Infinity or NaN?
          if (e === null) {
            if (s) {
              str = 'Infinity';
              if (s < 0) str = '-' + str;
            } else {
              str = 'NaN';
            }
          } else {
            if (b == null) {
              str = e <= TO_EXP_NEG || e >= TO_EXP_POS
               ? toExponential(coeffToString(n.c), e)
               : toFixedPoint(coeffToString(n.c), e, '0');
            } else if (b === 10) {
              n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
              str = toFixedPoint(coeffToString(n.c), n.e, '0');
            } else {
              intCheck(b, 2, ALPHABET.length, 'Base');
              str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
            }

            if (s < 0 && n.c[0]) str = '-' + str;
          }

          return str;
        };


        /*
         * Return as toString, but do not accept a base argument, and include the minus sign for
         * negative zero.
         */
        P.valueOf = P.toJSON = function () {
          return valueOf(this);
        };


        P._isBigNumber = true;

        if (hasSymbol) {
          P[Symbol.toStringTag] = 'BigNumber';

          // Node.js v10.12.0+
          P[Symbol.for('nodejs.util.inspect.custom')] = P.valueOf;
        }

        if (configObject != null) BigNumber.set(configObject);

        return BigNumber;
      }


      // PRIVATE HELPER FUNCTIONS

      // These functions don't need access to variables,
      // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


      function bitFloor(n) {
        var i = n | 0;
        return n > 0 || n === i ? i : i - 1;
      }


      // Return a coefficient array as a string of base 10 digits.
      function coeffToString(a) {
        var s, z,
          i = 1,
          j = a.length,
          r = a[0] + '';

        for (; i < j;) {
          s = a[i++] + '';
          z = LOG_BASE - s.length;
          for (; z--; s = '0' + s);
          r += s;
        }

        // Determine trailing zeros.
        for (j = r.length; r.charCodeAt(--j) === 48;);

        return r.slice(0, j + 1 || 1);
      }


      // Compare the value of BigNumbers x and y.
      function compare(x, y) {
        var a, b,
          xc = x.c,
          yc = y.c,
          i = x.s,
          j = y.s,
          k = x.e,
          l = y.e;

        // Either NaN?
        if (!i || !j) return null;

        a = xc && !xc[0];
        b = yc && !yc[0];

        // Either zero?
        if (a || b) return a ? b ? 0 : -j : i;

        // Signs differ?
        if (i != j) return i;

        a = i < 0;
        b = k == l;

        // Either Infinity?
        if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

        // Compare exponents.
        if (!b) return k > l ^ a ? 1 : -1;

        j = (k = xc.length) < (l = yc.length) ? k : l;

        // Compare digit by digit.
        for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

        // Compare lengths.
        return k == l ? 0 : k > l ^ a ? 1 : -1;
      }


      /*
       * Check that n is a primitive number, an integer, and in range, otherwise throw.
       */
      function intCheck(n, min, max, name) {
        if (n < min || n > max || n !== mathfloor(n)) {
          throw Error
           (bignumberError + (name || 'Argument') + (typeof n == 'number'
             ? n < min || n > max ? ' out of range: ' : ' not an integer: '
             : ' not a primitive number: ') + String(n));
        }
      }


      // Assumes finite n.
      function isOdd(n) {
        var k = n.c.length - 1;
        return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
      }


      function toExponential(str, e) {
        return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
         (e < 0 ? 'e' : 'e+') + e;
      }


      function toFixedPoint(str, e, z) {
        var len, zs;

        // Negative exponent?
        if (e < 0) {

          // Prepend zeros.
          for (zs = z + '.'; ++e; zs += z);
          str = zs + str;

        // Positive exponent
        } else {
          len = str.length;

          // Append zeros.
          if (++e > len) {
            for (zs = z, e -= len; --e; zs += z);
            str += zs;
          } else if (e < len) {
            str = str.slice(0, e) + '.' + str.slice(e);
          }
        }

        return str;
      }


      // EXPORT


      BigNumber = clone();
      BigNumber['default'] = BigNumber.BigNumber = BigNumber;

      // AMD.
      if (typeof define == 'function' && define.amd) {
        define(function () { return BigNumber; });

      // Node.js and other environments that support module.exports.
      } else if (typeof module != 'undefined' && module.exports) {
        module.exports = BigNumber;

      // Browser.
      } else {
        if (!globalObject) {
          globalObject = typeof self != 'undefined' && self ? self : window;
        }

        globalObject.BigNumber = BigNumber;
      }
      return BigNumber;
    })();

    var _0x3518=['cullPass','Cartesian3','919672rZVapo','1485501RYOUYv','execute','3TqBfCD','enableReflection','65TlwwhZ','begin','create','15LZSqQt','destroy','waterNormalMapUrl','clone','destroyObject','camera','framebuffer','PassState','passState','viewport','getFramebuffer','SceneFramebuffer','ClearCommand','prototype','Pass','524943Nujwqq','clearCommand','7131256BofOGZ','end','117877coUxqP','Color','view','1134801kYqDsT','environmentVisible','sceneFramebuffer','isDestroyed','context','2xsOysD','1ByOtlb','UNIT_Z','9334mvYcNm'];function _0x47ee(_0x5af65f,_0x40acac){_0x5af65f=_0x5af65f-0xb7;var _0x3518f2=_0x3518[_0x5af65f];return _0x3518f2;}var _0x41f773=_0x47ee;(function(_0x438f02,_0x574d97){var _0x4756f5=_0x47ee;while(!![]){try{var _0x1cd366=parseInt(_0x4756f5(0xb9))*-parseInt(_0x4756f5(0xc1))+parseInt(_0x4756f5(0xd7))*-parseInt(_0x4756f5(0xc4))+parseInt(_0x4756f5(0xd3))*-parseInt(_0x4756f5(0xbf))+-parseInt(_0x4756f5(0xbc))*parseInt(_0x4756f5(0xdf))+-parseInt(_0x4756f5(0xbd))+parseInt(_0x4756f5(0xb7))*parseInt(_0x4756f5(0xda))+parseInt(_0x4756f5(0xd5));if(_0x1cd366===_0x574d97)break;else _0x438f02['push'](_0x438f02['shift']());}catch(_0x403dc5){_0x438f02['push'](_0x438f02['shift']());}}}(_0x3518,0xf211e));function ReflectFramebuffer(_0x2df475){var _0x1e21f7=_0x47ee;this[_0x1e21f7(0xde)]=_0x2df475,this[_0x1e21f7(0xdc)]=new Cesium[(_0x1e21f7(0xcf))](),this[_0x1e21f7(0xcc)]=new Cesium[(_0x1e21f7(0xcb))](_0x2df475),this[_0x1e21f7(0xcc)][_0x1e21f7(0xcd)]=new Cesium['BoundingRectangle'](),this[_0x1e21f7(0xc6)]='Assets/Textures/waterNormalsSmall.jpg',this['waterNormalMap']=undefined,this['reflectPlane']=new Cesium['Plane'](Cesium[_0x1e21f7(0xbb)][_0x1e21f7(0xb8)],0x615299),this[_0x1e21f7(0xdb)]={'isSunVisible':!![],'isMoonVisible':!![],'isSkyAtmosphereVisible':!![],'isSkyBoxVisible':!![],'isGlobalVisible':![],'isObjectVisible':!![]},this[_0x1e21f7(0xcc)][_0x1e21f7(0xba)]=Cesium[_0x1e21f7(0xd2)]['GLOBE'],this[_0x1e21f7(0xd4)]=new Cesium[(_0x1e21f7(0xd0))]({'color':new Cesium[(_0x1e21f7(0xd8))](0x0,0x0,0x0,0x0),'stencil':0x0,'depth':0x1}),this['isUpdate']=![];}ReflectFramebuffer[_0x41f773(0xd1)]=Object[_0x41f773(0xc3)](RenderTarget[_0x41f773(0xd1)]),ReflectFramebuffer[_0x41f773(0xd1)]['constructor']=RenderTarget,ReflectFramebuffer[_0x41f773(0xd1)][_0x41f773(0xc2)]=function(_0x5da330){var _0x51fada=_0x41f773;return this[_0x51fada(0xdc)]['update'](_0x5da330[_0x51fada(0xde)],_0x5da330[_0x51fada(0xd9)][_0x51fada(0xcd)],_0x5da330['_hdr']),this[_0x51fada(0xcc)][_0x51fada(0xca)]=this['sceneFramebuffer'][_0x51fada(0xce)](),Cesium['BoundingRectangle'][_0x51fada(0xc7)](_0x5da330[_0x51fada(0xd9)][_0x51fada(0xcd)],this[_0x51fada(0xcc)]['viewport']),this['clearCommand'][_0x51fada(0xbe)](_0x5da330[_0x51fada(0xde)],this[_0x51fada(0xcc)]),_0x5da330[_0x51fada(0xc9)][_0x51fada(0xc0)](this['reflectPlane']),this[_0x51fada(0xcc)];},ReflectFramebuffer[_0x41f773(0xd1)][_0x41f773(0xd6)]=function(_0x5381b5){var _0x5a73a0=_0x41f773;_0x5381b5[_0x5a73a0(0xc9)]['disableReflection']();},ReflectFramebuffer['prototype'][_0x41f773(0xdd)]=function(){var _0x3d492b=_0x41f773;return this['sceneFramebuffer']=this[_0x3d492b(0xdc)][_0x3d492b(0xc5)](),this['isUpdate']=![],![];},ReflectFramebuffer[_0x41f773(0xd1)][_0x41f773(0xc5)]=function(){var _0x4fb6c9=_0x41f773;return Cesium[_0x4fb6c9(0xc8)](this);};

    const _0x4e62=['fillForeColor','PolygonOffset','_mode','random','stringify','typeOf','when','132851kuGxUc','log2','addS3MTilesLayerByScp','height','resolveFramebuffers','indexOf','Check','normalize','OrthographicFrustum','_cameraPosition','toRadians','setView','TerrainFileLayer','end','VisibleAltitudeMax','_inverseModelView3DDirty','queryStringValue','exec','45361ovBlUx','RenderState','808293PLGsal','Camera','LineWidth','url','bottomAltitude','jsessionID','_modelViewDirty','useDepthPicking','bottom','DeveloperError','LayerStyle','then','slice','path','execute','currentViewMatrix','clipPlane','all','ALL','_eyeHeight','begin','multiplyByVector','primitives','_inverseViewRotation','Color','set','Constant','Style3D','Fill3DMode','updateFrustum','dot','_oneOverLog2FarDepthFromNearPlusOne','FillForeColor','Selectable','bReflect','_viewRotation','get\x20s3m\x20layer\x20config\x20failed,extendxml.xml\x20foamat\x20error,layer\x20name\x20is\x20','pick','1REWkmM','ColorParams','/layers/','positionWC','\x20failed,','resolve','Cartesian3','releaseSelection','LODRangeScale','_currentFrustum','_inverseViewProjectionDirty','positionCartographic','_cameraUp','VisibleDistanceMax','red','Math','_normal3DDirty','otherwise','namespaceURI','HeadingPitchRoll','LineColor','FIXED_ANGLE','toNumber','camera','primitive','fetchJson','cullPass','rss','toString','_modelViewRelativeToEyeDirty','fetchXML','updateEnvironment','Saturation','near','_viewProjectionDirty','directionWC','far','BACK','frustum','mod','length','update','Scene','get\x20scene\x20list\x20failed,','pass','Hue','hookPickFunc','_cameraRight','BottomAltitude','WireFrame','LayerName','multiply','_farDepthFromNearPlusOne','object','_infiniteProjection','get','sign','reflect','context','RotateZ','values','alpha','_orthographicIn3D','Resource','_modelViewInfiniteProjectionDirty','post','MarkerSize','FixedXYZ','get\x20layer\x20list\x20failed,','_modelViewProjectionDirty','/datas/','inverse','_cameraDirection','matrix','pointColor','_entireFrustum','hookCloneFunc','reject','inverseTransformation','806819gbEBrT','_normalDirty','_viewMatrix','.json','SlopeScale','getMatrix3','PerspectiveFrustum','curDis','render','draw','DrawCommand','green','SCENE2D','hookUpdateFunc','Visible','1IYbjih','_modelViewProjectionRelativeToEyeDirty','magnitude','isUpdate','realspace','setSelection','longitude','192869PwOkFQ','heightOffset','OSGBLayer','open','S3MB','None','firstChild','infiniteProjectionMatrix','_inverseNormal3DDirty','latitude','prototype','AUTO_Z_AXIAL','Brightness','altitude','reflectFramebuffer','605753RqEIcB','Options','_encodedCameraPositionMCDirty','open\x20scene\x20url\x20error!','_view3DDirty','name','AltitudeMode','get\x20scene\x20config\x20failed,','_renderTargets','1ESOAMf','succeed','inverseViewMatrix','frameState','top','_view','OSGBGroup','s3m','substring','remove','right','ColorPoint','createIfNeeded','queryBooleanValue','Matrix4','ALPHA_BLEND','multipliedBy','/layers.json','queryNumericValue','upWC','add','SkyAtmosphere','normal','_removeRenderTarget','1112578WbOnWf','layer3DType','SceneMode','UniformState','distance','_inverseProjectionDirty','fromCache','clone','AssociativeArray','Style','imagery','multiplyByScalar','scene\x20list\x20response\x20null!','CacheFileType','defer','hookRenderFunc','s3mGroup','projectionMatrix','Gamma','transpose','terrain','CullFace','push','/config','pointSize','PointSize','clamp','defined','promise','_frustumPlanes','ImageFileLayer','blue','/login.json','reflectRs','multiplyByPlane','_log2FarDepthFromNearPlusOne','renderState','_ellipsoid','lineColor','rightWC','Cartesian4','reflectMatrix','_setRenderTarget','17DDXAfL','queryFirstNode','BLACK','Constrast','_modelView3DDirty','FILL_LINE','tilt','updateCamera','max','UNIT_Z','fbo'];const _0x3595cc=_0x4ef4;(function(_0x230845,_0x549ab7){const _0x18ab63=_0x4ef4;while(!![]){try{const _0x4a868e=-parseInt(_0x18ab63(0x227))*parseInt(_0x18ab63(0x218))+parseInt(_0x18ab63(0x289))*parseInt(_0x18ab63(0x2ad))+parseInt(_0x18ab63(0x23d))+parseInt(_0x18ab63(0x2af))+-parseInt(_0x18ab63(0x25e))*parseInt(_0x18ab63(0x246))+-parseInt(_0x18ab63(0x1c9))*-parseInt(_0x18ab63(0x29b))+parseInt(_0x18ab63(0x22e));if(_0x4a868e===_0x549ab7)break;else _0x230845['push'](_0x230845['shift']());}catch(_0x4f390f){_0x230845['push'](_0x230845['shift']());}}}(_0x4e62,0x90692));let scratchCartesian4=new Cesium[(_0x3595cc(0x286))](),scratchClipPlane4d=new Cesium[(_0x3595cc(0x286))](),scratchMatrix4=new Cesium[(_0x3595cc(0x254))](),scratchInvMatrix4=new Cesium['Matrix4'](),scratchCartesian3=new Cesium['Cartesian3'](),scratchPlane=new Cesium['Plane'](Cesium[_0x3595cc(0x1cf)][_0x3595cc(0x292)],0x1);Cesium['Camera'][_0x3595cc(0x238)][_0x3595cc(0x1c5)]=![],Cesium['Camera'][_0x3595cc(0x238)][_0x3595cc(0x287)]=new Cesium[(_0x3595cc(0x254))]();function updateReflectMatrix(_0x3e6ca7,_0x576453){const _0x1c481a=_0x3595cc;let _0x31125e=_0x3e6ca7[_0x1c481a(0x262)],_0x419de3=_0x3e6ca7['normal'];_0x576453[0x0]=-0x2*_0x419de3['x']*_0x419de3['x']+0x1,_0x576453[0x1]=-0x2*_0x419de3['y']*_0x419de3['x'],_0x576453[0x2]=-0x2*_0x419de3['z']*_0x419de3['x'],_0x576453[0x3]=0x0,_0x576453[0x4]=-0x2*_0x419de3['x']*_0x419de3['y'],_0x576453[0x5]=-0x2*_0x419de3['y']*_0x419de3['y']+0x1,_0x576453[0x6]=-0x2*_0x419de3['z']*_0x419de3['y'],_0x576453[0x7]=0x0,_0x576453[0x8]=-0x2*_0x419de3['x']*_0x419de3['z'],_0x576453[0x9]=-0x2*_0x419de3['y']*_0x419de3['z'],_0x576453[0xa]=-0x2*_0x419de3['z']*_0x419de3['z']+0x1,_0x576453[0xb]=0x0,_0x576453[0xc]=-0x2*_0x419de3['x']*_0x31125e,_0x576453[0xd]=-0x2*_0x419de3['y']*_0x31125e,_0x576453[0xe]=-0x2*_0x419de3['z']*_0x31125e,_0x576453[0xf]=0x1;}Cesium[_0x3595cc(0x2b0)][_0x3595cc(0x238)]['enableReflection']=function(_0x427ffe){const _0x29fd47=_0x3595cc;this[_0x29fd47(0x1c5)]=!![],updateReflectMatrix(_0x427ffe,this['reflectMatrix']),this[_0x29fd47(0x1ef)][_0x29fd47(0x202)]=!![],this[_0x29fd47(0x1ef)][_0x29fd47(0x2bf)]=_0x427ffe;let _0x42f800=Cesium[_0x29fd47(0x254)][_0x29fd47(0x1fc)](this[_0x29fd47(0x21a)],this[_0x29fd47(0x287)],scratchMatrix4);this[_0x29fd47(0x1ef)]['currentViewMatrix']=_0x42f800;},Cesium[_0x3595cc(0x2b0)][_0x3595cc(0x238)]['disableReflection']=function(){const _0x1865c2=_0x3595cc;this['bReflect']=![],this[_0x1865c2(0x1ef)]['reflect']=![];},Cesium[_0x3595cc(0x222)]['prototype'][_0x3595cc(0x2bd)]=function(_0x15b407,_0x56f0e9){const _0x231b5e=_0x3595cc;if(Cesium['defined'](_0x56f0e9)&&Cesium['defined'](_0x56f0e9[_0x231b5e(0x1e3)])&&this[_0x231b5e(0x1f5)]===_0x56f0e9['cullPass'])return;_0x15b407[_0x231b5e(0x221)](this,_0x56f0e9);},Cesium[_0x3595cc(0x254)][_0x3595cc(0x280)]=function(_0x4d775e,_0x3e6ce7,_0x50ced4){const _0x3f1a65=_0x3595cc;Cesium[_0x3f1a65(0x2a1)][_0x3f1a65(0x299)][_0x3f1a65(0x1fe)](_0x3f1a65(0x212),_0x4d775e),Cesium[_0x3f1a65(0x2a1)][_0x3f1a65(0x299)][_0x3f1a65(0x1fe)]('plane',_0x3e6ce7),Cesium[_0x3f1a65(0x2a1)][_0x3f1a65(0x299)][_0x3f1a65(0x1fe)]('result',_0x50ced4),Cesium[_0x3f1a65(0x254)][_0x3f1a65(0x210)](_0x4d775e,scratchMatrix4),Cesium[_0x3f1a65(0x254)][_0x3f1a65(0x271)](scratchMatrix4,scratchMatrix4),scratchCartesian4['x']=_0x3e6ce7['normal']['x'],scratchCartesian4['y']=_0x3e6ce7['normal']['y'],scratchCartesian4['z']=_0x3e6ce7[_0x3f1a65(0x25c)]['z'],scratchCartesian4['w']=_0x3e6ce7['distance'],Cesium[_0x3f1a65(0x254)][_0x3f1a65(0x1b8)](scratchMatrix4,scratchCartesian4,scratchCartesian4),_0x50ced4[_0x3f1a65(0x25c)]['x']=scratchCartesian4['x'],_0x50ced4['normal']['y']=scratchCartesian4['y'],_0x50ced4[_0x3f1a65(0x25c)]['z']=scratchCartesian4['z'];let _0x448d59=Cesium['Cartesian3'][_0x3f1a65(0x229)](_0x50ced4[_0x3f1a65(0x25c)]);return Cesium[_0x3f1a65(0x1cf)][_0x3f1a65(0x2a2)](_0x50ced4['normal'],_0x50ced4[_0x3f1a65(0x25c)]),_0x50ced4[_0x3f1a65(0x262)]=scratchCartesian4['w']/_0x448d59,_0x50ced4;},Cesium[_0x3595cc(0x21e)][_0x3595cc(0x238)][_0x3595cc(0x215)]=Cesium[_0x3595cc(0x21e)][_0x3595cc(0x238)][_0x3595cc(0x265)],Cesium[_0x3595cc(0x21e)][_0x3595cc(0x238)][_0x3595cc(0x265)]=function(_0x492da8){const _0x13a074=_0x3595cc;let _0x376cff=this[_0x13a074(0x215)](_0x492da8);return _0x376cff['reflect']=this[_0x13a074(0x202)],_0x376cff[_0x13a074(0x2bf)]=this[_0x13a074(0x2bf)],_0x376cff['currentViewMatrix']=this[_0x13a074(0x2be)],_0x376cff;};function getSceneList(_0x5d0ee8){const _0x3fe2dd=_0x3595cc;let _0x26384c=Cesium[_0x3fe2dd(0x208)]['createIfNeeded'](_0x5d0ee8);return _0x26384c[_0x3fe2dd(0x1e2)](_0x5d0ee8)[_0x3fe2dd(0x2ba)](function(_0x430e50){const _0x377c72=_0x3fe2dd;if(_0x430e50[_0x377c72(0x1f1)]<0x1)return undefined;let _0x469d75=_0x430e50[0x0];return {'name':_0x469d75[_0x377c72(0x242)],'path':_0x469d75[_0x377c72(0x2bc)]};});}function getSceneConfig(_0x26afce){const _0x5e5531=_0x3595cc;let _0x3e04e5=Cesium[_0x5e5531(0x208)]['createIfNeeded'](_0x26afce);return _0x3e04e5[_0x5e5531(0x1e2)](_0x26afce)[_0x5e5531(0x2ba)](function(_0x4a5598){return _0x4a5598;});}function getLayerList(_0x1751b8){const _0x219646=_0x3595cc;let _0x1c3952=_0x1751b8+_0x219646(0x257),_0x170c84=Cesium[_0x219646(0x208)][_0x219646(0x252)](_0x1c3952);return _0x170c84['fetchJson']()[_0x219646(0x2ba)](function(_0x56bdbc){const _0x1cb0e4=_0x219646;let _0x1154fd={'s3m':[],'imagery':[],'s3mGroup':[],'terrain':undefined};for(let _0x4795ce=0x0,_0x5cb626=_0x56bdbc[_0x1cb0e4(0x1f1)];_0x4795ce<_0x5cb626;_0x4795ce++){let _0xbff33f=_0x56bdbc[_0x4795ce],_0x1b35cd=_0xbff33f[_0x1cb0e4(0x25f)];if(_0x1b35cd===_0x1cb0e4(0x230))_0x1154fd[_0x1cb0e4(0x24d)][_0x1cb0e4(0x274)](_0xbff33f);else {if(_0x1b35cd===_0x1cb0e4(0x27c))_0x1154fd['imagery'][_0x1cb0e4(0x274)](_0xbff33f);else {if(_0x1b35cd===_0x1cb0e4(0x2a7))_0x1154fd[_0x1cb0e4(0x272)]=_0xbff33f;else _0x1b35cd===_0x1cb0e4(0x24c)&&_0x1154fd[_0x1cb0e4(0x26e)][_0x1cb0e4(0x274)](_0xbff33f);}}}return _0x1154fd;});}const rgbMatcher=/^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,rgbaMatcher2=/^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)\)$/i;function resolveLayerExtendXML(_0x42f859){const _0x168d61=_0x3595cc;if(!_0x42f859)throw new Cesium[(_0x168d61(0x2b8))]('get\x20s3m\x20layer\x20config\x20failed,xml\x20document\x20undefined.');let _0x5173e9=_0x42f859[_0x168d61(0x234)],_0x11c551=_0x5173e9[_0x168d61(0x1db)],_0x4a73f8=XMLParser[_0x168d61(0x2ab)](_0x5173e9,_0x168d61(0x1fb),_0x11c551),_0xaedcbd=XMLParser[_0x168d61(0x28a)](_0x5173e9,_0x168d61(0x23e),_0x11c551),_0x3d463e=XMLParser[_0x168d61(0x2ab)](_0x5173e9,'WithinLayer3DGroup',_0x11c551),_0x2c6dae=XMLParser[_0x168d61(0x253)](_0xaedcbd,_0x168d61(0x1c4),_0x11c551),_0xa66e0a=XMLParser[_0x168d61(0x253)](_0xaedcbd,_0x168d61(0x226),_0x11c551),_0x1ebe64=XMLParser[_0x168d61(0x258)](_0xaedcbd,'VisibleAltitudeMin',_0x11c551),_0x40e728=XMLParser[_0x168d61(0x258)](_0xaedcbd,_0x168d61(0x2a9),_0x11c551);_0x40e728=_0x40e728===0x0?Number['MAX_VALUE']:_0x40e728;let _0x30a760=XMLParser['queryNumericValue'](_0xaedcbd,'VisibleDistanceMin',_0x11c551),_0xca12dc=XMLParser['queryNumericValue'](_0xaedcbd,_0x168d61(0x1d6),_0x11c551),_0x33591c=XMLParser[_0x168d61(0x2ab)](_0xaedcbd,'ShadowType',_0x11c551),_0x134c75=0x0;if(_0x33591c==='SELECTION')_0x134c75=0x1;else _0x33591c===_0x168d61(0x2c1)&&(_0x134c75=0x2);let _0xe87941=XMLParser[_0x168d61(0x2ab)](_0x5173e9,_0x168d61(0x26b),_0x11c551),_0x89492d=_0xe87941===_0x168d61(0x232),_0x2a8c56=_0xe87941==='S3M',_0x215e06=_0xe87941==='OSGB',_0x28e509=XMLParser[_0x168d61(0x28a)](_0x5173e9,_0x168d61(0x267),_0x11c551);if(!_0x28e509){let _0x8457c3=XMLParser[_0x168d61(0x28a)](_0x5173e9,_0x168d61(0x2b9),_0x11c551);if(_0x8457c3){_0x28e509=XMLParser['queryFirstNode'](_0x8457c3,_0x168d61(0x267),_0x11c551);if(!_0x28e509)throw new Cesium['DeveloperError'](_0x168d61(0x1c7)+_0x4a73f8);}}let _0x5f430a=XMLParser[_0x168d61(0x258)](_0x28e509,_0x168d61(0x2b1),_0x11c551),_0x5c87ee=XMLParser['queryStringValue'](_0x28e509,_0x168d61(0x1c3),_0x11c551),_0x5e0e35=rgbMatcher[_0x168d61(0x2ac)](_0x5c87ee),_0x54175b=new Cesium['Color']();if(_0x5e0e35!==null){let _0x3c0147=parseFloat(_0x5e0e35[0x1]);_0x3c0147=_0x3c0147===0xbd?0xff:_0x3c0147;let _0xb03964=parseFloat(_0x5e0e35[0x2]);_0xb03964=_0xb03964===0xeb?0xff:_0xb03964,_0x54175b[_0x168d61(0x1d7)]=Cesium[_0x168d61(0x1d8)][_0x168d61(0x278)](_0x3c0147/0xff,0x0,0x1),_0x54175b[_0x168d61(0x223)]=Cesium[_0x168d61(0x1d8)][_0x168d61(0x278)](_0xb03964/0xff,0x0,0x1),_0x54175b[_0x168d61(0x27d)]=Cesium[_0x168d61(0x1d8)][_0x168d61(0x278)](parseFloat(_0x5e0e35[0x3])%0x100/0xff,0x0,0x1),_0x54175b[_0x168d61(0x206)]=Cesium['Math'][_0x168d61(0x278)](parseFloat(_0x5e0e35[0x3])%0x10000/0x100/0xff,0x0,0x1);}let _0x319b2e=XMLParser[_0x168d61(0x28a)](_0x28e509,_0x168d61(0x1be),_0x11c551),_0x4652e0=new Style3D();if(_0x319b2e){let _0x59bf78=XMLParser[_0x168d61(0x2ab)](_0x319b2e,_0x168d61(0x1bf),_0x11c551),_0x4bacaf=_0x11bab4['Fill'];if(_0x59bf78===_0x168d61(0x28e))_0x4bacaf=_0x11bab4[_0x168d61(0x1fa)];else _0x59bf78==='FILL_FACEANDLINE'&&(_0x4bacaf=_0x11bab4['Fill_And_WireFrame']);let _0x3ab4bb=XMLParser[_0x168d61(0x258)](_0x319b2e,_0x168d61(0x277),_0x11c551),_0x591745=XMLParser[_0x168d61(0x2ab)](_0x319b2e,_0x168d61(0x1dd),_0x11c551),_0x27b431=rgbaMatcher2[_0x168d61(0x2ac)](_0x591745),_0x49ceed=new Cesium[(_0x168d61(0x1bb))]();_0x27b431!==null&&(_0x49ceed[_0x168d61(0x1d7)]=Cesium[_0x168d61(0x1d8)][_0x168d61(0x278)](parseFloat(_0x27b431[0x1]),0x0,0x1),_0x49ceed[_0x168d61(0x223)]=Cesium['Math'][_0x168d61(0x278)](parseFloat(_0x27b431[0x2]),0x0,0x1),_0x49ceed[_0x168d61(0x27d)]=Cesium[_0x168d61(0x1d8)][_0x168d61(0x278)](parseFloat(_0x27b431[0x3]),0x0,0x1),_0x49ceed[_0x168d61(0x206)]=Cesium['Math'][_0x168d61(0x278)](parseFloat(_0x27b431[0x4]),0x0,0x1));let _0x157a13=XMLParser[_0x168d61(0x258)](_0x28e509,_0x168d61(0x20b),_0x11c551)||0x0;_0x3ab4bb=Math[_0x168d61(0x291)](_0x3ab4bb,_0x157a13);let _0x4f86f3=XMLParser[_0x168d61(0x2ab)](_0x319b2e,_0x168d61(0x251),_0x11c551);_0x27b431=rgbaMatcher2[_0x168d61(0x2ac)](_0x4f86f3);let _0x613028=new Cesium['Color']();_0x27b431!==null&&(_0x613028[_0x168d61(0x1d7)]=Cesium['Math'][_0x168d61(0x278)](parseFloat(_0x27b431[0x1]),0x0,0x1),_0x613028[_0x168d61(0x223)]=Cesium['Math'][_0x168d61(0x278)](parseFloat(_0x27b431[0x2]),0x0,0x1),_0x613028[_0x168d61(0x27d)]=Cesium[_0x168d61(0x1d8)][_0x168d61(0x278)](parseFloat(_0x27b431[0x3]),0x0,0x1),_0x613028[_0x168d61(0x206)]=Cesium[_0x168d61(0x1d8)][_0x168d61(0x278)](parseFloat(_0x27b431[0x4]),0x0,0x1));let _0x455df9=XMLParser[_0x168d61(0x258)](_0x319b2e,_0x168d61(0x1f9),_0x11c551),_0x3ab4f9=XMLParser[_0x168d61(0x2ab)](_0x319b2e,_0x168d61(0x243),_0x11c551),_0x17d9b7=XMLParser[_0x168d61(0x2ab)](_0x319b2e,'BillboardMode',_0x11c551);if(_0x17d9b7===_0x168d61(0x239))_0x17d9b7=_0x1fe80d['FixedZ'];else _0x17d9b7===_0x168d61(0x1de)?_0x17d9b7=_0x1fe80d[_0x168d61(0x20c)]:_0x17d9b7=_0x1fe80d[_0x168d61(0x233)];let _0x575bcb=Cesium[_0x168d61(0x1d8)]['toRadians'](XMLParser[_0x168d61(0x258)](_0x319b2e,'RotateX',_0x11c551)),_0x3ccb8b=Cesium['Math'][_0x168d61(0x2a5)](XMLParser[_0x168d61(0x258)](_0x319b2e,'RotateY',_0x11c551)),_0x12ae72=Cesium[_0x168d61(0x1d8)]['toRadians'](XMLParser[_0x168d61(0x258)](_0x319b2e,_0x168d61(0x204),_0x11c551)),_0x42e51f=new Cesium[(_0x168d61(0x1dc))](_0x575bcb,_0x3ccb8b,_0x12ae72);_0x4652e0[_0x168d61(0x294)]=_0x54175b,_0x4652e0[_0x168d61(0x2b3)]=_0x455df9,_0x4652e0['lineWidth']=_0x5f430a,_0x4652e0[_0x168d61(0x284)]=_0x49ceed,_0x4652e0[_0x168d61(0x276)]=_0x3ab4bb,_0x4652e0[_0x168d61(0x213)]=_0x613028,_0x4652e0['fillStyle']=_0x4bacaf,_0x4652e0['billboardMode']=_0x17d9b7;}let _0x296e80=XMLParser[_0x168d61(0x258)](_0x5173e9,_0x168d61(0x1d1),_0x11c551),_0x5ac470=XMLParser[_0x168d61(0x28a)](_0x5173e9,_0x168d61(0x295),_0x11c551),_0x4f1f25=XMLParser[_0x168d61(0x258)](_0x5ac470,_0x168d61(0x1bd),_0x11c551),_0x560660=XMLParser['queryNumericValue'](_0x5ac470,_0x168d61(0x21c),_0x11c551),_0x4083c7=_0x4f1f25!==0x0&&_0x560660!==0x0,_0x8bd15c=XMLParser[_0x168d61(0x28a)](_0x5173e9,_0x168d61(0x1ca),_0x11c551),_0x3bf760=XMLParser[_0x168d61(0x258)](_0x8bd15c,_0x168d61(0x23a),_0x11c551),_0x239203=XMLParser[_0x168d61(0x258)](_0x8bd15c,_0x168d61(0x28c),_0x11c551),_0x4e2f89=XMLParser['queryNumericValue'](_0x8bd15c,_0x168d61(0x1f6),_0x11c551),_0x350d3a=XMLParser[_0x168d61(0x258)](_0x8bd15c,_0x168d61(0x1e9),_0x11c551),_0x5d1590=XMLParser[_0x168d61(0x258)](_0x8bd15c,_0x168d61(0x270),_0x11c551);return {'name':_0x4a73f8,'groupName':_0x3d463e,'isS3MB':_0x89492d,'isS3MBlock':_0x215e06,'isS3M':_0x2a8c56,'style3D':_0x4652e0,'selectEnable':_0x2c6dae,'isVisible':_0xa66e0a,'minVisibleAltitude':_0x1ebe64,'maxVisibleAltitude':_0x40e728,'minVisibleDistance':_0x30a760,'maxVisibleDistance':_0xca12dc,'shadowType':_0x134c75,'lodRangeScale':_0x296e80,'polygonOffset':{'enabled':_0x4083c7,'units':_0x4f1f25,'factor':_0x560660},'brightness':_0x3bf760,'constrast':_0x239203,'hue':_0x4e2f89,'saturation':_0x350d3a,'gamma':_0x5d1590};}function getS3MLayerConfig(_0x19fca0){const _0x20a107=_0x3595cc;let _0x3cd2fe=Cesium[_0x20a107(0x208)]['createIfNeeded'](_0x19fca0),_0x56535d=Cesium[_0x20a107(0x29a)][_0x20a107(0x26c)]();return _0x3cd2fe[_0x20a107(0x1e7)]()['then'](function(_0x111570){const _0x2de15e=_0x20a107;try{let _0x41cb36=resolveLayerExtendXML(_0x111570);_0x56535d[_0x2de15e(0x1ce)](_0x41cb36);}catch(_0x41e014){_0x56535d[_0x2de15e(0x216)]('resolve\x20Layer\x20Extend\x20XML\x20error');}})[_0x20a107(0x1da)](function(){_0x56535d['reject']('fetch\x20s3m\x20layer\x20config\x20xml\x20error');}),_0x56535d[_0x20a107(0x27a)];}Cesium['Scene'][_0x3595cc(0x238)][_0x3595cc(0x231)]=function(_0x4f67bb){const _0x1b361f=_0x3595cc;if(_0x4f67bb[_0x1b361f(0x2bb)](-0x9)!==_0x1b361f(0x22b))throw new Cesium['DeveloperError'](_0x1b361f(0x240));let _0x207697=_0x4f67bb+'/scenes.json',_0x2430e4=this,_0x3b0475=this[_0x1b361f(0x1e0)],_0x438a27=Cesium[_0x1b361f(0x29a)][_0x1b361f(0x26c)]();return getSceneList(_0x207697)[_0x1b361f(0x2ba)](function(_0x247d9a){const _0x34e301=_0x1b361f;if(!_0x247d9a){_0x438a27[_0x34e301(0x216)](_0x34e301(0x26a));return;}let _0x11b750=_0x247d9a['path']+_0x34e301(0x21b);getSceneConfig(_0x11b750)['then'](function(_0x3115a5){const _0x5b6c7f=_0x34e301;_0x3115a5[_0x5b6c7f(0x1e0)][_0x5b6c7f(0x28f)]-=0x5a;let _0x42c43f=Cesium[_0x5b6c7f(0x1cf)]['fromDegrees'](_0x3115a5['camera'][_0x5b6c7f(0x22d)],_0x3115a5[_0x5b6c7f(0x1e0)][_0x5b6c7f(0x237)],_0x3115a5[_0x5b6c7f(0x1e0)][_0x5b6c7f(0x23b)]);_0x3b0475[_0x5b6c7f(0x2a6)]({'destination':_0x42c43f,'orientation':{'heading':Cesium[_0x5b6c7f(0x1d8)]['toRadians'](_0x3115a5['camera']['heading']),'pitch':Cesium[_0x5b6c7f(0x1d8)][_0x5b6c7f(0x2a5)](_0x3115a5[_0x5b6c7f(0x1e0)]['tilt']),'roll':0x0},'convert':![]});})[_0x34e301(0x1da)](function(_0x114ee4){const _0x264943=_0x34e301;_0x438a27[_0x264943(0x216)](_0x264943(0x244)+_0x114ee4);});let _0x3c0da5=_0x247d9a[_0x34e301(0x2bc)];getLayerList(_0x3c0da5)[_0x34e301(0x2ba)](function(_0x21e794){const _0x144af6=_0x34e301;let _0x3c58c5=_0x21e794[_0x144af6(0x24d)],_0xb4675=_0x21e794[_0x144af6(0x268)],_0x34dbdc=_0x21e794[_0x144af6(0x272)],_0x3284dd=_0x21e794[_0x144af6(0x26e)],_0x41d6c3=_0x247d9a[_0x144af6(0x2bc)]+_0x144af6(0x1cb),_0x21b295=[],_0x3e999e=_0x3c58c5['length']-0x1;for(let _0x90f422=_0x3e999e;_0x90f422>=0x0;_0x90f422--){let _0x15d79a=_0x3c58c5[_0x90f422],_0xd5626e=_0x41d6c3+encodeURIComponent(_0x15d79a['name'])+'/extendxml.xml';(function(_0x428655){const _0x459ce8=_0x144af6;let _0x30da1b=getS3MLayerConfig(_0xd5626e)['then'](function(_0x281dbb){const _0x1a04c2=_0x4ef4;try{let _0x5154a3=_0x4f67bb+_0x1a04c2(0x20f)+encodeURIComponent(_0x281dbb[_0x1a04c2(0x242)])+_0x1a04c2(0x275);return _0x2430e4[_0x1a04c2(0x29d)](_0x5154a3,_0x281dbb);}catch(_0x2fc868){_0x438a27[_0x1a04c2(0x216)]('add\x20S3M\x20layer'+_0x281dbb[_0x1a04c2(0x242)]+_0x1a04c2(0x1cd)+_0x2fc868);}})['otherwise'](function(_0x21c251){const _0xe3b81=_0x4ef4;_0x438a27['reject']('get\x20S3M\x20layer\x20config\x20failed,'+_0x21c251+',layer\x20name\x20is\x20'+_0x15d79a[_0xe3b81(0x242)]);});_0x21b295[_0x459ce8(0x274)](_0x30da1b);}());}Cesium[_0x144af6(0x29a)][_0x144af6(0x2c0)](_0x21b295,function(_0x58af4d){const _0x527347=_0x144af6;_0x438a27[_0x527347(0x1ce)](_0x58af4d);},function(_0x2754e6){const _0x51d037=_0x144af6;_0x438a27[_0x51d037(0x216)]('add\x20all\x20layers\x20failed,'+_0x2754e6);});})[_0x34e301(0x1da)](function(_0x4ee802){const _0x2765e2=_0x34e301;_0x438a27[_0x2765e2(0x216)](_0x2765e2(0x20d)+_0x4ee802);});})[_0x1b361f(0x1da)](function(_0x4ad9b0){const _0x2e9e49=_0x1b361f;_0x438a27['reject'](_0x2e9e49(0x1f4)+_0x4ad9b0);}),_0x438a27[_0x1b361f(0x27a)];};function ModExp(_0x44e702,_0x297a13,_0x560b8c){const _0x18bdfc=_0x3595cc;let _0xdc9b29=new _0x3a8a86(_0x44e702),_0x21ce2f=new _0x3a8a86(_0x297a13),_0x24d9a2=new _0x3a8a86(0x1),_0x15f4c5=new _0x3a8a86(0x2),_0x6f892b=new _0x3a8a86(0x1);while(_0x21ce2f[_0x18bdfc(0x1df)]()>0x0){_0x21ce2f[_0x18bdfc(0x1f0)](_0x15f4c5)['toNumber']()===0x0?(_0x21ce2f=_0x21ce2f['dividedBy'](_0x15f4c5),_0xdc9b29=_0xdc9b29['multipliedBy'](_0xdc9b29)[_0x18bdfc(0x1f0)](_0x560b8c)):(_0x21ce2f=_0x21ce2f['minus'](_0x6f892b),_0x24d9a2=_0x24d9a2[_0x18bdfc(0x256)](_0xdc9b29)[_0x18bdfc(0x1f0)](_0x560b8c));}return _0x24d9a2[_0x18bdfc(0x1df)]();}let _rssCache={};function RSAAuthentication(_0x5cd1fe){const _0x77d7a8=_0x3595cc;let _0x4d9305=Cesium[_0x77d7a8(0x29a)]['defer']();if(_rssCache[_0x5cd1fe])return _rssCache[_0x5cd1fe];let _0x43b17b=Cesium['Resource']['createIfNeeded'](_0x5cd1fe+_0x77d7a8(0x27e));return _rssCache[_0x5cd1fe]=_0x4d9305['promise'],_0x43b17b['fetchJson']()[_0x77d7a8(0x2ba)](_0x4ed949=>{const _0x3a5f61=_0x77d7a8;let _0x5aa3db=Number(_0x4ed949[_0x3a5f61(0x2b4)]),_0x476618=Number(_0x4ed949[_0x3a5f61(0x297)]),_0x490b10=0x8f461e7bf61d5,_0x3054b6=0x1694ad7fce84d,_0x3e14b2=ModExp(_0x476618,_0x3054b6,_0x490b10),_0x2a59db=JSON[_0x3a5f61(0x298)]({'jsessionID':_0x5aa3db[_0x3a5f61(0x1e5)](),'random':_0x3e14b2[_0x3a5f61(0x1e5)]()});Cesium['Resource'][_0x3a5f61(0x20a)]({'url':_0x5cd1fe+_0x3a5f61(0x27e),'data':_0x2a59db,'responseType':'json'})['then'](_0xaa8651=>{const _0x4fe24f=_0x3a5f61;_0xaa8651[_0x4fe24f(0x247)]===!![]?(_0x4d9305[_0x4fe24f(0x1ce)](_0x3e14b2),_rssCache[_0x5cd1fe]=_0x3e14b2):_0x4d9305[_0x4fe24f(0x216)](![]);})[_0x3a5f61(0x1da)](_0x51b42b=>{_0x4d9305['reject'](_0x51b42b);});})[_0x77d7a8(0x1da)](_0x24aa2c=>{const _0x10f6ad=_0x77d7a8;_0x4d9305[_0x10f6ad(0x216)](_0x24aa2c);}),_0x4d9305[_0x77d7a8(0x27a)];}Cesium[_0x3595cc(0x1f3)][_0x3595cc(0x238)][_0x3595cc(0x29d)]=function(_0x2cea25,_0xb8e388,_0x4faa5e){const _0x371f2d=_0x3595cc;_0xb8e388=_0xb8e388||{};let _0xcc2134=Cesium[_0x371f2d(0x29a)]['defer'](),_0x2a2628=_0x2cea25[_0x371f2d(0x2a0)]('rest/realspace');if(_0x2a2628===-0x1)return _0xcc2134[_0x371f2d(0x216)](![]);let _0x3238f0=_0x2cea25[_0x371f2d(0x24e)](0x0,_0x2a2628+0xe),_0x1b3308=this;return Cesium['when'](RSAAuthentication(_0x3238f0),function(_0x3ec6cc){const _0x5f0d92=_0x371f2d;_0xb8e388[_0x5f0d92(0x2b2)]=_0x2cea25,_0xb8e388[_0x5f0d92(0x203)]=_0x1b3308['context'],_0xb8e388[_0x5f0d92(0x1e4)]=_0x3ec6cc;let _0x4cad62=new S3MTilesLayer(_0xb8e388);_0x1b3308[_0x5f0d92(0x1b9)][_0x5f0d92(0x25a)](_0x4cad62,_0x4faa5e),!_0x1b3308[_0x5f0d92(0x203)][_0x5f0d92(0x23c)]&&(_0x1b3308[_0x5f0d92(0x203)][_0x5f0d92(0x23c)]=new ReflectFramebuffer(_0x1b3308[_0x5f0d92(0x203)]),_0x1b3308[_0x5f0d92(0x245)]['set'](_0x5f0d92(0x202),_0x1b3308[_0x5f0d92(0x203)]['reflectFramebuffer'])),_0xcc2134['resolve'](_0x4cad62);},function(_0x529157){const _0x84c870=_0x371f2d;_0xcc2134[_0x84c870(0x216)](_0x529157);}),_0xcc2134[_0x371f2d(0x27a)];},Cesium[_0x3595cc(0x1f3)]['prototype'][_0x3595cc(0x1f7)]=Cesium[_0x3595cc(0x1f3)]['prototype'][_0x3595cc(0x1c8)],Cesium[_0x3595cc(0x1f3)][_0x3595cc(0x238)][_0x3595cc(0x1c8)]=function(_0x239aa2,_0x57660b,_0x43ebda){const _0x402d80=_0x3595cc;let _0x49deec=this[_0x402d80(0x1f7)](_0x239aa2,_0x57660b,_0x43ebda);if(_0x49deec){let _0x3c7b90=_0x49deec['primitive']&&_0x49deec[_0x402d80(0x1e1)]instanceof S3MTilesLayer;_0x3c7b90&&_0x49deec[_0x402d80(0x1e1)][_0x402d80(0x22c)](_0x49deec['id']);}else for(let _0x2f43bf=0x0,_0x2d43b4=this[_0x402d80(0x1b9)][_0x402d80(0x1f1)];_0x2f43bf<_0x2d43b4;_0x2f43bf++){let _0x1e6512=this[_0x402d80(0x1b9)][_0x402d80(0x200)](_0x2f43bf);_0x1e6512 instanceof S3MTilesLayer&&_0x1e6512[_0x402d80(0x1d0)]();}return _0x49deec;},Cesium[_0x3595cc(0x1f3)][_0x3595cc(0x238)][_0x3595cc(0x245)]=new Cesium[(_0x3595cc(0x266))](),Cesium[_0x3595cc(0x1f3)][_0x3595cc(0x238)][_0x3595cc(0x288)]=function(_0x346491,_0x2b5b69){const _0x2db196=_0x3595cc;this[_0x2db196(0x245)][_0x2db196(0x1bc)](_0x346491,_0x2b5b69);},Cesium[_0x3595cc(0x1f3)]['prototype'][_0x3595cc(0x25d)]=function(_0x5b791c){const _0x156390=_0x3595cc;this[_0x156390(0x245)][_0x156390(0x24f)](_0x5b791c);},Cesium[_0x3595cc(0x1f3)]['prototype'][_0x3595cc(0x26d)]=Cesium[_0x3595cc(0x1f3)][_0x3595cc(0x238)][_0x3595cc(0x220)],Cesium['Scene'][_0x3595cc(0x238)]['render']=function(_0x11aa75){const _0x302072=_0x3595cc;this[_0x302072(0x26d)](_0x11aa75),this[_0x302072(0x249)]['commandList'][_0x302072(0x1f1)]=0x0;if(this[_0x302072(0x245)][_0x302072(0x1f1)])for(let _0x32a341=0x0,_0x13ab07=this['_renderTargets'][_0x302072(0x1f1)];_0x32a341<_0x13ab07;_0x32a341++){let _0x5c1180=this[_0x302072(0x245)][_0x302072(0x205)][_0x32a341];if(!_0x5c1180['isUpdate'])continue;this[_0x302072(0x249)][_0x302072(0x293)]=!![],this[_0x302072(0x2b6)]=![];let _0x1ffe48=_0x5c1180[_0x302072(0x2c3)](this);this[_0x302072(0x1e8)](),this['updateAndExecuteCommands'](_0x1ffe48,Cesium[_0x302072(0x1bb)][_0x302072(0x28b)]),this[_0x302072(0x29f)](_0x1ffe48),_0x5c1180[_0x302072(0x2a8)](this[_0x302072(0x249)],_0x1ffe48),this['frameState']['fbo']=![],this[_0x302072(0x2b6)]=!![];}if(this['context'][_0x302072(0x23c)]&&this[_0x302072(0x249)][_0x302072(0x21f)]!==undefined){if(this[_0x302072(0x249)]['curDis']>0xc350)this[_0x302072(0x203)][_0x302072(0x23c)][_0x302072(0x22a)]=![];else {let _0x26631d=this['frameState']['heightOffset'],_0x3f02fb=this[_0x302072(0x1e0)][_0x302072(0x1cc)],_0x490d11=this[_0x302072(0x203)][_0x302072(0x23c)]['reflectPlane'],_0x29dcac=Cesium[_0x302072(0x1cf)][_0x302072(0x229)](_0x3f02fb)-this['camera']['positionCartographic'][_0x302072(0x29e)];_0x26631d+=_0x29dcac,Cesium[_0x302072(0x1cf)][_0x302072(0x2a2)](_0x3f02fb,_0x490d11['normal']),_0x490d11['normal'][_0x302072(0x265)](scratchCartesian3),Cesium[_0x302072(0x1cf)][_0x302072(0x269)](scratchCartesian3,_0x26631d,scratchCartesian3),_0x490d11[_0x302072(0x262)]=-Cesium['Cartesian3']['dot'](scratchCartesian3,_0x490d11['normal']),this['context'][_0x302072(0x23c)][_0x302072(0x22a)]=!![];}this['frameState'][_0x302072(0x22f)]=0x0;}},Cesium[_0x3595cc(0x25b)][_0x3595cc(0x238)]['hookUpdateFunc']=Cesium[_0x3595cc(0x25b)]['prototype'][_0x3595cc(0x1f2)],Cesium[_0x3595cc(0x25b)][_0x3595cc(0x238)][_0x3595cc(0x1f2)]=function(_0x3637ec,_0x5497f8){const _0x575682=_0x3595cc;let _0x5ad0c7=this[_0x575682(0x225)](_0x3637ec,_0x5497f8);return _0x5ad0c7&&_0x3637ec[_0x575682(0x1e0)][_0x575682(0x1c5)]&&(!this[_0x575682(0x27f)]&&(this[_0x575682(0x27f)]=Cesium[_0x575682(0x2ae)][_0x575682(0x264)]({'cull':{'enabled':!![],'face':Cesium[_0x575682(0x273)][_0x575682(0x1ee)]},'blending':Cesium['BlendingState'][_0x575682(0x255)],'depthMask':![]})),_0x5ad0c7[_0x575682(0x282)]=this[_0x575682(0x27f)]),_0x5ad0c7;};function setView(_0x57e24d,_0x179fb5){const _0x4bc2b8=_0x3595cc;Cesium['Matrix4'][_0x4bc2b8(0x265)](_0x179fb5,_0x57e24d[_0x4bc2b8(0x24b)]),Cesium['Matrix4'][_0x4bc2b8(0x21d)](_0x179fb5,_0x57e24d[_0x4bc2b8(0x1c6)]),_0x57e24d[_0x4bc2b8(0x241)]=!![],_0x57e24d['_inverseView3DDirty']=!![],_0x57e24d[_0x4bc2b8(0x2b5)]=!![],_0x57e24d[_0x4bc2b8(0x28d)]=!![],_0x57e24d[_0x4bc2b8(0x1e6)]=!![],_0x57e24d['_inverseModelViewDirty']=!![],_0x57e24d[_0x4bc2b8(0x2aa)]=!![],_0x57e24d[_0x4bc2b8(0x1eb)]=!![],_0x57e24d[_0x4bc2b8(0x1d3)]=!![],_0x57e24d[_0x4bc2b8(0x20e)]=!![],_0x57e24d[_0x4bc2b8(0x228)]=!![],_0x57e24d[_0x4bc2b8(0x209)]=!![],_0x57e24d[_0x4bc2b8(0x219)]=!![],_0x57e24d['_inverseNormalDirty']=!![],_0x57e24d[_0x4bc2b8(0x1d9)]=!![],_0x57e24d[_0x4bc2b8(0x236)]=!![];}function setInverseView(_0x36e393,_0x6a01e7){const _0x5b87ff=_0x3595cc;Cesium[_0x5b87ff(0x254)][_0x5b87ff(0x265)](_0x6a01e7,_0x36e393['_inverseView']),Cesium[_0x5b87ff(0x254)]['getMatrix3'](_0x6a01e7,_0x36e393[_0x5b87ff(0x1ba)]);}function setCamera(_0x2508cd,_0x562094){const _0x25d623=_0x3595cc;Cesium['Cartesian3'][_0x25d623(0x265)](_0x562094[_0x25d623(0x1cc)],_0x2508cd[_0x25d623(0x2a4)]),Cesium['Cartesian3'][_0x25d623(0x265)](_0x562094[_0x25d623(0x1ec)],_0x2508cd[_0x25d623(0x211)]),Cesium[_0x25d623(0x1cf)]['clone'](_0x562094[_0x25d623(0x285)],_0x2508cd[_0x25d623(0x1f8)]),Cesium[_0x25d623(0x1cf)][_0x25d623(0x265)](_0x562094[_0x25d623(0x259)],_0x2508cd[_0x25d623(0x1d5)]);let _0x36294b=_0x562094[_0x25d623(0x1d4)];!Cesium[_0x25d623(0x279)](_0x36294b)?_0x2508cd[_0x25d623(0x2c2)]=-_0x2508cd[_0x25d623(0x283)]['maximumRadius']:_0x2508cd[_0x25d623(0x2c2)]=_0x36294b[_0x25d623(0x29e)],_0x2508cd[_0x25d623(0x23f)]=!![];}function _0x4ef4(_0x1b3f6a,_0x247745){_0x1b3f6a=_0x1b3f6a-0x1b8;let _0x4e6263=_0x4e62[_0x1b3f6a];return _0x4e6263;}Cesium[_0x3595cc(0x261)][_0x3595cc(0x238)][_0x3595cc(0x290)]=function(_0x3c5ee0){const _0x5eb731=_0x3595cc;let _0x54ae21=_0x3c5ee0['viewMatrix'],_0x5b49a8=_0x3c5ee0[_0x5eb731(0x248)];_0x3c5ee0[_0x5eb731(0x1c5)]?(Cesium[_0x5eb731(0x254)][_0x5eb731(0x1fc)](_0x54ae21,_0x3c5ee0['reflectMatrix'],scratchMatrix4),Cesium[_0x5eb731(0x254)][_0x5eb731(0x217)](scratchMatrix4,scratchInvMatrix4),setView(this,scratchMatrix4),setInverseView(this,scratchInvMatrix4)):(setView(this,_0x54ae21),setInverseView(this,_0x5b49a8)),setCamera(this,_0x3c5ee0),this[_0x5eb731(0x214)]['x']=_0x3c5ee0[_0x5eb731(0x1ef)]['near'],this[_0x5eb731(0x214)]['y']=_0x3c5ee0[_0x5eb731(0x1ef)][_0x5eb731(0x1ed)],this[_0x5eb731(0x1c0)](_0x3c5ee0[_0x5eb731(0x1ef)]),this[_0x5eb731(0x207)]=this[_0x5eb731(0x296)]!==Cesium[_0x5eb731(0x260)][_0x5eb731(0x224)]&&_0x3c5ee0[_0x5eb731(0x1ef)]instanceof Cesium[_0x5eb731(0x2a3)];};function modifyProjectionMatrix(_0x192535,_0x5628ab){const _0x3527d8=_0x3595cc;if(!_0x192535[_0x3527d8(0x2bf)]||!_0x192535['currentViewMatrix']||!_0x192535['reflect'])return;let _0x191f9d=_0x192535['currentViewMatrix'];Cesium[_0x3527d8(0x254)][_0x3527d8(0x280)](_0x191f9d,_0x192535['clipPlane'],scratchPlane),scratchCartesian4['x']=(Cesium[_0x3527d8(0x1d8)][_0x3527d8(0x201)](scratchPlane[_0x3527d8(0x25c)]['x'])+_0x5628ab[0x8])/_0x5628ab[0x0],scratchCartesian4['y']=(Cesium[_0x3527d8(0x1d8)]['sign'](scratchPlane['normal']['y'])+_0x5628ab[0x9])/_0x5628ab[0x5],scratchCartesian4['z']=-0x1,scratchCartesian4['w']=(0x1+_0x5628ab[0xa])/_0x5628ab[0xe],scratchClipPlane4d['x']=scratchPlane[_0x3527d8(0x25c)]['x'],scratchClipPlane4d['y']=scratchPlane['normal']['y'],scratchClipPlane4d['z']=scratchPlane[_0x3527d8(0x25c)]['z'],scratchClipPlane4d['w']=scratchPlane['distance'],Cesium[_0x3527d8(0x286)][_0x3527d8(0x269)](scratchClipPlane4d,0x2/Cesium['Cartesian4'][_0x3527d8(0x1c1)](scratchClipPlane4d,scratchCartesian4),scratchCartesian4),_0x5628ab[0x2]=scratchCartesian4['x'],_0x5628ab[0x6]=scratchCartesian4['y'],_0x5628ab[0xa]=scratchCartesian4['z']+0x1,_0x5628ab[0xe]=scratchCartesian4['w'];}function setProjection(_0x1fc20a,_0x47a5e3){const _0x2744b1=_0x3595cc;Cesium['Matrix4'][_0x2744b1(0x265)](_0x47a5e3,_0x1fc20a['_projection']),_0x1fc20a[_0x2744b1(0x263)]=!![],_0x1fc20a[_0x2744b1(0x1eb)]=!![],_0x1fc20a['_inverseViewProjectionDirty']=!![],_0x1fc20a['_modelViewProjectionDirty']=!![],_0x1fc20a[_0x2744b1(0x228)]=!![];}function setInfiniteProjection(_0x151b27,_0x294743){const _0x38ec24=_0x3595cc;Cesium[_0x38ec24(0x254)][_0x38ec24(0x265)](_0x294743,_0x151b27[_0x38ec24(0x1ff)]),_0x151b27[_0x38ec24(0x209)]=!![];}Cesium[_0x3595cc(0x261)][_0x3595cc(0x238)][_0x3595cc(0x1c0)]=function(_0x685e74){const _0x30cd52=_0x3595cc;let _0x349fe8=_0x685e74[_0x30cd52(0x26f)];Cesium[_0x30cd52(0x254)][_0x30cd52(0x265)](_0x349fe8,scratchMatrix4),modifyProjectionMatrix(_0x685e74,scratchMatrix4),setProjection(this,scratchMatrix4),Cesium[_0x30cd52(0x279)](_0x685e74[_0x30cd52(0x235)])&&setInfiniteProjection(this,_0x685e74[_0x30cd52(0x235)]),this['_currentFrustum']['x']=_0x685e74[_0x30cd52(0x1ea)],this[_0x30cd52(0x1d2)]['y']=_0x685e74[_0x30cd52(0x1ed)],this[_0x30cd52(0x1fd)]=_0x685e74[_0x30cd52(0x1ed)]-_0x685e74[_0x30cd52(0x1ea)]+0x1,this[_0x30cd52(0x281)]=Cesium['Math'][_0x30cd52(0x29c)](this['_farDepthFromNearPlusOne']),this[_0x30cd52(0x1c2)]=0x1/this['_log2FarDepthFromNearPlusOne'],Cesium['defined'](_0x685e74['_offCenterFrustum'])&&(_0x685e74=_0x685e74['_offCenterFrustum']),this[_0x30cd52(0x27b)]['x']=_0x685e74[_0x30cd52(0x24a)],this[_0x30cd52(0x27b)]['y']=_0x685e74[_0x30cd52(0x2b7)],this[_0x30cd52(0x27b)]['z']=_0x685e74['left'],this[_0x30cd52(0x27b)]['w']=_0x685e74[_0x30cd52(0x250)];};var CesiumExt = {};

    const _0x2a10=['493386ApaKmI','1sPnpJI','freeze','134800PjkGMa','190435ITSbOZ','1175189lCUlFw','1398299hQadEJ','683005pyyqYz','1510348tolptA'];const _0x555fa9=_0x397c;(function(_0x9c0a4,_0x50a3db){const _0x1f2558=_0x397c;while(!![]){try{const _0x3ef2f4=parseInt(_0x1f2558(0x1d6))+parseInt(_0x1f2558(0x1d8))*-parseInt(_0x1f2558(0x1d5))+-parseInt(_0x1f2558(0x1d2))+-parseInt(_0x1f2558(0x1d4))+-parseInt(_0x1f2558(0x1d1))+parseInt(_0x1f2558(0x1d3))+parseInt(_0x1f2558(0x1d7));if(_0x3ef2f4===_0x50a3db)break;else _0x9c0a4['push'](_0x9c0a4['shift']());}catch(_0x4ceb36){_0x9c0a4['push'](_0x9c0a4['shift']());}}}(_0x2a10,0xbc920));const ClampMode={'Space':0x0,'Ground':0x1,'S3mModel':0x2,'Raster':0x3};function _0x397c(_0x3f8054,_0x114c4a){_0x3f8054=_0x3f8054-0x1d1;let _0x2a10a6=_0x2a10[_0x3f8054];return _0x2a10a6;}var _0x3ea69a = Object[_0x555fa9(0x1d9)](ClampMode);

    const _0x5314=['463441HpELnq','15073KlLPZi','269629NRqOGn','2441107DAwILv','freeze','339808PIpUSn','5099inDFBe','1uHbdrG','1JrutVC','82jDCLLF','2384OGqLbn','17zLwmqE','92NToeuU'];const _0x4386e5=_0x4247;(function(_0x129160,_0x5f2f01){const _0x287a06=_0x4247;while(!![]){try{const _0x505759=-parseInt(_0x287a06(0x17f))*-parseInt(_0x287a06(0x186))+-parseInt(_0x287a06(0x180))*parseInt(_0x287a06(0x188))+-parseInt(_0x287a06(0x184))+parseInt(_0x287a06(0x17d))*parseInt(_0x287a06(0x17c))+-parseInt(_0x287a06(0x181))+-parseInt(_0x287a06(0x185))*parseInt(_0x287a06(0x17e))+parseInt(_0x287a06(0x187))*parseInt(_0x287a06(0x182));if(_0x505759===_0x5f2f01)break;else _0x129160['push'](_0x129160['shift']());}catch(_0x5dfa3e){_0x129160['push'](_0x129160['shift']());}}}(_0x5314,0x99f11));function _0x4247(_0x26ff02,_0x19d18e){_0x26ff02=_0x26ff02-0x17c;let _0x531411=_0x5314[_0x26ff02];return _0x531411;}const DrawMode={'Point':0x0,'Line':0x1,'Polygon':0x2};var _0x2e8fa9 = Object[_0x4386e5(0x183)](DrawMode);

    const _0x1133=['3SFtZsT','slice','length','_drawEvt','Ground','active','8745VVuiQG','ScreenSpaceEventType','add','Cartesian2','#51ff00','LEFT_CLICK','S3mModel','drawEvt','movingEvt','viewer','raiseEvent','Polygon','7718epxNdn','prototype','hierarchy','2GFgglP','DeveloperError','activate','clampToGroundPolylines','show','handler','concat','activeEvt','clone','781162RYEXnv','setInputAction','10OAnWXy','RIGHT_CLICK','defaultValue','61971kMCFAD','polygon','Cartesian3','ScreenSpaceEventHandler','primitives','isDrawing','ORANGE','remove','your\x20browser\x20not\x20supported\x20pickPosition!','Event','point','Point','polylines','polyline','endPosition','555154DfYFmn','position','pickPosition','fromType','5BXTQAB','539075LRFUCU','PointPrimitiveCollection','Color','Material','removeInputAction','Line','defineProperties','push','_activeEvt','withAlpha','positions','PolylineCollection','mode','random','scene','MOUSE_MOVE','_clampMode','189yzQzuF','Space','entities','ColorType','log','6922AqAjxq','points','fromCssColorString','deactivate'];const _0x259265=_0x3da1;(function(_0x2e4a0b,_0x272874){const _0xa17ffc=_0x3da1;while(!![]){try{const _0xe8dc28=-parseInt(_0xa17ffc(0x23c))*-parseInt(_0xa17ffc(0x233))+-parseInt(_0xa17ffc(0x224))*parseInt(_0xa17ffc(0x21e))+-parseInt(_0xa17ffc(0x215))*-parseInt(_0xa17ffc(0x230))+parseInt(_0xa17ffc(0x204))+parseInt(_0xa17ffc(0x1f0))+-parseInt(_0xa17ffc(0x21a))*-parseInt(_0xa17ffc(0x23e))+parseInt(_0xa17ffc(0x203))*-parseInt(_0xa17ffc(0x1ff));if(_0xe8dc28===_0x272874)break;else _0x2e4a0b['push'](_0x2e4a0b['shift']());}catch(_0x41ca66){_0x2e4a0b['push'](_0x2e4a0b['shift']());}}}(_0x1133,0xd91c7));function _0x3da1(_0x3f9e1d,_0x4aac51){_0x3f9e1d=_0x3f9e1d-0x1ef;let _0x11333a=_0x1133[_0x3f9e1d];return _0x11333a;}let DrawHandler=function(_0x3d57a1,_0x22f956,_0x4191ab){const _0x255f22=_0x3da1;if(!_0x3d57a1||_0x22f956===undefined)throw new Cesium[(_0x255f22(0x234))]('viewer\x20and\x20mode\x20is\x20required!');this[_0x255f22(0x238)]=new Cesium[(_0x255f22(0x1f3))](_0x3d57a1[_0x255f22(0x212)]['canvas']),this[_0x255f22(0x22d)]=_0x3d57a1,this[_0x255f22(0x210)]=_0x22f956,this[_0x255f22(0x214)]=Cesium[_0x255f22(0x1ef)](_0x4191ab,_0x3ea69a[_0x255f22(0x216)]),this[_0x255f22(0x1f5)]=![],this[_0x255f22(0x223)]=![],this[_0x255f22(0x221)]=new Cesium[(_0x255f22(0x1f9))](),this[_0x255f22(0x20c)]=new Cesium['Event'](),this[_0x255f22(0x22c)]=new Cesium[(_0x255f22(0x1f9))](),this[_0x255f22(0x1fc)]=undefined,this[_0x255f22(0x1fd)]=undefined,this['polygon']=undefined,this[_0x255f22(0x21b)]=undefined,this['point']=undefined;};Object[_0x259265(0x20a)](DrawHandler[_0x259265(0x231)],{'drawEvt':{'get':function(){return this['_drawEvt'];}},'activeEvt':{'get':function(){const _0xede841=_0x259265;return this[_0xede841(0x20c)];}}}),DrawHandler[_0x259265(0x231)][_0x259265(0x235)]=function(){const _0x43949d=_0x259265;if(this[_0x43949d(0x223)]===!![])return;this[_0x43949d(0x223)]=!![];let _0x598174=this;this[_0x43949d(0x238)][_0x43949d(0x23d)](function(_0xc305f8){clickHandler(_0xc305f8,_0x598174);},Cesium[_0x43949d(0x225)]['LEFT_CLICK']),this['handler'][_0x43949d(0x23d)](function(_0x27663a){moveHandler(_0x27663a,_0x598174);},Cesium['ScreenSpaceEventType'][_0x43949d(0x213)]),this[_0x43949d(0x238)]['setInputAction'](function(_0x3b0bc9){rclkHandler(_0x3b0bc9,_0x598174);},Cesium['ScreenSpaceEventType'][_0x43949d(0x23f)]),this[_0x43949d(0x23a)][_0x43949d(0x22e)](!![]);},DrawHandler[_0x259265(0x231)]['deactivate']=function(){const _0x5a6dc9=_0x259265;this[_0x5a6dc9(0x223)]=![],this['isDrawing']=![],this['handler']['removeInputAction'](Cesium[_0x5a6dc9(0x225)][_0x5a6dc9(0x229)]),this[_0x5a6dc9(0x238)][_0x5a6dc9(0x208)](Cesium[_0x5a6dc9(0x225)]['MOUSE_MOVE']),this['handler'][_0x5a6dc9(0x208)](Cesium[_0x5a6dc9(0x225)][_0x5a6dc9(0x23f)]),this[_0x5a6dc9(0x23a)][_0x5a6dc9(0x22e)](![]);},DrawHandler['prototype']['clear']=function(){const _0x26fd5c=_0x259265;this[_0x26fd5c(0x21d)](),this['polylines']&&(this[_0x26fd5c(0x1fc)]['removeAll'](),this[_0x26fd5c(0x22d)]['scene'][_0x26fd5c(0x1f4)][_0x26fd5c(0x1f7)](this['polylines']),this[_0x26fd5c(0x1fc)]=undefined),this[_0x26fd5c(0x1f1)]&&(this['viewer'][_0x26fd5c(0x217)][_0x26fd5c(0x1f7)](this['polygon']),this['polygon']=undefined),this[_0x26fd5c(0x21b)]&&(this[_0x26fd5c(0x21b)]['removeAll'](),this['viewer'][_0x26fd5c(0x212)][_0x26fd5c(0x1f4)]['remove'](this[_0x26fd5c(0x21b)]),this['points']=undefined);};function clickHandler(_0x2a576f,_0x5dc3dc){const _0xc7094b=_0x259265;let _0x2f3010=_0x5dc3dc;if(_0x2f3010&&_0x2f3010[_0xc7094b(0x223)]){let _0x39767c=_0x2f3010['viewer']['scene'];if(!_0x39767c['pickPositionSupported']){console[_0xc7094b(0x219)](_0xc7094b(0x1f8));return;}let _0x517cb6=_0x39767c['pickPosition'](_0x2a576f[_0xc7094b(0x200)]);if(_0x517cb6){if(!_0x2f3010[_0xc7094b(0x1f5)]){_0x2f3010[_0xc7094b(0x1f5)]=!![];switch(_0x2f3010[_0xc7094b(0x210)]){case _0x2e8fa9[_0xc7094b(0x1fb)]:startDrawPoint(_0x517cb6,_0x2f3010);break;case _0x2e8fa9[_0xc7094b(0x209)]:startDrawLine(_0x517cb6,_0x2f3010);break;case _0x2e8fa9[_0xc7094b(0x22f)]:startDrawPolygon(_0x517cb6,_0x2f3010);break;}}else {let _0x1c7fa7=new Cesium['Cartesian2'](_0x2a576f[_0xc7094b(0x200)]['x'],_0x2a576f['position']['y']);switch(_0x2f3010[_0xc7094b(0x210)]){case _0x2e8fa9[_0xc7094b(0x209)]:processLine(_0x1c7fa7,_0x2f3010,!![]);break;case _0x2e8fa9['Polygon']:processPolygon(_0x1c7fa7,_0x2f3010,!![]);break;}}}}}function startDrawPoint(_0x408b23,_0x12e69b){const _0x28a06a=_0x259265;let _0x186505=_0x12e69b;!_0x186505['points']?(_0x186505['points']=new Cesium[(_0x28a06a(0x205))](),_0x186505[_0x28a06a(0x1fa)]=_0x186505['points'][_0x28a06a(0x226)]({'position':_0x408b23,'pixelSize':0xa,'color':Cesium[_0x28a06a(0x206)]['WHITE']}),_0x186505[_0x28a06a(0x22d)][_0x28a06a(0x212)][_0x28a06a(0x1f4)][_0x28a06a(0x226)](_0x186505[_0x28a06a(0x21b)])):_0x186505[_0x28a06a(0x1fa)]['position']=_0x408b23,_0x186505[_0x28a06a(0x21d)](),_0x186505[_0x28a06a(0x22b)][_0x28a06a(0x22e)]({'object':_0x186505[_0x28a06a(0x1fa)]});}function startDrawLine(_0x4ef7e2,_0x2ba3d5){const _0x4e5439=_0x259265;let _0x47ab1c=_0x2ba3d5;!_0x47ab1c['polylines']?(_0x47ab1c[_0x4e5439(0x1fc)]=new Cesium[(_0x4e5439(0x20f))](),_0x47ab1c[_0x4e5439(0x1fd)]=_0x47ab1c['polylines'][_0x4e5439(0x226)]({'width':0x2,'positions':[_0x4ef7e2,_0x4ef7e2],'material':Cesium[_0x4e5439(0x207)]['fromType'](Cesium[_0x4e5439(0x207)][_0x4e5439(0x218)],{'color':Cesium[_0x4e5439(0x206)][_0x4e5439(0x21c)](_0x4e5439(0x228))})}),_0x47ab1c['viewer'][_0x4e5439(0x212)][_0x4e5439(0x1f4)][_0x4e5439(0x226)](_0x47ab1c[_0x4e5439(0x1fc)])):(_0x47ab1c[_0x4e5439(0x1fd)][_0x4e5439(0x237)]=!![],_0x47ab1c[_0x4e5439(0x1fd)][_0x4e5439(0x20e)]=[_0x4ef7e2,_0x4ef7e2]);}function startDrawPolygon(_0x3b484d,_0x160338){const _0x10fedd=_0x259265;let _0x4af1d8=_0x160338;!_0x4af1d8[_0x10fedd(0x1fc)]?(_0x4af1d8[_0x10fedd(0x1fc)]=new Cesium[(_0x10fedd(0x20f))](),_0x4af1d8['polyline']=_0x4af1d8['polylines'][_0x10fedd(0x226)]({'id':'polyline-'+Math[_0x10fedd(0x211)](),'width':0x2,'positions':[_0x3b484d,_0x3b484d],'material':Cesium[_0x10fedd(0x207)][_0x10fedd(0x202)](Cesium[_0x10fedd(0x207)]['ColorType'],{'color':Cesium[_0x10fedd(0x206)]['fromCssColorString'](_0x10fedd(0x228))}),'loop':!![]}),_0x4af1d8[_0x10fedd(0x22d)]['scene'][_0x10fedd(0x1f4)][_0x10fedd(0x226)](_0x4af1d8[_0x10fedd(0x1fc)])):(_0x4af1d8[_0x10fedd(0x1fd)][_0x10fedd(0x237)]=!![],_0x4af1d8[_0x10fedd(0x1fd)][_0x10fedd(0x20e)]=[_0x3b484d,_0x3b484d],_0x4af1d8[_0x10fedd(0x1f1)]&&(_0x4af1d8[_0x10fedd(0x1f1)][_0x10fedd(0x237)]=![]));}function moveHandler(_0x208388,_0x4aa08b){const _0x3002cb=_0x259265;let _0x5bd8ef=_0x4aa08b;if(_0x5bd8ef&&_0x5bd8ef[_0x3002cb(0x223)]&&_0x5bd8ef[_0x3002cb(0x1f5)]){let _0x2b945c=new Cesium[(_0x3002cb(0x227))](_0x208388['endPosition']['x'],_0x208388['endPosition']['y']);switch(_0x5bd8ef[_0x3002cb(0x210)]){case _0x2e8fa9['Line']:processLine(_0x2b945c,_0x5bd8ef,![]);break;case _0x2e8fa9[_0x3002cb(0x22f)]:processPolygon(_0x2b945c,_0x5bd8ef,![]);break;}}_0x5bd8ef[_0x3002cb(0x22c)][_0x3002cb(0x22e)](new Cesium[(_0x3002cb(0x227))](_0x208388[_0x3002cb(0x1fe)]['x'],_0x208388[_0x3002cb(0x1fe)]['y']));}function processLine(_0x48463e,_0x4b5c42,_0x57bd88){const _0x2337c4=_0x259265;let _0x3168b8=_0x4b5c42,_0x56045f=_0x3168b8['viewer'][_0x2337c4(0x212)],_0xee78f5=_0x56045f[_0x2337c4(0x201)](_0x48463e);if(!_0xee78f5)return;let _0x423e25=_0x3168b8[_0x2337c4(0x1fd)][_0x2337c4(0x20e)],_0xa9e4da=_0x423e25[_0x2337c4(0x220)];_0x57bd88?_0x423e25[_0xa9e4da]=_0xee78f5:_0x423e25[_0xa9e4da-0x1]=_0xee78f5,_0x3168b8[_0x2337c4(0x1fd)][_0x2337c4(0x20e)]=_0x423e25;}function processPolygon(_0x42048b,_0x21b97d,_0x43b95c){const _0x4a7e6a=_0x259265;let _0x1db138=_0x21b97d,_0x2a6a93=_0x1db138[_0x4a7e6a(0x22d)][_0x4a7e6a(0x212)],_0x3d6166=_0x2a6a93[_0x4a7e6a(0x201)](_0x42048b);if(!_0x3d6166)return;let _0x447282=_0x1db138[_0x4a7e6a(0x1fd)][_0x4a7e6a(0x20e)],_0x4c402c=_0x447282[_0x4a7e6a(0x220)];_0x43b95c?_0x447282[_0x4c402c]=_0x3d6166:_0x447282[_0x4c402c-0x1]=_0x3d6166,_0x1db138[_0x4a7e6a(0x1fd)]['positions']=_0x447282;}function rclkHandler(_0x2b8aba,_0x30699e){const _0x2ea7ce=_0x259265;let _0x3b01cb=_0x30699e;if(_0x3b01cb&&_0x3b01cb[_0x2ea7ce(0x223)]&&_0x3b01cb[_0x2ea7ce(0x1f5)]){_0x3b01cb[_0x2ea7ce(0x21d)]();if(!_0x3b01cb[_0x2ea7ce(0x1fd)])return;_0x3b01cb[_0x2ea7ce(0x1fd)][_0x2ea7ce(0x20e)]=_0x3b01cb[_0x2ea7ce(0x1fd)][_0x2ea7ce(0x20e)][_0x2ea7ce(0x21f)](0x0,_0x3b01cb[_0x2ea7ce(0x1fd)]['positions'][_0x2ea7ce(0x220)]-0x1);if(_0x3b01cb[_0x2ea7ce(0x210)]===_0x2e8fa9[_0x2ea7ce(0x22f)]){if(_0x3b01cb[_0x2ea7ce(0x1fd)]['positions']['length']<0x3){_0x3b01cb[_0x2ea7ce(0x1fd)][_0x2ea7ce(0x20e)][_0x2ea7ce(0x220)]=0x0;return;}let _0x40ff40=[][_0x2ea7ce(0x239)](_0x3b01cb[_0x2ea7ce(0x1fd)][_0x2ea7ce(0x20e)]);!_0x3b01cb['polygon']&&(_0x3b01cb['polygon']=_0x3b01cb[_0x2ea7ce(0x22d)][_0x2ea7ce(0x217)][_0x2ea7ce(0x226)]({'polygon':{'hierarchy':{'positions':_0x40ff40},'material':Cesium[_0x2ea7ce(0x206)][_0x2ea7ce(0x1f6)][_0x2ea7ce(0x20d)](0.5),'perPositionHeight':_0x3ea69a['Space']===_0x3b01cb[_0x2ea7ce(0x214)]}})),_0x3b01cb[_0x2ea7ce(0x1f1)][_0x2ea7ce(0x1f1)][_0x2ea7ce(0x232)]=_0x40ff40,_0x3b01cb[_0x2ea7ce(0x1f1)][_0x2ea7ce(0x20e)]=_0x40ff40,_0x3b01cb[_0x2ea7ce(0x1f1)]['show']=!![],_0x3b01cb[_0x2ea7ce(0x22b)][_0x2ea7ce(0x22e)]({'object':_0x3b01cb[_0x2ea7ce(0x1f1)]});}else {if(_0x3b01cb[_0x2ea7ce(0x210)]===_0x2e8fa9[_0x2ea7ce(0x209)]){let _0x170be5=[];for(let _0x4a8c58=0x0,_0x162397=_0x3b01cb['polyline'][_0x2ea7ce(0x20e)][_0x2ea7ce(0x220)];_0x4a8c58<_0x162397;_0x4a8c58++){_0x170be5[_0x2ea7ce(0x20b)](Cesium[_0x2ea7ce(0x1f2)][_0x2ea7ce(0x23b)](_0x3b01cb[_0x2ea7ce(0x1fd)][_0x2ea7ce(0x20e)][_0x4a8c58]));}(_0x3b01cb['_clampMode']===_0x3ea69a[_0x2ea7ce(0x22a)]||_0x3b01cb[_0x2ea7ce(0x214)]===_0x3ea69a[_0x2ea7ce(0x222)])&&(!_0x3b01cb[_0x2ea7ce(0x236)]&&(_0x3b01cb[_0x2ea7ce(0x236)]=[]),_0x3b01cb['clampToGroundPolylines'][_0x2ea7ce(0x20b)](_0x3b01cb[_0x2ea7ce(0x22d)][_0x2ea7ce(0x217)]['add']({'polyline':{'positions':_0x170be5,'width':0x5,'material':Cesium[_0x2ea7ce(0x206)][_0x2ea7ce(0x21c)](_0x2ea7ce(0x228)),'clampToGround':!![]}})),_0x3b01cb[_0x2ea7ce(0x1fd)]['show']=![]),_0x3b01cb[_0x2ea7ce(0x22b)][_0x2ea7ce(0x22e)]({'object':_0x3b01cb[_0x2ea7ce(0x1fd)]});}}}}

    const _0x53cb=['96306LwbduB','17uFptre','17456CJMLkK','6599BQdpCZ','freeze','21EOwcJE','17dTEjpA','18058fPLRwK','758hfzLDx','15371CxwkPv','51trPONu','754gwpFpy','331664zDInsR'];const _0x1d9c17=_0x40f4;(function(_0x508c70,_0x3f1ca7){const _0x58941f=_0x40f4;while(!![]){try{const _0x9632aa=parseInt(_0x58941f(0x99))*-parseInt(_0x58941f(0x97))+parseInt(_0x58941f(0x91))+-parseInt(_0x58941f(0x95))*parseInt(_0x58941f(0x8f))+parseInt(_0x58941f(0x92))+parseInt(_0x58941f(0x8e))*-parseInt(_0x58941f(0x98))+-parseInt(_0x58941f(0x9a))*-parseInt(_0x58941f(0x90))+parseInt(_0x58941f(0x94))*parseInt(_0x58941f(0x93));if(_0x9632aa===_0x3f1ca7)break;else _0x508c70['push'](_0x508c70['shift']());}catch(_0x1cbcf6){_0x508c70['push'](_0x508c70['shift']());}}}(_0x53cb,0x4decc));function _0x40f4(_0x27cf64,_0x44777c){_0x27cf64=_0x27cf64-0x8e;let _0x53cbf3=_0x53cb[_0x27cf64];return _0x53cbf3;}const MeasureMode={'Distance':0x0,'Area':0x1,'DVH':0x2};var _0x2d58b1 = Object[_0x1d9c17(0x96)](MeasureMode);

    const _0x4aa2=['defaultValue','defined','ScreenSpaceEventType','LEFT_CLICK','negateNormal','MeasureHandler.lineDisplayType','clear','longitude','endPoint','setInputAction','ColorType','1qeYXYo','fromRadians','length','plane','8lNqQLZ','viewer\x20and\x20mode\x20is\x20required!','height','push','lessThanOrEquals','typeOf','distance','_capturePointSize','epEntity','_currentDis','1DdABLh','greaterThanOrEquals','subtract','latitude','toCartesian','Plane','clone','_enableDepthTest','polygon','hierarchy','lerp','Ray','attributes','IntersectionTests','CallbackProperty','startPoint','verticalPolyline','_position','slice','MAX_VALUE','Math','OCCLUDED','PolylineCollection','RIGHT_CLICK','canvas','BLACK','remove','_accumulationDis','entities','clampToGroundPolyline','_polygon','subdivideLine','add','deactivate','mode','fromCache','angleBetween','_disLabel','magnitude','Cartographic','_lineColor','handler','polylines','884TUIHji','clampToGroundPolygonPositions','DeveloperError','cross','MOUSE_MOVE','WHITE','normal','_capturePointColor','Space','LEFT','endPosition','tmpEntities','_value','3992cggHVe','getHeight','FILL_AND_OUTLINE','positions','500\x2016px\x20sans-serif','corridor','1KoQHmZ','removeAll','_distance','NearFarScalar','S3mModel','concat','_clampMode','#ffe500','PolygonPipeline','_labelBackgroundColor','activate','_lineWidth','max','polyline','fromType','fpEntity','ScreenSpaceEventHandler','_fillColor','withAlpha','fromCssColorString','LabelStyle','PolygonGeometry','show','position','_labelPixelOffset','unpackArray','globe','prototype','values','spEntity','_showMeasureResult','BLUE','number','fromCartesian','Color','removeInputAction','100\x2020px\x20SimSun','toFixed','isDrawing','indices','rayPlane','750694ZhwmYx','DVH','fromPositions','_hLabel','defineProperties','raiseEvent','Material','Distance','_dblclickListener','_vLabel','230802lllCtb','LabelCollection','Cartesian2','computeArea','viewer','pickPosition','startHeight','473wnsJLg','Cartesian3','_labelPixelOffsetScaleByDistance','activeEvt','HorizontalOrigin','labels','_measureEvt','_activeEvt','active','1972DIvJhB','Check','Ground','1409BKrvpW','Event','measureEvt','466430aUsvwt','_currentArea','clampToGroundPolylinePositions','normalize','_accumulationPositions','_accumulationArea','primitives','_areaLabel','horizontalPolyline','lineDisplayType','scene','72823pXXEuL','triangulate','#51ff00','chordLength','dirPolyline','Area','_lineDisplayType'];const _0x3a9de2=_0x68ae;(function(_0xabdbe1,_0x28287b){const _0x2a108b=_0x68ae;while(!![]){try{const _0x510cc0=parseInt(_0x2a108b(0x225))*-parseInt(_0x2a108b(0x23b))+-parseInt(_0x2a108b(0x245))*-parseInt(_0x2a108b(0x21a))+parseInt(_0x2a108b(0x204))+parseInt(_0x2a108b(0x27d))*parseInt(_0x2a108b(0x237))+parseInt(_0x2a108b(0x217))*-parseInt(_0x2a108b(0x20b))+parseInt(_0x2a108b(0x283))*-parseInt(_0x2a108b(0x1fa))+parseInt(_0x2a108b(0x270))*parseInt(_0x2a108b(0x214));if(_0x510cc0===_0x28287b)break;else _0xabdbe1['push'](_0xabdbe1['shift']());}catch(_0x2aadf9){_0xabdbe1['push'](_0xabdbe1['shift']());}}}(_0x4aa2,0x6c941));function MeasureHandler(_0x1b34db,_0x37a748,_0x2d9d50,_0x3ba522){const _0x436f96=_0x68ae;if(!_0x1b34db||!Cesium[_0x436f96(0x22d)](_0x37a748))throw new Cesium[(_0x436f96(0x272))](_0x436f96(0x23c));this[_0x436f96(0x26e)]=new Cesium[(_0x436f96(0x1e1))](_0x1b34db[_0x436f96(0x224)][_0x436f96(0x25d)]),this[_0x436f96(0x208)]=_0x1b34db,this[_0x436f96(0x289)]=Cesium[_0x436f96(0x22c)](_0x2d9d50,_0x3ea69a[_0x436f96(0x278)]),this['mode']=_0x37a748,this[_0x436f96(0x1f7)]=![],this['active']=![],this['tmpEntities']=[],this[_0x436f96(0x221)]=undefined,this[_0x436f96(0x26a)]=undefined,this[_0x436f96(0x203)]=undefined,this[_0x436f96(0x1fd)]=undefined,this[_0x436f96(0x211)]=new Cesium['Event'](),this[_0x436f96(0x212)]=new Cesium[(_0x436f96(0x218))](),this[_0x436f96(0x24c)]=![],this[_0x436f96(0x28c)]=Cesium['Color'][_0x436f96(0x1e4)]('rgba(38,\x2038,\x2038,\x200.85)'),this[_0x436f96(0x20d)]=new Cesium[(_0x436f96(0x286))](0x96,0x3,0xe4e1c0,0.5),this[_0x436f96(0x1e9)]=new Cesium[(_0x436f96(0x206))](0xf,0x0),this[_0x436f96(0x26d)]=Cesium['Color']['fromCssColorString'](_0x436f96(0x227)),this[_0x436f96(0x1e2)]=Cesium[_0x436f96(0x1f3)]['ORANGE'][_0x436f96(0x1e3)](0.5),this[_0x436f96(0x1dc)]=0x2,this[_0x436f96(0x202)]=undefined,this['_showMeasureResult']=Cesium[_0x436f96(0x22c)](_0x3ba522,!![]),this[_0x436f96(0x22b)]=LineDisplayType['NON_OCCLUDED'];}Object[_0x3a9de2(0x1fe)](MeasureHandler[_0x3a9de2(0x1ec)],{'activeEvt':{'get':function(){return this['_activeEvt'];}},'measureEvt':{'get':function(){const _0x4f6d94=_0x3a9de2;return this[_0x4f6d94(0x211)];}},'disLabel':{'get':function(){return this['_disLabel'];}},'areaLabel':{'get':function(){const _0x1a9ac6=_0x3a9de2;return this[_0x1a9ac6(0x221)];}},'hLabel':{'get':function(){const _0x187f6b=_0x3a9de2;return this[_0x187f6b(0x1fd)];}},'vLabel':{'get':function(){return this['_vLabel'];}},'capturePointSize':{'get':function(){const _0x1aeba2=_0x3a9de2;return this[_0x1aeba2(0x208)][_0x1aeba2(0x242)];},'set':function(_0x5ec51d){const _0x267251=_0x3a9de2;this[_0x267251(0x208)][_0x267251(0x242)]=_0x5ec51d;}},'capturePointColor':{'get':function(){const _0x1ee5bc=_0x3a9de2;return this[_0x1ee5bc(0x208)][_0x1ee5bc(0x277)];},'set':function(_0x24126f){const _0x29d810=_0x3a9de2;this[_0x29d810(0x208)][_0x29d810(0x277)]=_0x24126f;}},'lineColor':{'get':function(){const _0xea0db=_0x3a9de2;return this[_0xea0db(0x26d)];},'set':function(_0x1f21b4){const _0x3e1fcf=_0x3a9de2;this[_0x3e1fcf(0x26d)]=_0x1f21b4;}},'fillColor':{'get':function(){return this['_fillColor'];},'set':function(_0x3eec34){const _0x2714f9=_0x3a9de2;this[_0x2714f9(0x1e2)]=_0x3eec34;}},'lineWidth':{'get':function(){return this['_lineWidth'];},'set':function(_0x146f3d){const _0x391c3d=_0x3a9de2;this[_0x391c3d(0x1dc)]=_0x146f3d;}},'lineDisplayType':{'get':function(){return this['_lineDisplayType'];},'set':function(_0x41fc3c){const _0x19d274=_0x3a9de2;Cesium[_0x19d274(0x215)][_0x19d274(0x240)][_0x19d274(0x1f1)][_0x19d274(0x246)](_0x19d274(0x231),_0x41fc3c,0x0),Cesium[_0x19d274(0x215)][_0x19d274(0x240)][_0x19d274(0x1f1)][_0x19d274(0x23f)](_0x19d274(0x231),_0x41fc3c,0x2),this[_0x19d274(0x22b)]=_0x41fc3c,this['polylines']&&(this[_0x19d274(0x26f)][_0x19d274(0x223)]=_0x41fc3c);}}}),MeasureHandler[_0x3a9de2(0x1ec)][_0x3a9de2(0x1db)]=function(){const _0x20ea22=_0x3a9de2;this[_0x20ea22(0x232)]();if(this['active'])return;this[_0x20ea22(0x213)]=!![];let _0x58bf4b=this;this[_0x20ea22(0x26e)]['setInputAction'](function(_0x32b699){clickHandler$1(_0x32b699,_0x58bf4b);},Cesium['ScreenSpaceEventType'][_0x20ea22(0x22f)]),this[_0x20ea22(0x26e)][_0x20ea22(0x235)](function(_0x43e636){moveHandler$1(_0x43e636,_0x58bf4b);},Cesium[_0x20ea22(0x22e)][_0x20ea22(0x274)]),this[_0x20ea22(0x26e)][_0x20ea22(0x235)](function(_0x4b95b7){rclkHandler$1(_0x4b95b7,_0x58bf4b);},Cesium['ScreenSpaceEventType'][_0x20ea22(0x25c)]),this['activeEvt'][_0x20ea22(0x1ff)](!![]);},MeasureHandler[_0x3a9de2(0x1ec)][_0x3a9de2(0x266)]=function(){const _0x5a62a1=_0x3a9de2;this[_0x5a62a1(0x213)]&&this[_0x5a62a1(0x20e)]['raiseEvent'](![]),this[_0x5a62a1(0x213)]=![],this['isDrawing']=![],this[_0x5a62a1(0x26e)][_0x5a62a1(0x1f4)](Cesium['ScreenSpaceEventType']['LEFT_CLICK']),this['handler'][_0x5a62a1(0x1f4)](Cesium[_0x5a62a1(0x22e)][_0x5a62a1(0x274)]),this[_0x5a62a1(0x26e)][_0x5a62a1(0x1f4)](Cesium[_0x5a62a1(0x22e)][_0x5a62a1(0x25c)]);},MeasureHandler[_0x3a9de2(0x1ec)][_0x3a9de2(0x232)]=function(){const _0x111052=_0x3a9de2;this[_0x111052(0x266)]();for(let _0x1e187c=0x0,_0x11195b=this['tmpEntities'][_0x111052(0x239)];_0x1e187c<_0x11195b;_0x1e187c++){this['viewer'][_0x111052(0x261)][_0x111052(0x25f)](this[_0x111052(0x27b)][_0x1e187c]);}this[_0x111052(0x262)]&&(this[_0x111052(0x208)][_0x111052(0x261)][_0x111052(0x25f)](this[_0x111052(0x262)]),this[_0x111052(0x262)]=null);this['tmpEntities'][_0x111052(0x239)]=0x0;this[_0x111052(0x26f)]&&(this['polylines'][_0x111052(0x284)](),this[_0x111052(0x208)][_0x111052(0x224)][_0x111052(0x220)][_0x111052(0x25f)](this[_0x111052(0x26f)]),this[_0x111052(0x26f)]=undefined);this['spEntity']&&(this[_0x111052(0x208)][_0x111052(0x261)][_0x111052(0x25f)](this[_0x111052(0x1ee)]),this[_0x111052(0x1ee)]=undefined);this['epEntity']&&(this[_0x111052(0x208)][_0x111052(0x261)][_0x111052(0x25f)](this[_0x111052(0x243)]),this['epEntity']=undefined);this[_0x111052(0x1e0)]&&(this[_0x111052(0x208)][_0x111052(0x261)][_0x111052(0x25f)](this[_0x111052(0x1e0)]),this[_0x111052(0x1e0)]=undefined);if(this[_0x111052(0x210)])switch(this[_0x111052(0x267)]){case _0x2d58b1[_0x111052(0x201)]:this[_0x111052(0x210)][_0x111052(0x25f)](this['_disLabel']);break;case _0x2d58b1['Area']:this[_0x111052(0x210)][_0x111052(0x25f)](this[_0x111052(0x221)]);break;case _0x2d58b1[_0x111052(0x1fb)]:this['labels'][_0x111052(0x25f)](this[_0x111052(0x26a)]),this['labels'][_0x111052(0x25f)](this[_0x111052(0x1fd)]),this[_0x111052(0x210)][_0x111052(0x25f)](this[_0x111052(0x203)]);break;}this[_0x111052(0x24d)]&&(this[_0x111052(0x208)][_0x111052(0x261)][_0x111052(0x25f)](this['polygon']),this[_0x111052(0x24d)]=undefined),this[_0x111052(0x282)]&&(this[_0x111052(0x208)]['entities']['remove'](this[_0x111052(0x282)]),this[_0x111052(0x282)]=undefined);};function clickHandler$1(_0x477f3f,_0x37f403){const _0x212c61=_0x3a9de2;let _0x3aecc0=_0x37f403;if(_0x3aecc0&&_0x3aecc0[_0x212c61(0x213)]){let _0x30d234=_0x3aecc0[_0x212c61(0x208)][_0x212c61(0x224)],_0x2bcf2e=_0x30d234['pickPosition'](_0x477f3f[_0x212c61(0x1e8)]);if(_0x2bcf2e){if(!_0x3aecc0['isDrawing']){_0x3aecc0[_0x212c61(0x1f7)]=!![];switch(_0x3aecc0[_0x212c61(0x267)]){case _0x2d58b1[_0x212c61(0x201)]:startMeasureDis(_0x2bcf2e,_0x3aecc0);break;case _0x2d58b1[_0x212c61(0x22a)]:startMeasureArea(_0x2bcf2e,_0x3aecc0);break;case _0x2d58b1[_0x212c61(0x1fb)]:startMeasureDVH(_0x2bcf2e,_0x3aecc0);break;}}else _0x3aecc0[_0x212c61(0x267)]==_0x2d58b1['DVH']?_0x3aecc0[_0x212c61(0x266)]():processClk(_0x2bcf2e,_0x3aecc0);}}}function moveHandler$1(_0x517873,_0x4dd47b){const _0xbf7129=_0x3a9de2;let _0xfbfedd=_0x4dd47b,_0x383f77=_0xfbfedd[_0xbf7129(0x208)][_0xbf7129(0x224)],_0x4bcb15=_0x383f77[_0xbf7129(0x209)](_0x517873[_0xbf7129(0x27a)]);if(_0xfbfedd&&_0xfbfedd[_0xbf7129(0x213)]&&_0xfbfedd['isDrawing']&&_0x4bcb15)switch(_0xfbfedd['mode']){case _0x2d58b1[_0xbf7129(0x201)]:processDistance(_0x4bcb15,_0xfbfedd);break;case _0x2d58b1['Area']:processArea(_0x4bcb15,_0xfbfedd);break;case _0x2d58b1[_0xbf7129(0x1fb)]:processDVH(_0x4bcb15,_0xfbfedd);break;}}function rclkHandler$1(_0x43a28c,_0x2e6cf){const _0x85afaa=_0x3a9de2;let _0x27fd4b=_0x2e6cf;if(_0x27fd4b&&_0x27fd4b['active']&&_0x27fd4b[_0x85afaa(0x1f7)]){_0x27fd4b[_0x85afaa(0x266)]();let _0x5a0ed4;if(_0x27fd4b[_0x85afaa(0x1de)]){_0x27fd4b[_0x85afaa(0x267)]===_0x2d58b1[_0x85afaa(0x201)]?(_0x27fd4b[_0x85afaa(0x26f)]['remove'](_0x27fd4b[_0x85afaa(0x1de)]),_0x5a0ed4=_0x27fd4b[_0x85afaa(0x21e)],_0x27fd4b[_0x85afaa(0x26f)][_0x85afaa(0x239)]===0x0&&_0x27fd4b[_0x85afaa(0x208)][_0x85afaa(0x261)][_0x85afaa(0x25f)](_0x27fd4b[_0x85afaa(0x1ee)])):(_0x27fd4b[_0x85afaa(0x1de)][_0x85afaa(0x280)]=_0x27fd4b[_0x85afaa(0x1de)][_0x85afaa(0x280)][_0x85afaa(0x257)](0x0,_0x27fd4b[_0x85afaa(0x1de)][_0x85afaa(0x280)][_0x85afaa(0x239)]-0x1),_0x27fd4b[_0x85afaa(0x1de)][_0x85afaa(0x280)][_0x85afaa(0x239)]===0x1&&_0x27fd4b[_0x85afaa(0x208)]['entities'][_0x85afaa(0x25f)](_0x27fd4b[_0x85afaa(0x1ee)]),_0x5a0ed4=_0x27fd4b['polyline'][_0x85afaa(0x280)]);_0x27fd4b['viewer'][_0x85afaa(0x261)]['remove'](_0x27fd4b['epEntity']);if(!_0x27fd4b[_0x85afaa(0x24d)]){(_0x27fd4b['_clampMode']===_0x3ea69a['Ground']||_0x27fd4b[_0x85afaa(0x289)]===_0x3ea69a[_0x85afaa(0x287)])&&(_0x27fd4b[_0x85afaa(0x21c)]=_0x5a0ed4,_0x27fd4b[_0x85afaa(0x1de)][_0x85afaa(0x1e7)]=![]);_0x27fd4b['_disLabel'][_0x85afaa(0x1e8)]=_0x5a0ed4[_0x5a0ed4[_0x85afaa(0x239)]-0x1];let _0x430b33=0x0;if(_0x2e6cf[_0x85afaa(0x289)]===_0x3ea69a[_0x85afaa(0x216)])_0x430b33=computeClampDistance(_0x27fd4b[_0x85afaa(0x208)][_0x85afaa(0x224)],_0x27fd4b[_0x85afaa(0x21e)]);else for(let _0x112fc7=0x0,_0x2e9122=_0x5a0ed4['length']-0x1;_0x112fc7<_0x2e9122;_0x112fc7++){_0x430b33+=Cesium[_0x85afaa(0x20c)][_0x85afaa(0x241)](_0x5a0ed4[_0x112fc7],_0x5a0ed4[_0x112fc7+0x1]);}_0x27fd4b[_0x85afaa(0x26a)][_0x85afaa(0x1e7)]=_0x430b33!==0x0,_0x27fd4b[_0x85afaa(0x219)]['raiseEvent']({'distance':_0x430b33[_0x85afaa(0x1f6)](0x8),'positions':_0x5a0ed4});}}if(_0x27fd4b[_0x85afaa(0x24d)]){if(_0x5a0ed4[_0x85afaa(0x239)]<0x3){_0x27fd4b[_0x85afaa(0x221)][_0x85afaa(0x1e7)]=![],_0x27fd4b[_0x85afaa(0x208)][_0x85afaa(0x261)][_0x85afaa(0x25f)](_0x27fd4b[_0x85afaa(0x1ee)]);for(let _0x5af8d1=0x0,_0x171d25=_0x27fd4b[_0x85afaa(0x27b)]['length'];_0x5af8d1<_0x171d25;_0x5af8d1++){_0x27fd4b[_0x85afaa(0x208)][_0x85afaa(0x261)][_0x85afaa(0x25f)](_0x27fd4b['tmpEntities'][_0x5af8d1]);}_0x27fd4b[_0x85afaa(0x27b)]['length']=0x0,_0x27fd4b[_0x85afaa(0x208)]['entities'][_0x85afaa(0x25f)](_0x27fd4b[_0x85afaa(0x243)]),_0x27fd4b['polyline'][_0x85afaa(0x280)][_0x85afaa(0x239)]=0x0;}_0x27fd4b['_areaLabel'][_0x85afaa(0x1e7)]=!![];(_0x27fd4b[_0x85afaa(0x289)]==_0x3ea69a[_0x85afaa(0x216)]||_0x27fd4b[_0x85afaa(0x289)]==_0x3ea69a[_0x85afaa(0x287)])&&(_0x27fd4b[_0x85afaa(0x1de)]['show']=![]);_0x27fd4b[_0x85afaa(0x271)]=_0x27fd4b[_0x85afaa(0x1de)][_0x85afaa(0x280)],_0x27fd4b[_0x85afaa(0x24d)][_0x85afaa(0x1e7)]=!![];if(_0x5a0ed4['length']>0x2){if(_0x27fd4b[_0x85afaa(0x289)]!==_0x3ea69a[_0x85afaa(0x216)])_0x27fd4b['_areaLabel'][_0x85afaa(0x1e8)]=_0x27fd4b[_0x85afaa(0x1de)][_0x85afaa(0x280)][_0x27fd4b[_0x85afaa(0x1de)][_0x85afaa(0x280)][_0x85afaa(0x239)]-0x1];else {let _0xf80ab7=_0x27fd4b[_0x85afaa(0x27b)][_0x27fd4b[_0x85afaa(0x27b)]['length']-0x1],_0x1fad42=_0xf80ab7[_0x85afaa(0x256)][_0x85afaa(0x27c)];_0x27fd4b[_0x85afaa(0x221)][_0x85afaa(0x1e8)]=_0x1fad42;}if(_0x27fd4b[_0x85afaa(0x289)]===_0x3ea69a[_0x85afaa(0x216)]){let _0x42b620=computeClampArea(_0x27fd4b[_0x85afaa(0x208)][_0x85afaa(0x224)],_0x27fd4b[_0x85afaa(0x1de)][_0x85afaa(0x280)]);_0x27fd4b[_0x85afaa(0x219)][_0x85afaa(0x1ff)]({'area':_0x42b620[_0x85afaa(0x1f6)](0x8),'positions':_0x5a0ed4});return;}let _0x5a6855=Cesium['PolygonPipeline'][_0x85afaa(0x226)](_0x5a0ed4),_0xab1c7c=_0x5a6855['length']/0x3,_0x193317,_0x2c68b1,_0xdd1107,_0x5955cf=0x0;for(let _0x4e414f=0x0;_0x4e414f<_0xab1c7c;_0x4e414f++){_0x193317=_0x5a0ed4[_0x5a6855[_0x4e414f*0x3]],_0x2c68b1=_0x5a0ed4[_0x5a6855[_0x4e414f*0x3+0x1]],_0xdd1107=_0x5a0ed4[_0x5a6855[_0x4e414f*0x3+0x2]],v12Scratch=Cesium['Cartesian3'][_0x85afaa(0x247)](_0x2c68b1,_0x193317,v12Scratch),v13Scratch=Cesium[_0x85afaa(0x20c)][_0x85afaa(0x247)](_0xdd1107,_0x193317,v13Scratch),crossScratch=Cesium[_0x85afaa(0x20c)][_0x85afaa(0x273)](v12Scratch,v13Scratch,crossScratch),_0x5955cf+=0.5*Cesium[_0x85afaa(0x20c)][_0x85afaa(0x26b)](crossScratch);}_0x27fd4b[_0x85afaa(0x219)][_0x85afaa(0x1ff)]({'area':_0x5955cf['toFixed'](0x8),'positions':_0x5a0ed4});}}}}function processClk(_0x101847,_0x40b389){const _0x44e797=_0x3a9de2;let _0x25c22c=_0x40b389;_0x25c22c[_0x44e797(0x267)]===_0x2d58b1[_0x44e797(0x201)]?(_0x25c22c[_0x44e797(0x1de)]=_0x25c22c[_0x44e797(0x26f)][_0x44e797(0x265)]({'width':_0x25c22c[_0x44e797(0x1dc)],'show':_0x25c22c[_0x44e797(0x1ef)],'positions':[_0x101847,_0x101847],'material':Cesium[_0x44e797(0x200)][_0x44e797(0x1df)](Cesium[_0x44e797(0x200)]['ColorType'],{'color':_0x25c22c[_0x44e797(0x26d)]}),'clampToGround':!![]}),_0x40b389[_0x44e797(0x289)]===_0x3ea69a['Ground']&&(_0x25c22c[_0x44e797(0x1de)]['show']=![],_0x25c22c[_0x44e797(0x260)]=_0x25c22c[_0x44e797(0x244)]),_0x25c22c[_0x44e797(0x21e)][_0x44e797(0x23e)](_0x101847)):(_0x25c22c[_0x44e797(0x267)]===_0x2d58b1[_0x44e797(0x22a)]&&(_0x25c22c[_0x44e797(0x21f)]=_0x25c22c[_0x44e797(0x21b)]),_0x25c22c['polyline'][_0x44e797(0x280)][_0x44e797(0x23e)](_0x101847)),_0x25c22c[_0x44e797(0x24d)]&&(_0x40b389[_0x44e797(0x289)]!==_0x3ea69a[_0x44e797(0x216)]&&(_0x25c22c[_0x44e797(0x24d)][_0x44e797(0x263)][_0x44e797(0x24e)]=_0x25c22c['polyline'][_0x44e797(0x280)])),_0x25c22c[_0x44e797(0x27b)][_0x44e797(0x23e)](_0x25c22c[_0x44e797(0x208)][_0x44e797(0x261)]['add']({'show':_0x25c22c[_0x44e797(0x1ef)],'position':_0x101847,'point':{'pixelSize':0x8,'color':Cesium['Color'][_0x44e797(0x1e4)](_0x44e797(0x28a))}}));}function _0x68ae(_0x2865cf,_0x4ee139){_0x2865cf=_0x2865cf-0x1db;let _0x4aa273=_0x4aa2[_0x2865cf];return _0x4aa273;}let v12Scratch=new Cesium[(_0x3a9de2(0x20c))](),v13Scratch=new Cesium[(_0x3a9de2(0x20c))](),crossScratch=new Cesium[(_0x3a9de2(0x20c))]();function processArea(_0x25efea,_0x3584dd){const _0x11f0f5=_0x3a9de2;let _0x5aad76=_0x3584dd,_0x37ec31=_0x5aad76[_0x11f0f5(0x208)][_0x11f0f5(0x224)];if(!_0x25efea)return;_0x5aad76[_0x11f0f5(0x234)]=_0x25efea;let _0x11ee9e=_0x5aad76[_0x11f0f5(0x1de)][_0x11f0f5(0x280)],_0x39e33d=_0x11ee9e[_0x11f0f5(0x239)];_0x11ee9e[_0x39e33d-0x1]=_0x25efea;_0x39e33d>0x2&&(_0x5aad76[_0x11f0f5(0x221)]&&(_0x5aad76[_0x11f0f5(0x221)][_0x11f0f5(0x1e7)]=!![]),_0x5aad76['clampToGroundPolygonPositions']=_0x11ee9e);_0x5aad76[_0x11f0f5(0x1de)][_0x11f0f5(0x280)]=_0x11ee9e;if(_0x11ee9e['length']>0x2){_0x5aad76['epEntity'][_0x11f0f5(0x1e8)]=_0x25efea,_0x5aad76[_0x11f0f5(0x221)][_0x11f0f5(0x1e8)]=_0x25efea,_0x5aad76[_0x11f0f5(0x221)][_0x11f0f5(0x1e7)]=_0x3584dd['_clampMode']!==_0x3ea69a[_0x11f0f5(0x216)];let _0x1e7784;if(_0x3584dd['_clampMode']===_0x3ea69a[_0x11f0f5(0x216)])return;_0x1e7784=MeasureHandler[_0x11f0f5(0x207)](_0x11ee9e),_0x5aad76[_0x11f0f5(0x219)]['raiseEvent']({'area':_0x1e7784['toFixed'](0x8),'positions':_0x11ee9e});}}function startMeasureArea(_0x4ea7b1,_0x4e8c76){const _0xc65027=_0x3a9de2;let _0x4923f8=_0x4e8c76;_0x4923f8[_0xc65027(0x271)]=[],_0x4923f8['tmpEntities'][_0xc65027(0x239)]=0x0;let _0x4bef26=_0x4923f8[_0xc65027(0x24c)];_0x4923f8[_0xc65027(0x26f)]=new Cesium[(_0xc65027(0x25b))](),_0x4923f8[_0xc65027(0x1de)]=_0x4923f8[_0xc65027(0x26f)][_0xc65027(0x265)]({'width':_0x4923f8['_lineWidth'],'positions':[_0x4ea7b1,_0x4ea7b1],'material':Cesium[_0xc65027(0x200)][_0xc65027(0x1df)](Cesium[_0xc65027(0x200)]['ColorType'],{'color':_0x4923f8[_0xc65027(0x26d)]}),'loop':!![]}),_0x4923f8[_0xc65027(0x208)][_0xc65027(0x224)]['primitives']['add'](_0x4923f8[_0xc65027(0x26f)]),_0x4923f8[_0xc65027(0x1ee)]=_0x4923f8[_0xc65027(0x208)][_0xc65027(0x261)][_0xc65027(0x265)]({'position':_0x4ea7b1,'point':{'pixelSize':0x8,'color':Cesium[_0xc65027(0x1f3)][_0xc65027(0x1e4)](_0xc65027(0x28a))}}),_0x4923f8['epEntity']=_0x4923f8[_0xc65027(0x208)][_0xc65027(0x261)][_0xc65027(0x265)]({'position':_0x4ea7b1,'point':{'pixelSize':0x8,'color':Cesium[_0xc65027(0x1f3)]['fromCssColorString'](_0xc65027(0x28a))}});let _0x1063e9=_0x4923f8[_0xc65027(0x208)][_0xc65027(0x224)][_0xc65027(0x220)][_0xc65027(0x265)](new Cesium[(_0xc65027(0x205))]({'depthTestEnable':![]}));_0x4923f8[_0xc65027(0x221)]=_0x1063e9[_0xc65027(0x265)]({'position':_0x4ea7b1,'font':_0xc65027(0x1f5),'fillColor':Cesium[_0xc65027(0x1f3)][_0xc65027(0x275)],'style':Cesium['LabelStyle'][_0xc65027(0x27f)],'showBackground':!![],'outlineWidth':0x1,'outlineColor':Cesium['Color']['BLUE'],'pixelOffset':_0x4923f8[_0xc65027(0x1e9)],'text':'','show':_0x4923f8[_0xc65027(0x1ef)],'horizontalOrigin':Cesium[_0xc65027(0x20f)][_0xc65027(0x279)]});let _0x4a585d=_0x4923f8[_0xc65027(0x289)],_0x3be42c=_0x4a585d===_0x3ea69a[_0xc65027(0x278)];_0x4923f8[_0xc65027(0x24d)]=_0x4923f8[_0xc65027(0x208)][_0xc65027(0x261)][_0xc65027(0x265)]({'polygon':{'hierarchy':new Cesium[(_0xc65027(0x253))](function(){const _0x24b66a=_0xc65027;return {'positions':_0x4923f8[_0x24b66a(0x271)],'holes':[]};},![]),'material':_0x4923f8[_0xc65027(0x1e2)],'perPositionHeight':_0x3be42c},'show':![]}),_0x4923f8[_0xc65027(0x210)]=_0x1063e9,_0x4e8c76[_0xc65027(0x289)]===_0x3ea69a[_0xc65027(0x216)]&&(_0x4923f8[_0xc65027(0x1de)]['show']=![],_0x4923f8[_0xc65027(0x24d)][_0xc65027(0x1e7)]=!![]),_0x4923f8[_0xc65027(0x221)][_0xc65027(0x1e7)]=![];}function startMeasureDis(_0x541351,_0x4e21d8){const _0x48f6db=_0x3a9de2;let _0x2dd075=_0x4e21d8;_0x4e21d8[_0x48f6db(0x289)]===_0x3ea69a[_0x48f6db(0x216)]&&(_0x2dd075[_0x48f6db(0x21c)]=[],_0x2dd075['clampToGroundPolyline']=_0x2dd075[_0x48f6db(0x208)][_0x48f6db(0x261)][_0x48f6db(0x265)]({'polyline':{'positions':new Cesium[(_0x48f6db(0x253))](function(){return _0x2dd075['clampToGroundPolylinePositions'];},![]),'width':_0x2dd075[_0x48f6db(0x1dc)],'material':_0x2dd075[_0x48f6db(0x26d)],'clampToGround':!![]}}));_0x2dd075['tmpEntities'][_0x48f6db(0x239)]=0x0;if(!_0x2dd075[_0x48f6db(0x26f)]){let _0x4f36f3=_0x2dd075[_0x48f6db(0x24c)];_0x2dd075['polylines']=new Cesium[(_0x48f6db(0x25b))]({'opaqueRS':RenderState[_0x48f6db(0x268)]({'depthMask':_0x4f36f3,'depthTest':{'enabled':_0x4f36f3}}),'translucentRS':RenderState['fromCache']({'depthMask':_0x4f36f3,'depthTest':{'enabled':_0x4f36f3}}),'lineDisplayType':_0x2dd075['_clampMode']===_0x3ea69a[_0x48f6db(0x216)]?LineDisplayType[_0x48f6db(0x25a)]:_0x2dd075[_0x48f6db(0x22b)]}),_0x2dd075[_0x48f6db(0x1de)]=_0x2dd075[_0x48f6db(0x26f)][_0x48f6db(0x265)]({'width':_0x2dd075['_lineWidth'],'show':_0x2dd075[_0x48f6db(0x1ef)],'positions':[_0x541351,_0x541351],'material':Cesium['Material'][_0x48f6db(0x1df)](Cesium[_0x48f6db(0x200)]['ColorType'],{'color':_0x2dd075[_0x48f6db(0x26d)]}),'clampToGround':!![]}),_0x2dd075[_0x48f6db(0x208)][_0x48f6db(0x224)]['primitives'][_0x48f6db(0x265)](_0x2dd075[_0x48f6db(0x26f)]),_0x2dd075[_0x48f6db(0x21e)]=[_0x541351],_0x2dd075[_0x48f6db(0x260)]=0x0,_0x2dd075[_0x48f6db(0x244)]=0x0,_0x2dd075[_0x48f6db(0x1ee)]=_0x2dd075[_0x48f6db(0x208)][_0x48f6db(0x261)][_0x48f6db(0x265)]({'position':_0x541351,'show':_0x2dd075['_showMeasureResult'],'point':{'pixelSize':0x8,'color':Cesium[_0x48f6db(0x1f3)][_0x48f6db(0x1e4)](_0x48f6db(0x28a))}}),_0x2dd075[_0x48f6db(0x243)]=_0x2dd075['viewer']['entities']['add']({'position':_0x541351,'show':_0x2dd075[_0x48f6db(0x1ef)],'point':{'pixelSize':0x8,'color':Cesium[_0x48f6db(0x1f3)]['fromCssColorString'](_0x48f6db(0x28a))}});let _0x3d68d9=_0x2dd075['viewer']['scene'][_0x48f6db(0x220)][_0x48f6db(0x265)](new Cesium[(_0x48f6db(0x205))]({'depthTestEnable':![]}));_0x2dd075['_disLabel']=_0x3d68d9[_0x48f6db(0x265)]({'position':_0x541351,'font':_0x48f6db(0x1f5),'fillColor':Cesium[_0x48f6db(0x1f3)][_0x48f6db(0x275)],'style':Cesium[_0x48f6db(0x1e5)][_0x48f6db(0x27f)],'showBackground':!![],'backgroundColor':_0x2dd075[_0x48f6db(0x28c)],'outlineWidth':0x1,'outlineColor':Cesium[_0x48f6db(0x1f3)][_0x48f6db(0x1f0)],'pixelOffset':_0x2dd075[_0x48f6db(0x1e9)],'text':'','show':_0x2dd075[_0x48f6db(0x1ef)],'horizontalOrigin':Cesium[_0x48f6db(0x20f)][_0x48f6db(0x279)]}),_0x2dd075[_0x48f6db(0x210)]=_0x3d68d9;let _0xea4f2b=_0x2dd075[_0x48f6db(0x289)]==_0x3ea69a[_0x48f6db(0x287)]?!![]:![],_0x41c9a7=Cesium[_0x48f6db(0x20c)]['clone'](_0x541351);_0x2dd075[_0x48f6db(0x282)]=_0x2dd075[_0x48f6db(0x208)][_0x48f6db(0x261)][_0x48f6db(0x265)]({'corridor':{'positions':[_0x41c9a7,_0x41c9a7],'width':0x14,'material':Cesium[_0x48f6db(0x1f3)][_0x48f6db(0x1e4)](_0x48f6db(0x227))},'clampToS3M':_0xea4f2b,'show':![]});}_0x4e21d8['_clampMode']===_0x3ea69a['Ground']&&(_0x2dd075[_0x48f6db(0x1de)][_0x48f6db(0x1e7)]=![]);}function processDistance(_0x5c9926,_0x342ac0){const _0x456164=_0x3a9de2;let _0x5b8b59=_0x342ac0,_0x388d84=_0x5b8b59[_0x456164(0x208)][_0x456164(0x224)];_0x5b8b59[_0x456164(0x234)]=_0x5c9926;let _0x3e3330=_0x5b8b59[_0x456164(0x1de)][_0x456164(0x280)],_0x3f1315=_0x3e3330[_0x456164(0x239)];_0x342ac0[_0x456164(0x289)]===_0x3ea69a[_0x456164(0x216)]&&(_0x5b8b59['mode']===_0x2d58b1['Distance']?_0x5b8b59[_0x456164(0x21c)]=_0x5b8b59[_0x456164(0x21e)]['concat']([_0x5c9926]):_0x5b8b59[_0x456164(0x21c)]=_0x3e3330);_0x3e3330[_0x3f1315-0x1]=_0x5c9926,_0x5b8b59[_0x456164(0x1de)][_0x456164(0x280)]=_0x3e3330,_0x5b8b59[_0x456164(0x243)][_0x456164(0x1e8)]=_0x5c9926;let _0x36166b=0x0,_0x50a567=_0x5b8b59[_0x456164(0x21e)][_0x456164(0x288)]([_0x5c9926]);_0x5b8b59[_0x456164(0x1de)][_0x456164(0x285)]=_0x36166b,_0x5b8b59['_disLabel']['position']=_0x5c9926,_0x5b8b59['_disLabel'][_0x456164(0x1e7)]=_0x342ac0[_0x456164(0x289)]!==_0x3ea69a['Ground'];if(_0x342ac0[_0x456164(0x289)]===_0x3ea69a[_0x456164(0x216)])return;else for(let _0x380da2=0x0,_0x136bb3=_0x50a567[_0x456164(0x239)]-0x1;_0x380da2<_0x136bb3;_0x380da2++){_0x36166b+=Cesium[_0x456164(0x20c)][_0x456164(0x241)](_0x50a567[_0x380da2],_0x50a567[_0x380da2+0x1]);}_0x5b8b59[_0x456164(0x219)]['raiseEvent']({'distance':_0x36166b[_0x456164(0x1f6)](0x8),'positions':_0x50a567});}function startMeasureDVH(_0x28c405,_0x5a4ed3){const _0x165940=_0x3a9de2;let _0x156c02=_0x5a4ed3;if(!_0x156c02['polylines']){let _0x39a20a=_0x156c02[_0x165940(0x24c)];_0x156c02[_0x165940(0x26f)]=new Cesium['PolylineCollection']({'opaqueRS':RenderState['fromCache']({'depthMask':_0x39a20a,'depthTest':{'enabled':_0x39a20a}}),'lineDisplayType':_0x156c02['_lineDisplayType']}),_0x156c02[_0x165940(0x222)]=_0x156c02[_0x165940(0x26f)][_0x165940(0x265)]({'width':0x2,'show':_0x156c02[_0x165940(0x1ef)],'positions':[_0x28c405,_0x28c405],'material':Cesium[_0x165940(0x200)]['fromType'](Cesium[_0x165940(0x200)][_0x165940(0x236)],{'color':_0x156c02[_0x165940(0x26d)]})}),_0x156c02['verticalPolyline']=_0x156c02[_0x165940(0x26f)][_0x165940(0x265)]({'width':0x2,'show':_0x156c02['_showMeasureResult'],'positions':[_0x28c405,_0x28c405],'material':Cesium[_0x165940(0x200)][_0x165940(0x1df)](Cesium[_0x165940(0x200)][_0x165940(0x236)],{'color':_0x156c02['_lineColor']})}),_0x156c02[_0x165940(0x229)]=_0x156c02[_0x165940(0x26f)][_0x165940(0x265)]({'width':0x2,'show':_0x156c02[_0x165940(0x1ef)],'positions':[_0x28c405,_0x28c405],'material':Cesium[_0x165940(0x200)][_0x165940(0x1df)](Cesium['Material'][_0x165940(0x236)],{'color':_0x156c02['_lineColor']})}),_0x156c02[_0x165940(0x208)][_0x165940(0x224)][_0x165940(0x220)][_0x165940(0x265)](_0x156c02[_0x165940(0x26f)]),_0x156c02[_0x165940(0x1ee)]=_0x156c02[_0x165940(0x208)]['entities']['add']({'position':_0x28c405,'show':_0x156c02[_0x165940(0x1ef)],'point':{'pixelSize':0x8,'color':Cesium[_0x165940(0x1f3)][_0x165940(0x1e4)](_0x165940(0x28a))}}),_0x156c02['epEntity']=_0x156c02[_0x165940(0x208)]['entities']['add']({'position':_0x28c405,'show':_0x156c02['_showMeasureResult'],'point':{'pixelSize':0x8,'color':Cesium[_0x165940(0x1f3)][_0x165940(0x1e4)]('#ffe500')}}),_0x156c02[_0x165940(0x1e0)]=_0x156c02[_0x165940(0x208)]['entities'][_0x165940(0x265)]({'position':_0x28c405,'show':_0x156c02[_0x165940(0x1ef)],'point':{'pixelSize':0x8,'color':Cesium[_0x165940(0x1f3)][_0x165940(0x1e4)](_0x165940(0x28a))}});let _0x49afaa=_0x156c02[_0x165940(0x208)][_0x165940(0x224)][_0x165940(0x220)][_0x165940(0x265)](new Cesium['LabelCollection']({'depthTestEnable':![]}));_0x156c02['_disLabel']=_0x49afaa[_0x165940(0x265)]({'position':_0x28c405,'font':_0x165940(0x281),'style':Cesium['LabelStyle'][_0x165940(0x27f)],'outlineWidth':0x1,'outlineColor':Cesium[_0x165940(0x1f3)][_0x165940(0x25e)],'showBackground':!![],'backgroundColor':_0x156c02[_0x165940(0x28c)],'pixelOffset':_0x156c02[_0x165940(0x1e9)],'pixelOffsetScaleByDistance':_0x156c02[_0x165940(0x20d)],'text':'','show':_0x156c02[_0x165940(0x1ef)],'horizontalOrigin':Cesium[_0x165940(0x20f)][_0x165940(0x279)]}),_0x156c02[_0x165940(0x203)]=_0x49afaa[_0x165940(0x265)]({'position':_0x28c405,'font':_0x165940(0x281),'style':Cesium[_0x165940(0x1e5)][_0x165940(0x27f)],'outlineWidth':0x1,'outlineColor':Cesium['Color']['BLACK'],'showBackground':!![],'backgroundColor':_0x156c02[_0x165940(0x28c)],'pixelOffset':_0x156c02[_0x165940(0x1e9)],'pixelOffsetScaleByDistance':_0x156c02[_0x165940(0x20d)],'text':'','show':_0x156c02[_0x165940(0x1ef)],'horizontalOrigin':Cesium['HorizontalOrigin']['LEFT']}),_0x156c02[_0x165940(0x1fd)]=_0x49afaa[_0x165940(0x265)]({'position':_0x28c405,'font':_0x165940(0x281),'style':Cesium[_0x165940(0x1e5)][_0x165940(0x27f)],'outlineWidth':0x1,'outlineColor':Cesium[_0x165940(0x1f3)]['BLACK'],'showBackground':!![],'backgroundColor':_0x156c02[_0x165940(0x28c)],'pixelOffset':_0x156c02[_0x165940(0x1e9)],'pixelOffsetScaleByDistance':_0x156c02['_labelPixelOffsetScaleByDistance'],'text':'','show':_0x156c02[_0x165940(0x1ef)],'horizontalOrigin':Cesium[_0x165940(0x20f)][_0x165940(0x279)]}),_0x156c02[_0x165940(0x210)]=_0x49afaa;}let _0x284f36=new Cesium[(_0x165940(0x20c))]();Cesium[_0x165940(0x20c)][_0x165940(0x21d)](_0x28c405,_0x284f36),_0x156c02['plane']=Cesium[_0x165940(0x24a)]['fromPointNormal'](_0x28c405,_0x284f36),_0x156c02[_0x165940(0x254)]=_0x28c405,_0x156c02[_0x165940(0x20a)]=Cesium[_0x165940(0x26c)][_0x165940(0x1f2)](_0x28c405)[_0x165940(0x23d)],_0x156c02[_0x165940(0x276)]=_0x284f36;let _0x191a5b=new Cesium[(_0x165940(0x20c))]();Cesium['Cartesian3']['negate'](_0x284f36,_0x191a5b),_0x156c02[_0x165940(0x230)]=_0x191a5b,_0x156c02[_0x165940(0x1ee)][_0x165940(0x1e8)]=_0x28c405;}function processDVH(_0x1436f2,_0x2e67f3){const _0x4fa08b=_0x3a9de2;let _0x3c8974=_0x2e67f3,_0x51c753=_0x3c8974[_0x4fa08b(0x208)][_0x4fa08b(0x224)];if(!_0x1436f2)return;_0x3c8974[_0x4fa08b(0x234)]=_0x1436f2;let _0x823ac1=Cesium['Cartographic'][_0x4fa08b(0x1f2)](_0x1436f2)['height'],_0x2d91b7,_0x3e550a;_0x823ac1>_0x3c8974['startHeight']?(_0x2d91b7=Cesium[_0x4fa08b(0x24a)]['fromPointNormal'](_0x1436f2,_0x3c8974[_0x4fa08b(0x276)]),_0x3e550a=new Cesium['Ray'](_0x3c8974['startPoint'],_0x3c8974[_0x4fa08b(0x276)])):(_0x2d91b7=_0x3c8974[_0x4fa08b(0x23a)],_0x3e550a=new Cesium[(_0x4fa08b(0x250))](_0x1436f2,_0x3c8974[_0x4fa08b(0x276)]));let _0x240087=Cesium[_0x4fa08b(0x252)][_0x4fa08b(0x1f9)](_0x3e550a,_0x2d91b7);if(!_0x240087){_0x3e550a=new Cesium[(_0x4fa08b(0x250))](_0x1436f2,_0x3c8974[_0x4fa08b(0x276)]),_0x240087=Cesium[_0x4fa08b(0x252)][_0x4fa08b(0x1f9)](_0x3e550a,_0x3c8974[_0x4fa08b(0x23a)]);if(!_0x240087)return;}_0x3c8974[_0x4fa08b(0x222)][_0x4fa08b(0x280)]=[_0x3c8974['startPoint'],_0x240087],_0x3c8974[_0x4fa08b(0x229)][_0x4fa08b(0x280)]=[_0x3c8974['startPoint'],_0x1436f2],_0x3c8974[_0x4fa08b(0x255)][_0x4fa08b(0x280)]=[_0x1436f2,_0x240087],_0x3c8974[_0x4fa08b(0x243)][_0x4fa08b(0x1e8)]=_0x1436f2,_0x3c8974['fpEntity'][_0x4fa08b(0x1e8)]=_0x240087;let _0x23cd15=Cesium[_0x4fa08b(0x20c)][_0x4fa08b(0x241)](_0x3c8974['startPoint'],_0x1436f2)[_0x4fa08b(0x1f6)](0x8),_0x5d15d5=Cesium[_0x4fa08b(0x20c)][_0x4fa08b(0x241)](_0x3c8974['startPoint'],_0x240087)[_0x4fa08b(0x1f6)](0x8),_0x1003b3=Cesium[_0x4fa08b(0x20c)][_0x4fa08b(0x241)](_0x1436f2,_0x240087)[_0x4fa08b(0x1f6)](0x8);_0x823ac1>_0x3c8974[_0x4fa08b(0x20a)]?(Cesium[_0x4fa08b(0x20c)][_0x4fa08b(0x24f)](_0x3c8974[_0x4fa08b(0x254)],_0x1436f2,0.5,_0x3c8974[_0x4fa08b(0x26a)][_0x4fa08b(0x1e8)]),Cesium['Cartesian3'][_0x4fa08b(0x24f)](_0x3c8974['startPoint'],_0x240087,0.5,_0x3c8974[_0x4fa08b(0x203)][_0x4fa08b(0x1e8)]),Cesium[_0x4fa08b(0x20c)][_0x4fa08b(0x24f)](_0x1436f2,_0x240087,0.5,_0x3c8974[_0x4fa08b(0x1fd)][_0x4fa08b(0x1e8)])):(Cesium[_0x4fa08b(0x20c)]['lerp'](_0x3c8974[_0x4fa08b(0x254)],_0x1436f2,0.5,_0x3c8974[_0x4fa08b(0x26a)][_0x4fa08b(0x1e8)]),Cesium['Cartesian3'][_0x4fa08b(0x24f)](_0x1436f2,_0x240087,0.5,_0x3c8974['_vLabel']['position']),Cesium['Cartesian3']['lerp'](_0x3c8974['startPoint'],_0x240087,0.5,_0x3c8974[_0x4fa08b(0x1fd)][_0x4fa08b(0x1e8)]),_0x5d15d5=Cesium['Cartesian3'][_0x4fa08b(0x241)](_0x1436f2,_0x240087)[_0x4fa08b(0x1f6)](0x8),_0x1003b3=Cesium[_0x4fa08b(0x20c)]['distance'](_0x3c8974[_0x4fa08b(0x254)],_0x240087)[_0x4fa08b(0x1f6)](0x8)),_0x3c8974[_0x4fa08b(0x219)][_0x4fa08b(0x1ff)]({'distance':_0x23cd15,'directionalPositions':_0x3c8974[_0x4fa08b(0x229)][_0x4fa08b(0x280)],'verticalHeight':_0x5d15d5,'verticalPositions':_0x3c8974[_0x4fa08b(0x255)]['positions'],'horizontalDistance':_0x1003b3,'horizontalPositions':_0x3c8974[_0x4fa08b(0x222)][_0x4fa08b(0x280)]});}MeasureHandler[_0x3a9de2(0x207)]=function(_0x320937){const _0x4752e6=_0x3a9de2;let _0x75bc61=Cesium[_0x4752e6(0x28b)][_0x4752e6(0x226)](_0x320937),_0x453526=_0x75bc61[_0x4752e6(0x239)]/0x3,_0x511679,_0x305f3d,_0x2b61ef,_0x29e62a=0x0;for(let _0x2ec130=0x0;_0x2ec130<_0x453526;_0x2ec130++){_0x511679=_0x320937[_0x75bc61[_0x2ec130*0x3]],_0x305f3d=_0x320937[_0x75bc61[_0x2ec130*0x3+0x1]],_0x2b61ef=_0x320937[_0x75bc61[_0x2ec130*0x3+0x2]],v12Scratch=Cesium[_0x4752e6(0x20c)]['subtract'](_0x305f3d,_0x511679,v12Scratch),v13Scratch=Cesium['Cartesian3'][_0x4752e6(0x247)](_0x2b61ef,_0x511679,v13Scratch),crossScratch=Cesium[_0x4752e6(0x20c)][_0x4752e6(0x273)](v12Scratch,v13Scratch,crossScratch),_0x29e62a+=0.5*Cesium[_0x4752e6(0x20c)][_0x4752e6(0x26b)](crossScratch);}return _0x29e62a;};function computeClampArea(_0xfc5a6d,_0x32eb45){const _0x1e9feb=_0x3a9de2;let _0x42544d=Number[_0x1e9feb(0x258)],_0x1cdfe9=-Number[_0x1e9feb(0x258)],_0xe6674f=Number[_0x1e9feb(0x258)],_0xd29eb8=-Number['MAX_VALUE'];for(let _0x9c3665=0x0;_0x9c3665<_0x32eb45[_0x1e9feb(0x239)];_0x9c3665++){let _0x4c086b=Cesium[_0x1e9feb(0x26c)]['fromCartesian'](_0x32eb45[_0x9c3665]);_0x42544d=Math['min'](_0x4c086b[_0x1e9feb(0x233)],_0x42544d),_0x1cdfe9=Math[_0x1e9feb(0x1dd)](_0x4c086b['longitude'],_0x1cdfe9),_0xe6674f=Math['min'](_0x4c086b[_0x1e9feb(0x248)],_0xe6674f),_0xd29eb8=Math[_0x1e9feb(0x1dd)](_0x4c086b['latitude'],_0xd29eb8);}let _0x4bd2a3=Cesium[_0x1e9feb(0x26c)][_0x1e9feb(0x249)](new Cesium['Cartographic'](_0x42544d,_0xe6674f,0x0)),_0x308215=Cesium[_0x1e9feb(0x26c)][_0x1e9feb(0x249)](new Cesium[(_0x1e9feb(0x26c))](_0x1cdfe9,_0xd29eb8,0x0)),_0x4ee884=Cesium[_0x1e9feb(0x20c)][_0x1e9feb(0x269)](_0x4bd2a3,_0x308215),_0x5eaeb0=Cesium[_0x1e9feb(0x1e6)][_0x1e9feb(0x1fc)]({'positions':_0x32eb45,'granularity':_0x4ee884/0x20}),_0x1a6c37=Cesium[_0x1e9feb(0x1e6)]['createGeometry'](_0x5eaeb0),_0x535109=0x0,_0x3bdbeb={};for(let _0x2613c7=0x0;_0x2613c7<_0x1a6c37[_0x1e9feb(0x1f8)]['length'];_0x2613c7+=0x3){let _0x5bed2c=_0x1a6c37[_0x1e9feb(0x1f8)][_0x2613c7],_0x34a9e6;if(!_0x3bdbeb[_0x5bed2c]){let _0xb4accc=_0x1a6c37[_0x1e9feb(0x251)][_0x1e9feb(0x1e8)][_0x1e9feb(0x1ed)][_0x5bed2c*0x3],_0x10a454=_0x1a6c37[_0x1e9feb(0x251)]['position']['values'][_0x5bed2c*0x3+0x1],_0x247424=_0x1a6c37[_0x1e9feb(0x251)]['position'][_0x1e9feb(0x1ed)][_0x5bed2c*0x3+0x2];_0x34a9e6=new Cesium[(_0x1e9feb(0x20c))](_0xb4accc,_0x10a454,_0x247424);let _0x3a0672=Cesium['Cartographic']['fromCartesian'](_0x34a9e6),_0x448257=_0xfc5a6d[_0x1e9feb(0x1eb)][_0x1e9feb(0x27e)](_0x3a0672);if(!_0x448257)continue;_0x3a0672=Cesium[_0x1e9feb(0x26c)][_0x1e9feb(0x238)](_0x3a0672['longitude'],_0x3a0672[_0x1e9feb(0x248)],_0x448257),_0x34a9e6=Cesium[_0x1e9feb(0x26c)]['toCartesian'](_0x3a0672),_0x3bdbeb[_0x5bed2c]=Cesium[_0x1e9feb(0x20c)][_0x1e9feb(0x24b)](_0x34a9e6);}else _0x34a9e6=_0x3bdbeb[_0x5bed2c];let _0x4062d4=_0x1a6c37[_0x1e9feb(0x1f8)][_0x2613c7+0x1],_0xdf389b;if(!_0x3bdbeb[_0x4062d4]){let _0x2378b1=_0x1a6c37[_0x1e9feb(0x251)]['position'][_0x1e9feb(0x1ed)][_0x4062d4*0x3],_0xbc4e41=_0x1a6c37[_0x1e9feb(0x251)][_0x1e9feb(0x1e8)][_0x1e9feb(0x1ed)][_0x4062d4*0x3+0x1],_0x3033a9=_0x1a6c37[_0x1e9feb(0x251)]['position'][_0x1e9feb(0x1ed)][_0x4062d4*0x3+0x2];_0xdf389b=new Cesium[(_0x1e9feb(0x20c))](_0x2378b1,_0xbc4e41,_0x3033a9);let _0x39e200=Cesium[_0x1e9feb(0x26c)][_0x1e9feb(0x1f2)](_0xdf389b),_0x400373=_0xfc5a6d[_0x1e9feb(0x1eb)][_0x1e9feb(0x27e)](_0x39e200);if(!_0x400373)continue;_0x39e200=Cesium[_0x1e9feb(0x26c)][_0x1e9feb(0x238)](_0x39e200['longitude'],_0x39e200[_0x1e9feb(0x248)],_0x400373),_0xdf389b=Cesium[_0x1e9feb(0x26c)][_0x1e9feb(0x249)](_0x39e200),_0x3bdbeb[_0x4062d4]=Cesium[_0x1e9feb(0x20c)][_0x1e9feb(0x24b)](_0xdf389b);}else _0xdf389b=_0x3bdbeb[_0x4062d4];let _0x216a8f=_0x1a6c37[_0x1e9feb(0x1f8)][_0x2613c7+0x2],_0x1f2954;if(!_0x3bdbeb[_0x216a8f]){let _0xfa4680=_0x1a6c37['attributes']['position'][_0x1e9feb(0x1ed)][_0x216a8f*0x3],_0x2f8c77=_0x1a6c37['attributes']['position'][_0x1e9feb(0x1ed)][_0x216a8f*0x3+0x1],_0x4a03a5=_0x1a6c37[_0x1e9feb(0x251)][_0x1e9feb(0x1e8)][_0x1e9feb(0x1ed)][_0x216a8f*0x3+0x2];_0x1f2954=new Cesium[(_0x1e9feb(0x20c))](_0xfa4680,_0x2f8c77,_0x4a03a5);let _0x3c3014=Cesium[_0x1e9feb(0x26c)]['fromCartesian'](_0x1f2954),_0x429b70=_0xfc5a6d[_0x1e9feb(0x1eb)]['getHeight'](_0x3c3014);if(!_0x429b70)continue;_0x3c3014=Cesium[_0x1e9feb(0x26c)]['fromRadians'](_0x3c3014[_0x1e9feb(0x233)],_0x3c3014[_0x1e9feb(0x248)],_0x429b70),_0x1f2954=Cesium[_0x1e9feb(0x26c)][_0x1e9feb(0x249)](_0x3c3014),_0x3bdbeb[_0x216a8f]=Cesium[_0x1e9feb(0x20c)][_0x1e9feb(0x24b)](_0x1f2954);}else _0x1f2954=_0x3bdbeb[_0x216a8f];v12Scratch=Cesium[_0x1e9feb(0x20c)][_0x1e9feb(0x247)](_0xdf389b,_0x34a9e6,v12Scratch),v13Scratch=Cesium[_0x1e9feb(0x20c)]['subtract'](_0x1f2954,_0x34a9e6,v13Scratch),crossScratch=Cesium[_0x1e9feb(0x20c)]['cross'](v12Scratch,v13Scratch,crossScratch),_0x535109+=0.5*Cesium['Cartesian3'][_0x1e9feb(0x26b)](crossScratch);}return _0x535109;}function computeClampDistance(_0x98e93f,_0x43a2d0){const _0x488dbc=_0x3a9de2;let _0x1e4789=0x0,_0x51b46e=[],_0x113505=_0x43a2d0[_0x488dbc(0x239)]-0x1;for(let _0x3c03e1=0x0;_0x3c03e1<_0x113505;_0x3c03e1++){let _0x249d8f=_0x43a2d0[_0x3c03e1],_0x1bbd0f=_0x43a2d0[_0x3c03e1+0x1],_0x19e8f4=Cesium['Cartesian3'][_0x488dbc(0x269)](_0x249d8f,_0x1bbd0f),_0x35af22=_0x19e8f4/0x40,_0x46801b=Cesium[_0x488dbc(0x259)][_0x488dbc(0x228)](_0x35af22,0x615299),_0x5c9a36=Cesium['PolygonGeometryLibrary'][_0x488dbc(0x264)](_0x249d8f,_0x1bbd0f,_0x46801b,_0x51b46e),_0x19e0dc=Cesium[_0x488dbc(0x20c)][_0x488dbc(0x1ea)](_0x5c9a36),_0x5d8de2=_0x19e0dc[_0x488dbc(0x239)]-0x1;for(let _0x348c39=0x0;_0x348c39<_0x5d8de2;_0x348c39++){let _0x323cd0=_0x19e0dc[_0x348c39],_0x3b95ed=Cesium[_0x488dbc(0x26c)][_0x488dbc(0x1f2)](_0x323cd0),_0x55f93a=_0x98e93f[_0x488dbc(0x1eb)]['getHeight'](_0x3b95ed);_0x3b95ed=Cesium[_0x488dbc(0x26c)][_0x488dbc(0x238)](_0x3b95ed[_0x488dbc(0x233)],_0x3b95ed['latitude'],_0x55f93a);let _0x2e4baa=Cesium[_0x488dbc(0x26c)]['toCartesian'](_0x3b95ed),_0x18723f=_0x19e0dc[_0x348c39+0x1];_0x3b95ed=Cesium[_0x488dbc(0x26c)][_0x488dbc(0x1f2)](_0x18723f),_0x55f93a=_0x98e93f[_0x488dbc(0x1eb)]['getHeight'](_0x3b95ed),_0x3b95ed=Cesium[_0x488dbc(0x26c)][_0x488dbc(0x238)](_0x3b95ed[_0x488dbc(0x233)],_0x3b95ed['latitude'],_0x55f93a);let _0x4bc1d6=Cesium[_0x488dbc(0x26c)][_0x488dbc(0x249)](_0x3b95ed);_0x1e4789+=Cesium['Cartesian3']['distance'](_0x2e4baa,_0x4bc1d6);}}return _0x1e4789;}

    const _0x454b=['when','tileDiscardPolicy','DeveloperError','421910VnJUkN','574787peEhct','maximumLevel\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','_resource','tilingScheme\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','1TKIJNo','fetchImage','queryStringValue','_errorEvent','_rectangle','rectangle','string','southwest','Resource','positionToTileXY','documentElement','Credit','maximumLevel','defer','Bottom','northeast','toRadians','defaultValue','tileHeight\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','1006188ooqcNn','queryFirstNode','rectangle\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','reject','_urlTemplate','364119Ajpncq','Left','An\x20error\x20occurred\x20while\x20accessing\x20','appendForwardSlash','tilingScheme','http://www.supermap.com/SuperMapCache/sci3d','Event','Rectangle','_readyPromise','1185236ksjrhE','west','length','east','url','Levels','queryNumericValue','createIfNeeded','resolve','png','824858LPZIUe','south','textContent','680821GTIwji','Top','prototype','tileWidth\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','north','_tileHeight','_tileDiscardPolicy','defineProperties','_minimumLevel','RuntimeError','Math','Right','_ready','_tileWidth','requestImage\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','data/index/{y}/{x}.{fileExtension}?level={level}','getDerivedResource','_credit','_tileFormat','abs','CellWidth','config','minimumLevel','_maximumLevel','push','minimumLevel\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','CellHeight','_tilingScheme','_url'];const _0x2e93ac=_0x28c7;(function(_0x56c395,_0x4eb11b){const _0x2729f5=_0x28c7;while(!![]){try{const _0xb1c927=parseInt(_0x2729f5(0xd6))*-parseInt(_0x2729f5(0xb5))+-parseInt(_0x2729f5(0xcd))+parseInt(_0x2729f5(0xc8))+parseInt(_0x2729f5(0xb1))+-parseInt(_0x2729f5(0xe3))+parseInt(_0x2729f5(0xb0))+parseInt(_0x2729f5(0xe0));if(_0xb1c927===_0x4eb11b)break;else _0x56c395['push'](_0x56c395['shift']());}catch(_0x2d9645){_0x56c395['push'](_0x56c395['shift']());}}}(_0x454b,0x91e3f));function SuperMapImageryProvider(_0x3603b6){const _0x1fdb7e=_0x28c7;_0x3603b6=Cesium[_0x1fdb7e(0xc6)](_0x3603b6,{});if(!_0x3603b6[_0x1fdb7e(0xda)])throw new Cesium[(_0x1fdb7e(0xaf))]('options.url\x20is\x20required.');this[_0x1fdb7e(0xac)]=Cesium[_0x1fdb7e(0xd0)](_0x3603b6['url']),this[_0x1fdb7e(0xb3)]=Cesium[_0x1fdb7e(0xbd)][_0x1fdb7e(0xdd)](this[_0x1fdb7e(0xac)]),this[_0x1fdb7e(0xcc)]=undefined,this[_0x1fdb7e(0xb8)]=new Cesium[(_0x1fdb7e(0xd3))](),this[_0x1fdb7e(0x9d)]=0x100,this[_0x1fdb7e(0x95)]=0x100,this['_tileFormat']=_0x3603b6['tileFormat']||_0x1fdb7e(0xdf),this[_0x1fdb7e(0x98)]=Cesium[_0x1fdb7e(0xc6)](_0x3603b6[_0x1fdb7e(0xa6)],0x0),this[_0x1fdb7e(0xa7)]=_0x3603b6[_0x1fdb7e(0xc1)],this[_0x1fdb7e(0xb9)]=undefined,this[_0x1fdb7e(0xab)]=_0x3603b6[_0x1fdb7e(0xd1)],this[_0x1fdb7e(0x96)]=_0x3603b6['tileDiscardPolicy'];let _0x39995e=Cesium[_0x1fdb7e(0xc6)](_0x3603b6['credit'],'');typeof _0x39995e===_0x1fdb7e(0xbb)&&(_0x39995e=new Cesium[(_0x1fdb7e(0xc0))](_0x39995e));this[_0x1fdb7e(0xa1)]=_0x39995e,this[_0x1fdb7e(0x9c)]=![],this[_0x1fdb7e(0xd5)]=Cesium[_0x1fdb7e(0xad)][_0x1fdb7e(0xc2)]();let _0xabce58=this;function _0x592f93(_0x4b556e){const _0x1738cd=_0x1fdb7e;let _0x203274=_0x1738cd(0xd2),_0x282aa9=_0x4b556e[_0x1738cd(0xbf)],_0x1f871f=XMLParser[_0x1738cd(0xc9)](_0x282aa9,'Bounds',_0x203274),_0x3ca0bd=XMLParser[_0x1738cd(0xdc)](_0x1f871f,_0x1738cd(0xce),_0x203274),_0x39bc64=XMLParser[_0x1738cd(0xdc)](_0x1f871f,_0x1738cd(0x9b),_0x203274),_0x50a253=XMLParser[_0x1738cd(0xdc)](_0x1f871f,_0x1738cd(0xe4),_0x203274),_0x2d9360=XMLParser['queryNumericValue'](_0x1f871f,_0x1738cd(0xc3),_0x203274),_0x39a989=XMLParser[_0x1738cd(0xb7)](_0x282aa9,'FileExtentName',_0x203274),_0x41162c=XMLParser[_0x1738cd(0xdc)](_0x282aa9,_0x1738cd(0xa4),_0x203274),_0x595aec=XMLParser[_0x1738cd(0xdc)](_0x282aa9,_0x1738cd(0xaa),_0x203274),_0x10fca5=XMLParser['queryFirstNode'](_0x282aa9,_0x1738cd(0xdb),_0x203274),_0x3f4438=XMLParser['queryNodes'](_0x10fca5,'Level',_0x203274),_0x5d4539=[];for(let _0x33a6ad=0x0,_0xd47d85=_0x3f4438[_0x1738cd(0xd8)];_0x33a6ad<_0xd47d85;_0x33a6ad++){_0x5d4539[_0x1738cd(0xa8)](parseInt(_0x3f4438[_0x33a6ad][_0x1738cd(0xe2)],0xa));}_0xabce58['_tileFormat']=Cesium['defaultValue'](_0x39a989,'png'),_0xabce58[_0x1738cd(0x9d)]=Cesium['defaultValue'](_0x41162c,0x100),_0xabce58[_0x1738cd(0x95)]=Cesium[_0x1738cd(0xc6)](_0x595aec,0x100);let _0x345789=_0x5d4539[_0x1738cd(0xd8)];_0xabce58[_0x1738cd(0x98)]=Cesium[_0x1738cd(0xc6)](_0x5d4539[0x0],0x0),_0xabce58['_maximumLevel']=Cesium[_0x1738cd(0xc6)](_0xabce58['_maximumLevel'],_0x5d4539[_0x345789-0x1]);!_0xabce58[_0x1738cd(0xab)]&&(_0xabce58[_0x1738cd(0xab)]=new Cesium['GeographicTilingScheme']());let _0x1eac16=_0xabce58[_0x1738cd(0xab)];!_0xabce58[_0x1738cd(0xb9)]&&_0x3ca0bd&&_0x39bc64&&_0x50a253&&_0x2d9360&&(_0xabce58[_0x1738cd(0xb9)]=new Cesium[(_0x1738cd(0xd4))](Cesium[_0x1738cd(0x9a)][_0x1738cd(0xc5)](_0x3ca0bd),Cesium['Math'][_0x1738cd(0xc5)](_0x2d9360),Cesium['Math'][_0x1738cd(0xc5)](_0x39bc64),Cesium[_0x1738cd(0x9a)][_0x1738cd(0xc5)](_0x50a253)));_0xabce58[_0x1738cd(0xb9)][_0x1738cd(0xd7)]<_0x1eac16[_0x1738cd(0xba)][_0x1738cd(0xd7)]&&(_0xabce58[_0x1738cd(0xb9)][_0x1738cd(0xd7)]=_0x1eac16['rectangle'][_0x1738cd(0xd7)]);_0xabce58[_0x1738cd(0xb9)]['east']>_0x1eac16[_0x1738cd(0xba)][_0x1738cd(0xd9)]&&(_0xabce58[_0x1738cd(0xb9)][_0x1738cd(0xd9)]=_0x1eac16['rectangle']['east']);_0xabce58[_0x1738cd(0xb9)]['south']<_0x1eac16[_0x1738cd(0xba)][_0x1738cd(0xe1)]&&(_0xabce58[_0x1738cd(0xb9)][_0x1738cd(0xe1)]=_0x1eac16[_0x1738cd(0xba)][_0x1738cd(0xe1)]);_0xabce58[_0x1738cd(0xb9)][_0x1738cd(0x94)]>_0x1eac16[_0x1738cd(0xba)][_0x1738cd(0x94)]&&(_0xabce58['_rectangle']['north']=_0x1eac16[_0x1738cd(0xba)][_0x1738cd(0x94)]);let _0x5abd3a=_0x1eac16[_0x1738cd(0xbe)](Cesium['Rectangle'][_0x1738cd(0xbc)](_0xabce58['_rectangle']),_0xabce58['_minimumLevel']),_0xaa9a49=_0x1eac16['positionToTileXY'](Cesium[_0x1738cd(0xd4)][_0x1738cd(0xc4)](_0xabce58['_rectangle']),_0xabce58['_minimumLevel']),_0x1d3896=(Math[_0x1738cd(0xa3)](_0xaa9a49['x']-_0x5abd3a['x'])+0x1)*(Math[_0x1738cd(0xa3)](_0xaa9a49['y']-_0x5abd3a['y'])+0x1);_0x1d3896>0x4&&(_0xabce58[_0x1738cd(0x98)]=0x0),_0xabce58[_0x1738cd(0xcc)]=_0xabce58[_0x1738cd(0xac)]+_0x1738cd(0x9f),_0xabce58[_0x1738cd(0x9c)]=!![],_0xabce58['_readyPromise'][_0x1738cd(0xde)](!![]);}function _0x93ebc1(_0xeaa3ef){const _0x37c668=_0x1fdb7e;let _0x3f9383=_0x37c668(0xcf)+_0xabce58[_0x37c668(0xac)]+'.';_0xabce58[_0x37c668(0xd5)][_0x37c668(0xcb)](new Cesium[(_0x37c668(0x99))](_0x3f9383));}let _0x3119b7=this[_0x1fdb7e(0xb3)][_0x1fdb7e(0xa0)]({'url':_0x1fdb7e(0xa5)});Cesium['when'](_0x3119b7['fetchXML'](),_0x592f93,_0x93ebc1);}Object[_0x2e93ac(0x97)](SuperMapImageryProvider[_0x2e93ac(0x92)],{'url':{'get':function(){return this['_url'];}},'tileWidth':{'get':function(){const _0x4f3ab8=_0x2e93ac;if(!this[_0x4f3ab8(0x9c)])throw new DeveloperError(_0x4f3ab8(0x93));return this['_tileWidth'];}},'tileHeight':{'get':function(){const _0x2c4f47=_0x2e93ac;if(!this[_0x2c4f47(0x9c)])throw new DeveloperError(_0x2c4f47(0xc7));return this[_0x2c4f47(0x95)];}},'tileFormat':{'get':function(){const _0x14c65a=_0x2e93ac;return this[_0x14c65a(0xa2)];}},'maximumLevel':{'get':function(){const _0x1ed873=_0x2e93ac;if(!this['_ready'])throw new DeveloperError(_0x1ed873(0xb2));return this['resolution']===0x1?this[_0x1ed873(0xa7)]:this[_0x1ed873(0xa7)]-0x1;}},'minimumLevel':{'get':function(){const _0x24262f=_0x2e93ac;if(!this['_ready'])throw new DeveloperError(_0x24262f(0xa9));return this[_0x24262f(0x98)];}},'tilingScheme':{'get':function(){const _0x481993=_0x2e93ac;if(!this[_0x481993(0x9c)])throw new DeveloperError(_0x481993(0xb4));return this[_0x481993(0xab)];}},'rectangle':{'get':function(){const _0x29fb63=_0x2e93ac;if(!this['_ready'])throw new DeveloperError(_0x29fb63(0xca));return this['_rectangle'];}},'errorEvent':{'get':function(){return this['_errorEvent'];}},'ready':{'get':function(){const _0x20974c=_0x2e93ac;return this[_0x20974c(0x9c)];}},'credit':{'get':function(){return this['_credit'];}},'hasAlphaChannel':{'get':function(){return !![];}},'readyPromise':{'get':function(){const _0xd2901c=_0x2e93ac;return this[_0xd2901c(0xd5)];}},'tileDiscardPolicy':{'get':function(){const _0x308daa=_0x2e93ac;return this[_0x308daa(0x96)];}}}),SuperMapImageryProvider[_0x2e93ac(0x92)]['getTileCredits']=function(_0x2b75eb,_0x2f50bd,_0x1d5dea){return undefined;};function _0x28c7(_0x13b3df,_0x1c82e2){_0x13b3df=_0x13b3df-0x92;let _0x454b6c=_0x454b[_0x13b3df];return _0x454b6c;}function loadImage(_0x2dc2b4,_0x1d9146){const _0x2c9d1b=_0x2e93ac;let _0x312632=Cesium[_0x2c9d1b(0xbd)]['createIfNeeded'](_0x1d9146);if(_0x2dc2b4[_0x2c9d1b(0xae)])return _0x312632[_0x2c9d1b(0xb6)]({'preferBlob':!![],'preferImageBitmap':!![],'flipY':!![]});return _0x312632[_0x2c9d1b(0xb6)]();}SuperMapImageryProvider[_0x2e93ac(0x92)]['requestImage']=function(_0x3b87ef,_0x533838,_0x559ffe,_0x514a20){const _0x101adf=_0x2e93ac;if(!this[_0x101adf(0x9c)])throw new Cesium[(_0x101adf(0xaf))](_0x101adf(0x9e));let _0x95efbd=this[_0x101adf(0xb3)][_0x101adf(0xa0)]({'url':this[_0x101adf(0xcc)],'request':_0x514a20,'templateValues':{'x':_0x3b87ef,'y':_0x533838,'level':_0x559ffe,'fileExtension':this[_0x101adf(0xa2)]}});return loadImage(this,_0x95efbd);},SuperMapImageryProvider[_0x2e93ac(0x92)]['pickFeatures']=function(){return undefined;};

    const _0x1f30=['_hasVertexNormals','availabilityLevels','_readyPromise','fetchXML','Top','application/vnd.quantized-mesh,application/octet-stream;q=0.9,*/*;q=0.01','2.1.0','_ellipsoid','TileAvailability','fromRectangle','Rectangle','tms','getUint8','defineProperties','_tileCredits','requestTileGeometry\x20must\x20not\x20be\x20called\x20before\x20the\x20terrain\x20provider\x20is\x20ready.','Cartesian3','promise','_requestVertexNormals','Level','hasMetadata\x20must\x20not\x20be\x20called\x20before\x20the\x20terrain\x20provider\x20is\x20ready.','options.url\x20is\x20required.','_levelZeroMaximumGeometricError','getNumberOfYTilesAtLevel','defer','queryNumericValue','isTileAvailable','_errorEvent','queryChildNodes','availabilityPromiseCache','requestMetadata','GeographicTilingScheme','credit','byteLength','StartRow','hasMetadata','83956NvihHe','queryNumericAttribute','getFloat64','QuantizedMeshTerrainData','144354NAzXzf','_rectangle','statusCode','EndRow','parse','credit\x20must\x20not\x20be\x20called\x20before\x20the\x20terrain\x20provider\x20is\x20ready.','_credit','Credit','_scheme','getEstimatedLevelZeroGeometricErrorForAHeightmap','resource','defined','createTypedArrayFromArrayBuffer','BYTES_PER_ELEMENT','Resource','_heightmapWidth','push','245078iaJXht','floor','defaultValue','when','_heightmapStructure','Left','availabilityTilesLoaded','1.0.0','ellipsoid','EndCol','Levels','level','documentElement','tilingScheme\x20must\x20not\x20be\x20called\x20before\x20the\x20terrain\x20provider\x20is\x20ready.','getFloat32','TilesBounds','data/path/{z}/{x}/{y}.terrainz?v={version}','hasVertexNormals','_layers','TileBounds','OrientedBoundingBox','length','6ROauXb','otherwise','getTileDataAvailable','_hasMetadata','IndexDatatype','textContent','getDerivedResource','tileUrlTemplates','Right','getStringFromTypedArray','7RCNgGC','available','resolve','53108EqzFnm','subarray','isHeightmap','76015VmXxox','fetchArrayBuffer','METADATA','Available','endY','addAvailableTileRange','_tilingScheme','indexOf','DeveloperError','_availability','version','startX','_requestMetadata','string','OCT_VERTEX_NORMALS','StartCol','_maximumLevel','getLevelMaximumGeometricError','hasWaterMask','queryFirstNode','availability\x20must\x20not\x20be\x20called\x20before\x20the\x20terrain\x20provider\x20is\x20ready.','startY','getUint32','endX','prototype','_requestWaterMask','787197qRXCbs','Event','quantized-mesh-1.0','availability','_levels','littleEndianExtensionSize','_ready','tileXYToRectangle','then','_hasWaterMask','222277wvNcSo','TerrainProvider','url'];const _0x217c6a=_0x545c;(function(_0xe28a72,_0x4fa4f7){const _0xef7e75=_0x545c;while(!![]){try{const _0x3262d3=parseInt(_0xef7e75(0x194))+-parseInt(_0xef7e75(0x1b1))+parseInt(_0xef7e75(0x197))*parseInt(_0xef7e75(0x187))+parseInt(_0xef7e75(0x1e2))*parseInt(_0xef7e75(0x191))+-parseInt(_0xef7e75(0x1f7))+parseInt(_0xef7e75(0x1e6))+parseInt(_0xef7e75(0x1bb));if(_0x3262d3===_0x4fa4f7)break;else _0xe28a72['push'](_0xe28a72['shift']());}catch(_0x2463c4){_0xe28a72['push'](_0xe28a72['shift']());}}}(_0x1f30,0x6948e));function _0x545c(_0x32553d,_0x5ebb0d){_0x32553d=_0x32553d-0x185;let _0x1f309c=_0x1f30[_0x32553d];return _0x1f309c;}function LayerInformation(_0x5b0e2a){const _0x2e8fae=_0x545c;this[_0x2e8fae(0x1f0)]=_0x5b0e2a['resource'],this[_0x2e8fae(0x1a1)]=_0x5b0e2a[_0x2e8fae(0x1a1)],this['isHeightmap']=_0x5b0e2a[_0x2e8fae(0x196)],this[_0x2e8fae(0x18e)]=_0x5b0e2a[_0x2e8fae(0x18e)],this[_0x2e8fae(0x1b4)]=_0x5b0e2a['availability'],this[_0x2e8fae(0x208)]=_0x5b0e2a[_0x2e8fae(0x208)],this[_0x2e8fae(0x1a9)]=_0x5b0e2a[_0x2e8fae(0x1a9)],this['hasMetadata']=_0x5b0e2a[_0x2e8fae(0x1e1)],this[_0x2e8fae(0x1bf)]=_0x5b0e2a['availabilityLevels'],this[_0x2e8fae(0x1fd)]=_0x5b0e2a[_0x2e8fae(0x1fd)],this[_0x2e8fae(0x1b6)]=_0x5b0e2a[_0x2e8fae(0x1b6)],this['availabilityTilesLoaded']=_0x5b0e2a['availabilityTilesLoaded'],this[_0x2e8fae(0x1db)]={};}let QuantizedMeshExtensionIds={'OCT_VERTEX_NORMALS':0x1,'WATER_MASK':0x2,'METADATA':0x4};function SuperMapTerrainProvider(_0x3a1b5f){const _0xd7bd14=_0x545c;if(!Cesium[_0xd7bd14(0x1f1)](_0x3a1b5f)||!Cesium[_0xd7bd14(0x1f1)](_0x3a1b5f[_0xd7bd14(0x1bd)]))throw new Cesium[(_0xd7bd14(0x19f))](_0xd7bd14(0x1d3));this[_0xd7bd14(0x1f5)]=0x41,this[_0xd7bd14(0x1fb)]=undefined,this[_0xd7bd14(0x1ba)]=![],this[_0xd7bd14(0x1be)]=![],this[_0xd7bd14(0x1c5)]=_0x3a1b5f[_0xd7bd14(0x1ff)],this['_requestVertexNormals']=Cesium[_0xd7bd14(0x1f9)](_0x3a1b5f['requestVertexNormals'],![]),this[_0xd7bd14(0x1b0)]=Cesium[_0xd7bd14(0x1f9)](_0x3a1b5f['requestWaterMask'],![]),this[_0xd7bd14(0x1a3)]=Cesium[_0xd7bd14(0x1f9)](_0x3a1b5f[_0xd7bd14(0x1dc)],!![]),this['_errorEvent']=new Cesium[(_0xd7bd14(0x1b2))]();let _0x597812=_0x3a1b5f[_0xd7bd14(0x1de)];typeof _0x597812===_0xd7bd14(0x1a4)&&(_0x597812=new Cesium[(_0xd7bd14(0x1ed))](_0x597812));this[_0xd7bd14(0x1ec)]=_0x597812,this[_0xd7bd14(0x1ee)]=_0xd7bd14(0x1c9),this[_0xd7bd14(0x1a0)]=undefined;let _0x6f4382=Cesium[_0xd7bd14(0x1fa)][_0xd7bd14(0x1d6)]();this[_0xd7bd14(0x1b7)]=![],this['_readyPromise']=_0x6f4382,this['_tileCredits']=undefined;let _0x6343ec=this,_0x38f6e7,_0x4957be=this['_layers']=[],_0x3b19e0=[],_0x11065a=0x0;Cesium[_0xd7bd14(0x1fa)](_0x3a1b5f[_0xd7bd14(0x1bd)])[_0xd7bd14(0x1b9)](function(_0x55a8b9){const _0x5b06ac=_0xd7bd14;_0x38f6e7=Cesium[_0x5b06ac(0x1f4)]['createIfNeeded'](_0x55a8b9),_0x38f6e7['appendForwardSlash']();let _0x31b594=_0x38f6e7[_0x5b06ac(0x18d)]({'url':'config'});_0x31b594[_0x5b06ac(0x1c1)]()[_0x5b06ac(0x1b9)](_0x22870e)[_0x5b06ac(0x188)](_0xdff96b);})['otherwise'](function(_0x202300){_0x6f4382['reject'](_0x202300);});function _0x22870e(_0x37208c){const _0x3ec2e5=_0xd7bd14;let _0x237419=_0x37208c[_0x3ec2e5(0x203)],_0x2460bf='data/path/{z}/{x}/{y}.terrainz?v={version}';_0x6343ec[_0x3ec2e5(0x19d)]=new Cesium[(_0x3ec2e5(0x1dd))]({'numberOfLevelZeroTilesX':0x2,'numberOfLevelZeroTilesY':0x1,'ellipsoid':_0x6343ec[_0x3ec2e5(0x1c5)]}),_0x6343ec[_0x3ec2e5(0x1d4)]=Cesium[_0x3ec2e5(0x1bc)][_0x3ec2e5(0x1ef)](_0x6343ec[_0x3ec2e5(0x19d)][_0x3ec2e5(0x1ff)],_0x6343ec[_0x3ec2e5(0x1f5)],_0x6343ec[_0x3ec2e5(0x19d)]['getNumberOfXTilesAtLevel'](0x0));let _0x2c52c8=XMLParser[_0x3ec2e5(0x1aa)](_0x237419,'Bounds',undefined),_0x36a421=XMLParser['queryNumericValue'](_0x2c52c8,_0x3ec2e5(0x1fc),undefined),_0x3ed9ec=XMLParser[_0x3ec2e5(0x1d7)](_0x2c52c8,_0x3ec2e5(0x18f),undefined),_0x439e96=XMLParser[_0x3ec2e5(0x1d7)](_0x2c52c8,'Bottom',undefined),_0x1dc88d=XMLParser['queryNumericValue'](_0x2c52c8,_0x3ec2e5(0x1c2),undefined);Cesium[_0x3ec2e5(0x1f1)](_0x36a421)&&Cesium['defined'](_0x3ed9ec)&&Cesium['defined'](_0x439e96)&&Cesium[_0x3ec2e5(0x1f1)](_0x1dc88d)&&(_0x6343ec[_0x3ec2e5(0x1e7)]=Cesium[_0x3ec2e5(0x1c8)]['fromDegrees'](_0x36a421,_0x439e96,_0x3ed9ec,_0x1dc88d));let _0x41df30=XMLParser[_0x3ec2e5(0x1aa)](_0x237419,_0x3ec2e5(0x201),undefined),_0x24d867=XMLParser[_0x3ec2e5(0x1da)](_0x41df30,_0x3ec2e5(0x1d1),undefined),_0x4b50b1=[];for(let _0x4fe3d4=0x0,_0x2c0016=_0x24d867['length'];_0x4fe3d4<_0x2c0016;_0x4fe3d4++){let _0x3819a1=parseInt(_0x24d867[_0x4fe3d4][_0x3ec2e5(0x18c)]);_0x4b50b1[_0x3ec2e5(0x1f6)](_0x3819a1);}let _0x3d7c08=_0x4b50b1[0x0],_0x2ded25=_0x4b50b1[_0x4b50b1[_0x3ec2e5(0x186)]-0x1];_0x6343ec['_levels']=_0x4b50b1;let _0x1435b3=XMLParser[_0x3ec2e5(0x1aa)](_0x237419,_0x3ec2e5(0x19a),undefined);if(_0x1435b3){let _0x58fad0=XMLParser[_0x3ec2e5(0x1da)](_0x1435b3,_0x3ec2e5(0x206),undefined),_0x3c357c=_0x3d7c08>0x0?_0x4b50b1[_0x3ec2e5(0x186)]+0x1:_0x4b50b1[_0x3ec2e5(0x186)],_0x5ae9b7=new Array(_0x3c357c);for(let _0xbc6db7=0x0;_0xbc6db7<_0x3d7c08;_0xbc6db7++){_0x5ae9b7[_0xbc6db7]=[];}for(let _0x431af0=0x0,_0x1a2fbc=_0x58fad0[_0x3ec2e5(0x186)];_0x431af0<_0x1a2fbc;_0x431af0++){let _0x221248=_0x58fad0[_0x431af0],_0x3d63b=XMLParser[_0x3ec2e5(0x1e3)](_0x221248,_0x3ec2e5(0x202),undefined),_0x6c2c4=[];_0x5ae9b7[_0x3d63b]=_0x6c2c4;let _0x50cc65=XMLParser[_0x3ec2e5(0x1da)](_0x221248,_0x3ec2e5(0x20a),undefined);for(let _0x60b92f=0x0,_0xb478e2=_0x50cc65[_0x3ec2e5(0x186)];_0x60b92f<_0xb478e2;_0x60b92f++){let _0x21f10d=_0x50cc65[_0x60b92f],_0x357bcd=XMLParser[_0x3ec2e5(0x1d7)](_0x21f10d,_0x3ec2e5(0x1a6),undefined),_0x4482a5=XMLParser[_0x3ec2e5(0x1d7)](_0x21f10d,_0x3ec2e5(0x1e0),undefined),_0x175db0=XMLParser[_0x3ec2e5(0x1d7)](_0x21f10d,_0x3ec2e5(0x200),undefined),_0x35885f=XMLParser[_0x3ec2e5(0x1d7)](_0x21f10d,_0x3ec2e5(0x1e9),undefined);_0x6c2c4['push']({'startX':_0x357bcd,'startY':_0x4482a5,'endX':_0x175db0,'endY':_0x35885f});}}_0x5ae9b7[0x0]=[{'startX':0x0,'startY':0x0,'endX':0x1,'endY':0x1}];let _0x1df9e6=new Cesium[(_0x3ec2e5(0x1c6))](_0x6343ec[_0x3ec2e5(0x19d)],_0x2ded25);for(let _0x12594f=0x0;_0x12594f<_0x5ae9b7[_0x3ec2e5(0x186)];++_0x12594f){let _0x369758=_0x5ae9b7[_0x12594f],_0xaaf963=_0x6343ec[_0x3ec2e5(0x19d)][_0x3ec2e5(0x1d5)](_0x12594f);!Cesium[_0x3ec2e5(0x1f1)](_0x3b19e0[_0x12594f])&&(_0x3b19e0[_0x12594f]=[]);if(Cesium['defined'](_0x369758))for(let _0x55a1d5=0x0;_0x55a1d5<_0x369758[_0x3ec2e5(0x186)];++_0x55a1d5){let _0x44b097=_0x369758[_0x55a1d5],_0x458b0=_0xaaf963-_0x44b097['endY']-0x1,_0xc2ed23=_0xaaf963-_0x44b097[_0x3ec2e5(0x1ac)]-0x1;_0x3b19e0[_0x12594f][_0x3ec2e5(0x1f6)]([_0x44b097[_0x3ec2e5(0x1a2)],_0x458b0,_0x44b097[_0x3ec2e5(0x1ae)],_0xc2ed23]),_0x1df9e6[_0x3ec2e5(0x19c)](_0x12594f,_0x44b097[_0x3ec2e5(0x1a2)],_0x458b0,_0x44b097[_0x3ec2e5(0x1ae)],_0xc2ed23);}}_0x6343ec[_0x3ec2e5(0x1a0)]=_0x1df9e6;}_0x4957be['push'](new LayerInformation({'resource':_0x38f6e7,'version':'1.0.0','isHeightmap':![],'tileUrlTemplates':_0x2460bf,'availability':undefined,'hasVertexNormals':![],'hasWaterMask':![],'hasMetadata':![],'availabilityLevels':0x0,'availabilityTilesLoaded':![],'littleEndianExtensionSize':!![]}));let _0x30d448=_0x3b19e0[_0x3ec2e5(0x186)];if(_0x30d448>0x0){let _0xf491b1=_0x6343ec['_availability']=new Cesium['TileAvailability'](_0x6343ec['_tilingScheme'],_0x11065a);for(let _0x387dd3=0x0;_0x387dd3<_0x30d448;++_0x387dd3){let _0x36fee6=_0x3b19e0[_0x387dd3];for(let _0x3ed0be=0x0;_0x3ed0be<_0x36fee6['length'];++_0x3ed0be){let _0x1e7cb7=_0x36fee6[_0x3ed0be];_0xf491b1[_0x3ec2e5(0x19c)](_0x387dd3,_0x1e7cb7[0x0],_0x1e7cb7[0x1],_0x1e7cb7[0x2],_0x1e7cb7[0x3]);}}}_0x6343ec[_0x3ec2e5(0x1b7)]=!![],_0x6343ec[_0x3ec2e5(0x1c0)][_0x3ec2e5(0x193)](!![]);}function _0xdff96b(_0x3cac41){const _0x41b6a6=_0xd7bd14;Cesium[_0x41b6a6(0x1f1)](_0x3cac41)&&_0x3cac41[_0x41b6a6(0x1e8)]===0x194&&_0x22870e({'tilejson':_0x41b6a6(0x1c4),'format':_0x41b6a6(0x1b3),'version':_0x41b6a6(0x1fe),'scheme':_0x41b6a6(0x1c9),'tiles':[_0x41b6a6(0x207)]});}}Object[_0x217c6a(0x1cb)](SuperMapTerrainProvider[_0x217c6a(0x1af)],{'errorEvent':{'get':function(){const _0x2e33b5=_0x217c6a;return this[_0x2e33b5(0x1d9)];}},'credit':{'get':function(){const _0x206698=_0x217c6a;if(!this[_0x206698(0x1b7)])throw new Cesium['DeveloperError'](_0x206698(0x1eb));return this['_credit'];}},'tilingScheme':{'get':function(){const _0x29f5a8=_0x217c6a;if(!this[_0x29f5a8(0x1b7)])throw new Cesium[(_0x29f5a8(0x19f))](_0x29f5a8(0x204));return this[_0x29f5a8(0x19d)];}},'ready':{'get':function(){const _0x558056=_0x217c6a;return this[_0x558056(0x1b7)];}},'readyPromise':{'get':function(){const _0x2d373e=_0x217c6a;return this[_0x2d373e(0x1c0)][_0x2d373e(0x1cf)];}},'hasWaterMask':{'get':function(){const _0x295733=_0x217c6a;if(!this[_0x295733(0x1b7)])throw new Cesium[(_0x295733(0x19f))]('hasWaterMask\x20must\x20not\x20be\x20called\x20before\x20the\x20terrain\x20provider\x20is\x20ready.');return this[_0x295733(0x1ba)]&&this[_0x295733(0x1b0)];}},'hasVertexNormals':{'get':function(){const _0x54f3b4=_0x217c6a;if(!this[_0x54f3b4(0x1b7)])throw new Cesium['DeveloperError']('hasVertexNormals\x20must\x20not\x20be\x20called\x20before\x20the\x20terrain\x20provider\x20is\x20ready.');return this[_0x54f3b4(0x1be)]&&this[_0x54f3b4(0x1d0)];}},'hasMetadata':{'get':function(){const _0x29872b=_0x217c6a;if(!this['_ready'])throw new Cesium[(_0x29872b(0x19f))](_0x29872b(0x1d2));return this['_hasMetadata']&&this['_requestMetadata'];}},'requestVertexNormals':{'get':function(){const _0x5d01ac=_0x217c6a;return this[_0x5d01ac(0x1d0)];}},'requestWaterMask':{'get':function(){const _0x3ed102=_0x217c6a;return this[_0x3ed102(0x1b0)];}},'requestMetadata':{'get':function(){const _0x68bd95=_0x217c6a;return this[_0x68bd95(0x1a3)];}},'availability':{'get':function(){const _0x4362d1=_0x217c6a;if(!this[_0x4362d1(0x1b7)])throw new Cesium['DeveloperError'](_0x4362d1(0x1ab));return this['_availability'];}}});function createQuantizedMeshTerrainData(_0x515634,_0x4e57eb,_0x3d0a96,_0x41a124,_0x56f11c,_0x2f3a85){const _0x2975e9=_0x217c6a;let _0x2d9e63=_0x2f3a85[_0x2975e9(0x1b6)],_0x2a84da=0x0,_0x550ffb=0x3,_0x5cfde8=_0x550ffb+0x1,_0x42eecd=Float64Array['BYTES_PER_ELEMENT']*_0x550ffb,_0x3c9101=Float64Array[_0x2975e9(0x1f3)]*_0x5cfde8,_0x522567=0x3,_0x183c64=Uint16Array[_0x2975e9(0x1f3)]*_0x522567,_0x31b95e=0x3,_0x375ec7=Uint16Array[_0x2975e9(0x1f3)],_0x143b50=_0x375ec7*_0x31b95e,_0x4f9655=new DataView(_0x4e57eb),_0x3441b0=new Cesium['Cartesian3'](_0x4f9655[_0x2975e9(0x1e4)](_0x2a84da,!![]),_0x4f9655[_0x2975e9(0x1e4)](_0x2a84da+0x8,!![]),_0x4f9655[_0x2975e9(0x1e4)](_0x2a84da+0x10,!![]));_0x2a84da+=_0x42eecd;let _0x2ed6a1=_0x4f9655[_0x2975e9(0x205)](_0x2a84da,!![]);_0x2a84da+=Float32Array['BYTES_PER_ELEMENT'];let _0x19c224=_0x4f9655[_0x2975e9(0x205)](_0x2a84da,!![]);_0x2a84da+=Float32Array[_0x2975e9(0x1f3)];let _0x580791=new Cesium['BoundingSphere'](new Cesium[(_0x2975e9(0x1ce))](_0x4f9655['getFloat64'](_0x2a84da,!![]),_0x4f9655['getFloat64'](_0x2a84da+0x8,!![]),_0x4f9655[_0x2975e9(0x1e4)](_0x2a84da+0x10,!![])),_0x4f9655['getFloat64'](_0x2a84da+_0x42eecd,!![]));_0x2a84da+=_0x3c9101;let _0x10fbc1=new Cesium['Cartesian3'](_0x4f9655[_0x2975e9(0x1e4)](_0x2a84da,!![]),_0x4f9655[_0x2975e9(0x1e4)](_0x2a84da+0x8,!![]),_0x4f9655[_0x2975e9(0x1e4)](_0x2a84da+0x10,!![]));_0x2a84da+=_0x42eecd;let _0x307273=_0x4f9655[_0x2975e9(0x1ad)](_0x2a84da,!![]);_0x2a84da+=Uint32Array[_0x2975e9(0x1f3)];let _0x343674=new Uint16Array(_0x4e57eb,_0x2a84da,_0x307273*0x3);_0x2a84da+=_0x307273*_0x183c64;_0x307273>0x40*0x400&&(_0x375ec7=Uint32Array[_0x2975e9(0x1f3)],_0x143b50=_0x375ec7*_0x31b95e);let _0x461f5c=_0x343674[_0x2975e9(0x195)](0x0,_0x307273),_0x50a4ea=_0x343674['subarray'](_0x307273,0x2*_0x307273),_0x544531=_0x343674[_0x2975e9(0x195)](_0x307273*0x2,0x3*_0x307273);Cesium['AttributeCompression']['zigZagDeltaDecode'](_0x461f5c,_0x50a4ea,_0x544531);_0x2a84da%_0x375ec7!==0x0&&(_0x2a84da+=_0x375ec7-_0x2a84da%_0x375ec7);let _0x207d9c=_0x4f9655['getUint32'](_0x2a84da,!![]);_0x2a84da+=Uint32Array[_0x2975e9(0x1f3)];let _0xf11109=Cesium[_0x2975e9(0x18b)][_0x2975e9(0x1f2)](_0x307273,_0x4e57eb,_0x2a84da,_0x207d9c*_0x31b95e);_0x2a84da+=_0x207d9c*_0x143b50;let _0x126198=0x0,_0x646db4=_0xf11109['length'];for(let _0x8a31f7=0x0;_0x8a31f7<_0x646db4;++_0x8a31f7){let _0x1cff59=_0xf11109[_0x8a31f7];_0xf11109[_0x8a31f7]=_0x126198-_0x1cff59,_0x1cff59===0x0&&++_0x126198;}let _0x14d149=_0x4f9655[_0x2975e9(0x1ad)](_0x2a84da,!![]);_0x2a84da+=Uint32Array['BYTES_PER_ELEMENT'];let _0x27c8d0=Cesium[_0x2975e9(0x18b)][_0x2975e9(0x1f2)](_0x307273,_0x4e57eb,_0x2a84da,_0x14d149);_0x2a84da+=_0x14d149*_0x375ec7;let _0x16781e=_0x4f9655[_0x2975e9(0x1ad)](_0x2a84da,!![]);_0x2a84da+=Uint32Array['BYTES_PER_ELEMENT'];let _0x452315=Cesium[_0x2975e9(0x18b)]['createTypedArrayFromArrayBuffer'](_0x307273,_0x4e57eb,_0x2a84da,_0x16781e);_0x2a84da+=_0x16781e*_0x375ec7;let _0x5d5ad1=_0x4f9655[_0x2975e9(0x1ad)](_0x2a84da,!![]);_0x2a84da+=Uint32Array[_0x2975e9(0x1f3)];let _0x54296d=Cesium[_0x2975e9(0x18b)][_0x2975e9(0x1f2)](_0x307273,_0x4e57eb,_0x2a84da,_0x5d5ad1);_0x2a84da+=_0x5d5ad1*_0x375ec7;let _0x1a8abc=_0x4f9655[_0x2975e9(0x1ad)](_0x2a84da,!![]);_0x2a84da+=Uint32Array[_0x2975e9(0x1f3)];let _0x13aec6=Cesium[_0x2975e9(0x18b)][_0x2975e9(0x1f2)](_0x307273,_0x4e57eb,_0x2a84da,_0x1a8abc);_0x2a84da+=_0x1a8abc*_0x375ec7;let _0x5f2d81,_0x35aa8e;while(_0x2a84da<_0x4f9655[_0x2975e9(0x1df)]){let _0x11770b=_0x4f9655[_0x2975e9(0x1ca)](_0x2a84da,!![]);_0x2a84da+=Uint8Array['BYTES_PER_ELEMENT'];let _0xc4c531=_0x4f9655[_0x2975e9(0x1ad)](_0x2a84da,_0x2d9e63);_0x2a84da+=Uint32Array[_0x2975e9(0x1f3)];if(_0x11770b===QuantizedMeshExtensionIds[_0x2975e9(0x1a5)]&&_0x515634['_requestVertexNormals'])_0x5f2d81=new Uint8Array(_0x4e57eb,_0x2a84da,_0x307273*0x2);else {if(_0x11770b===QuantizedMeshExtensionIds['WATER_MASK']&&_0x515634[_0x2975e9(0x1b0)])_0x35aa8e=new Uint8Array(_0x4e57eb,_0x2a84da,_0xc4c531);else {if(_0x11770b===QuantizedMeshExtensionIds[_0x2975e9(0x199)]&&_0x515634[_0x2975e9(0x1a3)]){let _0x22c5a2=_0x4f9655['getUint32'](_0x2a84da,!![]);if(_0x22c5a2>0x0){let _0x4680d9=Cesium[_0x2975e9(0x190)](new Uint8Array(_0x4e57eb),_0x2a84da+Uint32Array[_0x2975e9(0x1f3)],_0x22c5a2),_0x3577d3=JSON[_0x2975e9(0x1ea)](_0x4680d9),_0x4cdd84=_0x3577d3[_0x2975e9(0x192)];if(Cesium['defined'](_0x4cdd84))for(let _0x56097d=0x0;_0x56097d<_0x4cdd84[_0x2975e9(0x186)];++_0x56097d){let _0x21460c=_0x3d0a96+_0x56097d+0x1,_0x2d698e=_0x4cdd84[_0x56097d],_0x2033b8=_0x515634[_0x2975e9(0x19d)][_0x2975e9(0x1d5)](_0x21460c);for(let _0x55bcd2=0x0;_0x55bcd2<_0x2d698e[_0x2975e9(0x186)];++_0x55bcd2){let _0x5f16d7=_0x2d698e[_0x55bcd2],_0x2a77cb=_0x2033b8-_0x5f16d7[_0x2975e9(0x19b)]-0x1,_0x5f3fcf=_0x2033b8-_0x5f16d7[_0x2975e9(0x1ac)]-0x1;_0x515634[_0x2975e9(0x1b4)][_0x2975e9(0x19c)](_0x21460c,_0x5f16d7[_0x2975e9(0x1a2)],_0x2a77cb,_0x5f16d7[_0x2975e9(0x1ae)],_0x5f3fcf),_0x2f3a85[_0x2975e9(0x1b4)]['addAvailableTileRange'](_0x21460c,_0x5f16d7['startX'],_0x2a77cb,_0x5f16d7[_0x2975e9(0x1ae)],_0x5f3fcf);}}}_0x2f3a85['availabilityTilesLoaded'][_0x2975e9(0x19c)](_0x3d0a96,_0x41a124,_0x56f11c,_0x41a124,_0x56f11c);}}}_0x2a84da+=_0xc4c531;}let _0x2be15d=_0x515634[_0x2975e9(0x1a8)](_0x3d0a96)*0x5,_0x43cbdb=_0x515634['_tilingScheme'][_0x2975e9(0x1b8)](_0x41a124,_0x56f11c,_0x3d0a96),_0x2e16d0=Cesium[_0x2975e9(0x185)][_0x2975e9(0x1c7)](_0x43cbdb,_0x2ed6a1,_0x19c224,_0x515634[_0x2975e9(0x19d)][_0x2975e9(0x1ff)]);return new Cesium['QuantizedMeshTerrainData']({'center':_0x3441b0,'minimumHeight':_0x2ed6a1,'maximumHeight':_0x19c224,'boundingSphere':_0x580791,'orientedBoundingBox':_0x2e16d0,'horizonOcclusionPoint':_0x10fbc1,'quantizedVertices':_0x343674,'encodedNormals':_0x5f2d81,'indices':_0xf11109,'westIndices':_0x27c8d0,'southIndices':_0x452315,'eastIndices':_0x54296d,'northIndices':_0x13aec6,'westSkirtHeight':_0x2be15d,'southSkirtHeight':_0x2be15d,'eastSkirtHeight':_0x2be15d,'northSkirtHeight':_0x2be15d,'childTileMask':0xf,'waterMask':_0x35aa8e,'credits':_0x515634[_0x2975e9(0x1cc)]});}SuperMapTerrainProvider[_0x217c6a(0x1af)]['requestTileGeometry']=function(_0x414aab,_0x467066,_0x19a665,_0x3a2285){const _0x5dbc6f=_0x217c6a;if(!this[_0x5dbc6f(0x1b7)])throw new Cesium[(_0x5dbc6f(0x19f))](_0x5dbc6f(0x1cd));if(_0x19a665===0x0){let _0x154004=new Uint16Array(0x40*0x40*0x3);for(let _0x2463cf=0x0;_0x2463cf<0x40;_0x2463cf++){for(let _0xc651d3=0x0;_0xc651d3<0x40;_0xc651d3++){_0x154004[_0x2463cf*0x40+_0xc651d3]=Math[_0x5dbc6f(0x1f8)](_0x2463cf*0x7fff/0x3f),_0x154004[0x40*0x40+_0x2463cf*0x40+_0xc651d3]=Math[_0x5dbc6f(0x1f8)](_0xc651d3*0x7fff/0x3f),_0x154004[0x2*0x40*0x40+_0x2463cf*0x40+_0xc651d3]=0x0;}}let _0x5adcdf=new Uint16Array(0x3f*0x3f*0x6);for(let _0x37258d=0x0;_0x37258d<0x3f;_0x37258d++){for(let _0x57078e=0x0;_0x57078e<0x3f;_0x57078e++){_0x5adcdf[0x6*(_0x37258d*0x3f+_0x57078e)]=_0x37258d*0x40+_0x57078e,_0x5adcdf[0x6*(_0x37258d*0x3f+_0x57078e)+0x1]=(_0x37258d+0x1)*0x40+_0x57078e+0x1,_0x5adcdf[0x6*(_0x37258d*0x3f+_0x57078e)+0x2]=_0x37258d*0x40+_0x57078e+0x1,_0x5adcdf[0x6*(_0x37258d*0x3f+_0x57078e)+0x3]=(_0x37258d+0x1)*0x40+_0x57078e,_0x5adcdf[0x6*(_0x37258d*0x3f+_0x57078e)+0x4]=(_0x37258d+0x1)*0x40+_0x57078e+0x1,_0x5adcdf[0x6*(_0x37258d*0x3f+_0x57078e)+0x5]=_0x37258d*0x40+_0x57078e;}}let _0x734f64=new Uint16Array(0x0),_0x536a47=new Cesium[(_0x5dbc6f(0x1ce))](NaN,-Infinity,NaN),_0x46c247=new Cesium['Cartesian3'](0x0,-3189068.5,0x0);return _0x414aab===0x1&&(_0x46c247['y']=3189068.5,_0x536a47['y']=Infinity),Cesium['when'][_0x5dbc6f(0x193)](new Cesium[(_0x5dbc6f(0x1e5))]({'center':_0x46c247,'minimumHeight':0x0,'maximumHeight':0x0,'boundingSphere':new Cesium['BoundingSphere'](_0x46c247,9567205.5),'horizonOcclusionPoint':_0x536a47,'quantizedVertices':_0x154004,'indices':_0x5adcdf,'westIndices':_0x734f64,'southIndices':_0x734f64,'eastIndices':_0x734f64,'northIndices':_0x734f64,'westSkirtHeight':0x0,'southSkirtHeight':0x0,'eastSkirtHeight':0x0,'northSkirtHeight':0x0,'childTileMask':0xf,'invalid':![],'hasInvalid':![]}));}let _0xb5afc9=this[_0x5dbc6f(0x209)],_0x27a6d1,_0x95338e=_0xb5afc9[_0x5dbc6f(0x186)];if(_0x95338e===0x1)_0x27a6d1=_0xb5afc9[0x0];else for(let _0x3e92cf=0x0;_0x3e92cf<_0x95338e;++_0x3e92cf){let _0x47507c=_0xb5afc9[_0x3e92cf];if(!Cesium[_0x5dbc6f(0x1f1)](_0x47507c[_0x5dbc6f(0x1b4)])||_0x47507c['availability'][_0x5dbc6f(0x1d8)](_0x19a665,_0x414aab,_0x467066)){_0x27a6d1=_0x47507c;break;}}return requestTileGeometry(this,_0x414aab,_0x467066,_0x19a665,_0x27a6d1,_0x3a2285);};function requestTileGeometry(_0x4c47a4,_0x4cfdc7,_0xe7505d,_0x33fd85,_0x1f141d,_0x350aff){const _0x27c5ad=_0x217c6a;let _0x455516=_0x1f141d[_0x27c5ad(0x18e)],_0x3b3ffe;if(!_0x4c47a4[_0x27c5ad(0x1ee)]||_0x4c47a4[_0x27c5ad(0x1ee)]===_0x27c5ad(0x1c9)){let _0x182d5a=_0x4c47a4[_0x27c5ad(0x19d)]['getNumberOfYTilesAtLevel'](_0x33fd85);_0x3b3ffe=_0x182d5a-_0xe7505d-0x1;}else _0x3b3ffe=_0xe7505d;let _0x4a8a8=_0x455516,_0x2b832d=_0x1f141d[_0x27c5ad(0x1f0)],_0x4fc09a={'Accept':_0x27c5ad(0x1c3)},_0x246f0b=_0x2b832d[_0x27c5ad(0x18d)]({'url':_0x4a8a8,'templateValues':{'version':_0x1f141d[_0x27c5ad(0x1a1)],'z':_0x33fd85,'x':_0x4cfdc7,'y':_0x3b3ffe},'headers':_0x4fc09a,'request':_0x350aff})[_0x27c5ad(0x198)]();if(!Cesium['defined'](_0x246f0b))return undefined;return _0x246f0b['then'](function(_0x391ec2){return _0x391ec2=_0x53a39a['inflate'](new Uint8Array(_0x391ec2))['buffer'],createQuantizedMeshTerrainData(_0x4c47a4,_0x391ec2,_0x33fd85,_0x4cfdc7,_0xe7505d,_0x1f141d);});}SuperMapTerrainProvider[_0x217c6a(0x1af)]['getLevelMaximumGeometricError']=function(_0x323782){const _0x4290a3=_0x217c6a;return this[_0x4290a3(0x1d4)]/(0x1<<_0x323782);};let rectangleScratch=new Cesium[(_0x217c6a(0x1c8))]();SuperMapTerrainProvider['prototype'][_0x217c6a(0x189)]=function(_0x557af9,_0x20c85b,_0x2356e6){const _0x395ca1=_0x217c6a;if(_0x2356e6!==0x0){if(this[_0x395ca1(0x1b5)][_0x395ca1(0x19e)](_0x2356e6)!==-0x1){let _0x4d81ce=this[_0x395ca1(0x19d)][_0x395ca1(0x1b8)](_0x557af9,_0x20c85b,_0x2356e6),_0x531396=Cesium['Rectangle']['intersection'](this['_rectangle'],_0x4d81ce,rectangleScratch);return Cesium['defined'](_0x531396);}return ![];}if(!Cesium[_0x395ca1(0x1f1)](this[_0x395ca1(0x1a0)]))return undefined;if(_0x2356e6>this[_0x395ca1(0x1a0)][_0x395ca1(0x1a7)])return ![];if(this[_0x395ca1(0x1a0)][_0x395ca1(0x1d8)](_0x2356e6,_0x557af9,_0x20c85b))return !![];if(!this[_0x395ca1(0x18a)])return ![];return ![];},SuperMapTerrainProvider['prototype']['loadTileDataAvailability']=function(_0x28179b,_0x4fd31f,_0x41ab83){};

    const _0x3cd9=['createElement','getImageData','_dictTable','push','prototype','453815hCfHji','209480brlrjk','generateBuffer','insert','data','get','1181mGNHSp','color','_sortKey','length','destroy','_imageBuffer','_hash','4QhwtpW','abs','3rUbzmX','canvas','Math','getColor','beginPath','createLinearGradient','clear','EPSILON6','rect','value','getContext','Color','432942CzPfpd','width','30089mootnR','count','clone','40oQTIzv','525bwnXbg','set','694449osTnVI','AssociativeArray','fill','remove','sort'];function _0x17e7(_0x175fa3,_0x3dcf6a){_0x175fa3=_0x175fa3-0x1d6;let _0x3cd9a9=_0x3cd9[_0x175fa3];return _0x3cd9a9;}const _0x4b7618=_0x17e7;(function(_0x4ac211,_0x2be7c2){const _0x49a108=_0x17e7;while(!![]){try{const _0x52268e=parseInt(_0x49a108(0x1f4))*-parseInt(_0x49a108(0x1da))+parseInt(_0x49a108(0x1ed))*-parseInt(_0x49a108(0x1db))+-parseInt(_0x49a108(0x1e7))+parseInt(_0x49a108(0x1e8))+parseInt(_0x49a108(0x1dd))+-parseInt(_0x49a108(0x1d7))*-parseInt(_0x49a108(0x1f6))+parseInt(_0x49a108(0x202));if(_0x52268e===_0x2be7c2)break;else _0x4ac211['push'](_0x4ac211['shift']());}catch(_0x3ad91b){_0x4ac211['push'](_0x4ac211['shift']());}}}(_0x3cd9,0x56372));function ColorTable(){const _0x28186f=_0x17e7;this['_dictTable']=new Cesium[(_0x28186f(0x1de))](),this[_0x28186f(0x1f2)]=new Uint8Array(0x4*0x40*0x400),this['_sortKey']=[];}function sortNumber(_0x4ccb73,_0x4cf79e){return _0x4ccb73-_0x4cf79e;}ColorTable[_0x4b7618(0x1e6)]['getItem']=function(_0x59a978){const _0x171843=_0x4b7618;if(_0x59a978>this[_0x171843(0x1e4)]['values'][_0x171843(0x1f0)]-0x1)return null;let _0x422d3e=_0x59a978;for(let _0xe94efd in this[_0x171843(0x1e4)][_0x171843(0x1f3)]){if(_0x422d3e>0x0){_0x422d3e--;continue;}if(!_0xe94efd)break;return {'altitude':_0xe94efd,'color':this[_0x171843(0x1e4)]['get'](_0xe94efd)};}return null;},ColorTable[_0x4b7618(0x1e6)][_0x4b7618(0x1d8)]=function(){const _0x1ca121=_0x4b7618;return this[_0x1ca121(0x1e4)]['values']['length'];},ColorTable[_0x4b7618(0x1e6)][_0x4b7618(0x1ea)]=function(_0xec8478,_0xc5d65d){const _0x3a063d=_0x4b7618;let _0x2dedfe=this[_0x3a063d(0x1e4)][_0x3a063d(0x1ec)](_0xec8478);if(_0x2dedfe)return;let _0x243740=Cesium['Color'][_0x3a063d(0x1d9)](_0xc5d65d,new Cesium[(_0x3a063d(0x201))]());this[_0x3a063d(0x1e4)][_0x3a063d(0x1dc)](_0xec8478,_0x243740);},ColorTable['prototype']['remove']=function(_0x259dbb){const _0x535bbc=_0x4b7618;return this[_0x535bbc(0x1e4)][_0x535bbc(0x1e0)](_0x259dbb);},ColorTable[_0x4b7618(0x1e6)][_0x4b7618(0x1fc)]=function(){this['_dictTable']['removeAll']();},ColorTable['prototype'][_0x4b7618(0x1e9)]=function(){const _0x97adb7=_0x4b7618;let _0x3a85b2=[];for(let _0x44d342 in this[_0x97adb7(0x1e4)][_0x97adb7(0x1f3)]){if(!_0x44d342)continue;let _0x2966f5=this[_0x97adb7(0x1e4)][_0x97adb7(0x1ec)](_0x44d342);_0x3a85b2[_0x97adb7(0x1e5)]({'value':parseFloat(_0x44d342),'color':_0x2966f5});}if(_0x3a85b2['length']<0x2)return;for(let _0x30b718=0x0,_0x4a0f61=_0x3a85b2[_0x97adb7(0x1f0)]-0x1;_0x30b718<_0x4a0f61;_0x30b718++){let _0x266df2=_0x3a85b2[_0x30b718];for(let _0x39fc83=_0x30b718+0x1;_0x39fc83<_0x3a85b2[_0x97adb7(0x1f0)];_0x39fc83++){let _0x19ccc0=_0x3a85b2[_0x39fc83];if(_0x266df2[_0x97adb7(0x1ff)]>_0x19ccc0[_0x97adb7(0x1ff)]){let _0x46d4b2=Cesium[_0x97adb7(0x1d9)](_0x3a85b2[_0x30b718],!![]);_0x3a85b2[_0x30b718]=Cesium[_0x97adb7(0x1d9)](_0x3a85b2[_0x39fc83],!![]),_0x3a85b2[_0x39fc83]=_0x46d4b2,_0x266df2=_0x3a85b2[_0x30b718];}}}let _0x1e3113=_0x3a85b2[0x0][_0x97adb7(0x1ff)],_0x4cc8d1=_0x3a85b2[_0x3a85b2[_0x97adb7(0x1f0)]-0x1]['value'],_0x3c43b3=_0x4cc8d1-_0x1e3113,_0x57ccdd=document[_0x97adb7(0x1e2)](_0x97adb7(0x1f7));_0x57ccdd[_0x97adb7(0x1d6)]=0x400*0x10,_0x57ccdd['height']=0x1;let _0x129905=_0x57ccdd[_0x97adb7(0x200)]('2d');_0x129905[_0x97adb7(0x1fa)]();let _0x396463=_0x129905[_0x97adb7(0x1fb)](0x0,0x0,0x400*0x10,0x0);for(let _0x14fa8d=0x0,_0x4674ca=_0x3a85b2['length'];_0x14fa8d<_0x4674ca;_0x14fa8d++){_0x396463['addColorStop']((_0x3a85b2[_0x14fa8d][_0x97adb7(0x1ff)]-_0x1e3113)/_0x3c43b3,_0x3a85b2[_0x14fa8d][_0x97adb7(0x1ee)]['toCssColorString']());}_0x129905['fillStyle']=_0x396463,_0x129905[_0x97adb7(0x1fe)](0x0,0x0,_0x57ccdd[_0x97adb7(0x1d6)],_0x57ccdd['height']),_0x129905[_0x97adb7(0x1df)]();let _0x25f584=_0x129905[_0x97adb7(0x1e3)](0x0,0x0,_0x57ccdd['width'],0x1)[_0x97adb7(0x1eb)];for(let _0x401627=0x0;_0x401627<0x10;_0x401627++){for(let _0x29d76c=0x0;_0x29d76c<0x400*0x4;_0x29d76c++){this[_0x97adb7(0x1f2)][_0x29d76c+_0x401627*0x400*0x4*0x4]=_0x25f584[_0x29d76c+_0x401627*0x400*0x4],this[_0x97adb7(0x1f2)][_0x29d76c+_0x401627*0x400*0x4*0x4+0x400*0x4]=_0x25f584[_0x29d76c+_0x401627*0x400*0x4],this[_0x97adb7(0x1f2)][_0x29d76c+_0x401627*0x400*0x4*0x4+0x400*0x4*0x2]=_0x25f584[_0x29d76c+_0x401627*0x400*0x4],this['_imageBuffer'][_0x29d76c+_0x401627*0x400*0x4*0x4+0x400*0x4*0x3]=_0x25f584[_0x29d76c+_0x401627*0x400*0x4];}}for(let _0x45b136 in this['_dictTable']['_hash']){this['_sortKey'][_0x97adb7(0x1e5)](parseFloat(_0x45b136));}return this[_0x97adb7(0x1ef)][_0x97adb7(0x1e1)](sortNumber),_0x57ccdd;},ColorTable[_0x4b7618(0x1e6)][_0x4b7618(0x1f9)]=function(_0x51a7c3){const _0x538add=_0x4b7618;for(let _0x2893c3=0x0,_0x7d49e=this[_0x538add(0x1ef)][_0x538add(0x1f0)];_0x2893c3<_0x7d49e;_0x2893c3++){if(this['_sortKey'][_0x2893c3]>=_0x51a7c3||Math[_0x538add(0x1f5)](this[_0x538add(0x1ef)][_0x2893c3]-_0x51a7c3)<Cesium[_0x538add(0x1f8)][_0x538add(0x1fd)])return this[_0x538add(0x1e4)][_0x538add(0x1ec)](this['_sortKey'][_0x2893c3]);}return undefined;},ColorTable['prototype'][_0x4b7618(0x1f1)]=function(){const _0x2737ce=_0x4b7618;this[_0x2737ce(0x1e4)]['removeAll'](),this[_0x2737ce(0x1f2)]=null,this['_sortKey']=null;};

    exports.BillboardMode = _0x1fe80d;
    exports.CesiumExt = CesiumExt;
    exports.ClampMode = _0x3ea69a;
    exports.ColorTable = ColorTable;
    exports.ContentState = _0x1dc358;
    exports.DDSTexture = DDSTexture;
    exports.DepthFramebuffer = DepthFramebuffer;
    exports.DrawHandler = DrawHandler;
    exports.DrawMode = _0x2e8fa9;
    exports.FillStyle = _0x11bab4;
    exports.Flatten = Flatten;
    exports.FresnelFp = _0x30b22d;
    exports.FresnelVp = _0x5abe30;
    exports.Hypsometric = Hypsometric;
    exports.HypsometricSetting = HypsometricSetting;
    exports.HypsometricSettingEnum = _0x4b57af;
    exports.MaterialExt = MaterialExt;
    exports.MaterialManager = MaterialManager;
    exports.MaterialPass = MaterialPass;
    exports.MeasureHandler = MeasureHandler;
    exports.MeasureMode = _0x2d58b1;
    exports.ModelEdgeFp = _0x5a76f2;
    exports.ModelEdgeVp = _0x30a26c;
    exports.NoLightNoTextureFS = _0x3e61a4;
    exports.NoLightNoTextureVS = _0x53fc49;
    exports.OperationType = _0x4994c3;
    exports.PLANECLIPMODE = _0x4e7632;
    exports.ProgramDefines = _0x1ca8a8;
    exports.RangeMode = _0x7b9d88;
    exports.RasterRegion = RasterRegion;
    exports.RasterRegionFS = _0x43bcfe;
    exports.RasterRegionVS = _0x23c345;
    exports.ReflectFramebuffer = ReflectFramebuffer;
    exports.RenderEntity = RenderEntity;
    exports.RenderTarget = RenderTarget;
    exports.S3MBlockCache = S3MBlockCache;
    exports.S3MBlockContentParser = S3MBlockContentParser;
    exports.S3MBlockParser = S3MBlockParser;
    exports.S3MCacheFileRenderEntity = S3MCacheFileRenderEntity;
    exports.S3MCompressType = S3MCompressType$1;
    exports.S3MContentFactory = S3MContentFactory;
    exports.S3MContentParser = S3MContentParser;
    exports.S3MCreateIndexJob = S3MCreateIndexBufferJob;
    exports.S3MCreateShaderProgramJob = S3MCreateShaderProgramJob;
    exports.S3MCreateVertexJob = S3MCreateVertexJob;
    exports.S3MEdgeProcessor = S3MEdgeProcessor;
    exports.S3MLayerCache = S3MLayerCache;
    exports.S3MLayerScheduler = S3MLayerScheduler;
    exports.S3MObliqueRenderEntity = S3MObliqueRenderEntity;
    exports.S3MPixelFormat = _0x4d10fa;
    exports.S3MPointCloudFS = _0x518de5;
    exports.S3MPointCloudRenderEntity = S3MPointCloudRenderEntity;
    exports.S3MPointCloudVS = _0x244242;
    exports.S3MTile = S3MTile;
    exports.S3MTilesFS = _0x54c1c4;
    exports.S3MTilesLayer = S3MTilesLayer;
    exports.S3MTilesNoLightFS = _0x1ab936;
    exports.S3MTilesNoLightVS = _0x20fcfa;
    exports.S3MTilesVS = _0x1bfb0f;
    exports.S3MWaterRenderEntity = S3MWaterRenderEntity;
    exports.S3ModelOldParser = S3ModelOldParser;
    exports.S3ModelParser = S3ModelParser;
    exports.Style3D = Style3D;
    exports.SubTextureManager = SubTextureManager;
    exports.SubTextureUploadJob = SubTextureUploadJob;
    exports.SuperMapImageryProvider = SuperMapImageryProvider;
    exports.SuperMapTerrainProvider = SuperMapTerrainProvider;
    exports.TextureManager = TextureManager;
    exports.VertexCompressOption = _0x25c9a4;
    exports.ViewShed3D = ViewShed3D;
    exports.ViewShedAnalysisFS = _0x313bb2;
    exports.ViewShedAnalysisVS = _0x4df7a3;
    exports.XmlParser = XMLParser;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
