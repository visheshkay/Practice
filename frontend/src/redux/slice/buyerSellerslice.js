import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";


export const buyerSellerLoginThunk =createAsyncThunk('buyer-seller-login',async(userCredObj,thunkApi)=>{
    try{
    if (userCredObj.userType==='buyer'){

        const res=await axios.post('http://localhost:4000/buyer-api/login',userCredObj)
        if (res.data.message ==='login success'){
            localStorage.setItem('token',res.data.token)
            return res.data

        }else{
            return thunkApi.rejectWithValue(res.data.message)
        }
    }else{
        const res=await axios.post(" http://localhost:4000/seller-api/login",userCredObj)
        if (res.data.message === 'login success'){
            localStorage.setItem('token',res.data.token)
            return res.data

        }else{
            return thunkApi.rejectWithValue(res.data.message)
        }
    }
}catch(err){
        return thunkApi.rejectWithValue(err)
    }

})

export  const buyerSellerSlice=createSlice({
    name:"buyer-seller-login",
    initialState:{
        isPending:false,
        loginUserStatus:false,
        currentUser:{},
        errorOccured:false,
        errMsg:''
    },
    reducers:{
        resetState:(state,action)=>{
            state.isPending=false;
            state.loginUserStatus=false;
            state.currentUser={};
            state.errorOccured=false;
            state.errMsg=''
        }
    },
    extraReducers: (builder)=>builder
    .addCase(buyerSellerLoginThunk.pending,(state,action)=>{
        state.isPending=true;
    })
    .addCase(buyerSellerLoginThunk.fulfilled,(state,action)=>{
        state.isPending=false;
        state.currentUser=action.payload.user;
        state.loginUserStatus=true;
        state.errMsg='';
        state.errorOccured=false;
    })
    .addCase(buyerSellerLoginThunk.rejected,(state,action)=>{
        state.isPending=false;
        state.currentUser={};
        state.loginUserStatus=false;
        state.errMsg=action.payload;
        state.errorOccured=true;
    })

});

export const {resetState}=buyerSellerSlice.actions;

export default buyerSellerSlice.reducer;