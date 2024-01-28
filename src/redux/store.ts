import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { IThemeState } from './reducers/theme';

export interface IState {
	theme: IThemeState;
}

export const store = () =>
	createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
	);

export const storeWrapper = createWrapper(store, {
	debug: false,
});
