import React, { Component } from 'react'

class Usage extends Component {
    render() {
        return (
            <div style={{ marginTop: '40px' }}>
                <p>
                    Tabs are elements used to organize a group of content that has similar contexts. They are also used to navigate information without changing a screen.
                </p>
                <div style={{ margin: '20px' }}>
                    <strong>Roboto</strong><br />
                    Bold (Caps lock)<br />
                    16
                </div>
                <h2 className="article__tittle-menu" style={{ marginBottom: '17px' }}>Tab in Navigation</h2>
                <p>
                    Tabs are elements used to organize a group of content that has similar contexts. They are also used to navigate information without changing a screen.
                </p>
                <div style={{ marginLeft: '20px' }}>
                    <p>
                        * Active bar #FFFFFF white with bar/line<br />
                        * Inactive bar #FFFFFF alpha 50 and no bar/line
                    </p>
                    <img src="/static/images/tab-usage-1.png" />
                </div>
                <h2 className="article__tittle-menu" style={{ marginTop: '40px', marginBottom: '17px' }}>General Tabs</h2>
                <p>
                    General tab is a tab that is outside navigation bar and organizes the content inside.
                </p>
                <div style={{ marginLeft: '20px' }}>
                    <p>
                        * Active bar #3B8EF3 blue and using bar/line<br />
                        * Inactive bar #E0E0E0 Grey, no bar/line
                    </p>
                    <p>Tabs under the navigation, just using the text</p>
                    <img src="/static/images/tab-usage-2.png" />
                </div>
            </div>
        )
    }
}

export default Usage