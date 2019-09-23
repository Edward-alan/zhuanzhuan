import React, { Component } from 'react'
import RouterIndex from '../../router/index'


class HomePage extends Component {
    render() {
        const { routes } = this.props;
        return <div>
            首页
           <RouterIndex routes={routes} history={this.props.history} />
        </div>
    }
}

export default HomePage;