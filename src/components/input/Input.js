import React, { Component } from 'react';
import bitcoin from "../../images/bitcoin.svg";

class Input extends Component {

    state = {
        amount: '0.04885313'
    };

    onChangeValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {

        const { amount } = this.state;

        return(
            <div className="input">
              <div className="input-container">
                  <input type="number" name="amount" className="input-item" value={amount} onChange={this.onChangeValue} />
                  <img src={bitcoin} className="bitcoin" alt="Bitcoin" />
                  <span className="input-container-label">Bet Amount</span>
              </div>
              <div className="input-btns">
                  <button className="input-btns-item">1/2</button>
                  <button className="input-btns-item">x2</button>
              </div>
            </div>
        )

    }

}

export default Input;