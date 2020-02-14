import React, { Component } from 'react';
import { Query, Subscription } from 'react-apollo';
import {BET_ADDED, GET_BETS} from "../../service/constants";
import {BetsList} from "./BetsList";

let unsubscribe = null;

class BetsContainer extends Component {

    render() {

        return(
            <div>
                <Query query={GET_BETS}>
                    {
                        ({ loading, error, data, subscribeToMore }) => {
                            if(loading) return <p>Loading</p>;
                            if(error) return <p>Error</p>;

                            if (!unsubscribe) {
                                unsubscribe = subscribeToMore({
                                    document: BET_ADDED,
                                    updateQuery: (prev, { subscriptionData }) => {
                                        if (!subscriptionData.data) return prev;
                                        const { betAdded } = subscriptionData.data;
                                        console.log({ ...prev, bets: [...prev.bets, betAdded] });
                                        return { ...prev, bets: [...prev.bets, betAdded] }
                                    }
                                });
                            }

                            return <BetsList data={data} />;

                        }
                    }
                </Query>
                {/*<Subscription subscription={BET_ADDED}>*/}
                {/*    {({ loading, error, data }) => {*/}
                {/*        if(loading) return <p>Loading</p>;*/}
                {/*        if(error) return <p>Error</p>;*/}

                {/*        console.log(data.betAdded);*/}

                {/*        // const subscribeBets = { ...prev, bets: [...prev.bets, betAdded] }*/}

                {/*        return <p>{ !data ? 'wait..' : data.betAdded.name }</p>;*/}

                {/*    }}*/}
                {/*</Subscription>*/}
            </div>
        )

    }

}

export default BetsContainer;