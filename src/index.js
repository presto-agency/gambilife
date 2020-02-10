import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import './styles.scss';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const defaultState = {
    showModal: false
};

const client = new ApolloClient({
    uri: 'http://gambilife.com/graphql',
    clientState: {
        defaults: defaultState,
        resolvers: {}
    }
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('app'));