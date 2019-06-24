import React, { Component } from 'react'

class Usage extends Component {
    render() {
        return (
            <div style={{ marginTop: '40px' }}>
                <p>
                    Inputs are elements used to help the user input data. They have a progress bar when the user is required to fill in more than three inputs.
                </p>
                <h2 className="article__title-menu" style={{ marginTop: '20px', marginBottom: '17px' }}>Hinted input</h2>
                <p>
                    Hinted inputs are input that uses a label at the top of page.
                </p>
                <div style={{ marginLeft: '20px' }}>
                    <div className="fazz-box-gray input-usage__box-gray text-center">
                        <div className="fs-28 fw-500">TEXT HERE</div>
                        <div><input type="text" placeholder="08112121212" className="input-usage__input text-center" style={{ width: '379px', height: '71px', fontSize: '60px' }} /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Usage