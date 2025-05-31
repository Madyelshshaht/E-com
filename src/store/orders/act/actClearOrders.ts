import { TOrderItem } from "@customTypes/TOrderItem";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axiosErrorHandler from "@util/axiosErrorHandler";
import axios from "axios";


type TResponse = TOrderItem[];


const actClearOrders = createAsyncThunk("orders/actClearOrders", async ( _,thunkAPI) => {

    const { rejectWithValue, getState , signal } = thunkAPI;
    const { auth } = getState() as RootState;

    try {
        const res = await axios.get<TResponse>(`/orders?userId=${auth.user?.id} ` , {signal} );
        const orders =  res.data ;

        await Promise.all(orders.map(order => axios.delete(`/orders/${order.id}`)));
        return [];

    } catch (error) {
        rejectWithValue(axiosErrorHandler(error))
    }

})

export default actClearOrders;