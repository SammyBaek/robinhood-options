// Action Creators

import {LOGIN} from './types';

import axios from 'axios/index';

export const login = (uname, pword) => async dispatch => {
    console.log("found method");
    // axios.post('url', data);
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