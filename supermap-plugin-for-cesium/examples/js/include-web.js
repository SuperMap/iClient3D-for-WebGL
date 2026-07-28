(function () {
    var r = new RegExp("(^|(.*?\\/))(include-web\.js)(\\?|$)"),
        s = document.getElementsByTagName('script'), targetScript;
    for (var i = 0; i < s.length; i++) {
        var src = s[i].getAttribute('src');
        if (src) {
            var m = src.match(r);
            if (m) {
                targetScript = s[i];
                break;
            }
        }
    }

    function inputScript(url) {
        var script = '<script type="text/javascript" src="' + url + '"><' + '/script>';
        document.writeln(script);
    }

    function inputCSS(url) {
        var css = '<link rel="stylesheet" href="' + url + '">';
        document.writeln(css);
    }

    function inArray(arr, item) {
        for (i in arr) {
            if (arr[i] == item) {
                return true;
            }
        }
        return false;
    }

    //加载类库资源文件
    function load() {
        var includes = (targetScript.getAttribute('include') || "").split(",");
        var excludes = (targetScript.getAttribute('exclude') || "").split(",");
        inputScript("../js/tokengenerator.js");
        var jQueryInclude = false;
        if (!inArray(excludes, 'example-i18n')) {
            inputScript("../../web/libs/jquery/jquery.min.js");

            inputScript("../../web/libs/i18next/i18next.min.js");
            inputScript("../../web/libs/jquery-i18next/jquery-i18next.min.js");

            inputScript("../js/utils.js");
            inputScript("../js/localization.js");
            document.writeln("<script> Localization.initializeI18N('../', function () {Localization.localize();Localization.initGlobal();});</script>");
            jQueryInclude = true;
        }

        if (inArray(includes, 'jquery') && !jQueryInclude) {
            inputScript("../../web/libs/jquery/jquery.min.js");
        }

        if (inArray(includes, 'bootstrap')) {
            inputScript("../../web/libs/jquery/jquery.min.js");
            inputCSS("../../web/libs/bootstrap/css/bootstrap.css");
            inputScript("../../web/libs/bootstrap/js/popper.min.js");
            inputScript("../../web/libs/bootstrap/js/bootstrap.js");
        }
        if (inArray(includes, 'bootstrap-css')) {
            inputCSS("../../web/libs/bootstrap/css/bootstrap.css")
        }

        if (inArray(includes, 'bootstrap-js')) {
            inputScript("../../web/libs/bootstrap/js/popper.min.js");
            inputScript("../../web/libs/bootstrap/js/bootstrap.js");
        }

        if (inArray(includes, 'jquery-ui')) {
            inputCSS("../../web/libs/jquery-ui/1.12.1/jquery-ui.css");
            inputScript("../../web/libs/jquery-ui/1.12.1/jquery-ui.min.js");
        }

        if (inArray(includes, 'template')) {
            inputScript("../../web/libs/art-template/template-web.js");
        }

        if (inArray(includes, 'randomcolor')) {
            inputScript("../../web/libs/randomcolor/randomColor.min.js");
        }
        if (inArray(includes, 'papaparse')) {
            inputScript("../../web/libs/papaparse/papaparse.min.js");
        }

        if (inArray(includes, 'moment')) {
            inputScript("../../web/libs/moment.js/moment.min.js");
            inputScript("../../web/libs/moment.js/zh-cn.js");
        }

        if (inArray(includes, 'bootstrap-datetimepicker')) {
            inputCSS("../../web/libs/bootstrap-datetimepicker/bootstrap-datetimepicker.min.css");
            inputScript("../../web/libs/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js");
        }
        if (inArray(includes, 'bootstrap-select')) {
            inputCSS("../../web/libs/bootstrap-select/bootstrap-select.min.css");
            inputScript("../../web/libs/bootstrap-select/bootstrap-select.min.js");
        }
        if (inArray(includes, 'geohash')) {
            inputScript("../../web/libs/geohash/geohash.js");
        }
        if (inArray(includes, 'dat-gui')) {
            inputScript("../../web/libs/dat-gui/0.7.6/dat.gui.min.js");
            datGuiI18N();
        }
        if (inArray(includes, 'admin-lte')) {
            inputCSS("../../web/libs/admin-lte/css/AdminLTE.min.css");
            inputCSS("../../web/libs/admin-lte/css/skins/skin-blue.min.css");
            inputCSS("../../web/libs/font-awesome/css/font-awesome.min.css");
            inputCSS("../../web/libs/icomoon/css/icomoon.css");
            inputScript("../../web/libs/admin-lte/js/app.min.js");
        }
        // if (inArray(includes, 'jquery.scrollto')) {
        //     inputScript("../../web/libs/jquery.scrollto/jquery.scrollTo.min.js");
        // }
        if (inArray(includes, 'ace')) {
            inputScript("../../web/libs/ace/ace.js");
        }

        if (inArray(includes, 'widgets.alert')) {
            inputScript("../js/widgets.js");
        }

        if (inArray(includes, 'widgets')) {
            inputCSS("../../web/libs/css-loader/css-loader.css");
            inputScript("../js/widgets.js");
        }
        if (inArray(includes, 'zTree')) {
            inputCSS("../../web/libs/iclient8c/examples/js/plottingPanel/zTree/css/zTreeStyle.css");
            inputScript("../../web/libs/iclient8c/examples/js/plottingPanel/zTree/jquery.ztree.core.js");
        }
        if (inArray(includes, 'jquery-scontextMenu')) {
            inputCSS("../../web/libs/jquery.contextMenu/jquery.contextMenu.min.css");
            inputScript("../../web/libs/jquery.contextMenu/jquery.contextMenu.min.js");
        }
        if (inArray(includes, 'colorpicker')) {
            inputScript("../../web/libs/iclient8c/examples/js/jquery.js");
            inputScript("../../web/libs/iclient8c/examples/js/jquery.colorpicker.js");
        }
        if (inArray(includes, 'fileupLoad')) {
            inputScript("../../web/libs/iclient8c/examples/js/jquery.js");
            inputScript("../../web/libs/iclient8c/examples/js/fileupLoad.js");
        }
        if (inArray(includes, 'sticklr')) {
            inputCSS("../../web/libs/iclient8c/examples/css/jquery-sticklr.css");
            inputCSS("../../web/libs/iclient8c/examples/css/icon.css");
        }
        if (inArray(includes, 'responsive')) {
            inputCSS("../../web/libs/iclient8c/examples/css/bootstrap-responsive.min.css");
        }
        if (inArray(includes, 'lazyload')) {
            inputScript("../../web/libs/lazyload/jquery.lazyload.min.js");
        }
        if (inArray(includes, 'i18n')) {
            inputScript("../../web/libs/i18next/i18next.min.js");
            inputScript("../../web/libs/jquery-i18next/jquery-i18next.min.js");
        }
        if (inArray(includes, 'react')) {
            inputScript("../../web/libs/react/16.4.2/react.production.min.js");
            inputScript("../../web/libs/react/16.4.2/react-dom.production.min.js");
            inputScript("../../web/libs/babel/6.26.0/babel.min.js");
        }
        if (inArray(includes, 'vue')) {
            inputScript("../../web/libs/vue/2.5.17/vue.min.js");
        }
        if (inArray(includes, 'ionRangeSlider')) {
            inputCSS("../../web/libs/ionRangeSlider/2.2.0/css/ion.rangeSlider.css");
            inputCSS("../../web/libs/ionRangeSlider/2.2.0/css/normalize.css");
            inputCSS("../../web/libs/ionRangeSlider/2.2.0/css/ion.rangeSlider.skinHTML5.css");
            inputScript("../../web/libs/ionRangeSlider/2.2.0/js/ion.rangeSlider.min.js");
        }
        if (inArray(includes, 'plottingPanel')) {
            inputScript("../../web/libs/iclient8c/examples/js/plottingPanel/zTree/jquery.ztree.core.js");
            inputCSS("../../web/libs/iclient8c/examples/js/plottingPanel/zTree/css/zTreeStyle.css");
            inputScript("../../web/libs/iclient8c/examples/js/plottingPanel/jquery-easyui-1.4.4/jquery.easyui.min.js");
            inputCSS("../../web/libs/iclient8c/examples/js/plottingPanel/jquery-easyui-1.4.4/css/easyui.css");
            inputScript("../../web/libs/iclient8c/examples/js/plottingPanel/colorpicker/js/colorpicker.js");
            inputCSS("../../web/libs/iclient8c/examples/js/plottingPanel/colorpicker/css/colorpicker.css");
        }

    }

    function datGuiI18N() {
        document.writeln("<script>function registerEventListener(evt,fn){" +
            "if(window.attachEvent){window.attachEvent('on'+evt,fn);}" +
            "else{window.addEventListener(evt,fn,false);}" +
            "}</script>");
        document.writeln("<script>registerEventListener('load',function() { " +
            "dat.GUI.TEXT_CLOSED=resources.text_close;dat.GUI.TEXT_OPEN=resources.text_open;" +
            "})</script>")
    }


    load();
    window.isLocal = true;
    window.server = document.location.toString().match(/file:\/\//) ? "http://localhost:8090" : document.location.protocol + "//" + document.location.host;
    window.isSite = true;//i18n相关设置
    window.version = "10.1.0";
    window.preRelease = "alpha";
})();
