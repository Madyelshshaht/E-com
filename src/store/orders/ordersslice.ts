import { TOrderItem } from "@customTypes/TOrderItem";
import { TLoading } from "@customTypes/Shared";
import { createSlice } from "@reduxjs/toolkit";

import actPlaceOrders from "./act/actPlaceOrders";
import actGetOrders from "./act/actGetOrders";
import actRemoveOrder from "./act/actRemoveOrder";
import actClearOrders from "./act/actClearOrders";

import { isString } from "@customTypes/guard";

interface IOrderSlice {
    loading: TLoading,
    error: string | null
    OrderList: TOrderItem[]; // array of Object
}
const initialState: IOrderSlice = {
    OrderList: [],
    loading: "idle",
    error: null,
}

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        resetOrderstatus: (state) => {
            state.loading = "idle";
            state.error = null;
        },
        RemoveOrder : (state , action) => {
            state.OrderList = state.OrderList.filter((item) => item.id!== action.payload);
        }
    },
    extraReducers: (builder) => {

        // Place Order
        builder.addCase(actPlaceOrders.pending, state => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actPlaceOrders.fulfilled, state => {
            state.loading = "succeeded";
        });
        builder.addCase(actPlaceOrders.rejected, (state, action) => {
            state.loading = "failed";
            if (isString(action.payload)) {
                state.error = action.payload;
            }
        })

        // Get Orders
        builder.addCase(actGetOrders.pending, state => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetOrders.fulfilled, (state, action) => {
            state.loading = "succeeded";
            action.payload ? state.OrderList = action.payload : state.OrderList = [];
        });
        builder.addCase(actGetOrders.rejected, (state, action) => {
            state.loading = "failed";
            if (isString(action.payload)) {
                state.error = action.payload;
            }
        })

        // Delete Order Cases
        builder.addCase(actRemoveOrder.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actRemoveOrder.fulfilled, (state , action) => {
            state.loading = "succeeded";
            state.OrderList = state.OrderList.filter(order => order.id !== action.payload);
        });
        builder.addCase(actRemoveOrder.rejected, (state, action) => {
            state.loading = "failed";
            if (isString(action.payload)) {
                state.error = action.payload;
            }
        });

        // Clear Orders Cases
        builder.addCase(actClearOrders.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actClearOrders.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.OrderList = action.payload || [];
        });
        builder.addCase(actClearOrders.rejected, (state, action) => {
            state.loading = "failed";
            if (isString(action.payload)) {
                state.error = action.payload;
            }
        });
    }
});

export { actPlaceOrders, actGetOrders , actRemoveOrder , actClearOrders };
export const { resetOrderstatus } = ordersSlice.actions
export default ordersSlice.reducer;