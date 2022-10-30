import { combineReducers, createStore, applyMiddleware  } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import CartReducer from "./reducer/cartReducer"
import ReduxThunk from 'redux-thunk'
import auth from "./reducer/authReducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
    cart: CartReducer,
    auth
})
const persistConfig = {
    key: 'root',
    storage,
  }
const middleware = applyMiddleware(ReduxThunk)
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeWithDevTools(middleware))
export const persistor = persistStore(store)
export type AppState = ReturnType<typeof rootReducer>

export default store;