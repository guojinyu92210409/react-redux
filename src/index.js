import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//路由文件
import Router from '@/router'

//redux数据
import store from '@/store'

//默认样式
import '@/public/css/base.less'

ReactDOM.render(
    <Provider store = {store} >
        <Router />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
