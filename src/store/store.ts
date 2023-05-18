import {
	Middleware,
	applyMiddleware,
	compose,
	legacy_createStore,
} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
export type RootState = ReturnType<typeof rootReducer>;

export type ExtendedPersistConfig = PersistConfig<RootState> & {
	whitelist: (keyof RootState)[];
};
const persistConfig: ExtendedPersistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
	process.env.NODE_ENV !== 'production' && logger,
	sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));
const composeEnhancer =
	(process.env.NODE_ENV !== 'production' &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));
export const store = legacy_createStore(
	persistedReducer,
	undefined,
	composedEnhancers
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
