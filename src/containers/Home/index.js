import React, {Component} from 'react'
import HomeFooter from './HomeFooter'
import FooterFixed from '@/components/FooterFixed'
import HomeContent from './HomeContent'
import HomeHeader from './HomeHeader'

class Home extends Component{
    render(){
        return(
            <div className="p_home">
                <HomeHeader/>
                <HomeContent/>
                <HomeFooter/>
                <FooterFixed/>
            </div>
        )
    }
}

export default Home