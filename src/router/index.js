import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'


import HomeApp from '@/containers/HomeApp'
import Home from '@/containers/Home'
import My from '@/containers/My'
import About from '@/containers/About'

export default function(){
    return <Router history={browserHistory}>
            <Route path='/' component={HomeApp}>
                <IndexRoute component={Home}/>
                <Route path='about' component={About}/>
                <Route path='my' component={My}/>
            </Route>
    </Router>
}