var _0x2aa9=['319zCzBVw','1316000BzGYuK','44531gFJNEL','11DtWRzI','2576915HTsqTD','175mNpjuC','#ifdef\x20GL_OES_standard_derivatives\x0a#extension\x20GL_OES_standard_derivatives\x20:\x20enable\x0a#endif\x0a\x20\x20\x20\x20varying\x20vec4\x20vColor;\x0a\x20\x20\x20\x20varying\x20vec4\x20vPositionMC;\x0a\x20\x20\x20\x20varying\x20float\x20vPixelDistance;\x0a#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20uniform\x20vec4\x20uSwipeRegion;\x0a\x20\x20\x20\x20void\x20rollerShutter(vec2\x20coord,\x20vec4\x20region)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20f\x20=\x20step(region.xw,\x20coord);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20s\x20=\x20step(coord,\x20region.zy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(f.x\x20*\x20f.y\x20*\x20s.x\x20*\x20s.y\x20<\x201.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a#endif\x0avoid\x20main()\x0a{\x0a#ifdef\x20APPLY_SWIPE\x20\x0a\x20\x20\x20\x20rollerShutter(gl_FragCoord.xy,\x20uSwipeRegion);\x0a#endif\x0a\x09if(vColor.a\x20<\x200.1)\x0a\x09{\x0a\x09\x09discard;\x0a\x09}\x0a\x20\x20\x20\x20gl_FragColor\x20=\x20vColor;\x0a\x20\x20\x20\x20float\x20distanceToCenter\x20=\x20length(gl_PointCoord\x20-\x20vec2(0.5));\x0a\x20\x20\x20\x20float\x20maxDistance\x20=\x20max(0.0,\x200.5\x20-\x20vPixelDistance);\x0a\x20\x20\x20\x20float\x20wholeAlpha\x20=\x201.0\x20-\x20smoothstep(maxDistance,\x200.5,\x20distanceToCenter);\x0a\x20\x20\x20\x20gl_FragColor.a\x20*=\x20wholeAlpha;\x0a\x09if(gl_FragColor.a\x20<\x200.1)\x0a\x09{\x0a\x09\x09discard;\x0a\x09}\x0a#ifdef\x20CLIP\x0a\x20\x20\x20\x20gl_FragColor\x20*=\x20czm_clip(czm_modelView\x20*\x20vec4(vPositionMC.xyz,\x201.0),\x201.0);\x0a#endif\x0a\x20\x20\x20\x20gl_FragColor\x20=\x20czm_gammaCorrect(gl_FragColor);\x0a}','401pYJobU','1009088VUMpAo','7524tbRHeP','1tHvKYw','1763PPqfwt'];var _0x2e0c54=_0x5ba3;(function(_0xfc741a,_0x5b2e76){var _0x54076c=_0x5ba3;while(!![]){try{var _0x32648a=parseInt(_0x54076c(0x1c1))*parseInt(_0x54076c(0x1b7))+-parseInt(_0x54076c(0x1b6))+-parseInt(_0x54076c(0x1be))*parseInt(_0x54076c(0x1c0))+-parseInt(_0x54076c(0x1bc))*-parseInt(_0x54076c(0x1bb))+parseInt(_0x54076c(0x1b8))*parseInt(_0x54076c(0x1b9))+parseInt(_0x54076c(0x1ba))+-parseInt(_0x54076c(0x1bd));if(_0x32648a===_0x5b2e76)break;else _0xfc741a['push'](_0xfc741a['shift']());}catch(_0x1e05f8){_0xfc741a['push'](_0xfc741a['shift']());}}}(_0x2aa9,0xb0718));function _0x5ba3(_0x42515b,_0x2fe834){_0x42515b=_0x42515b-0x1b6;var _0x2aa948=_0x2aa9[_0x42515b];return _0x2aa948;}export default _0x2e0c54(0x1bf);