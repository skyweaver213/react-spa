/**
 * Created by huangjianhua on 2015/12/22.
 */

import {PropTypes, Component} from 'react';

module.exports = class ListView extends Component {
    //构造函数
    constructor (props) {
        super(props);

        console.log('constructor', props);
    }

    componentWillMount(s) {
        console.log('search view componetn will mount ', s)
    }

    componentDidMount(s) {
        console.log('ssssss component did mount', s)
    }

    goToAction() {
        DF.goTo('detail.html');
    }

    backAction() {
        DF.back()
    }

    onShow() {
        console.log('i am onShow list');
    }

    onHide() {
        console.log('i am onHide list');
    }

    render() {
        return <div >
            <div onClick={this.goToAction.bind(this)}>listView 11111  1111 111</div>
            <div onClick={this.backAction.bind(this)}>back Action </div>
        </div>
    }

}

//export default ListView;