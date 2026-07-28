// 引擎切换事件
$(document).ready(function () {
    setTimeout(() => {
        let selectDom = document.getElementById('engineSelectDomEdit');
        let sidebarDom = document.getElementById('sidebarSwitchEdit');
        let iconDomEdit = document.getElementById('iconDomEdit');

        // 初始化时，获取设置select的索引
        setSelectIndex();

        // 添加 change 事件监听器
        selectDom.addEventListener('change', event => {
            let iframeUrl = getIframeUrl();
            // 获取当前选中的选项的值
            const selectedValue = event.target.value;

            console.log(`开启${selectedValue}模式`);

            let iframeDom = document.querySelector('#innerPage');

            // 根据选项的值执行不同的操作
            if (selectedValue === 'WebGL') {
                localStorage.setItem("EngineType", 2);
                if (iframeDom) iframeDom.src = iframeUrl;
                iconDomEdit.className = "icon-WebGL iconName";
            } else if (selectedValue === 'WebGPU') {
                localStorage.setItem("EngineType", 3);
                if (iframeDom) iframeDom.src = iframeUrl;
                iconDomEdit.className = "icon-WebGPU iconName";

                changeHrefEdit();
            }
        });

        // 侧边栏展开关闭事件监听
        sidebarDom.addEventListener('click', () => {
            let containerExpandDom = document.getElementById('containerExpandEdit');
            let contianerFoldDom = document.getElementById('contianerFoldEdit');
            if (contianerFoldDom && contianerFoldDom.style.display != 'none') {
                // 侧边栏展开时，重新获取设置一下select的索引
                setSelectIndex();
                containerExpandDom.style.display = 'block';
                contianerFoldDom.style.display = 'none';
            } else {
                containerExpandDom.style.display = 'none';
                contianerFoldDom.style.display = 'block';
            }
        })

        // 图标点击事件监听
        iconDomEdit.addEventListener('click', () => {
            let clickType = localStorage.getItem("EngineType");

            let iframeUrl = getIframeUrl();
            let iframeDom = document.querySelector('#innerPage');
            // 根据clickType的值执行不同的操作
            if (Number(clickType) === 3) {
                console.log(`开启WebGL模式`);
                localStorage.setItem("EngineType", 2);
                if (iframeDom) iframeDom.src = iframeUrl;
                iconDomEdit.className = "icon-WebGL iconName";
            } else if (Number(clickType) === 2) {
                console.log(`开启WebGPU模式`);
                localStorage.setItem("EngineType", 3);
                if (iframeDom) iframeDom.src = iframeUrl;
                iconDomEdit.className = "icon-WebGPU iconName";

                changeHrefEdit();
            }
        });

        // 设置选择栏索引
        function setSelectIndex() {
            if (!selectDom) return;
            let type = localStorage.getItem("EngineType");
            if (Number(type) == 2) {
                selectDom.selectedIndex = 0;
                iconDomEdit.className = "icon-WebGL iconName";
            } else if (Number(type) == 3) {
                selectDom.selectedIndex = 1;
                iconDomEdit.className = "icon-WebGPU iconName";
                changeHrefEdit();
            } else {
                selectDom.selectedIndex = 0;
            }
        }

        // 当处于webgpu的时候，改变href连接
        function changeHrefEdit() {
            let href = document.location.href;
            if (href.indexOf("127.0.0.1") == -1 && (href.indexOf("localhost") == -1)) {
                let arr = document.location.href.split("#");
                if (arr.length == 2) {
                    let https_href = "https://www.supermapol.com/webgl/examples/webgl/editor.html#" + arr[1];
                    document.location.href = https_href;
                }
            }
        }

        // 获取对应范例的url
        function getIframeUrl() {
            let locationParam = getLocationParam();
            if (!locationParam) {
                return;
            }
            let href = window.location.toString();
            let mapUrl = href.substr(0, href.lastIndexOf('/') + 1);
            mapUrl = mapUrl + locationParam + ".html";
            if (!mapUrl) {
                return;
            }
            return mapUrl;
        }

        function getLocationParam() {
            let param = window.location.toString();
            if (param.indexOf("#") === -1) {
                return null;
            }
            param = param.split("#");
            if (param && param.length > 0) {
                return param[1];
            }
        }
    }, 200)
})