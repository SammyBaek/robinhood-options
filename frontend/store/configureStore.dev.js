import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxThunk from 'redux-thunk';

export function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(reduxThunk))
    );
}
