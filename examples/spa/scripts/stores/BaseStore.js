/**
 * Created by huangjianhua on 2015/10/28.
 */
var S = {};

S.CHECKIN_PSG_REQUEST = function(options) {
    options.key =  'CHECKIN_PSG_REQUEST';
    options.lifeTime =  '1D';

    return LizardLite.Store(options);
};

S.CHECKIN_MAP_REQUEST = function(options) {
    options.key =  'CHECKIN_MAP_REQUEST';
    options.lifeTime =  '1D';
    //保存选坐信息, 下标， setno
    options.setSetNo = function(item, setno) {
        var curObj = this.get();
        if(curObj) {
            curObj.ciplst[item]['setno'] = setno;
            this.set(curObj);
        }

    }

    return LizardLite.Store(options);
};

//机场结果
S.CHCKIN_PORT_RESULT = function(options) {
    options.key =  'CHECKIN_PORT_RESULT';
    options.lifeTime =  '1D';

    return LizardLite.Store(options);
};

export default S;