import React, { Component } from 'react'

class Usage extends Component {
    render() {
        return (
            <div className="atom-container">
                <p>
                    Labels are elements used to inform the user about the recent condition of the flow. We divide the label into two models: header and status.
                </p>
                <h2 className="article__title-menu">Label - Header</h2>
                <p>Label header is used to provide information that represents the content on screen.</p>
                <img src="/static/images/label/usage/usage-label-header@2x.png" className="article__img no-margin-mobile indent-20" />
                <h2 className="article__title-menu">Label - Status (chip)</h2>
                <p>Label status is used to represent processes in a flow.</p>
                <img src="/static/images/label/usage/usage-label-status@2x.png" className="article__img no-margin-mobile indent-20" />
            </div>
        )
    }
}

export default Usage