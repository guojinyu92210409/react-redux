import React, {Component} from 'react'

class HomeApp extends Component {
    render() {
        return <div> {this.props.children} </div>
    }
}
export default HomeApp