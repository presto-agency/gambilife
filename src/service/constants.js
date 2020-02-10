import gql from 'graphql-tag';

export const GET_BETS = gql`
    {
        bets {
            time
            bet
            name
            game
            profit
            payout
         }
    }
`;

export const GET_MODAL_STATUS = gql`
    query showModal {
        showModal @client
    }
`;