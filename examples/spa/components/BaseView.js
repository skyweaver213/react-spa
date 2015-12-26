/**
 * Created by huangjianhua on 2015/12/23.
 */



var BaseView = React.createClass({
    getInitialState: function() {
        return {}
    },
    componentWillMount: function() {
        console.log('component will ');
    },
    componentDidMount: function() {
        console.log('component did mount')
    },
    render: function() {
        return <div>render</div>
    },



    goTo: function(viewPath) {
        let props = this.props;


        //动态引入view
        loadView(viewPath);

        this.onHide();


    },
    back: function() {
        history.back();
    },




})

export default BaseView;