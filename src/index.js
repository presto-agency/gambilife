import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import './styles.scss';
import { ApolloClient, HttpLink, InMemoryCache, split } from 'apollo-boost';
import { WebSocketLink } from "apollo-link-ws";
import { ApolloProvider } from 'react-apollo';
import { SubscriptionClient } from "subscriptions-transport-ws";
import { getMainDefinition } from "apollo-utilities";

const defaultState = {
    showModal: false
};

const httpLink = new HttpLink({
    uri: 'http://gambilife.com/graphql'
});

const wsLink = new WebSocketLink({
    uri: 'ws://gambilife.com/graphql',
    options: {
        reconnect: true
    }
});

const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === "OperationDefinition" && operation === "subscription";
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({ link, cache: new InMemoryCache() });

// const client = new ApolloClient({
//     uri: 'http://gambilife.com/graphql',
//     clientState: {
//         defaults: defaultState,
//         resolvers: {}
//     }
// });

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('app'));