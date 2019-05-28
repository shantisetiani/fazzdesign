import React, { Component } from 'react'

class Usage extends Component {
    render() {
        return (
            <div style={{ marginTop: '40px' }}>
                <p>
                    Button merupakan elemen yang digunakan sebagai simbol dari sebuah action yang akan terjadi apabila user berinteraksi dengan button tersebut. Button digunakan untuk menginisiasi sebuah action.
                </p>
                <h2 className="article__tittle-menu" style={{ marginTop: '40px', marginBottom: '17px' }}>Filled Button</h2>
                <p>
                    Filled buttons are used when the user meets an action that contains high priority. We use three types of a filled button: filled button with white panel container, floating filled button and custom filled button.
                </p>
                <div style={{ marginLeft: '20px' }}>
                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}><strong>Filled Button White Panel</strong></h3>
                    <p>
                        Filled button with white panel dipakai untuk kebutuhan high priority dan untuk button sendiri tidak memiliki shadow, dan harus fixed position.
                    </p>
                    <div className="fazz-box-gray text-center" style={{ width: '780px', height: '328px', padding: '96px 27px 96px 33px' }}>
                        <div className="fazz-box-white" style={{ width: '720px', height: '136px', padding: '24px 44px 24px 36px', boxShadow: '0 2px 8px 1px rgba(0, 0, 0, 0.1)' }}>
                            <button type="button" className="btn-primary fs-28" style={{ width: '640px', height: '88px' }}><strong>TEXT HERE</strong></button>
                        </div>
                    </div>
                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}><strong>Floating Fill Button</strong></h3>
                    <p>
                        Using the floating button still floating when scrolling list to helping user have a quick  action when scrolling.
                    </p>
                    <div className="fazz-box-gray text-center" style={{ width: '780px', height: '328px', padding: '96px 27px 96px 33px' }}>
                        <button type="button" className="btn-primary fs-28" style={{ width: '640px', height: '88px', boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.2)' }}><strong>TEXT HERE</strong></button>
                    </div>
                </div>
                <h2 className="article__tittle-menu" style={{ marginTop: '40px', marginBottom: '17px' }}>Line Button</h2>
                <p>
                    We use basic colors as subtle backgrounds to indicate various interactive states such as borders, inactive or disabled, or simply to create secondary attention towards a component. You'll find basic colors in buttons, text fields, and background.
                </p>
                <div style={{ marginLeft: '20px' }}>
                    <div className="fazz-box-gray text-center" style={{ width: '780px', height: '328px', padding: '96px 27px 96px 33px' }}>
                        <div className="fazz-box-white" style={{ width: '720px', height: '136px', padding: '24px 44px 24px 36px', boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.2)' }}>
                            <button type="button" className="btn-primary-ghost fs-28" style={{ width: '640px', height: '88px' }}><strong>TEXT HERE</strong></button>
                        </div>
                    </div>
                </div>
                <h2 className="article__tittle-menu" style={{ marginTop: '40px', marginBottom: '17px' }}>Text Button</h2>
                <p>
                    Text buttons are used when the user meets an action that contains medium priority and to differentiate nude button and filled button. Use for general actions and special cases. This button consists of two forms, button with container and button without container.
                </p>
                <div style={{ marginLeft: '20px' }}>
                    <div className="fazz-box-gray text-center" style={{ width: '780px', height: '328px', padding: '96px 27px 96px 33px' }}>
                        <div className="fazz-box-white" style={{ width: '720px', height: '136px', padding: '52px 0', boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.2)' }}>
                            <div className="fs-28" style={{ color: '#3b8ef3' }}><strong>TEXT HERE</strong></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Usage