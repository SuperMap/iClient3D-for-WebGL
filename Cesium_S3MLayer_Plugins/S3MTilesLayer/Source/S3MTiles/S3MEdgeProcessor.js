const _0x2bd0=['length','aSideness','createRegularEdgeAttributes','selectIndexData','byteOffset','slice','ZERO','deduplicate','equals','cross','aNormal','verticesCount','UNSIGNED_SHORT','typedArray','114007NFlxWr','distance','aPosition0','aPosition','vertexAttributes','instancesData','STATIC_DRAW','extractEdgeInformation','push','attributes','vertexArrayDestroyable','getSizeInBytes','333332VNuvle','attrLocation','createEdgeDataByIndices','extractEdges','1zhkDNU','RegularInstanceStride','byteLength','711005qdKRdg','vertCompressConstant','subtract','4hFCpLU','aNormalA','361fKtORD','4863yrwTHW','createIndexBuffer','aPosition1','buffer','computeNeighbors','Buffer','553561ogvijo','attributeLocations','BufferUsage','createVertexBuffer','1LxgyOm','ComponentDatatype','FLOAT','minVerticesValue','913055WResPO','Cartesian3','componentsPerAttribute','regular','uniqueCount','createSilhouetteEdgeAttributes','indexType','indicesTypedArray','192978ErufHn','normalize','silhouette'];const _0x27b148=_0x30a0;(function(_0x69ddd2,_0x239962){const _0x51aa37=_0x30a0;while(!![]){try{const _0x546832=parseInt(_0x51aa37(0x72))*-parseInt(_0x51aa37(0xa3))+parseInt(_0x51aa37(0xa6))+parseInt(_0x51aa37(0x7a))+parseInt(_0x51aa37(0x76))*parseInt(_0x51aa37(0x93))+-parseInt(_0x51aa37(0x82))*-parseInt(_0x51aa37(0xa9))+parseInt(_0x51aa37(0x9f))+-parseInt(_0x51aa37(0xac))*parseInt(_0x51aa37(0xab));if(_0x546832===_0x239962)break;else _0x69ddd2['push'](_0x69ddd2['shift']());}catch(_0x156a4e){_0x69ddd2['push'](_0x69ddd2['shift']());}}}(_0x2bd0,0x826bf));function S3MEdgeProcessor(){}S3MEdgeProcessor['RegularInstanceStride']=0x9,S3MEdgeProcessor['createEdgeData']=function(_0x5d2c11,_0xf559b2,_0x5b5bf7){const _0x337d40=_0x30a0;if(_0xf559b2[_0x337d40(0x85)]==0x0)return null;let _0x4b75c3=_0xf559b2[0x0],_0x1f2bce;_0x4b75c3[_0x337d40(0x80)]===0x0?_0x1f2bce=new Uint16Array(_0x4b75c3['indicesTypedArray'][_0x337d40(0x6f)],_0x4b75c3[_0x337d40(0x81)][_0x337d40(0x89)],_0x4b75c3[_0x337d40(0x81)]['byteLength']/0x2):_0x1f2bce=new Uint32Array(_0x4b75c3[_0x337d40(0x81)][_0x337d40(0x6f)],_0x4b75c3[_0x337d40(0x81)][_0x337d40(0x89)],_0x4b75c3[_0x337d40(0x81)][_0x337d40(0xa5)]/0x4);let _0x666270=![],_0x1c66ef=S3MEdgeProcessor['extractEdgeInformation'](_0x5d2c11,_0x666270,_0x1f2bce),_0x533369=EdgePreprocessing[_0x337d40(0xa2)](_0x1c66ef);return _0x5b5bf7&&(_0x533369[_0x337d40(0x7d)][_0x337d40(0x98)]&&_0x5b5bf7[_0x337d40(0x9b)](_0x533369[_0x337d40(0x7d)]['instancesData'][_0x337d40(0x6f)]),_0x533369[_0x337d40(0x84)][_0x337d40(0x98)]&&_0x5b5bf7[_0x337d40(0x9b)](_0x533369[_0x337d40(0x84)][_0x337d40(0x98)][_0x337d40(0x6f)])),_0x533369;};let scratchSidenessVertexBuffer=null;function createEdgeSidenessVertexBuffer(_0x448205){const _0x36cfc9=_0x30a0;if(scratchSidenessVertexBuffer)return scratchSidenessVertexBuffer;let _0x81aa89=new Float32Array(0x8),_0x50460b=0x0;return _0x81aa89[_0x50460b++]=0x0,_0x81aa89[_0x50460b++]=0x0,_0x81aa89[_0x50460b++]=0x0,_0x81aa89[_0x50460b++]=0x1,_0x81aa89[_0x50460b++]=0x1,_0x81aa89[_0x50460b++]=0x1,_0x81aa89[_0x50460b++]=0x1,_0x81aa89[_0x50460b++]=0x0,scratchSidenessVertexBuffer=Cesium['Buffer'][_0x36cfc9(0x75)]({'context':_0x448205,'typedArray':_0x81aa89,'usage':Cesium[_0x36cfc9(0x74)][_0x36cfc9(0x99)]}),scratchSidenessVertexBuffer[_0x36cfc9(0x9d)]=![],scratchSidenessVertexBuffer;}function createEdgeIndexArray(){let _0xe1b1db=new Uint16Array(0x6),_0xe11b7b=0x0;return _0xe1b1db[_0xe11b7b++]=0x2,_0xe1b1db[_0xe11b7b++]=0x1,_0xe1b1db[_0xe11b7b++]=0x0,_0xe1b1db[_0xe11b7b++]=0x3,_0xe1b1db[_0xe11b7b++]=0x2,_0xe1b1db[_0xe11b7b++]=0x0,_0xe1b1db;}let scratchIndexBuffer=null;function _0x30a0(_0x2d9c52,_0xa5f7e){_0x2d9c52=_0x2d9c52-0x6e;let _0x2bd0cf=_0x2bd0[_0x2d9c52];return _0x2bd0cf;}S3MEdgeProcessor[_0x27b148(0xad)]=function(_0x72f65b){const _0x2c8aab=_0x27b148;if(scratchIndexBuffer)return scratchIndexBuffer;return scratchIndexBuffer=Cesium[_0x2c8aab(0x71)][_0x2c8aab(0xad)]({'context':_0x72f65b,'typedArray':createEdgeIndexArray(),'usage':Cesium[_0x2c8aab(0x74)]['STATIC_DRAW'],'indexDatatype':Cesium['IndexDatatype'][_0x2c8aab(0x91)]}),scratchIndexBuffer[_0x2c8aab(0x9d)]=![],scratchIndexBuffer;},S3MEdgeProcessor[_0x27b148(0x87)]=function(_0x869222,_0x3984dc){const _0x1b57e8=_0x27b148;if(!_0x3984dc[_0x1b57e8(0x98)]||_0x3984dc[_0x1b57e8(0x98)][_0x1b57e8(0x85)]===0x0)return;let _0xa3580b={},_0xcb9391=[];_0x3984dc[_0x1b57e8(0x73)]=_0xa3580b,_0x3984dc[_0x1b57e8(0x9c)]=_0xcb9391;let _0x58dace=Cesium['Buffer'][_0x1b57e8(0x75)]({'context':_0x869222,'typedArray':_0x3984dc[_0x1b57e8(0x98)],'usage':Cesium[_0x1b57e8(0x74)]['STATIC_DRAW']});_0x3984dc[_0x1b57e8(0x98)]=null;let _0x24808e=Cesium['ComponentDatatype'][_0x1b57e8(0x9e)](Cesium['ComponentDatatype'][_0x1b57e8(0x78)]),_0x1305af=createEdgeSidenessVertexBuffer(_0x869222),_0x137bf8=0x0;_0xa3580b[_0x1b57e8(0x86)]=_0x137bf8++,_0xcb9391['push']({'index':_0xa3580b['aSideness'],'vertexBuffer':_0x1305af,'componentsPerAttribute':0x2,'componentDatatype':Cesium['ComponentDatatype'][_0x1b57e8(0x78)],'offsetInBytes':0x0,'strideInBytes':Cesium[_0x1b57e8(0x77)][_0x1b57e8(0x9e)](Cesium[_0x1b57e8(0x77)][_0x1b57e8(0x78)])*0x2,'normalize':![]});let _0xee68f5=S3MEdgeProcessor['RegularInstanceStride'],_0x328bc6=0x0;_0xa3580b['aPosition0']=_0x137bf8++,_0xcb9391[_0x1b57e8(0x9b)]({'index':_0xa3580b['aPosition0'],'vertexBuffer':_0x58dace,'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x1b57e8(0x77)]['FLOAT'],'normalize':![],'offsetInBytes':_0x24808e*_0x328bc6,'strideInBytes':_0x24808e*_0xee68f5,'instanceDivisor':0x1}),_0x328bc6+=0x3,_0xa3580b[_0x1b57e8(0x6e)]=_0x137bf8++,_0xcb9391[_0x1b57e8(0x9b)]({'index':_0xa3580b[_0x1b57e8(0x6e)],'vertexBuffer':_0x58dace,'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x1b57e8(0x77)][_0x1b57e8(0x78)],'normalize':![],'offsetInBytes':_0x24808e*_0x328bc6,'strideInBytes':_0x24808e*_0xee68f5,'instanceDivisor':0x1}),_0x328bc6+=0x3,_0xa3580b[_0x1b57e8(0x8f)]=_0x137bf8++,_0xcb9391['push']({'index':_0xa3580b[_0x1b57e8(0x8f)],'vertexBuffer':_0x58dace,'componentsPerAttribute':0x3,'componentDatatype':Cesium['ComponentDatatype']['FLOAT'],'normalize':!![],'offsetInBytes':_0x24808e*_0x328bc6,'strideInBytes':_0x24808e*_0xee68f5,'instanceDivisor':0x1}),_0x328bc6+=0x3;},S3MEdgeProcessor[_0x27b148(0x7f)]=function(_0x23590c,_0x5d9a21){const _0x4f4dae=_0x27b148;if(!_0x5d9a21[_0x4f4dae(0x98)]||_0x5d9a21[_0x4f4dae(0x98)][_0x4f4dae(0x85)]==0x0)return;let _0x5d9504={},_0x3057ac=[];_0x5d9a21['attributeLocations']=_0x5d9504,_0x5d9a21[_0x4f4dae(0x9c)]=_0x3057ac;let _0x5495eb=Cesium[_0x4f4dae(0x71)]['createVertexBuffer']({'context':_0x23590c,'typedArray':_0x5d9a21['instancesData'],'usage':Cesium[_0x4f4dae(0x74)][_0x4f4dae(0x99)]});_0x5d9a21['instancesData']=null;let _0x2ec201=Cesium['ComponentDatatype']['getSizeInBytes'](Cesium[_0x4f4dae(0x77)][_0x4f4dae(0x78)]),_0x4b39ed=0x0;_0x5d9504[_0x4f4dae(0x86)]=_0x4b39ed++,_0x3057ac[_0x4f4dae(0x9b)]({'index':_0x5d9504['aSideness'],'vertexBuffer':createEdgeSidenessVertexBuffer(_0x23590c),'componentsPerAttribute':0x2,'componentDatatype':Cesium[_0x4f4dae(0x77)][_0x4f4dae(0x78)],'offsetInBytes':0x0,'strideInBytes':_0x2ec201*0x2,'normalize':![]});let _0x3b411c=0x3+0x3+0x3+0x3,_0x240513=0x0;_0x5d9504[_0x4f4dae(0x95)]=_0x4b39ed++,_0x3057ac[_0x4f4dae(0x9b)]({'index':_0x5d9504[_0x4f4dae(0x95)],'vertexBuffer':_0x5495eb,'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x4f4dae(0x77)][_0x4f4dae(0x78)],'normalize':![],'offsetInBytes':_0x2ec201*_0x240513,'strideInBytes':_0x2ec201*_0x3b411c,'instanceDivisor':0x1}),_0x240513+=0x3,_0x5d9504[_0x4f4dae(0x6e)]=_0x4b39ed++,_0x3057ac[_0x4f4dae(0x9b)]({'index':_0x5d9504['aPosition1'],'vertexBuffer':_0x5495eb,'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x4f4dae(0x77)][_0x4f4dae(0x78)],'normalize':![],'offsetInBytes':_0x2ec201*_0x240513,'strideInBytes':_0x2ec201*_0x3b411c,'instanceDivisor':0x1}),_0x240513+=0x3,_0x5d9504['aNormalA']=_0x4b39ed++,_0x3057ac['push']({'index':_0x5d9504[_0x4f4dae(0xaa)],'vertexBuffer':_0x5495eb,'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x4f4dae(0x77)]['FLOAT'],'normalize':!![],'offsetInBytes':_0x2ec201*_0x240513,'strideInBytes':_0x2ec201*_0x3b411c,'instanceDivisor':0x1}),_0x240513+=0x3,_0x5d9504['aNormalB']=_0x4b39ed++,_0x3057ac['push']({'index':_0x5d9504['aNormalB'],'vertexBuffer':_0x5495eb,'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x4f4dae(0x77)][_0x4f4dae(0x78)],'normalize':!![],'offsetInBytes':_0x2ec201*_0x240513,'strideInBytes':_0x2ec201*_0x3b411c,'instanceDivisor':0x1}),_0x240513+=0x3;};function getPosArrayForCompress(_0x39387a,_0x333791){const _0x39062a=_0x27b148;let _0x2a62b0=_0x333791[_0x39062a(0x7c)],_0x2316b6=_0x39387a[_0x39062a(0xa7)],_0x14be71=new Cesium[(_0x39062a(0x7b))](_0x39387a[_0x39062a(0x79)]['x'],_0x39387a[_0x39062a(0x79)]['y'],_0x39387a[_0x39062a(0x79)]['z']),_0x4e37ca=new Uint16Array(_0x333791[_0x39062a(0x92)][_0x39062a(0x6f)],_0x333791['typedArray'][_0x39062a(0x89)],_0x333791[_0x39062a(0x92)][_0x39062a(0xa5)]/0x2),_0x17455f=new Float32Array(_0x39387a[_0x39062a(0x90)]*0x3),_0x1ab665,_0x42b235,_0x1fdbc9;for(let _0x32c32e=0x0;_0x32c32e<_0x39387a['verticesCount'];_0x32c32e++){_0x1ab665=_0x4e37ca[_0x2a62b0*_0x32c32e]*_0x2316b6+_0x14be71['x'],_0x42b235=_0x4e37ca[_0x2a62b0*_0x32c32e+0x1]*_0x2316b6+_0x14be71['y'],_0x1fdbc9=_0x4e37ca[_0x2a62b0*_0x32c32e+0x2]*_0x2316b6+_0x14be71['z'],_0x17455f[0x3*_0x32c32e]=_0x1ab665,_0x17455f[0x3*_0x32c32e+0x1]=_0x42b235,_0x17455f[0x3*_0x32c32e+0x2]=_0x1fdbc9;}return _0x17455f;}S3MEdgeProcessor[_0x27b148(0x9a)]=function(_0xa856b4,_0xf70094,_0x5aa320){const _0x29b04a=_0x27b148;let _0x39997e=_0xa856b4[_0x29b04a(0xa0)][_0x29b04a(0x96)],_0x446463=_0xa856b4[_0x29b04a(0x97)][_0x39997e],_0x270a12=_0x446463[_0x29b04a(0x7c)],_0x21af8e=new Float32Array(_0x446463[_0x29b04a(0x92)][_0x29b04a(0x6f)],_0x446463[_0x29b04a(0x92)][_0x29b04a(0x89)],_0x446463[_0x29b04a(0x92)][_0x29b04a(0xa5)]/0x4),_0xe2b12f=_0x21af8e[_0x29b04a(0x85)]/_0x270a12;if(_0xf70094&&_0x5aa320){let _0x14036c=MeshProcessing[_0x29b04a(0x70)](_0x5aa320,_0xe2b12f);return{'faces':_0x5aa320,'neighbors':_0x14036c,'vertices':_0x21af8e,'dim':_0x270a12};}let _0x3166b9=_0x446463['typedArray']['buffer'],_0x5ddec6;isCompress?_0x5ddec6=_0x21af8e['buffer']:_0x5ddec6=_0x3166b9['slice'](_0x446463[_0x29b04a(0x92)][_0x29b04a(0x89)],_0x446463[_0x29b04a(0x92)][_0x29b04a(0x89)]+_0x446463[_0x29b04a(0x92)][_0x29b04a(0xa5)]);let _0x4d3ab5=MeshProcessing[_0x29b04a(0x8c)](_0x5ddec6,_0x270a12),_0x538b7c=S3MEdgeProcessor[_0x29b04a(0x88)](_0x4d3ab5['indices'],_0x5aa320),_0x25ac63=MeshProcessing[_0x29b04a(0x70)](_0x538b7c,_0x4d3ab5[_0x29b04a(0x7e)]),_0x4c958b=new Float32Array(_0x4d3ab5[_0x29b04a(0x6f)]);return{'faces':_0x538b7c,'neighbors':_0x25ac63,'vertices':_0x4c958b,'dim':_0x270a12};},S3MEdgeProcessor[_0x27b148(0x88)]=function(_0x400792,_0x499153){const _0x549e52=_0x27b148;if(_0x499153){_0x499153=_0x499153[_0x549e52(0x8a)]();for(let _0x448d1a=0x0;_0x448d1a<_0x499153[_0x549e52(0x85)];_0x448d1a++){_0x499153[_0x448d1a]=_0x400792[_0x499153[_0x448d1a]];}return _0x499153;}return _0x400792;};let scratchV0=new Cesium[(_0x27b148(0x7b))](),scratchV1=new Cesium[(_0x27b148(0x7b))](),scratchV2=new Cesium['Cartesian3'](),scratchV3=new Cesium['Cartesian3'](),scratchN0=new Cesium[(_0x27b148(0x7b))](),scratchN1=new Cesium[(_0x27b148(0x7b))](),scratchN2=new Cesium[(_0x27b148(0x7b))](),scratchN3=new Cesium['Cartesian3']();S3MEdgeProcessor[_0x27b148(0xa1)]=function(_0x328565,_0x59179c){const _0x23d643=_0x27b148;let _0x2617e8=_0x328565[_0x23d643(0xa0)]['aPosition'],_0x2688a0=_0x328565[_0x23d643(0x97)][_0x2617e8],_0x55296e=_0x2688a0['componentsPerAttribute'],_0x16908f=new Float32Array(_0x2688a0[_0x23d643(0x92)]['buffer'],_0x2688a0[_0x23d643(0x92)][_0x23d643(0x89)],_0x2688a0[_0x23d643(0x92)][_0x23d643(0xa5)]/0x4);;let _0x3598a6;_0x59179c[_0x23d643(0x80)]===0x0?_0x3598a6=new Uint16Array(_0x59179c[_0x23d643(0x81)][_0x23d643(0x6f)],_0x59179c[_0x23d643(0x81)]['byteOffset'],_0x59179c[_0x23d643(0x81)][_0x23d643(0xa5)]/0x2):_0x3598a6=new Uint32Array(_0x59179c[_0x23d643(0x81)][_0x23d643(0x6f)],_0x59179c[_0x23d643(0x81)][_0x23d643(0x89)],_0x59179c['indicesTypedArray'][_0x23d643(0xa5)]/0x4);let _0x46cb03=[],_0x4bf9bf=[],_0x272ddd=_0x3598a6['length'],_0x108a79=0x0;for(let _0x1b4797=0x0,_0x31e39b=Math['floor'](_0x272ddd/0x4)*0x4;_0x1b4797<_0x31e39b;_0x1b4797+=0x4){let _0x3b4dbf=_0x3598a6[_0x1b4797],_0x5ea765=_0x3598a6[_0x1b4797+0x1],_0x43fdd5=_0x3598a6[_0x1b4797+0x2],_0x3c7678=_0x3598a6[_0x1b4797+0x3];scratchV0['x']=_0x16908f[_0x55296e*_0x3b4dbf],scratchV0['y']=_0x16908f[_0x55296e*_0x3b4dbf+0x1],scratchV0['z']=_0x16908f[_0x55296e*_0x3b4dbf+0x2],scratchV1['x']=_0x16908f[_0x55296e*_0x5ea765],scratchV1['y']=_0x16908f[_0x55296e*_0x5ea765+0x1],scratchV1['z']=_0x16908f[_0x55296e*_0x5ea765+0x2],scratchV2['x']=_0x16908f[_0x55296e*_0x43fdd5],scratchV2['y']=_0x16908f[_0x55296e*_0x43fdd5+0x1],scratchV2['z']=_0x16908f[_0x55296e*_0x43fdd5+0x2],scratchV3['x']=_0x16908f[_0x55296e*_0x3c7678],scratchV3['y']=_0x16908f[_0x55296e*_0x3c7678+0x1],scratchV3['z']=_0x16908f[_0x55296e*_0x3c7678+0x2];if(Cesium[_0x23d643(0x7b)][_0x23d643(0x8d)](scratchV1,scratchV2)||Cesium[_0x23d643(0x7b)][_0x23d643(0x8d)](scratchV1,scratchV3)||Cesium[_0x23d643(0x7b)][_0x23d643(0x8d)](scratchV1,scratchV0)||Cesium['Cartesian3'][_0x23d643(0x8d)](scratchV2,scratchV0)||Cesium[_0x23d643(0x7b)][_0x23d643(0x8d)](scratchV3,scratchV0))continue;if(_0x43fdd5===_0x3c7678){Cesium[_0x23d643(0x7b)][_0x23d643(0xa8)](scratchV1,scratchV0,scratchN0),Cesium['Cartesian3']['subtract'](scratchV2,scratchV0,scratchN1),Cesium['Cartesian3'][_0x23d643(0x8e)](scratchN0,scratchN1,scratchN0);if(Cesium[_0x23d643(0x7b)][_0x23d643(0x8d)](scratchN0,Cesium['Cartesian3'][_0x23d643(0x8b)]))continue;Cesium[_0x23d643(0x7b)][_0x23d643(0x83)](scratchN0,scratchN0),_0x46cb03[_0x23d643(0x9b)](scratchV0['x']),_0x46cb03[_0x23d643(0x9b)](scratchV0['y']),_0x46cb03[_0x23d643(0x9b)](scratchV0['z']),_0x46cb03['push'](scratchV1['x']),_0x46cb03[_0x23d643(0x9b)](scratchV1['y']),_0x46cb03[_0x23d643(0x9b)](scratchV1['z']),_0x46cb03[_0x23d643(0x9b)](scratchN0['x']),_0x46cb03['push'](scratchN0['y']),_0x46cb03[_0x23d643(0x9b)](scratchN0['z']);}else{Cesium['Cartesian3'][_0x23d643(0xa8)](scratchV1,scratchV0,scratchN0),Cesium[_0x23d643(0x7b)][_0x23d643(0xa8)](scratchV2,scratchV0,scratchN1),Cesium[_0x23d643(0x7b)][_0x23d643(0x8e)](scratchN0,scratchN1,scratchN0);if(Cesium[_0x23d643(0x7b)][_0x23d643(0x8d)](scratchN0,Cesium[_0x23d643(0x7b)][_0x23d643(0x8b)]))continue;Cesium[_0x23d643(0x7b)][_0x23d643(0x83)](scratchN0,scratchN0),Cesium[_0x23d643(0x7b)][_0x23d643(0xa8)](scratchV1,scratchV0,scratchN2),Cesium['Cartesian3'][_0x23d643(0xa8)](scratchV3,scratchV0,scratchN3),Cesium[_0x23d643(0x7b)][_0x23d643(0x8e)](scratchN2,scratchN3,scratchN2);if(Cesium['Cartesian3'][_0x23d643(0x8d)](scratchN2,Cesium[_0x23d643(0x7b)]['ZERO']))continue;Cesium[_0x23d643(0x7b)][_0x23d643(0x83)](scratchN2,scratchN2),_0x4bf9bf[_0x23d643(0x9b)](scratchV0['x']),_0x4bf9bf['push'](scratchV0['y']),_0x4bf9bf['push'](scratchV0['z']),_0x4bf9bf['push'](scratchV1['x']),_0x4bf9bf['push'](scratchV1['y']),_0x4bf9bf['push'](scratchV1['z']),_0x4bf9bf[_0x23d643(0x9b)](scratchN0['x']),_0x4bf9bf[_0x23d643(0x9b)](scratchN0['y']),_0x4bf9bf[_0x23d643(0x9b)](scratchN0['z']),_0x4bf9bf['push'](scratchN2['x']),_0x4bf9bf[_0x23d643(0x9b)](scratchN2['y']),_0x4bf9bf[_0x23d643(0x9b)](scratchN2['z']);}_0x108a79+=Cesium[_0x23d643(0x7b)][_0x23d643(0x94)](scratchV0,scratchV1);}let _0x3a6b97=_0x272ddd/0x4,_0x33e25f=_0x108a79/_0x3a6b97,_0x38f125=_0x46cb03[_0x23d643(0x85)]/S3MEdgeProcessor[_0x23d643(0xa4)],_0x83028d=_0x4bf9bf['length']/0xc;return{'regular':{'instancesData':new Float32Array(_0x46cb03),'instanceCount':_0x38f125,'edgeLength':_0x38f125*_0x33e25f},'silhouette':{'instancesData':new Float32Array(_0x4bf9bf),'instanceCount':_0x83028d,'edgeLength':_0x83028d},'averageEdgeLength':_0x33e25f};};export default S3MEdgeProcessor;