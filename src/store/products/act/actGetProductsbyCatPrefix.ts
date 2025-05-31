import { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "@util";
import axios from "axios";

type TResponse = TProduct[];

const actGetProductsbyCatPrefix = createAsyncThunk(
    "products/actGetProductsbyCatPrefix",
    async (prefix : string , thunKAPI) => {
        const { rejectWithValue , signal } = thunKAPI;
        try {
            const response = await axios.get<TResponse>(`/products?cat_prefix=${prefix}`, { signal, }); // <TResponse> Name = Genric identify the data type formate
            return response.data;
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
);

export default actGetProductsbyCatPrefix;
