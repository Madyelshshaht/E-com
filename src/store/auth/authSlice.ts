import { TLoading } from "@customTypes/Shared";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin" ;

import { createSlice } from "@reduxjs/toolkit"
import { isString } from "@customTypes/guard";


interface IAuthState {
    user: {
        id: number,
        firstName: string,
        lastName: string,
        email: string,
    } | null,
    accessToken: string | null;
    loading: TLoading;
    error: string | null;
}

const initialState: IAuthState = {
    user: null,
    accessToken: null,
    loading: "idle",
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetUI: (state) => {
            state.loading = "idle";
            state.error = null;
        },
        authlogout: (state) => {
            state.user = null;
            state.accessToken = null;
        }
    },
    extraReducers: (builder) => {
        //register 
        builder.addCase(actAuthRegister.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        builder.addCase(actAuthRegister.fulfilled, (state) => {
            state.loading = "succeeded"
        })
        builder.addCase(actAuthRegister.rejected, (state, action) => {
            state.loading = "failed";
            if (isString(action.payload)) {
                state.error = action.payload;
            }
        })


        //Login

        builder.addCase(actAuthLogin.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        builder.addCase(actAuthLogin.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        })
        builder.addCase(actAuthLogin.rejected, (state, action) => {
            state.loading = "failed";
            if (isString(action.payload)) {
                state.error = action.payload;
            }
        })

    },
})



export { actAuthRegister, actAuthLogin };
export const { resetUI, authlogout } = authSlice.actions
export default authSlice.reducer;