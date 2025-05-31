import axios from "axios";
import axiosErrorHandler from "@util/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index"; // to get Any state  you want 



const actPlaceOrders = createAsyncThunk("orders/actPlaceOrders", async (subtotal: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    // State => Cart to obtain Items from cart 
    // State => Auth to obtain UserId from auth 
    const { cart, auth } = getState() as RootState; 

    const orderItem = cart.productsFullInfo.map((item) => ({
        // Can make ...el to all but => we want specific properties mean => not want (max , Prefix)
        id: item.id,
        title: item.title,
        price: item.price,
        img: item.img,
        quantity: cart.items[item.id] // to determiened product in cart about specific user
    }))

    try {
        const res = await axios.post("/orders", {
            userId: auth.user?.id,
            items: orderItem,
            subtotal,
        })
        return res.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
})


export default actPlaceOrders;