import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@util/axiosErrorHandler";

type TFormData = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}


const actAuthRegister = createAsyncThunk(
    "auth/actAuthRegister",
    async(formData : TFormData , thunk) => {
        const {rejectWithValue} = thunk;
        try{
            // const res = await axios.post("https://json-server-auth-vercel.vercel.app/register" , formData)
            const res = await axios.post("/register" , formData)
            console.log("Register",res.data);
            return res.data;
        }catch(error) { 
            return rejectWithValue (axiosErrorHandler(error))
        }
    }
)

export default actAuthRegister;