(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var CustomScaleComponent = (function (_super) {
        __extends(CustomScaleComponent, _super);
        function CustomScaleComponent() {
            var _this = _super.call(this) || this;
            _this.scale_ = 0.95;
            _this.defaultScale_ = 1;
            _this.isInit = false;
            return _this;
        }
        CustomScaleComponent.prototype.onAwake = function () {
            this.init();
        };
        CustomScaleComponent.prototype._onAdded = function () {
            this.init();
            this.addEvent();
        };
        CustomScaleComponent.prototype.onEnable = function () {
            this.addEvent();
        };
        CustomScaleComponent.prototype._onDisable = function () {
        };
        CustomScaleComponent.prototype.init = function () {
            if (this.isInit) {
                return;
            }
            this.isInit = true;
            this.content = this.owner;
            this.content.scale(this.defaultScale_, this.defaultScale_);
            this.content.on(Laya.Event.REMOVED, this, this.onRemoved);
        };
        CustomScaleComponent.prototype.onRemoved = function () {
            this.removeEvent();
        };
        CustomScaleComponent.prototype.addEvent = function () {
            this.content.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            this.content.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        };
        CustomScaleComponent.prototype.removeEvent = function () {
            this.content.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        };
        CustomScaleComponent.prototype.mouseDown = function () {
            this.content.on(Laya.Event.MOUSE_OUT, this, this.mouseOut);
            this.content.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.content.scale(this.defaultScale_, this.defaultScale_);
            Laya.Tween.to(this.content, { scaleX: this.scale_, scaleY: this.scale_ }, 80, Laya.Ease.backIn);
        };
        CustomScaleComponent.prototype.mouseOut = function () {
            this.content.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.content.off(Laya.Event.MOUSE_OUT, this, this.mouseOut);
            this.content.scale(this.scale_, this.scale_);
            Laya.Tween.to(this.content, { scaleX: this.defaultScale_, scaleY: this.defaultScale_ }, 100, Laya.Ease.backOut);
        };
        CustomScaleComponent.prototype.mouseUp = function () {
            this.content.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.content.off(Laya.Event.MOUSE_OUT, this, this.mouseOut);
            this.content.scale(this.scale_, this.scale_);
            Laya.Tween.to(this.content, { scaleX: this.defaultScale_, scaleY: this.defaultScale_ }, 100, Laya.Ease.backOut);
        };
        CustomScaleComponent.prototype.onDestroy = function () {
            _super.prototype.onDestroy.call(this);
            this.removeEvent();
        };
        return CustomScaleComponent;
    }(Laya.Script));

    var GameConfig = (function () {
        function GameConfig() {
        }
        GameConfig.init = function () {
            var reg = Laya.ClassUtils.regClass;
            reg("base/CustomScaleComponent.ts", CustomScaleComponent);
        };
        GameConfig.width = 1080;
        GameConfig.height = 1920;
        GameConfig.scaleMode = "full";
        GameConfig.screenMode = "none";
        GameConfig.alignV = "top";
        GameConfig.alignH = "left";
        GameConfig.startScene = "game/HomeView.scene";
        GameConfig.sceneRoot = "";
        GameConfig.debug = false;
        GameConfig.stat = false;
        GameConfig.physicsDebug = false;
        GameConfig.exportSceneToJson = true;
        return GameConfig;
    }());
    GameConfig.init();

    var ClassUtils = (function () {
        function ClassUtils() {
        }
        ClassUtils.getClassKey = function (className) {
            var classKey = className.toString();
            classKey = (classKey.split("className_key=\"")[1]) == null ? (classKey.split("className_key = \"")[1]) : (classKey.split("className_key=\"")[1]);
            if (classKey == null) {
                return className.name;
            }
            classKey = classKey.split("\"")[0];
            return classKey;
        };
        return ClassUtils;
    }());

    var SceneManager = (function () {
        function SceneManager() {
            this.STAGE_WIDTH = 0;
            this.STAGE_HEIGHT = 0;
            this.STAGE_WIDTH = Laya.stage.width;
            this.STAGE_HEIGHT = Laya.stage.height;
        }
        Object.defineProperty(SceneManager, "instance", {
            get: function () {
                if (this.ins == null) {
                    this.ins = new SceneManager();
                }
                return this.ins;
            },
            enumerable: true,
            configurable: true
        });
        SceneManager.prototype.openGameScene = function (className, data) {
            var _this = this;
            var classKey = ClassUtils.getClassKey(className);
            var clazz = Laya.Pool.getItemByClass(classKey, className);
            clazz.name = className.name;
            clazz.setData(data);
            clazz.initEvent && clazz.initEvent();
            this.sceneLayer.addChild(clazz);
            Laya.timer.once(100, this, function () {
                if (_this.curGameScene) {
                    _this.recoverBaseScene(_this.curGameScene);
                }
                _this.curGameScene = clazz;
            });
            return clazz;
        };
        SceneManager.prototype.getGameSceneByName = function (className) {
            var clazz = this.sceneLayer.getChildByName(className.name);
            return clazz;
        };
        SceneManager.prototype.openSceneInstance = function (scene) {
            var _this = this;
            this.sceneLayer.addChild(scene);
            Laya.timer.once(100, this, function () {
                if (_this.curGameScene) {
                    _this.recoverBaseScene(_this.curGameScene);
                }
                _this.curGameScene = scene;
            });
        };
        SceneManager.prototype.recoverBaseScene = function (scene) {
            scene.removeSelf();
            Laya.Pool.recover(scene.className_key, scene);
        };
        return SceneManager;
    }());

    var DeviceUtil = (function () {
        function DeviceUtil() {
        }
        DeviceUtil.adaptationBgImg = function (bg) {
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_SHOWALL) {
                return;
            }
            bg.scaleX = bg.scaleY = DeviceUtil.getScalePix();
            bg.anchorX = bg.anchorY = 0.5;
            bg.x = Laya.stage.width / 2;
            bg.y = Laya.stage.height / 2;
        };
        DeviceUtil.getMaxScale = function (defaultSize, size) {
            var scaleW = size.w / defaultSize.w;
            var scaleH = size.h / defaultSize.h;
            return scaleH > scaleW ? scaleH : scaleW;
        };
        DeviceUtil.getScalePix = function (defaultSize) {
            if (defaultSize === void 0) { defaultSize = { w: 1080, h: 1920 }; }
            if (DeviceUtil.scale) {
                return DeviceUtil.scale;
            }
            DeviceUtil.scale = 1;
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_SHOWALL) {
                return DeviceUtil.scale;
            }
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_FIXED_WIDTH) {
                DeviceUtil.scale = (Laya.Browser.height / Laya.Browser.width) / (defaultSize.h / defaultSize.w);
            }
            console.log(DeviceUtil.scale);
            return DeviceUtil.scale;
        };
        DeviceUtil.getAutoPix = function (defaultSize) {
            if (defaultSize === void 0) { defaultSize = { w: 1080, h: 1920 }; }
            if (DeviceUtil.pix) {
                return DeviceUtil.pix;
            }
            DeviceUtil.pix = { x: 0, y: 0 };
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_SHOWALL) {
                return DeviceUtil.pix;
            }
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_FIXED_WIDTH) {
                var scale = (Laya.Browser.height / Laya.Browser.width) / (defaultSize.h / defaultSize.w);
                DeviceUtil.pix.y = defaultSize.h * (scale - 1);
            }
            console.log(DeviceUtil.pix);
            return DeviceUtil.pix;
        };
        DeviceUtil.getIsIphoneX = function () {
            var rato = Laya.Browser.clientHeight / Laya.Browser.clientWidth;
            if (rato >= 2) {
                return true;
            }
            else {
                return false;
            }
        };
        DeviceUtil.shockScreen = function (rota, frame) {
            if (rota === void 0) { rota = 0.03; }
            if (frame === void 0) { frame = 5; }
            Laya.stage.rotation = rota;
            Laya.timer.frameOnce(frame, {}, function () {
                Laya.stage.rotation = -rota;
                Laya.timer.frameOnce(frame, {}, function () {
                    Laya.stage.rotation = 0;
                });
            });
        };
        DeviceUtil.autoStageScaleMode = function () {
            var rato = Laya.Browser.clientHeight / Laya.Browser.clientWidth;
            if (rato > DeviceUtil.defaultSize.h / DeviceUtil.defaultSize.w) {
                Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            }
            if (rato < 2.3) {
                Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
            }
            if (rato < DeviceUtil.defaultSize.h / DeviceUtil.defaultSize.w) {
                Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            }
            Laya.stage.screenMode = "none";
            Laya.stage.alignH = "center";
            Laya.stage.alignV = "middle";
            Laya.stage.height *= DeviceUtil.getScalePix();
            console.log(Laya.stage.width, Laya.stage.height, Laya.Browser.width, Laya.Browser.height);
        };
        DeviceUtil.isNative = function () {
            return Laya.Render.isConchApp;
        };
        DeviceUtil.isWXMiniGame = function () {
            return Laya.Browser.onMiniGame;
        };
        DeviceUtil.isQQMiniGame = function () {
            return Laya.Browser.onQQMiniGame;
        };
        DeviceUtil.isTTMiniGame = function () {
            return window["ttMiniGame"];
        };
        DeviceUtil.isUCMiniGame = function () {
            return window["ucMiniGame"];
        };
        DeviceUtil.isIOS = function () {
            return Laya.Browser.onIOS;
        };
        DeviceUtil.isAndroid = function () {
            return Laya.Browser.onAndroid;
        };
        DeviceUtil.getDeviceNo = function () {
            if (Laya.LocalStorage.getItem("DeviceNo")) {
                return Laya.LocalStorage.getItem("DeviceNo");
            }
            var no = "";
            if (Laya.Browser.onMobile) ;
            no += (new Date().getTime());
            Laya.LocalStorage.setItem("DeviceNo", no);
            return no;
        };
        DeviceUtil.defaultRato = 1;
        DeviceUtil.defaultSize = { w: 1080, h: 1920 };
        return DeviceUtil;
    }());
    window['DeviceUtil'] = DeviceUtil;

    var ResUtil = (function () {
        function ResUtil() {
            this.originURL = "./";
            this.defaultOriginUrl = "";
            this.isSuccGroupNames = {};
            Laya.loader.maxLoader = 8;
        }
        ResUtil.getIntance = function () {
            if (!ResUtil.instance_) {
                ResUtil.instance_ = new ResUtil();
            }
            return ResUtil.instance_;
        };
        ResUtil.prototype.getOriginUrlPath = function (url) {
            return this.defaultOriginUrl + url.replace("./", "");
        };
        ResUtil.prototype.addVersionPrefix = function (fix) {
            Laya.ResourceVersion.addVersionPrefix(fix);
            Laya.URL.basePath = fix;
        };
        ResUtil.prototype.loadRESConfig = function (resUrl) {
            var _this = this;
            if (resUrl === void 0) { resUrl = "./default.res.json"; }
            return new Promise(function (resolve) {
                Laya.loader.load(resUrl, Laya.Handler.create(_this, function (res) {
                    _this.resConfig = res;
                    if (!_this.resKeyValues) {
                        _this.resKeyValues = {};
                    }
                    for (var i = 0, len = res.resources.length; i < len; i++) {
                        _this.resKeyValues['' + res.resources[i].name] = res.resources[i];
                    }
                    if (!_this.groupsResKeys) {
                        _this.groupsResKeys = {};
                    }
                    for (var i = 0, len = res.groups.length; i < len; i++) {
                        _this.groupsResKeys['' + res.groups[i].name] = res.groups[i];
                    }
                    resolve();
                }), null, Laya.Loader.JSON);
            });
        };
        ResUtil.prototype.loadGroups = function (groups, complet, progress) {
            var resInfos = [];
            for (var i = 0, len = groups.length; i < len; i++) {
                resInfos = resInfos.concat(this.getGroupResInfosByGroupName(groups[i]));
            }
            console.log('resInfos', resInfos);
            this.loadResByResInfos(resInfos, complet, progress);
        };
        ResUtil.prototype.groupIsLoad = function (group) {
            if (this.isSuccGroupNames[group]) {
                return true;
            }
            return false;
        };
        ResUtil.prototype.getGroupsNotLoadArr = function (groups) {
            console.log("加载资源组 -> ", groups);
            var resArr = [];
            for (var i = 0, len = groups.length; i < len; i++) {
                if (!this.groupIsLoad(groups[i])) {
                    resArr.push(groups[i]);
                }
            }
            return resArr;
        };
        ResUtil.prototype.loadResByResInfos = function (resInfos, complet, progress) {
            return __awaiter(this, void 0, void 0, function () {
                var len, i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            len = resInfos.length;
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < len)) return [3, 4];
                            if (progress) {
                                progress(i, len);
                            }
                            return [4, this.asyncLoadResByResInfo(resInfos[i], 1, true)];
                        case 2:
                            _a.sent();
                            if (resInfos[i]["isLast_group"]) {
                                this.isSuccGroupNames[resInfos[i]["isLast_group"]] = true;
                            }
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3, 1];
                        case 4:
                            if (progress) {
                                progress(len, len);
                            }
                            if (complet) {
                                complet();
                            }
                            return [2];
                    }
                });
            });
        };
        ResUtil.prototype.asyncLoadResByResInfo = function (resInfo, priority, isLoadGrp) {
            var _this = this;
            if (isLoadGrp === void 0) { isLoadGrp = false; }
            if (!resInfo) {
                return null;
            }
            return new Promise(function (resolve) {
                if (isLoadGrp) {
                    Laya.loader.load(ResUtil.getIntance().getOriginUrlPath(resInfo.url), Laya.Handler.create(_this, function (res) {
                        resolve(res);
                    }), null, resInfo.type, priority, true, resInfo.group);
                    return;
                }
                Laya.loader.load(resInfo.url, Laya.Handler.create(_this, function (res) {
                    resolve(res);
                }), null, resInfo.type, priority, true, resInfo.group);
            });
        };
        ResUtil.prototype.asyncLoadResByURL = function (url, priority) {
            var _this = this;
            if (priority === void 0) { priority = 1; }
            return new Promise(function (resolve) {
                Laya.loader.load(url, Laya.Handler.create(_this, function (res) {
                    resolve(res);
                }), null, null, priority, true, null);
            });
        };
        ResUtil.prototype.asyncCreateRes = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                Laya.loader.create(url, Laya.Handler.create(_this, function () {
                    resolve();
                }));
            });
        };
        ResUtil.prototype.getGroupResInfosByGroupName = function (group) {
            var groupKeys = this.getKeysByGroup(group);
            if (!groupKeys) {
                return [];
            }
            var resInfos = [];
            for (var i = 0, len = groupKeys.length; i < len; i++) {
                var resInfo = this.getResInfoByName(groupKeys[i], group);
                resInfos.push(resInfo);
            }
            resInfos[resInfos.length - 1]["isLast_group"] = group;
            return resInfos;
        };
        ResUtil.prototype.getResInfoByName = function (name, group) {
            var info = this.resKeyValues['' + name];
            if (info == null) {
                console.warn("key not found ", name);
                return null;
            }
            var resInfo = {};
            resInfo.url = this.originURL + "resource/" + info.url;
            switch (info.type) {
                case "image":
                    resInfo.type = Laya.Loader.IMAGE;
                    break;
                case "json":
                    resInfo.type = Laya.Loader.JSON;
                    break;
                case "font":
                    resInfo.type = Laya.Loader.FONT;
                    break;
                case "sound":
                    resInfo.type = Laya.Loader.SOUND;
                    break;
                case "atlas":
                case "sheet":
                    resInfo.type = Laya.Loader.ATLAS;
                    break;
            }
            if (info.url.indexOf("atlas") > -1) {
                resInfo.type = Laya.Loader.ATLAS;
            }
            resInfo.group = group;
            return resInfo;
        };
        ResUtil.prototype.getKeysByGroup = function (group) {
            console.log(group);
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            return this.groupsResKeys['' + group].keys.split(",");
        };
        ResUtil.prototype.destoryGroupArr = function (groups) {
            console.log("销毁资源组 -> ", groups);
            for (var i = 0, len = groups.length; i < len; i++) {
                this.destoryGroup(groups[i]);
            }
        };
        ResUtil.prototype.destoryGroup = function (group) {
            console.log("销毁资源组 -> ", group);
            var resInfos = this.getGroupResInfosByGroupName(group);
            for (var i = 0, len = resInfos.length; i < len; i++) {
                Laya.loader.clearRes(resInfos[i].url);
            }
            this.isSuccGroupNames[group] = null;
        };
        ResUtil.prototype.getRES = function (key) {
            var resInfo = this.getResInfoByName(key);
            if (resInfo == null) {
                console.warn('key  null', key);
                return null;
            }
            var res = Laya.loader.getRes(resInfo.url);
            if (res) {
                return res;
            }
            else {
                return null;
            }
        };
        ResUtil.prototype.getAsyncRESByUrl = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
                    Laya.loader.load(ResUtil.getIntance().getOriginUrlPath(url), Laya.Handler.create(_this, function (res) {
                        resolve(res);
                    }));
                    return;
                }
                Laya.loader.load(url, Laya.Handler.create(_this, function (res) {
                    resolve(res);
                }));
            });
        };
        ResUtil.prototype.getAsyncRES = function (key) {
            var _this = this;
            var resInfo = this.getResInfoByName(key);
            return new Promise(function (resolve) {
                if (!resInfo) {
                    console.warn("not find key -->", key);
                    resolve(null);
                }
                else {
                    if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
                        Laya.loader.load(ResUtil.getIntance().getOriginUrlPath(resInfo.url), Laya.Handler.create(_this, function (res) {
                            resolve(res);
                        }), null, resInfo.type, 1, true, resInfo.group);
                        return;
                    }
                    Laya.loader.load(resInfo.url, Laya.Handler.create(_this, function (res) {
                        resolve(res);
                    }), null, resInfo.type, 1, true, resInfo.group);
                }
            });
        };
        ResUtil.prototype.loadOneRes = function (resUrl, type, priority, group, complet) {
            Laya.loader.load(resUrl, Laya.Handler.create(this, complet), null, type, priority, true, group);
        };
        ResUtil.prototype.getModelByUrlAndName = function (url, name) {
            return new Promise(function (resolve) {
                Laya.loader.create(url, Laya.Handler.create(null, function (res) {
                    var sprite3d = Laya.Loader.getRes(url);
                    sprite3d.transform.localPosition = new Laya.Vector3(0, 0, 0);
                    var model = sprite3d;
                    var clone = model.clone();
                    resolve(clone);
                }));
            });
        };
        ResUtil.prototype.loadResource = function (resource, onResourceLoadComplete, onResourceLoadProgress, onResourceLoadTarget) {
            Laya.loader.load(resource, Laya.Handler.create(onResourceLoadTarget, onResourceLoadComplete), Laya.Handler.create(onResourceLoadTarget, onResourceLoadProgress, null, false));
        };
        ResUtil.prototype.getUrl = function (host, name, resType) {
            if (resType === void 0) { resType = Laya.Loader.IMAGE; }
            return host + "/" + name + "." + resType;
        };
        ResUtil.prototype.asyncLoadJSON = function (jsonUrl) {
            var _this = this;
            return new Promise(function (resolve) {
                Laya.loader.load(jsonUrl, Laya.Handler.create(_this, function (jsonRes) {
                    resolve(jsonRes);
                }), Laya.Handler.create(_this, function (res) {
                }), Laya.Loader.JSON);
            });
        };
        ResUtil.prototype.loadThms = function (thmUrl) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, this.asyncLoadJSON(thmUrl)];
                        case 1:
                            _a.thmsConfig = _b.sent();
                            return [2];
                    }
                });
            });
        };
        ResUtil.instance_ = null;
        return ResUtil;
    }());

    var EffectUtils = (function () {
        function EffectUtils() {
        }
        EffectUtils.macIconShake = function (obj, initY, callback, thisObj) {
            var arr = [
                [20, 300],
                [15, 300],
                [10, 300],
                [5, 300]
            ];
            var index = 0;
            toShake();
            function toShake() {
                if (index >= arr.length) {
                    (callback) && (callback.apply(thisObj, []));
                }
                else {
                    Laya.Tween.to(obj, { "y": initY - arr[index][0] }, arr[index][1], null, Laya.Handler.create(null, function () {
                        Laya.Tween.to(obj, { "y": initY }, arr[index][1], null, Laya.Handler.create(null, function () {
                            ++index;
                            toShake();
                        }));
                    }));
                }
            }
        };
        EffectUtils.flowOut = function (obj, time, ease, callback, delay, thisObj, arrData) {
            if (time === void 0) { time = 500; }
            if (ease === void 0) { ease = null; }
            if (callback === void 0) { callback = null; }
            if (thisObj === void 0) { thisObj = null; }
            if (arrData === void 0) { arrData = null; }
            if (callback) {
                Laya.Tween.to(obj, { y: obj.y - 150, alpha: 0 }, time, ease, Laya.Handler.create(thisObj, callback, arrData), delay);
            }
            else {
                Laya.Tween.to(obj, { y: obj.y - 150, alpha: 0 }, time, ease, Laya.Handler.create(obj, obj.removeSelf, arrData), delay);
            }
        };
        EffectUtils.flowNum = function (startNum, endNum, callback, thisObj, completeCallBack) {
            Laya.timer.clearAll(this);
            var change = Math.abs(endNum - startNum);
            if (change <= 0)
                return;
            var everyChange = change / (endNum - startNum);
            if (change >= 1000) {
                everyChange = 1000;
            }
            else if (change >= 100) {
                everyChange = 100;
            }
            else if (change >= 50) {
                everyChange = 50;
            }
            else if (change >= 5) {
                everyChange = 5;
            }
            change = Math.ceil(change / everyChange);
            var timer = new Laya.Timer();
            timer.loop(17, this, changeFun);
            function changeFun() {
                --change;
                if (change < 0) {
                    timer.clearAll(this);
                    timer = null;
                    completeCallBack && completeCallBack.apply(thisObj);
                }
                else {
                    callback && callback.apply(thisObj, [endNum]);
                }
            }
        };
        EffectUtils.startFlicker = function (obj, alphaTime) {
            if (alphaTime === void 0) { alphaTime = 700; }
            obj.alpha = 1;
            Laya.Tween.to(obj, { "alpha": 0 }, alphaTime, null, Laya.Handler.create(null, function () {
                Laya.Tween.to(obj, { "alpha": 1 }, alphaTime, null, Laya.Handler.create(this, this.startFlicker, [obj]));
            }.bind(this)));
        };
        EffectUtils.stopEffect = function (obj, xPos, yPos) {
            if (xPos === void 0) { xPos = null; }
            if (yPos === void 0) { yPos = null; }
            Laya.Tween.clearAll(obj);
            if (xPos !== null && yPos !== null) {
                obj.pos(xPos, yPos);
            }
        };
        EffectUtils.targetFlyToPoint = function (target, aimPoint, success, time) {
            if (time === void 0) { time = 1000; }
            Laya.Tween.to(target, { x: aimPoint.x, y: aimPoint.y }, time, null, Laya.Handler.create(target, function () {
                success && success();
            }));
        };
        return EffectUtils;
    }());

    var BaseTips = (function (_super) {
        __extends(BaseTips, _super);
        function BaseTips() {
            var _this = _super.call(this) || this;
            _this.className_key = 'BaseTips';
            return _this;
        }
        BaseTips.prototype.init = function (data) {
            var _this = this;
            this.alpha = 1;
            if (this.bg_msg == null) {
                this.bg_msg = new Laya.Image();
                this.bg_msg.sizeGrid = "10,10,10,10";
                this.bg_msg.size(500, 119);
                this.bg_msg.pivotX = this.bg_msg.width / 2;
                this.bg_msg.pivotY = this.bg_msg.height / 2;
                this.bg_msg.skin = "resource/assets/img/game_tips_db.png";
                this.addChild(this.bg_msg);
            }
            if (this.txt_msg == null) {
                this.txt_msg = new Laya.Text();
                this.txt_msg.color = '#ffffff';
                this.txt_msg.align = "center";
                this.txt_msg.valign = "middle";
                this.txt_msg.fontSize = 34;
                this.addChild(this.txt_msg);
            }
            this.txt_msg.text = data;
            this.x = (SceneManager.instance.STAGE_WIDTH - this.txt_msg.width) / 2;
            this.y = (SceneManager.instance.STAGE_HEIGHT - this.txt_msg.height) / 2;
            this.bg_msg.x = this.txt_msg.width / 2;
            this.bg_msg.y = this.txt_msg.height / 2;
            EffectUtils.flowOut(this, 2000, null, function () {
                TipsManager.instance.removeTips(_this);
            }, 500);
        };
        BaseTips.prototype.onDestroy = function () {
            Laya.Tween.clearAll(this);
        };
        return BaseTips;
    }(Laya.Sprite));

    var TipsManager = (function () {
        function TipsManager() {
        }
        Object.defineProperty(TipsManager, "instance", {
            get: function () {
                if (TipsManager.ins == null) {
                    TipsManager.ins = new TipsManager();
                }
                return TipsManager.ins;
            },
            enumerable: true,
            configurable: true
        });
        TipsManager.prototype.showDefaultTips = function (data) {
            var tip = Laya.Pool.getItemByClass("BaseTips", BaseTips);
            tip.init(data);
            this.tipLayer.addChild(tip);
        };
        TipsManager.prototype.showTips = function (className, data) {
            var classKey = className.toString();
            classKey = (classKey.split("className_key=\"")[1]) == null ? (classKey.split("className_key = \"")[1]) : (classKey.split("className_key=\"")[1]);
            classKey = classKey.split("\"")[0];
            var result = Laya.Pool.getItemByClass(classKey, className);
            result.init(data);
            this.tipLayer.addChild(result);
        };
        TipsManager.prototype.showTipInstance = function (object) {
            this.tipLayer.addChild(object);
        };
        TipsManager.prototype.removeTips = function (object) {
            object.removeSelf();
            Laya.Pool.recover(object.className_key, object);
        };
        return TipsManager;
    }());

    var GameObj = (function (_super) {
        __extends(GameObj, _super);
        function GameObj() {
            var _this = _super.call(this) || this;
            _this.className_key = '';
            _this.isEnabled = true;
            return _this;
        }
        GameObj.prototype.onCreate = function (data, isNeedResulView) {
            this.objInfo_ = data;
            this.isRecovery = false;
            this.isEnabled = true;
            this.initObj();
            this.name = this.className_key;
        };
        GameObj.prototype.onRecovery = function () {
            if (this.isRecovery)
                return;
            this.isRecovery = true;
            this._destroyAllComponent();
            Laya.timer.clearAll(this);
            Laya.Tween.clearTween(this);
            this.collider = null;
            this.rigidBody = null;
            this.removeChildren();
            this.removeSelf();
        };
        GameObj.prototype.initObj = function () {
            this.width = this.objInfo_.width;
            this.height = this.objInfo_.height;
            this.pivotX = this.objInfo_.width / 2;
            this.pivotY = this.objInfo_.height / 2;
        };
        return GameObj;
    }(Laya.Sprite));
    var GAMESTATUS;
    (function (GAMESTATUS) {
        GAMESTATUS[GAMESTATUS["STOP"] = 0] = "STOP";
        GAMESTATUS[GAMESTATUS["PLAYING"] = 1] = "PLAYING";
        GAMESTATUS[GAMESTATUS["PLAYERDEAD"] = 2] = "PLAYERDEAD";
        GAMESTATUS[GAMESTATUS["PLAYERWIN"] = 3] = "PLAYERWIN";
        GAMESTATUS[GAMESTATUS["PAUSE"] = 4] = "PAUSE";
        GAMESTATUS[GAMESTATUS["GAMESTART"] = 5] = "GAMESTART";
    })(GAMESTATUS || (GAMESTATUS = {}));
    var GameObjInfo = (function () {
        function GameObjInfo() {
        }
        return GameObjInfo;
    }());
    var GameConstant = (function () {
        function GameConstant() {
        }
        GameConstant.Bandit = 'Bandit';
        GameConstant.Player = 'player';
        GameConstant.Door = 'door';
        GameConstant.Floor = 'floor';
        GameConstant.Bg = 'Bg';
        GameConstant.Ceiling = 'Ceiling';
        GameConstant.Board = 'board';
        GameConstant.Bullet = 'bullet';
        GameConstant.Rope = 'rope';
        GameConstant.GroundNeedles = 'groundNeedles';
        GameConstant.spine = 'spine';
        GameConstant.Serrated = 'Serrated';
        GameConstant.Spring = 'Spring';
        GameConstant.Heavy = 'Heavy';
        GameConstant.Artillery_bullet = 'artillery_bullet';
        GameConstant.Artillery = 'artillery';
        GameConstant.SAW = 'SAW';
        return GameConstant;
    }());
    var Physic = (function () {
        function Physic() {
        }
        Physic.STATIC = 'static';
        Physic.DYNAMIC = 'dynamic';
        Physic.KINEMATIC = 'kinematic';
        return Physic;
    }());

    var AnimationManager = (function () {
        function AnimationManager() {
        }
        Object.defineProperty(AnimationManager, "instance", {
            get: function () {
                if (AnimationManager.ins == null) {
                    AnimationManager.ins = new AnimationManager();
                }
                return AnimationManager.ins;
            },
            enumerable: true,
            configurable: true
        });
        AnimationManager.prototype.getAtlasAnimation = function (url, fex) {
            url = url + fex;
            return new Promise(function (resolve) {
                var roleAni = new Laya.Animation();
                roleAni.loadAtlas(url, Laya.Handler.create(null, function () {
                    resolve(roleAni);
                }));
            });
        };
        AnimationManager.prototype.scaleTween = function (target, caller, duration, complete, props, ease) {
            if (duration === void 0) { duration = 500; }
            target.visible = true;
            target.scale(0.8, 0.8);
            Laya.Tween.to(target, { scaleX: 1, scaleY: 1 }, duration, ease, Laya.Handler.create(caller, function () {
                complete && complete();
            }));
        };
        AnimationManager.prototype.scaleBTween = function (target, caller, duration, complete, props, ease) {
            if (duration === void 0) { duration = 500; }
            target.scale(1.1, 1.1);
            Laya.Tween.to(target, { scaleX: 1, scaleY: 1 }, duration, ease, Laya.Handler.create(caller, function () {
                complete && complete();
            }));
        };
        AnimationManager.prototype.upToDownTween = function (target, props, duration, caller, ease, complete) {
            Laya.Tween.to(target, props, duration, ease, Laya.Handler.create(caller, function () {
                complete && complete();
            }));
        };
        AnimationManager.prototype.showSkeletonAnimation = function (url, callBack) {
            var boomAnimation = new Laya.Skeleton();
            boomAnimation.load(url, Laya.Handler.create(this, function () {
                if (boomAnimation.player == null)
                    return;
                boomAnimation.player.playbackRate = 1;
                callBack && callBack(boomAnimation);
            }));
        };
        AnimationManager.prototype.show2dBoonAnimation = function (url, dbBox, index, loop, rate, x, y, rotation) {
            var _this = this;
            return new Promise(function (resolve) {
                var self = _this;
                dbBox.removeChildren();
                var boomAnimation = new Laya.Skeleton();
                boomAnimation.load(url, Laya.Handler.create(self, function () {
                    if (!boomAnimation.player) {
                        resolve();
                        return;
                    }
                    boomAnimation.player.playbackRate = rate;
                    boomAnimation.player.once(Laya.Event.STOPPED, self, function () {
                        resolve();
                    });
                    boomAnimation.scale(2, 2);
                    dbBox.addChild(boomAnimation);
                    boomAnimation.x = x;
                    boomAnimation.y = y;
                    boomAnimation.rotation = rotation;
                    boomAnimation.play(index, loop);
                }));
            });
        };
        AnimationManager.prototype.displayTwinkle = function (target, prefix, caller) {
            var index = 1;
            Laya.timer.loop(500, caller, function () {
                target.skin = prefix + index + ".png";
                index = index == 1 ? 2 : 1;
            });
        };
        AnimationManager.prototype.frameAni = function (target, prefix, caller, frameNum, time) {
            if (time === void 0) { time = 100; }
            var index = 1;
            Laya.timer.loop(time, caller, function () {
                target.skin = prefix + index + ".png";
                index++;
                if (index > frameNum)
                    index = 1;
            });
        };
        AnimationManager.prototype.zoomTween = function (target, caller) {
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 0.1 + 1;
                target.scale(scaleVaule, scaleVaule);
            });
        };
        AnimationManager.prototype.zoomImgTween = function (target, caller) {
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 0.02 + 1;
                target.rotation += Math.sin(scaleDelta) * 0.02;
                target.scale(scaleVaule, scaleVaule);
            });
        };
        AnimationManager.prototype.titleImgTween = function (target, caller) {
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                target.rotation += Math.sin(scaleDelta) * 0.2;
            });
        };
        AnimationManager.prototype.VTween = function (target, caller, ds) {
            if (ds === void 0) { ds = 1; }
            var xDelta = 0;
            Laya.timer.loop(20, caller, function () {
                xDelta += 0.04;
                var xVaule = Math.sin(xDelta) * ds;
                target.x += xVaule;
            });
        };
        AnimationManager.prototype.flaTween = function (target, caller) {
            var alp = 0;
            Laya.timer.loop(20, caller, function () {
                alp += 0.04;
                var alpVaule = Math.abs(Math.sin(alp) * 0.5) + 0.5;
                target.alpha = alpVaule;
            });
        };
        AnimationManager.prototype.swingHeadTween = function (target, caller) {
            var scaleDelta = 0;
            var posY = target.y;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 6;
                target.y = scaleVaule + posY;
            });
        };
        AnimationManager.prototype.swingBodyTween = function (target, caller) {
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 0.05 + 1;
                target.scale(scaleVaule, scaleVaule);
            });
        };
        AnimationManager.prototype.cardEnter = function (xs, target, caller, complete) {
            var x = xs;
            var wid = target.width;
            var w = 0.6;
            target.width = wid * w;
            Laya.timer.loop(20, caller, function onLoop() {
                w += 0.01;
                target.width = wid * w;
                target.x += 10;
                if (target.x >= x) {
                    target.width = wid;
                    Laya.timer.clear(caller, onLoop);
                    complete && complete();
                }
            });
        };
        AnimationManager.prototype.fallAni = function (target, caller, duration) {
            var disY = 1920 - target.y;
            var time = (duration / 20) + 1;
            var vX = Math.random() * 10 - 5;
            var vY = -Math.random() * 30;
            var aY = (disY - vY * time) * 2 / (time * time);
            var x = target.x;
            var y = target.y;
            var t = 0;
            var r = 360 / time;
            Laya.timer.loop(20, caller, function onLoop() {
                vY += aY;
                x += vX;
                y += vY;
                t += 20;
                target.pos(x, y);
                target.rotation += r;
                if (t > duration) {
                    Laya.timer.clear(caller, onLoop);
                    target.destroy();
                }
            });
        };
        AnimationManager.prototype.riseAni = function (target, caller, duration) {
            var vY = -Math.random() * 2;
            var t = 0;
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function onLoop() {
                target.y += vY;
                t += 20;
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 0.5 + 0.1;
                target.scale(scaleVaule, scaleVaule);
                if (t > duration) {
                    Laya.timer.clear(caller, onLoop);
                    target.destroy();
                }
            });
        };
        AnimationManager.prototype.CardFly = function (target, startPoint, targetPoint, duration, caller, complete) {
            var disX = targetPoint.x - startPoint.x;
            var disY = targetPoint.y - startPoint.y;
            var time = (duration / 30) + 1;
            var vX = (disX / time);
            var vY = -30;
            var aY = (disY - vY * time) * 2 / (time * time);
            var x = target.x;
            var y = target.y;
            var t = 0;
            var r = 360 / time;
            Laya.timer.loop(30, caller, function onLoop() {
                vY += aY;
                x += vX;
                y += vY;
                t += 30;
                target.pos(x, y);
                target.rotation += r;
                if (t > duration) {
                    Laya.timer.clear(caller, onLoop);
                    complete && complete();
                }
            });
        };
        return AnimationManager;
    }());

    var Door = (function (_super) {
        __extends(Door, _super);
        function Door() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = 'Door';
            return _this;
        }
        Door.prototype.onCreate = function (data) {
            _super.prototype.onCreate.call(this, data, true);
            if (this.rigidBody == null) {
                this.rigidBody = this.addComponent(Laya.RigidBody);
            }
            this.rigidBody.type = Physic.KINEMATIC;
            if (this.collider == null) {
                this.collider = this.addComponent(Laya.BoxCollider);
            }
            this.collider.isSensor = true;
            this.collider.label = GameConstant.Door;
            this.collider.width = 132;
            this.collider.height = 200;
            this.collider.x = (this.width - this.collider.width);
            this.collider.y = this.height - this.collider.height;
            this.createSkeleton();
        };
        Door.prototype.createSkeleton = function () {
            var _this = this;
            var url = "resource/assets/img/sk/Men_1.sk";
            AnimationManager.instance.showSkeletonAnimation(url, function (boomAnimation) {
                if (boomAnimation == null)
                    return;
                console.log("aniNum =", boomAnimation.getAnimNum());
                _this.addChild(boomAnimation);
                boomAnimation.player.playbackRate = 1;
                boomAnimation.scale(1, 1);
                boomAnimation.autoSize = true;
                boomAnimation.x = boomAnimation.width / 2;
                boomAnimation.y = _this.height;
                _this.doorAni = boomAnimation;
                boomAnimation.paused();
            });
        };
        Door.prototype.playOpenDoorAni = function (callF) {
            if (!this.doorAni)
                return;
            this.doorAni.player.once(Laya.Event.STOPPED, this, callF);
            this.doorAni.play(0, false);
        };
        Door.prototype.onRecovery = function () {
            this.doorAni.stop();
            this.doorAni.destroy();
            _super.prototype.onRecovery.call(this);
        };
        return Door;
    }(GameObj));

    var ObjectPool = (function () {
        function ObjectPool() {
            this.initPool();
        }
        Object.defineProperty(ObjectPool, "instance", {
            get: function () {
                if (this.ins == null) {
                    this.ins = new ObjectPool();
                }
                return this.ins;
            },
            enumerable: true,
            configurable: true
        });
        ObjectPool.prototype.initPool = function () {
            this.poolList = [];
            this._pool = {};
        };
        ObjectPool.prototype.createObjectByName = function (className, data) {
            var key = className.key;
            if (key == null || key == '') {
                key = className.name;
            }
            var item = Laya.Pool.getItemByClass(key, className);
            item.key = key;
            item.onCreate && item.onCreate(data);
            item.visible = true;
            return item;
        };
        ObjectPool.prototype.recoveryObj = function (obj) {
            var key = obj.key;
            if (obj) {
                obj.visible = false;
            }
            Laya.timer.frameOnce(2, this, function () {
                obj.onRecovery && obj.onRecovery();
                if (key == null || key == '') {
                    key = obj.className_key;
                }
                Laya.Pool.recover(key, obj);
            });
        };
        ObjectPool.prototype.destoryPoolByClassName = function (className) {
            var _pool = this._pool;
            var clazzs = _pool[className];
            if (clazzs != null && clazzs.length > 0) {
                var len = clazzs.length;
                for (var i = 0; i < len; i++) {
                    clazzs[i].onDestory && clazzs[i].onDestory();
                }
                clazzs = null;
            }
            delete _pool[className];
        };
        ObjectPool.prototype.destoryPool = function () {
            var _pool = this._pool;
            for (var obj in _pool) {
                var arr = _pool[obj];
                var len = arr.length;
                for (var i = 0; i < len; i++) {
                    arr[i].onDestory && arr[i].onDestory();
                }
                arr = null;
                delete _pool[obj];
            }
        };
        return ObjectPool;
    }());

    var Floor = (function (_super) {
        __extends(Floor, _super);
        function Floor() {
            var _this = _super.call(this) || this;
            _this.className_key = 'Floor';
            return _this;
        }
        Floor.prototype.onCreate = function (data) {
            _super.prototype.onCreate.call(this, data, true);
            this.width = data.width;
            this.height = data.height;
            if (this.rigidBody == null) {
                this.rigidBody = this.addComponent(Laya.RigidBody);
            }
            this.rigidBody.type = 'static';
            if (this.collider == null) {
                this.collider = this.addComponent(Laya.BoxCollider);
            }
            this.collider.label = GameConstant.Floor;
            this.collider.width = this.width;
            this.collider.height = this.height;
            var image = new Laya.Image();
            image.skin = 'resource/assets/img/game/game_floor.png';
            image.sizeGrid = '14,90,9,85';
            this.addChild(image);
            image.centerX = image.centerY = 0;
            image.size(this.width, this.height);
        };
        Floor.prototype.onRecovery = function () {
            _super.prototype.onRecovery.call(this);
        };
        Floor.prototype.set3DView = function (view3d_) {
            if (this.view3d_ == null) {
                this.view3d_ = view3d_;
            }
            this.view3d_.transform.scale = new Laya.Vector3(1, 1, 1);
            this.view3d_.transform.localScale = new Laya.Vector3(10, 10, 1);
        };
        return Floor;
    }(GameObj));
    var RoofView = (function (_super) {
        __extends(RoofView, _super);
        function RoofView() {
            var _this = _super.call(this) || this;
            _this.className_key = 'RoofView';
            return _this;
        }
        RoofView.prototype.onCreate = function (data) {
            _super.prototype.onCreate.call(this, data, true);
            this.width = data.width;
            this.height = data.height;
            if (this.rigidBody == null) {
                this.rigidBody = this.addComponent(Laya.RigidBody);
            }
            this.rigidBody.type = Physic.STATIC;
            if (this.collider == null) {
                this.collider = this.addComponent(Laya.BoxCollider);
            }
            this.collider.label = GameConstant.Ceiling;
            this.collider.width = this.width;
            this.collider.height = this.height;
            var image = new Laya.Image();
            image.skin = 'resource/assets/img/game/game_floor.png';
            this.addChild(image);
            image.centerX = image.centerY = 0;
            image.size(this.width, this.height);
        };
        RoofView.prototype.onRecovery = function () {
            _super.prototype.onRecovery.call(this);
        };
        RoofView.prototype.set3DView = function (view3d_) {
            if (this.view3d_ == null) {
                this.view3d_ = view3d_;
            }
            this.view3d_.transform.scale = new Laya.Vector3(1, 1, 1);
            this.view3d_.transform.localScale = new Laya.Vector3(10, 10, 1);
        };
        return RoofView;
    }(GameObj));
    var BgView = (function (_super) {
        __extends(BgView, _super);
        function BgView() {
            var _this = _super.call(this) || this;
            _this.className_key = 'BgView';
            return _this;
        }
        BgView.prototype.onCreate = function (data) {
            _super.prototype.onCreate.call(this, data, true);
            this.width = data.width;
            this.height = data.height;
            if (this.rigidBody == null) {
                this.rigidBody = this.addComponent(Laya.RigidBody);
            }
            this.rigidBody.type = 'static';
            if (this.collider == null) {
                this.collider = this.addComponent(Laya.BoxCollider);
            }
            this.collider.label = GameConstant.Bg;
            this.collider.width = this.width;
            this.collider.height = this.height;
            var image = new Laya.Image();
            image.skin = 'resource/assets/img/game/game_floor.png';
            this.addChild(image);
            image.centerX = image.centerY = 0;
            image.size(this.width, this.height);
        };
        BgView.prototype.onRecovery = function () {
            _super.prototype.onRecovery.call(this);
        };
        BgView.prototype.set3DView = function (view3d_) {
            if (this.view3d_ == null) {
                this.view3d_ = view3d_;
            }
            this.view3d_.transform.scale = new Laya.Vector3(1, 1, 1);
            this.view3d_.transform.localScale = new Laya.Vector3(10, 10, 1);
        };
        return BgView;
    }(GameObj));
    var FloorObj = (function (_super) {
        __extends(FloorObj, _super);
        function FloorObj() {
            return _super.call(this) || this;
        }
        return FloorObj;
    }(GameObjInfo));

    var GroundNeedles = (function (_super) {
        __extends(GroundNeedles, _super);
        function GroundNeedles() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = 'GroundNeedles';
            return _this;
        }
        GroundNeedles.prototype.onCreate = function (data) {
            this.objInfo_ = data;
            if (data.width == null) {
                data.width = 200;
                data.height = 100;
            }
            _super.prototype.onCreate.call(this, data, true);
            if (this.rigidBody == null) {
                this.rigidBody = this.addComponent(Laya.RigidBody);
            }
            this.rigidBody.type = Physic.KINEMATIC;
            if (this.collider == null) {
                this.collider = this.addComponent(Laya.BoxCollider);
            }
            this.collider.label = GameConstant.GroundNeedles;
            this.collider.width = this.width;
            this.collider.height = this.height;
            var image = new Laya.Image();
            image.skin = 'resource/assets/img/game/game_needles.png';
            this.addChild(image);
            image.centerX = image.centerY = 0;
            image.size(this.width, this.height);
        };
        GroundNeedles.prototype.onRecovery = function () {
            _super.prototype.onRecovery.call(this);
        };
        return GroundNeedles;
    }(GameObj));

    var BaseSceneUISkin = (function (_super) {
        __extends(BaseSceneUISkin, _super);
        function BaseSceneUISkin(data) {
            var _this = _super.call(this) || this;
            _this.className_key = '';
            _this.isCreate = false;
            _this.data_ = data;
            _this.on(Laya.Event.ADDED, _this, _this.onEnabled);
            _this.on(Laya.Event.REMOVED, _this, _this.onRemoved);
            return _this;
        }
        Object.defineProperty(BaseSceneUISkin.prototype, "skin", {
            get: function () {
                return this.skin_;
            },
            set: function (s) {
                this.skin_ = s;
                this.loadSkin();
            },
            enumerable: true,
            configurable: true
        });
        BaseSceneUISkin.prototype.loadSkin = function () {
            return __awaiter(this, void 0, void 0, function () {
                var json;
                return __generator(this, function (_a) {
                    json = ResUtil.getIntance().thmsConfig.contents[this.skin_];
                    json = JSON.parse(json);
                    this.createView(json);
                    if (!this.isCreate) {
                        this.isCreate = true;
                        this.childrenCreated();
                    }
                    return [2];
                });
            });
        };
        BaseSceneUISkin.prototype.onEnabled = function () {
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
        };
        BaseSceneUISkin.prototype.onCreate = function (data) {
            this.isRecovery = false;
        };
        BaseSceneUISkin.prototype.setData = function (data) {
            this.data_ = data;
        };
        BaseSceneUISkin.prototype.childrenCreated = function () {
            this.name = this.className_key;
        };
        BaseSceneUISkin.prototype.onRemoved = function () {
        };
        BaseSceneUISkin.prototype.onDestroy = function () {
            _super.prototype.onDestroy.call(this);
            this.offAll();
        };
        BaseSceneUISkin.prototype.onRecovery = function () {
            this.isRecovery = true;
            this._destroyAllComponent();
            Laya.timer.clearAll(this);
            Laya.Tween.clearTween(this);
            this.removeSelf();
        };
        return BaseSceneUISkin;
    }(Laya.Scene));

    var SpineTrun = (function (_super) {
        __extends(SpineTrun, _super);
        function SpineTrun() {
            var _this = _super.call(this) || this;
            _this.className_key = 'SpineTrun';
            _this.skin = 'game/SpineTurn.json';
            return _this;
        }
        SpineTrun.prototype.onEnabled = function () {
            this.pivot(this.width / 2, this.height / 2);
            Laya.timer.frameLoop(1, this, this.onLoop);
        };
        SpineTrun.prototype.onLoop = function () {
            this.icon_.rotation += 1.2;
        };
        SpineTrun.prototype.onRemoved = function () {
            Laya.timer.clear(this, this.onLoop);
        };
        SpineTrun.prototype.onRecovery = function () {
            this.icon_._destroyAllComponent();
            this.icon_.destroy();
            Laya.timer.clearAll(this);
            Laya.Tween.clearTween(this);
            this.removeSelf();
            this.destroy();
        };
        return SpineTrun;
    }(BaseSceneUISkin));

    var SpineBoxNeedles = (function (_super) {
        __extends(SpineBoxNeedles, _super);
        function SpineBoxNeedles() {
            var _this = _super.call(this) || this;
            _this.className_key = 'SpineBoxNeedles';
            _this.distanceJointArr = [];
            _this.skin = 'game/SpineBoxNeedles.json';
            return _this;
        }
        SpineBoxNeedles.prototype.onEnabled = function () {
            this.pivot(this.width / 2, this.height / 2);
            this.icon_.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
        };
        SpineBoxNeedles.prototype.onTriggerEnter = function (other, self, contact) {
            if (other.label.indexOf((GameConstant.Floor)) > -1 || other.label.indexOf((GameConstant.Board)) > -1) {
                this.destroyJoint();
                this.rigidBody = this.icon_.getComponent(Laya.RigidBody);
                this.rigidBody.setVelocity({ x: 0, y: 0 });
                this.rigidBody.type = Physic.STATIC;
            }
        };
        SpineBoxNeedles.prototype.onRemoved = function () {
        };
        SpineBoxNeedles.prototype.setOtherRigidBody = function (sprite) {
            this.rigidBody = this.icon_.getComponent(Laya.RigidBody);
            this.rigidBody.allowRotation = false;
            this.rigidBody.gravityScale = 4;
            var distanceJoint = new Laya.DistanceJoint();
            this._addComponentInstance(distanceJoint);
            distanceJoint.length = 5;
            distanceJoint.selfBody = this.rigidBody;
            distanceJoint.selfAnchor = [this.icon_.width / 2, this.icon_.height / 2];
            var rigidBody = sprite.getComponent(Laya.RigidBody);
            distanceJoint.otherBody = rigidBody;
            distanceJoint.frequency = 0;
            distanceJoint.damping = 0;
            distanceJoint.collideConnected = false;
            distanceJoint.otherAnchor = [sprite.width / 2, sprite.height];
            this.distanceJointArr.push(distanceJoint);
        };
        SpineBoxNeedles.prototype.destroyJoint = function () {
            var distanceJointArr = this.distanceJointArr;
            var len = distanceJointArr.length;
            for (var i = 0; i < len; i++) {
                this._destroyComponent(distanceJointArr[i]);
                distanceJointArr[i] = null;
            }
            distanceJointArr.splice(0, len);
            this.icon_.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
        };
        SpineBoxNeedles.prototype.onRecovery = function () {
            this.destroyJoint();
            Laya.timer.clearAll(this);
            Laya.Tween.clearTween(this);
            this.icon_._destroyAllComponent();
            this.icon_.destroy();
            this.removeChildren();
            this.removeSelf();
            this.destroy();
        };
        return SpineBoxNeedles;
    }(BaseSceneUISkin));

    var Board = (function (_super) {
        __extends(Board, _super);
        function Board() {
            var _this = _super.call(this) || this;
            _this.className_key = 'Board';
            return _this;
        }
        Board.prototype.onCreate = function (data) {
            _super.prototype.onCreate.call(this, data, true);
            if (this.rigidBody == null) {
                this.rigidBody = this.addComponent(Laya.RigidBody);
            }
            this.rigidBody.type = Physic.STATIC;
            if (this.collider == null) {
                this.collider = this.addComponent(Laya.BoxCollider);
            }
            this.collider.label = GameConstant.Board;
            this.collider.width = this.width;
            this.collider.height = this.height;
            var image = new Laya.Image();
            image.skin = 'resource/assets/img/game/game_floor.png';
            this.addChild(image);
            image.centerX = image.centerY = 0;
            image.size(this.width, this.height);
        };
        Board.prototype.onRecovery = function () {
            _super.prototype.onRecovery.call(this);
        };
        Board.prototype.set3DView = function (view3d_) {
            if (this.view3d_ == null) {
                this.view3d_ = view3d_;
            }
            this.view3d_.transform.scale = new Laya.Vector3(1, 1, 1);
            this.view3d_.transform.localScale = new Laya.Vector3(10, 10, 1);
        };
        return Board;
    }(GameObj));
    var BoardObj = (function (_super) {
        __extends(BoardObj, _super);
        function BoardObj() {
            return _super.call(this) || this;
        }
        return BoardObj;
    }(GameObjInfo));

    var HeavyView = (function (_super) {
        __extends(HeavyView, _super);
        function HeavyView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = 'HeavyView';
            _this.canHit = true;
            _this.distanceJointArr = [];
            return _this;
        }
        HeavyView.prototype.onCreate = function (data) {
            this.objInfo_ = data;
            if (data.width == null) {
                data.width = 102;
                data.height = 102;
            }
            _super.prototype.onCreate.call(this, data, true);
            this.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            this.width = data.width;
            this.height = data.height;
            if (this.rigidBody == null) {
                this.rigidBody = this.addComponent(Laya.RigidBody);
            }
            this.rigidBody.gravityScale = 4;
            this.rigidBody.type = Physic.DYNAMIC;
            this.rigidBody.allowRotation = false;
            if (this.collider == null) {
                this.collider = this.addComponent(Laya.BoxCollider);
            }
            this.collider.label = GameConstant.Heavy;
            this.canHit = true;
            this.collider.isSensor = false;
            this.collider.density = 0.7;
            this.collider.restitution = 0;
            this.collider.friction = 0;
            this.collider.width = this.width;
            this.collider.height = this.height;
            var image = new Laya.Image();
            image.skin = 'resource/assets/img/game/game_heavy.png';
            this.addChild(image);
            image.centerX = image.centerY = 0;
            image.size(126, 99);
        };
        HeavyView.prototype.onTriggerEnter = function (other, self, contact) {
            if (other.label.indexOf(GameConstant.Floor) > -1 || other.label.indexOf(GameConstant.Board) > -1) {
                this.rigidBody.type = Physic.KINEMATIC;
                this.collider.isSensor = true;
                this.canHit = false;
                this.rigidBody.setVelocity({ x: 0, y: 0 });
            }
            else if (other.label.indexOf(GameConstant.Player) > -1) ;
        };
        HeavyView.prototype.setOtherRigidBody = function (sprite) {
            var distanceJoint = new Laya.DistanceJoint();
            this._addComponentInstance(distanceJoint);
            distanceJoint.length = 1;
            distanceJoint.selfBody = this.rigidBody;
            distanceJoint.selfAnchor = [this.width / 2, this.height / 2];
            var rigidBody = sprite.getComponent(Laya.RigidBody);
            distanceJoint.otherBody = rigidBody;
            distanceJoint.frequency = 0;
            distanceJoint.damping = 1;
            distanceJoint.collideConnected = false;
            distanceJoint.otherAnchor = [sprite.width / 2, sprite.height];
            this.distanceJointArr.push(distanceJoint);
        };
        HeavyView.prototype.destroyJoint = function () {
            var distanceJointArr = this.distanceJointArr;
            var len = distanceJointArr.length;
            for (var i = 0; i < len; i++) {
                this._destroyComponent(distanceJointArr[i]);
                distanceJointArr[i] = null;
            }
            distanceJointArr.splice(0, len);
        };
        HeavyView.prototype.onRecovery = function () {
            this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            _super.prototype.onRecovery.call(this);
        };
        return HeavyView;
    }(GameObj));

    var SerratedView = (function (_super) {
        __extends(SerratedView, _super);
        function SerratedView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = 'SerratedView';
            _this.canHit = true;
            _this.distanceJointArr = [];
            return _this;
        }
        SerratedView.prototype.onCreate = function (data) {
            this.objInfo_ = data;
            if (data.width == null) {
                data.width = 80;
                data.height = 80;
            }
            _super.prototype.onCreate.call(this, data, true);
            this.canHit = true;
            this.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            this.width = data.width;
            this.height = data.height;
            if (this.rigidBody == null) {
                this.rigidBody = this.addComponent(Laya.RigidBody);
            }
            this.rigidBody.type = Physic.DYNAMIC;
            this.rigidBody.allowRotation = true;
            this.rigidBody.gravityScale = 4;
            if (this.collider == null) {
                this.collider = this.addComponent(Laya.CircleCollider);
            }
            this.collider.isSensor = true;
            this.collider.density = 0.7;
            this.collider.restitution = 0;
            this.collider.friction = 0;
            this.collider.radius = this.width / 2;
            this.collider.label = GameConstant.Serrated;
            var image = new Laya.Image();
            image.skin = 'resource/assets/img/game/game_serrated.png';
            this.addChild(image);
            image.centerX = image.centerY = 0;
            image.size(102, 102);
        };
        SerratedView.prototype.onTriggerEnter = function (other, self, contact) {
            if (other.label.indexOf((GameConstant.Floor)) > -1 || other.label.indexOf((GameConstant.Board)) > -1) {
                this.destroyJoint();
                this.rigidBody.type = Physic.KINEMATIC;
                this.rigidBody.allowRotation = false;
                this.rigidBody.setVelocity({ x: 0, y: 0 });
            }
        };
        SerratedView.prototype.setOtherRigidBody = function (sprite) {
            var distanceJoint = new Laya.DistanceJoint();
            this._addComponentInstance(distanceJoint);
            distanceJoint.length = 1;
            distanceJoint.selfBody = this.rigidBody;
            distanceJoint.selfAnchor = [this.width, this.height / 2];
            var rigidBody = sprite.getComponent(Laya.RigidBody);
            distanceJoint.otherBody = rigidBody;
            distanceJoint.frequency = 0;
            distanceJoint.damping = 1;
            distanceJoint.collideConnected = false;
            distanceJoint.otherAnchor = [sprite.width / 2, sprite.height];
            this.distanceJointArr.push(distanceJoint);
        };
        SerratedView.prototype.destroyJoint = function () {
            var distanceJointArr = this.distanceJointArr;
            var len = distanceJointArr.length;
            for (var i = 0; i < len; i++) {
                this._destroyComponent(distanceJointArr[i]);
                distanceJointArr[i] = null;
            }
            distanceJointArr.splice(0, len);
        };
        SerratedView.prototype.onRecovery = function () {
            this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            _super.prototype.onRecovery.call(this);
        };
        return SerratedView;
    }(GameObj));

    var TurnboardView = (function (_super) {
        __extends(TurnboardView, _super);
        function TurnboardView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = 'TurnboardView';
            return _this;
        }
        TurnboardView.prototype.onCreate = function (data) {
            if (data.width == null) {
                data.width = 340;
                data.height = 48;
            }
            _super.prototype.onCreate.call(this, data, true);
            Laya.timer.frameLoop(1, this, this.onLoop);
            if (this.rigidBody == null) {
                this.rigidBody = this.addComponent(Laya.RigidBody);
            }
            this.rigidBody.type = 'static';
            if (this.collider == null) {
                this.collider = this.addComponent(Laya.BoxCollider);
            }
            this.collider.label = GameConstant.Board;
            this.collider.width = this.width;
            this.collider.height = this.height;
            var image = new Laya.Image();
            image.skin = 'resource/assets/img/game/game_board.png';
            this.addChild(image);
            image.centerX = image.centerY = 0;
            image.size(this.width, this.height);
        };
        TurnboardView.prototype.onLoop = function () {
            this.rotation += 1.2;
        };
        TurnboardView.prototype.onRecovery = function () {
            _super.prototype.onRecovery.call(this);
            Laya.timer.clear(this, this.onLoop);
        };
        return TurnboardView;
    }(GameObj));

    var SpringView = (function (_super) {
        __extends(SpringView, _super);
        function SpringView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = 'SpringView';
            return _this;
        }
        SpringView.prototype.onCreate = function (data) {
            this.objInfo_ = data;
            if (data.width == null) {
                data.width = 80;
                data.height = 76;
            }
            _super.prototype.onCreate.call(this, data, true);
            this.width = data.width;
            this.height = data.height;
            if (this.rigidBody == null) {
                this.rigidBody = this.addComponent(Laya.RigidBody);
            }
            this.rigidBody.type = Physic.KINEMATIC;
            if (this.collider == null) {
                this.collider = this.addComponent(Laya.BoxCollider);
            }
            this.collider.label = GameConstant.Spring;
            this.collider.width = this.width;
            this.collider.height = this.height;
            var image = new Laya.Image();
            image.skin = 'resource/assets/img/game/game_Spring.png';
            this.addChild(image);
            image.centerX = image.centerY = 0;
            image.size(80, 76);
        };
        SpringView.prototype.onRecovery = function () {
            _super.prototype.onRecovery.call(this);
        };
        return SpringView;
    }(GameObj));

    var Utils = (function () {
        function Utils() {
        }
        Utils.arrayToObjInItemId = function (arr) {
            if (arr == null || arr.length == 0)
                return null;
            var obj = {};
            for (var index in arr) {
                if (arr[index].item_id) {
                    obj[arr[index].item_id] = arr[index];
                }
                else if (arr[index].id) {
                    obj[arr[index].id] = arr[index];
                }
            }
            return obj;
        };
        Utils.querStr = function (query) {
            return Object.keys(query)
                .map(function (key) { return query[key] && encodeURIComponent(key) + "=" + encodeURIComponent(query[key]); })
                .join('&');
        };
        Utils.parseQueryString = function (urlParam) {
            urlParam = decodeURIComponent(urlParam);
            var paramStrArr = urlParam.split("&");
            var ret = {};
            for (var i = 0, len = paramStrArr.length; i < len; i++) {
                var keyValueArr = paramStrArr[i].split("=");
                ret[keyValueArr[0]] = keyValueArr[1];
            }
            return ret;
        };
        Utils.prizeRand = function (oArr) {
            var sum = 0;
            var rand = 0;
            var result = 0;
            console.log(oArr);
            for (var i in oArr) {
                sum += Number(oArr[i].w);
            }
            for (var i in oArr) {
                rand = Math.floor(Math.random() * sum + 1);
                if (oArr[i].w >= rand) {
                    result = oArr[i].id;
                    break;
                }
                else {
                    sum -= oArr[i].w;
                }
            }
            return result;
        };
        Utils.getRandomByArrID = function (oArr) {
            var sum = 0;
            var rand = 0;
            var result = 0;
            console.log(oArr);
            for (var i in oArr) {
                sum += Number(oArr[i]);
            }
            for (var i in oArr) {
                rand = Math.floor(Math.random() * sum + 1);
                if (oArr[i] >= rand) {
                    result = Number(i);
                    break;
                }
                else {
                    sum -= oArr[i];
                }
            }
            return result;
        };
        Utils.cutOutStr = function (str, cutNum) {
            var reg = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g;
            var len = 0;
            var index = 0;
            for (var i = 0; i < str.length; i++) {
                var code = str.charCodeAt(i).toString(16);
                var oldLen = len;
                var oldIndex = index;
                if (code.length > 2) {
                    len += 2;
                }
                else {
                    len += 1;
                }
                ++index;
                if (reg.test(str.substr(i, 2))) {
                    ++i;
                    ++index;
                }
                if (len > cutNum) {
                    index = oldIndex;
                    len = oldLen;
                    break;
                }
                else if (len == cutNum) {
                    break;
                }
            }
            var retStr = str.substr(0, index);
            if (index < str.length) {
                retStr = retStr + '...';
            }
            return retStr;
        };
        Utils.random = function (min, max) {
            return Math.round(Math.random() * (max - min) + Number(min));
        };
        Utils.getRandomArr = function (total, len) {
            var result = [];
            var pi = total / len;
            for (var i = 1; i < len; i++) {
                var ran = Math.random() * pi;
                var c1 = pi - ran;
                var c2 = pi + ran;
                if (c1 > 0 && c2 > 0) {
                    result[i - 1] = c1;
                    result[i] = c2;
                }
                else {
                    result[i - 1] = result[i] = pi;
                }
            }
            return result;
        };
        Utils.getRandom = function (start, end) {
            return Math.floor(Math.random() * (end - start + 1) + start);
        };
        Utils.exactCount = function (exactValue, count) {
            if (count === void 0) { count = 0; }
            var num = Math.pow(10, count);
            var value = (exactValue * num) | 0;
            return value / num;
        };
        Utils.limit = function (from, end) {
            var min = Math.min(from, end);
            var max = Math.max(from, end);
            var range = max - min;
            return min + Math.random() * range;
        };
        Utils.formatTime = function (time) {
            var str = "";
            var h = time / 3600;
            h = parseInt(h + "");
            var m = (time - h * 3600) / 60;
            m = parseInt(m + "");
            var s = time - h * 3600 - m * 60;
            s = parseInt(s + "");
            if (h > 0) {
                str += h + ":";
            }
            if (m > 9) {
                str += m + ":";
            }
            else {
                str += "0" + m + ":";
            }
            if (s > 9) {
                str += s + "";
            }
            else {
                str += "0" + s;
            }
            return str;
        };
        Utils.formatTime2 = function (time) {
            var str = "";
            var d = time / 86400;
            d = parseInt(d + "");
            var h = (time - d * 86400) / 3600;
            h = parseInt(h + "");
            var m = (time - d * 86400 - h * 3600) / 60;
            m = parseInt(m + "");
            if (d > 0)
                str += d + "天";
            if (h > 9) {
                str += h + "时";
            }
            else {
                str += "0" + h + "时";
            }
            if (m > 9) {
                str += m + "分";
            }
            else {
                str += "0" + m + "分";
            }
            return str;
        };
        Utils.millisecondsToDate = function (time, fmt) {
            var d = new Date(time);
            var o = {
                "M+": d.getMonth() + 1,
                "d+": d.getDate(),
                "h+": d.getHours(),
                "H+": d.getHours(),
                "m+": d.getMinutes(),
                "s+": d.getSeconds(),
                "q+": Math.floor((d.getMonth() + 3) / 3),
                "S": d.getMilliseconds()
            };
            var week = {
                "0": "\u65e5",
                "1": "\u4e00",
                "2": "\u4e8c",
                "3": "\u4e09",
                "4": "\u56db",
                "5": "\u4e94",
                "6": "\u516d"
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            if (/(E+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[d.getDay() + ""]);
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                }
            }
            return fmt;
        };
        Utils.judgeIsOnTheSameDay = function (lastTime, nowTime) {
            if (!lastTime || !nowTime) {
                return false;
            }
            var a = 24 * 60 * 60 * 1000;
            var b = Math.floor(lastTime / a);
            var c = Math.floor(nowTime / a);
            if (b == c) {
                return true;
            }
            else {
                return false;
            }
        };
        Utils.objToParams = function (obj) {
            if (obj == null)
                return '';
            var arr = [];
            for (var key in obj) {
                arr.push(key + '=' + obj[key]);
            }
            var str = arr.join('&');
            arr = null;
            return str;
        };
        Utils.getArrBystringOrArr = function (flagId) {
            if (flagId == '') {
                return [];
            }
            if (flagId.indexOf('[') == 0 && flagId.lastIndexOf(']') == flagId.length - 1) {
                flagId = flagId.substring(1, flagId.length - 1);
                return flagId.split(',');
            }
            else {
                return flagId.split(',');
            }
        };
        Utils.getQueryString = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null)
                return unescape(r[2]);
            return null;
        };
        Utils.upset = function (arr) {
            var len = arr.length;
            var index;
            var tmp;
            for (var i = len - 1; i >= 0; i--) {
                index = (Math.random() * i) | 0;
                tmp = arr[i];
                arr[i] = arr[index];
                arr[index] = tmp;
            }
        };
        Utils.randomArray = function (arr) {
            var index = (Math.random() * arr.length) | 0;
            return arr[index];
        };
        Utils.getObjLength = function (map) {
            var len = 0;
            for (var obj in map) {
                if (map[obj]) {
                    len++;
                }
            }
            return len;
        };
        Utils.copy = function (obj) {
            var _this = this;
            var result;
            if (obj instanceof Object) {
                result = obj instanceof Array ? [] : {};
                Object.keys(obj).forEach(function (item) {
                    result[item] = _this.copy(obj[item]);
                });
            }
            else {
                result = obj;
            }
            return result;
        };
        Utils.getOffestAngle = function (px, py, mx, my, offRoa) {
            if (offRoa === void 0) { offRoa = 0; }
            var x = Math.abs(px - mx);
            var y = Math.abs(py - my);
            var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            z = z == 0 ? 1 : z;
            var cos = y / z;
            var radina = Math.acos(cos);
            var angle = Math.floor(180 / (Math.PI / radina));
            if (mx > px && my > py) {
                angle = 90 - angle;
            }
            if (mx == px && my > py) {
                angle = 90;
            }
            if (mx == px && my < py) {
                angle = 270;
            }
            if (mx > px && my == py) {
                angle = 0;
            }
            if (mx < px && my > py) {
                angle = 90 + angle;
            }
            if (mx < px && my == py) {
                angle = 180;
            }
            if (mx < px && my < py) {
                angle = 270 - angle;
            }
            if (mx > px && my < py) {
                angle = 270 + angle;
            }
            return (angle + offRoa) % 360;
        };
        Utils.getAngle = function (radian) {
            return 180 * radian / Math.PI;
        };
        Utils.getRadian = function (angle) {
            return angle / 180 * Math.PI;
        };
        Utils.getRadianTwoPoint = function (p1, p2) {
            var xdis = p2.x - p1.x;
            var ydis = p2.y - p1.y;
            return Math.atan2(ydis, xdis);
        };
        Utils.getAngleTwoPoint = function (p1, p2) {
            var vy = p2.y - p1.y;
            var vx = p2.x - p1.x;
            var ang;
            if (vy == 0) {
                if (vx < 0) {
                    return 180;
                }
                return 0;
            }
            if (vx == 0) {
                if (vy > 0) {
                    ang = 90;
                }
                else if (vy < 0) {
                    ang = 270;
                }
                return ang;
            }
            ang = this.getAngle(Math.atan(Math.abs(vy) / Math.abs(vx)));
            if (vx > 0) {
                if (vy < 0) {
                    ang = 360 - ang;
                }
            }
            else {
                if (vy > 0) {
                    ang = 180 - ang;
                }
                else {
                    ang = 180 + ang;
                }
            }
            return ang;
        };
        Utils.getDistance = function (p1, p2) {
            var disX = p2.x - p1.x;
            var disY = p2.y - p1.y;
            var disQ = Math.pow(disX, 2) + Math.pow(disY, 2);
            return Math.sqrt(disQ);
        };
        Utils.getRunDirection = function (startPoint, endPoint, speed) {
            if (speed === void 0) { speed = 1; }
            var disX = endPoint.x - startPoint.x;
            var disY = endPoint.y - startPoint.y;
            var dis = this.getDistance(startPoint, endPoint);
            dis = dis == 0 ? 1 : dis;
            var v1 = disX / dis * speed;
            var v2 = disY / dis * speed;
            startPoint = null;
            endPoint = null;
            return [v1, v2];
        };
        Utils.getRunDirectionAndVel = function (startPoint, endPoint, speed) {
            var disX = endPoint.x - startPoint.x;
            var disY = endPoint.y - startPoint.y;
            var v1 = 1;
            var v2 = 1;
            if (disX < 0) {
                v1 = -1;
            }
            if (disY < 0) {
                v2 = -1;
            }
            return [v1, v2];
        };
        Utils.randomTo360 = function (angle) {
            angle = angle % 360;
            if (angle < 0) {
                angle += 360;
            }
            return angle;
        };
        Utils.getVertorModel = function (v) {
            return Math.sqrt(v.x * v.x + v.y * v.y);
        };
        Utils.getModelVertor = function (v, isNewVertor) {
            if (isNewVertor === void 0) { isNewVertor = false; }
            var model = Utils.getVertorModel(v);
            if (isNewVertor) {
                return { x: v.x / model, y: v.y / model };
            }
            v.x /= model;
            v.y /= model;
            return v;
        };
        Utils.getVerticalVertor = function (v) {
            var a = v.y * v.y / (v.x * v.x + v.y * v.y);
            a = Math.sqrt(a);
            var b = -(a * v.x) / v.y;
            return [{ x: a, y: b }, { x: -a, y: -b }];
        };
        Utils.vertorMultiplyNumber = function (v, num, isNewVertor) {
            if (isNewVertor === void 0) { isNewVertor = false; }
            if (isNewVertor) {
                return { x: v.x * num, y: v.y * num };
            }
            v.x *= num;
            v.y *= num;
            return v;
        };
        Utils.f = function (n, m) {
            return n == 1 ? n : (Utils.f(n - 1, m) + m - 1) % n + 1;
        };
        return Utils;
    }());

    var GameConst = (function () {
        function GameConst() {
        }
        GameConst.playerModelScale = 10;
        GameConst.BASE_INFO = "BASE_INFO";
        GameConst.SIGN_INFO = "SIGN_INFO";
        GameConst.INVITE_INFO = "INVITE_INFO";
        GameConst.SKIN_INFO = "SKIN_INFO";
        GameConst.MaxLevel = "MaxLevel";
        return GameConst;
    }());

    var localData;
    (function (localData) {
        var SignData = (function () {
            function SignData() {
            }
            return SignData;
        }());
        localData.SignData = SignData;
        var CardData = (function () {
            function CardData() {
            }
            return CardData;
        }());
        localData.CardData = CardData;
        var CardConfig = (function () {
            function CardConfig() {
            }
            return CardConfig;
        }());
        localData.CardConfig = CardConfig;
        var levelData = (function () {
            function levelData() {
            }
            return levelData;
        }());
        localData.levelData = levelData;
        var InviteData = (function () {
            function InviteData() {
            }
            return InviteData;
        }());
        localData.InviteData = InviteData;
    })(localData || (localData = {}));
    var netData;
    (function (netData) {
        var UserInfos = (function () {
            function UserInfos() {
                this.openId = "";
                this.nick = "";
                this.avatarUrl = "";
                this.sex = 0;
                this.sessionKey = "";
                this.accessToken = "";
            }
            return UserInfos;
        }());
        netData.UserInfos = UserInfos;
        var PlayerData = (function () {
            function PlayerData() {
                this.power = 10;
                this.currLevel = 1;
                this.inviteReward = 0;
            }
            return PlayerData;
        }());
        netData.PlayerData = PlayerData;
        var SignIn = (function () {
            function SignIn() {
                this.total_count = 0;
                this.timeStamp = null;
            }
            return SignIn;
        }());
        netData.SignIn = SignIn;
        var Invite = (function () {
            function Invite() {
                this.inviteId = [];
            }
            return Invite;
        }());
        netData.Invite = Invite;
        var Inviter = (function () {
            function Inviter() {
            }
            return Inviter;
        }());
        netData.Inviter = Inviter;
    })(netData || (netData = {}));

    var GameData = (function () {
        function GameData() {
            this.skinArr = [];
            this.hasSkin = { 1: { isUnlock: true, isUsing: true } };
            this.URL_DELETE_DATA = "https://littlegame.32yx.com/DelMiniGameData.fcgi";
            this.URL_DELETE_DATA_TEST = "https://172.17.3.217:8090/DelMiniGameData.fcgi";
            this.URL_SAVE_DATA = "https://littlegame.32yx.com/MiniGameData.fcgi";
            this.URL_SAVE_DATA_TEST = "http://172.17.3.217:8090/MiniGameData.fcgi";
            this.URL_OF_RANK = "https://littlegame.32yx.com/MiniGameRank.fcgi";
            this.URL_OF_RANK_TEST = "http://172.17.3.217:8090/MiniGameRank.fcgi";
            this.URL_OF_INVITE = "https://littlegame.32yx.com/Invitation.fcgi";
            this.URL_OF_INVITE_TEST = "http://172.17.3.217:8090/Invitation.fcgi";
            this.URL_TIMESTAMP = "https://littlegame.32yx.com/gettime.php";
            this.URL_WX_REQ = "https://yxtest.32yx.com/MiniGame.fcgi";
            this.URL_WX_REQ_TEST = "http://172.17.3.217:8090/MiniGame.fcgi";
            this.MinigameResUrl = 'https://package.32yx.com/ecy_game_small/laya/cutRope/wx_res/';
            this.wxMiniGameResUrl = "https://package.32yx.com/ecy_game_small/laya/cutRope/wx_res/wx_res_v_z_1_12/";
            this.qqMinigameResUrl = 'https://package.32yx.com/ecy_game_small/laya/cutRope/qq_res/';
            this.qqMiniGameResUrl = "https://package.32yx.com/ecy_game_small/laya/cutRope/qq_res/qq_res_v_z_1_12/";
            this.ucMiniGameResUrl = "https://package.32yx.com/ecy_game_small/laya/cutRope/uc_res/res_1_0/";
            this.gameId = "1038";
            this.videoTips = "视频观看完整才能获得奖励哦";
            this.gameVersion = 1010;
            this.isConVersion = false;
            this.isGetOpenid = true;
            this.isNextGameOrBackOpenBox = false;
            this.isOpenBoxNextShowVideo = false;
            this.isWDJOpenBox = false;
            this.isWDJSett = false;
            this._defaultMaxLevel = 90;
            this.userInfo = new netData.UserInfos();
            this.playerData = new netData.PlayerData();
            this.signIn = new netData.SignIn();
            this.invite = new netData.Invite();
            this.isByShare = false;
            this.inviterId = null;
            this.inviterPlatform = null;
            this._defaultV = { x: 8, y: 0 };
            this.maxLevel = 100;
        }
        GameData.getInstance = function () {
            if (!GameData.instance) {
                GameData.instance = new GameData();
            }
            return GameData.instance;
        };
        Object.defineProperty(GameData.prototype, "serverConf", {
            set: function (sc) {
                this.serverConf_ = sc;
                this.initServer();
            },
            enumerable: true,
            configurable: true
        });
        GameData.prototype.initConfig = function (res) {
            GameConst.infos = res;
            if (DeviceUtil.isWXMiniGame()) {
                GameData.getInstance().serverConf = GameConst.infos.serverConf;
            }
            else {
                GameData.getInstance().serverConf = "nts";
            }
            if (GameData.getInstance().gameVersion > GameConst.infos.version) {
                GameData.getInstance().isConVersion = true;
            }
            else {
                GameData.getInstance().isConVersion = false;
                GameData.getInstance().isNextGameOrBackOpenBox = GameConst.infos.isNextGameOrBackOpenBox;
                GameData.getInstance().isOpenBoxNextShowVideo = GameConst.infos.isOpenBoxNextShowVideo;
                GameData.getInstance().isWDJOpenBox = GameConst.infos.isWDJOpenBox;
                GameData.getInstance().isWDJSett = GameConst.infos.isWDJSett;
            }
            GameData.getInstance().bannerId = GameConst.infos.bannerId;
            GameData.getInstance().videoId = GameConst.infos.videoId;
            GameData.getInstance().boxId = GameConst.infos.boxId;
            GameData.getInstance().isOpen = GameConst.infos.isOpen;
        };
        GameData.prototype.initServer = function () {
            switch (GameData.instance.serverConf_) {
                case "nts":
                    this.URL_SAVE_DATA = this.URL_SAVE_DATA_TEST;
                    this.URL_OF_RANK = this.URL_OF_RANK_TEST;
                    this.URL_OF_INVITE = this.URL_OF_INVITE_TEST;
                    this.URL_DELETE_DATA = this.URL_DELETE_DATA_TEST;
                    break;
                case "wts":
                    break;
                case "wzs":
                    break;
            }
        };
        Object.defineProperty(GameData.prototype, "defaultMaxLevel", {
            get: function () {
                return this._defaultMaxLevel;
            },
            set: function (level) {
                this._defaultMaxLevel = level;
            },
            enumerable: true,
            configurable: true
        });
        GameData.prototype.defaultV = function (direction) {
            switch (direction) {
                case "left": return { x: -this._defaultV.x, y: this._defaultV.y };
                case "right": return this._defaultV;
            }
        };
        return GameData;
    }());

    var BufferLoadingManger = (function () {
        function BufferLoadingManger() {
            this.buffers = {};
        }
        Object.defineProperty(BufferLoadingManger, "instance", {
            get: function () {
                if (BufferLoadingManger.ins == null) {
                    BufferLoadingManger.ins = new BufferLoadingManger();
                }
                return BufferLoadingManger.ins;
            },
            enumerable: true,
            configurable: true
        });
        BufferLoadingManger.prototype.registerOneBuffer = function (key, bufferLoading) {
            this.buffers[key] = bufferLoading;
        };
        BufferLoadingManger.prototype.showBuffer = function (key, info) {
            if (info === void 0) { info = ""; }
            var currbuffer = this.buffers[key];
            if (currbuffer && !currbuffer.parent) {
                this.bufferGroup.addChild(currbuffer);
                if (currbuffer.onShow) {
                    currbuffer.onShow();
                }
            }
            if (currbuffer) {
                currbuffer.setLabelInfo(info);
            }
            this.bufferGroup.mouseThrough = false;
        };
        BufferLoadingManger.prototype.hiddBuffer = function (key) {
            var currbuffer = this.buffers[key];
            if (currbuffer.parent) {
                this.bufferGroup.removeChild(currbuffer);
                if (currbuffer.onHidd) {
                    currbuffer.onHidd();
                }
            }
            this.bufferGroup.mouseThrough = true;
        };
        BufferLoadingManger.prototype.destroyBuffer = function (key) {
            var currbuffer = this.buffers[key];
            if (currbuffer.parent) {
                this.bufferGroup.removeChild(currbuffer);
                if (currbuffer.onDestroy) {
                    currbuffer.onDestroy();
                }
                this.buffers[key] = null;
            }
        };
        return BufferLoadingManger;
    }());

    var GameBufferLoading = (function (_super) {
        __extends(GameBufferLoading, _super);
        function GameBufferLoading() {
            var _this = _super.call(this) || this;
            _this.className_key = "GameBufferLoading";
            _this.bg_img_res = "game_panel_db_png";
            _this.width = Laya.stage.width;
            _this.height = Laya.stage.height;
            _this.init();
            return _this;
        }
        GameBufferLoading.prototype.init = function () {
            if (!this.bg_img) {
                this.bg_img = new Laya.Image(ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName(this.bg_img_res).url));
                this.bg_img.sizeGrid = "3,3,2,2";
                this.bg_img.width = this.width;
                this.bg_img.height = this.height;
                this.bg_img.alpha = 0.7;
                this.addChild(this.bg_img);
                this.mouseEnabled = true;
                this.bg_img.mouseEnabled = true;
                this.bg_img.mouseThrough = false;
            }
            if (!this.img_circle) {
                this.img_circle = new Laya.Image();
                this.img_circle.skin = "resource/assets/loading/loading_circle.png";
                this.img_circle.anchorX = this.img_circle.anchorY = 0.5;
                this.img_circle.centerX = this.img_circle.centerY = 0;
                this.addChild(this.img_circle);
            }
        };
        GameBufferLoading.prototype.setLabelInfo = function (info) {
        };
        GameBufferLoading.prototype.onShow = function () {
            if (this.img_circle) {
                this.img_circle.rotation = 0;
                Laya.Tween.to(this.img_circle, { rotation: 360 }, 500, null, Laya.Handler.create(this, this.onShow));
            }
        };
        GameBufferLoading.prototype.onHidd = function () {
            if (this.img_circle) {
                Laya.Tween.clearAll(this.img_circle);
            }
        };
        return GameBufferLoading;
    }(Laya.Sprite));

    var HttpMgr = (function () {
        function HttpMgr() {
            this.printLog = true;
            this.defaultTimeOut = 5000;
        }
        HttpMgr.getInstance = function () {
            if (!HttpMgr.instance_) {
                HttpMgr.instance_ = new HttpMgr();
            }
            return HttpMgr.instance_;
        };
        HttpMgr.prototype.sendHttp = function (url, data, secces, fail, type, responseType) {
            var _this = this;
            if (data === void 0) { data = null; }
            if (secces === void 0) { secces = null; }
            if (fail === void 0) { fail = null; }
            if (type === void 0) { type = "post"; }
            console.log("url ->", url);
            var jsonStr = data ? JSON.stringify(data) : "null";
            if (this.printLog) {
                var date = new Date();
                console.log("HTTP Send :[" + date.toTimeString() + " time:" + date.getTime() + "]  \n    send data: " + jsonStr);
            }
            var httpRequest = Laya.Pool.getItemByClass("HttpRequest", Laya.HttpRequest);
            httpRequest.http.timeout = this.defaultTimeOut;
            httpRequest.http.ontimeout = function () {
                console.log('ontimeout');
                if (fail) {
                    fail(null);
                    TipsManager.instance.showDefaultTips("网络请求超时！");
                }
                httpRequest.http.ontimeout = null;
                Laya.Pool.recover("HttpRequest", httpRequest);
            };
            httpRequest.once(Laya.Event.COMPLETE, this, function (rev) {
                if (secces) {
                    secces(JSON.parse(rev));
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.once(Laya.Event.ERROR, this, function (e) {
                if (_this.printLog) {
                    var date = new Date();
                    console.log("HTTP Error :[" + date.toTimeString() + " time:" + date.getTime() + "]");
                }
                if (fail) {
                    fail(e);
                    TipsManager.instance.showDefaultTips("你的网络已断开，请检查设置。");
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.send(url, data ? jsonStr : null, type, "text");
        };
        HttpMgr.prototype.sendHttpDY = function (url, data, secces, fail, type, responseType) {
            var _this = this;
            if (data === void 0) { data = null; }
            if (secces === void 0) { secces = null; }
            if (fail === void 0) { fail = null; }
            if (type === void 0) { type = "post"; }
            if (type == "get" && data) {
                url += Utils.querStr(data);
            }
            console.log("url ->", url);
            var jsonStr = data ? JSON.stringify(data) : "null";
            if (this.printLog) {
                var date = new Date();
                console.log("HTTP Send :[" + date.toTimeString() + " time:" + date.getTime() + "]  \n    send data: " + jsonStr);
            }
            var httpRequest = Laya.Pool.getItemByClass("HttpRequest", Laya.HttpRequest);
            httpRequest.http.timeout = this.defaultTimeOut;
            httpRequest.http.ontimeout = function () {
                console.log("ontimeout");
                if (fail) {
                    fail(null);
                    TipsManager.instance.showDefaultTips("网络请求超时！");
                }
                httpRequest.http.ontimeout = null;
                Laya.Pool.recover("HttpRequest", httpRequest);
            };
            httpRequest.once(Laya.Event.COMPLETE, this, function (rev) {
                if (secces) {
                    secces(JSON.parse(rev));
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.once(Laya.Event.ERROR, this, function (e) {
                if (_this.printLog) {
                    var date = new Date();
                    console.log("HTTP Error :[" + date.toTimeString() + " time:" + date.getTime() + "]");
                }
                if (fail) {
                    fail(e);
                    TipsManager.instance.showDefaultTips("你的网络已断开，请检查设置。");
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            if (type == "get") {
                httpRequest.send(url);
                return;
            }
            httpRequest.send(url, data ? jsonStr : null, "post", "text");
        };
        HttpMgr.prototype.sendPostHttp = function (url, data, secces, fail, type, showParse) {
            var _this = this;
            if (data === void 0) { data = null; }
            if (secces === void 0) { secces = null; }
            if (fail === void 0) { fail = null; }
            if (type === void 0) { type = "post"; }
            if (showParse === void 0) { showParse = true; }
            console.log("url ->", url);
            var param;
            if (showParse) {
                param = this.getEncodeParam(data);
            }
            param = data;
            var httpRequest = Laya.Pool.getItemByClass("HttpRequest", Laya.HttpRequest);
            httpRequest.http.timeout = this.defaultTimeOut;
            httpRequest.http.ontimeout = function () {
                console.log('ontimeout');
                if (fail) {
                    fail(null);
                    TipsManager.instance.showDefaultTips("网络请求超时！");
                }
                httpRequest.http.ontimeout = null;
                Laya.Pool.recover("HttpRequest", httpRequest);
            };
            httpRequest.once(Laya.Event.COMPLETE, this, function (rev) {
                if (secces) {
                    secces(rev);
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.once(Laya.Event.ERROR, this, function (e) {
                if (_this.printLog) {
                    var date = new Date();
                    console.log("HTTP Error :[" + date.toTimeString() + " time:" + date.getTime() + "]");
                }
                if (fail) {
                    fail(e);
                    TipsManager.instance.showDefaultTips("你的网络已断开，请检查设置。");
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.send(url, param, type, "json");
        };
        HttpMgr.prototype.sendGetHttp = function (url, data, secces, fail, type, responseType) {
            var _this = this;
            if (data === void 0) { data = null; }
            if (secces === void 0) { secces = null; }
            if (fail === void 0) { fail = null; }
            if (type === void 0) { type = "get"; }
            console.log("url ->", url);
            var jsonStr = data ? JSON.stringify(data) : "null";
            var param = '';
            param = this.getEncodeParam(data);
            if (this.printLog) {
                var date = new Date();
                console.log("HTTP Send :[" + date.toTimeString() + " time:" + date.getTime() + "]  \n    send data: " + jsonStr);
            }
            var httpRequest = Laya.Pool.getItemByClass("HttpRequest", Laya.HttpRequest);
            httpRequest.http.timeout = this.defaultTimeOut;
            var httpRequests = httpRequest.http;
            httpRequests.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            httpRequest.http.ontimeout = function () {
                console.log('ontimeout');
                if (fail) {
                    fail(null);
                    TipsManager.instance.showDefaultTips("网络请求超时！");
                }
                httpRequest.http.ontimeout = null;
                Laya.Pool.recover("HttpRequest", httpRequest);
            };
            httpRequest.once(Laya.Event.COMPLETE, this, function (rev) {
                if (secces) {
                    secces(JSON.parse(rev));
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.once(Laya.Event.ERROR, this, function (e) {
                if (_this.printLog) {
                    var date = new Date();
                    console.log("HTTP Error :[" + date.toTimeString() + " time:" + date.getTime() + "]");
                }
                if (fail) {
                    fail(e);
                    TipsManager.instance.showDefaultTips("你的网络已断开，请检查设置。");
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.send(url + param, param, type, "text");
        };
        HttpMgr.prototype.getEncodeParam = function (data) {
            var param = '';
            if (data) {
                if (data instanceof String) {
                    return data;
                }
                var arr = [];
                for (var obj in data) {
                    arr.push(obj + '=' + data[obj]);
                }
                param = arr.join('&');
            }
            return param;
        };
        return HttpMgr;
    }());

    var PlatformDY = (function () {
        function PlatformDY() {
        }
        PlatformDY.getOpenidAndAuthorzia = function (obj) {
            return new Promise(function (resolve) {
                HttpMgr.getInstance().sendHttpDY(PlatformDY.url + "/index.php?act=userinfo&webid=16&version=" + PlatformDY.version + "&", obj, function (rev) {
                    var jsonRev = rev.data;
                    PlatformDY.openid = jsonRev.openid;
                    console.log("DY---> authorzia rev = " + rev);
                    resolve(jsonRev);
                }, null, "get");
            });
        };
        PlatformDY.startGame = function () {
            return new Promise(function (resolve) {
                HttpMgr.getInstance().sendHttpDY(PlatformDY.url + "/index.php?act=index&webid=16&version=" + PlatformDY.version + "&openid=" + PlatformDY.openid + "&", null, function (rev) {
                    var jsonRev = rev.data;
                    console.log("DY---> startGame rev = " + rev);
                    resolve(jsonRev);
                }, null, "get");
            });
        };
        PlatformDY.endGame = function (obj) {
            return new Promise(function (resolve) {
                HttpMgr.getInstance().sendHttpDY(PlatformDY.url + "/index.php?act=end&webid=16&version=" + PlatformDY.version + "&openid=" + PlatformDY.openid + "&", obj, function (rev) {
                    var jsonRev = rev.data;
                    console.log("DY---> endGame rev = " + rev);
                    resolve(jsonRev);
                }, null, "get");
            });
        };
        PlatformDY.clickGame = function (id) {
            HttpMgr.getInstance().sendHttpDY(PlatformDY.url + "/index.php?act=game&webid=16&version=" + PlatformDY.version + "&id=" + id + "&openid=" + PlatformDY.openid, null, function (rev) {
                console.log("DY---> clickGame rev = " + rev);
            }, null, "get");
        };
        PlatformDY.toGame = function (id) {
            HttpMgr.getInstance().sendHttpDY(PlatformDY.url + "/index.php?act=cgame&webid=16&version=" + PlatformDY.version + "&id=" + id + "&openid=" + PlatformDY.openid, null, function (rev) {
                console.log("DY---> toGame rev = " + rev);
            }, null, "get");
        };
        PlatformDY.getGameList = function () {
            return new Promise(function (resolve) {
                var url = PlatformDY.url + "/index.php?act=gamelist&webid=16&version=" + PlatformDY.version + "&openid=" + PlatformDY.openid;
                HttpMgr.getInstance().sendHttpDY(url, null, function (rev) {
                    console.log("DY---> getGameList rev = " + rev);
                    PlatformDY.bannerInfos = rev.data.banner;
                    PlatformDY.gameListInfos = GameManager.instance.delSameFlag(rev.data.gamelist);
                    resolve(rev.data);
                }, null, "get");
            });
        };
        PlatformDY.initBoxView = function (adUnitId) {
            PlatformDY.boxView = platform.createAppBox(adUnitId);
            PlatformDY.boxView.load();
            PlatformDY.boxView.onClose(PlatformDY.boxViewClose);
        };
        PlatformDY.boxViewClose = function () {
            console.log("qq boxView close");
            if (PlatformDY.tempCloseBoxViewCallFunc) {
                PlatformDY.tempCloseBoxViewCallFunc.apply(PlatformDY.tempCloseBoxViewCallObj, PlatformDY.tempCloseBoxViewCallParam);
                PlatformDY.tempCloseBoxViewCallFunc = null;
            }
        };
        PlatformDY.showBoxView = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!PlatformDY.boxView) {
                                console.error("boxView not init!!!!!!!!!");
                            }
                            return [4, PlatformDY.boxView.show()];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        PlatformDY.url = "https://fx.xyxapi.com/home";
        PlatformDY.qqUrl = "https://qq.xyxapi.com/home/jjxpy";
        PlatformDY.version = 1;
        PlatformDY.miniProgramList = [
            "wxab25c21f394059f7",
            "wxdc9df67ccf148dfd",
            "wxcc5f1dba1f408c14",
            "wx3bccea145a3d578d",
            "wx72b3922b76cf8ae2",
            "wx456ada1706d364d5",
            "wxc739584afdc7288e",
            "wxbb0b00982cbd1b4f",
            "wx99854f9305fcbab6"
        ];
        PlatformDY.qqMiniProgramList = [
            "wxab25c21f394059f7",
            "wxdc9df67ccf148dfd",
            "wxcc5f1dba1f408c14",
            "wx3bccea145a3d578d",
            "wx72b3922b76cf8ae2",
            "wx456ada1706d364d5",
            "wxc739584afdc7288e",
            "wxbb0b00982cbd1b4f",
            "wx99854f9305fcbab6"
        ];
        return PlatformDY;
    }());

    var BasePopAnimationEnterType = (function () {
        function BasePopAnimationEnterType() {
        }
        BasePopAnimationEnterType.SCALE_MODE = "SCALE_MODE";
        BasePopAnimationEnterType.SCALE_MODE_BACK = "SCALE_MODE_BACK";
        BasePopAnimationEnterType.NOMORL_MODE = "NOMORL_MODE";
        return BasePopAnimationEnterType;
    }());

    var BasePopSceneView = (function (_super) {
        __extends(BasePopSceneView, _super);
        function BasePopSceneView(data) {
            var _this = _super.call(this) || this;
            _this.className_key = '';
            _this.bg_img_res = "game_panel_db_png";
            _this.data_ = data;
            return _this;
        }
        BasePopSceneView.prototype.init = function () {
            if (this.bg_img_res && !this.bg_img) {
                console.log('BasePopSceneView 创建背景');
                this.bg_img = new Laya.Image(ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName(this.bg_img_res).url));
                this.bg_img.sizeGrid = "3,3,2,2";
                this.bg_img.width = this.width;
                this.bg_img.height = this.height;
                this.addChild(this.bg_img);
            }
        };
        BasePopSceneView.prototype.childrenCreated = function () {
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            if (this.bg_img_res && !this.bg_img) {
                console.log(this.bg_img_res);
                this.bg_img = new Laya.Image(ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName(this.bg_img_res).url));
                this.bg_img.sizeGrid = "3,3,2,2";
                this.bg_img.width = this.width;
                this.bg_img.height = this.height;
                this.addChildAt(this.bg_img, 0);
            }
        };
        BasePopSceneView.prototype.onEnabled = function () {
            _super.prototype.onEnabled.call(this);
            if (this.isCreate) {
                this.showEnterAnimation();
            }
        };
        BasePopSceneView.prototype.showEnterAnimation = function () {
            if (this.grp_center) {
                this.grp_center.centerX = this.grp_center.centerY = 0;
                switch (this.showEnterType) {
                    case BasePopAnimationEnterType.SCALE_MODE:
                        this.grp_center.scale(0, 0);
                        Laya.Tween.to(this.grp_center, { scaleX: 1, scaleY: 1 }, 200, Laya.Ease.backInOut);
                        break;
                    case BasePopAnimationEnterType.SCALE_MODE_BACK:
                        this.grp_center.scale(1.5, 1.5);
                        this.grp_center.alpha = 0;
                        Laya.Tween.to(this.grp_center, { scaleX: 1, scaleY: 1, alpha: 1 }, 200, Laya.Ease.backInOut);
                        break;
                    default: break;
                }
            }
        };
        BasePopSceneView.prototype.onDestroy = function () {
            if (ViewManager.getInstance().views['' + this.className_key]) {
                ViewManager.getInstance().views['' + this.className_key] = null;
            }
            this.off(Laya.Event.REMOVED, this, this.onRemoved);
            this.off(Laya.Event.ADDED, this, this.onEnabled);
            _super.prototype.onDestroy.call(this);
        };
        BasePopSceneView.prototype.removeSelf = function () {
            if (GameManager.instance.userButton != null) {
                GameManager.instance.userButton.show();
            }
            return _super.prototype.removeSelf.call(this);
        };
        return BasePopSceneView;
    }(BaseSceneUISkin));

    var DyItem = (function (_super) {
        __extends(DyItem, _super);
        function DyItem(skin) {
            var _this = _super.call(this) || this;
            _this.className_key = '';
            _this.skin = skin;
            return _this;
        }
        DyItem.prototype.click = function () {
            GameMgr.getInstance().clickGameItem(this.itemData.id, this.itemData.appid, this.itemData.url);
        };
        return DyItem;
    }(BaseSceneUISkin));

    var HotScene = (function (_super) {
        __extends(HotScene, _super);
        function HotScene(skin) {
            var _this = _super.call(this) || this;
            _this.className_key = 'HotScene';
            _this.isflag2 = 3;
            _this.skin = skin;
            return _this;
        }
        HotScene.prototype.childrenCreated = function () {
        };
        HotScene.prototype.initView = function (listdata_, itemW, itemH) {
            listdata_.sort(function () {
                return Math.random() > 0.5 ? -1 : 1;
            });
            GameManager.instance.addArr(listdata_, 15);
            this.listdata = listdata_;
            this.itemW = itemW;
            this.itemH = itemH;
            if (this.isCreate) {
                this.initList();
            }
        };
        HotScene.prototype.onEnabled = function () {
            _super.prototype.onEnabled.call(this);
            if (this.isCreate) {
                this.width = Laya.stage.width;
                this.height = Laya.stage.height;
                DeviceUtil.adaptationBgImg(this.img_bg);
                this.gameList.height = Laya.stage.height - 350;
                this.btn_continue.on(Laya.Event.CLICK, this, this.onClick);
                Laya.timer.loop(3000, this, this.onLoop);
            }
        };
        HotScene.prototype.onLoop = function () {
            var startIndex1 = this.gameList.startIndex;
            startIndex1 += this.isflag2;
            var len = Math.floor(this.gameList.height / 425);
            var index = this.gameList.array.length - len * 3;
            if (startIndex1 >= index) {
                this.isflag2 = -3;
            }
            if (startIndex1 <= 0) {
                this.isflag2 = 3;
            }
            this.gameList.tweenTo(startIndex1, 500);
        };
        HotScene.prototype.onClick = function () {
            this.removeSelf();
            Laya.timer.clearAll(this);
        };
        HotScene.prototype.initList = function () {
            this.gameList.itemRender = HotItem;
            this.gameList.vScrollBarSkin = "";
            this.gameList.array = this.listdata;
        };
        return HotScene;
    }(BasePopSceneView));
    var HotItem = (function (_super) {
        __extends(HotItem, _super);
        function HotItem() {
            var _this = _super.call(this, "Dy/HotItem.json") || this;
            _this.className_key = 'HotItem';
            return _this;
        }
        HotItem.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.on(Laya.Event.CLICK, this, this.click);
        };
        HotItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
        };
        HotItem.prototype.dataChange = function (data) {
            this.itemData = data;
            this.icon_header.skin = data.img;
            if (this.icon_mask) {
                this.icon_header.mask = this.icon_mask;
                this.icon_header.mask.visible = false;
            }
            if (this.name_txt) {
                this.name_txt.text = data.title;
            }
            if (data.click == "0") {
                this.txt_count.visible = false;
            }
            else {
                this.txt_count.visible = true;
                this.txt_count.text = data.click + '万人';
            }
        };
        Object.defineProperty(HotItem.prototype, "dataSource", {
            set: function (value) {
                if (!value)
                    return;
                this.dataChange(value);
            },
            enumerable: true,
            configurable: true
        });
        HotItem.prototype.onEnabled = function () {
        };
        HotItem.prototype.click = function () {
            GameMgr.getInstance().clickGameItem(this.itemData.id, this.itemData.appid, this.itemData.url, false);
        };
        return HotItem;
    }(DyItem));

    var GameMgr = (function () {
        function GameMgr() {
            this.randomTime = 0;
            this.player = 'player';
            this.powerTime = 'powerTime';
            this.sign = 'sign';
            this.sex = 'sex';
            this.invite = 'invite';
            this.randomTime = new Date().getTime();
        }
        GameMgr.getInstance = function () {
            if (!GameMgr.instance) {
                GameMgr.instance = new GameMgr();
            }
            return GameMgr.instance;
        };
        GameMgr.prototype.registerBufferLoading = function () {
            BufferLoadingManger.instance.registerOneBuffer("GameBufferLoading", new GameBufferLoading());
        };
        GameMgr.prototype.showBufferLoading = function (info) {
            if (info === void 0) { info = ""; }
            BufferLoadingManger.instance.showBuffer("GameBufferLoading", info);
            Laya.timer.clear(this, this.hiddeBufferLoading);
            Laya.timer.once(60000, this, this.hiddeBufferLoading);
        };
        GameMgr.prototype.hiddeBufferLoading = function () {
            Laya.timer.clear(this, this.hiddeBufferLoading);
            BufferLoadingManger.instance.hiddBuffer("GameBufferLoading");
        };
        GameMgr.prototype.sendKVJson = function (key, value, canUseNet) {
            if (canUseNet === void 0) { canUseNet = false; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve, reject) {
                            if (canUseNet) ;
                            else {
                                Laya.LocalStorage.setJSON(key, value);
                                resolve();
                            }
                        })];
                });
            });
        };
        GameMgr.prototype.sendKV = function (key, value, canUseNet) {
            if (canUseNet === void 0) { canUseNet = false; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve, reject) {
                            if (canUseNet) ;
                            else {
                                Laya.LocalStorage.setItem(key, value);
                                resolve();
                            }
                        })];
                });
            });
        };
        GameMgr.prototype.getKV = function (key, canUseNet) {
            if (canUseNet === void 0) { canUseNet = false; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve, reject) {
                            if (canUseNet) ;
                            else {
                                var data = Laya.LocalStorage.getItem(key);
                                resolve(data);
                            }
                        })];
                });
            });
        };
        GameMgr.prototype.getKVJson = function (key, canUseNet) {
            if (canUseNet === void 0) { canUseNet = false; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve, reject) {
                            if (canUseNet) ;
                            else {
                                var data = Laya.LocalStorage.getJSON(key);
                                resolve(data);
                            }
                        })];
                });
            });
        };
        GameMgr.prototype.startGame = function () {
            if (!DeviceUtil.isWXMiniGame() && !DeviceUtil.isQQMiniGame())
                return;
            PlatformDY.startGame();
        };
        GameMgr.prototype.endGame = function () {
            if (!DeviceUtil.isWXMiniGame() && !DeviceUtil.isQQMiniGame())
                return;
            PlatformDY.endGame({ id: 16, level: GameManager.instance.currLevel });
        };
        GameMgr.prototype.clickGameItem = function (id, appid, url, canOpen) {
            if (canOpen === void 0) { canOpen = true; }
            PlatformDY.clickGame(id);
            if (PlatformDY.miniProgramList.indexOf(appid) == -1) {
                appid = PlatformDY.miniProgramList[Math.floor(Math.random() * PlatformDY.miniProgramList.length)];
            }
            platform.navigateToMiniProgram({
                appId: appid, path: url,
                success: function () {
                    PlatformDY.toGame(id);
                },
                fail: function () {
                    if (canOpen) {
                        var hotScene = ViewManager.getInstance().showView(HotScene, "Dy/HotScene.json");
                        hotScene.initView(PlatformDY.gameListInfos.concat(), 0, 0);
                    }
                }
            });
        };
        GameMgr.prototype.showBoxViewBg = function () {
            if (!this.boxViewBg) {
                console.log('boxViewBg 背景');
                this.boxViewBg = new Laya.Image(ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName("game_panel_db_png").url));
                this.boxViewBg.sizeGrid = "3,3,2,2";
                this.boxViewBg.width = Laya.stage.width;
                this.boxViewBg.height = Laya.stage.height;
            }
            Laya.stage.addChild(this.boxViewBg);
        };
        GameMgr.prototype.closeBoxViewBg = function () {
            if (this.boxViewBg) {
                this.boxViewBg.removeSelf();
            }
        };
        return GameMgr;
    }());
    window['GameMgr'] = GameMgr;

    var ConnectBoard = (function (_super) {
        __extends(ConnectBoard, _super);
        function ConnectBoard() {
            var _this = _super.call(this) || this;
            _this.className_key = 'ConnectBoard';
            _this.distanceJointArr = [];
            _this.skin = 'game/ConnectBoard.json';
            return _this;
        }
        ConnectBoard.prototype.onEnabled = function () {
            this.pivot(this.width / 2, this.height / 2);
        };
        ConnectBoard.prototype.onRemoved = function () {
            this.icon_._destroyAllComponent();
        };
        ConnectBoard.prototype.setOtherRigidBody = function (sprite) {
            this.rigidBody = this.icon_.getComponent(Laya.RigidBody);
            var distanceJoint = new Laya.RopeJoint();
            this._addComponentInstance(distanceJoint);
            distanceJoint.maxLength = 15;
            distanceJoint.selfBody = this.rigidBody;
            var rigidBody = sprite.getComponent(Laya.RigidBody);
            distanceJoint.otherBody = rigidBody;
            distanceJoint.collideConnected = false;
            this.distanceJointArr.push(distanceJoint);
        };
        ConnectBoard.prototype.destroyJoint = function () {
            var distanceJointArr = this.distanceJointArr;
            var len = distanceJointArr.length;
            for (var i = 0; i < len; i++) {
                this._destroyComponent(distanceJointArr[i]);
                distanceJointArr[i] = null;
            }
            distanceJointArr.splice(0, len);
        };
        ConnectBoard.prototype.onRecovery = function () {
            if (this.isRecovery)
                return;
            this.isRecovery = true;
            this.destroyJoint();
            this.icon_._destroyAllComponent();
            this.icon_.destroy();
            Laya.timer.clearAll(this);
            Laya.Tween.clearTween(this);
            this.removeSelf();
            this.destroy();
        };
        return ConnectBoard;
    }(BaseSceneUISkin));

    var EventMgr = (function (_super) {
        __extends(EventMgr, _super);
        function EventMgr() {
            return _super.call(this) || this;
        }
        EventMgr.getInstance = function () {
            if (!EventMgr._instance) {
                EventMgr._instance = new EventMgr();
            }
            return EventMgr._instance;
        };
        EventMgr.prototype.addEvent = function (eventType, obj, callFunc) {
            this.on(eventType, obj, callFunc);
        };
        EventMgr.prototype.removeEvent = function (eventType, obj, callFunc) {
            this.off(eventType, obj, callFunc, false);
        };
        EventMgr.prototype.sendEvent = function (eventType) {
            var args = [];
            for (var _a = 1; _a < arguments.length; _a++) {
                args[_a - 1] = arguments[_a];
            }
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            this.event(eventType, args);
        };
        EventMgr.ONHIDE = 'onhide';
        EventMgr.ONSHOW = 'onshow';
        return EventMgr;
    }(Laya.EventDispatcher));
    window['EventMgr'] = EventMgr;

    var SoundConst = (function () {
        function SoundConst() {
        }
        SoundConst.BGM = "bgm";
        SoundConst.CLICK = "click";
        SoundConst.WIN = "win";
        SoundConst.PASS = "pass";
        return SoundConst;
    }());

    var SoundManager = (function () {
        function SoundManager() {
            this._shakeIsOpen = true;
            this._soundIsOpen = true;
            this.sufix = "_mp3";
            this.effectPool = {};
            this._musicOpen = true;
            this._bgvolume = 1;
            this.effectPools = {};
            this.onPlaySoundNum = 0;
            this.effectVolume = 1;
            this._soundOpen = true;
        }
        SoundManager.getInstance = function () {
            if (!SoundManager.instance) {
                SoundManager.instance = new SoundManager();
            }
            return SoundManager.instance;
        };
        Object.defineProperty(SoundManager.prototype, "shakeIsOpen", {
            get: function () {
                return this._shakeIsOpen;
            },
            set: function (isOpen) {
                this._shakeIsOpen = isOpen;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SoundManager.prototype, "soundIsOpen", {
            get: function () {
                return this._soundIsOpen;
            },
            set: function (isOpen) {
                this._soundIsOpen = isOpen;
                this.musicOpen = isOpen;
                this.soundOpen = isOpen;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SoundManager.prototype, "musicOpen", {
            get: function () {
                return this._musicOpen;
            },
            set: function (value) {
                this._musicOpen = value;
                if (value) {
                    this.playBgMusic();
                }
                else {
                    this.stopBgMusic();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SoundManager.prototype, "bgm", {
            get: function () {
                return this._bgm;
            },
            set: function (bgm) {
                if (!this._bgm || this._bgm != bgm) {
                    this._bgm = bgm;
                    this.playBgMusic();
                }
                else if (this._bgm == bgm) {
                    this.stopBgMusic();
                    this.playBgMusic();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SoundManager.prototype, "bgvolume", {
            get: function () {
                return this._bgvolume;
            },
            set: function (value) {
                this.musicChannel && (this.musicChannel.volume = value);
                this._bgvolume = value;
            },
            enumerable: true,
            configurable: true
        });
        SoundManager.prototype.playBgMusic = function () {
            if (this.musicOpen)
                this.playMusic();
        };
        SoundManager.prototype.playMusic = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _url, music;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
                                if (!SoundManager.getInstance()._bgm)
                                    return [2];
                                if (SoundManager.getInstance().bgInnerAudioContext) {
                                    SoundManager.getInstance().bgInnerAudioContext.play();
                                    return [2];
                                }
                                SoundManager.getInstance().bgInnerAudioContext = platform.createInnerAudioContext();
                                SoundManager.getInstance().bgInnerAudioContext.src = 'sound/bgm.mp3';
                                SoundManager.getInstance().bgInnerAudioContext.autoplay = true;
                                SoundManager.getInstance().bgInnerAudioContext.loop = true;
                                SoundManager.getInstance().bgInnerAudioContext.onPlay = function () {
                                    SoundManager.getInstance().playBgMusic();
                                };
                                return [2];
                            }
                            _url = "resource/assets/sound/" + SoundConst.BGM + ".mp3";
                            music = SoundManager.getInstance().effectPool[SoundManager.getInstance().bgm];
                            console.log("play BGM ->", music);
                            if (!(!music || !music.loaded)) return [3, 2];
                            return [4, ResUtil.getIntance().getAsyncRESByUrl(_url)];
                        case 1:
                            music = _a.sent();
                            SoundManager.getInstance().effectPool[SoundManager.getInstance().bgm] = music;
                            this.playMusic();
                            return [3, 3];
                        case 2:
                            SoundManager.getInstance().musicChannel = music.play(0, 0);
                            SoundManager.getInstance().musicChannel.volume = SoundManager.getInstance().bgvolume;
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        SoundManager.prototype.stopBgMusic = function () {
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
                if (SoundManager.getInstance().bgInnerAudioContext) {
                    SoundManager.getInstance().bgInnerAudioContext.stop();
                    return;
                }
                return;
            }
            SoundManager.getInstance().musicChannel && SoundManager.getInstance().musicChannel.stop();
            SoundManager.getInstance().musicChannel = null;
        };
        Object.defineProperty(SoundManager.prototype, "soundOpen", {
            get: function () {
                return this._soundOpen;
            },
            set: function (_soundOpen) {
                this._soundOpen = _soundOpen;
            },
            enumerable: true,
            configurable: true
        });
        SoundManager.prototype.playEffect = function (soundName) {
            return __awaiter(this, void 0, void 0, function () {
                var _url, sound, soundChannel, soundChannel;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _url = "resource/assets/sound/" + soundName + ".mp3";
                            if (this._soundOpen == false || !soundName || soundName == "")
                                return [2];
                            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
                                this.playMiniGameEffect(soundName);
                                return [2];
                            }
                            sound = this.effectPool[soundName];
                            if (!(!sound || !sound.audioBuffer || !sound._disposed)) return [3, 5];
                            return [4, ResUtil.getIntance().getAsyncRESByUrl(_url)];
                        case 1:
                            sound = _a.sent();
                            if (!sound) return [3, 2];
                            this.effectPool[soundName] = sound;
                            soundChannel = sound.play(0, 1);
                            soundChannel.volume = this.effectVolume;
                            return [3, 4];
                        case 2: return [4, ResUtil.getIntance().getAsyncRESByUrl(_url).then(function () {
                                _this.playEffect(soundName);
                            })];
                        case 3:
                            _a.sent();
                            return [2];
                        case 4: return [3, 6];
                        case 5:
                            soundChannel = sound.play(0, 1);
                            if (soundChannel) {
                                soundChannel.play();
                            }
                            soundChannel.volume = this.effectVolume;
                            _a.label = 6;
                        case 6: return [2];
                    }
                });
            });
        };
        SoundManager.prototype.playMiniGameEffect = function (soundName) {
            if (DeviceUtil.isQQMiniGame()) {
                var innerAudioContext_1 = this.effectPools[soundName];
                if (!innerAudioContext_1) {
                    SoundManager.getInstance().effectPools[soundName] = innerAudioContext_1 = platform.createInnerAudioContext();
                    innerAudioContext_1.autoplay = true;
                    innerAudioContext_1.src = "sound/" + soundName + '.mp3';
                    innerAudioContext_1.onError(function () {
                        innerAudioContext_1.destroy();
                        SoundManager.getInstance().effectPools[soundName] = null;
                    });
                    innerAudioContext_1.onStop(function () {
                        innerAudioContext_1.destroy();
                        SoundManager.getInstance().effectPools[soundName] = null;
                    });
                }
                innerAudioContext_1.play();
                return;
            }
            var miniSounds = this.effectPools[soundName];
            if (!miniSounds) {
                this.effectPools[soundName] = miniSounds = [];
            }
            var miniSound;
            if (miniSounds.length < 1) {
                miniSound = new MiniGameSound();
                miniSound.create(soundName);
            }
            else {
                miniSound = miniSounds.shift();
                if (miniSound.isEnded == false) {
                    miniSound = new MiniGameSound();
                    miniSound.create(soundName);
                }
                else {
                    miniSound.play();
                }
            }
            this.onPlaySoundNum += 1;
        };
        return SoundManager;
    }());
    var MiniGameSound = (function () {
        function MiniGameSound() {
        }
        MiniGameSound.prototype.create = function (soundName) {
            var _this = this;
            this.innerAudioContext = platform.createInnerAudioContext();
            this.innerAudioContext.onEnded(function () {
                _this.isEnded = true;
                SoundManager.getInstance().effectPools[_this.soundName].push(_this);
                SoundManager.getInstance().onPlaySoundNum -= 1;
            });
            this.isEnded = false;
            this.soundName = soundName;
            this.innerAudioContext.src = "sound/" + soundName + '.mp3';
            this.innerAudioContext.autoplay = true;
        };
        MiniGameSound.prototype.play = function () {
            this.innerAudioContext.play();
        };
        return MiniGameSound;
    }());

    /*
     * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
     * Digest Algorithm, as defined in RFC 1321.
     * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * Distributed under the BSD License
     * See http://pajhome.org.uk/crypt/md5 for more info.
     */
    var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

    /*
     * These are the functions you'll usually want to call
     * They take string arguments and return either hex or base-64 encoded strings
     */
    function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}

    /*
     * Calculate the MD5 of an array of little-endian words, and a bit length
     */
    function core_md5(x, len)
    {
      /* append padding */
      x[len >> 5] |= 0x80 << ((len) % 32);
      x[(((len + 64) >>> 9) << 4) + 14] = len;

      var a =  1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d =  271733878;

      for(var i = 0; i < x.length; i += 16)
      {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;

        a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
        d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
        c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
        b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
        a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
        d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
        c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
        b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
        a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
        d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
        c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
        b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
        a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
        d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
        c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
        b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

        a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
        d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
        c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
        b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
        a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
        d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
        c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
        b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
        a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
        d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
        c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
        b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
        a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
        d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
        c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
        b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

        a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
        d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
        c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
        b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
        a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
        d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
        c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
        b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
        a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
        d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
        c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
        b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
        a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
        d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
        c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
        b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

        a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
        d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
        c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
        b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
        a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
        d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
        c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
        b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
        a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
        d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
        c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
        b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
        a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
        d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
        c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
        b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
      }
      return Array(a, b, c, d);

    }

    /*
     * These functions implement the four basic operations the algorithm uses.
     */
    function md5_cmn(q, a, b, x, s, t)
    {
      return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
    }
    function md5_ff(a, b, c, d, x, s, t)
    {
      return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }
    function md5_gg(a, b, c, d, x, s, t)
    {
      return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }
    function md5_hh(a, b, c, d, x, s, t)
    {
      return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5_ii(a, b, c, d, x, s, t)
    {
      return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    /*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */
    function safe_add(x, y)
    {
      var lsw = (x & 0xFFFF) + (y & 0xFFFF);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return (msw << 16) | (lsw & 0xFFFF);
    }

    /*
     * Bitwise rotate a 32-bit number to the left.
     */
    function bit_rol(num, cnt)
    {
      return (num << cnt) | (num >>> (32 - cnt));
    }

    /*
     * Convert a string to an array of little-endian words
     * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
     */
    function str2binl(str)
    {
      var bin = Array();
      var mask = (1 << chrsz) - 1;
      for(var i = 0; i < str.length * chrsz; i += chrsz)
        bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
      return bin;
    }

    /*
     * Convert an array of little-endian words to a hex string.
     */
    function binl2hex(binarray)
    {
      var hex_tab =  "0123456789abcdef";
      var str = "";
      for(var i = 0; i < binarray.length * 4; i++)
      {
        str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
               hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
      }
      return str;
    }

    window.md5 = hex_md5;


    var md5 = {hex_md5};

    /*
    CryptoJS v3.1.2
    code.google.com/p/crypto-js
    (c) 2009-2013 by Jeff Mott. All rights reserved.
    code.google.com/p/crypto-js/wiki/License
    */
    var CryptoJS = CryptoJS || function (h, s) {
        var f = {},
            g = f.lib = {},
            q = function () {},
            m = g.Base = {
                extend: function (a) {
                    q.prototype = this;
                    var c = new q;
                    a && c.mixIn(a);
                    c.hasOwnProperty("init") || (c.init = function () {
                        c.$super.init.apply(this, arguments);
                    });
                    c.init.prototype = c;
                    c.$super = this;
                    return c
                },
                create: function () {
                    var a = this.extend();
                    a.init.apply(a, arguments);
                    return a
                },
                init: function () {},
                mixIn: function (a) {
                    for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                    a.hasOwnProperty("toString") && (this.toString = a.toString);
                },
                clone: function () {
                    return this.init.prototype.extend(this)
                }
            },
            r = g.WordArray = m.extend({
                init: function (a, c) {
                    a = this.words = a || [];
                    this.sigBytes = c != s ? c : 4 * a.length;
                },
                toString: function (a) {
                    return (a || k).stringify(this)
                },
                concat: function (a) {
                    var c = this.words,
                        d = a.words,
                        b = this.sigBytes;
                    a = a.sigBytes;
                    this.clamp();
                    if (b % 4)
                        for (var e = 0; e < a; e++) c[b + e >>> 2] |= (d[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((b + e) % 4);
                    else if (65535 < d.length)
                        for (e = 0; e < a; e += 4) c[b + e >>> 2] = d[e >>> 2];
                    else c.push.apply(c, d);
                    this.sigBytes += a;
                    return this
                },
                clamp: function () {
                    var a = this.words,
                        c = this.sigBytes;
                    a[c >>> 2] &= 4294967295 <<
                        32 - 8 * (c % 4);
                    a.length = h.ceil(c / 4);
                },
                clone: function () {
                    var a = m.clone.call(this);
                    a.words = this.words.slice(0);
                    return a
                },
                random: function (a) {
                    for (var c = [], d = 0; d < a; d += 4) c.push(4294967296 * h.random() | 0);
                    return new r.init(c, a)
                }
            }),
            l = f.enc = {},
            k = l.Hex = {
                stringify: function (a) {
                    var c = a.words;
                    a = a.sigBytes;
                    for (var d = [], b = 0; b < a; b++) {
                        var e = c[b >>> 2] >>> 24 - 8 * (b % 4) & 255;
                        d.push((e >>> 4).toString(16));
                        d.push((e & 15).toString(16));
                    }
                    return d.join("")
                },
                parse: function (a) {
                    for (var c = a.length, d = [], b = 0; b < c; b += 2) d[b >>> 3] |= parseInt(a.substr(b,
                        2), 16) << 24 - 4 * (b % 8);
                    return new r.init(d, c / 2)
                }
            },
            n = l.Latin1 = {
                stringify: function (a) {
                    var c = a.words;
                    a = a.sigBytes;
                    for (var d = [], b = 0; b < a; b++) d.push(String.fromCharCode(c[b >>> 2] >>> 24 - 8 * (b % 4) & 255));
                    return d.join("")
                },
                parse: function (a) {
                    for (var c = a.length, d = [], b = 0; b < c; b++) d[b >>> 2] |= (a.charCodeAt(b) & 255) << 24 - 8 * (b % 4);
                    return new r.init(d, c)
                }
            },
            j = l.Utf8 = {
                stringify: function (a) {
                    try {
                        return decodeURIComponent(escape(n.stringify(a)))
                    } catch (c) {
                        throw Error("Malformed UTF-8 data");
                    }
                },
                parse: function (a) {
                    return n.parse(unescape(encodeURIComponent(a)))
                }
            },
            u = g.BufferedBlockAlgorithm = m.extend({
                reset: function () {
                    this._data = new r.init;
                    this._nDataBytes = 0;
                },
                _append: function (a) {
                    "string" == typeof a && (a = j.parse(a));
                    this._data.concat(a);
                    this._nDataBytes += a.sigBytes;
                },
                _process: function (a) {
                    var c = this._data,
                        d = c.words,
                        b = c.sigBytes,
                        e = this.blockSize,
                        f = b / (4 * e),
                        f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);
                    a = f * e;
                    b = h.min(4 * a, b);
                    if (a) {
                        for (var g = 0; g < a; g += e) this._doProcessBlock(d, g);
                        g = d.splice(0, a);
                        c.sigBytes -= b;
                    }
                    return new r.init(g, b)
                },
                clone: function () {
                    var a = m.clone.call(this);
                    a._data = this._data.clone();
                    return a
                },
                _minBufferSize: 0
            });
        g.Hasher = u.extend({
            cfg: m.extend(),
            init: function (a) {
                this.cfg = this.cfg.extend(a);
                this.reset();
            },
            reset: function () {
                u.reset.call(this);
                this._doReset();
            },
            update: function (a) {
                this._append(a);
                this._process();
                return this
            },
            finalize: function (a) {
                a && this._append(a);
                return this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function (a) {
                return function (c, d) {
                    return (new a.init(d)).finalize(c)
                }
            },
            _createHmacHelper: function (a) {
                return function (c, d) {
                    return (new t.HMAC.init(a,
                        d)).finalize(c)
                }
            }
        });
        var t = f.algo = {};
        return f
    }(Math);
    (function (h) {
        for (var s = CryptoJS, f = s.lib, g = f.WordArray, q = f.Hasher, f = s.algo, m = [], r = [], l = function (a) {
                return 4294967296 * (a - (a | 0)) | 0
            }, k = 2, n = 0; 64 > n;) {
            var j;
            a: {
                j = k;
                for (var u = h.sqrt(j), t = 2; t <= u; t++)
                    if (!(j % t)) {
                        j = !1;
                        break a
                    } j = !0;
            }
            j && (8 > n && (m[n] = l(h.pow(k, 0.5))), r[n] = l(h.pow(k, 1 / 3)), n++);
            k++;
        }
        var a = [],
            f = f.SHA256 = q.extend({
                _doReset: function () {
                    this._hash = new g.init(m.slice(0));
                },
                _doProcessBlock: function (c, d) {
                    for (var b = this._hash.words, e = b[0], f = b[1], g = b[2], j = b[3], h = b[4], m = b[5], n = b[6], q = b[7], p = 0; 64 > p; p++) {
                        if (16 > p) a[p] =
                            c[d + p] | 0;
                        else {
                            var k = a[p - 15],
                                l = a[p - 2];
                            a[p] = ((k << 25 | k >>> 7) ^ (k << 14 | k >>> 18) ^ k >>> 3) + a[p - 7] + ((l << 15 | l >>> 17) ^ (l << 13 | l >>> 19) ^ l >>> 10) + a[p - 16];
                        }
                        k = q + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & m ^ ~h & n) + r[p] + a[p];
                        l = ((e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22)) + (e & f ^ e & g ^ f & g);
                        q = n;
                        n = m;
                        m = h;
                        h = j + k | 0;
                        j = g;
                        g = f;
                        f = e;
                        e = k + l | 0;
                    }
                    b[0] = b[0] + e | 0;
                    b[1] = b[1] + f | 0;
                    b[2] = b[2] + g | 0;
                    b[3] = b[3] + j | 0;
                    b[4] = b[4] + h | 0;
                    b[5] = b[5] + m | 0;
                    b[6] = b[6] + n | 0;
                    b[7] = b[7] + q | 0;
                },
                _doFinalize: function () {
                    var a = this._data,
                        d = a.words,
                        b = 8 * this._nDataBytes,
                        e = 8 * a.sigBytes;
                    d[e >>> 5] |= 128 << 24 - e % 32;
                    d[(e + 64 >>> 9 << 4) + 14] = h.floor(b / 4294967296);
                    d[(e + 64 >>> 9 << 4) + 15] = b;
                    a.sigBytes = 4 * d.length;
                    this._process();
                    return this._hash
                },
                clone: function () {
                    var a = q.clone.call(this);
                    a._hash = this._hash.clone();
                    return a
                }
            });
        s.SHA256 = q._createHelper(f);
        s.HmacSHA256 = q._createHmacHelper(f);
    })(Math);
    (function () {
        var h = CryptoJS,
            s = h.enc.Utf8;
        h.algo.HMAC = h.lib.Base.extend({
            init: function (f, g) {
                f = this._hasher = new f.init;
                "string" == typeof g && (g = s.parse(g));
                var h = f.blockSize,
                    m = 4 * h;
                g.sigBytes > m && (g = f.finalize(g));
                g.clamp();
                for (var r = this._oKey = g.clone(), l = this._iKey = g.clone(), k = r.words, n = l.words, j = 0; j < h; j++) k[j] ^= 1549556828, n[j] ^= 909522486;
                r.sigBytes = l.sigBytes = m;
                this.reset();
            },
            reset: function () {
                var f = this._hasher;
                f.reset();
                f.update(this._iKey);
            },
            update: function (f) {
                this._hasher.update(f);
                return this
            },
            finalize: function (f) {
                var g =
                    this._hasher;
                f = g.finalize(f);
                g.reset();
                return g.finalize(this._oKey.clone().concat(f))
            }
        });
    })();
    window.CryptoJS = CryptoJS;

    var CtGameView = (function (_super) {
        __extends(CtGameView, _super);
        function CtGameView(skin) {
            var _this = _super.call(this) || this;
            _this.className_key = 'CtGameView';
            _this.isflag1 = 1;
            _this.isflag2 = 3;
            _this.skin = skin;
            return _this;
        }
        CtGameView.prototype.childrenCreated = function () {
        };
        CtGameView.prototype.initView = function (listdata_, itemW, itemH) {
            listdata_.sort(function () {
                return Math.random() > 0.5 ? -1 : 1;
            });
            this.listdata = listdata_;
            this.itemW = itemW;
            this.itemH = itemH;
            if (this.isCreate) {
                this.initList1();
                this.initList2();
            }
            MiniGameManager.instance.hideBanner();
        };
        CtGameView.prototype.onEnabled = function () {
            _super.prototype.onEnabled.call(this);
            if (this.isCreate) {
                this.width = Laya.stage.width;
                this.height = Laya.stage.height;
                DeviceUtil.adaptationBgImg(this.img_bg);
                var box_game = this.box_game;
                var sx = Laya.stage.width / 750;
                var sy = Laya.stage.height / 1334;
                var s = sx > sy ? sy : sx;
                box_game.scaleX = box_game.scaleY = s;
                box_game.centerX = box_game.centerY = 0;
                this.initList1();
                this.initList2();
                this.img_close.on(Laya.Event.CLICK, this, this.onClick);
                Laya.timer.loop(3000, this, this.onLoop);
            }
        };
        CtGameView.prototype.onLoop = function () {
            var startIndex = this.gameList1.startIndex;
            startIndex += this.isflag1;
            if (startIndex >= this.gameList1.array.length - 5 + 1) {
                this.isflag1 = -1;
            }
            if (startIndex <= 0) {
                this.isflag1 = 1;
            }
            this.gameList1.tweenTo(startIndex, 500);
            var startIndex1 = this.gameList2.startIndex;
            startIndex1 += this.isflag2;
            var index = (Math.ceil(this.gameList2.array.length / 3) - 3) * 3;
            if (startIndex1 > index) {
                this.isflag2 = -3;
            }
            if (startIndex1 <= 0) {
                this.isflag2 = 3;
            }
            this.gameList2.tweenTo(startIndex1, 500);
        };
        CtGameView.prototype.onClick = function () {
            this.removeSelf();
            if (SceneManager.instance.curGameScene == null || SceneManager.instance.curGameScene.className_key == 'HomeView') ;
            else {
                MiniGameManager.instance.showBannerAd();
            }
            Laya.timer.clearAll(this);
        };
        CtGameView.prototype.initList1 = function () {
            this.gameList1.itemRender = CtFItem;
            this.gameList1.hScrollBarSkin = "";
            this.gameList1.array = this.listdata;
        };
        CtGameView.prototype.initList2 = function () {
            this.gameList2.itemRender = CtSItem;
            this.gameList2.vScrollBarSkin = "";
            this.gameList2.array = this.listdata;
        };
        return CtGameView;
    }(BasePopSceneView));
    var CtFItem = (function (_super) {
        __extends(CtFItem, _super);
        function CtFItem(skin, itemData) {
            var _this = _super.call(this) || this;
            _this.className_key = 'CtFItem';
            _this.skin = 'assembly/CtFItem.json';
            return _this;
        }
        CtFItem.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.location_id = PlatfromManager.getInstance().ad_list_info[BannerType.CT].location_id;
            this.on(Laya.Event.CLICK, this, this.click);
        };
        CtFItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
        };
        CtFItem.prototype.dataChange = function (data) {
            this.itemData_ = data;
            this.icon_.skin = data.ad_img;
            if (this.iconMask_) {
                this.icon_.mask = this.iconMask_;
                this.icon_.mask.visible = false;
            }
            if (this.name_txt) {
                this.name_txt.text = data.ad_name;
            }
            this.icon_red.visible = data.ad_dot == 1;
        };
        Object.defineProperty(CtFItem.prototype, "dataSource", {
            set: function (value) {
                if (!value)
                    return;
                this.dataChange(value);
                PlatfromManager.getInstance().addexposureInfo(this.itemData_.ad_id, this.location_id);
            },
            enumerable: true,
            configurable: true
        });
        CtFItem.prototype.click = function () {
            console.log("click  ", JSON.stringify(this.itemData_));
            var data = {
                appId: this.itemData_.ad_appid,
                path: this.itemData_.ad_path,
                ad_qrimg: this.itemData_.ad_qrimg,
                ad_id: this.itemData_.ad_id.toString(),
                location_id: this.location_id,
                fail: null,
                success: null,
                showCt: false
            };
            PlatfromManager.getInstance().navigateToMiniProgram(data);
        };
        CtFItem.prototype.onEnabled = function () {
        };
        return CtFItem;
    }(BaseSceneUISkin));
    var CtSItem = (function (_super) {
        __extends(CtSItem, _super);
        function CtSItem(skin, itemData) {
            var _this = _super.call(this) || this;
            _this.className_key = 'CtSItem';
            _this.skin = 'assembly/CtSItem.json';
            return _this;
        }
        CtSItem.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.location_id = PlatfromManager.getInstance().ad_list_info[BannerType.CT].location_id;
            this.on(Laya.Event.CLICK, this, this.click);
        };
        CtSItem.prototype.onEnabled = function () {
        };
        CtSItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
        };
        CtSItem.prototype.dataChange = function (data) {
            this.itemData_ = data;
            this.icon_.skin = data.ad_img;
            if (this.iconMask_) {
                this.icon_.mask = this.iconMask_;
                this.icon_.mask.visible = false;
            }
            if (this.name_txt) {
                this.name_txt.text = data.ad_name;
            }
            this.icon_red.visible = data.ad_dot == 1;
            this.txt_count.text = data.ad_count + '人玩';
        };
        Object.defineProperty(CtSItem.prototype, "dataSource", {
            set: function (value) {
                if (!value)
                    return;
                this.dataChange(value);
                PlatfromManager.getInstance().addexposureInfo(this.itemData_.ad_id, this.location_id);
            },
            enumerable: true,
            configurable: true
        });
        CtSItem.prototype.click = function () {
            console.log("click  ", JSON.stringify(this.itemData_));
            var data = {
                appId: this.itemData_.ad_appid,
                path: this.itemData_.ad_path,
                ad_qrimg: this.itemData_.ad_qrimg,
                ad_id: this.itemData_.ad_id.toString(),
                location_id: this.location_id,
                fail: null,
                success: null,
                showCt: false
            };
            PlatfromManager.getInstance().navigateToMiniProgram(data);
        };
        return CtSItem;
    }(BaseSceneUISkin));

    var GuessLikeItem = (function (_super) {
        __extends(GuessLikeItem, _super);
        function GuessLikeItem(skin, itemData, bannerType) {
            var _this = _super.call(this) || this;
            _this.className_key = "GuessLikeItem";
            _this.itemData_ = itemData;
            _this.skin = skin;
            _this.bannerType = bannerType;
            return _this;
        }
        GuessLikeItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.on(Laya.Event.CLICK, this, this.click);
            this.dataChange(this.itemData_);
        };
        GuessLikeItem.prototype.onEnabled = function () {
        };
        GuessLikeItem.prototype.dataChange = function (data) {
            this.exposure();
            this.itemData_ = data;
            this.icon_.skin = data.ad_img;
            if (this.iconMask_) {
                this.icon_.mask = this.iconMask_;
                this.icon_.mask.visible = false;
            }
            if (this.name_txt) {
                this.name_txt.text = data.ad_name;
            }
        };
        GuessLikeItem.prototype.exposure = function () {
            if (PlatfromManager.getInstance().ad_list_info[this.bannerType] == null)
                return;
            var location_id = PlatfromManager.getInstance().ad_list_info[this.bannerType].location_id;
            PlatfromManager.getInstance().addexposureInfo(this.itemData_.ad_id, location_id);
        };
        GuessLikeItem.prototype.click = function () {
            var data = {
                appId: this.itemData_.ad_appid,
                path: this.itemData_.ad_path,
                ad_qrimg: this.itemData_.ad_qrimg,
                ad_id: this.itemData_.ad_id.toString(),
                location_id: PlatfromManager.getInstance().ad_list_info[this.bannerType].location_id,
                fail: null,
                success: null,
                showCt: true
            };
            PlatfromManager.getInstance().navigateToMiniProgram(data);
        };
        return GuessLikeItem;
    }(BaseSceneUISkin));

    var GuessLike = (function (_super) {
        __extends(GuessLike, _super);
        function GuessLike(skin, subItemSkin, listdata_, itemW) {
            var _this = _super.call(this) || this;
            _this.className_key = "GuessLike";
            _this.isTouch = false;
            _this.index = 0;
            _this.len = 0;
            _this.subItemSkin = subItemSkin;
            _this.listdata = listdata_;
            _this.itemW = itemW;
            _this.skin = skin;
            return _this;
        }
        GuessLike.prototype.childrenCreated = function () {
            this.panelList.hScrollBarSkin = "";
            this.panelList.hScrollBar.touchScrollEnable = false;
            this.initList();
        };
        GuessLike.prototype.initList = function () {
            for (var i = 0, len = this.listdata.length; i < len; i++) {
                var item = new GuessLikeItem(this.subItemSkin, this.listdata[i], BannerType.C);
                this.boxView.addChild(item);
                item.x = this.itemW * (i - 1);
            }
            this.index = -1;
            this.len = this.listdata.length;
            this.boxView.x = 0;
            this.onEnable();
            this.panelList.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        };
        GuessLike.prototype.onEnable = function () {
            if (this.isCreate) {
                this.panelList.frameLoop(1, this, this.frameChange);
            }
        };
        GuessLike.prototype.onEnabled = function () {
        };
        GuessLike.prototype.onDisable = function () {
            if (this.isCreate) {
                this.panelList.clearTimer(this, this.frameChange);
            }
        };
        GuessLike.prototype.mouseDown = function (evt) {
            this.isTouch = true;
            this.clickX = evt.stageX;
            this.starX = this.boxView.x;
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseOutUp);
        };
        GuessLike.prototype.frameChange = function () {
            var self = this;
            if (!self.isTouch) {
                self.boxView.x -= 1;
            }
            var curX = self.boxView.x;
            if (curX > (self.index + 1) * self.itemW) {
                self.index++;
                var last = self.boxView.removeChildAt(self.boxView.numChildren - 1);
                var first = self.boxView.getChildAt(0);
                last.x = first.x - self.itemW;
                self.boxView.addChildAt(last, 0);
                last.exposure();
                return;
            }
            if (curX < (self.index - 1) * self.itemW) {
                self.index--;
                var last = self.boxView.getChildAt(self.boxView.numChildren - 1);
                var first = self.boxView.removeChildAt(0);
                first.x = last.x + self.itemW;
                self.boxView.addChild(first);
                first.exposure();
                return;
            }
        };
        GuessLike.prototype.mouseMove = function (evt) {
            this.boxView.x = this.starX + (evt.stageX - this.clickX);
        };
        GuessLike.prototype.mouseOutUp = function () {
            this.isTouch = false;
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseOutUp);
        };
        return GuessLike;
    }(BaseSceneUISkin));

    var BaoTypeGame = (function (_super) {
        __extends(BaoTypeGame, _super);
        function BaoTypeGame(skin, listData_) {
            var _this = _super.call(this, skin, listData_[0], BannerType.B) || this;
            _this.changeTime = 2000;
            _this.index = 0;
            _this.listdata_ = listData_;
            return _this;
        }
        BaoTypeGame.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.setDatas(this.listdata_);
        };
        BaoTypeGame.prototype.setDatas = function (datas) {
            if (datas) {
                this.listdata_ = datas;
            }
            this.onEnable();
        };
        BaoTypeGame.prototype.onEnabled = function () {
        };
        BaoTypeGame.prototype.onEnable = function () {
            if (this.isCreate) {
                this.changeShow();
                Laya.timer.clear(this, this.changeShow);
                Laya.timer.loop(2000, this, this.changeShow);
            }
        };
        BaoTypeGame.prototype.onDisable = function () {
            if (this.isCreate) {
                Laya.timer.clear(this, this.changeShow);
            }
        };
        BaoTypeGame.prototype.shake = function () {
            var rota = 5;
            Laya.Tween.clearAll(this);
            Laya.Tween.to(this, { rotation: rota }, 50);
            Laya.Tween.to(this, { rotation: -rota }, 100, null, null, 50);
            Laya.Tween.to(this, { rotation: rota }, 100, null, null, 150);
            Laya.Tween.to(this, { rotation: -rota }, 100, null, null, 250);
            Laya.Tween.to(this, { rotation: 0 }, 50, null, null, 350);
        };
        BaoTypeGame.prototype.changeShow = function () {
            if (this.listdata_) {
                this.index++;
                this.index %= this.listdata_.length;
                this.itemData_ = this.listdata_[this.index];
            }
            _super.prototype.dataChange.call(this, this.itemData_);
            Laya.timer.once(600, this, this.shake);
        };
        BaoTypeGame.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true);
            this.offAll();
            Laya.timer.clear(this, this.changeShow);
        };
        BaoTypeGame.prototype.click = function () {
            var data = {
                appId: this.itemData_.ad_appid,
                path: this.itemData_.ad_path,
                ad_qrimg: this.itemData_.ad_qrimg,
                ad_id: this.itemData_.ad_id.toString(),
                location_id: PlatfromManager
                    .getInstance().ad_list_info[this.bannerType].location_id,
                fail: null,
                success: null,
                showCt: false
            };
            PlatfromManager.getInstance().navigateToMiniProgram(data);
        };
        return BaoTypeGame;
    }(GuessLikeItem));

    var SettlementRecommendItem = (function (_super) {
        __extends(SettlementRecommendItem, _super);
        function SettlementRecommendItem(skin, itemData) {
            var _this = _super.call(this, skin, itemData, BannerType.JS) || this;
            _this.className_key = "SettlementRecommendItem";
            return _this;
        }
        SettlementRecommendItem.prototype.click = function () {
            _super.prototype.click.call(this);
            if (this.clickCallFunc) {
                this.clickCallFunc();
            }
        };
        return SettlementRecommendItem;
    }(GuessLikeItem));

    var Queue = (function () {
        function Queue() {
            this.list = [];
        }
        Queue.prototype.push = function (data) {
            if (data == null) {
                return false;
            }
            this.list.push(data);
            return true;
        };
        Queue.prototype.pop = function () {
            return this.list.shift();
        };
        Object.defineProperty(Queue.prototype, "size", {
            get: function () {
                return this.list.length;
            },
            enumerable: true,
            configurable: true
        });
        Queue.prototype.quere = function () {
            return this.list;
        };
        return Queue;
    }());

    var SettlementRecommendView = (function (_super) {
        __extends(SettlementRecommendView, _super);
        function SettlementRecommendView(skin, subItemSkin, listdata_, itemW, itemH, refushTime) {
            var _this = _super.call(this) || this;
            _this.className_key = "SettlementRecommendView";
            _this.subItemSkin = subItemSkin;
            _this.listdata = listdata_;
            _this.queueDatas = new Queue();
            for (var i = 0, len = listdata_.length; i < len; i++) {
                _this.queueDatas.push(listdata_[i]);
            }
            _this.itemW = itemW;
            _this.itemH = itemH;
            _this.refushTime = refushTime;
            _this.skin = skin;
            return _this;
        }
        SettlementRecommendView.prototype.childrenCreated = function () {
            this.initList();
            this.onEnable();
        };
        SettlementRecommendView.prototype.onEnable = function () {
            if (this.isCreate) {
                Laya.timer.clear(this, this.initList);
                Laya.timer.loop(this.refushTime, this, this.initList);
            }
        };
        SettlementRecommendView.prototype.onDisable = function () {
            if (this.isCreate) {
                Laya.timer.clear(this, this.initList);
            }
        };
        SettlementRecommendView.prototype.onEnabled = function () {
        };
        SettlementRecommendView.prototype.initList = function () {
            var _this = this;
            var _loop_1 = function (i, len) {
                var itemData = this_1.queueDatas.pop();
                var item = this_1.boxView.getChildAt(i);
                if (item) {
                    item.dataChange(itemData);
                }
                else {
                    item = new SettlementRecommendItem(this_1.subItemSkin, itemData);
                    item.clickCallFunc = function () {
                        var tempItemData = _this.queueDatas.pop();
                        item.dataChange(tempItemData);
                        _this.queueDatas.push(tempItemData);
                    };
                    this_1.boxView.addChild(item);
                    item.x = this_1.itemW * Math.floor(i % 3);
                    item.y = this_1.itemW * Math.floor(i / 3);
                }
                this_1.queueDatas.push(itemData);
            };
            var this_1 = this;
            for (var i = 0, len = 6; i < len; i++) {
                _loop_1(i);
            }
        };
        return SettlementRecommendView;
    }(BaseSceneUISkin));

    var PlatfromManager = (function () {
        function PlatfromManager() {
            this.flg = 'zpzz';
            this.channel = 'own';
            this.token = null;
            this.session_key = null;
            this.miniProgramList = [
                "wx8ba54b10f7a02a5b",
                "wxb61f909241e4647f",
                "wx2e12fc8a5d32fc2a",
                "wx2a1c56c3c4235d0e",
                "wx34179a03db78feb9",
                "wx6d9ceda5ddb23a62",
                "wx1f501f62d07e3072",
                "wx487ed70060dc6d2d",
                "wx21468e993862a4ac",
                "wxc4ab7f5c2b4b4f2d"
            ];
            this.url = 'https://api.yz061.com/';
            this.WXLOGIN = 'auth?';
            this.DAILY = 'daily';
            this.gameOpen = true;
            this.ADDITIONAL = 'additional?';
            this.GAME_BANNER = 'game/';
            this.lastId = null;
            this.ad_list_info = {};
            this.MiniProgramListC = null;
            this.MiniProgramListCT = null;
            this.MiniProgramListB = null;
            this.MiniProgramListJS = null;
            this.MiniProgramListGDYX = null;
            this.MiniProgramListbanner = null;
            this.localid = {};
            this.REPORT = 'matter/report';
            this.REPORT_AD = 'reportad';
            this.exposureInfo = {};
        }
        PlatfromManager.getInstance = function () {
            if (this.ins == null) {
                this.ins = new PlatfromManager();
            }
            return this.ins;
        };
        PlatfromManager.prototype.wxLogin = function () {
            return new Promise(function (resolve, reject) {
                wx.login({
                    success: function (res) {
                        PlatfromManager.getInstance().getOpenid(res, resolve, reject);
                    },
                    fail: function () {
                        console.log('登录失败1！');
                    }
                });
            });
        };
        PlatfromManager.prototype.getOpenid = function (res, resolve, reject) {
            if (DeviceUtil.isUCMiniGame) {
                return;
            }
            var code = res.code;
            if (code) {
                var data = { code: code, flg: this.flg };
                var appid = GameData.getInstance().enterGameInfo.referrerInfo.appid;
                if (appid) {
                    data.appid = appid;
                }
                var channel = '';
                if (GameData.getInstance().enterGameInfo && GameData.getInstance().enterGameInfo.query) {
                    channel = GameData.getInstance().enterGameInfo.query["channel"];
                }
                if (!channel) {
                    channel = "own";
                }
                PlatfromManager.getInstance().channel = channel;
                data.channel = PlatfromManager.getInstance().channel;
                HttpMgr.getInstance().sendGetHttp(this.url + this.WXLOGIN, data, function (e) {
                    console.log(e);
                    if (e.status == 1) {
                        var result = e.result;
                        PlatfromManager.getInstance().token = result.token;
                        PlatfromManager.getInstance().session_key = result.session_key;
                        resolve && resolve(result);
                    }
                    else {
                        reject();
                        console.log('获取openid失败');
                    }
                }, function (e) { }, 'get');
            }
            else {
                console.log('登录失败！' + res.errMsg);
            }
        };
        PlatfromManager.prototype.getDaily = function () {
            if (DeviceUtil.isUCMiniGame) {
                return;
            }
            var data = { flg: this.flg, uid: GameData.getInstance().userInfo.openId, channel: this.channel };
            HttpMgr.getInstance().sendPostHttp(this.url + this.DAILY, data, function (e) {
                console.log(e);
                if (e.status == 1) ;
            }, function (e) { }, 'post');
        };
        PlatfromManager.prototype.getAdditional = function () {
            if (DeviceUtil.isUCMiniGame) {
                return;
            }
            var data = { flg: this.flg };
            HttpMgr.getInstance().sendGetHttp(this.url + this.ADDITIONAL, data, function (e) {
                console.log(e);
                if (e.status == 1) {
                    var result = e.result;
                    if (result.config) ;
                    if (result.ad) ;
                }
            }, function (e) { }, 'get');
        };
        PlatfromManager.prototype.getGameAd = function () {
            var _this = this;
            if (DeviceUtil.isUCMiniGame) {
                return;
            }
            var data = {};
            HttpMgr.getInstance().sendGetHttp(this.url + this.GAME_BANNER + this.flg, data, function (e) { return __awaiter(_this, void 0, void 0, function () {
                var result, len, i, info;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log(e);
                            if (!(e.status == 1)) return [3, 5];
                            result = e.result;
                            len = result.length;
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < len)) return [3, 4];
                            PlatfromManager.getInstance().ad_list_info[result[i].location_flg] = result[i];
                            if (!(result[i].matter_type == 2)) return [3, 3];
                            return [4, PlatfromManager.getInstance().getadArr(result[i].location_flg)];
                        case 2:
                            info = _a.sent();
                            if (info) {
                                PlatfromManager.getInstance().shareInfo = info;
                                PlatfromManager.getInstance().setShareInfo();
                            }
                            return [3, 3];
                        case 3:
                            i++;
                            return [3, 1];
                        case 4: return [3, 5];
                        case 5: return [2];
                    }
                });
            }); }, function (e) { }, 'get');
        };
        PlatfromManager.prototype.setShareInfo = function () {
            var shareInfo = this.shareInfo;
            if (shareInfo) {
                var share = shareInfo[Math.floor(Math.random() * shareInfo.length)];
                MiniGameManager.instance.shareInfo = [{ title: share.share_title, imageUrl: share.share_img, query: '' }];
                this.lastId = share.share_id;
            }
        };
        PlatfromManager.prototype.uploadShare = function () {
            if (this.lastId == null)
                return;
            this.dataUpload('share', this.lastId);
            this.setShareInfo();
        };
        PlatfromManager.prototype.getadArr = function (location_flg) {
            var _this = this;
            if (DeviceUtil.isUCMiniGame) {
                return;
            }
            return new Promise(function (resolve, reject) {
                if (_this.ad_list_info == null || _this.ad_list_info[location_flg] == null) {
                    resolve(null);
                    return;
                }
                var url = PlatfromManager.getInstance().ad_list_info[location_flg].url;
                if (url == null) {
                    resolve(null);
                    return;
                }
                var data = { uid: GameData.getInstance().userInfo.openId };
                HttpMgr.getInstance().sendGetHttp(url + '&', data, function (e) {
                    console.log(e);
                    if (e.status == 1) {
                        var result = e.result;
                        var arr = [];
                        for (var i = 0, len = result.length; i < len; i++) {
                            if (DeviceUtil.isAndroid()) {
                                if (result[i].ad_device != 2) {
                                    arr.push(result[i]);
                                }
                            }
                            else if (DeviceUtil.isIOS()) {
                                if (result[i].ad_device != 1) {
                                    arr.push(result[i]);
                                }
                            }
                        }
                        PlatfromManager.getInstance()['MiniProgramList' + location_flg] = arr;
                        resolve(arr);
                    }
                    else {
                        resolve(null);
                    }
                }, function (e) {
                    resolve(null);
                }, 'get');
            });
        };
        PlatfromManager.prototype.navigateToMiniProgram = function (data) {
            if (data.path == null || this.miniProgramList.indexOf(data.appId) == -1) {
                if (data.ad_qrimg) {
                    platform.previewImage({ urls: data.ad_qrimg });
                }
            }
            else {
                platform.navigateToMiniProgram({
                    appId: data.appId, path: data.path, success: function () {
                        PlatfromManager.getInstance().reportAd({ ad_id: data.ad_id, location_id: data.location_id, status: 'cb' });
                    }, fail: function () {
                        PlatfromManager.getInstance().reportAd({ ad_id: data.ad_id, location_id: data.location_id });
                        PlatfromManager.getInstance().showCtGameView();
                        data.fail && data.fail();
                    }
                });
            }
        };
        PlatfromManager.prototype.createGuessLike = function (parent) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var data, guessLike;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        data = PlatfromManager.getInstance().MiniProgramListC;
                                        if (!(data == null)) return [3, 2];
                                        return [4, PlatfromManager.getInstance().getadArr(BannerType.C)];
                                    case 1:
                                        data = _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        if (data == null) {
                                            resolve(null);
                                            return [2];
                                        }
                                        console.log("data(GuessLike) ->", data);
                                        guessLike = parent.getChildByName('GuessLike');
                                        if (guessLike == null) {
                                            guessLike = new GuessLike("assembly/GuessLike.json", "assembly/GuessLikeItem.json", data, 220);
                                            parent.addChild(guessLike);
                                        }
                                        guessLike.name = 'GuessLike';
                                        guessLike.mouseThrough = true;
                                        guessLike.x = (Laya.stage.width - guessLike.width) / 2;
                                        guessLike.y = Laya.stage.height - guessLike.height;
                                        resolve(guessLike);
                                        return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        PlatfromManager.prototype.createCtBtn = function (parent) {
            if (this.MiniProgramListCT == null)
                return null;
            var img_ct = parent.getChildByName('ctgame');
            if (img_ct == null) {
                img_ct = new Laya.Image();
                img_ct.skin = 'resource/assets/img/guessLike/home_ct.png';
                parent.addChild(img_ct);
                img_ct.on(Laya.Event.CLICK, img_ct, function () {
                    PlatfromManager.getInstance().showCtGameView();
                });
                img_ct.size(134, 134);
            }
            return img_ct;
        };
        PlatfromManager.prototype.createHotType = function (parent) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var data, hotType;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        data = PlatfromManager.getInstance().MiniProgramListB;
                                        if (!(data == null)) return [3, 2];
                                        return [4, PlatfromManager.getInstance().getadArr(BannerType.B)];
                                    case 1:
                                        data = _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        if (data == null) {
                                            resolve(null);
                                            return [2];
                                        }
                                        console.log("data(BaoTypeGame) ->", data);
                                        hotType = parent.getChildByName('BaoTypeGame');
                                        if (hotType == null) {
                                            hotType = new BaoTypeGame("assembly/BaoTypeGame.json", data);
                                            parent.addChild(hotType);
                                        }
                                        hotType.name = 'BaoTypeGame';
                                        resolve(hotType);
                                        return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        PlatfromManager.prototype.createSettlementRecommend = function (parent) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var data, settlementRecommend;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        data = PlatfromManager.getInstance().MiniProgramListJS;
                                        if (!(data == null)) return [3, 2];
                                        return [4, PlatfromManager.getInstance().getadArr(BannerType.JS)];
                                    case 1:
                                        data = _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        if (data == null) {
                                            resolve(null);
                                            return [2];
                                        }
                                        settlementRecommend = parent.getChildByName('SettlementRecommendView');
                                        if (settlementRecommend == null) {
                                            settlementRecommend = new SettlementRecommendView("assembly/SettlementRecommendView.json", "assembly/SettlementRecommendItem.json", data, 260, 280, 3000);
                                            parent.addChild(settlementRecommend);
                                        }
                                        resolve(settlementRecommend);
                                        return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        PlatfromManager.prototype.showCtGameView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var datas, ctGame;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            datas = this.MiniProgramListCT;
                            if (!(datas == null)) return [3, 2];
                            return [4, this.getadArr(BannerType.CT)];
                        case 1:
                            datas = _a.sent();
                            _a.label = 2;
                        case 2:
                            if (datas == null)
                                return [2];
                            this.addArr(datas);
                            ctGame = ViewManager.getInstance().showView(CtGameView, "assembly/ChoutiGameView.json");
                            ctGame.initView(datas, 0, 0);
                            return [2];
                    }
                });
            });
        };
        PlatfromManager.prototype.addArr = function (arr, len) {
            if (len === void 0) { len = 12; }
            if (arr.length < len) {
                var info = arr[Math.floor(Math.random() * arr.length)];
                Math.random() > 0.5 ? arr.push(info) : arr.unshift(info);
                this.addArr(arr, len);
            }
        };
        PlatfromManager.prototype.dataReport = function () {
            if (DeviceUtil.isUCMiniGame) {
                return;
            }
            var data = { flg: this.flg, uid: GameData.getInstance().userInfo.openId };
            HttpMgr.getInstance().sendGetHttp(this.url + this.REPORT, data, function (e) {
                console.log(e);
                if (e.status == 1) {
                    var result = e.result;
                }
            }, function (e) { }, 'get');
        };
        PlatfromManager.prototype.reportAd = function (data) {
            if (DeviceUtil.isUCMiniGame) {
                return;
            }
            if (data == null) {
                return;
            }
            data.uid = GameData.getInstance().userInfo.openId;
            data.gflg = this.flg;
            data.channel = this.channel;
            HttpMgr.getInstance().sendPostHttp(this.url + this.REPORT_AD, data, function (e) {
                console.log(e);
                if (e.status == 1) ;
            }, function (e) { }, 'post');
        };
        PlatfromManager.prototype.dataUpload = function (loc, sid) {
            if (DeviceUtil.isUCMiniGame) {
                return;
            }
            var data = { channel: this.channel, flg: this.flg, loc: loc, uid: GameData.getInstance().userInfo.openId };
            var param = HttpMgr.getInstance().getEncodeParam(data);
            var sign = CryptoJS.HmacSHA256(param, md5.hex_md5(GameData.getInstance().userInfo.openId + this.flg)).toString();
            HttpMgr.getInstance().sendPostHttp(this.url + 'stat?sign=' + sign, data, function (e) {
                console.log(e);
                if (e.status == 1) {
                    var result = e.result;
                }
            }, function (e) { }, 'post');
        };
        PlatfromManager.prototype.addexposureInfo = function (ad_id, location_id) {
            var adInfo = this.exposureInfo[ad_id];
            var count = 0;
            if (adInfo != null) {
                var info = adInfo[location_id];
                if (info != null) {
                    count = info['num'];
                    count++;
                    info['num'] = count;
                }
                else {
                    count++;
                    info = { num: count, ad_id: ad_id, location_id: location_id };
                }
                adInfo[location_id] = info;
            }
            else {
                adInfo = {};
                count++;
                var info = { num: count, ad_id: ad_id, location_id: location_id };
                adInfo[location_id] = info;
            }
            this.exposureInfo[ad_id] = adInfo;
        };
        PlatfromManager.prototype.initexposureInfoData = function () {
            var exposureInfo = this.exposureInfo;
            var arr = [];
            for (var ad_id in exposureInfo) {
                var adInfo = exposureInfo[ad_id];
                for (var location_id in adInfo) {
                    var info = adInfo[location_id];
                    arr.push(info);
                    delete adInfo[location_id];
                }
                delete exposureInfo[ad_id];
            }
            if (arr.length == 0)
                return;
            this.exposure(arr);
            arr = null;
        };
        PlatfromManager.prototype.exposure = function (data) {
            if (DeviceUtil.isUCMiniGame) {
                return;
            }
            var senddata = { data: data, gflg: this.flg, channel: this.channel };
            HttpMgr.getInstance().sendPostHttp(this.url + 'exposure', senddata, function (e) {
                console.log(e);
                data = null;
                if (e.status == 1) {
                    var result = e.result;
                }
            }, function (e) { }, 'post', false);
        };
        return PlatfromManager;
    }());
    var BannerType;
    (function (BannerType) {
        BannerType["C"] = "C";
        BannerType["CT"] = "CT";
        BannerType["B"] = "B";
        BannerType["JS"] = "JS";
        BannerType["GDYX"] = "GDYX";
        BannerType["banner"] = "banner";
        BannerType["F"] = "F";
    })(BannerType || (BannerType = {}));

    var CommonTool = (function () {
        function CommonTool() {
        }
        CommonTool.errorCodeTable = {
            1: "解析数据异常",
            2: "服务器内部错误",
            3: "数据库处理超时",
            4: "数据插入失败",
            5: "查询操作错误",
            6: "数据库没有该数据",
            7: "数据库数据不存在",
            8: "操作频繁",
            9: "名次传递错误",
            10: "没有rankid",
            11: "没有游戏id",
            12: "没有Session_Id",
            13: "没有Session_Key",
            14: "Session_Id超时",
            15: "Session_Id加密错误",
            16: "Session_Id解密失败",
            17: "Session_Id不匹配",
            18: "token验证失败",
            19: "没有保存Id",
            20: "参数错误",
            21: "没有分数",
            22: "数据更新失败",
            23: "数据删除失败",
            24: "无效的游戏Id",
            25: "无存储信息数据"
        };
        return CommonTool;
    }());

    var InviteManager = (function () {
        function InviteManager() {
            this.URL = GameData.getInstance().URL_OF_INVITE;
            this.inviterInfo = new netData.Inviter();
            this.newPlayer = [];
        }
        InviteManager.getInstance = function () {
            if (!InviteManager.instance_) {
                InviteManager.instance_ = new InviteManager();
            }
            return InviteManager.instance_;
        };
        InviteManager.prototype.selectInfo = function (callF, obj) {
            var _this = this;
            if (callF === void 0) { callF = null; }
            if (obj === void 0) { obj = null; }
            var gameId = GameData.getInstance().gameId;
            var openId = GameData.getInstance().userInfo.openId;
            var msg = {};
            msg.msg_type = "16";
            msg.msg_data = {
                "gameid": gameId,
                "openid": openId
            };
            console.log("查询受邀人列表 ->", msg);
            HttpMgr.getInstance().sendHttp(this.URL, msg, function (e) {
                var code = e["msg_data"]["error_code"];
                if (code == "0") {
                    console.log("查询受邀人列表成功 ->", e);
                    if (e["msg_data"]["index_list"] != "") {
                        _this.newPlayer = e["msg_data"]["index_list"];
                        console.log(_this.newPlayer);
                    }
                }
                else {
                    var str = CommonTool.errorCodeTable[code];
                    console.warn("查询受邀人列表失败：", str);
                }
                if (callF && obj) {
                    callF.call(obj, code);
                }
            }, function (e) { });
        };
        InviteManager.prototype.createInfo = function (callF, obj) {
            if (callF === void 0) { callF = null; }
            if (obj === void 0) { obj = null; }
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, new Promise(function (res, rej) {
                                var inviterOpenId = _this.inviterInfo.openId;
                                var tx_url = GameData.getInstance().userInfo.avatarUrl;
                                var nick = GameData.getInstance().userInfo.nick;
                                var gameId = GameData.getInstance().gameId;
                                var msg = {};
                                msg.msg_type = "14";
                                msg.msg_data = {
                                    "openid": inviterOpenId,
                                    "url": tx_url,
                                    "name": nick,
                                    "gameid": gameId
                                };
                                console.log("关联自己及邀请人 ->", msg);
                                HttpMgr.getInstance().sendHttp(_this.URL, msg, function (e) {
                                    var code = e["msg_data"]["error_code"];
                                    if (code == "0") {
                                        console.log("关联自己及邀请人成功...");
                                    }
                                    else {
                                        var str = CommonTool.errorCodeTable[code];
                                        console.warn("关联自己及邀请人失败：", str);
                                    }
                                    if (callF && obj) {
                                        callF.call(obj, code);
                                    }
                                    res();
                                }, function (e) { });
                            })];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        InviteManager.prototype.judgeInvite = function () {
            var _this = this;
            return new Promise(function (resolve) {
                var res = GameData.getInstance().enterGameInfo;
                console.log("开始关联邀请人", res);
                console.log("自己信息", GameData.getInstance().userInfo);
                if (res) {
                    var scene = res.scene;
                    if (scene == 1007 || scene == 1008 || scene == 1044) {
                        if (GameData.getInstance().userInfo.openId && res.query && res.query["openid"]) {
                            _this.inviterInfo.nick = res.query["nick"];
                            _this.inviterInfo.openId = res.query["openid"];
                            if (GameData.getInstance().userInfo.openId != _this.inviterInfo.openId) {
                                console.log("关联邀请人", res.query);
                                _this.createInfo();
                            }
                        }
                    }
                    resolve();
                }
                else {
                    resolve();
                }
            });
        };
        InviteManager.prototype.getInviteAwardData = function () {
            this.getInviteInfo();
            var inviteConfig = this.inviteConfig;
            var lingqu = GameData.getInstance().invite.inviteId;
            var invitePlayer = this.newPlayer;
            var dataArr = [];
            for (var i = 0; i < 10; i++) {
                var invite = inviteConfig[i];
                var awardId = invite.id;
                var canLingqu = false;
                var lingqued = false;
                var player = invitePlayer[i];
                if (lingqu.indexOf(awardId) > -1)
                    lingqued = true;
                if (player)
                    canLingqu = true;
                var data = new localData.InviteData();
                data.id = awardId;
                data.head = player ? player["url"] : "";
                data.reward = invite.reward;
                data.lingqued = lingqued;
                data.canLingqu = canLingqu;
                dataArr.push(data);
            }
            return dataArr;
        };
        InviteManager.prototype.getInviteInfo = function () {
            var inviteInfo = Laya.LocalStorage.getJSON(GameMgr.getInstance().invite);
            if (inviteInfo) {
                GameData.getInstance().invite = inviteInfo;
            }
            else {
                GameData.getInstance().invite = { inviteId: [] };
            }
        };
        InviteManager.prototype.getInviteAward = function (id, num) {
            GameData.getInstance().invite.inviteId.push(id);
            GameManager.instance.changePower({ count: num, isNatural: false });
            TipsManager.instance.showDefaultTips("获得体力：" + num);
            Laya.LocalStorage.setJSON(GameMgr.getInstance().invite, GameData.getInstance().invite);
        };
        return InviteManager;
    }());

    var MiniGameManager = (function () {
        function MiniGameManager() {
            this.hideTime = 0;
            this.showTime = 0;
            this.defaultMssage = {
                "title": "宝宝过年回家没红包怎么办？",
                "imageUrl": "https://package.32yx.com/ecy_game_small/laya/cutRope/wx_res/share1.jpg",
                "query": ""
            };
            this.shareInfo = [
                {
                    "title": "宝宝过年回家没红包怎么办？",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/cutRope/wx_res/share1.jpg",
                    "query": ""
                },
                {
                    "title": "宝宝回家吃饭了吗？",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/cutRope/wx_res/share2.jpg",
                    "query": ""
                },
                {
                    "title": "救救小朋友，帮他逃离房间!",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/cutRope/wx_res/share3.jpg",
                    "query": ""
                }
            ];
            this.sucTime = 0;
            this.canShowBanner = true;
        }
        Object.defineProperty(MiniGameManager, "instance", {
            get: function () {
                if (this.ins == null) {
                    this.ins = new MiniGameManager();
                }
                return this.ins;
            },
            enumerable: true,
            configurable: true
        });
        MiniGameManager.prototype.initMiniGame = function () {
            var _this = this;
            var launchObj = platform.getLaunchOptionsSync();
            if (launchObj) {
                console.log('launchObj>>>>>>>>>>>>>>', launchObj);
            }
            this.getUpdateManager();
            platform.setKeepScreenOn();
            platform.updateShareMenu();
            platform.showShareMenu();
            platform.onShareAppMessage(function () {
                return _this.defaultMssage;
            });
        };
        MiniGameManager.prototype.getUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            wx.getUserInfo({
                                withCredentials: true,
                                lang: 'zh_CN',
                                success: function (res) {
                                    resolve(res);
                                },
                                fail: function (res) {
                                    if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) ;
                                    resolve(null);
                                }
                            });
                        })];
                });
            });
        };
        MiniGameManager.prototype.initUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                var info;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getUserInfo()];
                        case 1:
                            info = _a.sent();
                            if (!(info == null)) return [3, 3];
                            return [4, this.createUserButton({ width: 0, height: 0, left: 0, top: 0 }, true)];
                        case 2:
                            info = _a.sent();
                            _a.label = 3;
                        case 3:
                            if (info == null)
                                return [2, null];
                            GameData.getInstance().userInfo.nick = info.userInfo.nickName;
                            GameData.getInstance().userInfo.avatarUrl = info.userInfo.avatarUrl;
                            MiniGameManager.instance.defaultMssage.query = "openid=" + GameData.getInstance().userInfo.openId;
                            InviteManager.getInstance().judgeInvite();
                            platform.onShareAppMessage(function () {
                                return MiniGameManager.instance.defaultMssage;
                            });
                            return [2, info];
                    }
                });
            });
        };
        MiniGameManager.prototype.userButtonSize = function (percentTop, pectendSize, percentLeft) {
            var resInfo = platform.getSystemInfoSync();
            var left = resInfo['windowWidth'] * percentLeft;
            var top = resInfo['windowHeight'] * percentTop;
            var wid = resInfo['windowWidth'] * pectendSize;
            var height = resInfo['windowHeight'] * pectendSize;
        };
        MiniGameManager.prototype.createUserButton = function (style, isFullScene) {
            if (isFullScene === void 0) { isFullScene = false; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            if (isFullScene) {
                                style = {
                                    left: -300,
                                    top: 0,
                                    width: 2000,
                                    height: 4000,
                                    alpha: 0,
                                    lineHeight: 40,
                                    color: '#ffffff',
                                    textAlign: 'center',
                                    fontSize: 16,
                                    borderRadius: 4
                                };
                            }
                            var button = wx.createUserInfoButton({
                                type: "text",
                                text: "",
                                style: style,
                                withCredentials: true,
                                lang: 'zh_CN'
                            });
                            button.onTap(function (res) {
                                console.log(res);
                                if (res.errMsg.indexOf("ok") == -1) {
                                    console.log("用户授权失败！");
                                    button.destroy();
                                    resolve(null);
                                    return;
                                }
                                console.log("用户授权成功！");
                                button.destroy();
                                resolve(res);
                            });
                        })];
                });
            });
        };
        MiniGameManager.prototype.onShow = function (callBack) {
            var _this = this;
            platform.onShow(function () {
                callBack && callBack();
                _this.showTime = new Date().getTime();
                if (_this.showTime - _this.hideTime >= _this.sucTime) {
                    _this.shareSucful && _this.shareSucful.call(_this.thisObj);
                    PlatfromManager.getInstance().uploadShare();
                }
                else {
                    _this.shareFailful && _this.shareFailful.call(_this.thisObj);
                }
                _this.shareFailful = null;
                _this.shareFailful = null;
                _this.thisObj = null;
                EventMgr.getInstance().sendEvent(EventMgr.ONSHOW);
            });
        };
        MiniGameManager.prototype.onHide = function (callBack) {
            var _this = this;
            platform.onHide(function () {
                callBack && callBack();
                PlatfromManager.getInstance().initexposureInfoData();
                _this.hideTime = new Date().getTime();
                EventMgr.getInstance().sendEvent(EventMgr.ONHIDE);
            });
        };
        MiniGameManager.prototype.getUpdateManager = function () {
            if ("function" == typeof wx.getUpdateManager) {
                var updateManager = wx.getUpdateManager();
                updateManager.onCheckForUpdate(function (res) {
                    console.log(res.hasUpdate);
                }), updateManager.onUpdateReady(function () {
                    wx.showModal({
                        title: "更新提示",
                        showCancel: false,
                        content: "新版本已经准备好，是否重启应用？",
                        success: function (res) {
                            res.confirm && updateManager.applyUpdate();
                        }
                    });
                }), updateManager.onUpdateFailed(function () {
                });
            }
        };
        MiniGameManager.prototype.getShareInfo = function (query) {
            var shareInfo = this.shareInfo;
            var info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
            if (query) {
                var openId = GameData.getInstance().userInfo.openId;
                query['openid'] = openId;
            }
            if (PlatfromManager.getInstance().lastId != null) {
                query['id'] = PlatfromManager.getInstance().lastId;
            }
            info.query = Utils.objToParams(query);
            return info;
        };
        MiniGameManager.prototype.shareAppMessage = function (data) {
            if (data == null) {
                data = {};
            }
            this.shareSucful = data.sucFun;
            this.shareFailful = function () {
                TipsManager.instance.showDefaultTips('分享失败，请分享到群里');
                data.failFun && data.failFun();
            };
            this.thisObj = data.thisObj;
            this.sucTime = data.time || 0;
            if (!data.message) {
                data.message = this.getShareInfo({});
            }
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
                platform.shareAppMessage(data.message);
            }
            else if (DeviceUtil.isUCMiniGame()) {
                data.message.success = data.sucFun;
                data.message.fail = data.failFun;
                platform.uc_shareAppMessage(data.message);
            }
        };
        MiniGameManager.prototype.playViderAd = function (data) {
            if (!DeviceUtil.isWXMiniGame() && !DeviceUtil.isQQMiniGame() && !DeviceUtil.isUCMiniGame()) {
                TipsManager.instance.showDefaultTips('开发中');
                data.successFun && data.successFun();
                return;
            }
            var videoId = GameData.getInstance().videoId;
            if (videoId.length <= 0) {
                TipsManager.instance.showDefaultTips('开发中');
                data.errorFun && data.errorFun();
                SoundManager.getInstance().playBgMusic();
                return;
            }
            if (platform.showLoading) {
                platform.showLoading({ title: '广告加载中', mask: true });
            }
            var adId = videoId[Math.floor(Math.random() * videoId.length)];
            platform.createRewardedVideoAd(adId, function (res) {
                if (res.isEnded) {
                    data.successFun && data.successFun();
                    SoundManager.getInstance().playBgMusic();
                    PlatfromManager.getInstance().dataUpload('video');
                }
                else {
                    data.failFun && data.failFun();
                    SoundManager.getInstance().playBgMusic();
                }
                if (platform.hideLoading) {
                    platform.hideLoading({});
                }
            }, function () {
                if (platform.hideLoading) {
                    platform.hideLoading({});
                }
                TipsManager.instance.showDefaultTips('网络错误');
                data.errorFun && data.errorFun();
            });
        };
        MiniGameManager.prototype.showBannerAd = function () {
            if (!DeviceUtil.isWXMiniGame() && !DeviceUtil.isQQMiniGame()) {
                return;
            }
            this.canShowBanner = true;
            var bannerId = GameData.getInstance().bannerId;
            if (bannerId.length <= 0) {
                return;
            }
            var adId = bannerId[Math.floor(Math.random() * bannerId.length)];
            if (this.bannerAd == null) {
                var bannerAd = platform.createBannerAd(adId);
                this.bannerAd = bannerAd;
                bannerAd.show();
            }
            this.bannerAd.show();
            if (!this.canShowBanner) {
                this.bannerAd.hide();
            }
        };
        MiniGameManager.prototype.hideBanner = function () {
            if (this.bannerAd != null) {
                this.bannerAd.hide();
            }
            this.canShowBanner = false;
        };
        MiniGameManager.prototype.vibrateShort = function (data) {
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
                platform.vibrateShort(data);
            }
        };
        MiniGameManager.prototype.vibrateLong = function () {
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
                platform.vibrateLong();
            }
        };
        MiniGameManager.prototype.adaptImgToClientRect = function (collec_img, stage) {
            if (DeviceUtil.isWXMiniGame()) {
                var systemInfo = platform.getSystemInfoSync();
                var screenHeight = systemInfo['screenHeight'];
                var screenWidth = systemInfo['screenWidth'];
                var rect = platform.getMenuButtonBoundingClientRect();
                collec_img.top = stage.height * (rect['top'] / screenHeight);
                collec_img.right = stage.width * (1 - rect['right'] / screenWidth) + collec_img.width;
            }
        };
        MiniGameManager.prototype.sendDataToWxOpen = function (data) {
            Laya.MiniAdpter.window.wx.postMessage(data);
        };
        MiniGameManager.prototype.removeOpenData = function (data) {
            var wxOpenData = data.parent.getChildByName('wxOpenData');
            this.sendDataToWxOpen({ cmd: 'close', data: null });
            if (wxOpenData) {
                wxOpenData.removeSelf();
                wxOpenData.destroy();
                wxOpenData = null;
            }
        };
        MiniGameManager.prototype.addOpenWxData = function (data) {
            var shareData = MiniGameManager.instance.getShareInfo({ id: GameData.getInstance().userInfo.openId });
            this.sendDataToWxOpen({ cmd: 'share', data: JSON.stringify(shareData) });
            var wxOpenData = data.parent.getChildByName('wxOpenData');
            if (wxOpenData) {
                wxOpenData.removeSelf();
                wxOpenData.destroy();
                wxOpenData = null;
            }
            wxOpenData = new Laya.WXOpenDataViewer();
            wxOpenData.name = 'wxOpenData';
            wxOpenData.x = data.x || 0;
            wxOpenData.y = data.y || 0;
            wxOpenData.width = data.width;
            wxOpenData.height = data.height;
            if (data.isCenter) {
                wxOpenData.centerX = 0;
                wxOpenData.centerY = 0;
            }
            else {
                if (data.left != null) {
                    wxOpenData.left = data.left;
                }
                if (data.right != null) {
                    wxOpenData.right = data.right;
                }
                if (data.top != null) {
                    wxOpenData.top = data.top;
                }
                if (data.bottom != null) {
                    wxOpenData.bottom = data.bottom;
                }
            }
            if (data.parent) {
                data.parent.addChild(wxOpenData);
            }
            return wxOpenData;
        };
        return MiniGameManager;
    }());

    var GameEvent = (function () {
        function GameEvent() {
        }
        GameEvent.GAME_PAUSE = 'GAME_PAUSE';
        GameEvent.GAME_RESUME = 'GAME_RESUME';
        GameEvent.GAME_OVER = "GAME_OVER";
        GameEvent.LEVEL_VIEW_CLOSE = "LEVEL_VIEW_CLOSE";
        GameEvent.TO_LEVEL_GAME = "TO_LEVEL_GAME";
        GameEvent.PLAYER_ENTER_DOOR = 'PLAYER_ENTER_DOOR';
        GameEvent.BACK_HOME = "BACK_HOME";
        GameEvent.RESTART_GAME = "RESTART_GAME";
        GameEvent.NEXT_GAME = "NEXT_GAME";
        GameEvent.GAME_START = "GAME_START";
        GameEvent.CUT_ROPE = "CUT_ROPE";
        GameEvent.POWER_REPLY_STATUS = "POWER_REPLY_STATUS";
        GameEvent.REFRESH_INVITE = "REFRESH_INVITE";
        GameEvent.REFRESH_POWER = "REFRESH_POWER";
        return GameEvent;
    }());
    window['GameEvent'] = GameEvent;

    var PowerUseUp = (function (_super) {
        __extends(PowerUseUp, _super);
        function PowerUseUp(type) {
            var _this = _super.call(this) || this;
            _this.className_key = "PowerUseUp";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE;
            _this.showType = type;
            _this.skin = "home/power/PowerUseUp.json";
            return _this;
        }
        PowerUseUp.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            MiniGameManager.instance.showBannerAd();
            this.changeShare();
            this.addEvent();
            this.initView();
            GameManager.instance.hidePowerCommon();
        };
        PowerUseUp.prototype.changeShare = function () {
            if (GameData.getInstance().videoId != null && GameData.getInstance().videoId.length > 0) {
                this.btn_video.name = 'video';
                this.img_btnIcon.skin = 'resource/assets/img/common/common_video.png';
                if (GameManager.instance.videoOrShareIndex % 3 != 0) {
                    this.btn_video.name = 'share';
                    this.img_btnIcon.skin = 'resource/assets/img/common/common_share.png';
                }
            }
            else {
                this.btn_video.name = 'share';
                this.img_btnIcon.skin = 'resource/assets/img/common/common_share.png';
            }
        };
        PowerUseUp.prototype.onEnabled = function () {
            if (this.isCreate) ;
        };
        PowerUseUp.prototype.setData = function (type) {
            this.showType = type;
            if (this.isCreate) {
                MiniGameManager.instance.showBannerAd();
                this.changeShare();
                this.addEvent();
                this.initView();
                GameManager.instance.hidePowerCommon();
            }
        };
        PowerUseUp.prototype.addEvent = function () {
            this.btn_video.on(Laya.Event.CLICK, this, this.onVideo);
            this.btn_jump.on(Laya.Event.CLICK, this, this.onClose);
        };
        PowerUseUp.prototype.initView = function () {
            var _this = this;
            if (this.showType) {
                this.img_title.visible = false;
            }
            else {
                this.img_title.visible = true;
            }
            Laya.timer.once(2000, this, function () { return _this.btn_jump.visible = true; });
        };
        PowerUseUp.prototype.onVideo = function () {
            var _this = this;
            SoundManager.getInstance().playEffect(SoundConst.CLICK);
            if (this.btn_video.name == "video") {
                this.mouseEnabled = false;
                MiniGameManager.instance.playViderAd({
                    successFun: function () {
                        _this.mouseEnabled = true;
                        _this.changeShare();
                        GameManager.instance.changePower({ count: GameManager.instance.freePower, isNatural: false });
                        GameManager.instance.videoOrShareIndex++;
                        _this.removeSelf();
                    },
                    failFun: function () {
                        _this.mouseEnabled = true;
                    },
                    errorFun: function () {
                        _this.mouseEnabled = true;
                    }
                });
            }
            else {
                MiniGameManager.instance.shareAppMessage({
                    sucFun: function () {
                        GameManager.instance.videoOrShareIndex++;
                        GameManager.instance.changePower({ count: GameManager.instance.freePower, isNatural: false });
                        _this.changeShare();
                        _this.removeSelf();
                    }
                });
            }
        };
        PowerUseUp.prototype.onClose = function () {
            SoundManager.getInstance().playEffect(SoundConst.CLICK);
            this.removeSelf();
        };
        PowerUseUp.prototype.removeSelf = function () {
            Laya.physicsTimer.resume();
            if (DeviceUtil.isWXMiniGame()) {
                MiniGameManager.instance.hideBanner();
            }
            return _super.prototype.removeSelf.call(this);
        };
        PowerUseUp.prototype.removeEvent = function () {
            this.btn_video.off(Laya.Event.CLICK, this, this.onVideo);
            this.btn_jump.off(Laya.Event.CLICK, this, this.onClose);
        };
        PowerUseUp.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.showType = null;
            Laya.timer.clearAll(this);
            this.btn_jump.visible = false;
            GameManager.instance.showPowerCommon();
        };
        return PowerUseUp;
    }(BasePopSceneView));

    var PowerCommon = (function (_super) {
        __extends(PowerCommon, _super);
        function PowerCommon() {
            var _this = _super.call(this) || this;
            _this.className_key = "PowerCommon";
            _this.skin = "home/power/PowerCommon.json";
            _this.size(305, 130);
            return _this;
        }
        PowerCommon.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            if (GameData.getInstance().isConVersion) {
                this.btn_add.visible = false;
            }
            this.addEvent();
            this.initView();
        };
        PowerCommon.prototype.onEnabled = function () {
            if (this.isCreate) ;
        };
        PowerCommon.prototype.addEvent = function () {
            console.log("PowerCommon >>> addEvent");
            this.btn_add.on(Laya.Event.CLICK, this, this.onAdd);
            EventMgr.getInstance().addEvent(GameEvent.POWER_REPLY_STATUS, this, this.updataShow);
            EventMgr.getInstance().addEvent(GameEvent.REFRESH_POWER, this, this.updataPower);
        };
        PowerCommon.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var surTime;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, GameManager.instance.spaceTimeRestorePower()];
                        case 1:
                            surTime = _a.sent();
                            this.lab_power.text = GameData.getInstance().playerData.power + "";
                            this.surplusTime = Math.floor(surTime / 1000);
                            console.log("PowerCommon >>> initView", this.surplusTime);
                            if (this.surplusTime) {
                                this.lab_time.text = Utils.formatTime(this.surplusTime);
                                this.downTime();
                            }
                            else {
                                Laya.timer.clearAll(this);
                                this.lab_time.text = "";
                            }
                            return [2];
                    }
                });
            });
        };
        PowerCommon.prototype.downTime = function () {
            var _this = this;
            Laya.timer.clearAll(this);
            Laya.timer.loop(1000, this, function () {
                _this.surplusTime--;
                if (_this.surplusTime) {
                    _this.lab_time.text = Utils.formatTime(_this.surplusTime);
                }
                else {
                    _this.lab_time.text = "";
                    Laya.timer.clearAll(_this);
                    GameManager.instance.changePower({ count: 1, isNatural: true });
                    _this.initView();
                }
            });
        };
        PowerCommon.prototype.updataShow = function (type) {
            if (type == 1) {
                this.lab_time.text = "";
                Laya.timer.clearAll(this);
            }
            else {
                this.initView();
            }
        };
        PowerCommon.prototype.updataPower = function () {
            this.lab_power.text = GameData.getInstance().playerData.power + "";
        };
        PowerCommon.prototype.onAdd = function () {
            SoundManager.getInstance().playEffect(SoundConst.CLICK);
            ViewManager.getInstance().showView(PowerUseUp, 1);
        };
        PowerCommon.prototype.removeEvent = function () {
            this.btn_add.off(Laya.Event.CLICK, this, this.onAdd);
            EventMgr.getInstance().removeEvent(GameEvent.POWER_REPLY_STATUS, this, this.updataShow);
            EventMgr.getInstance().removeEvent(GameEvent.REFRESH_POWER, this, this.updataPower);
        };
        PowerCommon.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            Laya.timer.clearAll(this);
        };
        return PowerCommon;
    }(BaseSceneUISkin));

    var PlayerAniConst;
    (function (PlayerAniConst) {
        PlayerAniConst[PlayerAniConst["StandBy1"] = 0] = "StandBy1";
        PlayerAniConst[PlayerAniConst["StandBy2"] = 1] = "StandBy2";
        PlayerAniConst[PlayerAniConst["Relief"] = 2] = "Relief";
        PlayerAniConst[PlayerAniConst["MoveR"] = 3] = "MoveR";
        PlayerAniConst[PlayerAniConst["BackEntrance"] = 4] = "BackEntrance";
        PlayerAniConst[PlayerAniConst["Celebrate"] = 5] = "Celebrate";
        PlayerAniConst[PlayerAniConst["Right"] = 6] = "Right";
        PlayerAniConst[PlayerAniConst["DeadInRope"] = 7] = "DeadInRope";
        PlayerAniConst[PlayerAniConst["StabbedToDeath"] = 8] = "StabbedToDeath";
        PlayerAniConst[PlayerAniConst["DeadByNail"] = 9] = "DeadByNail";
        PlayerAniConst[PlayerAniConst["DeadDown"] = 10] = "DeadDown";
    })(PlayerAniConst || (PlayerAniConst = {}));
    var BanditAniConst;
    (function (BanditAniConst) {
        BanditAniConst[BanditAniConst["StandBy1"] = 0] = "StandBy1";
        BanditAniConst[BanditAniConst["Attack"] = 1] = "Attack";
        BanditAniConst[BanditAniConst["Move"] = 2] = "Move";
        BanditAniConst[BanditAniConst["Dead1"] = 3] = "Dead1";
        BanditAniConst[BanditAniConst["Dead2"] = 4] = "Dead2";
        BanditAniConst[BanditAniConst["Dead3"] = 5] = "Dead3";
    })(BanditAniConst || (BanditAniConst = {}));

    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        function Bullet() {
            var _this = _super.call(this) || this;
            _this.className_key = 'Bullet';
            return _this;
        }
        Bullet.prototype.onCreate = function (data) {
            if (data.width == null) {
                data.width = 27;
                data.height = 11;
            }
            _super.prototype.onCreate.call(this, data, true);
            this.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            if (this.rigidBody == null) {
                this.rigidBody = this.addComponent(Laya.RigidBody);
            }
            this.rigidBody.type = Physic.KINEMATIC;
            this.rigidBody.bullet = true;
            if (this.collider == null) {
                this.collider = this.addComponent(Laya.BoxCollider);
            }
            this.collider.label = GameConstant.Bullet;
            this.collider.width = this.width * 1.2;
            this.collider.height = this.height * 1.2;
            this.collider.isSensor = true;
            var image = new Laya.Image();
            image.skin = 'resource/assets/img/game/' + data.source + '.png';
            this.addChild(image);
            image.centerX = image.centerY = 0;
            image.size(this.width, this.height);
        };
        Bullet.prototype.onTriggerEnter = function (other, self, contact) {
            if (!this.isEnabled)
                return;
            console.log('BULLET', other.label);
            if (other.label.indexOf(GameConstant.Player) > -1) {
                var player = other.owner;
                if (player) {
                    player.playerDead();
                    this.destroy();
                }
            }
            else if (other.label.indexOf(GameConstant.Bandit) > -1) {
                return;
            }
            else if (other.label.indexOf(GameConstant.Bullet) > -1) {
                return;
            }
            else if (other.label.indexOf(GameConstant.Rope) > -1) {
                return;
            }
            else if (other.label.indexOf(GameConstant.Door) > -1) {
                return;
            }
            else {
                var obj = other.owner;
                if (obj) {
                    var rigidBody = obj.getComponent(Laya.RigidBody);
                    if (rigidBody.type == Physic.STATIC || rigidBody.type == Physic.DYNAMIC) {
                        this.isEnabled = false;
                        this.destroy();
                    }
                }
            }
        };
        Bullet.prototype.destroy = function () {
            if (this.parent) {
                ObjectPool.instance.recoveryObj(this);
            }
        };
        Bullet.prototype.onRecovery = function () {
            this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            _super.prototype.onRecovery.call(this);
        };
        return Bullet;
    }(GameObj));
    var ArtilleryBullet = (function (_super) {
        __extends(ArtilleryBullet, _super);
        function ArtilleryBullet() {
            var _this = _super.call(this) || this;
            _this.className_key = 'ArtilleryBullet';
            return _this;
        }
        ArtilleryBullet.prototype.onCreate = function (data) {
            if (data.width == null) {
                data.width = 94;
                data.height = 49;
            }
            _super.prototype.onCreate.call(this, data);
            this.collider.width = this.width;
            this.collider.height = this.height;
            this.collider.label = GameConstant.Artillery_bullet;
        };
        ArtilleryBullet.prototype.onTriggerEnter = function (other, self, contact) {
            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING)
                return;
            console.log('Artillery', other.label);
            if (!this.isEnabled)
                return;
            if (other.label.indexOf(GameConstant.Player) > -1) {
                var player = other.owner;
                if (player) {
                    player.playerDead();
                    this.destroy();
                }
            }
            else if (other.label.indexOf(GameConstant.Bandit) > -1) {
                var bandit = other.owner;
                if (bandit && !bandit.isDead) {
                    bandit.banditDead(BanditAniConst.Dead1);
                    this.destroy();
                }
            }
            else if (other.label.indexOf(GameConstant.Bullet) > -1) {
                return;
            }
            else if (other.label.indexOf(GameConstant.Artillery) > -1) {
                return;
            }
            else if (other.label.indexOf(GameConstant.Rope) > -1) {
                return;
            }
            else if (other.label.indexOf(GameConstant.Door) > -1) {
                return;
            }
            else {
                var obj = other.owner;
                if (obj) {
                    var rigidBody = obj.getComponent(Laya.RigidBody);
                    console.log(rigidBody.type);
                    if (rigidBody.type == Physic.STATIC || rigidBody.type == Physic.DYNAMIC) {
                        this.isEnabled = false;
                        this.destroy();
                    }
                }
            }
        };
        ArtilleryBullet.prototype.destroy = function () {
            if (this.parent) {
                ObjectPool.instance.recoveryObj(this);
            }
        };
        ArtilleryBullet.prototype.onRecovery = function () {
            this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            _super.prototype.onRecovery.call(this);
        };
        return ArtilleryBullet;
    }(Bullet));

    var Bandit = (function (_super) {
        __extends(Bandit, _super);
        function Bandit() {
            var _this = _super.call(this) || this;
            _this.className_key = 'Bandit';
            _this.isBinding = true;
            _this.isDead = false;
            _this.tweenObj = {};
            _this.index = 0;
            _this.distanceJointArr = [];
            return _this;
        }
        Bandit.prototype.onCreate = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            data.width = 50;
                            data.height = 170;
                            _super.prototype.onCreate.call(this, data, false);
                            EventMgr.getInstance().addEvent(GameEvent.GAME_PAUSE, this, this.onGamePause);
                            EventMgr.getInstance().addEvent(GameEvent.GAME_RESUME, this, this.onGameResume);
                            this.isDead = false;
                            this.rigidBody = this.addComponent(Laya.RigidBody);
                            this.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
                            this.on(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
                            this.rigidBody.type = Physic.DYNAMIC;
                            this.rigidBody.allowRotation = false;
                            this.collider = this.addComponent(Laya.BoxCollider);
                            this.collider.label = GameConstant.Bandit;
                            this.rigidBody.gravityScale = 5;
                            this.collider.isSensor = false;
                            this.collider.width = this.width / 2;
                            this.collider.height = this.height;
                            this.collider.x = this.width / 2;
                            this.collider.y = 0;
                            this.collider.density = 1;
                            this.collider.restitution = 0;
                            this.collider.friction = 0;
                            if (!(this.banditAni == null)) return [3, 2];
                            return [4, this.createSkeleton()];
                        case 1:
                            _a.sent();
                            return [3, 3];
                        case 2:
                            this.playBanditAni(BanditAniConst.StandBy1);
                            _a.label = 3;
                        case 3:
                            this.x = data.x;
                            this.y = data.y;
                            this.banditMove();
                            Laya.timer.frameLoop(15, this, this.onCheckAttack);
                            return [2];
                    }
                });
            });
        };
        Bandit.prototype.onGamePause = function () {
            if (this.isDead)
                return;
            Laya.timer.clear(this, this.onCheckAttack);
        };
        Bandit.prototype.onGameResume = function () {
            if (this.isDead)
                return;
            Laya.timer.frameLoop(15, this, this.onCheckAttack);
        };
        Bandit.prototype.onCheckAttack = function () {
            var _this = this;
            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING)
                return;
            if (this.isDead)
                return;
            var banditCanAttackObj = GameManager.instance.banditCanAttackObj;
            for (var id in banditCanAttackObj) {
                var sprite = banditCanAttackObj[id];
                if (sprite instanceof Bandit)
                    continue;
                var dx = sprite.x - this.x;
                var dy = sprite.y - this.y;
                if (Math.abs(dy) < 40) {
                    this.attackAim(dx, dy);
                    this.playBanditAni(BanditAniConst.Attack, false, function () {
                        if (_this.isDead)
                            return;
                        if (_this.banditAni) {
                            _this.banditAni.paused();
                            Laya.Tween.clearAll(_this);
                        }
                        _this.banditMove();
                    });
                    break;
                }
            }
        };
        Bandit.prototype.attackAim = function (dx, dy) {
            var data = { id: Laya.Utils.getGID(), width: 27, height: 11, source: 'game_bullet' };
            var bullet = ObjectPool.instance.createObjectByName(Bullet, data);
            bullet.x = this.x;
            bullet.y = this.y;
            var ver = { x: 90, y: 0 };
            if (dx < 0) {
                ver.x = -90;
            }
            bullet.rigidBody.setVelocity(ver);
            GameManager.instance.bodyLayer.addChild(bullet);
        };
        Bandit.prototype.banditMove = function () {
            var _this = this;
            if (this.isDead)
                return;
            this.index++;
            var xs = this.objInfo_["p" + (this.index % 2 + 1)];
            var dis = xs - this.x;
            if (dis > 0) {
                this.banditAni && (this.banditAni.skewY = 180);
            }
            else {
                this.banditAni && (this.banditAni.skewY = 0);
            }
            if (this.banditAni) {
                this.banditAni.paused();
            }
            this.playBanditAni(BanditAniConst.Move, true);
            Laya.Tween.to(this, { x: xs }, Math.abs(dis) * 10, null, Laya.Handler.create(this, function () {
                _this.banditAni && _this.banditAni.paused();
                _this.playBanditAni(BanditAniConst.StandBy1, false, function () {
                    if (_this.banditAni) {
                        _this.banditAni.paused();
                    }
                    _this.banditMove();
                });
            }));
        };
        Bandit.prototype.onRecovery = function () {
            this.isRecovery = true;
            this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            EventMgr.getInstance().removeEvent(GameEvent.GAME_PAUSE, this, this.onGamePause);
            EventMgr.getInstance().removeEvent(GameEvent.GAME_RESUME, this, this.onGameResume);
            this._destroyAllComponent();
            this.banditAni && this.banditAni.stop();
            Laya.timer.clearAll(this);
            Laya.Tween.clearTween(this);
            this.collider = null;
            this.rigidBody = null;
            this.removeSelf();
        };
        Bandit.prototype.setOtherRigidBody = function (sprite) {
            var distanceJoint = new Laya.DistanceJoint();
            this._addComponentInstance(distanceJoint);
            distanceJoint.length = 10;
            distanceJoint.selfBody = this.rigidBody;
            distanceJoint.selfAnchor = [this.width, this.height / 2];
            var rigidBody = sprite.getComponent(Laya.RigidBody);
            distanceJoint.otherBody = rigidBody;
            distanceJoint.frequency = 0;
            distanceJoint.damping = 1;
            distanceJoint.collideConnected = false;
            distanceJoint.otherAnchor = [sprite.width / 2, sprite.height];
            this.distanceJointArr.push(distanceJoint);
        };
        Bandit.prototype.destroyJoint = function () {
            var distanceJointArr = this.distanceJointArr;
            var len = distanceJointArr.length;
            for (var i = 0; i < len; i++) {
                this._destroyComponent(distanceJointArr[i]);
                distanceJointArr[i] = null;
            }
            distanceJointArr.splice(0, len);
        };
        Bandit.prototype.createSkeleton = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            var url = "resource/assets/img/sk/R_2.sk";
                            AnimationManager.instance.showSkeletonAnimation(url, function (boomAnimation) {
                                if (boomAnimation == null) {
                                    resolve(boomAnimation);
                                    return;
                                }
                                console.log("aniNum =", boomAnimation.getAnimNum());
                                _this.addChild(boomAnimation);
                                boomAnimation.player.playbackRate = 1;
                                boomAnimation.scale(1, 1);
                                boomAnimation.autoSize = true;
                                boomAnimation.x = boomAnimation.width / 2;
                                boomAnimation.y = _this.height;
                                var index = Laya.Utils.getQueryString('index');
                                if (index == null)
                                    index = "0";
                                boomAnimation.play(parseInt(index), true);
                                _this.banditAni = boomAnimation;
                                resolve(boomAnimation);
                            });
                        })];
                });
            });
        };
        Bandit.prototype.playBanditAni = function (index, loop, callF) {
            if (loop === void 0) { loop = true; }
            if (this.banditAni) {
                this.banditAni.paused();
                if (loop == false && callF) {
                    this.banditAni.player.once(Laya.Event.STOPPED, this, callF, [index]);
                }
                this.banditAni.play(index, loop);
            }
            else {
                callF && callF();
            }
        };
        Bandit.prototype.onTriggerExit = function (other, self, contact) {
            if (other.label.indexOf(GameConstant.Board) > -1) {
                console.log("离开挡板...");
            }
        };
        Bandit.prototype.onTriggerEnter = function (other, self, contact) {
            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING)
                return;
            var owe = other.owner;
            if (owe == null)
                return;
            if (other.label.indexOf(GameConstant.Floor) > -1) {
                var conf = other.owner.objInfo_;
                if (conf.dead) {
                    this.banditDead(BanditAniConst.Dead3);
                    return;
                }
            }
            else if (other.label.indexOf(GameConstant.Board) > -1) ;
            else if (other.label.indexOf(GameConstant.Heavy) > -1 || other.label.indexOf(GameConstant.Serrated) > -1) {
                if (owe instanceof HeavyView || owe instanceof SerratedView) {
                    if (owe.canHit) {
                        owe.canHit = false;
                        this.banditDead(BanditAniConst.Dead3);
                    }
                }
            }
            else if (other.label.indexOf(GameConstant.GroundNeedles) > -1 || other.label.indexOf(GameConstant.SAW) > -1 || other.label.indexOf(GameConstant.spine) > -1) {
                console.log('死亡');
                this.banditDead(BanditAniConst.Dead2);
            }
            else if (other.label.indexOf(GameConstant.Spring) > -1) {
                if (owe != null && owe instanceof SpringView) {
                    var t = owe.rotation / 180 * Math.PI;
                    var o = Laya.Point.create();
                    var flag = owe.objInfo_.time;
                    o.x = flag * Math.sin(t);
                    o.y = -flag * Math.cos(t);
                    this.rigidBody.applyForce({ x: this.x + this.width, y: this.y + this.height }, o);
                }
            }
        };
        Bandit.prototype.banditDead = function (index) {
            this.isDead = true;
            if (this.rigidBody) {
                this.rigidBody.type = Physic.KINEMATIC;
                this.rigidBody.setVelocity({ x: 0, y: 0 });
                this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            }
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this);
            this.playBanditAni(index, false);
            this.collider.isSensor = true;
            if (GameManager.instance.banditCanAttackObj[this.objInfo_.id]) {
                delete GameManager.instance.banditCanAttackObj[this.objInfo_.id];
            }
        };
        return Bandit;
    }(GameObj));
    window['Bandit'] = Bandit;
    var BanditObjInfo = (function (_super) {
        __extends(BanditObjInfo, _super);
        function BanditObjInfo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BanditObjInfo;
    }(GameObjInfo));

    var ElectricSaw = (function (_super) {
        __extends(ElectricSaw, _super);
        function ElectricSaw() {
            var _this = _super.call(this) || this;
            _this.className_key = 'ElectricSaw';
            _this.isInit = false;
            _this.index = 0;
            _this.length = 0;
            _this.distanceJointArr = [];
            _this.isInit = false;
            _this.skin = 'game/ElectricSaw.json';
            return _this;
        }
        ElectricSaw.prototype.onEnabled = function () {
            if (this.isCreate) {
                this.initView();
            }
        };
        ElectricSaw.prototype.onCreate = function (data) {
            this.objInfo_ = data;
            this.initView();
            EventMgr.getInstance().addEvent(GameEvent.CUT_ROPE, this, this.onCutRope);
        };
        ElectricSaw.prototype.createSawAni = function () {
            var _this = this;
            var url = "resource/assets/img/sk/saw.sk";
            AnimationManager.instance.showSkeletonAnimation(url, function (boomAnimation) {
                if (boomAnimation == null)
                    return;
                _this.icon_saw.addChild(boomAnimation);
                boomAnimation.player.playbackRate = 1;
                boomAnimation.scale(1, 1);
                boomAnimation.x = _this.icon_saw.width / 2;
                boomAnimation.y = _this.icon_saw.height - 50;
                boomAnimation.play(0, true);
                _this.sawAni = boomAnimation;
            });
        };
        ElectricSaw.prototype.onCutRope = function (data) {
            if (data.connect == this.objInfo_.connect) {
                EventMgr.getInstance().removeEvent(GameEvent.CUT_ROPE, this, this.onCutRope);
                this.destroyJoint();
                this.startMove();
            }
        };
        ElectricSaw.prototype.initView = function () {
            var _this = this;
            if (this.isCreate) {
                this.classCollider = this.icon_.getComponent(Laya.BoxCollider);
                this.sawCollider = this.icon_saw.getComponent(Laya.BoxCollider);
                if (this.objInfo_) {
                    if (this.isInit)
                        return;
                    this.isInit = true;
                    this.width = this.objInfo_.width;
                    this.height = this.objInfo_.height;
                    this.icon_.width = this.objInfo_.width;
                    this.icon_.height = this.objInfo_.height;
                    this.classCollider.width = this.width;
                    this.classCollider.height = this.height;
                    this.pivot(this.width / 2, this.height / 2);
                    if (this.objInfo_.rotation != null) {
                        this.rotation = this.objInfo_.rotation;
                    }
                    Laya.timer.once(100, this, function () {
                        _this.icon_saw.anchorX = _this.icon_saw.anchorY = 0.5;
                        _this.icon_saw.x = _this.objInfo_.start.x;
                        _this.icon_saw.y = _this.objInfo_.start.y;
                        if (_this.objInfo_.start.roation) {
                            _this.icon_saw.rotation = _this.objInfo_.start.roation;
                        }
                    });
                    var pos = this.objInfo_.pos;
                    this.length = pos.length;
                }
                this.sawCollider.label = GameConstant.SAW;
                this.sawCollider.isSensor = true;
                this.createSawAni();
            }
        };
        ElectricSaw.prototype.startMove = function () {
            var pos = this.objInfo_.pos;
            var index = this.index;
            var point = pos[index % this.length];
            var dis = Utils.getDistance(point, { x: this.icon_saw.x, y: this.icon_saw.y });
            var roation = this.icon_saw.rotation + point.roation;
            if (point.r == 1) {
                Laya.Tween.to(this.icon_saw, { x: point.x, y: point.y, rotation: roation }, dis * 10, null, Laya.Handler.create(this, this.onComplete));
            }
            else {
                this.icon_saw.rotation = roation;
                Laya.Tween.to(this.icon_saw, { x: point.x, y: point.y }, dis * 10, null, Laya.Handler.create(this, this.onComplete));
            }
        };
        ElectricSaw.prototype.onComplete = function () {
            this.index++;
            this.icon_saw.rotation %= 360;
            this.startMove();
        };
        ElectricSaw.prototype.setOtherRigidBody = function (sprite) {
            this.rigidBody = this.icon_saw.getComponent(Laya.RigidBody);
            this.rigidBody.type = Physic.KINEMATIC;
            var distanceJoint = new Laya.DistanceJoint();
            this.icon_saw._addComponentInstance(distanceJoint);
            distanceJoint.length = 10;
            distanceJoint.selfBody = this.rigidBody;
            distanceJoint.selfAnchor = [this.icon_saw.width / 2, this.icon_saw.height / 2];
            var rigidBody = sprite.getComponent(Laya.RigidBody);
            distanceJoint.otherBody = rigidBody;
            distanceJoint.frequency = 0;
            distanceJoint.damping = 1;
            distanceJoint.collideConnected = false;
            distanceJoint.otherAnchor = [sprite.width / 2, sprite.height];
            this.distanceJointArr.push(distanceJoint);
        };
        ElectricSaw.prototype.destroyJoint = function () {
            var distanceJointArr = this.distanceJointArr;
            var len = distanceJointArr.length;
            for (var i = 0; i < len; i++) {
                this.icon_saw._destroyComponent(distanceJointArr[i]);
                distanceJointArr[i] = null;
            }
            distanceJointArr.splice(0, len);
        };
        ElectricSaw.prototype.onRecovery = function () {
            if (this.sawAni) {
                this.sawAni.stop();
                this.sawAni.removeSelf();
                this.sawAni.destroy();
            }
            Laya.timer.clearAll(this);
            Laya.Tween.clearTween(this);
            this.icon_saw._destroyAllComponent();
            this.icon_saw.destroy();
            this.icon_._destroyAllComponent();
            this.icon_.destroy();
            this.removeChildren();
            this.removeSelf();
            this.destroy();
        };
        return ElectricSaw;
    }(BaseSceneUISkin));

    var Artillery = (function (_super) {
        __extends(Artillery, _super);
        function Artillery() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = 'Artillery';
            _this.tweenObj = {};
            _this.distanceJointArr = [];
            return _this;
        }
        Artillery.prototype.onCreate = function (data) {
            if (data.width == null) {
                data.width = 156;
                data.height = 129;
            }
            _super.prototype.onCreate.call(this, data, true);
            this.rigidBody = this.addComponent(Laya.RigidBody);
            this.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            EventMgr.getInstance().addEvent(GameEvent.GAME_PAUSE, this, this.onGamePause);
            EventMgr.getInstance().addEvent(GameEvent.GAME_RESUME, this, this.onGameResume);
            this.rigidBody.type = Physic.DYNAMIC;
            this.rigidBody.allowRotation = false;
            this.collider = this.addComponent(Laya.BoxCollider);
            this.collider.label = GameConstant.Artillery;
            this.rigidBody.gravityScale = 1;
            this.collider.width = this.width;
            this.collider.height = this.height;
            this.collider.x = 0;
            this.collider.y = 0;
            this.collider.density = 0.7;
            this.collider.restitution = 0;
            this.collider.friction = 0;
            var image = new Laya.Image();
            image.skin = 'resource/assets/img/game/game_artillery.png';
            this.addChild(image);
            image.centerX = image.centerY = 0;
            image.size(this.width, this.height);
            Laya.timer.frameLoop(10, this, this.onCheckAttack);
        };
        Artillery.prototype.onGamePause = function () {
            Laya.timer.clear(this, this.onCheckAttack);
        };
        Artillery.prototype.onGameResume = function () {
            Laya.timer.frameLoop(15, this, this.onCheckAttack);
        };
        Artillery.prototype.onCheckAttack = function () {
            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING)
                return;
            var banditCanAttackObj = GameManager.instance.banditCanAttackObj;
            for (var id in banditCanAttackObj) {
                var sprite = banditCanAttackObj[id];
                var dx = sprite.x - this.x;
                var dy = sprite.y - this.y;
                if (Math.abs(dy) < 45) {
                    if (dx > 0) {
                        this.attackAim(dx, dy);
                    }
                    break;
                }
            }
        };
        Artillery.prototype.attackAim = function (dx, dy) {
            var data = { id: Laya.Utils.getGID(), width: 94, height: 49, source: 'game_bullet1' };
            var bullet = ObjectPool.instance.createObjectByName(ArtilleryBullet, data);
            bullet.x = this.x;
            bullet.y = this.y;
            var ver = { x: 100, y: 0 };
            if (dx < 0) {
                ver.x = -100;
            }
            bullet.rigidBody.setVelocity(ver);
            GameManager.instance.bodyLayer.addChild(bullet);
        };
        Artillery.prototype.onRecovery = function () {
            this.isRecovery = true;
            this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            EventMgr.getInstance().removeEvent(GameEvent.GAME_PAUSE, this, this.onGamePause);
            EventMgr.getInstance().removeEvent(GameEvent.GAME_RESUME, this, this.onGameResume);
            this._destroyAllComponent();
            Laya.timer.clearAll(this);
            Laya.Tween.clearTween(this);
            this.collider = null;
            this.rigidBody = null;
            this.removeSelf();
        };
        Artillery.prototype.onTriggerEnter = function (other, self, contact) {
            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING)
                return;
            if (other.label.indexOf(GameConstant.Floor) > -1) {
                this.destroyJoint();
                this.rigidBody.setVelocity({ x: 0, y: 0 });
            }
        };
        Artillery.prototype.setOtherRigidBody = function (sprite) {
            var distanceJoint = new Laya.DistanceJoint();
            this._addComponentInstance(distanceJoint);
            distanceJoint.length = 10;
            distanceJoint.selfBody = this.rigidBody;
            distanceJoint.selfAnchor = [this.width, this.height / 2];
            var rigidBody = sprite.getComponent(Laya.RigidBody);
            distanceJoint.otherBody = rigidBody;
            distanceJoint.frequency = 0;
            distanceJoint.damping = 1;
            distanceJoint.collideConnected = false;
            distanceJoint.otherAnchor = [sprite.width / 2, sprite.height];
            this.distanceJointArr.push(distanceJoint);
        };
        Artillery.prototype.destroyJoint = function () {
            var distanceJointArr = this.distanceJointArr;
            var len = distanceJointArr.length;
            for (var i = 0; i < len; i++) {
                this._destroyComponent(distanceJointArr[i]);
                distanceJointArr[i] = null;
            }
            distanceJointArr.splice(0, len);
        };
        return Artillery;
    }(GameObj));

    var GameManager = (function () {
        function GameManager() {
            this.randomTime = 0;
            this.videoOrShareIndex = 0;
            this.bodyMap = {};
            this.chainObj = {};
            this.banditCanAttackObj = {};
            this._currLevel = 1;
            this.powerLimit = 20;
            this.powerRestoreTime = 180000;
            this.canPlayVideo = true;
            this.levelUrl = 'resource/assets/map/level';
            this.freePower = 0;
            this.maxLevel = 0;
            this.gameStatus = GAMESTATUS.PAUSE;
            this.randomTime = new Date().getTime();
        }
        Object.defineProperty(GameManager, "instance", {
            get: function () {
                if (this.ins == null) {
                    this.ins = new GameManager();
                }
                return this.ins;
            },
            enumerable: true,
            configurable: true
        });
        GameManager.prototype.addArr = function (arr, len) {
            if (len === void 0) { len = 12; }
            if (arr.length < len) {
                var info = arr[Math.floor(Math.random() * arr.length)];
                Math.random() > 0.5 ? arr.push(info) : arr.unshift(info);
                this.addArr(arr, len);
            }
        };
        GameManager.prototype.getArrayItems = function (arr, num) {
            var temp_array = new Array();
            for (var index in arr) {
                temp_array.push(arr[index]);
            }
            var return_array = new Array();
            for (var i = 0; i < num; i++) {
                if (temp_array.length > 0) {
                    var arrIndex = Math.floor(Math.random() * temp_array.length);
                    return_array[i] = temp_array[arrIndex];
                    temp_array.splice(arrIndex, 1);
                }
                else {
                    break;
                }
            }
            return return_array;
        };
        GameManager.prototype.addBody = function (id, sprite) {
            this.bodyMap[id] = sprite;
        };
        GameManager.prototype.removeBody = function (id) {
            var obj = this.bodyMap[id];
            if (obj) {
                ObjectPool.instance.recoveryObj(obj);
                delete this.bodyMap[id];
            }
            if (this.banditCanAttackObj[id]) {
                delete this.banditCanAttackObj[id];
            }
            if (this.chainObj[id]) {
                delete this.chainObj[id];
            }
        };
        GameManager.prototype.clearBody = function () {
            for (var id in this.bodyMap) {
                var obj = this.bodyMap[id];
                if (obj) {
                    ObjectPool.instance.recoveryObj(obj);
                }
                delete this.bodyMap[id];
            }
            this.chainObj = {};
            this.banditCanAttackObj = {};
        };
        Object.defineProperty(GameManager.prototype, "currLevel", {
            get: function () {
                return this._currLevel;
            },
            set: function (level) {
                this._currLevel = level;
                GameData.getInstance().playerData.currLevel = level;
                GameMgr.getInstance().sendKVJson(GameMgr.getInstance().player, GameData.getInstance().playerData);
            },
            enumerable: true,
            configurable: true
        });
        GameManager.prototype.showPowerCommon = function () {
            if (!this.com_PowerCommon) {
                this.com_PowerCommon = new PowerCommon();
                this.com_PowerCommon.pos(20, 50);
                BufferLoadingManger.instance.bufferGroup.addChild(this.com_PowerCommon);
                if (DeviceUtil.isWXMiniGame()) {
                    var systemInfo = platform.getSystemInfoSync();
                    var screenHeight = systemInfo['screenHeight'];
                    var screenWidth = systemInfo['screenWidth'];
                    var rect = platform.getMenuButtonBoundingClientRect();
                    this.com_PowerCommon.y = Laya.stage.height * (rect['top'] / screenHeight);
                }
                if (DeviceUtil.isQQMiniGame()) {
                    this.com_PowerCommon.y += 80;
                }
            }
            this.com_PowerCommon.visible = true;
        };
        GameManager.prototype.hidePowerCommon = function () {
            if (this.com_PowerCommon) {
                this.com_PowerCommon.visible = false;
            }
        };
        GameManager.prototype.changePower = function (data) {
            var count = data.count;
            var isNatural = data.isNatural;
            if (count < 0) {
                if (GameData.getInstance().playerData.power + count < 0) {
                    ViewManager.getInstance().showView(PowerUseUp);
                    return;
                }
                else {
                    data.success && data.success();
                    if (GameData.getInstance().playerData.power < this.powerLimit) {
                        GameData.getInstance().playerData.power += count;
                    }
                    else {
                        if (GameData.getInstance().playerData.power + count < this.powerLimit) {
                            console.warn("开始自然恢复");
                            GameData.getInstance().playerData.power += count;
                            GameMgr.getInstance().sendKV(GameMgr.getInstance().powerTime, new Date().getTime());
                            EventMgr.getInstance().sendEvent(GameEvent.POWER_REPLY_STATUS, 2);
                        }
                        else {
                            GameData.getInstance().playerData.power += count;
                        }
                    }
                }
            }
            else {
                GameData.getInstance().playerData.power += count;
                if (GameData.getInstance().playerData.power >= this.powerLimit) {
                    console.warn("体力达自然恢复上限！");
                    GameMgr.getInstance().sendKV(GameMgr.getInstance().powerTime, 0);
                    EventMgr.getInstance().sendEvent(GameEvent.POWER_REPLY_STATUS, 1);
                }
                else {
                    isNatural && GameMgr.getInstance().sendKV(GameMgr.getInstance().powerTime, new Date().getTime());
                }
            }
            EventMgr.getInstance().sendEvent(GameEvent.REFRESH_POWER);
            GameMgr.getInstance().sendKVJson(GameMgr.getInstance().player, GameData.getInstance().playerData);
        };
        GameManager.prototype.spaceTimeRestorePower = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var showTime, powerTimeStr, nowTime, disTime, count, diffTime;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        showTime = 0;
                                        if (!(GameData.getInstance().playerData.power >= this.powerLimit)) return [3, 1];
                                        resolve(showTime);
                                        return [3, 3];
                                    case 1: return [4, GameMgr.getInstance().getKV(GameMgr.getInstance().powerTime)];
                                    case 2:
                                        powerTimeStr = _a.sent();
                                        if (powerTimeStr != null && powerTimeStr != 0 + '') {
                                            nowTime = new Date().getTime();
                                            disTime = nowTime - parseInt(powerTimeStr);
                                            if (disTime >= 0) {
                                                count = Math.floor(disTime / this.powerRestoreTime);
                                                diffTime = disTime % this.powerRestoreTime;
                                                if (count > 0) {
                                                    GameData.getInstance().playerData.power += count;
                                                    GameMgr.getInstance().sendKV(GameMgr.getInstance().powerTime, nowTime - diffTime);
                                                }
                                                if (GameData.getInstance().playerData.power >= this.powerLimit) {
                                                    console.warn("体力达自然恢复上限！");
                                                    GameData.getInstance().playerData.power = this.powerLimit;
                                                    GameMgr.getInstance().sendKV(GameMgr.getInstance().powerTime, 0);
                                                }
                                                else {
                                                    showTime = this.powerRestoreTime - diffTime;
                                                }
                                            }
                                        }
                                        else {
                                            showTime = this.powerRestoreTime;
                                            GameMgr.getInstance().sendKV(GameMgr.getInstance().powerTime, new Date().getTime());
                                        }
                                        resolve(showTime);
                                        _a.label = 3;
                                    case 3: return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        GameManager.prototype.addInviteReward = function (count) {
            GameData.getInstance().playerData.inviteReward += count;
            GameMgr.getInstance().sendKVJson(GameMgr.getInstance().player, GameData.getInstance().playerData);
        };
        GameManager.prototype.getGameLevelJson = function (level) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                var _this = this;
                return __generator(this, function (_a) {
                    url = this.levelUrl + level + '.json?v=' + this.randomTime;
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                Laya.loader.load(url, Laya.Handler.create(this, function (json) {
                                    var data = Utils.copy(json);
                                    console.log(data);
                                    resolve(data);
                                    GameManager.instance.getNextLevelJson((level + 1));
                                }));
                                return [2];
                            });
                        }); })];
                });
            });
        };
        GameManager.prototype.getNextLevelJson = function (level) {
            var url = this.levelUrl + level + '.json?v=' + this.randomTime;
            Laya.loader.load(url, Laya.Handler.create(this, function (json) {
            }));
        };
        GameManager.prototype.getMaxLevelConfig = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            var jsonUrl = url;
                            Laya.loader.load(jsonUrl, Laya.Handler.create(_this, function (res) {
                                console.log("configs >>> ", res);
                                GameManager.instance.maxLevel = res.maxLevel;
                                GameManager.instance.freePower = res.freePower;
                                GameManager.instance.powerLimit = res.maxPower;
                                GameManager.instance.powerRestoreTime = res.recoverTime;
                                MiniGameManager.instance.shareInfo = res.shareInfo;
                                InviteManager.getInstance().inviteConfig = res.invite;
                                resolve();
                            }));
                        })];
                });
            });
        };
        GameManager.prototype.createDoor = function (obj) {
            var door = ObjectPool.instance.createObjectByName(Door, obj);
            door.x = obj.x;
            door.y = obj.y;
            return door;
        };
        GameManager.prototype.createSpineTrun = function (obj) {
            var spineTrun = new SpineTrun();
            spineTrun.x = obj.x;
            spineTrun.y = obj.y;
            spineTrun.objInfo_ = obj;
            return spineTrun;
        };
        GameManager.prototype.createFloor = function (obj) {
            var floor = ObjectPool.instance.createObjectByName(Floor, obj);
            floor.x = obj.x;
            floor.y = obj.y;
            if (obj.roation != null) {
                floor.rotation = obj.roation;
            }
            else {
                floor.rotation = 0;
            }
            return floor;
        };
        GameManager.prototype.createCeiling = function (obj) {
            var roofView = ObjectPool.instance.createObjectByName(RoofView, obj);
            roofView.collider.label = GameConstant.Ceiling;
            roofView.x = obj.x;
            roofView.y = obj.y;
            if (obj.roation != null) {
                roofView.rotation = obj.roation;
            }
            else {
                roofView.rotation = 0;
            }
            return roofView;
        };
        GameManager.prototype.createSerratedView = function (obj) {
            var serratedView = ObjectPool.instance.createObjectByName(SerratedView, obj);
            if (obj.roation != null) {
                serratedView.rotation = obj.roation;
            }
            else {
                serratedView.rotation = 0;
            }
            serratedView.objInfo_ = obj;
            serratedView.x = obj.x;
            serratedView.y = obj.y;
            return serratedView;
        };
        GameManager.prototype.createHeavy = function (obj) {
            var heavyView = ObjectPool.instance.createObjectByName(HeavyView, obj);
            if (obj.roation != null) {
                heavyView.rotation = obj.roation;
            }
            else {
                heavyView.rotation = 0;
            }
            heavyView.objInfo_ = obj;
            heavyView.x = obj.x;
            heavyView.y = obj.y;
            return heavyView;
        };
        GameManager.prototype.createConnectBoard = function (obj) {
            var connectBoard = new ConnectBoard();
            if (obj.roation != null) {
                connectBoard.rotation = obj.roation;
            }
            else {
                connectBoard.rotation = 0;
            }
            connectBoard.objInfo_ = obj;
            connectBoard.x = obj.x;
            connectBoard.y = obj.y;
            return connectBoard;
        };
        GameManager.prototype.createSpineBoxNeedles = function (obj) {
            var spineBoxNeedles = new SpineBoxNeedles();
            if (obj.roation != null) {
                spineBoxNeedles.rotation = obj.roation;
            }
            else {
                spineBoxNeedles.rotation = 0;
            }
            spineBoxNeedles.objInfo_ = obj;
            spineBoxNeedles.x = obj.x;
            spineBoxNeedles.y = obj.y;
            return spineBoxNeedles;
        };
        GameManager.prototype.createSpring = function (obj) {
            var springView = ObjectPool.instance.createObjectByName(SpringView, obj);
            if (obj.roation != null) {
                springView.rotation = obj.roation;
            }
            else {
                springView.rotation = 0;
            }
            springView.x = obj.x;
            springView.y = obj.y;
            return springView;
        };
        GameManager.prototype.createGroundNeedles = function (obj) {
            var groundNeedles = ObjectPool.instance.createObjectByName(GroundNeedles, obj);
            if (obj.roation != null) {
                groundNeedles.rotation = obj.roation;
            }
            else {
                groundNeedles.rotation = 0;
            }
            groundNeedles.x = obj.x;
            groundNeedles.y = obj.y;
            return groundNeedles;
        };
        GameManager.prototype.createTurnboardView = function (obj) {
            var board = ObjectPool.instance.createObjectByName(TurnboardView, obj);
            board.x = obj.x;
            board.y = obj.y;
            return board;
        };
        GameManager.prototype.createBoard = function (obj) {
            var board = ObjectPool.instance.createObjectByName(Board, obj);
            board.x = obj.x;
            board.y = obj.y;
            if (obj.roation != null) {
                board.rotation = obj.roation;
            }
            else {
                board.rotation = 0;
            }
            return board;
        };
        GameManager.prototype.createBandit = function (obj) {
            var bandit = ObjectPool.instance.createObjectByName(Bandit, obj);
            bandit.x = obj.x;
            bandit.y = obj.y;
            GameManager.instance.banditCanAttackObj[obj.id] = bandit;
            return bandit;
        };
        GameManager.prototype.createConnon = function (obj) {
            var artillery = ObjectPool.instance.createObjectByName(Artillery, obj);
            artillery.x = obj.x;
            artillery.y = obj.y;
            return artillery;
        };
        GameManager.prototype.createEleSaw = function (obj) {
            var electricSaw = new ElectricSaw();
            electricSaw.onCreate(obj);
            electricSaw.x = obj.x;
            electricSaw.y = obj.y;
            return electricSaw;
        };
        GameManager.prototype.createObjByName = function (obj) {
            switch (obj.name) {
                case 'door': return this.createDoor(obj);
                case 'board': return this.createBoard(obj);
                case 'floor': return this.createFloor(obj);
                case 'roof': return this.createCeiling(obj);
                case 'thorn': return this.createGroundNeedles(obj);
                case 'blade':
                    return this.createSerratedView(obj);
                case 'heavy':
                    return this.createHeavy(obj);
                case 'turnthorn': return this.createSpineTrun(obj);
                case 'supthorn': return this.createSpineBoxNeedles(obj);
                case 'turnboard':
                    return this.createTurnboardView(obj);
                case 'spring':
                    return this.createSpring(obj);
                case 'linkboard':
                    return this.createConnectBoard(obj);
                case 'bandit':
                    return this.createBandit(obj);
                case 'saw':
                    return this.createEleSaw(obj);
                case 'connon':
                    return this.createConnon(obj);
            }
        };
        GameManager.prototype.pointToSegDist = function (x, y, x1, y1, x2, y2) {
            var cross = (x2 - x1) * (x - x1) + (y2 - y1) * (y - y1);
            if (cross <= 0)
                return Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1));
            var d2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
            if (cross >= d2)
                return Math.sqrt((x - x2) * (x - x2) + (y - y2) * (y - y2));
            var r = cross / d2;
            var px = x1 + (x2 - x1) * r;
            var py = y1 + (y2 - y1) * r;
            return Math.sqrt((x - px) * (x - px) + (py - y) * (py - y));
        };
        GameManager.prototype.gamePause = function () {
            EventMgr.getInstance().sendEvent(GameEvent.GAME_PAUSE);
        };
        GameManager.prototype.gameResume = function () {
            EventMgr.getInstance().sendEvent(GameEvent.GAME_RESUME);
        };
        GameManager.prototype.checkLineCanCut = function (x1, y1, x2, y2) {
            var chainObj = this.chainObj;
            for (var id in chainObj) {
                var lineView = chainObj[id];
                if (lineView != null) {
                    var dis = this.pointToSegDist(lineView.x, lineView.y, x1, y1, x2, y2);
                    if (dis <= 20) {
                        lineView.cutRope();
                    }
                }
            }
        };
        GameManager.prototype.createDrapShadow = function (loadObj, x, y) {
            var shadow = Laya.Pool.getItemByClass('shadow', Laya.Image);
            shadow.alpha = 1;
            shadow.size(80, 80);
            shadow.scaleX = 1;
            shadow.scaleY = 1;
            shadow.skin = 'resource/assets/img/home/qiege.png';
            shadow.anchorX = 0.5;
            shadow.anchorY = 0.5;
            shadow.x = x;
            shadow.y = y;
            loadObj.addChild(shadow);
            Laya.Tween.to(shadow, { alpha: 0.1, scaleX: 0.1, scaleY: 0.1 }, 500, null, Laya.Handler.create(shadow, function () {
                shadow.removeSelf();
                Laya.Pool.recover('shadow', shadow);
            }));
        };
        GameManager.prototype.delSameFlag = function (arr) {
            if (arr == null)
                return null;
            var len = arr.length;
            var obj = {};
            for (var i = 0; i < len; i++) {
                obj[arr[i].id] = arr[i];
            }
            var newArr = [];
            for (var id in obj) {
                newArr.push(obj[id]);
            }
            return newArr;
        };
        return GameManager;
    }());

    var ViewManager = (function () {
        function ViewManager() {
            this._views = {};
        }
        ViewManager.getInstance = function () {
            if (ViewManager.ins == null) {
                ViewManager.ins = new ViewManager();
            }
            return ViewManager.ins;
        };
        Object.defineProperty(ViewManager.prototype, "views", {
            get: function () {
                return this._views;
            },
            enumerable: true,
            configurable: true
        });
        ViewManager.prototype.showView = function (className, data, only) {
            if (only === void 0) { only = true; }
            if (GameManager.instance.userButton != null) {
                GameManager.instance.userButton.hide();
            }
            var panelKey = className.toString();
            panelKey = (panelKey.split("className_key=\"")[1]) == null ? (panelKey.split("className_key = \"")[1]) : (panelKey.split("className_key=\"")[1]);
            if (panelKey == null) {
                panelKey = className.name;
            }
            else {
                panelKey = panelKey.split("\"")[0];
            }
            var result = this._views['' + panelKey];
            if (only && result) {
                this.popLayer.addChild(result);
                result.setData(data);
                return result;
            }
            var clazz = Laya.ClassUtils.getRegClass(panelKey);
            if (clazz == null) {
                Laya.ClassUtils.regClass(panelKey, className);
                clazz = Laya.ClassUtils.getRegClass(panelKey);
            }
            result = new clazz(data);
            result.name = panelKey;
            if (only) {
                this._views['' + panelKey] = result;
            }
            this.popLayer.addChild(result);
            return result;
        };
        ViewManager.prototype.removePopView = function (name) {
            var result = this.popLayer.getChildByName(name);
            if (result) {
                result.removeSelf();
            }
        };
        ViewManager.prototype.removeAllPopViews = function () {
            var popLayer = this.popLayer;
            var len = popLayer.numChildren;
            for (var i = 0; i < len; i++) {
                var panel = popLayer.getChildAt(i);
                panel && panel.removeSelf();
            }
        };
        ViewManager.prototype.popViewIsPop = function (name) {
            if (this.popLayer.getChildByName(name) != null) {
                return true;
            }
            return false;
        };
        ViewManager.prototype.destroyPopView = function (className) {
            var panelKey = className.name;
            var result = this._views['' + panelKey];
            if (result) {
                result.destroy();
            }
            this._views['' + panelKey] = null;
        };
        ViewManager.prototype.destroyAllPopViews = function () {
            for (var key in this._views) {
                var panel = this._views['' + key];
                panel.removeSelf();
                panel.destroy();
            }
            this._views = {};
        };
        ViewManager.prototype.isExists = function (viewKey) {
            return !!this._views[viewKey];
        };
        return ViewManager;
    }());

    var BaseContent = (function () {
        function BaseContent(data) {
            this.initGame(data);
            this.initLayer();
        }
        BaseContent.prototype.initDebug = function (url) {
            if (url === void 0) { url = "configs/Debug.json"; }
            return __awaiter(this, void 0, void 0, function () {
                var debugInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ResUtil.getIntance().asyncLoadResByURL(url, 1)];
                        case 1:
                            debugInfo = _a.sent();
                            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
                                debugInfo = JSON.parse(debugInfo);
                            }
                            if (debugInfo) {
                                if (debugInfo.stat)
                                    Laya.Stat.show(0, 50);
                                if (debugInfo.debug || Laya.Utils.getQueryString("debug") == "true")
                                    Laya.enableDebugPanel();
                                if (debugInfo.physicsDebug && Laya["PhysicsDebugDraw"])
                                    Laya.PhysicsDebugDraw.enable();
                                Laya.alertGlobalError = debugInfo.alertGlobalError;
                            }
                            return [2];
                    }
                });
            });
        };
        BaseContent.prototype.initGame = function (data) {
            if (window["Laya3D"])
                Laya3D.init(data.width, data.height);
            else
                Laya.init(data.width, data.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            DeviceUtil.autoStageScaleMode();
            Laya.URL.exportSceneToJson = data.exportSceneToJson;
        };
        BaseContent.prototype.initLayer = function () {
            var _root = Laya.stage;
            if (_root == null) {
                console.error("初始化未完成");
                return;
            }
            var sceneGroup = new Laya.Box();
            sceneGroup.width = _root.width;
            sceneGroup.height = _root.height;
            _root.addChild(sceneGroup);
            sceneGroup.name = "sceneLayer";
            SceneManager.instance.sceneLayer = sceneGroup;
            var sceneMaskGroup = new Laya.Box();
            sceneMaskGroup.width = _root.width;
            sceneMaskGroup.height = _root.height;
            _root.addChild(sceneMaskGroup);
            sceneMaskGroup.name = "sceneMaskGroup";
            SceneManager.instance.sceneMaskLayer = sceneMaskGroup;
            var popGroup = new Laya.Box();
            popGroup.mouseThrough = true;
            popGroup.width = _root.width;
            popGroup.height = _root.height;
            _root.addChild(popGroup);
            popGroup.name = "popLayer";
            ViewManager.getInstance().popLayer = popGroup;
            var bufferGroup = new Laya.Box();
            bufferGroup.mouseThrough = true;
            bufferGroup.width = _root.width;
            bufferGroup.height = _root.height;
            _root.addChild(bufferGroup);
            bufferGroup.name = "bufferGroup";
            BufferLoadingManger.instance.bufferGroup = bufferGroup;
            var tipGroup = new Laya.Box();
            tipGroup.mouseThrough = true;
            tipGroup.width = _root.width;
            tipGroup.height = _root.height;
            _root.addChild(tipGroup);
            tipGroup.name = "tipLayer";
            TipsManager.instance.tipLayer = tipGroup;
        };
        return BaseContent;
    }());

    var GameLoadingView = (function (_super) {
        __extends(GameLoadingView, _super);
        function GameLoadingView() {
            var _this = _super.call(this) || this;
            _this.className_key = "GameLoadingView";
            var stageW = Laya.stage.width;
            var stageH = Laya.stage.height;
            _this.img_bg = new Laya.Image();
            _this.img_bg.skin = "resource/assets/loading/loading_bg.jpg";
            _this.img_bg.width = 1080;
            _this.img_bg.height = 1920;
            DeviceUtil.adaptationBgImg(_this.img_bg);
            _this.img_bg.centerX = _this.img_bg.centerY = 0;
            _this.addChild(_this.img_bg);
            var box = new Laya.Box();
            box.size(1080, 1920);
            box.centerX = box.centerY = 0;
            _this.img_bg.addChild(box);
            var logo = new Laya.Image();
            logo.skin = "resource/assets/loading/loading1.png";
            logo.size(506, 449);
            logo.anchorX = logo.anchorY = 0.5;
            logo.centerX = 0;
            logo.centerY = -344;
            box.addChild(logo);
            var logo1 = new Laya.Image();
            logo1.skin = "resource/assets/loading/loading5.png";
            logo1.size(96, 68);
            logo1.anchorX = logo1.anchorY = 0.5;
            logo1.centerX = 220;
            logo1.centerY = -487;
            box.addChild(logo1);
            var img_1 = new Laya.Image();
            img_1.skin = "resource/assets/loading/loading2.png";
            img_1.centerX = 0;
            img_1.y = 1121;
            img_1.width = 582;
            img_1.height = 51;
            box.addChild(img_1);
            var img_2 = new Laya.Image();
            img_2.skin = "resource/assets/loading/loading3.png";
            img_2.x = 257;
            img_2.width = 0;
            img_2.height = 37;
            img_2.y = 1128;
            box.addChild(img_2);
            _this.img_2 = img_2;
            var img_3 = new Laya.Image();
            img_3.skin = "resource/assets/loading/loading6.png";
            img_3.centerX = 0;
            img_3.y = 1208;
            box.addChild(img_3);
            return _this;
        }
        GameLoadingView.prototype.childrenCreated = function () {
        };
        GameLoadingView.prototype.showAnimation = function () {
        };
        GameLoadingView.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        GameLoadingView.prototype.onAwake = function () {
            _super.prototype.onAwake.call(this);
            this.img_bg.scaleX = this.img_bg.scaleY = DeviceUtil.getScalePix();
        };
        GameLoadingView.prototype.progress = function (index, len) {
            this.img_2.width = 568 * (index + len);
        };
        GameLoadingView.prototype.remove = function () {
            Laya.timer.clearAll(this);
            console.log("remove loadingView...");
            if (this && this.parent)
                this.parent.removeChild(this);
        };
        return GameLoadingView;
    }(BaseSceneUISkin));

    var ConfigTable = (function () {
        function ConfigTable() {
        }
        ConfigTable.BUTTON_STATUS = "button_config";
        return ConfigTable;
    }());

    var ConfigManager = (function () {
        function ConfigManager() {
            this._signConfig = [
                { "id": 1, "name": "第1天", x: 19, y: 12, "reward": [{ "type": 1, "num": 1 }] },
                { "id": 2, "name": "第2天", x: 282, y: 12, "reward": [{ "type": 1, "num": 2 }] },
                { "id": 3, "name": "第3天", x: 546, y: 12, "reward": [{ "type": 1, "num": 3 }] },
                { "id": 4, "name": "第4天", x: 19, y: 285, "reward": [{ "type": 1, "num": 4 }] },
                { "id": 5, "name": "第5天", x: 282, y: 285, "reward": [{ "type": 1, "num": 5 }] },
                { "id": 6, "name": "第5天", x: 546, y: 285, "reward": [{ "type": 1, "num": 5 }] },
                { "id": 7, "name": "第5天", x: 160, y: 559, "reward": [{ "type": 1, "num": 5 }] }
            ];
        }
        ConfigManager.getInstance = function () {
            if (!this.instance) {
                this.instance = new ConfigManager();
            }
            return this.instance;
        };
        ConfigManager.prototype.getConfigInfo = function (name) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(this.judgeConfIsLoaded(name) == false)) return [3, 2];
                                        return [4, this.loadConfByName(name)];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        resolve(this.getConfByName(name));
                                        return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        ConfigManager.prototype.judgeConfIsLoaded = function (name) {
            switch (name) {
                case ConfigTable.BUTTON_STATUS:
                    return this.btnConf ? true : false;
            }
        };
        ConfigManager.prototype.getConfByName = function (name) {
            switch (name) {
                case ConfigTable.BUTTON_STATUS:
                    return this.btnConf;
            }
        };
        ConfigManager.prototype.loadConfByName = function (name) {
            var _this = this;
            return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                var info;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ResUtil.getIntance().getAsyncRES(name + "_json")];
                        case 1:
                            info = _a.sent();
                            console.log("配置表：" + name + "加载完成 ->", info);
                            switch (name) {
                                case ConfigTable.BUTTON_STATUS:
                                    this.btnConf = info;
                                    break;
                            }
                            resolve();
                            return [2];
                    }
                });
            }); });
        };
        Object.defineProperty(ConfigManager.prototype, "signConfig", {
            get: function () {
                return this._signConfig;
            },
            set: function (value) {
                this._signConfig = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConfigManager.prototype, "inviteConfig", {
            get: function () {
                return this._inviteConfig;
            },
            set: function (value) {
                this._inviteConfig = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConfigManager.prototype, "skinConfig", {
            get: function () {
                return this._skinConfig;
            },
            set: function (value) {
                this._skinConfig = value;
            },
            enumerable: true,
            configurable: true
        });
        ConfigManager.prototype.initConfigs = function () {
            this._inviteConfig = [
                { "id": 1, "name": 1, "reward": [{ "type": 1, "num": 1 }] },
                { "id": 2, "name": 2, "reward": [{ "type": 1, "num": 1 }] },
                { "id": 3, "name": 3, "reward": [{ "type": 1, "num": 1 }] },
                { "id": 4, "name": 4, "reward": [{ "type": 1, "num": 1 }] },
                { "id": 5, "name": 5, "reward": [{ "type": 1, "num": 1 }] },
                { "id": 6, "name": 6, "reward": [{ "type": 1, "num": 1 }] },
                { "id": 7, "name": 7, "reward": [{ "type": 1, "num": 1 }] },
                { "id": 8, "name": 8, "reward": [{ "type": 1, "num": 1 }] },
                { "id": 9, "name": 9, "reward": [{ "type": 1, "num": 1 }] },
                { "id": 10, "name": 10, "reward": [{ "type": 1, "num": 1 }] }
            ];
        };
        return ConfigManager;
    }());

    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super.call(this) || this;
            _this.className_key = 'Player';
            _this.isBinding = true;
            _this.distanceJointArr = [];
            return _this;
        }
        Player.prototype.onCreate = function (data) {
            _super.prototype.onCreate.call(this, data, false);
            this.rigidBody = this.addComponent(Laya.RigidBody);
            this.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            this.on(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
            this.rigidBody.type = 'dynamic';
            this.rigidBody.allowRotation = false;
            this.rigidBody.linearDamping = 0;
            this.collider = this.addComponent(Laya.BoxCollider);
            this.collider.label = GameConstant.Player;
            this.rigidBody.gravityScale = 2;
            this.collider.width = this.width / 2;
            this.collider.height = this.height;
            this.collider.x = this.width / 2;
            this.collider.y = 0;
            this.collider.density = 1;
            this.collider.restitution = 0;
            this.collider.friction = 0;
            if (this.playerAni == null) {
                this.createSkeleton();
            }
            else {
                this.playPlayerAni(PlayerAniConst.StandBy1);
            }
        };
        Player.prototype.onRecovery = function () {
            this.isRecovery = true;
            if (this.playerAni) {
                this.playerAni.player.off(Laya.Event.STOPPED, this, this.playComplete);
            }
            this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            this.off(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
            this._destroyAllComponent();
            Laya.timer.clearAll(this);
            Laya.Tween.clearTween(this);
            this.collider = null;
            this.rigidBody = null;
            this.removeSelf();
        };
        Player.prototype.setOtherRigidBody = function (sprite) {
            var distanceJoint = new Laya.DistanceJoint();
            this._addComponentInstance(distanceJoint);
            distanceJoint.length = 10;
            distanceJoint.selfBody = this.rigidBody;
            distanceJoint.selfAnchor = [this.width / 2, this.height / 2];
            var rigidBody = sprite.getComponent(Laya.RigidBody);
            distanceJoint.otherBody = rigidBody;
            distanceJoint.frequency = 0;
            distanceJoint.damping = 1;
            distanceJoint.collideConnected = false;
            distanceJoint.otherAnchor = [10, sprite.height];
            this.distanceJointArr.push(distanceJoint);
        };
        Player.prototype.destroyJoint = function () {
            var distanceJointArr = this.distanceJointArr;
            var len = distanceJointArr.length;
            for (var i = 0; i < len; i++) {
                this._destroyComponent(distanceJointArr[i]);
                distanceJointArr[i] = null;
            }
            distanceJointArr.splice(0, len);
        };
        Player.prototype.set3DView = function (view3d_) {
            if (this.view3d_ == null) {
                this.view3d_ = view3d_;
            }
            view3d_.transform.rotationEuler = new Laya.Vector3(-90, 0, 0);
            this.view3d_.transform.localScale = new Laya.Vector3(GameConst.playerModelScale, GameConst.playerModelScale, 1);
        };
        Player.prototype.createSkeleton = function () {
            var _this = this;
            var url = "resource/assets/img/sk/R_1.sk";
            AnimationManager.instance.showSkeletonAnimation(url, function (boomAnimation) {
                if (boomAnimation == null)
                    return;
                console.log("aniNum =", boomAnimation.getAnimNum());
                _this.addChild(boomAnimation);
                boomAnimation.player.playbackRate = 1;
                boomAnimation.scale(1, 1);
                boomAnimation.autoSize = true;
                boomAnimation.x = boomAnimation.width / 2;
                boomAnimation.y = _this.height;
                var index = Laya.Utils.getQueryString('index');
                if (index == null)
                    index = "0";
                boomAnimation.play(parseInt(index), true);
                _this.playerAni = boomAnimation;
            });
        };
        Player.prototype.playPlayerAni = function (index, loop, callF) {
            if (loop === void 0) { loop = true; }
            if (this.playerAni) {
                if (loop == false && callF) {
                    this.playerAni.player.once(Laya.Event.STOPPED, this, this.playComplete, [callF, index]);
                }
                this.playerAni.play(index, loop);
            }
        };
        Player.prototype.playComplete = function (callF, index) {
            if (callF) {
                callF && callF();
            }
        };
        Player.prototype.onTriggerExit = function (other, self, contact) {
            if (other.label.indexOf(GameConstant.Board) > -1) {
                console.log("离开挡板...");
            }
        };
        Player.prototype.onTriggerEnter = function (other, self, contact) {
            var _this = this;
            console.log(other.label);
            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING)
                return;
            var owe = other.owner;
            if (owe == null)
                return;
            this.rigidBody.gravityScale = 5;
            if (other.label.indexOf(GameConstant.Ceiling) > -1) {
                return;
            }
            else if (other.label.indexOf(GameConstant.Floor) > -1) {
                var conf_1 = other.owner.objInfo_;
                if (conf_1 == null)
                    return;
                console.log("与地板发生碰撞...", conf_1);
                if (conf_1.dead) {
                    this.playerDead();
                    return;
                }
                if (this.isBinding) {
                    this.playPlayerAni(PlayerAniConst.Relief, false, function () {
                        _this.isBinding = false;
                        _this.landing(conf_1["direction"]);
                    });
                }
                else {
                    this.landing(conf_1["direction"]);
                }
            }
            else if (other.label.indexOf(GameConstant.Board) > -1) {
                var conf_2 = other.owner.objInfo_;
                if (other.owner.parent instanceof ElectricSaw) {
                    conf_2 = other.owner.parent.objInfo_;
                }
                if (conf_2 == null)
                    return;
                console.log("与挡板发生碰撞...", conf_2);
                if (this.isBinding) {
                    this.playPlayerAni(PlayerAniConst.Relief, false, function () {
                        _this.isBinding = false;
                        _this.landing(conf_2["direction"]);
                    });
                }
                else {
                    this.landing(conf_2["direction"]);
                }
            }
            else if (other.label.indexOf(GameConstant.Door) > -1) {
                var door_1 = other.owner;
                console.log("与门发生碰撞...");
                self.rigidBody.setVelocity({ x: 0, y: 0 });
                GameManager.instance.gameStatus = GAMESTATUS.PLAYERWIN;
                Laya.Tween.to(this, { x: door_1.x }, 100, null, Laya.Handler.create(this, function () {
                    door_1.playOpenDoorAni(function () {
                        _this.entrance(other);
                    });
                }));
            }
            else if (other.label.indexOf(GameConstant.GroundNeedles) > -1 || other.label.indexOf(GameConstant.SAW) > -1 || other.label.indexOf(GameConstant.spine) > -1) {
                console.log('死亡');
                this.playerDead();
            }
            else if (other.label.indexOf(GameConstant.Heavy) > -1 || other.label.indexOf(GameConstant.Serrated) > -1) {
                if (owe instanceof HeavyView || owe instanceof SerratedView) {
                    if (owe.canHit) {
                        owe.canHit = false;
                        this.playerDead();
                    }
                }
            }
            else if (other.label.indexOf(GameConstant.Spring) > -1) {
                if (owe != null && owe instanceof SpringView) {
                    var t = owe.rotation / 180 * Math.PI;
                    var o = Laya.Point.create();
                    var flag = owe.objInfo_.time;
                    o.x = flag * Math.sin(t);
                    o.y = -flag * Math.cos(t);
                    this.rigidBody.applyForce({ x: this.x + this.width, y: this.y + this.height }, o);
                }
            }
            if (other.label.indexOf(GameConstant.Rope) > -1) ;
            else {
                this.destroyJoint();
            }
        };
        Player.prototype.playerDead = function () {
            if (this.rigidBody) {
                this.rigidBody.type = 'kinematic';
                this.rigidBody.setVelocity({ x: 0, y: 0 });
            }
            GameManager.instance.gameStatus = GAMESTATUS.PLAYERDEAD;
            this.playPlayerAni(PlayerAniConst.DeadDown, false, function () {
                EventMgr.getInstance().sendEvent(GameEvent.PLAYER_ENTER_DOOR, { suc: false });
            });
        };
        Player.prototype.landing = function (direction) {
            console.log("运动方向 ->", direction);
            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING)
                return;
            switch (direction) {
                case "left":
                    this.skewY = 180;
                    break;
                case "right":
                    this.skewY = 0;
                    break;
                default:
                    return;
            }
            this.playPlayerAni(PlayerAniConst.MoveR);
            this.rigidBody && this.rigidBody.setVelocity(GameData.getInstance().defaultV(direction));
        };
        Player.prototype.onLeave = function () {
        };
        Player.prototype.entrance = function (_door) {
            var _this = this;
            console.log("进门...");
            EventMgr.getInstance().sendEvent(GameEvent.PLAYER_ENTER_DOOR, { suc: true });
            this.playPlayerAni(PlayerAniConst.BackEntrance, false, function () {
                _this.playPlayerAni(PlayerAniConst.Celebrate, false, function () {
                    console.log("通关...");
                });
            });
        };
        return Player;
    }(GameObj));
    window['player'] = Player;

    var PlayerUpdate = (function (_super) {
        __extends(PlayerUpdate, _super);
        function PlayerUpdate() {
            var _this = _super.call(this) || this;
            _this.moveDence = null;
            _this.rotation = 270;
            _this.localRotation = 180;
            return _this;
        }
        PlayerUpdate.prototype.onEnable = function () {
        };
        PlayerUpdate.prototype.onDisable = function () {
        };
        PlayerUpdate.prototype.onAwake = function () {
            this.player_ = this.owner;
        };
        PlayerUpdate.prototype.onUpdate = function () {
            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING)
                return;
            if (this.player_ && this.player_.y > Laya.stage.height) {
                this.player_.playPlayerAni(PlayerAniConst.DeadDown, false, function () {
                    EventMgr.getInstance().sendEvent(GameEvent.GAME_OVER, { suc: false });
                });
            }
        };
        return PlayerUpdate;
    }(Laya.Script));

    var ShortLineView = (function (_super) {
        __extends(ShortLineView, _super);
        function ShortLineView() {
            var _this = _super.call(this) || this;
            _this.className_key = 'ShortLineView';
            return _this;
        }
        ShortLineView.prototype.onCreate = function (data) {
            this.objInfo_ = data;
            this.width = data.width;
            this.height = data.height;
            this.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            if (this.rigidBody == null) {
                this.rigidBody = this.addComponent(Laya.RigidBody);
            }
            this.rigidBody.type = 'dynamic';
            this.rigidBody.allowRotation = true;
            this.rigidBody.linearDamping = 1;
            this.rigidBody.gravityScale = 2;
            if (this.collider == null) {
                this.collider = this.addComponent(Laya.BoxCollider);
            }
            this.collider.isSensor = true;
            this.collider.label = GameConstant.Rope;
            this.collider.density = 1;
            this.collider.restitution = 0;
            this.collider.friction = 0;
            this.collider.width = this.width;
            this.collider.height = this.height;
            var image = new Laya.Image();
            image.skin = 'resource/assets/img/game/game_ropes.png';
            image.size(22, 22);
            image.centerY = 0;
            image.centerX = 0;
            this.addChild(image);
        };
        ShortLineView.prototype.setOtherRigidBody = function (sprite) {
            var distanceJoint = this.addComponent(Laya.DistanceJoint);
            distanceJoint.length = 5;
            distanceJoint.selfAnchor = [this.width / 2, 10];
            var rigidBody = sprite.getComponent(Laya.RigidBody);
            distanceJoint.otherBody = rigidBody;
            distanceJoint.frequency = 0.1;
            distanceJoint.length = 0;
            distanceJoint.damping = 1;
            distanceJoint.collideConnected = false;
            distanceJoint.otherAnchor = [sprite.width / 2, sprite.height];
        };
        ShortLineView.prototype.onTriggerEnter = function (other, self, contact) {
            if (other.label.indexOf((GameConstant.Floor)) > -1) {
                this.destroyJoint();
                this.rigidBody.setVelocity({ x: 0, y: 0 });
                this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            }
            else if (other.label.indexOf('touch') > -1) {
                this.destroyJoint();
            }
        };
        ShortLineView.prototype.onRecovery = function () {
            this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            this.destroyJoint();
            this._destroyAllComponent();
            Laya.timer.clearAll(this);
            Laya.Tween.clearTween(this);
            this.removeSelf();
            this.destroy();
        };
        ShortLineView.prototype.destroyJoint = function () {
            var distanceJoint = this.getComponent(Laya.DistanceJoint);
            if (distanceJoint) {
                this._destroyComponent(distanceJoint);
                console.log('1');
            }
        };
        return ShortLineView;
    }(GameObj));
    var LineView = (function (_super) {
        __extends(LineView, _super);
        function LineView() {
            var _this = _super.call(this) || this;
            _this.className_key = '';
            _this.skin = 'game/LineView.json';
            return _this;
        }
        LineView.prototype.onEnabled = function () {
            this.pivotX = 10;
            this.pivotY = 10;
            this.icon_.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
        };
        LineView.prototype.onLoop = function () {
            var distanceJoint = this.icon_.getComponent(Laya.RopeJoint);
            if (distanceJoint && distanceJoint.otherBody) {
                var image = distanceJoint.otherBody.owner;
                var roa = Utils.getAngleTwoPoint({ x: image.x, y: image.y }, { x: this.icon_.x, y: this.icon_.y });
                this.icon_.rotation = roa;
            }
        };
        LineView.prototype.setOtherRigidBody = function (sprite) {
            this.rigidBody = this.icon_.getComponent(Laya.RigidBody);
            var distanceJoint = this.icon_.getComponent(Laya.RopeJoint);
            distanceJoint.maxLength = 6;
            var rigidBody = sprite.getComponent(Laya.RigidBody);
            distanceJoint.otherBody = rigidBody;
            distanceJoint.collideConnected = false;
            distanceJoint.otherAnchor = [10, 20];
        };
        LineView.prototype.onTriggerEnter = function (other, self, contact) {
            if (other.label.indexOf((GameConstant.Floor)) > -1) {
                this.rigidBody.setVelocity({ x: 0, y: 0 });
                GameManager.instance.removeBody(this.objInfo_.id);
            }
            else if (other.label.indexOf('touch') > -1) {
                this.cutRope();
            }
        };
        LineView.prototype.cutRope = function () {
            this.destroyJoint();
            EventMgr.getInstance().sendEvent(GameEvent.CUT_ROPE, { connect: this.objInfo_.connect });
        };
        LineView.prototype.onRecovery = function () {
            if (this.isRecovery)
                return;
            this.isRecovery = true;
            this.destroyJoint();
            this.icon_._destroyAllComponent();
            this.icon_.destroy();
            Laya.timer.clearAll(this);
            Laya.Tween.clearTween(this);
            this.removeSelf();
            this.destroy();
        };
        LineView.prototype.onRemoved = function () {
            this.icon_.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
        };
        LineView.prototype.destroyJoint = function () {
            var distanceJoint = this.icon_.getComponent(Laya.RopeJoint);
            if (distanceJoint) {
                if (distanceJoint.otherBody && distanceJoint.otherBody.owner) {
                    if (distanceJoint.otherBody.owner instanceof Laya.Image) {
                        distanceJoint.otherBody.owner.visible = false;
                    }
                }
                this.icon_._destroyComponent(distanceJoint);
                distanceJoint = null;
            }
            this.visible = false;
        };
        return LineView;
    }(BaseSceneUISkin));

    var DotView = (function (_super) {
        __extends(DotView, _super);
        function DotView() {
            var _this = _super.call(this) || this;
            _this.className_key = 'DotView';
            return _this;
        }
        DotView.prototype.onCreate = function (data) {
            this.objInfo_ = data;
            this.width = data.width;
            this.height = data.height;
            if (this.rigidBody == null) {
                this.rigidBody = this.addComponent(Laya.RigidBody);
            }
            this.rigidBody.type = Physic.KINEMATIC;
            if (this.collider == null) {
                this.collider = this.addComponent(Laya.CircleCollider);
            }
            this.collider.radius = 10;
            this.collider.isSensor = true;
            this.collider.label = GameConstant.Rope;
            var image = new Laya.Image();
            image.skin = 'resource/assets/img/game/game_dot.png';
            this.addChild(image);
            image.centerX = image.centerY = 0;
            image.size(60, 54);
        };
        DotView.prototype.setOtherRigidBody = function (sprite) {
            if (this.distanceJoint == null) {
                this.distanceJoint = this.addComponent(Laya.DistanceJoint);
                this.distanceJoint.length = 0;
                this.distanceJoint.selfAnchor = [this.width / 2, this.height];
            }
            if (this.distanceJoint) {
                var rigidBody = sprite.getComponent(Laya.RigidBody);
                this.distanceJoint.otherBody = rigidBody;
                this.distanceJoint.frequency = 0;
                this.distanceJoint.otherAnchor = [sprite.width / 2, sprite.height];
                this.distanceJoint.collideConnected = false;
            }
        };
        DotView.prototype.destroyJoint = function () {
            if (this.distanceJoint) {
                this._destroyComponent(this.distanceJoint);
                this.distanceJoint = null;
            }
        };
        DotView.prototype.onRecovery = function () {
            _super.prototype.onRecovery.call(this);
        };
        return DotView;
    }(GameObj));

    var BitmapLabelUtils = (function () {
        function BitmapLabelUtils() {
        }
        BitmapLabelUtils.setLabel = function (label, text, prefix, gap, suffix, textAlgin) {
            if (suffix === void 0) { suffix = ".png"; }
            if (textAlgin === void 0) { textAlgin = "left"; }
            label.removeChildren();
            var box = new Laya.Box();
            if (textAlgin == "center") {
                box = new Laya.Box();
                box.width = 0;
                box.autoSize = true;
                label.addChild(box);
            }
            var _loop_1 = function (i, len) {
                var char = text.charAt(i);
                var imgChar = new Laya.Image();
                Laya.loader.load(prefix + char + suffix, Laya.Handler.create(null, function (tex) {
                    if (!tex) {
                        return;
                    }
                    imgChar.texture = tex;
                    if (textAlgin == "left") {
                        imgChar.x = (imgChar.texture.sourceWidth + gap) * i;
                        label.addChild(imgChar);
                    }
                    else {
                        imgChar.x = (imgChar.texture.sourceWidth + gap) * i;
                        if (box) {
                            box.addChild(imgChar);
                            box.width += (imgChar.texture.sourceWidth + gap);
                        }
                        if (i == len - 1) {
                            box.x = (label.width - box.width) / 2 + gap / 2;
                        }
                    }
                }));
            };
            for (var i = 0, len = text.length; i < len; i++) {
                _loop_1(i, len);
            }
        };
        return BitmapLabelUtils;
    }());

    var GameScene = (function (_super) {
        __extends(GameScene, _super);
        function GameScene() {
            var _this = _super.call(this) || this;
            _this.className_key = 'GameScene';
            _this.chainObj = {};
            _this.gameObjArr = [];
            _this.startPoint = { x: 0, y: 0 };
            _this.skin = "game/GameView.json";
            return _this;
        }
        GameScene.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        GameScene.prototype.onEnabled = function () {
            _super.prototype.onEnabled.call(this);
            if (this.isCreate) {
                this.initLayer();
                this.initView();
                this.addEvent();
            }
        };
        GameScene.prototype.initView = function () {
            if (GameManager.instance.currLevel != 1) {
                this.hideGuide();
            }
            this.init2Dbox();
            if (GameData.getInstance().isConVersion) {
                this.btn_home.visible = false;
                this.btn_nextlevel.visible = false;
                this.btn_reset.visible = false;
            }
            DeviceUtil.adaptationBgImg(this.game_bg);
            this.btn_home.addComponent(CustomScaleComponent);
            this.btn_nextlevel.addComponent(CustomScaleComponent);
            this.btn_reset.addComponent(CustomScaleComponent);
            if (GameData.getInstance().videoId != null && GameData.getInstance().videoId.length > 0) {
                this.btn_nextlevel.name = 'video';
                this.icon_.skin = 'resource/assets/img/gameView/game_view2.png';
                if (!GameManager.instance.canPlayVideo) {
                    this.icon_.skin = 'resource/assets/img/gameView/game_view3.png';
                    this.btn_nextlevel.name = 'share';
                }
            }
            else {
                this.icon_.skin = 'resource/assets/img/gameView/game_view3.png';
                this.btn_nextlevel.name = 'share';
            }
            var maxLevel = GameManager.instance.maxLevel;
            GameManager.instance.gameCurrentLevel = GameManager.instance.currLevel;
            if (GameManager.instance.gameCurrentLevel <= maxLevel) {
                GameManager.instance.gameStatus = GAMESTATUS.PLAYERWIN;
            }
            else {
                GameManager.instance.gameCurrentLevel = maxLevel;
            }
            this.initGameJson(GameManager.instance.gameCurrentLevel);
        };
        GameScene.prototype.showGuide = function () {
            if (this.img_guide == null) {
                this.img_guide = new Laya.Image();
                this.img_guide.skin = 'resource/assets/img/home/home_tubiao1.png';
                this.addChild(this.img_guide);
                this.img_guide.x = this.player.x - 100;
                this.img_guide.y = this.player.y - 300;
                AnimationManager.instance.VTween(this.img_guide, this.img_guide, 4);
            }
        };
        GameScene.prototype.showGuideShiYi = function () {
            this.img_guide_shiyi = new Laya.Image();
            this.img_guide_shiyi.skin = 'resource/assets/img/home/game_shiyi.png';
            this.addChild(this.img_guide_shiyi);
            this.img_guide_shiyi.x = this.player.x + 200;
            this.img_guide_shiyi.y = this.player.y - 200;
        };
        GameScene.prototype.hideGuide = function () {
            if (this.img_guide) {
                Laya.Tween.clearAll(this.img_guide);
                this.img_guide.removeSelf();
                this.img_guide = null;
                if (this.img_guide_shiyi) {
                    this.img_guide_shiyi.removeSelf();
                    this.img_guide_shiyi = null;
                }
            }
        };
        GameScene.prototype.initGameJson = function (level) {
            return __awaiter(this, void 0, void 0, function () {
                var json, i, len_1, chainObj, gameObjArr, len, connect, i, i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            GameMgr.getInstance().showBufferLoading('资源加载中');
                            GameManager.instance.gameStatus = GAMESTATUS.PLAYING;
                            BitmapLabelUtils.setLabel(this.box_level, level + '', 'resource/assets/img/gameView/gameView_sz/', 0, '.png', 'center');
                            return [4, GameManager.instance.getGameLevelJson(level)];
                        case 1:
                            json = _a.sent();
                            console.log("json ->", json);
                            for (i = 0, len_1 = json.length; i < len_1; i++) {
                                this.addChainToArr(json[i]);
                            }
                            chainObj = this.chainObj;
                            this.initPlayer(this.playerDisJointObj);
                            this.gameObjArr.push(this.player);
                            gameObjArr = this.gameObjArr;
                            len = gameObjArr.length;
                            for (connect in chainObj) {
                                for (i = 0; i < len; i++) {
                                    if (gameObjArr[i].objInfo_.connect.indexOf(connect) > -1) {
                                        this.createChain(chainObj[connect], gameObjArr[i]);
                                        break;
                                    }
                                }
                            }
                            for (i = 0; i < len; i++) {
                                this.bodyLayer.addChild(gameObjArr[i]);
                            }
                            if (GameManager.instance.currLevel == 1) {
                                this.showGuide();
                            }
                            GameMgr.getInstance().hiddeBufferLoading();
                            return [2];
                    }
                });
            });
        };
        GameScene.prototype.createChain = function (chainArr, otherHead) {
            if (otherHead === void 0) { otherHead = null; }
            var len = chainArr.length;
            for (var i = 0; i < len; i++) {
                this.createRopeHead(chainArr[i], otherHead);
            }
        };
        GameScene.prototype.addChainToArr = function (obj) {
            if (obj.name == 'bg') {
                this.game_bg.skin = 'resource/assets/img/game/' + obj.source + '.jpg';
                return;
            }
            var connect = obj.connect;
            if (connect == null) {
                this.createGameObj(obj);
                return;
            }
            if (obj.name == 'role') {
                this.playerDisJointObj = obj;
                return;
            }
            if (obj.name == 'chain') {
                var chainObj = this.chainObj;
                var chain = chainObj[connect];
                if (chain == null) {
                    chain = [];
                }
                chain.push(obj);
                chainObj[connect] = chain;
            }
            else {
                this.createGameObj(obj, true);
            }
        };
        GameScene.prototype.createGameObj = function (obj, flag) {
            if (flag === void 0) { flag = false; }
            var posision = obj.posision;
            if (posision instanceof Array) {
                var len = posision.length;
                for (var i = 0; i < len; i++) {
                    var objInfo = obj.posision[i];
                    if (obj.connect) {
                        objInfo.connect = obj.connect;
                    }
                    if (obj.name) {
                        objInfo.name = obj.name;
                    }
                    objInfo.id = Laya.Utils.getGID();
                    var gameObj = GameManager.instance.createObjByName(objInfo);
                    if (flag) {
                        if (gameObj) {
                            this.gameObjArr.push(gameObj);
                        }
                    }
                    else {
                        if (gameObj) {
                            this.bodyLayer.addChild(gameObj);
                        }
                    }
                    GameManager.instance.addBody(objInfo.id, gameObj);
                }
            }
            else {
                obj.id = Laya.Utils.getGID();
                var gameObj = GameManager.instance.createObjByName(obj);
                if (flag) {
                    if (gameObj) {
                        this.gameObjArr.push(gameObj);
                    }
                }
                else {
                    if (gameObj) {
                        this.bodyLayer.addChild(gameObj);
                    }
                }
                GameManager.instance.addBody(obj.id, gameObj);
            }
        };
        GameScene.prototype.addEvent = function () {
            this.box_game.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            EventMgr.getInstance().addEvent(GameEvent.NEXT_GAME, this, this.startNextLevel);
            EventMgr.getInstance().addEvent(GameEvent.RESTART_GAME, this, this.resetLevel);
            EventMgr.getInstance().addEvent(GameEvent.PLAYER_ENTER_DOOR, this, this.onPlayerEnterDoor);
            EventMgr.getInstance().addEvent(GameEvent.CUT_ROPE, this, this.onCutRope);
            EventMgr.getInstance().addEvent(GameEvent.GAME_PAUSE, this, this.onGamePause);
            EventMgr.getInstance().addEvent(GameEvent.GAME_RESUME, this, this.onGameResume);
            this.btn_home.on(Laya.Event.CLICK, this, this.backHome);
            this.btn_nextlevel.on(Laya.Event.CLICK, this, this.onNextLevel);
            this.btn_reset.on(Laya.Event.CLICK, this, this.onResetLevel);
        };
        GameScene.prototype.onGamePause = function () {
            Laya.physicsTimer.pause();
        };
        GameScene.prototype.onGameResume = function () {
            Laya.physicsTimer.resume();
        };
        GameScene.prototype.onCutRope = function () {
            if (GameManager.instance.currLevel == 1) {
                this.hideGuide();
            }
        };
        GameScene.prototype.onPlayerEnterDoor = function (evt) {
            this.hideGuide();
            this.hideBtn();
            this.img_level.visible = true;
            EventMgr.getInstance().sendEvent(GameEvent.GAME_OVER, evt);
        };
        GameScene.prototype.onResetLevel = function () {
            var _this = this;
            SoundManager.getInstance().playEffect(SoundConst.CLICK);
            GameManager.instance.gamePause();
            GameManager.instance.changePower({
                count: -1, success: function () {
                    GameManager.instance.gameResume();
                    _this.resetLevel();
                }, fail: function () {
                    GameManager.instance.gameStatus = GAMESTATUS.PLAYING;
                }
            });
        };
        GameScene.prototype.onNextLevel = function () {
            var _this = this;
            SoundManager.getInstance().playEffect(SoundConst.CLICK);
            GameManager.instance.gamePause();
            if (this.btn_nextlevel.name == 'share') {
                MiniGameManager.instance.shareAppMessage({
                    sucFun: function () {
                        GameManager.instance.gameResume();
                        if (GameManager.instance.gameCurrentLevel <= GameManager.instance.maxLevel) {
                            GameManager.instance.gameCurrentLevel++;
                        }
                        _this.startNextLevel();
                    }, failFun: function () {
                        GameManager.instance.gameResume();
                    }
                });
            }
            else {
                MiniGameManager.instance.playViderAd({
                    successFun: function () {
                        GameManager.instance.gameResume();
                        if (GameManager.instance.gameCurrentLevel <= GameManager.instance.maxLevel) {
                            GameManager.instance.gameCurrentLevel++;
                        }
                        _this.startNextLevel();
                    }, failFun: function () {
                        GameManager.instance.gameResume();
                    }
                });
            }
        };
        GameScene.prototype.backHome = function () {
            SoundManager.getInstance().playEffect(SoundConst.CLICK);
            GameManager.instance.gameStatus = GAMESTATUS.STOP;
            this.resetLevel({ show: false });
            EventMgr.getInstance().sendEvent(GameEvent.BACK_HOME);
        };
        GameScene.prototype.onMouseDown = function (event) {
            this.startPoint.x = event.target.mouseX;
            this.startPoint.y = event.target.mouseY;
            if (this.box_touch) {
                this.box_touch.x = event.target.mouseX;
                this.box_touch.y = event.target.mouseY;
                this.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
                this.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            }
        };
        GameScene.prototype.onMouseUp = function (event) {
            this.box_touch.x = 0;
            this.box_touch.y = 0;
            this.lastPoint = null;
            this.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
            this.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
        };
        GameScene.prototype.onMouseMove = function (event) {
            if (this.box_touch) {
                this.box_touch.x = event.target.mouseX;
                this.box_touch.y = event.target.mouseY;
                this.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            }
            GameManager.instance.checkLineCanCut(this.startPoint.x, this.startPoint.y, event.target.mouseX, event.target.mouseY);
            if (!this.lastPoint) {
                this.lastPoint = new Laya.Point(event.stageX, event.stageY);
                return;
            }
            var spr = new Laya.Sprite();
            spr.graphics.drawLine(this.lastPoint.x, this.lastPoint.y, event.stageX, event.stageY, "#ffffff", 25);
            Laya.stage.addChild(spr);
            this.lastPoint.x = event.stageX;
            this.lastPoint.y = event.stageY;
            Laya.Tween.to(spr, { alpha: 0 }, 100, null, Laya.Handler.create(spr, spr.removeSelf));
        };
        GameScene.prototype.init2Dbox = function () {
            console.log("测试2d场景物理效果");
            Laya.Physics.I.allowSleeping = false;
            Laya.Physics.I.worldRoot = this.bodyLayer;
        };
        GameScene.prototype.startNextLevel = function (evt) {
            var maxLevel = GameManager.instance.maxLevel;
            var curLevel = GameManager.instance.gameCurrentLevel;
            if (curLevel <= maxLevel) {
                console.log("通关 去往下一关");
                GameManager.instance.gameStatus = GAMESTATUS.PLAYERWIN;
                GameMgr.getInstance().startGame();
            }
            else {
                curLevel = maxLevel;
            }
            this.initLevel(curLevel, evt);
        };
        GameScene.prototype.resetLevel = function (evt) {
            var maxLevel = GameManager.instance.maxLevel;
            var curLevel = GameManager.instance.gameCurrentLevel;
            if (curLevel <= maxLevel) ;
            else {
                curLevel = maxLevel;
            }
            this.initLevel(curLevel, evt);
        };
        GameScene.prototype.hideBtn = function () {
            this.btn_home.visible = false;
            this.btn_nextlevel.visible = false;
            this.btn_reset.visible = false;
            this.img_level.visible = false;
        };
        GameScene.prototype.showBtn = function () {
            if (!GameData.getInstance().isConVersion) {
                this.btn_home.visible = true;
                this.btn_nextlevel.visible = true;
                this.btn_reset.visible = true;
            }
            this.img_level.visible = true;
        };
        GameScene.prototype.initLevel = function (level, data) {
            var _this = this;
            this.hideBtn();
            GameManager.instance.gameCurrentLevel = level;
            GameManager.instance.clearBody();
            this.gameObjArr = [];
            this.chainObj = {};
            Laya.timer.frameOnce(4, this, function (level) {
                _this.initGameJson(level);
                if (data != null && data.show == false) ;
                else {
                    _this.showBtn();
                }
            }, [level]);
        };
        GameScene.prototype.initLayer = function () {
            if (this.bodyLayer == null) {
                this.bodyLayer = new Laya.Box();
                this.box_game.addChildAt(this.bodyLayer, 0);
            }
            this.box_game.width = 1080;
            this.box_game.height = 1920;
            GameManager.instance.bodyLayer = this.bodyLayer;
        };
        GameScene.prototype.initPlayer = function (obj) {
            return __awaiter(this, void 0, void 0, function () {
                var info, player;
                return __generator(this, function (_a) {
                    info = { width: 50, height: 100, id: Laya.Utils.getGID(), connect: obj.connect };
                    player = ObjectPool.instance.createObjectByName(Player, info);
                    player.addComponent(PlayerUpdate);
                    player.x = obj.posision.x;
                    player.y = obj.posision.y;
                    this.player = player;
                    GameManager.instance.player = player;
                    GameManager.instance.addBody(info.id, player);
                    GameManager.instance.banditCanAttackObj[info.id] = player;
                    return [2];
                });
            });
        };
        GameScene.prototype.createRopeHead = function (chain, otherHead) {
            if (otherHead === void 0) { otherHead = null; }
            var connect = chain.connect;
            var data = chain.data;
            var dotObj = data.shift();
            dotObj.id = Laya.Utils.getGID();
            dotObj.width = 20;
            dotObj.height = 20;
            var dotView = ObjectPool.instance.createObjectByName(DotView, dotObj);
            dotView.x = dotObj.posision.x;
            dotView.y = dotObj.posision.y;
            if (dotObj.roation != null) {
                dotView.rotation = dotObj.roation;
            }
            var rigidBody = dotView.getComponent(Laya.RigidBody);
            var flagSprite = null;
            flagSprite = dotView;
            for (var i = 0, len = data.length; i < len; i++) {
                if (data[i].name = 'rope') {
                    this.createRope(data[i].posision, flagSprite, connect, otherHead);
                }
            }
            GameManager.instance.addBody(dotObj.id, dotView);
            this.bodyLayer.addChild(dotView);
        };
        GameScene.prototype.createRope = function (lineArr, flagSprite, connect, otherHead) {
            if (connect === void 0) { connect = 0; }
            if (otherHead === void 0) { otherHead = null; }
            var chain = [];
            var startPoint = lineArr[0];
            var endPoint = lineArr[1];
            var length = Utils.getDistance(startPoint, endPoint);
            var len = Math.ceil(length / 15);
            var xs = (endPoint.x - startPoint.x) / len;
            var ys = (endPoint.y - startPoint.y) / len;
            for (var i = 0; i < len; i++) {
                var lineView = new LineView();
                var data = { width: 20, height: 20, id: Laya.Utils.getGID(), connect: connect };
                lineView.objInfo_ = data;
                lineView.x = startPoint.x + xs * i;
                lineView.y = startPoint.y + ys * i;
                lineView.setOtherRigidBody(flagSprite);
                chain.push(flagSprite);
                flagSprite = lineView.icon_;
                GameManager.instance.addBody(data.id, lineView);
                this.bodyLayer.addChild(lineView);
                GameManager.instance.chainObj[data.id] = lineView;
            }
            if (otherHead != null) {
                otherHead.setOtherRigidBody(flagSprite);
            }
            chain.push(this.player);
            return chain;
        };
        return GameScene;
    }(BaseSceneUISkin));

    var SignManager = (function () {
        function SignManager() {
            this.signInfo = { index: 0, time: 0 };
            this.canSign = true;
        }
        Object.defineProperty(SignManager, "instance", {
            get: function () {
                if (SignManager.ins == null) {
                    SignManager.ins = new SignManager();
                }
                return SignManager.ins;
            },
            enumerable: true,
            configurable: true
        });
        SignManager.prototype.checkCanSign = function () {
            this.getSignInfo();
            var time = new Date().getTime();
            var flag = Utils.judgeIsOnTheSameDay(this.signInfo.time, time);
            if (flag) {
                this.canSign = false;
            }
            else {
                this.signInfo.index++;
                this.canSign = true;
            }
        };
        SignManager.prototype.signOk = function () {
            this.signInfo.time = new Date().getTime();
            this.canSign = false;
            Laya.LocalStorage.setJSON(GameMgr.getInstance().sign, this.signInfo);
        };
        SignManager.prototype.getSignInfo = function () {
            var signInfo = Laya.LocalStorage.getJSON(GameMgr.getInstance().sign);
            if (signInfo) {
                this.signInfo = signInfo;
            }
            else {
                this.signInfo = { index: -1, time: 0 };
            }
        };
        SignManager.prototype.initSignData = function () {
            var signConfig = ConfigManager.getInstance().signConfig;
            return signConfig;
        };
        return SignManager;
    }());

    var SignView = (function (_super) {
        __extends(SignView, _super);
        function SignView() {
            var _this = _super.call(this) || this;
            _this.className_key = "SignView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this.skin = "home/sign/SignView.json";
            return _this;
        }
        SignView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            MiniGameManager.instance.showBannerAd();
        };
        SignView.prototype.onEnabled = function () {
            _super.prototype.onEnabled.call(this);
            console.log("GameView >>>>>>> onEnabled", this.isCreate, this.x, this.y);
            if (this.isCreate) {
                this.addEvent();
                this.initView();
            }
        };
        SignView.prototype.addEvent = function () {
            this.btn_recieve.on(Laya.Event.CLICK, this, this.onClick);
            this.btn_double.on(Laya.Event.CLICK, this, this.onClick);
            this.btn_close.on(Laya.Event.CLICK, this, this.onClick);
        };
        SignView.prototype.onClick = function (evt) {
            SoundManager.getInstance().playEffect(SoundConst.CLICK);
            switch (evt.target) {
                case this.btn_recieve:
                    this.recieve();
                    break;
                case this.btn_double:
                    this.doubleRecieve();
                    break;
                case this.btn_close:
                    this.removeSelf();
                    break;
            }
        };
        SignView.prototype.removeSelf = function () {
            if (DeviceUtil.isWXMiniGame()) {
                MiniGameManager.instance.hideBanner();
            }
            return _super.prototype.removeSelf.call(this);
        };
        SignView.prototype.recieve = function (mul) {
            if (mul === void 0) { mul = 1; }
            var count = SignManager.instance.rewardInfo.num * mul;
            GameManager.instance.changePower({ isNatural: false, count: count });
            TipsManager.instance.showDefaultTips('领取成功');
            Laya.timer.clear(this, this.showRecievt);
            this.btn_double.visible = false;
            this.btn_recieve.visible = false;
            SignManager.instance.signOk();
            this.updateSignItem();
        };
        SignView.prototype.doubleRecieve = function () {
            var _this = this;
            if (this.btn_double.name == 'share') {
                MiniGameManager.instance.shareAppMessage({
                    sucFun: function () {
                        _this.recieve(2);
                    }
                });
            }
            else {
                MiniGameManager.instance.playViderAd({
                    successFun: function () {
                        _this.recieve(2);
                    }, failFun: function () {
                    }, errorFun: function () {
                    }
                });
            }
        };
        SignView.prototype.initView = function () {
            MiniGameManager.instance.showBannerAd();
            SignManager.instance.checkCanSign();
            if (SignManager.instance.canSign) {
                this.btn_double.visible = true;
                this.btn_recieve.visible = true;
                this.btn_recieve.visible = false;
                Laya.timer.once(1500, this, this.showRecievt);
            }
            else {
                this.btn_double.visible = false;
                this.btn_recieve.visible = false;
            }
            if (GameData.getInstance().isConVersion) {
                this.btn_double.visible = false;
            }
            else {
                if (GameData.getInstance().videoId != null && GameData.getInstance().videoId.length > 0) {
                    this.btn_double.name = 'video';
                    this.icon_.skin = 'resource/assets/img/sign/sign8.png';
                    if (!GameManager.instance.canPlayVideo) {
                        this.icon_.skin = 'resource/assets/img/sign/sign3.png';
                        this.btn_double.name = 'share';
                    }
                }
                else {
                    this.icon_.skin = 'resource/assets/img/sign/sign3.png';
                    this.btn_double.name = 'share';
                }
            }
            var info = SignManager.instance.initSignData();
            var len = info.length;
            this.signBox.removeChildren();
            var skin = 'SignSItem.json';
            for (var i = 0; i < len; i++) {
                var signinfo = info[i];
                if (signinfo.id == 7) {
                    skin = 'SignBItem.json';
                }
                var signItem = new SignItem(skin);
                signItem.initData({ signData: signinfo });
                this.signBox.addChild(signItem);
            }
            this.btn_recieve.scale(0.6, 0.6);
        };
        SignView.prototype.showRecievt = function () {
            this.btn_recieve.visible = true;
        };
        SignView.prototype.updateSignItem = function () {
            var count = this.signBox.numChildren;
            for (var i = 0; i < count; i++) {
                var signItem = this.signBox.getChildAt(i);
                signItem.updateInfo();
            }
        };
        SignView.prototype.removeEvent = function () {
            this.btn_recieve.off(Laya.Event.CLICK, this, this.onClick);
            this.btn_close.off(Laya.Event.CLICK, this, this.onClick);
            this.btn_double.off(Laya.Event.CLICK, this, this.onClick);
        };
        SignView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            Laya.timer.clearAll(this);
            if (DeviceUtil.isWXMiniGame()) {
                MiniGameManager.instance.hideBanner();
            }
        };
        return SignView;
    }(BasePopSceneView));
    var SignItem = (function (_super) {
        __extends(SignItem, _super);
        function SignItem(skin) {
            var _this = _super.call(this) || this;
            _this.className_key = "SignItem";
            _this.skin = "home/sign/" + skin;
            return _this;
        }
        SignItem.prototype.onEnabled = function () {
            console.log("GameView >>>>>>> onEnabled", this.isCreate, this.data_);
            if (this.isCreate) {
                this.addEvent();
                this.initView();
            }
        };
        SignItem.prototype.addEvent = function () {
        };
        SignItem.prototype.initView = function () {
        };
        SignItem.prototype.initData = function (data) {
            this.data = data;
            this.updateInfo();
            this.img_id.skin = 'resource/assets/img/sign/sign1/' + data.signData.id + '.png';
            var reward = data.signData.reward;
            this.x = data.signData.x;
            this.y = data.signData.y;
            BitmapLabelUtils.setLabel(this.box_reward, 'x' + reward[0].num, 'resource/assets/img/sign/sign2/', 0);
        };
        SignItem.prototype.updateInfo = function () {
            var data = this.data;
            var canIndex = SignManager.instance.signInfo.index % 5 + 1;
            if (canIndex == data.signData.id) {
                if (SignManager.instance.canSign) {
                    this.img_recieve.visible = false;
                    this.img_canSign.visible = true;
                    SignManager.instance.rewardInfo = data.signData.reward[0];
                }
                else {
                    this.img_recieve.visible = true;
                    this.img_canSign.visible = false;
                }
            }
            else if (canIndex > data.signData.id) {
                this.img_canSign.visible = false;
                this.img_recieve.visible = true;
            }
            else {
                this.img_recieve.visible = false;
                this.img_canSign.visible = false;
            }
        };
        return SignItem;
    }(BaseSceneUISkin));

    var DyHome = (function (_super) {
        __extends(DyHome, _super);
        function DyHome(skin) {
            var _this = _super.call(this) || this;
            _this.className_key = 'DyHome';
            _this.isflag2 = 1;
            _this.skin = skin;
            return _this;
        }
        DyHome.prototype.initView = function (listdata_, itemW, itemH) {
            listdata_.sort(function () {
                return Math.random() > 0.5 ? -1 : 1;
            });
            this.listdata = listdata_;
            this.itemW = itemW;
            this.itemH = itemH;
            if (this.isCreate) {
                this.initList();
                Laya.timer.loop(3000, this, this.onLoop);
            }
        };
        DyHome.prototype.onEnabled = function () {
        };
        DyHome.prototype.onLoop = function () {
            var startIndex1 = this.gameList.startIndex;
            startIndex1 += this.isflag2;
            var index = this.gameList.array.length - 7;
            if (startIndex1 >= index) {
                this.isflag2 = -1;
            }
            if (startIndex1 <= 0) {
                this.isflag2 = 1;
            }
            this.gameList.tweenTo(startIndex1, 500);
        };
        DyHome.prototype.onClick = function () {
            this.removeSelf();
            Laya.timer.clearAll(this);
        };
        DyHome.prototype.initList = function () {
            this.gameList.itemRender = DyHomeItem;
            this.gameList.hScrollBarSkin = "";
            this.gameList.array = this.listdata;
        };
        return DyHome;
    }(BaseSceneUISkin));
    var DyHomeItem = (function (_super) {
        __extends(DyHomeItem, _super);
        function DyHomeItem() {
            var _this = _super.call(this, 'Dy/DyHomeItem.json') || this;
            _this.className_key = 'DyHomeItem';
            return _this;
        }
        DyHomeItem.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.on(Laya.Event.CLICK, this, this.click);
        };
        DyHomeItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
        };
        DyHomeItem.prototype.dataChange = function (data) {
            this.itemData = data;
            this.icon_header.skin = data.img;
            this.icon_header.size(173, 174);
            if (this.icon_mask) {
                this.icon_header.mask = this.icon_mask;
                this.icon_header.mask.visible = false;
            }
            this.txt_title.text = data.title;
        };
        Object.defineProperty(DyHomeItem.prototype, "dataSource", {
            set: function (value) {
                if (!value)
                    return;
                this.dataChange(value);
            },
            enumerable: true,
            configurable: true
        });
        DyHomeItem.prototype.onEnabled = function () {
        };
        return DyHomeItem;
    }(DyItem));

    var DySettlement = (function (_super) {
        __extends(DySettlement, _super);
        function DySettlement(skin, listdata_, itemW, itemH) {
            var _this = _super.call(this) || this;
            _this.className_key = 'DySettlement';
            _this.isTouch = false;
            _this.index = -1;
            _this.itemW = itemW;
            _this.itemH = itemH;
            _this.listdata = listdata_;
            _this.queueDatas = new Queue();
            GameManager.instance.addArr(listdata_, 16);
            for (var i = 0, len = listdata_.length; i < len; i++) {
                _this.queueDatas.push(listdata_[i]);
            }
            _this.skin = skin;
            return _this;
        }
        DySettlement.prototype.childrenCreated = function () {
            this.panelList.vScrollBarSkin = "";
            this.initList();
            this.onEnable();
        };
        DySettlement.prototype.onEnable = function () {
            if (this.isCreate) {
                Laya.timer.clear(this, this.initList);
                Laya.timer.frameLoop(1, this, this.frameChange);
            }
        };
        DySettlement.prototype.mouseDown = function (evt) {
            this.isTouch = true;
            this.clickY = evt.stageY;
            this.starY = this.boxView.y;
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseOutUp);
        };
        DySettlement.prototype.mouseMove = function (evt) {
            this.boxView.y = this.starY + (evt.stageY - this.clickY);
            if (this.boxView.y + this.boxView.height <= this.panelList.height) {
                this.boxView.y = this.panelList.height - this.boxView.height;
            }
            if (this.boxView.y > 0) {
                this.boxView.y = 0;
            }
        };
        DySettlement.prototype.mouseOutUp = function () {
            this.isTouch = false;
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseOutUp);
        };
        DySettlement.prototype.frameChange = function () {
            var self = this;
            if (!self.isTouch) {
                self.boxView.y += self.index;
            }
            var curY = self.boxView.y;
            if (curY + self.boxView.height <= this.panelList.height) {
                self.index = 1;
            }
            if (curY >= 0) {
                self.index = -1;
            }
        };
        DySettlement.prototype.onDisable = function () {
            if (this.isCreate) {
                Laya.timer.clear(this, this.frameChange);
            }
        };
        DySettlement.prototype.initList = function () {
            for (var i = 0, len = this.listdata.length; i < len; i++) {
                var item = new DyHomeItem();
                item.dataChange(this.listdata[i]);
                this.boxView.addChild(item);
                item.x = this.itemW * Math.floor(i % 4);
                item.y = this.itemW * Math.floor(i / 4);
                this.boxView.height = item.y + item.height;
            }
            this.panelList.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        };
        return DySettlement;
    }(BaseSceneUISkin));

    var SettlementView = (function (_super) {
        __extends(SettlementView, _super);
        function SettlementView(type) {
            var _this = _super.call(this) || this;
            _this.className_key = "SettlementView";
            _this.powerNum = 1;
            _this.isOpenBoxView = { next: false, home: false, agin: false, onQQHome: false };
            _this.data = type;
            _this.skin = "home/settlement/SettlementView.json";
            return _this;
        }
        SettlementView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.img_num.skin = "resource/assets/img/settlement/settlement_sz/" + this.powerNum + ".png";
            this.initView();
            this.addEvent();
        };
        SettlementView.prototype.onEnabled = function () {
            _super.prototype.onEnabled.call(this);
            if (DeviceUtil.isQQMiniGame() && GameData.getInstance().isWDJOpenBox) {
                MiniGameManager.instance.hideBanner();
            }
            this.isOpenBoxView = { next: false, home: false, agin: false, onQQHome: false };
        };
        SettlementView.prototype.setData = function (type) {
            this.data = type;
            if (this.isCreate) {
                this.initView();
                this.addEvent();
                AnimationManager.instance.zoomTween(this.btn_next, this);
            }
        };
        SettlementView.prototype.addEvent = function () {
            this.btn_next.on(Laya.Event.CLICK, this, this.onNext);
            this.btn_share.on(Laya.Event.CLICK, this, this.onShare);
            this.btn_again.on(Laya.Event.CLICK, this, this.onAgain);
            this.btn_home.on(Laya.Event.CLICK, this, this.onHome);
            this.qq_btn_home.on(Laya.Event.CLICK, this, this.onQQHome);
            this.btn_video.on(Laya.Event.CLICK, this, this.onVideo);
        };
        SettlementView.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dySettlement;
                var _this = this;
                return __generator(this, function (_a) {
                    if (!this.data)
                        return [2];
                    if (DeviceUtil.isWXMiniGame() && PlatformDY.gameListInfos != null && PlatformDY.gameListInfos.length > 0) {
                        dySettlement = this.box_recommend.addChild(new DySettlement("Dy/DySettlement.json", PlatformDY.gameListInfos.concat(), 220, 260));
                        dySettlement.height = 600;
                        dySettlement.width = 960;
                    }
                    if (this.data == 1) {
                        this.img_light.visible = this.box_star.visible = true;
                        this.img_titlebg.skin = "resource/assets/img/settlement/settlement_tubiao9.png";
                        this.img_title.skin = "resource/assets/img/settlement/settlement_tubiao10.png";
                        this.btn_next.visible = true;
                        if (GameData.getInstance().isConVersion) {
                            this.btn_again.visible = this.btn_share.visible = this.btn_video.visible = false;
                        }
                        this.btn_next.centerX = 0;
                        this.qq_btn_home.visible = this.btn_again.visible = false;
                        this.btn_video.centerX = 202;
                        if (DeviceUtil.isQQMiniGame()) {
                            this.btn_home.visible = this.btn_share.visible = false;
                            this.qq_btn_home.visible = true;
                            this.btn_video.centerX = 153;
                        }
                        if (GameData.getInstance().isWDJSett) {
                            this.btn_next.y = ((Laya.stage.height - 144) - Laya.stage.height / 2) + 960;
                            Laya.timer.once(1000, this, function () {
                                Laya.Tween.to(_this.btn_next, { y: 1466 }, 500);
                                MiniGameManager.instance.showBannerAd();
                            });
                        }
                    }
                    else {
                        this.img_light.visible = this.box_star.visible = false;
                        this.img_titlebg.skin = "resource/assets/img/settlement/settlement_tubiao11.png";
                        this.img_title.skin = "resource/assets/img/settlement/settlement_tubiao12.png";
                        this.btn_next.visible = false;
                        this.btn_again.centerX = 0;
                        this.btn_again.visible = true;
                        if (GameData.getInstance().isConVersion) {
                            this.btn_next.visible = this.btn_share.visible = this.btn_video.visible = false;
                        }
                        this.qq_btn_home.visible = false;
                        this.btn_video.centerX = 202;
                        if (DeviceUtil.isQQMiniGame()) {
                            this.btn_home.visible = this.qq_btn_home.visible = true;
                            this.btn_share.visible = this.btn_home.visible = false;
                            this.btn_video.centerX = 153;
                        }
                        if (GameData.getInstance().isWDJSett) {
                            this.btn_again.y = ((Laya.stage.height - 144) - Laya.stage.height / 2) + 960;
                            Laya.timer.once(1000, this, function () {
                                Laya.Tween.to(_this.btn_again, { y: 1466 }, 500);
                                MiniGameManager.instance.showBannerAd();
                            });
                        }
                    }
                    return [2];
                });
            });
        };
        SettlementView.prototype.checkQQConfigNextAginHome = function (type) {
            if (DeviceUtil.isQQMiniGame()) {
                if (GameData.getInstance().isNextGameOrBackOpenBox && !this.isOpenBoxView[type]) {
                    PlatformDY.tempCloseBoxViewCallFunc = this.closeBoxView;
                    PlatformDY.tempCloseBoxViewCallObj = this;
                    PlatformDY.tempCloseBoxViewCallParam = [type];
                    GameMgr.getInstance().showBoxViewBg();
                    PlatformDY.showBoxView();
                    return false;
                }
            }
            return true;
        };
        SettlementView.prototype.checkQQConfigBoxCloseVideo = function () {
            return new Promise(function (resolve) {
                if (DeviceUtil.isQQMiniGame()) {
                    if (GameData.getInstance().isOpenBoxNextShowVideo && (GameManager.instance.currLevel - 1) % 3 == 0) {
                        MiniGameManager.instance.playViderAd({
                            successFun: function () {
                                resolve();
                            }, failFun: function () {
                                resolve();
                            }, errorFun: function () {
                                resolve();
                            }
                        });
                    }
                    else {
                        resolve();
                    }
                }
                else {
                    resolve();
                }
            });
        };
        SettlementView.prototype.closeBoxView = function (type) {
            GameMgr.getInstance().closeBoxViewBg();
            console.log("settlementView closeBoxView Func call type = " + type);
            this.isOpenBoxView[type] = true;
        };
        SettlementView.prototype.onNext = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.checkQQConfigNextAginHome("next")) {
                                return [2];
                            }
                            return [4, this.checkQQConfigBoxCloseVideo()];
                        case 1:
                            _a.sent();
                            SoundManager.getInstance().playEffect(SoundConst.CLICK);
                            GameManager.instance.changePower({
                                count: -1, success: function () {
                                    EventMgr.getInstance().sendEvent(GameEvent.NEXT_GAME, { show: true });
                                    _this.removeSelf();
                                }, fail: function () {
                                }
                            });
                            return [2];
                    }
                });
            });
        };
        SettlementView.prototype.onShare = function () {
            SoundManager.getInstance().playEffect(SoundConst.CLICK);
            if (DeviceUtil.isWXMiniGame() || DeviceUtil.isUCMiniGame()) {
                MiniGameManager.instance.shareAppMessage({ message: null });
            }
            else {
                TipsManager.instance.showDefaultTips("请在平台打开");
            }
        };
        SettlementView.prototype.onAgain = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.checkQQConfigNextAginHome("agin")) {
                                return [2];
                            }
                            return [4, this.checkQQConfigBoxCloseVideo()];
                        case 1:
                            _a.sent();
                            SoundManager.getInstance().playEffect(SoundConst.CLICK);
                            GameManager.instance.changePower({
                                count: -1, success: function () {
                                    if (_this.data == 1) {
                                        GameManager.instance.gameCurrentLevel--;
                                    }
                                    EventMgr.getInstance().sendEvent(GameEvent.RESTART_GAME, { show: true });
                                    _this.removeSelf();
                                }, fail: function () {
                                }
                            });
                            return [2];
                    }
                });
            });
        };
        SettlementView.prototype.onHome = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.checkQQConfigNextAginHome("home")) {
                                return [2];
                            }
                            return [4, this.checkQQConfigBoxCloseVideo()];
                        case 1:
                            _a.sent();
                            SoundManager.getInstance().playEffect(SoundConst.CLICK);
                            if (this.data == 1) {
                                EventMgr.getInstance().sendEvent(GameEvent.NEXT_GAME, { show: false });
                            }
                            else {
                                EventMgr.getInstance().sendEvent(GameEvent.RESTART_GAME, { show: false });
                            }
                            EventMgr.getInstance().sendEvent(GameEvent.BACK_HOME);
                            this.removeSelf();
                            return [2];
                    }
                });
            });
        };
        SettlementView.prototype.onQQHome = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.checkQQConfigNextAginHome("onQQHome")) {
                                return [2];
                            }
                            return [4, this.checkQQConfigBoxCloseVideo()];
                        case 1:
                            _a.sent();
                            SoundManager.getInstance().playEffect(SoundConst.CLICK);
                            if (this.data == 1) {
                                EventMgr.getInstance().sendEvent(GameEvent.NEXT_GAME, { show: false });
                            }
                            else {
                                EventMgr.getInstance().sendEvent(GameEvent.RESTART_GAME, { show: false });
                            }
                            EventMgr.getInstance().sendEvent(GameEvent.BACK_HOME);
                            this.removeSelf();
                            return [2];
                    }
                });
            });
        };
        SettlementView.prototype.onVideo = function () {
            if (!DeviceUtil.isWXMiniGame() && !DeviceUtil.isQQMiniGame() && !DeviceUtil.isUCMiniGame()) {
                TipsManager.instance.showDefaultTips("开发中..");
                return;
            }
            MiniGameManager.instance.playViderAd({
                successFun: function () {
                    TipsManager.instance.showDefaultTips("恭喜获得体力 +3");
                    GameManager.instance.changePower({ count: 3, isNatural: false });
                }, failFun: function () {
                    GameManager.instance.gameResume();
                }
            });
        };
        SettlementView.prototype.removeSelf = function () {
            if (DeviceUtil.isWXMiniGame()) {
                MiniGameManager.instance.hideBanner();
            }
            return _super.prototype.removeSelf.call(this);
        };
        SettlementView.prototype.removeEvent = function () {
            this.btn_next.off(Laya.Event.CLICK, this, this.onNext);
            this.btn_share.off(Laya.Event.CLICK, this, this.onShare);
            this.btn_again.off(Laya.Event.CLICK, this, this.onAgain);
            this.btn_home.off(Laya.Event.CLICK, this, this.onHome);
            this.qq_btn_home.off(Laya.Event.CLICK, this, this.onQQHome);
            this.btn_video.off(Laya.Event.CLICK, this, this.onVideo);
        };
        SettlementView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            Laya.timer.clearAll(this);
            this.data = null;
            this.removeEvent();
        };
        return SettlementView;
    }(BasePopSceneView));

    var InviteItem = (function (_super) {
        __extends(InviteItem, _super);
        function InviteItem(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "InviteItem";
            _this.data = _data;
            _this.skin = "home/invite/InviteItem.json";
            _this.size(818, 125);
            return _this;
        }
        InviteItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.initView();
            this.addEvent();
        };
        InviteItem.prototype.onEnabled = function () {
            if (this.isCreate) ;
        };
        InviteItem.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        InviteItem.prototype.addEvent = function () {
            this.btn_get.on(Laya.Event.CLICK, this, this.onLingqu);
        };
        InviteItem.prototype.initView = function () {
            if (!this.data)
                return;
            var data = this.data;
            BitmapLabelUtils.setLabel(this.img_num, data.id + "", "resource/assets/img/invite/invite_sz/", 0, ".png", "center");
            if (data.head && data.head != "") {
                this.img_head.skin = data.head;
                this.img_head.mask = this.img_headMask;
                this.img_headMask.visible = false;
            }
            else {
                this.img_head.skin = "resource/assets/img/invite/invite_tubiao10.png";
            }
            this.lab_count.text = "x" + data.reward[0].num;
            this.img_no.visible = false;
            if (data.lingqued) {
                this.btn_get.visible = true;
                this.btn_get.mouseEnabled = false;
                this.btn_get.skin = "resource/assets/img/invite/invite_tubiao6.png";
            }
            else {
                if (data.canLingqu) {
                    this.btn_get.visible = true;
                    this.btn_get.mouseEnabled = true;
                    this.btn_get.skin = "resource/assets/img/invite/invite_tubiao5.png";
                }
                else {
                    this.img_no.visible = true;
                    this.btn_get.visible = false;
                }
            }
        };
        InviteItem.prototype.onLingqu = function () {
            console.log("领取邀请奖励");
            SoundManager.getInstance().playEffect(SoundConst.CLICK);
            var reward = this.data.reward[0];
            InviteManager.getInstance().getInviteAward(this.data.id, reward.num);
            EventMgr.getInstance().sendEvent(GameEvent.REFRESH_INVITE);
        };
        InviteItem.prototype.removeEvent = function () {
            this.btn_get.off(Laya.Event.CLICK, this, this.onLingqu);
        };
        InviteItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.data = null;
        };
        return InviteItem;
    }(BaseSceneUISkin));

    var InviteView = (function (_super) {
        __extends(InviteView, _super);
        function InviteView() {
            var _this = _super.call(this) || this;
            _this.className_key = "InviteView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this.skin = "home/invite/Invite.json";
            return _this;
        }
        InviteView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.initList();
        };
        InviteView.prototype.initList = function () {
            this.panel_invite.removeChildren();
            this.panel_invite.vScrollBarSkin = "";
            this.panel_invite.elasticEnabled = true;
            this.panel_invite.vScrollBar.elasticDistance = 200;
            this.panel_invite.vScrollBar.elasticBackTime = 200;
        };
        InviteView.prototype.onEnabled = function () {
            _super.prototype.onEnabled.call(this);
            if (this.isCreate) {
                this.addEvent();
                this.initView();
                if (DeviceUtil.isWXMiniGame()) {
                    MiniGameManager.instance.showBannerAd();
                }
                if (DeviceUtil.isQQMiniGame) {
                    MiniGameManager.instance.hideBanner();
                }
            }
        };
        InviteView.prototype.addEvent = function () {
            this.btn_clsoe.on(Laya.Event.CLICK, this, this.onClose);
            this.btn_invite.on(Laya.Event.CLICK, this, this.onInvite);
            EventMgr.getInstance().addEvent(GameEvent.REFRESH_INVITE, this, this.refreshUI);
        };
        InviteView.prototype.initView = function () {
            this.getInvitePlayer();
        };
        InviteView.prototype.getInvitePlayer = function () {
            var _this = this;
            InviteManager.getInstance().selectInfo(function (code) {
                if (code == '0') {
                    _this.refreshUI();
                }
            }, this);
        };
        InviteView.prototype.refreshUI = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dataArr, i, len, item;
                return __generator(this, function (_a) {
                    dataArr = InviteManager.getInstance().getInviteAwardData();
                    console.log("InviteView >>>>>>> refreshUI", dataArr);
                    for (i = 0, len = dataArr.length; i < len; i++) {
                        item = this.panel_invite.getChildAt(i);
                        if (item) {
                            item.setData(dataArr[i]);
                        }
                        else {
                            item = new InviteItem(dataArr[i]);
                            item.x = 0;
                            item.y = (125 + 20) * i;
                            this.panel_invite.addChild(item);
                        }
                    }
                    return [2];
                });
            });
        };
        InviteView.prototype.onInvite = function () {
            SoundManager.getInstance().playEffect(SoundConst.CLICK);
            if (DeviceUtil.isWXMiniGame()) {
                MiniGameManager.instance.shareAppMessage({ message: null });
            }
            else {
                TipsManager.instance.showDefaultTips("请在平台打开");
            }
        };
        InviteView.prototype.onClose = function () {
            SoundManager.getInstance().playEffect(SoundConst.CLICK);
            this.removeSelf();
        };
        InviteView.prototype.removeEvent = function () {
            this.btn_clsoe.off(Laya.Event.CLICK, this, this.onClose);
            this.btn_invite.off(Laya.Event.CLICK, this, this.onInvite);
            EventMgr.getInstance().removeEvent(GameEvent.REFRESH_INVITE, this, this.refreshUI);
        };
        InviteView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            if (DeviceUtil.isWXMiniGame()) {
                MiniGameManager.instance.hideBanner();
            }
            if (DeviceUtil.isQQMiniGame()) {
                MiniGameManager.instance.showBannerAd();
            }
        };
        return InviteView;
    }(BasePopSceneView));

    var DyFriend = (function (_super) {
        __extends(DyFriend, _super);
        function DyFriend(skin) {
            var _this = _super.call(this) || this;
            _this.className_key = 'DyFriend';
            _this.isflag2 = 3;
            _this.skin = skin;
            return _this;
        }
        DyFriend.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        DyFriend.prototype.initView = function (listdata_, itemW, itemH) {
            listdata_.sort(function () {
                return Math.random() > 0.5 ? -1 : 1;
            });
            GameManager.instance.addArr(listdata_, 15);
            this.listdata = listdata_;
            this.itemW = itemW;
            this.itemH = itemH;
            if (this.isCreate) {
                this.initList();
            }
        };
        DyFriend.prototype.onEnabled = function () {
            _super.prototype.onEnabled.call(this);
            if (this.isCreate) {
                this.btn_close.on(Laya.Event.CLICK, this, this.onClick);
                Laya.timer.loop(3000, this, this.onLoop);
            }
        };
        DyFriend.prototype.onLoop = function () {
            var startIndex1 = this.gameList.startIndex;
            startIndex1 += this.isflag2;
            var index = this.gameList.array.length - 9;
            if (startIndex1 >= index) {
                this.isflag2 = -3;
            }
            if (startIndex1 <= 0) {
                this.isflag2 = 3;
            }
            this.gameList.tweenTo(startIndex1, 500);
        };
        DyFriend.prototype.onClick = function () {
            this.removeSelf();
            if (this.closeCallFunc) {
                this.closeCallFunc.apply(this.closeCallObj);
            }
            Laya.timer.clearAll(this);
        };
        DyFriend.prototype.onRemoved = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onClick);
        };
        DyFriend.prototype.initList = function () {
            this.gameList.itemRender = DyFiendsItem;
            this.gameList.vScrollBarSkin = "";
            this.gameList.array = this.listdata;
        };
        return DyFriend;
    }(BasePopSceneView));
    var DyFiendsItem = (function (_super) {
        __extends(DyFiendsItem, _super);
        function DyFiendsItem(skin, itemData) {
            var _this = _super.call(this, 'Dy/DyFiendsItem.json') || this;
            _this.className_key = 'DyFiendsItem';
            return _this;
        }
        DyFiendsItem.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.on(Laya.Event.CLICK, this, this.click);
        };
        DyFiendsItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
        };
        DyFiendsItem.prototype.dataChange = function (data) {
            this.itemData = data;
            this.icon_header.skin = data.img;
            this.icon_header.size(173, 174);
            if (this.icon_mask) {
                this.icon_header.mask = this.icon_mask;
                this.icon_header.mask.visible = false;
            }
            this.txt_title.text = data.title;
        };
        Object.defineProperty(DyFiendsItem.prototype, "dataSource", {
            set: function (value) {
                if (!value)
                    return;
                this.dataChange(value);
            },
            enumerable: true,
            configurable: true
        });
        DyFiendsItem.prototype.onEnabled = function () {
        };
        return DyFiendsItem;
    }(DyItem));

    var DyBaoType = (function (_super) {
        __extends(DyBaoType, _super);
        function DyBaoType(skin) {
            var _this = _super.call(this) || this;
            _this.className_key = 'DyBaoType';
            _this.skin = skin;
            return _this;
        }
        DyBaoType.prototype.initView = function (listdata_, itemW, itemH) {
            listdata_.sort(function () {
                return Math.random() > 0.5 ? -1 : 1;
            });
            this.listdata = listdata_;
            this.itemW = itemW;
            this.itemH = itemH;
            if (this.isCreate) {
                this.initList();
                Laya.timer.loop(3000, this, this.onLoop);
            }
        };
        DyBaoType.prototype.onEnabled = function () {
        };
        DyBaoType.prototype.onLoop = function () {
            var data = GameManager.instance.getArrayItems(this.listdata, 3);
            this.gameList.array = data;
        };
        DyBaoType.prototype.onClick = function () {
            this.removeSelf();
            Laya.timer.clearAll(this);
        };
        DyBaoType.prototype.initList = function () {
            this.gameList.itemRender = DyBaoTypeItem;
            var data = GameManager.instance.getArrayItems(this.listdata, 3);
            this.gameList.array = data;
        };
        return DyBaoType;
    }(BaseSceneUISkin));
    var DyBaoTypeItem = (function (_super) {
        __extends(DyBaoTypeItem, _super);
        function DyBaoTypeItem(m) {
            var _this = _super.call(this, 'Dy/DyBaoTypeItem.json') || this;
            _this.className_key = 'DyBaoTypeItem';
            return _this;
        }
        DyBaoTypeItem.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.on(Laya.Event.CLICK, this, this.click);
        };
        DyBaoTypeItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
        };
        DyBaoTypeItem.prototype.dataChange = function (data) {
            this.itemData = data;
            this.icon_header.skin = data.img;
            this.icon_header.size(173, 174);
            if (this.icon_mask) {
                this.icon_header.mask = this.icon_mask;
                this.icon_header.mask.visible = false;
            }
        };
        Object.defineProperty(DyBaoTypeItem.prototype, "dataSource", {
            set: function (value) {
                if (!value)
                    return;
                this.dataChange(value);
            },
            enumerable: true,
            configurable: true
        });
        DyBaoTypeItem.prototype.onEnabled = function () {
        };
        return DyBaoTypeItem;
    }(DyItem));

    var LevelItemView = (function (_super) {
        __extends(LevelItemView, _super);
        function LevelItemView(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "LevelItemView";
            _this.data = _data;
            _this.skin = "home/level/LevelItemViewSkin.json";
            _this.size(220, 220);
            return _this;
        }
        LevelItemView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.addComponent(CustomScaleComponent);
            this.initView();
            this.addEvent();
        };
        LevelItemView.prototype.onEnabled = function () {
            if (this.isCreate) ;
        };
        LevelItemView.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        LevelItemView.prototype.addEvent = function () {
            this.on(Laya.Event.CLICK, this, this.onClick);
        };
        LevelItemView.prototype.initView = function () {
            if (!this.data)
                return;
            var data = this.data;
            BitmapLabelUtils.setLabel(this.levelText, data.level_id + "", "resource/assets/img/level/level_sz/", 0, ".png", "center");
            if (data.type == 1) {
                this.levelText.visible = true;
                this.levelImg.skin = "resource/assets/img/level/level_diabn_2.png";
            }
            else if (data.type == 2) {
                this.levelText.visible = true;
                this.levelImg.skin = "resource/assets/img/level/level_diabn_1.png";
            }
            else {
                this.levelText.visible = false;
                this.levelImg.skin = "resource/assets/img/level/level_diban_3.png";
            }
        };
        LevelItemView.prototype.onClick = function () {
            if (this.data.type == 0) {
                return;
            }
            console.log("level id = " + this.data.level_id);
            EventMgr.getInstance().sendEvent(GameEvent.TO_LEVEL_GAME, this.data.level_id);
        };
        LevelItemView.prototype.removeEvent = function () {
            this.off(Laya.Event.CLICK, this, this.onClick);
        };
        LevelItemView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.data = null;
        };
        return LevelItemView;
    }(BaseSceneUISkin));

    var LevelView = (function (_super) {
        __extends(LevelView, _super);
        function LevelView() {
            var _this = _super.call(this) || this;
            _this.className_key = "LevelView";
            _this.skin = "home/level/LevelViewSkin.json";
            _this.width = Laya.stage.width;
            _this.height = Laya.stage.height;
            return _this;
        }
        LevelView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_back.addComponent(CustomScaleComponent);
            this.initList();
        };
        LevelView.prototype.initList = function () {
            this.level_panel.bottom = 330;
            this.level_panel.removeChildren();
            this.level_panel.vScrollBarSkin = "";
            this.level_panel.elasticEnabled = true;
            this.level_panel.vScrollBar.elasticDistance = 200;
            this.level_panel.vScrollBar.elasticBackTime = 200;
        };
        LevelView.prototype.onEnabled = function () {
            _super.prototype.onEnabled.call(this);
            if (this.isCreate) {
                this.addEvent();
                this.initView();
                MiniGameManager.instance.showBannerAd();
            }
        };
        LevelView.prototype.addEvent = function () {
            this.btn_back.on(Laya.Event.CLICK, this, this.onClose);
            EventMgr.getInstance().addEvent(GameEvent.TO_LEVEL_GAME, this, this.removeSelf);
        };
        LevelView.prototype.initView = function () {
            this.refreshUI();
        };
        LevelView.prototype.refreshUI = function () {
            return __awaiter(this, void 0, void 0, function () {
                var maxLevel, currLevel, i, item, type;
                return __generator(this, function (_a) {
                    maxLevel = GameManager.instance.maxLevel;
                    currLevel = GameManager.instance.currLevel;
                    for (i = 0; i < maxLevel; i++) {
                        item = this.level_panel.getChildAt(i);
                        type = 0;
                        if ((i + 1) == currLevel) {
                            type = 1;
                        }
                        if ((i + 1) < currLevel) {
                            type = 2;
                        }
                        if (item) {
                            item.setData({ level_id: (i + 1), type: type });
                        }
                        else {
                            item = new LevelItemView({ level_id: (i + 1), type: type });
                            item.x = (i % 4) * (220 + 30) + 110;
                            item.y = (Math.floor(i / 4)) * (220 + 30) + 110;
                            this.level_panel.addChild(item);
                        }
                    }
                    return [2];
                });
            });
        };
        LevelView.prototype.onClose = function () {
            EventMgr.getInstance().sendEvent(GameEvent.LEVEL_VIEW_CLOSE);
            this.removeSelf();
        };
        LevelView.prototype.removeEvent = function () {
            this.btn_back.off(Laya.Event.CLICK, this, this.onClose);
            EventMgr.getInstance().removeEvent(GameEvent.TO_LEVEL_GAME, this, this.removeSelf);
        };
        LevelView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            if (DeviceUtil.isWXMiniGame()) {
                MiniGameManager.instance.hideBanner();
            }
            if (DeviceUtil.isQQMiniGame()) {
                MiniGameManager.instance.showBannerAd();
            }
        };
        return LevelView;
    }(BasePopSceneView));

    var SomeBoxAward = (function (_super) {
        __extends(SomeBoxAward, _super);
        function SomeBoxAward() {
            var _this = _super.call(this) || this;
            _this.className_key = "SomeBoxAward";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this.clickNum = 0;
            _this.skin = "game/SomeBoxAwardSkin.json";
            return _this;
        }
        SomeBoxAward.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_click.addComponent(CustomScaleComponent);
            this.btn_close.addComponent(CustomScaleComponent);
        };
        SomeBoxAward.prototype.onEnabled = function () {
            _super.prototype.onEnabled.call(this);
            if (this.isCreate) {
                this.addEvent();
                this.initView();
            }
            MiniGameManager.instance.hideBanner();
        };
        SomeBoxAward.prototype.addEvent = function () {
            this.btn_click.on(Laya.Event.CLICK, this, this.onClick);
            this.btn_close.on(Laya.Event.CLICK, this, this.removeSelf);
        };
        SomeBoxAward.prototype.initView = function () {
            this.barImg.width = 30;
            this.btn_click.getChildAt(0).visible = true;
            this.clickNum = 0;
        };
        SomeBoxAward.prototype.onClick = function () {
            this.btn_click.getChildAt(0).visible = false;
            Laya.Tween.clearAll(this.barImg);
            this.clickNum++;
            if (this.clickNum > 5) {
                MiniGameManager.instance.showBannerAd();
                this.removeSelf();
                GameManager.instance.changePower({ count: 1, isNatural: false });
                TipsManager.instance.showDefaultTips("恭喜获得体力 +1");
                Laya.timer.once(2000, this.callObj, this.callFunc, this.callFuncParam);
                return;
            }
            Laya.Tween.to(this.barImg, { width: 130 * (this.clickNum) }, 100, null, Laya.Handler.create(this, this.showDwon));
        };
        SomeBoxAward.prototype.showDwon = function () {
            Laya.Tween.to(this.barImg, { width: 30 }, this.clickNum * 500);
        };
        SomeBoxAward.prototype.removeEvent = function () {
            this.btn_click.off(Laya.Event.CLICK, this, this.onClick);
            this.btn_close.off(Laya.Event.CLICK, this, this.removeSelf);
        };
        SomeBoxAward.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            Laya.Tween.clearAll(this.barImg);
            this.removeEvent();
            if (DeviceUtil.isWXMiniGame()) {
                MiniGameManager.instance.hideBanner();
            }
        };
        return SomeBoxAward;
    }(BasePopSceneView));

    var HomeScene = (function (_super) {
        __extends(HomeScene, _super);
        function HomeScene() {
            var _this = _super.call(this) || this;
            _this.className_key = 'HomeScene';
            _this.skin = 'game/HomeView.json';
            return _this;
        }
        HomeScene.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            console.log("进入游戏界面耗时 : " + ((new Date()).getTime() - window["starTime"]) + " ms");
            if (DeviceUtil.isWXMiniGame()) {
                MiniGameManager.instance.hideBanner();
            }
        };
        HomeScene.prototype.childrenCreated = function () {
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isUCMiniGame()) {
                this.btn_invite.visible = false;
                this.btn_level.x += 100;
                this.btn_share.x += 100;
                this.btn_sign.x += 100;
            }
        };
        HomeScene.prototype.onEnabled = function () {
            var _this = this;
            _super.prototype.onEnabled.call(this);
            if (DeviceUtil.isWXMiniGame()) {
                PlatformDY.getGameList().then(function () {
                    if (PlatformDY.gameListInfos != null && PlatformDY.gameListInfos.length > 0) {
                        var dyHome = _this.addChild(new DyHome("Dy/DyHome.json"));
                        dyHome.initView(PlatformDY.gameListInfos.concat(), 0, 0);
                        dyHome.y = _this.height - dyHome.height;
                        var dyBaoType = _this.box_top.addChild(new DyBaoType('Dy/DyBaoType.json'));
                        dyBaoType.initView(PlatformDY.gameListInfos.concat(), 0, 0);
                        dyBaoType.x = _this.width - dyBaoType.width;
                        dyBaoType.y = (_this.height - dyBaoType.height) / 2;
                    }
                });
            }
            if (DeviceUtil.isQQMiniGame()) {
                MiniGameManager.instance.showBannerAd();
            }
            if (this.isCreate) {
                this.box_game.width = Laya.stage.width;
                this.box_game.height = Laya.stage.height;
                this.box_top.width = Laya.stage.width;
                this.box_top.height = Laya.stage.height;
                this.initGameScene();
                this.addEvent();
                if (DeviceUtil.isWXMiniGame() || DeviceUtil.isQQMiniGame()) {
                    platform.checkIsAuthorize().then(function (isAuthorize) {
                        if (!isAuthorize && !GameData.getInstance().isConVersion) {
                            var point = new Laya.Point(_this.btn_invite.x, _this.btn_invite.y);
                            point = _this.btn_invite.parent.localToGlobal(point);
                            var systemInfo = platform.getSystemInfoSync();
                            var w = 160 / Laya.stage.width * systemInfo.screenWidth;
                            var h = 140 / Laya.stage.height * systemInfo.screenHeight;
                            var top_1 = point.y / Laya.stage.height * systemInfo.screenHeight - (h / 2);
                            var button_1 = wx.createUserInfoButton({
                                type: "text",
                                text: "",
                                style: {
                                    left: point.x / Laya.stage.width * systemInfo.screenWidth - (w / 2), top: top_1,
                                    width: w,
                                    height: h,
                                    color: '#ffffff',
                                },
                                withCredentials: true,
                                lang: 'zh_CN'
                            });
                            GameManager.instance.userButton = button_1;
                            button_1.onTap(function (res) {
                                console.log(res);
                                _this.onOpenInVite();
                                if (res.errMsg.indexOf("ok") == -1) {
                                    console.log("用户授权失败！");
                                    return;
                                }
                                console.log("用户授权成功！");
                                button_1.destroy();
                                GameManager.instance.userButton = null;
                            });
                        }
                    });
                }
            }
        };
        HomeScene.prototype.addEvent = function () {
            EventMgr.getInstance().addEvent(GameEvent.BACK_HOME, this, this.onBackHome);
            EventMgr.getInstance().addEvent(GameEvent.GAME_OVER, this, this.onGameOver);
            EventMgr.getInstance().addEvent(GameEvent.LEVEL_VIEW_CLOSE, this, this.onLevelViewClose);
            EventMgr.getInstance().addEvent(GameEvent.TO_LEVEL_GAME, this, this.toLevelGame);
            if (GameData.getInstance().isConVersion) {
                this.btn_sign.visible = this.btn_level.visible = false;
                this.btn_invite.visible = false;
                this.btn_share.visible = false;
            }
            this.btn_start.on(Laya.Event.CLICK, this, this.gameStart);
            this.btn_sign.on(Laya.Event.CLICK, this, this.onOpenSign);
            this.btn_level.on(Laya.Event.CLICK, this, this.onLevel);
            this.btn_invite.on(Laya.Event.CLICK, this, this.onOpenInVite);
            this.btn_share.on(Laya.Event.CLICK, this, this.onShare);
        };
        HomeScene.prototype.toLevelGame = function (toLevelid) {
            var _this = this;
            GameManager.instance.changePower({
                count: -1, success: function () {
                    GameManager.instance.com_PowerCommon && (GameManager.instance.com_PowerCommon.visible = true);
                    _this.gameScene.initLevel(toLevelid);
                    GameMgr.getInstance().startGame();
                }, fail: function () {
                }
            });
        };
        HomeScene.prototype.onLevelViewClose = function () {
            this.box_top.visible = true;
            GameManager.instance.com_PowerCommon && (GameManager.instance.com_PowerCommon.visible = true);
        };
        HomeScene.prototype.onLevelViewOpen = function () {
            this.box_top.visible = false;
            GameManager.instance.com_PowerCommon && (GameManager.instance.com_PowerCommon.visible = false);
        };
        HomeScene.prototype.onLevel = function () {
            SoundManager.getInstance().playEffect(SoundConst.CLICK);
            console.log("打开签到");
            GameMgr.getInstance().showBufferLoading('资源加载中');
            var self = this;
            ResUtil.getIntance().loadGroups(["level"], function () {
                GameMgr.getInstance().hiddeBufferLoading();
                ViewManager.getInstance().showView(LevelView);
                self.onLevelViewOpen();
                self = null;
            });
        };
        HomeScene.prototype.onShare = function () {
            SoundManager.getInstance().playEffect(SoundConst.CLICK);
            MiniGameManager.instance.shareAppMessage();
        };
        HomeScene.prototype.onOpenSign = function () {
            SoundManager.getInstance().playEffect(SoundConst.CLICK);
            console.log("打开签到");
            GameMgr.getInstance().showBufferLoading('资源加载中');
            ResUtil.getIntance().loadGroups(["sign"], function () {
                GameMgr.getInstance().hiddeBufferLoading();
                ViewManager.getInstance().showView(SignView);
            });
        };
        HomeScene.prototype.onOpenInVite = function () {
            return __awaiter(this, void 0, void 0, function () {
                var isAuthorize;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, platform.checkIsAuthorize()];
                        case 1:
                            isAuthorize = _a.sent();
                            SoundManager.getInstance().playEffect(SoundConst.CLICK);
                            console.log("打开邀请");
                            if (!isAuthorize) {
                                TipsManager.instance.showDefaultTips("此功能需要用户授权");
                                return [2];
                            }
                            GameMgr.getInstance().showBufferLoading('资源加载中');
                            ResUtil.getIntance().loadGroups(["invite"], function () {
                                GameMgr.getInstance().hiddeBufferLoading();
                                ViewManager.getInstance().showView(InviteView);
                            });
                            return [2];
                    }
                });
            });
        };
        HomeScene.prototype.setSdkView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var hotType, img_ct, guessLike;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (DeviceUtil.isWXMiniGame()) {
                                MiniGameManager.instance.addOpenWxData({ parent: this.box_top, width: 200, height: 1200, top: 400 });
                            }
                            return [4, PlatfromManager.getInstance().createHotType(this)];
                        case 1:
                            hotType = _a.sent();
                            if (hotType) {
                                hotType.x = this.width - hotType.width / 2;
                                hotType.y = (this.height - hotType.height) / 2;
                            }
                            img_ct = PlatfromManager.getInstance().createCtBtn(this.box_top);
                            if (img_ct) {
                                if (hotType) {
                                    img_ct.y = hotType.y + 50 + hotType.height / 2;
                                }
                                else {
                                    img_ct.y = (this.height - img_ct.height) / 2;
                                }
                                img_ct.x = this.width - img_ct.width;
                            }
                            return [4, PlatfromManager.getInstance().createGuessLike(this.box_top)];
                        case 2:
                            guessLike = _a.sent();
                            if (guessLike) {
                                if (GameData.getInstance().bannerId.length <= 0) {
                                    guessLike.y = Laya.stage.height - guessLike.height;
                                }
                                else {
                                    guessLike.y = Laya.stage.height - guessLike.height - 250;
                                }
                            }
                            return [2];
                    }
                });
            });
        };
        HomeScene.prototype.showGameOver = function (evt) {
            var _this = this;
            if (DeviceUtil.isQQMiniGame() && GameData.getInstance().isWDJOpenBox && evt.suc == true) {
                GameMgr.getInstance().showBufferLoading('资源加载中');
                ResUtil.getIntance().loadGroups(["openBox"], function () {
                    GameMgr.getInstance().hiddeBufferLoading();
                    var someBoxAward = ViewManager.getInstance().showView(SomeBoxAward);
                    someBoxAward.callObj = _this;
                    someBoxAward.callFunc = _this.showSettlement;
                    someBoxAward.callFuncParam = [evt];
                });
                return;
            }
            this.showSettlement(evt);
        };
        HomeScene.prototype.showSettlement = function (evt) {
            if (evt.suc == true) {
                ViewManager.getInstance().showView(SettlementView, 1);
            }
            else {
                if (DeviceUtil.isWXMiniGame()) {
                    var dyFriend = ViewManager.getInstance().showView(DyFriend, "Dy/DyFriend.json");
                    dyFriend.initView(PlatformDY.gameListInfos, 0, 0);
                    dyFriend.closeCallFunc = function () {
                        ViewManager.getInstance().showView(SettlementView, 2);
                    };
                    dyFriend.closeCallObj = this;
                }
                else {
                    ViewManager.getInstance().showView(SettlementView, 2);
                }
            }
        };
        HomeScene.prototype.onGameOver = function (evt) {
            var _this = this;
            if (evt.suc == true) {
                SoundManager.getInstance().playEffect(SoundConst.WIN);
                if (GameManager.instance.gameCurrentLevel <= GameManager.instance.maxLevel) {
                    GameManager.instance.gameCurrentLevel++;
                    if (GameManager.instance.gameCurrentLevel > GameManager.instance.currLevel) {
                        GameManager.instance.currLevel = GameManager.instance.gameCurrentLevel;
                    }
                }
                var url = "resource/assets/img/sk/Cai_pian.sk";
                GameMgr.getInstance().endGame();
                AnimationManager.instance.showSkeletonAnimation(url, function (boomAnimation) {
                    if (boomAnimation == null) {
                        GameMgr.getInstance().showBufferLoading('资源加载中');
                        ResUtil.getIntance().loadGroups(["settlement"], function () {
                            GameMgr.getInstance().hiddeBufferLoading();
                            _this.showGameOver(evt);
                        });
                        return;
                    }
                    _this.addChild(boomAnimation);
                    boomAnimation.player.playbackRate = 3;
                    boomAnimation.player.once(Laya.Event.COMPLETE, _this, function () {
                        if (boomAnimation) {
                            GameMgr.getInstance().showBufferLoading('资源加载中');
                            ResUtil.getIntance().loadGroups(["settlement"], function () {
                                GameMgr.getInstance().hiddeBufferLoading();
                                _this.showGameOver(evt);
                            });
                            boomAnimation.removeSelf();
                        }
                        boomAnimation = null;
                    });
                    boomAnimation.scale(1, 1);
                    boomAnimation.x = (_this.stage.width) / 2;
                    boomAnimation.y = (_this.stage.height) / 2;
                    boomAnimation.play(0, true);
                });
            }
            else {
                SoundManager.getInstance().playEffect(SoundConst.PASS);
                GameMgr.getInstance().showBufferLoading('资源加载中');
                ResUtil.getIntance().loadGroups(["settlement"], function () {
                    GameMgr.getInstance().hiddeBufferLoading();
                    _this.showGameOver(evt);
                });
            }
        };
        HomeScene.prototype.gameStart = function () {
            if (GameManager.instance.currLevel > 1) {
                this.onLevel();
                return;
            }
            SoundManager.getInstance().playEffect(SoundConst.CLICK);
            if (GameManager.instance.userButton != null) {
                GameManager.instance.userButton.hide();
            }
            if ((DeviceUtil.isWXMiniGame() || DeviceUtil.isQQMiniGame()) && !GameData.getInstance().userInfo.openId) {
                GameMgr.getInstance().showBufferLoading('资加载中...');
                EventMgr.getInstance().addEvent("openid_succ", this, this.openidSucc);
                return;
            }
            this.gameScene.showGuideShiYi();
            this.startGame();
        };
        HomeScene.prototype.openidSucc = function () {
            GameMgr.getInstance().hiddeBufferLoading();
            EventMgr.getInstance().removeEvent("openid_succ", this, this.openidSucc);
            this.startGame();
        };
        HomeScene.prototype.startGame = function () {
            var _this = this;
            GameManager.instance.changePower({
                count: -1, success: function () {
                    _this.box_top.visible = false;
                    _this.box_top.mouseThrough = true;
                    _this.gameScene.showBtn();
                    if (DeviceUtil.isWXMiniGame()) {
                        MiniGameManager.instance.removeOpenData({ parent: _this.box_top });
                        GameMgr.getInstance().startGame();
                    }
                }, fail: function () {
                }
            });
        };
        HomeScene.prototype.onBackHome = function () {
            this.box_top.visible = true;
            this.box_top.mouseThrough = false;
            this.gameScene.hideBtn();
            if (GameManager.instance.userButton != null) {
                GameManager.instance.userButton.show();
            }
        };
        HomeScene.prototype.initGameScene = function () {
            this.img_logo.skin = 'resource/assets/loading/loading1.png';
            this.collec_img.right = 300;
            this.collec_img.top = 60;
            this.collec_img.width = 308;
            this.collec_img.height = 87;
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isUCMiniGame()) {
                this.collec_img.visible = false;
            }
            if (this.collec_img.visible) {
                MiniGameManager.instance.adaptImgToClientRect(this.collec_img, this.stage);
                AnimationManager.instance.VTween(this.collec_img, this);
            }
            AnimationManager.instance.zoomTween(this.btn_start, this);
            this.btn_sign.addComponent(CustomScaleComponent);
            this.btn_invite.addComponent(CustomScaleComponent);
            this.btn_share.addComponent(CustomScaleComponent);
            this.btn_level.addComponent(CustomScaleComponent);
            if (this.gameScene == null) {
                this.gameScene = new GameScene();
                this.gameScene.hideBtn();
                this.box_game.addChild(this.gameScene);
            }
        };
        return HomeScene;
    }(BaseSceneUISkin));

    var Md5 = (function () {
        function Md5() {
            this._state = new Int32Array(4);
            this._buffer = new ArrayBuffer(68);
            this._buffer8 = new Uint8Array(this._buffer, 0, 68);
            this._buffer32 = new Uint32Array(this._buffer, 0, 17);
            this.start();
        }
        Md5.hashStr = function (str, raw) {
            if (raw === void 0) { raw = false; }
            return this.onePassHasher
                .start()
                .appendStr(str)
                .end(raw);
        };
        Md5.hashAsciiStr = function (str, raw) {
            if (raw === void 0) { raw = false; }
            return this.onePassHasher
                .start()
                .appendAsciiStr(str)
                .end(raw);
        };
        Md5._hex = function (x) {
            var hc = Md5.hexChars;
            var ho = Md5.hexOut;
            var n;
            var offset;
            var j;
            var i;
            for (i = 0; i < 4; i += 1) {
                offset = i * 8;
                n = x[i];
                for (j = 0; j < 8; j += 2) {
                    ho[offset + 1 + j] = hc.charAt(n & 0x0F);
                    n >>>= 4;
                    ho[offset + 0 + j] = hc.charAt(n & 0x0F);
                    n >>>= 4;
                }
            }
            return ho.join('');
        };
        Md5._md5cycle = function (x, k) {
            var a = x[0];
            var b = x[1];
            var c = x[2];
            var d = x[3];
            a += (b & c | ~b & d) + k[0] - 680876936 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[1] - 389564586 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[2] + 606105819 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[4] - 176418897 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[7] - 45705983 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[10] - 42063 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[13] - 40341101 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & d | c & ~d) + k[1] - 165796510 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[11] + 643717713 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[0] - 373897302 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[5] - 701558691 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[10] + 38016083 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[15] - 660478335 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[4] - 405537848 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[9] + 568446438 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[3] - 187363961 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[2] - 51403784 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b ^ c ^ d) + k[5] - 378558 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[14] - 35309556 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[7] - 155497632 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[13] + 681279174 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[0] - 358537222 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[3] - 722521979 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[6] + 76029189 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[9] - 640364487 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[12] - 421815835 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[15] + 530742520 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[2] - 995338651 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            x[0] = a + x[0] | 0;
            x[1] = b + x[1] | 0;
            x[2] = c + x[2] | 0;
            x[3] = d + x[3] | 0;
        };
        Md5.prototype.start = function () {
            this._dataLength = 0;
            this._bufferLength = 0;
            this._state.set(Md5.stateIdentity);
            return this;
        };
        Md5.prototype.appendStr = function (str) {
            var buf8 = this._buffer8;
            var buf32 = this._buffer32;
            var bufLen = this._bufferLength;
            var code;
            var i;
            for (i = 0; i < str.length; i += 1) {
                code = str.charCodeAt(i);
                if (code < 128) {
                    buf8[bufLen++] = code;
                }
                else if (code < 0x800) {
                    buf8[bufLen++] = (code >>> 6) + 0xC0;
                    buf8[bufLen++] = code & 0x3F | 0x80;
                }
                else if (code < 0xD800 || code > 0xDBFF) {
                    buf8[bufLen++] = (code >>> 12) + 0xE0;
                    buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                    buf8[bufLen++] = (code & 0x3F) | 0x80;
                }
                else {
                    code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
                    if (code > 0x10FFFF) {
                        throw new Error('Unicode standard supports code points up to U+10FFFF');
                    }
                    buf8[bufLen++] = (code >>> 18) + 0xF0;
                    buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
                    buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                    buf8[bufLen++] = (code & 0x3F) | 0x80;
                }
                if (bufLen >= 64) {
                    this._dataLength += 64;
                    Md5._md5cycle(this._state, buf32);
                    bufLen -= 64;
                    buf32[0] = buf32[16];
                }
            }
            this._bufferLength = bufLen;
            return this;
        };
        Md5.prototype.appendAsciiStr = function (str) {
            var buf8 = this._buffer8;
            var buf32 = this._buffer32;
            var bufLen = this._bufferLength;
            var i;
            var j = 0;
            for (;;) {
                i = Math.min(str.length - j, 64 - bufLen);
                while (i--) {
                    buf8[bufLen++] = str.charCodeAt(j++);
                }
                if (bufLen < 64) {
                    break;
                }
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen = 0;
            }
            this._bufferLength = bufLen;
            return this;
        };
        Md5.prototype.appendByteArray = function (input) {
            var buf8 = this._buffer8;
            var buf32 = this._buffer32;
            var bufLen = this._bufferLength;
            var i;
            var j = 0;
            for (;;) {
                i = Math.min(input.length - j, 64 - bufLen);
                while (i--) {
                    buf8[bufLen++] = input[j++];
                }
                if (bufLen < 64) {
                    break;
                }
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen = 0;
            }
            this._bufferLength = bufLen;
            return this;
        };
        Md5.prototype.getState = function () {
            var self = this;
            var s = self._state;
            return {
                buffer: String.fromCharCode.apply(null, self._buffer8),
                buflen: self._bufferLength,
                length: self._dataLength,
                state: [s[0], s[1], s[2], s[3]]
            };
        };
        Md5.prototype.setState = function (state) {
            var buf = state.buffer;
            var x = state.state;
            var s = this._state;
            var i;
            this._dataLength = state.length;
            this._bufferLength = state.buflen;
            s[0] = x[0];
            s[1] = x[1];
            s[2] = x[2];
            s[3] = x[3];
            for (i = 0; i < buf.length; i += 1) {
                this._buffer8[i] = buf.charCodeAt(i);
            }
        };
        Md5.prototype.end = function (raw) {
            var bufLen = this._bufferLength;
            var buf8 = this._buffer8;
            var buf32 = this._buffer32;
            var i = (bufLen >> 2) + 1;
            var dataBitsLen;
            this._dataLength += bufLen;
            buf8[bufLen] = 0x80;
            buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
            buf32.set(Md5.buffer32Identity.subarray(i), i);
            if (bufLen > 55) {
                Md5._md5cycle(this._state, buf32);
                buf32.set(Md5.buffer32Identity);
            }
            dataBitsLen = this._dataLength * 8;
            if (dataBitsLen <= 0xFFFFFFFF) {
                buf32[14] = dataBitsLen;
            }
            else {
                var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
                if (matches === null) {
                    return;
                }
                var lo = parseInt(matches[2], 16);
                var hi = parseInt(matches[1], 16) || 0;
                buf32[14] = lo;
                buf32[15] = hi;
            }
            Md5._md5cycle(this._state, buf32);
            return Md5._hex(this._state);
        };
        Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
        Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        Md5.hexChars = '0123456789abcdef';
        Md5.hexOut = [];
        Md5.onePassHasher = new Md5();
        return Md5;
    }());
    if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
        console.error('Md5 self test failed.');
    }

    var UCInfoMgr = (function () {
        function UCInfoMgr() {
            this.appid = "b2b0c8dcfc684c138ba595dd75cc63b1";
            this.clientid = "d74b6f2fef724c0a90f630d112a090f7";
            this.clientkey = "b242afb88c89414e809292255c21e1a9";
            this.uc_openid = "";
        }
        UCInfoMgr.getInstance = function () {
            if (this.instance == null) {
                this.instance = new UCInfoMgr();
            }
            return this.instance;
        };
        UCInfoMgr.prototype.getOpenIDInfo = function (code) {
            return __awaiter(this, void 0, void 0, function () {
                var self, request_id, timestamp, strsParams, param_str, i, len, sign;
                return __generator(this, function (_a) {
                    self = this;
                    request_id = new Date().getTime();
                    timestamp = new Date().getTime();
                    strsParams = [
                        "app_id=" + self.appid,
                        "client_id=" + self.clientid,
                        "request_id=" + request_id,
                        "code=" + code,
                        "timestamp=" + timestamp
                    ];
                    strsParams = strsParams.sort();
                    param_str = strsParams[0];
                    for (i = 1, len = strsParams.length; i < len; i++) {
                        param_str += "&" + strsParams[i];
                    }
                    console.log("param_str = ", param_str);
                    sign = Md5.hashStr(self.clientid + self.clientkey + request_id + param_str);
                    Md5.hashStr('hello') != "xx";
                    return [2, new Promise(function (resolve) {
                            var url = "https://yxtest.32yx.com/UCMiniGame.fcgi";
                            var data = "app_id=" + self.appid +
                                "&client_id=" + self.clientid +
                                "&request_id=" + request_id +
                                "&code=" + code +
                                "&timestamp=" + timestamp +
                                "&sign=" + sign;
                            console.log("request getOpenId");
                            var request = new Laya.HttpRequest();
                            var funcCom = function (e) {
                                console.log("request.data", request.data);
                                var msg_data = JSON.parse(request.data).msg_data;
                                console.log("msg_data  = ", msg_data, "open_id = ", JSON.parse(msg_data).open_id);
                                resolve(JSON.parse(msg_data).open_id);
                            };
                            request.once(Laya.Event.COMPLETE, self, funcCom);
                            request.once(Laya.Event.ERROR, self, function (e) {
                                console.log("error : event=", e);
                                resolve(JSON.stringify(e));
                            });
                            console.log("dataToSend ->", data);
                            var headers = ["Content-Type", "application/x-www-form-urlencoded"];
                            request.send(url, JSON.stringify({
                                msg_type: "7",
                                msg_data: {
                                    url_append: data,
                                }
                            }), "post", "text", headers);
                        })];
                });
            });
        };
        UCInfoMgr.prototype.initBannerAdd = function () {
            var _this = this;
            var res = platform.uc_getSystemInfoSync();
            console.log("res=", res, "res.pixelRatio =", res.pixelRatio);
            this.bannerAd = platform.uc_createBannerAd({
                style: {
                    width: (res.pixelRatio * 250),
                    height: 0,
                    gravity: 7,
                }
            });
            this.bannerAd.onLoad(function () {
                _this.bannerAd.show();
                console.log('Banner广告加载成功');
            });
            this.bannerAd.onError(function (err) {
                console.log("Banner广告加载失败 ", err);
            });
        };
        UCInfoMgr.prototype.showRewardedVideoAd = function (onClose, onError, callObj) {
            var self = this;
            self.onClose = onClose;
            self.onError = onError;
            self.callObj = callObj;
            var video = platform.uc_createRewardVideoAd();
            if (!self.video) {
                var close_1 = function (res) {
                    console.log("uc video close");
                    self.onClose.call(self.onClose, res);
                };
                var error = function (data) {
                    console.warn(data.errMsg);
                    switch (data.errCode) {
                        case 1000:
                            console.warn("后端接口调用失败");
                            break;
                        case 1001:
                            console.warn("参数错误");
                            break;
                        case 1002:
                            console.warn("广告单元无效");
                            break;
                        case 1003:
                            console.warn("内部错误");
                            break;
                        case 1004:
                            console.warn("无合适的广告");
                            break;
                        case 1005:
                            console.warn("广告组件审核中");
                            break;
                        case 1006:
                            console.warn("广告组件被驳回");
                            break;
                        case 1007:
                            console.warn("广告组件被封禁");
                            break;
                        case 1008:
                            console.warn("广告单元已关闭");
                            break;
                    }
                    self.onError.call(self.onError, data);
                };
                video.onError(error);
                video.onClose(close_1);
                self.video = video;
            }
            video.show().catch(function () {
                video.load()
                    .then(function () { return video.show(); })
                    .catch(function (err) {
                    console.log('激励视频 广告显示失败');
                });
            });
        };
        UCInfoMgr.instance = null;
        return UCInfoMgr;
    }());

    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            var _this = _super.call(this, { width: 1080, height: 1920, exportSceneToJson: true }) || this;
            _this.loadThmOk = false;
            _this.loadResJSON = false;
            _this.netDataSucc = false;
            Laya.alertGlobalError = true;
            SoundManager.getInstance().bgm = SoundConst.BGM;
            GameConfig.init();
            SoundManager.getInstance().bgm = 'bgm';
            _this.checkPlatform();
            var onShow = function (obj) {
                console.log("onShow ->", obj);
                SoundManager.getInstance().playBgMusic();
                if (obj) {
                    console.log("QQ onShow obj = ", obj);
                }
                EventMgr.getInstance().sendEvent(GameEvent.GAME_RESUME);
            };
            var onHide = function () {
                SoundManager.getInstance().stopBgMusic();
                EventMgr.getInstance().sendEvent(GameEvent.GAME_PAUSE);
                console.log("QQ onHide");
            };
            window["starTime"] = (new Date()).getTime();
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
                GameData.getInstance().enterGameInfo = platform.getLaunchOptionsSync();
                MiniGameManager.instance.onShow(onShow);
                MiniGameManager.instance.onHide(onHide);
                MiniGameManager.instance.initMiniGame();
            }
            else {
                onShow(null);
            }
            if (DeviceUtil.isUCMiniGame()) {
                document.addEventListener("visibilitychange", function () {
                    if (!document.hidden) {
                        onShow(null);
                    }
                    else {
                        onHide();
                    }
                });
            }
            return _this;
        }
        Main.prototype.checkPlatform = function () {
            console.log("检验平台...");
            var self = this;
            if (window["loadingView"]) {
                window["loadingView"].loading(100);
            }
            if (window["loadingH5"]) {
                window["loadingH5"](100);
            }
            var resUrl = "./";
            var fileLocalList = [
                "resource/assets/loading/loading_bg.jpg",
                "resource/assets/loading/loading1.png",
                "resource/assets/loading/loading2.png",
                "resource/assets/loading/loading3.png",
                "resource/assets/loading/loading5.png",
                "resource/assets/loading/loading6.png",
                "resource/assets/loading/loading_circle.png"
            ];
            if (DeviceUtil.isQQMiniGame()) {
                Laya.timer.once(10000, this, function () {
                    console.log("加速回收...");
                    platform.triggerGC();
                });
                PlatformDY.url = PlatformDY.qqUrl;
                PlatformDY.miniProgramList = PlatformDY.qqMiniProgramList;
                Laya["QQMiniAdapter"].nativefiles = fileLocalList;
                Laya["QQMiniAdapter"].init();
                resUrl = GameData.getInstance().qqMiniGameResUrl;
                self.initDebug(resUrl + "configs/Debug.json?" + Math.random());
                self.loadPreLoadRes(resUrl);
            }
            else if (DeviceUtil.isWXMiniGame()) {
                Laya.timer.once(10000, this, function () {
                    console.log("加速回收...");
                    platform.triggerGC();
                });
                Laya.MiniAdpter.nativefiles = fileLocalList;
                Laya.MiniAdpter.init();
                resUrl = GameData.getInstance().wxMiniGameResUrl;
                self.initDebug(resUrl + "configs/Debug.json?" + Math.random());
                self.loadPreLoadRes(resUrl);
            }
            else if (DeviceUtil.isUCMiniGame()) {
                resUrl = GameData.getInstance().ucMiniGameResUrl;
                self.initDebug(resUrl + "configs/Debug.json?" + Math.random());
                self.loadPreLoadRes(resUrl);
            }
            else if (DeviceUtil.isNative()) {
                self.initDebug();
            }
            else {
                GameData.getInstance().userInfo.openId = DeviceUtil.getDeviceNo();
                GameData.getInstance().userInfo.nick = DeviceUtil.getDeviceNo();
                self.initDebug();
                self.loadPreLoadRes(resUrl);
            }
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isUCMiniGame()) {
                ResUtil.getIntance().defaultOriginUrl = resUrl;
                ResUtil.getIntance().addVersionPrefix(resUrl);
            }
        };
        Main.prototype.loadPreLoadRes = function (resUrl) {
            return __awaiter(this, void 0, void 0, function () {
                var self, url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("预加载资源...");
                            self = this;
                            GameMgr.getInstance().loadingView = new GameLoadingView();
                            SceneManager.instance.openSceneInstance(GameMgr.getInstance().loadingView);
                            if (!DeviceUtil.isNative()) return [3, 1];
                            return [3, 3];
                        case 1:
                            url = resUrl + 'configs/';
                            if (DeviceUtil.isWXMiniGame()) {
                                url = GameData.getInstance().MinigameResUrl;
                            }
                            if (DeviceUtil.isQQMiniGame()) {
                                url = GameData.getInstance().qqMinigameResUrl;
                            }
                            return [4, GameManager.instance.getMaxLevelConfig(resUrl + "resource/assets/map/configs.json?v=" + GameMgr.getInstance().randomTime)];
                        case 2:
                            _a.sent();
                            GameMgr.getInstance().loadingView.progress(0.05, 0);
                            Laya.loader.load(url + "infos.json?v=" + GameMgr.getInstance().randomTime, Laya.Handler.create(this, function (res) {
                                console.log("infos.json = ", res);
                                GameMgr.getInstance().loadingView.progress(0.1, 0);
                                GameData.getInstance().initConfig(res);
                                self.enableFileConfig(resUrl);
                            }));
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        Main.prototype.enableFileConfig = function (resUrl) {
            var _this = this;
            if (!GameData.getInstance().isOpen) {
                TipsManager.instance.showDefaultTips('游戏维护中');
                return;
            }
            Laya.AtlasInfoManager.enable(resUrl + "fileconfig.json?v=" + GameMgr.getInstance().randomTime, Laya.Handler.create(this, function () { return __awaiter(_this, void 0, void 0, function () {
                var loadresUrl, uc_userInfo, res, code, uc_openid, setInfo, auth, boxId, code, isAuthorize, userinfo, obj, scene, infos;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!DeviceUtil.isNative()) return [3, 3];
                            return [4, ResUtil.getIntance().loadThms(resUrl + "resource/default.thm.json")];
                        case 1:
                            _a.sent();
                            return [4, ResUtil.getIntance().loadRESConfig(resUrl + "resource/default.res.json")];
                        case 2:
                            _a.sent();
                            return [3, 4];
                        case 3:
                            loadresUrl = resUrl;
                            ResUtil.getIntance().loadThms(loadresUrl + "resource/default.thm.json?v=" + GameMgr.getInstance().randomTime).then(function () {
                                _this.loadThmOk = true;
                                _this.loadRes();
                            });
                            ResUtil.getIntance().loadRESConfig(loadresUrl + "resource/default.res.json?v=" + GameMgr.getInstance().randomTime).then(function () {
                                _this.loadResJSON = true;
                                _this.loadRes();
                            });
                            _a.label = 4;
                        case 4:
                            if (!DeviceUtil.isUCMiniGame()) return [3, 18];
                            console.log("uc platform---------");
                            uc_userInfo = void 0, res = void 0;
                            return [4, platform.uc_login()];
                        case 5:
                            code = _a.sent();
                            if (!code) return [3, 15];
                            return [4, UCInfoMgr.getInstance().getOpenIDInfo(code)];
                        case 6:
                            uc_openid = _a.sent();
                            res = { openid: uc_openid, session_key: uc_openid };
                            console.log("uc_openid = ", uc_openid);
                            GameMgr.getInstance().player = 'player_uc_' + uc_openid;
                            GameMgr.getInstance().powerTime = 'powerTime_uc_' + uc_openid;
                            GameMgr.getInstance().sign = 'sign_uc_' + uc_openid;
                            GameMgr.getInstance().sex = 'sexe_uc_' + uc_openid;
                            GameMgr.getInstance().invite = 'invite_uc_' + uc_openid;
                            return [4, platform.uc_getSetting()];
                        case 7:
                            setInfo = _a.sent();
                            if (!setInfo.userInfo) return [3, 9];
                            return [4, platform.uc_getUserInfo()];
                        case 8:
                            uc_userInfo = _a.sent();
                            return [3, 14];
                        case 9: return [4, platform.uc_authorize()];
                        case 10:
                            auth = _a.sent();
                            if (!auth) return [3, 12];
                            return [4, platform.uc_getUserInfo()];
                        case 11:
                            uc_userInfo = _a.sent();
                            return [3, 14];
                        case 12: return [4, platform.uc_getGuestInfo()];
                        case 13:
                            uc_userInfo = _a.sent();
                            res = { openid: uc_userInfo.guestid, session_key: uc_userInfo.guestid };
                            _a.label = 14;
                        case 14: return [3, 17];
                        case 15: return [4, platform.uc_getGuestInfo()];
                        case 16:
                            uc_userInfo = _a.sent();
                            res = { openid: uc_userInfo.guestid, session_key: uc_userInfo.guestid };
                            _a.label = 17;
                        case 17:
                            GameData.getInstance().userInfo.avatarUrl = uc_userInfo.avatar_url;
                            GameData.getInstance().userInfo.nick = uc_userInfo.nickname;
                            console.log("uc set userinfo = ", GameData.getInstance().userInfo);
                            GameData.getInstance().userInfo.openId = res.openid;
                            GameData.getInstance().userInfo.sessionKey = res.session_key;
                            this.netDataSucc = true;
                            this.loadRes();
                            return [2];
                        case 18:
                            if (DeviceUtil.isQQMiniGame()) {
                                boxId = GameData.getInstance().boxId;
                                if (boxId.length <= 0) {
                                    return [2];
                                }
                                PlatformDY.initBoxView(GameData.getInstance().boxId[0]);
                            }
                            if (!(DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame())) return [3, 23];
                            MiniGameManager.instance.showBannerAd();
                            return [4, platform.DYlogin()];
                        case 19:
                            code = _a.sent();
                            GameMgr.getInstance().loadingView.progress(0.15, 0);
                            return [4, platform.checkIsAuthorize()];
                        case 20:
                            isAuthorize = _a.sent();
                            GameMgr.getInstance().loadingView.progress(0.25, 0);
                            userinfo = null;
                            if (!isAuthorize) return [3, 22];
                            return [4, MiniGameManager.instance.initUserInfo()];
                        case 21:
                            userinfo = _a.sent();
                            _a.label = 22;
                        case 22:
                            if (userinfo == null) {
                                userinfo = { nickName: '', avatarUrl: '', gender: '' };
                            }
                            obj = GameData.getInstance().enterGameInfo;
                            scene = obj.query.scene == undefined ? null : obj.query.scene;
                            PlatformDY.getOpenidAndAuthorzia({
                                code: code, nickName: userinfo.nickName, avatarUrl: userinfo.avatarUrl, gender: userinfo.gender, scene: decodeURIComponent(scene)
                            }).then(function (dyUser) {
                                GameData.getInstance().userInfo.openId = dyUser.openid;
                                EventMgr.getInstance().sendEvent("openid_succ");
                            });
                            return [3, 24];
                        case 23:
                            infos = {
                                "gamelist": [
                                    {
                                        "id": "1",
                                        "url": "",
                                        "img": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1577696181548.png",
                                        "img1": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1577696192343.jpg",
                                        "title": "\u67f4\u706b\u4eba\u51b2\u523a",
                                        "appid": "wx8e5d249a39cdbb64",
                                        "click": "0"
                                    },
                                    {
                                        "id": "2",
                                        "url": "",
                                        "img": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1577697229077.png",
                                        "img1": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1577697200051.png",
                                        "title": "\u67f4\u706b\u4eba\u4e71\u6597",
                                        "appid": "wx99854f9305fcbab6",
                                        "click": "0"
                                    },
                                    {
                                        "id": "3",
                                        "url": "",
                                        "img": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1580781885217.png",
                                        "img1": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1580781895349.png",
                                        "title": "\u6363\u86cb\u98de\u8f66",
                                        "appid": "wxbb0b00982cbd1b4f",
                                        "click": "0"
                                    },
                                    {
                                        "id": "4",
                                        "url": "",
                                        "img": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1577696069176.png",
                                        "img1": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1576206928858.png",
                                        "title": "\u6781\u901f\u67f4\u706b\u4eba",
                                        "appid": "wxc739584afdc7288e",
                                        "click": "0"
                                    },
                                    {
                                        "id": "5",
                                        "url": "",
                                        "img": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1576206970747.jpg",
                                        "img1": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1576206979373.png",
                                        "title": "\u67f4\u706b\u4eba\u98de\u8f66",
                                        "appid": "wx456ada1706d364d5",
                                        "click": "0"
                                    },
                                    {
                                        "id": "6",
                                        "url": "",
                                        "img": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1577697102508.png",
                                        "img1": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1576207125259.png",
                                        "title": "\u738b\u8005\u5403\u9e21\u5927\u4f5c\u6218",
                                        "appid": "wx72b3922b76cf8ae2",
                                        "click": "0"
                                    },
                                    {
                                        "id": "7",
                                        "url": "",
                                        "img": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1576720766917.png",
                                        "img1": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1576207078503.png",
                                        "title": "\u6781\u901f\u81ea\u884c\u8f66\u9ad8\u624b",
                                        "appid": "wx3bccea145a3d578d",
                                        "click": "0"
                                    },
                                    {
                                        "id": "8",
                                        "url": "",
                                        "img": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1580782009509.png",
                                        "img1": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1580782014268.png",
                                        "title": "\u5c0f\u54e5\u54e5\u6551\u6211",
                                        "appid": "wxcc5f1dba1f408c14",
                                        "click": "0"
                                    },
                                    {
                                        "id": "9",
                                        "url": "",
                                        "img": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1574930161877.png",
                                        "img1": "",
                                        "title": "\u6551\u6551\u706b\u67f4\u4eba",
                                        "appid": "wxdc9df67ccf148dfd",
                                        "click": "0"
                                    },
                                    {
                                        "id": "10",
                                        "url": "",
                                        "img": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1580782256659.jpg",
                                        "img1": "https:\/\/fximg.xyxapi.com\/uploads\/img\/1580782260203.jpg",
                                        "title": "\u63a8\u7403\u5c0f\u738b\u5b50",
                                        "appid": "wxab25c21f394059f7",
                                        "click": "0"
                                    }
                                ],
                                "banner": []
                            };
                            PlatformDY.bannerInfos = infos.banner;
                            PlatformDY.gameListInfos = infos.gamelist;
                            _a.label = 24;
                        case 24:
                            this.netDataSucc = true;
                            this.loadRes();
                            return [2];
                    }
                });
            }); }));
        };
        Main.prototype.loadRes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var resArr, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.loadThmOk || !this.loadResJSON || !this.netDataSucc) {
                                return [2];
                            }
                            GameMgr.getInstance().registerBufferLoading();
                            resArr = ["preload", "home"];
                            return [4, GameMgr.getInstance().getKVJson(GameMgr.getInstance().player)];
                        case 1:
                            data = _a.sent();
                            GameMgr.getInstance().loadingView.progress(0.35, 0);
                            if (data != null) {
                                if (data.power != null && data.power != '' || data.power == 0) {
                                    GameData.getInstance().playerData.power = parseInt(data.power);
                                }
                                if (data.inviteReward != null && data.inviteReward != '' || data.inviteReward == 0) {
                                    GameData.getInstance().playerData.inviteReward = parseInt(data.inviteReward);
                                }
                                if (data.currLevel != null && data.currLevel != '' || data.currLevel == 0) {
                                    GameData.getInstance().playerData.currLevel = parseInt(data.currLevel);
                                }
                            }
                            GameManager.instance.currLevel = GameData.getInstance().playerData.currLevel;
                            this.enterHome(resArr);
                            return [2];
                    }
                });
            });
        };
        Main.prototype.enterHome = function (resArr) {
            var _this = this;
            ResUtil.getIntance().loadGroups(resArr, function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log("res load completed!!!");
                    ConfigManager.getInstance().initConfigs();
                    SceneManager.instance.openGameScene(HomeScene);
                    GameManager.instance.showPowerCommon();
                    GameMgr.getInstance().loadingView.remove();
                    return [2];
                });
            }); }, function (index, len) {
                GameMgr.getInstance().loadingView.progress((index / len) * (1 - 0.35), 0.35);
            });
        };
        return Main;
    }(BaseContent));
    new Main();

}());
