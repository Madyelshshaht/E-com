import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@util/axiosErrorHandler";
import { RootState } from "@store/index";


const actRemoveOrder = createAsyncThunk( "orders/actRemoveOrder", async( orderId:number ,thunkAPI) => {

    const {rejectWithValue , getState  , signal} = thunkAPI;
        const {auth } = getState() as RootState;

    try {
        const res  = await axios.delete(`/orders/${orderId}?userId=${auth.user?.id}` , {signal} )
        return res.data = orderId ;
    } catch (error) {
        rejectWithValue(axiosErrorHandler(error))
    }
})


export default actRemoveOrder;