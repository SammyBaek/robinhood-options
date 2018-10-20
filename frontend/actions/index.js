// Action Creators

import {LOGIN, SEARCHTICKER,GET_TABLE_INFO} from './types';

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

export const getTableInfo = (token, ticker, optionType, expirationDate) => async dispatch =>{
    const option_type =  optionType.toLowerCase()
    let params ={
        chain_symbol: ticker,
        type: option_type,
        state: "active",
        expiration_dates: expirationDate
    }
    const r = await axios.get("https://api.robinhood.com/options/instruments/",{params:params});
    const results = r.data.results.map(res=>({url: res.url, strikePrice: res.strike_price}));
    const instruments = results.map(res => res.url).reduce((comb, url) => {
        return comb + ',' + url
    }, '').substring(1);

    params = {
        instruments: instruments
    }
    const r2 = await axios.get("https://api.robinhood.com/marketdata/options/",{ headers: {"Authorization" : `Bearer ${token}`},params: params});
    const results2 = r2.data.results


    const payload = results.map(res =>  {
        return Object.assign({}, res, {cost: results2.find(r => r.instrument === res.url).adjusted_mark_price});
    });
    
    dispatch({type:GET_TABLE_INFO, payload: payload})
};
