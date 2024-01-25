import { configureStore } from "@reduxjs/toolkit";
import home_mensReducer from '../features/products/home_menSlice'
import home_womensReducer from '../features/products/home_womenSlice'


export const store = configureStore({
    reducer: {
        home_mens: home_mensReducer,
        home_womens: home_womensReducer
        
    }
})

