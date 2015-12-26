/**
 * Created by huangjianhua on 2015/12/22.
 */

import {PropTypes, Component} from 'react';

module.exports = class DetailView extends Component {
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
        DF.goTo('list.html');

    }

    backAction() {
        DF.back()
    }

    onShow() {
        console.log('i am onShow detail');
    }

    onHide() {
        console.log('i am onHide detail');
    }

    render() {
        return <div >
             <div>DetailView 11111  1111 111</div>
             <div onClick={this.backAction.bind(this)}>back Action </div>
        </div>
    }

}

//export default ListView;