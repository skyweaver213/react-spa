/**
 * Created by huangjianhua on 2015/12/22.
 */


import {PropTypes, Component} from 'react';

//import BaseView from '../../../components/BaseView';

class SearchView extends Component {
    //构造函数
    constructor (props) {
        super(props);

        //console.log('constructor', props);
    }

    componentWillMount(s) {
        console.log('search view componetn will mount ', s)
    }

    componentDidMount(s) {
        console.log('ssssss component did mount', s)
    }

    self() {
        console.log('self ');
    }


    goToAction() {
        DF.goTo('list.html');
    }

    backAction() {
        DF.back()
    }

    onShow() {
        console.log('i am onShow index');
    }

    onHide() {
        console.log('i am onHide index');
    }

    render() {
        return <div >
            <div onClick={this.goToAction.bind(this)} >goTo</div>
            <div onClick={this.backAction.bind(this)}>back</div>
            <div onClick={this.self.bind(this)}>fun</div>
        </div>
    }

}

SearchView.defaultProps = {
    viewName: 'search-view'
}

module.exports = SearchView;

//ReactDOM.render(<SearchView me="xmzi" />, document.querySelector('#search-view') );