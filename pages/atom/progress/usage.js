import React, { Component } from 'react'

class Usage extends Component {
    render() {
        return (
            <div className="atom-container">
                <p>
                    Progress Stepper and Progress Bar are components used to inform users about the status of ongoing processes. Some examples of progress bars are in onboarding and user registration
                </p>
                <p className="indent-40 margin-sm-mobile">
                    * Active bar #18BA62 Green<br />
                    * Inactive bar #E0E0E0 Grey
                </p>
                <h2 className="article__title-menu">Progress Stepper</h2>
                <p>
                    Progress Stepper placed at the top of the page and used as an indicator in a task.
                </p>
                <img src="/static/images/progress/usage/big-progress-stepper@2x.png" className="article__img no-margin-mobile indent-20" />
                <h2 className="article__title-menu">Progress Bar</h2>
                <p>
                    Progress bar placed at bottom of the page and used as an indicator of an activity that will show a value. 
                </p>
                <img src="/static/images/progress/usage/big-progress-bar@2x.png" className="article__img no-margin-mobile indent-20" />
            </div>
        )
    }
}

export default Usage