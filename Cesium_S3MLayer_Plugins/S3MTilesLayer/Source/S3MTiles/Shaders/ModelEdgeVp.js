var _0x44c8=['480316wSElBC','1436677xUOIlQ','3VyfNxb','5876HZNSSO','363477NSUguF','1fiPkYb','44545IwZXXy','1129169NQmEKj','41fvIPIW','104BntOlE','237525hUlKRB'];function _0x1235(_0x13c98a,_0xb0226e){_0x13c98a=_0x13c98a-0xb0;var _0x44c8db=_0x44c8[_0x13c98a];return _0x44c8db;}(function(_0x309596,_0x30ffab){var _0x528acd=_0x1235;while(!![]){try{var _0x256535=parseInt(_0x528acd(0xb7))*parseInt(_0x528acd(0xb4))+parseInt(_0x528acd(0xb6))+-parseInt(_0x528acd(0xb0))*parseInt(_0x528acd(0xb2))+-parseInt(_0x528acd(0xba))*-parseInt(_0x528acd(0xb1))+-parseInt(_0x528acd(0xb9))+-parseInt(_0x528acd(0xb8))*parseInt(_0x528acd(0xb3))+parseInt(_0x528acd(0xb5));if(_0x256535===_0x30ffab)break;else _0x309596['push'](_0x309596['shift']());}catch(_0x30c719){_0x309596['push'](_0x309596['shift']());}}}(_0x44c8,0xe9d73));export default'precision\x20highp\x20float;\x0aconst\x20float\x20uPixelRatio\x20=\x201.0;\x0a//\x20Inputs\x0aattribute\x20vec3\x20aPosition0;\x0aattribute\x20vec3\x20aPosition1;\x0a//attribute\x20float\x20aVariantOffset;\x0a//attribute\x20float\x20aVariantStroke;\x0a//attribute\x20float\x20aVariantExtension;\x0a\x0a#ifdef\x20SILHOUETTE\x0aattribute\x20vec3\x20aNormalA;\x0aattribute\x20vec3\x20aNormalB;\x0a#else\x20/*\x20SILHOUETTE\x20*/\x0aattribute\x20vec3\x20aNormal;\x0a#endif\x20/*\x20SILHOUETTE\x20*/\x0a\x0aattribute\x20vec2\x20aSideness;\x0a//attribute\x20vec2\x20aPackedAttributes;\x0a\x0astruct\x20UnpackedAttributes\x0a{\x0a\x20\x20\x20\x20vec2\x20sideness;\x0a\x20\x20\x20\x20vec2\x20sidenessNorm;\x0a\x20\x20\x20\x20float\x20lineWidthPixels;\x0a\x20\x20\x20\x20float\x20extensionLengthPixels;\x0a#if\x20(MODE\x20==\x202)\x0a\x20\x20\x20\x20float\x20type;\x0a#endif\x0a};\x0a\x0a//\x20Output\x20required\x20to\x20compute\x20color\x0avarying\x20vec4\x20vColor;\x0a//\x20Output\x20required\x20to\x20compute\x20distance\x20to\x20line/caps\x0avarying\x20vec3\x20vPosition;\x20\x0avarying\x20vec3\x20vViewPosition;\x0avarying\x20float\x20vRadius;\x0avarying\x20float\x20vLineLengthPixels;\x0avarying\x20float\x20vSizeFalloffFactor;\x0avarying\x20float\x20vDistanceFromEye;\x0a\x0auniform\x20float\x20uLineWidth;\x0auniform\x20vec4\x20uLineColor;\x0aconst\x20vec2\x20uDepthBias\x20=\x20vec2(0.5,\x20-4e-4);\x0a\x0a//\x20Utility\x20function\x20to\x20check\x20for\x20NaN\x20values\x0abool\x20isNaN(float\x20val)\x0a{\x0a\x20\x20\x20\x20return\x20(\x20val\x20<\x200.0\x20||\x200.0\x20<\x20val\x20||\x20val\x20==\x200.0\x20)\x20?\x20false\x20:\x20true;\x0a\x20\x20\x20\x20//\x20important:\x20some\x20nVidias\x20failed\x20to\x20cope\x20with\x20version\x20below.\x0a\x20\x20\x20\x20//\x20Probably\x20wrong\x20optimization.\x0a\x20\x20\x20\x20/*return\x20(\x20val\x20<=\x200.0\x20||\x200.0\x20<=\x20val\x20)\x20?\x20false\x20:\x20true;*/\x0a}\x0a\x0avec2\x20calculateProjectedBiasXY(vec4\x20projPos,\x20vec3\x20worldNormal)\x0a{\x0a\x20\x20\x20\x20float\x20offsetXY\x20=\x20uDepthBias.x;\x0a\x20\x20\x20\x20float\x20offsetZ\x20\x20=\x20uDepthBias.y;\x0a\x20\x20\x20\x20vec4\x20projNormal\x20=\x20czm_projection\x20*\x20czm_view\x20*\x20vec4(worldNormal,\x200.0);\x0a\x20\x20\x20\x20return\x20offsetXY\x20*\x20projPos.w\x20*\x202.0\x20/\x20czm_viewport.zw\x20*\x20normalize(projNormal.xyz).xy;\x0a}\x0a\x0a//\x20A\x20z-offset,\x20using\x20a\x20depth\x20based\x20heuristic.\x0afloat\x20calculateProjectedBiasZ(vec4\x20projPos)\x0a{\x0a\x20\x20\x20\x20float\x20fProjZ\x20=\x20projPos.z\x20/\x20projPos.w;\x0a\x20\x20\x20\x20if(fProjZ\x20<\x200.1)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x200.0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20float\x20offsetZ\x20=\x20uDepthBias.y;\x0a\x20\x20\x20\x20return\x20sqrt(projPos.z)\x20*\x20offsetZ;\x0a}\x0a\x0avec4\x20adjustProjectedPosition(vec4\x20projPos,\x20vec3\x20worldNormal,\x20float\x20lineWidth)\x0a{\x0a\x20\x20\x20\x20vec2\x20offsetXY\x20=\x20calculateProjectedBiasXY(projPos,\x20worldNormal);\x0a\x20\x20\x20\x20//\x20we\x20currently\x20have\x20to\x20do\x20this\x20check\x20because\x20some\x20geometries\x20come\x20with\x200\x20length\x20edge\x20normals.\x0a\x20\x20\x20\x20if\x20(!isNaN(offsetXY.x)\x20&&\x20!isNaN(offsetXY.y))\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20projPos.xy\x20+=\x20offsetXY;\x0a\x20\x20\x20\x20}\x0a#ifdef\x20LOG_DEPTH\x0a\x20\x20\x20\x20vDistanceFromEye\x20=\x20projPos.w;\x0a#else\x0a\x20\x20\x20\x20projPos.z\x20+=\x20calculateProjectedBiasZ(projPos);\x0a#endif\x0a\x20\x20\x20\x20return\x20projPos;\x0a}\x0a\x0a#if\x20(MODE\x20==\x202\x20||\x20MODE\x20==\x201)\x0auniform\x20vec2\x20uStrokesTextureScale;\x0auniform\x20float\x20uStrokesLog2Resolution;\x0auniform\x20float\x20uStrokeVariants;\x0avarying\x20vec2\x20vStrokeUV;\x0avarying\x20float\x20vLineIndex;\x0avoid\x20calculateStyleOutputsSketch(float\x20lineLength,\x20UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20vec2\x20sidenessNorm\x20=\x20unpackedAttributes.sidenessNorm;\x0a\x20\x20\x20\x20float\x20lineIndex\x20=\x20clamp(ceil(log2(lineLength)),\x200.0,\x20uStrokesLog2Resolution);\x0a\x20\x20\x20\x20vStrokeUV\x20=\x20vec2(exp2(lineIndex)\x20*\x20sidenessNorm.y,\x20lineIndex\x20*\x20uStrokeVariants\x20+\x20aVariantStroke\x20+\x200.5)\x20*\x20uStrokesTextureScale;\x0a\x20\x20\x20\x20vStrokeUV.x\x20+=\x20aVariantOffset;\x0a\x20\x20\x20\x20vLineIndex\x20=\x20lineIndex;\x0a}\x0a#endif\x0a\x0a#if\x20(MODE\x20==\x200)\x0avoid\x20calculateStyleOutputs(vec4\x20viewPosV0,\x20vec4\x20viewPosV1,\x20vec4\x20worldPosV0,\x20vec4\x20worldPosV1,\x20vec4\x20projPos,\x20vec3\x20worldNormal,\x20UnpackedAttributes\x20unpackedAttributes)\x0a{}\x0a#elif\x20(MODE\x20==\x201)\x0avoid\x20calculateStyleOutputs(vec4\x20viewPosV0,\x20vec4\x20viewPosV1,\x20vec4\x20worldPosV0,\x20vec4\x20worldPosV1,\x20vec4\x20projPos,\x20vec3\x20worldNormal,\x20UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20calculateStyleOutputsSketch(vLineLengthPixels,\x20unpackedAttributes);\x0a}\x0a#elif\x20(MODE\x20==\x202)\x0avarying\x20float\x20vType;\x0avoid\x20calculateStyleOutputs(vec4\x20viewPosV0,\x20vec4\x20viewPosV1,\x20vec4\x20worldPosV0,\x20vec4\x20worldPosV1,\x20vec4\x20projPos,\x20vec3\x20worldNormal,\x20UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20vType\x20=\x20unpackedAttributes.type;\x0a\x20\x20\x20\x20if\x20(unpackedAttributes.type\x20<=\x200.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20calculateStyleOutputsSketch(vLineLengthPixels,\x20unpackedAttributes);\x0a\x20\x20\x20\x20}\x0a}\x0a#endif\x0a\x0a\x0a//\x20Solid\x0a#if\x20(MODE\x20==\x202\x20||\x20MODE\x20==\x200)\x0afloat\x20calculateLineAmplitudeSolid()\x0a{\x0a\x20\x20\x20\x20return\x200.0;\x0a}\x0a#endif\x0a#if\x20(MODE\x20==\x200)\x0afloat\x20calculateLineAmplitude(UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20return\x20calculateLineAmplitudeSolid();\x0a}\x0a#endif\x0a//\x20Sketch\x0a#if\x20(MODE\x20==\x202\x20||\x20MODE\x20==\x201)\x0a\x20\x20\x20\x20uniform\x20float\x20uStrokesAmplitude;\x0afloat\x20calculateLineAmplitudeSketch()\x0a{\x0a\x20\x20\x20\x20return\x20uStrokesAmplitude;\x0a}\x0a#endif\x0a#if\x20(MODE\x20==\x201)\x0afloat\x20calculateLineAmplitude(UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20return\x20calculateLineAmplitudeSketch();\x0a}\x0a#endif\x0a//\x20Uber\x0a#if\x20(MODE\x20==\x202)\x0afloat\x20calculateLineAmplitude(UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20float\x20type\x20=\x20unpackedAttributes.type;\x0a\x20\x20\x20\x20if\x20(type\x20<=\x200.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20calculateLineAmplitudeSketch();\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20else\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20calculateLineAmplitudeSolid();\x0a\x20\x20\x20\x20}\x0a}\x0a#endif\x0a\x0a\x0auniform\x20float\x20uDistanceFalloffFactor;\x0afloat\x20distanceBasedPerspectiveFactor(float\x20distance)\x0a{\x0a\x20\x20\x20\x20return\x20clamp(sqrt(uDistanceFalloffFactor\x20/\x20distance),\x200.0,\x201.0);\x0a}\x0a\x0a#define\x20COMPONENT_COLOR_FIELD_OFFSET\x200.0\x0a#define\x20COMPONENT_OTHER_FIELDS_OFFSET\x201.0\x0a#define\x20COMPONENT_FIELD_COUNT\x202.0\x0a#define\x20LINE_WIDTH_FRACTION_FACTOR\x208.0\x0a#define\x20EXTENSION_LENGTH_OFFSET\x20128.0\x0a#define\x20COMPONENT_TEX_WIDTH\x204096.0\x0a\x0astruct\x20ComponentData\x0a{\x0a\x20\x20\x20\x20float\x20lineWidth;\x0a\x20\x20\x20\x20float\x20extensionLength;\x0a\x20\x20\x20\x20float\x20type;\x0a};\x0a\x0a\x0aComponentData\x20readComponentData()\x0a{\x0a\x20\x20\x20\x20return\x20ComponentData(uLineWidth,\x200.0,\x200.0);\x0a}\x0a\x0avec3\x20modelToWorldNormal(vec3\x20normal)\x0a{\x0a\x20\x20\x20\x20return\x20(czm_model\x20*\x20vec4(normal,\x200.0)).xyz;\x0a}\x0a\x0avec3\x20silhouetteWorldNormal(vec3\x20normalA,\x20vec3\x20normalB)\x0a{\x0a\x20\x20\x20\x20return\x20modelToWorldNormal(normalize(normalA\x20+\x20normalB));\x0a}\x0a\x0a//\x20Fall-off\x20extension\x20length\x20for\x20shorter\x20strokes,\x20starting\x20from\x20strokes\x20that\x20are\x20256\x20size,\x0a//\x20fall-off\x20exponentially\x0afloat\x20calculateExtensionLength(float\x20extensionLength,\x20float\x20lineLength)\x0a{\x0a\x20\x20\x20\x20return\x20extensionLength\x20/\x20(log2(max(1.0,\x20256.0\x20/\x20lineLength))\x20*\x200.2\x20+\x201.0);\x0a}\x0a\x0a#ifdef\x20SILHOUETTE\x0a//\x20#uniforms:\x20czm_view,\x20czm_model\x0abool\x20isSilhouetteEdge(vec4\x20viewPos,\x20vec3\x20normalA,\x20vec3\x20normalB)\x0a{\x0a//\x20transform\x20the\x20two\x20face\x20normals\x0a\x20\x20\x20\x20vec3\x20viewNormalA\x20=\x20(czm_view\x20*\x20czm_model\x20*\x20vec4(normalA,\x200.0)).xyz;\x0a\x20\x20\x20\x20vec3\x20viewNormalB\x20=\x20(czm_view\x20*\x20czm_model\x20*\x20vec4(normalB,\x200.0)).xyz;\x0a//\x20compute\x20the\x20direction\x20from\x20the\x20edge\x20to\x20the\x20camera\x0a\x20\x20\x20\x20vec3\x20viewDir\x20=\x20-viewPos.xyz;\x0a//\x20check\x20which\x20of\x20the\x20two\x20faces\x20are\x20visible\x0a//\x20display\x20the\x20edge\x20if\x20exactly\x20one\x20of\x20the\x20two\x20is\x20visible\x0a\x20\x20\x20\x20float\x20faceAVisible\x20=\x20dot(viewDir,\x20viewNormalA);\x0a//\x20positive\x20if\x20visible\x0a\x20\x20\x20\x20float\x20faceBVisible\x20=\x20dot(viewDir,\x20viewNormalB);\x0a//\x20positive\x20if\x20visible\x0a//\x201\x20if\x20exactly\x20one\x20face\x20visible,\x200\x20otherwise\x0a\x20\x20\x20\x20return\x20faceAVisible\x20*\x20faceBVisible\x20<\x200.0;\x0a}\x0a#endif\x20/*\x20SILHOUETTE\x20*/\x0a\x0avoid\x20clipLineSegmentToNearPlane(vec3\x20p0,vec3\x20p1,out\x20bool\x20clipped,out\x20bool\x20culledByNearPlane,out\x20vec4\x20clippedPositionEC)\x0a{\x0a\x20\x20\x20\x20culledByNearPlane\x20=\x20false;\x0a\x20\x20\x20\x20clipped\x20=\x20false;\x0a\x20\x20\x20\x20vec3\x20p0ToP1\x20=\x20p1\x20-\x20p0;\x0a\x20\x20\x20\x20float\x20magnitude\x20=\x20length(p0ToP1);\x0a\x20\x20\x20\x20vec3\x20direction\x20=\x20normalize(p0ToP1);\x0a\x20\x20\x20\x20float\x20endPoint0Distance\x20=\x20\x20czm_currentFrustum.x\x20+\x20p0.z;\x0a\x20\x20\x20\x20float\x20denominator\x20=\x20-direction.z;\x0a\x20\x20\x20\x20if\x20(endPoint0Distance\x20>\x200.0\x20&&\x20abs(denominator)\x20<\x20czm_epsilon7)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20culledByNearPlane\x20=\x20true;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20else\x20if\x20(endPoint0Distance\x20>\x200.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20t\x20=\x20endPoint0Distance\x20/\x20denominator;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(t\x20<\x200.0\x20||\x20t\x20>\x20magnitude)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20culledByNearPlane\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20p0\x20=\x20p0\x20+\x20t\x20*\x20direction;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20p0.z\x20=\x20min(p0.z,\x20-czm_currentFrustum.x);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipped\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20clippedPositionEC\x20=\x20vec4(p0,\x201.0);\x0a}\x0a\x0afloat\x20writeNonPerspective(float\x20value,\x20float\x20w)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20w;\x0a}\x0a\x0avec2\x20writeNonPerspective(vec2\x20value,\x20float\x20w)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20w;\x0a}\x0a\x0avec3\x20writeNonPerspective(vec3\x20value,\x20float\x20w)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20w;\x0a}\x0a\x0avec4\x20writeNonPerspective(vec4\x20value,\x20float\x20w)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20w;\x0a}\x0a\x0avec4\x20calculateGeometricOutputs(vec4\x20viewPosV0,\x20vec4\x20viewPosV1,\x20vec4\x20worldPosV0,\x20vec4\x20worldPosV1,\x20vec3\x20worldNormal,\x20UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20vec2\x20sideness\x20=\x20unpackedAttributes.sideness;\x0a\x20\x20\x20\x20vec2\x20sidenessNorm\x20=\x20unpackedAttributes.sidenessNorm;\x0a\x20\x20\x20\x20vec4\x20clippedViewPosV0;\x20\x20\x20\x20bool\x20clippedV0,culledV0;\x20\x20\x20\x20clipLineSegmentToNearPlane(viewPosV0.xyz,\x20viewPosV1.xyz,\x20clippedV0,\x20culledV0,\x20clippedViewPosV0);\x20\x20\x20\x20vec4\x20clippedViewPosV1;\x20\x20\x20\x20bool\x20clippedV1,\x20culledV1;\x20\x20\x20\x20clipLineSegmentToNearPlane(viewPosV1.xyz,\x20viewPosV0.xyz,\x20clippedV1,\x20culledV1,\x20clippedViewPosV1);\x20\x20\x20\x20vec4\x20viewPos\x20=\x20mix(clippedViewPosV0,\x20clippedViewPosV1,\x20sidenessNorm.y);\x0a\x20\x20\x20\x20vViewPosition\x20=\x20viewPos.xyz\x20/\x20viewPos.w;\x0a\x20\x20\x20\x20vec4\x20projPosV0\x20=\x20czm_projection\x20*\x20clippedViewPosV0;\x0a\x20\x20\x20\x20vec4\x20projPosV1\x20=\x20czm_projection\x20*\x20clippedViewPosV1;\x0a\x20\x20\x20\x20vec4\x20projPos\x20=\x20czm_projection\x20*\x20viewPos;\x0a\x20\x20\x20\x20vec3\x20screenSpaceLineNDC\x20=\x20(projPosV1.xyz\x20/\x20projPosV1.w\x20-\x20projPosV0.xyz\x20/\x20projPosV0.w);\x0a\x20\x20\x20\x20vec2\x20uNDCToPixel\x20=\x20vec2(czm_viewport.z\x20/\x202.0,\x20czm_viewport.w\x20/\x202.0);\x0a\x20\x20\x20\x20vec2\x20screenSpaceLinePixels\x20=\x20screenSpaceLineNDC.xy\x20*\x20uNDCToPixel;\x0a\x20\x20\x20\x20float\x20lineLengthPixels\x20=\x20length(screenSpaceLinePixels);\x0a\x20\x20\x20\x20float\x20dzPerPixel\x20=\x20screenSpaceLineNDC.z\x20/\x20lineLengthPixels;\x0a\x20\x20\x20\x20vec2\x20screenSpaceDirection\x20=\x20screenSpaceLinePixels\x20/\x20lineLengthPixels;\x0a\x20\x20\x20\x20vec2\x20perpendicularScreenSpaceDirection\x20=\x20vec2(screenSpaceDirection.y,\x20-screenSpaceDirection.x)\x20*\x20sideness.x;\x0a\x20\x20\x20\x20float\x20falloffFactor\x20=\x20distanceBasedPerspectiveFactor(-viewPos.z)\x20*\x20uPixelRatio;\x0a\x20\x20\x20\x20float\x20lineWidthPixels\x20=\x20unpackedAttributes.lineWidthPixels\x20*\x20falloffFactor;\x0a\x20\x20\x20\x20float\x20extensionLengthPixels\x20=\x20calculateExtensionLength(unpackedAttributes.extensionLengthPixels,\x20lineLengthPixels)\x20*\x20falloffFactor;\x0a\x20\x20\x20\x20float\x20lineAmplitudePixels\x20=\x20calculateLineAmplitude(unpackedAttributes)\x20*\x20uPixelRatio;\x0a\x20\x20\x20\x20vSizeFalloffFactor\x20=\x20falloffFactor;\x0a\x20\x20\x20\x20float\x20lineWidthAndAmplitudePixels\x20=\x20lineWidthPixels\x20+\x20lineAmplitudePixels\x20+\x20lineAmplitudePixels;\x0a\x20\x20\x20\x20float\x20extendedLineLengthPixels\x20=\x20lineLengthPixels\x20+\x20extensionLengthPixels\x20+\x20extensionLengthPixels;\x0a#ifdef\x20ANTIALIASING\x0a\x20\x20\x20\x20const\x20float\x20aaPaddingPixels\x20=\x201.0;\x0a\x20\x20\x20\x20//\x20Line\x20size\x20with\x20padding\x0a\x20\x20\x20\x20float\x20halfAAPaddedLineWidthAndAmplitudePixels\x20=\x20lineWidthAndAmplitudePixels\x20*\x200.5\x20+\x20aaPaddingPixels;\x0a\x20\x20\x20\x20float\x20aaPaddedRoundedCapSizePixels\x20=\x20lineWidthPixels\x20*\x200.5\x20+\x20aaPaddingPixels;\x0a\x20\x20\x20\x20//\x20Line\x20length\x20with\x20padding\x0a\x20\x20\x20\x20float\x20aaPaddedLineLengthPixels\x20=\x20extendedLineLengthPixels\x20+\x20aaPaddingPixels\x20+\x20aaPaddingPixels;\x0a\x20\x20\x20\x20float\x20halfAAPaddedLineLengthPixels\x20=\x20aaPaddedLineLengthPixels\x20*\x200.5;\x0a#else\x20/*\x20ANTIALIASING\x20*/\x0a\x20\x20\x20\x20//\x20Even\x20if\x20there\x20is\x20no\x20AA,\x20we\x20still\x20want\x20to\x20do\x20proper\x20<1px\x20rendering,\x0a\x20\x20\x20\x20//\x20so\x20we\x20effectively\x20clamp\x20the\x20pixel\x20sizes\x20to\x20minimum\x20of\x201px\x20and\x20compute\x0a\x20\x20\x20\x20//\x20coverage\x20in\x20the\x20fragment\x20shader\x20\x20\x20\x0a\x20\x20\x20\x20float\x20halfAAPaddedLineWidthAndAmplitudePixels\x20=\x20max(lineWidthAndAmplitudePixels,\x201.0)\x20*\x200.5;\x0a\x20\x20\x20\x20float\x20aaPaddedRoundedCapSizePixels\x20=\x20max(lineWidthPixels,\x201.0)\x20*\x200.5;\x0a\x20\x20\x20\x20float\x20halfAAPaddedLineLengthPixels\x20=\x20max(extendedLineLengthPixels,\x201.0)\x20*\x200.5;\x0a#endif\x20/*\x20ANTIALIASING\x20*/\x0a\x20\x20\x20\x20//\x20Half\x20line\x20width\x20in\x20NDC\x20including\x20padding\x20for\x20anti\x20aliasing\x0a\x20\x20\x20\x20vec2\x20uPixelToNDC\x20=\x20vec2(2.0\x20/\x20czm_viewport.z,\x202.0\x20/\x20czm_viewport.w);\x0a\x20\x20\x20\x20vec2\x20halfAAPaddedLineWidthAndAmplitudeNDC\x20=\x20halfAAPaddedLineWidthAndAmplitudePixels\x20*\x20uPixelToNDC;\x0a\x20\x20\x20\x20vec2\x20aaPaddedRoundedCapSizeNDC\x20=\x20aaPaddedRoundedCapSizePixels\x20*\x20uPixelToNDC;\x0a\x20\x20\x20\x20vec2\x20extensionLengthNDC\x20=\x20extensionLengthPixels\x20*\x20uPixelToNDC;\x0a\x20\x20\x20\x20//\x20Compute\x20screen\x20space\x20position\x20of\x20vertex,\x20offsetting\x20for\x20line\x20size\x20and\x20end\x20caps\x0a\x20\x20\x20\x20vec2\x20ndcOffset\x20=\x20(screenSpaceDirection\x20*\x20sideness.y\x20*\x20(aaPaddedRoundedCapSizeNDC\x20+\x20extensionLengthNDC)\x20+\x20perpendicularScreenSpaceDirection\x20*\x20halfAAPaddedLineWidthAndAmplitudeNDC);\x0a\x20\x20\x20\x20projPos.xy\x20+=\x20ndcOffset\x20*\x20projPos.w;\x0a\x20\x20\x20\x20projPos.z\x20+=\x20(dzPerPixel\x20*\x20(aaPaddedRoundedCapSizePixels\x20+\x20extensionLengthPixels))\x20*\x20sideness.y\x20*\x20projPos.w;\x0a\x20\x20\x20\x20projPos\x20=\x20adjustProjectedPosition(projPos,\x20worldNormal,\x201.0\x20+\x20max((lineWidthAndAmplitudePixels\x20-\x201.0)\x20*\x200.5,\x200.0));\x0a\x20\x20\x20\x20//\x20Line\x20length\x20with\x20end\x20caps\x0a\x20\x20\x20\x20float\x20aaPaddedLineWithCapsLengthPixels\x20=\x20extendedLineLengthPixels\x20+\x20aaPaddedRoundedCapSizePixels\x20+\x20aaPaddedRoundedCapSizePixels;\x0a\x20\x20\x20\x20float\x20pixelPositionAlongLine\x20=\x20aaPaddedLineWithCapsLengthPixels\x20*\x20sidenessNorm.y\x20-\x20aaPaddedRoundedCapSizePixels;\x0a\x20\x20\x20\x20//\x20Position\x20in\x20pixels\x20with\x20origin\x20at\x20first\x20vertex\x20of\x20line\x20segment\x0a\x20\x20\x20\x20//\x20The\x20line\x20width\x20radius\x20in\x20pixels\x0a\x20\x20\x20\x20vRadius\x20=\x20lineWidthPixels\x20*\x200.5;\x0a\x20\x20\x20\x20vLineLengthPixels\x20=\x20extendedLineLengthPixels;\x0a\x20\x20\x20\x20vPosition\x20=\x20writeNonPerspective(vec3(halfAAPaddedLineWidthAndAmplitudePixels\x20*\x20sideness.x,\x20pixelPositionAlongLine,\x20pixelPositionAlongLine\x20/\x20extendedLineLengthPixels),\x20projPos.w);\x0a#ifdef\x20SILHOUETTE\x0a\x20\x20\x20\x20gl_Position\x20=\x20isSilhouetteEdge(viewPosV0,\x20aNormalA,\x20aNormalB)\x20?\x20projPos\x20:\x20vec4(10.0,\x2010.0,\x2010.0,\x201.0);\x0a#else\x20/*\x20SILHOUETTE\x20*/\x0a\x20\x20\x20\x20gl_Position\x20=\x20projPos;\x0a#endif\x20/*\x20SILHOUETTE\x20*/\x0a\x0a#if\x20(MODE\x20==\x202)\x0a\x20\x20\x20\x20if\x20(unpackedAttributes.type\x20<=\x200.0\x20&&\x20lineLengthPixels\x20<=\x203.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20vec4(10.0,\x2010.0,\x2010.0,\x201.0);\x0a\x20\x20\x20\x20}\x0a#elif\x20(MODE\x20==\x201)\x0a\x20\x20\x20\x20if\x20(lineLengthPixels\x20<=\x203.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20vec4(10.0,\x2010.0,\x2010.0,\x201.0);\x20\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x20\x20\x20\x20return\x20projPos;\x0a}\x0a\x0a\x0a#if\x20(MODE\x20==\x202)\x0aUnpackedAttributes\x20unpackAttributes(ComponentData\x20component)\x0a{\x0a\x20\x20\x20\x20vec2\x20sidenessNorm\x20=\x20aSideness;\x0a\x20\x20\x20\x20vec2\x20sideness\x20=\x20sidenessNorm\x20*\x202.0\x20-\x201.0;\x0a\x20\x20\x20\x20float\x20fType\x20=\x20component.type;\x0a\x20\x20\x20\x20float\x20extensionLengthPixels\x20=\x20component.extensionLength;\x0a\x20\x20\x20\x20float\x20lineWidth\x20=\x20component.lineWidth;\x0a\x20\x20\x20\x20if\x20(fType\x20<=\x200.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20extensionLengthPixels\x20*=\x20aVariantExtension\x20*\x202.0\x20-\x201.0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20return\x20UnpackedAttributes(sideness,\x20sidenessNorm,\x20lineWidth,\x20extensionLengthPixels,\x20fType);\x0a}\x0a#else\x20/*\x20(MODE\x20==\x202)\x20*/\x0aUnpackedAttributes\x20unpackAttributes(ComponentData\x20component)\x0a{\x0a\x20\x20\x20\x20vec2\x20sidenessNorm\x20=\x20aSideness;\x0a\x20\x20\x20\x20vec2\x20sideness\x20=\x20sidenessNorm\x20*\x202.0\x20-\x201.0;\x0a\x20\x20\x20\x20float\x20extensionLengthPixels\x20=\x20component.extensionLength;\x0a#if\x20(MODE\x20==\x201)\x0a\x20\x20\x20\x20extensionLengthPixels\x20*=\x20aVariantExtension\x20*\x202.0\x20-\x201.0;\x0a#endif\x0a\x20\x20\x20\x20float\x20lineWidth\x20=\x20component.lineWidth;\x0a\x20\x20\x20\x20return\x20UnpackedAttributes(sideness,\x20sidenessNorm,\x20lineWidth,\x20extensionLengthPixels);\x0a}\x0a#endif\x20/*\x20(MODE\x20==\x202)\x20*/\x0a\x0avarying\x20float\x20fSelected;\x0avoid\x20main()\x0a{\x0a\x20\x20\x20\x20fSelected\x20=\x200.0;\x0a\x20\x20\x20\x20ComponentData\x20component\x20=\x20readComponentData();\x0a\x20\x20\x20\x20UnpackedAttributes\x20unpackedAttributes\x20=\x20unpackAttributes(component);\x0a\x20\x20\x20\x20vec4\x20worldPosV0\x20=\x20czm_model\x20*\x20vec4(aPosition0,\x201.0);\x0a\x20\x20\x20\x20vec4\x20worldPosV1\x20=\x20czm_model\x20*\x20vec4(aPosition1,\x201.0);\x0a\x20\x20\x20\x20vec4\x20viewPosV0\x20=\x20czm_modelView\x20*\x20vec4(aPosition0,\x201.0);\x0a\x20\x20\x20\x20vec4\x20viewPosV1\x20=\x20czm_modelView\x20*\x20vec4(aPosition1,\x201.0);\x0a#ifdef\x20SILHOUETTE\x0a\x20\x20\x20\x20vec3\x20worldNormal\x20=\x20silhouetteWorldNormal(aNormalA,\x20aNormalB);\x0a#else\x20/*\x20SILHOUETTE\x20*/\x0a\x20\x20\x20\x20vec3\x20worldNormal\x20=\x20modelToWorldNormal(aNormal);\x0a#endif\x20/*\x20SILHOUETTE\x20*/\x0a\x20\x20\x20\x20//\x20General\x20geometric\x20computation\x20for\x20all\x20types\x20of\x20edges\x0a\x20\x20\x20\x20vec4\x20projPos\x20=\x20calculateGeometricOutputs(viewPosV0,\x20viewPosV1,\x20worldPosV0,\x20worldPosV1,\x20worldNormal,\x20unpackedAttributes);\x0a\x20\x20\x20\x20vColor\x20=\x20uLineColor;\x0a}';