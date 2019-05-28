import React, { Component } from 'react'

class Usage extends Component {
    render() {
        return (
            <div style={{ marginTop: '40px' }}>
                <p>
                    Progress Stepper and Progress Bar are components used to inform users about the status of ongoing processes. Some examples of progress bars are in onboarding and user registration
                </p>
                <p style={{ marginTop: '46px', marginLeft: '40px' }}>
                    * Active bar #18BA62 Green<br />
                    * Inactive bar #E0E0E0 Grey
                </p>
                <h2 className="article__tittle-menu" style={{ marginTop: '40px', marginBottom: '20px' }}>Progress Stepper</h2>
                <p>
                    Progress Stepper placed at the top of the page and used as an indicator in a task.
                </p>
                <img src="/static/images/progress-stepper@2x.png" style={{ marginLeft: '20px' }} />
                <h2 className="article__tittle-menu" style={{ marginTop: '62px', marginBottom: '20px' }}>Progress Bar</h2>
                <p>
                    Progress bar placed at bottom of the page and used as an indicator of an activity that will show a value. 
                </p>
                <img src="/static/images/progress-bar@2x.png" style={{ marginLeft: '20px' }} />
            </div>
        )
    }
}

export default Usage