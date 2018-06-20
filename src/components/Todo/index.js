import React, {Component} from 'react'
import './index.less'
import { connect } from 'react-redux'
import { addTodo,toggleTodo } from './todoReducer'
import { setFilter } from './todoFilterReducer'

class Todo extends Component{
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            isDisabled: true
        }
    }
    handleInputChange(e) {
        this.setState({
            isDisabled: !e.target.value ? true : '',
            value: e.target.value
        })
    }
    add() {
        let value=this.input.value.trim()
        let { dispatch } = this.props
        dispatch(addTodo(value))
        this.setState({
            value:'',
            isDisabled:true
        })
    }
    handleClick(id){
        let { dispatch } = this.props
        dispatch(toggleTodo(id))
    }
    handleBtnClick(filter){
        let { dispatch} = this.props
        dispatch(setFilter(filter))
    }
        
    render(){
         let {todos,filter}=this.props
        return(
            <div className="p_todo">
                <div className="inputBox">
                    <input type="text" className="input" onInput={this.handleInputChange.bind(this)} ref={(input) => this.input = input} value={this.state.value}/>
                    <input type="button" value="添加todo" className="btn" onClick={this.add.bind(this)} disabled={this.state.isDisabled}/>
                </div>
                <ul className="list">
                {
                    todos.map((item)=>{
                        return <li className={item.isSelected?'active':''} key={item.id}><span className="select" onClick={this.handleClick.bind(this,item.id)}></span><span>{item.text}</span></li>
                    })
                }
                </ul>
                <div className="btnBox">
                    <input type="button" value="全部显示" onClick={this.handleBtnClick.bind(this,'SHOW_ALL')} className={filter==='SHOW_ALL'?'active':''}/>
                    <input type="button" value="已完成" onClick={this.handleBtnClick.bind(this,'SHOW_FINISHED')} className={filter==='SHOW_FINISHED'?'active':''}/>
                    <input type="button" value="未完成" onClick={this.handleBtnClick.bind(this,'SHOW_UNFINISHED')} className={filter==='SHOW_UNFINISHED'?'active':''}/>
                </div>
            </div>
        )
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_FINISHED':
            return todos.filter(t => t.isSelected)
        case 'SHOW_UNFINISHED':
            return todos.filter(t => !t.isSelected)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

const mapStateToProps = (state) => {
    let {todoReducer,todoFilterReducer} = state
    return {
        todos: getVisibleTodos(todoReducer.todos, todoFilterReducer),
        filter: todoFilterReducer
    }
}
export default connect(mapStateToProps)(Todo)








