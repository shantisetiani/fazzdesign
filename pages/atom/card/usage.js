import React, { Component } from 'react'

class Usage extends Component {
    render() {
        return (
            <div className="atom-container">
                <p>
                    Cards are containers used to inform an action that contains high emphasis. They are formed by various components and have a high Y dimension. They also have a shadow to make the user more aware. We divide card into 4 models: general card, order card, user card, and dialog card.
                </p>
                <h2 className="article__title-menu">General Card</h2>
                <img src="/static/images/card/usage/usage-general-card@2x.png" className="article__img no-margin-mobile indent-20" />
                <h2 className="article__title-menu">User Card</h2>
                <img src="/static/images/card/usage/usage-user-card@2x.png" className="article__img no-margin-mobile indent-20" />
                <h2 className="article__title-menu">Callouts</h2>
                <img src="/static/images/card/usage/usage-callouts@2x.png" className="article__img no-margin-mobile indent-20" />
            </div>
        )
    }
}

export default Usage