import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "@util";
import { RootState } from "@store/index";
import { TProduct } from "@customTypes/product";


type Tresponse = TProduct[];


const actGetProductsByItems = createAsyncThunk(
    "cart/actGetProductsByItems",
    async (_, thunkAPI) => {
        const { rejectWithValue, fulfillWithValue , getState , signal } = thunkAPI
        const { cart } = getState() as RootState;
        const itemID = Object.keys(cart.items);


        if(!itemID.length){
            return fulfillWithValue([]);
        }

        try {
            const concatenatedItemsId = itemID.map((el) => `id=${el}`).join("&");
            console.log(`Concatenated ${concatenatedItemsId}`);
            
            const response = await axios.get<Tresponse>(`/products?${concatenatedItemsId}`, {signal})
            console.log("products",response)
            return response.data;
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }

    }
);

export default actGetProductsByItems;


