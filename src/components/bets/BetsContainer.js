import React, { Component } from 'react';
import { Query, Subscription } from 'react-apollo';
import {BET_ADDED, GET_BETS} from "../../service/constants";
import {BetsList} from "./BetsList";

class BetsContainer extends Component {

    render() {

        return(
            <div>
                <Query query={GET_BETS}>
                    {
                        ({ loading, error, data }) => {
                            if(loading) return <p>Loading</p>;
                            if(error) return <p>Error</p>;

                            return <BetsList data={data} />;
                        }
                    }
                </Query>
                <Subscription subscription={BET_ADDED}>
                    {({ data }) => {

                        console.log(data);
                        return null;

                    }}
                </Subscription>
            </div>
        )

    }

}

export default BetsContainer;