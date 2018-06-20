import React,{Component} from 'react'
import { Link, browserHistory} from 'react-router'
import './index.less'

class FooterFixed extends Component{
    renderCon(){
        let currentPath = browserHistory.getCurrentLocation().pathname
        let homePath = '/',
            aboutPath = '/About',
            myPath = '/My'
        return(
            <ul>
                <li className={currentPath===homePath?'active':''}><Link to='/'>Home</Link></li>
                <li className={currentPath===aboutPath?'active':''}><Link to='/About'>About</Link></li>
                <li className={currentPath===myPath?'active':''}><Link to='/My'>My</Link></li>
            </ul>
        )
    }
    render(){
        return(
            <div className='p_footer_fixed'>
                {this.renderCon()}
            </div>
        )
    }
}

export default FooterFixed