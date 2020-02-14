import gql from 'graphql-tag';

export const GET_BETS = gql`
    {
        bets {
            time,
            bet,
            name,
            game,
            profit,
            payout
        }
    }
`;

export const BET_ADDED = gql`
    subscription{
      betAdded{
        time,
        bet,
        name,
        game,
        profit,
        payout
      }
    }
`;

export const GET_MODAL_STATUS = gql`
    query showModal {
        showModal @client
    }
`;