import { TCategory } from "@customTypes/category";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "@util";
import axios from "axios";


type TResponse = TCategory[];
// "_" underscore in asunc func replace the Payload 
const actGetCategories = createAsyncThunk("categories/actGetCategories", async (_, thunkAPI) => {
    const  {rejectWithValue , signal}  = thunkAPI;
    try {
        const response = await axios.get<TResponse>('/categories' , { signal, });  // The Fetch axios default library     || <TResponse> Name = Genric
        return response.data;
    }
    catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
});

export default actGetCategories;

