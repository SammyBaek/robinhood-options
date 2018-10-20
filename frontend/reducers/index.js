import {LOGIN} from '../actions/types';

function rootReducer(state = {tiker: '', token: '', }, action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign(state, {token: action.payload["access_token"]});
        default:
            return state;
    }
}

export default rootReducer;
