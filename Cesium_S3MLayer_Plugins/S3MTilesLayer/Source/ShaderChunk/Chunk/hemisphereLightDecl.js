var _0x233e07=(function(){var _0x12916d=!![];return function(_0x141248,_0x5ccb73){var _0x187af0=_0x12916d?function(){if(_0x5ccb73){var _0x4a2d89=_0x5ccb73['apply'](_0x141248,arguments);return _0x5ccb73=null,_0x4a2d89;}}:function(){};return _0x12916d=![],_0x187af0;};}()),_0x141f4e=_0x233e07(this,function(){return _0x141f4e['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x141f4e)['search']('(((.+)+)+)+$');});_0x141f4e();export default'\x0a#ifdef\x20HAS_HEMISPHERE_LIGHTS\x0a\x0auniform\x20vec3\x20uSkyColor[\x20HEMISPHERE_LIGHTS\x20];\x0auniform\x20vec3\x20uGroundColor[\x20HEMISPHERE_LIGHTS\x20];\x0auniform\x20vec3\x20uHemisphereLightDirectionEC[\x20HEMISPHERE_LIGHTS\x20];\x0a\x20\x20\x20\x20\x0astruct\x20HemisphereLight\x20{\x0a\x20\x20\x20\x20vec3\x20direction;\x0a\x20\x20\x20\x20vec3\x20skyColor;\x0a\x20\x20\x20\x20vec3\x20groundColor;\x0a};\x0a\x0avec3\x20getHemisphereLightIrradiance(\x20const\x20in\x20HemisphereLight\x20hemiLight,\x20const\x20in\x20GeometricContext\x20geometry\x20)\x20{\x0a\x20\x20\x20\x20float\x20dotNL\x20=\x20dot(\x20geometry.normal,\x20hemiLight.direction\x20);\x0a\x20\x20\x20\x20float\x20hemiDiffuseWeight\x20=\x200.5\x20*\x20dotNL\x20+\x200.5;\x0a\x20\x20\x20\x20vec3\x20irradiance\x20=\x20mix(\x20hemiLight.groundColor,\x20hemiLight.skyColor,\x20hemiDiffuseWeight\x20);\x0a\x20\x20\x20\x20return\x20irradiance;\x0a}\x0a\x0a#endif\x0a';