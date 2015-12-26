/**
 * Created by huangjianhua on 2015/12/24.
 */

window.DEFAULTCONFIG = {
    defalutView: 'index',
    childRoutes: {
        list:   require('../scripts/List' ),
        detail: require('../scripts/Detail' ),
        index:  require('../scripts/Index' )
    }
}

window.addEventListener("popstate", function() {
    var currentState = history.state;
    /*
     * 该干嘛干嘛
     */
    DF.loadView((currentState && currentState.viewPath) || DEFAULTCONFIG.defalutView, false);

    console.log('currentState ', currentState);
});

window.DF = {
    //所有view的引用都保存下来了
    VIEWREF:{},
    //当前view
    curView:'',
    //动态引入view
    loadView: function(viewPath, pushState = true) {

        var viewPath = viewPath.replace('.html', '');

        require.ensure([], (require) => {

            //加载对应view
            let ViewComponent = DEFAULTCONFIG.childRoutes[viewPath];


            //获取组件
            ViewComponent = ViewComponent.getComponent(viewPath, _loadView)


            //引入组件的cb 函数
            function _loadView(viewPath, ViewComponent) {
                //判断view 是否存在
                var $viewWrap = document.querySelector('#viewport');
                var $view = document.querySelector('#' + viewPath);
                var $viewports = document.querySelectorAll('.viewport');
                //隐藏其它view
                for(let i=0;i<$viewports.length;i++) {
                    $viewports[i].style.display = 'none';
                }

                if($view) {
                    $view.style.display = 'block';

                    //如果有尚一个view，执行上一个view的onHide
                    DF.curView &&  DF.VIEWREF[DF.curView].onHide();
                    //执行view的onShow方法
                    DF.VIEWREF[viewPath] && DF.VIEWREF[viewPath].onShow();


                } else {  //否则，创建1个view的节点
                    let $createDiv = document.createElement("div");
                    $createDiv.id = viewPath;
                    $createDiv.className = 'viewport';
                    $viewWrap.appendChild($createDiv);

                    //渲染 react view
                    let $wrap = document.querySelector('#' + viewPath);
                    var $viewComponent = ReactDOM.render(
                        <ViewComponent />,
                        $wrap
                    );

                    //如果有尚一个view，执行上一个view的onHide
                    DF.curView &&  DF.VIEWREF[DF.curView].onHide();
                    //执行当前view的onShow
                    $viewComponent.onShow();

                    //每创建一个view 把引用存起来
                    DF.VIEWREF[viewPath] = $viewComponent;

                    //

                    console.log('show pushState $viewComponent', pushState, $viewComponent)

                }

                //设置当前view
                DF.curView = viewPath;

                //渲染成功
                if(pushState) {
                    history.pushState({
                        'viewPath': viewPath,
                        'xm': '123'
                    }, "页面标题", viewPath+'.html');
                }
            }


            console.log('view 222 ', ViewComponent);




        });

    },
    //加载页面
    goTo: function(viewPath, opt={}) {
        //打开方式, 1单页， 2 location.href
        if(opt.targetModel) {
            switch (opt.targetModel) {
                case 1:
                    break;
                case 2:
                    if(viewPath.indexOf('http://') > -1) {
                        window.location.href = viewPath;
                    } else {
                        window.location.href = viewPath;
                        //window.location.href = DF.baseUrl + viewPath;
                    }
                    break;
                default:
                    break;
            }
        }

        //设置title
        if(opt.title) {
            DF.setTitle(opt.title);
        }
        //show loading
        if(opt.showLoading) {
            DF.showLoading();
        }

        DF.loadView(viewPath);
    },

    back: function() {
        history.back();
    }

}

require('../styles/demo.css')



//默认view
var pathname = location.pathname.split('/').pop();
if(pathname.indexOf('.html')>-1) {
    DEFAULTCONFIG.defalutView = pathname;
}

//加载默认view
DF.loadView(DEFAULTCONFIG.defalutView, false);

