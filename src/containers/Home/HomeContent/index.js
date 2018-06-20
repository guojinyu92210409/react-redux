import React, {Component} from 'react'
import './index.less'
import Todo from '@/components/Todo'

class HomeContent extends Component{
    render(){
        return(
            <div className="home_content">
                <h2>This is a todo list</h2>
                <Todo/>
            </div>
        )
    }
}

export default HomeContent