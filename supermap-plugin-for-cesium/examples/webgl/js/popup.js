
/**
 * 3D场景气泡框
 * @constructor
 */
var SuperMap3D;
class Popup {
    constructor(opt, iClientX) {
        SuperMap3D = iClientX;
        this._viewer = opt.viewer;
        this.element = opt.element;     //dom or id
        this.html = opt.html;
        this.position = opt.position;  //Cartesian3
        this.pixelOffset = opt.pixelOffset || new SuperMap3D.Cartesian2(0, 0);  //像素偏移
        this._show = opt.show || false;
        this.hideOnBehindGlobe = opt.hideOnBehindGlobe || false;  // 是否在地球背面隐藏
        this.scaleByDistance = opt.scaleByDistance;  //距离控制大小
        this.translucencyByDistance = opt.translucencyByDistance;  //距离控制透明度
        this.distanceDisplayCondition = opt.distanceDisplayCondition; //距离控制显隐
        this.scratch = new SuperMap3D.Cartesian2();
        this.RemoveCallback = function () { }
        this.init(opt);
        this.resize();
    }

    init(opt) {
        // 在Cesium容器中添加元素
        var dom = undefined;
        // 传入html时转为dom元素
        if (this.html) {
            var parent = document.createElement('div');
            parent.innerHTML = opt.html;
            dom = parent.firstChild;
        }
        if (typeof (opt.element) === "string") {
            this.element = document.getElementById(opt.element);
        }
        if (!this.element) this.element = dom;   // 获取元素优先级高于获取html
        if (!this._viewer) {
            console.log('Popup :viewer is required!');
            return;
        }
        this.element.style.display = 'block';
        this.element.style.pointerEvents = 'none';
        this.element.style.transformOrigin = opt.transformOrigin || 'center bottom 0px';  //缩放中心点

        this._viewer.container.appendChild(this.element);
        this.setViewer();
        if (this._show) {
            if (this.position) {
                setTimeout(() => { this.setPosition(opt.position) }, 500)
            }
        }
    };

    /**
    * 设置关联的cesium viewer
    * @param viewer
    */
    setViewer() {
        let _self = this;

        // 每一帧触发
        // _self.RemoveCallback = _self._viewer.scene.preRender.addEventListener(function () {
        //     if (_self._show) {
        //         _self.update()
        //     }
        // });

        // 相机改变触发
        _self.RemoveCallback = _self._viewer.camera.changed.addEventListener(function () {
            if (_self._show) {
                _self.update();
            }
        })
    };

    /**
     * 获取关联的cesium viewer
     * @return {SuperMap3D.Viewer}
     */
    getViewer() {
        return this._viewer;
    };

    /**
     * 设置位置
     * @param position{Array}
     */
    setPosition(position) {
        let _self = this;
        if (!position) {
            _self.close();
            return;
        }
        if (!_self.getViewer()) {
            return;
        }

        let canvasPosition = _self.getViewer().scene.cartesianToCanvasCoordinates(position, _self.scratch); // 笛卡尔坐标到画布坐标

        if (SuperMap3D.defined(canvasPosition)) {
            _self.element.style.top = canvasPosition.y + _self.pixelOffset.y - _self.element.offsetHeight + 'px';
            _self.element.style.left = canvasPosition.x + _self.pixelOffset.x - _self.element.offsetWidth / 2 + 'px';
            // _self.element.style.transform = `matrix(1, 0, 0, 1, ${canvasPosition.x + _self.pixelOffset.x}, ${canvasPosition.y + _self.pixelOffset.y})`;
            _self.element.style.opacity = 1;
            _self._show = true;
            if (_self.hideOnBehindGlobe || _self.distanceDisplayCondition || _self.translucencyByDistance || _self.scaleByDistance) {
                let cameraPosition = _self.getViewer().camera.positionWC;
                let distance = SuperMap3D.Cartesian3.distance(cameraPosition, position);
                if (_self.hideOnBehindGlobe) {
                    let height = _self.getViewer().scene.globe.ellipsoid.cartesianToCartographic(cameraPosition).height;
                    height += _self.getViewer().scene.globe.ellipsoid.maximumRadius;
                    if (!(distance > height)) {
                        _self.element.style.display = "flex"
                    } else {
                        _self.element.style.display = "none"
                    }
                }
                if (_self.distanceDisplayCondition) {
                    if (distance < _self.distanceDisplayCondition.near || distance > _self.distanceDisplayCondition.far) {
                        _self.element.style.opacity = 0;
                        return;
                    } else {
                        _self.element.style.opacity = 1;
                    }
                }
                if (_self.translucencyByDistance) {
                    if (distance < _self.translucencyByDistance.near) {
                        _self.element.style.opacity = _self.translucencyByDistance.nearValue;
                    } else if (distance > _self.translucencyByDistance.far) {
                        _self.element.style.opacity = _self.translucencyByDistance.farValue;
                    } else {
                        let val1 = _self.translucencyByDistance.farValue - _self.translucencyByDistance.nearValue;
                        let val2 = _self.translucencyByDistance.far - _self.translucencyByDistance.near;
                        let val3 = ((distance - _self.translucencyByDistance.near) / val2) * val1 + _self.translucencyByDistance.nearValue;
                        _self.element.style.opacity = val3;
                    }
                }
                if (_self.scaleByDistance) {
                    if (distance < _self.scaleByDistance.near) {
                        let val = _self.scaleByDistance.nearValue;
                        _self.element.style.transform = `scale(${val}, ${val})`;
                    } else if (distance > _self.scaleByDistance.far) {
                        let val = _self.scaleByDistance.farValue;
                        _self.element.style.transform = `scale(${val}, ${val})`;
                    } else {
                        let val1 = _self.scaleByDistance.farValue - _self.scaleByDistance.nearValue;
                        let val2 = _self.scaleByDistance.far - _self.scaleByDistance.near;
                        let val3 = ((distance - _self.scaleByDistance.near) / val2) * val1 + _self.scaleByDistance.nearValue;
                        _self.element.style.transform = `scale(${val3}, ${val3})`;
                    }
                }

            }
        }
        _self.position = position;
    };
    //当窗口大小改变时候重新计算popup的位置
    resize() {
        var that = this;
        window.addEventListener('resize', function () {
            that.setPosition(that.position)
        })
    }

    update() {
        this.setPosition(this.position);
    };
    getPosition() {
        return this.position;
    };

    close() {
        this.element.style.opacity = 0;
        this._show = false;
    };

    show() {
        if (this.position) {
            this.element.style.opacity = 1;
            this._show = true;
            this.setPosition(this.position);
        }
    };

    destroy() {
        this.RemoveCallback();
        this.close();
        this._viewer.container.removeChild(this.element);
    }

}

window.Popup = Popup;