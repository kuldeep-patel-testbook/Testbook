/*import {createStore} from 'redux';
import rootReducer from './Reducers/Index';
const store  = createStore(rootReducer);
export default store;*/


import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './ReduxToolKit/CounterSlice';
export default configureStore({
    reducer: {
        counter: counterReducer
    }
})