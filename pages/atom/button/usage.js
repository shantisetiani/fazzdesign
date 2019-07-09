import React, { Component } from 'react'

class Usage extends Component {
    render() {
        return (
            <div style={{ marginTop: '40px' }}>
                <p>
                    Button merupakan elemen yang digunakan sebagai simbol dari sebuah action yang akan terjadi apabila user berinteraksi dengan button tersebut. Button digunakan untuk menginisiasi sebuah action.
                </p>
                <h2 className="article__title-menu" style={{ marginTop: '40px', marginBottom: '17px' }}>Filled Button</h2>
                <p>
                    Filled buttons are used when the user meets an action that contains high priority. We use three types of a filled button: filled button with white panel container, floating filled button and custom filled button.
                </p>
                <div style={{ marginLeft: '20px' }}>
                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}><strong>Filled Button White Panel</strong></h3>
                    <p>
                        Filled button with white panel dipakai untuk kebutuhan high priority dan untuk button sendiri tidak memiliki shadow, dan harus fixed position.
                    </p>
                    {/* <img src="/static/images/button/usage/fill-white-panel-big@2x.png" className="article__img--wide" /> */}
                    <div className="fazz-box-gray button-usage-box--outer text-center">
                        <div className="button-box--white">	
                            <button type="button" className="btn btn-primary"><strong>TEXT HERE</strong></button>	
                        </div>	
                    </div>
                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}><strong>Floating Fill Button</strong></h3>
                    <p>
                        Using the floating button still floating when scrolling list to helping user have a quick  action when scrolling.
                    </p>
                    {/* <img src="/static/images/button/usage/floating-fill-button-big@2x.png" className="article__img--wide" /> */}
                    <div className="fazz-box-gray button-usage-box text-center">
                        <button type="button" className="btn btn-primary" style={{ boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.2)' }}><strong>TEXT HERE</strong></button>	
                    </div>
                </div>
                <h2 className="article__title-menu" style={{ marginTop: '40px', marginBottom: '17px' }}>Line Button</h2>
                <p>
                    We use basic colors as subtle backgrounds to indicate various interactive states such as borders, inactive or disabled, or simply to create secondary attention towards a component. You'll find basic colors in buttons, text fields, and background.
                </p>
                <div style={{ marginLeft: '20px' }}>
                    {/* <img src="/static/images/button/usage/line-button-big@2x.png" className="article__img--wide" /> */}
                    <div className="fazz-box-gray button-usage-box--outer text-center">
                        <button type="button" className="btn btn-primary-ghost"><strong>TEXT HERE</strong></button>
                    </div>
                </div>
                <h2 className="article__title-menu" style={{ marginTop: '40px', marginBottom: '17px' }}>Text Button</h2>
                <p>
                    Text buttons are used when the user meets an action that contains medium priority and to differentiate nude button and filled button. Use for general actions and special cases. This button consists of two forms, button with container and button without container.
                </p>
                <div style={{ marginLeft: '20px' }}>
                    {/* <img src="/static/images/button/usage/text-button-big@2x.png" className="article__img--wide" /> */}
                    <div className="fazz-box-gray button-usage-box--outer text-center">
                        <button type="button" className="btn btn-text"><strong>TEXT HERE</strong></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Usage