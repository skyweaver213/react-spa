/**
 * Created by huangjianhua on 2015/12/24.
 */


module.exports = {
    getComponent(viewPath, cb) {
        require.ensure([], (require) => {
            cb(viewPath, require('./components/list'))
        });
    }
}