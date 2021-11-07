import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/modal.css'

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flag: false,
        }
    }

    handleOpen(e) {
        e.preventDefault();
        this.setState({
            flag: true,
        })
    }

    handleClose(e) {
        e.preventDefault();
        this.setState({
            flag: false,
        })
    }

    render() {
        if (!this.state.flag) {
            return <button onClick={(e)=>this.handleOpen(e)}>
                        Show Modal
                    </button>
        }

        return (
            <div className='modal'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h4>This is the header</h4>
                    </div>
                    <div className='modal-body'>
                        This is the body
                    </div>
                    <div className='modal-footer'>
                        <button 
                        className='button'
                        onClick={(e)=>this.handleClose(e)}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Modal);