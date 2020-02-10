import React, { Component } from 'react';
import image from '../../images/main.svg';
import imageTop from '../../images/main-top.svg'

class Svg extends Component{

    constructor(props) {
        super(props);
        this.onShowModal = this.onShowModal.bind(this);
    }

    onShowModal() {

        const { client } = this.props;

        client.writeData({
           data: {
               showModal: true
           }
        });

        document.body.classList.add('modal-open');

    };

    render() {

        return (
            <div className="svg-container" onClick={this.onShowModal}>
                <img src={image} className="svg-container-image" alt="" />
                <img src={imageTop} className="svg-container-image __top" alt="" />
            </div>
        )

    }

}

export default Svg;