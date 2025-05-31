import axios from "axios";
import axiosErrorHandler from "@util/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";


type TFormData = {
    email: string,
    password: string
}

type TResponse = {
    accessToken: string ,
    user: {
        id: number;
        firstname: string;
        lastname: string;
        email: string;
    }
}



const actAuthLogin = createAsyncThunk(
    "auth/actAuthLogin",
    async (formData : TFormData , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {
            const res = await axios.post<TResponse>( "/login" , formData )
            console.log("login",res.data)
            return res.data
        } 
        catch (error) {
            return rejectWithValue (axiosErrorHandler(error));
        }
    }
)


export default actAuthLogin;