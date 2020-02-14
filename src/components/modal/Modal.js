import React, { Component } from 'react';

class Modal extends Component {

    constructor(props) {
        super(props);
        this.onCloseModal = this.onCloseModal.bind(this);
    }

    onCloseModal() {

        const client = this.props.client;

        client.writeData({
            data: {
                showModal: false
            }
        });

        document.body.classList.remove('modal-open');

    }

    render() {

        const enableModal = this.props.data;

        if(enableModal) {

            return (
                <div className="modal">
                    <div className="modal-bg" onClick={this.onCloseModal}></div>
                    <div className="modal-content">
                        <div className="modal-content-header">
                            <p className="title">Confirm</p>
                            <button className="close-btn" onClick={this.onCloseModal}></button>
                        </div>
                        <div className="modal-content-body">
                            <p>John draw real poor on call my from. May she mrs furnished discourse extremely. Ask doubt noisy shade guest did built her him. Ignorant repeated hastened it do. Consider bachelor he yourself expenses no. Her itself active giving for expect vulgar months. Discovery commanded fat mrs remaining son she principle middleton neglected. Be miss he in post sons held. No tried is defer do money scale rooms.</p>
                        </div>
                    </div>
                </div>
            )
        } else {

            return null;

        }

    }

}

export default Modal;