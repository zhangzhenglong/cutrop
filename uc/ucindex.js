/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";
window["ucMiniGame"] = window["checkPageFocus"] = true;
//-----libs-begin-----
loadLib("libs/laya.core.js")
loadLib("libs/laya.ani.js")
loadLib("libs/laya.ui.js")
loadLib("libs/laya.physics.js")
// loadLib("libs/promise.min.js")
//-----libs-end-------
loadLib("uc_platform.js");
loadLib("js/bundle.js");
