import React, { Component } from 'react'

class Usage extends Component {
    render() {
        return (
            <div style={{ marginTop: '40px' }}>
                <p>
                    Snackbars are elements used to inform users about a process that has performed or will perform. They have a temporary characteristic and shouldn’t interrupt the user experience. We divide them into 2 states: high priority with button and low priority without a button.
                </p>
                <img src="/static/images/snackbar-button-text@2x.png" style={{ margin: '20px' }} />
            </div>
        )
    }
}

export default Usage