import { applyMiddleware, compose, legacy_createStore } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlewares));
export const store = legacy_createStore(rootReducer, undefined, composedEnhancers);
