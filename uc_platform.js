// 视频组件
var videoAd;

class UCgamePlatform {
  ///uc相关内容---------------------------------------------------------------
  /**
   * uc 是否登录
   */
  uc_isLogin() {
    return new Promise((resolve) => {
      uc.isLogin({
        success: function (data) {
          console.log(data);
          /*
            {
              isLogin: 'true',       // 是否登录
            }
          */
          resolve(data.isLogin);
        },
        fail: function (data) {
          console.error(data);
          /*
            {
            }
          */
          resolve(false);
        },
      });
    });
  }

  /**
   * uc 登录
   */
  uc_login() {
    return new Promise((resolve) => {
      uc.login({
        success: function (res) {
          console.log('登录成功', res.code);
          /*
            {
              code: '', // 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 api，使用 code 换取 session_key 等信息
            }
          */
          resolve(res.code);
        },
        fail: function (res) {
          console.log('登录失败', res);
          resolve(null);
        },
      });
    });
  }

  /**
   * uc 获取用户的当前设置，返回值包含用户当前的授权状态。
   */
  uc_getSetting() {
    return new Promise((resolve) => {
      uc.getSetting({
        success: function (data) {
          console.log(data);
          /*
            {
              userInfo: ture,       // 允许获取用户信息
              userLocation: false,  // 未授权获取用户位置信息
              ...
            }
          */
          resolve(data);
        },
        fail: function (data) {
          console.error(data);
          /*
            {
            }
          */
          resolve(null);
        },
      });
    });
  }

  /**
   * uc 申请权限，请求参数是权限名称
   */
  uc_authorize() {
    return new Promise((resolve) => {
      uc.authorize({
        scope: 'userInfo',
        success: function (data) {
          console.log(data);
          /*
            {
              userInfo: ture,       // 允许获取用户信息   
            }
          */
          resolve(true);
        },
        fail: function (data) {
          console.error("authorize err ", data);
          /*
            {
            }
          */
          resolve(false);
        },
      });
    });
  }

  /**
   * uc 获取用户信息
   */
  uc_getUserInfo() {
    return new Promise((resolve) => {
      // 必须是在用户已经授权的情况下调用
      uc.getUserInfo({
        success: function (data) {
          console.log("getuserinfo res ", data);
          /*
            {
              nickname: '',       // 用户昵称
              avatar_url: '',     // 用户头像url 
            }
          */
          resolve(data);
        },
        fail: function (data) {
          console.error("getuserinfo err ", data);
          /*
            {
            }
          */
          resolve(null);
        },
      });
    });
  }

  /**
   * uc 获取游客用户信息
   */
  uc_getGuestInfo() {
    return new Promise((resolve) => {
      uc.getGuestInfo({
        success: function (data) {
          console.log(data);
          /*
            {
              nickname: '',       // 用户昵称
              avatar_url: '',     // 用户头像url 
              guestid: '',        // 当前用户的游客模式下设备唯一标识
            }
          */
          resolve(data);
        },
        fail: function (data) {
          console.error(data);
          /*
            {
            }
          */
          resolve(null);
        },
      });
    });
  }

  /**
   * uc 异步获取设备信息
   */
  uc_getSystemInfoSync() {
    return uc.getSystemInfoSync();
  }

  /**
   * uc 创建激励视频
   */
  uc_createRewardVideoAd() {
    return uc.createRewardVideoAd();
  }

  /**
   * 创建视频播放  兼容以前的逻辑
   */
  createRewardedVideoAd(id, onClose, onError) {
    console.log("id ->", id);
    if (!videoAd) {
      videoAd = uc.createRewardVideoAd();

      videoAd.onLoad(function (res) {
        console.log('videoAd onLoad', res);
      });
    }
    let onCloseCall = (res) => {
      console.log('videoAd onClose', res);
      if (onClose) {
        onClose(res);
      }
      videoAd.offClose(onCloseCall);
    };
    videoAd.onClose(onCloseCall);

    let onErrorCall = (res) => {
      console.log('videoAd onError', res);
      if (onError) {
        onError(res);
      }
      videoAd.offError(onErrorCall);
    };
    videoAd.onError(onErrorCall);

    videoAd.load().then(() => {
      console.log('激励视频加载成功');
      videoAd.show().then(() => {
        console.log('激励视频 广告显示成功');
      }).catch(err => {
        console.log('激励视频 广告显示失败');
        if (onError) {
          onError(err);
        }
      })
    }).catch(err => {
      console.log('激励视频加载失败');
      if (onError) {
        onError(err);
      }
    })
  }

  /**
   * 调此接口主动发起转发 / 分享操作
   * @param obj 
   */
  uc_shareAppMessage(obj) {
    console.log("uc share obj ", obj);
    uc.shareAppMessage(obj);
  }
}


window.platform = new UCgamePlatform();