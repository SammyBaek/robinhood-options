// Action Creators

import {LOGIN, SEARCHTICKER} from './types';

import axios from 'axios/index';

export const login = (uname, pword) => async dispatch => {

    const data = {
        username: uname,
        password: pword,
        grant_type: "password",
        client_id: "c82SH0WZOsabOXGP2sxqcj34FxkvfnWRZBKlBjFS"
    };
    const headers = {
        "Access-Control-Allow-Origin": "*",
    };
    const res = await axios.post("https://api.robinhood.com/oauth2/token/", data);
    console.log(res.data);
    
    dispatch({ type: LOGIN, payload: res.data });
    
};

export const searchTicker = (ticker) => async dispatch=> {
    console.log("found method");
    const params = {
        chain_symbol: ticker,
    };
    const r = await axios.get("https://api.robinhood.com/options/instruments/", {params: params});
    const chain_id = r.data.results[0].chain_id;
    const params2 = {
        ids: chain_id
    };
    const datesr = await axios.get("https://api.robinhood.com/options/chains/", {params: params2});
    const expirationDates = datesr.data.results[0].expiration_dates;

    const pricer = await axios.get("https://api.robinhood.com/quotes/" + ticker+'/');
    const stockPrice = pricer.data.last_traded_price;
    const payload = {
        ticker: ticker,
        dates: expirationDates,
        stockPrice: stockPrice
    };
    dispatch({type: SEARCHTICKER, payload: payload});
};

