import React, {Component} from 'react'
import FooterFixed from '@/components/FooterFixed'
import Questions from '@/components/Questions'

class About extends Component{
    render(){
        return(
            <div className="p_about">
                <h2> About </h2>
                <Questions/>
                <FooterFixed/>
            </div>
        )
    }
}

export default About