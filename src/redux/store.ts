import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import { IThemeState } from './reducers/theme';
import { rootReducer } from './reducers';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

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
