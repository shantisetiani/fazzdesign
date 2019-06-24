import React, { Component } from 'react'

class Usage extends Component {
    render() {
        return (
            <div style={{ marginTop: '40px' }}>
                <p>
                    Bottom Sheet are components used to inform users about the additional content, such as action in a page or other information.
                </p>
                <h2 className="article__title-menu" style={{ marginTop: '20px', marginBottom: '17px' }}>Bottom Sheet - Close Header</h2>
                <p>
                    This bottom sheet has an 'X' icon and will close when the icon is tapped.
                </p>
                <img src="/static/images/bottom-sheet-usage-1@2x.png" style={{ marginLeft: '20px' }} />
                <h2 className="article__title-menu" style={{ marginTop: '40px', marginBottom: '17px' }}>Bottom Sheet - Swipe Header</h2>
                <p>
                    This bottom sheet has a slider, which if moved up will display the details of content.
                </p>
                <img src="/static/images/bottom-sheet-usage-2@2x.png" style={{ marginLeft: '20px' }} />
            </div>
        )
    }
}

export default Usage