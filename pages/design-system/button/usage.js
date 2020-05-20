import React, { Component } from 'react'

class Usage extends Component {
    render() {
        return (
            <div className="atom-container">
                <p>
                    Button is an element that used as a symbol for user interaction. Button is also used to initiate an action.
                </p>
                <h2 className="article__title-menu">Filled Button</h2>
                <p>
                    Filled buttons are used when the user meets an action that contains high priority. We use three types of a filled button: filled button with white panel container, floating filled button and custom filled button.
                </p>
                <div className="indent-20">
                    <h3 className="atom-sub-title"><strong>Filled Button White Panel</strong></h3>
                    <p>
                        Filled button with white panel dipakai untuk kebutuhan high priority dan untuk button sendiri tidak memiliki shadow, dan harus fixed position.
                    </p>
                    <div className="fazz-box-transparent button-usage-box--outer text-center">
                        <div className="button-box--white">	
                            <button type="button" className="btn btn-primary"><strong>TEXT HERE</strong></button>	
                        </div>	
                    </div>
                    <h3 className="atom-sub-title"><strong>Floating Fill Button</strong></h3>
                    <p>
                        Using the floating button still floating when scrolling list to helping user have a quick  action when scrolling.
                    </p>
                    <div className="fazz-box-transparent button-usage-box text-center">
                        <button type="button" className="btn btn-primary" style={{ boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.2)' }}><strong>TEXT HERE</strong></button>	
                    </div>
                </div>
                <h2 className="article__title-menu">Line Button</h2>
                <p>
                    We use basic colors as subtle backgrounds to indicate various interactive states such as borders, inactive or disabled, or simply to create secondary attention towards a component. You'll find basic colors in buttons, text fields, and background.
                </p>
                <div className="indent-20">
                    <div className="fazz-box-transparent button-usage-box text-center">
                        <button type="button" className="btn btn-primary-ghost"><strong>TEXT HERE</strong></button>
                    </div>
                </div>
                <h2 className="article__title-menu">Text Button</h2>
                <p>
                    Text buttons are used when the user meets an action that contains medium priority and to differentiate nude button and filled button. Use for general actions and special cases. This button consists of two forms, button with container and button without container.
                </p>
                <div className="indent-20">
                    <div className="fazz-box-transparent button-usage-box text-center">
                        <button type="button" className="btn btn-text"><strong>TEXT HERE</strong></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Usage