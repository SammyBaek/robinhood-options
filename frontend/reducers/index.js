import {LOGIN, SEARCHTICKER, GET_TABLE_INFO } from '../actions/types';

function rootReducer(state = {
    ticker: 'RBHD',
    token: '',
    dates: [],
    stockPrice: '1000000.00',
    optionsInst: []
}, action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {token: action.payload.access_token});
        case SEARCHTICKER:
            const { ticker, dates, stockPrice } = action.payload;
            return Object.assign({}, state, { ticker, dates, stockPrice });
        case GET_TABLE_INFO:
            return Object.assign({}, state, { optionsInst: action.payload });
        default:
            return state;
    }
}

export default rootReducer;
