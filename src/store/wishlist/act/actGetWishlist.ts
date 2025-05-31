import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@customTypes/product";
import { axiosErrorHandler } from "@util";
import { RootState } from "@store/index";


type TDataType = "productsFullInfo" | "ProductIds";
type TResponse = TProduct[];

const actGetWishlist = createAsyncThunk("wishlist/actGetWishlist", async (dateType: TDataType, thunkAPI) => {
    const { rejectWithValue, signal, getState } = thunkAPI

    const { auth } = getState() as RootState

    try {
        const userWishlist = await axios.get<{ productId: number }[]>(`/wishlist?userId=${auth.user?.id}`, { signal })
        console.log(userWishlist.data)
        if (!userWishlist.data.length) {
            return { data: [], dataType: "empty" };
        }

        if (dateType === "ProductIds") {
            const concatenatedItemsId = userWishlist.data.map(el => el.productId);
            return { data: concatenatedItemsId, dataType: "ProductIds" };
        } else {
            const concatenatedItemsId = userWishlist.data.map(el => `id=${el.productId}`).join("&")
            const response = await axios.get<TResponse>(`/products?${concatenatedItemsId}`)
            console.log("id" , response)
            return { data: response.data, dataType: "productsFullInfo" };
        }

    }
    catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
})

export default actGetWishlist;