const _0x3a53=['AddressMode','SpecularR','AmbientG','FLOAT','uv6','skeletonNames','materials','407112TKbDfc','fill','parseBuffer','DiffuseA','indexType','specular','uv7','namespaceURI','AmbientR','transparentsorting','PageLods','queryChildNodes','RangeMode','uv2','secondary_colour','aPosition','verticesCount','textContent','instanceId','getUint8','pageLods','vertexPackage','ComponentDatatype','name','5QzYJnV','split','instanceIndex','GeoName','TAM_WRAP','firstChild','geoPackage','texturePackage','1TNIMNu','1XGpakK','13625QxGPhH','PixelFormat','766435hpaNpg','.s3m','Pixel','read','indicesCount','SpecularG','BYTES_PER_ELEMENT','vertexAttributes','DiffuseB','BoundingSphere','replace','push','buffer','195059yAUnTs','53017TaRGsu','geodes','UNSIGNED_BYTE','url','length','radius','aTexCoord','queryFirstNode','275175XGOnlk','filteringoption','defaultValue','diffuse','instanceMode','SpecularB','AmbientA','addressmode','instanceBuffer','textureunitstates','TransparentSorting','uv9','texture','SpecularA','Diffuse','aNormal','uv4','materialCode','Material3Ds','uv3','Distance','Ambient','queryNumericValue','primitiveType','gbk','shininess','Geode','trim','material','aColor','getUint32','instanceCount','matrix','DISTANCE_FROM_EYE_POINT','ambient','inflate','groupNode','texmodmatrix','getStringFromTypedArray','subarray','filtermin','GeoDeModMatrix','283186WkHreF','queryStringValue','1ntpnCB','indicesTypedArray','getUint16','DiffuseR','attrLocation','RangeList','uv1'];const _0x36eb73=_0x2a93;(function(_0x3f93fe,_0x4f13c7){const _0x1e667c=_0x2a93;while(!![]){try{const _0x389455=parseInt(_0x1e667c(0xb8))*-parseInt(_0x1e667c(0xa6))+parseInt(_0x1e667c(0xfa))+-parseInt(_0x1e667c(0xa8))+-parseInt(_0x1e667c(0xea))*parseInt(_0x1e667c(0xa7))+-parseInt(_0x1e667c(0xaa))*parseInt(_0x1e667c(0xec))+-parseInt(_0x1e667c(0xb7))+parseInt(_0x1e667c(0x9e))*parseInt(_0x1e667c(0xc0));if(_0x389455===_0x4f13c7)break;else _0x3f93fe['push'](_0x3f93fe['shift']());}catch(_0x45d6df){_0x3f93fe['push'](_0x3f93fe['shift']());}}}(_0x3a53,0x73271));import _0x159f6e from'../ThirdParty/pako_inflate.js';import _0x3d7930 from'../Ext/XmlParser.js';import _0x1e59a7 from'./Enum/RangeMode.js';import _0x1f272b from'./Enum/S3MPixelFormat.js';function parseGeoPackage(_0x2cdd80,_0x14037d,_0x5d0c09,_0x4c8881){const _0x587e3c=_0x2a93;let _0x1b3340=_0x5d0c09['getUint32'](_0x4c8881,!![]);_0x4c8881+=Uint32Array[_0x587e3c(0xb0)];let _0x1bf744=0x0,_0x18ac03={},_0x379045=_0x18ac03[_0x587e3c(0xb1)]=[],_0x1d3735=_0x18ac03['attrLocation']={};_0x18ac03[_0x587e3c(0xdf)]=0x0,_0x18ac03[_0x587e3c(0xc4)]=0x0;let _0x1091f4=0x0,_0x11c698=_0x5d0c09[_0x587e3c(0xde)](_0x4c8881,!![]);_0x4c8881+=Uint32Array[_0x587e3c(0xb0)];let _0x21050a=_0x5d0c09[_0x587e3c(0xee)](_0x4c8881,!![]);_0x4c8881+=Uint32Array['BYTES_PER_ELEMENT'];let _0x611773=_0x21050a;_0x21050a>0x4&&(_0x611773=_0x21050a>>0x8,_0x21050a=_0x21050a&0xf);let _0x1ba458=_0x5d0c09['getUint32'](_0x4c8881,!![]);_0x4c8881+=Uint32Array[_0x587e3c(0xb0)];if(_0x1ba458>0x0){let _0x697c08=_0x5d0c09['getUint16'](_0x4c8881,!![]);_0x697c08=_0x21050a*Float32Array['BYTES_PER_ELEMENT'],_0x4c8881+=Uint32Array['BYTES_PER_ELEMENT'],_0x1bf744=_0x1ba458*_0x697c08,_0x1d3735[_0x587e3c(0x109)]=_0x1091f4,_0x379045[_0x587e3c(0xb5)]({'index':_0x1d3735['aPosition'],'typedArray':_0x14037d[_0x587e3c(0xe7)](_0x4c8881,_0x4c8881+_0x1bf744),'componentsPerAttribute':_0x21050a,'componentDatatype':Cesium[_0x587e3c(0x9c)][_0x587e3c(0xf6)],'offsetInBytes':0x0,'strideInBytes':_0x697c08,'normalize':![]}),_0x1091f4++,_0x4c8881+=_0x1bf744;}let _0x4b945d=_0x5d0c09['getUint32'](_0x4c8881,!![]);_0x4c8881+=Uint32Array['BYTES_PER_ELEMENT'];if(_0x4b945d>0x0){let _0x256cd6=_0x5d0c09[_0x587e3c(0xee)](_0x4c8881,!![]);_0x256cd6=_0x611773*Float32Array['BYTES_PER_ELEMENT'],_0x4c8881+=Uint32Array[_0x587e3c(0xb0)],_0x1bf744=_0x4b945d*_0x256cd6,_0x1d3735[_0x587e3c(0xcf)]=_0x1091f4,_0x379045[_0x587e3c(0xb5)]({'index':_0x1d3735[_0x587e3c(0xcf)],'typedArray':_0x14037d['subarray'](_0x4c8881,_0x4c8881+_0x1bf744),'componentsPerAttribute':_0x611773,'componentDatatype':Cesium['ComponentDatatype']['FLOAT'],'offsetInBytes':0x0,'strideInBytes':_0x256cd6,'normalize':![]}),_0x1091f4++,_0x4c8881+=_0x1bf744;}let _0x1084d4=_0x5d0c09[_0x587e3c(0xde)](_0x4c8881,!![]);_0x4c8881+=Uint32Array[_0x587e3c(0xb0)];if(_0x1084d4>0x0){let _0x1e9e3c=new Uint8Array(0x4*_0x1084d4),_0x3a05d3=_0x5d0c09[_0x587e3c(0xde)](_0x4c8881,!![]);_0x3a05d3=0x4*Float32Array[_0x587e3c(0xb0)],_0x4c8881+=Uint32Array[_0x587e3c(0xb0)],_0x1bf744=_0x1084d4*_0x3a05d3;let _0x45b0de=new Float32Array(_0x14037d[_0x587e3c(0xb6)],_0x4c8881,_0x1ba458*0x4);for(let _0x1d671b=0x0;_0x1d671b<_0x1ba458;_0x1d671b++){_0x1e9e3c[0x4*_0x1d671b]=_0x45b0de[0x4*_0x1d671b]*0xff,_0x1e9e3c[0x4*_0x1d671b+0x1]=_0x45b0de[0x4*_0x1d671b+0x1]*0xff,_0x1e9e3c[0x4*_0x1d671b+0x2]=_0x45b0de[0x4*_0x1d671b+0x2]*0xff,_0x1e9e3c[0x4*_0x1d671b+0x3]=_0x45b0de[0x4*_0x1d671b+0x3]*0xff;}_0x4c8881+=_0x1bf744,_0x1d3735[_0x587e3c(0xdd)]=_0x1091f4,_0x379045[_0x587e3c(0xb5)]({'index':_0x1d3735[_0x587e3c(0xdd)],'typedArray':_0x1e9e3c,'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x587e3c(0xba)],'offsetInBytes':0x0,'strideInBytes':0x4,'normalize':!![]}),_0x1091f4++;}let _0x1b39dc=_0x5d0c09[_0x587e3c(0xde)](_0x4c8881,!![]);_0x4c8881+=Uint32Array[_0x587e3c(0xb0)];_0x1b39dc>0x0&&(_0x1bf744=_0x1b39dc*0x10,_0x4c8881+=_0x1bf744);let _0x134388=_0x5d0c09[_0x587e3c(0xde)](_0x4c8881,!![]);_0x4c8881+=Uint32Array[_0x587e3c(0xb0)];let _0x4fc24e=-0x1,_0x4308df,_0x22d727,_0x235a7c;for(let _0x253b53=0x0;_0x253b53<_0x134388;_0x253b53++){_0x4308df=_0x5d0c09[_0x587e3c(0xde)](_0x4c8881,!![]),_0x4c8881+=Uint32Array['BYTES_PER_ELEMENT'],_0x235a7c=_0x5d0c09['getUint16'](_0x4c8881,!![]),_0x4c8881+=Uint16Array[_0x587e3c(0xb0)],_0x22d727=_0x5d0c09['getUint16'](_0x4c8881,!![]),_0x4c8881+=Uint16Array['BYTES_PER_ELEMENT'],_0x1bf744=_0x4308df*_0x235a7c*Float32Array[_0x587e3c(0xb0)];let _0x1714c1=_0x14037d[_0x587e3c(0xe7)](_0x4c8881,_0x4c8881+_0x1bf744);if(_0x4fc24e===-0x1&&(_0x235a7c===0x14||_0x235a7c===0x23)){_0x4fc24e=_0x253b53,_0x18ac03['instanceCount']=_0x4308df,_0x18ac03[_0x587e3c(0xc4)]=_0x235a7c,_0x18ac03[_0x587e3c(0xc8)]=_0x1714c1;let _0x85bf4f=_0x235a7c*_0x4308df,_0x3806ed;if(_0x235a7c===0x14)_0x3806ed=Float32Array[_0x587e3c(0xb0)]*0x14,_0x1d3735[_0x587e3c(0x107)]=_0x1091f4++,_0x379045[_0x587e3c(0xb5)]({'index':_0x1d3735[_0x587e3c(0x107)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x587e3c(0xf6)],'normalize':![],'offsetInBytes':0x0,'strideInBytes':_0x3806ed,'instanceDivisor':0x1}),_0x1d3735['uv3']=_0x1091f4++,_0x379045[_0x587e3c(0xb5)]({'index':_0x1d3735[_0x587e3c(0xd3)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x587e3c(0x9c)][_0x587e3c(0xf6)],'normalize':![],'offsetInBytes':0x4*Float32Array[_0x587e3c(0xb0)],'strideInBytes':_0x3806ed,'instanceDivisor':0x1}),_0x1d3735['uv4']=_0x1091f4++,_0x379045['push']({'index':_0x1d3735[_0x587e3c(0xd0)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype']['FLOAT'],'normalize':![],'offsetInBytes':0x8*Float32Array[_0x587e3c(0xb0)],'strideInBytes':_0x3806ed,'instanceDivisor':0x1}),_0x1d3735[_0x587e3c(0x108)]=_0x1091f4++,_0x379045[_0x587e3c(0xb5)]({'index':_0x1d3735['secondary_colour'],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x587e3c(0xf6)],'normalize':![],'offsetInBytes':0xc*Float32Array['BYTES_PER_ELEMENT'],'strideInBytes':_0x3806ed,'instanceDivisor':0x1}),_0x1d3735[_0x587e3c(0xf7)]=_0x1091f4++,_0x379045['push']({'index':_0x1d3735[_0x587e3c(0xf7)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x587e3c(0x9c)][_0x587e3c(0xf6)],'normalize':![],'offsetInBytes':0x10*Float32Array[_0x587e3c(0xb0)],'strideInBytes':_0x3806ed,'instanceDivisor':0x1});else _0x235a7c===0x23&&(_0x3806ed=Float32Array[_0x587e3c(0xb0)]*0x23,_0x1d3735[_0x587e3c(0xf2)]=_0x1091f4++,_0x379045['push']({'index':_0x1d3735['uv1'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x587e3c(0x9c)]['FLOAT'],'normalize':![],'offsetInBytes':0x0,'strideInBytes':_0x3806ed,'instanceDivisor':0x1,'byteLength':_0x1bf744}),_0x1d3735[_0x587e3c(0x107)]=_0x1091f4++,_0x379045['push']({'index':_0x1d3735['uv2'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x587e3c(0x9c)][_0x587e3c(0xf6)],'normalize':![],'offsetInBytes':0x4*Float32Array[_0x587e3c(0xb0)],'strideInBytes':_0x3806ed,'instanceDivisor':0x1}),_0x1d3735[_0x587e3c(0xd3)]=_0x1091f4++,_0x379045[_0x587e3c(0xb5)]({'index':_0x1d3735['uv3'],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x587e3c(0xf6)],'normalize':![],'offsetInBytes':0x8*Float32Array[_0x587e3c(0xb0)],'strideInBytes':_0x3806ed,'instanceDivisor':0x1}),_0x1d3735[_0x587e3c(0xd0)]=_0x1091f4++,_0x379045[_0x587e3c(0xb5)]({'index':_0x1d3735[_0x587e3c(0xd0)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x587e3c(0xf6)],'normalize':![],'offsetInBytes':0xc*Float32Array[_0x587e3c(0xb0)],'strideInBytes':_0x3806ed,'instanceDivisor':0x1}),_0x1d3735['uv5']=_0x1091f4++,_0x379045[_0x587e3c(0xb5)]({'index':_0x1d3735['uv5'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x587e3c(0x9c)][_0x587e3c(0xf6)],'normalize':![],'offsetInBytes':0x10*Float32Array[_0x587e3c(0xb0)],'strideInBytes':_0x3806ed,'instanceDivisor':0x1}),_0x1d3735[_0x587e3c(0xf7)]=_0x1091f4++,_0x379045[_0x587e3c(0xb5)]({'index':_0x1d3735['uv6'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x587e3c(0x9c)][_0x587e3c(0xf6)],'normalize':![],'offsetInBytes':0x14*Float32Array[_0x587e3c(0xb0)],'strideInBytes':_0x3806ed,'instanceDivisor':0x1}),_0x1d3735[_0x587e3c(0x100)]=_0x1091f4++,_0x379045[_0x587e3c(0xb5)]({'index':_0x1d3735[_0x587e3c(0x100)],'componentsPerAttribute':0x3,'componentDatatype':Cesium['ComponentDatatype'][_0x587e3c(0xf6)],'normalize':![],'offsetInBytes':0x18*Float32Array[_0x587e3c(0xb0)],'strideInBytes':_0x3806ed,'instanceDivisor':0x1}),_0x1d3735[_0x587e3c(0x108)]=_0x1091f4++,_0x379045[_0x587e3c(0xb5)]({'index':_0x1d3735[_0x587e3c(0x108)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x587e3c(0xf6)],'normalize':![],'offsetInBytes':0x1b*Float32Array[_0x587e3c(0xb0)],'strideInBytes':_0x3806ed,'instanceDivisor':0x1}),_0x1d3735[_0x587e3c(0xcb)]=_0x1091f4++,_0x379045[_0x587e3c(0xb5)]({'index':_0x1d3735['uv9'],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x587e3c(0xf6)],'normalize':![],'offsetInBytes':0x1f*Float32Array[_0x587e3c(0xb0)],'strideInBytes':_0x3806ed,'instanceDivisor':0x1}));}else{if(_0x4fc24e!==-0x1)_0x18ac03['instanceBounds']=new Float32Array(_0x14037d[_0x587e3c(0xb6)],_0x4c8881,_0x4308df*_0x235a7c);else{let _0x5b5344=_0x587e3c(0xbe)+_0x253b53;_0x1d3735[_0x5b5344]=_0x1091f4++,_0x379045[_0x587e3c(0xb5)]({'index':_0x1d3735[_0x5b5344],'typedArray':_0x1714c1,'componentsPerAttribute':_0x235a7c,'componentDatatype':Cesium[_0x587e3c(0x9c)]['FLOAT'],'offsetInBytes':0x0,'strideInBytes':_0x235a7c*Float32Array[_0x587e3c(0xb0)],'normalize':![]});}}_0x4c8881+=_0x1bf744;}_0x18ac03[_0x587e3c(0x10a)]=_0x1ba458,_0x18ac03['instanceIndex']=_0x4fc24e;let _0x2ec8e3=_0x5d0c09['getUint32'](_0x4c8881,!![]);_0x4c8881+=Uint32Array['BYTES_PER_ELEMENT'];let _0x277272=[];for(let _0x13bfa8=0x0;_0x13bfa8<_0x2ec8e3;_0x13bfa8++){let _0x38719c={},_0x2bdd47=_0x5d0c09[_0x587e3c(0xde)](_0x4c8881,!![]);_0x4c8881+=Uint32Array[_0x587e3c(0xb0)];let _0x509cb4=_0x5d0c09[_0x587e3c(0x99)](_0x4c8881,!![]);_0x4c8881+=Uint8Array[_0x587e3c(0xb0)];let _0x370442=_0x5d0c09[_0x587e3c(0x99)](_0x4c8881,!![]);_0x4c8881+=Uint8Array[_0x587e3c(0xb0)];let _0x3685be=_0x5d0c09[_0x587e3c(0x99)](_0x4c8881,!![]);_0x4c8881+=Uint8Array['BYTES_PER_ELEMENT'],_0x4c8881+=0x1,_0x38719c[_0x587e3c(0xae)]=_0x2bdd47,_0x38719c[_0x587e3c(0xfe)]=_0x509cb4,_0x38719c[_0x587e3c(0xd7)]=_0x3685be;let _0x4263a6=_0x4c8881;_0x2bdd47>0x0&&(_0x509cb4===0x0?(_0x1bf744=_0x2bdd47*Uint16Array[_0x587e3c(0xb0)],_0x4c8881+=_0x1bf744,_0x2bdd47%0x2===0x1&&(_0x4c8881+=0x2)):(_0x1bf744=_0x2bdd47*0x4,_0x4c8881+=_0x1bf744));_0x38719c[_0x587e3c(0xed)]=_0x14037d['subarray'](_0x4263a6,_0x4263a6+_0x1bf744);let _0x277cdb=_0x5d0c09[_0x587e3c(0xde)](_0x4c8881,!![]);_0x4c8881+=Uint32Array['BYTES_PER_ELEMENT'];let _0x11d5b1=_0x5d0c09[_0x587e3c(0xde)](_0x4c8881,!![]);_0x4c8881+=Uint32Array[_0x587e3c(0xb0)]*_0x277cdb,_0x38719c[_0x587e3c(0xd1)]=_0x11d5b1,_0x277272[_0x587e3c(0xb5)](_0x38719c);}return _0x2cdd80[_0x1b3340]={'vertexPackage':_0x18ac03,'arrIndexPackage':_0x277272},_0x4c8881;}function createBatchIdAttribute(_0x130279,_0x2d35d5,_0x9f6f0){const _0x1b7813=_0x2a93;let _0x2b9388=_0x130279[_0x1b7813(0xb1)],_0x4d3d42=_0x130279[_0x1b7813(0xf0)],_0x1b097d=_0x2b9388[_0x1b7813(0xbc)],_0x1f93ed=_0x9f6f0===0x1?_0x1b7813(0x98):'batchId';_0x4d3d42[_0x1f93ed]=_0x1b097d,_0x2b9388[_0x1b7813(0xb5)]({'index':_0x1b097d,'typedArray':_0x2d35d5,'componentsPerAttribute':0x1,'componentDatatype':Cesium[_0x1b7813(0x9c)]['FLOAT'],'offsetInBytes':0x0,'strideInBytes':0x0,'instanceDivisor':_0x9f6f0});}function createGroupAndMaterialNode(_0x2872e2,_0x1c5fbb,_0x50c812){const _0x7a332d=_0x2a93;let _0x1793bd=_0x3d7930[_0x7a332d(0xad)](_0x2872e2),_0x1586b9=_0x1793bd[_0x7a332d(0xa3)],_0x5f5716=_0x1586b9[_0x7a332d(0x101)];_0x50c812['material']=[];let _0x492aea=_0x3d7930[_0x7a332d(0xbf)](_0x1586b9,_0x7a332d(0xd2),_0x5f5716),_0x21beb2=_0x3d7930[_0x7a332d(0x105)](_0x492aea,_0x7a332d(0xdc),_0x5f5716);for(let _0x434843=0x0,_0x53950d=_0x21beb2['length'];_0x434843<_0x53950d;_0x434843++){let _0x480391={},_0x20c824=_0x21beb2[_0x434843];_0x480391['id']=_0x3d7930['queryStringValue'](_0x20c824,_0x7a332d(0x9d),_0x5f5716);let _0x1dcc09=_0x3d7930[_0x7a332d(0xbf)](_0x20c824,_0x7a332d(0xd5),_0x5f5716),_0x2555e5=Cesium[_0x7a332d(0xc2)](_0x3d7930[_0x7a332d(0xd6)](_0x1dcc09,_0x7a332d(0x102),_0x5f5716),0x1),_0x2108ee=Cesium[_0x7a332d(0xc2)](_0x3d7930['queryNumericValue'](_0x1dcc09,_0x7a332d(0xf5),_0x5f5716),0x1),_0xb93e95=Cesium['defaultValue'](_0x3d7930['queryNumericValue'](_0x1dcc09,'AmbientB',_0x5f5716),0x1),_0x483127=Cesium[_0x7a332d(0xc2)](_0x3d7930[_0x7a332d(0xd6)](_0x1dcc09,_0x7a332d(0xc6),_0x5f5716),0x1);_0x480391[_0x7a332d(0xe2)]={'r':_0x2555e5,'g':_0x2108ee,'b':_0xb93e95,'a':_0x483127};let _0xe478e=_0x3d7930['queryFirstNode'](_0x20c824,_0x7a332d(0xce),_0x5f5716);_0x2555e5=Cesium[_0x7a332d(0xc2)](_0x3d7930[_0x7a332d(0xd6)](_0xe478e,_0x7a332d(0xef),_0x5f5716),0x1),_0x2108ee=Cesium[_0x7a332d(0xc2)](_0x3d7930['queryNumericValue'](_0xe478e,'DiffuseG',_0x5f5716),0x1),_0xb93e95=Cesium[_0x7a332d(0xc2)](_0x3d7930[_0x7a332d(0xd6)](_0xe478e,_0x7a332d(0xb2),_0x5f5716),0x1),_0x483127=Cesium[_0x7a332d(0xc2)](_0x3d7930[_0x7a332d(0xd6)](_0xe478e,_0x7a332d(0xfd),_0x5f5716),0x1),_0x480391[_0x7a332d(0xc3)]={'r':_0x2555e5,'g':_0x2108ee,'b':_0xb93e95,'a':_0x483127};let _0x5271dd=_0x3d7930[_0x7a332d(0xbf)](_0x20c824,'Specular',_0x5f5716);_0x2555e5=Cesium['defaultValue'](_0x3d7930[_0x7a332d(0xd6)](_0x5271dd,_0x7a332d(0xf4),_0x5f5716),0x0),_0x2108ee=Cesium['defaultValue'](_0x3d7930[_0x7a332d(0xd6)](_0x5271dd,_0x7a332d(0xaf),_0x5f5716),0x0),_0xb93e95=Cesium[_0x7a332d(0xc2)](_0x3d7930[_0x7a332d(0xd6)](_0x5271dd,_0x7a332d(0xc5),_0x5f5716),0x0),_0x483127=Cesium['defaultValue'](_0x3d7930[_0x7a332d(0xd6)](_0x5271dd,_0x7a332d(0xcd),_0x5f5716),0x0),_0x480391[_0x7a332d(0xff)]={'r':_0x2555e5,'g':_0x2108ee,'b':_0xb93e95,'a':_0x483127},_0x480391[_0x7a332d(0xd9)]=_0x3d7930[_0x7a332d(0xd6)](_0x20c824,'Shininess',_0x5f5716),_0x480391[_0x7a332d(0x103)]=_0x3d7930['queryBooleanValue'](_0x20c824,_0x7a332d(0xca),_0x5f5716),_0x480391['textureunitstates']=[];let _0x3318eb=_0x3d7930[_0x7a332d(0x105)](_0x20c824,_0x7a332d(0xcc),_0x5f5716);for(let _0x1cdfca=0x0;_0x1cdfca<_0x3318eb['length'];_0x1cdfca++){let _0xc0b602={},_0x59cadc=_0x3318eb[_0x1cdfca],_0x2280d9=_0x3d7930[_0x7a332d(0xeb)](_0x59cadc,_0x7a332d(0x9d),_0x5f5716),_0x3f65ba=_0x3d7930[_0x7a332d(0xeb)](_0x59cadc,'TextureName',_0x5f5716),_0x361993=_0x3d7930[_0x7a332d(0xbf)](_0x59cadc,_0x7a332d(0xf3),_0x5f5716),_0x11f000=_0x3d7930[_0x7a332d(0xeb)](_0x361993,'u',_0x5f5716),_0x5e2561=_0x11f000==='TAM_WRAP'?0x0:0x1,_0x3b3ba6=_0x3d7930['queryStringValue'](_0x361993,'v',_0x5f5716),_0xa21556=_0x3b3ba6===_0x7a332d(0xa2)?0x0:0x1,_0x18cd31=_0x3d7930[_0x7a332d(0xeb)](_0x59cadc,'TexModMatrix',_0x5f5716)['split'](','),_0x3060bd=0x10;while(_0x3060bd--){_0x18cd31[_0x3060bd]=parseFloat(_0x18cd31[_0x3060bd]);}_0xc0b602[_0x7a332d(0xc7)]={'u':_0x5e2561,'v':_0xa21556,'w':0x0},_0xc0b602[_0x7a332d(0xc1)]=0x20202020,_0xc0b602['filtermax']=0x2,_0xc0b602[_0x7a332d(0xe8)]=0x2,_0xc0b602['id']=_0x2280d9,_0xc0b602[_0x7a332d(0xe5)]=_0x18cd31,_0xc0b602[_0x7a332d(0xbb)]='',_0x480391[_0x7a332d(0xc9)][_0x7a332d(0xb5)]({'textureunitstate':_0xc0b602});}_0x50c812[_0x7a332d(0xdc)]['push']({'material':_0x480391});}let _0x5cdaef=_0x3d7930[_0x7a332d(0xbf)](_0x1586b9,_0x7a332d(0x104),_0x5f5716),_0x5623e8=_0x3d7930[_0x7a332d(0x105)](_0x5cdaef,'PagedLOD',_0x5f5716);_0x1c5fbb[_0x7a332d(0x9a)]=[];if(_0x5623e8[_0x7a332d(0xbc)]>0x0)for(let _0x3a0cdc=0x0,_0x5d1d0a=_0x5623e8[_0x7a332d(0xbc)];_0x3a0cdc<_0x5d1d0a;_0x3a0cdc++){let _0x492433=_0x5623e8[_0x3a0cdc],_0x1539f3=_0x3d7930[_0x7a332d(0xeb)](_0x492433,'RangeDataList',_0x5f5716);_0x1539f3?_0x1539f3=_0x1539f3[_0x7a332d(0xb4)](/.osgb$/,_0x7a332d(0xab)):_0x1539f3='';let _0xb5fe26=_0x3d7930[_0x7a332d(0xeb)](_0x492433,_0x7a332d(0x106),_0x5f5716),_0x202b2a=_0x3d7930['queryNumericValue'](_0x492433,_0x7a332d(0xf1),_0x5f5716),_0x3e4119=_0x3d7930[_0x7a332d(0xbf)](_0x492433,_0x7a332d(0xb3),_0x5f5716),_0x4e5296=_0x3d7930[_0x7a332d(0xd6)](_0x3e4119,'x',_0x5f5716),_0xf5e0d8=_0x3d7930[_0x7a332d(0xd6)](_0x3e4119,'y',_0x5f5716),_0x32be32=_0x3d7930['queryNumericValue'](_0x3e4119,'z',_0x5f5716),_0x3f6700=_0x3d7930[_0x7a332d(0xd6)](_0x3e4119,_0x7a332d(0xbd),_0x5f5716),_0x548fc7={'boundingSphere':{'center':{'x':_0x4e5296,'y':_0xf5e0d8,'z':_0x32be32},'radius':_0x3f6700},'childTile':_0x1539f3,'geodes':[],'rangeList':_0x202b2a,'rangeMode':_0xb5fe26===_0x7a332d(0xe1)?_0x1e59a7[_0x7a332d(0xd4)]:_0x1e59a7[_0x7a332d(0xac)]};_0x548fc7['geodes']=[];let _0x14b07a=_0x3d7930['queryChildNodes'](_0x492433,_0x7a332d(0xda),_0x5f5716);for(let _0x1700e2=0x0;_0x1700e2<_0x14b07a[_0x7a332d(0xbc)];_0x1700e2++){let _0x4a1e64={},_0x41bce7=_0x14b07a[_0x1700e2],_0xf6703e=_0x3d7930[_0x7a332d(0xeb)](_0x41bce7,_0x7a332d(0xe9),_0x5f5716)['split'](',');for(let _0x1fd595=0x0;_0x1fd595<0x10;_0x1fd595++){_0xf6703e[_0x1fd595]=parseFloat(_0xf6703e[_0x1fd595]);}_0x4a1e64[_0x7a332d(0xe0)]=_0xf6703e;let _0x288f48=_0x3d7930[_0x7a332d(0x105)](_0x41bce7,_0x7a332d(0xa1));_0x4a1e64[_0x7a332d(0xf8)]=[];for(let _0x490ed7=0x0;_0x490ed7<_0x288f48[_0x7a332d(0xbc)];_0x490ed7++){let _0x3093d1=_0x288f48[_0x490ed7][_0x7a332d(0x97)]['trim']();_0x4a1e64[_0x7a332d(0xf8)]['push'](_0x3093d1);}_0x548fc7['geodes'][_0x7a332d(0xb5)](_0x4a1e64);}_0x1c5fbb[_0x7a332d(0x9a)][_0x7a332d(0xb5)](_0x548fc7);}else{let _0x98f0e2=_0x3d7930['queryChildNodes'](_0x5cdaef,'Geode',_0x5f5716);if(_0x98f0e2['length']>0x0){let _0x32f2bd={'boundingSphere':{'center':{'x':0x0,'y':0x0,'z':0x0},'radius':0x615299},'childTile':'','geodes':[],'rangeList':0x0,'rangeMode':_0x1e59a7[_0x7a332d(0xac)]};for(let _0x23bf70=0x0,_0x15df77=_0x98f0e2[_0x7a332d(0xbc)];_0x23bf70<_0x15df77;_0x23bf70++){let _0x4eec6f={},_0x3beb35=_0x98f0e2[_0x23bf70],_0x4d92e3=_0x3d7930[_0x7a332d(0xeb)](_0x3beb35,'GeoDeModMatrix',_0x5f5716)[_0x7a332d(0x9f)](',');for(let _0x3be42c=0x0;_0x3be42c<0x10;_0x3be42c++){_0x4d92e3[_0x3be42c]=parseFloat(_0x4d92e3[_0x3be42c]);}_0x4eec6f['matrix']=_0x4d92e3;let _0x52ff83=_0x3d7930[_0x7a332d(0x105)](_0x3beb35,_0x7a332d(0xa1),_0x5f5716);_0x4eec6f['skeletonNames']=[];for(let _0x547457=0x0;_0x547457<_0x52ff83[_0x7a332d(0xbc)];_0x547457++){let _0x55a7d0=_0x52ff83[_0x547457]['textContent'][_0x7a332d(0xdb)]();_0x4eec6f[_0x7a332d(0xf8)]['push'](_0x55a7d0);}_0x32f2bd[_0x7a332d(0xb9)][_0x7a332d(0xb5)](_0x4eec6f);}_0x1c5fbb[_0x7a332d(0x9a)]['push'](_0x32f2bd);}}return _0x1c5fbb;}function unZip(_0x40ad6b,_0x4b4afe){const _0x18ae00=_0x2a93;let _0x2b4017=new Uint8Array(_0x40ad6b,_0x4b4afe);return _0x159f6e[_0x18ae00(0xe3)](_0x2b4017)[_0x18ae00(0xb6)];}function _0x2a93(_0x298b6f,_0x3097ca){_0x298b6f=_0x298b6f-0x97;let _0x3a53ff=_0x3a53[_0x298b6f];return _0x3a53ff;}function S3ModelOldParser(){}S3ModelOldParser[_0x36eb73(0xfc)]=function(_0x593360){const _0x4f7e99=_0x36eb73;let _0x21dc11=0x0,_0x45149c={'groupNode':{},'geoPackage':{},'materials':{},'texturePackage':{}},_0x2a3d4c=new Uint8Array(_0x593360,0x0,0x4);if(_0x2a3d4c[0x0]!==0x73||_0x2a3d4c[0x1]!==0x33||_0x2a3d4c[0x2]!==0x6d)return{'result':![]};let _0x391669=_0x2a3d4c[0x3];_0x21dc11+=0x4;let _0x336b0d=unZip(_0x593360,_0x21dc11),_0x276617=new Uint8Array(_0x336b0d),_0xc2e11=new DataView(_0x336b0d);_0x21dc11=0x0;let _0x34e51d=_0xc2e11[_0x4f7e99(0xde)](_0x21dc11,!![]);_0x21dc11+=Uint32Array[_0x4f7e99(0xb0)];let _0xb03520=new Uint8Array(_0x336b0d,_0x21dc11,_0x34e51d),_0x59ab19=_0x34e51d%0x4;_0x59ab19&&(_0x59ab19=0x4-_0x59ab19);_0x21dc11+=_0x34e51d+_0x59ab19;let _0x27fab5=Cesium[_0x4f7e99(0xe6)](_0xb03520,undefined,undefined,_0x4f7e99(0xd8));createGroupAndMaterialNode(_0x27fab5,_0x45149c[_0x4f7e99(0xe4)],_0x45149c[_0x4f7e99(0xf9)]);let _0x286a9e=_0xc2e11[_0x4f7e99(0xde)](_0x21dc11,!![]);_0x21dc11+=Uint32Array[_0x4f7e99(0xb0)];let _0x292237=_0xc2e11['getUint32'](_0x21dc11,!![]);_0x21dc11+=Uint32Array[_0x4f7e99(0xb0)];let _0x1cdb11=_0x45149c[_0x4f7e99(0xa4)];for(let _0x4e7405=0x0;_0x4e7405<_0x292237;_0x4e7405++){_0x21dc11=parseGeoPackage(_0x1cdb11,_0x276617,_0xc2e11,_0x21dc11);}let _0x259a82=_0xc2e11[_0x4f7e99(0xde)](_0x21dc11,!![]);_0x21dc11+=Uint32Array[_0x4f7e99(0xb0)];let _0x276ed0=_0xc2e11[_0x4f7e99(0xde)](_0x21dc11,!![]);_0x21dc11+=Uint32Array['BYTES_PER_ELEMENT'];for(let _0x89ecac=0x0;_0x89ecac<_0x276ed0;_0x89ecac++){let _0x13cd2b=_0xc2e11[_0x4f7e99(0xde)](_0x21dc11,!![]);_0x21dc11+=Uint32Array['BYTES_PER_ELEMENT'];let _0x445a3e=_0xc2e11[_0x4f7e99(0xde)](_0x21dc11,!![]);_0x21dc11+=Uint32Array[_0x4f7e99(0xb0)];let _0x462d6a={},_0x353620=_0x1cdb11[_0x13cd2b][_0x4f7e99(0x9b)][_0x4f7e99(0xa0)];if(_0x353620===-0x1){let _0x2ad2a0=new Float32Array(_0x1cdb11[_0x13cd2b][_0x4f7e99(0x9b)][_0x4f7e99(0x10a)]);for(let _0x9e2c46=0x0;_0x9e2c46<_0x445a3e;_0x9e2c46++){let _0x49a12f=_0xc2e11['getUint32'](_0x21dc11,!![]);_0x21dc11+=Uint32Array[_0x4f7e99(0xb0)];let _0x440d01=_0xc2e11[_0x4f7e99(0xde)](_0x21dc11,!![]);_0x21dc11+=Uint32Array[_0x4f7e99(0xb0)];let _0x482255=0x0,_0x3bbd82=0x0;_0x462d6a[_0x49a12f]=[];for(let _0x1e4bac=0x0;_0x1e4bac<_0x440d01;_0x1e4bac++){_0x3bbd82=_0xc2e11[_0x4f7e99(0xde)](_0x21dc11,!![]),_0x21dc11+=Uint32Array[_0x4f7e99(0xb0)],_0x482255=_0xc2e11[_0x4f7e99(0xde)](_0x21dc11,!![]),_0x21dc11+=Uint32Array['BYTES_PER_ELEMENT'];if(_0x2ad2a0[_0x4f7e99(0xfb)])_0x2ad2a0[_0x4f7e99(0xfb)](_0x9e2c46,_0x3bbd82,_0x3bbd82+_0x482255);else{let _0x820ee8=_0x3bbd82+_0x3bbd82;for(let _0x3b92f2=_0x3bbd82;_0x3b92f2<_0x820ee8;_0x3b92f2++){_0x2ad2a0[_0x3b92f2]=_0x9e2c46;}}_0x462d6a[_0x49a12f][_0x4f7e99(0xb5)]({'vertexColorOffset':_0x3bbd82,'vertexColorCount':_0x482255,'batchId':_0x9e2c46});}}createBatchIdAttribute(_0x1cdb11[_0x13cd2b][_0x4f7e99(0x9b)],_0x2ad2a0,undefined);}else{let _0xf1021e=_0x1cdb11[_0x13cd2b][_0x4f7e99(0x9b)][_0x4f7e99(0xdf)],_0x5c84bf=_0x1cdb11[_0x13cd2b][_0x4f7e99(0x9b)]['instanceBuffer'],_0x1daac8=_0x1cdb11[_0x13cd2b]['vertexPackage'][_0x4f7e99(0xc4)],_0x433b87=new Float32Array(_0xf1021e),_0x29da39=0x0;for(let _0x5609af=0x0;_0x5609af<_0x445a3e;_0x5609af++){let _0x5a0f4e=_0xc2e11['getUint32'](_0x21dc11,!![]);_0x21dc11+=Uint32Array[_0x4f7e99(0xb0)];let _0xbce761=_0xc2e11[_0x4f7e99(0xde)](_0x21dc11,!![]);_0x21dc11+=Uint32Array[_0x4f7e99(0xb0)],_0x462d6a[_0x5a0f4e]=[];for(let _0x2998dd=0x0;_0x2998dd<_0xbce761;_0x2998dd++){let _0x25da1d=_0xc2e11['getUint32'](_0x21dc11,!![]);_0x21dc11+=Uint32Array[_0x4f7e99(0xb0)],_0x433b87[_0x29da39]=_0x29da39,_0x462d6a[_0x5a0f4e]===undefined&&(_0x462d6a[_0x5a0f4e]=[{'vertexColorCount':0x1,'instanceIds':[],'vertexColorOffset':_0x29da39}]),_0x462d6a[_0x5a0f4e]['instanceIds']['push'](_0x25da1d),_0x29da39++;}}createBatchIdAttribute(_0x1cdb11[_0x13cd2b][_0x4f7e99(0x9b)],_0x433b87,0x1);}_0x1cdb11[_0x13cd2b]['pickInfo']=_0x462d6a;}let _0x16528a=_0xc2e11['getUint32'](_0x21dc11,!![]);_0x21dc11+=Uint32Array[_0x4f7e99(0xb0)];let _0x245953=_0xc2e11[_0x4f7e99(0xde)](_0x21dc11,!![]);_0x21dc11+=Uint32Array['BYTES_PER_ELEMENT'];let _0x1fef17={};for(let _0x4e19aa=0x0;_0x4e19aa<_0x245953;_0x4e19aa++){let _0x447a2a=_0xc2e11[_0x4f7e99(0xde)](_0x21dc11,!![]);_0x21dc11+=Uint32Array['BYTES_PER_ELEMENT'];let _0x16b6e0=_0xc2e11['getUint32'](_0x21dc11,!![]);_0x21dc11+=Uint32Array[_0x4f7e99(0xb0)];let _0x533213=_0xc2e11['getUint32'](_0x21dc11,!![]);_0x21dc11+=Uint32Array['BYTES_PER_ELEMENT'];let _0x5d8d53=_0xc2e11['getUint32'](_0x21dc11,!![]);_0x21dc11+=Uint32Array[_0x4f7e99(0xb0)];let _0x28ece9=_0xc2e11['getUint32'](_0x21dc11,!![]);_0x21dc11+=Uint32Array[_0x4f7e99(0xb0)];let _0x7365af=_0xc2e11[_0x4f7e99(0xde)](_0x21dc11,!![]);_0x21dc11+=Uint32Array['BYTES_PER_ELEMENT'];let _0x2c24b6=_0x7365af===_0x1f272b['RGB']||_0x7365af===_0x1f272b['BGR']?Cesium[_0x4f7e99(0xa9)]['RGB_DXT1']:Cesium[_0x4f7e99(0xa9)]['RGBA_DXT5'],_0x5dc1ec=new Uint8Array(_0x336b0d,_0x21dc11,_0x28ece9);_0x1fef17[_0x447a2a]={'id':_0x447a2a,'width':_0x16b6e0,'height':_0x533213,'compressType':_0x5d8d53,'nFormat':_0x7365af,'arrayBufferView':_0x5dc1ec,'internalFormat':_0x2c24b6},_0x21dc11+=_0x28ece9;}return _0x45149c[_0x4f7e99(0xa5)]=_0x1fef17,_0x45149c;};export default S3ModelOldParser;