// Action Creators

import * as types from './types';

import axios from 'axios/index';

export const login = (username, password) => async dispatch => {
    const res = await axios.get("https://api.robinhood.com/oauth2/token/&grant_type=password&client_id=c82SH0WZOsabOXGP2sxqcj34FxkvfnWRZBKlBjFS&username=" 
    + username + "&password=" + password);
    console.log(res);
    dispatch({ type: types.LOGIN, payload: res.data });
};