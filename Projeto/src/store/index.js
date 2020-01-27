import { createStore, combineReducers } from 'redux'
import useReducer from './auth/reducer'

const reducers = combineReducers({
    usuario: useReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig