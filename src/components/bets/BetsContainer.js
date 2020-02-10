import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {GET_BETS} from "../../service/constants";
import {BetsList} from "./BetsList";

class BetsContainer extends Component {

    render() {

        return(
            <Query query={GET_BETS}>
                {
                    ({ loading, error, data }) => {
                        if(loading) return <p>Loading</p>;
                        if(error) return <p>Error</p>;

                        return <BetsList data={data} />;
                    }
                }
            </Query>
        )

    }

}

export default BetsContainer;