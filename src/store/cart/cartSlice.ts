import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByItems from "./act/actGetProductsByItems";
import { GetCartTotlaQuantitySelector } from "./selector";
import { TProduct } from "@customTypes/product";
import { TLoading } from "@customTypes/Shared";
import { isString } from "@customTypes/guard"; // predicate 



interface ICartState {
    items: { [key: string]: number }; // index signature
    productsFullInfo: TProduct[];
    loading: TLoading;
    error: null | string;
}

const initialState: ICartState = {
    items: {},
    productsFullInfo: [],
    loading: "idle",
    error: null,

};

const Cartslice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            const id = action.payload;
            if (state.items[id]) {
                state.items[id]++;
            } else {
                state.items[id] = 1;
            }
        },
        cartItemChangeQuantity: (state, action) => {
            state.items[action.payload.id] = action.payload.quantity;
        },
        cartItemRemove: (state, action) => {
            delete state.items[action.payload]
            state.productsFullInfo = state.productsFullInfo.filter((el) => el.id != action.payload)
        },
        CleanCartproductsFullInfo: (state) => {
            state.productsFullInfo = [];
        },
        ClearCartAfterPlaceOrder: (state) => {
            state.items = {};
            state.productsFullInfo = [];
        }
    },

    extraReducers: (builder) => {
        builder.addCase(actGetProductsByItems.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetProductsByItems.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.productsFullInfo = action.payload;
        });
        builder.addCase(actGetProductsByItems.rejected, (state, action) => {
            state.loading = "failed";
            if (isString(action.payload)) {
                state.error = action.payload;
            }
        });
    }
});

export { GetCartTotlaQuantitySelector, actGetProductsByItems }
export const { addtoCart, cartItemChangeQuantity, cartItemRemove, CleanCartproductsFullInfo , ClearCartAfterPlaceOrder } = Cartslice.actions;
export default Cartslice.reducer;
