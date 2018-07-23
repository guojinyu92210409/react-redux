import React, {Component} from 'react'
import './index.less'
import { connect } from 'react-redux'
import { toggleClick } from './questionsReducer'

class Questions extends Component{
    constructor(props) {
        super(props)
    }
    handleClick(questionIndex,answerIndex,isSingle){
        let { dispatch } = this.props
        dispatch(toggleClick(questionIndex, answerIndex, isSingle))
    }
    render(){
        let {datas}=this.props;
        return(
            <div className="p_about">
                <h2 className="title">questions</h2>
                {
                    datas.map((item,i)=>{
                        return  <div className="item" key={item.id}>
                        <span className="question">{item.index+1}.{item.question}({item.isSingle?'单选':'多选'})</span>
                        <ul className="list">
                            {
                                item.options.map((obj,j)=>{
                                    return  <li className={obj.isSelected?'active':''} key={obj.id}>
                                        <span className="select" onClick={this.handleClick.bind(this,i,j,item.isSingle)}></span>
                                        <span className="content">{obj.label}.{obj.content}</span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    })
                }
               
            </div>
        )
    }
}

const  mapStateToProps=(state)=>{
  let {questionsReducer} = state
  return questionsReducer
}
export default connect(mapStateToProps)(Questions)
