import {
    createStore,
    applyMiddleware
} from 'redux'
import {
    persistStore
} from 'redux-persist'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'

const middlewares = [thunk]

//uses logger only during development not production
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

// persistent storage for redux store
export const persistor = persistStore(store)

export default {
    store,
    persistor
}