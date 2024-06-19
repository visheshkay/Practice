import { configureStore } from "@reduxjs/toolkit";
import buyerSellerReducer from "./slice/buyerSellerslice";



export const store=configureStore({
    reducer:{
        buyerSellerLoginReducer:buyerSellerReducer
    }
})