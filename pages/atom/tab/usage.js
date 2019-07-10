import React, { Component } from 'react'

class Usage extends Component {
    render() {
        return (
            <div className="atom-container">
                <p>
                    Tabs are elements used to organize a group of content that has similar contexts. They are also used to navigate information without changing a screen.
                </p>
                <div style={{ margin: '20px' }}>
                    <strong>Roboto</strong><br />
                    Bold (Caps lock)<br />
                    16
                </div>
                <h2 className="article__title-menu">Tab in Navigation</h2>
                <p>
                    Tabs are elements used to organize a group of content that has similar contexts. They are also used to navigate information without changing a screen.
                </p>
                <div className="indent-20">
                    <p>
                        * Active bar #FFFFFF white with bar/line<br />
                        * Inactive bar #FFFFFF alpha 50 and no bar/line
                    </p>
                    <img src="/static/images/tab/usage/big-tab-in-appbar@2x.png" className="article__img" />
                </div>
                <h2 className="article__title-menu">General Tabs</h2>
                <p>
                    General tab is a tab that is outside navigation bar and organizes the content inside.
                </p>
                <div className="indent-20">
                    <p>
                        * Active bar #3B8EF3 blue and using bar/line<br />
                        * Inactive bar #E0E0E0 Grey, no bar/line
                    </p>
                    <p>Tabs under the navigation, just using the text</p>
                    <img src="/static/images/tab/usage/big-general-tab@2x.png" className="article__img" />
                </div>
            </div>
        )
    }
}

export default Usage