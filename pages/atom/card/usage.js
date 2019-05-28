import React, { Component } from 'react'

class Usage extends Component {
    render() {
        return (
            <div style={{ marginTop: '40px' }}>
                <p>
                    Cards are containers used to inform an action that contains high emphasis. They are formed by various components and have a high Y dimension. They also have a shadow to make the user more aware. We divide card into 4 models: general card, order card, user card, and dialog card.
                </p>
                <h2 className="article__tittle-menu" style={{ marginTop: '20px', marginBottom: '20px' }}>General Card</h2>
                <img src="/static/images/bottom-sheet-usage-2.png" style={{ marginLeft: '20px' }} />
                <h2 className="article__tittle-menu" style={{ marginTop: '40px', marginBottom: '20px' }}>User Card</h2>
                <img src="/static/images/bottom-sheet-usage-2.png" style={{ marginLeft: '20px' }} />
                <h2 className="article__tittle-menu" style={{ marginTop: '40px', marginBottom: '20px' }}>Callouts</h2>
                <img src="/static/images/bottom-sheet-usage-2.png" style={{ marginLeft: '20px' }} />
            </div>
        )
    }
}

export default Usage