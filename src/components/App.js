import React, { Component } from 'react';
import Svg from "./svg/Svg";
import BetsContainer from "./bets/BetsContainer";
import SliderContainer from "./slider/Slider";
import Input from "./input/Input";
import Modal from "./modal/Modal";
import { Query, ApolloConsumer } from 'react-apollo';
import {GET_MODAL_STATUS} from "../service/constants";

class App extends Component{

    render() {

        return(
            <div id="wrapper">
                <div className="page">
                    <div className="page-header">
                        <div className="page-header-btn"></div>
                    </div>
                    <div className="page-columns">
                        <div className="page-columns-item">
                            <div className="content">
                                <SliderContainer />
                                <Input />
                            </div>
                        </div>
                        <div className="page-columns-item">
                            <div className="content">
                                <BetsContainer />
                            </div>
                        </div>
                        <div className="page-columns-item">
                            <div className="content">
                                <ApolloConsumer>
                                    { client => <Svg client={client} /> }
                                </ApolloConsumer>
                            </div>
                        </div>
                    </div>
                </div>
                <Query query={GET_MODAL_STATUS}>
                    {({ loading, error, data }) => {

                        if(loading) return null;
                        if(error) return null;

                        return <ApolloConsumer>{ client => <Modal data={data.showModal} client={client} /> }</ApolloConsumer>

                    }}
                </Query>
            </div>
        )

    }

}

export default App;