var _0x2108=['243965XrPcqa','1NXMfXg','57UhBkvX','1ydBlbq','3TIkyQo','413923KdEnCi','241294dheqBa','30755zwAHjs','437601PDEHpY','319936FXXfgy','457755NQPUkd','1MfTzDF','\x0aattribute\x20vec4\x20aPosition;\x0auniform\x20vec4\x20uRect;\x0a#ifdef\x20Mode_Height\x0avarying\x20float\x20vHeight;\x0a#endif\x0a\x0avoid\x20main()\x0a{\x0a\x20\x20\x20vec4\x20vPos\x20=\x20aPosition;\x0a\x20\x20\x20vec2\x20bounds\x20=\x20uRect.zw\x20-\x20uRect.xy;\x0a\x20\x20\x20vPos.xy\x20=\x20(vPos.xy\x20-\x20uRect.xy)\x20/\x20bounds.xy\x20*\x202.0\x20-\x201.0;\x0a\x20\x20\x20gl_Position\x20=\x20vec4(vPos.xy,\x200.5,\x201.0);\x0a#ifdef\x20Mode_Height\x0a\x20\x20\x20vHeight\x20=\x20vPos.z;\x0a#endif\x0a}'];var _0x2c49b5=_0xebae;function _0xebae(_0x54137c,_0x34a56c){_0x54137c=_0x54137c-0xa1;var _0x21084f=_0x2108[_0x54137c];return _0x21084f;}(function(_0x4a2a4a,_0x56fe89){var _0x31c790=_0xebae;while(!![]){try{var _0x2d7b2c=parseInt(_0x31c790(0xa2))+parseInt(_0x31c790(0xab))+parseInt(_0x31c790(0xa3))*parseInt(_0x31c790(0xa7))+-parseInt(_0x31c790(0xa4))*parseInt(_0x31c790(0xac))+-parseInt(_0x31c790(0xa6))*-parseInt(_0x31c790(0xaa))+-parseInt(_0x31c790(0xa1))*-parseInt(_0x31c790(0xa9))+-parseInt(_0x31c790(0xa8))*parseInt(_0x31c790(0xad));if(_0x2d7b2c===_0x56fe89)break;else _0x4a2a4a['push'](_0x4a2a4a['shift']());}catch(_0x3cfb57){_0x4a2a4a['push'](_0x4a2a4a['shift']());}}}(_0x2108,0x598bd));export default _0x2c49b5(0xa5);