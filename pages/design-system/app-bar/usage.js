import React, { Component } from 'react'

class Usage extends Component {
    render() {
        return (
            <div className="atom-container">
                <p>
                    App bars are elements used to display information about a screen. They are providing content and actions related to the current screen, such as navigation and instruction. The App bar has a length of 360 px and a width of 80px.
                </p>
                <h2 className="article__title-menu">Main App Bar</h2>
                <p>
                    Main top navigation is on front page with the Payfazz logo and an action (which consists of text and icon).
                </p>
                <img src="/static/images/app-bar/usage/big-tab-in-appbar-container@2x.png" className="article__img no-margin-mobile indent-20" />
                <h2 className="article__title-menu">Second App Bar</h2>
                <p>
                    Secondary top navigation is used to connect pages and contain icons and actions.
                </p>
                <img src="/static/images/app-bar/usage/big-general-tab-container@2x.png" className="article__img no-margin-mobile indent-20" />
            </div>
        )
    }
}

export default Usage