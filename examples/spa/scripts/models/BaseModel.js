/**
 * Created by huangjianhua on 2015/10/28.
 */

var BaseModel = function(options) {

    if(!options.buildurl) {
        options.buildurl = function() {
            //可写绝对路径, 其他不一样的地址可以复写this.buildurl
            if(/http\:/.test(this.url)) {
                return this.url;
            } else {
                return FHYBRID.restfullApi + this.url;
            }

        }
    }

    // set hybrid head store
    var headStore = LizardLite.HeadStore.get();
    if (headStore.cver != '610' || headStore.syscode == '09') {
        LizardLite.HeadStore.setAttr('cver', '610');
        var ua = navigator.userAgent;
        if(/android|linux/i.test(ua) ) {
            LizardLite.HeadStore.setAttr('syscode', '32');
        } else if(/iphone|ipad|ipod/i.test(ua) ) {
            LizardLite.HeadStore.setAttr('syscode', '12');
        }
    }

    return LizardLite.Utils.extend(true,new LizardLite.Model({url:'test'}), options);

};

export default BaseModel;