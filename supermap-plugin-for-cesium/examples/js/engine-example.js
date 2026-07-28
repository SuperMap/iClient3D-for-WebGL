// 引擎切换事件
$(document).ready(function () {
    setTimeout(() => {
        let selectDom = document.getElementById('engineSelectDom');
        let sidebarDom = document.getElementById('sidebarSwitch');
        let iconDom = document.getElementById('iconDom');
        let protocol = window.location.protocol;
        let href = document.location.href;

        // 初始化时，获取设置select的索引
        setSelectIndex();

        // 添加 change 事件监听器
        selectDom.addEventListener('change', event => {
            // 获取当前选中的选项的值
            const selectedValue = event.target.value;

            // 根据选项的值执行不同的操作
            if (selectedValue === 'WebGL') {
                setEngineTypeWebGL()
            } else if (selectedValue === 'WebGPU') {
                setEngineTypeWebGPU();
            }
        });

        // 侧边栏展开关闭事件监听
        sidebarDom.addEventListener('click', () => {
            let containerExpandDom = document.getElementById('containerExpand');
            let contianerFoldDom = document.getElementById('contianerFold');
            if (containerExpandDom && containerExpandDom.style.display != 'none') {
                containerExpandDom.style.display = 'none';
                contianerFoldDom.style.display = 'block';
            } else {
                // 侧边栏展开时，重新获取设置一下select的索引
                setSelectIndex();
                containerExpandDom.style.display = 'block';
                contianerFoldDom.style.display = 'none';
            }
        })

        // 图标点击事件监听
        iconDom.addEventListener('click', () => {
            let clickType = localStorage.getItem("EngineType");

            // 根据clickType的值执行不同的操作
            if (Number(clickType) === 3) {
                setEngineTypeWebGL();
            } else if (Number(clickType) === 2) {
                setEngineTypeWebGPU();
            }
        });

        // 设置选择栏索引
        function setSelectIndex() {
            if (!selectDom) return;
            let type = localStorage.getItem("EngineType");
            if (Number(type) === 2) {
                selectDom.selectedIndex = 0;
                iconDom.className = "icon-WebGL iconName";
            } else if (Number(type) === 3) {
                selectDom.selectedIndex = 1;
                iconDom.className = "icon-WebGPU iconName";
            } else {
                selectDom.selectedIndex = 0;
            }
        }

        // 设置WebGL
        function setEngineTypeWebGL() {
            localStorage.setItem("EngineType", 2);
            iconDom.className = "icon-WebGL iconName";
            console.log(`开启WebGL模式`);
        }

        // 设置WebGPU
        function setEngineTypeWebGPU() {
            if (href.indexOf("127.0.0.1:") != -1 || href.indexOf("localhost:") != -1) { // 本地打开
                localStorage.setItem("EngineType", 3);
                iconDom.className = "icon-WebGPU iconName";
                console.log(`开启WebGPU模式`);
            } else if (protocol == 'http:') { // 在线http协议下进行跳转
                changeHref();
            } else if (protocol == 'https:') { // 在线https协议下才可使用WebGPU
                localStorage.setItem("EngineType", 3);
                iconDom.className = "icon-WebGPU iconName";
                console.log(`开启WebGPU模式`);
            }
        }

        // 当处于webgpu的时候，改变href连接
        function changeHref() {
            localStorage.removeItem("EngineType");
            let href = document.location.href;
            console.log("example-change");
            if (href.indexOf("127.0.0.1") == -1 && (href.indexOf("localhost") == -1)) {
                localStorage.setItem("EngineType", 3);
                document.location.href = 'https://www.supermapol.com/webgl/examples/webgl/examples.html';
            }
        }
    }, 200)
})
