import { createStore, applyMiddleware, compose, Store, AnyAction } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createRootReducer from './reducers';

export type RootState = ReturnType<typeof createRootReducer>;

const initialState = {} as RootState;

const middleware = [thunkMiddleware];

// Redux DevTools setup
const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleware));

const store: Store<RootState, AnyAction> = createStore(
  createRootReducer(),
  initialState,
  composedEnhancers,
);

export default store;
