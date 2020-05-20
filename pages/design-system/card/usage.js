import React, { Component } from 'react'

class Usage extends Component {
    render() {
        return (
            <div className="atom-container">
                <p>
                    Cards are containers used to inform an action that contains high emphasis. They are formed by various components and have a high Y dimension. They also have a shadow to make the user more aware.<br/>
                    Card and placard have similar function but have different action. Card have one click area for one action, and placard have multi click area and more action but still have on one subject.
                </p>
                <h2 className="article__title-menu">Card</h2>
                <img src="/static/images/card/usage/card.png" className="article__img no-margin-mobile indent-20" />
                <h2 className="article__title-menu">Placard</h2>
                <img src="/static/images/card/usage/placard.png" className="article__img no-margin-mobile indent-20" />
            </div>
        )
    }
}

export default Usage